'use client'; // Add this directive

import React from 'react';
import { Canvas } from '@react-three/fiber';

// Minimal component to test core R3F functionality and React context
export function Background3D() {
  // Ensure this component only renders client-side by dynamic import in the loader

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none"> {/* Ensure it stays behind content */}
      <Canvas>
        {/* Intentionally keep Canvas content minimal for debugging React context issues */}
         <ambientLight intensity={0.1} />
         <pointLight position={[10, 10, 10]} intensity={0.3}/>
         {/* Add a simple mesh to ensure canvas is rendering something */}
         <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
         </mesh>
      </Canvas>
       {/* Optional: Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background opacity-90 pointer-events-none"></div>
    </div>
  );
}
