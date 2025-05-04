import { SkillsSection } from '@/components/sections/skills-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Tejas Kumar Singh',
  description: 'Explore the technical skills and technology stack of Tejas Kumar Singh, including languages, frameworks, tools, and databases.',
};


export default function SkillsPage() {
  return (
     <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <SkillsSection />
    </div>
  );
}
