
// SPLASH
const splash=document.getElementById('splash');
if(splash){splash.addEventListener('click',()=>splash.classList.add('hidden'));setTimeout(()=>splash.classList.add('hidden'),3500);}
// THEME
const themeBtn=document.getElementById('themeBtn');
const root=document.documentElement;
const setTheme=t=>{root.dataset.theme=t;themeBtn.textContent=t==='dark'?'☀':'☾';localStorage.setItem('massiri-theme',t);};
setTheme(localStorage.getItem('massiri-theme')||'light');
themeBtn.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
// SEARCH
const q=document.getElementById('q');
const cnt=document.getElementById('cnt');
const cards=[...document.querySelectorAll('.lot-card')];
const total=cards.length;
const apply=()=>{const v=q.value.trim().toLowerCase();let n=0;cards.forEach(c=>{const txt=c.textContent.toLowerCase();const hit=!v||txt.includes(v);c.classList.toggle('hidden',!hit);if(hit)n++;});cnt.textContent=v?`${n}/${total}`:`${total} lots`;};
q.addEventListener('input',apply);apply();
