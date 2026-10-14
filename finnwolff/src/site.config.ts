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
    'Finn Wolff, better known as simply Wolf, is an American founder, investor, optimist, and futurist, building at the cutting edge of technology to push fashion, art & culture forward.',
  // Scrolling ticker on the home page.
  worlds: ['Technology', 'Fashion', 'Art', 'Culture', 'Streetwear', 'Web3'],
  // Path to a photo in public/images. Leave empty to hide.
  photo: '/images/finn-wide.jpg',
  photoCaption: 'Times Square, New York',
  // The story on the home page, in order. `href` links to the full piece.
  story: [
    {
      when: 'Age 5',
      title: 'The barn.',
      text: "Selling candy & sodas to hungry customers at the back of an old barn on his grandparents' Christmas tree farm in Northern Virginia. Finn's Snack Shack planted the seed for a future of building businesses and solving problems.",
    },
    {
      when: 'High school',
      title: 'The iPhone.',
      text: 'Inspired by the launch of the iPhone, he bought old iPhones, gaming consoles and electronics from friends and people at school, and re-sold them on eBay for a profit.',
    },
    {
      when: '2016',
      title: 'Self-taught.',
      text: 'With little money to hire a developer, he taught himself to code. Websites first, then Swift to build iOS apps.',
    },
    {
      when: '2017',
      title: 'Berkeley.',
      text: 'At UC Berkeley he co-founded Schmooze, a college social app that reached thousands of users, and helped bring blockchain education to more students. Later came Xalted, an app connecting skiers with local guides.',
      links: [
        { label: 'Schmooze', href: '/writing/schmooze/' },
        { label: 'Blockchain', href: '/writing/blockchain-at-berkeley/' },
        { label: 'Xalted', href: '/writing/xalted-ski-app/' },
      ],
    },
    {
      when: '2019',
      title: 'The leap.',
      text: 'He dropped out of UC Berkeley to build full time: fast-growing tech companies that help disrupt and grow the next generation of fashion, art, & culture.',
      photo: true,
    },
    {
      when: '2020',
      title: 'Thompson.',
      text: 'After losing one of his best friends, Thompson Kamara, to gun violence at the end of 2020, Finn started philanthropic initiatives for families in need, criminal justice reform, and positive news.',
      links: [{ label: 'Read the story', href: '/writing/thompson-kamara-fundraiser/' }],
    },
    {
      when: 'Today',
      title: "What's next.",
      text: "Building new companies at the cutting edge of technology that push the culture forward, inspire humanity to get excited about a brighter future, and change people's lives around the world for the better. Investing across technology, streetwear, Web3, and more.",
    },
  ] as {
    when: string;
    title: string;
    text: string;
    links?: { label: string; href: string }[];
    photo?: boolean;
  }[],
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
    { label: 'Story', href: '/#story' },
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
