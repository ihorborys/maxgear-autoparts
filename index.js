/* empty css                      */(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const u=";",f=document.querySelector("#search");window.onload=function(){setTimeout(function(){document.getElementById("loader").style.display="none",document.getElementById("content").style.display="block"},2e3)};const p=document.querySelector(".search.button"),d=document.querySelector(".modal-overlay");p.addEventListener("click",t=>{d.classList.add("active")});const m=document.querySelector(".modal-close-btn");m.addEventListener("click",t=>{d.classList.remove("active")});const y="https://github.com/ihorborys/vite-maxgear-autoparts/tree/86455c839d2db44960f1e269f32a3f95a232cbe8/src/prices/PRICE AP_GDANSK_MOTOROL_ 13.01.2024_R_utf_8.csv",g=()=>{fetch(y).then(t=>t.text()).then(t=>h(t)).catch(t=>alert("Error loading file: "+t))},l=[],h=t=>{const r=t.split(/\r?\n/);r.shift(),r.forEach(s=>{const e=s.split(u);l.push({code:e[0],unicode:e[1],brand:e[2],desc:e[3],qty:e[4],price:e[5],store:e[6]})}),console.log("Дані завантажені:",l)};function i(t){return t.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")}let a;f.addEventListener("input",t=>{clearTimeout(a),a=setTimeout(()=>{if(l.length===0){alert("Зачекайте, будь ласка, дані завантажуються");return}if(t.target.value){const r=i(t.target.value);console.log(r);const s=l.filter(e=>e.code&&i(e.code)===r||e.unicode&&i(e.unicode)===r||e.brand&&i(e.brand)===r);console.log(s),v(s)}},800)});const b={code:"Код",unicode:"Юнікод",brand:"Бренд",desc:"Опис",price:"Ціна, Є",qty:"Кількість",store:"Склад"};function v(t){console.log(typeof t);const r=document.getElementById("results");if(!r){console.error("Елемент #results не знайдено.");return}if(!Array.isArray(t)){alert("Введіть дані для пошуку");return}const s=10;r.innerHTML=t.slice(0,s).map(e=>`
      <div class="searched-item"">
        ${typeof e=="object"&&e!==null?Object.entries(e).map(([o,n])=>`<p><strong>${b[o]||o}:</strong> &nbsp ${n}</p>`).join(""):`<p>${e}</p>`}
      </div>
    `).join("")}g();
//# sourceMappingURL=index.js.map
