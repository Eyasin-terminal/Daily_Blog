export interface Post {
  id: string;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  categories: string[];
  author: string;
  summary: string;
  content: string;
  filePath: string;
}

export interface JekyllFile {
  path: string;
  name: string;
  language: 'yaml' | 'css' | 'html' | 'markdown';
  category: 'config' | 'layout' | 'style' | 'post' | 'root';
  content: string;
  description: string;
}

export type ViewMode = 'live' | 'repo' | 'editor' | 'deploy';
