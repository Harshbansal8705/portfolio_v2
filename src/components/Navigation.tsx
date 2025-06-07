import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Home, Code, Cpu, Briefcase, Mail, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavigationProps {
  items: NavItem[];
  currentPath: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  'Home': <Home className="w-5 h-5" />,
  'Code': <Code className="w-5 h-5" />,
  'Cpu': <Cpu className="w-5 h-5" />,
  'Briefcase': <Briefcase className="w-5 h-5" />,
  'Mail': <Mail className="w-5 h-5" />,
};

const Navigation: React.FC<NavigationProps> = ({ 
  items, 
  currentPath, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-terminal neon-border p-2 rounded-lg"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-neon-blue" />
        ) : (
          <Menu className="w-5 h-5 text-neon-blue" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Navigation sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-screen bg-terminal/50 backdrop-blur-sm border-r border-neon-blue/20 z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64 md:w-20`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center p-2 mb-8">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal className="w-8 h-8 text-neon-blue animate-glow" />
            </motion.div>
          </Link>
          
          {/* Navigation items */}
          <nav className="flex flex-col space-y-2 flex-1">
            {items.map((item) => {
              const isActive = item.path === currentPath;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    isActive ? 'text-neon-blue bg-neon-blue/10' : 'text-foreground/70 hover:text-neon-blue hover:bg-neon-blue/5'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center ${isMobileMenuOpen ? "" : "mx-auto"}`}
                  >
                    {iconMap[item.icon]}
                    <span className="ml-3 md:hidden">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -right-1 -top-1 w-2 h-2 bg-neon-blue rounded-full md:block hidden"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navigation;