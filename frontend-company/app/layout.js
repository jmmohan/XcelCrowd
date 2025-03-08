// app/layout.tsx
import "../styles/globals.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <nav className="p-4 bg-blue-500 text-white flex justify-between">
          <Link href="/">Home</Link>
          <Link href="/challenges">Challenges</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}