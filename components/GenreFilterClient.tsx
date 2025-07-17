'use client';

import GenreButton from "./GenreButton";

type GenreFilterClientProps = {
  genres: string[];
}

export default function GenreFilterClient({ genres }: GenreFilterClientProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2">Genres</label>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1.5 w-full">
        {genres.map((genre) => (
          <GenreButton key={genre} genre={genre} />
        ))}
      </div>
    </div>
  )
}
