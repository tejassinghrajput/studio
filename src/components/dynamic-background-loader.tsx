'use client';

import dynamic from 'next/dynamic';

// Dynamically import the 3D background component inside a client component
// Ensure ssr: false is correctly set.
const Background3D = dynamic(() => import('@/components/3d-background').then(mod => mod.Background3D), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-background pointer-events-none" aria-hidden="true"/>, // Render a simple div during load
});

// Simpler loader component relying purely on next/dynamic's SSR handling
export function DynamicBackgroundLoader() {
  // next/dynamic with ssr: false should handle preventing server-side rendering.
  // The loading prop provides a fallback during the client-side load.
  return <Background3D />;
}
