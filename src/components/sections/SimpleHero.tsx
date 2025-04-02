'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight, ExternalLink } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { fadeUpVariants } from '@/lib/animation';

export default function SimpleHero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-full relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedElement
            variants={fadeUpVariants}
            threshold={0.1}
          >
            <span className="inline-block text-primary/90 font-medium mb-6 bg-primary/10 px-5 py-2 rounded-full text-sm">FULL STACK DEVELOPER</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
              Hi, I&apos;m <span className="gradient-text relative inline-block">
                Suraj Yaligar
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                ></motion.span>
              </span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement
            variants={fadeUpVariants}
            threshold={0.1}
            delay={0.3}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-12 text-foreground/90 drop-shadow-md max-w-3xl mx-auto leading-relaxed">
              Creating exceptional digital experiences with modern web technologies and creative problem-solving
            </h2>
          </AnimatedElement>
          
          <AnimatedElement
            variants={fadeUpVariants}
            threshold={0.1}
            delay={0.6}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="px-10 py-7 text-base font-medium rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
            >
              <span className="mr-3">Contact Me</span>
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="px-10 py-7 text-base font-medium rounded-full backdrop-blur-sm bg-background/10 border-primary/20 hover:bg-primary/5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <span className="mr-3">View Resume</span>
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </AnimatedElement>
          
          <AnimatedElement
            variants={fadeUpVariants}
            threshold={0.1}
            delay={0.9}
            className="mt-24 flex justify-center gap-10"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/10 backdrop-blur-sm p-4 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-foreground/5"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/10 backdrop-blur-sm p-4 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-foreground/5"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-background/10 backdrop-blur-sm p-4 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg border border-foreground/5"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </AnimatedElement>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors hover:scale-105 duration-300 group"
          >
            <span className="text-sm mb-3 font-medium group-hover:text-primary">Scroll Down</span>
            <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex justify-center pt-1">
              <motion.div 
                animate={{ 
                  y: [0, 8, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
