import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Fira_Code } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from '@/components/navigation/navbar'; // Import Navbar
import { FooterSection } from '@/components/sections/footer-section'; // Import Footer
import { ScrollToTopButton } from '@/components/scroll-to-top'; // Import ScrollToTopButton

// Dynamically import the 3D background component to ensure client-side rendering
const Background3D = dynamic(() => import('@/components/3d-background').then(mod => mod.Background3D), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-background" />, // Optional: loading state
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Tejas Kumar Singh | Backend Developer & SaaS Business Manager',
  description: 'Portfolio of Tejas Kumar Singh, specializing in scalable backend systems, business-focused software, and secure APIs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'antialiased flex flex-col min-h-screen relative', // Add relative positioning
          spaceGrotesk.variable,
          inter.variable,
          firaCode.variable
        )}
      >
        <Background3D /> {/* Add 3D Background */}
        <Navbar /> {/* Add Navbar */}
        <div className="relative z-10 flex-grow"> {/* Ensure content is above the background */}
          <main className="flex-grow"> {/* Main content area */}
            {children}
          </main>
          <FooterSection /> {/* Add Footer */}
        </div>
        <ScrollToTopButton /> {/* Add ScrollToTopButton globally */}
        <Toaster />
      </body>
    </html>
  );
}
