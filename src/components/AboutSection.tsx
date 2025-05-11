
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50 scroll-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
          About <span className="gradient-bg text-transparent bg-clip-text">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
              I'm a second-year B.Tech student at VIT-AP University with a deep interest in Machine Learning and
              Artificial Intelligence. My journey into the world of data science began when I first discovered
              the power of algorithms to extract meaningful patterns from seemingly chaotic data.
            </p>
            <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
              Currently, I'm focused on developing my skills in neural networks, computer vision, and natural
              language processing. I'm particularly fascinated by how machine learning can be applied to solve
              real-world problems across various domains including healthcare, finance, and environmental science.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              My goal is to become a skilled Machine Learning Engineer who can bridge the gap between cutting-edge
              research and practical applications. I'm committed to continuous learning and staying updated with
              the latest advancements in the field.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                <div className="text-3xl font-bold text-accent mb-2">1+</div>
                <div className="text-foreground/80">Years of Coding</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-foreground/80">ML Projects</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                <div className="text-3xl font-bold text-accent mb-2">2+</div>
                <div className="text-foreground/80">Certificates</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md card-hover">
                <div className="text-3xl font-bold text-accent mb-2">B.Tech</div>
                <div className="text-foreground/80">Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
