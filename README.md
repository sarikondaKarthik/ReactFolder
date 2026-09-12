# StyleStreet

> Everyday fashion, elevated.

StyleStreet is a responsive React storefront for discovering curated men's and women's fashion collections. It includes a polished landing page and a client-side login/signup experience designed around the same editorial shopping aesthetic.

## Highlights

- Responsive fashion storefront with men's and women's collections
- Editorial hero banners and product cards
- Accessible account entry point from the main navigation
- Login and signup pages with native form validation
- Responsive layouts for desktop, tablet, and mobile screens
- Vite-powered development workflow with ESLint checks

## Tech stack

- React 19
- Vite
- Bootstrap 5
- CSS with responsive media queries

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
src/
├── ShoppingFolder/
│   ├── components/       # Storefront sections and shared navigation
│   └── pages/            # Storefront and authentication page compositions
├── App.jsx               # Application-level view switching
├── App.css               # Storefront and auth page styling
└── main.jsx              # React entry point
public/
└── assets/               # Product and campaign imagery
```

## Authentication note

The login and signup forms currently provide a complete client-side user experience and browser validation. They do not persist accounts or connect to an authentication API yet. For production use, connect the submit handlers to a secure backend or identity provider and never store passwords in the browser.

## Production build

```bash
npm run lint
npm run build
```

The generated site is written to `dist/` and can be deployed to any static hosting provider that supports single-page applications.

## License

This project is intended for learning and portfolio use.
