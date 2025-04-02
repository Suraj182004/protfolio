'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { AnimatedElement } from '@/components/ui/AnimatedElement';
import { fadeUpVariants, slideInLeftVariants, slideInRightVariants } from '@/lib/animation';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <AnimatedElement
          variants={fadeUpVariants}
          threshold={0.1}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
            Feel free to reach out if you have any questions or would like to work together.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedElement
            variants={slideInLeftVariants}
            threshold={0.2}
            delay={0.2}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-primary/10 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-8 gradient-text">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-primary/10 p-3.5 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <a href="mailto:surajyaligar2004@gmail.com" className="text-foreground/80 hover:text-primary transition-colors relative inline-block group-hover:text-primary">
                      surajyaligar2004@gmail.com
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-primary/10 p-3.5 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Location</p>
                    <p className="text-foreground/80 group-hover:text-foreground/90 transition-colors">Rajkot, Gujarat, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="bg-primary/10 p-3.5 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-lg">Phone</p>
                    <a href="tel:+919449384158" className="text-foreground/80 hover:text-primary transition-colors relative inline-block group-hover:text-primary">
                      +91 94493 84158
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="font-medium text-lg mb-5">Connect with me</p>
                <div className="flex gap-4">
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
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement
            variants={slideInRightVariants}
            threshold={0.2}
            delay={0.4}
          >
            <Card className="border border-primary/10 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your name"
                        className="bg-background/50 focus:border-primary/50 transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Your email"
                        className="bg-background/50 focus:border-primary/50 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="min-h-32 bg-background/50 focus:border-primary/50 transition-all duration-300"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full transition-all duration-300 hover:shadow-md bg-gradient-to-r from-primary to-violet-500 hover:from-primary hover:to-violet-500/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-background border-r-transparent animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
