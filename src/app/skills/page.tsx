"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Code, Database, Server } from 'lucide-react';
import SkillBar from '@/components/SkillBar';
import { skills } from '@/data';

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend', icon: <Database className="w-4 h-4" /> },
    { id: 'devops', name: 'DevOps', icon: <Server className="w-4 h-4" /> }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl"
    >
      <header className="mb-8">
        <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
          $ show skills
        </div>
        <h1 className="text-3xl font-bold mb-2">Skills & Expertise</h1>
        <p className="text-foreground/70">
          Technologies and tools I&apos;ve worked with and mastered over the years.
        </p>
      </header>
      
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
              activeCategory === category.id
                ? 'bg-neon-blue/20 text-neon-blue neon-border'
                : 'bg-terminal/50 text-foreground/70 hover:text-neon-blue'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {filteredSkills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
      
      {/* Footer - additional skills or certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-16 p-6 bg-terminal neon-border rounded-lg"
      >
        <h3 className="text-xl font-mono text-neon-blue mb-4">{"// Additional Expertise"}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-mono text-neon-green mb-2">Tools & Environment</h4>
            <ul className="space-y-1 text-foreground/80">
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Git, GitHub, GitLab
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                VS Code, Vim, JetBrains IDEs
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Unix/Linux, Shell Scripting
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                CI/CD Pipelines
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-neon-green mb-2">Soft Skills</h4>
            <ul className="space-y-1 text-foreground/80">
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Technical Leadership
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Technical Documentation
              </li>
              <li className="flex items-center">
                <span className="text-neon-blue mr-2">•</span>
                Team Collaboration
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsPage;