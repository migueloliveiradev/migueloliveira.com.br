import { profile } from "@/data/profile";

// Nome em duas cores, com o sobrenome destacado.
export function Wordmark({ className = "" }: { className?: string }) {
  const [first, ...rest] = profile.name.toLowerCase().split(" ");
  return (
    <span className={`type-display tracking-[-0.02em] ${className}`}>
      {first}
      <span className="text-accent">{rest.join("")}</span>
    </span>
  );
}
