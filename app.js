// Lightweight, dependency-free enhancement. The site works without JavaScript.
(function () {
  const nav = document.querySelector('.primary-nav');
  const menu = document.querySelector('.menu-button');
  if (nav && menu) {
    menu.addEventListener('click', function () {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const themeButtons = document.querySelectorAll('.theme-toggle');
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('academic-theme');
    if (saved === 'dark' || saved === 'light') root.dataset.theme = saved;
  } catch (_) { /* Local file/private browsing may block storage. */ }
  themeButtons.forEach(btn => btn.addEventListener('click', () => {
    const current = root.dataset.theme === 'dark' ? 'dark' : 'light';
    const next = current === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('academic-theme', next); } catch (_) {}
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const bibtex = `@article{Zhao2026AerobicDehydrogenation,
  author = {Zhao, Bin and Wei, Luhan and Wang, Xi and Xu, Zihan and Lu, Ying and Zheng, Jieping and Huang, Lingzhi and Lu, Qiyang},
  title = {Aerobic Dehydrogenation by Coupled Electrochemical Reactions Governs Room-Temperature Proton Defect Chemistry in Functional Oxides},
  journal = {Journal of the American Chemical Society},
  year = {2026},
  volume = {148},
  number = {40},
  pages = {43401--43410},
  doi = {10.1021/jacs.6c12969}
}`;
  document.querySelectorAll('.copy-bibtex').forEach(btn => btn.addEventListener('click', async () => {
    const status = btn.closest('.publication-record-content')?.querySelector('.copy-message');
    try {
      await navigator.clipboard.writeText(bibtex);
      if (status) status.textContent = 'BibTeX copied to clipboard.';
    } catch (_) {
      if (status) status.textContent = 'Clipboard unavailable here. Open this page over HTTPS, then try again.';
    }
  }));
})();
