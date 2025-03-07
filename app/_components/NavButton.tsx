"use client";
import React from "react";

interface NavButtonProps {
  label: string;
  targetSection: string;
  activeSection: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({
  label,
  targetSection,
  activeSection,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 text-md font-medium transition-all nav-link"
    >
      {label}
      <span
        className={`absolute left-0 bottom-0 h-1 w-0 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${
          activeSection === targetSection ? "w-full" : ""
        }`}
      ></span>
    </button>
  );
};

export default NavButton;
