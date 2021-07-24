/*! For license information please see bundle.js.LICENSE.txt */
!function(){var t={702:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(i?i(m):y())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,_,p,g,y=void 0;function w(t,e){var n=this,r=new this.constructor(L);void 0===r[S]&&I(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return k(o,r,i,n._result)}))}else M(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(L);return q(e,t),e}y=u?function(){return process.nextTick(m)}:l?(_=0,p=new l(m),g=document.createTextNode(""),p.observe(g,{characterData:!0}),function(){g.data=_=++_%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function L(){}var E=void 0;function A(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){1===e._state?T(t,e._result):2===e._state?C(t,e._result):M(e,void 0,(function(e){return q(t,e)}),(function(e){return C(t,e)}))}(e,n):void 0===r?T(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?q(t,n):T(t,n))}),(function(e){r||(r=!0,C(t,e))}),t._label);!r&&o&&(r=!0,C(t,o))}),t)}(e,n,r):T(e,n)}function q(t,e){if(t===e)C(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)T(t,e);else{var n=void 0;try{n=e.then}catch(e){return void C(t,e)}A(t,e,n)}var r,o}function x(t){t._onerror&&t._onerror(t._result),j(t)}function T(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(j,t))}function C(t,e){t._state===E&&(t._state=2,t._result=e,s(x,t))}function M(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(j,t)}function j(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?k(n,r,o,i):o(i);t._subscribers.length=0}}function k(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void C(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==E||(i&&a?q(n,s):!1===a?C(n,c):1===e?T(n,s):2===e&&C(n,s))}var $=0;function I(t){t[S]=$++,t._state=void 0,t._result=void 0,t._subscribers=[]}var O=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(L),this.promise[S]||I(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&T(this.promise,this._result))):C(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===H){var c=new n(L);s?C(c,i):A(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===E&&(this._remaining--,2===t?C(r,n):this._result[e]=n),0===this._remaining&&T(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;M(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}();var H=function(){function e(t){this[S]=$++,this._result=this._state=void 0,this._subscribers=[],L!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){q(t,e)}),(function(e){C(t,e)}))}catch(e){C(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return H.prototype.then=w,H.all=function(t){return new O(this,t).promise},H.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},H.resolve=b,H.reject=function(t){var e=new this(L);return C(e,t),e},H._setScheduler=function(t){i=t},H._setAsap=function(t){s=t},H._asap=s,H.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=H},H.Promise=H,H}()},746:function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(746);const t=t=>{const e=document.querySelector(t);e.classList.remove("show"),e.classList.add("hide"),document.body.style.overflow=""},e=(t,e)=>{const n=document.querySelector(t);n.classList.remove("hide"),n.classList.add("show"),document.body.style.overflow="hidden",e&&clearTimeout(e)},r=(e,n)=>{const r=document.querySelector(e),o=document.querySelector("[data-close]");(!r.classList.contains("hide")&&n.target===r||n.target===o||"Escape"===n.code)&&t(e)},o=(t,n)=>{const o=document.querySelector(t);o.classList.contains("show")||e(t,n),o.addEventListener("click",r.bind(null,t)),document.addEventListener("keydown",r.bind(null,t))};n(702).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>o(".modal",n)),3e4);(function(t,e,n,r){const o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(n);function c(){i.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),o.forEach((t=>{t.classList.remove(r)}))}function a(t=0){i[t].classList.add("show","fade"),i[t].classList.remove("hide"),o[t].classList.add(r)}c(),a(),s.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{n==t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(){class t{constructor(t,e,n,r,o,i,...s){this.src=t,this.alt=e,this.title=n,this.descr=r,this.price=o,this.parent=document.querySelector(i),this.classes=s,this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");this.classes.length?this.classes.forEach((e=>t.classList.add(e))):(this.card="menu__item",t.classList.add(this.card)),t.innerHTML=`\n        <div class="menu__item">\n          <img src="${this.src}" alt="${this.alt}">\n          <h3 class="menu__item-subtitle">${this.title}</h3>\n          <div class="menu__item-descr">${this.descr}</div>\n          <div class="menu__item-divider"></div>\n          <div class="menu__item-price">\n            <div class="menu__item-cost">Цена:</div>\n            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n          </div>\n        </div>\n      `,this.parent.append(t)}}axios.get("http://localhost:3000/menu").then((e=>e.data.forEach((({img:e,altimg:n,title:r,descr:o,price:i})=>{new t(e,n,r,o,i,".menu .container").render()}))))}(),function(n,r){function o(n){const o=document.querySelector(".modal"),i=document.querySelector(".modal__dialog");i.classList.add("hide"),e(".modal",r);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n      <div class="modal__content">\n        <div class="modal__close data-close">&times;</div>\n        <div class="modal__title">${n}</div>\n      </div>\n    `,o.append(s),setTimeout((()=>{s.remove(),i.classList.add("show"),i.classList.remove("hide"),t(".modal")}),4e3)}document.querySelectorAll(n).forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.alt="load",n.style.cssText="\n        display: block;\n        margin: 0 auto;\n      ",e.insertAdjacentElement("afterend",n);const r=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),o("Спасибо! Скоро мы с вами свяжимся"),n.remove()})).catch((()=>{o("Что-то пошло не так...")})).finally((()=>{e.reset()}))}))}))}("form",n),function(t,e,n){const r=document.querySelectorAll(t);document.querySelector("[data-close]"),document.querySelector(e),r.forEach((t=>{t.addEventListener("click",(()=>o(e,n)))}));const i=()=>{window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(o(".modal",n),window.removeEventListener("scroll",i))};window.addEventListener("scroll",i)}("[data-modal]",".modal",n),function({container:t,slide:e,nextArrow:n,prevArrow:r,totalCouner:o,currentCounter:i,wrapper:s,field:c}){const a=document.querySelectorAll(e),l=document.querySelector(t),u=document.querySelector(r),d=document.querySelector(n),h=document.querySelector(o),f=document.querySelector(i),m=document.querySelector(s),v=document.querySelector(c),_=window.getComputedStyle(m).width;let p=1,g=0;a.length<10?(h.textContent=`0${a.length}`,f.textContent=`0${p}`):(h.textContent=a.length,f.textContent=p),v.style.width=100*a.length+"%",v.style.display="flex",v.style.transition="0.5s all",m.style.overflow="hidden",a.forEach((t=>{t.style.width=_})),l.style.position="relative";const y=document.createElement("ol"),w=[];y.classList.add("carousel-indicators"),l.append(y);for(let t=0;t<a.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.classList.add("dot"),0===t&&e.classList.add("active"),y.append(e),w.push(e)}const b=()=>{a.length<10?f.textContent=`0${p}`:f.textContent=p},S=()=>{w.forEach((t=>t.classList.remove("active"))),w[p-1].classList.add("active")},L=t=>+t.replace(/\D/g,"");u.addEventListener("click",(()=>{0==g?g=L(_)*(a.length-1):g-=L(_),v.style.transform=`translateX(-${g}px)`,1==p?p=a.length:p--,b(),S()})),d.addEventListener("click",(()=>{g==L(_)*(a.length-1)?g=0:g+=L(_),v.style.transform=`translateX(-${g}px)`,p==a.length?p=1:p++,b(),S()})),w.forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.getAttribute("data-slide-to");p=e,g=L(_)*(e-1),v.style.transform=`translateX(-${g}px)`,b(),S()}))}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",slide:".offer__slide",totalCouner:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"}),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){t.textContent=e&&n&&r&&o&&i?"female"==e?Math.round((447.6+9.2*r+3.1*n-4.3*o)*i):Math.round((88.36+13.4*r+4.8*n-5.7*o)*i):"____"}function a(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),r.forEach((t=>{t.classList.remove(n)})),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid #500":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",1.375)),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(".timer"),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes "),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){const e=Date.parse(t)-Date.parse(new Date);return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(0,e)}(0,"2021-07-27")}))}()}();
//# sourceMappingURL=bundle.js.map