// src/app/projects/page.tsx
import { ProjectsSection } from '@/components/sections/projects-section';

export default function ProjectsPage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <ProjectsSection />
    </main>
  );
}
