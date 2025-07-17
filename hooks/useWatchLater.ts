'use client'

import { useState } from "react";

export function useWatchLater(initial: boolean, titleId: string) {
  const [watchLatered, setWatchLater] = useState(initial);

  const toggleWatchLater = async () => {
    const method = watchLatered ? "DELETE" : "POST";
    setWatchLater(!watchLatered);

    try {
      await fetch(`api/watch-later/${titleId}`, {
        method,
      });
    } catch (error) {
      console.error("Error toggling watch later:", error);
    }
  };

  return { watchLatered, toggleWatchLater };
}
