(function(){
  'use strict';
  const data=window.ACADEMIC_PROFILE||{};
  const byId=id=>document.getElementById(id);
  const set=(id,value)=>{const e=byId(id); if(e)e.textContent=value||'';};
  const node=(tag,className,text)=>{const e=document.createElement(tag);if(className)e.className=className;if(text!==undefined&&text!==null)e.textContent=String(text);return e;};
  const link=(url)=>{if(typeof url!=='string'||!url.trim())return '';try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:'';}catch{return '';}};
  const file=(value)=> typeof value==='string' && (/^assets\/[a-zA-Z0-9_.\/-]+$/.test(value)||/^data:image\/(jpeg|png|webp);base64,/.test(value)) ? value : '';
  const urlDoi=(doi)=> typeof doi==='string'&&/^10\.[0-9]{4,9}\/[a-zA-Z0-9.()_\-;:/]+$/.test(doi.trim())? 'https://doi.org/'+encodeURI(doi.trim()):'';
  const nav=byId('mainNav');const toggle=byId('navToggle');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded);});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}));}
  set('heroName',String(data.name||'Academic Researcher').toUpperCase());
  set('headline',data.headline);
  set('introduction',data.introduction);
  set('heroPosition',data.position);
  set('heroLocation',data.location);
  set('aboutText',data.introduction);
  set('aboutPosition',data.position);
  set('aboutInstitution',data.institution);
  set('aboutLab',data.lab);
  set('aboutAdvisor',data.advisor);
  set('footerName',data.name);
  set('photoInitials',data.initials||'BZ');
  const profilePhoto=byId('profilePhoto');const photo=file(data.photo);if(photo){profilePhoto.src=photo;profilePhoto.hidden=false;byId('photoInitials').hidden=true;}
  const cv=file(data.cv);if(cv){byId('navCv').href=cv;byId('footerCv').href=cv;}else{byId('navCv').hidden=true;byId('footerCv').hidden=true;}
  const list=byId('researchGrid');(data.research||[]).forEach((r,i)=>{const article=node('article','research-card');article.append(node('div','research-index',String(i+1).padStart(2,'0')+' / '+(r.tag||'RESEARCH')),node('div','research-graphic rg-'+i),node('h3','',r.title),node('p','',r.description));list.append(article);});
  const publications=(data.publications||[]).slice().sort((a,b)=>Number(b.year)-Number(a.year));set('pubCount',publications.length);
  const pubList=byId('publicationList');publications.forEach((p,i)=>{const a=node('article','pub-record');a.append(node('div','pub-num',String(i+1).padStart(2,'0')));const body=node('div','pub-content');const meta=node('div','pub-meta');meta.append(node('span','pub-year',p.year),node('span','pub-journal',p.journal));if(p.featured)meta.append(node('span','feature-mark','SELECTED'));body.append(meta,node('h3','pub-title',p.title));const authors=node('p','pub-authors');const chunks=String(p.authors||'').split(/(Bin Zhao)/g);chunks.forEach(c=>authors.append(c==='Bin Zhao'?node('strong','',c):document.createTextNode(c)));body.append(authors,node('p','pub-citation',p.citation));const doi=urlDoi(p.doi);if(doi){const d=node('a','doi-link','VIEW PUBLICATION ↗');d.href=doi;d.target='_blank';d.rel='noopener noreferrer';body.append(d);}a.append(body);pubList.append(a);});
  const educationList=byId('educationList');(data.education||[]).forEach(x=>{const e=node('div','timeline-item');e.append(node('div','time',x.period),node('h4','',x.school),node('p','degree',x.degree),node('p','muted',x.detail));educationList.append(e);});
  const awardList=byId('awardList');(data.awards||[]).forEach(x=>{const e=node('div','award-item');e.append(node('div','award-year',x.year));const b=node('div');b.append(node('h4','',x.title),node('p','muted',x.organization));e.append(b);awardList.append(e);});
  set('patentTitle',data.patent?.title);set('patentDetail',String(data.patent?.inventors||'')+' · '+String(data.patent?.detail||''));set('conferenceText',data.conference);
  (data.skills||[]).forEach(x=>byId('skillsList').append(node('span','skill-tag',x)));
  const email=(data.email||'').trim();if(email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){const e=byId('emailLink');e.href='mailto:'+email;e.textContent=email+' ↗';}else byId('emailLink').hidden=true;
  [['Google Scholar',data.googleScholar],['ORCID',data.orcid],['GitHub',data.github]].forEach(([label,u])=>{const address=link(u);if(!address)return;const a=node('a','',label+' ↗');a.href=address;a.rel='noopener noreferrer';a.target='_blank';byId('extraLinks').append(a);});
  set('currentYear',new Date().getFullYear());
})();
