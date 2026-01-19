import React from "react";
import { Search, Tv } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-5 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      {/* LOGO */}
      <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
        <Tv className="text-red-600 w-8 h-8" />
        <h1 className="text-white text-2xl font-bold tracking-wide">Movie</h1>
      </div>

      {/* MENU LINKS (Desktop) */}
      <div className="hidden md:flex gap-8 text-gray-200 font-medium">
        <a
          href="#"
          className="hover:text-red-500 transition hover:underline underline-offset-4"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-red-500 transition hover:underline underline-offset-4"
        >
          Favorites
        </a>
      </div>

      {/* SEARCH BAR */}
      <div className="relative group">
        <input
          type="text"
          placeholder="Search Movie"
          className="bg-gray-900/50 text-white border border-gray-600 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-40 sm:w-64 transition-all duration-300 focus:w-72"
        />
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4 group-focus-within:text-red-500 transition" />
      </div>
    </nav>
  );
};

export default Navbar;
