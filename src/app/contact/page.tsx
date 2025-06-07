"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Globe, Send, CheckCircle, Instagram } from 'lucide-react';
import { socialLinks } from '@/data';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Icon mapping
  const iconMap: Record<string, React.ReactNode> = {
    'Github': <Github className="w-5 h-5" />,
    'Linkedin': <Linkedin className="w-5 h-5" />,
    'Twitter': <Twitter className="w-5 h-5" />,
    'Instagram': <Instagram className="w-5 h-5" />,
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto max-w-4xl"
    >
      <header className="mb-8">
        <div className="inline-block bg-neon-blue/10 border border-neon-blue/30 rounded px-3 py-1 text-sm font-mono text-neon-blue mb-4">
          $ connect --human
        </div>
        <h1 className="text-3xl font-bold mb-2">Get In Touch</h1>
        <p className="text-foreground/70">
          Have a question or want to work together? Reach out to me.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-mono text-neon-blue mb-6">{"// Send a Message"}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-terminal neon-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-terminal neon-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-terminal neon-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-neon-blue/50 resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`flex items-center justify-center w-full py-3 rounded-lg font-medium transition-colors ${
                isSubmitted
                  ? 'bg-success text-background'
                  : 'bg-neon-blue text-background hover:bg-neon-blue/90'
              }`}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
        
        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-mono text-neon-blue mb-6">{"// Connect With Me"}</h2>
          
          <div className="bg-terminal neon-border rounded-lg overflow-hidden">
            <div className="terminal-header">
              <span>Contact Information</span>
            </div>
            
            <div className="p-4 space-y-6">
              <div>
                <div className="flex items-center text-neon-green mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="font-mono">Email</span>
                </div>
                <a
                  href="mailto:contact@harshbansal.in"
                  className="text-foreground hover:text-neon-blue transition-colors"
                >
                  contact@harshbansal.in
                </a>
              </div>
              
              <div>
                <div className="flex items-center text-neon-green mb-2">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="font-mono">Location</span>
                </div>
                <p className="text-foreground">Bangalore, India</p>
              </div>
              
              <div>
                <div className="flex items-center text-neon-green mb-3">
                  <Linkedin className="w-4 h-4 mr-2" />
                  <span className="font-mono">Social Links</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-foreground hover:text-neon-blue transition-colors"
                    >
                      {iconMap[link.icon]}
                      <span className="ml-2">{link.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Availability note */}
          <div className="mt-6 p-4 bg-neon-blue/10 border border-neon-blue/30 rounded-lg">
            <p className="text-foreground">
              <span className="text-neon-blue font-medium">Currently available</span> and probably drinking coffee while you read this. Let&apos;s chat! ☕
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;