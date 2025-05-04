import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from '@/components/navigation/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { ScrollToTopButton } from '@/components/scroll-to-top';
import { DynamicBackgroundLoader } from '@/components/dynamic-background-loader'; // Import the loader
import { ThemeProvider } from '@/context/theme-context'; // Import ThemeProvider

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
          'antialiased flex flex-col min-h-screen relative bg-background',
          spaceGrotesk.variable,
          inter.variable,
          firaCode.variable
        )}
      >
        <ThemeProvider> {/* Wrap content with ThemeProvider */}
          <DynamicBackgroundLoader /> {/* Add 3D background loader */}
          <Navbar />
          <div className="relative z-10 flex-grow"> {/* Ensure content is above background */}
            <main className="flex-grow">
              {children}
            </main>
            <FooterSection />
          </div>
          <ScrollToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
