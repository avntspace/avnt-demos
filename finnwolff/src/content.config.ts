import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { postTypes } from './site.config';

const writing = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Cover image path (e.g. /images/writing/my-post.webp), used on cards.
    image: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    type: z.enum(Object.keys(postTypes) as [keyof typeof postTypes]).default('essay'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { writing };
