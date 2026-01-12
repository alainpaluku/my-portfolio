---
title: "ProofChains"
description: "Plateforme de certification académique sur blockchain Cardano. Émettez, vérifiez et authentifiez les diplômes sous forme de NFTs immuables et infalsifiables."
category: "Blockchain / Web3"
categoryKey: "blockchain"
image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
tags: ["Cardano", "NFT", "TypeScript", "Next.js", "Supabase"]
github: "https://github.com/alainpaluku/proofchains"
demo: "https://proofchains.org/"
featured: true
date: "2025-01-01"
lang: "fr"
---

## Présentation

ProofChains est une solution complète de certification académique construite sur la **blockchain Cardano**. Elle permet aux établissements d'enseignement d'émettre des diplômes sous forme de NFTs, garantissant une authenticité et une traçabilité permanentes.

La plateforme répond à un problème critique dans l'éducation : la fraude aux diplômes. En exploitant la technologie blockchain, ProofChains rend les credentials vérifiables par n'importe qui, n'importe où, à tout moment.

## Le Problème

- **La fraude aux diplômes** coûte des milliards aux institutions et employeurs chaque année
- Les processus de vérification traditionnels sont lents et coûteux
- Les certificats papier peuvent être perdus, endommagés ou falsifiés
- Aucun système de vérification mondial standardisé n'existe

## La Solution

ProofChains transforme les credentials académiques en **NFTs immuables** sur la blockchain Cardano :

- **Vérification Instantanée** : N'importe qui peut vérifier l'authenticité d'un diplôme en quelques secondes
- **Infalsifiable** : Une fois émis, les credentials ne peuvent être ni modifiés ni falsifiés
- **Enregistrement Permanent** : Les diplômes existent pour toujours sur la blockchain
- **Respect de la Vie Privée** : Seules les preuves cryptographiques sont stockées on-chain

## Architecture de la Plateforme

La plateforme se compose de trois applications interconnectées :

| Application | Fonction | URL |
|-------------|----------|-----|
| Landing + Vérificateur | Portail de vérification public | proofchains.org |
| Portail Émetteur | Émission de credentials par les institutions | issuer.proofchains.org |
| Tableau de Bord Admin | Administration de la plateforme | admin.proofchains.org |

## Stack Technologique

- **Frontend** : Next.js, TypeScript, TailwindCSS
- **Blockchain** : Cardano (Lucid, Blockfrost API)
- **Wallets** : Eternl, Lace (Desktop & Mobile)
- **Stockage** : IPFS via Pinata
- **Base de Données** : Supabase (PostgreSQL)
- **Authentification** : Supabase Auth
- **Monorepo** : Turborepo

## Fonctionnalités Clés

### Pour les Institutions
- Émission de diplômes en lot sous forme de NFTs
- Modèles de certificats personnalisables
- Tableau de bord de gestion des étudiants
- Capacités de révocation

### Pour la Vérification
- Scan de QR code
- Validation de preuve blockchain
- Affichage de l'authenticité du certificat
- API de vérification publique

### Pour l'Administration
- Intégration des institutions
- Analytiques et rapports
- Surveillance du système
- Gestion des contrôles d'accès

## Impact

ProofChains représente un changement de paradigme dans la gestion des credentials académiques, apportant transparence et confiance au secteur de l'éducation grâce à la technologie blockchain.

> *"Certifier l'avenir, un diplôme à la fois."*
