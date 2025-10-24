/**
 * Projects Page
 * Displays projects in terminal JSON format
 * Uses ProjectsTerminal component for cohesive design
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectsTerminal } from "@/components/Projects/ProjectsTerminal";
import { EmailGateModal } from "@/components/EmailGateModal";
import { useProjectAccess } from "@/hooks/useProjectAccess";
import { useViewportLayout } from "@/hooks/use-viewport-layout";
import { PROJECTS_TOKENS } from "@/types/layout/projects";

const Projects = () => {
  const navigate = useNavigate();
  const layout = useViewportLayout();
  const [showEmailGate, setShowEmailGate] = useState(false);
  const { isAuthenticated, grantProjectAccess } = useProjectAccess();

  // Handle demo launch with email gate
  const handleLaunchDemo = async (demoUrl: string) => {
    if (!isAuthenticated) {
      setShowEmailGate(true);
      return;
    }

    // Grant access and open demo
    // Note: We're using a generic project ID here since we don't have individual project IDs in the terminal format
    // You may want to enhance this to track which project was clicked
    const hasAccess = await grantProjectAccess('demo-access');
    if (hasAccess && demoUrl) {
      window.open(demoUrl, '_blank');
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div
      className={`min-h-screen bg-background font-mono flex flex-col ${PROJECTS_TOKENS.projects.contentPadding.classes}`}
      style={{
        paddingTop: PROJECTS_TOKENS.projects.pageSpacing.mobile,
        paddingBottom: PROJECTS_TOKENS.projects.pageSpacing.mobile,
      }}
    >
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <ProjectsTerminal
            name="NicDanCos"
            location="Dubai"
            onHomeClick={handleHomeClick}
            onBackHome={handleBackHome}
            onLaunchDemo={handleLaunchDemo}
            githubUrl="https://github.com"
            layoutMode={layout}
          />
        </div>
      </main>

      {/* Email Gate Modal */}
      <EmailGateModal
        open={showEmailGate}
        onOpenChange={setShowEmailGate}
      />
    </div>
  );
};

export default Projects;
