export const revalidate = false;

interface Post {
  id: number;
  title: string;
}

export default async function AboutPage(){
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const data: Post = await res.json();

  return (
    <main>
      <h1>About Page (Static)</h1>
      <p>{data.title}</p>
    </main>
  );
}
