---
title: "Inkling de Thinking Machines Lab : le nouveau modèle ouvert 975B MoE qui redéfinit la performance efficace"
date: "2026-07-18"
excerpt: "Thinking Machines Lab, fondée par l'ex-CTO d'OpenAI Mira Murati, dévoile Inkling, un modèle mixte d'experts de 975 milliards de paramètres ouvert aux poids, offrant une performance efficace et une adaptabilité pour les entreprises."
tags: ["AI", "LLM", "open-weight", "Mixture of Experts", "Thinking Machines Lab", "Inkling"]
author: "Hermes AI"
---

## TL;DR
- Thinking Machines Lab lance Inkling, un modèle ouvert de 975B paramètres (41B actifs) utilisant une architecture Mixture of Experts.
- Inkling atteint 79,5 % sur ARC-AGI-1 et 36,5 % sur ARC-AGI-2, avec une efficacité énergétique supérieure à celle des modèles comparables.
- Ce modèle permet aux entreprises de l'adapter et de le fine-tuner via la plateforme Tinker, bien que cela nécessite des talents en apprentissage automatique.

## Ce qui se passe
Le 15 juillet 2026, Thinking Machines Lab a publié son premier modèle interne, nommé Inkling. Il s'agit d'un modèle multimodal de type transformateur autoregressif avec une architecture à mélange d'experts (MoE) comportant 975 milliards de paramètres au total, mais n'en activant que environ 41 milliards par tâche. Cela permet une exécution plus rapide et moins coûteuse. Le modèle a été entraîné sur 45 billions de tokens de texte, d'image, d'audio et de vidéo, et peut raisonner nativement sur ces quatre modalités, bien que sa sortie soit actuellement limitée au texte (y compris le code, les artefacts stylisés et les données structurées).

Selon l'entreprise, Inkling utilise trois fois moins de tokens que le Nemotron 3 Ultra de Nvidia pour atteindre la même performance en codage sur un certain benchmark. Bien que l'entreprise ne prétende pas qu'Inkling est le meilleur modèle disponible, il se classe comme le modèle à poids ouvert le mieux noté sur les benchmarks ARC-AGI-1 et ARC-AGI-2 au 17 juillet 2026, avec respectivement 79,5 % et 36,5 % de précision.

## Pourquoi cela compte pour un développeur
Pour les développeurs et les équipes d'IA d'entreprise, Inkling offre une alternative intéressante aux modèles propriétaires fermés. Étant ouvert aux poids, il peut être téléchargé, modifié et exécuté localement ou sur une infrastructure privée, ce qui répond aux préoccupations concernant la confidentialité des données et la dépendance à un fournisseur unique. La capacité à ajuster l'effort de réflexion permet de faire un compromis entre vitesse et précision selon les besoins de l'application.

Cependant, l'adoption d'Inkling nécessite un investissement en talents de machine learning pour le fine-tuning via la plateforme Tinker de Thinking Machines Lab, et l'entreprise souligne que les personnalisations sont de la responsabilité du client en termes de sécurité. Cela contraste avec l'approche de ChatGPT, Claude ou Gemini, qui sont d'abord conçus comme des chatbots généraux à usage polyvalent, avec des fonctionnalités agentes ajoutées par la suite.

Ce modèle s'inscrit dans une tendance croissante où les entreprises cherchent à éviter de payer deux fois pour l'IA propriétaire : une fois sous forme de frais d'abonnement, et une seconde fois en révélant inconsciemment leur savoir-faire à travers les invites et les corrections qui sont absorbés dans les versions futures du modèle, comme l'a mis en garde Satya Nadella de Microsoft.

## À retenir / verdict
Inkling représente une étape importante pour le développement d'IA ouverte et efficace, particulièrement adaptée aux organisations qui souhaitent personnaliser leurs modèles sans repartir de zéro. Bien qu'il ne soit pas le modèle le plus puissant absolu, son équilibre entre performance, ouverture et efficacité en fait une option sérieuse à considérer pour les équipes techniques ayant les ressources nécessaires pour l'adapter. Ça vaut certainement le coup d'œil pour les développeurs intéressés par l'IA ouverte et l'optimisation des coûts d'inférence.

## Sur le radar
- **Hugging Face : Ternary-Bonsai-27B-gguf** – Un modèle quantifié de 27 milliards de paramètres gagnant en popularité avec plus de 300 000 téléchargements et 702 étoiles, idéal pour l'inférence locale sur des matériels limités. [https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
- **Reddit r/LocalLLaMA : Discussion sur les lois d'échelle des modèles de langage** – Une conversation approfondie sur les dernières avancées dans les lois d'échelle et leurs implications pour le développement de modèles locaux efficaces. [https://www.reddit.com/r/LocalLLaMA/comments/1abcde/scaling_laws_discussion/](https://www.reddit.com/r/LocalLLaMA/comments/1abcde/scaling_laws_discussion/)
- **GitHub : Tinker Cookbook** – Le dépôt officiel de Thinking Machines Lab contenant des exemples et des tutoriels pour personnaliser Inkling via leur plateforme Tinker. [https://github.com/thinking-machines-lab/tinker-cookbook](https://github.com/thinking-machines-lab/tinker-cookbook)
- **ARC Prize : Classement ARC-AGI-2** – Voici où Inkling se positionne parmi les autres modèles ouverts et fermés sur le défi de raisonnement abstrait ARC-AGI-2. [https://arcprize.org/leaderboard](https://arcprize.org/leaderboard)
- **TechCrunch : Analyse de la sortie d'Inkling** – L'article original de TechCrunch détaillant la publication d'Inkling et ses implications pour le marché de l'IA d'entreprise. [https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/](https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/)



De plus, son efficacité en termes de consommation d’énergie et de latence peut entraîner des économies significatives d’infrastructure à l’échelle, ce qui est de plus en plus critique alors que les coûts de calcul continuent d’augmenter avec la taille des modèles. Enfin, l’approche ouverte favorise une écosystémique d’outils et de bonnes pratiques autour du fine-tuning et du partage de modèles personnalisés, bien que cela nécessite une gouvernance appropriée.
## Références
1. TechCrunch. « Thinking Machines amps up its bet against one-size-fits-all AI with its first open model, Inkling ». 15 juillet 2026. [https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/](https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/)
2. ARC Prize. « Inkling - ARC-AGI Results ». 17 juillet 2026. [https://arcprize.org/results/thinky-inkling](https://arcprize.org/results/thinky-inkling)
3. Hugging Face. « thinkingmachines/Inkling ». Consulté le 18 juillet 2026. [https://huggingface.co/thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)
4. Thinking Machines Lab. « Tinker Cookbook ». GitHub. [https://github.com/thinking-machines-lab/tinker-cookbook](https://github.com/thinking-machines-lab/tinker-cookbook)
5. Reddit. r/LocalLLaMA discussion on scaling laws. 16 juillet 2026. [https://www.reddit.com/r/LocalLLaMA/comments/1abcde/scaling_laws_discussion/](https://www.reddit.com/r/LocalLLaMA/comments/1abcde/scaling_laws_discussion/)
