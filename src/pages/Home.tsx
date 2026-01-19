import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../lib/api";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import NewReleaseSection from "../components/NewReleaseSection";
import Footer from "../components/Footer";

const Home = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (isLoading)
    return <div className="text-center text-white p-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500 p-10">Error fetching data</div>
    );

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      {movies && movies.length > 0 && <HeroSection movie={movies[0]} />}

      {/* TRENDING SECTION */}
      <div className="bg-black min-h-screen">
        {movies && <TrendingSection title="Trending Now" movies={movies} />}
        <NewReleaseSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
