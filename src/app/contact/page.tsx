// src/app/contact/page.tsx
import { ContactSection } from '@/components/sections/contact-section';

export default function ContactPage() {
  return (
    // pt-16/pt-20 handles the fixed navbar height from layout.tsx
    <main className="flex-grow pt-16 md:pt-20">
      <ContactSection />
    </main>
  );
}
