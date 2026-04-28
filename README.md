# amtrixmarketing — Landing Page

Premium dark/minimal landing page für amtrixmarketing.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Animationen:** Framer Motion
- **Effects:** React Bits (LineWaves, ProfileCard)
- **Styling:** CSS Modules
- **Hosting:** Vercel

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## React Bits Komponenten (Optional Upgrade)

Das Projekt enthält eine eigene Canvas2D-Implementation der LineWaves.
Für die originale WebGL-Shader-Version von React Bits:

```bash
# React Bits CLI initialisieren
npx jsrepo init https://reactbits.dev/default/

# LineWaves Background installieren
npx jsrepo add Backgrounds/LineWaves

# ProfileCard installieren
npx jsrepo add Components/ProfileCard
```

Dann die importierten Komponenten in `Hero.tsx` und `Team.tsx` entsprechend anpassen.

## Deploy auf Vercel

### 1. Git Repository erstellen

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Auf GitHub pushen

```bash
# Neues Repo auf github.com erstellen, dann:
git remote add origin https://github.com/DEIN-USER/amtrixmarketing.git
git branch -M main
git push -u origin main
```

### 3. Vercel verbinden

1. Gehe zu [vercel.com](https://vercel.com) → "New Project"
2. GitHub-Repo importieren
3. Framework wird automatisch erkannt (Next.js)
4. "Deploy" klicken — fertig!

### 4. Custom Domain einrichten

1. Im Vercel Dashboard → Project → Settings → Domains
2. Domain eingeben (z.B. `amtrixmarketing.de`)
3. DNS-Records beim Domain-Provider setzen:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`
4. SSL-Zertifikat kommt automatisch

## Projektstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout + Metadata
│   └── page.tsx            # Hauptseite
├── components/
│   ├── Reveal.tsx          # Scroll-Animation Wrapper
│   ├── Navbar.tsx/.css     # Navigation
│   ├── Hero.tsx/.css       # Hero Section
│   ├── Marquee.tsx/.css    # Laufband
│   ├── Services.tsx/.css   # Services Grid
│   ├── About.tsx/.css      # Über uns
│   ├── Contact.tsx/.css    # Kontaktformular
│   └── Footer.tsx/.css     # Footer
└── styles/
    └── globals.css         # Globale Styles + CSS Vars
```
