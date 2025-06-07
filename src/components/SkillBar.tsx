import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const getColorByCategory = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-neon-blue';
      case 'backend':
        return 'bg-neon-green';
      case 'devops':
        return 'bg-neon-purple';
      default:
        return 'bg-neon-yellow';
    }
  };
  
  const barColor = getColorByCategory(skill.category);
  const percentage = (skill.level / 5) * 100;
  
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-mono text-sm">{skill.name}</span>
        <span className="font-mono text-xs text-foreground/70">{skill.level}/5</span>
      </div>
      <div className="h-2 bg-terminal rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full ${barColor}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;