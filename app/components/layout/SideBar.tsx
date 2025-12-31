"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 border-r p-4">
      <ul className="space-y-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products/all-products">Products</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </aside>
  );
}
