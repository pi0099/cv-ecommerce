---
name: vn-cross-border-ecommerce
description: >-
  Vietnam-first AI shopping / Shopify launch playbook for China-sourced
  products. Use when building cv-ecommerce, pricing landed cost, choosing
  payments, logistics, or checking 2025–2026 VN e-commerce law.
---

# Vietnam cross-border e-commerce (cv-ecommerce)

AI-powered **web** store that helps Vietnamese buyers get cheaper Chinese products. Early stage = **Shopify**, then custom AI layer. SEA later; Vietnam first. Pages briefing defaults to **Simplified Chinese** (EN toggle). Do not put private messages or personal names on the public briefing.

## Do this first

1. Treat Shopify as checkout + catalog, not as the marketplace. Shopee + TikTok Shop are ~97% of tracked GMV. A standalone store wins only with a price/search/AI wedge, not by cloning Shopee.
2. Always quote **landed cost**, not 1688/Taobao sticker price: China EXW + freight + import duty (if any) + VAT + last-mile + COD leakage + returns.
3. Localize checkout: VND, VNPay/MoMo/QR/bank transfer, **COD**. Shopify Payments is **not** available in Vietnam. Third-party gateways add Shopify’s extra fee (Basic 2% / Grow 1% / Advanced 0.6% / Plus 0.2%).
4. Do not ship cosmetics, supplements, or food until product registration and labelling are confirmed.
5. If the site is in Vietnamese or uses a `.vn` domain, check whether it is an “e-commerce platform” under Law 122/2025/QH15 (in force 1 Jul 2026) and may need registration plus a resident representative.

## Tax snapshot (as of Nov 2026)

| Rule | Status |
| --- | --- |
| Decision 01/2025/QĐ-TTg, in force 18 Feb 2025 | Every express parcel pays **import VAT**, including parcels ≤ VND 1,000,000 |
| Import duty exemption | Still ~VND 1,000,000 per express parcel |
| MoF draft (Sep 2026, not issued) | Would cut duty exemption to ~VND 100,000 |
| Standard VAT | 10%; many goods temporarily 8% until 31 Dec 2026 |
| China origin | ACFTA Form E can cut duty vs MFN |

Rule of thumb from industry briefings: move from parcel-by-parcel import to **local 3PL stock** around USD 50k–100k monthly sales.

## Market context to respect

- Four-platform GMV 2025: ~USD 16.35B (Metric). Broader B2C often cited USD 31–38.5B.
- Share 2025: Shopee ~56%, TikTok Shop ~41%, Lazada ~2%, Tiki <1%.
- Mobile-first (~92% smartphones). COD still the most *preferred* method (~35%); BNPL *usage* ~49%.
- Last-mile: GHN, GHTK, Viettel Post, J&T, SPX. Urban 1–2 days; COD reconciliation is a cash-flow feature, not a nice-to-have.

## Shopify VN checklist

- Currency VND; language Vietnamese; phone-first theme.
- Payments: VNPay app and/or other local PSP + manual COD.
- Fulfilment: GHN/GHTK apps or custom; do not promise 2-day delivery on CN-origin parcels.
- AI layer (post-MVP): product matching from 1688, landed-cost estimator, Vietnamese Q&A, fake/quality flags.

## Related agent skills

Install if needed (quality varies; prefer official/high-install):

```text
npx skills add nexscope-ai/ecommerce-skills@dropshipping-product-research -g -y
npx skills add nexscope-ai/ecommerce-skills@shopify-dropshipping -g -y
```

Already on this machine and useful: Adspirer ads skills, conversion-tracking, CRO, copywriting, website-seo-analytics, vercel bootstrap/nextjs.
