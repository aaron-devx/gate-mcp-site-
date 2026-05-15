# Gate MCP - Showcase Site

A single-page marketing site for **Gate MCP**, a (placeholder) Model Context
Protocol server that filters and compresses context before it hits your AI
model, cutting token usage by up to 70%.

Built with Vite + React + TypeScript + Tailwind CSS.

## Sections

1. Hero with animated token-reduction stat
2. Compatibility strip ("works with Cursor, Claude Desktop, Cline, ...")
3. Use Cases - before/after comparison with animated counters
4. Who It's For - persona cards (indie devs, teams, AI app builders)
5. Why It Matters - cost / speed / context
6. Features - 6-card grid
7. How to Use - 4-step workflow + copy-paste `mcp.json` snippet
8. Built with Cursor - how Cursor accelerated development
9. FAQ accordion
10. Contact / Stay Updated
11. Footer

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Editing copy

All marketing copy lives in [`src/data/content.ts`](src/data/content.ts).
Edit there to retitle, rename, or change any of the section text.

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) +
  [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons
- [framer-motion](https://www.framer.com/motion/) (available; used sparingly)

Made with Cursor.
