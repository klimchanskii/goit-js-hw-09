!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(r)})),t.addEventListener("click",(function(){return r=setInterval((function(){return n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1,r})),e.disabled=!0;var r=0}();
//# sourceMappingURL=01-color-switcher.d3fdfe48.js.map
