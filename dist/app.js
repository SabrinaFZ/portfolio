!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=2)}([function(n,e){function t(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var r=t(e,n);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=b[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],e));b[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],c=i[1],s=i[2],u=i[3],f={css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(f):t.push(r[a]={id:a,parts:[f]})}return t}function i(n,e){var t=g(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),x.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=x.indexOf(n);e>=0&&x.splice(e,1)}function c(n){var e=document.createElement("style");return n.attrs.type="text/css",u(e,n.attrs),i(n,e),e}function s(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",u(e,n.attrs),i(n,e),e}function u(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function f(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var u=m++;t=v||(v=c(e)),r=p.bind(null,t,u,!1),o=p.bind(null,t,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),r=d.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=c(e),r=l.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function p(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function l(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function d(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=y(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var b={},h=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),g=function(n){var e={};return function(t){return void 0===e[t]&&(e[t]=n.call(this,t)),e[t]}}(function(n){return document.querySelector(n)}),v=null,m=0,x=[],y=t(5);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=h()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var c=t[a],s=b[c.id];s.refs--,i.push(s)}if(n){r(o(n,e),e)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete b[s.id]}}}};var w=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e,t){"use strict";t(3),t(6),t(8),t(9),t(10),t(11),t(12)},function(n,e,t){var r=t(4);"string"==typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(0)(void 0),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Raleway);",""]),e.push([n.i,"body {\n  background-color: #212121;\n  font-family: 'Raleway', sans-serif; }\n\n.nav-tg {\n  margin: 0 auto;\n  margin-top: 50px;\n  margin-bottom: 80px;\n  border-bottom: 2px solid #9e9e9e;\n  border-top: 2px solid #9e9e9e; }\n  .nav-tg .flex-column {\n    text-align: center; }\n  .nav-tg li {\n    padding: 0px 50px; }\n  .nav-tg a {\n    color: #fafafa; }\n    .nav-tg a:hover {\n      color: #212121;\n      background-color: #9e9e9e;\n      border-radius: 2px;\n      font-weight: bold;\n      border-bottom-right-radius: 0px;\n      border-bottom-left-radius: 0px; }\n    .nav-tg a:active {\n      color: #212121;\n      background-color: #9e9e9e;\n      border-radius: 2px; }\n\nh2 {\n  border: 1px solid #9e9e9e;\n  border-radius: 2px;\n  padding: 10px;\n  font-size: 20px;\n  color: #212121;\n  margin-bottom: 30px;\n  text-align: center;\n  background-color: #eeeeee; }\n\n#about-me {\n  background-color: #eeeeee;\n  padding: 20px;\n  border: 1px solid #9e9e9e;\n  border-radius: 2px; }\n  #about-me b {\n    color: #212121;\n    margin-right: 50px; }\n  #about-me img {\n    border: 1px solid #9e9e9e;\n    border-radius: 2px; }\n  #about-me #accordion .card-header {\n    background-color: #9e9e9e; }\n    #about-me #accordion .card-header a {\n      color: #212121;\n      text-decoration: none; }\n      #about-me #accordion .card-header a:active {\n        text-decoration: none;\n        font-weight: bold; }\n      #about-me #accordion .card-header a:hover {\n        text-decoration: none;\n        font-weight: bold; }\n\n#contact {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: #eeeeee;\n  padding: 20px;\n  border: 1px solid #9e9e9e;\n  border-radius: 2px; }\n  #contact img {\n    border: 1px solid #9e9e9e;\n    border-radius: 2px;\n    width: 20%;\n    height: auto;\n    margin-bottom: 10px;\n    padding: 10px; }\n  #contact .box {\n    text-align: center; }\n\na {\n  color: #212121;\n  text-decoration: none; }\n  a:active {\n    color: #212121;\n    text-decoration: none;\n    font-weight: bold; }\n  a:hover {\n    color: #212121;\n    text-decoration: none;\n    font-weight: bold; }\n",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(n,e,t){var r=t(7);"string"==typeof r&&(r=[[n.i,r,""]]);var o={};o.transform=void 0;t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(0)(void 0),e.push([n.i,"",""])},function(n,e,t){n.exports=t.p+"/img/pic.jpg"},function(n,e,t){n.exports=t.p+"/img/gmail.png"},function(n,e,t){n.exports=t.p+"/img/linkedin.png"},function(n,e,t){n.exports=t.p+"/img/tel.png"},function(n,e,t){n.exports=t.p+"/img/favicon.ico"}]);