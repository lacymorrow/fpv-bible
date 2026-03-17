import type { AstroIntegration } from 'astro';
import type { ViteDevServer } from 'vite';
import fs from 'node:fs/promises';

/**
 * Astro integration: AI Content Expander
 *
 * Adds dev-only API routes for expanding stub content:
 *   GET  /_api/stubs     — list all pages, flagging stubs
 *   POST /_api/expand    — expand a stub via AI (body: { filePath })
 *   GET  /_expand        — admin UI for browsing and expanding stubs
 */
export default function aiExpand(): AstroIntegration {
  return {
    name: 'ai-expand',
    hooks: {
      'astro:server:setup': ({ server }: { server: ViteDevServer }) => {
        // Dev-only middleware
        server.middlewares.use(async (req, res, next) => {
          const url = req.url ?? '';

          // --- List stubs API ---
          if (url === '/_api/stubs' && req.method === 'GET') {
            try {
              const { findAllPages } = await server.ssrLoadModule('/src/lib/expand.ts');
              const rootDir = server.config.root;
              const pages = await findAllPages(rootDir);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(pages));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          // --- Expand stub API ---
          if (url === '/_api/expand' && req.method === 'POST') {
            try {
              let body = '';
              for await (const chunk of req) body += chunk;
              const { filePath } = JSON.parse(body);

              if (!filePath) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'filePath required' }));
                return;
              }

              const { expandStub } = await server.ssrLoadModule('/src/lib/expand.ts');
              const rootDir = server.config.root;
              const expanded = await expandStub(filePath, rootDir);

              await fs.writeFile(filePath, expanded, 'utf-8');

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, filePath, length: expanded.length }));
            } catch (err: any) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          // --- Admin UI ---
          if (url === '/_expand') {
            res.setHeader('Content-Type', 'text/html');
            res.end(ADMIN_HTML);
            return;
          }

          next();
        });
      },
    },
  };
}

const ADMIN_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FPV Bible — Content Expander</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #0f1117; color: #e0e0e0; padding: 2rem; max-width: 960px; margin: 0 auto; }
    h1 { font-size: 1.5rem; margin-bottom: 0.5rem; color: #fff; }
    .subtitle { color: #888; margin-bottom: 2rem; font-size: 0.9rem; }
    .filters { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
    .filters button { background: #1e2130; border: 1px solid #333; color: #ccc; padding: 0.4rem 1rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem; }
    .filters button.active { background: #3b3f5c; border-color: #6366f1; color: #fff; }
    .section-header { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: #6366f1; margin: 1.5rem 0 0.5rem; padding-bottom: 0.3rem; border-bottom: 1px solid #222; }
    .page-row { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.8rem; border-radius: 6px; margin-bottom: 2px; }
    .page-row:hover { background: #1a1d2e; }
    .page-info { flex: 1; }
    .page-title { font-size: 0.95rem; color: #e0e0e0; }
    .page-title .badge { display: inline-block; font-size: 0.7rem; background: #92400e; color: #fbbf24; padding: 0.1rem 0.5rem; border-radius: 4px; margin-left: 0.5rem; vertical-align: middle; }
    .page-slug { font-size: 0.75rem; color: #666; margin-top: 2px; }
    .page-actions { display: flex; gap: 0.5rem; align-items: center; }
    .btn { padding: 0.35rem 0.8rem; border-radius: 5px; border: none; cursor: pointer; font-size: 0.8rem; font-weight: 500; }
    .btn-expand { background: #4f46e5; color: #fff; }
    .btn-expand:hover { background: #6366f1; }
    .btn-expand:disabled { background: #333; color: #666; cursor: not-allowed; }
    .btn-view { background: transparent; border: 1px solid #333; color: #aaa; }
    .btn-view:hover { border-color: #666; color: #fff; }
    .status { font-size: 0.75rem; color: #888; min-width: 80px; text-align: right; }
    .status.expanding { color: #fbbf24; }
    .status.done { color: #34d399; }
    .status.error { color: #f87171; }
    .toast { position: fixed; bottom: 2rem; right: 2rem; background: #1e2130; border: 1px solid #333; padding: 1rem 1.5rem; border-radius: 8px; font-size: 0.85rem; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
    .toast.show { opacity: 1; }
    .stats { display: flex; gap: 2rem; margin-bottom: 1.5rem; }
    .stat { text-align: center; }
    .stat-num { font-size: 1.8rem; font-weight: 700; color: #fff; }
    .stat-label { font-size: 0.75rem; color: #888; }
  </style>
</head>
<body>
  <h1>🚁 FPV Bible — Content Expander</h1>
  <p class="subtitle">Expand stub pages with AI-generated content. Review before committing.</p>

  <div class="stats" id="stats"></div>
  <div class="filters">
    <button class="active" data-filter="stubs">Stubs Only</button>
    <button data-filter="all">All Pages</button>
  </div>
  <div id="pages">Loading...</div>
  <div class="toast" id="toast"></div>

  <script>
    let allPages = [];
    let filter = 'stubs';

    async function loadPages() {
      const res = await fetch('/_api/stubs');
      allPages = await res.json();
      render();
    }

    function render() {
      const pages = filter === 'stubs' ? allPages.filter(p => p.isStub) : allPages;
      const stubCount = allPages.filter(p => p.isStub).length;
      const totalCount = allPages.length;

      document.getElementById('stats').innerHTML = \`
        <div class="stat"><div class="stat-num">\${totalCount}</div><div class="stat-label">Total Pages</div></div>
        <div class="stat"><div class="stat-num">\${stubCount}</div><div class="stat-label">Stubs</div></div>
        <div class="stat"><div class="stat-num">\${totalCount - stubCount}</div><div class="stat-label">Complete</div></div>
      \`;

      // Group by section
      const sections = {};
      pages.forEach(p => {
        const section = p.slug.split('/')[0];
        if (!sections[section]) sections[section] = [];
        sections[section].push(p);
      });

      let html = '';
      for (const [section, sectionPages] of Object.entries(sections)) {
        html += \`<div class="section-header">\${section.replace(/-/g, ' ')}</div>\`;
        for (const page of sectionPages) {
          const badge = page.isStub ? '<span class="badge">STUB</span>' : '';
          html += \`
            <div class="page-row" id="row-\${CSS.escape(page.slug)}">
              <div class="page-info">
                <div class="page-title">\${page.title}\${badge}</div>
                <div class="page-slug">/\${page.slug}/</div>
              </div>
              <div class="page-actions">
                <a href="/\${page.slug}/" target="_blank" class="btn btn-view">View</a>
                \${page.isStub ? \`<button class="btn btn-expand" onclick="expand('\${page.slug}', '\${page.filePath.replace(/'/g, "\\\\'")}')">Expand</button>\` : ''}
                <span class="status" id="status-\${CSS.escape(page.slug)}"></span>
              </div>
            </div>\`;
        }
      }
      document.getElementById('pages').innerHTML = html || '<p style="color:#666">No pages match this filter.</p>';
    }

    async function expand(slug, filePath) {
      const btn = document.querySelector(\`#row-\${CSS.escape(slug)} .btn-expand\`);
      const status = document.getElementById(\`status-\${CSS.escape(slug)}\`);
      if (btn) btn.disabled = true;
      status.className = 'status expanding';
      status.textContent = 'Expanding…';

      try {
        const res = await fetch('/_api/expand', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filePath }),
        });
        const data = await res.json();
        if (data.success) {
          status.className = 'status done';
          status.textContent = '✓ Done';
          toast(\`Expanded: \${slug}\`);
          // Refresh stub status after a beat (hot reload will update the page)
          setTimeout(loadPages, 1000);
        } else {
          throw new Error(data.error);
        }
      } catch (err) {
        status.className = 'status error';
        status.textContent = 'Error';
        toast(\`Failed: \${err.message}\`, true);
        if (btn) btn.disabled = false;
      }
    }

    function toast(msg, isError) {
      const el = document.getElementById('toast');
      el.textContent = msg;
      el.style.borderColor = isError ? '#f87171' : '#34d399';
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 3000);
    }

    // Filter buttons
    document.querySelector('.filters').addEventListener('click', (e) => {
      if (e.target.dataset.filter) {
        filter = e.target.dataset.filter;
        document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        render();
      }
    });

    loadPages();
  </script>
</body>
</html>`;
