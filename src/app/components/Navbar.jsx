"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center absolute mt-6 px-4">
      <nav className="w-full max-w-6xl bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-md">
        
        {/* Left - App Name */}
        <h1 className="text-3xl font-samarkan text-black cursor-pointer">
          Swachh Prahari
        </h1>

        {/* Right - Nav Items + Login */}
        <div className="flex items-center gap-8">
          
          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-black font-medium">
            {["Home", "Leaderboard", "About Us", "Contact Us"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="transition-colors duration-300 group-hover:text-green-500">
                  {item}
                </span>

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
          >
            Login
          </Link>

        </div>
      </nav>
    </div>
  );
}
