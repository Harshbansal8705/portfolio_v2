import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div 
      className="bg-terminal neon-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="terminal-header">
        <span>{experience.position}</span>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold mb-1">{experience.company}</h3>
          <div className="flex flex-wrap text-sm text-foreground/70">
            <div className="flex items-center mr-4 mb-1">
              <CalendarDays size={14} className="mr-1" />
              <span>{experience.duration}</span>
            </div>
            {experience.location && (
              <div className="flex items-center mb-1">
                <MapPin size={14} className="mr-1" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>
        
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, i) => (
            <li key={i} className="flex">
              <span className="text-neon-blue mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-mono bg-neon-blue/10 text-neon-blue px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;