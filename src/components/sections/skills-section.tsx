"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Terminal, Wrench, Network, Server, GitBranch, Cloud, Code, FlaskConical, RadioTower, Box } from 'lucide-react'; // Keep Lucide icons for categories
import { SectionWrapper } from '@/components/section-wrapper';
import {
  JavaIcon, PythonIcon, PHPIcon, CppIcon, SQLIcon, JSIcon, // Language Icons
  CodeIgniterIcon, FastAPIIcon, ReactIcon, NodeJSIcon, FlaskIcon, // Framework Icons
  DockerIcon, GitIcon, TravisCIIcon, GCPIcon, VSCodeIcon, // Tool Icons
  PostgreSQLIcon, MySQLIcon, KafkaIcon, ElasticsearchIcon, RestAPIIcon // Database & API Icons
} from '@/components/icons/tech-icons'; // Import consolidated tech icons

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
    icon: Code, // Category icon
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
        { name: "TravisCI", icon: TravisCIIcon },
        { name: "Google Cloud (GCP)", icon: GCPIcon },
        { name: "VS Code", icon: VSCodeIcon }
      ],
  },
  {
    title: "Databases & APIs",
    icon: Database, // Category icon
    items: [
        { name: "PostgreSQL", icon: PostgreSQLIcon },
        { name: "MySQL", icon: MySQLIcon },
        { name: "REST APIs", icon: RestAPIIcon },
        { name: "Apache Kafka", icon: KafkaIcon },
        { name: "Elasticsearch", icon: ElasticsearchIcon }
      ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15, rotateY: 5 }, // Add subtle Y rotation
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0, // Reset rotation
    transition: {
      delay: i * 0.1,
      duration: 0.6, // Slightly longer duration
      ease: [0.25, 1, 0.5, 1], // Smoother ease-out cubic
    },
  }),
  hover: {
    y: -8, // Lift more
    rotateX: 3, // Slight tilt effect
    rotateY: -2, // Slight counter-tilt
    scale: 1.04, // Slightly larger scale
    boxShadow: "0 20px 35px -10px hsl(var(--primary) / 0.3)", // More pronounced shadow
    transition: { duration: 0.3, ease: "circOut" }
  }
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-background to-slate-900/30 overflow-hidden">
        {/* Perspective wrapper for 3D effect */}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"> {/* Increased gap */}
        {skillsData.map((category, index) => (
          <motion.div
            key={category.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }} // Trigger earlier
            variants={cardVariants}
            className="transform-style-3d h-full" // Enable 3D + ensure full height for flex
          >
            <Card className="h-full bg-card border border-border hover-border-glow flex flex-col overflow-hidden shadow-xl transition-all duration-300 ease-out rounded-xl"> {/* Rounded corners */}
              <CardHeader className="flex flex-row items-center gap-4 pb-4 pt-6 px-6"> {/* Adjusted padding */}
                 {/* Use category icon */}
                <div className="p-3 bg-accent/10 rounded-lg shadow-inner"> {/* Adjusted padding, shape, shadow */}
                    <category.icon className="h-7 w-7 text-accent" /> {/* Larger icon */}
                 </div>
                <CardTitle className="text-xl md:text-2xl text-foreground font-semibold">{category.title}</CardTitle> {/* Font weight */}
              </CardHeader>
              <CardContent className="flex-grow pt-2 px-6 pb-6"> {/* Adjusted padding */}
                <ul className="space-y-4"> {/* Increased spacing */}
                  {category.items.map((item) => (
                     <li key={item.name} className="flex items-center text-muted-foreground text-base md:text-lg group transition-colors duration-200 hover:text-foreground"> {/* Larger text, hover color */}
                       <item.icon className="h-6 w-6 mr-4 text-accent/90 transition-transform duration-300 group-hover:scale-115 flex-shrink-0" /> {/* Larger icon, more space, hover effect */}
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
