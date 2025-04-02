'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Briefcase, GraduationCap, Code } from 'lucide-react';
import { AnimatedElement, AnimatedGroup } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, fadeInVariants, scaleUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animation';

// Group skills by category
const skillCategories = {
  frontend: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT', 'OAuth'],
  languages: ['C', 'Java', 'Python', 'C++', 'Dart'],
  database: ['MongoDB', 'MySQL', 'PostgreSQL'],
  tools: ['Docker', 'Git', 'GitHub']
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <AnimatedElement 
          className="text-center mb-20"
          variants={fadeUpVariants}
          threshold={0.1}
        >
          <span className="inline-block text-primary font-medium mb-3 bg-primary/10 px-4 py-1.5 rounded-full text-sm">ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Who I Am</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed">
            Computer Engineering student with a passion for building innovative web applications
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left column - About me text */}
          <AnimatedElement
            variants={slideInLeftVariants}
            threshold={0.2}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2.5 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">My Journey</h3>
                </div>
                
                <div className="space-y-6 text-foreground/80 flex-grow">
                  <p className="leading-relaxed text-base md:text-lg">
                    I&apos;m a <span className="gradient-text font-medium">Computer Engineering student</span> at Marwadi University with a passion for full-stack development.
                    Currently working as a <span className="gradient-text font-medium">Full Stack Intern</span> at ADAA Jaipur, I specialize in building modern web applications
                    with a focus on user experience and performance.
                  </p>
                  <p className="leading-relaxed text-base md:text-lg">
                    With a strong foundation in both frontend and backend technologies, I enjoy creating
                    innovative solutions that solve real-world problems. I&apos;m constantly learning and exploring
                    new technologies to expand my skill set.
                  </p>
                  <p className="leading-relaxed text-base md:text-lg">
                    My goal is to create software that not only functions flawlessly but also provides an exceptional user experience.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild variant="default" className="rounded-full px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
          
          {/* Right column - Skills and Education */}
          <AnimatedElement
            variants={slideInRightVariants}
            threshold={0.2}
            className="lg:col-span-3 space-y-10"
            delay={0.2}
          >
            {/* Skills section */}
            <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 p-2.5 rounded-lg">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Skills & Technologies</h3>
                </div>
                
                <div className="space-y-6">
                  {Object.entries(skillCategories).map(([category, categorySkills]) => (
                    <div key={category} className="space-y-2">
                      <h4 className="text-lg font-medium capitalize mb-3 text-foreground/90 relative inline-block">
                        {category}
                        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                      </h4>
                      <AnimatedGroup 
                        className="flex flex-wrap gap-2"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.05
                            }
                          }
                        }}
                        threshold={0.1}
                      >
                        {categorySkills.map((skill) => (
                          <AnimatedElement
                            key={skill}
                            variants={scaleUpVariants}
                            as="div"
                          >
                            <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              {skill}
                            </Badge>
                          </AnimatedElement>
                        ))}
                      </AnimatedGroup>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Education section */}
            <AnimatedElement
              variants={fadeUpVariants}
              threshold={0.2}
              delay={0.2}
            >
              <Card className="bg-background/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-primary/10 p-2.5 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Education</h3>
                  </div>
                  
                  <AnimatedGroup 
                    className="space-y-8"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.2
                        }
                      }
                    }}
                  >
                    <AnimatedElement
                      variants={fadeInVariants}
                      as="div"
                      className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-violet-500 pb-8 group"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-violet-500 group-hover:scale-110 transition-transform duration-300"></div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">B.Tech. in Computer Engineering</h4>
                      <p className="text-foreground/70 mb-2">Marwadi University, Rajkot (2022-2026)</p>
                      <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary font-medium text-sm">
                        CGPA: 9.04/10
                      </div>
                    </AnimatedElement>
                    
                    <AnimatedElement
                      variants={fadeInVariants}
                      as="div"
                      className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-violet-500 group"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-violet-500 group-hover:scale-110 transition-transform duration-300"></div>
                      <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">Higher Secondary</h4>
                      <p className="text-foreground/70 mb-2">Atmiya Vidyapeeth, Gandhidham (2020-2022)</p>
                      <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-primary font-medium text-sm">
                        Percentage: 85%
                      </div>
                    </AnimatedElement>
                  </AnimatedGroup>
                </CardContent>
              </Card>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
