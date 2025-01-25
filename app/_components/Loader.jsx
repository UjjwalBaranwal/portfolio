"use client"
import { Html, useProgress } from "@react-three/drei";
import dynamic from 'next/dynamic'

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <div
      
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default CanvasLoader;
