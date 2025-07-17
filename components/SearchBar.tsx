'use client';

import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSearch(query.trim());
  }

  return (
    <div className="w-full max-w-sm">
      <form role="search" className="flex flex-col w-full" onSubmit={handleSubmit}>
        <label htmlFor="search" className="p-2">Search</label>
        <input
          className="search-bar"
          type="search"
          name="search"
          id="search"
          autoComplete="on"
          placeholder="Search Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
