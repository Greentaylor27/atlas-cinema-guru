export default function SearchBar() {
  return (
    <div>
      <form role="search" className="flex flex-col">
        <label htmlFor="search" className="p-2">Search</label>
        <input
          className="rounded-full border-1 border-[#1DD2AF] p-1 w-full"
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
