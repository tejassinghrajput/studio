'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the 3D background component ONLY on the client-side
const Background3D = dynamic(
  () => import('./3d-background').then((mod) => mod.Background3D),
  {
    ssr: false, // Crucial for client-side only rendering
    loading: () => (
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-background" // Simple background during load
        style={{
          // You can add a subtle gradient or pattern here if desired
          background: 'radial-gradient(ellipse at center, hsl(var(--background)), hsl(var(--background) / 0.8))'
        }}
      />
    ),
  }
);

export function DynamicBackgroundLoader() {
  // This component acts as a wrapper that ensures Background3D is only rendered client-side
  return <Background3D />;
}
