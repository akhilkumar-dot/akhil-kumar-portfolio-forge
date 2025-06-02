
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Available for opportunities
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Akhil Kumar
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Aspiring Machine Learning Engineer
              </h2>
              
              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                Passionate about developing intelligent systems that can learn and make decisions. 
                Currently exploring neural networks, computer vision, and natural language processing.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8 py-6 text-base font-semibold" asChild>
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-base font-semibold" asChild>
                <a href="/Akhil_Resume_1.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/60">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-foreground/60">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">Technologies</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/20 rounded-full"></div>
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent p-1 rounded-3xl overflow-hidden">
                  <Avatar className="w-full h-full rounded-3xl">
                    <AvatarImage 
                      src="/lovable-uploads/2aeb3934-aabf-4288-9407-1cd2116bd5c9.png" 
                      alt="Profile picture of Akhil Kumar"
                      className="object-cover" 
                    />
                    <AvatarFallback className="text-white text-8xl font-bold bg-gradient-to-br from-primary to-accent">
                      AK
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 -right-8 bg-white dark:bg-card shadow-lg rounded-2xl p-4 animate-bounce">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
