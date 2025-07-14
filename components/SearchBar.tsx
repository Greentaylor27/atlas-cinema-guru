export default function SearchBar() {
  return (
    <div className="w-full max-w-sm ml-4">
      <form role="search" className="flex flex-col w-full">
        <label htmlFor="search" className="p-2">Search</label>
        <input
          className="search-bar"
          type="search"
          name="search"
          id="search"
          autoComplete="on"
          placeholder="Search Movies..."
        />
      </form>
    </div>
  );
}
