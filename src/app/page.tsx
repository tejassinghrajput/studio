import { HeroSection } from '@/components/sections/hero-section';
// Removed imports for other sections as they are now on separate pages
// import { AboutSection } from '@/components/sections/about-section';
// import { SkillsSection } from '@/components/sections/skills-section';
// import { ExperienceSection } from '@/components/sections/experience-section';
// import { ProjectsSection } from '@/components/sections/projects-section';
// import { AchievementsSection } from '@/components/sections/achievements-section';
// import { ContactSection } from '@/components/sections/contact-section';
import { FooterSection } from '@/components/sections/footer-section';
import { ScrollToTopButton } from '@/components/scroll-to-top';
import { Navbar } from '@/components/navigation/navbar'; // Import Navbar

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is now rendered in layout.tsx */}
      <main className="flex-grow pt-16"> {/* Add padding top to prevent overlap with fixed navbar */}
        <HeroSection />
        {/* Other sections are removed and moved to their respective pages */}
      </main>
      {/* Footer is now rendered in layout.tsx */}
      <ScrollToTopButton />
    </div>
  );
}
