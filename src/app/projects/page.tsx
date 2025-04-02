'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, ArrowLeft, Search } from 'lucide-react';
import { AnimatedElement, AnimatedGroup } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, scaleUpVariants } from '@/lib/animation';
import { projectsData, Project } from '@/lib/projects-data';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  
  // Get all unique tags across all projects
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  ).sort();
  
  // Filter projects based on search term and selected tag
  useEffect(() => {
    const filtered = projectsData.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTag = selectedTag === null || project.tags.includes(selectedTag);
      
      return matchesSearch && matchesTag;
    });
    
    setFilteredProjects(filtered);
  }, [searchTerm, selectedTag]);
  
  return (
    <main className="py-28 md:py-36 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <AnimatedElement
          variants={fadeUpVariants}
          threshold={0.1}
          className="text-center mb-16"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight gradient-text">All Projects</h1>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed mb-10">
            Explore all my projects spanning various technologies and domains
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-xl mx-auto flex flex-col space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/50" />
              <Input 
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 rounded-full bg-background/50 border-primary/10 focus:border-primary/30"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Badge 
                variant={selectedTag === null ? "default" : "outline"}
                className={`px-3 py-2 cursor-pointer ${selectedTag === null ? "bg-gradient-to-r from-primary to-violet-500" : "bg-background/50 hover:bg-primary/10"}`}
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`px-3 py-2 cursor-pointer ${selectedTag === tag ? "bg-gradient-to-r from-primary to-violet-500" : "bg-background/50 hover:bg-primary/10"}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedElement>
        
        {/* Projects Grid */}
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                      <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-md">{project.title}</h2>
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
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-xl text-foreground/70">No projects match your search criteria.</p>
              <Button 
                variant="link" 
                className="mt-4 text-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTag(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </AnimatedGroup>
        
        {/* Back to top button */}
        <AnimatedElement
          variants={scaleUpVariants}
          threshold={0.1}
          delay={0.3}
          className="text-center mt-16"
        >
          <Button asChild variant="outline" className="rounded-full px-8 py-6 text-base border-primary/20 hover:bg-primary/5 shadow-sm">
            <Link href="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </AnimatedElement>
      </div>
    </main>
  );
} 