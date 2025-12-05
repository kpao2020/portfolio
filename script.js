// Theme toggle with localStorage
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Default to dark unless user or system says otherwise
  if (stored) {
    root.setAttribute('data-theme', stored);
  } else {
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'dark');
  }

  toggleBtn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggleBtn.innerHTML = next === 'dark'
      ? '<i class="fa-solid fa-moon me-1"></i><span class="d-none d-md-inline">Theme</span>'
      : '<i class="fa-solid fa-sun me-1"></i><span class="d-none d-md-inline">Theme</span>';
  });
})();

// IntersectionObserver for subtle reveal animations
(function () {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  items.forEach((el) => observer.observe(el));
})();

// --- Active nav link highlighting ---
(function () {
  const links = document.querySelectorAll('.navbar .nav-link');
  const path = location.pathname.split('/').pop() || 'index.html';
  // If on case-study.html, force Case Study link active
  links.forEach((a) => {
    const href = a.getAttribute('href');
    if (!href) return;
    const file = href.includes('#') ? href.split('#')[0] : href;
    const isCaseStudy = file === 'case-study.html' && path === 'case-study.html';
    if (isCaseStudy) {
      a.classList.add('active');
    }
  });

  // On index, highlight section as you scroll
  if (path === '' || path === 'index.html' || hrefMatchesRoot()) {
    const sectionIds = ['hero','about','projects','skills','contact'];
    const map = new Map();
    links.forEach((a)=>{
      const h = a.getAttribute('href');
      if (h && h.startsWith('#')) map.set(h.substring(1), a);
    });
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        const id = entry.target.id;
        const nav = map.get(id);
        if (!nav) return;
        if (entry.isIntersecting) {
          map.forEach((navLink)=> navLink.classList.remove('active'));
          nav.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.0 });
    sectionIds.forEach(id=>{
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  function hrefMatchesRoot() {
    // Treat "/" as index
    return location.pathname === '/' || location.pathname.endsWith('/portfolio') || location.pathname.endsWith('/portfolio/');
  }
})();
