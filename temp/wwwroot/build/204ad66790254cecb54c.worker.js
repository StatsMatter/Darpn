!function(e){function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="build/",n(n.s=2)}([function(e,n,r){var t;void 0!==(t=function(){"use strict";function e(e){return void 0!==e&&null!==e}return e}.call(n,r,n,e))&&(e.exports=t)},function(e,n,r){var t,u;t=[r(5)],void 0!==(u=function(e){"use strict";function n(e,n){return void 0!==e&&null!==e?e:n}return n.EMPTY_OBJECT=e({}),n}.apply(n,t))&&(e.exports=u)},function(e,n,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function u(e){if((0,c.default)(e)&&!(e.length<1)){for(var n=[],r=e[0],t=0;t<r.length;t++){var u=r[t];n.push(u.slice())}for(var l=1;l<e.length;l++){var s=e[l],a=s[0],f=n[0].length;n[0]=n[0].concat(a);for(var p=new Array(a.length),d=1;d<n.length;d++)n[d]=n[d].concat(p);for(var v=new Array(f),g=1;g<s.length;g++){var m=s[g];n.push(v.concat(m))}}return n=o(n),n=i(n)}}function o(e){var n=e[0],r=(0,d.default)(n);return e.map(function(e){return r.map(function(n){return e[n]})})}function i(e){for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=[e[r][0]];for(var t=1;t<e[0].length;t++)if(e[0][t]===e[0][t-1])for(var u=n[0].length-1,o=0;o<n.length;o++)void 0===n[o][u]&&(n[o][u]=e[o][t]);else for(var i=0;i<n.length;i++)n[i].push(e[i][t]);return n}function l(e,n){if(!(e.length<1)){var r=e[0].map(function(n,r){return e.map(function(e){return e[r]})});return r.unshift(n),r}}var s=r(0),c=t(s),a=r(3),f=t(a),p=r(9),d=t(p);onmessage=function(e){var n=e.data.values.map(function(e){return e.map(function(e){return Array.prototype.slice.call(e)})}),r=e.data.names,t=u(n),o=l(t,r),i=o.map(function(e){return e.join(",")}),s=i.join("\n"),c=f.default.make("csv",s);postMessage(c)}},function(e,n,r){"use strict";var t=r(0),u=r(4),o=r(8),i=!(u.isInternetExplorer()||/Edge/.exec(navigator.userAgent)),l={make:function(e,n){if(n)return"data:attachment/"+e+","+encodeURIComponent(n)},checkCompatibility:function(e,n,r){return!(!i||r)||(t(e)&&e.raiseEvent(new o({title:"Browser Does Not Support Data Download",message:"Unfortunately Microsoft browsers (including all versions of Internet Explorer and Edge) do not support the data uri functionality needed to download data as a file. To download, copy the following uri into another browser such as Chrome, Firefox or Safari: "+n})),!1)}};e.exports=l},function(e,n,r){var t,u;t=[r(1),r(0),r(6)],void 0!==(u=function(e,n,r){"use strict";function t(e){for(var n=e.split("."),r=0,t=n.length;r<t;++r)n[r]=parseInt(n[r],10);return n}function u(){if(!n(F)&&(F=!1,!p())){var e=/ Chrome\/([\.0-9]+)/.exec(E.userAgent);null!==e&&(F=!0,A=t(e[1]))}return F}function o(){return u()&&A}function i(){if(!n(b)&&(b=!1,!u()&&!p()&&/ Safari\/[\.0-9]+/.test(E.userAgent))){var e=/ Version\/([\.0-9]+)/.exec(E.userAgent);null!==e&&(b=!0,w=t(e[1]))}return b}function l(){return i()&&w}function s(){if(!n(C)){C=!1;var e=/ AppleWebKit\/([\.0-9]+)(\+?)/.exec(E.userAgent);null!==e&&(C=!0,I=t(e[1]),I.isNightly=!!e[2])}return C}function c(){return s()&&I}function a(){if(!n(P)){P=!1;var e;"Microsoft Internet Explorer"===E.appName?null!==(e=/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(E.userAgent))&&(P=!0,S=t(e[1])):"Netscape"===E.appName&&null!==(e=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(E.userAgent))&&(P=!0,S=t(e[1]))}return P}function f(){return a()&&S}function p(){if(!n(q)){q=!1;var e=/ Edge\/([\.0-9]+)/.exec(E.userAgent);null!==e&&(q=!0,M=t(e[1]))}return q}function d(){return p()&&M}function v(){if(!n(k)){k=!1;var e=/Firefox\/([\.0-9]+)/.exec(E.userAgent);null!==e&&(k=!0,T=t(e[1]))}return k}function g(){return n(V)||(V=/Windows/i.test(E.appVersion)),V}function m(){return v()&&T}function y(){return n(W)||(W=!v()&&"undefined"!=typeof PointerEvent&&(!n(E.pointerEnabled)||E.pointerEnabled)),W}function h(){if(!n(U)){var e=document.createElement("canvas");e.setAttribute("style","image-rendering: -moz-crisp-edges;image-rendering: pixelated;");var r=e.style.imageRendering;U=n(r)&&""!==r,U&&(O=r)}return U}function x(){return h()?O:void 0}var E;E="undefined"!=typeof navigator?navigator:{};var F,A,b,w,C,I,P,S,q,M,k,T,V,W,O,U,j=[];"undefined"!=typeof ArrayBuffer&&(j.push(Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array),"undefined"!=typeof Uint8ClampedArray&&j.push(Uint8ClampedArray),"undefined"!=typeof CanvasPixelArray&&j.push(CanvasPixelArray));var N={isChrome:u,chromeVersion:o,isSafari:i,safariVersion:l,isWebkit:s,webkitVersion:c,isInternetExplorer:a,internetExplorerVersion:f,isEdge:p,edgeVersion:d,isFirefox:v,firefoxVersion:m,isWindows:g,hardwareConcurrency:e(E.hardwareConcurrency,3),supportsPointerEvents:y,supportsImageRenderingPixelated:h,imageRenderingValue:x,typedArrayTypes:j};return N.supportsFullscreen=function(){return r.supportsFullscreen()},N.supportsTypedArrays=function(){return"undefined"!=typeof ArrayBuffer},N.supportsWebWorkers=function(){return"undefined"!=typeof Worker},N.supportsWebAssembly=function(){return"undefined"!=typeof WebAssembly&&!N.isEdge()},N}.apply(n,t))&&(e.exports=u)},function(e,n,r){var t,u;t=[r(0)],void 0!==(u=function(e){"use strict";var n=Object.freeze;return e(n)||(n=function(e){return e}),n}.apply(n,t))&&(e.exports=u)},function(e,n,r){var t,u;t=[r(0),r(7)],void 0!==(u=function(e,n){"use strict";var r,t={requestFullscreen:void 0,exitFullscreen:void 0,fullscreenEnabled:void 0,fullscreenElement:void 0,fullscreenchange:void 0,fullscreenerror:void 0},u={};return n(u,{element:{get:function(){if(u.supportsFullscreen())return document[t.fullscreenElement]}},changeEventName:{get:function(){if(u.supportsFullscreen())return t.fullscreenchange}},errorEventName:{get:function(){if(u.supportsFullscreen())return t.fullscreenerror}},enabled:{get:function(){if(u.supportsFullscreen())return document[t.fullscreenEnabled]}},fullscreen:{get:function(){if(u.supportsFullscreen())return null!==u.element}}}),u.supportsFullscreen=function(){if(e(r))return r;r=!1;var n=document.body;if("function"==typeof n.requestFullscreen)return t.requestFullscreen="requestFullscreen",t.exitFullscreen="exitFullscreen",t.fullscreenEnabled="fullscreenEnabled",t.fullscreenElement="fullscreenElement",t.fullscreenchange="fullscreenchange",t.fullscreenerror="fullscreenerror",r=!0;for(var u,o=["webkit","moz","o","ms","khtml"],i=0,l=o.length;i<l;++i){var s=o[i];u=s+"RequestFullscreen","function"==typeof n[u]?(t.requestFullscreen=u,r=!0):(u=s+"RequestFullScreen","function"==typeof n[u]&&(t.requestFullscreen=u,r=!0)),u=s+"ExitFullscreen","function"==typeof document[u]?t.exitFullscreen=u:(u=s+"CancelFullScreen","function"==typeof document[u]&&(t.exitFullscreen=u)),u=s+"FullscreenEnabled",void 0!==document[u]?t.fullscreenEnabled=u:(u=s+"FullScreenEnabled",void 0!==document[u]&&(t.fullscreenEnabled=u)),u=s+"FullscreenElement",void 0!==document[u]?t.fullscreenElement=u:(u=s+"FullScreenElement",void 0!==document[u]&&(t.fullscreenElement=u)),u=s+"fullscreenchange",void 0!==document["on"+u]&&("ms"===s&&(u="MSFullscreenChange"),t.fullscreenchange=u),u=s+"fullscreenerror",void 0!==document["on"+u]&&("ms"===s&&(u="MSFullscreenError"),t.fullscreenerror=u)}return r},u.requestFullscreen=function(e,n){u.supportsFullscreen()&&e[t.requestFullscreen]({vrDisplay:n})},u.exitFullscreen=function(){u.supportsFullscreen()&&document[t.exitFullscreen]()},u}.apply(n,t))&&(e.exports=u)},function(e,n,r){var t,u;t=[r(0)],void 0!==(u=function(e){"use strict";var n=function(){try{return"x"in Object.defineProperty({},"x",{})}catch(e){return!1}}(),r=Object.defineProperties;return n&&e(r)||(r=function(e){return e}),r}.apply(n,t))&&(e.exports=u)},function(e,n,r){"use strict";var t=r(1),u=function(e){e=t(e,t.EMPTY_OBJECT),this.sender=e.sender,this.title=t(e.title,"An error occurred"),this.message=e.message,this.raisedToUser=!1};e.exports=u},function(e,n,r){"use strict";function t(e,n){for(var r=e.length,t=new Array(r),u=0;u<r;u++)t[u]=u;return n||(n=function(e,n){return e<n?-1:e>n?1:0}),t.sort(function(r,t){return n(e[r],e[t])}),t}e.exports=t}]);
//# sourceMappingURL=204ad66790254cecb54c.worker.js.map