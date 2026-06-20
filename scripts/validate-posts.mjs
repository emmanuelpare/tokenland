#!/usr/bin/env node
// Garde-fou : valide chaque article AVANT le build Next.js.
// Échoue avec un message clair si un .md a un frontmatter cassé
// ou du contenu JSON-échappé (\n / \" littéraux écrits par erreur par un agent).
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");
const REQUIRED = ["title", "date", "excerpt", "tags", "author"];

if (!fs.existsSync(POSTS_DIR)) {
  console.log("validate-posts: aucun dossier content/blog, rien à valider.");
  process.exit(0);
}

const files = fs.readdirSync(POSTS_DIR).filter((f) => /\.mdx?$/.test(f));
const errors = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");

  // 1) Détecte un contenu JSON-échappé : un agent a écrit \n / \" littéraux.
  //    Heuristique : le fichier tient sur très peu de lignes mais contient
  //    beaucoup de séquences \n littérales.
  const literalNewlines = (raw.match(/\\n/g) || []).length;
  const realLines = raw.split("\n").length;
  if (literalNewlines >= 5 && realLines < literalNewlines / 2) {
    errors.push(
      `${file}: contenu JSON-échappé détecté (${literalNewlines} "\\n" littéraux sur ${realLines} lignes réelles). ` +
        `L'article doit contenir de VRAIS sauts de ligne, pas une chaîne échappée.`
    );
    continue; // frontmatter forcément cassé aussi, on n'en rajoute pas
  }

  // 2) Le frontmatter doit parser et contenir les champs requis.
  let data;
  try {
    ({ data } = matter(raw));
  } catch (e) {
    errors.push(`${file}: frontmatter YAML invalide — ${e.message.split("\n")[0]}`);
    continue;
  }

  for (const key of REQUIRED) {
    if (data[key] === undefined || data[key] === null || data[key] === "") {
      errors.push(`${file}: champ frontmatter manquant ou vide : "${key}"`);
    }
  }

  // 3) Cohérence basique des types.
  if (data.tags !== undefined && !Array.isArray(data.tags)) {
    errors.push(`${file}: "tags" doit être un tableau YAML, ex: ["a", "b"]`);
  }
  if (data.date !== undefined && isNaN(new Date(data.date).getTime())) {
    errors.push(`${file}: "date" invalide : ${JSON.stringify(data.date)} (attendu "AAAA-MM-JJ")`);
  }
}

if (errors.length) {
  console.error("\n❌ validate-posts a trouvé des articles invalides :\n");
  for (const e of errors) console.error("  • " + e);
  console.error("\nCorrige ces fichiers avant de builder/déployer.\n");
  process.exit(1);
}

console.log(`validate-posts: ${files.length} article(s) OK ✓`);
