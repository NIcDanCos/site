/**
 * ProjectsTerminalContent Component
 * Renders the projects data in JSON format with syntax highlighting
 * Similar to PackageHeader + DependencyList pattern for consistency
 */

import { ProjectEntry } from './ProjectEntry';
import { projectsData } from '@/lib/projectsData';
import { PROJECTS_TOKENS } from '@/types/layout/projects';

interface ProjectsTerminalContentProps {
  animated?: boolean;
  onLaunchDemo?: (demoUrl: string) => void;
}

export const ProjectsTerminalContent = ({
  animated = true,
  onLaunchDemo
}: ProjectsTerminalContentProps) => {
  const { syntaxColors } = PROJECTS_TOKENS;
  const projectEntries = Object.entries(projectsData.featured);

  return (
    <div className={`font-mono ${PROJECTS_TOKENS.codeText.classes}`}>
      {/* Opening brace */}
      <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'{'}</span>
      {'\n'}

      {/* Repository */}
      <div className="pl-4">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;repository&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{projectsData.repository}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Version */}
      <div className="pl-4">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;version&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{projectsData.version}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Total Projects */}
      <div className="pl-4">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;totalProjects&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.numberValue, opacity: 0.6 }}>
          {projectsData.totalProjects}
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Featured projects section */}
      <div className="pl-4 mt-2">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;featured&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'{'}</span>
      </div>

      {/* Project entries */}
      {projectEntries.map(([key, project], index) => (
        <ProjectEntry
          key={key}
          projectKey={key}
          project={project}
          isLast={index === projectEntries.length - 1}
          animationDelay={animated ? index * 150 : 0}
          onLaunchDemo={onLaunchDemo}
        />
      ))}

      {/* Close featured object */}
      <div className="pl-4">
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'}'}</span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Actions section */}
      <div className="pl-4 mt-2">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;actions&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'{'}</span>
      </div>

      {/* Launch action */}
      <div className="pl-8">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;launch&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{projectsData.actions.launch}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* View Code action */}
      <div className="pl-8">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;viewCode&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{projectsData.actions.viewCode}&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>,</span>
      </div>

      {/* Go Back action */}
      <div className="pl-8">
        <span style={{ color: syntaxColors.key, opacity: 0.4 }}>
          &quot;goBack&quot;
        </span>
        <span style={{ color: syntaxColors.punctuation, opacity: 0.4 }}>: </span>
        <span style={{ color: syntaxColors.stringValue, opacity: 0.6 }}>
          &quot;{projectsData.actions.goBack}&quot;
        </span>
      </div>

      {/* Close actions object */}
      <div className="pl-4">
        <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'}'}</span>
      </div>

      {/* Closing brace */}
      <span style={{ color: syntaxColors.bracket, opacity: 0.4 }}>{'}'}</span>
    </div>
  );
};
