# Live Link
https://kpao2020.github.io/portfolio

# Personal Portfolio — v1.4.5

A dark-mode, techy personal portfolio built with **HTML + Bootstrap + custom CSS/JS** and deployed on **GitHub Pages**.  
Includes light/dark theme toggle, subtle animations, project grid, skills lists, and a footer-style contact section.

---

## ✨ Version History

### v1.4.5
- Improved alt text across multiple case-study images for accessibility and clarity.
- Ensured every artifact-gallery row uses consistent `.artifact-gallery` class for unified caption alignment.
- Fixed case-study TOC scroll-offset using `scroll-margin-top` so section titles no longer hide behind the sticky navbar.
- Updated styles for dark-theme `.btn-outline-primary` buttons to ensure consistent black background + purple/white hover across case-study hero and caption buttons.

### v1.4.4
- Styled the first case-study “Live Game” caption link as a `btn btn-sm btn-outline-primary` button so it visually matches the project card CTAs.
- Tagged the Development Journey artifact grids with `.artifact-gallery` and added a `min-height` to their `<figcaption>` elements to visually align caption bands across tiles.
- Reviewed case-study layout after these tweaks to ensure galleries, captions, and buttons remain consistent with the main portfolio styling.

### v1.4.3
- Matched the Hero “Read Case Study” CTA to the project card buttons using a `btn btn-sm btn-outline-primary` style, so it looks consistent across the site.
- Added a dark-theme override for `.btn-outline-primary` so outline buttons (including the Hero and case study buttons) have a subtle black background by default and turn solid purple with white text on hover.
- Planned case-study UI updates: styling the first “Live Game” caption link as a button and aligning caption heights in artifact galleries for a cleaner grid layout.

### v1.4.2
- Added final visual refinements to the image system in `case-study.html`, using `.img-fixed` for consistent gallery sizing while preserving captions.
- Ensured phone screenshots (e.g., leaderboard) display proportionally using the `.phone-screenshot` class.
- Reviewed full gallery layout and confirmed consistent behavior across all sections.
- Synced project_log and project_plan with latest changes.

### v1.4.1
- Expanded the **Popping Bubbles** case study with a full image gallery (research artifacts, development journey, solution, blueprint, reflection).
- Normalized gallery image sizing with `.img-frame` and `.ks-gallery` so mixed-aspect screenshots still align visually.
- Ensured every screenshot has a descriptive `<figcaption>` for better accessibility and context.

### v1.4.0
- add screenshots to various sections and adjust layout

### v1.3.6
- add a **development journey** section

### v1.3.5
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