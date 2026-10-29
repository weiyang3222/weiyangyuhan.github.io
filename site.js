(function () {
  'use strict';
  const data = window.ACADEMIC_PROFILE || {};
  const byId = id => document.getElementById(id);
  const set = (id, value) => { const el = byId(id); if (el) el.textContent = value || ''; };
  const node = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined && text !== null) el.textContent = String(text);
    return el;
  };
  const link = value => {
    if (typeof value !== 'string' || !value.trim()) return '';
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  const file = value => typeof value === 'string' && (/^assets\/[a-zA-Z0-9_.\/-]+$/.test(value) || /^data:image\/(jpeg|png|webp);base64,/.test(value)) ? value : '';
  const doiUrl = value => typeof value === 'string' && /^10\.[0-9]{4,9}\/[a-zA-Z0-9.()_\-;:/]+$/.test(value.trim()) ? 'https://doi.org/' + encodeURI(value.trim()) : '';
  function scienceText(el, value) {
    const text = String(value || '');
    const pattern = /(La0\.6Sr0\.4FeO3[−-]δ|NdNiO3)/g;
    let start = 0;
    for (const match of text.matchAll(pattern)) {
      el.append(document.createTextNode(text.slice(start, match.index)));
      if (match[0] === 'NdNiO3') el.append(document.createTextNode('NdNiO'), node('sub', '', '3'));
      else el.append(document.createTextNode('La'), node('sub', '', '0.6'), document.createTextNode('Sr'), node('sub', '', '0.4'), document.createTextNode('FeO'), node('sub', '', match[0].slice(13)));
      start = match.index + match[0].length;
    }
    el.append(document.createTextNode(text.slice(start)));
  }
  const nav = byId('mainNav');
  const toggle = byId('navToggle');
  function closeNav() { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeNav(); toggle.focus(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.topbar')) closeNav(); });
  set('heroName', data.name || 'Academic Researcher');
  const headline = String(data.headline || '');
  const highlighted = headline.match(/ion dynamics/i);
  byId('headline').replaceChildren();
  if (highlighted) {
    const pos = highlighted.index;
    byId('headline').append(document.createTextNode(headline.slice(0, pos)), node('em', '', highlighted[0]), document.createTextNode(headline.slice(pos + highlighted[0].length)));
  } else set('headline', headline);
  const intro = String(data.introduction || '');
  const researchIntro = intro.match(/My research focuses on (.*)/i);
  set('introduction', researchIntro ? researchIntro[1].charAt(0).toUpperCase() + researchIntro[1].slice(1) : intro);
  set('heroPosition', data.position);
  set('heroLocation', data.location);
  set('aboutText', intro);
  set('aboutPosition', data.position);
  set('aboutInstitution', data.institution);
  set('aboutLab', data.lab);
  set('aboutAdvisor', data.advisor);
  set('footerName', data.name);
  const photo = file(data.photo);
  if (photo) {
    const image = byId('profilePhoto');
    image.src = photo;
    image.alt = 'Portrait of ' + (data.name || 'the researcher');
    image.hidden = false;
    image.parentElement.hidden = false;
    const card = image.closest('.hero-card');
    card.classList.add('has-photo');
    card.querySelector('.figure-bottom').replaceChildren(node('span', '', data.name), node('span', '', data.lab));
    image.addEventListener('error', () => { card.classList.remove('has-photo'); image.parentElement.hidden = true; card.querySelector('.figure-bottom').replaceChildren(node('span', '', 'Perovskite protonation'), node('span', '', 'Schematic')); });
  }
  const cv = file(data.cv);
  for (const id of ['navCv', 'footerCv']) { if (cv) byId(id).href = cv; else byId(id).hidden = true; }
  for (const [i, entry] of (data.research || []).entries()) {
    const article = node('article', 'research-card');
    const rawCategory = String(entry.tag || 'Research').replace(/^\d+\s*\/\s*/, '');
    const category = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1).toLowerCase();
    article.append(node('div', 'research-index', String(i + 1).padStart(2, '0') + ' / ' + category), node('h3', '', entry.title), node('p', '', entry.description));
    byId('researchGrid').append(article);
  }
  const papers = (data.publications || []).slice().sort((a, b) => Number(b.year) - Number(a.year));
  set('pubCount', papers.length);
  papers.forEach((paper, i) => {
    const article = node('article', 'pub-record');
    article.append(node('div', 'pub-num', String(i + 1).padStart(2, '0')));
    const body = node('div', 'pub-content');
    const meta = node('div', 'pub-meta');
    meta.append(node('span', 'pub-year', paper.year), node('span', 'pub-journal', paper.journal));
    if (paper.featured) meta.append(node('span', 'feature-mark', 'Selected'));
    const title = node('h3', 'pub-title');
    scienceText(title, paper.title);
    body.append(meta, title);
    const authors = node('p', 'pub-authors');
    String(paper.authors || '').split(/(Bin Zhao)/g).forEach(chunk => authors.append(chunk === 'Bin Zhao' ? node('strong', '', chunk) : document.createTextNode(chunk)));
    body.append(authors, node('p', 'pub-citation', paper.citation));
    const doi = doiUrl(paper.doi);
    if (doi) {
      const a = node('a', 'doi-link', 'View publication ↗');
      a.href = doi; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.setAttribute('aria-label', 'View publication: ' + paper.title);
      body.append(a);
    }
    article.append(body); byId('publicationList').append(article);
  });
  (data.education || []).forEach(entry => {
    const item = node('div', 'timeline-item');
    item.append(node('div', 'time', entry.period), node('h4', '', entry.school), node('p', 'degree', entry.degree), node('p', 'muted', entry.detail));
    byId('educationList').append(item);
  });
  (data.awards || []).forEach(entry => {
    const item = node('div', 'award-item');
    item.append(node('div', 'award-year', entry.year));
    const detail = node('div'); detail.append(node('h4', '', entry.title), node('p', 'muted', entry.organization));
    item.append(detail); byId('awardList').append(item);
  });
  set('patentTitle', data.patent?.title);
  set('patentDetail', [data.patent?.inventors, data.patent?.detail].filter(Boolean).join(' · '));
  set('conferenceText', data.conference);
  (data.skills || []).forEach(skill => byId('skillsList').append(node('span', 'skill-tag', skill)));
  const email = String(data.email || '').trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { byId('emailLink').href = 'mailto:' + email; byId('emailLink').textContent = email + ' ↗'; }
  else byId('emailLink').hidden = true;
  [['Google Scholar', data.googleScholar], ['ORCID', data.orcid], ['GitHub', data.github]].forEach(([label, value]) => {
    const address = link(value); if (!address) return;
    const a = node('a', '', label + ' ↗'); a.href = address; a.target = '_blank'; a.rel = 'noopener noreferrer'; byId('extraLinks').append(a);
  });
  if (!byId('extraLinks').children.length) byId('extraLinks').hidden = true;
  set('currentYear', new Date().getFullYear());
  if ('IntersectionObserver' in window) {
    const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        navLinks.forEach(a => { const current = a.hash === '#' + entry.target.id; a.classList.toggle('active', current); if (current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
      }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }
})();

