import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/pages/Projects";

interface ProjectCardProps {
  project: Project;
  onLaunchDemo: (project: Project) => void;
}

const ProjectCard = ({ project, onLaunchDemo }: ProjectCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
      <CardHeader>
        {/* Thumbnail */}
        <div className="w-full h-48 mb-4 rounded-md overflow-hidden bg-muted">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {/* GitHub Link */}
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}

        {/* Launch Demo Button */}
        <Button
          variant="default"
          size="sm"
          className="flex-1 group/btn relative overflow-hidden"
          onClick={() => onLaunchDemo(project)}
        >
          <span className="relative z-10 flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            Launch Demo
          </span>
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
