import React from "react";
import "../styles/globals.css";
import Link from "next/link";
// app/page.tsx (Home Page)
export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome, Student!</h1>
        <p className="text-gray-600">Explore challenges and showcase your skills</p>
        <Link href="/challenges" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">View Challenges</Link>
      </div>
    );
  }