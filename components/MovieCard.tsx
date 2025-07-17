'use client'

import { useState } from "react";
import Image from "next/image";
import ClockOutline from "@/assets/Icon/Outline/clock.svg";
import StarOutline from "@/assets/Icon/Outline/star.svg";
import ClockSolid from "@/assets/Icon/Solid/clock.svg";
import StarSolid from "@/assets/Icon/Solid/star.svg";
import IconToggleButton from "./IconToggleButton";


type MovieCardProps = {
  titleId: string;
  title: string;
  image: string;
  year: number;
  genre: string;
  synopsis: string;
  isFavorited?: boolean;
  isWatchLater?: boolean;
}

export default function({
  titleId,
  title,
  image,
  year,
  genre,
  synopsis,
  isFavorited = false,
  isWatchLater = false,
}: MovieCardProps) {
  const [favorited, setFavorited] = useState(isFavorited);
  const [watchLater, setWatchLater] = useState(isWatchLater);

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

      {/* Top row of hover state */}
      <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
        <button
          onClick={async () => {
            setFavorited((prev) => !prev);
            try {
              await fetch("/api/favorites", {
                method: favorited ? "DELETE" : "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ title_id: titleId }),
              });
            } catch (error) {
              console.error("Error toggling favorite:", error);
            }
          }}
          aria-label="Toggle Favorite" 
          className="cursor-pointer"
        >
          <IconToggleButton
            activeIcon={StarSolid}
            inactiveIcon={StarOutline}
            isActive={favorited}
            alt="Favorite"
          />
        </button>
        <button onClick={() => setWatchLater(!watchLater)} aria-label="Toggle Watch Later" className="cursor-pointer">
          <IconToggleButton
            activeIcon={ClockSolid}
            inactiveIcon={ClockOutline}
            isActive={watchLater}
            alt="Watch Later"
          />
        </button>
      </div>

      {/* Hovered Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#001241] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 flex flex-col p-3 h-[40%] justify-between">


        {/* Title and Year */}
        <p className="text-2xl font-light pb-2">
          {title} ({year})
        </p>

        {/* Synopsis */}
        <p className="text-lg font-light">{synopsis}</p>

        {/* Genre */}
        <div className="mt-auto">
          <span className="w-fit inline-block rounded-3xl bg-[#1DD2AF] text-white py-3 px-2">{genre}</span>
        </div>
      </div>
    </div>
  );
}
