# Grok AI Marketing Bot (daily blog + social)

Lead-by-example pipeline for AI Transformation LLC. Weekday GitHub Action calls Grok, stages a blog draft + social pack, opens a PR for human approval.

## What it does

1. Picks a topic from `topics.json` (or `--topic` / `CONTENT_TOPIC`)
2. Calls **Grok** via `XAI_API_KEY` (model `grok-4.7` by default; override with `XAI_MODEL`)
3. Prints blog fields + Facebook / Instagram / LinkedIn / X captions
4. With `--write`, appends to `src/content/blog/posts.ts` and writes `last-social-pack.json`

**Nothing auto-publishes.** You review the PR, merge, then schedule social.

## One-time setup (required to go live)

### 1. Add your xAI (Grok) API key to GitHub

1. Open [GitHub Actions secrets](https://github.com/SamuelPetrucci/AI-Transformation/settings/secrets/actions)
2. **New repository secret** → name: `XAI_API_KEY` → paste your key from [console.x.ai](https://console.x.ai)
3. Optional: Actions → Variables → `XAI_MODEL` (defaults to `grok-4.7` in the script)

This key stays in GitHub Secrets. It is **not** sent to Vercel by this workflow.

### 2. Kick the first run

1. [Actions → Daily Grok content draft](https://github.com/SamuelPetrucci/AI-Transformation/actions/workflows/daily-content-agent.yml)
2. **Run workflow** (optional topic override, or leave blank for the calendar)
3. Review the PR on branch `content/daily-draft` → merge → Vercel deploys `/blog`

After that it runs **Mon–Fri ~9 AM ET** automatically.

## Local dry run

```bash
export XAI_API_KEY=...   # your key — local shell only
npm run content-agent -- --topic "AI receptionist ROI for dental offices"
npm run content-agent:write -- --topic "Weekly ops automation wins"
```

## Topic calendar

Edit `scripts/content-agent/topics.json` to change the rotating marketing angles.

## SEO / AI discovery (already on main)

- Dynamic sitemap + robots + `/llms.txt`
- Article JSON-LD on blog posts
- After each merge: schedule the social pack (FB/IG via Social Growth)

See `/agents` on the site for the client-facing playbook.
