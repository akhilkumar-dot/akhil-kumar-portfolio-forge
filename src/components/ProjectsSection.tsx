
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Tool {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  tools: Tool[];
  githubUrl: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Sentiment Analysis",
    description:
      "NLP-based sentiment analysis model that classifies text reviews into positive, negative, or neutral categories with high accuracy using deep learning techniques.",
    tools: [
      { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "NLTK", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "Keras", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/sentiment-analyzer",
    imageUrl: "/lovable-uploads/1e01c065-eb3a-442e-a985-76f9a094ba24.png",
  },
  {
    title: "Traffic Sign Recognition System",
    description:
      "A real-time system that uses a convolutional neural network to detect and classify traffic signs from live webcam input, trained on the GTSRB dataset.",
    tools: [
      { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "OpenCV", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "FastAPI", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/Traffic-Sign-Recognition",
    imageUrl: "/lovable-uploads/Traffic-sign-recognition-system.jpg",
  },
  {
    title: "Brain Tumor Prediction",
    description:
      "CNN-based model for analyzing MRI images to detect and classify brain tumors, achieving high sensitivity and specificity through advanced image processing techniques.",
    tools: [
      { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "TensorFlow", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      { name: "OpenCV", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Keras", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/Brain-Tumor",
    imageUrl: "/lovable-uploads/brain-tumor-detection.jpg",
  },
  {
    title: "PDF Question-Answering Chatbot",
    description:
      "Intelligent chatbot that answers user queries from uploaded PDFs using Retrieval-Augmented Generation (RAG).",
    tools: [
      { name: "LangChain", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      { name: "Cohere", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      { name: "HuggingFace", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      { name: "FAISS", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
      { name: "Streamlit", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/Rag-Pipeline",
    imageUrl: "/lovable-uploads/67e11ca0-3473-42f3-974c-c146ca7b7237.png",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Real-time face recognition system for automated attendance tracking using computer vision and deep learning, with database integration for record management.",
    tools: [
      { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "OpenCV", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Face Recognition", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
      { name: "SQLite", color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/face-attendance",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
  },
  {
    title: "Chatbot with NLP",
    description:
      "Intelligent conversational AI chatbot built with natural language processing capabilities, featuring intent recognition and context-aware responses.",
    tools: [
      { name: "Python", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      { name: "NLTK", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      { name: "Flask", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
      { name: "Scikit-learn", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
    ],
    githubUrl: "https://github.com/akhilkumar-dot/nlp-chatbot",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
  },
];


const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-semibold mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4 text-balance flex-grow">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <Badge key={index} className={`${tool.color} font-medium`}>
              {tool.name}
            </Badge>
          ))}
        </div>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" /> View on GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 scroll-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          My <span className="gradient-bg text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore a selection of my machine learning projects, showcasing my skills in
          different domains and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="default" asChild>
            <a href="https://github.com/akhilkumar-dot" target="_blank" rel="noopener noreferrer">
              See More Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
