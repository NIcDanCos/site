/**
 * Type definitions for Projects Terminal component
 * Defines the structure for displaying projects in terminal JSON format
 */

export type ProjectStatus = 'live' | 'in-progress' | 'archived';

export interface ProjectLinks {
  github?: string;
  demo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  status: ProjectStatus;
  links: ProjectLinks;
  featured?: boolean; // Highlight featured projects
}

export interface ProjectsData {
  repository: string;
  version: string;
  totalProjects: number;
  featured: Record<string, Omit<Project, 'id'>>; // Projects indexed by slug/key
  actions: {
    launch: string;
    viewCode: string;
    goBack: string;
  };
}
