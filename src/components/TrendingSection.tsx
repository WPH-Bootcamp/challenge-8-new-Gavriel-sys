import React, { useRef, useState, useEffect } from "react";
import ArrowIcon from "../assets/arrow.svg";
import type { Movie } from "../lib/api";
import MovieCard from "./MovieCard";

interface TrendingSectionProps {
  title: string;
  movies: Movie[];
}

const TrendingSection: React.FC<TrendingSectionProps> = ({ title, movies }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
  }, [movies]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <section className="px-8 py-10 bg-black my-8 w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-6 pl-2 border-l-4 border-red-600">
        {title}
      </h2>

      <div className="relative group w-full">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-2 hover:scale-125 transition-transform !bg-transparent border-none outline-none ring-0 shadow-none"
            style={{
              marginLeft: "-10px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <img
              src={ArrowIcon}
              alt="Scroll Left"
              className="w-10 h-10 rotate-180 drop-shadow-lg filter invert-0"
            />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-2 hover:scale-125 transition-transform !bg-transparent border-none outline-none ring-0 shadow-none"
            style={{
              marginRight: "-10px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <img
              src={ArrowIcon}
              alt="Scroll Right"
              className="w-10 h-10 drop-shadow-lg filter invert-0"
            />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 scroll-smooth px-4 w-full"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {movies.map((movie, index) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
