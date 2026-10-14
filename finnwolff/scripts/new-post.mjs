// Usage: npm run new "Post title" [-- --type note] [-- --mdx]
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  if (i === -1) return undefined;
  const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
  args.splice(i, value === true ? 1 : 2);
  return value;
};

const type = flag('type') ?? 'essay';
const ext = flag('mdx') ? 'mdx' : 'md';
const title = args.join(' ').trim();

if (!title) {
  console.error('Usage: npm run new "Post title" [-- --type note|essay|analysis] [-- --mdx]');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');
const date = new Date().toISOString().slice(0, 10);
const file = join('src', 'content', 'writing', `${slug}.${ext}`);

if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}

const imports =
  ext === 'mdx'
    ? `import Aside from '../../components/Aside.astro';\nimport Figure from '../../components/Figure.astro';\n\n`
    : '';

writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
description: ""
date: ${date}
type: ${type}
tags: []
draft: true
---

${imports}`,
);

console.log(`Created ${file}\nIt's a draft: it shows in \`npm run dev\` and stays off the live site until you set draft: false.`);
