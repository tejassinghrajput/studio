
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, DraftingCompass } from 'lucide-react'; // Using DraftingCompass for Placeholder
import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string; // Optional image URL or placeholder type
  aiHint?: string; // AI Hint for placeholder image
};

const projectsData: Project[] = [
  {
    title: "🛡 Crypto Wallet Verifier",
    description: "Verified Trust Wallet assets using Web3 and React for secure crypto asset validation.",
    tech: ["React", "Web3.js", "Trust Wallet API"],
    githubLink: "#", // Replace with actual link
    liveLink: "#", // Replace with actual link
    image: "/placeholder-crypto.png", // Placeholder path
    aiHint: "crypto wallet blockchain",
  },
  {
    title: "📊 Org Expense Tracker",
    description: "A web app to track expenses across teams with role-based access and real-time reports.",
    tech: ["PHP", "MySQL", "Chart.js"],
    githubLink: "#", // Replace with actual link
    image: "/placeholder-tracker.png", // Placeholder path
    aiHint: "dashboard data chart",
  },
  {
    title: "📦 Kafka Order Pipeline",
    description: "Built a real-time order ingestion system from SQL DB → Kafka → Elasticsearch.",
    tech: ["PHP", "Kafka", "Elasticsearch"],
    githubLink: "#", // Replace with actual link (or maybe blog link?)
    image: "/placeholder-pipeline.png", // Placeholder path
    aiHint: "data pipeline stream",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateY: 15 }, // Start slightly rotated
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0, // Rotate back to center
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smoother ease-out cubic
    },
  }),
   hover: {
     y: -8, // Lift slightly more
     rotateY: -5, // Tilt slightly on hover
     scale: 1.04,
     boxShadow: "0 20px 35px -12px hsl(var(--primary) / 0.3)", // Enhanced shadow
     transition: { duration: 0.3, ease: "circOut" }
   }
};

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-gradient-to-b from-slate-900/30 to-background overflow-hidden">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Selected Projects
      </motion.h2>

      {/* Perspective wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1500px' }}>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
            variants={cardVariants}
            className="h-full transform-style-3d" // Enable 3D transforms
          >
            <Card className="h-full flex flex-col bg-card border border-border overflow-hidden hover-border-glow transition-all duration-300 ease-out shadow-md hover:shadow-primary/20"> {/* Added base shadow */}
              <CardHeader className="pb-4 p-5"> {/* Consistent padding */}
                 {/* Optional Image/Placeholder */}
                <div className="aspect-video bg-muted rounded-md mb-4 relative overflow-hidden group">
                   {project.image ? (
                      <Image
                          src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/400/225`}
                          alt={`${project.title} screenshot`}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.aiHint || "technology project"}
                          className="transition-transform duration-300 ease-in-out group-hover:scale-105" // Image zoom on hover
                      />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                       <DraftingCompass className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                   {/* Image Overlay on Hover (optional) */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-5 pt-0"> {/* Consistent padding */}
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground border-none text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex justify-end gap-3 p-5 pb-5"> {/* Consistent padding */}
                {project.githubLink && (
                  <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveLink && (
                  <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-accent">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Demo
                    </Link>
                  </Button>
                )}
                {!project.liveLink && project.title.includes("Kafka") && (
                   <Badge variant="outline" className="text-xs text-muted-foreground border-dashed">Blog Coming Soon</Badge>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
