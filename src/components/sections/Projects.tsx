'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Decentralized CrowdFunding',
    description: 'A blockchain-based platform for transparent and trustless fundraising, built with React, TailwindCSS, and Ethereum.',
    image: '/images/projects/crowdfunding.jpg',
    tags: ['React', 'TailwindCSS', 'Ethereum', 'Ether.js'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built the UI and frontend for a decentralized crowdfunding platform.',
      'Ensured a trustless and transparent fundraising experience.',
      'Integrated Ethereum blockchain using Ether.js.'
    ]
  },
  {
    title: 'GharDekho - Real Estate Platform',
    description: 'A comprehensive real estate platform with advanced search and filtering capabilities, built with React and Firebase.',
    image: '/images/projects/ghardekho.jpg',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Built the frontend and implemented JWT authentication.',
      'Integrated advanced search filters for property type, price, and location.'
    ]
  },
  {
    title: 'ADAA Jaipur - Women Clothing Platform',
    description: 'An e-commerce platform for women\'s clothing with secure payments and inventory management.',
    image: '/images/projects/adaa.jpg',
    tags: ['MERN', 'TailwindCSS', 'JWT'],
    demoLink: '#',
    repoLink: '#',
    highlights: [
      'Developed the backend and admin panel for a clothing e-commerce site.',
      'Integrated secure payments and inventory management.',
      'Designed a responsive UI using React.js and TailwindCSS.'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-medium mb-3 bg-primary/10 px-4 py-1.5 rounded-full text-sm">MY WORK</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight gradient-text">Projects</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-primary/60 to-violet-500/60 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden group border border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 shadow-lg hover:shadow-xl rounded-xl">
                <div className="relative overflow-hidden h-60">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-neutral-900 group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-md">{project.title}</h3>
                  </div>
                </div>
                <CardHeader className="pb-2 pt-5">
                  <CardDescription className="text-base text-foreground/90">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2 pb-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">{tag}</Badge>
                    ))}
                  </div>
                  <ul className="list-disc list-inside text-sm text-foreground/80 space-y-3 pl-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="leading-relaxed">{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-4 pt-2 pb-6">
                  <Button asChild variant="default" size="sm" className="rounded-full px-6 py-5 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="rounded-full px-6 py-5 shadow-sm hover:shadow-md transition-all duration-300 border-primary/20 hover:bg-primary/5">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base border-primary/20 hover:bg-primary/5 shadow-sm">
            <a href="#" className="flex items-center gap-2">
              <span>View All Projects</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
