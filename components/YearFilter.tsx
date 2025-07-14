export default function YearFilter() {
  return (
  <div className="flex gap-4 max-w-sm">
    <form className="flex flex-col w-full">
      <label htmlFor="min-year" className="p-2">Min Year</label>
      <input
        type="number"
        name="min-year"
        id="min-year"
        className="search-bar"
        placeholder="e.g., 1970"
      />
    </form>
    <form className="flex flex-col w-full">
      <label htmlFor="max-year" className="p-2">Max Year</label>
      <input
        type="number"
        name="max-year"
        id="max-year"
        className="search-bar"
        placeholder="e.g., 2025"
      />
    </form>
  </div>
  );
}
