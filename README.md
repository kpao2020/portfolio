# Live Link
https://kpao2020.github.io/portfolio

# Personal Portfolio — v1.3.5

A dark-mode, techy personal portfolio built with **HTML + Bootstrap + custom CSS/JS** and deployed on **GitHub Pages**.  
Includes light/dark theme toggle, subtle animations, project grid, skills lists, and a footer-style contact section.

---

## ✨ Version History

### v1.3.5 (Latest)
- **Dark-mode TOC contrast fixed** on `case-study.html` sidebar (user implementation). Heading “On this page” and `.toc-link` states now pass contrast in dark theme.
- Case study copy polished: references **face-api.js**, **p5.js**, and **p5play** in the hero blurb.
- Replaced the prototype image placeholder with a real asset (`/bubble-game/assets/proto_img.png`) in the Solution section.
- Synced **project plan** and **project log** with this update set; prepared deploy checklist.

### v1.3.4
- Reviewed uploads; prepared precise **line-numbered fixes** for `case-study.html` active link and navbar.
- Confirmed CSS variables and active pill styles exist in `style.css`; suggested HTML fix for duplicate `class` attr.
- Updated **project plan** and **project log** per instructions.

### v1.3.3
- **Distinct active highlight** for navbar (Option A: lighter primary) with subtle background pill.
- **Sidebar TOC** colors now match site theme variables for dark/light.
- **Hyperlinks** use site accent color (var(--primary)) with hover to var(--primary-hover).
- Updated **project plan** and **log** per latest instructions.

### v1.3.2
- Fixed **navbar markup** on `case-study.html` (single `class` attr; active link state).
- Replaced leftover `{proto_img}` with a real image URL.
- Verified **TOC one-link-per-line** via CSS and removed any inline styles.
- Updated **project plan** and **project log** per instructions.

### v1.3.1 
- Added **navbar active highlighting** for current page/section.
- Cleaned **case-study.html**: matched navbar, removed inline styles, fixed TOC one-link-per-line, and moved styles into `style.css`.
- Updated **script.js** to auto-highlight nav items.

### v1.3.0
- Fixed **`.text-body-secondary` conflicts** by scoping card and footer text separately.
- Improved **dark mode readability**:  
  - Project card text is lighter (`#f3f4f6`).  
  - Footer copyright is bright (`#f9fafb`).  
- Consolidated `style.css` into logical groups for easier maintenance.

### v1.2.0
- Unified dark/light contrast strategy (cards, footer, navbar, hero).
- Fixed **Hero CTA button** (gradient teal → blue).
- Optimized **Hero section spacing** (full height minus navbar).
- Enhanced **scroll reveal animations** (fade/slide in).
- Added `.reveal` to About, Skills, and Footer.

### v1.1.0
- Dark-first design with **light/dark toggle**.
- Sections: **Hero**, **About**, **Projects**, **Skills**, **Footer Contact**.
- Subtle **reveal-on-scroll** animations.
- **Bootstrap 5** layout & components.
- **Devicon** + **Font Awesome** icons.
- Ready for **GitHub Pages**.

---

## 🗂 Structure

```
index.html      # Main page
style.css       # Custom theme + animations
script.js       # Theme toggle + reveal-on-scroll
README.md       # This file
case-study.html # Dedicated case study
```

---

## 🚀 Getting Started

1. Create a new GitHub repo named `<your-username>.github.io` (public).
2. Upload these files (or drag-and-drop via GitHub web UI).
3. Visit `https://<your-username>.github.io` after a minute or two.

**Customizing**
- Update `mailto:` with your email.
- Replace social `href="#"` with your GitHub/LinkedIn/Discord links.
- Add real project screenshots (`/assets/preview.png`) in each repo.

---
## Case Study

A dedicated case study page is available at `case-study.html` (linked from the navbar).

---
## 🧩 Projects Showcased
- **Popping Bubbles 🎮** → AI-driven browser game (p5.js + face-api.js).
- **Makey Makey Game 🕹️** → Hardware-integrated team project.
- **Advanced Web Design 📄** → Solo frontend design project.
- **Bunny Cards Game 🐇🃏** → Two-player card game collab.
- **AP-Story 📖 (Archived)** → Older narrative game, repo reference only.

---

## 👤 Credits
- **Author:** Ken Pao  
- **Co-pilot:** ChatGPT v5

---

## 📝 License
Educational purpose.

---

> “Blending code, creativity, and AI to create interactive browser games.”