import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchChallenges() {
  const { data } = await axios.get("https://api.example.com/challenges");
  return data;
}

export default function Challenges() {
  const { data, error, isLoading } = useQuery({ queryKey: ["challenges"], queryFn: fetchChallenges });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading challenges</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Challenges</h1>
      <ul className="mt-4">
        {data.map((challenge) => (
          <li key={challenge.id} className="border p-2 my-2 bg-white">
            {challenge.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
