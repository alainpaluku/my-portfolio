import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    categoryKey: z.enum(['iot', 'embedded', 'software', 'research', 'blockchain']),
    image: z.string(),
    tags: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.string(),
    lang: z.enum(['en', 'fr']),
  }),
});

export const collections = {
  projects: projectsCollection,
};
