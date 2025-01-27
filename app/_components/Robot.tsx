"use client";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function Robot() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] h-[80%] max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-lg flex items-center justify-center transition-all duration-300">
        {/* Conditional Rendering */}
        {hasError ? (
          <div className="text-gray-500 dark:text-gray-300 text-lg">
            ❌ Failed to load the model
          </div>
        ) : (
          <>
            {!isLoaded && (
              <div className="absolute text-gray-500 dark:text-gray-300 text-lg">
                ⏳ Loading model...
              </div>
            )}
            <Spline
              scene="https://prod.spline.design/gh73iiR9EanOO7sD/scene.splinecode"
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              className={`transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }  `}
            />
          </>
        )}
      </div>
    </div>
  );
}
