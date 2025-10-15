/**
 * Type definitions for Package.json CV component
 * Defines the structure for displaying skills and experience as npm dependencies
 */

export type DependencyCategory = 'core' | 'frontend' | 'backend' | 'tools';

export interface Dependency {
  name: string;
  version: string;
  category: DependencyCategory;
  yearsOfExperience?: number;
  highlight?: boolean; // For special emphasis on key skills
}

export interface ScriptCommand {
  name: string;
  command: string;
  action?: () => void; // Optional click handler for interactive scripts
}

export interface PackageJsonData {
  name: string;
  version: string;
  description: string;
  dependencies: Dependency[];
  devDependencies: Dependency[];
  scripts: ScriptCommand[];
}
