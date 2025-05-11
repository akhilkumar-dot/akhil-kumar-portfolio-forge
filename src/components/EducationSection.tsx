
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FilePdf } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const EducationSection = () => {
  const handleDownloadResume = () => {
    // Open the image in a new tab instead of downloading as PDF
    window.open("/lovable-uploads/98e01139-7ba9-4e4d-89f7-126ce244ea9e.png", "_blank");
    
    // Show a toast notification
    toast.success("Resume opened in a new tab", {
      description: "You can save it from there if needed"
    });
  };

  return (
    <section id="education" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          My <span className="gradient-bg text-transparent bg-clip-text">Education</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          My academic journey and learning path in the field of engineering and machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Details */}
          <div className="bg-card rounded-xl shadow-md p-6">
            <div className="flex items-start space-x-4">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                <p className="text-foreground/70 mb-2">2nd Year Student</p>
                <p className="text-accent font-medium">VIT-AP University</p>
                <p className="text-sm text-foreground/60 mt-1">2023 - 2027 (Expected)</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Relevant Coursework</h4>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning Fundamentals</li>
                <li>Python Programming</li>
                <li>Database Management Systems</li>
                <li>Probability and Statistics</li>
                <li>Computer Vision (Elective)</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
