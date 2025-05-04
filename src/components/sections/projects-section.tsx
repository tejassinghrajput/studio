
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, DraftingCompass } from 'lucide-react'; // Using DraftingCompass for Placeholder
import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { cn } from '@/lib/utils'; // Import cn

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

// Slide-in animation variants
const cardVariants = {
  hidden: (direction = 'left') => ({ // Added direction parameter
      opacity: 0,
      x: direction === 'left' ? -50 : 50, // Slide from left or right
   }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1], // Smoother ease-out cubic
    },
  }),
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index} // Pass index for staggering delay
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants} // Use slide-in variants
            className="h-full"
          >
            {/* Removed hover-glow and hover-border-glow */}
            <Card className={cn(
                "h-full flex flex-col bg-card/80 backdrop-blur-sm border border-border/20 overflow-hidden shadow-lg transition-all duration-300 ease-out rounded-xl", // Added glass effect styles
                "hover:shadow-primary/20 hover:border-primary/30" // Subtle hover effect
              )}>
              <CardHeader className="pb-4 p-5">
                <div className="aspect-video bg-muted/50 rounded-md mb-4 relative overflow-hidden group"> {/* Slightly more transparent bg */}
                   {project.image ? (
                      <Image
                          src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/400/225`}
                          alt={`${project.title} screenshot`}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.aiHint || "technology project"}
                          className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                       <DraftingCompass className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> {/* Darker gradient */}
                </div>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-5 pt-0">
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted/70 text-muted-foreground border-none text-xs px-2 py-1 backdrop-blur-sm"> {/* Glassy badge */}
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex justify-end gap-3 p-5 pb-5">
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
                   <Badge variant="outline" className="text-xs text-muted-foreground border-dashed border-muted-foreground/50">Blog Coming Soon</Badge>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
