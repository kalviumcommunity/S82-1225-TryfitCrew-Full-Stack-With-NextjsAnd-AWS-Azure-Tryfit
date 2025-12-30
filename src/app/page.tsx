import { prisma } from "../../lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main style={{ padding: 40 }}>
      <h1>TryFit – Prisma Test</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
}
