"use client";
import { useEffect, useState } from "react";
import Robot from "./Robot";
import { motion } from "framer-motion";

function RobotPart() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#100D25] p-6 rounded-lg relative">
      <motion.div
        className="bg-yellow-200 h-8 w-8 rounded-full absolute pointer-events-none"
        style={{
          top: mousePosition.y - 16, // Subtract to center the circle
          left: mousePosition.x - 16, // Subtract to center the circle
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
      ></motion.div>
      <Robot />
    </div>
  );
}

export default RobotPart;
