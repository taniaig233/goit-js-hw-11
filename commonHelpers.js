import{i as f,S as h}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}function m(s){const r="https://pixabay.com/api/",o="42680583-e819b638960e20d04367e2a0d";s.includes(" ")&&s.replace(/\s+/g,"+");const i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const u=document.querySelector(".form-search"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let n="";l.style.display="none";u.addEventListener("submit",y);function y(s){if(s.preventDefault(),c.innerHTML="",l.style.display="block",n=s.target.elements.search.value.trim(),n===""){alert("Please, fill the main field");return}m(n).then(r=>{l.style.display="none",r.hits.length===0&&f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML=p(r.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),u.reset()}).catch(r=>{l.style.display="none",console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
