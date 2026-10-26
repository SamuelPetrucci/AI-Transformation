# API keys — where they go

Keys in **one place do not automatically appear in the other.**

| Secret | Where | Used for |
| --- | --- | --- |
| `XAI_API_KEY` | **Vercel** → Project → Settings → Environment Variables (Production **and** Preview) | Site chat / Grok (if enabled) |
| `XAI_API_KEY` | **GitHub** → Settings → Secrets and variables → Actions | Daily blog content agent workflow |
| `XAI_MODEL` | Optional in both | Default now `grok-3-latest` |
| `NEXT_PUBLIC_SUPABASE_*` | Vercel | Contact / lead storage |
| SMTP / `TO_EMAIL` | Vercel | Contact form email |

## Common failure: key “is there” but calls fail

We saw Production return `enabled: true` while chat still failed — that usually means:

1. **Bad paste** — extra space, newline, or quotes around the key in Vercel/GitHub  
2. **Wrong product key** — must be from [console.x.ai](https://console.x.ai), not OpenAI / X (Twitter)  
3. **No credits / billing** on the xAI account  
4. **Only set in GitHub**, not Vercel (or the reverse)

## Fix checklist

1. Create a fresh key at [console.x.ai](https://console.x.ai)  
2. Paste into **Vercel** env as `XAI_API_KEY` (no quotes) → Production + Preview → **Redeploy**  
3. Paste the **same** key into **GitHub Actions secrets** as `XAI_API_KEY`  
4. Check health: `https://www.aitransformationllc.com/api/chat/status`  
   - `ok: true` → key works  
   - `code: "unauthorized"` → key rejected — recreate and re-paste  
   - `code: "billing"` → add credits on xAI  
   - `code: "missing_key"` → not present in that environment  

5. Test daily blog: Actions → **Daily Grok content draft** → Run workflow  
