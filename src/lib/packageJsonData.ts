/**
 * Skills and experience data for Package.json CV component
 * Update this file to modify the skills displayed in the hero section
 */

import { PackageJsonData } from '@/types/packageJson';

export const packageData: PackageJsonData = {
  name: "nicdancos/portfolio",
  version: "2025.1.0",
  description: "AI Engineer",

  dependencies: [
    {
      name: "react",
      version: "^5.years",
      category: "frontend",
      yearsOfExperience: 5,
      highlight: true
    },
    {
      name: "typescript",
      version: "^expert",
      category: "core",
      highlight: true
    },
    {
      name: "node.js",
      version: "^4.years",
      category: "backend",
      yearsOfExperience: 4
    },
    {
      name: "next.js",
      version: "^3.years",
      category: "frontend",
      yearsOfExperience: 3
    },
    {
      name: "api-design",
      version: "^advanced",
      category: "backend",
      highlight: true
    },
    {
      name: "tailwind-css",
      version: "^3.years",
      category: "frontend",
      yearsOfExperience: 3
    },
    {
      name: "postgresql",
      version: "^3.years",
      category: "backend",
      yearsOfExperience: 3
    },
    {
      name: "git",
      version: "^expert",
      category: "tools"
    }
  ],

  devDependencies: [
    {
      name: "problem-solving",
      version: "∞",
      category: "core",
      highlight: true
    },
    {
      name: "continuous-learning",
      version: "^always",
      category: "core"
    },
    {
      name: "team-collaboration",
      version: "^excellent",
      category: "tools"
    },
    {
      name: "attention-to-detail",
      version: "^meticulous",
      category: "core"
    }
  ],

  scripts: [
    {
      name: "view-work",
      command: "navigate('/projects')"
    },
    {
      name: "say-hello",
      command: "openContactModal()"
    }
  ]
};
