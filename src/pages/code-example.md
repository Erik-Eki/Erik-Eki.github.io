---
title: "Page example"
author: "Erik"
---

## Here's how simple this first page is using Astro!

```astro
---
import "../styles/global.css"

// Welcome to Astro! Everything between these triple-dash code fences
// is your "component front matter". It never runs in the browser.
console.log("This runs in your terminal, not the browser!");

// Import a single file
import {Content as CodeExample} from "../pages/code-example.md";

---

<!-- Below is your "component template." It's just HTML, but with
     some magic sprinkled in to help you build great templates. -->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro</title>
    <style>
        h1 {
          color: black;
        }
      </style>
  </head>
  <body>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/blog/">Blog</a>
    <h1>Ebin bwoi</h1>

    <p><a href="https://github.com/Erik-Eki/Erik-Eki.github.io">Link to Github repo</a></p>

    <CodeExample/>

    <!-- <p>Post Archive:</p>
    <ul>
    {posts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
    </ul> -->
  </body>
</html>
```