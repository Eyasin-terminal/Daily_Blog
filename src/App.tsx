import React, { useState } from 'react';
import { Post, ViewMode } from './types';
import { INITIAL_POSTS } from './data/initialPosts';
import { MonographSite } from './components/MonographSite';
import { RepoInspector } from './components/RepoInspector';
import { ArticleEditor } from './components/ArticleEditor';
import { DeploymentGuide } from './components/DeploymentGuide';
import { Eye, Code2, PenTool, BookOpen, Download } from 'lucide-react';

export default function App() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('live');

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      {/* Top Utility Command Dock (High Signal, Clean Studio Controls) */}
      <header className="bg-[#161617] text-[#FAFAFA] border-b border-[#2D2D2E] px-4 py-2 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Identity & Status */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-xs tracking-tight uppercase text-white">
              Institutional Research Monograph
            </span>
            <span className="text-[10px] text-gray-400 bg-[#2D2D2E] px-2 py-0.5 font-mono">
              GitHub Pages &amp; Jekyll Pipeline
            </span>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-1 bg-[#2D2D2E] p-1 rounded-[2px] text-xs">
            <button
              onClick={() => setViewMode('live')}
              className={`flex items-center gap-1.5 px-3 py-1 font-medium transition-colors cursor-pointer ${
                viewMode === 'live'
                  ? 'bg-[#FAFAFA] text-[#161617] font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </button>

            <button
              onClick={() => setViewMode('repo')}
              className={`flex items-center gap-1.5 px-3 py-1 font-medium transition-colors cursor-pointer ${
                viewMode === 'repo'
                  ? 'bg-[#FAFAFA] text-[#161617] font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Jekyll Repo Files</span>
            </button>

            <button
              onClick={() => setViewMode('editor')}
              className={`flex items-center gap-1.5 px-3 py-1 font-medium transition-colors cursor-pointer ${
                viewMode === 'editor'
                  ? 'bg-[#FAFAFA] text-[#161617] font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Write Post</span>
            </button>

            <button
              onClick={() => setViewMode('deploy')}
              className={`flex items-center gap-1.5 px-3 py-1 font-medium transition-colors cursor-pointer ${
                viewMode === 'deploy'
                  ? 'bg-[#FAFAFA] text-[#161617] font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Deployment Guide</span>
            </button>
          </div>
        </div>
      </header>

      {/* Workspace Content */}
      <main className="flex-grow">
        {viewMode === 'live' && (
          <MonographSite
            posts={posts}
            selectedPostId={selectedPostId}
            onSelectPost={setSelectedPostId}
          />
        )}

        {viewMode === 'repo' && <RepoInspector posts={posts} />}

        {viewMode === 'editor' && (
          <ArticleEditor
            onAddPost={handleAddPost}
            onPostAdded={() => {
              setSelectedPostId(posts[0]?.id || null);
              setViewMode('live');
            }}
          />
        )}

        {viewMode === 'deploy' && <DeploymentGuide />}
      </main>
    </div>
  );
}
