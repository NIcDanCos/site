import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { EmailGateModal } from "@/components/EmailGateModal";
import { useProjectAccess } from "@/hooks/useProjectAccess";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  githubUrl?: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "AI Dashboard",
    description: "A modern analytics dashboard with real-time data visualization and AI-powered insights",
    techStack: ["React", "TypeScript", "Tailwind", "Recharts"],
    thumbnail: "/placeholder.svg",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo1",
  },
  {
    id: "project-2",
    title: "Task Manager Pro",
    description: "Collaborative task management platform with team features and time tracking",
    techStack: ["React", "Supabase", "TanStack Query"],
    thumbnail: "/placeholder.svg",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo2",
  },
  {
    id: "project-3",
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment processing and inventory management",
    techStack: ["React", "Stripe", "PostgreSQL"],
    thumbnail: "/placeholder.svg",
    demoUrl: "https://example.com/demo3",
  },
  {
    id: "project-4",
    title: "Portfolio Builder",
    description: "No-code portfolio builder with customizable themes and drag-and-drop interface",
    techStack: ["React", "TypeScript", "Tailwind"],
    thumbnail: "/placeholder.svg",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com/demo4",
  },
];

const Projects = () => {
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isAuthenticated, grantProjectAccess } = useProjectAccess();

  const handleLaunchDemo = async (project: Project) => {
    if (!isAuthenticated) {
      setSelectedProject(project);
      setShowEmailGate(true);
      return;
    }

    // Grant access and open demo
    const hasAccess = await grantProjectAccess(project.id);
    if (hasAccess && project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  };

  const handleEmailGateSuccess = async () => {
    if (selectedProject) {
      const hasAccess = await grantProjectAccess(selectedProject.id);
      if (hasAccess && selectedProject.demoUrl) {
        window.open(selectedProject.demoUrl, '_blank');
      }
    }
    setShowEmailGate(false);
  };

  return (
    <div className="min-h-screen bg-background font-mono flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 sm:pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Projects</span>
              <span className="text-primary animate-cursor-blink">_</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore my work and launch live demos
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onLaunchDemo={handleLaunchDemo}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Email Gate Modal */}
      <EmailGateModal 
        open={showEmailGate} 
        onOpenChange={(open) => {
          setShowEmailGate(open);
          if (!open) setSelectedProject(null);
        }}
      />
    </div>
  );
};

export default Projects;
