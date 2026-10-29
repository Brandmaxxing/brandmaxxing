# Brandmaxxing website

The website for [brandmaxxing.co.za](https://brandmaxxing.co.za), built with [Astro](https://astro.build) and hosted on GitHub Pages.

Business context and positioning live in [CLAUDE.md](CLAUDE.md).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Use `npm run build` to produce the static site in `dist/`, and `npm run preview` to view that build.

## Where to edit things

Almost all wording and settings live in `src/data/`, so you rarely need to touch the pages themselves.

| What | File |
|---|---|
| Email, phone, social links, Google Form URL, booking URL | `src/data/site.ts` |
| Package names, prices and what's included | `src/data/packages.ts` |
| Services | `src/data/services.ts` |
| The six-phase roadmap | `src/data/roadmap.ts` |
| Customer benefits | `src/data/benefits.ts` |
| Packages page FAQ | `src/data/faq.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (the `:root` block) |
| Logo | `src/components/Logo.astro` and `public/favicon.svg` |

Search the project for `TODO` to find every placeholder.

## Deploying

Every push to `main` builds and publishes the site via `.github/workflows/deploy.yml`.

One-time setup:

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. In the same screen, set **Custom domain** to `brandmaxxing.co.za` (the `public/CNAME` file already contains it).
4. At your domain registrar, add these DNS records:
   - `A` records for `brandmaxxing.co.za` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - a `CNAME` record for `www` pointing to `<your-github-username>.github.io`
5. Once DNS has propagated (can take a few hours), tick **Enforce HTTPS** in Settings → Pages.

## Follow-ups

1. **Google Forms enquiry form.** Create the form, then put its embed URL (ending in `?embedded=true`) in `enquiryFormUrl` in `src/data/site.ts`. The contact page switches from the email-based placeholder form to the Google Form automatically.
2. **Google Calendar booking.** Create an appointment schedule in Google Calendar and put its booking page URL in `bookingUrl` in `src/data/site.ts`. The "Request a time" button becomes "Choose a time" and opens the booking page.
3. **Package pricing.** Fill in `price` for each package in `src/data/packages.ts` (for example `'R4 500'`). The "Pricing TBC" tags disappear once a price is set.
4. **Contact details.** Confirm the email address, and add a phone/WhatsApp number and social links in `src/data/site.ts`.
5. **Social sharing image.** Replace `public/og-image.png` if you create a designed one (1200 × 630 px).
6. **Later:** a designed logo, client testimonials (Days 61–90), analytics, and an update to the privacy notice when Google Forms, booking or analytics go live.
