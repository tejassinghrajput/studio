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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
   hover: {
     y: -5, // Subtle lift on hover
     boxShadow: "0 15px 25px -10px hsl(var(--primary) / 0.25)",
     transition: { duration: 0.25 }
   }
};

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-gradient-to-b from-slate-900/30 to-background">
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
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="h-full" // Ensure motion div takes full height for flex below
          >
            <Card className="h-full flex flex-col bg-card border border-border overflow-hidden hover-border-glow">
              <CardHeader className="pb-4">
                 {/* Optional Image/Placeholder */}
                <div className="aspect-video bg-muted rounded-md mb-4 relative overflow-hidden">
                   {project.image ? (
                      <Image
                          src={`https://picsum.photos/seed/${project.title.replace(/\s+/g, '-')}/400/225`}
                          alt={`${project.title} screenshot`}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={project.aiHint || "technology project"}
                      />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                       <DraftingCompass className="w-16 h-16 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground border-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 flex justify-end gap-3">
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
