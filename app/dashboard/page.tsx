// Forces this page to be rendered on every request (SSR)
export const dynamic = 'force-dynamic';

interface Post {
  id: number;
}

export default async function DashboardPage() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      cache: 'no-store', // disable caching
    }
  );

  const data: Post[] = await res.json();

  return (
    <main>
      <h1>Dashboard (Dynamic Rendering - SSR)</h1>
      <p>Total Posts Fetched: {data.length}</p>
    </main>
  );
}
