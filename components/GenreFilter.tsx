import { fetchGenres } from "@/lib/data";
import GenreButton from "./GenreButton";

export default async function GenreFilter() {
  const genre = await fetchGenres();

  return(
    <div className="flex flex-col">
      <label className="mb-2">Genres</label>
      <div className="grid grid-cols-5 gap-1.5 w-full">
        {genre.map((genre: string) => (
          <GenreButton key={genre} genre={genre} />
        ))}
      </div>
    </div>
  )
}
