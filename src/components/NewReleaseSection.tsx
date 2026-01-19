import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getNewReleases } from "../lib/api";
import type { Movie } from "../lib/api";
import MovieCard from "./MovieCard";

const NewReleaseSection = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["newReleases"],
      queryFn: getNewReleases,
      initialPageParam: 1,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    });

  if (status === "pending")
    return <div className="text-white p-10">Loading New Releases...</div>;
  if (status === "error")
    return <div className="text-red-500 p-10">Error fetching data</div>;

  return (
    <section className="px-8 py-10 bg-black relative">
      <h2 className="text-3xl font-bold text-white mb-8">New Release</h2>

      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pb-20">
          {data?.pages.map((page: any, pageIndex: number) => (
            <React.Fragment key={pageIndex}>
              {page.results.map((movie: Movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  releaseDate={movie.release_date}
                  rating={movie.vote_average}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black via-black/90 to-transparent flex items-end justify-center pb-10 pointer-events-none">
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="pointer-events-auto px-8 py-3 rounded-full text-white font-semibold transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
            style={{ backgroundColor: "#181D27", border: "1px solid #333" }}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewReleaseSection;
