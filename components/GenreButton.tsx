export default function GenreButton({ genre }: { genre: string }) {
  return (
    <button className="border border-[#1DD2AF] bg-[#001241] text-white rounded-full px-3 py-1 text-sm font-medium hover:cursor-pointer">
      {genre}
    </button>
  );
}
