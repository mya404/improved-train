import React from "react";
import { Inspiration } from "../api/inspiration";

type Props = {
  inspiration: Inspiration;
  onRemix: () => void;
  onSave: () => void;
  isFavorite: boolean;
};

const cardStyle: React.CSSProperties = {
  margin: "2em auto",
  padding: 24,
  maxWidth: 420,
  borderRadius: 16,
  boxShadow: "0 2px 16px #0002",
  background: "#fff",
  textAlign: "center",
};

export default function InspirationCard({ inspiration, onRemix, onSave, isFavorite }: Props) {
  return (
    <div style={cardStyle}>
      <img
        src={inspiration.image}
        style={{ width: "100%", borderRadius: 8, marginBottom: 16 }}
        alt="Inspiration visual"
      />
      <blockquote style={{ fontSize: 20, margin: 0 }}>
        “{inspiration.quote}”
        <footer style={{ marginTop: 12, color: "#666", fontWeight: 500 }}>— {inspiration.author}</footer>
      </blockquote>
      <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={onRemix}>Remix</button>
        <button onClick={onSave} disabled={isFavorite} style={{ opacity: isFavorite ? 0.7 : 1 }}>
          {isFavorite ? "Saved" : "Save to Favorites"}
        </button>
      </div>
    </div>
  );
}
