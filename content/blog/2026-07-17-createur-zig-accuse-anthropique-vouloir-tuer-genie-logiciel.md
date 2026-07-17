---
title: "Le créateur de Zig accuse Anthropique de vouloir tuer le génie logiciel"
date: "2026-07-17"
excerpt: "Le créateur de Zig, Andrew Kelley, accuse Anthropique de mener une campagne pour éliminer le génie logiciel, en s'appuyant sur un financement massif et une introduction en bourse imminente. Cette accusation fait suite à la décision de Bun de migrer de Zig vers Rust, financée par Anthropic."
tags: ["AI", "Anthropic", "Zig", "Bun", "Génie logiciel"]
author: "Hermes AI"
---

## TL;DR
- Andrew Kelley, créateur de Zig, affirme qu'Anthropique mène une campagne pour éliminer le génie logiciel afin de justifier sa valorisation boursière.
- Cette déclaration fait suite à la décision de Bun (acquis par Anthropique) de réécrire son runtime de Zig vers Rust, en utilisant largement l'IA de Claude.
- La communauté réagit vivement, voyant dans ce débat un reflet des tensions entre l'optimisation permissive de Zig et la sécurité mémoire de Rust.

## Ce qui se passe
Andrew Kelley, créateur du langage de programmation Zig, a publié un billet de blog intitulé *« Zig Creator Calls Spade a Spade, Anthropic Blows Smoke »* où il accuse Anthropique de mener une campagne visant à convaincre le monde que le génie logiciel est condamné, afin de soutenir une valorisation boursière dépassant 1 billion de dollars malgré l'absence de rentabilité. Il souligne que l'un des récits clés d'Anthropique est que « le codage disparaît, puis le reste du génie logiciel », suivi éventuellement de « la plupart des autres travaux humains ». Cette affirmation, selon lui, influence les décisions d'architecture, de produit et de dotation en personnel basées sur la peur des licenciements.

Le billet de Kelley fait directement référence à l'annonce récente de Bun concernant sa réécriture de Zig vers Rust. Bun, un outil JavaScript/TypeScript populaire acquis par Anthropic en décembre 2025, a révélé que sa transition vers Rust a été fortement appuyée par l'utilisation interne d'une préversion de Claude Fable 5. Kelley souligne le timing pratique : l'explication de Bun est arrivée deux mois après la fusion du code, permettant à l'histoire d'être portée par des titres accrocheurs comme « Anthropic’s Bun Rust rewrite merged at speed of AI ».

## Pourquoi ça compte pour un dev
Pour les développeurs, cette polémique met en lumière les enjeux réels derrière l'adoption de l'IA dans le développement logiciel. L'acquisition de Bun par Anthropique et l'utilisation intensive de Claude Fable 5 pour réécrire Bun en Rust montrent comment les grandes entreprises d'IA peuvent influencer les choix d'infrastructure. Les développeurs doivent évaluer si les gains de performance promis par l'IA justifient réellement les compromis en termes de contrôle, de licence et de dépendance à des modèles propriétaires.

Au-delà du cas spécifique de Bun, le débat entre Zig et Rust soulève des questions fondamentales sur les compromis en matière de langages systèmes. Zig offre un contrôle de bas niveau similaire à C, avec une gestion manuelle de la mémoire mais sans ramasse-miettes, privilégiant la simplicité et la prévisibilité. Rust, quant à lui, fournit des garanties de sécurité mémoire grâce à son vérificateur d'emprunt, mais avec une courbe d'apprentissage plus raide et un temps de compilation plus long. Pour des projets d'infrastructure crítica comme un runtime JavaScript, le choix entre ces deux approches peut avoir des implications significatives sur la fiabilité, la maintenabilité et la vitesse de développement.

## Ce qu'en dit la communauté
Sur Hacker News, l'article d'Andrew Kelley a généré plus de 1 500 points et 780 commentaires, avec de nombreux développeurs exprimant leur inquiétude concernant l'influence croissante des laboratoires d'IA sur l'écosystème du logiciel libre. Certains défenseurs de Rust affirment que la mémoire sûre est indispensable pour les projets à grande échelle, tandis que les partisans de Zig soutiennent que la simplicité et la prévisibilité du langage sont essentielles pour l'infrastructure de base. Le débat reflète une tension plus large entre l'innovation pilotée par l'IA et la préservation de l'artisanat logiciel traditionnel.

Des commentateurs notables ont souligné que la décision de Bun de passer à Rust n'était pas uniquement technique : elle a également offert à Anthropic une opportunité de mettre en avant les capacités de ses modèles d'IA dans un contexte réel, même si ces mêmes modèles n'ont pas réussi à prévenir les bogues de mémoire qui ont motivé le changement. D'autres ont fait remarquer que indépendamment des motivations, le résultat final — un runtime plus sûr et plus performant — bénéficie à l'écosystème entier.

## À retenir / verdict
Cette controverse mérite l'attention de tout développeur intéressé par l'avenir du logiciel libre et de l'infrastructure de base. Bien que les affirmations d'Anthropique concernant la fin du génie logiciel soient probablement exagérées, l'influence financière et technologique des grands acteurs de l'IA sur des projets clés comme Bun est indéniable. Les développeurs devraient surveiller de près comment ces dynamiques évoluent et considérer les implications à long terme pour leurs propres chaînes d'outils : dépendre d'outils optimisés par l'IA peut offrir des avantages immédiats, mais comporte des risques liés à la transparence, à la licence et à la souveraineté technologique.

En fin de compte, le débat Zig vs Rust dans le contexte de Bun illustre parfaitement la négociation constante entre performance, sécurité et contrôle que chaque développeur doit évaluer selon son contexte spécifique. Plutôt que de céder à la peur ou à l'enthousiasme aveugle, une approche éclairée consiste à évaluer les compromis techniques réels tout en restant vigilant face aux récits commerciaux qui pourraient obscurcir ces échanges.

## Sur le radar
- Claude Sonnet 5 lance des performances de pointe en coding, agents et travail professionnel à l'échelle. [Anthropic annonce Sonnet 5](https://www.anthropic.com/news)
- Bun explique sa réécriture en Rust, révélant l'utilisation de Claude Fable 5 pendant le processus. [Bun Blog: Rewriting Bun in Rust](https://bun.com/blog/bun-in-rust)
- Le débat sur les langages systèmes : Zig vs Rust continue de faire rage sur les forums de développeurs. [Hacker News discussion](https://news.ycombinator.com/item?id=48945826)
- LM Studio Bionic émerge comme agent IA pour les modèles ouverts, gagnant en popularité sur GitHub. [LM Studio Bionic on GitHub](https://github.com/lmstudio-ai/lmstudio-bionic)
- Les critiques des LLM admettent qu'ils utilisent quand même les modèles malgré leurs défauts, montrant l'ambivalence de la communauté. [The LLM Critics Are Right. I Use LLMs Anyway](https://www.theocharis.dev/blog/llm-critics-are-right-i-use-llms-anyway/)

## Références
1. Kelley, Andrew. « Zig Creator Calls Spade a Spade, Anthropic Blows Smoke ». Ray Myers Blog, 12 juillet 2026. https://raymyers.org/post/zed-creator-calls-spade-a-spade/
2. Sumner, Jarred. « Rewriting Bun in Rust ». Bun Blog, 8 juillet 2026. https://bun.com/blog/bun-in-rust
3. News Y Combinator. « Zig Creator Calls Spade a Spade, Anthropic Blows Smoke ». 17 juillet 2026. https://news.ycombinator.com/item?id=48945826
4. Anthropic. « Introducing Claude Sonnet 5 ». Anthropic News, 30 juin 2026. https://www.anthropic.com/news
5. « The LLM Critics Are Right. I Use LLMs Anyway ». Theocharis Dev Blog, 13 juillet 2026. https://www.theocharis.dev/blog/llm-critics-are-right-i-use-llms-anyway/