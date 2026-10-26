# Grok Content Agent (daily blog + social)

Lead-by-example pipeline used by AI Transformation LLC.

## What it does

1. Reads a topic brief (CLI args or `CONTENT_TOPIC` env)
2. Calls **Grok (xAI)** when `XAI_API_KEY` is set, otherwise OpenAI
3. Prints a structured draft: blog fields + social hooks
4. Optionally appends to `src/content/blog/posts.ts` with `--write`

**Nothing auto-publishes.** A human reviews, then merges / schedules.

## Setup

```bash
# Preferred
export XAI_API_KEY=...
# Fallback
export OPENAI_API_KEY=...
```

## Run (dry preview)

```bash
node scripts/content-agent/run.mjs --topic "AI receptionist ROI for dental offices"
```

## Run and stage a blog entry

```bash
node scripts/content-agent/run.mjs \
  --topic "Weekly ops automation wins" \
  --write
```

Then open a PR, review the draft on `/blog`, approve social copy, schedule via your Social package.

## Cursor Cloud Agent / cron

Schedule a weekday Cloud Agent (or GitHub Action) that:

1. Runs this script with `--write`
2. Opens a PR titled `content: daily grok draft`
3. Notifies Slack/email for human approval
4. After merge, schedules social posts in your posting tool

See `/agents` on the site for the client-facing playbook.
