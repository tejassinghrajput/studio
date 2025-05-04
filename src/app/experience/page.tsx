// src/app/experience/page.tsx
import { ExperienceSection } from '@/components/sections/experience-section';

export default function ExperiencePage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <ExperienceSection />
    </main>
  );
}
