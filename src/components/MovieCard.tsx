import React from "react";
import { Star } from "lucide-react";

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
  rank?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  posterPath,
  rating,
  rank,
}) => {
  const imageUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}${posterPath}`;

  return (
    <div className="relative min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer hover:scale-105 transition-transform duration-300">
      {/* Container Gambar */}
      <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px]">
        <img
          src={posterPath ? imageUrl : "https://placehold.co/200x300"}
          alt={title}
          className="w-full h-full object-cover"
        />

        {rank && (
          <div className="absolute top-2 left-2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
            <span className="text-white font-bold text-lg">{rank}</span>
          </div>
        )}
      </div>

      {/* Info text */}
      <div className="mt-3">
        <h3 className="text-white text-lg font-bold truncate">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-400 text-sm">{rating.toFixed(1)}/10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
