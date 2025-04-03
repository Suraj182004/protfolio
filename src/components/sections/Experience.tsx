'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { AnimatedElement, AnimatedGroup } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, fadeInVariants, slideInLeftVariants } from '@/lib/animation';

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 relative bg-muted/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <AnimatedElement
          variants={fadeUpVariants}
          threshold={0.1}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-medium mb-3 bg-primary/10 px-4 py-1.5 rounded-full text-sm">MY JOURNEY</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Experience</h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-10 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg md:text-xl leading-relaxed">
            My professional experience and notable achievements
          </p>
        </AnimatedElement>

        <AnimatedElement
          variants={fadeUpVariants}
          threshold={0.1}
          delay={0.2}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-background/50 backdrop-blur-sm p-1.5 rounded-full border border-primary/10">
              <TabsTrigger 
                value="work" 
                className="rounded-full py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-violet-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Work Experience</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className="rounded-full py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-violet-500 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <span>Achievements</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="work">
              <AnimatedElement variants={fadeUpVariants} threshold={0.2}>
                <Card className="border border-primary/10 shadow-lg bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-0 pt-8 px-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-2xl font-bold gradient-text">FullStack Developer Intern</CardTitle>
                        </div>
                        <CardDescription className="text-lg font-medium text-primary mb-1">
                          ADAA Jaipur
                        </CardDescription>
                      </div>
                      <div className="space-y-2">
                        <Badge variant="outline" className="flex items-center gap-1.5 w-fit px-3 py-1.5 border-primary/20 bg-primary/5 text-primary">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Jan 2025 - Mar 2025</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1.5 w-fit px-3 py-1.5 border-primary/20 bg-primary/5 text-primary">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>Remote</span>
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Working as a Full Stack Intern at ADAA Jaipur, I&apos;m responsible for developing and maintaining their e-commerce platform for women&apos;s clothing. My role involves both frontend and backend development, ensuring a seamless shopping experience for customers.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 relative inline-block">
                          Key Responsibilities
                          <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                        </h4>
                        <AnimatedGroup 
                          className="space-y-3 list-none pl-0"
                          variants={{
                            hidden: {},
                            visible: {
                              transition: {
                                staggerChildren: 0.1
                              }
                            }
                          }}
                          threshold={0.2}
                        >
                          {[
                            "Developed and maintained the ADAA Jaipur e-commerce platform, working on frontend and backend",
                            "Implemented user authentication & authorization using JWT",
                            "Designed and developed RESTful APIs",
                            "Integrated secure payment gateways",
                            "Managed and optimized the database",
                            "Ensured a responsive user experience across devices"
                          ].map((item, index) => (
                            <AnimatedElement
                              key={index}
                              variants={slideInLeftVariants}
                              as="li"
                              className="flex items-start gap-3 text-foreground/80 group hover:text-foreground transition-colors duration-300"
                            >
                              <div className="bg-primary/10 rounded-full p-1 mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                              </div>
                              <span>{item}</span>
                            </AnimatedElement>
                          ))}
                        </AnimatedGroup>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold mb-3 relative inline-block">
                          Technologies Used
                          <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-violet-500 rounded-full"></span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'TailwindCSS', 'RESTful APIs'].map((tech) => (
                            <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </TabsContent>
            
            <TabsContent value="achievements">
              <AnimatedGroup 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
                {[
                  {
                    title: "Winner - AR/VR Track @ Hack The Mountain",
                    description: "VfxVerse - Visual Effects Technology",
                    icon: "🏆",
                    color: "from-amber-500 to-yellow-500"
                  },
                  {
                    title: "Winner - WebHack",
                    description: "Decentralized Crowdfunding Platform using Blockchain",
                    icon: "🥇",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "Runner-up - Scavenger Hunt @ MU Fest 2023",
                    description: "Technical Software Development Challenge",
                    icon: "🥈",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "Runner-up - Build & Brand Challenge",
                    description: "ADAA Jaipur x Marwadi University (E-commerce solutions)",
                    icon: "🏅",
                    color: "from-green-500 to-emerald-500"
                  }
                ].map((achievement, index) => (
                  <AnimatedElement
                    key={index}
                    variants={fadeUpVariants}
                  >
                    <Card className="border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden h-full">
                      <CardHeader className="p-6 pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} text-white text-2xl shadow-md`}>
                            {achievement.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg font-bold">{achievement.title}</CardTitle>
                            <CardDescription className="mt-1">{achievement.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </AnimatedElement>
                ))}
                
                <AnimatedElement
                  variants={fadeInVariants}
                  threshold={0.2}
                  delay={0.3}
                  className="md:col-span-2"
                >
                  <Card className="border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500 bg-background/50 backdrop-blur-sm rounded-xl overflow-hidden">
                    <CardHeader className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-violet-500 text-white text-2xl shadow-md">
                          🎓
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold gradient-text">Academic Excellence</CardTitle>
                          <CardDescription className="mt-1">Achieved 9.5 CGPA in the 3rd semester, ranking among the top performers in the Computer Engineering department</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </AnimatedElement>
              </AnimatedGroup>
            </TabsContent>
          </Tabs>
        </AnimatedElement>
      </div>
    </section>
  );
}
