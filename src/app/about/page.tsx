import { AboutSection } from '@/components/sections/about-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Tejas Kumar Singh',
  description: 'Learn more about Tejas Kumar Singh, his background, experience, and focus on backend development and SaaS.',
};

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <AboutSection />
    </div>
  );
}
