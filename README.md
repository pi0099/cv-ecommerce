# cv-ecommerce

Internal working repo for an **AI-powered web store** that helps Vietnamese (then SEA) buyers get cheaper **China-origin** products.

Early stage: **Shopify**. Later: custom AI layer (landed-cost quotes, Vietnamese Q&A, supplier matching).

## Briefing

GitHub Pages is **Chinese by default**, with an EN toggle (choice saved in the browser).

Interactive report:

- Market briefing: **https://pi0099.github.io/cv-ecommerce/**
- Fees & shipping comparison: **https://pi0099.github.io/cv-ecommerce/compare.html**

Local: open [`docs/index.html`](docs/index.html) or [`docs/compare.html`](docs/compare.html).

## What’s in the repo

| Path | Purpose |
| --- | --- |
| `docs/` | GitHub Pages: market briefing + sourced fee/shipping comparison |
| `data/` | Sourced figures (`market.json`, `fees.json`, `sources.md`) |
| `.cursor/skills/vn-cross-border-ecommerce/` | Agent skill for this project |

## Product constraints

- Vietnam first; China sourcing for price.
- Shopify at the start, not a Shopee clone.
- Briefing pages must not include private messages or personal names.

## Local Pages preview

```bash
python3 -m http.server 8080 --directory docs
```
