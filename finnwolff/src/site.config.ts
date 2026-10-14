// Everything that describes you lives here. Edit this file, not the pages.

export const site = {
  name: 'Finn Wolff',
  // What people actually call you. Signs off every page.
  alias: 'Wolf',
  // Default meta description and link-preview text.
  tagline: 'Founder, investor, optimist, and futurist.',
  // The home page headline. Wrap the word to highlight in *asterisks*; each line is a row.
  statement: ['Building a future', 'that we can all be', '*excited* about.'],
  // The paragraph under the headline.
  intro:
    'Finn Wolff, better known as simply Wolf, is a founder and investor. He builds AVNT and AVNT Scale, media and marketing companies for the next generation of fashion and streetwear brands.',
  // The companies section on the home page.
  companies: [
    {
      name: 'AVNT',
      href: 'https://avnt.space',
      text: 'One of the biggest media companies promoting next-generation brands and creatives.',
    },
    {
      name: 'AVNT Scale',
      href: 'https://avnt.space/scale',
      text: 'The digital marketing platform top brands, designers and creatives trust for massive growth that stays tasteful and true to the brand they built.',
    },
  ],
  // Scrolling ticker on the home page.
  worlds: ['Technology', 'Fashion', 'Art', 'Culture', 'Streetwear', 'Web3'],
  // Path to a photo in public/images. Leave empty to hide.
  photo: '/images/finn-wide.jpg',
  photoCaption: 'Times Square, New York',
  // The timeline on the home page, in order. Keep each line plain and factual.
  // `href` links to the full piece; `photo: true` places the photo after that entry.
  story: [
    {
      when: 'Age 5',
      title: "Finn's Snack Shack",
      text: "Sold candy and sodas out of an old barn on his grandparents' Christmas tree farm in Northern Virginia.",
    },
    {
      when: 'High school',
      title: 'Reselling electronics',
      text: 'Bought used iPhones, gaming consoles and electronics from friends and classmates, and resold them on eBay.',
    },
    {
      when: '2016',
      title: 'Learning to code',
      text: "Couldn't afford a developer, so he taught himself to build websites, then iOS apps in Swift.",
    },
    {
      when: '2017',
      title: 'Schmooze',
      text: 'Co-founded a social app at UC Berkeley for swapping numbers and socials with one QR scan. It grew to a team of 10+ students and thousands of users.',
      href: '/writing/schmooze/',
    },
    {
      when: '2017',
      title: 'Blockchain at Berkeley',
      text: 'Helped found Asset Management at Berkeley, then worked with Blockchain at Berkeley to teach more students about the technology.',
      href: '/writing/blockchain-at-berkeley/',
    },
    {
      when: '2019',
      title: 'Left Berkeley',
      text: 'Dropped out to build full time, starting tech companies in fashion, art and culture.',
      photo: true,
    },
    {
      when: '2020',
      title: 'Xalted',
      text: 'Launched an app that pairs skiers and snowboarders with vetted local guides, starting in Utah and California.',
      href: '/writing/xalted-ski-app/',
    },
    {
      when: '2021',
      title: 'Whomps World',
      text: 'A charitable clothing release with friends in memory of Thompson Kamara. The proceeds went to his family.',
      href: '/writing/thompson-kamara-fundraiser/',
    },
    {
      when: 'Now',
      title: 'AVNT and AVNT Scale',
      text: 'Building media and marketing companies for the next generation of fashion and streetwear brands, and investing in tech, streetwear and Web3.',
      href: '#companies',
    },
  ] as { when: string; title: string; text: string; href?: string; photo?: boolean }[],
  url: 'https://finnwolff.com',
  locale: 'en-US',
  email: '', // e.g. 'hello@finnwolff.com' (leave empty to hide)
  // Links shown in the footer. Remove any you don't use.
  links: [
    { label: 'X', href: 'https://twitter.com/finnwolff_' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/finnwolff/' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100079617141099' },
  ],
  nav: [
    { label: 'Timeline', href: '/#timeline' },
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
