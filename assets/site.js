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
