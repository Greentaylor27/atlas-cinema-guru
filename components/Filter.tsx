import SearchBar from "./SearchBar";
import YearFilter from "./YearFilter";

export default function Filter() {
  return (
    <div className="flex flex-col w-full gap-4 m-2">
      <SearchBar />
      <YearFilter />
    </div>
  )
}
