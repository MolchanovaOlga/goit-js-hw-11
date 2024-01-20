import{i as l,S as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c="/goit-js-hw-11/assets/bi_x-octagon-aed43fc7.svg",n=document.querySelector("form"),y=document.querySelector("textarea"),u=document.querySelector(".gallery"),f=document.querySelector("span");n.addEventListener("submit",s=>{s.preventDefault(),f.classList.add("loader"),u.textContent="";const o=y.value;p(o),n.reset()});function p(s){const i=`https://pixabay.com/api/?${new URLSearchParams({key:"41764698-0ccaaf72f9cf319226b6a04c5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(i).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{let e=r.hits;if(e.length==0){L();return}w(e)}).catch(r=>{console.log(r),b()}).finally(()=>f.classList.remove("loader"))}function L(){l.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:c})}function b(){l.error({message:"Sorry, an error occurred. Please try again later!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:c})}function w(s){const o=s.map(({webformatURL:r,largeImageURL:e,tags:t,likes:a,views:m,comments:g,downloads:h})=>`
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
                    <p>${m}</p>
                </li>
                <li class="statistics-item">
                    <h2>Comments</h2>
                    <p>${g}</p>
                </li>
                <li class="statistics-item">
                    <h2>Downloads</h2>
                    <p>${h}</p>
                </li>
            </ul>
        </li>
        `).join("");u.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
