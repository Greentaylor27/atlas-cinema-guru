import GenreFilter from "./GenreFilter";
import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";

export default function Filter() {
  return (
    <div className="flex justify-between items-start gap-6 pt-4">
      <div className="flex flex-col gap-2 w-1/2">
        <SearchBar />
        <YearFilter />
      </div>

      <div className="w-1/2">
        <GenreFilter />
      </div>
    </div>
  );
}
