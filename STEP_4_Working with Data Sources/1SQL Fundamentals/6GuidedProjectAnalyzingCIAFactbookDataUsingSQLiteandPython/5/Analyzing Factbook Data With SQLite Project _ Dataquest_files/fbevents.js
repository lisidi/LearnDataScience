/**
* Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
* copy, modify, and distribute this software in source code or binary form for use
* in connection with the web services and APIs provided by Facebook.
*
* As with any software that integrates with the Facebook platform, your use of
* this software is subject to the Facebook Platform Policy
* [http://developers.facebook.com/policy/]. This copyright notice shall be
* included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

fbq.version="2.8.7";
fbq._releaseSegment = "stable";
fbq.pendingConfigs=["global_config"];
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var p=a.postMessage||function(){};if(!g){p({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");if("error"in console)console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return false}return true}())return;"use strict";if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(p){if(!g.__fbeventsResolvedModules[p])g.__fbeventsResolvedModules[p]=g.__fbeventsModules[p]();return g.__fbeventsResolvedModules[p]};g.fbIsModuleLoaded=function(p){return!!g.__fbeventsModules[p]};g.ensureModuleRegistered=function(p,e){if(!g.fbIsModuleLoaded(p))g.__fbeventsModules[p]=e}}g.ensureModuleRegistered("SignalsFBEventsOptTrackingOptions",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";e.exports={AUTO_CONFIG_OPT_OUT:1<<0,AUTO_CONFIG:1<<1,CONFIG_LOADING:1<<2,SUPPORTS_DEFINE_PROPERTY:1<<3,SUPPORTS_SEND_BEACON:1<<4,HAS_INVALIDATED_PII:1<<5,SHOULD_PROXY:1<<6}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsPlugin",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";function i(o){this.plugin=o;this.__fbEventsPlugin=1;return this}e.exports=i})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var p=false;e.exports={getShouldProxy:function q(){return p},setShouldProxy:function q(r){p=r}}})();return e.exports}(a,b,c,d)});"use strict";var h=g.getFbeventsModules("SignalsFBEventsOptTrackingOptions"),i=g.getFbeventsModules("SignalsFBEventsPlugin"),j=g.getFbeventsModules("SignalsFBEventsProxyState"),k=false;function l(){try{Object.defineProperty({},"test",{})}catch(p){return false}return true}function m(){return!!(a.navigator&&a.navigator.sendBeacon)}function n(p,q){return p?q:0}var o=new i(function(g,p){if(k)return;var q={};g.on("pii_invalidated",function(r){if(r!=null)q[typeof r==="string"?r:r.id]=true});g.on("getCustomParameters",function(r){if(r==null)return{};var s=p.optIns,t=n(s.isOptedOut(r.id,"AutomaticSetup"),h.AUTO_CONFIG_OPT_OUT),u=n(s.isOptedIn(r.id,"AutomaticSetup"),h.AUTO_CONFIG),v=n(g.disableConfigLoading!==true,h.CONFIG_LOADING),w=n(l(),h.SUPPORTS_DEFINE_PROPERTY),x=n(m(),h.SUPPORTS_SEND_BEACON),y=n(r!=null&&q[r.id],h.HAS_INVALIDATED_PII),z=n(j.getShouldProxy(),h.SHOULD_PROXY),A=t|u|v|w|x|y|z;return{o:A}});k=true});o.OPTIONS=h;e.exports=o;if(g.registerPlugin)g.registerPlugin("fbevents.plugins.opttracking",e.exports);g.ensureModuleRegistered("fbevents.plugins.opttracking",function(){return e.exports})})()})(window,document,location,history);
(function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){var g=a.fbq;g.execStart=a.performance&&a.performance.now&&a.performance.now();if(!function(){var C=a.postMessage||function(){};if(!g){C({action:"FB_LOG",logType:"Facebook Pixel Error",logMessage:"Pixel code is not installed correctly on this page"},"*");if("error"in console)console.error("Facebook Pixel Error: Pixel code is not installed correctly on this page");return false}return true}())return;"use strict";var aa=typeof Symbol==="function"&&typeof (typeof Symbol==="function"?Symbol.iterator:"@@iterator")==="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol==="function"&&C.constructor===Symbol&&C!==(typeof Symbol==="function"?Symbol.prototype:"@@prototype")?"symbol":typeof C},ba=function(){function C(D,E){var F=[],G=true,H=false,I=undefined;try{for(var J=D[typeof Symbol==="function"?Symbol.iterator:"@@iterator"](),K;!(G=(K=J.next()).done);G=true){F.push(K.value);if(E&&F.length===E)break}}catch(L){H=true;I=L}finally{try{if(!G&&J["return"])J["return"]()}finally{if(H)throw I}}return F}return function(D,E){if(Array.isArray(D))return D;else if((typeof Symbol==="function"?Symbol.iterator:"@@iterator")in Object(D))return C(D,E);else throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ca=function(){function C(D,E){for(var F=0;F<E.length;F++){var G=E[F];G.enumerable=G.enumerable||false;G.configurable=true;if("value"in G)G.writable=true;Object.defineProperty(D,G.key,G)}}return function(D,E,F){if(E)C(D.prototype,E);if(F)C(D,F);return D}}();function da(C){if(Array.isArray(C)){for(var D=0,E=Array(C.length);D<C.length;D++)E[D]=C[D];return E}else return Array.from(C)}function ea(z,C){if(!(z instanceof C))throw new TypeError("Cannot call a class as a function")}if(!g.__fbeventsModules){g.__fbeventsModules={};g.__fbeventsResolvedModules={};g.getFbeventsModules=function(C){if(!g.__fbeventsResolvedModules[C])g.__fbeventsResolvedModules[C]=g.__fbeventsModules[C]();return g.__fbeventsResolvedModules[C]};g.fbIsModuleLoaded=function(C){return!!g.__fbeventsModules[C]};g.ensureModuleRegistered=function(C,e){if(!g.fbIsModuleLoaded(C))g.__fbeventsModules[C]=e}}g.ensureModuleRegistered("SignalsEventValidation",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsLogging"),s=C.logError,t=C.logUserError,D=/^[+-]?\d+(\.\d+)?$/,E="number",F="currency_code",G={AED:1,ARS:1,AUD:1,BOB:1,BRL:1,CAD:1,CHF:1,CLP:1,CNY:1,COP:1,CRC:1,CZK:1,DKK:1,EUR:1,GBP:1,GTQ:1,HKD:1,HNL:1,HUF:1,IDR:1,ILS:1,INR:1,ISK:1,JPY:1,KRW:1,MOP:1,MXN:1,MYR:1,NIO:1,NOK:1,NZD:1,PEN:1,PHP:1,PLN:1,PYG:1,QAR:1,RON:1,RUB:1,SAR:1,SEK:1,SGD:1,THB:1,TRY:1,TWD:1,USD:1,UYU:1,VEF:1,VND:1,ZAR:1},H={value:{type:E,isRequired:true},currency:{type:F,isRequired:true}},I={PageView:{},ViewContent:{},Search:{},AddToCart:{},AddToWishlist:{},InitiateCheckout:{},PixelInitialized:{},AddPaymentInfo:{},Purchase:{validationSchema:H},Lead:{},CompleteRegistration:{},CustomEvent:{validationSchema:{event:{isRequired:true}}}},J={agent:true},K=Object.prototype.hasOwnProperty;function L(P,Q,R){this.error=null;this.warnings=[];this.eventName=P;this.params=Q||{};this.metadata=R}L.prototype.validateMetadata=function(){if(this.metadata){var P=this.metadata.toLowerCase(),Q=J[P];if(!Q)return this._error({type:"UNSUPPORTED_METADATA_ARGUMENT",metadata:P})}return this};L.prototype.validateEvent=function(){var P=this.eventName;if(!P)return this;var Q=I[P];if(!Q){this.warnings.push({type:"NONSTANDARD_EVENT",eventName:P});return this}var R=Q.validationSchema;for(var S in R)if(K.call(R,S)){var T=R[S];if(T){if(T.isRequired&&!K.call(this.params,S))return this._error({type:"REQUIRED_PARAM_MISSING",param:S,eventName:P});if(T.type&&typeof T.type==="string")if(!this._validateParam(S,T.type))return this._error({type:"INVALID_PARAM",param:S,eventName:P})}}return this};L.prototype._validateParam=function(P,Q){var R=this.params[P];switch(Q){case E:var S=(typeof R==="string"||typeof R==="number")&&D.test(""+R);if(S&&Number(R)<0)this.warnings.push({type:"NEGATIVE_EVENT_PARAM",param:P,eventName:this.eventName?this.eventName:"null"});return S;case F:return typeof R==="string"&&!!G[R.toUpperCase()]}return true};L.prototype._error=function(P){this.error=P;return this};function M(P){return new L(null,null,P).validateMetadata()}function N(P){var Q=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return new L(P,Q).validateEvent()}function O(P,Q){var R=new L(P,Q).validateEvent();if(R.error)t(R.error);if(R.warnings)for(var S=0;S<R.warnings.length;S++)t(R.warnings[S]);return R}e.exports={validateMetadata:M,validateEvent:N,validateEventAndLog:O}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsEvents",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsLogging"),s=C.logError,D=g.getFbeventsModules("SignalsFBEventsUtils"),r=D.keys,E=0,j=function(){function j(){var F=this;ea(this,j);this._listeners={};this.on=function(){return F._on.apply(F,arguments)};this.once=function(){return F._once.apply(F,arguments)};this.trigger=function(G){for(var H=arguments.length,I=Array(H>1?H-1:0),J=1;J<H;J++)I[J-1]=arguments[J];return F._trigger.apply(F,[G].concat(I))};this.unsubscribe=function(){return F._unsubscribe.apply(F,arguments)}}ca(j,[{key:"_on",value:function F(G,H){var I=this,J=E++;if(!this._listeners[G])this._listeners[G]={};this._listeners[G][J.toString()]=H;return function(){I.unsubscribe(G,J.toString())}}},{key:"_once",value:function F(G,H){var I=arguments,J=this.on(G,function(){J();return H.apply(null,I)});return J}},{key:"_trigger",value:function F(G){var H=this;for(var I=arguments.length,J=Array(I>1?I-1:0),K=1;K<I;K++)J[K-1]=arguments[K];if(!this._listeners[G])return[];return r(this._listeners[G]).map(function(L){try{if(!H._listeners[G][L])return[];return H._listeners[G][L].apply(null,J)}catch(M){s(M)}return null})}},{key:"_unsubscribe",value:function F(G,H){var I=this._listeners[G];if(I&&I[H]){delete I[H];if(r(I).length===0)delete this._listeners[G]}}}]);return j}(),z=new j();e.exports=z})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsFBQ",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var m=g.getFbeventsModules("SignalsEventValidation"),ha=g.getFbeventsModules("SignalsFBEventsFireLock"),l=g.getFbeventsModules("SignalsFBEventsLogging"),C=g.getFbeventsModules("SignalsFBEventsOptIn"),ga=g.getFbeventsModules("SignalsFBEventsPluginPath"),D=g.getFbeventsModules("SignalsFBEventsQE"),k=g.getFbeventsModules("SignalsFBEventsUtils"),h=g.getFbeventsModules("SignalsParamList"),i=g.getFbeventsModules("SignalsPixelEndpoint"),p=k.each,r=k.keys,E=k.map,F=k.some,s=l.logError,t=l.logUserError,G={AutomaticMatching:true,Dwell:true,FPCookie:true,Interaction:true,InferredEvents:true,Microdata:true,ProxyEndpoint:true,Sessions:true,TimeSpent:true,IWL:true},H=["InferredEvents","Microdata","IWL"],I={AutomaticSetup:H},J={AutomaticMatching:["inferredevents","identity"],Dwell:["dwell"],FPCookie:["fpcookie"],InferredEvents:["inferredevents","identity"],Interaction:["interaction","timespent"],Microdata:["microdata","identity"],ProxyEndpoint:["proxy"],Sessions:["sessions"],TimeSpent:["timespent"],IWL:["iwl"]};function K(O){return!!(G[O]||I[O])}function L(O,P,Q){var R=ga.get();if(typeof R.baseURL!="string"||!(R.scriptElement&&R.scriptElement.parentNode))throw new Error("fbevents script element not found.");var S=R.baseURL+"/signals/config/"+O+"?v="+P+"&r="+Q,T=b.createElement("script");T.src=S;T.async=true;if(R.scriptElement&&R.scriptElement.parentNode)R.scriptElement.parentNode.insertBefore(T,R.scriptElement)}var M={VALID_FEATURES:G,optIn:function O(P,Q){var R=this,S=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(typeof Q!=="string"||!K(Q))throw new Error('Invalid Argument: "'+Q+'" is not a valid opt-in feature');if(K(Q)){this.optIns.optIn(P,Q,S);p([Q].concat(da(I[Q]||[])),function(T){if(J[T])p(J[T],function(U){return R.fbq.loadPlugin(U)})})}return this},optOut:function O(P,Q){this.optIns.optOut(P,Q);return this},trackSingle:function O(P,Q,R){m.validateEventAndLog(Q,R);return this.trackSingleCustom(P,Q,R)},trackSingleCustom:function O(P,Q,R){var S=typeof P==="string"?P:P.id,T=this.getDefaultSendData(S,Q);T.customData=R;this.fire(T,false);return this},enqueue:function O(){for(var P=arguments.length,Q=Array(P),R=0;R<P;R++)Q[R]=arguments[R];this.queue.append(Q);return this},_validateSend:function O(P,Q){if(!P.eventName||!P.eventName.length)throw new Error("Event name not specified");if(!P.pixelId||!P.pixelId.length)throw new Error("PixelId not specified");if(P.set)p(E(r(P.set),function(S){return m.validateMetadata(S)}),function(S){if(S.error)throw new Error(S.error);if(S.warnings.length)p(S.warnings,t)});if(Q){var R=m.validateEvent(P.eventName,P.customData||{});if(R.error)throw new Error(R.error);if(R.warnings&&R.warnings.length)p(R.warnings,t)}return this},fire:function O(P){var Q=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;this._validateSend(P,Q);if(P.userData&&r(P.userData).length>0&&!this.fbq.loadPlugin("identity")){this.enqueue("fire",P);return this}var R=new h(this.fbq.piiTranslator);try{R.append("ud",P.userData,true)}catch(S){this.fbq.trigger("pii_invalidated",P.pixelId)}R.append("v",this.fbq.version);R.append("r",this.fbq.releaseSegment);P.set&&P.set.agent&&R.append("a",P.set.agent);var T=this.fbq.trigger("getCustomParameters",{id:P.pixelId});p(T,function(U){return p(r(U),function(V){if(R.containsKey(V))throw new Error("Custom parameter "+V+" already specified.");else R.append(V,U[V])})});i.sendEvent(P.pixelId,P.eventName,P.customData,R);return this},callMethod:function za(O){var P=O[0],Q=Array.prototype.slice.call(O,1);if(typeof this[P]==="function")try{this[P].apply(this,Q)}catch(R){s(R)}else s(new Error("Invalid FBQ method "+P))},getDefaultSendData:function O(P,Q){var R=this.getPixel(P),S={pixelId:P,eventName:Q};if(R){if(R.userData)S.userData=R.userData;if(R.agent)S.set={agent:R.agent};else if(this.fbq.agent)S.set={agent:this.fbq.agent}}return S},getOptedInPixels:function O(P){var Q=this;return this.optIns.listPixelIds(P).map(function(R){return Q.pixelsByID[R]})},ensurePixel:function O(P){if(!Object.prototype.hasOwnProperty.call(this.pixelsByID,P))throw new Error('Pixel "'+P+'" not found')},getPixel:function O(P){this.ensurePixel(P);return this.pixelsByID[P]},loadConfig:function O(P){if(this.fbq.disableConfigLoading||Object.prototype.hasOwnProperty.call(this.configsLoaded,P))return;this.locks.lockConfig(P);if(!this.fbq.pendingConfigs||F(this.fbq.pendingConfigs,function(Q){return Q===P})==false)L(P,this.VERSION,this.RELEASE_SEGMENT)},setExperiments:function O(P){this._defaultExperiments=new D(P)},getExperiments:function O(){return this._defaultExperiments},configLoaded:function O(P){this.configsLoaded[P]=true;this.locks.releaseConfig(P);this.fbq.trigger("configLoaded",P)}};function N(g,y){var O=this;this.VERSION=g.version;this.RELEASE_SEGMENT=g._releaseSegment;this.pixelsByID=y;this.fbq=g;this.optIns=new C(I);this.configsLoaded={};this._defaultExperiments=new D([]);this.locks=ha.global;p(g.pendingConfigs||[],function(P){return O.locks.lockConfig(P)})}N.prototype=M;e.exports=N})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsFireLock",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsUtils"),p=C.each,r=C.keys;function D(){this._locks={};this._callbacks=[]}D.prototype={lock:function E(F){this._locks[F]=true},release:function E(F){if(Object.prototype.hasOwnProperty.call(this._locks,F)){delete this._locks[F];if(r(this._locks).length===0)p(this._callbacks,function(G){return G(F)})}},onUnlocked:function E(F){this._callbacks.push(F)},isLocked:function E(){return r(this._locks).length>0}};D.global=new D();D.global.lockPlugin=function(E){this.lock("plugin:"+E)};D.global.releasePlugin=function(E){this.release("plugin:"+E)};D.global.lockConfig=function(E){this.lock("config:"+E)};D.global.releaseConfig=function(E){this.release("config:"+E)};e.exports=D})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsLogging",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsUtils"),D=C.sendPOST,h=g.getFbeventsModules("SignalsParamList"),E=false;function F(){E=true}var G="console",H="warn",I=a[G]?a[G][H].bind(a[G]):function(){},J=false;function K(){J=true}function L(S){if(J)return;I("[Facebook Pixel] - "+S)}var M="Facebook Pixel Error",N=a.postMessage?a.postMessage.bind(a):function(){},O={};function P(S){switch(S.type){case"FBQ_NO_METHOD_NAME":return"You must provide an argument to fbq().";case"INVALID_PIXEL_ID":var T=S.pixelID;return"Invalid PixelID: "+T+".";case"DUPLICATE_PIXEL_ID":var U=S.pixelID;return"Duplicate Pixel ID: "+U+".";case"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":var V=S.metadataValue,W=S.pixelID;return"Trying to set argument "+V+" for uninitialized Pixel ID "+W+".";case"CONFLICTING_VERSIONS":return"Multiple pixels with conflicting versions were detected on this page.";case"MULTIPLE_PIXELS":return"Multiple pixels were detected on this page.";case"UNSUPPORTED_METADATA_ARGUMENT":var X=S.metadata;return"Unsupported metadata argument: "+X+".";case"REQUIRED_PARAM_MISSING":var Y=S.param,Z=S.eventName;return"Required parameter '"+Y+"' is missing for event '"+Z+"'.";case"INVALID_PARAM":var Ra=S.param,Sa=S.eventName;return"Parameter '"+Ra+"' is invalid for event '"+Sa+"'.";case"NONSTANDARD_EVENT":var $=S.eventName;return"You are sending a non-standard event '"+$+"'. The preferred way to send these events is using trackCustom. See 'https://www.facebookmarketingdevelopers.com/pixels/up#sec-custom' for more information.";case"NEGATIVE_EVENT_PARAM":var Ta=S.param,Ua=S.eventName;return"Parameter '"+Ta+"' is negative for event '"+Ua+"'.";case"PII_INVALID_TYPE":var Va=S.key_type,Wa=S.key_val;return"An invalid "+Va+" was specified for '"+Wa+"'. This data will not be sent with any events for this Pixel.";default:s(new Error("INVALID_USER_ERROR - "+S.type+" - "+JSON.stringify(S)));return"Invalid User Error."}}function Q(S,T){try{var U=Math.random();if(U<.01){var V=new h(null);V.append("p","pixel");V.append("v",a.fbq&&a.fbq.version?a.fbq.version:"unknown");V.append("e",S.toString());if(S instanceof Error){V.append("f",S.fileName);V.append("s",S.stackTrace||S.stack)}V.append("ue",T?"1":"0");D(V,"https://connect.facebook.net/log/error")}}catch(W){}}function t(S){var T=JSON.stringify(S);if(!Object.prototype.hasOwnProperty.call(O,T))O[T]=true;else return;var U=P(S);L(U);N({action:"FB_LOG",logType:M,logMessage:U},"*");Q(new Error(U),true)}function s(S){Q(S,false);if(E)L(S.toString())}var R={logError:s,logUserError:t,enableVerboseDebugLogging:F,disableAllLogging:K};e.exports=R})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsOptIn",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsUtils"),p=C.each,D=C.filter,r=C.keys,E=C.some;function F(H){p(r(H),function(I){if(E(H[I],function(J){return Object.prototype.hasOwnProperty.call(H,J)}))throw new Error("Circular subOpts are not allowed. "+I+" depends on another subOpt")})}function G(H){this._opts={};this._subOpts=H||{};F(this._subOpts)}G.prototype._getOpts=function(H){return[].concat(da(Object.prototype.hasOwnProperty.call(this._subOpts,H)?this._subOpts[H]:[]),[H])};G.prototype._setOpt=function(H,I,J){if(!this._opts[I])this._opts[I]={};this._opts[I][H]=J};G.prototype.optIn=function(H,I){var J=this,K=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;p(this._getOpts(I),function(L){var M=K==true&&J.isOptedOut(H,I);if(!M)J._setOpt(H,L,true)});return this};G.prototype.optOut=function(H,I){var J=this;p(this._getOpts(I),function(K){return J._setOpt(H,K,false)});return this};G.prototype.isOptedIn=function(H,I){return this._opts[I]&&this._opts[I][H]===true};G.prototype.isOptedOut=function(H,I){return this._opts[I]&&this._opts[I][H]===false};G.prototype.listPixelIds=function(H){var I=this;return this._opts[H]?D(r(this._opts[H]),function(J){return I._opts[H][J]}):[]};e.exports=G})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsPluginPath",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=/([/]en_US)?[/](fbevents|signals)([.]js|[/])/;function D(){var G=null,H=null,I=b.getElementsByTagName("script");for(var J=0;J<I.length&&!G;J++){var K=I[J].src.split(C);if(K.length>1){G=K[0];H=I[J]}}return{baseURL:G,scriptElement:H}}var E=null;function F(){if(!E)E=D();return E}e.exports={get:F}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsProxyState",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=false;e.exports={getShouldProxy:function D(){return C},setShouldProxy:function D(E){C=E}}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsQE",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=function C(){return Math.random()};function D(F){var D=C();for(var G=0;G<F.length;G++){var H=F[G],I=H.passRate,J=ba(H.range,2),K=J[0],L=J[1];if(I<0||I>1)throw new Error("passRate should be between 0 and 1 in "+H.name);if(D>=K&&D<L){var M=C()<I;return{name:H.name,isInExperimentGroup:M,code:H.code+(M?"1":"0")}}}return null}function E(F){this._groups=F;this._result=null;this._hasRolled=false}E.prototype={get:function F(G){if(!this._hasRolled){var H=D(this._groups);if(H!=null)this._result=H;this._hasRolled=true}if(!G)return this._result;if(this._result!=null&&this._result.name===G)return this._result;return null}};e.exports=E})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsFBEventsUtils",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var h=g.getFbeventsModules("SignalsParamList"),C=g.getFbeventsModules("SignalsFBEventsProxyState"),D=Object.prototype.toString,E=!("addEventListener"in b);function la(S){return Array.isArray?Array.isArray(S):D.call(S)==="[object Array]"}function oa(S){return typeof S==="number"||typeof S==="string"&&/^\d+$/.test(S)}var ma=Number.isInteger||function(S){return typeof S==="number"&&isFinite(S)&&Math.floor(S)===S};function F(S,T,U){T=E?"on"+T:T;var V=E?S.attachEvent:S.addEventListener,W=E?S.detachEvent:S.removeEventListener,X=function X(){if(W)W.call(S,T,X,false);U()};if(V)V.call(S,T,X,false)}var G=Object.prototype.hasOwnProperty,H=!{toString:null}.propertyIsEnumerable("toString"),I=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],J=I.length;function r(S){if(Object.keys)return Object.keys(S);if((typeof S==="undefined"?"undefined":aa(S))!=="object"&&(typeof S!=="function"||S===null))throw new TypeError("Object.keys called on non-object");var T=[];for(var U in S)if(G.call(S,U))T.push(U);if(H)for(var V=0;V<J;V++)if(G.call(S,I[V]))T.push(I[V]);return T}function K(S,T){if(Array.prototype.map)return Array.prototype.map.call(S,T);var U=void 0,V=void 0;if(S==null)throw new TypeError(" array is null or not defined");var W=Object(S),X=W.length>>>0;if(typeof T!=="function")throw new TypeError(T+" is not a function");U=new Array(X);V=0;while(V<X){var Y,Z;if(V in W){Y=W[V];Z=T.call(null,Y,V,W);U[V]=Z}V++}return U}function L(S){if(this==null)throw new TypeError("Array.prototype.some called on null or undefined");if(typeof S!=="function")throw new TypeError();var T=Object(this),U=T.length>>>0,V=arguments.length>=2?arguments[1]:void 0;for(var W=0;W<U;W++)if(W in T&&S.call(V,T[W],W,T))return true;return false}function na(S){return r(S).length===0}function M(S){if(this===void 0||this===null)throw new TypeError();var T=Object(this),U=T.length>>>0;if(typeof S!=="function")throw new TypeError();var V=[],W=arguments.length>=2?arguments[1]:void 0;for(var X=0;X<U;X++)if(X in T){var Y=T[X];if(S.call(W,Y,X,T))V.push(Y)}return V}function q(S){this.items=S==null?[]:S}q.prototype.has=function(S){return L.call(this.items,function(T){return T===S})};q.prototype.add=function(S){this.items.push(S)};function N(S,T){return T&&C.getShouldProxy()?T:S}function O(S,T,U){var V=S.toQueryString(),W=N(T,U)+"?"+V;if(W.length<2048){var X=new Image();if(U){var Y=C.getShouldProxy();X.onerror=function(){C.setShouldProxy(true);if(!Y)O(S,T,U)}}X.src=W;return true}return false}function P(S,T,U){var V="fb"+Math.random().toString().replace(".",""),W=b.createElement("form");W.method="post";W.action=N(T,U);W.target=V;W.acceptCharset="utf-8";W.style.display="none";var X=!!(a.attachEvent&&!a.addEventListener),Y=X?'<iframe name="'+V+'">':"iframe",Z=b.createElement(Y);Z.src="about:blank";Z.id=V;Z.name=V;W.appendChild(Z);F(Z,"load",function(){S.each(function(V,Sa){var $=b.createElement("input");$.name=V;$.value=Sa;W.appendChild($)});F(Z,"load",function(){if(W.parentNode)W.parentNode.removeChild(W)});W.submit()});if(U){var Ra=C.getShouldProxy();Z.onerror=function(){C.setShouldProxy(true);if(!Ra)P(S,T,U)}}b.body.appendChild(W);return true}function Q(S,T,U){if(a.navigator&&a.navigator.sendBeacon){var V=a.navigator.sendBeacon(N(T,U),S.toFormData());if(U&&!V){var W=C.getShouldProxy();C.setShouldProxy(true);if(!W)Q(S,T,U)}return true}return false}var R={isArray:la,isEmptyObject:na,isNumber:oa,isInteger:ma,keys:r,listenOnce:F,map:K,sendGET:O,sendPOST:P,sendBeacon:Q,FBSet:q,each:function p(S,T){K.call(this,S,T)},some:function S(T,U){return L.call(T,U)},filter:function S(T,U){return M.call(T,U)}};e.exports=R})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsParamList",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C="deep",D="shallow";function E(G){if(typeof JSON==="undefined"||JSON===null||!JSON.stringify)return Object.prototype.toString.call(G);else return JSON.stringify(G)}function F(G){if(G===null||G===undefined)return true;var H=typeof G==="undefined"?"undefined":aa(G);return H==="number"||H==="boolean"||H==="string"}function h(G){this._params=[];this._piiTranslator=G}h.prototype.addRange=function(G){var H=this;G.each(function(I,J){return H.append(I,J)})};h.prototype.containsKey=function(G){for(var H=0;H<this._params.length;H++)if(this._params[H].name===G)return true;return false};h.prototype.get=function(G){var H=G;for(var I=0;I<this._params.length;I++)if(this._params[I].name===H)return this._params[I].value;return null};h.prototype.getAllParams=function(){return this._params};h.prototype.append=function(G,H,I){this._append(encodeURIComponent(G),H,C,I);return this};h.prototype.appendHash=function(G,H){for(var I in G)if(Object.prototype.hasOwnProperty.call(G,I))this._append(I,G[I],C,H);return this};h.fromHash=function(G,H){return new h(H).appendHash(G)};h.prototype._append=function(G,H,I,J){if(F(H))this._appendPrimitive(G,H,J);else if(I===C)this._appendObject(G,H,J);else this._appendPrimitive(G,E(H),J)};h.prototype._translateValue=function(G,H,I){if(typeof H==="boolean")return H?"true":"false";if(!I)return""+H;if(!this._piiTranslator)throw new Error();return this._piiTranslator(G,""+H)};h.prototype._appendPrimitive=function(G,H,I){if(H!=null){var J=this._translateValue(G,H,I);if(J!=null)this._params.push({name:G,value:J})}};h.prototype._appendObject=function(G,H,I){var J=null;for(var K in H)if(Object.prototype.hasOwnProperty.call(H,K)){var L=G+"["+encodeURIComponent(K)+"]";try{this._append(L,H[K],D,I)}catch(M){if(J==null)J=M}}if(J!=null)throw J};h.prototype.each=function(G){for(var H=0;H<this._params.length;H++){var I=this._params[H],J=I.name,K=I.value;G(J,K)}};h.prototype.toQueryString=function(){var G=[];this.each(function(H,I){G.push(H+"="+encodeURIComponent(I))});return G.join("&")};h.prototype.toFormData=function(){var G=new FormData();this.each(function(H,I){G.append(H,I)});return G};e.exports=h})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("SignalsPixelEndpoint",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsEvents"),D=g.getFbeventsModules("SignalsFBEventsUtils"),E=D.sendGET,F=D.sendPOST,G=D.sendBeacon,h=g.getFbeventsModules("SignalsParamList"),o=C.trigger,H={ENDPOINT:"https://www.facebook.com/tr/",PROXY_ENDPOINT:null},I=a.top!==a,J=false,K=function K(N){J=N};function L(N,O,P,Q){N.append("id",O);N.append("ev",P);N.append("dl",c.href);N.append("rl",b.referrer);N.append("if",I);N.append("ts",new Date().valueOf());N.append("cd",Q);N.append("sw",a.screen.width);N.append("sh",a.screen.height);return N}function A(N,O,P,Q,R){var S=new h(R);L(S,N,O,P);if(Q)S.addRange(Q);var T=[S,H.ENDPOINT,H.PROXY_ENDPOINT];if(J&&G.apply(undefined,T)){o("fired","BEACON",S);return}if(E.apply(undefined,T)){o("fired","GET",S);return}if(F.apply(undefined,T)){o("fired","POST",S);return}throw new Error("No working send method found for this fire.")}function M(N,O,P,Q,R){if(a.navigator&&a.navigator.sendBeacon){var S=new h(R);L(S,N,O,P);if(Q)S.addRange(Q);G(S,H.ENDPOINT)}}e.exports={CONFIG:H,sendEvent:A,sendBeaconPII:M,setUseBeacon:K}})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("signalsFBEventsInjectMethod",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var n=g.getFbeventsModules("signalsFBEventsMakeSafe");function ia(C,D,E){var F=C[D],G=n(E);C[D]=function(){var H=F.apply(this,arguments);G.apply(this,arguments);return H}}e.exports=ia})();return e.exports}(a,b,c,d)});g.ensureModuleRegistered("signalsFBEventsMakeSafe",function(){return function(a,b,c,d){var e={exports:{}},f=e.exports;(function(){"use strict";var C=g.getFbeventsModules("SignalsFBEventsLogging"),s=C.logError;function n(D){if(typeof D!=="function")return D;return function(){try{return D.apply(this,arguments)}catch(E){s(E)}return undefined}}e.exports=n})();return e.exports}(a,b,c,d)});"use strict";var g=a.fbq;g.execStart=a.performance&&typeof a.performance.now==="function"?a.performance.now():null;var h=g.getFbeventsModules("SignalsParamList"),i=g.getFbeventsModules("SignalsPixelEndpoint"),j=g.getFbeventsModules("SignalsEvents"),k=g.getFbeventsModules("SignalsFBEventsUtils"),l=g.getFbeventsModules("SignalsFBEventsLogging"),m=g.getFbeventsModules("SignalsEventValidation"),fa=g.getFbeventsModules("SignalsFBEventsFBQ"),ga=g.getFbeventsModules("SignalsFBEventsPluginPath"),ha=g.getFbeventsModules("SignalsFBEventsFireLock"),ia=g.getFbeventsModules("signalsFBEventsInjectMethod"),n=g.getFbeventsModules("signalsFBEventsMakeSafe"),ja=j.on,ka=j.once,o=j.trigger,p=k.each,q=k.FBSet,la=k.isArray,ma=k.isInteger,na=k.isEmptyObject,oa=k.isNumber,r=k.keys,s=l.logError,t=l.logUserError,u=ha.global;function pa(C){return g.getFbeventsModules(C)}function qa(C){return g.fbIsModuleLoaded(C)}var v={},w=-1,ra=Array.prototype.slice,sa=Object.prototype.hasOwnProperty,ta=c.href,ua=false,va=false,x=[],y={},wa=b.referrer,xa={PageView:new q(),PixelInitialized:new q()},z=new fa(g,y);function ya(C){for(var D in C)if(sa.call(C,D))this[D]=C[D];return this}function za(C){try{if(u.isLocked()){g.queue.push(arguments);return}var D=ra.call(arguments),E=D.length===1&&la(D[0]);if(E)D=D[0];if(typeof D[0]!=="string")t({type:"FBQ_NO_METHOD_NAME"});if(C.slice(0,6)==="report"){var F=C.slice(6);if(F==="CustomEvent"){F=(D[1]||{}).event||F;D=["trackCustom",F].concat(D.slice(1))}else D=["track",F].concat(D.slice(1))}C=D.shift();switch(C){case"addPixelId":ua=true;Ca.apply(this,D);break;case"init":va=true;Ca.apply(this,D);break;case"set":Aa.apply(this,D);break;case"track":if(oa(D[0])){Ha.apply(this,D);break}if(E){Ga.apply(this,D);break}Fa.apply(this,D);break;case"trackCustom":Ga.apply(this,D);break;case"send":Ia.apply(this,D);break;case"on":ja.apply(null,D);break;case"loadPlugin":B(D[0]);break;default:z.callMethod(arguments);break}}catch(G){s(G)}}function Aa(C){for(var D=arguments.length,E=Array(D>1?D-1:0),F=1;F<D;F++)E[F-1]=arguments[F];switch(C){case"endpoint":var G=E[0];if(typeof G!=="string")throw new Error("endpoint value must be a string");i.CONFIG.ENDPOINT=G;break;case"releaseSegment":var H=E[0];if(typeof H!=="string")throw new Error("releaseSegment value must be a string");g._releaseSegment=H;break;case"proxy":var I=E[0];if(i.CONFIG.PROXY_ENDPOINT)throw new Error("proxy has already been set");if(typeof I!=="string")throw new Error("endpoint value must be a string");i.CONFIG.PROXY_ENDPOINT=I;break;case"autoConfig":var J=E[0],K=E[1],L=J===true||J==="true"?"optIn":"optOut";if(typeof K!=="string")throw new Error("Invalid pixelID supplied to set autoConfig.");z.callMethod([L,K,"AutomaticSetup"]);break;case"experiments":var M=E[0];z.setExperiments(M);break;default:var N=E[0],O=E[1];if(typeof C!=="string")throw new Error("The metadata setting provided in the 'set' call is invalid.");if(typeof N!=="string")throw new Error("The metadata value must be a string.");if(typeof O!=="string")throw new Error("Invalid pixelID supplied to set call.");Ea(C,N,O);break}}g._initHandlers=[];g._initsDone={};var Ba=function Ba(C){return ma(C)&&C>=0&&C<=Number.MAX_SAFE_INTEGER};function Ca(C,D,E){w=w===-1?Date.now():w;if(typeof C==="number"){if(!Ba(C))t({type:"INVALID_PIXEL_ID",pixelID:C.toString()});C=C.toString()}else if(typeof C==="string"){var F=/^[1-9][0-9]{0,25}$/;if(!F.test(C))t({type:"INVALID_PIXEL_ID",pixelID:C})}else{t({type:"INVALID_PIXEL_ID",pixelID:C.toString()});return}if(sa.call(y,C)){if(D&&na(y[C].userData)){y[C].userData=D;B("identity")}else t({type:"DUPLICATE_PIXEL_ID",pixelID:C});return}var G={agent:E?E.agent:null,id:C,userData:D||{},eventCount:0};x.push(G);y[C]=G;if(D!=null)B("identity");Da();z.loadConfig(C)}function Da(){for(var C=0;C<g._initHandlers.length;C++){var D=g._initHandlers[C];if(!g._initsDone[C])g._initsDone[C]={};for(var E=0;E<x.length;E++){var F=x[E];if(!g._initsDone[C][F.id]){g._initsDone[C][F.id]=true;D(F)}}}}function Ea(C,D,E){var F=m.validateMetadata(C);if(F.error)s(F.error);if(F.warnings)for(var G=0;G<F.warnings.length;G++)t(F.warnings[G]);if(sa.call(y,E)){for(var H=0,I=x.length;H<I;H++)if(x[H].id===E){x[H][C]=D;break}}else t({type:"SET_METADATA_ON_UNINITIALIZED_PIXEL_ID",metadataValue:D,pixelID:E})}function Fa(C,D){D=D||{};m.validateEventAndLog(C,D);if(C==="CustomEvent"&&typeof D.event==="string")C=D.event;Ga.call(this,C,D)}function Ga(C,D){for(var E=0,F=x.length;E<F;E++){var G=x[E];if(!(C==="PageView"&&this.allowDuplicatePageViews)&&Object.prototype.hasOwnProperty.call(xa,C)&&xa[C].has(G.id))continue;A(G,C,D);if(Object.prototype.hasOwnProperty.call(xa,C))xa[C].add(G.id)}}function Ha(C,D){A(null,C,D)}function Ia(C,D){for(var E=0,F=x.length;E<F;E++)A(x[E],C,D)}function Ja(C){var D=new h(g.piiTranslator);try{D.append("ud",C&&C.userData||{},true)}catch(E){o("pii_invalidated",C)}D.append("v",g.version);if(g._releaseSegment)D.append("r",g._releaseSegment);D.append("a",C&&C.agent?C.agent:g.agent);if(C){D.append("ec",C.eventCount);C.eventCount++}var F=o("getCustomParameters",C);p(F,function(G){return p(r(G),function(H){if(D.containsKey(H))throw new Error("Custom parameter "+H+" has already been specified.");else D.append(H,G[H])})});D.append("it",w);return D}function A(C,D,E){i.sendEvent(C?C.id:null,D,E,Ja(C))}function Ka(){while(g.queue.length&&!u.isLocked()){var C=g.queue.shift();za.apply(g,C)}}function La(C){return"fbevents.plugins."+C}function B(C){if(/^[a-zA-Z]\w+$/.test(C)===false)throw new Error("Invalid plugin name: "+C);var D=La(C);if(v[D])return true;if(qa(D)){Ma(D,pa(D));return true}var E=ga.get();if(E.baseURL&&E.scriptElement){var F=E.baseURL+"/signals/plugins/"+C+".js?v="+g.version;if(!v[D]){u.lockPlugin(D);var G=b.createElement("script");G.src=F;G.async=true;if(E.scriptElement&&E.scriptElement.parentNode)E.scriptElement.parentNode.insertBefore(G,E.scriptElement)}}return false}function Ma(C,D){if(Object.prototype.hasOwnProperty.call(v,C))return;if(sa.call(D,"__fbEventsPlugin")&&D.__fbEventsPlugin===1){v[C]=D;v[C].plugin(g,z);o("pluginLoaded",C)}u.releasePlugin(C)}u.onUnlocked(function(){Ka()});if(g.pixelId){ua=true;Ca(g.pixelId)}if(ua&&va||a.fbq!==a._fbq)t({type:"CONFLICTING_VERSIONS"});if(x.length>1)t({type:"MULTIPLE_PIXELS"});function Na(){if(g.disablePushState===true)return;if(!d.pushState||!d.replaceState)return;var C=n(function(){wa=ta;ta=c.href;if(ta===wa)return;var D=new ya({allowDuplicatePageViews:true});za.call(D,"trackCustom","PageView")});ia(d,"pushState",C);ia(d,"replaceState",C);a.addEventListener("popstate",C,false)}ka("fired",function(){return Na()});function Oa(C){g._initHandlers.push(C);Da()}function Pa(){return{pixelInitializationTime:w,pixels:x}}function Qa(g){g.instance=z;g.callMethod=za;g.loadPlugin=B;g.registerPlugin=Ma;g._initHandlers=[];g._initsDone={};g.on=ja;g.once=ka;g.send=Ia;g.trigger=o;g.getEventCustomParameters=Ja;g.addInitHandler=Oa;g.getState=Pa;g.init=Ca;g.set=Aa}Qa(a.fbq);Ka();e.exports={addInitHandler:function Oa(C){g._initHandlers.push(C);Da()},doExport:Qa,getState:Pa,getEventCustomParameters:Ja,sendEvent:A,loadPlugin:B};o("execEnd");o("initialized",g);if(g.registerPlugin)g.registerPlugin("fbevents",e.exports);g.ensureModuleRegistered("fbevents",function(){return e.exports})})()})(window,document,location,history);
fbq.registerPlugin("global_config", {__fbEventsPlugin: 1, plugin: function(fbq, instance) { fbq.loadPlugin("opttracking");
fbq.set("experiments", {"0":{"name":"beacon","range":[0,0.02],"code":"b","passRate":0.5},"1":{"name":"logDataLayer","range":[0.02,0.12],"code":"d","passRate":0.5}});instance.configLoaded("global_config"); }});