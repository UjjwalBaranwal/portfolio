"use client"
import { useState } from "react";

import { IoSkullOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";

function Navigation({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return ( 
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl bg-white shadow-md rounded-xl p-4 z-50">
      <div className="flex items-center justify-between w-full md:justify-center">
        {/* Large screen navigation - centered when md and above */}
        <div className="hidden md:flex md:gap-x-7 list-none">{children}</div>

        {/* Mobile Menu Toggle Button */}
        <div className="absolute top-2 right-4 md:hidden">
          <button
            onClick={toggle}
            className="transition-transform duration-300 ease-in-out"
          >
            {isOpen ? (
              <IoSkullOutline className="text-xl transition-transform duration-300" />
            ) : (
              <PiHamburger className="text-xl transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md rounded-md p-4 list-none flex flex-col gap-4 items-center transition-all duration-300 ease-in-out md:hidden
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

/*<button
          onClick={() => {
            scrollToSection(aboutRef);
            setActiveSection("about");
          }}
          className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
        >
          About
          <span
            className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
              activeSection === "about" ? "w-full" : ""
            }`}
          ></span>
        </button>

        <button
          onClick={() => {
            scrollToSection(projectsRef);
            setActiveSection("projects");
          }}
          className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
        >
          Projects
          <span
            className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
              activeSection === "projects" ? "w-full" : ""
            }`}
          ></span>
        </button>

        <button
          onClick={() => {
            scrollToSection(contactRef);
            setActiveSection("contact");
          }}
          className="text-gray-700 hover:text-blue-500 text-md font-medium relative transition-all nav-link"
        >
          Contact
          <span
            className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
              activeSection === "contact" ? "w-full" : ""
            }`}
          ></span>
        </button> */
