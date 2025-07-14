import GenreFilter from "./GenreFilter";
import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";

export default function Filter() {
  return (
    <div className="flex justify-between w-full gap-4 m-2">
      <div className="flex flex-col gap-4">
        <SearchBar />
        <YearFilter />
      </div>

      <div className="flex-1">
        <GenreFilter />
      </div>
    </div>
  )
}
