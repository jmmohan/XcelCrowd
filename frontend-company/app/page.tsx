import "../styles/globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to XcelCrowd</h1>
      <p className="text-gray-600">Bridging students and companies through challenges</p>
      <Link href="/challenges">
        <span className="mt-5 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">View Challenges</span>
      </Link>
    </div>
  );
}
