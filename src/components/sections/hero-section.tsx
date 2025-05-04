// src/components/sections/hero-section.tsx
"use client";

import { useContext } from 'react'; // Import useContext
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, FileText } from 'lucide-react';
import { LaptopMinimal } from 'lucide-react'; // Using LaptopMinimal for a dev theme
import Link from 'next/link'; // Import Link
import { cn } from '@/lib/utils'; // Import cn
import { AppStateContext } from '@/context/app-state-context'; // Import context

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.5, // Staggered delay for elements
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
      delay: 0.5, // Delay illustration slightly
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
  const { isPreloaderFinished } = useContext(AppStateContext); // Get preloader state from context
  const headlineText = "Hi, I am Tejas Kumar Singh.";
  const subheadlineText = "Specializing in scalable backend systems, business-focused software, and secure APIs.";

  // No longer need typewriter effect logic

  return (
    <section
      id="home" // Add ID for navigation
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-20 md:pb-32 bg-gradient-to-br from-background/50 via-transparent to-slate-900/30 relative overflow-hidden" // Adjusted padding-top
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial="hidden"
          // Animate only when preloader is done
          animate={isPreloaderFinished ? "visible" : "hidden"}
          variants={{}} // Container variant if needed
          className="flex flex-col items-start text-left z-10" // Ensure text is above 3D background
        >
          {/* Direct Heading Rendering - Removed min-height */}
          <motion.h1
             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground drop-shadow-md" // Removed min-h-[3em]
             custom={0} // Use index 0 for delay calculation
             variants={textVariants}
           >
             {headlineText} {/* Directly render the full text */}
          </motion.h1>

          {/* Part 1: Role Description */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-2" // Keep mb-2 for spacing below this line
            custom={1} // Use index 1 for delay calculation
            variants={textVariants}
          >
            Backend Developer | SaaS Business Manager
          </motion.p>

          {/* Part 2: Specialization */}
          <motion.p
             className="text-lg md:text-xl text-muted-foreground mb-10" // Keep increased mb-10 for space before buttons
             custom={2} // Use index 2 for delay calculation
             variants={textVariants}
           >
             {/* Conditionally render span only when preloader is finished */}
            {isPreloaderFinished && (
                 <motion.span
                   initial={{ y: '100%' }}
                   animate={{ y: '0%' }}
                   transition={{ delay: 0.8, duration: 0.7, ease: 'circOut' }} // Adjust delay if needed
                   className="inline-block"
                 >
                   {subheadlineText}
                 </motion.span>
            )}
          </motion.p>

          {/* Part 3: Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4" // Buttons stack vertically on small screens, horizontally on larger
            custom={3} // Use index 3 for delay calculation
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
          // Animate only when preloader is done
          animate={isPreloaderFinished ? "visible" : "hidden"}
          variants={illustrationVariants}
        >
          {/* Replace with Lottie or SVG if available */}
          <LaptopMinimal size={250} className="text-accent opacity-80 drop-shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}
