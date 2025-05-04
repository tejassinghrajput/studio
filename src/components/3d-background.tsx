'use client';

import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#61dafb" // Use accent color from theme (approximate HSL 203 92% 60%)
          size={0.004} // Smaller points
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10"> {/* Ensure it stays behind content */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
       {/* Gradient Overlay for depth */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none"></div>
    </div>
  );
}
