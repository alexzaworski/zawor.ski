!function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function i(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n["default"]=t,n}function r(t){return t&&t.__esModule?t:{"default":t}}var a=e(5),o=r(a),s=e(7),u=r(s),c=e(8),f=r(c),l=e(6),h=r(l),d=e(2),p=e(10),v=i(p),m=e(9),g=i(m),y=e(11),w=i(y),b=function(t){t.touches&&(t.preventDefault(),t=t.touches[0]);var n=g.currentColor,e=g.next(),i=Math.min(200,.4*d.cW);v.move(d.cW,d.cH),v.setColor(n),w.setColor(n),document.body.classList="active",new u["default"](t.clientX,t.clientY,e),new f["default"](t.clientX,t.clientY,n,i),new h["default"](t.clientX,t.clientY,n,i)};(0,d.resizeCanvas)(),window.addEventListener("resize",d.resizeCanvas),v.pulse(),v.addListeners(b),o["default"].load({google:{families:["Alegreya:900"],text:"Hi"}})},function(t,n,e){var i,r,a;"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e,o){r=[],i=o,a="function"==typeof i?i.apply(n,r):i,!(void 0!==a&&(t.exports=a))}(void 0,function(){var t,n="1.1.1",e={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skewX","skewY"],r="transform",a={arr:function(t){return Array.isArray(t)},obj:function(t){return Object.prototype.toString.call(t).indexOf("Object")>-1},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||a.svg(t)},num:function(t){return!isNaN(parseInt(t))},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return"undefined"==typeof t},nul:function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return a.hex(t)||a.rgb(t)||a.hsl(t)}},o=function(){var t={},n=["Quad","Cubic","Quart","Quint","Expo"],e={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,n){if(0===t||1===t)return t;var e=1-Math.min(n,998)/1e3,i=t/1,r=i-1,a=e/(2*Math.PI)*Math.asin(1);return-(Math.pow(2,10*r)*Math.sin((r-a)*(2*Math.PI)/e))},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var n,e=4;t<((n=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}};return n.forEach(function(t,n){e[t]=function(t){return Math.pow(t,n+2)}}),Object.keys(e).forEach(function(n){var i=e[n];t["easeIn"+n]=i,t["easeOut"+n]=function(t,n){return 1-i(1-t,n)},t["easeInOut"+n]=function(t,n){return t<.5?i(2*t,n)/2:1-i(t*-2+2,n)/2},t["easeOutIn"+n]=function(t,n){return t<.5?(1-i(1-2*t,n))/2:(i(2*t-1,n)+1)/2}}),t.linear=function(t){return t},t}(),s=function(t){return a.str(t)?t:t+""},u=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},c=function(t){if(a.col(t))return!1;try{var n=document.querySelectorAll(t);return n}catch(e){return!1}},f=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},l=function J(t){return t.reduce(function(t,n){return t.concat(a.arr(n)?J(n):n)},[])},h=function(t){return a.arr(t)?t:(a.str(t)&&(t=c(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},d=function(t,n){return t.some(function(t){return t===n})},p=function(t,n){var e={};return t.forEach(function(t){var i=JSON.stringify(n.map(function(n){return t[n]}));e[i]=e[i]||[],e[i].push(t)}),Object.keys(e).map(function(t){return e[t]})},v=function(t){return t.filter(function(t,n,e){return e.indexOf(t)===n})},m=function(t){var n={};for(var e in t)n[e]=t[e];return n},g=function(t,n){for(var e in n)t[e]=a.und(t[e])?n[e]:t[e];return t},y=function(t){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=t.replace(n,function(t,n,e,i){return n+n+e+e+i+i}),e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(e[1],16),r=parseInt(e[2],16),a=parseInt(e[3],16);return"rgb("+i+","+r+","+a+")"},w=function(t){var n,e,i,t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t),r=parseInt(t[1])/360,a=parseInt(t[2])/100,o=parseInt(t[3])/100,s=function(t,n,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t};if(0==a)n=e=i=o;else{var u=o<.5?o*(1+a):o+a-o*a,c=2*o-u;n=s(c,u,r+1/3),e=s(c,u,r),i=s(c,u,r-1/3)}return"rgb("+255*n+","+255*e+","+255*i+")"},b=function(t){return a.rgb(t)?t:a.hex(t)?y(t):a.hsl(t)?w(t):void 0},x=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},_=function(t,n,e){return x(n)?n:t.indexOf("translate")>-1?x(e)?n+x(e):n+"px":t.indexOf("rotate")>-1||t.indexOf("skew")>-1?n+"deg":n},k=function(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(u(n))||"0"},j=function(t,n){var e=n.indexOf("scale")>-1?1:0,i=t.style.transform;if(!i)return e;for(var r=/(\w+)\((.+?)\)/g,a=[],o=[],s=[];a=r.exec(i);)o.push(a[1]),s.push(a[2]);var u=s.filter(function(t,e){return o[e]===n});return u.length?u[0]:e},M=function(t,n){return a.dom(t)&&d(i,n)?"transform":a.dom(t)&&(t.getAttribute(n)||a.svg(t)&&t[n])?"attribute":a.dom(t)&&"transform"!==n&&k(t,n)?"css":a.nul(t[n])||a.und(t[n])?void 0:"object"},O=function(t,n){switch(M(t,n)){case"transform":return j(t,n);case"css":return k(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0},E=function(t,n,e){if(a.col(n))return b(n);if(x(n))return n;var i=x(x(t.to)?t.to:t.from);return!i&&e&&(i=x(e)),i?n+i:n},C=function(t){var n=/-?\d*\.?\d+/g;return{original:t,numbers:s(t).match(n)?s(t).match(n).map(Number):[0],strings:s(t).split(n)}},P=function(t,n,e){return n.reduce(function(n,i,r){var i=i?i:e[r-1];return n+t[r-1]+i})},T=function(t){var t=t?l(a.arr(t)?t.map(h):h(t)):[];return t.map(function(t,n){return{target:t,id:n}})},S=function(t,n){var i=[];for(var r in t)if(!e.hasOwnProperty(r)&&"targets"!==r){var o=a.obj(t[r])?m(t[r]):{value:t[r]};o.name=r,i.push(g(o,n))}return i},A=function(t,n,e,i){var r=h(a.fnc(e)?e(t,i):e);return{from:r.length>1?r[0]:O(t,n),to:r.length>1?r[1]:r[0]}},I=function(t,n,e,i){var r={};if("transform"===e)r.from=t+"("+_(t,n.from,n.to)+")",r.to=t+"("+_(t,n.to)+")";else{var a="css"===e?k(i,t):void 0;r.from=E(n,n.from,a),r.to=E(n,n.to,a)}return{from:C(r.from),to:C(r.to)}},H=function(t,n){var e=[];return t.forEach(function(i,r){var o=i.target;return n.forEach(function(n){var s=M(o,n.name);if(s){var u=A(o,n.name,n.value,r),c=m(n);c.animatables=i,c.type=s,c.from=I(n.name,u,c.type,o).from,c.to=I(n.name,u,c.type,o).to,c.round=a.col(u.from)||c.round?1:0,c.delay=(a.fnc(c.delay)?c.delay(o,r,t.length):c.delay)/Z.speed,c.duration=(a.fnc(c.duration)?c.duration(o,r,t.length):c.duration)/Z.speed,e.push(c)}})}),e},L=function(t,n){var e=H(t,n),i=p(e,["name","from","to","delay","duration"]);return i.map(function(t){var n=m(t[0]);return n.animatables=t.map(function(t){return t.animatables}),n.totalDuration=n.delay+n.duration,n})},N=function(t,n){t.tweens.forEach(function(e){var i=e.to,r=e.from,a=t.duration-(e.delay+e.duration);e.from=i,e.to=r,n&&(e.delay=a)}),t.reversed=!t.reversed},W=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))},F=function(t){var n=[],e=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(n.push("css"===t.type?u(t.name):"transform"),t.animatables.forEach(function(t){e.push(t.target)}))}),{properties:v(n).join(", "),elements:v(e)}},z=function(t){var n=F(t);n.elements.forEach(function(t){t.style.willChange=n.properties})},B=function(t){var n=F(t);n.elements.forEach(function(t){t.style.removeProperty("will-change")})},X=function(t){var n=a.str(t)?c(t)[0]:t;return{path:n,value:n.getTotalLength()}},Y=function(t,n){var e=t.path,i=t.value*n,r=function(r){var a=r||0,o=n>1?t.value+a:i+a;return e.getPointAtLength(o)},a=r(),o=r(-1),s=r(1);switch(t.name){case"translateX":return a.x;case"translateY":return a.y;case"rotate":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}},$=function(t,n){var e=Math.min(Math.max(n-t.delay,0),t.duration),i=e/t.duration,r=t.to.numbers.map(function(n,e){var r=t.from.numbers[e],a=o[t.easing](i,t.elasticity),s=t.path?Y(t,a):r+a*(n-r);return s=t.round?Math.round(s*t.round)/t.round:s});return P(r,t.to.strings,t.from.strings)},q=function(n,e){var i;n.currentTime=e,n.progress=e/n.duration*100;for(var a=0;a<n.tweens.length;a++){var o=n.tweens[a];o.currentValue=$(o,e);for(var s=o.currentValue,u=0;u<o.animatables.length;u++){var c=o.animatables[u],f=c.id,l=c.target,h=o.name;switch(o.type){case"css":l.style[h]=s;break;case"attribute":l.setAttribute(h,s);break;case"object":l[h]=s;break;case"transform":i||(i={}),i[f]||(i[f]=[]),i[f].push(s)}}}if(i){t||(t=(k(document.body,r)?"":"-webkit-")+r);for(var a in i)n.animatables[a].target.style[t]=i[a].join(" ")}n.settings.update&&n.settings.update(n)},D=function(t){var n={};return n.animatables=T(t.targets),n.settings=g(t,e),n.properties=S(t,n.settings),n.tweens=L(n.animatables,n.properties),n.duration=W(n.tweens)||t.duration,n.currentTime=0,n.progress=0,n.ended=!1,n},R=[],V=0,Q=function(){var t=function(){V=requestAnimationFrame(n)},n=function(n){if(R.length){for(var e=0;e<R.length;e++)R[e].tick(n);t()}else cancelAnimationFrame(V),V=0};return t}(),Z=function(t){var n=D(t),e={};return n.tick=function(t){n.ended=!1,e.start||(e.start=t),e.current=Math.min(Math.max(e.last+t-e.start,0),n.duration),q(n,e.current);var i=n.settings;i.begin&&e.current>=i.delay&&(i.begin(n),i.begin=void 0),e.current>=n.duration&&(i.loop?(e.start=t,"alternate"===i.direction&&N(n,!0),a.num(i.loop)&&i.loop--):(n.ended=!0,n.pause(),i.complete&&i.complete(n)),e.last=0)},n.seek=function(t){q(n,t/100*n.duration)},n.pause=function(){B(n);var t=R.indexOf(n);t>-1&&R.splice(t,1)},n.play=function(t){n.pause(),t&&(n=g(D(g(t,n.settings)),n)),e.start=0,e.last=n.ended?0:n.currentTime;var i=n.settings;"reverse"===i.direction&&N(n),"alternate"!==i.direction||i.loop||(i.loop=1),z(n),R.push(n),V||Q()},n.restart=function(){n.reversed&&N(n),n.pause(),n.seek(0),n.play()},n.settings.autoplay&&n.play(),n},G=function(t){for(var n=l(a.arr(t)?t.map(h):h(t)),e=R.length-1;e>=0;e--)for(var i=R[e],r=i.tweens,o=r.length-1;o>=0;o--)for(var s=r[o].animatables,u=s.length-1;u>=0;u--)d(n,s[u].target)&&(s.splice(u,1),s.length||r.splice(o,1),r.length||i.pause())};return Z.version=n,Z.speed=1,Z.list=R,Z.remove=G,Z.easings=o,Z.getValue=O,Z.path=X,Z.random=f,Z})},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=n.c=document.getElementById("c"),i=n.ctx=e.getContext("2d"),r=n.cH=void 0,a=n.cW=void 0;n.resizeCanvas=function(){n.cW=a=window.innerWidth,n.cH=r=window.innerHeight,e.width=a*devicePixelRatio,e.height=r*devicePixelRatio,i.scale(devicePixelRatio,devicePixelRatio)}},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=e(2),o=function(){function t(n){i(this,t),Object.assign(this,n)}return r(t,[{key:"draw",value:function(){a.ctx.globalAlpha=this.opacity||1,a.ctx.beginPath(),a.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1),this.stroke&&(a.ctx.strokeStyle=this.stroke.color,a.ctx.lineWidth=this.stroke.width,a.ctx.stroke()),this.fill&&(a.ctx.fillStyle=this.fill,a.ctx.fill()),a.ctx.closePath(),a.ctx.globalAlpha=1}}]),t}();n["default"]=o},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.animationHandler=void 0;var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=e(1),s=i(o),u=e(2),c=function(){function t(){r(this,t),this.animations=[]}return a(t,[{key:"add",value:function(t){this.animations.push(t)}},{key:"remove",value:function(t){var n=this.animations.indexOf(t);n>-1&&this.animations.splice(n,1)}},{key:"init",value:function(){var t=this;(0,s["default"])({duration:1/0,update:function(){u.ctx.clearRect(0,0,u.cW,u.cH),t.animations.forEach(function(t){t.animatables.forEach(function(t){t.target.draw()})})}})}}]),t}(),f=new c;f.init(),n.animationHandler=f},function(t,n,e){var i;!function(){function r(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function o(t,n,e){return o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r:a,o.apply(null,arguments)}function s(t,n){this.a=t,this.m=n||t,this.c=this.m.document}function u(t,n,e,i){if(n=t.c.createElement(n),e)for(var r in e)e.hasOwnProperty(r)&&("style"==r?n.style.cssText=e[r]:n.setAttribute(r,e[r]));return i&&n.appendChild(t.c.createTextNode(i)),n}function c(t,n,e){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),r=0;r<n.length;r+=1){for(var a=!1,o=0;o<i.length;o+=1)if(n[r]===i[o]){a=!0;break}a||i.push(n[r])}for(n=[],r=0;r<i.length;r+=1){for(a=!1,o=0;o<e.length;o+=1)if(i[r]===e[o]){a=!0;break}a||n.push(i[r])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(t,n){for(var e=t.className.split(/\s+/),i=0,r=e.length;i<r;i++)if(e[i]==n)return!0;return!1}function d(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function p(t){return t.m.location.hostname||t.a.location.hostname}function v(t,n,e){function i(){s&&r&&a&&(s(o),s=null)}n=u(t,"link",{rel:"stylesheet",href:n,media:"all"});var r=!1,a=!0,o=null,s=e||null;st?(n.onload=function(){r=!0,i()},n.onerror=function(){r=!0,o=Error("Stylesheet failed to load"),i()}):setTimeout(function(){r=!0,i()},0),c(t,"head",n)}function m(t,n,e,i){var r=t.c.getElementsByTagName("head")[0];if(r){var a=u(t,"script",{src:n}),o=!1;return a.onload=a.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&r.removeChild(a))},r.appendChild(a),setTimeout(function(){o||(o=!0,e&&e(Error("Script load timeout")))},i||5e3),a}return null}function g(){this.a=0,this.c=null}function y(t){return t.a++,function(){t.a--,b(t)}}function w(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function _(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function k(t){return O(t)+" "+(t.f+"00")+" 300px "+j(t.c)}function j(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function M(t){return t.a+t.f}function O(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function E(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function C(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function P(t){t.g&&l(t.f,[t.a.c("wf","loading")]),S(t,"loading")}function T(t){if(t.g){var n=h(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),l(t.f,e,i)}S(t,"inactive")}function S(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,M(e)):t.h[n]())}function A(){this.c={}}function I(t,n,e){var i,r=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&r.push(a(n[i],e))}return r}function H(t,n){this.c=t,this.f=n,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function L(t){c(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";"+("font-style:"+O(t)+";font-weight:"+(t.f+"00")+";")}function W(t,n,e,i,r,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=r||3e3,this.h=a||void 0}function F(t,n,e,i,r,a,o){this.v=t,this.B=n,this.c=e,this.a=i,this.s=o||"BESbswy",this.f={},this.w=r||3e3,this.u=a||null,this.o=this.j=this.h=this.g=null,this.g=new H(this.c,this.s),this.h=new H(this.c,this.s),this.j=new H(this.c,this.s),this.o=new H(this.c,this.s),t=new _(this.a.c+",serif",M(this.a)),t=N(t),this.g.a.style.cssText=t,t=new _(this.a.c+",sans-serif",M(this.a)),t=N(t),this.h.a.style.cssText=t,t=new _("serif",M(this.a)),t=N(t),this.j.a.style.cssText=t,t=new _("sans-serif",M(this.a)),t=N(t),this.o.a.style.cssText=t,L(this.g),L(this.h),L(this.j),L(this.o)}function z(){if(null===ct){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ct=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return ct}function B(t,n,e){for(var i in ut)if(ut.hasOwnProperty(i)&&n===t.f[ut[i]]&&e===t.f[ut[i]])return!0;return!1}function X(t){var n,e=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=e===t.f.serif&&i===t.f["sans-serif"])||(n=z()&&B(t,e,i)),n?ot()-t.A>=t.w?z()&&B(t,e,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?$(t,t.v):$(t,t.B):Y(t):$(t,t.v)}function Y(t){setTimeout(o(function(){X(this)},t),50)}function $(t,n){setTimeout(o(function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.o.a),n(this.a)},t),0)}function q(t,n,e){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=e}function D(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&l(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function R(t){this.j=t,this.a=new A,this.h=0,this.f=this.g=!0}function V(t,n,e,i,r){var a=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=r||null,s=i||null||{};if(0===e.length&&a)T(n.a);else{n.f+=e.length,a&&(n.j=a);var u,c=[];for(u=0;u<e.length;u++){var f=e[u],h=s[f.c],d=n.a,p=f;d.g&&l(d.f,[d.a.c("wf",p.c,M(p).toString(),"loading")]),S(d,"fontloading",p),d=null,null===ft&&(ft=!!window.FontFace&&(!(p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(p[1],10))),d=ft?new W(o(n.g,n),o(n.h,n),n.c,f,n.s,h):new F(o(n.g,n),o(n.h,n),n.c,f,n.s,t,h),c.push(d)}for(u=0;u<c.length;u++)c[u].start()}},0)}function Q(t,n,e){var i=[],r=e.timeout;P(n);var i=I(t.a,e,t.c),a=new q(t.c,n,r);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load(function(n,e,i){V(t,a,n,e,i)})}function Z(t,n){this.c=t,this.a=n}function G(t,n,e){var i=d(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),i+"//"+t+"/"+n+".js"+(e?"?v="+e:"")}function J(t,n){this.c=t,this.a=n}function K(t,n,e){t?this.c=t:this.c=n+lt,this.a=[],this.f=[],this.g=e||""}function U(t,n){for(var e=n.length,i=0;i<e;i++){var r=n[i].split(":");3==r.length&&t.f.push(r.pop());var a="";2==r.length&&""!=r[1]&&(a=":"),t.a.push(r.join(a))}}function tt(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function nt(t){this.f=t,this.a=[],this.c={}}function et(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),r=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var o,s=i[1];if(o=[],s)for(var s=s.split(","),u=s.length,c=0;c<u;c++){var f;if(f=s[c],f.match(/^[\w-]+$/)){var l=vt.exec(f.toLowerCase());if(null==l)f="";else{if(f=l[2],f=null==f||""==f?"n":pt[f],l=l[1],null==l||""==l)l="4";else var h=dt[l],l=h?h:isNaN(l)?"4":l.substr(0,1);f=[f,l].join("")}}else f="";f&&o.push(f)}0<o.length&&(a=o),3==i.length&&(i=i[2],o=[],i=i?i.split(","):o,0<i.length&&(i=ht[i[0]])&&(t.c[r]=i))}for(t.c[r]||(i=ht[r])&&(t.c[r]=i),i=0;i<a.length;i+=1)t.a.push(new _(r,a[i]))}}function it(t,n){this.c=t,this.a=n}function rt(t,n){this.c=t,this.a=n}function at(t,n){this.c=t,this.f=n,this.a=[]}var ot=Date.now||function(){return+new Date},st=!!window.FontFace;x.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},W.prototype.start=function(){var t=this.c.m.document,n=this,e=ot(),i=new Promise(function(i,r){function a(){ot()-e>=n.f?r():t.fonts.load(k(n.a),n.h).then(function(t){1<=t.length?i():setTimeout(a,25)},function(){r()})}a()}),r=new Promise(function(t,e){setTimeout(e,n.f)});Promise.race([r,i]).then(function(){n.g(n.a)},function(){n.j(n.a)})};var ut={D:"serif",C:"sans-serif"},ct=null;F.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=ot(),X(this)};var ft=null;q.prototype.g=function(t){var n=this.a;n.g&&l(n.f,[n.a.c("wf",t.c,M(t).toString(),"active")],[n.a.c("wf",t.c,M(t).toString(),"loading"),n.a.c("wf",t.c,M(t).toString(),"inactive")]),S(n,"fontactive",t),this.o=!0,D(this)},q.prototype.h=function(t){var n=this.a;if(n.g){var e=h(n.f,n.a.c("wf",t.c,M(t).toString(),"active")),i=[],r=[n.a.c("wf",t.c,M(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,M(t).toString(),"inactive")),l(n.f,i,r)}S(n,"fontinactive",t),D(this)},R.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,Q(this,new C(this.c,t),t)},Z.prototype.load=function(t){function n(){if(a["__mti_fntLst"+i]){var e,r=a["__mti_fntLst"+i](),o=[];if(r)for(var s=0;s<r.length;s++){var u=r[s].fontfamily;void 0!=r[s].fontStyle&&void 0!=r[s].fontWeight?(e=r[s].fontStyle+r[s].fontWeight,o.push(new _(u,e))):o.push(new _(u))}t(o)}else setTimeout(function(){n()},50)}var e=this,i=e.a.projectId,r=e.a.version;if(i){var a=e.c.m;m(this.c,G(e,i,r),function(r){r?t([]):(a["__MonotypeConfiguration__"+i]=function(){return e.a},n())}).id="__MonotypeAPIScript__"+i}else t([])},J.prototype.load=function(t){var n,e,i=this.a.urls||[],r=this.a.families||[],a=this.a.testStrings||{},o=new g;for(n=0,e=i.length;n<e;n++)v(this.c,i[n],y(o));var s=[];for(n=0,e=r.length;n<e;n++)if(i=r[n].split(":"),i[1])for(var u=i[1].split(","),c=0;c<u.length;c+=1)s.push(new _(i[0],u[c]));else s.push(new _(i[0]));w(o,function(){t(s,a)})};var lt="//fonts.googleapis.com/css",ht={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},dt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},pt={i:"i",italic:"i",n:"n",normal:"n"},vt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,mt={Arimo:!0,Cousine:!0,Tinos:!0};it.prototype.load=function(t){var n=new g,e=this.c,i=new K(this.a.api,d(e),this.a.text),r=this.a.families;U(i,r);var a=new nt(r);et(a),v(e,tt(i),y(n)),w(n,function(){t(a.a,a.c,mt)})},rt.prototype.load=function(t){var n=this.a.id,e=this.c.m;n?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],r=0;r<n.length;r+=2)for(var a=n[r],o=n[r+1],s=0;s<o.length;s++)i.push(new _(a,o[s]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(u){}t(i)}},2e3):t([])},at.prototype.load=function(t){var n=this.f.id,e=this.c.m,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var r=0,a=e.fonts.length;r<a;++r){var o=e.fonts[r];i.a.push(new _(o.name,E("font-weight:"+o.weight+";font-style:"+o.style)))}t(i.a)},m(this.c,d(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+p(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var gt=new R(window);gt.a.c.custom=function(t,n){return new J(n,t)},gt.a.c.fontdeck=function(t,n){return new at(n,t)},gt.a.c.monotype=function(t,n){return new Z(n,t)},gt.a.c.typekit=function(t,n){return new rt(n,t)},gt.a.c.google=function(t,n){return new it(n,t)};var yt={load:o(gt.load,gt)};i=function(){return yt}.call(n,e,n,t),!(void 0!==i&&(t.exports=i))}()},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=e(1),s=i(o),u=e(3),c=i(u),f=e(4),l=function(){function t(n,e,i,a){r(this,t),this.size=a,this.particles=[];for(var o=0;o<32;o++)this.particles.push(new c["default"]({x:n,y:e,fill:i,r:s["default"].random(24,48)}));this._animate()}return a(t,[{key:"_animate",value:function(){var t=this;this.animation=(0,s["default"])({targets:this.particles,x:function(n){return n.x+s["default"].random(t.size,-t.size)},y:function(n){return n.y+s["default"].random(1.15*t.size,1.15*-t.size)},r:0,easing:"easeOutExpo",duration:1150,complete:function(){f.animationHandler.remove(t.animation)}}),f.animationHandler.add(this.animation)}}]),t}();n["default"]=l},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=e(1),s=i(o),u=e(3),c=i(u),f=e(2),l=e(4),h=function(){function t(n,e,i){r(this,t),Object.assign(this,{x:n,y:e,fill:i}),this.circle=new c["default"]({x:this.x,y:this.y,r:0,fill:this.fill}),this._animate()}return a(t,[{key:"_animate",value:function(){var t=this,n=this._calcR();this.animation=(0,s["default"])({targets:this.circle,r:n,duration:Math.max(n/2,750),easing:"easeOutQuart",complete:function(){l.animationHandler.remove(t.animation),document.body.style.background=t.fill}}),l.animationHandler.add(this.animation)}},{key:"_calcR",value:function(){var t=Math.max(this.x-0,f.cW-this.x),n=Math.max(this.y-0,f.cH-this.y);return Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}}]),t}();n["default"]=h},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=e(1),s=i(o),u=e(3),c=i(u),f=e(4),l=function(){function t(n,e,i,a){r(this,t),this.size=a,this.circle=new c["default"]({x:n,y:e,fill:i,r:0,opacity:1,stroke:{width:3,color:i}}),this._animate()}return a(t,[{key:"_animate",value:function(){var t=this;this.animation=(0,s["default"])({targets:this.circle,r:this.size,opacity:0,easing:"easeOutExpo",duration:1100,complete:function(){f.animationHandler.remove(t.animation)}}),f.animationHandler.add(this.animation)}}]),t}();n["default"]=l},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=["#FF1C83","#282741","#26b4cd","#FFBE53"],i=0,r=n.currentColor=e[i];n.next=function(){return i++,i>=e.length&&(i=0),n.currentColor=r=e[i],r}},function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0}),n.addListeners=n.setColor=n.move=n.pulse=void 0;var r=e(1),a=i(r),o=e(2),s=document.getElementById("targetDot"),u=s.querySelector(".pulse--front"),c=s.offsetWidth,f=s.offsetHeight,l=1500,h=!0,d=void 0,p=void 0,v=void 0,m=function(){g(),p=s.offsetLeft,v=s.offsetTop,s.style.transform="translateX("+p+"px) translateY("+v+"px)"},g=function(){h=!1,s.classList.remove("pulsing"),d&&window.clearTimeout(d)},y=function(t,n){var e=void 0,i=void 0,r=void 0,s=.5*Math.min(o.cH,o.cW);do{i=a["default"].random(0,t-c),r=a["default"].random(0,n-f);var u=Math.pow(p-i,2),l=Math.pow(v-r,2);e=Math.sqrt(u+l)}while(e<s);return p=i,v=r,{x:i,y:r}};n.pulse=function w(){h&&(s.classList.toggle("pulsing"),d=window.setTimeout(function(){w()},l))},n.move=function(t,n){h&&m();var e=y(t,n),i=e.x,r=e.y;(0,a["default"])({targets:s,translateX:i,translateY:r,duration:800,easing:"easeOutExpo"})},n.setColor=function(t){u.style.background=t},n.addListeners=function(t){s.addEventListener("touchstart",t),s.addEventListener("mousedown",t)}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=document.createElement("style");document.head.appendChild(e);n.setColor=function(t){e.innerText="a:after{background:"+t+"}"}}]);