import React from "react";
import { Inspiration } from "../api/inspiration";

type Props = {
  favorites: Inspiration[];
  onRemove: (index: number) => void;
};

export default function Favorites({ favorites, onRemove }: Props) {
  if (favorites.length === 0) return null;
  return (
    <section style={{ maxWidth: 600, margin: "2em auto" }}>
      <h2 style={{ textAlign: "center" }}>Favorites</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {favorites.map((fav, i) => (
          <li key={i}
              style={{ background: "#fafaff", border: "1px solid #e8e8ef", borderRadius: 10, margin: "12px 0", padding: "18px 16px" }}>
            <q style={{ fontSize: 17 }}>&ldquo;{fav.quote}&rdquo;</q>
            <div style={{ margin: "8px 0 0 0", color: "#555" }}>— {fav.author}</div>
            <img src={fav.image} alt="Favorite inspiration" style={{ width: "100%", maxWidth: 320, borderRadius: 10, margin: "10px 0" }} />
            <br />
            <button onClick={() => onRemove(i)} style={{ marginTop: 8 }}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
