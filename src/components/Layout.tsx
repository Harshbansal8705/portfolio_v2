"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, X } from "lucide-react";
import CommandLine from "@/components/CommandLine";
import Navigation from "@/components/Navigation";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/data";
import BootSequence from "./BootSequence";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCommandLineOpen, setIsCommandLineOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isBooting, setIsBooting] = useState(true);

  const executeCommand = (command: string) => {
    const [cmd, ...args] = command.trim().toLowerCase().split(' ');
    const target = args[0] || 'home';
    const route = target === 'home' ? '/' : `/${target}`;

    switch (cmd) {
      case 'home':
      case 'goto':
      case 'cd':
        router.push(route);
        setIsCommandLineOpen(false);
        break;
      case 'show':
        if (args[0]) {
          router.push(`/${args[0]}`);
          setIsCommandLineOpen(false);
        }
        break;
      case 'connect':
        if (args[0]?.startsWith('--')) {
          const platform = args[0].substring(2);
          window.open(`https://${platform}.com/harshbansal8705`, '_blank');
          setIsCommandLineOpen(false);
        }
        break;
      case 'clear':
        setIsCommandLineOpen(false);
        break;
      case 'help':
        return `Available commands:
- goto <page>: Navigate to a page (home, projects, skills, experience, contact)
- show <section>: Display a specific section
- connect --<platform>: Open social links (github, linkedin, twitter)
- clear: Clear the terminal
- help: Show this help message`;
      default:
        return `Unknown command: ${command}\nType 'help' for available commands`;
    }
  };

  useEffect(() => {
    setIsClient(true);

    // Simulate boot sequence
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 3500);

    return () => clearTimeout(bootTimer);
  }, []);

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update dot position immediately
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }

      // Update outline position with a smooth animation
      if (cursorOutlineRef.current) {
        if (cursorOutlineRef.current.classList.contains('hover')) {
          cursorOutlineRef.current.style.transform = `translate(calc(${clientX}px), calc(${clientY}px)) scale(3)`;
        } else {
          cursorOutlineRef.current.style.transform = `translate(calc(${clientX}px), calc(${clientY}px))`;
        }
      }
    };

    // Handle hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursorDotRef.current?.classList.add('hover');
        cursorOutlineRef.current?.classList.add('hover');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursorDotRef.current?.classList.remove('hover');
        cursorOutlineRef.current?.classList.remove('hover');
      }
    };

    // Only add cursor effects on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', moveCursor);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open command line
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandLineOpen(prev => !prev);
      }

      // Escape to close command line or mobile menu
      if (e.key === 'Escape') {
        if (isCommandLineOpen) setIsCommandLineOpen(false);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandLineOpen, isMobileMenuOpen]);

  // If booting, show boot sequence
  if (isBooting) {
    return <BootSequence onComplete={() => setIsBooting(false)} />;
  }

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden relative">
        {/* Custom cursor - only show on non-touch devices */}
        {isClient && window.matchMedia('(pointer: fine)').matches && (
          <>
            <div ref={cursorDotRef} className="cursor-dot hidden md:block" />
            <div ref={cursorOutlineRef} className="cursor-outline hidden md:block" />
          </>
        )}

        {/* Background grid */}
        <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />

        {/* Scan line effect */}
        <div className="scan-line" />

        {/* Terminal button */}
        <button
          className="fixed right-4 bottom-4 z-50 bg-terminal neon-border p-2 rounded-md hover:bg-neon-blue/10 transition-colors"
          onClick={() => setIsCommandLineOpen(true)}
          aria-label="Open terminal"
        >
          <Terminal className="w-5 h-5 text-neon-blue" />
        </button>

        {/* Command line interface */}
        {isCommandLineOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-xl bg-terminal neon-border rounded-lg overflow-hidden shadow-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-between items-center px-4 py-2 border-b border-neon-blue/20">
                <span className="font-mono text-neon-blue">Terminal</span>
                <button
                  onClick={() => setIsCommandLineOpen(false)}
                  className="text-neon-blue/70 hover:text-neon-blue"
                >
                  <X size={18} />
                </button>
              </div>
              <CommandLine onExecute={executeCommand} />
            </motion.div>
          </motion.div>
        )}

        {/* Main layout */}
        <div className="flex flex-col md:flex-row flex-1">
          {/* Side navigation */}
          <Navigation
            items={navItems}
            currentPath={pathname}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />

          {/* Main content */}
          <main className="flex-1 p-4 md:p-8 overflow-y-auto ml-0 md:ml-20 pt-20 md:pt-8">
            {children}
          </main>
        </div>
      </div>
    </AnimatePresence>
  );
}
