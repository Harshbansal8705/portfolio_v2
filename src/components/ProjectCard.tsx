import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-terminal neon-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 229, 255, 0.1)' }}
    >
      {/* Header */}
      <div className="terminal-header flex justify-between items-center">
        <div className="flex items-center">
          <Code size={16} className="mr-2" />
          <span>{project.title}</span>
        </div>
        <div className="flex space-x-2">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-neon-blue/70 hover:text-neon-blue"
              aria-label="View on GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-neon-blue/70 hover:text-neon-blue"
              aria-label="View Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <pre className="text-foreground mb-3 text-wrap">{project.description}</pre>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-mono bg-neon-blue/10 text-neon-blue px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Expand button */}
        <button
          className="flex items-center text-sm text-neon-blue/70 hover:text-neon-blue transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp size={16} className="mr-1" />
              Hide Code
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-1" />
              View Code
            </>
          )}
        </button>
        
        {/* Code snippet */}
        {isExpanded && project.codeSnippet && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <SyntaxHighlighter 
              language={project.language || 'javascript'} 
              style={atomOneDark}
              customStyle={{ 
                borderRadius: '0.375rem',
                fontSize: '0.8rem', 
                padding: '1rem',
                backgroundColor: '#0A0E17'
              }}
            >
              {project.codeSnippet.trim()}
            </SyntaxHighlighter>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;