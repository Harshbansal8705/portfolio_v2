"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { socialLinks } from '@/data';

const HomePage: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'Github': <Github className="w-5 h-5" />,
    'Linkedin': <Linkedin className="w-5 h-5" />,
    'Twitter': <Twitter className="w-5 h-5" />,
    'Globe': <Globe className="w-5 h-5" />,
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        {/* Left column - text content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
              $ whoami
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              <span className="relative inline-block">
                <span className="text-foreground">Harsh Bansal</span>
                <span className="absolute inset-0 text-neon-blue/30 animate-glow" style={{ filter: 'blur(1px)' }}>Harsh Bansal</span>
              </span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-foreground/80 font-mono">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Tech Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'IIT Kharagpur Student',
                  2000
                ]}
                speed={50}
                repeat={Infinity}
                className="text-neon-blue"
              />
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-foreground/80 text-base md:text-lg"
          >
            Building innovative software solutions with a focus on performance, security, and user experience. Passionate about exploring new technologies and solving complex problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center bg-neon-blue text-background px-6 py-3 rounded-lg font-medium hover:bg-neon-blue/90 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-transparent border border-neon-blue text-neon-blue px-6 py-3 rounded-lg font-medium hover:bg-neon-blue/10 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex space-x-4 mt-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/60 hover:text-neon-blue transition-colors"
                aria-label={link.platform}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {iconMap[link.icon]}
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
        
        {/* Right column - visual elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-glow-radial opacity-50" />
          
          {/* Animated code block */}
          <div className="bg-terminal neon-border rounded-lg overflow-hidden shadow-lg">
            <div className="terminal-header flex items-center">
              <span>terminal@harsh-bansal</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="text-neon-green mb-2">$ node introduction.js</div>
              <TypeAnimation
                sequence={[
                  'const developer = {\n  name: "Harsh Bansal",\n  skills: ["JavaScript", "React", "Node.js", "Python"],\n  education: "IIT Kharagpur",\n  interests: ["Development", "AI", "System Design", "Open Source"]\n};\n\nconsole.log("Hello World! I\'m " + developer.name);',
                  1000
                ]}
                speed={90}
                className="text-foreground whitespace-pre"
              />
              <div className="text-neon-blue mt-4">Hello World! I&apos;m Harsh Bansal</div>
              <div className="text-neon-green mt-2">$ _</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Easter egg hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-xs text-foreground/40 text-center mt-16 hidden md:block"
      >
        <p>Hint: Try pressing Ctrl+K or type &quot;help&quot; in the terminal</p>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;