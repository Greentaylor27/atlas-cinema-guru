import { fetchGenres } from "@/lib/data";
import GenreButton from "./GenreButton";

export default async function GenreFilter() {
  const genre = await fetchGenres();

  return(
    <div className="flex flex-col">
      <label className="mb-2">Genre</label>
      <div className="grid grid-cols-5 gap-2 max-h-1/3">
        {genre.map((genre: string) => (
          <GenreButton key={genre} genre={genre} />
        ))}
      </div>
    </div>
  )
}
