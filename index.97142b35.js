!function(){function n(n){var t="/name/".concat(n),e="".concat(" https://restcountries.com/v3.1").concat(t,"?fields=name,capital,population,flags,languages");return fetch(e).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))}document.querySelector("#search-box").addEventListener("input",(function(t){n(t.currentTarget.value).then((function(n){return console.log(n)})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.97142b35.js.map