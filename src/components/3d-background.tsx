// Ensure this component and its dependencies only run client-side
'use client';

import React, { useState, useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// Ensure maath is correctly imported if needed, or remove if not used directly after simplification
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null!); // Use non-null assertion

  // Generate sphere points using useMemo to prevent regeneration on every render
  const sphere = useMemo(() => random.inSphere(new Float32Array(5001 * 3), { radius: 1.2 }) as Float32Array, []);


  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#F8FAFC" // Slate-50 from theme
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export function Background3D() {
  // This component now assumes it's loaded via next/dynamic with ssr: false
  return (
    <div className="fixed inset-0 z-[-1] w-full h-full"> {/* Ensure it covers the screen and is behind content */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
