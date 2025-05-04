'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three'; // Keep THREE if needed later, but simplify component first

// Simplified component to test core R3F functionality
function SimpleBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#38BDF8" /> {/* Use accent color */}
    </mesh>
  );
}

// Original Stars component - commented out for testing
/*
function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  // Use useState here, ensure it's imported
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
          color="#38BDF8" // Use accent color from theme
          size={0.004} // Smaller points
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
*/

export function Background3D() {
  return (
    <div className="fixed inset-0 -z-10"> {/* Ensure it stays behind content */}
      <Canvas camera={{ position: [0, 0, 5] }}> {/* Adjusted camera for box */}
        <ambientLight intensity={0.8} /> {/* Added ambient light */}
        <pointLight position={[10, 10, 10]} intensity={1} /> {/* Added point light */}
        <Suspense fallback={null}>
           {/* <Stars /> */} {/* Temporarily replace Stars with SimpleBox */}
          <SimpleBox />
        </Suspense>
      </Canvas>
       {/* Gradient Overlay for depth */}
       <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none"></div>
    </div>
  );
}
