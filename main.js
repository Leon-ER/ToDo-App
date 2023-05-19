(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,'\nbody {\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;\n}\nheader {\n  padding-left: 2.3rem;\n  height: 10vh;\n  background-color: rgb(60, 60, 62);\n  border: 1px solid transparent;\n  color: rgb(255, 255, 255);\n  text-decoration: underline;\n}\nnav {\n  padding-top: 20px;\n  width: 20vw;\n  background-color: rgb(197, 199, 204);\n  gap: 20px;\n}\nsection {\n  width: 80vw;\n}\nh2 {\n  font-size: 1.8rem;\n  padding-left: 2.3rem;\n}\nhr {\n  width: 300px;\n}\n\nselect {\n  height: 20px;\n  align-self: center;\n}\n#submitTask>input{\n  height: 20px;\n  align-self: center;\n}\n\n#inbox {\n  padding-top: 20px;\n}\n#center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.task {\n  margin: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  width: 50%;\n  padding-left: 10px;\n  height: 50px;\n  width: 700px;\n  border: 3px solid rgb(40, 37, 50);\n  border-radius: 12px;\n  transform: scale(1);\n  transition: transform .90s, visibility .25s ease-in;\n}\n.task:hover{\n  transform: scale(1.03);\n  transition: transform .90s, visibility .25s ease-in;\n}\n\n.btnStyle {\n  width: 150px;\n  height: 40px;\n  border-radius: 12px;\n  border: transparent;\n  background-color: rgb(89, 93, 93);\n  color: rgb(255, 255, 255);\n  font-size: 1.1rem;\n}\n.remove {\n  width: 150px;\n  height: 30px;\n  border-radius: 12px;\n  border: transparent;\n  align-self: center;\n  background-color: rgb(164, 84, 84);\n  font-size: 1.1rem;\n  margin-right: 5px;\n}\n.flexBox {\n  display: flex;\n  height: 90vh;\n}\n.menu {\n  display: flex;\n  flex-flow: column;\n  gap: 25px;\n  margin-left: 2.3rem;\n}\n.addProject {\n  font-size: 2rem;\n  background-color: transparent;\n  border: transparent;\n  margin-left: 2.3rem;\n}\n/* tabs */\n[data-tab] {\n  display: none;\n}\n.active[data-tab] {\n  display: block;\n  padding-top: 10px;\n  animation: animate 0.75s;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  justify-content: center;\n}\n/* modal */\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 30%;\n}\n.inputsModal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  gap: 20px;\n}\n.close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n.projectDivStyle{\n  background-color: rgba(39, 38, 38, 0.183);\n  width: 300px;\n  margin-left: 2.3rem;\n  border-radius: 12px;\n}\n.styleProject {\n  height: 40px;\n  width: 250px;\n  font-size: 1.2rem;\n  background-color: transparent;\n  border: transparent;\n}\n.projectDivStyle:hover {\n  background-color: #777575;\n}\n/* projectModal */\n\n.projectModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 30%;\n}\n.closeProject {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.closeProject:hover,\n.closeProject:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n#projectsDiv{\n    display: flex;\n    flex-flow: column;\n    gap: 10px;\n}\n.projectRemove{\n  color: rgb(164, 84, 84);\n  border: transparent;\n  background-color: transparent;\n  height: 40px;\n  font-size: 1.2rem;\n  width: 50px;\n  font-weight: 600;\n}\n@keyframes animate {\n  from {\n    opacity: 0;\n    transform: rotateX(-10deg);\n  }\n  to {\n    opacity: 1;\n    transform: rotateX(0deg);\n  }\n}\n',""]);const u=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],u=0;u<t.length;u++){var d=t[u],s=r.base?d[0]+r.base:d[0],l=o[s]||0,c="".concat(s," ").concat(l);o[s]=l+1;var m=n(c),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var h=a(f,r);r.byIndex=u,e.splice(u,0,{identifier:c,updater:h,references:1})}i.push(c)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var u=n(o[i]);e[u].references--}for(var d=r(t,a),s=0;s<o.length;s++){var l=n(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),s=n(216),l=n.n(s),c=n(589),m=n.n(c),f=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let g=[];function p(t){this.title=t}function v(t){const e=document.getElementById("projectsDiv"),n=document.createElement("button"),r=document.createElement("button"),a=document.createElement("div");let o=t.split(" ").join("").toLowerCase();e.appendChild(a),a.classList.add("projectDivStyle"),a.appendChild(n),a.appendChild(r),r.classList.add("projectRemove"),r.innerHTML="X",n.classList.add("styleProject"),n.innerHTML=t,n.setAttribute("data-tab-target",`#${o}`),n.setAttribute("id",`#${o}`),r.setAttribute("id",`#${o}`),r.setAttribute("dataBtn",o);const i=document.getElementById("tabSection"),u=document.createElement("div"),d=document.createElement("button"),s=document.createElement("h1");i.appendChild(u),u.setAttribute("dataID",`#${o}`),u.setAttribute("id",o),u.setAttribute("data-tab",""),u.appendChild(s),u.appendChild(d),s.innerHTML=t,d.classList.add("btnStyle"),d.setAttribute("id","addTask"),d.innerHTML="Add new task",d.setAttribute("data-id",o)}function b(){localStorage.setItem("tasks",JSON.stringify(T))}function y(){localStorage.setItem("projects",JSON.stringify(g))}function w(){const t=localStorage.getItem("tasks");return t?JSON.parse(t):[]}let T=[];function x(t,e,n,r,a,o){this.title=t,this.priority=e,this.date=n,this.description=r,this.projectID=a,this.taskData=o}function C(t,e,n,r,a,o){const i=document.getElementById(t),u=document.createElement("div"),d=document.createElement("p"),s=document.createElement("input"),l=document.createElement("button"),c=document.createElement("p"),m=document.createElement("p"),f=document.createElement("input");i.appendChild(u),u.classList.add("task"),u.appendChild(f),f.type="checkbox",f.setAttribute("id","projectCompleted"),u.appendChild(d),d.innerHTML=e,u.appendChild(m),m.innerHTML=a,u.appendChild(c),c.innerHTML=n,u.appendChild(s),s.type="date",s.value=r,s.disabled=!0,u.appendChild(l),l.classList.add("remove"),l.innerHTML="Remove",l.setAttribute("data",o),u.setAttribute("data",o)}function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function k(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function M(t){k(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===D(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function S(t){k(1,arguments);var e=M(t);return e.setHours(0,0,0,0),e}function E(t){return k(1,arguments),function(t,e){k(2,arguments);var n=S(t),r=S(e);return n.getTime()===r.getTime()}(t,Date.now())}Math.pow(10,8);var N=6e4,P=36e5;function U(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function j(t,e){var n;k(1,arguments);var r=U(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,o=function(t){var e,n={},r=t.split(W.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],W.timeZoneDelimiter.test(n.date)&&(n.date=t.split(W.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=W.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(o.date){var i=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(o.date,r);a=function(t,e){if(null===e)return new Date(NaN);var n=t.match(L);if(!n)return new Date(NaN);var r=!!n[4],a=O(n[1]),o=O(n[2])-1,i=O(n[3]),u=O(n[4]),d=O(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,d)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,d):new Date(NaN);var s=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(A[e]||(H(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(H(t)?366:365)}(e,a)?(s.setUTCFullYear(e,o,Math.max(a,i)),s):new Date(NaN)}(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var u,d=a.getTime(),s=0;if(o.time&&(s=function(t){var e=t.match(I);if(!e)return NaN;var n=B(e[1]),r=B(e[2]),a=B(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*P+r*N+1e3*a:NaN}(o.time),isNaN(s)))return new Date(NaN);if(!o.timezone){var l=new Date(d+s),c=new Date(0);return c.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),c.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),c}return u=function(t){if("Z"===t)return 0;var e=t.match(Y);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*P+a*N):NaN}(o.timezone),isNaN(u)?new Date(NaN):new Date(d+s+u)}var W={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},L=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,I=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Y=/^([+-])(\d{2})(?::?(\d{2}))?$/;function O(t){return t?parseInt(t):1}function B(t){return t&&parseFloat(t.replace(",","."))||0}var A=[31,null,31,30,31,30,31,31,30,31,30,31];function H(t){return t%400==0||t%4==0&&t%100!=0}function q(t){k(1,arguments);var e=M(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function z(t){k(1,arguments);var e=M(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=q(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=q(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}var F={};function R(){return F}function G(t,e){var n,r,a,o,i,u,d,s;k(1,arguments);var l=R(),c=U(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:l.weekStartsOn)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=M(t),f=m.getUTCDay(),h=(f<c?7:0)+f-c;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function X(t,e){var n,r,a,o,i,u,d,s;k(1,arguments);var l=M(t),c=l.getUTCFullYear(),m=R(),f=U(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(c+1,0,f),h.setUTCHours(0,0,0,0);var g=G(h,e),p=new Date(0);p.setUTCFullYear(c,0,f),p.setUTCHours(0,0,0,0);var v=G(p,e);return l.getTime()>=g.getTime()?c+1:l.getTime()>=v.getTime()?c:c-1}function Q(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const $=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},J=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Q(n+1,2)},Z=function(t,e){return Q(t.getUTCDate(),e.length)},_=function(t,e){return Q(t.getUTCHours()%12||12,e.length)},V=function(t,e){return Q(t.getUTCHours(),e.length)},K=function(t,e){return Q(t.getUTCMinutes(),e.length)},tt=function(t,e){return Q(t.getUTCSeconds(),e.length)},et=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Q(Math.floor(r*Math.pow(10,n-3)),e.length)};var nt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return $(t,e)},Y:function(t,e,n,r){var a=X(t,r),o=a>0?a:1-a;return"YY"===e?Q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(z(t),e.length)},u:function(t,e){return Q(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return J(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){k(1,arguments);var n=M(t),r=G(n,e).getTime()-function(t,e){var n,r,a,o,i,u,d,s;k(1,arguments);var l=R(),c=U(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:l.firstWeekContainsDate)&&void 0!==r?r:null===(d=l.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),m=X(t,e),f=new Date(0);return f.setUTCFullYear(m,0,c),f.setUTCHours(0,0,0,0),G(f,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){var r=function(t){k(1,arguments);var e=M(t),n=q(e).getTime()-function(t){k(1,arguments);var e=z(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),q(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Z(t,e)},D:function(t,e,n){var r=function(t){k(1,arguments);var e=M(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return _(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):V(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):K(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):tt(t,e)},S:function(t,e){return et(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return at(a);case"XXXX":case"XX":return ot(a);default:return ot(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return at(a);case"xxxx":case"xx":return ot(a);default:return ot(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+rt(a,":");default:return"GMT"+ot(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+rt(a,":");default:return"GMT"+ot(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return Q(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return Q((r._originalDate||t).getTime(),e.length)}};function rt(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+Q(o,2)}function at(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):ot(t,e)}function ot(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+Q(Math.floor(a/60),2)+n+Q(a%60,2)}const it=nt;var ut=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},dt=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const st={p:dt,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return ut(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ut(a,e)).replace("{{time}}",dt(o,e))}};var lt=["D","DD"],ct=["YY","YYYY"];function mt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ft={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ht(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const gt={date:ht({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ht({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ht({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var pt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function vt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const bt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:vt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:vt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:vt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:vt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:vt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function yt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}var wt,Tt={ordinalNumber:(wt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(wt.matchPattern);if(!n)return null;var r=n[0],a=t.match(wt.parsePattern);if(!a)return null;var o=wt.valueCallback?wt.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:yt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:yt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:yt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:yt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:yt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const xt={code:"en-US",formatDistance:function(t,e,n){var r,a=ft[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:gt,formatRelative:function(t,e,n,r){return pt[t]},localize:bt,match:Tt,options:{weekStartsOn:0,firstWeekContainsDate:1}};var Ct=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Dt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,kt=/^'([^]*?)'?$/,Mt=/''/g,St=/[a-zA-Z]/;function Et(t,e,n){var r,a,o,i,u,d,s,l,c,m,f,h,g,p,v,b,y,w;k(2,arguments);var T=String(e),x=R(),C=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:x.locale)&&void 0!==r?r:xt,S=U(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(s=n.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:x.firstWeekContainsDate)&&void 0!==i?i:null===(c=x.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var E=U(null!==(f=null!==(h=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(v=n.locale)||void 0===v||null===(b=v.options)||void 0===b?void 0:b.weekStartsOn)&&void 0!==g?g:x.weekStartsOn)&&void 0!==h?h:null===(y=x.locale)||void 0===y||null===(w=y.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==f?f:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!C.localize)throw new RangeError("locale must contain localize property");if(!C.formatLong)throw new RangeError("locale must contain formatLong property");var N=M(t);if(!function(t){if(k(1,arguments),!function(t){return k(1,arguments),t instanceof Date||"object"===D(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=M(t);return!isNaN(Number(e))}(N))throw new RangeError("Invalid time value");var P=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(N),j=function(t,e){return k(2,arguments),function(t,e){k(2,arguments);var n=M(t).getTime(),r=U(e);return new Date(n+r)}(t,-U(e))}(N,P),W={firstWeekContainsDate:S,weekStartsOn:E,locale:C,_originalDate:N};return T.match(Dt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,st[e])(t,C.formatLong):t})).join("").match(Ct).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(kt))?o[1].replace(Mt,"'"):a;var u,d=it[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===ct.indexOf(u))||mt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==lt.indexOf(t)}(r)||mt(r,e,String(t)),d(j,r,C.localize,W);if(i.match(St))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}function Nt(){document.getElementById("tasksToday").innerHTML="";const t=function(){let t=w(),e=[];for(let n=0;n<t.length;n++)E(j(t[n].date))&&e.push(t[n]);return e}();for(let e=0;e<t.length;e++){const n=t[e];C("tasksToday",n.title,n.priority,n.date,n.description,n.taskData)}}function Pt(){document.getElementById("tasksOverdue").innerHTML="";const t=function(){let t=Et(new Date,"yyyy-MM-dd"),e=w(),n=[];for(let r=0;r<e.length;r++)t>e[r].date&&n.push(e[r]);return n}();for(let e=0;e<t.length;e++){const n=t[e];C("tasksOverdue",n.title,n.priority,n.date,n.description,n.taskData)}}let Ut="";Pt(),Nt(),function(){const t=w(),e=function(){const t=localStorage.getItem("projects");return t?JSON.parse(t):[]}();T=t.concat(T),g=e.concat(g),0!==e.length&&e.forEach((t=>{v(t.title)})),0!==t.length&&t.forEach((t=>{C(t.projectID,t.title,t.priority,t.date,t.description,t.taskData)}))}(),function(){document.getElementById("btnContainer").addEventListener("click",(t=>{if(t.target.matches("[data-tab-target]")){const e=document.querySelector(t.target.dataset.tabTarget);document.querySelectorAll("[data-tab]").forEach((t=>{t.classList.remove("active")})),e.classList.add("active"),Ut=e.id}t.target.matches(".projectRemove")&&function(t){const e=t.target.attributes.dataBtn.value,n=document.querySelectorAll(`[id='#${e}']`);Array.from(n).forEach((t=>{t.parentNode.removeChild(t)}));const r=document.querySelectorAll(`[dataID='#${e}']`);Array.from(r).forEach((t=>{t.parentNode.removeChild(t)})),function(t){const e=T.filter((e=>e.projectID!==t));T.length=0,T.push(...e)}(e),g.splice(e,1),y(),b()}(t)})),document.getElementById("tabSection").addEventListener("click",(e=>{e.target.matches("#addTask")&&(t.style.display="block"),e.target.matches(".remove")&&function(t){let e=t.target.getAttribute("data"),n=document.querySelectorAll(`[data="${e}"]`);Array.from(n).forEach((t=>{t.parentNode.removeChild(t),T.splice(e,1),b()}))}(e)}));let t=document.getElementById("myModal");document.getElementsByClassName("close")[0].addEventListener("click",(()=>{t.style.display="none"})),window.onclick=function(e){e.target==t&&(t.style.display="none")},document.getElementById("submitBtn").addEventListener("click",(e=>{e.preventDefault();let n=function(){const t=document.getElementById("name").value,e=document.getElementById("priority").value,n=document.getElementById("date").value,r=document.getElementById("description").value,a=document.getElementById(Ut).getAttribute("id");let o=t.split(" ").join("").toLowerCase();return""===t||""===e||"dd/mm/yyy"===n||""===r?(alert("Please enter inputs"),null):new x(t,e,n,r,a,o)}();null!==n&&(function(t){const e=document.getElementById("name").value,n=document.getElementById("priority").value,r=document.getElementById("date").value,a=document.getElementById("description").value,o=document.getElementById(Ut).getAttribute("id");let i=e.split(" ").join("").toLowerCase();T.push(t),b(),C(o,e,n,r,a,i)}(n),Nt(),Pt(),t.style.display="none",document.getElementById("submitTask").reset())}));const e=document.querySelector(".addProject"),n=document.getElementById("projectmyModal"),r=document.getElementsByClassName("closeProject")[0];document.getElementById("submitProject").addEventListener("click",(t=>{t.preventDefault();let e=function(){const t=document.getElementById("projectName").value;return""===t?(alert("Please enter valid inputs"),null):new p(t)}();null!==e&&(function(t){const e=document.getElementById("projectName").value;g.push(t),v(e)}(e),document.getElementById("projectForm").reset(),y(),n.style.display="none")})),e.addEventListener("click",(()=>{n.style.display="block"})),r.addEventListener("click",(()=>{n.style.display="none"})),window.addEventListener("click",(t=>{t.target==n&&(n.style.display="none")}))}()})()})();