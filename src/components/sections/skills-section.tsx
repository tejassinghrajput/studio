// src/components/sections/skills-section.tsx
"use client";

import React from 'react'; // Ensure React is imported
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code as CodeIcon, Network, Wrench, Database as DatabaseIcon } from 'lucide-react'; // Aliased imports
import { SectionWrapper } from '@/components/section-wrapper';
import {
  JavaIcon, PythonIcon, PHPIcon, CppIcon, SQLIcon, JSIcon, // Language Icons
  CodeIgniterIcon, FastAPIIcon, ReactIcon, NodeJSIcon, FlaskIcon, // Framework Icons
  DockerIcon, GitIcon, TravisCIIcon, GCPIcon, VSCodeIcon, // Tool Icons
  MongoDBIcon, MySQLIcon, KafkaIcon, ElasticsearchIcon, RestAPIIcon // Database & API Icons
} from '@/components/icons/tech-icons'; // Import updated tech icons
import { cn } from '@/lib/utils'; // Import cn

type SkillItem = {
  name: string;
  icon: React.ElementType;
};

type SkillCategory = {
  title: string;
  icon: React.ElementType; // Category icon
  items: SkillItem[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: CodeIcon, // Use aliased import
    items: [
      { name: "Java", icon: JavaIcon },
      { name: "Python", icon: PythonIcon },
      { name: "PHP", icon: PHPIcon },
      { name: "C++", icon: CppIcon },
      { name: "SQL", icon: SQLIcon },
      { name: "JavaScript", icon: JSIcon },
    ],
  },
  {
    title: "Frameworks",
    icon: Network, // Category icon
    items: [
        { name: "CodeIgniter 4", icon: CodeIgniterIcon },
        { name: "FastAPI", icon: FastAPIIcon },
        { name: "React", icon: ReactIcon },
        { name: "Node.js", icon: NodeJSIcon },
        { name: "Flask", icon: FlaskIcon }
      ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench, // Category icon
    items: [
        { name: "Docker", icon: DockerIcon },
        { name: "Git", icon: GitIcon },
        { name: "Google Cloud (GCP)", icon: GCPIcon },
        { name: "VS Code", icon: VSCodeIcon }
      ],
  },
  {
    title: "Databases & APIs",
    icon: DatabaseIcon, // Use aliased import
    items: [
        { name: "MondoDB", icon: MongoDBIcon },
        { name: "MySQL", icon: MySQLIcon },
        { name: "REST APIs", icon: RestAPIIcon },
        { name: "Apache Kafka", icon: KafkaIcon },
        { name: "Elasticsearch", icon: ElasticsearchIcon }
      ],
  },
];

// Removed glitch effect animation variant, replaced with subtle slide-in and hover scale
const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
  hover: {
    scale: 1.03, // Subtle scale up on hover
    boxShadow: "0 10px 25px -5px hsl(var(--primary) / 0.3)", // Slightly softer glow
    transition: {
        scale: { duration: 0.2, ease: "easeOut" },
        boxShadow: { duration: 0.2, ease: "easeOut" },
     }
  }
};


export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-slate-900/30 overflow-hidden">
       <div style={{ perspective: '1200px' }}>
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-foreground tracking-tight" // Increased bottom margin
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technology Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover" // Apply hover variant
            viewport={{ once: true, amount: 0.1 }} // Trigger earlier
            variants={cardVariants}
            className="transform-style-3d h-full" // Enable 3D + ensure full height for flex
          >
            {/* Glass effect card */}
            <Card className={cn(
                "h-full bg-card/60 backdrop-blur-lg border border-white/10 flex flex-col overflow-hidden shadow-xl transition-all duration-300 ease-out rounded-xl", // Glassmorphism styles
                "hover:border-primary/30" // Keep subtle border highlight on hover
             )}>
              <CardHeader className="flex flex-row items-center gap-4 pb-4 pt-6 px-6">
                <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-lg shadow-inner border border-white/5"> {/* Glassy icon background */}
                    <category.icon className="h-7 w-7 text-primary" /> {/* Use primary color for category icon */}
                 </div>
                <CardTitle className="text-xl md:text-2xl text-foreground font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-2 px-6 pb-6">
                <ul className="space-y-4">
                  {category.items.map((item) => (
                     <li key={item.name} className="flex items-center text-muted-foreground text-base md:text-lg group transition-colors duration-200 hover:text-foreground">
                       {/* Render the colorful SVG/Icon */}
                       <item.icon className="h-6 w-6 mr-4 transition-transform duration-300 group-hover:scale-115 flex-shrink-0" aria-hidden="true" />
                       <span>{item.name}</span>
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </SectionWrapper>
  );
}
