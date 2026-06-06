/**
 * Type definitions for the Portfolio project
 */

// Social icon configuration
export interface SocialIcon {
  id: number;
  image: string;
  url: string;
  label: string;
}

// Main application configuration
export interface AppConfig {
  backgroundType: string;
  plainBackgroundMode: string;
  gradientColors: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  devDesc: string;
  icons: SocialIcon[];
  aboutHeading: string;
  aboutDescription: string;
  projectHeading: string;
  gitHubLink: string;
  gitHubUsername: string;
  gitHubQuerry: string;
  projectsLength: number;
  showNavigationbar: boolean;
  showBlog: boolean;
}

// GitHub API types
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}
