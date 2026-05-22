"use client";

import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import EducationCard from '@/components/EducationCard';
import { experiences, education } from '@/data';

const ExperiencePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl"
    >
      <header className="mb-8">
        <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
          $ cat experience.log
        </div>
        <h1 className="text-3xl font-bold mb-2">Work Experience & Education</h1>
        <p className="text-foreground/70">
          My professional journey and educational background.
        </p>
      </header>

      {/* Experience Section */}
      <h2 className="text-2xl font-mono text-neon-blue mb-6 border-b border-neon-blue/20 pb-2">
        {"// Work Experience"}
      </h2>

      {/* Timeline */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-neon-blue/30 before:left-0 md:before:left-1/2 before:-translate-x-1/2 pl-8 md:pl-0 mb-16">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-1/2 mb-10`}
          >
            {/* Timeline dot */}
            <div className={`absolute w-4 h-4 bg-neon-blue rounded-full -top-4 -left-8 md:left-0 ${(index % 2 == 0) && 'md:left-full'} -translate-x-1/2 animate-pulse`} />

            <ExperienceCard experience={experience} index={index} />
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h2 className="text-2xl font-mono text-neon-blue mb-6 border-b border-neon-blue/20 pb-2">
        {"// Education"}
      </h2>

      <div className="grid grid-cols-1 gap-6 mb-12">
        {education.map((edu, index) => (
          <EducationCard key={index} education={edu} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperiencePage;