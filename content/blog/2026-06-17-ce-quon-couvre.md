---
title: "Ce qu'on couvre : modèles, RAG, agents et outillage IA"
date: "2026-06-17"
excerpt: "Une sortie de modèle, une technique de RAG, un framework d'agents, un duel d'outils. Voici le périmètre de tokenland, ce qu'on retient comme sujet vedette, et ce qu'on refuse de publier."
tags: ["périmètre", "llm", "rag", "agents"]
author: "tokenland"
---

## TL;DR

- On écrit pour **qui construit** : modèles, RAG, agents, outillage dev et produits IA.
- **Le verdict bat le recap.** On ne paraphrase pas l'annonce : on dit ce qui change, à qui ça sert, et si ça vaut le coup d'œil.
- La fraîcheur est un **bonus**, pas un plafond : un sujet vedette par jour, plus une section « Sur le radar » pour que vous ne manquiez rien.

## Pourquoi un site de veille de plus

Il n'y en a pas besoin d'un de plus, justement. Vous avez déjà TLDR AI, Smol AI, r/LocalLLaMA, Hacker News et X : la nouvelle, vous l'avez gratuitement et plus vite que nous ne l'écririons. Agréger une annonce de plus n'aide personne.

Ce qui manque, c'est quelqu'un qui **trie et qui tranche**. Pas qui recopie — qui sépare le signal du bruit, vérifie les faits à la source et vous dit ce qui compte pour un dev. C'est le seul créneau qui justifie d'exister : **repérer l'incontournable, expliquer ce qui change, trancher.**

Concrètement, un bon billet de tokenland ressemble à ceci : un modèle sort en *open-weights*, on confirme la date et les specs à la source, on situe sa perf et son prix face à la génération précédente et à la concurrence, on résume ce qu'en dit la communauté, et on conclut « excellent pour du code à coût contenu, à éviter si vous avez besoin d'une grande *context window* ». Voilà la différence entre un verdict et un communiqué reformulé.

## Le périmètre : huit familles

Par ordre de priorité — et la priorité va à ce qui est **incontournable** pour un dev IA :

1. **Modèle Claude / Anthropic majeur** — nouvelle sortie ou évolution marquante : perf, disponibilité, positionnement face à la génération précédente et à la concurrence.
2. **Modèle LLM marquant** — propriétaire ou *open-weights*, y compris un modèle local qui fait fureur (le baromètre r/LocalLLaMA). Specs clés, *benchmarks* publiés, ce qui le rend notable.
3. **Skills et features Claude (écosystème Anthropic)** — MCP, Claude Code, Cowork, nouveaux outils, changements d'API. Ce que ça débloque concrètement pour un dev.
4. **Duel / comparaison qui fait jaser** — Codex contre Claude Code, modèle A contre B, framework X contre Y. Qui gagne sur quoi, selon les *benchmarks* et la communauté.
5. **Technique ou produit de RAG** — *reranking*, *agentic* RAG, GraphRAG, *retrieval* hybride, ou un nouvel outil/plateforme de *retrieval*.
6. **Boucles agentiques et frameworks d'agents** — patterns (ReAct, *plan-and-execute*, *reflection*, multi-agents), versions majeures de LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, smolagents.
7. **Nouveau produit / SaaS IA marquant** — lancement ou évolution majeure : IDE IA, plateforme d'agents, copilote, infra.
8. **Outil de dev IA qui décolle** — librairie, SDK, serveur d'inférence, *tooling* d'éval qui grimpe vite (GitHub Trending).

*(Recherche ou événement industrie : seulement si un dev doit vraiment le savoir.)*

## Le sujet vedette, plus le radar

Chaque édition s'organise autour de **deux** choses. D'abord **un sujet vedette** : le truc le plus incontournable du moment pour un dev IA — celui qu'on creuse assez pour être utile, avec ses chiffres clés (perf, prix, disponibilité, *context window*) attribués à leur source. On reste technique mais accessible : assez de détail pour décider, jamais de plongée d'architecture ni de micro-détail.

Ensuite une section **« Sur le radar »** : trois à cinq autres trucs qui trendent cette semaine, une ligne et un lien chacun. C'est elle qui garantit le « rien manqué ». Un sujet de niche sans buzz réel n'est pas vedette pour autant — il atterrit ici, au mieux.

Quand une donnée ne peut pas être vérifiée à sa source primaire, on l'omet plutôt que de l'avancer. On ne fait jamais passer une affirmation non vérifiée pour un fait établi.

## Comment on choisit

Un sujet ne devient vedette que s'il réunit trois conditions :

1. **Caractère incontournable** — un dev IA qui le rate serait hors du coup. C'est le critère central.
2. **Convergence des sources** — au moins deux sources indépendantes dans la fenêtre, ou une annonce officielle majeure déjà reprise (plusieurs médias, présence sur Hacker News et Reddit, engagement chiffré).
3. **Actualité raisonnable** — une cible d'environ **sept jours**, avec une préférence marquée pour ce qui a moins de 72 heures.

Le départage se fait au score, puis selon l'ordre du périmètre ci-dessus. Le *buzz* sert à **repérer** ce qui mérite la une, pas à dicter le choix à lui seul.

## Ce qu'on laisse de côté

| Hors périmètre | Pourquoi |
| --- | --- |
| Le simple recap d'annonce | Rien tranché, aucun verdict — aucune valeur ajoutée |
| Paper arXiv isolé, sans reprise ni angle d'implémentation | Pas d'attention vérifiable, rien d'actionnable |
| Spéculation sur l'AGI | On parle de ce qui existe et se livre |
| Débats d'opinion sans faits ni chiffres | La veille tranche sur des données, pas des impressions |

Et s'il n'y a, un jour donné, rien d'incontournable ni rien d'opinioné à dire, on saute le jour. Mieux vaut un silence qu'un recap creux.

## Pour qui

Si vous écrivez du code, évaluez des modèles, déployez des agents ou arbitrez une *stack*, vous êtes au bon endroit. Le ton est celui d'un pair qui a fait le tri pour vous et qui vous dit franchement quand un outil vaut le coup d'œil — et quand l'ignorer. Les affirmations viennent toujours avec leur source.

## Références

[1] tokenland — périmètre éditorial et règle des trois conditions (interne).
