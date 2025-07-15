export default function GenreButton({ genre }: { genre: string }) {
  return (
    <button className="px-2 py-1 bg-[#001241] text-white rounded transition">
      {genre}
    </button>
  );
}
