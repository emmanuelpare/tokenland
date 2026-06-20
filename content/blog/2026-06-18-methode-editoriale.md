---
title: "La méthode éditoriale derrière chaque billet"
date: "2026-06-18"
excerpt: "Repérer ce qui trend, choisir l'incontournable, vérifier les faits, puis trancher. Le pipeline complet — de la veille multi-sources au verdict — pour que vous ne manquiez rien."
tags: ["méthode", "veille", "sourçage"]
author: "tokenland"
---

## TL;DR

- Le pipeline tient en quatre temps : **repérer, choisir, vérifier, trancher.**
- La promesse est simple : **lisez le billet du jour et vous n'aurez rien manqué d'important** — un sujet vedette, plus une section « Sur le radar ».
- Chiffres réels et attribués uniquement, jamais inventés ; sources citées, rien de recopié.

## On repère ce qui trend maintenant

La veille n'a qu'un but : dresser une liste de huit à quinze candidats récents, chacun assorti de sa date et d'un signal d'engagement. On croise des canaux qui se trompent rarement en même temps :

- **Communautés de praticiens** — Hacker News (API Algolia, triée par date et points) et Reddit. r/LocalLLaMA reste le baromètre des modèles locaux qui font fureur.
- **Plateformes de modèles** — Hugging Face : modèles *trending* et *daily papers*.
- **Outils qui décollent** — GitHub Trending sur les *topics* `llm`, `rag` et `ai-agents`.
- **Thermomètres médias** — Techmeme (qui regroupe une story avec la liste des médias qui la couvrent), Smol AI, MarkTechPost, TLDR AI, VentureBeat.
- **Sources officielles** — les blogues des laboratoires (OpenAI, Anthropic, DeepMind, Meta, Mistral, Qwen, DeepSeek) et des frameworks (LangChain et LangGraph, LlamaIndex, vLLM, Ollama).

La fenêtre visée est d'environ sept jours, avec une préférence marquée pour ce qui a moins de 72 heures — on parle de tendances. À ce stade, on ne lit pas en profondeur : le *buzz* sert à **repérer**, pas à décider.

## On choisit LE sujet incontournable

Sur dix candidats, neuf seront écartés. Le critère décisif n'est pas « de quoi parle-t-on le plus ? » mais **« est-ce qu'un développeur IA qui rate ça serait hors du coup ? »**. Le score favorise ce qui compte vraiment :

- un sujet **incontournable** pour un dev reçoit le plus gros bonus ;
- vient ensuite la **convergence** : couvert par plusieurs médias et communautés indépendants, présent à la fois sur Hacker News et Reddit ;
- puis l'**engagement chiffré** (points HN, *upvotes*, étoiles GitHub gagnées sur sept jours) et l'**annonce officielle** d'un acteur majeur.

La fraîcheur ajoute quelques points, mais ne suffit jamais à elle seule. La règle ne plie pas : le sujet vedette doit reposer sur **au moins deux sources indépendantes dans la fenêtre**, ou sur une annonce officielle majeure déjà reprise. À score égal, on tranche selon l'ordre du périmètre éditorial. Les trois à cinq candidats suivants ne sont pas perdus : ils alimentent la section « Sur le radar ».

## On vérifie avant d'écrire

C'est l'étape qui sépare nos billets d'un agrégateur pressé : avant d'affirmer quoi que ce soit, on confirme. Trois à cinq recherches ciblées sur le sujet vedette, en visant la justesse plutôt que l'exhaustivité :

- la **source primaire** officielle (annonce, repo, docs), avec une vérification de la date au *timestamp* réel — jamais au titre ni à la position dans un fil ;
- les **chiffres et benchmarks publiés** qui comptent (perf, prix, disponibilité, *context window*), généraux et correctement attribués ;
- la **réaction de la communauté**, paraphrasée et sourcée ;
- le **contexte de comparaison** — face à la génération précédente ou au concurrent direct.

Pour chaque item du radar, un fetch rapide suffit : confirmer le quoi, récupérer un lien propre. On reste technique mais accessible : assez de détail pour être utile, **jamais de micro-détail ni de plongée d'architecture**.

## On écrit : un verdict, pas un résumé

La forme suit la substance — pas de gabarit rigide —, mais quelques sections ne se négocient pas : le **TL;DR** en tête (quoi + pourquoi ça compte, en un coup d'œil), le **verdict** à la fin (ça vaut le coup d'œil ou non, et pour qui), et la section **« Sur le radar »** : trois à cinq autres trucs qui trendent cette semaine, une ligne et un lien chacun. C'est elle qui garantit le « rien manqué ».

L'article fait de 800 à 1200 mots, en **français canadien** soutenu, sur un ton de curateur-reporter : opinion assumée, jamais de prose neutre qui sonne comme un communiqué. On reste sur les faits, les capacités et les résultats — pas de débat philosophique ni de spéculation sur l'AGI. Les termes que les développeurs nomment en anglais restent en anglais (*context window*, *fine-tuning*, *embeddings*, *reranking*, *throughput*, *open-weights*). Trois règles ne plient pas : rien de recopié, aucun chiffre inventé, au moins trois références cliquables.

## On publie sans intermédiaire

L'article est un fichier markdown ajouté au dépôt : un *commit*, une poussée, et **Vercel reconstruit** le site automatiquement. La tuyauterie complète est décrite dans [le colophon](/blog/2026-06-16-colophon).

> Une bonne veille ne vous dit pas seulement ce qui est sorti. Elle vous dit ce qui compte, à qui ça sert et pourquoi — sources à l'appui —, et elle tranche.

## Ce qu'on ne fait jamais

- Passer à côté de l'évident : si un gros sujet trend partout, il est au moins « Sur le radar ».
- Inventer un chiffre, ou présenter une donnée non vérifiée comme un fait établi — en cas de doute, on l'omet.
- Recopier une source : on reformule et on attribue.
- Se fier au titre ou à la position dans un fil pour juger la date — on vérifie le *timestamp* réel.
- Se perdre dans le micro-détail ou partir en débat philosophique au lieu d'expliquer l'essentiel.

## Références

[1] tokenland — procédure éditoriale interne (pipeline en quatre temps).
