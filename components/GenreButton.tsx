export default function GenreButton({ genre }: { genre: string }) {
  return (
    <button className="filterButton">
      {genre}
    </button>
  );
}
