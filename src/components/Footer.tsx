'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <Github className="h-5 w-5" />, 
    href: 'https://github.com/yourusername',
    color: 'hover:bg-[#333]/20 hover:text-[#333] dark:hover:text-white'
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin className="h-5 w-5" />, 
    href: 'https://linkedin.com/in/yourusername',
    color: 'hover:bg-[#0077B5]/20 hover:text-[#0077B5]'
  },
  { 
    name: 'Twitter', 
    icon: <Twitter className="h-5 w-5" />, 
    href: 'https://twitter.com/yourusername',
    color: 'hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2]'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-background/50 backdrop-blur-md border-t border-border/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      {/* Scroll to top button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="absolute right-8 -top-6 z-20"
      >
        <Button 
          onClick={scrollToTop} 
          size="icon" 
          className="h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-4 p-3 rounded-full bg-background/80 backdrop-blur-md shadow-lg border border-border/50">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${link.color}`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <Link href="#home" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <span className="text-foreground">Suraj</span>
              <span className="gradient-text">Yaligar</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md leading-relaxed">
              A passionate full-stack developer focused on creating intuitive and engaging web experiences with modern technologies.
            </p>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:items-center"
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary/60 to-violet-500/60 rounded-full"></span>
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 group flex items-center"
                >
                  <span className="w-0 h-0.5 bg-primary rounded-full mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                  {link.name}
                </Link>
              ))}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300 group flex items-center mt-2"
              >
                <span className="w-0 h-0.5 bg-primary rounded-full mr-0 transition-all duration-300 group-hover:w-3 group-hover:mr-2"></span>
                Resume
                <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
              </a>
            </nav>
          </motion.div>
          
          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:items-end"
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary/60 to-violet-500/60 rounded-full"></span>
            </h3>
            <a 
              href="mailto:contact@surayyaligar.com" 
              className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 mb-4 group"
            >
              <Mail className="h-5 w-5" />
              <span className="relative">
                contact@surayyaligar.com
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <p className="text-foreground/70 mt-4 md:text-right">
              Available for freelance opportunities<br />and full-time positions.
            </p>
            <div className="mt-6 bg-background/40 backdrop-blur-sm border border-primary/10 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 md:text-right">
              <p className="text-foreground/80 font-medium">Want to work together?</p>
              <Link 
                href="#contact" 
                className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold flex items-center gap-1 mt-1 group md:justify-end"
              >
                <span>Let's connect</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-border/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/60 text-sm mb-4 md:mb-0 text-center md:text-left">
            {currentYear} Suraj Yaligar. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm flex items-center gap-1.5">
            Made with <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse" /> using Next.js & TailwindCSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
