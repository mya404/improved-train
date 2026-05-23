export interface Inspiration {
  quote: string;
  author: string;
  image: string;
}

export async function fetchInspiration(): Promise<Inspiration> {
  const res = await fetch("http://localhost:3001/api/inspiration");
  if (!res.ok) throw new Error("Failed to fetch inspiration");
  return res.json();
}
