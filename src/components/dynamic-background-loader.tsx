'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react'; // Import useState and useEffect

// Dynamically import the 3D background component inside a client component
const Background3D = dynamic(() => import('@/components/3d-background').then(mod => mod.Background3D), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-background pointer-events-none" aria-hidden="true"/>, // Render a simple div during load
});

export function DynamicBackgroundLoader() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the initial render
    setIsMounted(true);
  }, []); // Empty dependency array ensures it runs once on mount

  // Only render the Background3D component once the component is mounted on the client
  if (!isMounted) {
    // Render the loading state (or null) until mounted to avoid rendering R3F components prematurely
    // Returning the same placeholder div as in loading ensures consistency and avoids layout shifts
    return <div className="fixed inset-0 -z-10 bg-background pointer-events-none" aria-hidden="true"/>;
  }

  // Render the actual component only when mounted client-side
  return <Background3D />;
}
