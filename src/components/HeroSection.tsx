
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Brain, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-portfolio-teal/20 to-portfolio-blue/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-portfolio-purple/10 to-portfolio-teal/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 animate-float" style={{animationDelay: '0s'}}>
          <div className="p-3 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-lg shadow-lg opacity-80">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute top-48 right-1/4 animate-float" style={{animationDelay: '2s'}}>
          <div className="p-3 bg-gradient-to-r from-portfolio-teal to-portfolio-blue rounded-lg shadow-lg opacity-80">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="absolute bottom-48 left-1/6 animate-float" style={{animationDelay: '4s'}}>
          <div className="p-3 bg-gradient-to-r from-portfolio-purple to-portfolio-teal rounded-lg shadow-lg opacity-80">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-3/5 animate-fade-in">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-portfolio-teal/20 border border-accent/30 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm font-medium text-accent">Welcome to my portfolio</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-balance leading-tight">
                  Hi, I'm{" "}
                  <span className="relative inline-block">
                    <span className="gradient-bg text-transparent bg-clip-text animate-gradient">
                      Mutyalapati Akhil Kumar
                    </span>
                    <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-lg blur opacity-20 animate-pulse"></div>
                  </span>
                </h1>
                
                <div className="relative">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 mb-2">
                    Aspiring{" "}
                    <span className="relative">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-purple to-portfolio-teal">
                        Machine Learning Engineer
                      </span>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-teal rounded-full"></div>
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-2xl leading-relaxed">
                Passionate about developing intelligent systems that can learn and make decisions. 
                Currently exploring the fascinating world of{" "}
                <span className="font-semibold text-portfolio-blue">neural networks</span>,{" "}
                <span className="font-semibold text-portfolio-purple">computer vision</span>, and{" "}
                <span className="font-semibold text-portfolio-teal">natural language processing</span>.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-blue">5+</div>
                  <div className="text-sm text-foreground/60">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-purple">10+</div>
                  <div className="text-sm text-foreground/60">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-teal">2+</div>
                  <div className="text-sm text-foreground/60">Years Learning</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-blue/90 hover:to-portfolio-purple/90 transform hover:scale-105 transition-all duration-300 shadow-lg" asChild>
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg font-semibold border-2 border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal hover:text-white transform hover:scale-105 transition-all duration-300" asChild>
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-portfolio-blue/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-portfolio-purple/20 animate-spin-reverse"></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue to-portfolio-purple rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-portfolio-blue to-portfolio-purple rounded-full flex items-center justify-center relative animate-fade-in p-2 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="/lovable-uploads/2aeb3934-aabf-4288-9407-1cd2116bd5c9.png" 
                      alt="Profile picture of Akhil Kumar"
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <AvatarFallback className="text-white text-6xl font-bold bg-gradient-to-br from-portfolio-blue to-portfolio-purple">AK</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-portfolio-blue/20 animate-bounce">
                <span className="text-sm font-semibold text-portfolio-blue">ML Engineer</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-portfolio-purple/20 animate-bounce" style={{animationDelay: '1s'}}>
                <span className="text-sm font-semibold text-portfolio-purple">AI Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
