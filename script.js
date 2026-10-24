// HQ Creative — motion and interaction layer
const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('done'),850));
const glow=document.querySelector('.cursor-glow');
if(glow&&matchMedia('(pointer:fine)').matches)window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
const revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});revealEls.forEach(el=>observer.observe(el))}else revealEls.forEach(el=>el.classList.add('visible'));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===button));const category=button.dataset.filter;document.querySelectorAll('.work-card').forEach(card=>card.classList.toggle('hide',category!=='all'&&card.dataset.kind!==category))}));
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)*.12,dy=(e.clientY-r.top-r.height/2)*.16;el.style.transform=`translate(${dx}px,${dy}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
const navLinks=document.querySelectorAll('.nav-link');
if('IntersectionObserver'in window){const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-40% 0px -50% 0px'});document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section))}
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm')?.addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form),subject=encodeURIComponent('Project inquiry — '+data.get('service')),body=encodeURIComponent(`Hi HQ Creative,\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`);window.location.href=`mailto:haziqqazi314@gmail.com?subject=${subject}&body=${body}`});
