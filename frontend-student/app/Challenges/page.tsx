"use client"; // Ensures this is a client component

import ChallengeList from "../components/ChallengeList";

export default function Challenges() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Challenges</h1>
      <ChallengeList />
    </div>
  );
}
