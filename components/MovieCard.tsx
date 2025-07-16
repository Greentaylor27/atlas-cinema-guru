import Image from "next/image";
import Clock from "@/assets/Icon/Solid/clock.svg";
import Star from "@/assets/Icon/Solid/star.svg";

type MovieCardProps = {
  title: string;
  image: string;
  year: number;
  genre: string;
  synopsis: string;
  isFavorited?: boolean;
  isWatchLater?: boolean;
}

export default function({
  title,
  image,
  year,
  genre,
  synopsis,
  isFavorited = false,
  isWatchLater = false,
}: MovieCardProps) {
  return (
    <div className="group relative shadow-lg bg-[#001241] text-white transition-transform duration-300 hover:scale-105 rounded-xl border-2 border-[#1DD2AF]">
      {/* Unhovered movie card */}
      <Image
        src={image}
        alt={title}
        width={200}
        height={300}
        className="w-full h-auto object-cover"
      />

      {/* Hovered Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#001241] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex flex-col p-3 h-[40%] justify-between">

        {/* Top row of hover state */}
        <div className="flex justify-end space-x-3 mb-1">
          <button>
            <img
              src={Star}
              alt="Favorite"
              className={`fill-white transition-opacity duration-200 ${
                isFavorited ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
          <button>
            <img
              src={Clock}
              alt="Watch Later"
              className={`fill-white transition-opacity duration-200 ${
                isWatchLater ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>

        {/* Title and Year */}
        <p className="text-2xl font-light pb-2">
          {title} ({year})
        </p>

        {/* Synopsis */}
        <p className="text-lg font-light">{synopsis || "Something went wrong here!!"}</p>

        {/* Genre */}
        <div className="mt-auto">
          <span className="w-fit inline-block rounded-3xl bg-[#1DD2AF] text-white py-3 px-2">{genre}</span>
        </div>
      </div>
    </div>
  );
}
