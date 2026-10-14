// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://finnwolff.com',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/tags': '/writing/',
    // Old Squarespace URLs, so existing links keep working.
    '/blog': '/writing/',
    '/blog-horizon/finn-wolff-future-of-ecommerce': '/writing/future-of-ecommerce/',
    '/blog-horizon/finn-wolff-chatgptai': '/writing/ai-disrupting-work/',
    '/blog-horizon/finn-wolff-uc-berkeley-metaverse': '/writing/a-month-in-the-metaverse/',
    '/blog-horizon/finn-wolff-fundraising-thompson-kamara': '/writing/thompson-kamara-fundraiser/',
    '/blog-horizon/finn-wolff-uc-berkeley-blockchain': '/writing/blockchain-at-berkeley/',
    '/blog-horizon/finn-wolff-uc-berkeley-student-ski-app': '/writing/xalted-ski-app/',
    '/blog-horizon/uc-berkeley-student-finn-wolff-schmooze': '/writing/schmooze/',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
