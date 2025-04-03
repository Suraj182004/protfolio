'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, FileText, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, slideInRightVariants } from '@/lib/animation';

const navLinks = [
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md py-3 shadow-lg border-b border-primary/10 text-foreground'
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <Link href="#home" className="text-2xl font-bold tracking-tight relative group">
          <span className="text-foreground">Suraj</span>
          <span className="gradient-text">Yaligar</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium hover:text-primary transition-colors duration-300 relative group ${
                activeSection === link.href.substring(1) 
                  ? 'text-primary' 
                  : scrolled ? 'text-foreground/80' : 'text-white/80'
              }`}
            >
              {link.name}
              <span 
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </Link>
          ))}
          <Button 
            asChild 
            className="rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90 ml-2"
          >
            <a href="https://drive.google.com/file/d/1nXlyAYSwBeSqo1GtwvdcQQJgwu0744o7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
              <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] border-l border-primary/10 p-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-background to-background/95 p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="#home" className="text-2xl font-bold" onClick={() => setIsOpen(false)}>
                    <span className="text-foreground">Suraj</span>
                    <span className="gradient-text">Yaligar</span>
                  </Link>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col gap-6 mt-6">
                  {navLinks.map((link, index) => (
                    <AnimatedElement
                      key={link.name}
                      variants={slideInRightVariants}
                      delay={index * 0.05}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium hover:text-primary transition-colors py-2 flex items-center ${
                          activeSection === link.href.substring(1) 
                            ? 'text-primary' 
                            : 'text-white'
                        }`}
                      >
                        {activeSection === link.href.substring(1) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-violet-500 mr-3"></span>
                        )}
                        {link.name}
                      </Link>
                    </AnimatedElement>
                  ))}
                </nav>
                
                <div className="mt-auto mb-8">
                  <AnimatedElement
                    variants={fadeUpVariants}
                    delay={0.3}
                  >
                    <Button 
                      asChild 
                      className="w-full rounded-full py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90"
                    >
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Download Resume</span>
                      </a>
                    </Button>
                    
                    <div className="flex justify-center gap-6 mt-8">
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
                  </AnimatedElement>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
