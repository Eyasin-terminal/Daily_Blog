import React from 'react';
import { Terminal, Globe, CheckCircle, ShieldCheck } from 'lucide-react';

export const DeploymentGuide: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 font-sans">
      <div className="bg-[#FAFAFA] border border-[#E5E5E7] p-6 space-y-6">
        <div>
          <h2 className="font-semibold text-lg text-[#161617] flex items-center gap-2">
            <Globe className="w-5 h-5" />
            GitHub Pages &amp; Jekyll Deployment Blueprint
          </h2>
          <p className="text-xs text-[#6E6E73] mt-1">
            Follow this 4-step executive guide to deploy your free, self-hosted personal research website on GitHub Pages.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="bg-[#F2F2F7] border border-[#E5E5E7] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#161617] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">
                1
              </span>
              <h3 className="font-semibold text-sm text-[#161617]">
                Create GitHub Repository
              </h3>
            </div>
            <p className="text-xs text-[#6E6E73] mb-2 leading-relaxed">
              Log in to your GitHub account and create a new public repository named either <code className="bg-[#E5E5E7] px-1 py-0.5 text-[#161617] font-mono">YOUR_USERNAME.github.io</code> (for main domain) or <code className="bg-[#E5E5E7] px-1 py-0.5 text-[#161617] font-mono">monograph</code> (for project page).
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#F2F2F7] border border-[#E5E5E7] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#161617] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">
                2
              </span>
              <h3 className="font-semibold text-sm text-[#161617]">
                Push Required Repository Files
              </h3>
            </div>
            <p className="text-xs text-[#6E6E73] mb-3 leading-relaxed">
              Download the repository ZIP package from the <strong>Repository Inspector</strong> tab (or copy the files directly into your local directory), open your terminal, and run:
            </p>
            <div className="bg-[#161617] text-[#FAFAFA] p-3 font-mono text-xs overflow-x-auto">
              <pre>{`git init
git add .
git commit -m "Deploy Institutional Research Monograph site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#F2F2F7] border border-[#E5E5E7] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#161617] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">
                3
              </span>
              <h3 className="font-semibold text-sm text-[#161617]">
                Enable GitHub Pages in Settings
              </h3>
            </div>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              In your GitHub repository, navigate to <strong>Settings</strong> &rarr; <strong>Pages</strong>. Under <em>Build and deployment</em>, set Source to <strong>Deploy from a branch</strong>, select branch <strong>main</strong>, folder <strong>/ (root)</strong>, and click <strong>Save</strong>.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#F2F2F7] border border-[#E5E5E7] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#161617] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center font-mono">
                4
              </span>
              <h3 className="font-semibold text-sm text-[#161617]">
                Verify Institutional Aesthetics &amp; Custom Domain (Optional)
              </h3>
            </div>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              GitHub Actions will compile your site natively via Jekyll in ~60 seconds. Your personal website will be live at <code className="bg-[#E5E5E7] px-1 py-0.5 text-[#161617] font-mono">https://YOUR_USERNAME.github.io</code> with automatic SSL HTTPS encryption and zero hosting costs.
            </p>
          </div>
        </div>

        <div className="border-t border-[#E5E5E7] pt-4 flex items-center gap-2 text-xs text-[#6E6E73]">
          <ShieldCheck className="w-4 h-4 text-green-700 shrink-0" />
          <span>No server management or databases required. Jekyll converts your Markdown files into pure static HTML.</span>
        </div>

        {/* Blank Page Troubleshooting Box */}
        <div className="bg-[#FFF8F0] border border-[#F5D0A9] p-4 text-xs text-[#7A4100]">
          <h4 className="font-semibold text-sm mb-2 text-[#9C5400] flex items-center gap-1.5">
            ⚠️ Why GitHub Pages Shows a Blank White Page (Common Causes &amp; Fixes)
          </h4>
          <ol className="list-decimal pl-4 space-y-2 leading-relaxed">
            <li>
              <strong>Did you upload the React application code (<code className="bg-[#FFE8D6] px-1 font-mono">&lt;script src="/src/main.tsx"&gt;</code>)?</strong>
              <br />
              GitHub Pages is a static server that builds Jekyll. Browsers cannot run raw TypeScript (<code className="bg-[#FFE8D6] px-1 font-mono">.tsx</code>) files directly.
              <em>Fix:</em> Click <strong>"Download Full Repo (.zip)"</strong> in the <strong>Repository Inspector</strong> tab. This zip contains the exact Jekyll static files (<code className="bg-[#FFE8D6] px-1 font-mono">_config.yml</code>, <code className="bg-[#FFE8D6] px-1 font-mono">_layouts/</code>, <code className="bg-[#FFE8D6] px-1 font-mono">_posts/</code>, and Jekyll's <code className="bg-[#FFE8D6] px-1 font-mono">index.html</code>).
            </li>
            <li>
              <strong>Repository Name &amp; URL Settings in <code className="bg-[#FFE8D6] px-1 font-mono">_config.yml</code> (For repo <code className="bg-[#FFE8D6] px-1 font-mono">Daily_Blog</code>):</strong>
              <br />
              • <code className="bg-[#FFE8D6] px-1 font-mono">baseurl: "/Daily_Blog"</code> &mdash; Tells Jekyll that your site is hosted at a subfolder URL (<code className="bg-[#FFE8D6] px-1 font-mono">https://username.github.io/Daily_Blog/</code>).
              <br />
              • <code className="bg-[#FFE8D6] px-1 font-mono">url: "https://your-username.github.io"</code> &mdash; Set this to your actual GitHub username URL so canonical links and meta tags resolve to your domain instead of a placeholder.
            </li>
            <li>
              <strong>Ensure GitHub Pages Source is Enabled:</strong>
              <br />
              Go to your repo <strong>Settings &rarr; Pages</strong> &rarr; set Source to <strong>Deploy from a branch</strong> (Branch: <code className="bg-[#FFE8D6] px-1 font-mono">main</code>, Folder: <code className="bg-[#FFE8D6] px-1 font-mono">/ (root)</code>).
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
