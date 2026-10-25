'use strict';
document.documentElement.classList.add('js');
const menu=document.querySelector('[data-menu]'), nav=document.getElementById('primary-nav');
if(menu&&nav){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus()}})}
const form=document.getElementById('filters');
if(form){
 const fields=['q','kind','access','availability'].map(id=>document.getElementById(id));
 const cards=[...document.querySelectorAll('[data-card]')]; const params=new URLSearchParams(location.search);
 for(const el of fields){const v=params.get(el.id);if(v!==null&&(el.tagName==='INPUT'||[...el.options].some(o=>o.value===v)))el.value=v.slice(0,160)}
 function filter(write=true){
  const [q,k,a,s]=fields.map(el=>el.value);const words=q.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);let count=0;
  for(const card of cards){const match=words.every(w=>card.dataset.search.includes(w))&&(!k||card.dataset.kind===k)&&(!a||card.dataset.access===a)&&(!s||card.dataset.availability===s);card.hidden=!match;if(match)count++}
  document.getElementById('result-count').textContent=`${count} of ${cards.length} components`;document.getElementById('empty').hidden=count!==0;
  if(write){const p=new URLSearchParams();for(const el of fields)if(el.value)p.set(el.id,el.value);try{history.replaceState(null,'',location.pathname+(p.size?'?'+p:'')+location.hash)}catch{}}
 }
 form.addEventListener('submit',e=>{e.preventDefault();filter()});for(const el of fields)el.addEventListener(el.id==='q'?'input':'change',()=>filter());
 document.getElementById('reset-filters').addEventListener('click',()=>{for(const el of fields)el.value='';filter();fields[0].focus()});filter(false);
}

/* ===== Gorazana design system — dropdowns, theme switch, side dock, back-to-top ===== */
(function(){
 'use strict';
 var SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>';
 var MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 019.5 4 7 7 0 1020 14.5z"/></svg>';
 var HEART='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20s-7-4.4-9.3-8.5C1 8.2 2.8 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.2 0 5 3.2 3.3 6.5C19 15.6 12 20 12 20z"/></svg>';
 var GIT='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="9" r="2.4"/><path d="M6 8.4v7.2M8.2 7.2l7.6 1.4M18 11.4c0 4-5.4 2.6-5.4 6.6"/></svg>';
 var GH='<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 00-2.5 15.6c.4 0 .5-.2.5-.4v-1.4c-2 .4-2.5-.5-2.7-1 0-.1-.5-1-.9-1.2-.3-.2-.8-.6 0-.6.7 0 1.2.7 1.4 1 .8 1.3 2 1 2.6.7 0-.6.3-1 .5-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1 0-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.4 7.4 0 014 0c1.5-1 2.2-.8 2.2-.8.4 1.1.1 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3.1-1.9 3.8-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 008 0z"/></svg>';
 var UP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M6 12l6-6 6 6"/></svg>';

 /* theme: default light; honor saved choice */
 var KEY='gorazana-theme', root=document.documentElement, saved=null;
 try{saved=localStorage.getItem(KEY);}catch(e){}
 if(saved==='dark'||saved==='light')root.setAttribute('data-theme',saved);
 function curTheme(){return root.getAttribute('data-theme')==='dark'?'dark':'light';}
 function toggleTheme(){var n=curTheme()==='dark'?'light':'dark';root.setAttribute('data-theme',n);
  try{localStorage.setItem(KEY,n);}catch(e){}var b=document.getElementById('themeBtn');if(b){b.innerHTML=n==='dark'?SUN:MOON;b.setAttribute('aria-label',n==='dark'?'Switch to light':'Switch to dark');}}

 /* dropdown menus */
 function initMega(){
  document.querySelectorAll('.has-mega .megabtn').forEach(function(b){
   b.addEventListener('click',function(e){e.preventDefault();var p=b.parentElement;
    document.querySelectorAll('.has-mega.open').forEach(function(o){if(o!==p)o.classList.remove('open');});
    var open=p.classList.toggle('open');b.setAttribute('aria-expanded',String(open));});
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.has-mega'))
   document.querySelectorAll('.has-mega.open').forEach(function(p){p.classList.remove('open');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')
   document.querySelectorAll('.has-mega.open').forEach(function(p){p.classList.remove('open');});});
 }

 /* side dock + back-to-top */
 function initTools(){
  var dock=document.createElement('div');dock.className='dock';dock.setAttribute('aria-label','Site tools');
  var tb=document.createElement('button');tb.id='themeBtn';tb.type='button';
  tb.setAttribute('aria-label',curTheme()==='dark'?'Switch to light':'Switch to dark');
  tb.innerHTML=curTheme()==='dark'?SUN:MOON;tb.addEventListener('click',toggleTheme);
  var sep=document.createElement('div');sep.className='sep';
  function link(href,label,svg){var a=document.createElement('a');a.href=href;a.title=label;
   a.setAttribute('aria-label',label);a.innerHTML=svg;return a;}
  dock.appendChild(tb);dock.appendChild(sep);
  dock.appendChild(link('https://github.com/sponsors/gorazana','Sponsor',HEART));
  dock.appendChild(link('/support.html','Contribute',GIT));
  dock.appendChild(link('https://github.com/gorazana','GitHub',GH));
  document.body.appendChild(dock);
  var top=document.createElement('button');top.type='button';top.className='backtop';
  top.title='Back to top';top.setAttribute('aria-label','Back to top');top.innerHTML=UP;
  top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  document.body.appendChild(top);
  var onScroll=function(){top.classList.toggle('show',window.scrollY>400);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
 }

 if(document.readyState!=='loading'){initMega();initTools();}
 else document.addEventListener('DOMContentLoaded',function(){initMega();initTools();});
})();
