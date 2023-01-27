import { useState, useEffect } from "react";

import { Post } from "../types";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState<Post[]>([]);

  // useEffect(() => {
  //   console.log(`query = ${query}`)

  //   fetch(`/api/search?q=${encodeURIComponent(query)}`)
  //     .then((response) => response.json())
  //     .then((post) => setPost(post));
  // }, [query]);

  console.log(`query = ${encodeURIComponent(query)}`)

  

  return (
    <>
      <input
        type="text"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-xl border-gray-300 border-2 rounded-md"
        placeholder="Search"
      />
      <div className="mt-3 grid grid-cols-3 gap-5">
        {post.slice(0, 10).map((post) => (
          <a href={`/posts/${post.id}`} key={post.id}>
            <h3>Ebin title - {post.title}</h3>
          </a>
        ))}
      </div>
    </>
  );
}