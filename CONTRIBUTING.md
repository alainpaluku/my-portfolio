# 🤝 Contributing Guide

## Development Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Code Quality

Before committing, ensure your code passes all checks:

```bash
# Format code
npm run format

# Lint code
npm run lint:fix

# Type check
npm run type-check

# Run all checks
npm run validate
```

## Project Structure

- `src/components/base/` - Reusable base components
- `src/components/ui/` - UI primitives
- `src/data/` - Data and schemas
- `src/constants/` - Design tokens and constants
- `src/i18n/` - Translations (EN/FR)

## Adding Content

### Projects
Edit `src/data/projects.ts` and add your project data.

### Articles
Edit `src/data/articles.ts` and add your article data.

## Code Standards

- Use TypeScript strict mode
- Follow Prettier formatting
- Respect ESLint rules
- Add JSDoc comments for complex functions
- Use design constants from `src/constants/`

## Accessibility

- Ensure keyboard navigation works
- Add proper ARIA labels
- Test with screen readers
- Respect `prefers-reduced-motion`

## Pull Requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run validate`
5. Submit a PR with clear description
