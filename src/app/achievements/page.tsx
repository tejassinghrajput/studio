import { AchievementsSection } from '@/components/sections/achievements-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements | Tejas Kumar Singh',
  description: 'Learn about the achievements and involvements of Tejas Kumar Singh beyond his professional work.',
};

export default function AchievementsPage() {
  return (
     <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <AchievementsSection />
    </div>
  );
}
