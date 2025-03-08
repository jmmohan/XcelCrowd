"use client"; // Mark layout as a client component

import "../styles/globals.css";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Layout({ children }) {
  const [queryClient] = useState(() => new QueryClient()); // Ensure the QueryClient persists

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <QueryClientProvider client={queryClient}>
          <nav className="p-4 bg-blue-500 text-white flex justify-between">
            <Link href="/">Home</Link>
            <Link href="/challenges">Challenges</Link>
          </nav>
          <main className="p-4">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
