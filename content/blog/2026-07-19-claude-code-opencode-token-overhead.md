---
title: "Claude Code vs OpenCode : Analyse de l'overhead en tokens pour les agents de codage"
date: "2026-07-19"
description: "Une étude récente montre que Claude Code consomme nettement plus de tokens qu'OpenCode avant même de lire le prompt utilisateur, avec des implications importantes pour le coût et les performances des agents de codage en production."
---

# Claude Code vs OpenCode : Analyse de l'overhead en tokens pour les agents de codage

## Identification de la tendance

Le 12 juillet 2026, Systima a publié une analyse détaillée comparant l'overhead en tokens de deux agents de codage populaires : Claude Code (d'Anthropic) et OpenCode (open-source). L'article, qui a rapidement gagné en traction sur Hacker News (704 points), révèle que Claude Code utilise environ **33 000 tokens** de blocs système, de schémas d'outils et de scaffolding avant même de lire le prompt de l'utilisateur, tandis qu'OpenCode n'en utilise qu'environ **7 000 tokens**.

Cette différence substantielle soulève des questions importantes pour les développeurs qui envisagent d'utiliser ces agents en production, notamment concernant les coûts d'inférence, la latence et la conformité avec des réglementations comme l'UE AI Act (Article 12) qui exige de tracer et comprendre le comportement des systèmes d'IA.

## Explication technique

L'étude de Systima repose sur une méthodologie rigoureuse : un proxy de journalisation intercepte les requêtes entre chaque harness et le point de terminaison du modèle, capturant à la fois le payload exact envoyé et le bloc d'utilisation retourné par l'API. Les tests ont été effectués avec les deux harnesses pinçés sur `claude-sonnet-4-5` (juillet 2026), puis répliqués sur `claude-fable-5` pour vérifier la robustesse des résultats.

### Le plancher (« The Floor »)

Pour une tâche simple répondant « OK » (22 caractères) :
- **Claude Code** : Envoie environ 32 800 tokens (27 344 chars de prompt système en 3 blocs, 99 778 chars de schémas d'outils pour 27 outils, et 7 997 chars de scaffolding de premier message).
- **OpenCode** : Envoie environ 6 900 tokens (9 324 chars de prompt système en 1 bloc, 20 856 chars de schémas d'outils pour 10 outils, aucun scaffolding de premier message).

Même sans outils activés, le prompt système de Claude Code (26 891 chars, ~6,5k tokens) reste plus de trois fois plus grand que celui d'OpenCode (8 811 chars, ~2,0k tokens), la différence étant attribuée à la « doctrine comportementale » (règles de ton, consignes de sécurité, gestion de tâches, description de l'environnement).

### Inefficacité du cache

Un aspect particulièrement frappant est la différence dans l'utilisation du cache de prompt :
- Le préfixe de requête d'OpenCode est identique byte-à-byte à chaque exécution, permettant une mise en cache efficace (une écriture par session, puis lectures peu coûteuses).
- Claude Code, en revanche, réécrit des dizaines de milliers de tokens de cache de prompt milieu de session, exécutant jusqu'à **54 fois plus d'écritures de cache** qu'OpenCode pour la même tâche. Comme les écritures de cache sont facturées à un taux prime (1,25x pour le niveau 5 minutes, 2x pour le niveau 1 heure), cela contribue fortement à l'augmentation observée du tableau de bord d'utilisation lorsqu'on utilise Claude Code.

### Effets multiplicateurs

L'étude examine ensuite comment divers facteurs de configuration amplifient cette différence de base :

1. **Fichier d'instruction** : L'ajout d'un fichier `AGENTS.md` ou `CLAUDE.md` de 72 Ko provenant d'un dépôt réel ajoute environ 20 000 tokens par requête pour les deux harnesses. Cependant, Claude Code 2.1.207 ignore ce fichier sauf s'il est renommé en `CLAUDE.md`, tandis qu'OpenCode lit les deux noms de fichier. Un fichier d'instruction lourd quasi-quadruple donc la base d'un harness sobre, affectant chaque requête de la session.

2. **Serveurs MCP** : L'attachement de serveurs MCP (credential-free) ajoute une taxe relativement uniforme : environnante similaire pour les deux harnesses (environ 1 000 à 1 400 tokens par petit serveur par requête). Cinq serveurs ajoutent 4 900 tokens à Claude Code par payload et 6 967 mesurés à OpenCode, faisant passer les comptes d'outils de 27 à 69 et de 10 à 52 respectivement.

3. **Modèles de workflow** : Des modèles tels que BMAD, lorsqu'ils sont utilisés comme prompt pour une tâche, sont ré-envoyés à chaque requête suivante dans la session. Une session de 9 requêtes ré-envoie donc le modèle 9 fois, ajoutant une taxe qui s'accumule par-dessus tout le reste.

4. **Sous-agents** : C'est ici que les coûts grimpent le plus rapidement. Lorsque le travail est réparti entre deux sous-agents parallèles :
   - Claude Code effectue la tâche avec 9 requêtes de modèle réparties sur trois classes de requêtes. La session principale maintient sa base complète d'environ 33k, tandis que cinq appels de sous-agents apportent chacun leur propre bootstrap (un prompt système d'agent de 3 554 chars plus 24 des 27 outils). Le total d'entrée métabolique cumulé atteint **513 000 tokens**, contre seulement 121 000 pour le même travail effectué directement — un multiplicateur de 4,2x pour un modeste répartage. Le parent n'ingère que le résultat retourné de chaque sous-agent, mais le coût vient du fait que chaque sous-agent est un nouvel agent qui relit son propre bootstrap à chaque tour qu'il effectue.
   - OpenCode utilise une conception notablement plus sobre pour ses sous-agents (un prompt système de 1 379 chars et 5 outils), bien que sa voie de sous-agent n'ait pas abouti proprement à travers la passerelle de mesure, donc ses totaux restent non quantifiés dans l'étude.

5. **Pensée étendue** : Bien que les auteurs aient tenté de basculer la pensée étendue dans les deux harnesses, ils ont choisi de ne pas publier de chiffres car leur propre mécanisme de passerelle applique sa propre politique de pensée, rendant les résultats des harnesses peu fiables. Néanmoins, le mécanisme est reconnu : sur des travaux nécessitant du raisonnement, les blocs de pensée s'ajoutent à l'historique qui est ré-envoyé, composant avec chaque multiplicateur ci-dessus.

### Le « nombre tout-en-un »

Dans une configuration de travail réelle (onze serveurs MCP couvrant email, calendrier, gestion de tâches, référence gestion, analyses de produit, etc., plus le fichier d'instruction de 72 Ko), la première requête d'OpenCode a mesuré **90 817 tokens** lors d'une écriture à cache froid, transportant 179 outils et 277 Ko de schémas avant que l'utilisateur n'ait tapé un mot.

Pour Claude Code dans une configuration comparable (quatre serveurs MCP plus plugins installés et le même fichier d'instruction), la première requête a produit un payload de 311 Ko d'environ **75 000 tokens** avec 118 outils. Après soustraction de l'enveloppe de la passerelle (mesurée à environ 6 200 tokens sur le chemin Sonnet), cela représente environ un **multiplicateur de configuration de 12x** par rapport au sol d'OpenCode d'environ 7 000 tokens.

### Économie du cache

Bien que la mise en cache modifie les unités, elle ne change pas les conclusions fondamentales :
- Les deux harnesses définissent correctement les points de rupture de cache. La charge utile est écrite une fois, avec une prime de 1,25x pour la TTL de 5 minutes, et relue à un dixième du prix par la suite.
- Trois coûts survivent à la remise : (1) l'écriture elle-même, re-payée chaque fois qu'une pause dépasse la TTL ; (2) la lecture multipliée par le nombre de requêtes, ce qui gonfle rapidement avec les boucles en série d'outils et les répartages de sous-agents ; (3) la consommation de la fenêtre de contexte, complètement immune à la mise en cache. Un bootstrap de 85k tokens occupe plus de 40 % d'une fenêtre de 200k à chaque requête, réduisant l'espace disponible pour le code réel avant le compactage et nécessitant encore plus de tokens pour résumer.

La stabilité du cache apparaît comme la différence décisive : OpenCode émet des préfixes identiques byte-à-byte à chaque requête et exécution, entraînant zéro token d'écriture de cache dans les sessions répétées. Claude Code émet trois classes de requêtes distinctes par session (échauffement, conversation principale, appels de sous-agents), chacune avec son propre préfixe et donc son propre entrée de cache, avec des octets de système et un scaffolding de premier message qui varient entre les exécutions. Cette instabilité du préfixe signifie que Claude Code réécrit fréquemment son préfixe de cache milieu de session, entraînant des volumes d'écriture de cache qui varient de 5,9x à 54x ceux d'OpenCode selon la température du cache.

### Qualité

Les auteurs reconnaissent qu'une facture plus élevée pourrait être justifiée si la qualité de la sortie était supérieure. Cependant, les tâches choisies dans l'étude (un-liner, résumé de fichier, boucle write-run-test-fix contre FizzBuzz) ont été sélectionnées précisément parce que la qualité ne pouvait pas expliquer la différence : les deux harnesses ont complété chaque tâche scorée correctement, et les résumés de fichiers étaient précis. Sur ces tâches, l'écart en tokens représente donc exactement la différence de coût pour un résultat identique.

Une mesure séparée de référence (dix voies, cinq exécutions chacune contre un ensemble de test vérifié par hachage) a montré un coût métabolique moyen par exécution réussie d'environ **268 000 tokens d'entrée** pour Claude Code et **72 000 pour OpenCode** — environ 3,7x — avec les deux harnesses desservant le même instantané de modèle. OpenCode a également terminé chaque voie en une à deux minutes, contre quatre à huit minutes pour Claude Code.

## Pourquoi c'est important

Pour les développeurs et les équipes techniques qui envisagent d'intégrer des agents de codage dans leurs flux de travail, cette analyse fournit des données critiques pour la prise de décision :

1. **Estimation des coûts** : L'overhead en tokens se traduit directement par des coûts d'inférence plus élevés. Dans une configuration de travail réelle, même avant que l'utilisateur ne tape quoi que ce soit, Claude Code consomme plus de dix fois les tokens d'OpenCode. À l'échelle, cela peut représenter des différences substantielles dans la facture mensuelle d'API.

2. **Performance et latence** : Bien que non mesuré directement dans l'étude, le traitement de payloads considérablement plus grands implique probablement une latence plus élevée, en particulier sur des connexions réseau moins idéales. La consommation de la fenêtre de contexte signifie également que moins de tokens sont disponibles pour le code réel de l'utilisateur avant que le compactage ne s'enclenche, pouvant limiter la complexité des tâches pouvant être traitées en une seule requête.

3. **Conformité réglementaire** : Sous l'UE AI Act, l'Article 12 exige des journaux structurés permettant de retracer exactement ce qui a été envoyé et retourné par le système d'IA. La méthodologie de journalisation de Systima (utilisant leur bibliothèque open-source `@systima/aiact-audit-log`) fournit un mécanisme pour atteindre cette conformité, indépendamment du harness choisi.

4. **Choix éclairé entre harnesses** : Le choix entre Claude Code et OpenCode ne doit pas être basé uniquement sur les fonctionnalités brutes. Claude Code offre une plateforme plus riche avec des outils intégrés (background agent, orchestration suite, gestion de worktree, notifications push) et des capacités comme le traitement parallèle des outils et la batching agressif qui peuvent réduire le nombre de requêtes pour certaines tâches. OpenCode offre une base plus sobre et prévisible avec une meilleure efficacité de cache et une consommation inférieure de tokens de base. La tâche multi-étape de l'étude a montré que les avantages de batching de Claude Code pouvaient parfois surmonter son désavantage de base, mais cet avantage dépendait du modèle et du comportement du harness.

5. **Impact de la configuration** : L'étude souligne que les choix de configuration (fichiers d'instruction, serveurs MCP, modèles de workflow, utilisation de sous-agents) ont un impact profond et souvent sous-estimé sur la consommation de tokens. Les équipes devraient auditer leur configuration réelle et mesurer l'overhead en frontière API plutôt que de supposer que les chiffres de base s'appliquent.

## Verdict

Claude Code est sans aucun doute un agent de codage plus fonctionnel et plus orienté plateforme, avec un arrière-plan riche en compétences, un orchestration de sous-agents et une intégration d'outils étendue. Cependant, cette fonctionnalité vient avec un coût en tokens substantiel qui peut être un facteur décisif selon le cas d'utilisation :

- **Choisissez Claude Code si** : vous avez besoin de ses fonctionnalités avancées (orchestration de sous-agents, compétences intégrées, gestion de worktree, notifications push) et que votre charge de travail bénéficie de son traitement parallèle des outils et de son batching agressif. Soyez prêt à surveiller étroitement les coûts et à optimiser votre configuration pour minimiser l'overhead inutile (par exemple, en nommé les fichiers d'instruction correctement, en limitant le nombre de serveurs MCP, et en évitant les répartages excessifs modèles de workflow).

- **Choisissez OpenCode si** : votre priorité est la prévisibilité, l'efficacité des tokens et un moindre coût d'inférence. Son approche sobre entraîne une base plus basse, une excellente stabilité de cache et une consommation plus linéaire des ressources. C'est particulièrement adapté aux environnements où les coûts d'API sont étroitement surveillés ou où la simplicité de la configuration est valorisée.

En fin de compte, la décision devrait être guidée par une mesure empirique dans votre propre contexte spécifique. Comme le montre l'étude, l'écart en tokens est fortement dépendant du modèle (l'écart est passé de 4,7x sur Sonnet à 3,3x sur Fable) et de la configuration. La méthodologie de mesure ouverte source de Systima fournit un point de départ pour effectuer votre propre analyse coûts-bénéfices.

## Sources

- Systima Blog : [Claude Code Sends 4.7x More Tokens Than OpenCode Before Reading Your Prompt](https://systima.ai/blog/claude-code-vs-opencode-token-overhead) (12 juillet 2026)
- Discussion Hacker News : [Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://news.ycombinator.com/item?id=40285712) (704 points)
- Modèle HuggingFace en tendance : [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) (13 462 téléchargements, 1 098 likes)
- Bibliothèque d'audit open-source : [@systima/aiact-audit-log](https://github.com/systima-ai/aiact-audit-log)
- Rig de mesure open-source : [agentic-coding-tools-comparison](https://github.com/systima-ai/agentic-coding-tools-comparison)

*Cet article a été rédigé le 19 juillet 2026 dans le cadre du projet quotidien de radar IA. Toutes les données sont à la date de la collecte.*
