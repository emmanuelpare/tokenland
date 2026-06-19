---
title: "Ce qu'on couvre : modèles, RAG, agents et outillage IA"
date: "2026-06-17"
excerpt: "Un modèle testé en local sur Apple Silicon, une technique de RAG reproduite, un agent qu'on fait tourner. Voici le périmètre de tokenland, ce qu'on mesure, et ce qu'on refuse de publier."
tags: ["périmètre", "llm", "rag", "agents"]
author: "tokenland"
---

## TL;DR

- On écrit pour **qui construit** : modèles, RAG, agents, outillage dev et produits IA.
- **Le test bat le recap.** Quand c'est faisable, on fait tourner la chose et on rapporte *nos* chiffres — *tokens/s*, mémoire, latence, coût.
- La fraîcheur est un **bonus**, pas un plafond : on privilégie la profondeur et un verdict assumé à la course à l'actualité.

## Pourquoi un site de veille de plus

Il n'y en a pas besoin d'un de plus, justement. Vous avez déjà TLDR AI, Smol AI, r/LocalLLaMA, Hacker News et X : la nouvelle, vous l'avez gratuitement et plus vite que nous ne l'écririons. Agréger une annonce de plus n'aide personne.

Ce qui manque, c'est quelqu'un qui a **essayé** la chose. Pas qui l'a résumée — qui l'a installée, exécutée, chronométrée, et qui en revient avec des chiffres et un avis. C'est le seul créneau qui justifie d'exister : **tester, mesurer, trancher.**

Concrètement, un bon billet de tokenland ressemble à ceci : un modèle sort en *open-weights*, on le tire en local, on relève 38 *tokens/s* en Q4_K_S pour 27 Go de mémoire occupée, on compare à la *quantization* du dessous, et on conclut « excellent pour du code à débit confortable sur 48 Go, à éviter si vous avez besoin de la fenêtre de contexte complète ». Voilà la différence entre un test et un communiqué reformulé.

## Le périmètre : huit familles

Par ordre de priorité — et la priorité va à ce qu'on peut **mettre à l'épreuve** :

1. **Modèle LLM open-weights** — une sortie qu'on peut faire tourner en local et mesurer. *Priorité no 1 : c'est là que la valeur différenciée est maximale, et r/LocalLLaMA est affamé de chiffres réels.*
2. **Technique de RAG / retrieval** — *reranking*, *embeddings*, *retrieval* hybride, GraphRAG, *agentic* RAG, contexte long contre RAG, évaluation. De préférence avec un protocole reproductible.
3. **Skills et features Claude (écosystème Anthropic)** — MCP, Claude Code, nouveaux outils, changements d'API ou de modèles, illustrés par un cas d'usage concret testé.
4. **Boucles agentiques et frameworks d'agents** — patterns (ReAct, *plan-and-execute*, *reflection*, multi-agents), versions majeures de LangGraph, CrewAI, AutoGen, OpenAI Agents SDK, smolagents. On montre une boucle qui roule, pas seulement l'API.
5. **Outils pour développer en IA** — serveurs d'inférence (vLLM, llama.cpp, Ollama, SGLang), *tooling* d'éval et d'observabilité, *fine-tuning* (LoRA/QLoRA, Unsloth).
6. **Modèle propriétaire / produit SaaS IA** — testable via API : on mesure latence, coût au millier de *tokens* et qualité sur quelques tâches réelles.
7. **Recherche médiatisée** — un paper marquant **déjà repris**, abordé sous l'angle de l'implémentation.
8. **Événement industrie majeur** — uniquement s'il a une implication technique concrète.

## Le banc d'essai

Les modèles *open-weights* passent sur un **Mac M5 doté de 48 Go de mémoire unifiée**, via Ollama et llama.cpp. C'est une machine de développeur, pas une grappe de H100 — et c'est volontaire : les chiffres qu'on publie sont ceux que vous pouvez reproduire sur du matériel réaliste. On y relève le débit en génération comme en traitement du *prompt*, l'empreinte mémoire effective et la qualité par *quantization* (notre zone d'intérêt sur 48 Go se situe autour des formats IQ4_XS et Q4_K_S).

Pour les modèles propriétaires et les produits SaaS, le banc devient l'API : temps jusqu'au premier *token*, durée totale, coût au *token*, qualité sur deux ou trois tâches standardisées. Pour une technique de RAG ou un framework agentique, on monte un mini-protocole — un petit jeu de documents, une métrique simple (*recall*, exactitude, nombre d'étapes, latence) — et on publie le résultat.

Quand un test est **infaisable** — modèle trop gros pour 48 Go, poids non diffusés, pas d'accès API —, on le dit franchement et on analyse les *benchmarks* publiés de façon critique. On ne fait jamais passer un chiffre publié pour une mesure maison.

## Comment on choisit

Un sujet ne sort que s'il réunit trois conditions :

1. **Substance testable ou analysable en profondeur** — assez de matière (specs, repo, API, méthode) pour produire des chiffres ou une analyse originale, pas pour paraphraser une annonce.
2. **Pertinence pour un dev IA** — dans le périmètre ci-dessus, avec un angle pratique.
3. **Actualité raisonnable** — une cible d'environ **sept jours**. Un sujet plus ancien reste recevable s'il porte un angle *hands-on* inédit, par exemple prendre enfin le temps de *vraiment* mesurer un modèle sorti deux semaines plus tôt.

Le départage se fait au score, en favorisant la **testabilité** : un modèle qu'on peut exécuter en local pèse plus lourd qu'un sujet médiatisé mais creux. Le *buzz* sert à repérer ce qui mérite un test, pas à dicter le choix.

## Ce qu'on laisse de côté

| Hors périmètre | Pourquoi |
| --- | --- |
| Le simple recap d'annonce | Rien testé, rien tranché — aucune valeur ajoutée |
| Paper arXiv isolé, sans reprise ni angle d'implémentation | Pas d'attention vérifiable, rien à reproduire |
| Spéculation sur l'AGI | On parle de ce qui existe et se teste |
| Débats d'opinion sans faits ni chiffres | La veille tranche sur des données, pas des impressions |

Et s'il n'y a, un jour donné, rien qui mérite un vrai traitement de fond, on saute le jour. Mieux vaut un silence qu'un recap creux.

## Pour qui

Si vous écrivez du code, évaluez des modèles, déployez des agents ou arbitrez une *stack*, vous êtes au bon endroit. Le ton est celui d'un pair qui a fait tourner la chose et qui vous dit franchement quand l'utiliser — et quand l'éviter. Les chiffres viennent toujours avec leur *setup* ; les affirmations externes, toujours avec leur source.

## Références

[1] tokenland — périmètre éditorial et règle des trois conditions (interne).
