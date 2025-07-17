import { Title } from "./MovieBrowser"
import MovieCard from "./MovieCard";

type Props = {
  titles: Title[];
  heading: string;
};

export default function MovieCardOverlay({ titles, heading }: Props) {
  return (
    <>
      <h1 className="text-2xl font-bold p-4">{heading}</h1>
      <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4 justify-center items-start">
        {titles.map((movie) => (
          <MovieCard
            key={movie.id}
            titleId={movie.id}
            title={movie.title}
            image={movie.image}
            year={movie.released}
            genre={movie.genre}
            synopsis={movie.synopsis}
            isFavorited={movie.favorited}
            isWatchLater={movie.watchLater}
          />
        ))}
      </section>
    </>
  )
}
