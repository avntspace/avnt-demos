// Everything that describes you lives here. Edit this file, not the pages.

export const site = {
  name: 'Finn Wolff',
  // Shown under your name on the home page and used as the default meta description.
  tagline: 'TODO: one line on what you work on and think about.',
  // A few sentences for the home page intro. Plain text; blank lines start a new paragraph.
  intro: `TODO: a short introduction. Who you are, what you're building, and what you write about here.

This is a working notebook: essays, notes, and analyses, published as the thinking happens.`,
  url: 'https://finnwolff.com',
  locale: 'en-US',
  email: '', // e.g. 'hello@finnwolff.com' (leave empty to hide)
  // Links shown in the footer and on the About page. Remove any you don't use.
  links: [
    { label: 'X', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'GitHub', href: '' },
  ],
  nav: [
    { label: 'Writing', href: '/writing/' },
    { label: 'About', href: '/about/' },
  ],
};

// The kinds of things you publish. Each post picks one in its frontmatter (`type:`).
// Add, rename, or remove freely; the archive filters update automatically.
export const postTypes = {
  essay: 'Essay',
  note: 'Note',
  analysis: 'Analysis',
} as const;

export type PostType = keyof typeof postTypes;
