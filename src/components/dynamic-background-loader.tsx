'use client';

import dynamic from 'next/dynamic';

// Dynamically import the 3D background component inside a client component
const Background3D = dynamic(() => import('@/components/3d-background').then(mod => mod.Background3D), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-background" />, // Optional: loading state
});

export function DynamicBackgroundLoader() {
  return <Background3D />;
}
