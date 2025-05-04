"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from '@/components/section-wrapper';

const stats = [
  "2+ years dev experience",
  "Backend + Business hybrid",
  "CodeIgniter / PHP / SQL",
  "SaaS ops and architecture",
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-3xl mx-auto text-center text-muted-foreground space-y-6 text-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          I’m a final-year BTech CSE student with professional experience in backend development, SaaS systems, and startup operations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          At ShipGlobal, I work with CodeIgniter 4 to build and maintain robust backend services, using Kafka and Elasticsearch for real-time data integration. Earlier, I interned at Naest, contributing to frontend and backend development in PHP.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Outside code, I manage business workflows in a SaaS startup — combining tech with strategy. I thrive at the intersection of backend engineering and product execution.
        </motion.p>
      </div>

      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {stats.map((stat, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="px-4 py-2 text-sm bg-card border border-border hover:bg-muted transition-colors cursor-default"
          >
            {stat}
          </Badge>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
