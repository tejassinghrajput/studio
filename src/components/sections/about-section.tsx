"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/section-wrapper';
import Image from 'next/image'; // Import Image component
import { Code, Briefcase, Users, Target } from 'lucide-react'; // Import relevant icons

const stats = [
  { icon: Code, text: "2+ years dev experience" },
  { icon: Briefcase, text: "Backend + Business Hybrid" },
  { icon: Users, text: "SaaS Ops & Architecture" },
  { icon: Target, text: "Focus on Scalability" },
];

export function AboutSection() {
  const fadeIn = (delay = 0, duration = 0.5, direction = 'y', amount = 20) => ({
    hidden: { opacity: 0, [direction]: amount },
    visible: {
      opacity: 1,
      [direction]: 0,
      transition: { delay, duration, ease: 'easeOut' },
    },
  });

  return (
    <SectionWrapper id="about" className="bg-gradient-to-b from-slate-900/30 to-background overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground tracking-tight"
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Image Column */}
        <motion.div
          className="md:col-span-2 flex justify-center"
          variants={fadeIn(0.2, 0.6, 'x', -30)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-accent/50 hover-glow transition-all duration-300 transform hover:scale-105">
            <Image
              src="https://picsum.photos/seed/profile-tejas/400/400" // Replace with your actual image URL
              alt="Tejas Kumar Singh"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-110"
              data-ai-hint="professional developer portrait"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div
          className="md:col-span-3 text-left space-y-6"
           variants={fadeIn(0.4, 0.6, 'x', 30)}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
            I'm a final-year BTech CSE student combining <strong className="text-foreground font-medium">backend engineering expertise</strong> with real-world involvement in <strong className="text-foreground font-medium">software delivery and operational planning</strong>. My path thrives where technology meets thoughtful execution.
          </p>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
            At <strong className="text-accent">ShipGlobal</strong>, I design and maintain reliable backend systems using CodeIgniter 4, focusing on clean architecture and performance optimization. Earlier, I interned at <strong className="text-accent">Naest</strong>, where I worked across the full stack in a fast-paced, product-driven environment.
          </p>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
            Outside of development, I contribute to process coordination and technical planning, helping align product vision with engineering execution. I'm deeply committed to building <strong className="text-foreground font-medium">scalable, user-driven digital solutions</strong>.
          </p>
        </motion.div>
      </div>

      {/* Stats Badges */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={fadeIn(index * 0.1 + 0.6, 0.4, 'y', 15)}>
            <Badge
              variant="secondary"
              className="px-5 py-3 text-sm md:text-base bg-card border border-border hover:bg-muted transition-colors cursor-default flex items-center gap-2 shadow-md hover-glow"
            >
              <stat.icon className="h-5 w-5 text-accent flex-shrink-0" />
              {stat.text}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
