"use client";

import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data';

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
        <h1 className="text-3xl font-bold mb-2">Work Experience</h1>
        <p className="text-foreground/70">
          My professional journey and the companies I&apos;ve worked with.
        </p>
      </header>

      {/* Timeline */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-neon-blue/30 before:left-0 md:before:left-1/2 before:-translate-x-1/2 pl-8 md:pl-0">
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

      {/* Education section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-xl font-mono text-neon-blue mb-6">{"// Education"}</h2>

        <div className="bg-terminal neon-border rounded-lg overflow-hidden">
          <div className="terminal-header">
            <span>Education</span>
          </div>

          <div className="p-4">
            <div className="mb-1">
              <h3 className="text-lg font-bold">Indian Institute of Technology, Kharagpur</h3>
              <p className="text-neon-green">B.Tech in Computer Science and Engineering</p>
              <p className="text-sm text-foreground/70">2015 - 2019</p>
            </div>

            <div className="mt-4">
              <h4 className="font-mono text-neon-blue mb-2">Notable Coursework:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Data Structures & Algorithms</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Machine Learning</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Computer Networks</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Operating Systems</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Database Management</span>
                </div>
                <div className="flex items-center">
                  <span className="text-neon-blue mr-2">•</span>
                  <span>Distributed Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperiencePage;