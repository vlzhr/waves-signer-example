(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dApp"] = factory();
	else
		root["dApp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@waves.exchange/provider-web/dist/provider-web.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@waves.exchange/provider-web/dist/provider-web.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return s})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return a})),n.d(e,"__metadata",(function(){return c})),n.d(e,"__awaiter",(function(){return f})),n.d(e,"__generator",(function(){return l})),n.d(e,"__exportStar",(function(){return h})),n.d(e,"__values",(function(){return d})),n.d(e,"__read",(function(){return p})),n.d(e,"__spread",(function(){return _})),n.d(e,"__spreadArrays",(function(){return v})),n.d(e,"__await",(function(){return y})),n.d(e,"__asyncGenerator",(function(){return w})),n.d(e,"__asyncDelegator",(function(){return g})),n.d(e,"__asyncValues",(function(){return m})),n.d(e,"__makeTemplateObject",(function(){return b})),n.d(e,"__importStar",(function(){return O})),n.d(e,"__importDefault",(function(){return P}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function a(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,u)}a((r=r.apply(t,e||[])).next())}))}function l(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function h(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function p(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function _(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,u=i.length;s<u;s++,o++)r[o]=i[s];return r}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function w(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof y?Promise.resolve(n.value.v).then(a,c):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function a(t){u("next",t)}function c(t){u("throw",t)}function f(t,e){t(e),i.shift(),i.length&&u(i[0][0],i[0][1])}}function g(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:y(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function b(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function O(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function P(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(12)),r(n(6)),r(n(16)),r(n(7)),r(n(5)),r(n(4))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.keys=function(t){return Object.keys(t)};var r=Math.floor(Date.now()*Math.random()),o=0;e.uniqueId=function(t){return t+"-"+r+"-"+o++},e.toArray=function(t){return Array.isArray(t)?t:[t]},e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return t.reduce((function(t,e){return e(t)}),e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(11),i=function(){function t(t){this._events=[],this._queue=new o.Queue(t)}return t.prototype.sendEvent=function(t){this._events.push(t)},t.prototype.dialog=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n,o,i,s=this;return r.__generator(this,(function(u){switch(u.label){case 0:return this._runBeforeShow(),[4,this._getBus()];case 1:if(e=u.sent(),n=function(){return r.__awaiter(s,void 0,void 0,(function(){return r.__generator(this,(function(n){return[2,t(e)]}))}))},this._runEvents(e),!this._queue.canPush())return[3,6];u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this._queue.push(n)];case 3:return o=u.sent(),this._runAfterShow(),[2,o];case 4:return i=u.sent(),this._runAfterShow(),[2,Promise.reject(i)];case 5:return[3,7];case 6:return[2,Promise.reject(new Error("Queue is full!"))];case 7:return[2]}}))}))},t.prototype._runBeforeShow=function(){0===this._queue.length&&this._beforeShow()},t.prototype._runAfterShow=function(){0===this._queue.length&&this._afterShow()},t.prototype._runEvents=function(t){this._events.splice(0,this._events.length).forEach((function(e){return e(t)}))},t}();e.Transport=i},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(2)),r(n(13)),r(n(15))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){!function(t){t.LOG_LEVEL={PRODUCTION:0,ERRORS:1,VERBOSE:2},t.logLevel=t.LOG_LEVEL.PRODUCTION,t.methodsData={log:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},info:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},warn:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},error:{save:!0,logLevel:t.LOG_LEVEL.ERRORS}}}(t.console||(t.console={}))}(e.config||(e.config={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){};e.Adapter=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(n,r){var o=t.call(this)||this;return o.win=n,o.type=r,o.handler=function(t){o.trigger("message",t)},r===e.PROTOCOL_TYPES.LISTEN&&o.win.addEventListener("message",o.handler,!1),o}var n;return o(e,t),e.prototype.dispatch=function(t){return this.win.postMessage(t,"*"),this},e.prototype.destroy=function(){this.type===e.PROTOCOL_TYPES.LISTEN&&this.win.removeEventListener("message",this.handler,!1),this.win=e._fakeWin},e._fakeWin={postMessage:n=function(){return null},addEventListener:n,removeEventListener:n},e}(n(17).EventEmitter);e.WindowProtocol=i,function(t){t.PROTOCOL_TYPES={LISTEN:"listen",DISPATCH:"dispatch"}}(i=e.WindowProtocol||(e.WindowProtocol={})),e.WindowProtocol=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);e.ProviderWeb=r.ProviderWeb,e.default=r.ProviderWeb},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(10),i=n(19),s=n(1),u=function(){function t(e,n){e=(e||"https://waves.exchange/signer")+"?"+t._getCacheClean();var r=o.TransportIframe.canUse()?o.TransportIframe:i.TransportWindow;this._transport=new r(e,3),null!=n&&(s.config.console.logLevel=s.config.console.LOG_LEVEL.VERBOSE)}return t._getCacheClean=function(){return String(Date.now()%6e4)},t.prototype.connect=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,Promise.resolve(this._transport.sendEvent((function(e){return e.dispatchEvent("connect",t)})))]}))}))},t.prototype.logout=function(){return this._transport.dialog((function(t){return t.request("logout")}))},t.prototype.login=function(){return this._transport.dialog((function(t){return t.request("login")}))},t.prototype.signMessage=function(t){return this._transport.dialog((function(e){return e.request("sign-message",t)}))},t.prototype.signTypedData=function(t){return this._transport.dialog((function(e){return e.request("sign-typed-data",t)}))},t.prototype.sign=function(t){return this._transport.dialog((function(e){return e.request("sign",t)}))},t}();e.ProviderWeb=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3),i=n(1),s=function(t){function e(e,n){var r=t.call(this,n)||this;return r._url=e,r}return r.__extends(e,t),e.canUse=function(){var t=navigator.userAgent.toLowerCase(),e=t.includes("safari")&&!t.includes("chrome");return!(null!=navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)||e)},e._addIframeToDom=function(t){null!=document.body?document.body.appendChild(t):document.addEventListener("DOMContentLoaded",(function(){document.body.appendChild(t)}))},e._createIframe=function(t){var e=document.createElement("iframe");return e.style.transition="opacity .2s",e.style.position="absolute",e.style.opacity="0",e.style.width="100%",e.style.height="100%",e.style.left="0",e.style.top="0",e.style.border="none",e.style.position="fixed",e.src=t,e},e.prototype._getBus=function(){return r.__awaiter(this,void 0,void 0,(function(){var t=this;return r.__generator(this,(function(n){return this._bus?[2,Promise.resolve(this._bus)]:(null==this._iframe&&(this._iframe=e._createIframe(this._url),e._addIframeToDom(this._iframe)),[2,i.WindowAdapter.createSimpleWindowAdapter(this._iframe).then((function(e){return new Promise((function(n){t._bus=new i.Bus(e,-1),t._bus.once("ready",(function(){return n(t._bus)}))}))}))])}))}))},e.prototype._beforeShow=function(){null==this._iframe&&(this._iframe=e._createIframe(this._url),e._addIframeToDom(this._iframe)),this._showIframe()},e.prototype._afterShow=function(){this._hideIframe()},e.prototype._showIframe=function(){var t=this;this._applyStyle({width:"100%",height:"100%",left:"0",top:"0",border:"none",position:"fixed",display:"block",opacity:"0",zIndex:"99999999"}),null!=e._timer&&clearTimeout(e._timer),e._timer=setTimeout((function(){t._applyStyle({opacity:"1"})}),0)},e.prototype._hideIframe=function(){var t=this;this._applyStyle({opacity:"0"}),null!=e._timer&&clearTimeout(e._timer),e._timer=setTimeout((function(){t._applyStyle({width:"10px",height:"10px",left:"-100px",top:"-100px",position:"absolute",opacity:"0",zIndex:"0",display:"none"})}),200)},e.prototype._applyStyle=function(t){var e=this;Object.entries(t).forEach((function(t){var n=t[0],r=t[1];null!=r&&(e._iframe.style[n]=r)}))},e._timer=null,e}(o.Transport);e.TransportIframe=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t){this.actions=[],this.maxLength=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this.actions.length+(null==this.active?0:1)},enumerable:!0,configurable:!0}),t.prototype.push=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(n){if(this.actions.length>=this.maxLength)throw new Error("Cant't push action! Queue is full!");return[2,new Promise((function(n,o){e.actions.push((function(){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,t().then((function(t){return n(t)}),o)]}))}))})),1===e.length&&e.run()}))]}))}))},t.prototype.canPush=function(){return this.actions.length<this.maxLength},t.prototype.run=function(){var t=this,e=this.actions.shift();null!=e&&(this.active=e(),this.active.finally((function(){t.active=void 0;var n=t.actions.indexOf(e);-1!==n&&t.actions.splice(n,1),t.run()})))},t}();e.Queue=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);!function(t){t[t.Event=0]="Event",t[t.Action=1]="Action",t[t.Response=2]="Response"}(e.EventType||(e.EventType={})),function(t){t[t.Success=0]="Success",t[t.Error=1]="Error"}(e.ResponseStatus||(e.ResponseStatus={}));var o=function(){function t(t,e){var n=this;this.id=r.uniqueId("bus"),this._timeout=e||5e3,this._adapter=t,this._adapter.addListener((function(t){return n._onMessage(t)})),this._eventHandlers=Object.create(null),this._activeRequestHash=Object.create(null),this._requestHandlers=Object.create(null),r.console.info('Create Bus with id "'+this.id+'"')}return t.prototype.dispatchEvent=function(e,n){return this._adapter.send(t._createEvent(e,n)),r.console.info('Dispatch event "'+e+'"',n),this},t.prototype.request=function(t,e,n){var o=this;return new Promise((function(i,s){var u,a=r.uniqueId(o.id+"-action"),c=n||o._timeout;-1!==(n||o._timeout)&&(u=setTimeout((function(){delete o._activeRequestHash[a];var e=new Error('Timeout error for request with name "'+t+'" and timeout '+c+"!");r.console.error(e),s(e)}),c));var f=function(){u&&clearTimeout(u)};o._activeRequestHash[a]={reject:function(e){f(),r.console.error('Error request with name "'+t+'"',e),s(e)},resolve:function(e){f(),r.console.info('Request with name "'+t+'" success resolved!',e),i(e)}},o._adapter.send({id:a,type:1,name:t,data:e}),r.console.info('Request with name "'+t+'"',e)}))},t.prototype.on=function(t,e,n){return this._addEventHandler(t,e,n,!1)},t.prototype.once=function(t,e,n){return this._addEventHandler(t,e,n,!0)},t.prototype.off=function(t,e){var n=this;return t?this._eventHandlers[t]?e?(this._eventHandlers[t]=this._eventHandlers[t].filter((function(t){return t.handler!==e})),this._eventHandlers[t].length||delete this._eventHandlers[t],this):(this._eventHandlers[t].slice().forEach((function(e){n.off(t,e.handler)})),this):this:(Object.keys(this._eventHandlers).forEach((function(t){return n.off(t,e)})),this)},t.prototype.registerRequestHandler=function(t,e){if(this._requestHandlers[t])throw new Error("Duplicate request handler!");return this._requestHandlers[t]=e,this},t.prototype.unregisterHandler=function(t){return this._requestHandlers[t]&&delete this._requestHandlers[t],this},t.prototype.changeAdapter=function(e){var n=this,r=new t(e,this._timeout);return Object.keys(this._eventHandlers).forEach((function(t){n._eventHandlers[t].forEach((function(e){e.once?r.once(t,e.handler,e.context):r.on(t,e.handler,e.context)}))})),Object.keys(this._requestHandlers).forEach((function(t){r.registerRequestHandler(t,n._requestHandlers[t])})),r},t.prototype.destroy=function(){r.console.info("Destroy Bus"),this.off(),this._adapter.destroy()},t.prototype._addEventHandler=function(t,e,n,r){return this._eventHandlers[t]||(this._eventHandlers[t]=[]),this._eventHandlers[t].push({handler:e,once:r,context:n}),this},t.prototype._onMessage=function(t){switch(t.type){case 0:r.console.info('Has event with name "'+String(t.name)+'"',t.data),this._fireEvent(String(t.name),t.data);break;case 1:r.console.info('Start action with id "'+t.id+'" and name "'+String(t.name)+'"',t.data),this._createResponse(t);break;case 2:r.console.info('Start response with name "'+t.id+'" and status "'+t.status+'"',t.content),this._fireEndAction(t)}},t.prototype._createResponse=function(e){var n=this,o=function(t){r.console.error(t),n._adapter.send({id:e.id,type:2,status:1,content:String(t)})};if(this._requestHandlers[String(e.name)])try{var i=this._requestHandlers[String(e.name)](e.data);t._isPromise(i)?i.then((function(t){n._adapter.send({id:e.id,type:2,status:0,content:t})}),o):this._adapter.send({id:e.id,type:2,status:0,content:i})}catch(t){o(t)}else o(new Error('Has no handler for "'+String(e.name)+'" action!'))},t.prototype._fireEndAction=function(t){if(this._activeRequestHash[t.id]){switch(t.status){case 1:this._activeRequestHash[t.id].reject(t.content);break;case 0:this._activeRequestHash[t.id].resolve(t.content)}delete this._activeRequestHash[t.id]}},t.prototype._fireEvent=function(t,e){this._eventHandlers[t]&&(this._eventHandlers[t]=this._eventHandlers[t].slice().filter((function(t){try{t.handler.call(t.context,e)}catch(t){r.console.warn(t)}return!t.once})),this._eventHandlers[t].length||delete this._eventHandlers[t])},t._createEvent=function(t,e){return{type:0,name:t,data:e}},t._isPromise=function(t){return t&&t.then&&"function"==typeof t.then},t}();e.Bus=o},function(t,e,n){"use strict";(function(t){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=n(2),s=(self||t).console,u=Object.create(null);function a(t){u[t]||(u[t]=[])}function c(t,e){u[t].push(e)}e.console=r({},i.keys(o.config.console.methodsData).reduce((function(t,e){return t[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];o.config.console.logLevel<o.config.console.methodsData[e].logLevel?o.config.console.methodsData[e].save&&(a(e),c(e,t)):s[e].apply(s,t)},t}),Object.create(null)),{getSavedMessages:function(t){return u[t]||[]}})}).call(this,n(14))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.size=0,this.hash=Object.create(null),t&&t.forEach(this.add,this)}return t.prototype.add=function(t){return this.hash[t]=!0,this.size=Object.keys(this.hash).length,this},t.prototype.has=function(t){return t in this.hash},t.prototype.toArray=function(){return Object.keys(this.hash)},t}();e.UniqPrimitiveCollection=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),u=n(1),a=n(7),c=n(2),f={origins:[],availableChanelId:[]},l=function(t){function e(n,r,o){var i=t.call(this)||this;return i.id=u.uniqueId("wa"),i.callbacks=[],i.options=e.prepareOptions(o),i.listen=n,i.dispatch=r,i.listen.forEach((function(t){return t.on("message",i.onMessage,i)})),i}return o(e,t),e.prototype.addListener=function(t){return this.callbacks.push(t),u.console.info("WindowAdapter: Add iframe message listener"),this},e.prototype.send=function(t){var e=i({},t,{chanelId:this.options.chanelId});return this.dispatch.forEach((function(t){return t.dispatch(e)})),u.console.info("WindowAdapter: Send message",e),this},e.prototype.destroy=function(){this.listen.forEach((function(t){return t.destroy()})),this.dispatch.forEach((function(t){return t.destroy()})),u.console.info("WindowAdapter: Destroy")},e.prototype.onMessage=function(t){this.accessEvent(t)&&this.callbacks.forEach((function(e){try{e(t.data)}catch(t){u.console.warn("WindowAdapter: Unhandled exception!",t)}}))},e.prototype.accessEvent=function(t){if("object"!=typeof t.data||null==t.data.type)return u.console.info("WindowAdapter: Block event. Wrong event format!",t.data),!1;if(!this.options.origins.has("*")&&!this.options.origins.has(t.origin))return u.console.info('SimpleWindowAdapter: Block event by origin "'+t.origin+'"'),!1;if(!this.options.availableChanelId.size)return!0;var e=!(!t.data.chanelId||!this.options.availableChanelId.has(t.data.chanelId));return e||u.console.info('SimpleWindowAdapter: Block event by chanel id "'+t.data.chanelId+'"'),e},e.createSimpleWindowAdapter=function(t,n){var r=this,o=this.getContentOrigin(t),i=this.prepareOptions(n),s=[];o&&i.origins.add(o);var u=new a.WindowProtocol(window,a.WindowProtocol.PROTOCOL_TYPES.LISTEN),c=function(t){s.push(t)};return u.on("message",c),this.getIframeContent(t).then((function(t){var n=new a.WindowProtocol(t.win,a.WindowProtocol.PROTOCOL_TYPES.DISPATCH),o=new e([u],[n],r.unPrepareOptions(i));return s.forEach((function(t){o.onMessage(t)})),u.off("message",c),o}))},e.prepareOptions=function(t){void 0===t&&(t=f);var e=function(t,e){return c.pipe(u.toArray,(n=e,function(t){return t.reduce((function(t,e){return t.add(e)}),n)}))(t);var n},n=e(t.origins||[],new u.UniqPrimitiveCollection([window.location.origin])),r=e(t.availableChanelId||[],new u.UniqPrimitiveCollection);return i({},t,{origins:n,availableChanelId:r})},e.unPrepareOptions=function(t){return{origins:t.origins.toArray(),availableChanelId:t.availableChanelId.toArray(),chanelId:t.chanelId}},e.getIframeContent=function(t){return t?t instanceof HTMLIFrameElement?t.contentWindow?Promise.resolve({win:t.contentWindow}):new Promise((function(e,n){t.addEventListener("load",(function(){return e({win:t.contentWindow})}),!1),t.addEventListener("error",n,!1)})):Promise.resolve({win:t}):Promise.resolve({win:window.opener||window.parent})},e.getContentOrigin=function(t){if(!t)try{return new URL(document.referrer).origin}catch(t){return null}if(!(t instanceof HTMLIFrameElement))try{return window.top.origin}catch(t){return null}try{return new URL(t.src).origin||null}catch(t){return null}},e}(s.Adapter);e.WindowAdapter=l},function(t,e,n){"use strict";e.__esModule=!0,function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(18))},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(){this._events=Object.create(null)}return t.prototype.hasListeners=function(t){return!(!this._events[t]||!this._events[t].length)},t.prototype.getActiveEvents=function(){var t=this;return Object.keys(this._events).filter((function(e){return t.hasListeners(e)}))},t.prototype.trigger=function(t,e){this._events[t]&&(this._events[t]=this._events[t].filter((function(t){try{t.handler.call(t.context,e)}catch(t){}return!t.once})),this._events[t].length||delete this._events[t])},t.prototype.on=function(t,e,n){this._on(t,e,n,!1)},t.prototype.once=function(t,e,n){this._on(t,e,n,!0)},t.prototype.off=function(t,e){var n=this,r="string"==typeof t?t:null,o="function"==typeof e?e:"function"==typeof t?t:null;r?o?r in this._events&&(this._events[r]=this._events[r].filter((function(t){return t.handler!==o}))):delete this._events[r]:Object.keys(this._events).forEach((function(t){n.off(t,o)}))},t.prototype._on=function(t,e,n,r){this._events[t]||(this._events[t]=[]),this._events[t].push({handler:e,context:n,once:r})},t}();e.EventEmitter=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3),i=n(1),s=function(t){function e(e,n){var r=t.call(this,n)||this;return r._url=e,r}return r.__extends(e,t),e.prototype._beforeShow=function(){},e.prototype._afterShow=function(){null!=this._active&&(this._active.win.close(),this._active.bus.destroy()),this._active=void 0},e.prototype._getBus=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e,n,o;return r.__generator(this,(function(r){switch(r.label){case 0:if(null!=this._active)return[2,Promise.resolve(this._active.bus)];if(t=window.open(this._url),e=new URL("",this._url).origin,null==t)throw new Error("Method must be called in user event!");return[4,i.WindowAdapter.createSimpleWindowAdapter(t,{origins:e})];case 1:return n=r.sent(),o=new i.Bus(n,-1),this._active={win:t,bus:o},[2,new Promise((function(t){o.once("ready",(function(){return t(o)}))}))]}}))}))},e}(o.Transport);e.TransportWindow=s}])}));

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./node_modules/@waves/node-api-js/cjs/tools/query.js"));
function fetchDataKey(base, address, key, options) {
    return request_1.default({
        base: base,
        url: "/addresses/data/" + address + "/" + encodeURIComponent(key)
    });
}
exports.fetchDataKey = fetchDataKey;
function fetchScriptInfoMeta(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/scriptInfo/" + address + "/meta"
    });
}
exports.fetchScriptInfoMeta = fetchScriptInfoMeta;
function fetchBalanceDetails(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/balance/details/" + address
    });
}
exports.fetchBalanceDetails = fetchBalanceDetails;
function fetchBalanceConfirmations(base, address, confirmations, options) {
    return request_1.default({
        base: base,
        url: "/addresses/balance/" + address + "/" + confirmations
    });
}
exports.fetchBalanceConfirmations = fetchBalanceConfirmations;
function fetchScriptInfo(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/scriptInfo/" + address
    });
}
exports.fetchScriptInfo = fetchScriptInfo;
function data(base, address, params, options) {
    if (params === void 0) { params = Object.create(null); }
    return request_1.default({
        base: base,
        url: "/addresses/data/" + address + query_1.default(params)
    });
}
exports.data = data;
function fetchValidate(base, address, options) {
    return request_1.default({ base: base, url: "/addresses/validate/" + address });
}
exports.fetchValidate = fetchValidate;
function fetchBalance(base, address, options) {
    return request_1.default({ base: base, url: "/addresses/balance/" + address });
}
exports.fetchBalance = fetchBalance;
function fetchEffectiveBalanceConfirmations(base, address, confirmations) {
    return request_1.default({
        base: base,
        url: "/addresses/effectiveBalance/" + address + "/" + confirmations
    });
}
exports.fetchEffectiveBalanceConfirmations = fetchEffectiveBalanceConfirmations;
function fetchEffectiveBalance(base, address) {
    return request_1.default({
        base: base,
        url: "/addresses/effectiveBalance/" + address
    });
}
exports.fetchEffectiveBalance = fetchEffectiveBalance;
function fetchSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/addresses/seq/" + from + "/" + to
    });
}
exports.fetchSeq = fetchSeq;
function fetchSeed(base, address) {
    return request_1.default({
        base: base,
        url: "/addresses/seed/" + address
    });
}
exports.fetchSeed = fetchSeed;
function fetchPublicKey(base, publicKey) {
    return request_1.default({
        base: base,
        url: "/addresses/publicKey/" + publicKey
    });
}
exports.fetchPublicKey = fetchPublicKey;
function fetchAddresses(base) {
    return request_1.default({
        base: base,
        url: '/addresses'
    });
}
exports.fetchAddresses = fetchAddresses;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var utils_1 = __webpack_require__(/*! ../../tools/utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
function fetchDetails(base, assetId) {
    var isOnce = !Array.isArray(assetId);
    return Promise.all(utils_1.toArray(assetId).map(function (id) { return request_1.default({ base: base, url: "/assets/details/" + id }); }))
        .then(function (list) { return isOnce ? list[0] : list; });
}
exports.fetchDetails = fetchDetails;
function fetchAssetDistribution(base, assetId, height, limit) {
    return request_1.default({ base: base, url: "/assets/" + assetId + "/distribution/" + height + "/limit/" + limit });
}
exports.fetchAssetDistribution = fetchAssetDistribution;
/**
 * TODO
 * GET /assets/{assetId}/distribution
 * Asset balance distribution
 */
function fetchAssetsAddressLimit(base, address, limit) {
    return request_1.default({ base: base, url: "assets/nft/" + address + "/limit/" + limit });
}
exports.fetchAssetsAddressLimit = fetchAssetsAddressLimit;
function fetchAssetsBalance(base, address) {
    return request_1.default({ base: base, url: "/assets/balance/" + address });
}
exports.fetchAssetsBalance = fetchAssetsBalance;
function fetchBalanceAddressAssetId(base, address, assetId) {
    return request_1.default({ base: base, url: "/assets/balance/" + address + "/" + assetId });
}
exports.fetchBalanceAddressAssetId = fetchBalanceAddressAssetId;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
/**
 * GET /blocks/headers/seq/{from}/{to}
 * Get block headers at specified heights
 * @param base
 * @param from
 * @param to
 */
function fetchHeadersSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/headers/seq/" + from + "/" + to
    });
}
exports.fetchHeadersSeq = fetchHeadersSeq;
/**
 * GET /blocks/headers/last
 * Last block header
 * @param base
 */
function fetchHeadersLast(base, options) {
    return request_1.default({
        base: base,
        url: '/blocks/headers/last'
    });
}
exports.fetchHeadersLast = fetchHeadersLast;
/**
 * GET /blocks/height/{signature}
 * Height of a block by its signature
 * @param base
 * @param signature
 */
function fetchHeightBySignature(base, signature) {
    return request_1.default({
        base: base,
        url: "/blocks/height/" + signature
    });
}
exports.fetchHeightBySignature = fetchHeightBySignature;
/**
 * GET /blocks/headers/at/{height}
 * Block header at height
 * @param base
 * @param height
 */
function fetchHeadersAt(base, height, options) {
    return request_1.default({
        base: base,
        url: "/blocks/headers/at/" + height
    });
}
exports.fetchHeadersAt = fetchHeadersAt;
/**
 * GET /blocks/at/{height}
 * Get block at specified height
 * @param base
 * @param height
 */
function BlockAt(base, height) {
    return request_1.default({
        base: base,
        url: "/blocks/at/" + height
    });
}
exports.BlockAt = BlockAt;
/**
 * GET /blocks/seq/{from}/{to}
 * Block range
 * @param base
 * @param from
 * @param to
 */
function fetchSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/seq/" + from + "/" + to
    });
}
exports.fetchSeq = fetchSeq;
/**
 * GET /blocks/signature/{signature}
 * Get block by its signature
 * @param base
 * @param signature
 */
function fetchBlockBySignature(base, signature) {
    return request_1.default({
        base: base,
        url: "/blocks/signature/" + signature
    });
}
exports.fetchBlockBySignature = fetchBlockBySignature;
/**
 * GET /blocks/first
 * Get genesis block
 * @param base
 */
function fetchFirst(base) {
    return request_1.default({
        base: base,
        url: "/blocks/first"
    });
}
exports.fetchFirst = fetchFirst;
/**
 * /blocks/address/{address}/{from}/{to}
 * Get list of blocks generated by specified address
 * @param base
 * @param address
 * @param from
 * @param to
 */
function fetchBlocksByAddress(base, address, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/address/" + address + "/" + from + "/" + to
    });
}
exports.fetchBlocksByAddress = fetchBlocksByAddress;
/**
 * GET /blocks/last
 * Last block
 * @param base
 */
function fetchLast(base) {
    return request_1.default({
        base: base,
        url: '/blocks/last'
    });
}
exports.fetchLast = fetchLast;
/**
 * GET /blocks/delay/{signature}/{blockNum}
 * Average delay in milliseconds between last blockNum blocks starting from block with signature
 * @param base
 * @param signature
 * @param blockNum
 */
function fetchDelay(base, signature, blockNum) {
    return request_1.default({
        base: base,
        url: "/blocks/delay/" + signature + "/" + blockNum
    });
}
exports.fetchDelay = fetchDelay;
/**
 * GET /blocks/height
 * @param base
 */
function fetchHeight(base) {
    return request_1.default({
        base: base,
        url: '/blocks/height'
    });
}
exports.fetchHeight = fetchHeight;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/@waves/node-api-js/cjs/constants.js");
var blocks_1 = __webpack_require__(/*! ../blocks */ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./node_modules/@waves/node-api-js/cjs/tools/query.js"));
var stringify_1 = __importDefault(__webpack_require__(/*! ../../tools/stringify */ "./node_modules/@waves/node-api-js/cjs/tools/stringify.js"));
/**
 * GET /transactions/unconfirmed/size
 * Number of unconfirmed transactions
 */
function fetchUnconfirmedSize(base) {
    return request_1.default({
        base: base,
        url: '/transactions/unconfirmed/size'
    });
}
exports.fetchUnconfirmedSize = fetchUnconfirmedSize;
// @TODO: when correct API key is received
/**
 * POST /transactions/sign/{signerAddress}
 * Sign a transaction with a non-default private key
 */
/**
* POST /transactions/calculateFee
* Calculate transaction fee
*/
function fetchCalculateFee(base, tx) {
    return request_1.default({
        base: base,
        url: '/transactions/calculateFee',
        options: {
            method: 'POST',
            body: stringify_1.default(tx),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchCalculateFee = fetchCalculateFee;
/**
 * GET /transactions/unconfirmed
 * Unconfirmed transactions
 */
function fetchUnconfirmed(base) {
    return request_1.default({
        base: base,
        url: '/transactions/unconfirmed'
    });
}
exports.fetchUnconfirmed = fetchUnconfirmed;
/**
 * Список транзакций по адресу
 * @param address
 * @param limit      максимальное количество транзакций в результате
 * @param after      искать транзакции после ID указанного в after
 * @param retry      количество попыток на выполнение запроса
 */
function fetchTransactions(base, address, limit, after, retry) {
    return request_1.default({
        base: base,
        url: "/transactions/address/" + address + "/limit/" + limit + query_1.default({ after: after })
    }).then(function (_a) {
        var list = _a[0];
        return list;
    });
}
exports.fetchTransactions = fetchTransactions;
/**
 * GET /transactions/unconfirmed/info/{id}
 * Unconfirmed transaction info
 */
function fetchUnconfirmedInfo(base, id) {
    return request_1.default({
        base: base,
        url: "/transactions/unconfirmed/info/" + id
    });
}
exports.fetchUnconfirmedInfo = fetchUnconfirmedInfo;
// @TODO when correct API key is received
/**
 * POST /transactions/sign
 * Sign a transaction
 */
/**
 * GET /transactions/info/{id}
 * Transaction info
 */
function fetchInfo(base, id) {
    return request_1.default({ base: base, url: "/transactions/info/" + id });
}
exports.fetchInfo = fetchInfo;
function fetchStatus(base, list) {
    var DEFAULT_STATUS = {
        id: '',
        confirmations: -1,
        height: -1,
        inUTX: false,
        status: constants_1.TRANSACTION_STATUSES.NOT_FOUND
    };
    var loadAllTxInfo = list.map(function (id) {
        return fetchUnconfirmedInfo(base, id)
            .then(function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.UNCONFIRMED, inUTX: true })); })
            .catch(function () { return fetchInfo(base, id)
            .then(function (tx) { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN, height: tx.height })); }); })
            .catch(function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id })); });
    });
    return Promise.all([
        blocks_1.fetchHeight(base),
        Promise.all(loadAllTxInfo)
    ]).then(function (_a) {
        var height = _a[0].height, statuses = _a[1];
        return ({
            height: height,
            statuses: statuses.map(function (item) { return (__assign(__assign({}, item), { confirmations: item.status === constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN ? height - item.height : item.confirmations })); })
        });
    });
}
exports.fetchStatus = fetchStatus;
function broadcast(base, tx) {
    return request_1.default({
        base: base, url: '/transactions/broadcast',
        options: {
            method: 'POST',
            body: stringify_1.default(tx),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.broadcast = broadcast;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_MAP = {
    3: 'issue',
    4: 'transfer',
    5: 'reissue',
    6: 'burn',
    7: 'exchange',
    8: 'lease',
    9: 'cancelLease',
    10: 'alias',
    11: 'massTransfer',
    12: 'data',
    13: 'setScript',
    14: 'sponsorship',
    15: 'setAssetScript',
    16: 'invoke'
};
exports.NAME_MAP = {
    'issue': 3,
    'transfer': 4,
    'reissue': 5,
    'burn': 6,
    'exchange': 7,
    'lease': 8,
    'cancelLease': 9,
    'alias': 10,
    'massTransfer': 11,
    'data': 12,
    'setScript': 13,
    'sponsorship': 14,
    'setAssetScript': 15,
    'invoke': 16
};
exports.TRANSACTION_STATUSES = {
    IN_BLOCKCHAIN: 'in_blockchain',
    UNCONFIRMED: 'unconfirmed',
    NOT_FOUND: 'not_found'
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = __webpack_require__(/*! ../../api-node/blocks */ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js");
function default_1(base) {
    return blocks_1.fetchHeadersLast(base).then(function (header) { return base58Decode(header.generator)[1]; });
}
exports.default = default_1;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = {};
for (var i = 0; i < ALPHABET.length; i++) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}
function base58Decode(string) {
    var bytes, c, carry, j, i;
    if (string.length === 0) {
        return new Uint8Array(0);
    }
    i = void 0;
    j = void 0;
    bytes = [0];
    i = 0;
    while (i < string.length) {
        c = string[i];
        if (!(c in ALPHABET_MAP)) {
            throw 'Base58.decode received unacceptable input. Character \'' + c + '\' is not in the Base58 alphabet.';
        }
        j = 0;
        while (j < bytes.length) {
            bytes[j] *= 58;
            j++;
        }
        bytes[0] += ALPHABET_MAP[c];
        carry = 0;
        j = 0;
        while (j < bytes.length) {
            bytes[j] += carry;
            carry = bytes[j] >> 8;
            bytes[j] &= 0xff;
            ++j;
        }
        while (carry) {
            bytes.push(carry & 0xff);
            carry >>= 8;
        }
        i++;
    }
    i = 0;
    while (string[i] === '1' && i < string.length - 1) {
        bytes.push(0);
        i++;
    }
    return new Uint8Array(bytes.reverse());
}
//# sourceMappingURL=getNetworkByte.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/parse.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reg = new RegExp('((?!\\\\)"\\w+"):\\s*(-?[\\d|\\.]{14,})', 'g');
function default_1(json) {
    return JSON.parse(json.replace(reg, "$1:\"$2\""));
}
exports.default = default_1;
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/query.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/query.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(params, evolver) {
    if (evolver === void 0) { evolver = Object.create(null); }
    var query = Object.keys(params)
        .map(function (key) { return [key, params[key]]; })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, Object.prototype.hasOwnProperty.call(evolver, key) ? evolver[key](value) : value];
    })
        .filter(function (_a) {
        var key = _a[0], value = _a[1];
        return value != null;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + value;
    })
        .join('&');
    return query.length ? "?" + query : '';
}
exports.default = default_1;
;
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/request.js":
/*!**************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/request.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __importDefault(__webpack_require__(/*! ./resolve */ "./node_modules/@waves/node-api-js/cjs/tools/resolve.js"));
var parse_1 = __importDefault(__webpack_require__(/*! ./parse */ "./node_modules/@waves/node-api-js/cjs/tools/parse.js"));
var request = typeof fetch === 'function' ? fetch : __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
function default_1(params) {
    return request(resolve_1.default(params.url, params.base), updateHeaders(params.options))
        .then(parseResponse);
}
exports.default = default_1;
function parseResponse(r) {
    return r.text().then(function (message) { return r.ok ? parse_1.default(message) : Promise.reject(tryParse(message)); });
}
function tryParse(message) {
    try {
        return JSON.parse(message);
    }
    catch (e) {
        return message;
    }
}
function updateHeaders(options) {
    if (options === void 0) { options = Object.create(null); }
    options.credentials = 'include';
    return options;
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/resolve.js":
/*!**************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/resolve.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(path, base) {
    return new URL(path, base).toString();
}
exports.default = default_1;
//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FIELDS = ['value', 'amount', 'matcherFee', 'price', 'fee', 'minSponsoredAssetFee', 'quantity', 'sellMatcherFee', 'buyMatcherFee'];
var reg = new RegExp("(?!\\\\)\"(" + FIELDS.join('|') + ")\":\\s*\"(-?\\d+)\"", 'g');
function default_1(data) {
    return JSON.stringify(data).replace(reg, '"$1":$2');
}
exports.default = default_1;
//# sourceMappingURL=stringify.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
var wait_1 = __importDefault(__webpack_require__(/*! ./wait */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js"));
var DEFAULT_BROADCAST_OPTIONS = {
    chain: false,
    confirmations: -1,
    maxWaitTime: 0,
    requestInterval: 0
};
function default_1(base, list, options) {
    var opt = __assign(__assign({}, DEFAULT_BROADCAST_OPTIONS), (options || {}));
    var isOnce = !Array.isArray(list);
    var confirmations = opt.confirmations > 0 ? 1 : 0;
    return (opt.chain
        ? chainBroadcast(base, utils_1.toArray(list), __assign(__assign({}, opt), { confirmations: confirmations }))
        : simpleBroadcast(base, utils_1.toArray(list)))
        .then(function (list) { return opt.confirmations <= 0 ? list : wait_1.default(base, list, opt); })
        .then(function (list) { return isOnce ? utils_1.head(list) : list; });
}
exports.default = default_1;
function simpleBroadcast(base, list) {
    return Promise.all(list.map(function (tx) { return transactions_1.broadcast(base, tx); }));
}
function chainBroadcast(base, list, options) {
    return new Promise(function (resolve, reject) {
        var toBroadcast = list.slice().reverse();
        var result = [];
        var loop = function () {
            if (!toBroadcast.length) {
                resolve(result);
                return null;
            }
            var tx = toBroadcast.pop();
            transactions_1.broadcast(base, tx)
                .then(function (tx) { return wait_1.default(base, tx, options); })
                .then(function (tx) {
                result.push(tx);
                loop();
            }, reject);
        };
        loop();
    });
}
//# sourceMappingURL=broadcast.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js":
/*!************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/@waves/node-api-js/cjs/constants.js");
function default_1(base, tx, options) {
    var isOnce = !Array.isArray(tx);
    var start = Date.now();
    var confirmed = [];
    var confirmations = options && options.confirmations || 0;
    var maxWaitTime = options && options.maxWaitTime || 0;
    var requestInterval = options && options.requestInterval || 250;
    var waitTx = function (list) {
        return transactions_1.fetchStatus(base, list.map(utils_1.prop('id')))
            .then(function (status) {
            var hash = utils_1.indexBy(utils_1.prop('id'), status.statuses);
            var hasError = list.some(function (tx) { return hash[tx.id].status === constants_1.TRANSACTION_STATUSES.NOT_FOUND; });
            if (hasError) {
                throw new Error('One transaction is not in blockchain!');
            }
            var toRequest = list.filter(function (tx) {
                if (hash[tx.id].confirmations >= confirmations) {
                    confirmed.push(tx);
                    return false;
                }
                else {
                    return true;
                }
            });
            if (!toRequest.length) {
                return void 0;
            }
            if (maxWaitTime && Date.now() - start > maxWaitTime) {
                return Promise.reject('Timeout error!');
            }
            return utils_1.wait(requestInterval).then(function () { return waitTx(toRequest); });
        });
    };
    return waitTx(utils_1.toArray(tx)).then(function () { return isOnce ? utils_1.head(confirmed) : confirmed; });
}
exports.default = default_1;
//# sourceMappingURL=wait.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/utils.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}
exports.toArray = toArray;
function head(data) {
    return data[0];
}
exports.head = head;
function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.wait = wait;
function prop(key) {
    return function (data) { return data[key]; };
}
exports.prop = prop;
exports.keys = function (obj) {
    return Object.keys(obj);
};
exports.entries = function (obj) {
    return exports.keys(obj).map(function (name) { return [name, obj[name]]; });
};
exports.values = function (obj) {
    return exports.keys(obj).map(function (key) { return obj[key]; });
};
exports.assign = function (target, merge) {
    return exports.entries(merge).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        target[key] = value;
        return target;
    }, target);
};
function map(process) {
    return function (list) { return list.map(process); };
}
exports.map = map;
function filter(process) {
    return function (list) { return list.filter(process); };
}
exports.filter = filter;
function indexBy(process, data) {
    return data.reduce(function (acc, item) {
        acc[process(item)] = item;
        return acc;
    }, {});
}
exports.indexBy = indexBy;
exports.uniq = function (list) {
    return exports.keys(list.reduce(function (acc, item) {
        acc[item] = item;
        return acc;
    }, Object.create(null)));
};
function switchTransactionByType(choices) {
    return function (tx) { return choices[tx.type] && typeof choices[tx.type] === 'function' ? choices[tx.type](tx) : undefined; };
}
exports.switchTransactionByType = switchTransactionByType;
exports.pipe = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (data) { return args.reduce(function (acc, item) { return item(acc); }, data); };
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@waves/signer/cjs/Signer.js":
/*!**************************************************!*\
  !*** ./node_modules/@waves/signer/cjs/Signer.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@waves/signer/cjs/constants.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@waves/signer/cjs/utils/index.js");
var transactions_1 = __webpack_require__(/*! ./utils/transactions */ "./node_modules/@waves/signer/cjs/utils/transactions.js");
var addresses_1 = __webpack_require__(/*! @waves/node-api-js/cjs/api-node/addresses */ "./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js");
var assets_1 = __webpack_require__(/*! @waves/node-api-js/cjs/api-node/assets */ "./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js");
var wait_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/transactions/wait */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js");
var broadcast_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/transactions/broadcast */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js");
var getNetworkByte_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/blocks/getNetworkByte */ "./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js");
var Signer = /** @class */ (function () {
    function Signer(options) {
        this._options = __assign(__assign({}, constants_1.DEFAULT_OPTIONS), (options || {}));
        this._networkBytePromise = getNetworkByte_1.default(this._options.NODE_URL).then(function (byte) {
            return byte;
        });
    }
    Object.defineProperty(Signer.prototype, "_connectPromise", {
        get: function () {
            return this.__connectPromise || Promise.reject('Has no provider!');
        },
        set: function (promise) {
            this.__connectPromise = promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Запросить байт сети
     */
    Signer.prototype.getNetworkByte = function () {
        return this._networkBytePromise;
    };
    /**
     * Устанавливаем провайдер отвечающий за подпись
     * @param provider
     *
     * ```ts
     * import Waves from '@waves/waves-js';
     * import Provider from '@waves/seed-provider';
     *
     * const waves = new Waves();
     * waves.setProvider(new Provider('SEED'));
     * ```
     */
    Signer.prototype.setProvider = function (provider) {
        var _this = this;
        this.currentProvider = provider;
        var result = this._networkBytePromise.then(function (networkByte) {
            return provider.connect({
                NODE_URL: _this._options.NODE_URL,
                NETWORK_BYTE: networkByte,
            });
        });
        this._connectPromise = result.then(function () { return provider; });
        return result;
    };
    /**
     * Получаем список балансов пользователя (необходимо выполнить login перед использованием)
     * Basic usage example:
     *
     * ```ts
     * await waves.getBalance(); // Возвращает балансы пользователя
     * ```
     */
    Signer.prototype.getBalance = function () {
        if (!this._userData) {
            return Promise.reject(new Error('Need login for get balances!'));
        }
        var user = this._userData;
        return Promise.all([
            addresses_1.fetchBalanceDetails(this._options.NODE_URL, user.address)
                .then(function (data) { return ({
                assetId: 'WAVES',
                assetName: 'Waves',
                decimals: 8,
                amount: String(data.available),
                isMyAsset: false,
                tokens: Number(data.available) * Math.pow(10, 8),
                sponsorship: null,
                isSmart: false
            }); }),
            assets_1.fetchAssetsBalance(this._options.NODE_URL, user.address)
                .then(function (data) { return data.balances.map(function (item) { return ({
                assetId: item.assetId,
                assetName: item.issueTransaction.name,
                decimals: item.issueTransaction.decimals,
                amount: String(item.balance),
                isMyAsset: item.issueTransaction.sender === user.address,
                tokens: item.balance *
                    Math.pow(10, item.issueTransaction.decimals),
                isSmart: !!item.issueTransaction.script,
                sponsorship: item.sponsorBalance != null &&
                    item.sponsorBalance > Math.pow(10, 8) &&
                    (item.minSponsoredAssetFee || 0) < item.balance
                    ? item.minSponsoredAssetFee
                    : null,
            }); }); }),
        ]).then(function (_a) {
            var waves = _a[0], assets = _a[1];
            return __spreadArrays([waves], assets);
        });
    };
    /**
     * Получаем информацию о пользователе
     *
     * ```ts
     * await waves.login(); // Авторизуемся. Возвращает адрес и публичный ключ
     * ```
     */
    Signer.prototype.login = function () {
        var _this = this;
        return this._connectPromise
            .then(function (provider) { return provider.login(); })
            .then(function (data) {
            _this._userData = data;
            return data;
        });
    };
    /**
     * Вылогиниваемся из юзера
     */
    Signer.prototype.logout = function () {
        var _this = this;
        return this._connectPromise
            .then(function (provider) { return provider.logout(); })
            .then(function () {
            _this._userData = undefined;
        });
    };
    /**
     * Подписываем сообщение пользователя (провайдер может устанавливать префикс)
     * @param message
     */
    Signer.prototype.signMessage = function (message) {
        return this._connectPromise.then(function (provider) {
            return provider.signMessage(message);
        });
    };
    /**
     * Подписываем типизированные данные
     * @param data
     */
    Signer.prototype.signTypedData = function (data) {
        return this._connectPromise.then(function (provider) {
            return provider.signTypedData(data);
        });
    };
    /**
     * Получаем список балансов в кторых можно платить комиссию
     */
    Signer.prototype.getSponsoredBalances = function () {
        return this.getBalance().then(function (balance) {
            return balance.filter(function (item) { return !!item.sponsorship; });
        });
    };
    Signer.prototype.batch = function (txOrList) {
        var _this = this;
        var isOnce = !Array.isArray(txOrList);
        var sign = function () {
            return _this._sign(utils_1.toArray(txOrList)).then(function (result) {
                return isOnce ? result[0] : result;
            });
        };
        return {
            sign: sign,
            broadcast: function (opt) {
                return sign().then(function (transactions) {
                    return _this.broadcast(transactions, opt);
                });
            },
        };
    };
    Signer.prototype.issue = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('issue', data)]);
    };
    Signer.prototype.transfer = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('transfer', data)]);
    };
    Signer.prototype.reissue = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('reissue', data)]);
    };
    Signer.prototype.burn = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('burn', data)]);
    };
    Signer.prototype.lease = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('lease', data)]);
    };
    Signer.prototype.exchange = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('exchange', data)]);
    };
    Signer.prototype.cancelLease = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('cancelLease', data)]);
    };
    Signer.prototype.alias = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('alias', data)]);
    };
    Signer.prototype.massTransfer = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('massTransfer', data)]);
    };
    Signer.prototype.data = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('data', data)]);
    };
    Signer.prototype.sponsorship = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('sponsorship', data)]);
    };
    Signer.prototype.setScript = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('setScript', data)]);
    };
    Signer.prototype.setAssetScript = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('setAssetScript', data)]);
    };
    Signer.prototype.invoke = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('invoke', data)]);
    };
    Signer.prototype.broadcast = function (tx, opt) {
        return broadcast_1.default(this._options.NODE_URL, tx, opt); // TODO Fix types
    };
    Signer.prototype.waitTxConfirm = function (tx, confirmations) {
        return wait_1.default(this._options.NODE_URL, tx, { confirmations: confirmations }); // TODO Fix types
    };
    Signer.prototype._createPipelineAPI = function (list) {
        var _this = this;
        // TODO fix types
        var api = utils_1.evolve(constants_1.NAME_MAP, function (key, type) {
            return function (data) {
                return _this._createPipelineAPI(__spreadArrays(list, [__assign({ type: type }, data)]));
            };
        });
        return __assign(__assign({}, api), this._createActions(list));
    };
    Signer.prototype._createActions = function (list) {
        var _this = this;
        var sign = function () { return _this._sign(list); };
        var broadcast = function (options) {
            return sign().then(function (list) {
                return _this.broadcast(list, options);
            });
        };
        return { sign: sign, broadcast: broadcast };
    };
    Signer.prototype._sign = function (list) {
        return this._connectPromise.then(function (provider) {
            return provider.sign(list);
        });
    };
    return Signer;
}());
exports.Signer = Signer;
exports.default = Signer;
//# sourceMappingURL=Signer.js.map

/***/ }),

/***/ "./node_modules/@waves/signer/cjs/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/@waves/signer/cjs/constants.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_MAP = {
    3: 'issue',
    4: 'transfer',
    5: 'reissue',
    6: 'burn',
    7: 'exchange',
    8: 'lease',
    9: 'cancelLease',
    10: 'alias',
    11: 'massTransfer',
    12: 'data',
    13: 'setScript',
    14: 'sponsorship',
    15: 'setAssetScript',
    16: 'invoke'
};
exports.NAME_MAP = {
    'issue': 3,
    'transfer': 4,
    'reissue': 5,
    'burn': 6,
    'exchange': 7,
    'lease': 8,
    'cancelLease': 9,
    'alias': 10,
    'massTransfer': 11,
    'data': 12,
    'setScript': 13,
    'sponsorship': 14,
    'setAssetScript': 15,
    'invoke': 16
};
exports.DEFAULT_OPTIONS = {
    NODE_URL: 'https://nodes.wavesplatform.com',
    MATCHER_URL: 'https://nodes.wavesplatfomr.com/matcher'
};
exports.DEFAULT_BROADCAST_OPTIONS = {
    chain: false,
    confirmations: -1
};
exports.MAX_ALIAS_LENGTH = 30;
exports.SMART_ASSET_EXTRA_FEE = 0.004 * Math.pow(10, 8);
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@waves/signer/cjs/utils/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@waves/signer/cjs/utils/index.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(/*! ./object */ "./node_modules/@waves/signer/cjs/utils/object.js");
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}
exports.toArray = toArray;
function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.wait = wait;
function evolve(data, process) {
    return object_1.entries(data).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = process(key, value);
        return acc;
    }, {});
}
exports.evolve = evolve;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/signer/cjs/utils/object.js":
/*!********************************************************!*\
  !*** ./node_modules/@waves/signer/cjs/utils/object.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = function (obj) {
    return Object.keys(obj);
};
exports.entries = function (obj) {
    return Object.keys(obj).map(function (name) { return [name, obj[name]]; });
};
exports.values = function (obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
};
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/@waves/signer/cjs/utils/transactions.js":
/*!**************************************************************!*\
  !*** ./node_modules/@waves/signer/cjs/utils/transactions.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@waves/signer/cjs/constants.js");
function addParamType(name, data) {
    return __assign(__assign({}, data), { type: constants_1.NAME_MAP[name] });
}
exports.addParamType = addParamType;
//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waves_signer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @waves/signer */ "./node_modules/@waves/signer/cjs/Signer.js");
/* harmony import */ var _waves_signer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_waves_signer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _waves_exchange_provider_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @waves.exchange/provider-web */ "./node_modules/@waves.exchange/provider-web/dist/provider-web.min.js");
/* harmony import */ var _waves_exchange_provider_web__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_waves_exchange_provider_web__WEBPACK_IMPORTED_MODULE_1__);



const waves = new _waves_signer__WEBPACK_IMPORTED_MODULE_0___default.a({NODE_URL: 'https://pool.testnet.wavesnodes.com'});
const provider = new _waves_exchange_provider_web__WEBPACK_IMPORTED_MODULE_1___default.a();

waves.setProvider(provider);

document.querySelector(".js-login").addEventListener("click", async function(event) {
    try {
        const userData = await waves.login();
        event.target.classList.add("clicked");
        event.target.innerHTML = `
            authorized as <br>
            <a href='https://wavesexplorer.com/testnet/address/${userData.address}' target="_blank">
                ${userData.address}
            </a>`;
    } catch (e) {
        console.error('login rejected')
    }
});

document.querySelector(".js-invoke").addEventListener("click", function() {
    waves.invoke({
        dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        call: {
            function: "faucet"
        }
    }).broadcast().then(console.log)
});



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzLmV4Y2hhbmdlL3Byb3ZpZGVyLXdlYi9kaXN0L3Byb3ZpZGVyLXdlYi5taW4uanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL2FkZHJlc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvYXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9hcGktbm9kZS9ibG9ja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL3RyYW5zYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9ibG9ja3MvZ2V0TmV0d29ya0J5dGUuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3BhcnNlLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy90cmFuc2FjdGlvbnMvYnJvYWRjYXN0LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy90cmFuc2FjdGlvbnMvd2FpdC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvc2lnbmVyL2Nqcy9TaWduZXIuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvc2lnbmVyL2Nqcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvc2lnbmVyL2Nqcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9zaWduZXIvY2pzL3V0aWxzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9zaWduZXIvY2pzL3V0aWxzL3RyYW5zYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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Q0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQWM7QUFDeEM7QUFDQSwrQkFBK0IsVUFBVSxtQ0FBbUM7QUFDNUU7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxxQ0FBcUMsZUFBZTtBQUNwRCxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDa0I7O0FBRXBELGtCQUFrQixvREFBSyxFQUFFLGdEQUFnRDtBQUN6RSxxQkFBcUIsbUVBQVE7O0FBRTdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxpQkFBaUI7QUFDbEYsa0JBQWtCO0FBQ2xCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6ImRhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkQXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRBcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3RvcmFnZVByb3ZpZGVyPWUoKTp0LnN0b3JhZ2VQcm92aWRlcj1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpLG4uZChlLFwiX19leHRlbmRzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG99KSksbi5kKGUsXCJfX2Fzc2lnblwiLChmdW5jdGlvbigpe3JldHVybiBpfSkpLG4uZChlLFwiX19yZXN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSksbi5kKGUsXCJfX2RlY29yYXRlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKGUsXCJfX3BhcmFtXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSksbi5kKGUsXCJfX21ldGFkYXRhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKGUsXCJfX2F3YWl0ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKSxuLmQoZSxcIl9fZ2VuZXJhdG9yXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSksbi5kKGUsXCJfX2V4cG9ydFN0YXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaH0pKSxuLmQoZSxcIl9fdmFsdWVzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGR9KSksbi5kKGUsXCJfX3JlYWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcH0pKSxuLmQoZSxcIl9fc3ByZWFkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIF99KSksbi5kKGUsXCJfX3NwcmVhZEFycmF5c1wiLChmdW5jdGlvbigpe3JldHVybiB2fSkpLG4uZChlLFwiX19hd2FpdFwiLChmdW5jdGlvbigpe3JldHVybiB5fSkpLG4uZChlLFwiX19hc3luY0dlbmVyYXRvclwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLG4uZChlLFwiX19hc3luY0RlbGVnYXRvclwiLChmdW5jdGlvbigpe3JldHVybiBnfSkpLG4uZChlLFwiX19hc3luY1ZhbHVlc1wiLChmdW5jdGlvbigpe3JldHVybiBtfSkpLG4uZChlLFwiX19tYWtlVGVtcGxhdGVPYmplY3RcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYn0pKSxuLmQoZSxcIl9faW1wb3J0U3RhclwiLChmdW5jdGlvbigpe3JldHVybiBPfSkpLG4uZChlLFwiX19pbXBvcnREZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFB9KSk7XG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciByPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHI9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmKHRbbl09ZVtuXSl9KSh0LGUpfTtmdW5jdGlvbiBvKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfXZhciBpPWZ1bmN0aW9uKCl7cmV0dXJuKGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiBzKHQsZSl7dmFyIG49e307Zm9yKHZhciByIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQscikmJmUuaW5kZXhPZihyKTwwJiYobltyXT10W3JdKTtpZihudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7bzxyLmxlbmd0aDtvKyspZS5pbmRleE9mKHJbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LHJbb10pJiYobltyW29dXT10W3Jbb11dKX1yZXR1cm4gbn1mdW5jdGlvbiB1KHQsZSxuLHIpe3ZhciBvLGk9YXJndW1lbnRzLmxlbmd0aCxzPWk8Mz9lOm51bGw9PT1yP3I9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOnI7aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLHIpO2Vsc2UgZm9yKHZhciB1PXQubGVuZ3RoLTE7dT49MDt1LS0pKG89dFt1XSkmJihzPShpPDM/byhzKTppPjM/byhlLG4scyk6byhlLG4pKXx8cyk7cmV0dXJuIGk+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfWZ1bmN0aW9uIGEodCxlKXtyZXR1cm4gZnVuY3Rpb24obixyKXtlKG4scix0KX19ZnVuY3Rpb24gYyh0LGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhKXJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKHQsZSl9ZnVuY3Rpb24gZih0LGUsbixyKXtyZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obyxpKXtmdW5jdGlvbiBzKHQpe3RyeXthKHIubmV4dCh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gdSh0KXt0cnl7YShyLnRocm93KHQpKX1jYXRjaCh0KXtpKHQpfX1mdW5jdGlvbiBhKHQpe3QuZG9uZT9vKHQudmFsdWUpOm5ldyBuKChmdW5jdGlvbihlKXtlKHQudmFsdWUpfSkpLnRoZW4ocyx1KX1hKChyPXIuYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbCh0LGUpe3ZhciBuLHIsbyxpLHM9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGk9e25leHQ6dSgwKSx0aHJvdzp1KDEpLHJldHVybjp1KDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihpW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLGk7ZnVuY3Rpb24gdShpKXtyZXR1cm4gZnVuY3Rpb24odSl7cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDtzOyl0cnl7aWYobj0xLHImJihvPTImaVswXT9yLnJldHVybjppWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsaVsxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYoaT1bMiZpWzBdLG8udmFsdWVdKSxpWzBdKXtjYXNlIDA6Y2FzZSAxOm89aTticmVhaztjYXNlIDQ6cmV0dXJuIHMubGFiZWwrKyx7dmFsdWU6aVsxXSxkb25lOiExfTtjYXNlIDU6cy5sYWJlbCsrLHI9aVsxXSxpPVswXTtjb250aW51ZTtjYXNlIDc6aT1zLm9wcy5wb3AoKSxzLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89KG89cy50cnlzKS5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSkmJig2PT09aVswXXx8Mj09PWlbMF0pKXtzPTA7Y29udGludWV9aWYoMz09PWlbMF0mJighb3x8aVsxXT5vWzBdJiZpWzFdPG9bM10pKXtzLmxhYmVsPWlbMV07YnJlYWt9aWYoNj09PWlbMF0mJnMubGFiZWw8b1sxXSl7cy5sYWJlbD1vWzFdLG89aTticmVha31pZihvJiZzLmxhYmVsPG9bMl0pe3MubGFiZWw9b1syXSxzLm9wcy5wdXNoKGkpO2JyZWFrfW9bMl0mJnMub3BzLnBvcCgpLHMudHJ5cy5wb3AoKTtjb250aW51ZX1pPWUuY2FsbCh0LHMpfWNhdGNoKHQpe2k9WzYsdF0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZpWzBdKXRocm93IGlbMV07cmV0dXJue3ZhbHVlOmlbMF0/aVsxXTp2b2lkIDAsZG9uZTohMH19KFtpLHVdKX19fWZ1bmN0aW9uIGgodCxlKXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX1mdW5jdGlvbiBkKHQpe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdLG49MDtyZXR1cm4gZT9lLmNhbGwodCk6e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCYmbj49dC5sZW5ndGgmJih0PXZvaWQgMCkse3ZhbHVlOnQmJnRbbisrXSxkb25lOiF0fX19fWZ1bmN0aW9uIHAodCxlKXt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighbilyZXR1cm4gdDt2YXIgcixvLGk9bi5jYWxsKHQpLHM9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEocj1pLm5leHQoKSkuZG9uZTspcy5wdXNoKHIudmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e3ImJiFyLmRvbmUmJihuPWkucmV0dXJuKSYmbi5jYWxsKGkpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gc31mdW5jdGlvbiBfKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXQ9dC5jb25jYXQocChhcmd1bWVudHNbZV0pKTtyZXR1cm4gdH1mdW5jdGlvbiB2KCl7Zm9yKHZhciB0PTAsZT0wLG49YXJndW1lbnRzLmxlbmd0aDtlPG47ZSsrKXQrPWFyZ3VtZW50c1tlXS5sZW5ndGg7dmFyIHI9QXJyYXkodCksbz0wO2ZvcihlPTA7ZTxuO2UrKylmb3IodmFyIGk9YXJndW1lbnRzW2VdLHM9MCx1PWkubGVuZ3RoO3M8dTtzKyssbysrKXJbb109aVtzXTtyZXR1cm4gcn1mdW5jdGlvbiB5KHQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgeT8odGhpcy52PXQsdGhpcyk6bmV3IHkodCl9ZnVuY3Rpb24gdyh0LGUsbil7aWYoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7dmFyIHIsbz1uLmFwcGx5KHQsZXx8W10pLGk9W107cmV0dXJuIHI9e30scyhcIm5leHRcIikscyhcInRocm93XCIpLHMoXCJyZXR1cm5cIikscltTeW1ib2wuYXN5bmNJdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30scjtmdW5jdGlvbiBzKHQpe29bdF0mJihyW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixyKXtpLnB1c2goW3QsZSxuLHJdKT4xfHx1KHQsZSl9KSl9KX1mdW5jdGlvbiB1KHQsZSl7dHJ5eyhuPW9bdF0oZSkpLnZhbHVlIGluc3RhbmNlb2YgeT9Qcm9taXNlLnJlc29sdmUobi52YWx1ZS52KS50aGVuKGEsYyk6ZihpWzBdWzJdLG4pfWNhdGNoKHQpe2YoaVswXVszXSx0KX12YXIgbn1mdW5jdGlvbiBhKHQpe3UoXCJuZXh0XCIsdCl9ZnVuY3Rpb24gYyh0KXt1KFwidGhyb3dcIix0KX1mdW5jdGlvbiBmKHQsZSl7dChlKSxpLnNoaWZ0KCksaS5sZW5ndGgmJnUoaVswXVswXSxpWzBdWzFdKX19ZnVuY3Rpb24gZyh0KXt2YXIgZSxuO3JldHVybiBlPXt9LHIoXCJuZXh0XCIpLHIoXCJ0aHJvd1wiLChmdW5jdGlvbih0KXt0aHJvdyB0fSkpLHIoXCJyZXR1cm5cIiksZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGU7ZnVuY3Rpb24gcihyLG8pe2Vbcl09dFtyXT9mdW5jdGlvbihlKXtyZXR1cm4obj0hbik/e3ZhbHVlOnkodFtyXShlKSksZG9uZTpcInJldHVyblwiPT09cn06bz9vKGUpOmV9Om99fWZ1bmN0aW9uIG0odCl7aWYoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7dmFyIGUsbj10W1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtyZXR1cm4gbj9uLmNhbGwodCk6KHQ9ZCh0KSxlPXt9LHIoXCJuZXh0XCIpLHIoXCJ0aHJvd1wiKSxyKFwicmV0dXJuXCIpLGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUpO2Z1bmN0aW9uIHIobil7ZVtuXT10W25dJiZmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsbyl7KGZ1bmN0aW9uKHQsZSxuLHIpe1Byb21pc2UucmVzb2x2ZShyKS50aGVuKChmdW5jdGlvbihlKXt0KHt2YWx1ZTplLGRvbmU6bn0pfSksZSl9KShyLG8sKGU9dFtuXShlKSkuZG9uZSxlLnZhbHVlKX0pKX19fWZ1bmN0aW9uIGIodCxlKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmF3XCIse3ZhbHVlOmV9KTp0LnJhdz1lLHR9ZnVuY3Rpb24gTyh0KXtpZih0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGU9e307aWYobnVsbCE9dClmb3IodmFyIG4gaW4gdClPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiYoZVtuXT10W25dKTtyZXR1cm4gZS5kZWZhdWx0PXQsZX1mdW5jdGlvbiBQKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIobigxMikpLHIobig2KSkscihuKDE2KSkscihuKDcpKSxyKG4oNSkpLHIobig0KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmtleXM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5rZXlzKHQpfTt2YXIgcj1NYXRoLmZsb29yKERhdGUubm93KCkqTWF0aC5yYW5kb20oKSksbz0wO2UudW5pcXVlSWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQrXCItXCIrcitcIi1cIitvKyt9LGUudG9BcnJheT1mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90Olt0XX0sZS5waXBlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUodCl9KSxlKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPW4oMTEpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMuX2V2ZW50cz1bXSx0aGlzLl9xdWV1ZT1uZXcgby5RdWV1ZSh0KX1yZXR1cm4gdC5wcm90b3R5cGUuc2VuZEV2ZW50PWZ1bmN0aW9uKHQpe3RoaXMuX2V2ZW50cy5wdXNoKHQpfSx0LnByb3RvdHlwZS5kaWFsb2c9ZnVuY3Rpb24odCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxuLG8saSxzPXRoaXM7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24odSl7c3dpdGNoKHUubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdGhpcy5fcnVuQmVmb3JlU2hvdygpLFs0LHRoaXMuX2dldEJ1cygpXTtjYXNlIDE6aWYoZT11LnNlbnQoKSxuPWZ1bmN0aW9uKCl7cmV0dXJuIHIuX19hd2FpdGVyKHMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihuKXtyZXR1cm5bMix0KGUpXX0pKX0pKX0sdGhpcy5fcnVuRXZlbnRzKGUpLCF0aGlzLl9xdWV1ZS5jYW5QdXNoKCkpcmV0dXJuWzMsNl07dS5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gdS50cnlzLnB1c2goWzIsNCwsNV0pLFs0LHRoaXMuX3F1ZXVlLnB1c2gobildO2Nhc2UgMzpyZXR1cm4gbz11LnNlbnQoKSx0aGlzLl9ydW5BZnRlclNob3coKSxbMixvXTtjYXNlIDQ6cmV0dXJuIGk9dS5zZW50KCksdGhpcy5fcnVuQWZ0ZXJTaG93KCksWzIsUHJvbWlzZS5yZWplY3QoaSldO2Nhc2UgNTpyZXR1cm5bMyw3XTtjYXNlIDY6cmV0dXJuWzIsUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUXVldWUgaXMgZnVsbCFcIikpXTtjYXNlIDc6cmV0dXJuWzJdfX0pKX0pKX0sdC5wcm90b3R5cGUuX3J1bkJlZm9yZVNob3c9ZnVuY3Rpb24oKXswPT09dGhpcy5fcXVldWUubGVuZ3RoJiZ0aGlzLl9iZWZvcmVTaG93KCl9LHQucHJvdG90eXBlLl9ydW5BZnRlclNob3c9ZnVuY3Rpb24oKXswPT09dGhpcy5fcXVldWUubGVuZ3RoJiZ0aGlzLl9hZnRlclNob3coKX0sdC5wcm90b3R5cGUuX3J1bkV2ZW50cz1mdW5jdGlvbih0KXt0aGlzLl9ldmVudHMuc3BsaWNlKDAsdGhpcy5fZXZlbnRzLmxlbmd0aCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUodCl9KSl9LHR9KCk7ZS5UcmFuc3BvcnQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSkscihuKDIpKSxyKG4oMTMpKSxyKG4oMTUpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0KXt0LkxPR19MRVZFTD17UFJPRFVDVElPTjowLEVSUk9SUzoxLFZFUkJPU0U6Mn0sdC5sb2dMZXZlbD10LkxPR19MRVZFTC5QUk9EVUNUSU9OLHQubWV0aG9kc0RhdGE9e2xvZzp7c2F2ZTohMSxsb2dMZXZlbDp0LkxPR19MRVZFTC5WRVJCT1NFfSxpbmZvOntzYXZlOiExLGxvZ0xldmVsOnQuTE9HX0xFVkVMLlZFUkJPU0V9LHdhcm46e3NhdmU6ITEsbG9nTGV2ZWw6dC5MT0dfTEVWRUwuVkVSQk9TRX0sZXJyb3I6e3NhdmU6ITAsbG9nTGV2ZWw6dC5MT0dfTEVWRUwuRVJST1JTfX19KHQuY29uc29sZXx8KHQuY29uc29sZT17fSkpfShlLmNvbmZpZ3x8KGUuY29uZmlnPXt9KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe307ZS5BZGFwdGVyPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcixvPXRoaXMmJnRoaXMuX19leHRlbmRzfHwocj1mdW5jdGlvbih0LGUpe3JldHVybihyPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKWUuaGFzT3duUHJvcGVydHkobikmJih0W25dPWVbbl0pfSkodCxlKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fXIodCxlKSx0LnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihuLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgbil9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4scil7dmFyIG89dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBvLndpbj1uLG8udHlwZT1yLG8uaGFuZGxlcj1mdW5jdGlvbih0KXtvLnRyaWdnZXIoXCJtZXNzYWdlXCIsdCl9LHI9PT1lLlBST1RPQ09MX1RZUEVTLkxJU1RFTiYmby53aW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixvLmhhbmRsZXIsITEpLG99dmFyIG47cmV0dXJuIG8oZSx0KSxlLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy53aW4ucG9zdE1lc3NhZ2UodCxcIipcIiksdGhpc30sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMudHlwZT09PWUuUFJPVE9DT0xfVFlQRVMuTElTVEVOJiZ0aGlzLndpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuaGFuZGxlciwhMSksdGhpcy53aW49ZS5fZmFrZVdpbn0sZS5fZmFrZVdpbj17cG9zdE1lc3NhZ2U6bj1mdW5jdGlvbigpe3JldHVybiBudWxsfSxhZGRFdmVudExpc3RlbmVyOm4scmVtb3ZlRXZlbnRMaXN0ZW5lcjpufSxlfShuKDE3KS5FdmVudEVtaXR0ZXIpO2UuV2luZG93UHJvdG9jb2w9aSxmdW5jdGlvbih0KXt0LlBST1RPQ09MX1RZUEVTPXtMSVNURU46XCJsaXN0ZW5cIixESVNQQVRDSDpcImRpc3BhdGNoXCJ9fShpPWUuV2luZG93UHJvdG9jb2x8fChlLldpbmRvd1Byb3RvY29sPXt9KSksZS5XaW5kb3dQcm90b2NvbD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9big5KTtlLlByb3ZpZGVyV2ViPXIuUHJvdmlkZXJXZWIsZS5kZWZhdWx0PXIuUHJvdmlkZXJXZWJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89bigxMCksaT1uKDE5KSxzPW4oMSksdT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSxuKXtlPShlfHxcImh0dHBzOi8vd2F2ZXMuZXhjaGFuZ2Uvc2lnbmVyXCIpK1wiP1wiK3QuX2dldENhY2hlQ2xlYW4oKTt2YXIgcj1vLlRyYW5zcG9ydElmcmFtZS5jYW5Vc2UoKT9vLlRyYW5zcG9ydElmcmFtZTppLlRyYW5zcG9ydFdpbmRvdzt0aGlzLl90cmFuc3BvcnQ9bmV3IHIoZSwzKSxudWxsIT1uJiYocy5jb25maWcuY29uc29sZS5sb2dMZXZlbD1zLmNvbmZpZy5jb25zb2xlLkxPR19MRVZFTC5WRVJCT1NFKX1yZXR1cm4gdC5fZ2V0Q2FjaGVDbGVhbj1mdW5jdGlvbigpe3JldHVybiBTdHJpbmcoRGF0ZS5ub3coKSU2ZTQpfSx0LnByb3RvdHlwZS5jb25uZWN0PWZ1bmN0aW9uKHQpe3JldHVybiByLl9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24oZSl7cmV0dXJuWzIsUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3RyYW5zcG9ydC5zZW5kRXZlbnQoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc3BhdGNoRXZlbnQoXCJjb25uZWN0XCIsdCl9KSkpXX0pKX0pKX0sdC5wcm90b3R5cGUubG9nb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcXVlc3QoXCJsb2dvdXRcIil9KSl9LHQucHJvdG90eXBlLmxvZ2luPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcXVlc3QoXCJsb2dpblwiKX0pKX0sdC5wcm90b3R5cGUuc2lnbk1lc3NhZ2U9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcXVlc3QoXCJzaWduLW1lc3NhZ2VcIix0KX0pKX0sdC5wcm90b3R5cGUuc2lnblR5cGVkRGF0YT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fdHJhbnNwb3J0LmRpYWxvZygoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVxdWVzdChcInNpZ24tdHlwZWQtZGF0YVwiLHQpfSkpfSx0LnByb3RvdHlwZS5zaWduPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl90cmFuc3BvcnQuZGlhbG9nKChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXF1ZXN0KFwic2lnblwiLHQpfSkpfSx0fSgpO2UuUHJvdmlkZXJXZWI9dX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1uKDMpLGk9bigxKSxzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxuKXt2YXIgcj10LmNhbGwodGhpcyxuKXx8dGhpcztyZXR1cm4gci5fdXJsPWUscn1yZXR1cm4gci5fX2V4dGVuZHMoZSx0KSxlLmNhblVzZT1mdW5jdGlvbigpe3ZhciB0PW5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxlPXQuaW5jbHVkZXMoXCJzYWZhcmlcIikmJiF0LmluY2x1ZGVzKFwiY2hyb21lXCIpO3JldHVybiEobnVsbCE9bmF2aWdhdG9yLnBsYXRmb3JtJiYvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pfHxlKX0sZS5fYWRkSWZyYW1lVG9Eb209ZnVuY3Rpb24odCl7bnVsbCE9ZG9jdW1lbnQuYm9keT9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKGZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX0pKX0sZS5fY3JlYXRlSWZyYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7cmV0dXJuIGUuc3R5bGUudHJhbnNpdGlvbj1cIm9wYWNpdHkgLjJzXCIsZS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUud2lkdGg9XCIxMDAlXCIsZS5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsZS5zdHlsZS5sZWZ0PVwiMFwiLGUuc3R5bGUudG9wPVwiMFwiLGUuc3R5bGUuYm9yZGVyPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3JjPXQsZX0sZS5wcm90b3R5cGUuX2dldEJ1cz1mdW5jdGlvbigpe3JldHVybiByLl9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5fYnVzP1syLFByb21pc2UucmVzb2x2ZSh0aGlzLl9idXMpXToobnVsbD09dGhpcy5faWZyYW1lJiYodGhpcy5faWZyYW1lPWUuX2NyZWF0ZUlmcmFtZSh0aGlzLl91cmwpLGUuX2FkZElmcmFtZVRvRG9tKHRoaXMuX2lmcmFtZSkpLFsyLGkuV2luZG93QWRhcHRlci5jcmVhdGVTaW1wbGVXaW5kb3dBZGFwdGVyKHRoaXMuX2lmcmFtZSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuKXt0Ll9idXM9bmV3IGkuQnVzKGUsLTEpLHQuX2J1cy5vbmNlKFwicmVhZHlcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbih0Ll9idXMpfSkpfSkpfSkpXSl9KSl9KSl9LGUucHJvdG90eXBlLl9iZWZvcmVTaG93PWZ1bmN0aW9uKCl7bnVsbD09dGhpcy5faWZyYW1lJiYodGhpcy5faWZyYW1lPWUuX2NyZWF0ZUlmcmFtZSh0aGlzLl91cmwpLGUuX2FkZElmcmFtZVRvRG9tKHRoaXMuX2lmcmFtZSkpLHRoaXMuX3Nob3dJZnJhbWUoKX0sZS5wcm90b3R5cGUuX2FmdGVyU2hvdz1mdW5jdGlvbigpe3RoaXMuX2hpZGVJZnJhbWUoKX0sZS5wcm90b3R5cGUuX3Nob3dJZnJhbWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX2FwcGx5U3R5bGUoe3dpZHRoOlwiMTAwJVwiLGhlaWdodDpcIjEwMCVcIixsZWZ0OlwiMFwiLHRvcDpcIjBcIixib3JkZXI6XCJub25lXCIscG9zaXRpb246XCJmaXhlZFwiLGRpc3BsYXk6XCJibG9ja1wiLG9wYWNpdHk6XCIwXCIsekluZGV4OlwiOTk5OTk5OTlcIn0pLG51bGwhPWUuX3RpbWVyJiZjbGVhclRpbWVvdXQoZS5fdGltZXIpLGUuX3RpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5fYXBwbHlTdHlsZSh7b3BhY2l0eTpcIjFcIn0pfSksMCl9LGUucHJvdG90eXBlLl9oaWRlSWZyYW1lPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl9hcHBseVN0eWxlKHtvcGFjaXR5OlwiMFwifSksbnVsbCE9ZS5fdGltZXImJmNsZWFyVGltZW91dChlLl90aW1lciksZS5fdGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0Ll9hcHBseVN0eWxlKHt3aWR0aDpcIjEwcHhcIixoZWlnaHQ6XCIxMHB4XCIsbGVmdDpcIi0xMDBweFwiLHRvcDpcIi0xMDBweFwiLHBvc2l0aW9uOlwiYWJzb2x1dGVcIixvcGFjaXR5OlwiMFwiLHpJbmRleDpcIjBcIixkaXNwbGF5Olwibm9uZVwifSl9KSwyMDApfSxlLnByb3RvdHlwZS5fYXBwbHlTdHlsZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO09iamVjdC5lbnRyaWVzKHQpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBuPXRbMF0scj10WzFdO251bGwhPXImJihlLl9pZnJhbWUuc3R5bGVbbl09cil9KSl9LGUuX3RpbWVyPW51bGwsZX0oby5UcmFuc3BvcnQpO2UuVHJhbnNwb3J0SWZyYW1lPXN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMuYWN0aW9ucz1bXSx0aGlzLm1heExlbmd0aD10fXJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCJsZW5ndGhcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGgrKG51bGw9PXRoaXMuYWN0aXZlPzA6MSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUucHVzaD1mdW5jdGlvbih0KXtyZXR1cm4gci5fX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24obil7aWYodGhpcy5hY3Rpb25zLmxlbmd0aD49dGhpcy5tYXhMZW5ndGgpdGhyb3cgbmV3IEVycm9yKFwiQ2FudCd0IHB1c2ggYWN0aW9uISBRdWV1ZSBpcyBmdWxsIVwiKTtyZXR1cm5bMixuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixvKXtlLmFjdGlvbnMucHVzaCgoZnVuY3Rpb24oKXtyZXR1cm4gci5fX2F3YWl0ZXIoZSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiByLl9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKGUpe3JldHVyblsyLHQoKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gbih0KX0pLG8pXX0pKX0pKX0pKSwxPT09ZS5sZW5ndGgmJmUucnVuKCl9KSldfSkpfSkpfSx0LnByb3RvdHlwZS5jYW5QdXNoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYWN0aW9ucy5sZW5ndGg8dGhpcy5tYXhMZW5ndGh9LHQucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10aGlzLmFjdGlvbnMuc2hpZnQoKTtudWxsIT1lJiYodGhpcy5hY3RpdmU9ZSgpLHRoaXMuYWN0aXZlLmZpbmFsbHkoKGZ1bmN0aW9uKCl7dC5hY3RpdmU9dm9pZCAwO3ZhciBuPXQuYWN0aW9ucy5pbmRleE9mKGUpOy0xIT09biYmdC5hY3Rpb25zLnNwbGljZShuLDEpLHQucnVuKCl9KSkpfSx0fSgpO2UuUXVldWU9b30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oNCk7IWZ1bmN0aW9uKHQpe3RbdC5FdmVudD0wXT1cIkV2ZW50XCIsdFt0LkFjdGlvbj0xXT1cIkFjdGlvblwiLHRbdC5SZXNwb25zZT0yXT1cIlJlc3BvbnNlXCJ9KGUuRXZlbnRUeXBlfHwoZS5FdmVudFR5cGU9e30pKSxmdW5jdGlvbih0KXt0W3QuU3VjY2Vzcz0wXT1cIlN1Y2Nlc3NcIix0W3QuRXJyb3I9MV09XCJFcnJvclwifShlLlJlc3BvbnNlU3RhdHVzfHwoZS5SZXNwb25zZVN0YXR1cz17fSkpO3ZhciBvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZhciBuPXRoaXM7dGhpcy5pZD1yLnVuaXF1ZUlkKFwiYnVzXCIpLHRoaXMuX3RpbWVvdXQ9ZXx8NWUzLHRoaXMuX2FkYXB0ZXI9dCx0aGlzLl9hZGFwdGVyLmFkZExpc3RlbmVyKChmdW5jdGlvbih0KXtyZXR1cm4gbi5fb25NZXNzYWdlKHQpfSkpLHRoaXMuX2V2ZW50SGFuZGxlcnM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9hY3RpdmVSZXF1ZXN0SGFzaD1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX3JlcXVlc3RIYW5kbGVycz1PYmplY3QuY3JlYXRlKG51bGwpLHIuY29uc29sZS5pbmZvKCdDcmVhdGUgQnVzIHdpdGggaWQgXCInK3RoaXMuaWQrJ1wiJyl9cmV0dXJuIHQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQ9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gdGhpcy5fYWRhcHRlci5zZW5kKHQuX2NyZWF0ZUV2ZW50KGUsbikpLHIuY29uc29sZS5pbmZvKCdEaXNwYXRjaCBldmVudCBcIicrZSsnXCInLG4pLHRoaXN9LHQucHJvdG90eXBlLnJlcXVlc3Q9ZnVuY3Rpb24odCxlLG4pe3ZhciBvPXRoaXM7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihpLHMpe3ZhciB1LGE9ci51bmlxdWVJZChvLmlkK1wiLWFjdGlvblwiKSxjPW58fG8uX3RpbWVvdXQ7LTEhPT0obnx8by5fdGltZW91dCkmJih1PXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7ZGVsZXRlIG8uX2FjdGl2ZVJlcXVlc3RIYXNoW2FdO3ZhciBlPW5ldyBFcnJvcignVGltZW91dCBlcnJvciBmb3IgcmVxdWVzdCB3aXRoIG5hbWUgXCInK3QrJ1wiIGFuZCB0aW1lb3V0ICcrYytcIiFcIik7ci5jb25zb2xlLmVycm9yKGUpLHMoZSl9KSxjKSk7dmFyIGY9ZnVuY3Rpb24oKXt1JiZjbGVhclRpbWVvdXQodSl9O28uX2FjdGl2ZVJlcXVlc3RIYXNoW2FdPXtyZWplY3Q6ZnVuY3Rpb24oZSl7ZigpLHIuY29uc29sZS5lcnJvcignRXJyb3IgcmVxdWVzdCB3aXRoIG5hbWUgXCInK3QrJ1wiJyxlKSxzKGUpfSxyZXNvbHZlOmZ1bmN0aW9uKGUpe2YoKSxyLmNvbnNvbGUuaW5mbygnUmVxdWVzdCB3aXRoIG5hbWUgXCInK3QrJ1wiIHN1Y2Nlc3MgcmVzb2x2ZWQhJyxlKSxpKGUpfX0sby5fYWRhcHRlci5zZW5kKHtpZDphLHR5cGU6MSxuYW1lOnQsZGF0YTplfSksci5jb25zb2xlLmluZm8oJ1JlcXVlc3Qgd2l0aCBuYW1lIFwiJyt0KydcIicsZSl9KSl9LHQucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5fYWRkRXZlbnRIYW5kbGVyKHQsZSxuLCExKX0sdC5wcm90b3R5cGUub25jZT1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuX2FkZEV2ZW50SGFuZGxlcih0LGUsbiwhMCl9LHQucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXM7cmV0dXJuIHQ/dGhpcy5fZXZlbnRIYW5kbGVyc1t0XT9lPyh0aGlzLl9ldmVudEhhbmRsZXJzW3RdPXRoaXMuX2V2ZW50SGFuZGxlcnNbdF0uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5oYW5kbGVyIT09ZX0pKSx0aGlzLl9ldmVudEhhbmRsZXJzW3RdLmxlbmd0aHx8ZGVsZXRlIHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0sdGhpcyk6KHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0uc2xpY2UoKS5mb3JFYWNoKChmdW5jdGlvbihlKXtuLm9mZih0LGUuaGFuZGxlcil9KSksdGhpcyk6dGhpczooT2JqZWN0LmtleXModGhpcy5fZXZlbnRIYW5kbGVycykuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIG4ub2ZmKHQsZSl9KSksdGhpcyl9LHQucHJvdG90eXBlLnJlZ2lzdGVyUmVxdWVzdEhhbmRsZXI9ZnVuY3Rpb24odCxlKXtpZih0aGlzLl9yZXF1ZXN0SGFuZGxlcnNbdF0pdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlIHJlcXVlc3QgaGFuZGxlciFcIik7cmV0dXJuIHRoaXMuX3JlcXVlc3RIYW5kbGVyc1t0XT1lLHRoaXN9LHQucHJvdG90eXBlLnVucmVnaXN0ZXJIYW5kbGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl9yZXF1ZXN0SGFuZGxlcnNbdF0mJmRlbGV0ZSB0aGlzLl9yZXF1ZXN0SGFuZGxlcnNbdF0sdGhpc30sdC5wcm90b3R5cGUuY2hhbmdlQWRhcHRlcj1mdW5jdGlvbihlKXt2YXIgbj10aGlzLHI9bmV3IHQoZSx0aGlzLl90aW1lb3V0KTtyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZXZlbnRIYW5kbGVycykuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5fZXZlbnRIYW5kbGVyc1t0XS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLm9uY2U/ci5vbmNlKHQsZS5oYW5kbGVyLGUuY29udGV4dCk6ci5vbih0LGUuaGFuZGxlcixlLmNvbnRleHQpfSkpfSkpLE9iamVjdC5rZXlzKHRoaXMuX3JlcXVlc3RIYW5kbGVycykuZm9yRWFjaCgoZnVuY3Rpb24odCl7ci5yZWdpc3RlclJlcXVlc3RIYW5kbGVyKHQsbi5fcmVxdWVzdEhhbmRsZXJzW3RdKX0pKSxyfSx0LnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7ci5jb25zb2xlLmluZm8oXCJEZXN0cm95IEJ1c1wiKSx0aGlzLm9mZigpLHRoaXMuX2FkYXB0ZXIuZGVzdHJveSgpfSx0LnByb3RvdHlwZS5fYWRkRXZlbnRIYW5kbGVyPWZ1bmN0aW9uKHQsZSxuLHIpe3JldHVybiB0aGlzLl9ldmVudEhhbmRsZXJzW3RdfHwodGhpcy5fZXZlbnRIYW5kbGVyc1t0XT1bXSksdGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5wdXNoKHtoYW5kbGVyOmUsb25jZTpyLGNvbnRleHQ6bn0pLHRoaXN9LHQucHJvdG90eXBlLl9vbk1lc3NhZ2U9ZnVuY3Rpb24odCl7c3dpdGNoKHQudHlwZSl7Y2FzZSAwOnIuY29uc29sZS5pbmZvKCdIYXMgZXZlbnQgd2l0aCBuYW1lIFwiJytTdHJpbmcodC5uYW1lKSsnXCInLHQuZGF0YSksdGhpcy5fZmlyZUV2ZW50KFN0cmluZyh0Lm5hbWUpLHQuZGF0YSk7YnJlYWs7Y2FzZSAxOnIuY29uc29sZS5pbmZvKCdTdGFydCBhY3Rpb24gd2l0aCBpZCBcIicrdC5pZCsnXCIgYW5kIG5hbWUgXCInK1N0cmluZyh0Lm5hbWUpKydcIicsdC5kYXRhKSx0aGlzLl9jcmVhdGVSZXNwb25zZSh0KTticmVhaztjYXNlIDI6ci5jb25zb2xlLmluZm8oJ1N0YXJ0IHJlc3BvbnNlIHdpdGggbmFtZSBcIicrdC5pZCsnXCIgYW5kIHN0YXR1cyBcIicrdC5zdGF0dXMrJ1wiJyx0LmNvbnRlbnQpLHRoaXMuX2ZpcmVFbmRBY3Rpb24odCl9fSx0LnByb3RvdHlwZS5fY3JlYXRlUmVzcG9uc2U9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcyxvPWZ1bmN0aW9uKHQpe3IuY29uc29sZS5lcnJvcih0KSxuLl9hZGFwdGVyLnNlbmQoe2lkOmUuaWQsdHlwZToyLHN0YXR1czoxLGNvbnRlbnQ6U3RyaW5nKHQpfSl9O2lmKHRoaXMuX3JlcXVlc3RIYW5kbGVyc1tTdHJpbmcoZS5uYW1lKV0pdHJ5e3ZhciBpPXRoaXMuX3JlcXVlc3RIYW5kbGVyc1tTdHJpbmcoZS5uYW1lKV0oZS5kYXRhKTt0Ll9pc1Byb21pc2UoaSk/aS50aGVuKChmdW5jdGlvbih0KXtuLl9hZGFwdGVyLnNlbmQoe2lkOmUuaWQsdHlwZToyLHN0YXR1czowLGNvbnRlbnQ6dH0pfSksbyk6dGhpcy5fYWRhcHRlci5zZW5kKHtpZDplLmlkLHR5cGU6MixzdGF0dXM6MCxjb250ZW50Oml9KX1jYXRjaCh0KXtvKHQpfWVsc2UgbyhuZXcgRXJyb3IoJ0hhcyBubyBoYW5kbGVyIGZvciBcIicrU3RyaW5nKGUubmFtZSkrJ1wiIGFjdGlvbiEnKSl9LHQucHJvdG90eXBlLl9maXJlRW5kQWN0aW9uPWZ1bmN0aW9uKHQpe2lmKHRoaXMuX2FjdGl2ZVJlcXVlc3RIYXNoW3QuaWRdKXtzd2l0Y2godC5zdGF0dXMpe2Nhc2UgMTp0aGlzLl9hY3RpdmVSZXF1ZXN0SGFzaFt0LmlkXS5yZWplY3QodC5jb250ZW50KTticmVhaztjYXNlIDA6dGhpcy5fYWN0aXZlUmVxdWVzdEhhc2hbdC5pZF0ucmVzb2x2ZSh0LmNvbnRlbnQpfWRlbGV0ZSB0aGlzLl9hY3RpdmVSZXF1ZXN0SGFzaFt0LmlkXX19LHQucHJvdG90eXBlLl9maXJlRXZlbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLl9ldmVudEhhbmRsZXJzW3RdJiYodGhpcy5fZXZlbnRIYW5kbGVyc1t0XT10aGlzLl9ldmVudEhhbmRsZXJzW3RdLnNsaWNlKCkuZmlsdGVyKChmdW5jdGlvbih0KXt0cnl7dC5oYW5kbGVyLmNhbGwodC5jb250ZXh0LGUpfWNhdGNoKHQpe3IuY29uc29sZS53YXJuKHQpfXJldHVybiF0Lm9uY2V9KSksdGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5sZW5ndGh8fGRlbGV0ZSB0aGlzLl9ldmVudEhhbmRsZXJzW3RdKX0sdC5fY3JlYXRlRXZlbnQ9ZnVuY3Rpb24odCxlKXtyZXR1cm57dHlwZTowLG5hbWU6dCxkYXRhOmV9fSx0Ll9pc1Byb21pc2U9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQudGhlbiYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC50aGVufSx0fSgpO2UuQnVzPW99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjsoZnVuY3Rpb24odCl7dmFyIHI9dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4ocj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUsbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tuXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPW4oNSksaT1uKDIpLHM9KHNlbGZ8fHQpLmNvbnNvbGUsdT1PYmplY3QuY3JlYXRlKG51bGwpO2Z1bmN0aW9uIGEodCl7dVt0XXx8KHVbdF09W10pfWZ1bmN0aW9uIGModCxlKXt1W3RdLnB1c2goZSl9ZS5jb25zb2xlPXIoe30saS5rZXlzKG8uY29uZmlnLmNvbnNvbGUubWV0aG9kc0RhdGEpLnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFtlXT1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxuPTA7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0W25dPWFyZ3VtZW50c1tuXTtvLmNvbmZpZy5jb25zb2xlLmxvZ0xldmVsPG8uY29uZmlnLmNvbnNvbGUubWV0aG9kc0RhdGFbZV0ubG9nTGV2ZWw/by5jb25maWcuY29uc29sZS5tZXRob2RzRGF0YVtlXS5zYXZlJiYoYShlKSxjKGUsdCkpOnNbZV0uYXBwbHkocyx0KX0sdH0pLE9iamVjdC5jcmVhdGUobnVsbCkpLHtnZXRTYXZlZE1lc3NhZ2VzOmZ1bmN0aW9uKHQpe3JldHVybiB1W3RdfHxbXX19KX0pLmNhbGwodGhpcyxuKDE0KSl9LGZ1bmN0aW9uKHQsZSl7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2godCl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX10LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLnNpemU9MCx0aGlzLmhhc2g9T2JqZWN0LmNyZWF0ZShudWxsKSx0JiZ0LmZvckVhY2godGhpcy5hZGQsdGhpcyl9cmV0dXJuIHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNoW3RdPSEwLHRoaXMuc2l6ZT1PYmplY3Qua2V5cyh0aGlzLmhhc2gpLmxlbmd0aCx0aGlzfSx0LnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW4gdGhpcy5oYXNofSx0LnByb3RvdHlwZS50b0FycmF5PWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFzaCl9LHR9KCk7ZS5VbmlxUHJpbWl0aXZlQ29sbGVjdGlvbj1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbz10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4ocj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYodFtuXT1lW25dKX0pKHQsZSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfSksaT10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9big2KSx1PW4oMSksYT1uKDcpLGM9bigyKSxmPXtvcmlnaW5zOltdLGF2YWlsYWJsZUNoYW5lbElkOltdfSxsPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUobixyLG8pe3ZhciBpPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gaS5pZD11LnVuaXF1ZUlkKFwid2FcIiksaS5jYWxsYmFja3M9W10saS5vcHRpb25zPWUucHJlcGFyZU9wdGlvbnMobyksaS5saXN0ZW49bixpLmRpc3BhdGNoPXIsaS5saXN0ZW4uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQub24oXCJtZXNzYWdlXCIsaS5vbk1lc3NhZ2UsaSl9KSksaX1yZXR1cm4gbyhlLHQpLGUucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNhbGxiYWNrcy5wdXNoKHQpLHUuY29uc29sZS5pbmZvKFwiV2luZG93QWRhcHRlcjogQWRkIGlmcmFtZSBtZXNzYWdlIGxpc3RlbmVyXCIpLHRoaXN9LGUucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24odCl7dmFyIGU9aSh7fSx0LHtjaGFuZWxJZDp0aGlzLm9wdGlvbnMuY2hhbmVsSWR9KTtyZXR1cm4gdGhpcy5kaXNwYXRjaC5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kaXNwYXRjaChlKX0pKSx1LmNvbnNvbGUuaW5mbyhcIldpbmRvd0FkYXB0ZXI6IFNlbmQgbWVzc2FnZVwiLGUpLHRoaXN9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLmxpc3Rlbi5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kZXN0cm95KCl9KSksdGhpcy5kaXNwYXRjaC5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5kZXN0cm95KCl9KSksdS5jb25zb2xlLmluZm8oXCJXaW5kb3dBZGFwdGVyOiBEZXN0cm95XCIpfSxlLnByb3RvdHlwZS5vbk1lc3NhZ2U9ZnVuY3Rpb24odCl7dGhpcy5hY2Nlc3NFdmVudCh0KSYmdGhpcy5jYWxsYmFja3MuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dHJ5e2UodC5kYXRhKX1jYXRjaCh0KXt1LmNvbnNvbGUud2FybihcIldpbmRvd0FkYXB0ZXI6IFVuaGFuZGxlZCBleGNlcHRpb24hXCIsdCl9fSkpfSxlLnByb3RvdHlwZS5hY2Nlc3NFdmVudD1mdW5jdGlvbih0KXtpZihcIm9iamVjdFwiIT10eXBlb2YgdC5kYXRhfHxudWxsPT10LmRhdGEudHlwZSlyZXR1cm4gdS5jb25zb2xlLmluZm8oXCJXaW5kb3dBZGFwdGVyOiBCbG9jayBldmVudC4gV3JvbmcgZXZlbnQgZm9ybWF0IVwiLHQuZGF0YSksITE7aWYoIXRoaXMub3B0aW9ucy5vcmlnaW5zLmhhcyhcIipcIikmJiF0aGlzLm9wdGlvbnMub3JpZ2lucy5oYXModC5vcmlnaW4pKXJldHVybiB1LmNvbnNvbGUuaW5mbygnU2ltcGxlV2luZG93QWRhcHRlcjogQmxvY2sgZXZlbnQgYnkgb3JpZ2luIFwiJyt0Lm9yaWdpbisnXCInKSwhMTtpZighdGhpcy5vcHRpb25zLmF2YWlsYWJsZUNoYW5lbElkLnNpemUpcmV0dXJuITA7dmFyIGU9ISghdC5kYXRhLmNoYW5lbElkfHwhdGhpcy5vcHRpb25zLmF2YWlsYWJsZUNoYW5lbElkLmhhcyh0LmRhdGEuY2hhbmVsSWQpKTtyZXR1cm4gZXx8dS5jb25zb2xlLmluZm8oJ1NpbXBsZVdpbmRvd0FkYXB0ZXI6IEJsb2NrIGV2ZW50IGJ5IGNoYW5lbCBpZCBcIicrdC5kYXRhLmNoYW5lbElkKydcIicpLGV9LGUuY3JlYXRlU2ltcGxlV2luZG93QWRhcHRlcj1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMsbz10aGlzLmdldENvbnRlbnRPcmlnaW4odCksaT10aGlzLnByZXBhcmVPcHRpb25zKG4pLHM9W107byYmaS5vcmlnaW5zLmFkZChvKTt2YXIgdT1uZXcgYS5XaW5kb3dQcm90b2NvbCh3aW5kb3csYS5XaW5kb3dQcm90b2NvbC5QUk9UT0NPTF9UWVBFUy5MSVNURU4pLGM9ZnVuY3Rpb24odCl7cy5wdXNoKHQpfTtyZXR1cm4gdS5vbihcIm1lc3NhZ2VcIixjKSx0aGlzLmdldElmcmFtZUNvbnRlbnQodCkudGhlbigoZnVuY3Rpb24odCl7dmFyIG49bmV3IGEuV2luZG93UHJvdG9jb2wodC53aW4sYS5XaW5kb3dQcm90b2NvbC5QUk9UT0NPTF9UWVBFUy5ESVNQQVRDSCksbz1uZXcgZShbdV0sW25dLHIudW5QcmVwYXJlT3B0aW9ucyhpKSk7cmV0dXJuIHMuZm9yRWFjaCgoZnVuY3Rpb24odCl7by5vbk1lc3NhZ2UodCl9KSksdS5vZmYoXCJtZXNzYWdlXCIsYyksb30pKX0sZS5wcmVwYXJlT3B0aW9ucz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1mKTt2YXIgZT1mdW5jdGlvbih0LGUpe3JldHVybiBjLnBpcGUodS50b0FycmF5LChuPWUsZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0LmFkZChlKX0pLG4pfSkpKHQpO3ZhciBufSxuPWUodC5vcmlnaW5zfHxbXSxuZXcgdS5VbmlxUHJpbWl0aXZlQ29sbGVjdGlvbihbd2luZG93LmxvY2F0aW9uLm9yaWdpbl0pKSxyPWUodC5hdmFpbGFibGVDaGFuZWxJZHx8W10sbmV3IHUuVW5pcVByaW1pdGl2ZUNvbGxlY3Rpb24pO3JldHVybiBpKHt9LHQse29yaWdpbnM6bixhdmFpbGFibGVDaGFuZWxJZDpyfSl9LGUudW5QcmVwYXJlT3B0aW9ucz1mdW5jdGlvbih0KXtyZXR1cm57b3JpZ2luczp0Lm9yaWdpbnMudG9BcnJheSgpLGF2YWlsYWJsZUNoYW5lbElkOnQuYXZhaWxhYmxlQ2hhbmVsSWQudG9BcnJheSgpLGNoYW5lbElkOnQuY2hhbmVsSWR9fSxlLmdldElmcmFtZUNvbnRlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQ/dCBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50P3QuY29udGVudFdpbmRvdz9Qcm9taXNlLnJlc29sdmUoe3dpbjp0LmNvbnRlbnRXaW5kb3d9KTpuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSxuKXt0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGUoe3dpbjp0LmNvbnRlbnRXaW5kb3d9KX0pLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLG4sITEpfSkpOlByb21pc2UucmVzb2x2ZSh7d2luOnR9KTpQcm9taXNlLnJlc29sdmUoe3dpbjp3aW5kb3cub3BlbmVyfHx3aW5kb3cucGFyZW50fSl9LGUuZ2V0Q29udGVudE9yaWdpbj1mdW5jdGlvbih0KXtpZighdCl0cnl7cmV0dXJuIG5ldyBVUkwoZG9jdW1lbnQucmVmZXJyZXIpLm9yaWdpbn1jYXRjaCh0KXtyZXR1cm4gbnVsbH1pZighKHQgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkpdHJ5e3JldHVybiB3aW5kb3cudG9wLm9yaWdpbn1jYXRjaCh0KXtyZXR1cm4gbnVsbH10cnl7cmV0dXJuIG5ldyBVUkwodC5zcmMpLm9yaWdpbnx8bnVsbH1jYXRjaCh0KXtyZXR1cm4gbnVsbH19LGV9KHMuQWRhcHRlcik7ZS5XaW5kb3dBZGFwdGVyPWx9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtlLl9fZXNNb2R1bGU9ITAsZnVuY3Rpb24odCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9KG4oMTgpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuX19lc01vZHVsZT0hMDt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gdC5wcm90b3R5cGUuaGFzTGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVybiEoIXRoaXMuX2V2ZW50c1t0XXx8IXRoaXMuX2V2ZW50c1t0XS5sZW5ndGgpfSx0LnByb3RvdHlwZS5nZXRBY3RpdmVFdmVudHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiBPYmplY3Qua2V5cyh0aGlzLl9ldmVudHMpLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIHQuaGFzTGlzdGVuZXJzKGUpfSkpfSx0LnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKHQsZSl7dGhpcy5fZXZlbnRzW3RdJiYodGhpcy5fZXZlbnRzW3RdPXRoaXMuX2V2ZW50c1t0XS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3RyeXt0LmhhbmRsZXIuY2FsbCh0LmNvbnRleHQsZSl9Y2F0Y2godCl7fXJldHVybiF0Lm9uY2V9KSksdGhpcy5fZXZlbnRzW3RdLmxlbmd0aHx8ZGVsZXRlIHRoaXMuX2V2ZW50c1t0XSl9LHQucHJvdG90eXBlLm9uPWZ1bmN0aW9uKHQsZSxuKXt0aGlzLl9vbih0LGUsbiwhMSl9LHQucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24odCxlLG4pe3RoaXMuX29uKHQsZSxuLCEwKX0sdC5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPVwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6bnVsbCxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6bnVsbDtyP28/ciBpbiB0aGlzLl9ldmVudHMmJih0aGlzLl9ldmVudHNbcl09dGhpcy5fZXZlbnRzW3JdLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuaGFuZGxlciE9PW99KSkpOmRlbGV0ZSB0aGlzLl9ldmVudHNbcl06T2JqZWN0LmtleXModGhpcy5fZXZlbnRzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9mZih0LG8pfSkpfSx0LnByb3RvdHlwZS5fb249ZnVuY3Rpb24odCxlLG4scil7dGhpcy5fZXZlbnRzW3RdfHwodGhpcy5fZXZlbnRzW3RdPVtdKSx0aGlzLl9ldmVudHNbdF0ucHVzaCh7aGFuZGxlcjplLGNvbnRleHQ6bixvbmNlOnJ9KX0sdH0oKTtlLkV2ZW50RW1pdHRlcj1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPW4oMyksaT1uKDEpLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShlLG4pe3ZhciByPXQuY2FsbCh0aGlzLG4pfHx0aGlzO3JldHVybiByLl91cmw9ZSxyfXJldHVybiByLl9fZXh0ZW5kcyhlLHQpLGUucHJvdG90eXBlLl9iZWZvcmVTaG93PWZ1bmN0aW9uKCl7fSxlLnByb3RvdHlwZS5fYWZ0ZXJTaG93PWZ1bmN0aW9uKCl7bnVsbCE9dGhpcy5fYWN0aXZlJiYodGhpcy5fYWN0aXZlLndpbi5jbG9zZSgpLHRoaXMuX2FjdGl2ZS5idXMuZGVzdHJveSgpKSx0aGlzLl9hY3RpdmU9dm9pZCAwfSxlLnByb3RvdHlwZS5fZ2V0QnVzPWZ1bmN0aW9uKCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4sbztyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOmlmKG51bGwhPXRoaXMuX2FjdGl2ZSlyZXR1cm5bMixQcm9taXNlLnJlc29sdmUodGhpcy5fYWN0aXZlLmJ1cyldO2lmKHQ9d2luZG93Lm9wZW4odGhpcy5fdXJsKSxlPW5ldyBVUkwoXCJcIix0aGlzLl91cmwpLm9yaWdpbixudWxsPT10KXRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBtdXN0IGJlIGNhbGxlZCBpbiB1c2VyIGV2ZW50IVwiKTtyZXR1cm5bNCxpLldpbmRvd0FkYXB0ZXIuY3JlYXRlU2ltcGxlV2luZG93QWRhcHRlcih0LHtvcmlnaW5zOmV9KV07Y2FzZSAxOnJldHVybiBuPXIuc2VudCgpLG89bmV3IGkuQnVzKG4sLTEpLHRoaXMuX2FjdGl2ZT17d2luOnQsYnVzOm99LFsyLG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtvLm9uY2UoXCJyZWFkeVwiLChmdW5jdGlvbigpe3JldHVybiB0KG8pfSkpfSkpXX19KSl9KSl9LGV9KG8uVHJhbnNwb3J0KTtlLlRyYW5zcG9ydFdpbmRvdz1zfV0pfSkpOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcmVxdWVzdFwiKSk7XG52YXIgcXVlcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcXVlcnlcIikpO1xuZnVuY3Rpb24gZmV0Y2hEYXRhS2V5KGJhc2UsIGFkZHJlc3MsIGtleSwgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2RhdGEvXCIgKyBhZGRyZXNzICsgXCIvXCIgKyBlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaERhdGFLZXkgPSBmZXRjaERhdGFLZXk7XG5mdW5jdGlvbiBmZXRjaFNjcmlwdEluZm9NZXRhKGJhc2UsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9zY3JpcHRJbmZvL1wiICsgYWRkcmVzcyArIFwiL21ldGFcIlxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFNjcmlwdEluZm9NZXRhID0gZmV0Y2hTY3JpcHRJbmZvTWV0YTtcbmZ1bmN0aW9uIGZldGNoQmFsYW5jZURldGFpbHMoYmFzZSwgYWRkcmVzcywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2JhbGFuY2UvZGV0YWlscy9cIiArIGFkZHJlc3NcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCYWxhbmNlRGV0YWlscyA9IGZldGNoQmFsYW5jZURldGFpbHM7XG5mdW5jdGlvbiBmZXRjaEJhbGFuY2VDb25maXJtYXRpb25zKGJhc2UsIGFkZHJlc3MsIGNvbmZpcm1hdGlvbnMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9iYWxhbmNlL1wiICsgYWRkcmVzcyArIFwiL1wiICsgY29uZmlybWF0aW9uc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJhbGFuY2VDb25maXJtYXRpb25zID0gZmV0Y2hCYWxhbmNlQ29uZmlybWF0aW9ucztcbmZ1bmN0aW9uIGZldGNoU2NyaXB0SW5mbyhiYXNlLCBhZGRyZXNzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvc2NyaXB0SW5mby9cIiArIGFkZHJlc3NcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTY3JpcHRJbmZvID0gZmV0Y2hTY3JpcHRJbmZvO1xuZnVuY3Rpb24gZGF0YShiYXNlLCBhZGRyZXNzLCBwYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHsgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgfVxuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2RhdGEvXCIgKyBhZGRyZXNzICsgcXVlcnlfMS5kZWZhdWx0KHBhcmFtcylcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGF0YSA9IGRhdGE7XG5mdW5jdGlvbiBmZXRjaFZhbGlkYXRlKGJhc2UsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2FkZHJlc3Nlcy92YWxpZGF0ZS9cIiArIGFkZHJlc3MgfSk7XG59XG5leHBvcnRzLmZldGNoVmFsaWRhdGUgPSBmZXRjaFZhbGlkYXRlO1xuZnVuY3Rpb24gZmV0Y2hCYWxhbmNlKGJhc2UsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2FkZHJlc3Nlcy9iYWxhbmNlL1wiICsgYWRkcmVzcyB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCYWxhbmNlID0gZmV0Y2hCYWxhbmNlO1xuZnVuY3Rpb24gZmV0Y2hFZmZlY3RpdmVCYWxhbmNlQ29uZmlybWF0aW9ucyhiYXNlLCBhZGRyZXNzLCBjb25maXJtYXRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvZWZmZWN0aXZlQmFsYW5jZS9cIiArIGFkZHJlc3MgKyBcIi9cIiArIGNvbmZpcm1hdGlvbnNcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hFZmZlY3RpdmVCYWxhbmNlQ29uZmlybWF0aW9ucyA9IGZldGNoRWZmZWN0aXZlQmFsYW5jZUNvbmZpcm1hdGlvbnM7XG5mdW5jdGlvbiBmZXRjaEVmZmVjdGl2ZUJhbGFuY2UoYmFzZSwgYWRkcmVzcykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2VmZmVjdGl2ZUJhbGFuY2UvXCIgKyBhZGRyZXNzXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoRWZmZWN0aXZlQmFsYW5jZSA9IGZldGNoRWZmZWN0aXZlQmFsYW5jZTtcbmZ1bmN0aW9uIGZldGNoU2VxKGJhc2UsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvc2VxL1wiICsgZnJvbSArIFwiL1wiICsgdG9cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTZXEgPSBmZXRjaFNlcTtcbmZ1bmN0aW9uIGZldGNoU2VlZChiYXNlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvc2VlZC9cIiArIGFkZHJlc3NcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTZWVkID0gZmV0Y2hTZWVkO1xuZnVuY3Rpb24gZmV0Y2hQdWJsaWNLZXkoYmFzZSwgcHVibGljS2V5KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvcHVibGljS2V5L1wiICsgcHVibGljS2V5XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoUHVibGljS2V5ID0gZmV0Y2hQdWJsaWNLZXk7XG5mdW5jdGlvbiBmZXRjaEFkZHJlc3NlcyhiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL2FkZHJlc3NlcydcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hBZGRyZXNzZXMgPSBmZXRjaEFkZHJlc3Nlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcmVxdWVzdFwiKSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90b29scy91dGlsc1wiKTtcbmZ1bmN0aW9uIGZldGNoRGV0YWlscyhiYXNlLCBhc3NldElkKSB7XG4gICAgdmFyIGlzT25jZSA9ICFBcnJheS5pc0FycmF5KGFzc2V0SWQpO1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh1dGlsc18xLnRvQXJyYXkoYXNzZXRJZCkubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2Fzc2V0cy9kZXRhaWxzL1wiICsgaWQgfSk7IH0pKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gaXNPbmNlID8gbGlzdFswXSA6IGxpc3Q7IH0pO1xufVxuZXhwb3J0cy5mZXRjaERldGFpbHMgPSBmZXRjaERldGFpbHM7XG5mdW5jdGlvbiBmZXRjaEFzc2V0RGlzdHJpYnV0aW9uKGJhc2UsIGFzc2V0SWQsIGhlaWdodCwgbGltaXQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2Fzc2V0cy9cIiArIGFzc2V0SWQgKyBcIi9kaXN0cmlidXRpb24vXCIgKyBoZWlnaHQgKyBcIi9saW1pdC9cIiArIGxpbWl0IH0pO1xufVxuZXhwb3J0cy5mZXRjaEFzc2V0RGlzdHJpYnV0aW9uID0gZmV0Y2hBc3NldERpc3RyaWJ1dGlvbjtcbi8qKlxuICogVE9ET1xuICogR0VUIC9hc3NldHMve2Fzc2V0SWR9L2Rpc3RyaWJ1dGlvblxuICogQXNzZXQgYmFsYW5jZSBkaXN0cmlidXRpb25cbiAqL1xuZnVuY3Rpb24gZmV0Y2hBc3NldHNBZGRyZXNzTGltaXQoYmFzZSwgYWRkcmVzcywgbGltaXQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiYXNzZXRzL25mdC9cIiArIGFkZHJlc3MgKyBcIi9saW1pdC9cIiArIGxpbWl0IH0pO1xufVxuZXhwb3J0cy5mZXRjaEFzc2V0c0FkZHJlc3NMaW1pdCA9IGZldGNoQXNzZXRzQWRkcmVzc0xpbWl0O1xuZnVuY3Rpb24gZmV0Y2hBc3NldHNCYWxhbmNlKGJhc2UsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2Fzc2V0cy9iYWxhbmNlL1wiICsgYWRkcmVzcyB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hBc3NldHNCYWxhbmNlID0gZmV0Y2hBc3NldHNCYWxhbmNlO1xuZnVuY3Rpb24gZmV0Y2hCYWxhbmNlQWRkcmVzc0Fzc2V0SWQoYmFzZSwgYWRkcmVzcywgYXNzZXRJZCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYXNzZXRzL2JhbGFuY2UvXCIgKyBhZGRyZXNzICsgXCIvXCIgKyBhc3NldElkIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJhbGFuY2VBZGRyZXNzQXNzZXRJZCA9IGZldGNoQmFsYW5jZUFkZHJlc3NBc3NldElkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9yZXF1ZXN0XCIpKTtcbi8qKlxuICogR0VUIC9ibG9ja3MvaGVhZGVycy9zZXEve2Zyb219L3t0b31cbiAqIEdldCBibG9jayBoZWFkZXJzIGF0IHNwZWNpZmllZCBoZWlnaHRzXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICovXG5mdW5jdGlvbiBmZXRjaEhlYWRlcnNTZXEoYmFzZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9oZWFkZXJzL3NlcS9cIiArIGZyb20gKyBcIi9cIiArIHRvXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoSGVhZGVyc1NlcSA9IGZldGNoSGVhZGVyc1NlcTtcbi8qKlxuICogR0VUIC9ibG9ja3MvaGVhZGVycy9sYXN0XG4gKiBMYXN0IGJsb2NrIGhlYWRlclxuICogQHBhcmFtIGJhc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2hIZWFkZXJzTGFzdChiYXNlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL2Jsb2Nrcy9oZWFkZXJzL2xhc3QnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoSGVhZGVyc0xhc3QgPSBmZXRjaEhlYWRlcnNMYXN0O1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9oZWlnaHQve3NpZ25hdHVyZX1cbiAqIEhlaWdodCBvZiBhIGJsb2NrIGJ5IGl0cyBzaWduYXR1cmVcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gc2lnbmF0dXJlXG4gKi9cbmZ1bmN0aW9uIGZldGNoSGVpZ2h0QnlTaWduYXR1cmUoYmFzZSwgc2lnbmF0dXJlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvaGVpZ2h0L1wiICsgc2lnbmF0dXJlXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoSGVpZ2h0QnlTaWduYXR1cmUgPSBmZXRjaEhlaWdodEJ5U2lnbmF0dXJlO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9oZWFkZXJzL2F0L3toZWlnaHR9XG4gKiBCbG9jayBoZWFkZXIgYXQgaGVpZ2h0XG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIGhlaWdodFxuICovXG5mdW5jdGlvbiBmZXRjaEhlYWRlcnNBdChiYXNlLCBoZWlnaHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9oZWFkZXJzL2F0L1wiICsgaGVpZ2h0XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoSGVhZGVyc0F0ID0gZmV0Y2hIZWFkZXJzQXQ7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2F0L3toZWlnaHR9XG4gKiBHZXQgYmxvY2sgYXQgc3BlY2lmaWVkIGhlaWdodFxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBoZWlnaHRcbiAqL1xuZnVuY3Rpb24gQmxvY2tBdChiYXNlLCBoZWlnaHQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9hdC9cIiArIGhlaWdodFxuICAgIH0pO1xufVxuZXhwb3J0cy5CbG9ja0F0ID0gQmxvY2tBdDtcbi8qKlxuICogR0VUIC9ibG9ja3Mvc2VxL3tmcm9tfS97dG99XG4gKiBCbG9jayByYW5nZVxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqL1xuZnVuY3Rpb24gZmV0Y2hTZXEoYmFzZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9zZXEvXCIgKyBmcm9tICsgXCIvXCIgKyB0b1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFNlcSA9IGZldGNoU2VxO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9zaWduYXR1cmUve3NpZ25hdHVyZX1cbiAqIEdldCBibG9jayBieSBpdHMgc2lnbmF0dXJlXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIHNpZ25hdHVyZVxuICovXG5mdW5jdGlvbiBmZXRjaEJsb2NrQnlTaWduYXR1cmUoYmFzZSwgc2lnbmF0dXJlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3Mvc2lnbmF0dXJlL1wiICsgc2lnbmF0dXJlXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQmxvY2tCeVNpZ25hdHVyZSA9IGZldGNoQmxvY2tCeVNpZ25hdHVyZTtcbi8qKlxuICogR0VUIC9ibG9ja3MvZmlyc3RcbiAqIEdldCBnZW5lc2lzIGJsb2NrXG4gKiBAcGFyYW0gYmFzZVxuICovXG5mdW5jdGlvbiBmZXRjaEZpcnN0KGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9maXJzdFwiXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoRmlyc3QgPSBmZXRjaEZpcnN0O1xuLyoqXG4gKiAvYmxvY2tzL2FkZHJlc3Mve2FkZHJlc3N9L3tmcm9tfS97dG99XG4gKiBHZXQgbGlzdCBvZiBibG9ja3MgZ2VuZXJhdGVkIGJ5IHNwZWNpZmllZCBhZGRyZXNzXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIGFkZHJlc3NcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqL1xuZnVuY3Rpb24gZmV0Y2hCbG9ja3NCeUFkZHJlc3MoYmFzZSwgYWRkcmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9hZGRyZXNzL1wiICsgYWRkcmVzcyArIFwiL1wiICsgZnJvbSArIFwiL1wiICsgdG9cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCbG9ja3NCeUFkZHJlc3MgPSBmZXRjaEJsb2Nrc0J5QWRkcmVzcztcbi8qKlxuICogR0VUIC9ibG9ja3MvbGFzdFxuICogTGFzdCBibG9ja1xuICogQHBhcmFtIGJhc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2hMYXN0KGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvYmxvY2tzL2xhc3QnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoTGFzdCA9IGZldGNoTGFzdDtcbi8qKlxuICogR0VUIC9ibG9ja3MvZGVsYXkve3NpZ25hdHVyZX0ve2Jsb2NrTnVtfVxuICogQXZlcmFnZSBkZWxheSBpbiBtaWxsaXNlY29uZHMgYmV0d2VlbiBsYXN0IGJsb2NrTnVtIGJsb2NrcyBzdGFydGluZyBmcm9tIGJsb2NrIHdpdGggc2lnbmF0dXJlXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIHNpZ25hdHVyZVxuICogQHBhcmFtIGJsb2NrTnVtXG4gKi9cbmZ1bmN0aW9uIGZldGNoRGVsYXkoYmFzZSwgc2lnbmF0dXJlLCBibG9ja051bSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2RlbGF5L1wiICsgc2lnbmF0dXJlICsgXCIvXCIgKyBibG9ja051bVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaERlbGF5ID0gZmV0Y2hEZWxheTtcbi8qKlxuICogR0VUIC9ibG9ja3MvaGVpZ2h0XG4gKiBAcGFyYW0gYmFzZVxuICovXG5mdW5jdGlvbiBmZXRjaEhlaWdodChiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL2Jsb2Nrcy9oZWlnaHQnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoSGVpZ2h0ID0gZmV0Y2hIZWlnaHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzXCIpO1xudmFyIGJsb2Nrc18xID0gcmVxdWlyZShcIi4uL2Jsb2Nrc1wiKTtcbnZhciByZXF1ZXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3JlcXVlc3RcIikpO1xudmFyIHF1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3F1ZXJ5XCIpKTtcbnZhciBzdHJpbmdpZnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvc3RyaW5naWZ5XCIpKTtcbi8qKlxuICogR0VUIC90cmFuc2FjdGlvbnMvdW5jb25maXJtZWQvc2l6ZVxuICogTnVtYmVyIG9mIHVuY29uZmlybWVkIHRyYW5zYWN0aW9uc1xuICovXG5mdW5jdGlvbiBmZXRjaFVuY29uZmlybWVkU2l6ZShiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZC9zaXplJ1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFVuY29uZmlybWVkU2l6ZSA9IGZldGNoVW5jb25maXJtZWRTaXplO1xuLy8gQFRPRE86IHdoZW4gY29ycmVjdCBBUEkga2V5IGlzIHJlY2VpdmVkXG4vKipcbiAqIFBPU1QgL3RyYW5zYWN0aW9ucy9zaWduL3tzaWduZXJBZGRyZXNzfVxuICogU2lnbiBhIHRyYW5zYWN0aW9uIHdpdGggYSBub24tZGVmYXVsdCBwcml2YXRlIGtleVxuICovXG4vKipcbiogUE9TVCAvdHJhbnNhY3Rpb25zL2NhbGN1bGF0ZUZlZVxuKiBDYWxjdWxhdGUgdHJhbnNhY3Rpb24gZmVlXG4qL1xuZnVuY3Rpb24gZmV0Y2hDYWxjdWxhdGVGZWUoYmFzZSwgdHgpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvdHJhbnNhY3Rpb25zL2NhbGN1bGF0ZUZlZScsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogc3RyaW5naWZ5XzEuZGVmYXVsdCh0eCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQ2FsY3VsYXRlRmVlID0gZmV0Y2hDYWxjdWxhdGVGZWU7XG4vKipcbiAqIEdFVCAvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkXG4gKiBVbmNvbmZpcm1lZCB0cmFuc2FjdGlvbnNcbiAqL1xuZnVuY3Rpb24gZmV0Y2hVbmNvbmZpcm1lZChiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZCdcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hVbmNvbmZpcm1lZCA9IGZldGNoVW5jb25maXJtZWQ7XG4vKipcbiAqINCh0L/QuNGB0L7QuiDRgtGA0LDQvdC30LDQutGG0LjQuSDQv9C+INCw0LTRgNC10YHRg1xuICogQHBhcmFtIGFkZHJlc3NcbiAqIEBwYXJhbSBsaW1pdCAgICAgINC80LDQutGB0LjQvNCw0LvRjNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRgtGA0LDQvdC30LDQutGG0LjQuSDQsiDRgNC10LfRg9C70YzRgtCw0YLQtVxuICogQHBhcmFtIGFmdGVyICAgICAg0LjRgdC60LDRgtGMINGC0YDQsNC90LfQsNC60YbQuNC4INC/0L7RgdC70LUgSUQg0YPQutCw0LfQsNC90L3QvtCz0L4g0LIgYWZ0ZXJcbiAqIEBwYXJhbSByZXRyeSAgICAgINC60L7Qu9C40YfQtdGB0YLQstC+INC/0L7Qv9GL0YLQvtC6INC90LAg0LLRi9C/0L7Qu9C90LXQvdC40LUg0LfQsNC/0YDQvtGB0LBcbiAqL1xuZnVuY3Rpb24gZmV0Y2hUcmFuc2FjdGlvbnMoYmFzZSwgYWRkcmVzcywgbGltaXQsIGFmdGVyLCByZXRyeSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvdHJhbnNhY3Rpb25zL2FkZHJlc3MvXCIgKyBhZGRyZXNzICsgXCIvbGltaXQvXCIgKyBsaW1pdCArIHF1ZXJ5XzEuZGVmYXVsdCh7IGFmdGVyOiBhZnRlciB9KVxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBsaXN0ID0gX2FbMF07XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFRyYW5zYWN0aW9ucyA9IGZldGNoVHJhbnNhY3Rpb25zO1xuLyoqXG4gKiBHRVQgL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZC9pbmZvL3tpZH1cbiAqIFVuY29uZmlybWVkIHRyYW5zYWN0aW9uIGluZm9cbiAqL1xuZnVuY3Rpb24gZmV0Y2hVbmNvbmZpcm1lZEluZm8oYmFzZSwgaWQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZC9pbmZvL1wiICsgaWRcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hVbmNvbmZpcm1lZEluZm8gPSBmZXRjaFVuY29uZmlybWVkSW5mbztcbi8vIEBUT0RPIHdoZW4gY29ycmVjdCBBUEkga2V5IGlzIHJlY2VpdmVkXG4vKipcbiAqIFBPU1QgL3RyYW5zYWN0aW9ucy9zaWduXG4gKiBTaWduIGEgdHJhbnNhY3Rpb25cbiAqL1xuLyoqXG4gKiBHRVQgL3RyYW5zYWN0aW9ucy9pbmZvL3tpZH1cbiAqIFRyYW5zYWN0aW9uIGluZm9cbiAqL1xuZnVuY3Rpb24gZmV0Y2hJbmZvKGJhc2UsIGlkKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi90cmFuc2FjdGlvbnMvaW5mby9cIiArIGlkIH0pO1xufVxuZXhwb3J0cy5mZXRjaEluZm8gPSBmZXRjaEluZm87XG5mdW5jdGlvbiBmZXRjaFN0YXR1cyhiYXNlLCBsaXN0KSB7XG4gICAgdmFyIERFRkFVTFRfU1RBVFVTID0ge1xuICAgICAgICBpZDogJycsXG4gICAgICAgIGNvbmZpcm1hdGlvbnM6IC0xLFxuICAgICAgICBoZWlnaHQ6IC0xLFxuICAgICAgICBpblVUWDogZmFsc2UsXG4gICAgICAgIHN0YXR1czogY29uc3RhbnRzXzEuVFJBTlNBQ1RJT05fU1RBVFVTRVMuTk9UX0ZPVU5EXG4gICAgfTtcbiAgICB2YXIgbG9hZEFsbFR4SW5mbyA9IGxpc3QubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hVbmNvbmZpcm1lZEluZm8oYmFzZSwgaWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfU1RBVFVTKSwgeyBpZDogaWQsIHN0YXR1czogY29uc3RhbnRzXzEuVFJBTlNBQ1RJT05fU1RBVFVTRVMuVU5DT05GSVJNRUQsIGluVVRYOiB0cnVlIH0pKTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiBmZXRjaEluZm8oYmFzZSwgaWQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodHgpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9TVEFUVVMpLCB7IGlkOiBpZCwgc3RhdHVzOiBjb25zdGFudHNfMS5UUkFOU0FDVElPTl9TVEFUVVNFUy5JTl9CTE9DS0NIQUlOLCBoZWlnaHQ6IHR4LmhlaWdodCB9KSk7IH0pOyB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9TVEFUVVMpLCB7IGlkOiBpZCB9KSk7IH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgIGJsb2Nrc18xLmZldGNoSGVpZ2h0KGJhc2UpLFxuICAgICAgICBQcm9taXNlLmFsbChsb2FkQWxsVHhJbmZvKVxuICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBoZWlnaHQgPSBfYVswXS5oZWlnaHQsIHN0YXR1c2VzID0gX2FbMV07XG4gICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBzdGF0dXNlczogc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIGl0ZW0pLCB7IGNvbmZpcm1hdGlvbnM6IGl0ZW0uc3RhdHVzID09PSBjb25zdGFudHNfMS5UUkFOU0FDVElPTl9TVEFUVVNFUy5JTl9CTE9DS0NIQUlOID8gaGVpZ2h0IC0gaXRlbS5oZWlnaHQgOiBpdGVtLmNvbmZpcm1hdGlvbnMgfSkpOyB9KVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTdGF0dXMgPSBmZXRjaFN0YXR1cztcbmZ1bmN0aW9uIGJyb2FkY2FzdChiYXNlLCB0eCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsIHVybDogJy90cmFuc2FjdGlvbnMvYnJvYWRjYXN0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBzdHJpbmdpZnlfMS5kZWZhdWx0KHR4KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuYnJvYWRjYXN0ID0gYnJvYWRjYXN0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRZUEVfTUFQID0ge1xuICAgIDM6ICdpc3N1ZScsXG4gICAgNDogJ3RyYW5zZmVyJyxcbiAgICA1OiAncmVpc3N1ZScsXG4gICAgNjogJ2J1cm4nLFxuICAgIDc6ICdleGNoYW5nZScsXG4gICAgODogJ2xlYXNlJyxcbiAgICA5OiAnY2FuY2VsTGVhc2UnLFxuICAgIDEwOiAnYWxpYXMnLFxuICAgIDExOiAnbWFzc1RyYW5zZmVyJyxcbiAgICAxMjogJ2RhdGEnLFxuICAgIDEzOiAnc2V0U2NyaXB0JyxcbiAgICAxNDogJ3Nwb25zb3JzaGlwJyxcbiAgICAxNTogJ3NldEFzc2V0U2NyaXB0JyxcbiAgICAxNjogJ2ludm9rZSdcbn07XG5leHBvcnRzLk5BTUVfTUFQID0ge1xuICAgICdpc3N1ZSc6IDMsXG4gICAgJ3RyYW5zZmVyJzogNCxcbiAgICAncmVpc3N1ZSc6IDUsXG4gICAgJ2J1cm4nOiA2LFxuICAgICdleGNoYW5nZSc6IDcsXG4gICAgJ2xlYXNlJzogOCxcbiAgICAnY2FuY2VsTGVhc2UnOiA5LFxuICAgICdhbGlhcyc6IDEwLFxuICAgICdtYXNzVHJhbnNmZXInOiAxMSxcbiAgICAnZGF0YSc6IDEyLFxuICAgICdzZXRTY3JpcHQnOiAxMyxcbiAgICAnc3BvbnNvcnNoaXAnOiAxNCxcbiAgICAnc2V0QXNzZXRTY3JpcHQnOiAxNSxcbiAgICAnaW52b2tlJzogMTZcbn07XG5leHBvcnRzLlRSQU5TQUNUSU9OX1NUQVRVU0VTID0ge1xuICAgIElOX0JMT0NLQ0hBSU46ICdpbl9ibG9ja2NoYWluJyxcbiAgICBVTkNPTkZJUk1FRDogJ3VuY29uZmlybWVkJyxcbiAgICBOT1RfRk9VTkQ6ICdub3RfZm91bmQnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJsb2Nrc18xID0gcmVxdWlyZShcIi4uLy4uL2FwaS1ub2RlL2Jsb2Nrc1wiKTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShiYXNlKSB7XG4gICAgcmV0dXJuIGJsb2Nrc18xLmZldGNoSGVhZGVyc0xhc3QoYmFzZSkudGhlbihmdW5jdGlvbiAoaGVhZGVyKSB7IHJldHVybiBiYXNlNThEZWNvZGUoaGVhZGVyLmdlbmVyYXRvcilbMV07IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xudmFyIEFMUEhBQkVUID0gJzEyMzQ1Njc4OUFCQ0RFRkdISktMTU5QUVJTVFVWV1hZWmFiY2RlZmdoaWprbW5vcHFyc3R1dnd4eXonO1xudmFyIEFMUEhBQkVUX01BUCA9IHt9O1xuZm9yICh2YXIgaSA9IDA7IGkgPCBBTFBIQUJFVC5sZW5ndGg7IGkrKykge1xuICAgIEFMUEhBQkVUX01BUFtBTFBIQUJFVC5jaGFyQXQoaSldID0gaTtcbn1cbmZ1bmN0aW9uIGJhc2U1OERlY29kZShzdHJpbmcpIHtcbiAgICB2YXIgYnl0ZXMsIGMsIGNhcnJ5LCBqLCBpO1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKTtcbiAgICB9XG4gICAgaSA9IHZvaWQgMDtcbiAgICBqID0gdm9pZCAwO1xuICAgIGJ5dGVzID0gWzBdO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBjID0gc3RyaW5nW2ldO1xuICAgICAgICBpZiAoIShjIGluIEFMUEhBQkVUX01BUCkpIHtcbiAgICAgICAgICAgIHRocm93ICdCYXNlNTguZGVjb2RlIHJlY2VpdmVkIHVuYWNjZXB0YWJsZSBpbnB1dC4gQ2hhcmFjdGVyIFxcJycgKyBjICsgJ1xcJyBpcyBub3QgaW4gdGhlIEJhc2U1OCBhbHBoYWJldC4nO1xuICAgICAgICB9XG4gICAgICAgIGogPSAwO1xuICAgICAgICB3aGlsZSAoaiA8IGJ5dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgYnl0ZXNbal0gKj0gNTg7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgIH1cbiAgICAgICAgYnl0ZXNbMF0gKz0gQUxQSEFCRVRfTUFQW2NdO1xuICAgICAgICBjYXJyeSA9IDA7XG4gICAgICAgIGogPSAwO1xuICAgICAgICB3aGlsZSAoaiA8IGJ5dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgYnl0ZXNbal0gKz0gY2Fycnk7XG4gICAgICAgICAgICBjYXJyeSA9IGJ5dGVzW2pdID4+IDg7XG4gICAgICAgICAgICBieXRlc1tqXSAmPSAweGZmO1xuICAgICAgICAgICAgKytqO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChjYXJyeSkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaChjYXJyeSAmIDB4ZmYpO1xuICAgICAgICAgICAgY2FycnkgPj49IDg7XG4gICAgICAgIH1cbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICBpID0gMDtcbiAgICB3aGlsZSAoc3RyaW5nW2ldID09PSAnMScgJiYgaSA8IHN0cmluZy5sZW5ndGggLSAxKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goMCk7XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVzLnJldmVyc2UoKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXROZXR3b3JrQnl0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWcgPSBuZXcgUmVnRXhwKCcoKD8hXFxcXFxcXFwpXCJcXFxcdytcIik6XFxcXHMqKC0/W1xcXFxkfFxcXFwuXXsxNCx9KScsICdnJyk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoanNvbikge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGpzb24ucmVwbGFjZShyZWcsIFwiJDE6XFxcIiQyXFxcIlwiKSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShwYXJhbXMsIGV2b2x2ZXIpIHtcbiAgICBpZiAoZXZvbHZlciA9PT0gdm9pZCAwKSB7IGV2b2x2ZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpOyB9XG4gICAgdmFyIHF1ZXJ5ID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIHBhcmFtc1trZXldXTsgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICByZXR1cm4gW2tleSwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV2b2x2ZXIsIGtleSkgPyBldm9sdmVyW2tleV0odmFsdWUpIDogdmFsdWVdO1xuICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGw7XG4gICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICByZXR1cm4ga2V5ICsgXCI9XCIgKyB2YWx1ZTtcbiAgICB9KVxuICAgICAgICAuam9pbignJicpO1xuICAgIHJldHVybiBxdWVyeS5sZW5ndGggPyBcIj9cIiArIHF1ZXJ5IDogJyc7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXNvbHZlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcmVzb2x2ZVwiKSk7XG52YXIgcGFyc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZVwiKSk7XG52YXIgcmVxdWVzdCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyA/IGZldGNoIDogcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuZnVuY3Rpb24gZGVmYXVsdF8xKHBhcmFtcykge1xuICAgIHJldHVybiByZXF1ZXN0KHJlc29sdmVfMS5kZWZhdWx0KHBhcmFtcy51cmwsIHBhcmFtcy5iYXNlKSwgdXBkYXRlSGVhZGVycyhwYXJhbXMub3B0aW9ucykpXG4gICAgICAgIC50aGVuKHBhcnNlUmVzcG9uc2UpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuZnVuY3Rpb24gcGFyc2VSZXNwb25zZShyKSB7XG4gICAgcmV0dXJuIHIudGV4dCgpLnRoZW4oZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIHIub2sgPyBwYXJzZV8xLmRlZmF1bHQobWVzc2FnZSkgOiBQcm9taXNlLnJlamVjdCh0cnlQYXJzZShtZXNzYWdlKSk7IH0pO1xufVxuZnVuY3Rpb24gdHJ5UGFyc2UobWVzc2FnZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVIZWFkZXJzKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyB9XG4gICAgb3B0aW9ucy5jcmVkZW50aWFscyA9ICdpbmNsdWRlJztcbiAgICByZXR1cm4gb3B0aW9ucztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEocGF0aCwgYmFzZSkge1xuICAgIHJldHVybiBuZXcgVVJMKHBhdGgsIGJhc2UpLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEZJRUxEUyA9IFsndmFsdWUnLCAnYW1vdW50JywgJ21hdGNoZXJGZWUnLCAncHJpY2UnLCAnZmVlJywgJ21pblNwb25zb3JlZEFzc2V0RmVlJywgJ3F1YW50aXR5JywgJ3NlbGxNYXRjaGVyRmVlJywgJ2J1eU1hdGNoZXJGZWUnXTtcbnZhciByZWcgPSBuZXcgUmVnRXhwKFwiKD8hXFxcXFxcXFwpXFxcIihcIiArIEZJRUxEUy5qb2luKCd8JykgKyBcIilcXFwiOlxcXFxzKlxcXCIoLT9cXFxcZCspXFxcIlwiLCAnZycpO1xuZnVuY3Rpb24gZGVmYXVsdF8xKGRhdGEpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSkucmVwbGFjZShyZWcsICdcIiQxXCI6JDInKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZ2lmeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHJhbnNhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBpLW5vZGUvdHJhbnNhY3Rpb25zXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgd2FpdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3dhaXRcIikpO1xudmFyIERFRkFVTFRfQlJPQURDQVNUX09QVElPTlMgPSB7XG4gICAgY2hhaW46IGZhbHNlLFxuICAgIGNvbmZpcm1hdGlvbnM6IC0xLFxuICAgIG1heFdhaXRUaW1lOiAwLFxuICAgIHJlcXVlc3RJbnRlcnZhbDogMFxufTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShiYXNlLCBsaXN0LCBvcHRpb25zKSB7XG4gICAgdmFyIG9wdCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX0JST0FEQ0FTVF9PUFRJT05TKSwgKG9wdGlvbnMgfHwge30pKTtcbiAgICB2YXIgaXNPbmNlID0gIUFycmF5LmlzQXJyYXkobGlzdCk7XG4gICAgdmFyIGNvbmZpcm1hdGlvbnMgPSBvcHQuY29uZmlybWF0aW9ucyA+IDAgPyAxIDogMDtcbiAgICByZXR1cm4gKG9wdC5jaGFpblxuICAgICAgICA/IGNoYWluQnJvYWRjYXN0KGJhc2UsIHV0aWxzXzEudG9BcnJheShsaXN0KSwgX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdCksIHsgY29uZmlybWF0aW9uczogY29uZmlybWF0aW9ucyB9KSlcbiAgICAgICAgOiBzaW1wbGVCcm9hZGNhc3QoYmFzZSwgdXRpbHNfMS50b0FycmF5KGxpc3QpKSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHsgcmV0dXJuIG9wdC5jb25maXJtYXRpb25zIDw9IDAgPyBsaXN0IDogd2FpdF8xLmRlZmF1bHQoYmFzZSwgbGlzdCwgb3B0KTsgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHsgcmV0dXJuIGlzT25jZSA/IHV0aWxzXzEuaGVhZChsaXN0KSA6IGxpc3Q7IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuZnVuY3Rpb24gc2ltcGxlQnJvYWRjYXN0KGJhc2UsIGxpc3QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobGlzdC5tYXAoZnVuY3Rpb24gKHR4KSB7IHJldHVybiB0cmFuc2FjdGlvbnNfMS5icm9hZGNhc3QoYmFzZSwgdHgpOyB9KSk7XG59XG5mdW5jdGlvbiBjaGFpbkJyb2FkY2FzdChiYXNlLCBsaXN0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHRvQnJvYWRjYXN0ID0gbGlzdC5zbGljZSgpLnJldmVyc2UoKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdG9Ccm9hZGNhc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHR4ID0gdG9Ccm9hZGNhc3QucG9wKCk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbnNfMS5icm9hZGNhc3QoYmFzZSwgdHgpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHR4KSB7IHJldHVybiB3YWl0XzEuZGVmYXVsdChiYXNlLCB0eCwgb3B0aW9ucyk7IH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHR4KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godHgpO1xuICAgICAgICAgICAgICAgIGxvb3AoKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIGxvb3AoKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb2FkY2FzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIHRyYW5zYWN0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL2FwaS1ub2RlL3RyYW5zYWN0aW9uc1wiKTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdGFudHNcIik7XG5mdW5jdGlvbiBkZWZhdWx0XzEoYmFzZSwgdHgsIG9wdGlvbnMpIHtcbiAgICB2YXIgaXNPbmNlID0gIUFycmF5LmlzQXJyYXkodHgpO1xuICAgIHZhciBzdGFydCA9IERhdGUubm93KCk7XG4gICAgdmFyIGNvbmZpcm1lZCA9IFtdO1xuICAgIHZhciBjb25maXJtYXRpb25zID0gb3B0aW9ucyAmJiBvcHRpb25zLmNvbmZpcm1hdGlvbnMgfHwgMDtcbiAgICB2YXIgbWF4V2FpdFRpbWUgPSBvcHRpb25zICYmIG9wdGlvbnMubWF4V2FpdFRpbWUgfHwgMDtcbiAgICB2YXIgcmVxdWVzdEludGVydmFsID0gb3B0aW9ucyAmJiBvcHRpb25zLnJlcXVlc3RJbnRlcnZhbCB8fCAyNTA7XG4gICAgdmFyIHdhaXRUeCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbnNfMS5mZXRjaFN0YXR1cyhiYXNlLCBsaXN0Lm1hcCh1dGlsc18xLnByb3AoJ2lkJykpKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB1dGlsc18xLmluZGV4QnkodXRpbHNfMS5wcm9wKCdpZCcpLCBzdGF0dXMuc3RhdHVzZXMpO1xuICAgICAgICAgICAgdmFyIGhhc0Vycm9yID0gbGlzdC5zb21lKGZ1bmN0aW9uICh0eCkgeyByZXR1cm4gaGFzaFt0eC5pZF0uc3RhdHVzID09PSBjb25zdGFudHNfMS5UUkFOU0FDVElPTl9TVEFUVVNFUy5OT1RfRk9VTkQ7IH0pO1xuICAgICAgICAgICAgaWYgKGhhc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmUgdHJhbnNhY3Rpb24gaXMgbm90IGluIGJsb2NrY2hhaW4hJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdG9SZXF1ZXN0ID0gbGlzdC5maWx0ZXIoZnVuY3Rpb24gKHR4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc2hbdHguaWRdLmNvbmZpcm1hdGlvbnMgPj0gY29uZmlybWF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtZWQucHVzaCh0eCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCF0b1JlcXVlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXhXYWl0VGltZSAmJiBEYXRlLm5vdygpIC0gc3RhcnQgPiBtYXhXYWl0VGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnVGltZW91dCBlcnJvciEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLndhaXQocmVxdWVzdEludGVydmFsKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdhaXRUeCh0b1JlcXVlc3QpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gd2FpdFR4KHV0aWxzXzEudG9BcnJheSh0eCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNPbmNlID8gdXRpbHNfMS5oZWFkKGNvbmZpcm1lZCkgOiBjb25maXJtZWQ7IH0pO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRvQXJyYXkoZGF0YSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn1cbmV4cG9ydHMudG9BcnJheSA9IHRvQXJyYXk7XG5mdW5jdGlvbiBoZWFkKGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YVswXTtcbn1cbmV4cG9ydHMuaGVhZCA9IGhlYWQ7XG5mdW5jdGlvbiB3YWl0KHRpbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMud2FpdCA9IHdhaXQ7XG5mdW5jdGlvbiBwcm9wKGtleSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YVtrZXldOyB9O1xufVxuZXhwb3J0cy5wcm9wID0gcHJvcDtcbmV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcbn07XG5leHBvcnRzLmVudHJpZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMua2V5cyhvYmopLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW25hbWUsIG9ialtuYW1lXV07IH0pO1xufTtcbmV4cG9ydHMudmFsdWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBleHBvcnRzLmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xufTtcbmV4cG9ydHMuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCwgbWVyZ2UpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbnRyaWVzKG1lcmdlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sIHRhcmdldCk7XG59O1xuZnVuY3Rpb24gbWFwKHByb2Nlc3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3QpIHsgcmV0dXJuIGxpc3QubWFwKHByb2Nlc3MpOyB9O1xufVxuZXhwb3J0cy5tYXAgPSBtYXA7XG5mdW5jdGlvbiBmaWx0ZXIocHJvY2Vzcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gbGlzdC5maWx0ZXIocHJvY2Vzcyk7IH07XG59XG5leHBvcnRzLmZpbHRlciA9IGZpbHRlcjtcbmZ1bmN0aW9uIGluZGV4QnkocHJvY2VzcywgZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtKSB7XG4gICAgICAgIGFjY1twcm9jZXNzKGl0ZW0pXSA9IGl0ZW07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuZXhwb3J0cy5pbmRleEJ5ID0gaW5kZXhCeTtcbmV4cG9ydHMudW5pcSA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMua2V5cyhsaXN0LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtKSB7XG4gICAgICAgIGFjY1tpdGVtXSA9IGl0ZW07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZShudWxsKSkpO1xufTtcbmZ1bmN0aW9uIHN3aXRjaFRyYW5zYWN0aW9uQnlUeXBlKGNob2ljZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHR4KSB7IHJldHVybiBjaG9pY2VzW3R4LnR5cGVdICYmIHR5cGVvZiBjaG9pY2VzW3R4LnR5cGVdID09PSAnZnVuY3Rpb24nID8gY2hvaWNlc1t0eC50eXBlXSh0eCkgOiB1bmRlZmluZWQ7IH07XG59XG5leHBvcnRzLnN3aXRjaFRyYW5zYWN0aW9uQnlUeXBlID0gc3dpdGNoVHJhbnNhY3Rpb25CeVR5cGU7XG5leHBvcnRzLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkgeyByZXR1cm4gaXRlbShhY2MpOyB9LCBkYXRhKTsgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG52YXIgdHJhbnNhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi91dGlscy90cmFuc2FjdGlvbnNcIik7XG52YXIgYWRkcmVzc2VzXzEgPSByZXF1aXJlKFwiQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9hcGktbm9kZS9hZGRyZXNzZXNcIik7XG52YXIgYXNzZXRzXzEgPSByZXF1aXJlKFwiQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9hcGktbm9kZS9hc3NldHNcIik7XG52YXIgd2FpdF8xID0gcmVxdWlyZShcIkB3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvdHJhbnNhY3Rpb25zL3dhaXRcIik7XG52YXIgYnJvYWRjYXN0XzEgPSByZXF1aXJlKFwiQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy90cmFuc2FjdGlvbnMvYnJvYWRjYXN0XCIpO1xudmFyIGdldE5ldHdvcmtCeXRlXzEgPSByZXF1aXJlKFwiQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9ibG9ja3MvZ2V0TmV0d29ya0J5dGVcIik7XG52YXIgU2lnbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNpZ25lcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29uc3RhbnRzXzEuREVGQVVMVF9PUFRJT05TKSwgKG9wdGlvbnMgfHwge30pKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya0J5dGVQcm9taXNlID0gZ2V0TmV0d29ya0J5dGVfMS5kZWZhdWx0KHRoaXMuX29wdGlvbnMuTk9ERV9VUkwpLnRoZW4oZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBieXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNpZ25lci5wcm90b3R5cGUsIFwiX2Nvbm5lY3RQcm9taXNlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2Nvbm5lY3RQcm9taXNlIHx8IFByb21pc2UucmVqZWN0KCdIYXMgbm8gcHJvdmlkZXIhJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMuX19jb25uZWN0UHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqINCX0LDQv9GA0L7RgdC40YLRjCDQsdCw0LnRgiDRgdC10YLQuFxuICAgICAqL1xuICAgIFNpZ25lci5wcm90b3R5cGUuZ2V0TmV0d29ya0J5dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrQnl0ZVByb21pc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9GA0L7QstCw0LnQtNC10YAg0L7RgtCy0LXRh9Cw0Y7RidC40Lkg0LfQsCDQv9C+0LTQv9C40YHRjFxuICAgICAqIEBwYXJhbSBwcm92aWRlclxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBpbXBvcnQgV2F2ZXMgZnJvbSAnQHdhdmVzL3dhdmVzLWpzJztcbiAgICAgKiBpbXBvcnQgUHJvdmlkZXIgZnJvbSAnQHdhdmVzL3NlZWQtcHJvdmlkZXInO1xuICAgICAqXG4gICAgICogY29uc3Qgd2F2ZXMgPSBuZXcgV2F2ZXMoKTtcbiAgICAgKiB3YXZlcy5zZXRQcm92aWRlcihuZXcgUHJvdmlkZXIoJ1NFRUQnKSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgU2lnbmVyLnByb3RvdHlwZS5zZXRQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fbmV0d29ya0J5dGVQcm9taXNlLnRoZW4oZnVuY3Rpb24gKG5ldHdvcmtCeXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgTk9ERV9VUkw6IF90aGlzLl9vcHRpb25zLk5PREVfVVJMLFxuICAgICAgICAgICAgICAgIE5FVFdPUktfQllURTogbmV0d29ya0J5dGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RQcm9taXNlID0gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvdmlkZXI7IH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9Cw0LXQvCDRgdC/0LjRgdC+0Log0LHQsNC70LDQvdGB0L7QsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gKNC90LXQvtCx0YXQvtC00LjQvNC+INCy0YvQv9C+0LvQvdC40YLRjCBsb2dpbiDQv9C10YDQtdC0INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10LwpXG4gICAgICogQmFzaWMgdXNhZ2UgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogYXdhaXQgd2F2ZXMuZ2V0QmFsYW5jZSgpOyAvLyDQktC+0LfQstGA0LDRidCw0LXRgiDQsdCw0LvQsNC90YHRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBTaWduZXIucHJvdG90eXBlLmdldEJhbGFuY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdXNlckRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ05lZWQgbG9naW4gZm9yIGdldCBiYWxhbmNlcyEnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVzZXIgPSB0aGlzLl91c2VyRGF0YTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGFkZHJlc3Nlc18xLmZldGNoQmFsYW5jZURldGFpbHModGhpcy5fb3B0aW9ucy5OT0RFX1VSTCwgdXNlci5hZGRyZXNzKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIGFzc2V0SWQ6ICdXQVZFUycsXG4gICAgICAgICAgICAgICAgYXNzZXROYW1lOiAnV2F2ZXMnLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiA4LFxuICAgICAgICAgICAgICAgIGFtb3VudDogU3RyaW5nKGRhdGEuYXZhaWxhYmxlKSxcbiAgICAgICAgICAgICAgICBpc015QXNzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRva2VuczogTnVtYmVyKGRhdGEuYXZhaWxhYmxlKSAqIE1hdGgucG93KDEwLCA4KSxcbiAgICAgICAgICAgICAgICBzcG9uc29yc2hpcDogbnVsbCxcbiAgICAgICAgICAgICAgICBpc1NtYXJ0OiBmYWxzZVxuICAgICAgICAgICAgfSk7IH0pLFxuICAgICAgICAgICAgYXNzZXRzXzEuZmV0Y2hBc3NldHNCYWxhbmNlKHRoaXMuX29wdGlvbnMuTk9ERV9VUkwsIHVzZXIuYWRkcmVzcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YS5iYWxhbmNlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgYXNzZXRJZDogaXRlbS5hc3NldElkLFxuICAgICAgICAgICAgICAgIGFzc2V0TmFtZTogaXRlbS5pc3N1ZVRyYW5zYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVjaW1hbHM6IGl0ZW0uaXNzdWVUcmFuc2FjdGlvbi5kZWNpbWFscyxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhpdGVtLmJhbGFuY2UpLFxuICAgICAgICAgICAgICAgIGlzTXlBc3NldDogaXRlbS5pc3N1ZVRyYW5zYWN0aW9uLnNlbmRlciA9PT0gdXNlci5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHRva2VuczogaXRlbS5iYWxhbmNlICpcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3coMTAsIGl0ZW0uaXNzdWVUcmFuc2FjdGlvbi5kZWNpbWFscyksXG4gICAgICAgICAgICAgICAgaXNTbWFydDogISFpdGVtLmlzc3VlVHJhbnNhY3Rpb24uc2NyaXB0LFxuICAgICAgICAgICAgICAgIHNwb25zb3JzaGlwOiBpdGVtLnNwb25zb3JCYWxhbmNlICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zcG9uc29yQmFsYW5jZSA+IE1hdGgucG93KDEwLCA4KSAmJlxuICAgICAgICAgICAgICAgICAgICAoaXRlbS5taW5TcG9uc29yZWRBc3NldEZlZSB8fCAwKSA8IGl0ZW0uYmFsYW5jZVxuICAgICAgICAgICAgICAgICAgICA/IGl0ZW0ubWluU3BvbnNvcmVkQXNzZXRGZWVcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgfSk7IH0pOyB9KSxcbiAgICAgICAgXSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB3YXZlcyA9IF9hWzBdLCBhc3NldHMgPSBfYVsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZEFycmF5cyhbd2F2ZXNdLCBhc3NldHMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqINCf0L7Qu9GD0YfQsNC10Lwg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C1XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGF3YWl0IHdhdmVzLmxvZ2luKCk7IC8vINCQ0LLRgtC+0YDQuNC30YPQtdC80YHRjy4g0JLQvtC30LLRgNCw0YnQsNC10YIg0LDQtNGA0LXRgSDQuCDQv9GD0LHQu9C40YfQvdGL0Lkg0LrQu9GO0YdcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBTaWduZXIucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikgeyByZXR1cm4gcHJvdmlkZXIubG9naW4oKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5fdXNlckRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0JLRi9C70L7Qs9C40L3QuNCy0LDQtdC80YHRjyDQuNC3INGO0LfQtdGA0LBcbiAgICAgKi9cbiAgICBTaWduZXIucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHsgcmV0dXJuIHByb3ZpZGVyLmxvZ291dCgpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3VzZXJEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqINCf0L7QtNC/0LjRgdGL0LLQsNC10Lwg0YHQvtC+0LHRidC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAo0L/RgNC+0LLQsNC50LTQtdGAINC80L7QttC10YIg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGC0Ywg0L/RgNC10YTQuNC60YEpXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBTaWduZXIucHJvdG90eXBlLnNpZ25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuc2lnbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC00L/QuNGB0YvQstCw0LXQvCDRgtC40L/QuNC30LjRgNC+0LLQsNC90L3Ri9C1INC00LDQvdC90YvQtVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgU2lnbmVyLnByb3RvdHlwZS5zaWduVHlwZWREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuc2lnblR5cGVkRGF0YShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LDQtdC8INGB0L/QuNGB0L7QuiDQsdCw0LvQsNC90YHQvtCyINCyINC60YLQvtGA0YvRhSDQvNC+0LbQvdC+INC/0LvQsNGC0LjRgtGMINC60L7QvNC40YHRgdC40Y5cbiAgICAgKi9cbiAgICBTaWduZXIucHJvdG90eXBlLmdldFNwb25zb3JlZEJhbGFuY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYWxhbmNlKCkudGhlbihmdW5jdGlvbiAoYmFsYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJhbGFuY2UuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAhIWl0ZW0uc3BvbnNvcnNoaXA7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAodHhPckxpc3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGlzT25jZSA9ICFBcnJheS5pc0FycmF5KHR4T3JMaXN0KTtcbiAgICAgICAgdmFyIHNpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3NpZ24odXRpbHNfMS50b0FycmF5KHR4T3JMaXN0KSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT25jZSA/IHJlc3VsdFswXSA6IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2lnbjogc2lnbixcbiAgICAgICAgICAgIGJyb2FkY2FzdDogZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduKCkudGhlbihmdW5jdGlvbiAodHJhbnNhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3QodHJhbnNhY3Rpb25zLCBvcHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUuaXNzdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnaXNzdWUnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCd0cmFuc2ZlcicsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLnJlaXNzdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgncmVpc3N1ZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLmJ1cm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnYnVybicsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLmxlYXNlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2xlYXNlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUuZXhjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnZXhjaGFuZ2UnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS5jYW5jZWxMZWFzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdjYW5jZWxMZWFzZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLmFsaWFzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2FsaWFzJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUubWFzc1RyYW5zZmVyID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ21hc3NUcmFuc2ZlcicsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnZGF0YScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLnNwb25zb3JzaGlwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3Nwb25zb3JzaGlwJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUuc2V0U2NyaXB0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3NldFNjcmlwdCcsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLnNldEFzc2V0U2NyaXB0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3NldEFzc2V0U2NyaXB0JywgZGF0YSldKTtcbiAgICB9O1xuICAgIFNpZ25lci5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2ludm9rZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBTaWduZXIucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uICh0eCwgb3B0KSB7XG4gICAgICAgIHJldHVybiBicm9hZGNhc3RfMS5kZWZhdWx0KHRoaXMuX29wdGlvbnMuTk9ERV9VUkwsIHR4LCBvcHQpOyAvLyBUT0RPIEZpeCB0eXBlc1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS53YWl0VHhDb25maXJtID0gZnVuY3Rpb24gKHR4LCBjb25maXJtYXRpb25zKSB7XG4gICAgICAgIHJldHVybiB3YWl0XzEuZGVmYXVsdCh0aGlzLl9vcHRpb25zLk5PREVfVVJMLCB0eCwgeyBjb25maXJtYXRpb25zOiBjb25maXJtYXRpb25zIH0pOyAvLyBUT0RPIEZpeCB0eXBlc1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS5fY3JlYXRlUGlwZWxpbmVBUEkgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUT0RPIGZpeCB0eXBlc1xuICAgICAgICB2YXIgYXBpID0gdXRpbHNfMS5ldm9sdmUoY29uc3RhbnRzXzEuTkFNRV9NQVAsIGZ1bmN0aW9uIChrZXksIHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoX19zcHJlYWRBcnJheXMobGlzdCwgW19fYXNzaWduKHsgdHlwZTogdHlwZSB9LCBkYXRhKV0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFwaSksIHRoaXMuX2NyZWF0ZUFjdGlvbnMobGlzdCkpO1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS5fY3JlYXRlQWN0aW9ucyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzaWduID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3NpZ24obGlzdCk7IH07XG4gICAgICAgIHZhciBicm9hZGNhc3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHNpZ24oKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdChsaXN0LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzaWduOiBzaWduLCBicm9hZGNhc3Q6IGJyb2FkY2FzdCB9O1xuICAgIH07XG4gICAgU2lnbmVyLnByb3RvdHlwZS5fc2lnbiA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLnNpZ24obGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNpZ25lcjtcbn0oKSk7XG5leHBvcnRzLlNpZ25lciA9IFNpZ25lcjtcbmV4cG9ydHMuZGVmYXVsdCA9IFNpZ25lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNpZ25lci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVFlQRV9NQVAgPSB7XG4gICAgMzogJ2lzc3VlJyxcbiAgICA0OiAndHJhbnNmZXInLFxuICAgIDU6ICdyZWlzc3VlJyxcbiAgICA2OiAnYnVybicsXG4gICAgNzogJ2V4Y2hhbmdlJyxcbiAgICA4OiAnbGVhc2UnLFxuICAgIDk6ICdjYW5jZWxMZWFzZScsXG4gICAgMTA6ICdhbGlhcycsXG4gICAgMTE6ICdtYXNzVHJhbnNmZXInLFxuICAgIDEyOiAnZGF0YScsXG4gICAgMTM6ICdzZXRTY3JpcHQnLFxuICAgIDE0OiAnc3BvbnNvcnNoaXAnLFxuICAgIDE1OiAnc2V0QXNzZXRTY3JpcHQnLFxuICAgIDE2OiAnaW52b2tlJ1xufTtcbmV4cG9ydHMuTkFNRV9NQVAgPSB7XG4gICAgJ2lzc3VlJzogMyxcbiAgICAndHJhbnNmZXInOiA0LFxuICAgICdyZWlzc3VlJzogNSxcbiAgICAnYnVybic6IDYsXG4gICAgJ2V4Y2hhbmdlJzogNyxcbiAgICAnbGVhc2UnOiA4LFxuICAgICdjYW5jZWxMZWFzZSc6IDksXG4gICAgJ2FsaWFzJzogMTAsXG4gICAgJ21hc3NUcmFuc2Zlcic6IDExLFxuICAgICdkYXRhJzogMTIsXG4gICAgJ3NldFNjcmlwdCc6IDEzLFxuICAgICdzcG9uc29yc2hpcCc6IDE0LFxuICAgICdzZXRBc3NldFNjcmlwdCc6IDE1LFxuICAgICdpbnZva2UnOiAxNlxufTtcbmV4cG9ydHMuREVGQVVMVF9PUFRJT05TID0ge1xuICAgIE5PREVfVVJMOiAnaHR0cHM6Ly9ub2Rlcy53YXZlc3BsYXRmb3JtLmNvbScsXG4gICAgTUFUQ0hFUl9VUkw6ICdodHRwczovL25vZGVzLndhdmVzcGxhdGZvbXIuY29tL21hdGNoZXInXG59O1xuZXhwb3J0cy5ERUZBVUxUX0JST0FEQ0FTVF9PUFRJT05TID0ge1xuICAgIGNoYWluOiBmYWxzZSxcbiAgICBjb25maXJtYXRpb25zOiAtMVxufTtcbmV4cG9ydHMuTUFYX0FMSUFTX0xFTkdUSCA9IDMwO1xuZXhwb3J0cy5TTUFSVF9BU1NFVF9FWFRSQV9GRUUgPSAwLjAwNCAqIE1hdGgucG93KDEwLCA4KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBvYmplY3RfMSA9IHJlcXVpcmUoXCIuL29iamVjdFwiKTtcbmZ1bmN0aW9uIHRvQXJyYXkoZGF0YSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXTtcbn1cbmV4cG9ydHMudG9BcnJheSA9IHRvQXJyYXk7XG5mdW5jdGlvbiB3YWl0KHRpbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMud2FpdCA9IHdhaXQ7XG5mdW5jdGlvbiBldm9sdmUoZGF0YSwgcHJvY2Vzcykge1xuICAgIHJldHVybiBvYmplY3RfMS5lbnRyaWVzKGRhdGEpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIGFjY1trZXldID0gcHJvY2VzcyhrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG5leHBvcnRzLmV2b2x2ZSA9IGV2b2x2ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xufTtcbmV4cG9ydHMuZW50cmllcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtuYW1lLCBvYmpbbmFtZV1dOyB9KTtcbn07XG5leHBvcnRzLnZhbHVlcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gYWRkUGFyYW1UeXBlKG5hbWUsIGRhdGEpIHtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IHR5cGU6IGNvbnN0YW50c18xLk5BTUVfTUFQW25hbWVdIH0pO1xufVxuZXhwb3J0cy5hZGRQYXJhbVR5cGUgPSBhZGRQYXJhbVR5cGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFuc2FjdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZ2xvYmFsXG52YXIgZ2V0R2xvYmFsID0gZnVuY3Rpb24gKCkge1xuXHQvLyB0aGUgb25seSByZWxpYWJsZSBtZWFucyB0byBnZXQgdGhlIGdsb2JhbCBvYmplY3QgaXNcblx0Ly8gYEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClgXG5cdC8vIEhvd2V2ZXIsIHRoaXMgY2F1c2VzIENTUCB2aW9sYXRpb25zIGluIENocm9tZSBhcHBzLlxuXHRpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBzZWxmOyB9XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gd2luZG93OyB9XG5cdGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gZ2xvYmFsOyB9XG5cdHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0Jyk7XG59XG5cbnZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZ2xvYmFsLmZldGNoO1xuXG4vLyBOZWVkZWQgZm9yIFR5cGVTY3JpcHQgYW5kIFdlYnBhY2suXG5leHBvcnRzLmRlZmF1bHQgPSBnbG9iYWwuZmV0Y2guYmluZChnbG9iYWwpO1xuXG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWwuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbC5SZXNwb25zZTsiLCJpbXBvcnQgV2F2ZXMgZnJvbSBcIkB3YXZlcy9zaWduZXJcIjtcbmltcG9ydCBQcm92aWRlciBmcm9tIFwiQHdhdmVzLmV4Y2hhbmdlL3Byb3ZpZGVyLXdlYlwiO1xuXG5jb25zdCB3YXZlcyA9IG5ldyBXYXZlcyh7Tk9ERV9VUkw6ICdodHRwczovL3Bvb2wudGVzdG5ldC53YXZlc25vZGVzLmNvbSd9KTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKCk7XG5cbndhdmVzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1sb2dpblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHdhdmVzLmxvZ2luKCk7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIGF1dGhvcml6ZWQgYXMgPGJyPlxuICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93YXZlc2V4cGxvcmVyLmNvbS90ZXN0bmV0L2FkZHJlc3MvJHt1c2VyRGF0YS5hZGRyZXNzfScgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5hZGRyZXNzfVxuICAgICAgICAgICAgPC9hPmA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdsb2dpbiByZWplY3RlZCcpXG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaW52b2tlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICB3YXZlcy5pbnZva2Uoe1xuICAgICAgICBkQXBwOiBcIjNNdU43RDhyMTl6ZHZTcEFkMUw5MUdzODhiY2d3VUZ5Mm1uXCIsXG4gICAgICAgIGNhbGw6IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uOiBcImZhdWNldFwiXG4gICAgICAgIH1cbiAgICB9KS5icm9hZGNhc3QoKS50aGVuKGNvbnNvbGUubG9nKVxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=