
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-heading font-bold text-foreground">
              Akhil<span className="text-accent">.</span>
            </div>
            <p className="text-foreground/70 text-sm mt-1">
              Aspiring Machine Learning Engineer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/70 text-sm">
              © {new Date().getFullYear()} Mutyalapati Akhil Kumar. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <nav className="flex space-x-6">
                <a href="#home" className="text-foreground/70 hover:text-foreground text-sm">Home</a>
                <a href="#about" className="text-foreground/70 hover:text-foreground text-sm">About</a>
                <a href="#projects" className="text-foreground/70 hover:text-foreground text-sm">Projects</a>
                <a href="#contact" className="text-foreground/70 hover:text-foreground text-sm">Contact</a>
              </nav>
            </div>
            
        
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
