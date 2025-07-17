'use client';

import GenreFilter from "./GenreFilterClient";
import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";

type FilterProps = {
  onSearch: (query: string) => void;
  genres: string[];
  minYear: string;
  maxYear: string;
  onMinYearChange: (value: string) => void;
  onMaxYearChange: (value: string) => void;
};

export default function Filter({ onSearch, genres, minYear, maxYear, onMinYearChange, onMaxYearChange }: FilterProps) {
  return (
    <div className="flex justify-between items-start gap-6 pt-4">
      <div className="flex flex-col gap-2 w-1/2">
        <SearchBar onSearch={onSearch}/>
        <YearFilter
          minYear={minYear}
          maxYear={maxYear}
          onMinYearChange={onMinYearChange}
          onMaxYearChange={onMaxYearChange}
        />
      </div>

      <div className="w-1/2">
        <GenreFilter genres={genres}/>
      </div>
    </div>
  );
}
