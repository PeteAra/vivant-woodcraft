# AI Design Consultant — Architecture Notes

## Phase 1 (current)
- Streaming chat via Vercel AI SDK (`/api/consult`)
- Knowledge pack from `data/` modules (`lib/ai/knowledge.ts`)
- Read-only tools: searchProjects, getMaterialGuidance, getProcessInfo, getServices
- No database / RAG

## Phase 2 (future)
- Personalized recommendations from `DesignPreferences`
- Pass optional `preferences` in chat request body (already accepted)
- Rank portfolio matches; guide into Design Journey via shared state / query params
- Add tools: `recommendCombinations`, `startDesignJourney`

## Phase 3 (future)
- `generateBrief()` in `lib/ai/types.ts` → polished project brief
- Attach brief to `/api/consultation` email payload
- Auto-send to Vivant before first meeting

## Env
`OPENAI_API_KEY` required for live responses. Without it, UI shows unavailable state.
