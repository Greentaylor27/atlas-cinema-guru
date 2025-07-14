import GenreButton from "./GenreButton";

export default function GenreFilter() {
  return(
    <div className="w-full">
      <label className="block mb-2">Genre</label>
      <div className="flex flex-wrap gap-2 justify-end">
        <GenreButton genre="Romance" />
        <GenreButton genre="Horror" />
        <GenreButton genre="Drama" />
        <GenreButton genre="Action" />
        <GenreButton genre="Mystery" />
        <GenreButton genre="Fantasy" />
        <GenreButton genre="Thriller" />
        <GenreButton genre="Western" />
        <GenreButton genre="Sci-Fi" />
        <GenreButton genre="Adventure" />
      </div>
    </div>
  )
}
