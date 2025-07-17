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
  showFilter?: boolean;
  onPageChange?: (newPage: number) => void;
};

export type Title = {
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
  isLastPageInitial,
  showFilter = true,
  onPageChange,
}: Props) {

  const [query, setQuery] = useState('');
  const [titles, setTitles] = useState<Title[]>(initialTitles);
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(isLastPageInitial);
  const [minYear, setMinYear] = useState('');
  const [maxYear, setMaxYear] = useState('');

  useEffect(() => {
    async function loadTitles() {
      const params = new URLSearchParams();
      params.set("page", page.toString());
      params.set("query", query);

      if (minYear) params.set('minYear', minYear);
      if (maxYear) params.set("maxYear", maxYear);

      const res = await fetch(`/api/titles?${params.toString()}`);
      const data = await res.json();

      setTitles(data.title);
      setIsLastPage(data.title.length < 6);
    }

    if (showFilter) {
      loadTitles();
    }
  }, [page, query, minYear, maxYear, showFilter]);

  function handlePageChange(newPage: number) {
    if (onPageChange) {
      onPageChange(newPage);
    } else {
      setPage(newPage);
    }
  }

  return (
    <>
      {showFilter && (
        <Filter
          onSearch={setQuery}
          genres={genres}
          minYear={minYear}
          maxYear={maxYear}
          onMinYearChange={setMinYear}
          onMaxYearChange={setMaxYear}
        />
      )}

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
          hasMore={!isLastPage}
          onPageChange={handlePageChange}
        />
      </footer>
    </>
  );
}
