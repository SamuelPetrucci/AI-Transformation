# Quo SMS replies — make (725) 338-1895 answer texts

The site’s **Text my number** buttons only open the visitor’s Messages app to `+17253381895`. Quo will **not** auto-reply until you enable one of the options below.

Pick **one** primary path so leads don’t get duplicate texts.

---

## Option A — Fastest: Quo auto-replies (no code)

Best for a static welcome + “we’ll be right with you.”

1. Log into [Quo](https://my.quo.com)
2. **Settings → Workspace → Phone Numbers** → select `(725) 338-1895`
3. Open **Auto-replies**
4. Enable a reply on **incoming message** (and optionally after-hours / missed call)
5. Example copy:

   > Thanks for texting AI Transformation! We bridge tech and business so you can focus on what matters. Tell us what you need (website, agents, social, training) and we’ll follow up here. Or book: [your Calendly link]

---

## Option B — Quo Sona (native AI, recommended if available)

Sona can greet new leads, answer from your Knowledge doc, collect details, and hand off to your inbox.

1. Complete **A2P / 10DLC** carrier registration (required for US SMS delivery)
2. In Quo go to **Sona → Messaging (Beta)**
3. **Train** Sona on AI Transformation (services, packages, how you want leads handled)
4. **Test**, then **Activate** on the inbox for `(725) 338-1895`

Docs: [Lead capture over SMS](https://support.quo.com/core-concepts/ai-automations/sona/sona-sms)

> If Sona is active on new conversations, **don’t also** enable the custom Grok webhook below for the same number—or you’ll risk double replies.

---

## Option C — Custom Grok replies via this site (already scaffolded)

Inbound SMS → Quo webhook → `POST /api/quo/webhook` → Grok (`XAI_API_KEY`) → Quo Messages API reply.

### 1. Env vars (Vercel → Production + Preview → Redeploy)

| Variable | Where to get it |
| --- | --- |
| `QUO_API_KEY` | Quo → Settings → API |
| `QUO_PHONE_NUMBER_ID` | Quo API `GET /v1/phone-numbers` → id starting with `PN…` for +17253381895 |
| `QUO_WEBHOOK_KEY` | `whsec_…` returned when you create the webhook |
| `XAI_API_KEY` | Already used for site chat — required for AI SMS replies |
| `QUO_PHONE_E164` | Optional override; defaults to `+17253381895` |

### 2. Create the webhook (Quo API)

```bash
curl https://api.quo.com/webhooks \
  -X POST \
  -H "Authorization: $QUO_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Quo-Api-Version: 2026-03-30" \
  -d '{
    "url": "https://aitransformationllc.com/api/quo/webhook",
    "events": ["message.received"],
    "label": "AIT site SMS auto-reply"
  }'
```

Save the response `key` (`whsec_…`) as `QUO_WEBHOOK_KEY`.

### 3. Confirm phone number id

```bash
curl https://api.quo.com/v1/phone-numbers \
  -H "Authorization: $QUO_API_KEY"
```

Set `QUO_PHONE_NUMBER_ID` to the `PN…` id for your Quo line.

### 4. Test

```bash
# Health (no secrets exposed)
curl https://aitransformationllc.com/api/quo/webhook

# Quo signed test delivery
curl https://api.quo.com/webhooks/{WEBHOOK_ID}/events/test \
  -X POST \
  -H "Authorization: $QUO_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Quo-Api-Version: 2026-03-30" \
  -d '{ "eventType": "message.received" }'
```

Then text `(725) 338-1895` from your phone and confirm a reply lands in Quo.

### Behavior notes

- Only handles `message.received` with `direction: incoming`
- Skips carrier opt-out keywords (`STOP`, etc.)
- Verifies `webhook-id` / `webhook-timestamp` / `webhook-signature`
- Keeps SMS replies short via `generateSmsResponse` in `src/lib/openai.ts`
- If send fails, returns non-2xx so Quo retries

---

## Checklist

- [ ] A2P registration approved (US delivery)
- [ ] Auto-reply **or** Sona **or** custom webhook (not all three fighting)
- [ ] Someone on the team watches the Quo inbox for handoffs
- [ ] Calendly / consult CTA included in welcome or Knowledge

## Related

- Public number config: `src/config/contact.ts`
- Webhook handler: `src/app/api/quo/webhook/route.ts`
- Quo helpers: `src/lib/quo.ts`
