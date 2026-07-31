import React, { useState } from 'react';
import { Post } from '../types';

interface MonographSiteProps {
  posts: Post[];
  selectedPostId: string | null;
  onSelectPost: (id: string | null) => void;
}

export const MonographSite: React.FC<MonographSiteProps> = ({
  posts,
  selectedPostId,
  onSelectPost,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentPost = posts.find((p) => p.id === selectedPostId);

  // Extract unique categories
  const allCategories = ['All', ...Array.from(new Set(posts.flatMap((p) => p.categories)))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.categories.includes(activeCategory);
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categories.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Helper to format Markdown content into clean HTML elements safely
  const renderMarkdownContent = (content: string) => {
    if (!content) return null;
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let key = 0;
    let inCodeBlock = false;
    let codeBuffer: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(2); // Skip separator row
        elements.push(
          <div key={`table-${key++}`} className="my-6 overflow-x-auto">
            <table className="w-full border-collapse font-sans text-sm text-[#161617]">
              <thead>
                <tr className="bg-[#F2F2F7] border-b border-[#E5E5E7]">
                  {headerRow.map((cell, i) => (
                    <th key={i} className="py-2.5 px-3 font-semibold text-left">
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="border-b border-[#E5E5E7]">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-2.5 px-3">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeBuffer.length > 0) {
        elements.push(
          <pre
            key={`code-${key++}`}
            className="my-6 p-4 bg-[#F2F2F7] border border-[#E5E5E7] overflow-x-auto text-xs sm:text-sm font-mono text-[#161617] rounded-none leading-relaxed"
          >
            <code>{codeBuffer.join('\n')}</code>
          </pre>
        );
        codeBuffer = [];
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          inCodeBlock = false;
          flushCodeBlock();
        } else {
          if (inTable) {
            inTable = false;
            flushTable();
          }
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        continue;
      }

      // Tables
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        inTable = true;
        const cells = line.split('|').slice(1, -1);
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        inTable = false;
        flushTable();
      }

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h2
            key={`h2-${key++}`}
            className="font-sans font-semibold text-xl text-[#161617] mt-9 mb-3 tracking-tight"
          >
            {line.replace('## ', '')}
          </h2>
        );
        continue;
      }

      if (line.startsWith('### ')) {
        elements.push(
          <h3
            key={`h3-${key++}`}
            className="font-sans font-semibold text-lg text-[#161617] mt-6 mb-2"
          >
            {line.replace('### ', '')}
          </h3>
        );
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        const quoteText = line.replace('> ', '').replace(/^"(.*)"$/, '$1');
        elements.push(
          <blockquote
            key={`quote-${key++}`}
            className="my-6 pl-4 border-l-2 border-[#161617] text-[#161617] italic font-serif text-[1.0625rem] leading-relaxed"
          >
            "{quoteText}"
          </blockquote>
        );
        continue;
      }

      // Unordered lists
      if (line.startsWith('* ') || line.startsWith('- ')) {
        const itemText = line.replace(/^[\*\-]\s+/, '');
        elements.push(
          <li key={`li-${key++}`} className="ml-6 list-disc mb-1.5 font-serif text-[1.0625rem] text-[#161617]">
            {parseInlineStyles(itemText)}
          </li>
        );
        continue;
      }

      // Ordered lists
      if (/^\d+\.\s+/.test(line)) {
        const itemText = line.replace(/^\d+\.\s+/, '');
        elements.push(
          <li key={`oli-${key++}`} className="ml-6 list-decimal mb-1.5 font-serif text-[1.0625rem] text-[#161617]">
            {parseInlineStyles(itemText)}
          </li>
        );
        continue;
      }

      // Empty line
      if (line.trim() === '') {
        continue;
      }

      // Paragraphs
      elements.push(
        <p key={`p-${key++}`} className="mb-6 font-serif text-[1.0625rem] leading-[1.72] text-[#161617]">
          {parseInlineStyles(line)}
        </p>
      );
    }

    if (inCodeBlock) flushCodeBlock();
    if (inTable) flushTable();

    return elements;
  };

  // Inline formatting helper for bold, code, etc.
  const parseInlineStyles = (text: string) => {
    // Simple inline parser for **bold** and `code`
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-semibold text-[#161617]">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={index} className="font-mono text-xs bg-[#F2F2F7] px-1.5 py-0.5 border border-[#E5E5E7] text-[#161617]">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#161617] selection:bg-[#E5E5E7] selection:text-[#161617]">
      {/* 680px Clamped Container */}
      <div className="w-full max-w-[680px] mx-auto px-6 flex flex-col min-h-screen">
        
        {/* Site Header */}
        <header className="pt-8 pb-6 border-b border-[#E5E5E7] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelectPost(null);
              }}
              className="font-sans font-semibold text-sm tracking-tight text-[#161617] uppercase hover:text-black transition-colors"
            >
              Institutional Research Monograph
            </a>
            <nav className="flex items-center gap-4">
              <button
                onClick={() => onSelectPost(null)}
                className={`font-sans text-[13px] font-medium transition-colors ${
                  selectedPostId === null ? 'text-[#161617] font-semibold' : 'text-[#6E6E73] hover:text-[#161617]'
                }`}
              >
                Monograph Ledger
              </button>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[13px] font-medium text-[#6E6E73] hover:text-[#161617] transition-colors"
              >
                LinkedIn ↗
              </a>
              <span className="font-sans text-[13px] text-[#6E6E73]">
                RSS
              </span>
            </nav>
          </div>
        </header>

        {/* Main Section */}
        <main className="flex-grow pb-12">
          {currentPost ? (
            /* ================= POST DEEP READ LAYOUT ================= */
            <article>
              <header className="mb-8 pb-6 border-b border-[#E5E5E7]">
                <div className="font-sans text-[13px] text-[#6E6E73] mb-3 flex items-center gap-2 flex-wrap">
                  <time>{currentPost.date}</time>
                  <span>•</span>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] bg-[#F2F2F7] px-2 py-0.5 rounded-[2px]">
                    {currentPost.categories[0] || 'Research'}
                  </span>
                  {currentPost.author && (
                    <>
                      <span>•</span>
                      <span>{currentPost.author}</span>
                    </>
                  )}
                </div>

                <h1 className="font-sans font-bold text-2xl sm:text-3xl leading-tight text-[#161617] tracking-tight mb-3">
                  {currentPost.title}
                </h1>

                {currentPost.summary && (
                  <p className="font-serif text-[1.0625rem] text-[#6E6E73] italic leading-snug">
                    {currentPost.summary}
                  </p>
                )}
              </header>

              {/* Deep Read Body */}
              <div className="prose-custom">
                {renderMarkdownContent(currentPost.content)}
              </div>

              {/* Return to Ledger Link */}
              <footer className="mt-12 pt-6 border-t border-[#E5E5E7]">
                <button
                  onClick={() => onSelectPost(null)}
                  className="font-sans text-sm font-medium text-[#6E6E73] hover:text-[#161617] transition-colors inline-flex items-center gap-1"
                >
                  ← Return to Monograph Ledger
                </button>
              </footer>
            </article>
          ) : (
            /* ================= HOMEPAGE DIGITAL LEDGER LAYOUT ================= */
            <div>
              {/* Intro Thesis */}
              <section className="mb-8">
                <h1 className="font-sans font-semibold text-lg text-[#161617] mb-2 tracking-tight">
                  Market Research &amp; Intelligence Monograph
                </h1>
                <p className="font-serif text-[1.0625rem] leading-[1.68] text-[#161617] mb-3">
                  Independent analytical writing on macroeconomics, capital-intensive technology infrastructure, semiconductor supply chains, and market intelligence models. Formatted for executive review and institutional decision-makers.
                </p>
                <div className="font-sans text-xs text-[#6E6E73] flex items-center gap-3">
                  <span>Focus: Tech Infrastructure &amp; Capital Economics</span>
                  <span>•</span>
                  <span>Updated Weekly</span>
                </div>
              </section>

              {/* Search & Category Filter */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E5E7]">
                <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-sans text-xs font-semibold uppercase tracking-wider px-2.5 py-1 transition-colors whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-[#161617] text-[#FAFAFA]'
                          : 'bg-[#F2F2F7] text-[#6E6E73] hover:text-[#161617]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search ledger..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="font-sans text-xs bg-transparent border border-[#E5E5E7] px-2.5 py-1 text-[#161617] placeholder:text-[#6E6E73] focus:outline-none focus:border-[#161617] w-full sm:w-40"
                  />
                </div>
              </div>

              {/* Digital Ledger Table/List */}
              <div className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#6E6E73] mb-3 border-b border-[#E5E5E7] pb-1">
                Digital Ledger &amp; Monograph Index ({filteredPosts.length})
              </div>

              {filteredPosts.length === 0 ? (
                <div className="py-8 text-center font-serif text-[#6E6E73] italic">
                  No analytical monographs found matching your criteria.
                </div>
              ) : (
                <ul className="divide-y divide-[#E5E5E7]">
                  {filteredPosts.map((post) => (
                    <li key={post.id} className="group">
                      <button
                        onClick={() => onSelectPost(post.id)}
                        className="w-full text-left py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 hover:bg-transparent cursor-pointer"
                      >
                        <time className="font-sans text-[13px] text-[#6E6E73] tabular-nums shrink-0 w-[95px]">
                          {post.date}
                        </time>
                        <span className="font-serif font-semibold text-[16px] text-[#161617] flex-grow leading-snug group-hover:underline decoration-[#161617] underline-offset-4">
                          {post.title}
                        </span>
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#6E6E73] bg-[#F2F2F7] px-2 py-0.5 rounded-[2px] shrink-0 self-start sm:self-auto">
                          {post.categories[0] || 'General'}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </main>

        {/* Institutional Footer */}
        <footer className="pt-6 pb-8 border-t border-[#E5E5E7] mt-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-sans text-xs text-[#6E6E73]">
            <div>
              &copy; {new Date().getFullYear()} Institutional Research Monograph
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#161617] transition-colors"
              >
                LinkedIn Profile
              </a>
              <span>•</span>
              <span className="hover:text-[#161617] transition-colors cursor-pointer">
                GitHub Pages / Jekyll Architecture
              </span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};
