"use client";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';

const ProjectsPage: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl"
    >
      <header className="mb-8">
        <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
          $ ls ~/projects
        </div>
        <h1 className="text-3xl font-bold mb-2 text-white">Projects</h1>
        <p className="text-white/70">
          A collection of my work, side projects, and experiments.
        </p>
      </header>
      
      {/* Featured projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-mono text-neon-blue mb-4">{"// Featured Projects"}</h2>
          <div className="grid grid-cols-1 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
      
      {/* Other projects */}
      <div>
        <h2 className="text-xl font-mono text-neon-blue mb-4">{"// All Projects"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      
      {/* Footer note */}
      <div className="mt-12 p-4 bg-terminal neon-border rounded-lg text-center">
        <p className="text-white/70">
          More projects available on my{' '}
          <a
            href="https://github.com/harshbansal"
            target="_blank"
            rel="noreferrer"
            className="text-neon-blue hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;