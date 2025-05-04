
"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react'; // Use specific icons
import { SectionWrapper } from '@/components/section-wrapper';

type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: React.ElementType;
};

const experienceData: ExperienceItem[] = [
  {
    title: "Backend Developer",
    company: "ShipGlobal",
    duration: "Sept 2024 – Present",
    description: "Building scalable backend services with CodeIgniter 4. Resolving production issues and handling various projects to improve system performance and stability.",
    icon: Rocket,
  },
  {
    title: "SDE Intern",
    company: "Naest",
    duration: "May 2024 – Jul 2024",
    description: "Worked on both frontend and backend components using HTML, CSS, JavaScript, and PHP. Contributed to a real-world product in a fast-paced startup environment.",
    icon: GraduationCap,
  },
];

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50, rotateY: -10 }, // Add rotateY
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0, // Reset rotateY
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      {/* Perspective wrapper */}
      <div className="relative max-w-3xl mx-auto" style={{ perspective: '1200px' }}>
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10" aria-hidden="true"></div> {/* Ensure line is behind cards */}

        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 pl-14 relative group transform-style-3d" // Enable 3D transforms
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={timelineItemVariants}
            custom={index} // Use custom prop if staggering delay based on index
            transition={{ delay: index * 0.15 }} // Stagger animation slightly more
          >
            {/* Icon circle */}
            <motion.div
              className="absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-accent shadow-md transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotateY(10deg)" // Add hover effect
            >
              <item.icon className="w-6 h-6 text-accent" />
            </motion.div>

            {/* Content card with hover effect */}
            <motion.div
              className="bg-card p-6 rounded-lg border border-border shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover-border-glow transform group-hover:-translate-y-1 group-hover:rotateY(-3deg)" // Add subtle lift and rotate on hover
            >
              <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-md text-accent mb-2">{item.company}</p>
              <p className="text-sm text-muted-foreground mb-3">{item.duration}</p>
              <p className="text-muted-foreground text-base">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
