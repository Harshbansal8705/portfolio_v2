"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();
  
  useEffect(() => {
    // Auto-redirect countdown
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push('/');
    }
  }, [countdown, router]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-6 text-neon-blue"
      >
        <AlertTriangle className="w-16 h-16 mx-auto" />
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-2">Error 404</h1>
      <p className="text-xl text-foreground/70 mb-6">Page not found</p>
      
      <div className="bg-terminal neon-border p-4 rounded-lg font-mono text-sm mb-8 max-w-md">
        <div className="text-neon-green mb-2">$ find /page</div>
        <div className="text-error-light">find: cannot access &apos;page&apos;: No such file or directory</div>
        <div className="text-neon-green mt-2">$ _</div>
      </div>
      
      <p className="text-foreground/70 mb-6">
        Redirecting to home in <span className="text-neon-blue">{countdown}</span> seconds...
      </p>
      
      <Link
        href="/"
        className="flex items-center bg-neon-blue text-background px-6 py-3 rounded-lg font-medium hover:bg-neon-blue/90 transition-colors"
      >
        <Home className="w-4 h-4 mr-2" />
        Return Home
      </Link>
    </motion.div>
  );
};

export default NotFoundPage;