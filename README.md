# Le Village — Portal

**Une initiative communautaire pour Marseille 11e & 12e**

The hub homepage for all Le Village projects. Links to each app in the ecosystem.

**Live:** https://le-village-marseille.fr

---

## Le Village Ecosystem

| Project | Description | URL | Repo |
|---------|-------------|-----|------|
| **Portal** (this) | Hub homepage | [le-village-marseille.fr](https://le-village-marseille.fr) | This repo |
| **Entourage** | Organize local outings | [tribu.le-village-marseille.fr](https://tribu.le-village-marseille.fr) | [kymmy/tribu-app](https://github.com/kymmy/tribu-app) |
| **Little Movers** | English Movement & Confidence Club | [little-movers.le-village-marseille.fr](https://little-movers.le-village-marseille.fr) | [kymmy/little-movers](https://github.com/kymmy/little-movers) |
| **Amour Toujours** | Local solidarity initiative | [amour-toujours.le-village-marseille.fr](https://amour-toujours.le-village-marseille.fr) | [kymmy/amour-toujours](https://github.com/kymmy/amour-toujours) |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS 4
- Framer Motion
- Fonts: Playfair Display + Source Sans 3 (via next/font)

## Development

```bash
npm install
npm run dev    # http://localhost:3000
```

## Architecture

Hub + Spoke pattern. The portal is a lightweight static site that links out to independent apps, each in its own repo with its own deployment. See the [about page](https://le-village-marseille.fr/about) for a non-technical overview.
