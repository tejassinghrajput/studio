import { ContactSection } from '@/components/sections/contact-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Tejas Kumar Singh',
  description: 'Get in touch with Tejas Kumar Singh for job opportunities, collaborations, or inquiries.',
};


export default function ContactPage() {
  return (
     <div className="pt-16 md:pt-20"> {/* Adjust top padding for fixed navbar */}
      <ContactSection />
    </div>
  );
}
