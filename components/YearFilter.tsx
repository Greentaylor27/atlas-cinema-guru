'use client';

type YearFilterProps = {
  minYear: string;
  maxYear: string;
  onMinYearChange: (value: string) => void;
  onMaxYearChange: (value: string) => void;
};

export default function YearFilter({ minYear, maxYear, onMinYearChange, onMaxYearChange}: YearFilterProps) {

  return (
  <div className="flex gap-4 max-w-sm">
    <div className="flex flex-col w-full">
      <label htmlFor="min-year" className="p-2">Min Year</label>
      <input
        type="number"
        name="min-year"
        id="min-year"
        className="search-bar"
        placeholder="e.g., 1970"
        value={minYear}
        onChange={(e) => onMinYearChange(e.target.value)}
      />
    </div>
    <div className="flex flex-col w-full">
      <label htmlFor="max-year" className="p-2">Max Year</label>
      <input
        type="number"
        name="max-year"
        id="max-year"
        className="search-bar"
        placeholder="e.g., 2025"
        value={maxYear}
        onChange={(e) => onMaxYearChange(e.target.value)}
      />
    </div>
  </div>
  );
}
