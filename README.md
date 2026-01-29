# Coastal Millwork & Supply — Website Redesign

A simple **Next.js** redesign of [coastalmillworkandsupply.com](https://www.coastalmillworkandsupply.com/home.html), built with React, TypeScript, and Tailwind CSS.

## Why Next.js

- **Simple** — Same React experience; file-based routing means no manual router setup.
- **SEO** — Server/static rendering helps local and commercial search visibility.
- **One command** — `npm run dev` and you’re running locally.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## What’s included

- **Layout** — Sticky header (address/phone strip, logo, nav, mobile menu), footer with contact and quick links.
- **Home** — Hero, intro, mission, facility placeholder, notable projects (with scope tiers: bold/red/orange/green), awards, products & services, highlights.
- **Placeholder pages** — About, Our Team, Products, Services, Projects Gallery, FAQs, Contact (with address, phone, fax, Maps/Directions link).

## Adding your logo

Replace the text “Coastal Millwork & Supply” in `src/components/Header.tsx` with an `<Image>` (from `next/image`) pointing to your logo file in `public/`, or keep the text and style it as needed.

## Design

- Warm neutrals (cream background, brown/gray text) suited to millwork/wood.
- Responsive: top strip and nav collapse to a hamburger on small screens.
- No dark mode; single, professional theme.

## Optional next steps

- Add a real facility image in the home intro section.
- Expand Projects Gallery with images and filters.
- Add Maps/Directions (e.g. Google Maps embed or link) on the Contact page.
- Add certification/partner logos in the footer.
- Populate About, Team, FAQs, etc. with final copy and images.
