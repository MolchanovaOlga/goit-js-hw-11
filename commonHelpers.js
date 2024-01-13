import{i as m,S as d}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="/goit-js-hw-11/assets/bi_x-octagon-aed43fc7.svg",l=document.querySelector("form"),g=document.querySelector("textarea"),c=document.querySelector(".gallery"),n=document.querySelector("span");l.addEventListener("submit",o=>{o.preventDefault(),c.textContent="";const s=g.value;p(s),l.reset()});function p(o){n.classList.add("loader");const a=`https://pixabay.com/api/?${new URLSearchParams({key:"41764698-0ccaaf72f9cf319226b6a04c5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(a).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{n.classList.remove("loader");let e=r.hits;if(e.length==0){y();return}L(e)}).catch(r=>console.log(r))}function y(){m.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:h})}function L(o){const s=o.map(({webformatURL:a,largeImageURL:r,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${r}">
            <img
                class="gallery-image"
                src="${a}"
                alt="${e}"
            />
            </a>
            <ul class="statistics">
                <li class="statistics-item">
                    <h2>Likes</h2>
                    <p>${t}</p>
                </li>
                <li class="statistics-item">
                    <h2>Views</h2>
                    <p>${i}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${u}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${f}</p>
                </li>
            </ul>
        </li>
        `).join("");c.insertAdjacentHTML("beforeend",s),new d(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
