"use client"; // This ensures it's a client component

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchChallenges = async () => {
  const { data } = await axios.get("https://api.example.com/challenges");
  return data;
};

export default function ChallengeList() {
  const { data, error, isLoading } = useQuery({ queryKey: ["challenges"], queryFn: fetchChallenges });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading challenges</p>;

  return (
    <ul className="mt-4">
      {data?.map((challenge: { id: number; title: string }) => (
        <li key={challenge.id} className="border p-2 my-2 bg-white">
          {challenge.title}
        </li>
      ))}
    </ul>
  );
}
