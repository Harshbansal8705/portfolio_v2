"use client";

import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

export default function Resume() {
  const publicPdfUrl = "https://harshbansal8705.github.io/Resume/resume.pdf";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-5xl"
    >
      {/* Header */}
      <header className="mb-6">
        <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
          $ cat resume.pdf
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
              <FileText size={28} className="text-neon-blue" />
              Resume
            </h1>
            <p className="text-foreground/70 text-sm">
              Harsh Bansal &mdash; Software Engineer
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={publicPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded border border-neon-blue/50 text-neon-blue text-sm font-mono
                         hover:bg-neon-blue/10 transition-colors duration-200 shadow-[0_0_5px_rgba(0,229,255,0.3)]"
            >
              <ExternalLink size={15} />
              Open
            </a>
            <a
              href={publicPdfUrl}
              download="Harsh_Bansal_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded bg-neon-blue text-background text-sm font-mono font-semibold
                         hover:bg-neon-blue/80 transition-colors duration-200 shadow-[0_0_10px_rgba(0,229,255,0.5)]"
            >
              <Download size={15} />
              Download
            </a>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="rounded-lg overflow-hidden border border-neon-blue/50 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
      >
        {/* Fake terminal title bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-terminal border-b border-neon-blue/20">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-neon-blue text-xs tracking-wide">resume.pdf</span>
        </div>

        <iframe
          src={`${publicPdfUrl}#toolbar=0&navpanes=0`}
          width="100%"
          height="820"
          style={{ border: 'none', display: 'block' }}
          title="Resume - Harsh Bansal"
        />
      </motion.div>

      {/* Footer hint */}
      <p className="text-center text-foreground/40 text-xs font-mono mt-4">
        // If the preview doesn&apos;t load,{' '}
        <a
          href={publicPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-blue hover:underline"
        >
          open it directly
        </a>
      </p>
    </motion.div>
  );
}