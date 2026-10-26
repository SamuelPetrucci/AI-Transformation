# Grok Content Agent (daily blog + social)

Lead-by-example pipeline used by AI Transformation LLC.

## What it does

1. Reads a topic brief (CLI args or `CONTENT_TOPIC` env)
2. Calls **Grok (xAI)** when `XAI_API_KEY` is set, otherwise OpenAI
3. Prints a structured draft: blog fields + social hooks
4. Optionally appends to `src/content/blog/posts.ts` with `--write`

**Nothing auto-publishes.** A human reviews, then merges / schedules.

## One-time setup (about 10 minutes)

### 1. API key

In [GitHub → Settings → Secrets and variables → Actions](https://github.com/SamuelPetrucci/AI-Transformation/settings/secrets/actions) add:

- `XAI_API_KEY` (preferred — Grok via xAI), **or**
- `OPENAI_API_KEY` (fallback)

Locally:

```bash
export XAI_API_KEY=...   # or OPENAI_API_KEY=...
```

### 2. Enable the weekday workflow

The workflow is already in the repo:

`.github/workflows/daily-content-agent.yml`

- Runs **Mon–Fri 13:00 UTC** (~9 AM ET)
- Or run manually: **Actions → Daily Grok content draft → Run workflow**
- Opens a PR on `content/daily-draft` for you to review and merge

### 3. Get found in Google + AI answers

After Vercel deploys `main`:

1. [Google Search Console](https://search.google.com/search-console) → add `https://aitransformationllc.com`
2. Submit sitemap: `https://aitransformationllc.com/sitemap.xml`
3. Request indexing for `/`, `/blog`, `/agents`, `/services`
4. Optional: Bing Webmaster Tools (helps Copilot / some AI crawlers)
5. Confirm `https://aitransformationllc.com/llms.txt` loads (AI systems use this)

### 4. Local dry run

```bash
npm run content-agent -- --topic "AI receptionist ROI for dental offices"
npm run content-agent:write -- --topic "Weekly ops automation wins"
```

Then open a PR, review on `/blog`, approve social copy, schedule posts.

## SEO / AI discoverability checklist (ongoing)

- **Publish consistently** — weekday drafts compound topical authority
- **Answer real questions** in titles (“How…”, “ROI…”, industry + problem)
- **Internal links** — each post should mention `/services`, `/agents`, or a package
- **Keep Article schema** — already on blog posts (JSON-LD)
- **Fresh sitemap** — dynamic; new posts appear after merge + deploy
- **Share socially** — FB/IG (and X) drive crawl discovery faster than waiting on Google alone
- **Don’t invent stats** — review every agent draft before merge (hurts trust & rankings)

## Cursor Cloud Agent alternative

Schedule a weekday Cloud Agent that:

1. Runs `npm run content-agent:write`
2. Opens a PR titled `content: daily grok draft`
3. Pings you for approval
4. After merge, you schedule social in Meta / your Social Growth package

See `/agents` on the site for the client-facing playbook.
