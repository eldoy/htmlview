window.h=function(e,...i){let o="";for(let r=0;r<e.length;r++){let t=e[r],n=i[r]||"";"function"==typeof n?n=n()||"":Array.isArray(n)?n=n.join(""):n.constructor==String&&("$"==t.slice(-1)?t=t.slice(0,-1):n=esc(String(n))),o+=""+t+n}return o};