'use client'

import { useState } from "react";

export function useFavorite(initial: boolean, titleId: string) {
  const [favorited, setFavorited] = useState(initial);

  const toggleFavorite = async () => {
    const method = favorited ? "DELETE" : "POST";
    setFavorited(!favorited);

    try {
      await fetch(`/api/favorites/${titleId}`, {
        method,
      });
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return { favorited, toggleFavorite };
}
