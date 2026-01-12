---
title: "GoHome"
description: "A lightweight, modular, and fast home automation system written in Go for Raspberry Pi. Control your smart home devices with a modern web interface."
category: "IoT / Home Automation"
categoryKey: "iot"
image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
tags: ["Go", "React", "gRPC", "Raspberry Pi", "Docker"]
github: "https://github.com/alainpaluku/gohome"
featured: true
date: "2025-01-01"
lang: "en"
---

## Overview

GoHome is a lightweight, modular, and fast home automation system designed specifically for Raspberry Pi. Built with Go for the backend and React for the frontend, it provides a modern and responsive interface to control all your smart home devices.

## Key Features

- **Lightweight & Fast**: Optimized for Raspberry Pi with minimal resource usage
- **Modular Architecture**: Easy to extend with new device types and integrations
- **Real-time Updates**: gRPC and NATS messaging for instant device state synchronization
- **Modern UI**: Beautiful React interface with TailwindCSS and shadcn/ui components
- **Container Ready**: Deploy easily with Podman or Docker

## Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Vite, TailwindCSS, shadcn/ui |
| Backend | Go, GoFiber, gRPC, Protocol Buffers |
| Messaging | NATS |
| Monitoring | VictoriaMetrics |
| Container | Podman |

## Quick Start

One-line install for Raspberry Pi:

```bash
curl -sSL https://raw.githubusercontent.com/alainpaluku/gohome/main/scripts/install.sh | bash
```

Or with Podman:

```bash
podman-compose up -d
```

Then open `http://localhost:3000`

## API Endpoints

### Devices

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/devices | List all devices |
| GET | /api/v1/devices/:id | Get device details |
| POST | /api/v1/devices | Create device |
| PUT | /api/v1/devices/:id | Update device |
| DELETE | /api/v1/devices/:id | Delete device |
| POST | /api/v1/devices/:id/command | Send command |

### Rooms

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/rooms | List all rooms |
| GET | /api/v1/rooms/:id/devices | Get room devices |

## Service Ports

| Service | Port |
|---------|------|
| Web + API | 3000 |
| gRPC | 50051 |
| Metrics | 8428 |
| NATS | 4222 |

## Why GoHome?

GoHome was built to address the need for a self-hosted, privacy-focused home automation solution that runs efficiently on low-power devices like Raspberry Pi. Unlike cloud-dependent solutions, GoHome keeps all your data local and gives you full control over your smart home.
