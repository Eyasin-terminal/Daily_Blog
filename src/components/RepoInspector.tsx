import React, { useState } from 'react';
import JSZip from 'jszip';
import { Check, Copy, Download, FileCode, Folder, Terminal } from 'lucide-react';
import { Post } from '../types';
import {
  CONFIG_YML_CONTENT,
  STYLE_CSS_CONTENT,
  DEFAULT_LAYOUT_CONTENT,
  POST_LAYOUT_CONTENT,
  INDEX_HTML_CONTENT,
} from '../data/initialPosts';

interface RepoInspectorProps {
  posts: Post[];
}

export const RepoInspector: React.FC<RepoInspectorProps> = ({ posts }) => {
  const [copiedFile, setCopiedFile] = useState<string | null>(null);
  const [downloadingZip, setDownloadingZip] = useState(false);

  // Generate file dictionary
  const repoFiles = [
    {
      path: '_config.yml',
      name: '_config.yml',
      desc: 'Primary Jekyll configuration establishing site title, metadata, plugins, and GitHub Pages build settings.',
      content: CONFIG_YML_CONTENT,
    },
    {
      path: 'assets/css/style.css',
      name: 'style.css',
      desc: 'Core stylesheet enforcing executive trust: clamped 680px max-width, IBM Plex Sans, Source Serif 4, off-white #FAFAFA, charcoal ink #161617.',
      content: STYLE_CSS_CONTENT,
    },
    {
      path: '_layouts/default.html',
      name: 'default.html',
      desc: 'Master layout wrapper containing HTML head, Google Fonts links, sticky header with LinkedIn, 680px main track, and footer.',
      content: DEFAULT_LAYOUT_CONTENT,
    },
    {
      path: '_layouts/post.html',
      name: 'post.html',
      desc: 'Deep Read post wrapper for markdown content, title, date, category tag, blockquotes, tables, and return link to ledger.',
      content: POST_LAYOUT_CONTENT,
    },
    {
      path: 'index.html',
      name: 'index.html',
      desc: 'Digital Ledger homepage layout looping through site.posts into single rows (Date, Title, Category Tag).',
      content: INDEX_HTML_CONTENT,
    },
    ...posts.map((post) => ({
      path: post.filePath,
      name: `${post.slug}.md`,
      desc: `Markdown monograph post: ${post.title}`,
      content: `---
layout: post
title: "${post.title}"
date: ${post.date}
categories: ${post.categories.join(', ')}
author: "${post.author}"
summary: "${post.summary}"
---

${post.content}`,
    })),
  ];

  const [activeFilePath, setActiveFilePath] = useState<string>('_config.yml');

  const activeFile = repoFiles.find((f) => f.path === activeFilePath) || repoFiles[0];

  const handleCopyCode = (content: string, path: string) => {
    navigator.clipboard.writeText(content);
    setCopiedFile(path);
    setTimeout(() => setCopiedFile(null), 2000);
  };

  const handleDownloadZip = async () => {
    setDownloadingZip(true);
    try {
      const zip = new JSZip();

      repoFiles.forEach((file) => {
        zip.file(file.path, file.content);
      });

      // Add a README.md for GitHub Pages instructions
      zip.file(
        'README.md',
        `# The Eyasin Arafath Brief (GitHub Pages + Jekyll Repository)

This repository contains the complete Jekyll static site structure for **The Eyasin Arafath Brief** - A daily synthesis of emerging concepts across economics, business strategy, and technology markets.

## Quick Start on GitHub Pages

1. Create a new GitHub repository (e.g., \`eyasin-brief\` or \`username.github.io\`).
2. Extract or push all contents into your repository folder.
3. Commit and push to GitHub:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial Eyasin Arafath Brief deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   \`\`\`
4. On GitHub, navigate to **Settings** -> **Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
5. GitHub Actions / Jekyll will automatically build your site at \`https://YOUR_USERNAME.github.io\`.
`
      );

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jekyll-monograph-repository.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate zip:', err);
    } finally {
      setDownloadingZip(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 font-sans">
      {/* Top Banner & Exporter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F2F2F7] border border-[#E5E5E7] p-5 mb-6">
        <div>
          <h2 className="font-semibold text-base text-[#161617] flex items-center gap-2">
            <Folder className="w-4 h-4 text-[#161617]" />
            GitHub Pages Jekyll Repository Architecture
          </h2>
          <p className="text-xs text-[#6E6E73] mt-1">
            Exact essential code files required to host your completely free personal monograph website on GitHub Pages.
          </p>
        </div>

        <button
          onClick={handleDownloadZip}
          disabled={downloadingZip}
          className="inline-flex items-center justify-center gap-2 bg-[#161617] text-[#FAFAFA] text-xs font-semibold px-4 py-2.5 transition-colors hover:bg-black disabled:opacity-50 shrink-0 cursor-pointer"
        >
          <Download className="w-4 h-4" />
          {downloadingZip ? 'Packaging Repository...' : 'Download Full Repo (.zip)'}
        </button>
      </div>

      {/* Grid Layout: File Explorer Sidebar + Code Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* File Explorer Navigation */}
        <div className="md:col-span-4 bg-[#FAFAFA] border border-[#E5E5E7] p-3">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] px-2 py-1 mb-2 border-b border-[#E5E5E7]">
            Required Jekyll Files
          </div>

          <div className="space-y-1">
            {repoFiles.map((file) => {
              const isActive = activeFilePath === file.path;
              return (
                <button
                  key={file.path}
                  onClick={() => setActiveFilePath(file.path)}
                  className={`w-full text-left px-3 py-2 text-xs font-mono transition-colors flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-[#161617] text-[#FAFAFA] font-medium'
                      : 'text-[#161617] hover:bg-[#F2F2F7]'
                  }`}
                >
                  <span className="truncate flex items-center gap-2">
                    <FileCode className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#FAFAFA]' : 'text-[#6E6E73]'}`} />
                    {file.path}
                  </span>
                  <span className={`text-[10px] uppercase font-sans ${isActive ? 'text-gray-300' : 'text-[#6E6E73]'}`}>
                    {file.path.endsWith('.yml') ? 'YAML' : file.path.endsWith('.css') ? 'CSS' : file.path.endsWith('.html') ? 'HTML' : 'MD'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Code Content & File Details */}
        <div className="md:col-span-8 bg-[#FAFAFA] border border-[#E5E5E7] p-4 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#E5E5E7] mb-3 gap-2">
            <div>
              <span className="font-mono text-sm font-semibold text-[#161617]">
                {activeFile.path}
              </span>
              <p className="text-xs text-[#6E6E73] mt-0.5">{activeFile.desc}</p>
            </div>

            <button
              onClick={() => handleCopyCode(activeFile.content, activeFile.path)}
              className="inline-flex items-center gap-1.5 bg-[#F2F2F7] border border-[#E5E5E7] text-[#161617] hover:bg-[#E5E5E7] text-xs font-semibold px-3 py-1.5 transition-colors self-start sm:self-auto cursor-pointer"
            >
              {copiedFile === activeFile.path ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#6E6E73]" />
                  <span>Copy File Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code Viewer */}
          <div className="relative bg-[#161617] text-[#FAFAFA] p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[520px]">
            <pre>
              <code>{activeFile.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
