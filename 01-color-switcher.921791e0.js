const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(n)})),t.addEventListener("click",(function(){return n=setInterval((()=>d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),t.disabled=!0,e.disabled=!1,n})),e.disabled=!0;let n=0;
//# sourceMappingURL=01-color-switcher.921791e0.js.map