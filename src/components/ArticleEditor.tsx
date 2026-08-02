import React, { useState } from 'react';
import { Post } from '../types';
import { Plus, Check, FileText } from 'lucide-react';

interface ArticleEditorProps {
  onAddPost: (newPost: Post) => void;
  onPostAdded: () => void;
}

export const ArticleEditor: React.FC<ArticleEditorProps> = ({ onAddPost, onPostAdded }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState('Infrastructure');
  const [author, setAuthor] = useState('Market Research & Business Intelligence Analyst');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const slug = `${date}-${title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;

    const newPost: Post = {
      id: Date.now().toString(),
      slug,
      title: title.trim(),
      date,
      categories: [category.trim() || 'Research'],
      author: author.trim(),
      summary: summary.trim(),
      content: content.trim(),
      filePath: `_posts/${slug}.md`,
    };

    onAddPost(newPost);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onPostAdded();
    }, 1500);
  };

  const loadSamplePost = () => {
    setTitle('Capital Allocation Trends in Custom Silicon Acceleration');
    setDate('2026-08-15');
    setCategory('Semiconductors');
    setSummary('An examination of hyperscale enterprise ASIC investments vs. commercial accelerator purchasing.');
    setContent(`Hyperscale technology providers are accelerating internal ASIC design pipelines to reduce dependency on commercial GPU vendor margins.

> "Custom accelerators offer targeted energy efficiency for specific inference matrix multiplications, reducing total cost of ownership (TCO) at scale."

## 1. Capex Amortization & Silicon Economics

By tailoring custom silicon to internal model architectures, cloud providers can optimize die size and memory bandwidth interfaces specifically for targeted workloads.

| Accelerator Type | Development Cost | Unit Production Cost | Energy Efficiency |
| :--- | :--- | :--- | :--- |
| Commercial GPU | $0 (Off-the-shelf) | $30,000 - $40,000 | Standard |
| Custom ASIC | $150M - $300M NRE | $4,000 - $8,000 | 1.8x - 2.5x |

## 2. Strategic Portfolio Management

While training massive frontier models still demands high-flexibility commercial GPUs, inference workloads serving millions of daily API requests are rapidly shifting toward custom silicon clusters.`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 font-sans">
      <div className="bg-[#FAFAFA] border border-[#E5E5E7] p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E5E7] mb-6">
          <div>
            <h2 className="font-semibold text-base text-[#161617] flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Jekyll Monograph Post Writer &amp; Front Matter Generator
            </h2>
            <p className="text-xs text-[#6E6E73] mt-0.5">
              Draft analytical research posts. Automatically formats YAML front matter and adds the post to your Digital Ledger.
            </p>
          </div>

          <button
            type="button"
            onClick={loadSamplePost}
            className="text-xs font-semibold text-[#6E6E73] hover:text-[#161617] bg-[#F2F2F7] px-3 py-1.5 border border-[#E5E5E7] transition-colors self-start sm:self-auto cursor-pointer"
          >
            Load Sample Analytical Article
          </button>
        </div>

        {successMsg && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-900 text-xs px-4 py-3 flex items-center gap-2 font-medium">
            <Check className="w-4 h-4 text-green-700" />
            Article successfully added! Transitioning to live Monograph Ledger...
          </div>
        )}

        <form onSubmit={handlePublish} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Title */}
            <div className="sm:col-span-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                Post Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g., The Asymmetric Shift: Capital Intensity in AI Infrastructure"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full font-serif text-sm bg-white border border-[#E5E5E7] px-3 py-2 text-[#161617] focus:outline-none focus:border-[#161617]"
              />
            </div>

            {/* Date */}
            <div className="sm:col-span-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                Publication Date *
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full font-mono text-xs bg-white border border-[#E5E5E7] px-3 py-2 text-[#161617] focus:outline-none focus:border-[#161617]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Category */}
            <div className="sm:col-span-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                Category Tag *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full text-xs font-sans bg-white border border-[#E5E5E7] px-3 py-2 text-[#161617] focus:outline-none focus:border-[#161617]"
              >
                <option value="Infrastructure">Infrastructure</option>
                <option value="Semiconductors">Semiconductors</option>
                <option value="Energy">Energy</option>
                <option value="Economics">Economics</option>
                <option value="Strategy">Strategy</option>
              </select>
            </div>

            {/* Author */}
            <div className="sm:col-span-8">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
                Author Attribution
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full text-xs font-sans bg-white border border-[#E5E5E7] px-3 py-2 text-[#161617] focus:outline-none focus:border-[#161617]"
              />
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
              Executive Summary / Subtitle
            </label>
            <input
              type="text"
              placeholder="e.g., An investigation into hyperscale data center Capex and energy bottlenecks."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full font-serif text-xs bg-white border border-[#E5E5E7] px-3 py-2 text-[#161617] focus:outline-none focus:border-[#161617]"
            />
          </div>

          {/* Markdown Body */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-1">
              Markdown Body Content *
            </label>
            <textarea
              required
              rows={12}
              placeholder="Write your analytical research in standard Markdown. Supports ## Headers, > Blockquotes, | Data Tables |, and ```code``` blocks."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full font-serif text-sm bg-white border border-[#E5E5E7] p-3 text-[#161617] leading-relaxed focus:outline-none focus:border-[#161617]"
            />
          </div>

          {/* Generated Front Matter Preview */}
          <div className="bg-[#161617] text-[#FAFAFA] p-3 font-mono text-xs">
            <span className="text-gray-400 font-sans text-[10px] uppercase block mb-1">
              Generated Jekyll Front Matter Bridge Preview
            </span>
            <pre>
{`---
layout: post
title: "${title || 'Untitled Article'}"
date: ${date}
categories: ${category}
author: "${author}"
summary: "${summary}"
---`}
            </pre>
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#161617] text-[#FAFAFA] text-xs font-semibold px-5 py-2.5 transition-colors hover:bg-black cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Publish Article to Monograph Ledger
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
