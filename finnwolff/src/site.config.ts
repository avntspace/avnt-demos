// Everything that describes you lives here. Edit this file, not the pages.

export const site = {
  name: 'Finn Wolff',
  // Shown under your name on the home page and used as the default meta description.
  tagline: 'Founder, investor, optimist, and futurist.',
  // A few sentences for the home page intro. Plain text; blank lines start a new paragraph.
  intro: `Finn Wolff, better known as simply Wolf, is an American founder, investor, optimist, and futurist.

Finn continues to build new companies at the cutting edge of technology that serve to push the culture forward and change people's lives around the world for the better.

This is a working notebook: essays, notes, and analyses, published as the thinking happens.`,
  url: 'https://finnwolff.com',
  locale: 'en-US',
  email: '', // e.g. 'hello@finnwolff.com' (leave empty to hide)
  // Links shown in the footer and on the About page. Remove any you don't use.
  links: [
    { label: 'X', href: 'https://twitter.com/finnwolff_' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/finnwolff/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100079617141099' },
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
