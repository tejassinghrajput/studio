import { ProjectsSection } from '@/components/sections/projects-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Tejas Kumar Singh',
  description: 'Discover selected projects by Tejas Kumar Singh, showcasing his work in backend systems, data pipelines, and web applications.',
};


export default function ProjectsPage() {
  return (
     <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <ProjectsSection />
    </div>
  );
}
