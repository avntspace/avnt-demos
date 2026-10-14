import { getCollection, type CollectionEntry } from 'astro:content';
import { site } from '../site.config';

export type Post = CollectionEntry<'writing'>;

/** All posts, newest first. Drafts show up in `npm run dev` but never in a build. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function postUrl(post: Post) {
  return `/writing/${post.id}/`;
}

export function readingTime(body = '') {
  const words = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<[^>]+>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 230))} min read`;
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long') {
  return date.toLocaleDateString(site.locale, {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

export function tagSlug(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function allTags(posts: Post[]) {
  const counts = new Map<string, { name: string; count: number }>();
  for (const post of posts) {
    for (const name of post.data.tags) {
      const slug = tagSlug(name);
      const entry = counts.get(slug) ?? { name, count: 0 };
      entry.count++;
      counts.set(slug, entry);
    }
  }
  return [...counts.entries()]
    .map(([slug, v]) => ({ slug, ...v }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
