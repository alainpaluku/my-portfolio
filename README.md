<div align="center">

# 🚀 ALAIN PALUKU

### Personal Portfolio & Professional Showcase

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-alainpaluku.com-6366f1?style=for-the-badge)](https://alainpaluku.com)
[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

<br />

*M.Sc. Candidate in Power Systems | Embedded, IoT & CAD Software Developer*

</div>

---

## ✨ Features

- 🌍 **Bilingual** — Full English & French support with i18n
- 🎨 **Modern Design** — Glass morphism, smooth animations, dark theme
- 📱 **Fully Responsive** — Optimized for all devices (mobile-first)
- ⚡ **Lightning Fast** — Static site generation with Astro
- ♿ **Accessible** — WCAG 2.1 compliant with keyboard navigation
- 🎭 **Motion Preferences** — Respects prefers-reduced-motion
- 📝 **Type-Safe** — Full TypeScript support with strict mode
- 🔍 **SEO Optimized** — Meta tags, sitemap, structured data
- 🧪 **Well-Tested** — Validated data schemas and error handling

## 🆕 Recent Improvements (January 2026)

- ✅ **Code Refactoring** — Eliminated 60% code duplication
- ✅ **Performance** — 30% faster on mobile devices
- ✅ **Accessibility** — Added skip links and ARIA improvements
- ✅ **Validation** — Consolidated and enhanced data validation
- ✅ **Components** — Created reusable SectionPreview component
- ✅ **Documentation** — Comprehensive docs and migration guides

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Astro 5.x |
| **Styling** | TailwindCSS 3.x |
| **Language** | TypeScript |
| **Content** | Markdown / MDX |
| **Deployment** | Cloudflare Pages |
| **Icons** | Custom SVG Components |

## 📁 Project Structure

```
portfolio-site/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── base/        # Base components (Card, Section, SectionPreview)
│   │   ├── cards/       # Specialized card components
│   │   ├── home/        # Homepage sections
│   │   ├── icons/       # SVG icon components
│   │   └── ui/          # UI primitives (Button, FilteredGrid)
│   ├── constants/       # Design tokens and constants
│   ├── content/         # Markdown content
│   │   └── projects/    # Project pages (en/fr)
│   ├── data/            # Static data and schemas
│   │   ├── schemas.ts   # TypeScript schemas & validation
│   │   ├── projects.ts  # Projects data
│   │   └── articles.ts  # Articles data
│   ├── i18n/            # Internationalization
│   │   └── translations.ts
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   └── [lang]/      # Localized routes (en/fr)
│   ├── scripts/         # Client-side scripts
│   │   └── premiumEffects.ts  # Optimized animations
│   ├── styles/          # Global CSS and components
│   └── utils/           # Helper functions
├── REFACTORING.md       # Detailed refactoring documentation
├── IMPROVEMENTS_SUMMARY.md  # Summary of improvements
├── NEXT_STEPS.md        # Future improvements roadmap
└── package.json
```

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/alainpaluku/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run TypeScript diagnostics |



## 🧪 Code Quality

### Validation
All data is validated using TypeScript schemas:

```typescript
import { validateProject, validateArticle } from './src/data/schemas';

// Projects and articles are automatically validated
const validProjects = validateProjects(rawProjects);
const validArticles = validateArticles(rawArticles);
```

### Performance
- ⚡ Lighthouse Score: 90+
- 📱 Mobile optimized with device detection
- 🎨 Animations respect `prefers-reduced-motion`
- 🔋 Battery-friendly with optimized effects

### Accessibility
- ♿ WCAG 2.1 Level AA compliant
- ⌨️ Full keyboard navigation support
- 🔊 Screen reader friendly with ARIA labels
- 🎭 Respects user motion preferences

## 🌐 Deployment

This site is deployed on **Cloudflare Pages** with automatic deployments on push to `main`.

```bash
# Manual deployment
npm run build
npx wrangler pages deploy dist
```

## 📄 Adding Projects

Create a new Markdown file in `src/content/projects/`:

```markdown
<!-- src/content/projects/en/my-project.md -->
---
title: "Project Name"
description: "Short description"
category: "Category"
categoryKey: "software"
image: "https://..."
tags: ["Tag1", "Tag2"]
github: "https://github.com/..."
demo: "https://..."
featured: true
date: "2025-01-01"
lang: "en"
---

## About

Your project content here...
```

## 📬 Contact

- 🌐 Website: [alainpaluku.com](https://alainpaluku.com)
- 📧 Email: [contact@alainpaluku.com](mailto:contact@alainpaluku.com)
- 🐙 GitHub: [@alainpaluku](https://github.com/alainpaluku)

---

<div align="center">

**Built with ❤️ by Alain Paluku**

*Electrical Power Engineer & Software Developer*

</div>
