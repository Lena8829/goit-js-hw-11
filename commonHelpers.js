import{S as m,i as p}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(t){if(t.ep)return;t.ep=!0;const c=n(t);fetch(t.href,c)}})();async function h(r){const n=`https://pixabay.com/api/?key=43437392-3f8254e7ae10b5746fbcc03c6&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(o=>{if(!o.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.json()}).then(o=>(console.log(o),o.hits)).catch(o=>(console.log(o),[]))}const l=document.querySelector(".gallery"),d=new m(".gallery a");function f(r){l.innerHTML="",r.forEach(e=>{const n=y(e);n.addEventListener("click",()=>{g()}),l.appendChild(n)})}function y(r){const e=document.createElement("div");e.classList.add("card");const n=document.createElement("img");n.src=r.webformatURL,n.alt=r.tags;const o=document.createElement("a");o.href=r.largeImageURL,o.setAttribute("data-lightbox","gallery");const t=document.createElement("span");t.textContent=`Likes: ${r.likes}`;const c=document.createElement("span");c.textContent=`Views: ${r.views}`;const s=document.createElement("span");s.textContent=`Comments: ${r.comments}`;const i=document.createElement("span");return i.textContent=`Downloads: ${r.downloads}`,e.appendChild(n),e.appendChild(o),e.appendChild(t),e.appendChild(c),e.appendChild(s),e.appendChild(i),e}function g(r){d.open(),d.refresh()}const L=document.querySelector(".search-form"),b=document.querySelector(".search-input"),u=document.querySelector(".loader");L.addEventListener("submit",C);function C(r){r.preventDefault();const e=b.value.trim();e!==""&&(E(),h(e).then(n=>{a(),n.length===0?p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):f(n)}).catch(n=>{a(),console.error(n)}))}a();function E(){u.style.display="block"}function a(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map