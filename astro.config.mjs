import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
//import vercel from "@astrojs/vercel/serverless";
import mdx from '@astrojs/mdx';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  //"https://erik-eki.github.io"
  site: "https://erikhuuskonen.fi/"
  // Docs say don't set base if url is .github.io or using custom domain
  //base: "Erik-Eki.github.io"
  ,

  markdown: {
    remarkPlugins: [remarkToc]
  },
  integrations: [svelte(), tailwind(), react(), mdx({
    // Markdown config now ignored
    extendMarkdownConfig: false,
    // No `remarkPlugins` applied
    smartypants: true,
    gfm: true
  })]
  // This enables SSR
  //output: "server",
  //adapter: vercel()
});