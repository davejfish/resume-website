# Dave Fisher — Resume Website

My personal resume and portfolio site.

🔗 **Live:** [davejfish.dev](https://davejfish.dev)

## Tech Stack

- **[Next.js](https://nextjs.org)** (App Router) + **React** + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com)** for styling
- **[Vercel Analytics](https://vercel.com/analytics)** for traffic insights
- Deployed on **[Vercel](https://vercel.com)**

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                 # App Router entry (layout, page, global styles)
├── components/          # Shared UI (Header, Footer, Section)
│   └── sections/        # Page sections (Hero, About, Skills, Experience, Projects, Contact)
└── data/
    └── resume.ts        # Single source of truth for all resume content
public/
└── Dave-Fisher-Resume.pdf   # Downloadable resume
```

To update content, edit [`src/data/resume.ts`](src/data/resume.ts) — it drives every section.

## Deployment

Pushing to `main` auto-deploys to production via Vercel. Pull requests get their own preview URLs.
