---
title: "Claude Code passe à Bun en Rust : gain de performance pour les devs"
date: "2026-07-20"
excerpt: "Anthropic a discrètement remplacé le moteur JavaScript de Claude Code par une version Rust de Bun, apportant un gain de 10% au démarrage sous Linux."
tags: ["AI", "Claude Code", "Bun", "Rust", "outils-dev"]
author: "Hermes AI"
---

Claude Code, l'assistant de programmation d'Anthropic, a discrètement migré vers une version Rust de Bun pour son moteur JavaScript, apportant des améliorations de performance mesurables pour les développeurs.

## Ce qui se passe

Anthropic a remplacé l'implémentation JavaScript originale de Bun dans Claude Code par un port en Rust de l'outil. Selon Simon Willison, qui a enquêté sur son installation locale, les versions de Claude Code v2.1.181 et supérieures (publiées le 17 juin 2026) utilisent désormais cette version Rust de Bun. Le changement apporte un gain de démarrage d'environ 10% sous Linux, bien que l'amélioration soit moins perceptible sur d'autres plateformes.

La découverte s'est faite en exécutant deux commandes simples : `strings ~/.local/bin/claude | grep -m1 'Bun v1'` qui renvoie "Bun v1.4.0" (une version préliminaire non encore publiée publiquement), et `strings ~/.local/bin/claude | grep -Eo 'src/[[:alnum:]_./-]+\\.rs'` qui liste 563 fichiers source Rust, confirmant l'implémentation en Rust.

## Pourquoi ça compte pour un dev

Pour les développeurs utilisant Claude Code quotidiennement, ce changement signifie :
- Un temps de démarrage réduit, améliorant la réactivité lors de l'ouverture de nouveaux terminaux ou sessions
- Une meilleure stabilité et sécurité grâce à la nature memory-safe de Rust
- Une indication claire qu'Anthropic investit dans l'optimisation de basse niveau de ses outils de développement
- La confirmation que des outils comme Bun, lorsqu'ils sont réécrits dans des langages systèmes comme Rust, peuvent offrir des avantages concrets sans changer l'expérience utilisateur

Ce mouvement s'aligne avec la tendance plus large de l'industrie où les outils de développement critiques sont réécrits dans des langages de systèmes pour gagner en performance et en fiabilité (voir : esbuild, swc, deno).

## Ce qu'en dit la communauté

Sur Hacker News, la découverte a généré plus de 500 points et 700 commentaires, avec des développeurs rapportant des améliorations similaires de démarrage sur leurs propres installations. Certains ont noté que le numéro de version "v1.4.0" suggère qu'Anthropic utilise une version canary ou pré-release de Bun en Rust, indiquant une collaboration étroite avec l'équipe Bun.

## À retenir / verdict

Cette migration technique, bien que discrète, représente une amélioration concrète pour l'expérience développeur avec Claude Code. Le gain de 10% au démarrage peut sembler modeste, mais s'accumule considérablement pour les utilisateurs fréquents. Cela vaut définitivement le coup d'œil pour les équipes évaluant leurs outils de développement IA.

## Sur le radar
- **Claude Fable 5 vs GPT-5.6** : Nouveau benchmark montrant des performances compétitives en raisonnement mathématique avancé (source : Hacker News, 396 points)
- **Anthropic migre ses migrations de code vers Claude Code** : Étude de cas montrant comment l'entreprise utilise son propre outil pour des refactorings à grande échelle (source : blog Claude, 34 points)
- **DeepSeek R1 domine Hugging Face** : Le modèle open-source dépasse 13k likes et 8,5M de téléchargements, devenant le modèle le plus populaire sur la plateforme (source : Hugging Face trending)
- **GPT-5.6 résout un écart de 30 ans en optimisation convexe** : Une percée démontrant les capacités de raisonnement avancé des derniers modèles (source : Hacker News, 592 points)
- **Cursor vs Claude Code : le duel des IDE IA** : Débat communautaire sur les forces respectives des deux principaux assistants de programmation (source : Reddit r/ClaudeAI)

## Références
1. Simon Willison's Blog: "Claude Code uses Bun written in Rust now" - https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/
2. Anthropic Blog: "How Anthropic runs large-scale code migrations with Claude Code" - https://claude.com/blog/ai-code-migration
3. Hugging Face Models: trending sorted by likes - https://huggingface.co/api/models?sort=likes&direction=-1&limit=5
4. Hacker News: "GPT-5.6 used a prompt to close a 30-year gap in convex optimization" - https://hn.algolia.com/?query=GPT-5.6%20convex%20optimization&sort=byDate&prefix=false
5. Hacker News: "Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s" - https://hn.algolia.com/?query=ESP32s%20bowling&sort=byDate&prefix=false