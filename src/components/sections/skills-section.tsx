
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Terminal, Wrench, Network } from 'lucide-react'; // Keep Lucide icons for others
import { SectionWrapper } from '@/components/section-wrapper';
import { JavaIcon, PythonIcon, PHPIcon, CppIcon, SQLIcon, JSIcon } from '@/components/icons/language-icons'; // Import custom icons

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  items: { name: string; icon?: React.ElementType }[]; // Add optional icon for individual items
};

// Update skillsData to include custom icons for languages
const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: Terminal, // Use Terminal as a fallback or category icon
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
    icon: Network,
    items: [
        { name: "CodeIgniter 4" },
        { name: "FastAPI" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Flask" }
      ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
        { name: "Docker" },
        { name: "Git" },
        { name: "TravisCI" },
        { name: "GCP" },
        { name: "VS Code" }
      ],
  },
  {
    title: "Databases & APIs",
    icon: Database,
    items: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "REST" },
        { name: "Kafka" },
        { name: "Elasticsearch" }
      ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -5,
    rotateX: 5, // Slight tilt effect
    scale: 1.03,
    boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.25)",
    transition: { duration: 0.25, ease: "circOut" }
  }
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-slate-900/30 overflow-hidden">
        {/* Perspective wrapper for 3D effect */}
       <div style={{ perspective: '1000px' }}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="transform-style-3d" // Enable 3D transformations
          >
            <Card className="h-full bg-card border border-border hover-border-glow flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-out">
              <CardHeader className="flex flex-row items-center gap-4 pb-4 pt-5 px-5">
                 {/* Use category icon */}
                <div className="p-2 bg-accent/10 rounded-full">
                    <category.icon className="h-6 w-6 text-accent" />
                 </div>
                <CardTitle className="text-lg md:text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0 px-5 pb-5">
                <ul className="space-y-3">
                  {category.items.map((item) => (
                     <li key={item.name} className="flex items-center text-muted-foreground text-sm md:text-base group">
                       {/* Use specific item icon if available, otherwise default */}
                      {item.icon ? (
                         <item.icon className="h-5 w-5 mr-3 text-accent/80 transition-transform duration-200 group-hover:scale-110" />
                      ) : (
                        <Terminal className="h-4 w-4 mr-3 text-accent/70 flex-shrink-0" />
                      )}
                       <span className="transition-colors duration-200 group-hover:text-foreground">{item.name}</span>
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
