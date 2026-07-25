# Vivant Custom Woodcraft

Luxury marketing site for Vivant Custom Woodcraft — custom cabinetry and architectural millwork for discerning homeowners in Credit River, Minnesota.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel AI SDK (`ai`, `@ai-sdk/react`, `@ai-sdk/openai`)

## Getting started

```bash
npm install
cp .env.example .env.local
# Add OPENAI_API_KEY for the Design Consultant
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Photography

Placeholder images currently use Unsplash URLs in `data/images.ts`, `data/projects.ts`, `data/materials.ts`, and `data/journey.ts`.

When client photography arrives:

1. Add files under `public/images/` (e.g. `public/images/projects/lake-minnetonka-kitchen/01.jpg`)
2. Update the corresponding `src` fields in the data modules — keep the same slugs/ids
3. Remove remote Unsplash entries from `next.config.ts` if no longer needed

## Contact forms

`POST /api/consultation` currently validates and logs submissions (frontend success UX). Wire Resend (or similar) when ready using `RESEND_API_KEY` and `CONTACT_TO` in `.env.local`.

## AI Design Consultant

- UI: `/consult`
- API: `POST /api/consult`
- Requires `OPENAI_API_KEY`
- Architecture notes for Phase 2/3: `lib/ai/README.md`

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint
