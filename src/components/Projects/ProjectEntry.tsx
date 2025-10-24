/**
 * ProjectEntry Component
 * Renders a single project in JSON format with syntax highlighting
 * Follows the same pattern as Dependency component for consistency
 */

import { Project } from '@/types/project';
import { PROJECTS_TOKENS } from '@/types/layout/projects';

interface ProjectEntryProps {
  projectKey: string; // The object key (e.g., "ai-dashboard")
  project: Omit<Project, 'id'>;
  isLast: boolean; // For comma handling
  animationDelay?: number; // For staggered animations
  onLaunchDemo?: (demoUrl: string) => void; // Optional click handler
}

export const ProjectEntry = ({
  projectKey,
  project,
  isLast,
  animationDelay = 0,
  onLaunchDemo
}: ProjectEntryProps) => {
  const { syntaxColors, projectEntry } = PROJECTS_TOKENS;

  const handleProjectClick = () => {
    if (onLaunchDemo && project.links.demo) {
      onLaunchDemo(project.links.demo);
    }
  };

  return (
    <div
      className={`motion-safe:animate-fade-in motion-reduce:opacity-100 ${projectEntry.spacing.classes}`}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      {/* Project key (e.g., "ai-dashboard": {) */}
      <div className={projectEntry.indentation.level1}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;{projectKey}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'{'}</span>
      </div>

      {/* Title */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;title&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span
          style={{ color: syntaxColors.stringValue }}
          className="font-semibold cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleProjectClick}
        >
          &quot;{project.title}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Description */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;description&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{project.description}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Tech Stack */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;techStack&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>[</span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          {project.techStack.map((tech, i) => (
            <span key={tech}>
              &quot;{tech}&quot;
              {i < project.techStack.length - 1 && <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>, </span>}
            </span>
          ))}
        </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>]</span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Status */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;status&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{
          color: project.status === 'live'
            ? PROJECTS_TOKENS.projectColors.status.live
            : project.status === 'in-progress'
            ? PROJECTS_TOKENS.projectColors.status.inProgress
            : PROJECTS_TOKENS.projectColors.status.archived,
          opacity: 0.7
        }}>
          &quot;{project.status}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Links */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;links&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'{'}</span>
      </div>

      {/* GitHub link (if available) */}
      {project.links.github && (
        <div className={projectEntry.indentation.level3}>
          <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
            &quot;github&quot;
          </span>
          <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: syntaxColors.stringValue }}
            className="font-medium hover:opacity-80 transition-opacity underline decoration-2"
            onClick={(e) => e.stopPropagation()}
          >
            &quot;{project.links.github}&quot;
          </a>
          <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
        </div>
      )}

      {/* Demo link */}
      <div className={projectEntry.indentation.level3}>
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;demo&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span
          style={{ color: syntaxColors.stringValue }}
          className="font-medium cursor-pointer hover:opacity-80 transition-opacity underline decoration-2"
          onClick={handleProjectClick}
        >
          &quot;{project.links.demo}&quot;
        </span>
      </div>

      {/* Close links object */}
      <div className={projectEntry.indentation.level2}>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'}'}</span>
      </div>

      {/* Close project object */}
      <div className={projectEntry.indentation.level1}>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'}'}</span>
        {!isLast && <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>}
      </div>
    </div>
  );
};
