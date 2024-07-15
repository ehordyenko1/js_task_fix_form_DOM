function e(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()}document.querySelectorAll("input").forEach(function(t){var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",t.id),t.placeholder=e(t.name),r.textContent=e(t.name).toUpperCase(),t.parentNode.insertBefore(r,t)});
//# sourceMappingURL=index.bb30703e.js.map
