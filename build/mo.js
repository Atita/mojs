!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mojs=t():e.mojs=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="build/",t(t.s=6)}([function(e,t,n){var i,o,r,i,o,r;!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this,e),this._o=t,this._init(),this._declareDefaults(),this._extendDefaults(),this._vars()}return o(e,[{key:"_init",value:function(){}},{key:"_declareDefaults",value:function(){this._defaults={}}},{key:"_extendDefaults",value:function(){this._props=i({},this._defaults,this._o)}},{key:"_setProp",value:function(e,t){if("object"==typeof e)for(var n in e)this._assignProp(n,e[n]);else this._assignProp(e,t)}},{key:"_assignProp",value:function(e,t){this._props[e]=t}},{key:"_vars",value:function(){}},{key:"_render",value:function(){}}]),e}();t.default=r,e.exports=t.default})})},function(e,t,n){var i,o,r,i,o,r;!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={duration:350,delay:0,repeat:0,speed:1,isYoyo:!1,easing:"Sin.Out",backwardEasing:null,name:null,nameBase:"Tween",onProgress:function(){},onStart:function(){},onRefresh:function(){},onComplete:function(){},onRepeatStart:function(){},onRepeatComplete:function(){},onFirstUpdate:function(){},onUpdate:function(){},isChained:!1,onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},callbacksContext:null,onSetStartTime:function(){},onInternalUpdate:function(){}},e.exports=t.default})})},function(e,t,n){var i,o,r,i,o,r;!function(a,s){o=[e,t,n(0),n(1)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(a,s){o=[e,t,n(0),n(1)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t,n,i){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=o(n),l=o(i),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"_declareDefaults",value:function(){return this._defaults=l.default}},{key:"_extendDefaults",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_extendDefaults",this).call(this);var e=this._props,n=e.delay,i=e.duration;e.speed;this._originalDelay=n,this._originalDuration=i,this._normalizeDelayAndDuration()}},{key:"_normalizeDelayAndDuration",value:function(){var e=this._props.speed;this._props.delay=this._originalDelay/e,this._props.duration=this._originalDuration/e}},{key:"_vars",value:function(){this._plan=[],this._calcTotalTime()}},{key:"createPlan",value:function(){this._plan.length=0,this._calcTotalTime();for(var e=16,t=0;t<this._totalTime;){var n=this._getPeriod(t-e),i=this._getPeriod(t),o=this._getPeriod(t+e),r=this._plan[this._plan.length-1],a=0;if("delay"!==i){a|=8;var s=void 0!==r;s||(a|=2);var u="delay"===n;s&&!u&&n!==i-1||(a|=4),"delay"!==o&&o!==i+1||(a|=16),this._plan.push(a),t+=e}else this._plan.push(a),t+=e}var l=this._plan.length-1;return this._plan[l]=32|this._plan[l],this._plan}},{key:"_calcTotalTime",value:function(){var e=this._props,t=e.delay,n=e.duration,i=e.repeat,o=n+t;this._totalTime=o*(i+1)-t}},{key:"_getPeriod",value:function(e){var t=this._props,n=t.delay,i=t.duration;e+=n;var o=n+i,r=e/o,a=e<this._totalTime?e%o:0;return r=e>=this._totalTime?Math.round(r):Math.floor(r),e>this._totalTime?r=Math.round(this._totalTime/o):a>0&&a<n&&(r="delay"),r}}]),t}(u.default);t.default=p,e.exports=t.default})})},function(e,t,n){var i,o,r,i,o,r;!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(n,a){o=[e,t],i=a,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){var t=this;return n(this,e),this._loop=function(){if(0===t.tweens.length)return t._stopLoop();t.update(performance.now()),requestAnimationFrame(t._loop)},this._vars(),this._listenVisibilityChange(),this}return i(e,[{key:"_vars",value:function(){this.tweens=[],this._savedTweens=[],this._onVisibilityChange=this._onVisibilityChange.bind(this)}},{key:"_startLoop",value:function(){this._isRunning||(this._isRunning=!0,requestAnimationFrame(this._loop))}},{key:"_stopLoop",value:function(){this.tweens.length=0,this._isRunning=!1}},{key:"removeAll",value:function(){this.tweens.length=0}},{key:"remove",value:function(e){var t="number"==typeof e?e:this.tweens.indexOf(e);t!==-1&&(e=this.tweens[t],e._isRunning=!1,this.tweens.splice(t,1))}},{key:"_listenVisibilityChange",value:function(){void 0!==document.hidden?(this._visibilityHidden="hidden",this._visibilityChange="visibilitychange"):void 0!==document.mozHidden?(this._visibilityHidden="mozHidden",this._visibilityChange="mozvisibilitychange"):void 0!==document.msHidden?(this._visibilityHidden="msHidden",this._visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this._visibilityHidden="webkitHidden",this._visibilityChange="webkitvisibilitychange"),document.addEventListener(this._visibilityChange,this._onVisibilityChange,!1)}},{key:"_onVisibilityChange",value:function(){document[this._visibilityHidden]?this._savePlayingTweens():this._restorePlayingTweens()}},{key:"_savePlayingTweens",value:function(){this._savedTweens=this.tweens.slice(0);for(var e=0;e<this._savedTweens.length;e++)this._savedTweens[e].pause()}},{key:"_restorePlayingTweens",value:function(){for(var e=0;e<this._savedTweens.length;e++)this._savedTweens[e].resume()}},{key:"update",value:function(e){for(var t=this.tweens.length;t--;){var n=this.tweens[t];n.update(e)===!0&&(this.remove(n),n.onTweenerFinish(),n._prevTime=void 0)}}},{key:"add",value:function(e){e._isRunning||(e._isRunning=!0,this.tweens.push(e),this._startLoop())}},{key:"caffeinate",value:function(){document.removeEventListener(this._visibilityChange,this._onVisibilityChange,!1)}}]),e}();t.default=new o,e.exports=t.default})})},function(e,t,n){var i,o,r,i,o,r;!function(a,s){o=[e,t,n(0),n(1),n(2),n(3)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(a,s){o=[e,t,n(0),n(1),n(2),n(3)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t,n,i,o,r){function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var f=a(n),c=a(i),p=a(o),h=a(r),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),d(t,[{key:"_declareDefaults",value:function(){return this._defaults=c.default}},{key:"_vars",value:function(){this._planner=new p.default(this._o),this._plan=this._planner.createPlan(),this._totalTime=this._planner._totalTime,this._elapsed=0,this._frameIndex=0}},{key:"_setStartTime",value:function(e){void 0===e&&(e=performance.now()),this._startTime=e}},{key:"_envokeCallBacks",value:function(e){if(0!==e){var t=1,n=this._props;e&(t<<=1)&&n.onStart(),e&(t<<=1)&&n.onRepeatStart(),e&(t<<=1)&&n.onUpdate(),e&(t<<=1)&&n.onRepeatComplete(),e&(t<<=1)&&n.onComplete()}}},{key:"update",value:function(e){var t=e-this._startTime;if(t>this._totalTime){for(;this._frameIndex<this._plan.length;){var n=this._plan[this._frameIndex];this._envokeCallBacks(n),this._elapsed+=16,this._frameIndex++}return!0}for(;this._elapsed<=t;)this._envokeCallBacks(this._plan[this._frameIndex]),this._elapsed+=16,this._frameIndex++}},{key:"play",value:function(){return this._setStartTime(),h.default.add(this),this}},{key:"onTweenerFinish",value:function(){}}]),t}(f.default);t.default=_,e.exports=t.default})})},function(e,t,n){var i,o,r,i,o,r;!function(a,s){o=[e,t,n(4),n(0),n(2),n(1),n(3)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t){"use strict";!function(a,s){o=[e,t,n(4),n(0),n(2),n(1),n(3)],i=s,void 0!==(r="function"==typeof i?i.apply(t,o):i)&&(e.exports=r)}(0,function(e,t,n,i,o,r,a){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=s(n),l=s(i),f=s(o),c=s(r),p=s(a),h={revision:"2.0.0",Tween:u.default,tweener:p.default,__helpers__:{ClassProto:l.default,TweenPlanner:f.default,tweenDefaults:c.default}};t.default=h,e.exports=t.default})})},function(e,t,n){e.exports=n(5)}])});