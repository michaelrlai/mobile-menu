(()=>{"use strict";(function(){const e=function(){const e=document.querySelectorAll(".dropdown-list");for(let t=0;t<e.length;t++)e[t].classList.remove("show"),e[t].style.display="none"};(function(){const e=document.querySelectorAll(".dropdown-menu");for(let t=0;t<e.length;t++){e[t].querySelector("button").classList.add("dropdown-open-button"),e[t].querySelector("ul").classList.add("dropdown-list"),e[t].querySelector("ul").style.display="none";const o=e[t].querySelectorAll("li");for(let e=0;e<o.length;e++)o[e].classList.add("dropdown-list-button")}})(),document.addEventListener("mousedown",(function(t){t.target.matches(".dropdown-open-button")&&!t.target.parentNode.querySelector("ul").matches(".show")?(e(),t.target.parentNode.querySelector("ul").classList.add("show"),t.target.parentNode.querySelector("ul").style.display=""):e()}))})(),document.querySelector(".nav-button-icon").innerHTML="&#9776"})();