"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Terminal, Wrench, BrainCircuit, Network } from 'lucide-react'; // Using BrainCircuit for Languages, Network for Frameworks
import { SectionWrapper } from '@/components/section-wrapper';

type SkillCategory = {
  title: string;
  icon: React.ElementType;
  items: string[];
};

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    icon: BrainCircuit,
    items: ["Java", "Python", "PHP", "C++", "SQL", "JavaScript"],
  },
  {
    title: "Frameworks",
    icon: Network, // Replaced Frameworks icon
    items: ["CodeIgniter 4", "FastAPI", "React", "Node.js", "Flask"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Docker", "Git", "TravisCI", "GCP", "VS Code"],
  },
  {
    title: "Databases & APIs",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "REST", "Kafka", "Elasticsearch"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 10px 20px -5px hsl(var(--primary) / 0.2)",
    transition: { duration: 0.2 }
  }
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-slate-900/30">
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
          >
            <Card className="h-full bg-card border-border hover-border-glow flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <category.icon className="h-8 w-8 text-accent" />
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <ul className="space-y-2">
                  {category.items.map((item) => (
                     <li key={item} className="flex items-center text-muted-foreground">
                      <Terminal className="h-4 w-4 mr-2 text-accent/70" /> {/* Use Terminal for code-like look */}
                       {item}
                     </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
