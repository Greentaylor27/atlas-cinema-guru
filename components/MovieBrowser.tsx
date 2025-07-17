'use client';

import { useEffect, useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import PaginationButtons from "./PaginationButton";

type Props = {
  genres: string[];
  userEmail: string;
  initialTitles: Title[];
  isLastPageInitial: boolean;
};

type Title = {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string;
  favorited: boolean;
  watchLater: boolean;
};

export default function MovieBrowser({
  genres,
  userEmail,
  initialTitles,
  isLastPageInitial
}: Props) {
  const [query, setQuery] = useState('');
  const [titles, setTitles] = useState<Title[]>(initialTitles);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(isLastPageInitial);

  const minYear = 1990;
  const maxYear = new Date().getFullYear();
  const PAGE_SIZE = 6;

  useEffect(() => {
    async function loadTitles() {
      const res = await fetch(`/api/titles?page=${page}&query=${query}&minYear=${minYear}&maxYear=${maxYear}`);
      const data = await res.json();
      setTitles(data.title);
      setIsLastPage(data.isLastPage);
    }

    if (page !== 1 || query !== '') {
      loadTitles();
    }
  }, [page, query]);

  return (
    <>
      <Filter onSearch={setQuery} genres={genres} />
      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-start">
        {titles.map((movies) => (
          <MovieCard
            key={movies.id}
            titleId={movies.id}
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

      <footer className="flex justify-center">
        <PaginationButtons
          currentPage={page}
          isLastPage={isLastPage}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </footer>
    </>
  );
}
