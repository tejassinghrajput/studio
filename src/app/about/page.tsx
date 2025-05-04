// src/app/about/page.tsx
import { AboutSection } from '@/components/sections/about-section';

export default function AboutPage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <AboutSection />
    </main>
  );
}
