"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, FileText } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react'; // Using LaptopMinimal for a dev theme
import Link from 'next/link'; // Import Link

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      type: 'spring',
      stiffness: 100,
    },
  },
};

// Function to scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id.substring(1)); // Remove #
  if (element) {
    const offset = 80; // Adjust offset for fixed navbar height (approx 5rem)
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};


export function HeroSection() {
  const subheadlineText = "Specializing in scalable backend systems, business-focused software, and secure APIs.";

  return (
    <section
      id="home" // Add ID for navigation
      className="min-h-screen flex items-center pt-16 md:pt-20 pb-20 md:pb-32 bg-gradient-to-br from-background/50 via-transparent to-slate-900/30 relative overflow-hidden" // Adjusted padding-top and background opacity
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{}} // Container variant if needed
          className="flex flex-col items-start text-left z-10" // Ensure text is above 3D background
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-md" // Added drop shadow
            custom={0}
            variants={textVariants}
          >
            Hi, I’m Tejas Kumar Singh.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-2"
            custom={1}
            variants={textVariants}
          >
            Backend Developer | SaaS Business Manager
          </motion.p>

          {/* Animated Subheadline */}
          <motion.div
             className="text-lg md:text-xl text-muted-foreground mb-8 h-16 md:h-12 overflow-hidden" // Fixed height to prevent layout shift
             custom={2}
             variants={textVariants}
           >
            <motion.span
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ delay: 0.3, duration: 0.7, ease: 'circOut' }}
              className="inline-block"
            >
              {subheadlineText}
            </motion.span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            custom={3}
            variants={textVariants}
          >
            <Button size="lg" variant="outline" className="hover-glow border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <FileText className="mr-2 h-5 w-5" /> View Resume
            </Button>
            {/* Update Contact Me button to scroll to contact section */}
             <Button
               size="lg"
               className="bg-primary text-primary-foreground hover-glow hover:bg-primary/90"
               onClick={() => scrollToSection('#contact')} // Scroll to contact section
             >
               <Mail className="mr-2 h-5 w-5" /> Contact Me
             </Button>
          </motion.div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="hidden md:flex justify-center items-center z-10" // Ensure illustration is above 3D background
          initial="hidden"
          animate="visible"
          variants={illustrationVariants}
        >
          {/* Replace with Lottie or SVG if available */}
          <LaptopMinimal size={250} className="text-accent opacity-80 drop-shadow-lg" />
          {/* Subtle background glow */}
           {/* <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div> */}
        </motion.div>
      </div>
       {/* Optional Starscape/Gradient Overlay (moved to background component) */}
       {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-background opacity-50 pointer-events-none"></div> */}
    </section>
  );
}
