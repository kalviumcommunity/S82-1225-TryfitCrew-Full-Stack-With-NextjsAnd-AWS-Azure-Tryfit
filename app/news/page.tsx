// Page is statically generated and revalidated every 60 seconds
export const revalidate = 60;

interface Post {
  id: number;
  title: string;
}

export default async function NewsPage() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>News Page (Hybrid Rendering - ISR)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
