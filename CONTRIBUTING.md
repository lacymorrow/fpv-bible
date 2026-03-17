# Contributing to the FPV Bible

Thanks for wanting to help! This guide is open-source and community-driven. Whether you're fixing a typo or writing an entire section, every contribution matters.

## Quick Contributions (no setup needed)

Every page on the site has an **"Edit page"** link at the bottom. Click it, make your changes in GitHub's editor, and submit a pull request. That's it.

Great for:
- Fixing typos or outdated info
- Adding a paragraph to an existing page
- Updating product recommendations

## Writing New Content

### Expanding a Stub

Many pages are marked as stubs — they have a basic outline but need more detail. These are the highest-impact contributions.

1. Find a stub page (marked with a yellow "Stub" callout)
2. Click "Edit page" or clone the repo locally
3. Keep the existing frontmatter (title, description)
4. Remove the `:::caution[Stub]` block when the page has enough content to stand on its own
5. Submit a PR

### Creating a New Page

1. Create a `.md` file in the appropriate `src/content/docs/` subdirectory
2. Add frontmatter at the top:

```md
---
title: Your Page Title
description: A one-line description of what this page covers.
---

Your content here.
```

3. If the page needs to appear in the sidebar, add it to `astro.config.mjs` in the appropriate section

### Content Structure

Each page in the docs follows a consistent directory structure:

```
src/content/docs/
├── getting-started/    # Intro and quad anatomy
├── frame/              # Frame types and sizes
├── power/              # Batteries, PDB, charging
├── control/            # TX, RX, protocols, telemetry
├── drive/              # ESCs, motors, propellers
├── fpv/                # Cameras, VTX, goggles, antennas
├── building/           # Step-by-step build guide
├── flight-school/      # Learning to fly
├── recording/          # DVR and HD recording
├── tools/              # Tools and field accessories
├── tips/               # Tips and troubleshooting
└── community/          # Getting involved
```

## Writing Guidelines

- **Be accurate.** If you're not sure about something, say so or leave it out.
- **Be concise.** Respect the reader's time. Say what needs to be said, then stop.
- **Be practical.** Real-world advice beats theory. "Use X because Y" is better than a paragraph of background.
- **Credit sources.** If you're quoting or paraphrasing, link to the original.
- **Stay current.** The hobby moves fast. If you notice outdated info, update it or flag it.
- **Use Starlight features.** Callouts (tips, cautions, dangers), code blocks, and tables are all supported.

### Callout Examples

```md
:::tip
Helpful advice goes here.
:::

:::caution
Something to be careful about.
:::

:::danger
Safety-critical warning.
:::
```

## Local Development

```bash
# Clone the repo
git clone https://github.com/lacymorrow/fpv-bible-site.git
cd fpv-bible-site

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:4321` with hot reload — changes appear instantly.

## What We Need Most

- **Expanding stubs** — Most pages need more detail. Pick one and go deep.
- **Build photos** — If you're building a quad, take photos and contribute them.
- **Product recommendations** — What's good in 2024+? What should beginners buy?
- **Troubleshooting entries** — What problems did you hit? How did you fix them?
- **Corrections** — See something wrong? Fix it.

## Code of Conduct

Be respectful. Help beginners. Don't gatekeep. We were all new once.

## Questions?

Open an issue on GitHub or start a discussion. We're here to help.
