# finnwolff.com

Personal site and writing notebook. Built with [Astro](https://astro.build): every post is a Markdown file, and the output is a plain static site that can be hosted anywhere for free.

## Day to day

```sh
npm install          # once
npm run dev          # preview at http://localhost:4321 (drafts visible)
npm run new "Title"  # start a new post (add: -- --type note | analysis, -- --mdx)
npm run build        # production build into dist/ (drafts excluded)
npm run check        # type-check frontmatter and components
```

### Writing a post

Posts live in `src/content/writing/`. The file name becomes the URL (`my-post.md` → `/writing/my-post/`). Frontmatter:

| Field         | Required | Notes                                                                      |
| ------------- | -------- | -------------------------------------------------------------------------- |
| `title`       | yes      |                                                                            |
| `date`        | yes      | `2026-10-14`                                                               |
| `description` |          | Subtitle, list blurb, and link-preview text                                |
| `type`        |          | `essay` (default), `note`, or `analysis`, editable in `src/site.config.ts` |
| `tags`        |          | `[strategy, retail]`; each tag gets its own page                           |
| `draft`       |          | `true` keeps it off the live site                                          |
| `featured`    |          | `true` pins it under "Start here" on the home page                         |
| `updated`     |          | Shows "Updated …" at the bottom                                            |

See `src/content/writing/_template.md` for a copy-paste starting point. MDX posts (`.mdx`) can also use callouts (`<Aside>`) and figures (`<Figure>`) from `src/components/`.

Images go in `public/images/` and are referenced as `/images/name.png`.

### Editing the rest

- **Name, tagline, intro, links, nav:** `src/site.config.ts`
- **About page:** `src/pages/about.md` (plain Markdown)
- **Colors and typography:** the tokens at the top of `src/styles/global.css`

## Structure

```
src/
  site.config.ts        your details (start here)
  content/writing/      posts (.md or .mdx)
  pages/                home, writing archive, tags, about, rss.xml, 404
  layouts/              Base (shell), Post, Page
  components/           Header, Footer, PostList, Aside, Figure, ThemeToggle
  styles/global.css     design tokens, light/dark themes, post typography
public/                 favicon, robots.txt, images
```

Included: light/dark mode (follows the system, with a toggle), RSS at `/rss.xml`, sitemap, canonical/Open Graph tags, reading time, an automatic table of contents on long posts, archive filtering by type, and tag pages. Fonts (Newsreader, Inter, JetBrains Mono) are self-hosted, so there are no third-party requests.

## Deploying (moving off Squarespace)

Any static host works. The simplest is Netlify, Vercel, or Cloudflare Pages connected to this GitHub repo; they rebuild automatically on every push.

1. Create a site on the host and connect the GitHub repository.
2. Build settings: **base / root directory** `finnwolff` (while this lives inside `avnt-demos`), **build command** `npm run build`, **output directory** `dist`.
3. Add the custom domain `finnwolff.com` (and `www`) in the host's dashboard.
4. In Squarespace → Domains → DNS settings, replace the Squarespace A/CNAME records with the ones the host gives you. If the domain is *registered* with Squarespace, you can keep it there and only change DNS, or transfer it out later.
5. Once the new site is live on the domain, cancel the Squarespace site plan (not the domain, if it's still registered there).

To move this into its own repository later, copy the `finnwolff/` folder to the root of a new repo and drop the base-directory setting.
