(()=>{var n={148:(n,e,t)=>{const{genp:o,genDiv:r,listAppend:p}=t(555);n.exports={footer_bar_gen:function(){const n=r();return n.append(o("Kalawela's Restaurant, Copyright 2021")),n}}},61:(n,e,t)=>{const{genh1:o,genDiv:r,listAppend:p}=t(555);n.exports={header_bar_gen:function(){const n=r(),e=r(),t=r();t.appendChild(o("Home"));const c=r();c.appendChild(o("About"));const d=r();return d.appendChild(o("Menu")),p(e,[t,c,d]),n.appendChild(e),n}}},555:n=>{n.exports={genh1:function(n){const e=document.createElement("h1");return e.textContent=n,e},genDiv:function(){return document.createElement("div")},listAppend:function(n,e){e.forEach((e=>{n.appendChild(e)}))},genp:function(n){const e=document.createElement("p");return e.textContent=n,e}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var p=e[o]={exports:{}};return n[o](p,p.exports,t),p.exports}(()=>{console.log("Testing 123");const{header_bar_gen:n}=t(61),{footer_bar_gen:e}=t(148);!function(){const t=document.getElementById("content"),o=n();t.appendChild(o);const r=e();t.appendChild(r)}()})()})();