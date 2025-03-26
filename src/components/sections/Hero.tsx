'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter, FileText, Send } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [bubbles, setBubbles] = useState<Array<{id: number, x: number, y: number, size: number, speed: number}>>([]);

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      speed: Math.random() * 0.5 + 0.2
    }));
    setBubbles(initialBubbles);

    // Animate bubbles
    const interval = setInterval(() => {
      setBubbles(prev => prev.map(bubble => ({
        ...bubble,
        y: bubble.y - bubble.speed,
        x: bubble.x + Math.sin(Date.now() * 0.001 + bubble.id) * 0.2,
        // Reset bubble position when it goes off screen
        ...(bubble.y < -10 ? { y: 110, x: Math.random() * 100 } : {})
      })));
    }, 50);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={heroRef}>
      {/* Fluid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-900 via-indigo-800 to-indigo-700 z-0">
        {bubbles.map(bubble => (
          <div 
            key={bubble.id}
            className="absolute rounded-full bg-primary/15 backdrop-blur-md"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: 0.2 + Math.random() * 0.2,
              transform: `scale(${1 + Math.sin(Date.now() * 0.001 + bubble.id) * 0.1})`,
              transition: 'transform 0.5s ease-out'
            }}
          />
        ))}
      </div>
      
      {/* Dark overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/25 z-1"></div>
      
      {/* Cursor following gradient */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/40 to-violet-500/40 blur-3xl opacity-50 pointer-events-none z-1"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 50,
          mass: 0.5
        }}
      />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 py-20 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-md">
              Hi, I'm <span className="bg-white text-transparent bg-clip-text">Suraj Yaligar</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-white/90 drop-shadow-md">
              Full Stack Developer & Computer Engineering Student
            </h2>
          </motion.div>
        </div>
        
        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-5 mb-6"
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 text-white backdrop-blur-sm hover:text-primary hover:scale-110 shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 text-white backdrop-blur-sm hover:text-primary hover:scale-110 shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all duration-300 text-white backdrop-blur-sm hover:text-primary hover:scale-110 shadow-lg"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </motion.div>
        
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Button 
            onClick={scrollToContact}
            className="rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90"
          >
            <Send className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-transparent border-white/20 hover:border-white/40"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
