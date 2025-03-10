"use client";
import { useState } from "react";
import { IoSkullOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";

function Navigation({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 rounded-xl p-4 z-50 transition-all duration-300 border border-transparent hover:border-blue-500 hover:shadow-[0_0_15px_rgba(0,123,255,0.6)]">
      <div className="flex items-center justify-between w-full md:justify-center">
        {/* Large screen navigation */}
        <div className="hidden md:flex md:items-center md:gap-x-10 list-none text-gray-900 dark:text-gray-100">
          {children}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="absolute top-2 right-4 md:hidden">
          <button
            onClick={toggle}
            className="transition-transform duration-300 ease-in-out text-gray-900 dark:text-gray-100 hover:text-blue-500"
          >
            {isOpen ? (
              <IoSkullOutline className="text-xl transition-transform duration-300" />
            ) : (
              <PiHamburger className="text-xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 rounded-md p-4 list-none flex flex-col gap-4 items-center transition-all duration-300 ease-in-out md:hidden
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </nav>
  );
}

export default Navigation;
