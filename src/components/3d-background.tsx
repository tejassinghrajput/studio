'use client';

import React from 'react'; // Keep React import
import { Canvas } from '@react-three/fiber';
// Removed Suspense and other R3F/Drei/Maath/THREE imports for simplification

// Simplified component to test core R3F functionality
function SimpleBox() {
  // No hooks needed here for now
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#38BDF8" /> {/* Use accent color */}
    </mesh>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10"> {/* Ensure it stays behind content */}
      <Canvas camera={{ position: [0, 0, 5] }}> {/* Adjusted camera for box */}
        {/* Basic lighting */}
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Render the simplest possible R3F element */}
        <SimpleBox />

        {/* Suspense removed for testing */}
      </Canvas>
       {/* Gradient Overlay for depth */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none"></div>
    </div>
  );
}
