import type { Metadata } from 'next';
import { Space_Grotesk, Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from '@/components/navigation/navbar';
import { FooterSection } from '@/components/sections/footer-section';
import { ScrollToTopButton } from '@/components/scroll-to-top';
import { ThemeProvider } from '@/context/theme-context'; // Import ThemeProvider
import { Preloader } from '@/components/preloader'; // Import Preloader


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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // Ensure viewport prevents scaling
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Default to dark theme immediately to prevent white flash
    // Removed className="dark" to let ThemeProvider handle it
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <body
        className={cn(
          'antialiased flex flex-col min-h-screen relative bg-background w-full', // Ensure body takes full width
          spaceGrotesk.variable,
          inter.variable,
          firaCode.variable
        )}
      >
        {/* Preloader will cover content initially */}
        <Preloader />
        <ThemeProvider> {/* Wrap content with ThemeProvider */}
          <Navbar />
           {/* Ensure main content area doesn't have horizontal padding issues */}
          <div className="relative z-10 flex-grow w-full"> {/* Ensure content has z-index and takes full width */}
            <main className="flex-grow w-full"> {/* Ensure main takes full width */}
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
