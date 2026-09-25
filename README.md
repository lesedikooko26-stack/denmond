# DENMOND — Defined by Design.

A premium streetwear storefront built with React + Vite, ordering exclusively through WhatsApp (no payment gateway).

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What to customize first

1. **WhatsApp number** — `src/utils/whatsapp.js`
   Replace `WHATSAPP_NUMBER` with your real number, international format, digits only (e.g. `"27821234567"`).

2. **Product photos** — `src/assets/product-image-1.jpg` and `product-image-2.jpg`
   Swap these two files for your final product photography (same filenames, any aspect ratio — cards crop to 4:5).

3. **Product names / prices / copy** — `src/data/products.js`
   One central file for both products; nothing else needs to change.

4. **Colors** — `src/index.css`
   Every color in the site reads from the `:root` CSS variables at the top of this file. Adjust `--accent` in particular once your final photos are in, so it complements them.

## Structure

```
src/
├── assets/            the two product photos
├── components/        one component per UI piece
├── data/products.js   single source of product data
├── utils/whatsapp.js  WhatsApp number + message builders
├── App.jsx            page composition + cart/modal state
├── App.css            components, sections, responsive, animation
└── index.css           reset + design tokens (colors, type, spacing)
```

No login, payment processing, or backend — every order (cart or single-product) opens a pre-filled WhatsApp message.
