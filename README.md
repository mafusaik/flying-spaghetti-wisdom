# 🍝 Flying Spaghetti Wisdom

<div align="center">

![Flying Spaghetti Wisdom Banner](https://img.shields.io/badge/May_His_Noodly_Appendage-Touch_You-f97316?style=for-the-badge&logo=target&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Live_Site-GitHub_Pages-38bdf8?style=for-the-badge&logo=githubpages&logoColor=white)](https://mafusaik.github.io/flying-spaghetti-wisdom/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**The Official Companion Website & Landing Page for Flying Spaghetti Wisdom**  
*Daily Pastafarian reflections, sacred Gospel excerpts, pirate lore, and cosmic enlightenment.*

[✨ View Live App](https://mafusaik.github.io/flying-spaghetti-wisdom/) • [📜 The Gospel](#-the-sacred-gospel) • [🚀 Quick Start](#-quick-start) • [🛸 Features](#-features) • [🛡️ Privacy & Support](#-support--privacy)

---

```
             .---.
            /     \
           | () () |    "Don't fear the unknown.
            \  -  /      It may be pasta."
             /|||\
            / ||| \     — His Noodly Benevolence
           /  |||  \
          '---'''---'
```

</div>

---

## 🌟 Overview

**Flying Spaghetti Wisdom** is an interactive, celestial web showcase and companion portal for the *Flying Spaghetti Wisdom* mobile application by **GlazerDev**. 

Rooted in the satirical, joyful wisdom of **Pastafarianism** and Bobby Henderson's canonical *Gospel of the Flying Spaghetti Monster*, this portal brings peace, laughter, and al dente enlightenment to seekers worldwide.

---

## ✨ Features

### 🌌 Interactive Cosmic Canvas
- **Deep Space Nebula Simulation**: Physics-driven floating meatballs with custom bump-mapped textures, cosmic dust, twinkling starfields, and glowing noodly appendages.
- **Dynamic Orbital Animation**: Smooth frame-rate optimized canvas rendering and interactive parallax movement.

### 🔮 The Wisdom Oracle
- Generate inspirational, philosophical, and humorous Pastafarian quotes on demand.
- Filter by category: **Daily Wisdom**, **Gospel Truths**, and **Ancient Proverbs**.
- Interactive **"Touch His Appendage"** blessings with audio-visual ripple feedback.

### 📖 The Sacred Gospel Reader
- Read canonical excerpts including:
  - *The Open Letter to the Kansas School Board*
  - *The Eight "I'd Really Rather You Didn'ts"* (The Noodly Commandments on Mount Salsa)
  - *The Fall & The Pirates* (Explaining climate balance and candy distribution)
  - *The Olive Garden of Eden* (Cosmic creation after drinking heavily)
- Interactive page-by-page reader with quick drawer navigation.

### 📱 Live Interactive Phone Mockup
- Experience the mobile app interface live in the browser.
- Switch between **Home Daily Wisdom**, **The Gospel Library**, and **Settings & Notifications**.
- Test daily reminder scheduling, font adjustments, and quote favoring.

### 🛡️ In-App Legal & Support Modals
- Built-in, high-contrast modal viewers for **Privacy Policy**, **Terms of Service**, and **Developer Support & FAQ**.
- No external redirect breaks or 404 dead-ends.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Component architecture & modern state management |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Strict type safety and robust data models |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Ultra-responsive utility-first styling |
| **[Vite 6](https://vitejs.dev/)** | High-performance build tool and bundler |
| **[Motion](https://motion.dev/)** | Smooth layout animations and entering transitions |
| **[Lucide React](https://lucide.dev/)** | Crisp, lightweight modern vector iconography |

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `v20.x` or `v22.x+`
- **npm**: `v9.x+` (or `pnpm` / `yarn` / `bun`)

### 1. Clone the Repository
```bash
git clone https://github.com/mafusaik/flying-spaghetti-wisdom.git
cd flying-spaghetti-wisdom
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the app.

### 4. Production Build
```bash
npm run build
```
The compiled, minified static site will be output to the `dist/` directory.

---

## 📁 Project Structure

```text
flying-spaghetti-wisdom/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD deployment
├── public/
│   ├── privacy.html            # Standalone Privacy Policy page
│   ├── support.html            # Standalone Support & FAQ page
│   └── terms.html              # Standalone Terms of Service page
├── src/
│   ├── assets/                 # Custom cosmic & meatball textures
│   ├── components/
│   │   ├── AppScreenshots.tsx  # High-definition app preview showcase
│   │   ├── FeaturesSection.tsx # Key capabilities & feature cards
│   │   ├── Footer.tsx          # Pastafarian footer with links & modal triggers
│   │   ├── GospelReader.tsx    # Interactive Gospel book reader
│   │   ├── HeroSection.tsx     # Hero banner with call-to-actions & CTA buttons
│   │   ├── LegalModal.tsx      # In-app viewer for Privacy, Terms & Support
│   │   ├── Logo.tsx            # SVG Pastafarian emblem & branding
│   │   ├── Navbar.tsx          # Floating sticky navigation bar
│   │   ├── PhoneMockup.tsx     # Live interactive mobile app simulator
│   │   ├── SideNav.tsx         # Responsive mobile slide-out drawer
│   │   ├── SpaceBackground.tsx # 3D Meatball & cosmic particle canvas engine
│   │   ├── StoreModal.tsx      # Google Play & App Store download dialog
│   │   ├── SupportModal.tsx    # Interactive contact form & FAQ
│   │   └── WisdomOracle.tsx    # Random quote generator & wisdom dispatcher
│   ├── data/
│   │   └── wisdomData.ts       # Sacred quotes, chapters, and feature list
│   ├── App.tsx                 # Root application component
│   ├── main.tsx                # React DOM entry point
│   └── types.ts                # Shared TypeScript models
├── index.html                  # HTML entry point with metadata & fonts
├── package.json                # Project scripts & dependencies
├── tsconfig.json               # TypeScript compiler config
└── vite.config.ts              # Vite & Tailwind setup with GitHub Actions base
```

---

## 🚢 Continuous Deployment (GitHub Pages)

This project automatically deploys to **GitHub Pages** on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`):

1. Repository is checked out using `actions/checkout@v4`.
2. Node.js environment is configured with `actions/setup-node@v4`.
3. Dependencies are installed and the app is bundled via `npm run build`.
4. Artifacts from `./dist` are deployed directly to GitHub Pages.

---

## 📜 The Sacred Eight "I'd Really Rather You Didn'ts"

<details>
<summary><b>Click to expand the Noodly Commandments</b></summary>

1. **I'd really rather you didn't** act like a self-righteous jerk when describing My Noodly Goodness.
2. **I'd really rather you didn't** use My existence as a means to oppress, subjugate, punish, or be mean to others.
3. **I'd really rather you didn't** build multimillion-dollar churches when the money could be better spent ending poverty and curing diseases.
4. **I'd really rather you didn't** tell people I speak to you. You're not that interesting. Get over yourself.
5. **I'd really rather you didn't** judge people for the way they look, or how they dress, or how they talk. Just play nice, okay?
6. **I'd really rather you didn't** embrace dogmatic fanaticism or force your beliefs on others.
7. **I'd really rather you didn't** do unto others what you wouldn't want done to you.
8. **I'd really rather you didn't** forget that spaghetti is best enjoyed with loved ones and plenty of sauce.

</details>

---

## 🛡️ Support & Privacy

- **Support & Inquiries**: [glazer.dev@gmail.com](mailto:glazer.dev@gmail.com)
- **Privacy First**: Flying Spaghetti Wisdom does not collect, store, or sell personal data. All favorites, preferences, and notifications stay 100% on your device.

---

## 🍝 License & Acknowledgments

- **Application Code & Design**: © 2026 **GlazerDev**. Released under the [MIT License](LICENSE).
- **Lore & Canonical Texts**: Inspired by *The Gospel of the Flying Spaghetti Monster* by **Bobby Henderson** and the global Pastafarian community.
- *"May His Noodly Appendage touch you and guide you."* **Ramen! 🍜**
