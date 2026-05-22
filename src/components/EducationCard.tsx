import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <motion.div
      className="bg-terminal neon-border rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="terminal-header">
        <span>{education.degree}</span>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold mb-1">{education.institution}</h3>
          <div className="flex flex-wrap text-sm text-foreground/70">
            <div className="flex items-center mr-4 mb-1">
              <CalendarDays size={14} className="mr-1" />
              <span>{education.duration}</span>
            </div>
            {education.location && (
              <div className="flex items-center mb-1">
                <MapPin size={14} className="mr-1" />
                <span>{education.location}</span>
              </div>
            )}
          </div>
        </div>


        {education.description && (
          <p className="text-foreground/80 text-sm">
            {education.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
