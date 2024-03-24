import{S as l,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=document.querySelector(".form"),f=document.querySelector(".search-input"),p=new l(".gallery a",{captionsData:"alt",captionDelay:250,close:!0,enableKeyboard:!0,docClose:!0});d.addEventListener("submit",m);function m(s){s.preventDefault(),c(!0);const o=f.value;o?h(o).then(t=>{if(c(!1),t.hits.length===0)a("Sorry, there are no images matching your search query. Please try again!");else{const n=t.hits;y(n),p.refresh()}}).catch(t=>{a("Something wrong=("),c(!1)}):a("Value cannot be empty")}const a=s=>{u.error({title:"Error",message:s,backgroundColor:"#EF4040",messageColor:"#FFFFFF",maxWidth:300,timeout:2e3,progressBar:!1,position:"topRight",transitionIn:"bounceInRight",transitionOut:"fadeOutLeft",messageSize:12})};function h(s){const o="https://pixabay.com/api/",n={key:"43042666-e07e8410a021eff335b7f491d",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},e=new URLSearchParams(n),r=`${o}?${e}`;return fetch(r).then(i=>i.json())}function y(s){const o=document.querySelector(".gallery");o.innerHTML=s.map(t=>`<li class="list-item"><a href="${t.largeImageURL}">
        <img class="item-img" src="${t.webformatURL}" alt="${t.tags}"></a>
        <div class="container">
        <h3 class="title">Likes</h3>
      <p>${t.likes}</p></div >
      <div class="container">
        <h3 class="title">Views</h3>
      <p>${t.views}</p></div >
      <div class="container">
        <h3 class="title">Comments</h3>
      <p>${t.comments}</p></div >
      <div class="container">
        <h3 class="title">Downloads</h3>
      <p class="info">${t.downloads}</p></div >
        </li>`).join("")}const c=s=>{const o=document.querySelector(".loader");o.style.display=s?"block":"none"};
//# sourceMappingURL=commonHelpers.js.map
