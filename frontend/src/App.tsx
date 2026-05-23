import React, { useEffect, useState } from "react";
import { fetchInspiration, Inspiration } from "./api/inspiration";
import InspirationCard from "./components/InspirationCard";
import Favorites from "./components/Favorites";

function getStoredFavorites(): Inspiration[] {
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function setStoredFavorites(favorites: Inspiration[]) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

const App: React.FC = () => {
  const [current, setCurrent] = useState<Inspiration | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<Inspiration[]>(getStoredFavorites());

  useEffect(() => {
    handleRemix();
    // eslint-disable-next-line
  }, []);

  function handleRemix() {
    setLoading(true);
    setError("");
    fetchInspiration()
      .then(setCurrent)
      .catch(() => setError("Failed to load inspiration."))
      .finally(() => setLoading(false));
  }

  function handleSave() {
    if (!current) return;
    const already = favorites.some(f => f.quote === current.quote && f.author === current.author);
    if (!already) {
      const next = [current, ...favorites];
      setFavorites(next);
      setStoredFavorites(next);
    }
  }

  function removeFavorite(idx: number) {
    const next = favorites.filter((_f, i) => i !== idx);
    setFavorites(next);
    setStoredFavorites(next);
  }

  const isFavorite = current && favorites.some(f => f.quote === current.quote && f.author === current.author);

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f7f7fa', minHeight: '100vh', paddingBottom: 60 }}>
      <h1 style={{ textAlign: 'center', marginTop: 36 }}>AI Inspiration Board 🚀</h1>
      <p style={{ textAlign: 'center', margin: 0 }}>
        Get daily AI-powered inspirations — motivational quotes, creative prompts, and beautiful images.<br/>Save your favorites, remix them, and share the inspiration!
      </p>
      {loading && <p style={{ textAlign: 'center', marginTop: 30 }}>Loading inspiration...</p>}
      {error && <p style={{ color: 'crimson', textAlign: 'center', marginTop: 30 }}>{error}</p>}
      {current && !loading && !error && (
        <InspirationCard
          inspiration={current}
          onRemix={handleRemix}
          onSave={handleSave}
          isFavorite={!!isFavorite}
        />
      )}
      <Favorites favorites={favorites} onRemove={removeFavorite} />
      <footer
        style={{ textAlign: 'center', color: '#888', fontSize: 15, marginTop: 80 }}>
        MIT License · <a href="https://github.com/mya404/improved-train" style={{ color: '#6a60d4' }}>GitHub</a>
      </footer>
    </div>
  );
};

export default App;
