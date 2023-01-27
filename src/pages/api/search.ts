import { Post } from "../../types";

export async function get({ request }) {
  const response = await fetch("http://localhost:3000/posts.json");
  const post = (await response.json()) as Post[];

  console.log(`request = ${JSON.stringify(request)}`)

  const req = request[Object.getOwnPropertySymbols(request)[1]];
  const q = req.parsedURL.searchParams.get("q")?.toLowerCase() ?? "";

  return new Response(
    JSON.stringify(
      post.filter((p: Post) => p.title.toLowerCase().includes(q))
    ),
    {
      status: 200,
    }
  );
}