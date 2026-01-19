import React from "react";
import { Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* LOGO DI KIRI */}
        <div className="flex items-center gap-2">
          <Tv className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Movie</h2>
        </div>

        {/* COPYRIGHT DI KANAN */}
        <p className="text-gray-400 text-sm">Copyright ©2025 Movie Explorer</p>
      </div>
    </footer>
  );
};

export default Footer;
