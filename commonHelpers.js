import{i as c,S as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f="/goit-js-hw-11/assets/bi_x-octagon-aed43fc7.svg",i=document.querySelector("form"),u=document.querySelector("textarea"),m=document.querySelector(".gallery");i.addEventListener("submit",a=>{a.preventDefault();const o=u.value;g(o),i.reset()});function g(a){const n=`https://pixabay.com/api/?${new URLSearchParams({key:"41764698-0ccaaf72f9cf319226b6a04c5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{let e=t.hits;if(e.length==0){d();return}y(e)}).catch(t=>console.log(t))}function d(){c.error({message:"Sorry, there are no images matching<br/>your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",iconUrl:f})}function y(a){const o=a.map(({webformatURL:n,largeImageURL:t,tags:e,likes:r,views:s,comments:h,downloads:p})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t}">
            <img
                class="gallery-image"
                src="${n}"
                alt="${e}"
            />
            </a>
        </li>
        `).join("");m.insertAdjacentHTML("beforeend",o),new l(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
