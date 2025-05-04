import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Transpile @react-three/fiber and related three.js ecosystem libraries
  // This helps ensure they use the same instance of React as the main application
  // and resolve potential ESM/CJS issues in the Next.js environment.
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    // Add other potentially problematic three.js related packages here if needed
    'maath', // Include if 'maath' is causing issues
  ],
};

export default nextConfig;
