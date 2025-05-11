import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const EducationSection = () => {
  const handleOpenResume = () => {
    const resumeUrl = "C:\\Users\\Akhil M\\Downloads\\Akhil_Resume_1.pdf";
    const newTab = window.open(resumeUrl, "_blank");
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      toast.error("Popup blocked", {
        description: "Please allow popups for this site to view the resume.",
      });
    } else {
      toast.success("Resume opened in a new tab", {
        description: "You can view or download it there.",
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
          {/* Education Block */}
          <div className="bg-card rounded-xl shadow-md p-6">
            {/* Your education content */}
          </div>

          {/* Resume Block */}
          <div className="bg-card rounded-xl shadow-md p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Resume</h3>
            <div
              className="flex-grow flex items-center justify-center p-6 bg-muted/50 rounded-lg mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleOpenResume}
            >
              <img
                src="/resume-thumbnail.png" // Optional: a thumbnail image of your resume
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
