import { fetchGenres } from "@/lib/data";
import GenreFilterClient from "./GenreFilterClient";

export default async GenreFilterServer() {
  const genres = await fetchGenres();
  return <GenreFilterClient genres={genres} />
}
