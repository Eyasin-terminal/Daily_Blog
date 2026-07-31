import { Post, JekyllFile } from '../types';

export const INITIAL_POSTS: Post[] = [
  {
    id: '1',
    slug: '2026-08-01-the-asymmetric-shift',
    title: 'The Asymmetric Shift: Capital Intensity in AI Infrastructure',
    date: '2026-08-01',
    categories: ['Infrastructure'],
    author: 'Business Intelligence & Market Research Analyst',
    summary: 'An investigation into hyperscale data center Capex, GPU cluster amortization cycles, and energy grid capacity bottlenecks.',
    filePath: '_posts/2026-08-01-the-asymmetric-shift.md',
    content: `Hyper-scale technology providers have entered an unprecedented capital deployment regime. Over the past eight quarters, aggregated annual capital expenditures across major cloud infrastructure providers exceeded $180 billion—a structural reallocation of corporate liquidity toward physical compute assets without historical precedent in enterprise software.

Unlike traditional software-as-a-service (SaaS) business models characterized by 80%+ gross margins and minimal physical assets, frontier computing infrastructure introduces industrial capital dynamics: rapid depreciation schedules, non-linear energy constraints, and intensive physical supply chain dependencies.

> "The bottleneck in modern compute scaling is no longer silicon availability alone; it has shifted toward power interconnection queues, high-voltage transformer lead times, and thermal dissipation limits at scale."

## 1. Capital Amortization & Depreciation Compressed Cycles

In standard enterprise financial modeling, data center facilities are amortized over 15 to 20 years, while server hardware is depreciated over a 4 to 6 year window. However, accelerator architectures (specifically H100, B200, and custom ASICs) face accelerated economic obsolescence driven by rapid generation-over-generation FLOPS/Watt efficiency gains.

\`\`\`
Useful Economic Life vs. Financial Amortization Schedule
===========================================================
Asset Class           Accounting Life    Economic Peak Value
-----------------------------------------------------------
Data Center Shell     15-20 Years        15-20 Years
Substation / Power    15-20 Years        15-20 Years
Accelerators (GPUs)   4-5 Years          2-3 Years
High-Speed Networking 3-4 Years          2-3 Years
\`\`\`

When accelerators experience economic obsolescence within 24–36 months due to superior compute density in next-generation architectures, traditional linear depreciation understates operational costs. Analysts modeling compute unit economics must adjust discounted cash flow (DCF) projections to reflect compressed 3-year replacement cycles.

## 2. Power Grid Spatial Economics and Queue Bottlenecks

The primary physical constraint governing compute expansion in North America and Western Europe is high-voltage utility grid interconnection capacity. 

| Region / Hub | Avg Queue Wait Time | Power Cost ($/MWh) | Grid Capacity Margin |
| :--- | :--- | :--- | :--- |
| Northern Virginia (PJM) | 48 - 60 Months | $68.50 | Critical (< 3%) |
| Santa Clara (CAISO) | 36 - 48 Months | $112.00 | Constrained (< 5%) |
| Dallas/Fort Worth (ERCOT) | 24 - 36 Months | $42.10 | Moderate (~ 8%) |
| Columbus, OH (PJM) | 18 - 30 Months | $54.80 | Expanding (~ 12%) |

Because primary transmission nodes in key markets face multi-year queues, hyperscalers are compelled to evaluate non-adjacent geographies with surplus power generation capacity. This geographical dispersion introduces latency considerations for multi-node training clusters, favoring hybrid optical topology architectures.

## 3. Internal Rate of Return (IRR) Sensitivity Matrix

Evaluating return on invested capital (ROIC) across mega-clusters requires isolating three fundamental variables:
1. **Average Blended Utilization Rate** (Inference vs. Training)
2. **Effective Power Utilization Effectiveness (PUE)**
3. **Monetization Rate per GPU-Hour**

Assuming a base cluster acquisition cost of $35,000 per accelerator unit inclusive of networking, liquid cooling distribution units (CDUs), and facility allocation:

* At **$1.80 / GPU-Hour** and **82% utilization**, expected 3-year unlevered IRR yields **18.4%**.
* At **$1.20 / GPU-Hour** and **70% utilization**, expected 3-year unlevered IRR contracts to **3.1%**, falling below weighted average cost of capital (WACC) threshold.

\`\`\`
ROIC Threshold Matrix (Unlevered 3-Year Projection)
----------------------------------------------------
Utilization \\ Rate   $1.20/hr   $1.50/hr   $1.80/hr   $2.10/hr
60% Utilization       -4.2%      2.1%       8.5%       14.8%
70% Utilization        3.1%      9.8%      16.2%       22.9%
80% Utilization       10.4%     17.5%      24.6%       31.8%
\`\`\`

## Conclusion: Institutional Takeaways

Market intelligence analysts must track four critical leading indicators when evaluating hyperscale capital allocation strategies:
1. Ratio of energy interconnection commitments to announced Capex guidance.
2. Custom ASIC adoption velocity versus commercial GPU dependency.
3. Secondary market pricing trends for prior-generation accelerator nodes.
4. Capital lease obligations vs. direct balance sheet asset acquisition.`
  },
  {
    id: '2',
    slug: '2026-06-15-semiconductor-supply-chain-decoupling',
    title: 'Structural Bottlenecks in Lithography & Packaging Supply Chains',
    date: '2026-06-15',
    categories: ['Semiconductors'],
    author: 'Business Intelligence & Market Research Analyst',
    summary: 'An analysis of CoWoS substrate capacity, High Bandwidth Memory (HBM3e/HBM4) yields, and geopolitical supply chain concentration.',
    filePath: '_posts/2026-06-15-semiconductor-supply-chain-decoupling.md',
    content: `While headline chip manufacturing capacity often focuses on leading-edge wafer fabrication nodes (3nm and 2nm), the binding constraint in advanced accelerator assembly resides in advanced 2.5D/3D packaging.

> "Silicon area scaling is bounded by reticle size limits. Modern system-in-package architectures bypass reticle boundaries by bonding multiple chiplets on high-density interposers."

## Chip on Wafer on Substrate (CoWoS) Dynamics

Advanced 2.5D packaging requires silicon interposers to connect compute die with stacked High Bandwidth Memory (HBM) modules. The primary choke point in 2025–2026 remains interposer allocation and high-density substrate lead times.

\`\`\`
Supply Chain Choke Point     Lead Time    Primary Bottleneck
-----------------------------------------------------------------
High-NA EUV Optics           24-36 Mos.   Precision mirrors & light sources
CoWoS Interposer Fab         12-18 Mos.   Wafer-level packaging lines
HBM4 Stack Testing           9-12 Mos.    DRAM micro-bump yield rates
ABF Substrate Material       6-9 Mos.     Ultra-thin resin availability
\`\`\`

## HBM Memory Allocation Trajectories

As memory bandwidth becomes the defining parameter for LLM inference throughput, HBM content per accelerator unit has expanded from 80GB (H100) to 192GB (B200) and beyond. This expansion consumes a disproportionate share of global DRAM wafer capacity due to lower yield efficiencies inherent in 3D vertical die stacking.`
  },
  {
    id: '3',
    slug: '2026-04-10-grid-capacity-and-datacenter-spatial-economics',
    title: 'Spatial Economics of Hyperscale Data Center Power Queues',
    date: '2026-04-10',
    categories: ['Energy'],
    author: 'Business Intelligence & Market Research Analyst',
    summary: 'Evaluating regional transmission operator (RTO) interconnection queues and nuclear PPA structures for zero-carbon compute.',
    filePath: '_posts/2026-04-10-grid-capacity-and-datacenter-spatial-economics.md',
    content: `The geographical distribution of computing capacity is undergoing a structural realignment toward power availability rather than proximity to primary fiber interconnect hubs.

## Regional Interconnection Queue Analysis

Transmission operators in major markets face historic backlogs for high-voltage transformer drops. Substation lead times have stretched from 18 months in 2021 to over 48 months in 2026.

\`\`\`
Transmission Substation Lead Times (2021 - 2026)
==================================================
Year    Average Transformer Lead Time (Weeks)
2021    52 Weeks  (1.0 Year)
2023    104 Weeks (2.0 Years)
2025    182 Weeks (3.5 Years)
2026    210 Weeks (4.0+ Years)
\`\`\`

## Nuclear Power Purchase Agreements (PPAs)

To secure firm, clean baseload power, hyperscalers are pioneering long-term Power Purchase Agreements directly linked to nuclear facilities, co-locating modular data center shells inside plant fencing boundaries.`
  },
  {
    id: '4',
    slug: '2026-01-22-enterprise-software-net-retention-decay',
    title: 'Margin Compression and NRR Trajectories in B2B SaaS',
    date: '2026-01-22',
    categories: ['Economics'],
    author: 'Business Intelligence & Market Research Analyst',
    summary: 'An empirical audit of Net Retention Rates across public cloud software companies during enterprise optimization cycles.',
    filePath: '_posts/2026-01-22-enterprise-software-net-retention-decay.md',
    content: `Net Retention Rates (NRR) across public enterprise software companies have normalized from peak levels of 120-130% down to 105-112%. This recalibration reflects corporate IT seat optimization, seat-to-usage pricing transitions, and vendor consolidation.

## Seat Compression vs. Usage-Based Monetization

Enterprise procurement teams are rationalizing seat counts across secondary application layers while concentrating spend in core infrastructure and data platforms.

\`\`\`
Metric                 2021 Peak    2026 Baseline
--------------------------------------------------
Median NRR            124%         107%
Top Quartile NRR       142%         118%
Gross Retention Rate    92%          88%
Sales Efficiency (CAC) 1.2x         0.6x
\`\`\`

## Strategic Implications for BI & Market Intelligence

As enterprise buyers prioritize measurable ROI, software vendors that lack proprietary data assets or hard operational moats face pricing pressure and elevated churn risks.`
  }
];

export const CONFIG_YML_CONTENT = `# Jekyll Site Configuration
# Institutional Research Monograph
title: "Institutional Research Monograph"
subtitle: "Market Intelligence & Technology Infrastructure Economics"
description: "Independent analytical research on macroeconomics, capital-intensive computing infrastructure, semiconductor supply chains, and market intelligence."
author:
  name: "Business Intelligence & Market Research Analyst"
  linkedin: "https://linkedin.com/in/analyst"
  email: "analyst@research-monograph.org"

# GitHub Pages Settings
url: "https://analyst.github.io"
baseurl: "" # Leave empty for root user/organization page or set to repo name

# Build Settings
markdown: kramdown
highlighter: rouge
permalink: /:categories/:title/

plugins:
  - jekyll-feed
  - jekyll-seo-tag

# Folder Exclusion
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - package.json
  - tsconfig.json
  - vite.config.ts
  - src/
  - README.md
`;

export const STYLE_CSS_CONTENT = `/* ==========================================================================
   INSTITUTIONAL RESEARCH MONOGRAPH STYLESHEET
   Strictly engineered for Executive Trust, High Signal, and Mathematical Precision
   ========================================================================== */

:root {
  /* Color Blueprint (Light Mode Only) */
  --bg-canvas: #FAFAFA;
  --text-primary: #161617;
  --text-meta: #6E6E73;
  --border-subtle: #E5E5E7;
  --border-strong: #D1D1D6;
  --bg-subtle: #F2F2F7;
  --accent-hover: #000000;

  /* Typography Engine */
  --font-sans: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-serif: 'Source Serif 4', Georgia, Cambria, "Times New Roman", serif;

  /* Spacing Math (Vertical Base Unit = 1.5rem / 24px) */
  --space-unit: 1.5rem;
  --container-max-width: 680px;
}

/* Global Reset & Base Setup */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: var(--font-serif);
  font-size: 1.0625rem; /* 17px */
  line-height: 1.68;
  color: var(--text-primary);
  background-color: var(--bg-canvas);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Strict 680px Reading Track Grid */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

/* Site Header */
.site-header {
  padding-top: calc(var(--space-unit) * 1.5);
  padding-bottom: var(--space-unit);
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: calc(var(--space-unit) * 1.5);
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.site-title {
  font-family: var(--font-sans);
  font-size: 0.9375rem; /* 15px */
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  text-decoration: none;
  text-transform: uppercase;
}

.site-title:hover {
  color: var(--accent-hover);
}

.site-nav {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.nav-link {
  font-family: var(--font-sans);
  font-size: 0.8125rem; /* 13px */
  font-weight: 500;
  color: var(--text-meta);
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

/* Main Content Area */
.main-content {
  flex: 1;
  padding-bottom: calc(var(--space-unit) * 2);
}

/* Introduction Thesis Banner */
.thesis-section {
  margin-bottom: calc(var(--space-unit) * 1.5);
}

.thesis-heading {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.thesis-body {
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.68;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.thesis-meta {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: var(--text-meta);
  display: flex;
  gap: 1rem;
  align-items: center;
}

.meta-divider {
  color: var(--border-strong);
}

/* Section Dividers & Headers */
.section-label {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-meta);
  margin-bottom: 1rem;
  padding-bottom: 0.375rem;
  border-bottom: 1px solid var(--border-subtle);
}

/* Digital Ledger Layout (Homepage) */
.ledger-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ledger-item {
  border-bottom: 1px solid var(--border-subtle);
}

.ledger-item:last-child {
  border-bottom: none;
}

.ledger-row {
  display: flex;
  align-items: baseline;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  text-decoration: none;
  color: inherit;
  gap: 1.25rem;
}

.ledger-row:hover .ledger-title {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ledger-date {
  font-family: var(--font-sans);
  font-size: 0.8125rem; /* 13px */
  font-weight: 400;
  color: var(--text-meta);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
  width: 90px;
  flex-shrink: 0;
}

.ledger-title {
  font-family: var(--font-serif);
  font-size: 1rem; /* 16px */
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
  line-height: 1.4;
}

.ledger-tag {
  font-family: var(--font-sans);
  font-size: 0.6875rem; /* 11px */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-meta);
  background-color: var(--bg-subtle);
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Post Deep Read Layout */
.post-header {
  margin-bottom: calc(var(--space-unit) * 1.5);
  padding-bottom: var(--space-unit);
  border-bottom: 1px solid var(--border-subtle);
}

.post-meta-top {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: var(--text-meta);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.post-title {
  font-family: var(--font-sans);
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.post-subtitle {
  font-family: var(--font-serif);
  font-size: 1.125rem;
  line-height: 1.5;
  color: var(--text-meta);
  font-style: italic;
}

/* Post Body Formatting (Markdown Output) */
.post-content {
  font-family: var(--font-serif);
  font-size: 1.0625rem;
  line-height: 1.72;
  color: var(--text-primary);
}

.post-content p {
  margin-bottom: var(--space-unit);
}

.post-content h2 {
  font-family: var(--font-sans);
  font-size: 1.3125rem; /* 21px */
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text-primary);
  margin-top: calc(var(--space-unit) * 1.75);
  margin-bottom: 0.75rem;
}

.post-content h3 {
  font-family: var(--font-sans);
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  color: var(--text-primary);
  margin-top: calc(var(--space-unit) * 1.25);
  margin-bottom: 0.5rem;
}

.post-content blockquote {
  border-left: 2px solid var(--text-primary);
  padding-left: 1.25rem;
  margin-top: var(--space-unit);
  margin-bottom: var(--space-unit);
  font-style: italic;
  color: #2D2D2E;
}

.post-content ul, .post-content ol {
  margin-top: 0.5rem;
  margin-bottom: var(--space-unit);
  padding-left: 1.5rem;
}

.post-content li {
  margin-bottom: 0.375rem;
}

.post-content code {
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.875em;
  background-color: var(--bg-subtle);
  padding: 0.15em 0.35em;
  border-radius: 2px;
}

.post-content pre {
  background-color: var(--bg-subtle);
  border: 1px solid var(--border-subtle);
  padding: 1rem;
  overflow-x: auto;
  margin-top: 1rem;
  margin-bottom: var(--space-unit);
  font-size: 0.875rem;
  line-height: 1.5;
}

.post-content pre code {
  background: none;
  padding: 0;
}

.post-content table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--space-unit);
  margin-bottom: var(--space-unit);
  font-family: var(--font-sans);
  font-size: 0.875rem;
}

.post-content th, .post-content td {
  padding: 0.625rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border-subtle);
}

.post-content th {
  font-weight: 600;
  background-color: var(--bg-subtle);
  color: var(--text-primary);
}

.post-content hr {
  border: 0;
  border-top: 1px solid var(--border-subtle);
  margin: calc(var(--space-unit) * 1.5) 0;
}

/* Post Navigation Footer */
.post-footer {
  margin-top: calc(var(--space-unit) * 2);
  padding-top: var(--space-unit);
  border-top: 1px solid var(--border-subtle);
}

.back-link {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-meta);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.back-link:hover {
  color: var(--text-primary);
}

/* Footer */
.site-footer {
  padding-top: var(--space-unit);
  padding-bottom: calc(var(--space-unit) * 1.5);
  border-top: 1px solid var(--border-subtle);
  margin-top: auto;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--text-meta);
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-link {
  color: var(--text-meta);
  text-decoration: none;
}

.footer-link:hover {
  color: var(--text-primary);
}

/* Mobile Responsive Adjustments */
@media (max-width: 580px) {
  .ledger-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.375rem;
  }

  .ledger-date {
    width: auto;
  }

  .post-title {
    font-size: 1.5rem;
  }

  .header-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
`;

export const DEFAULT_LAYOUT_CONTENT = `<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>{% if page.title %}{{ page.title }} | {{ site.title }}{% else %}{{ site.title }} | {{ site.subtitle }}{% endif %}</title>
  <meta name="description" content="{{ page.summary | default: page.excerpt | default: site.description | strip_newlines | strip_html | truncate: 160 }}">

  <!-- Typography Engine: IBM Plex Sans & Source Serif 4 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..800;1,8..60,300..800&display=swap" rel="stylesheet">

  <!-- Core Monograph Stylesheet -->
  <link rel="stylesheet" href="{{ "/assets/css/style.css" | relative_url }}">
  <link rel="canonical" href="{{ page.url | replace:'index.html','' | absolute_url }}">
</head>
<body>

  <!-- Site Master Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a class="site-title" href="{{ "/" | relative_url }}">{{ site.title }}</a>
      <nav class="site-nav">
        <a class="nav-link" href="{{ "/" | relative_url }}">Monograph Ledger</a>
        <a class="nav-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      </nav>
    </div>
  </header>

  <!-- Main Executive Reading Track (680px Clamped) -->
  <main class="main-content" role="main">
    <div class="container">
      {{ content }}
    </div>
  </main>

  <!-- Institutional Footer -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <span>&copy; {{ 'now' | date: "%Y" }} {{ site.author.name | default: site.title }}</span>
      </div>
      <div class="footer-links">
        <a class="footer-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span class="meta-divider">•</span>
        <a class="footer-link" href="mailto:{{ site.author.email }}">Contact</a>
      </div>
    </div>
  </footer>

</body>
</html>`;

export const POST_LAYOUT_CONTENT = `---
layout: default
---
<article class="post">

  <!-- Post Executive Header -->
  <header class="post-header">
    <div class="post-meta-top">
      <time datetime="{{ page.date | date_to_xmlschema }}">
        {{ page.date | date: "%B %d, %Y" }}
      </time>
      <span class="meta-divider">•</span>
      <span class="ledger-tag">{{ page.categories | first | default: page.category | default: "Research" }}</span>
      {% if page.author %}
        <span class="meta-divider">•</span>
        <span>{{ page.author }}</span>
      {% endif %}
    </div>

    <h1 class="post-title">{{ page.title }}</h1>

    {% if page.summary %}
      <p class="post-subtitle">{{ page.summary }}</p>
    {% endif %}
  </header>

  <!-- Deep Read Markdown Output Container -->
  <div class="post-content">
    {{ content }}
  </div>

  <!-- Post Navigation Footer -->
  <footer class="post-footer">
    <a href="{{ "/" | relative_url }}" class="back-link">
      &larr; Return to Monograph Ledger
    </a>
  </footer>

</article>
`;

export const INDEX_HTML_CONTENT = `---
layout: default
title: "Monograph Ledger"
---

<!-- Introduction Thesis Section -->
<section class="thesis-section">
  <h1 class="thesis-heading">Market Research &amp; Intelligence Monograph</h1>
  <p class="thesis-body">
    Independent analytical writing on macroeconomics, capital-intensive technology infrastructure, semiconductor supply chains, and market intelligence models. Formatted for executive review and institutional decision-makers.
  </p>
  <div class="thesis-meta">
    <span>Focus: Tech Infrastructure &amp; Capital Economics</span>
    <span class="meta-divider">•</span>
    <span>Updated Weekly</span>
  </div>
</section>

<div class="section-label">Digital Ledger &amp; Monograph Index</div>

<!-- The Digital Ledger (Article Index) -->
<ul class="ledger-list">
  {% for post in site.posts %}
    <li class="ledger-item">
      <a href="{{ post.url | relative_url }}" class="ledger-row">
        <time class="ledger-date" datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%b %d, %Y" }}
        </time>
        <span class="ledger-title">{{ post.title }}</span>
        <span class="ledger-tag">{{ post.categories | first | default: "General" }}</span>
      </a>
    </li>
  {% endfor %}
</ul>
`;
