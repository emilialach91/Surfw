!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var s,l=[],p=!1,d=-1;function u(){p&&s&&(p=!1,s.length?l=s.concat(l):d=-1,l.length&&f())}function f(){if(!p){var e=c(u);p=!0;for(var t=l.length;t;){for(s=l,l=[];++d<t;)s&&s[d].run();d=-1,t=l.length}s=null,p=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||p||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(2);n(13).config();document.querySelector(".board__image"),document.getElementById("board-rot"),document.querySelector(".header__button"),document.getElementById("overlay");const i=document.createElement("script");i.defer=!0,i.async=!0,i.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4Ybbbbh8bPCAE1FspOHocxPWJAR08gGs&callback=initMap",document.body.appendChild(i),console.log("AIzaSyA4Ybbbbh8bPCAE1FspOHocxPWJAR08gGs")},function(e,t,n){var i=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],l=n[s]||0,p="".concat(s," ").concat(l);n[s]=l+1;var d=c(p),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:p,updater:g(u,t),references:1}),i.push(p)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,m=0;function g(e,t){var n,i,o;if(t.singleton){var r=m++;n=h||(h=l(t)),i=u.bind(null,n,r,!1),o=u.bind(null,n,r,!0)}else n=l(t),i=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=c(n[i]);a[o].references--}for(var r=s(e,t),l=0;l<n.length;l++){var p=c(n[l]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}n=r}}}},function(e,t,n){var i=n(5),o=n(6),r=n(7),a=n(8),c=n(9),s=n(10),l=n(11),p=n(12);t=i(!1);var d=o(r),u=o(a),f=o(c),h=o(s),m=o(l),g=o(p);t.push([e.i,'.header{width:100%;height:80px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:30px}.header__company{display:flex;text-align:left;flex-direction:row;margin-left:10%}.header__logo{font-family:"Qwigley",cursive;color:white;margin-right:10px;font-size:1.5rem}.header__name{color:#3D8697;font-size:1.2rem;font-weight:800}.header__button{z-index:25;right:0;background-color:#366E7A;width:70px;height:45px;border-radius:35px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-right:10%;transition:all 0.3s;cursor:pointer}@media (min-width: 768px){.header__button{display:none}}.header__line{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:0.3s}.header__line2{width:30px;height:4px;background-color:#e2eceb;margin:3px 0;border-radius:30%;transition:transform 0.3s}.change .header__line{transform:rotateZ(-45deg) translate(-4px, 3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.change .header__line2{transform:rotateZ(45deg) translate(-4px, -3px);border-radius:30%;transition:transform 0.3s;background-color:#366E7A}.colour{background-color:#e2eceb;z-index:25;transition:all 0.3s;box-shadow:1px 1px #202020}.hero{display:flex;flex-direction:row}.hero__title{font-size:3.4rem;text-transform:uppercase;color:#3D3A48;font-weight:bold;margin-left:10%;line-height:1;padding:20px 0 10px 0}@media (min-width: 991px){.hero__title{padding-left:40px}}.hero__description{font-size:1.4rem;font-family:"Qwigley",cursive;margin-left:10%;color:#3D3A48}@media (min-width: 991px){.hero__description{padding-left:40px}}.hero__tag{display:none}@media (min-width: 768px){.hero__tag{display:flex;flex-direction:row;margin:80px 0 0 200px}}@media (min-width: 991px){.hero__tag{margin:30px 0 0 150px}}.hero__line{width:4px;height:45px;background-color:white}.hero__info{color:#315259;font-family:"Poppins",sans-serif;font-size:1.2rem;line-height:0.5;margin-left:10px}.hero__info--bold{margin:0  0 10px 10px;font-weight:700;font-size:1.2rem;line-height:0.5;color:#315259;font-family:"Poppins",sans-serif}.card{background-color:transparent;border:none;margin-top:150px}.container-carousel-desktop{display:none}@media (min-width: 768px){.container-carousel-desktop{display:initial;margin-top:100px}}.carousel-indicators li{background-color:#09334b;transform:translateY(-100px);height:10px;width:10px;border-radius:100%;cursor:pointer}.container-carousel-mobile{max-height:500px;max-width:550px;margin:0 auto;transform:translateY(130px)}@media (min-width: 768px){.container-carousel-mobile{display:none}}.carousel-control-prev-icon,.carousel-control-next-icon{transform:translateY(-45px);cursor:pointer}.comment{width:100%;position:absolute}.comment__slider{margin:auto;width:290px;height:100px;background-image:url('+d+");animation:slide 8s infinite}@media (min-width: 768px){.comment__slider{margin:20px 0 0 5%}}@keyframes slide{10%{background-image:url("+d+");background-size:cover}66%{background-image:url("+u+");background-size:cover}100%{background-image:url("+f+');background-size:cover}}.desktop{display:none;width:300px}@media (min-width: 768px){.desktop{display:inline-block;margin-right:10%}}@media (min-width: 991px){.desktop{margin-right:17%}}.desktop__list{display:flex;flex-direction:row;justify-content:space-between}.desktop__item{list-style:none;font-family:"Qwigley",cursive;font-size:1.6rem;color:#3D3A48;cursor:pointer;z-index:35}.desktop a{color:#3D3A48;opacity:1;transition:opacity 0.2s}.desktop a:hover{opacity:0.5;text-decoration:none;transition:opacity 0.2s}.board{position:absolute;z-index:30;top:0;right:65px;height:95vh;display:none;transform:rotate(10deg);transition:ease-in-out 0.5s;margin:auto}@media (min-width: 991px){.board{display:block}}@media (min-width: 1200px){.board{right:105px}}.board--home{right:-250px}.board__image{height:100%;cursor:pointer}.rot{transform:rotate(-10deg);transition:ease-in-out 0.5s}.overlay{height:100vh;width:100%;background-color:transparent;backdrop-filter:blur(10px) brightness(35%);position:absolute;z-index:20;display:none;margin:0 auto}.overlay__menu{width:100%;height:100%}.overlay__list{max-width:768px;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;list-style:none;text-align:justify;position:relative}.overlay__item{display:flex;align-items:center;justify-content:center;height:120px;width:100%;position:relative;text-align:center}.overlay__object{text-transform:none;text-shadow:3px 3px #202020;letter-spacing:1.5px;text-align:justify;color:#e2eceb;position:relative;list-style:none;font-family:"Poppins",sans-serif;font-size:1.8rem;font-weight:light}.overlay__object:hover{color:#e2eceb;text-decoration:none}.active{display:block}.overlay__item:hover{background-color:#678d96;border:1px solid #5c5c5c;transition:ease-in-out 0.3s}.about{background-color:transparent;height:100vh;max-width:1440px;display:flex;align-items:center;justify-content:center;margin:0 auto}.about__content{width:100%;display:flex;flex-direction:column;margin:0 auto;padding:0 20px;justify-content:left}@media (min-width: 991px){.about__content{max-width:65%;padding:0 500px 0 80px}}.about__title{font-family:"Poppins",sans-serif;font-size:30px;margin:0;padding-bottom:10px;color:#315259}@media (min-width: 991px){.about__title{font-size:40px}}.about__subtitle{font-family:"Qwigley",cursive;font-size:25px;margin:0;padding-bottom:25px;color:#3D3A48;padding-bottom:30px}.about__description{font-size:16px;text-align:justify;line-height:1.6;margin:0 auto;color:#3D3A48}@media (min-width: 991px){.about__description{font-size:18px}}.about__button{margin:5% 0 5% 0;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;text-align:center;width:80px;height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.about__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.about__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.about__home:hover{color:white;transition:ease-in-out .3s}}.teachers{max-width:1440px;display:flex;font-family:"Poppins",sans-serif;flex-direction:column;justify-content:center;margin:0 auto}.teachers__content{width:100%}.teachers__title{font-family:"Poppins",sans-serif;font-size:30px;margin-top:5%;margin-bottom:25px;color:#315259;text-align:center}@media (min-width: 991px){.teachers__title{font-size:40px}}.teachers__description{font-family:"Poppins",sans-serif;font-size:16px;margin:0 auto;padding:0 20px;text-align:center;line-height:1.6;color:#3D3A48}@media (min-width: 991px){.teachers__description{margin:0 10%;font-size:18px}}.teachers__team{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin-top:75px}@media (min-width: 991px){.teachers__team{margin-top:100px}}.teachers__name{font-family:"Qwigley",cursive;font-size:24px;color:#315259;text-align:center}.teachers__image{display:block;height:200px;width:200px;margin:0 20px;cursor:pointer}.teachers__button{margin:5% 0 10% 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;text-align:center;width:80px;height:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.teachers__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.teachers__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.teachers__home:hover{color:white;transition:ease-in-out .3s}}.teachers__person{transform:scale(1);transition:ease-in-out .3s;margin-top:20px}@media (min-width: 768px){.teachers__person:hover{transform:scale(1.1);transition:ease-in-out .3s}}.price{max-width:1440px;display:flex;flex-direction:column;justify-content:space-around;font-family:"Poppins",sans-serif;margin:0 auto}.price__content{width:100%;text-align:center;padding-bottom:30px}@media (min-width: 991px){.price__content{padding:50px 0}}.price__title{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;margin:40px 0  20px 0;text-align:center;margin-bottom:25px}@media (min-width: 991px){.price__title{font-size:40px}}.price__description{font-family:"Poppins",sans-serif;line-height:1.6;text-align:center;color:#3D3A48;margin:0 auto;font-size:16px;padding:0 20px}@media (min-width: 991px){.price__description{margin:0 10%;font-size:18px}}.price__tiles{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (min-width: 768px){.price__tiles{flex-direction:row;flex-wrap:wrap}}.price__info{width:280px;height:400px;border:.5px solid #D6D3E2;box-shadow:0 4px 32px 0 rgba(0,0,0,0.6);background-color:white;margin:15px;display:flex;flex-direction:column;justify-content:center}@media (min-width: 540px){.price__info{width:320px}}@media (min-width: 768px){.price__info{width:350px;margin:30px}}.price__heading{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin-top:15px;font-weight:lighter}.price__cost{display:flex;flex-direction:row;align-items:baseline;justify-content:center;color:#3D3A48}.price__pound{font-size:20px;margin-right:10px}.price__amount{font-size:50px;margin:20px 0}.price__list{list-style:none;padding-left:30px}@media (min-width: 540px){.price__list{padding-left:50px}}@media (min-width: 768px){.price__list{padding-left:70px}}.price__check{padding-bottom:15px;color:#4e4e50;font-weight:lighter}.price__buy{width:100%;display:flex;justify-content:center}.price__button{border:1px solid #5b6b82;border-radius:15px;font-size:18px;color:#5b6b82;background-color:transparent;text-align:center;width:150px;margin:20px 0;height:40px;cursor:pointer;opacity:1;transition:opacity .3s;outline:none}@media (min-width: 768px){.price__button{width:200px;font-size:20px}}.price__button:hover{cursor:pointer;opacity:0.6;transition:opacity .3s;outline:none}.price__back{margin:20px 0 20px 9%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;width:80px;height:30px;cursor:pointer;transition:ease-in-out .3s;outline:none;text-align:center}@media (min-width: 768px){.price__back:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.price__home{color:#5b6b82;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%}@media (min-width: 768px){.price__home:hover{color:white;transition:ease-in-out .3s}}.far{margin-right:8px;color:green}.contact{max-width:1440px;background-position:center;background-size:cover;background-repeat:no-repeat;font-family:"Poppins",sans-serif;margin:0 auto}.contact__title{font-family:"Poppins",sans-serif;color:#315259;font-size:30px;text-align:center;margin:40px 0  20px 0}@media (min-width: 991px){.contact__title{font-size:40px}}.contact__description{line-height:1.5;text-align:center;color:#3D3A48;margin:auto;font-size:16px;margin:0 10px}@media (min-width: 991px){.contact__description{font-size:18px}}.contact__container{width:100%;margin-top:30px}@media (min-width: 991px){.contact__container{display:flex;flex-direction:row;margin-top:50px}}.contact__content{width:100%}@media (min-width: 991px){.contact__content{width:40%}}.contact__info{display:flex;flex-direction:column;margin-bottom:25px}.contact__detail{color:#3D3A48;display:flex;justify-content:center;margin-bottom:10px}.contact__detail--extra{padding-left:35px;margin-bottom:10px;color:#3D3A48;display:flex;justify-content:center}.contact__social-media{padding-top:40px;height:100px;text-align:center;border-top:.5px solid #3D3A48;margin:auto 40px}@media (min-width: 991px){.contact__social-media{margin:auto 10%}}.contact__button{margin:3% 0 5% 5%;border:1px solid #5b6b82;border-radius:15px;color:#5b6b82;background-color:white;width:80px;height:30px;cursor:pointer;display:flex;justify-content:center;align-items:center;transition:ease-in-out .3s;outline:none}@media (min-width: 768px){.contact__button:hover{cursor:pointer;transition:ease-in-out .3s;background-color:#888e97}}.contact__home{color:#5b6b82;text-align:center;text-decoration:none;width:100%;transition:ease-in-out .3s;height:100%;margin-top:10px}@media (min-width: 768px){.contact__home:hover{color:white;transition:ease-in-out .3s}}#map{width:90%;margin:auto;height:300px;background-color:grey;margin-bottom:20px}@media (min-width: 991px){#map{width:60%;margin-right:30px;height:400px}}.fas{color:#315259;font-size:20px;margin:auto 0;padding-right:15px}.fab{font-size:30px;margin:15px;color:#3D3A48;cursor:pointer}@media (min-width: 768px){.fa-facebook-f:hover{color:#4267B2}.fa-twitter:hover{color:#00acee}.fa-instagram:hover{color:#8a3ab9}}*{margin:0;padding:0}html{scroll-behavior:smooth;font-size:16px;font-family:"Poppins",sans-serif}.master{width:100%;height:100vh;background-image:url('+h+");background-position:right;background-size:cover;background-repeat:no-repeat;overflow:hidden}.container{max-width:1440px;background-image:url("+m+");background-position:left;background-size:cover;background-repeat:no-repeat;padding:0;height:100vh}@media (min-width: 768px){.container{background-image:url("+g+");background-repeat:no-repeat;background-position:center;height:100vh;width:100%}}@media (min-width: 991px){.container{transform:translate(40px, 40px);margin-left:0;height:75%;width:80%;background-position:top}}body{display:block !important;width:100%;height:100%;background-image:url("+h+");background-position:right;background-size:cover;background-repeat:no-repeat}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/comment1.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/comment2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/comment3.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/background-wave.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/mobile_background.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/background-medium.png"},function(e,t,n){(function(t){const i=n(14),o=n(15);function r(e){console.log("[dotenv][DEBUG] "+e)}const a=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,c=/\\n/g,s=/\n|\r|\r\n/;function l(e,t){const n=Boolean(t&&t.debug),i={};return e.toString().split(s).forEach((function(e,t){const o=e.match(a);if(null!=o){const e=o[1];let t=o[2]||"";const n=t.length-1,r='"'===t[0]&&'"'===t[n];"'"===t[0]&&"'"===t[n]||r?(t=t.substring(1,n),r&&(t=t.replace(c,"\n"))):t=t.trim(),i[e]=t}else n&&r(`did not match key and value when parsing line ${t+1}: ${e}`)})),i}e.exports.config=function(e){let n=o.resolve(t.cwd(),".env"),a="utf8",c=!1;e&&(null!=e.path&&(n=e.path),null!=e.encoding&&(a=e.encoding),null!=e.debug&&(c=!0));try{const e=l(i.readFileSync(n,{encoding:a}),{debug:c});return Object.keys(e).forEach((function(n){Object.prototype.hasOwnProperty.call(t.env,n)?c&&r(`"${n}" is already defined in \`process.env\` and will not be overwritten`):t.env[n]=e[n]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=l}).call(this,n(0))},function(e,t){},function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var o=e[i];"."===o?e.splice(i,1):".."===o?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",o=!1,r=arguments.length-1;r>=-1&&!o;r--){var a=r>=0?arguments[r]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return(o?"/":"")+(t=n(i(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var r=t.isAbsolute(e),a="/"===o(e,-1);return(e=n(i(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&a&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=i(e.split("/")),r=i(n.split("/")),a=Math.min(o.length,r.length),c=a,s=0;s<a;s++)if(o[s]!==r[s]){c=s;break}var l=[];for(s=c;s<o.length;s++)l.push("..");return(l=l.concat(r.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,o=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!o){i=r;break}}else o=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,i=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===i&&(o=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,i=-1,o=!0,r=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===i&&(o=!1,i=a+1),46===c?-1===t?t=a:1!==r&&(r=1):-1!==t&&(r=-1);else if(!o){n=a+1;break}}return-1===t||-1===i||0===r||1===r&&t===i-1&&t===n+1?"":e.slice(t,i)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(0))}]);