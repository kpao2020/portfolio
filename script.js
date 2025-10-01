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
