"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import AddUser from "./AddUser";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const { data, error, isLoading } = useSWR<User[]>("/api/users", fetcher);

  if (error) return <p className="text-red-600">❌ Failed to load users</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <ul className="space-y-2">
        {data?.map((user) => (
          <li key={user.id} className="border-b p-2">
            {user.name} — {user.email}
          </li>
        ))}
      </ul>

      <AddUser />
    </main>
  );
}
