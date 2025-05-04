"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Award, Users, GraduationCap, Mic } from 'lucide-react';
import { SectionWrapper } from '@/components/section-wrapper';

type Achievement = {
  text: string;
  icon: React.ElementType;
};

const achievementsData: Achievement[] = [
  { text: "Mentored Team Sparks in college hackathon", icon: Award },
  { text: "Student Placement Coordinator", icon: Users },
  { text: "Class Representative (CR)", icon: GraduationCap },
  { text: "Regular tech session host at university", icon: Mic },
];

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Involvements
      </motion.h2>

      <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={badgeVariants}
          >
            <Badge
              variant="outline"
              className="px-5 py-3 text-base bg-card border-border text-muted-foreground hover:bg-muted transition-colors cursor-default flex items-center gap-2 shadow-sm"
            >
              <achievement.icon className="h-5 w-5 text-accent" />
              {achievement.text}
            </Badge>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
