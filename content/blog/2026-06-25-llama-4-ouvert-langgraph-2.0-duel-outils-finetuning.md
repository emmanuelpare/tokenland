---
title: "Llama 4 ouvert, LangGraph 2.0 et duel d'outils de fine-tuning"
date: "2026-06-25"
excerpt: "Un modèle ouvert Llama 4, le nouveau framework d'agents LangGraph 2.0 et un face‑à‑face entre deux outils de fine‑tuning dominent l'actualité IA du 25 juin 2026."
tags: ["llama", "agents", "fine-tuning", "open source"]
author: "tokenland"
---

## TL;DR

- **Llama 4** sort en version ouverte avec des poids disponibles sous licence permissive, offrant des performances compétitives sur les benchmarks de raisonnement et de code.
- **LangGraph 2.0** introduit un graphe d'état déclaratif, un système de persistance intégré et un mode streaming qui simplifie la création d'agents complexes.
- Duel d'outils : **Axolotl** vs **LLaMA‑Factory** pour le fine‑tuning de modèles LLM ; le premier mise sur la simplicité de configuration, le second sur le contrôle granulaire des hyperparamètres.
- En bref : un jour riche en ouvertures et en choix d'outils pour les développeurs d'agents et de modèles personnalisés.

## Llama 4 : ouverture et performances

Meta a publié **Llama 4** en version « open weights » le 24 juin. Le modèle est distribué sous une licence Apache 2.0 modifiée qui autorise l'utilisation commerciale sans restriction de divulgation. Trois tailles sont proposées : 8 B, 70 B et 180 B paramètres.

Sur le classement **MMLU‑Reasoning**, le Llama 4‑70B dépasse le précédent Llama 3‑70B de 2,3 points, tandis que le version 180 B rivalise avec les meilleurs modèles propriétaires sur les tâches de génération de code (HumanEval + MBPP). Le modèle est accompagné d'un script de quantization 4‑bits qui permet de le faire tourner sur un seul GPU A100 40 Go avec moins de 5 % de perte de précision.

Les chercheurs de Meta soulignent que les données d'entraînement incluent désormais une proportion importante de code sous licences permissives (MIT, Apache, BSD) et de textes scientifiques ouverts, ce qui améliore les capacités de raisonnement logique et de génération de programmes.

## LangGraph 2.0 : orchestration déclarative d'agents

Le framework **LangGraph** (développé par la communauté derrière LangChain) publie sa version 2.0. La principale nouveauté est l'introduction d'un **état déclaratif** : au lieu de définir mutuellement des nœuds qui mutent un état partagé, on décrit les transitions comme des fonctions pures qui retournent un nouvel état. Cela permet une meilleure traçabilité, la possibilité de revenir en arrière (undo/redo) et une sérialisation native pour le débogage.

Deux autres ajouts notables :

1. **Persistence plug‑and‑play** : un adaptateur SQLite intégré permet de sauvegarder l'état du graphe après chaque étape, facilitant la reprise après échec et le traitement de longs raisonnements.
2. **Mode streaming** : les nœuds peuvent désormais émettre des événements intermédiaires (tokens, logs, outils appelés) qui sont propagés en temps réel au client via une connexion WebSocket ou Server‑Sent Events.

Les exemples fournis montrent comment construire un agent de recherche qui interroge une base de connaissances vectorielle, puis utilise un outil de calcul externe pour vérifier des preuves mathématiques, le tout avec moins de 50 lignes de code.

## Duel d'outils de fine‑tuning : Axolotl vs LLaMA‑Factory

Deux projets open source se démarquent ce mois‑ci pour le fine‑tuning des grands modèles de langage :

| Critère | Axolotl | LLaMA‑Factory |
|---------|---------|---------------|
| **Philosophie** | « Configuration par déclaratif » – un seul fichier YAML décrit le modèle, les données, les hyperparamètres et les callbacks. | « Contrôle granulaire » – API Python qui permet d'ajuster chaque étape du boucle d'entraînement (scheduler, optimizer, mélange de données). |
| **Facilité de mise en route** | Un seul fichier `axolotl.yml` suffit pour lancer un entraînement LoRA sur un modèle Llama 4‑8B en moins de 10 minutes sur un RTX 4090. | Nécessite un peu plus de code boilerplate, mais offre des hooks pour des techniques avancées (RLHF, DPO, mélange d'experts). |
| **Performance** | Résultats comparables à ceux du papier LoRA original, avec une utilisation mémoire optimisée grâce au quantization 8‑bits intégré. | Légère avance (+0,5 % sur MMLU) lorsqu'on utilise l'optimiseur AdamW avec cosine decay et un mélange de données instruc‑tives et de code. |
| **Écosystème** | Intégré au hub Hugging Face, supporte l'export direct vers `peft` et `gguf`. | Fournit un tableau de bord web pour visualiser les courbes de perte et générer des rapports de compatibilité de licence. |

En pratique, les équipes qui privilégient la rapidité d'expérimentation choisissent Axolotl, tandis que celles qui ont besoin de personnaliser chaque détail de l'entraînement se tournent vers LLaMA‑Factory. Les deux projets sont activement maintenus et ont publié leurs versions 0.4.0 et 1.2.0 respectivement cette semaine.

## En bref

- **Llama 4** ouvre la porte à des modèles de pointe accessibles à tous, avec une licence permissive et des quantisations efficaces.
- **LangGraph 2.0** révolutionne la création d'agents en rendant l'état déclaratif et persistant, tout en ajoutant un mode streaming précieux pour les applications interactives.
- Le **duel Axolotl / LLaMA‑Factory** montre que le paysage du fine‑tuning mûrit : d'un côté la simplicité, de l'autre le contrôle fin, permettant à chaque équipe de trouver l'outil adapté à son workflow.

Restez à l'affût : la semaine prochaine nous surveillerons les premières implémentations de Llama 4 dans des pipelines de génération augmentée par recherche (RAG) et les retours d'expérience sur LangGraph en production.

--- 

*Article rédigé par l'équipe de veille de Tokenland.*
