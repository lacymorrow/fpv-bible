import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_DIR = 'src/content/docs';

const SYSTEM_PROMPT = `You are an expert FPV drone pilot and technical writer contributing to the FPV Bible — an open-source guide for beginners through intermediate pilots.

Writing rules:
- Be accurate, practical, and concise. Real-world advice beats theory.
- Use markdown with Starlight-compatible features: :::tip, :::caution, :::danger callouts.
- Keep the existing frontmatter (title, description) exactly as-is.
- Remove any ":::caution[Stub]" blocks — you're replacing the stub with real content.
- Write 400-800 words of useful content. Don't pad.
- Use ## and ### headings to structure the content.
- Link to other FPV Bible pages using relative paths like /drive/motors/ where relevant.
- Include specific product names, specs, and recommendations where appropriate.
- If something is opinion or preference, say so.
- Do not invent information. If something is uncertain, note it.

Output ONLY the full markdown file content including the frontmatter. No commentary, no wrapping.`;

export interface StubInfo {
  slug: string;
  title: string;
  description: string;
  filePath: string;
  isStub: boolean;
}

/**
 * Scan content directory for all pages, marking which are stubs.
 */
export async function findAllPages(rootDir: string): Promise<StubInfo[]> {
  const contentDir = path.join(rootDir, CONTENT_DIR);
  const pages: StubInfo[] = [];

  async function walk(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) {
        const content = await fs.readFile(fullPath, 'utf-8');
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (!frontmatterMatch) continue;

        const fm = frontmatterMatch[1];
        const title = fm.match(/title:\s*(.+)/)?.[1]?.trim().replace(/^['"]|['"]$/g, '') ?? '';
        const description = fm.match(/description:\s*(.+)/)?.[1]?.trim().replace(/^['"]|['"]$/g, '') ?? '';
        const relativePath = path.relative(contentDir, fullPath);
        const slug = relativePath.replace(/\.md$/, '').replace(/\/index$/, '');
        const isStub = content.includes(':::caution[Stub]');

        pages.push({ slug, title, description, filePath: fullPath, isStub });
      }
    }
  }

  await walk(contentDir);
  pages.sort((a, b) => a.slug.localeCompare(b.slug));
  return pages;
}

/**
 * Expand a stub page using AI.
 */
export async function expandStub(filePath: string, rootDir: string): Promise<string> {
  const content = await fs.readFile(filePath, 'utf-8');

  // Gather sibling pages for context
  const dir = path.dirname(filePath);
  const siblings = await fs.readdir(dir);
  const siblingContext: string[] = [];
  for (const sib of siblings) {
    if (sib === path.basename(filePath)) continue;
    const sibPath = path.join(dir, sib);
    const sibContent = await fs.readFile(sibPath, 'utf-8');
    const sibFm = sibContent.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const sibTitle = sibFm.match(/title:\s*(.+)/)?.[1]?.trim() ?? sib;
    siblingContext.push(`- ${sibTitle}`);
  }

  const prompt = `Expand this stub into a complete, well-written page for the FPV Bible.

Current file content:
\`\`\`markdown
${content}
\`\`\`

Other pages in this section:
${siblingContext.join('\n')}

Write the complete replacement file. Keep the frontmatter identical. Replace the stub content with thorough, accurate information.`;

  const { text } = await generateText({
    model: anthropic('claude-sonnet-4-20250514'),
    system: SYSTEM_PROMPT,
    prompt,
    maxTokens: 4096,
  });

  // Clean up any markdown code fences the model might wrap around the output
  let cleaned = text.trim();
  if (cleaned.startsWith('```markdown')) {
    cleaned = cleaned.replace(/^```markdown\n/, '').replace(/\n```$/, '');
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\n/, '').replace(/\n```$/, '');
  }

  return cleaned;
}
