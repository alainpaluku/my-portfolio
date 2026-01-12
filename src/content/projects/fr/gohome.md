---
title: "GoHome"
description: "Un système domotique léger, modulaire et rapide écrit en Go pour Raspberry Pi. Contrôlez vos appareils connectés avec une interface web moderne."
category: "IoT / Domotique"
categoryKey: "iot"
image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
tags: ["Go", "React", "gRPC", "Raspberry Pi", "Docker"]
github: "https://github.com/alainpaluku/gohome"
featured: true
date: "2025-01-01"
lang: "fr"
---

## Présentation

GoHome est un système domotique léger, modulaire et rapide conçu spécifiquement pour Raspberry Pi. Construit avec Go pour le backend et React pour le frontend, il offre une interface moderne et réactive pour contrôler tous vos appareils connectés.

## Fonctionnalités Clés

- **Léger & Rapide** : Optimisé pour Raspberry Pi avec une utilisation minimale des ressources
- **Architecture Modulaire** : Facile à étendre avec de nouveaux types d'appareils et intégrations
- **Mises à Jour en Temps Réel** : gRPC et messagerie NATS pour une synchronisation instantanée
- **Interface Moderne** : Belle interface React avec TailwindCSS et composants shadcn/ui
- **Prêt pour les Conteneurs** : Déploiement facile avec Podman ou Docker

## Stack Technologique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18, TypeScript, Vite, TailwindCSS, shadcn/ui |
| Backend | Go, GoFiber, gRPC, Protocol Buffers |
| Messagerie | NATS |
| Monitoring | VictoriaMetrics |
| Conteneur | Podman |

## Démarrage Rapide

Installation en une ligne pour Raspberry Pi :

```bash
curl -sSL https://raw.githubusercontent.com/alainpaluku/gohome/main/scripts/install.sh | bash
```

Ou avec Podman :

```bash
podman-compose up -d
```

Puis ouvrez `http://localhost:3000`

## Points d'API

### Appareils

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/v1/devices | Lister tous les appareils |
| GET | /api/v1/devices/:id | Détails d'un appareil |
| POST | /api/v1/devices | Créer un appareil |
| PUT | /api/v1/devices/:id | Modifier un appareil |
| DELETE | /api/v1/devices/:id | Supprimer un appareil |
| POST | /api/v1/devices/:id/command | Envoyer une commande |

### Pièces

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/v1/rooms | Lister toutes les pièces |
| GET | /api/v1/rooms/:id/devices | Appareils d'une pièce |

## Ports des Services

| Service | Port |
|---------|------|
| Web + API | 3000 |
| gRPC | 50051 |
| Métriques | 8428 |
| NATS | 4222 |

## Pourquoi GoHome ?

GoHome a été créé pour répondre au besoin d'une solution domotique auto-hébergée et respectueuse de la vie privée, fonctionnant efficacement sur des appareils à faible consommation comme le Raspberry Pi. Contrairement aux solutions dépendantes du cloud, GoHome garde toutes vos données en local et vous donne un contrôle total sur votre maison connectée.
