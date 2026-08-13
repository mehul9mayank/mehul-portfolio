# 🌌 Mehul Mayank — Developer Portfolio

> **Full-Stack Developer & AI Specialist** | React.js + TypeScript + Vite + Tailwind CSS

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Portfolio-amber?style=for-the-badge&logo=vercel)](https://mehul-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

---

## 📸 Preview

> A modern, dark-themed developer portfolio featuring a **cyberpunk/space aesthetic** with animated starfield backgrounds, interactive CRT scanlines, glitch effects, and a retro terminal experience.

---

## ✨ Features

- 🌟 **Canvas Starfield Background** — Ambient animated particles rendered on `<canvas>` for immersive depth
- 🖊️ **SVG Signature Splash Screen** — Animated "Mehul" signature stroke draw on initial load
- 🎭 **Glitch Text Hover Effects** — Cyberpunk-style text distortion on hero headlines
- 📺 **CRT Scanline Overlay** — Authentic retro monitor feel applied globally via CSS
- 📸 **Cyber Profile Photo Frame** — HUD-style corner brackets, grayscale-to-color hover reveal
- 🗂️ **Sections** — Hero, About, Projects, Skills, Education, Contact
- 📄 **Resume Preview Modal** — Embedded PDF viewer with toggle between **PDF View** and **Text View**, plus 1-click download
- 📱 **Fully Responsive** — Mobile, tablet, and desktop layouts
- 🧭 **Scroll Spy Navbar** — Active section highlighting with underline indicator
- ⌨️ **Interactive Retro Terminal** — Accessible via a floating bottom-right button; supports commands: `help`, `about`, `projects`, `skills`, `education`, `contact`, `neofetch`, `clear`, `exit`

---

## 🗂️ Project Structure

```
mehul-portfolio/
├── public/
│   ├── mehul.jpg                     # Profile photo (stored locally)
│   └── Mehul_Mayank_Resume.pdf       # Official resume PDF (stored locally)
│
├── src/
│   ├── components/
│   │   ├── SplashScreen.tsx          # Animated SVG signature loader
│   │   ├── StarBackground.tsx        # Canvas moving starfield background
│   │   ├── Sidebar.tsx               # Fixed sidebar with logo & social links
│   │   ├── Navbar.tsx                # Fixed top navbar with scroll spy
│   │   ├── Hero.tsx                  # Hero section with photo & CTAs
│   │   ├── About.tsx                 # Bio & animated counter stats
│   │   ├── Projects.tsx              # Project cards (Meditatva, VOCA, Ghoomo Firoo)
│   │   ├── Skills.tsx                # Technical skills grid
│   │   ├── Education.tsx             # Degree & certifications
│   │   ├── Contact.tsx               # Contact form & info deck
│   │   ├── ResumeModal.tsx           # Resume PDF preview & download modal
│   │   └── Footer.tsx                # Footer
│   │
│   ├── App.tsx                       # Root application component
│   ├── main.tsx                      # React DOM entry point
│   └── index.css                     # Tailwind + CRT scanlines + glitch CSS
│
├── index.html                        # HTML entry with Google Fonts
├── tailwind.config.js                # Theme tokens & font family config
├── vite.config.ts                    # Vite build configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Scripts & dependencies
```

---

## 🎨 Design System

| Element | Value |
|---|---|
| **Primary Font (Display)** | [Rajdhani](https://fonts.google.com/specimen/Rajdhani) |
| **Monospace / Terminal Font** | [Space Mono](https://fonts.google.com/specimen/Space+Mono) |
| **Body Font** | [Inter](https://fonts.google.com/specimen/Inter) |
| **Splash / Signature Font** | [Great Vibes](https://fonts.google.com/specimen/Great+Vibes) |
| **Background Color** | `#050507` |
| **Card Background** | `#121216` |
| **Border Color** | `#272730` |
| **Accent Gold** | `#ffbd2e` |
| **Accent Green** | `#27c93f` |
| **Accent Cyan** | `#5a9fd4` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/mehul09/mehul-portfolio.git

# 2. Navigate into the project directory
cd mehul-portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Open your browser at **`http://localhost:5173`** 🎉

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder, ready to deploy.

### Preview Production Build

```bash
npm run preview
```

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI library |
| **TypeScript 5** | Type-safe development |
| **Vite 5** | Ultra-fast build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling framework |
| **Font Awesome 6** | Icon library (sidebar, buttons, cards) |
| **Google Fonts** | Rajdhani, Space Mono, Inter, Great Vibes |

---

## 📄 Resume Modal

The floating **`RESUME CV`** button in the bottom-right corner opens a full-screen resume modal that:

1. **PDF View** — Embeds the official `Mehul_Mayank_Resume.pdf` file directly in the browser using `<iframe>` for in-browser viewing.
2. **Text View** — Displays a structured, readable, and copy-able version of the resume with all project details, skills, education, and certifications.
3. **Download** — A 1-click **`DOWNLOAD PDF`** button saves `Mehul_Mayank_Resume.pdf` directly to the visitor's device.

> The resume file is stored locally in `public/Mehul_Mayank_Resume.pdf` for fast delivery.

---

## 💼 Featured Projects

### 🏥 [Meditatva](https://medi-tatva.vercel.app) — AI Healthcare Platform
Full-stack AI healthcare platform with appointment booking, pharmacy search, and medical-record management. Integrated **Gemini API** for context-aware health recommendations with 98% cross-device compatibility.

**Stack:** React.js · TypeScript · Tailwind CSS · Gemini API · REST APIs

---

### 🎙️ [VOCA](https://voca-rouge.vercel.app) — AI Communication Analysis System
AI-powered interview evaluation platform automating assessment across 5 communication parameters. Reduced review time from 30 minutes to 12 minutes (60% improvement).

**Stack:** Node.js · Express.js · React.js · REST APIs

---

### ✈️ Ghoomo Firoo — Full-Stack Travel Booking Platform
Full-stack travel booking platform with live flight/hotel search, automated itinerary builder, and budget optimization engine using Amadeus APIs with OAuth2 authentication.

**Stack:** Java · Spring Boot · Spring Data JPA · MySQL · Amadeus API

---

## 🛠️ Deployment

This portfolio is optimized for deployment on:

| Platform | Command |
|---|---|
| **Vercel** | `vercel --prod` |
| **Netlify** | Drag & drop `dist/` folder |
| **GitHub Pages** | Use `gh-pages` npm package |

---

## 📬 Contact

| Channel | Details |
|---|---|
| **Email** | mehul09mayank@gmail.com |
| **Phone** | +91 8102 208365 |
| **LinkedIn** | [linkedin.com/in/mehul09](https://linkedin.com/in/mehul09) |
| **GitHub** | [github.com/mehul09](https://github.com/mehul09) |
| **Location** | Chandigarh, Punjab, India |

---

## 🏆 Achievements

- 🥉 **2nd Runner-Up** — NIT Hamirpur Hackathon
- 🏅 **3rd Position** — Chase the Code 2.0 Hackathon

---

## 📜 License

This project is open source and available under the [MIT License](./LICENSE).

---

<p align="center">
  Engineered with React.js, TypeScript & Cyber Space Aesthetics ⚡<br/>
  © 2025 Mehul Mayank. All rights reserved.
</p>
