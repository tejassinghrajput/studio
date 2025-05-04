import { ExperienceSection } from '@/components/sections/experience-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience | Tejas Kumar Singh',
  description: 'Review the professional experience of Tejas Kumar Singh, detailing his roles in backend development and business management.',
};


export default function ExperiencePage() {
  return (
     <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <ExperienceSection />
    </div>
  );
}
