/**
 * Projects data for Projects Terminal component
 * Update this file to modify the projects displayed on the projects page
 */

import { ProjectsData } from '@/types/project';

export const projectsData: ProjectsData = {
  repository: "nicdancos/projects",
  version: "2025.1.0",
  totalProjects: 6,

  featured: {
    "ai-dashboard": {
      title: "AI Dashboard",
      description: "A modern analytics dashboard with real-time data visualization and AI-powered insights",
      techStack: ["React", "TypeScript", "Tailwind", "Recharts"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        github: "https://github.com",
        demo: "https://example.com/demo1"
      },
      featured: true
    },
    "task-manager-pro": {
      title: "Task Manager Pro",
      description: "Collaborative task management platform with team features and time tracking",
      techStack: ["React", "Supabase", "TanStack Query"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        github: "https://github.com",
        demo: "https://example.com/demo2"
      },
      featured: true
    },
    "ecommerce-platform": {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment processing and inventory management",
      techStack: ["React", "Stripe", "PostgreSQL"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        demo: "https://example.com/demo3"
      },
      featured: true
    },
    "portfolio-builder": {
      title: "Portfolio Builder",
      description: "No-code portfolio builder with customizable themes and drag-and-drop interface",
      techStack: ["React", "TypeScript", "Tailwind"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        github: "https://github.com",
        demo: "https://example.com/demo4"
      },
      featured: true
    },
    "social-media-analytics": {
      title: "Social Media Analytics",
      description: "Track and analyze social media performance across multiple platforms",
      techStack: ["Next.js", "GraphQL", "D3.js"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        github: "https://github.com",
        demo: "https://example.com/demo5"
      },
      featured: false
    },
    "weather-app": {
      title: "Weather Forecast App",
      description: "Beautiful weather app with 7-day forecasts and location-based alerts",
      techStack: ["React", "OpenWeather API", "Mapbox"],
      thumbnail: "/placeholder.svg",
      status: "live",
      links: {
        demo: "https://example.com/demo6"
      },
      featured: false
    }
  },

  actions: {
    launch: "openDemo(projectId)",
    viewCode: "openGithub(projectId)",
    goBack: "navigate('/')"
  }
};

/**
 * Helper function to convert projectsData to array format
 * Useful for components that need to iterate over projects
 */
export const getProjectsArray = () => {
  return Object.entries(projectsData.featured).map(([id, project]) => ({
    id,
    ...project
  }));
};

/**
 * Helper function to get a single project by ID
 */
export const getProjectById = (id: string) => {
  return projectsData.featured[id] || null;
};

/**
 * Helper function to get featured projects only
 */
export const getFeaturedProjects = () => {
  return Object.entries(projectsData.featured)
    .filter(([_, project]) => project.featured)
    .map(([id, project]) => ({
      id,
      ...project
    }));
};
