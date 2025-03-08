// components/Navbar.tsx
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/challenges">Challenges</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}