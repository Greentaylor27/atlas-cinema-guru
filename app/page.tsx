import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MovieCard from "@/components/MovieCard";
import { fetchGenres, fetchTitles } from "@/lib/data";
import PaginationButtons from "@/components/PaginationButton";
import Filter from "@/components/Filter";


export default async function Page() {
  const session = await auth();
  const userEmail = session?.user?.email;

  if(!userEmail) {
    redirect("/api/auth/signin");
  }

  const page = 1;
  const minYear = 1900;
  const maxYear = new Date().getFullYear();
  const query = "";
  const allGenres = await fetchGenres();

  const genres = allGenres.length > 0 ? allGenres : [];
  
  const titles = await fetchTitles(
    page,
    minYear,
    maxYear,
    query,
    genres,
    userEmail
  );

  return (
    <div className="flex flex-col justify-between min-h-screen space-y-6 px-2">
      <section className="w-full">
        <Filter />
      </section>

      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-start">
        {titles.map((movies) => (
          <MovieCard
            key={movies.id}
            title={movies.title}
            image={movies.image}
            year={movies.released}
            genre={movies.genre}
            synopsis={movies.synopsis}
            isFavorited={movies.favorited}
            isWatchLater={movies.watchLater}
          />
        ))}
      </section>

      <footer>
        <PaginationButtons />
      </footer>
    </div>
  );
}
