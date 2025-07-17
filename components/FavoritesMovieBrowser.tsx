'use client';

import MovieCard from "@/components/MovieCard";
import PaginationButtons from "@/components/PaginationButton";
import { useRouter } from "next/navigation";
import { Title } from "./MovieBrowser";

type Props = {
  titles: Title[];
  currentPage: number;
  isLastPageInitial: boolean;
  userEmail: string;
};

export default function FavoritesMovieBrowser({ titles, currentPage, isLastPageInitial, userEmail }: Props) {
  const router = useRouter();

  function onPageChange(newPage: number) {
    router.push(`/favorite-page?page=${newPage}`);
  }

  return (
    <>
      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-start">
        {titles.map((movie) => (
          <MovieCard
            key={movie.id}
            titleId={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.released}
            genre={movie.genre}
            synopsis={movie.synopsis}
            isFavorited={true}
            isWatchLater={movie.watchLater}
          />
        ))}
      </section>

      <footer className="flex justify-center">
        <PaginationButtons
          currentPage={currentPage}
          hasMore={!isLastPageInitial}
          onPageChange={onPageChange}
        />
      </footer>
    </>
  )
}
