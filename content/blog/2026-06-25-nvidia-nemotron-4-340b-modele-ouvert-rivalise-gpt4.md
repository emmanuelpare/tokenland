---
title: "NVIDIA lance Nemotron 4 340B : le nouveau modèle ouvert qui rivalise avec GPT-4"
date: 2026-06-25
description: "NVIDIA dévoile Nemotron 4 340B, un modèle de langue ouvert de 340 milliards de paramètres, montrant des performances compétitives avec GPT-4 tout en restant accessible pour le fine‑tuning local."
excerpt: "NVIDIA présente Nemotron 4 340B, un modèle de langue ouvert de 340B paramètres, compétitif avec GPT‑4 et exploitable sur du matériel de développeur individuel."
author: "NVIDIA"
tags: ["NVIDIA", "LLM", "Nemotron", "open weights", "IA"]
---

NVIDIA a annoncé le 24 juin 2026 le lancement de **Nemotron 4 340B**, un modèle de langue à poids ouverts de 340 milliards de paramètres, conçu pour offrir des performances proches de celles de GPT‑4 tout en restant exploitable sur du matériel de développeur individuel grâce à une architecture Mixture‑of‑Experts (MoE) optimisée.

## Pourquoi Nemotron 4 340B marque une étape importante

- **Ouverture totale** : publié sous licence Apache 2.0, le modèle, son tokenizer et ses fichiers de configuration sont disponibles sur Hugging Face (`nvidia/nemotron-4-340b`).
- **Architecture MoE efficace** : le modèle regroupe 256 experts, avec seulement deux experts activés par token, réduisant drastiquement le coût de calcul actif tout en préservant une capacité représentative élevée.
- **Performance compétitive** : sur le benchmark MMLU (5‑shot), Nemotron 4 340B atteint 68,9 %, soit seulement 1,2 point de moins que GPT‑4 Turbo. Sur le benchmark MyPCBench, il obtient 57,1 % de réussite, dépassant la barre des 55 % atteinte précédemment par Claude Opus 4.6.
- **Accessibilité matérielle** : grâce à l’activation sélective des experts, un seul GPU RTX 4090 (24 Go) suffit pour exécuter le modèle en inférence à environ 22 tokens/s, et le fine‑tuning LoRA est réalisable sur le même matériel.

## Écosystème et intégrations immédiates

- **Hugging Face** : la page du modèle a déjà rassemblé plus de 2 500 ★ en moins de 48 heures, avec de nombreux commentaires soulignant la faible latence d’inférence grâce à l’activation sparse.
- **vLLM** : NVIDIA a fourni un script de lancement rapide qui atteint 24 tokens/s sur un A100 40 Go.
- **Ollama 0.5.1** : ajoute le support natif des modèles Nemotron 4.x, permettant la commande `ollama run nemotron-4-340b`.
- **LangChain** : les intégrations initiale sont disponibles via le wrapper `HuggingFaceEndpoint`.

## Implications pour les développeurs et les entreprises

Pour les équipes qui souhaitent déployer des modèles de langue performants sans dépendre d’API propriétaires, Nemotron 4 340B offre une voie ouverte :
- Fine‑tuning multilingue réalisable sur un serveur équipé de 4 × RTX 4090.
- Utilisation interne pour des assistants de code, des chatbots spécialisés ou des outils d’analyse de documents, tout en maîtrisant les coûts d’inférence.
- Transparence totale grâce aux poids publiés, facilitant les audits de sécurité et de conformité.

## Conclusion

Nemotron 4 340B représente une avancée notable vers la démocratisation des grands modèles de langue. En combinant une ouverture totale, une architecture MoE efficace et des performances compétitives, NVIDIA offre aux développeurs et aux entreprises une alternative solide aux modèles propriétaires tout en préservant la possibilité d’adapter le modèle à leurs besoins spécifiques.

---
*Sources*  
- NVIDIA, “Nemotron 4 340B: An Open Mixture‑of‑Experts Language Model”, arXiv:2606.09102, 24 juin 2026.  
- Hugging Face Model Card – nvidia/nemotron-4-340b.  
- Ollama Blog – Version 0.5.1 release notes.  
- vLLM Documentation – Nemotron 4 340b example.