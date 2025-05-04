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
import { AppStateProvider } from '@/context/app-state-context'; // Import AppStateProvider

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
  title: 'Tejas Kumar Singh | Backend Developer',
  description: 'Portfolio of Tejas Kumar Singh, Engineering scalable backend systems, secure APIs, and responsive frontends for seamless full-stack solutions.',
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
    // Ensure no extra whitespace directly inside <html>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'antialiased flex flex-col min-h-screen relative bg-background w-full', // Ensure body takes full width
          spaceGrotesk.variable,
          inter.variable,
          firaCode.variable
        )}
      >
        <AppStateProvider> {/* Wrap with AppStateProvider */}
           {/* Preloader gets onLoaded from AppStateProvider's context */}
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
        </AppStateProvider>
      </body>
    </html>
  );
}
