'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';

export function Background3D() {
  // Ensure this component only renders client-side by dynamic import in the loader
  // If this still causes the error, the issue might be deeper in the R3F/Next.js integration

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none"> {/* Ensure it stays behind content and doesn't intercept clicks */}
      <Canvas>
        {/* Intentionally empty to test the most basic Canvas setup */}
        {/* Add basic lighting if needed for future elements, but keep it minimal for now */}
         <ambientLight intensity={0.5} />
         <pointLight position={[10, 10, 10]} intensity={0.5}/>
      </Canvas>
       {/* Optional: Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background opacity-90 pointer-events-none"></div>
    </div>
  );
}
