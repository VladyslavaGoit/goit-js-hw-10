function e(e){return fetch(` https://restcountries.com/v3.1${`/name/${e}`}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}document.querySelector("#search-box").addEventListener("input",(function(t){e(t.currentTarget.value).then((e=>console.log(e))).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.099f4b90.js.map
