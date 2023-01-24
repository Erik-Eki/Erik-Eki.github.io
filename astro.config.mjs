import { defineConfig } from 'astro/config';

// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  //"https://erik-eki.github.io"
  site: "https://erikhuuskonen.fi"
  // Docs say don't set base if url is .github.io or using custom domain
  //base: "Erik-Eki.github.io"
  ,

  integrations: [svelte(), tailwind(), react()],
  output: "server",
  adapter: vercel()
});