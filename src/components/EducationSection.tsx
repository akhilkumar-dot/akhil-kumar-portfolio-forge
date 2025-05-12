import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const EducationSection = () => {
  const handleOpenResume = () => {
    const resumeUrl = "/Akhil-resume.pdf"; // <-- Correct path from public/
    const newTab = window.open(resumeUrl, "_blank");

    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      toast.error("Popup blocked", {
        description: "Please allow popups for this site to view the resume.",
      });
    } else {
      toast.success("Resume opened", {
        description: "You can view or download it from the new tab.",
      });
    }
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
                <svg xmlns="http://www.w3.org/2000/svg" className="text-accent" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
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

          {/* Resume Section */}
          <div className="bg-card rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Resume</h3>
            <div
              className="flex-grow flex items-center justify-center p-6 bg-muted/50 rounded-lg mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleOpenResume}
            >
              <img
                src="/resume-thumbnail.jpg" // Put this image in /public/
                alt="Resume Thumbnail"
                className="rounded-lg max-h-64 shadow-lg"
              />
            </div>
            <Button className="w-full" onClick={handleOpenResume}>
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
