
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background via-background to-secondary/10">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 animate-fade-in pl-0 md:pl-8 lg:pl-12">
            <div className="space-y-4">
              <h2 className="text-lg font-medium text-accent">Welcome to my portfolio</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-balance leading-tight">
                Hi, I'm <span className="gradient-bg text-transparent bg-clip-text">Mutyalapati Akhil Kumar</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-foreground/80">
                Aspiring Machine Learning Engineer
              </h3>
              <p className="text-foreground/70 text-balance max-w-lg py-4">
                Passionate about developing intelligent systems that can learn and make decisions. 
                Currently exploring the world of neural networks, computer vision, and natural language processing.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="px-6 py-6" asChild>
                  <a href="#projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="px-6 py-6" asChild>
                  <a href="#contact">
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-portfolio-blue to-portfolio-purple rounded-full flex items-center justify-center relative animate-fade-in p-4">
                <div className="text-white text-6xl font-bold">AK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
