'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { AnimatedElement, AnimatedGroup } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, scaleUpVariants } from '@/lib/animation';
import { projectsData } from '@/lib/projects-data';

export default function Projects() {
  // Filter to only show featured projects
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedElement
          variants={fadeUpVariants}
          threshold={0.1}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight gradient-text">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg leading-relaxed">
            A showcase of my recent work, ranging from web applications to design projects. Each project reflects my commitment to clean code and user-centric design.
          </p>
        </AnimatedElement>
        
        <AnimatedGroup
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          threshold={0.1}
        >
          {featuredProjects.map((project) => (
            <AnimatedElement
              key={project.title}
              variants={fadeUpVariants}
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
            </AnimatedElement>
          ))}
        </AnimatedGroup>
        
        <AnimatedElement
          variants={scaleUpVariants}
          threshold={0.1}
          delay={0.3}
          className="text-center mt-16"
        >
          <Button asChild className="rounded-full px-8 py-6 text-base bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link href="/projects" className="flex items-center gap-2">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
