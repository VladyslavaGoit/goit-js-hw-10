!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i");function i(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var u=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(l.value),o=Number(a.value),t=Number(c.value),u=0;u<n;u+=1){i(u+1,o+t*u).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.afaa591e.js.map
