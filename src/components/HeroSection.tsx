import React from "react";
import { Play, Info } from "lucide-react";
import type { Movie } from "../lib/api";

interface HeroSectionProps {
  movie: Movie;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  const backdropUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl space-y-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          {movie.title}
        </h1>

        <p className="text-gray-300 text-lg line-clamp-3 md:line-clamp-none">
          This is a sample description because standard list API might provide
          short overview. Two highly trained operatives grow close from a
          distance after being sent to guard opposite sides of a mysterious
          gorge.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition">
            <Play className="w-5 h-5 fill-current" /> Watch Trailer
          </button>

          <button className="flex items-center gap-2 bg-transparent border border-gray-500 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold transition">
            <Info className="w-5 h-5" /> See Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
