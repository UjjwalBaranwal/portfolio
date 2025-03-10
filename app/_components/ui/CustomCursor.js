"use client";
import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const coords = useRef({ x: 0, y: 0 });
  const [positions, setPositions] = useState(
    new Array(20).fill({ x: 0, y: 0 })
  );

  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e"
  ];

  const sparkleColors = [
    "#ffffff", "#f0f0f0", "#e0e0e0", "#d0d0d0", "#c0c0c0", "#b0b0b0",
    "#a0a0a0", "#909090", "#808080", "#707070", "#606060", "#505050",
    "#404040", "#303030", "#202020", "#101010"
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      setPositions((prevPositions) => {
        let x = coords.current.x;
        let y = coords.current.y;
        return prevPositions.map((_, index) => {
          const nextCircle = prevPositions[index + 1] || prevPositions[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
          return { x, y };
        });
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    // Detect dark mode
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleDarkModeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  return (
    <div className="cursor-container">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="circle"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            backgroundColor: isDarkMode
              ? sparkleColors[index % sparkleColors.length]
              : colors[index % colors.length],
            transform: `translate(-50%, -50%) scale(${(positions.length - index) / positions.length})`,
            opacity: isDarkMode ? 0.8 : 1, // Adjust opacity for sparkles
            boxShadow: isDarkMode
              ? `0 0 10px ${sparkleColors[index % sparkleColors.length]}`
              : `0 0 10px ${colors[index % colors.length]}`,
          }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;