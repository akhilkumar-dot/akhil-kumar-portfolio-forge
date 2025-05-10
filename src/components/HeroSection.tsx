
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Switch } from "@/components/ui/switch";

const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();
  
  // Handle scroll to hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden
      ${isDarkMode 
        ? "bg-gradient-to-br from-background via-background to-secondary/20 text-white"
        : "bg-gradient-to-br from-background via-background to-portfolio-teal/10"}`}
    >
      {/* Dark mode toggle in top right */}
      <div className="absolute top-24 right-8 flex items-center gap-2">
        <span className="text-sm">🌞</span>
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        <span className="text-sm">🌙</span>
      </div>
      
      <div className="container mx-auto px-8 py-12 md:py-24 text-center">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
          {/* Avatar with animated border */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-purple animate-spin-slow opacity-70 blur-md"></div>
            <Avatar className="w-40 h-40 border-4 border-white dark:border-gray-800 shadow-xl">
              <AvatarFallback className="bg-gradient-to-br from-portfolio-blue to-portfolio-purple text-white text-4xl font-bold">
                AK
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-lg md:text-xl font-medium text-accent animate-fade-in">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight animate-fade-in delay-100">
              I'm <span className="gradient-bg text-transparent bg-clip-text">Mutyalapati Akhil Kumar</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-foreground/80 animate-fade-in delay-200">
              Aspiring Machine Learning Engineer
            </h3>
            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto py-4 animate-fade-in delay-300">
              Passionate about solving real-world problems with intelligent systems. Graduating in 2027.
            </p>
            
            {/* CTA Buttons with hover effects */}
            <div className="pt-8 flex flex-wrap gap-5 justify-center animate-fade-in delay-400">
              <Button 
                size="lg"
                className="px-8 py-7 text-lg rounded-xl bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:shadow-lg hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#projects">
                  Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-7 text-lg rounded-xl border-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-accent hover:text-accent-foreground transition-colors duration-300">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll</span>
              <ArrowDown className="h-6 w-6" />
            </div>
          </a>
        </div>
      )}
      
      {/* Background animated gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-blue/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-portfolio-purple/10 blur-3xl animate-pulse" />
    </section>
  );
};

export default HeroSection;
