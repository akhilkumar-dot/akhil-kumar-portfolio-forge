
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/50 scroll-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">
          Get In <span className="gradient-bg text-transparent bg-clip-text">Touch</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="w-full lg:w-3/5">
            <div className="bg-card rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 font-heading">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto px-8">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-2/5">
            <div className="bg-card rounded-xl shadow-md p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 font-heading">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Email</p>
                    <a href="mailto:makhil.vnk@gmail.com" className="text-foreground hover:text-accent">
                      makhil.vnk@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-foreground/70 mb-4">Connect with me on social media</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/akhilkumar-dot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-foreground/70 mb-4">Currently available for:</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                      <span>Internship opportunities</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                      <span>Collaborative projects</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                      <span>Research assistance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
