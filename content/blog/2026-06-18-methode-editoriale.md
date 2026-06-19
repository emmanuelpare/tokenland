---
title: "La méthode éditoriale derrière chaque billet"
date: "2026-06-18"
excerpt: "Repérer un sujet, le faire tourner soi-même, mesurer, puis trancher. Le pipeline complet — de la veille multi-sources au banc d'essai local sur Apple Silicon."
tags: ["méthode", "veille", "sourçage"]
author: "tokenland"
---

## TL;DR

- Le pipeline tient en quatre temps : **repérer, choisir, tester, écrire.**
- Le **test est le cœur** : quand c'est faisable, on fait tourner la chose et on rapporte *nos* chiffres.
- La fraîcheur donne un bonus, jamais un plafond : on privilégie la profondeur à la course à l'actualité.

## On repère ce qui mérite un test

La veille n'a qu'un but : dresser une liste de huit à quinze candidats récents, chacun assorti d'une note rapide — **testable comment ?** (modèle *open-weights* en local, API, ou analyse seulement). On croise des canaux qui se trompent rarement en même temps :

- **Communautés de praticiens** — Hacker News (API Algolia, triée par date et points) et Reddit. r/LocalLLaMA est la source no 1 pour les sujets testables en local.
- **Plateformes de modèles** — Hugging Face : modèles *trending* et *daily papers*. Pour chaque modèle candidat, on vérifie tout de suite s'il existe en **GGUF** (donc quantifiable et exécutable sur le Mac).
- **Outils qui décollent** — GitHub Trending sur les *topics* `llm`, `rag` et `ai-agents`.
- **Thermomètres médias** — Techmeme, Smol AI, MarkTechPost, TLDR AI, VentureBeat.
- **Sources officielles** — les blogues des laboratoires (OpenAI, Anthropic, DeepMind, Meta, Mistral, Qwen, DeepSeek) et des frameworks (LangChain et LangGraph, LlamaIndex, vLLM, Ollama).

La fenêtre visée est d'environ sept jours — assez large pour ne pas écarter un sujet qui mérite enfin un vrai test. Le *buzz* sert à **repérer**, pas à décider.

## On choisit ce qu'on peut creuser

Sur dix candidats, neuf seront écartés. Le critère décisif n'est pas « de quoi parle-t-on le plus ? » mais « qu'est-ce qu'on peut **tester ou analyser en profondeur** ? ». Le score favorise explicitement la testabilité :

- un modèle **exécutable en local** sur le Mac (M5, 48 Go) reçoit le plus gros bonus ;
- un sujet **mesurable via API** (latence, coût, qualité) vient ensuite ;
- puis tout ce qui offre de la matière pour une analyse originale — un repo, une méthode, des specs détaillées.

La fraîcheur ajoute quelques points, l'engagement chiffré aussi, mais aucun des deux ne suffit à lui seul. Un sujet testable mais moins « chaud » bat un sujet médiatisé mais creux. À score égal, on tranche selon l'ordre du périmètre éditorial.

## On teste pour de vrai

C'est l'étape qui sépare nos billets d'un résumé d'annonce. Quand le sujet s'y prête, on le fait tourner et on rapporte des chiffres mesurés, pas rapportés.

**Un modèle open-weights**, sur le banc d'essai local (Apple Silicon M5, 48 Go de mémoire unifiée). Avec Ollama ou llama.cpp, on relève le débit réel — *tokens/s* en génération comme en traitement du *prompt* —, l'**empreinte mémoire** effective, et la qualité subjective sur quelques tâches (raisonnement, code, suivi d'instructions). Quand c'est pertinent, on compare deux *quantizations* (par exemple IQ4_XS contre Q4_K_S) pour situer le compromis débit / qualité / mémoire sur 48 Go.

**Un modèle propriétaire ou un produit SaaS**, via API : on mesure la latence (temps jusqu'au premier *token* et durée totale), le coût par millier de *tokens*, et la qualité sur deux ou trois tâches réelles standardisées.

**Une technique de RAG ou un framework agentique** : on monte un mini-protocole reproductible — un petit jeu de documents, une métrique simple (*recall*, exactitude, nombre d'étapes ou de boucles, latence) — et on publie les chiffres.

Et quand le test est **infaisable** — modèle trop gros pour 48 Go, poids non diffusés, pas d'accès API —, on le dit franchement. On s'appuie alors sur les *benchmarks* publiés en les **analysant de façon critique** (méthodologie, biais, ce qui manque) et on compense par la profondeur d'analyse. Jamais on ne présente un chiffre publié comme une mesure maison, ni on n'invente un résultat « comme si » on avait testé.

## On écrit : des mesures et un verdict

La forme suit la substance — pas de gabarit rigide —, mais deux sections sont obligatoires : le **TL;DR** en tête (avec le chiffre marquant qu'on a mesuré) et le **verdict** à la fin (quand utiliser, quand éviter, les pièges, le rapport coût / bénéfice). Entre les deux, on choisit les sections selon ce qu'on a réellement à dire, et la section « nos mesures » est la vedette quand un test a été fait.

L'article fait de 900 à 1400 mots, en **français canadien** soutenu, sur un ton de praticien-reporter : opinion assumée, jamais de prose neutre qui sonne comme un communiqué. On distingue toujours **nos mesures** (« sur le M5… ») des **chiffres rapportés** (« selon l'annonce… »). Les termes que les développeurs nomment en anglais restent en anglais (*tokens/s*, *quantization*, *throughput*, *fine-tuning*, *embeddings*). Trois règles ne se négocient pas : rien de recopié, aucun chiffre inventé, au moins trois références cliquables.

## On publie sans intermédiaire

L'article est un fichier markdown ajouté au dépôt : un *commit*, une poussée, et **Vercel reconstruit** le site automatiquement. La tuyauterie complète est décrite dans [le colophon](/blog/2026-06-16-colophon).

> Une bonne veille ne vous dit pas seulement ce qui est sorti. Elle l'a essayé, vous donne les chiffres et leurs sources, et tranche.

## Ce qu'on ne fait jamais

- Produire un recap : sans mesure, sans *snippet* ni verdict, le sujet n'est pas mûr — on en choisit un autre ou on saute le jour.
- Inventer un chiffre, ou présenter un *benchmark* publié comme une mesure personnelle.
- Recopier une source : on reformule et on attribue.
- Se fier au titre ou à la position dans un fil pour juger la date — on vérifie le *timestamp* réel.
- Traiter un paper arXiv isolé comme une actualité tant qu'il n'est ni repris ni implémentable.

## Références

[1] tokenland — procédure éditoriale interne (pipeline en quatre temps).
