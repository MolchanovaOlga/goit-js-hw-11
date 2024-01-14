import{i as h,S as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/bi_x-octagon-aed43fc7.svg",n=document.querySelector("form"),p=document.querySelector("textarea"),c=document.querySelector(".gallery"),l=document.querySelector("span");n.addEventListener("submit",o=>{o.preventDefault(),c.textContent="";const s=p.value;y(s),n.reset()});function y(o){l.classList.add("loader");const i=`https://pixabay.com/api/?${new URLSearchParams({key:"41764698-0ccaaf72f9cf319226b6a04c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{l.classList.remove("loader");let e=r.hits;if(e.length==0){L();return}b(e)}).catch(r=>console.log(r))}function L(){h.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:g})}function b(o){const s=o.map(({webformatURL:r,largeImageURL:e,tags:t,likes:a,views:u,comments:f,downloads:m})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${t}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${a}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${u}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${f}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${m}</p>
                </li>
            </ul>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
