// src/app/skills/page.tsx
import { SkillsSection } from '@/components/sections/skills-section';

export default function SkillsPage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <SkillsSection />
    </main>
  );
}
