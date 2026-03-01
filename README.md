# TalkToNova.com

Relational Intelligence. Not predictive guessing.

## Tech Stack

- **Next.js 14** with App Router
- **React 18**
- **Tailwind CSS 3.4**
- **Framer Motion** (animations)
- **TypeScript**

## Getting Started

### Install dependencies

```bash
cd talktonova
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Vercel auto-detects Next.js — click "Deploy"
5. Add custom domain: `talktonova.com`

## Project Structure

```
talktonova/
├── app/
│   ├── layout.tsx          # Root layout (font, dark mode)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind + custom styles
│   └── developers/
│       └── page.tsx        # Placeholder developer docs
├── components/
│   ├── Navigation.tsx      # Fixed nav with blur effect
│   ├── Hero.tsx            # Full-height hero
│   ├── SudokuHook.tsx      # Sudoku metaphor section
│   ├── Problem.tsx         # Problem statement
│   ├── Differentiator.tsx  # UDF explanation
│   ├── HowItWorks.tsx      # Two-stage process
│   ├── WhatHelpsWith.tsx   # Use cases table
│   ├── ForBuilders.tsx     # Developer section
│   ├── DeepContext.tsx     # Relational memory
│   ├── Privacy.tsx         # Privacy commitment
│   ├── Vision.tsx          # Company vision
│   ├── EarlyAccess.tsx     # CTA
│   └── Footer.tsx          # Sparse footer
├── tailwind.config.ts      # Design tokens
├── next.config.js          # Static export
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  background: '#0a0a0a',  // Near black
  foreground: '#fafafa',  // Off white
  secondary: '#a1a1a1',   // Gray
  accent: '#6366f1',      // Indigo (use sparingly)
  border: '#1f1f1f',      // Border
}
```

### Content

All copy is in the component files. Key sections:

- **Hero**: `components/Hero.tsx`
- **Sudoku metaphor**: `components/SudokuHook.tsx`
- **How it works**: `components/HowItWorks.tsx`
- **CTA**: `components/EarlyAccess.tsx`

### Adding Pages

1. Create `app/[page-name]/page.tsx`
2. Add navigation link in `components/Navigation.tsx`
3. Add footer link in `components/Footer.tsx`

## Future Enhancements

- **Waitlist integration**: Replace mailto link with form (ConvertKit, Resend, etc.)
- **Analytics**: Add Plausible or Fathom
- **Blog**: Add `/blog` directory with MDX support
- **Animations**: Extend Framer Motion animations

## License

MIT