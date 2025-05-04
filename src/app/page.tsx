import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { AchievementsSection } from '@/components/sections/achievements-section';
import { ContactSection } from '@/components/sections/contact-section';
// Footer and ScrollToTopButton are handled in layout.tsx

export default function Home() {
  return (
    // Navbar and Footer are rendered in layout.tsx
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </main>
    // ScrollToTopButton is handled in layout.tsx
  );
}
