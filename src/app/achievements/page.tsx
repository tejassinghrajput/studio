// src/app/achievements/page.tsx
import { AchievementsSection } from '@/components/sections/achievements-section';

export default function AchievementsPage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <AchievementsSection />
    </main>
  );
}
