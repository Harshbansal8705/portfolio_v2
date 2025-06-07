"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  // Boot sequence steps
  const bootSteps = [
    { text: 'Initializing system...', delay: 300 },
    { text: 'Loading kernel modules...', delay: 600 },
    { text: 'Establishing secure connection...', delay: 900 },
    { text: 'Decrypting portfolio assets...', delay: 1200 },
    { text: 'Analyzing visitor data...', delay: 1500 },
    { text: 'Preparing neural interface...', delay: 1800 },
    { text: 'Launching portfolio environment...', delay: 2100 }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4" suppressHydrationWarning>
      <div className="w-full max-w-xl bg-terminal neon-border p-6 rounded-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-neon-blue mb-4"
        >
          HARSH-OS v2.5.3
        </motion.div>
        
        {/* Boot messages */}
        <div className="font-mono text-sm space-y-2 mb-6 h-64 overflow-hidden">
          {bootSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay / 1000 }}
              className="text-neon-green"
            >
              {progress > (index * 15) && (
                <div className="flex">
                  <span className="text-neon-blue mr-2">[{(step.delay / 100).toFixed(1)}s]</span>
                  <span>{step.text}</span>
                </div>
              )}
            </motion.div>
          ))}
          
          {progress === 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="text-neon-yellow mt-4"
            >
              SYSTEM READY. WELCOME TO HARSH BANSAL&apos;S PORTFOLIO.
            </motion.div>
          )}
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-background/30 rounded-full h-2 mb-4">
          <motion.div
            className="bg-neon-blue h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        
        {/* Progress percentage */}
        <div className="flex justify-between text-xs font-mono">
          <span className="text-neon-blue">Loading: {progress}%</span>
          {progress === 100 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              onClick={onComplete}
              className="text-neon-green hover:text-neon-blue transition-colors"
            >
              [ ENTER ]
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BootSequence;