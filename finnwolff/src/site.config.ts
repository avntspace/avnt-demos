// Everything that describes you lives here. Edit this file, not the pages.

export const site = {
  name: 'Finn Wolff',
  // Shown under your name on the home page and used as the default meta description.
  tagline: 'Founder, investor, optimist, and futurist.',
  // A few sentences for the home page intro. Plain text; blank lines start a new paragraph.
  intro: `Finn Wolff, better known as simply Wolf, is an American founder, investor, optimist, and futurist.

Finn continues to build new companies at the cutting edge of technology that serve to push the culture forward and change people's lives around the world for the better.`,
  // One line under the "Writing" heading on the home page.
  writingBlurb: 'Essays, notes, and analyses on technology, culture, and building companies.',
  // The big line in the home page hero.
  statement: 'Building a future that we can all be excited about.',
  // Path to a portrait in public/images (e.g. '/images/finn.jpg'). Leave empty to hide.
  photo: '/images/finn.jpg',
  // The "Journey" timeline on the home page, oldest first. `href` is optional.
  journey: [
    {
      when: 'Age 5',
      title: "Finn's Snack Shack",
      text: "Selling candy & sodas to hungry customers at the back of an old barn at his grandparents' Christmas tree farm in Northern Virginia.",
    },
    {
      when: 'High school',
      title: 'Electronics on eBay',
      text: 'Buying old iPhones, gaming consoles and electronics from friends and people at school, and re-selling them on eBay for a profit.',
    },
    {
      when: '2016',
      title: 'Taught himself to code',
      text: 'Websites first, then Swift to build iOS apps, with little money to invest in hiring a developer.',
    },
    {
      when: '2017',
      title: 'Schmooze',
      text: 'Co-founded a college social app at UC Berkeley that grew to a team of over 10 undergraduates and thousands of users.',
      href: '/writing/schmooze/',
    },
    {
      when: '2017',
      title: 'Blockchain at Berkeley',
      text: 'Helped found Asset Management at Berkeley, then worked with peers in Blockchain at Berkeley to bring blockchain education to more students.',
      href: '/writing/blockchain-at-berkeley/',
    },
    {
      when: '2019',
      title: 'Building full time',
      text: 'Left UC Berkeley to build fast-growing tech companies that help disrupt and grow the next generation of fashion, art, & culture.',
    },
    {
      when: '2020',
      title: 'Xalted',
      text: 'Launched an app that connects local guides with ski and snowboard enthusiasts looking for a lesson or a tour around an unfamiliar mountain.',
      href: '/writing/xalted-ski-app/',
    },
    {
      when: 'Since 2020',
      title: 'Philanthropy',
      text: 'Initiatives that center around providing relief for families in need, criminal justice reform, positive news organizations, and more.',
      href: '/writing/thompson-kamara-fundraiser/',
    },
    {
      when: 'Today',
      title: 'Building & investing',
      text: 'Building new companies at the cutting edge of technology, with investments in multiple companies in the technology space, streetwear, Web3, and more.',
    },
  ] as { when: string; title: string; text: string; href?: string }[],
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
