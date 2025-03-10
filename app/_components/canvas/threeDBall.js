"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

// Import your logos (replace with your own images)
const jsLogo = 'js.png'; // Path to your JS logo
const reactLogo = 'react.png'; // Path to your React logo

function Ball() {
  const mesh = useRef();
  const jsTexture = useLoader(TextureLoader, jsLogo);
  const reactTexture = useLoader(TextureLoader, reactLogo);

  // Rotate the ball
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={jsTexture} />
      <meshStandardMaterial map={reactLogo} />
    </mesh>
  );
}

export default function ThreeDBall() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Ball />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}