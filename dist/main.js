(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){const e=document.createElement("footer");e.className="footer";const t=document.createElement("p");t.textContent="Developed by Samkit Barbhaya",e.appendChild(t),a.appendChild(e)}e.d({},{b:()=>a});const n=[{name:"Shahi Paneer",description:"Mughalai cuisine having white gravy made from tomatoes and yogurt",price:"20$"},{name:"Caesar Salad",description:"Romanian lettuce with Caesar dressing, chuncky croutons and shaved pasmesan cheese",price:"12$"},{name:"Pizza Capricciosa",description:"Gorgonzola, zucchini, artichokes, jalapeno",price:"30$"}],a=document.getElementById("content");function c(){!function(){const e=document.createElement("p");e.className="cursive golden welcome",e.textContent="Welcome";const t=document.createElement("h1");t.textContent="LA GATEAU";const n=document.createElement("hr"),c=document.createElement("p");c.className="text-center white",c.textContent="The pleasure of eating with your hands. Good land!";const o=document.createElement("button");o.className="menu-button",o.textContent="SEE THE MENU";const m=document.createElement("div");m.className="main-content",m.append(e,t,n,c,o);const s=document.createElement("main");s.className="main",s.appendChild(m),a.appendChild(s)}(),t()}function o(){!function(){const e=document.createElement("p");e.textContent="Welcome",e.className="cursive golden";const t=document.createElement("h1");t.textContent="MENU";const c=document.createElement("hr"),o=document.createElement("div");o.className="main-menu-content",o.append(e,t,c),n.forEach((e=>{const t=document.createElement("div");t.className="menu-items";const n=document.createElement("h5");n.className="golden",n.textContent=e.name;const a=document.createElement("p");a.textContent=e.description;const c=document.createElement("h6");c.className="golden",c.textContent=e.price;const m=document.createElement("hr");t.append(n,a,c,m),o.append(t)}));const m=document.createElement("main");m.className="main",m.appendChild(o),a.appendChild(m)}(),t()}!function(){const e=document.createElement("ul");["HOME","MENU","ABOUT"].forEach((t=>{const n=document.createElement("li");n.textContent=t,n.className=t,e.appendChild(n)}));const t=document.createElement("nav");t.className="navbar",t.appendChild(e),a.appendChild(t)}(),c(),document.querySelectorAll("li").forEach((e=>{e.addEventListener("click",(e=>{let n=a.childNodes;n.length>2&&(a.removeChild(n[2]),a.removeChild(n[2])),"HOME"==e.target.className?c():"MENU"==e.target.className?o():"ABOUT"==e.target.className&&(function(){const e=document.createElement("p");e.className="cursive golden welcome",e.textContent="Welcome";const t=document.createElement("h1");t.textContent="ABOUT US";const n=document.createElement("hr"),c=document.createElement("p");c.className="text-center white",c.textContent="Welcome to our Indian restaurant where we bring the rich and diverse flavors of India to your table. Our restaurant is a family-owned business that has been serving the community for many years. We take great pride in our authentic Indian dishes and strive to offer our customers a memorable dining experience.";const o=document.createElement("button");o.className="menu-button",o.textContent="SEE THE MENU";const m=document.createElement("div");m.className="main-about-content",m.append(e,t,n,c);const s=document.createElement("main");s.className="main",s.appendChild(m),a.appendChild(s)}(),t())}))})),document.addEventListener("click",(e=>{if("SEE THE MENU"!=e.target.innerText)return;let t=a.childNodes;t.length>2&&(a.removeChild(t[2]),a.removeChild(t[2])),o()}))})();