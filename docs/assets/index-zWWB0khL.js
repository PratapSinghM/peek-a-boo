(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ba={exports:{}},ei={},Va={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),nc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),jo=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Wa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Qa={};function rr(e,t,r){this.props=e,this.context=t,this.refs=Qa,this.updater=r||Wa}rr.prototype.isReactComponent={};rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=rr.prototype;function Ol(e,t,r){this.props=e,this.context=t,this.refs=Qa,this.updater=r||Wa}var Fl=Ol.prototype=new Ya;Fl.constructor=Ol;Ga(Fl,rr.prototype);Fl.isPureReactComponent=!0;var Bo=Array.isArray,Ka=Object.prototype.hasOwnProperty,$l={current:null},Xa={key:!0,ref:!0,__self:!0,__source:!0};function qa(e,t,r){var n,i={},l=null,o=null;if(t!=null)for(n in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Ka.call(t,n)&&!Xa.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Gr,type:e,key:l,ref:o,props:i,_owner:$l.current}}function mc(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ao=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function yn(e,t,r,n,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Gr:case nc:o=!0}}if(o)return o=e,i=i(o),e=n===""?"."+ki(o,0):n,Bo(i)?(r="",e!=null&&(r=e.replace(Ao,"$&/")+"/"),yn(i,t,r,"",function(c){return c})):i!=null&&(Ul(i)&&(i=mc(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ao,"$&/")+"/")+e)),t.push(i)),1;if(o=0,n=n===""?".":n+":",Bo(e))for(var a=0;a<e.length;a++){l=e[a];var s=n+ki(l,a);o+=yn(l,t,r,s,i)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=n+ki(l,a++),o+=yn(l,t,r,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function en(e,t,r){if(e==null)return e;var n=[],i=0;return yn(e,n,"","",function(l){return t.call(r,l,i++)}),n}function hc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},kn={transition:null},vc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:kn,ReactCurrentOwner:$l};function Ja(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:en,forEach:function(e,t,r){en(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return en(e,function(){t++}),t},toArray:function(e){return en(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=rr;I.Fragment=ic;I.Profiler=oc;I.PureComponent=Ol;I.StrictMode=lc;I.Suspense=cc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;I.act=Ja;I.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ga({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=$l.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ka.call(t,s)&&!Xa.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:Gr,type:e.type,key:i,ref:l,props:n,_owner:o}};I.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};I.createElement=qa;I.createFactory=function(e){var t=qa.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:uc,render:e}};I.isValidElement=Ul;I.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:hc}};I.memo=function(e,t){return{$$typeof:dc,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=kn.transition;kn.transition={};try{e()}finally{kn.transition=t}};I.unstable_act=Ja;I.useCallback=function(e,t){return oe.current.useCallback(e,t)};I.useContext=function(e){return oe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};I.useEffect=function(e,t){return oe.current.useEffect(e,t)};I.useId=function(){return oe.current.useId()};I.useImperativeHandle=function(e,t,r){return oe.current.useImperativeHandle(e,t,r)};I.useInsertionEffect=function(e,t){return oe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return oe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return oe.current.useMemo(e,t)};I.useReducer=function(e,t,r){return oe.current.useReducer(e,t,r)};I.useRef=function(e){return oe.current.useRef(e)};I.useState=function(e){return oe.current.useState(e)};I.useSyncExternalStore=function(e,t,r){return oe.current.useSyncExternalStore(e,t,r)};I.useTransition=function(){return oe.current.useTransition()};I.version="18.3.1";Va.exports=I;var Qr=Va.exports;const yc=rc(Qr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=Qr,wc=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,Ec=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function Za(e,t,r){var n,i={},l=null,o=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(n in t)Sc.call(t,n)&&!Pc.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:wc,type:e,key:l,ref:o,props:i,_owner:Ec.current}}ei.Fragment=xc;ei.jsx=Za;ei.jsxs=Za;ba.exports=ei;var _r=ba.exports,Wi={},es={exports:{}},ve={},ts={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var _=E.length;E.push(T);e:for(;0<_;){var b=_-1>>>1,Y=E[b];if(0<i(Y,T))E[b]=T,E[_]=Y,_=b;else break e}}function r(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var T=E[0],_=E.pop();if(_!==T){E[0]=_;e:for(var b=0,Y=E.length,Jr=Y>>>1;b<Jr;){var mt=2*(b+1)-1,yi=E[mt],gt=mt+1,Zr=E[gt];if(0>i(yi,_))gt<Y&&0>i(Zr,yi)?(E[b]=Zr,E[gt]=_,b=gt):(E[b]=yi,E[mt]=_,b=mt);else if(gt<Y&&0>i(Zr,_))E[b]=Zr,E[gt]=_,b=gt;else break e}}return T}function i(E,T){var _=E.sortIndex-T.sortIndex;return _!==0?_:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,m=null,p=3,y=!1,k=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var T=r(c);T!==null;){if(T.callback===null)n(c);else if(T.startTime<=E)n(c),T.sortIndex=T.expirationTime,t(s,T);else break;T=r(c)}}function h(E){if(w=!1,f(E),!k)if(r(s)!==null)k=!0,hi(S);else{var T=r(c);T!==null&&vi(h,T.startTime-E)}}function S(E,T){k=!1,w&&(w=!1,d(z),z=-1),y=!0;var _=p;try{for(f(T),m=r(s);m!==null&&(!(m.expirationTime>T)||E&&!Ce());){var b=m.callback;if(typeof b=="function"){m.callback=null,p=m.priorityLevel;var Y=b(m.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===r(s)&&n(s),f(T)}else n(s);m=r(s)}if(m!==null)var Jr=!0;else{var mt=r(c);mt!==null&&vi(h,mt.startTime-T),Jr=!1}return Jr}finally{m=null,p=_,y=!1}}var P=!1,C=null,z=-1,H=5,L=-1;function Ce(){return!(e.unstable_now()-L<H)}function lr(){if(C!==null){var E=e.unstable_now();L=E;var T=!0;try{T=C(!0,E)}finally{T?or():(P=!1,C=null)}}else P=!1}var or;if(typeof u=="function")or=function(){u(lr)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,tc=Mo.port2;Mo.port1.onmessage=lr,or=function(){tc.postMessage(null)}}else or=function(){A(lr,0)};function hi(E){C=E,P||(P=!0,or())}function vi(E,T){z=A(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,hi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var _=p;p=T;try{return E()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=p;p=E;try{return T()}finally{p=_}},e.unstable_scheduleCallback=function(E,T,_){var b=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?b+_:b):_=b,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=_+Y,E={id:g++,callback:T,priorityLevel:E,startTime:_,expirationTime:Y,sortIndex:-1},_>b?(E.sortIndex=_,t(c,E),r(s)===null&&E===r(c)&&(w?(d(z),z=-1):w=!0,vi(h,_-b))):(E.sortIndex=Y,t(s,E),k||y||(k=!0,hi(S))),E},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(E){var T=p;return function(){var _=p;p=T;try{return E.apply(this,arguments)}finally{p=_}}}})(rs);ts.exports=rs;var Cc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=Qr,he=Cc;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ns=new Set,Ir={};function _t(e,t){Kt(e,t),Kt(e+"Capture",t)}function Kt(e,t){for(Ir[e]=t,e=0;e<t.length;e++)ns.add(t[e])}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ro={},Oo={};function _c(e){return Gi.call(Oo,e)?!0:Gi.call(Ro,e)?!1:Tc.test(e)?Oo[e]=!0:(Ro[e]=!0,!1)}function Ic(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,r,n){if(t===null||typeof t>"u"||Ic(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ae(e,t,r,n,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hl=/[\-:]([a-z])/g;function bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hl,bl);Z[t]=new ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hl,bl);Z[t]=new ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hl,bl);Z[t]=new ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,r,n){var i=Z.hasOwnProperty(t)?Z[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,r,i,n)&&(r=null),n||i===null?_c(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Qe=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tn=Symbol.for("react.element"),Dt=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,wi;function gr(e){if(wi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var xi=!1;function Si(e,t){if(!e||xi)return"";xi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=n.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{xi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gr(e):""}function Dc(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Dt:return"Portal";case Qi:return"Profiler";case Wl:return"StrictMode";case Yi:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return t=e.displayName||null,t!==null?t:Xi(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Xi(e(t))}catch{}}return null}function Nc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mc(e){var t=as(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rn(e){e._valueTracker||(e._valueTracker=Mc(e))}function ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=as(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qi(e,t){var r=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function $o(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ut(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function us(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function Ji(e,t){us(e,t);var r=ut(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Zi(e,t.type,ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uo(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zi(e,t,r){(t!=="number"||Ln(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hr=Array.isArray;function bt(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ut(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function el(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(v(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(v(92));if(hr(r)){if(1<r.length)throw Error(v(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ut(r)}}function cs(e,t){var r=ut(t.value),n=ut(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function bo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nn,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nn=nn||document.createElement("div"),nn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Lr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jc=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function ps(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function ms(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=ps(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Bc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(Bc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(v(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(v(61))}if(t.style!=null&&typeof t.style!="object")throw Error(v(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Vt=null,Wt=null;function Vo(e){if(e=Xr(e)){if(typeof ll!="function")throw Error(v(280));var t=e.stateNode;t&&(t=li(t),ll(e.stateNode,e.type,t))}}function gs(e){Vt?Wt?Wt.push(e):Wt=[e]:Vt=e}function hs(){if(Vt){var e=Vt,t=Wt;if(Wt=Vt=null,Vo(e),t)for(e=0;e<t.length;e++)Vo(t[e])}}function vs(e,t){return e(t)}function ys(){}var Ei=!1;function ks(e,t,r){if(Ei)return e(t,r);Ei=!0;try{return vs(e,t,r)}finally{Ei=!1,(Vt!==null||Wt!==null)&&(ys(),hs())}}function Dr(e,t){var r=e.stateNode;if(r===null)return null;var n=li(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(v(231,t,typeof r));return r}var ol=!1;if(be)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){ol=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{ol=!1}function Ac(e,t,r,n,i,l,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(g){this.onError(g)}}var wr=!1,Dn=null,Nn=!1,al=null,Rc={onError:function(e){wr=!0,Dn=e}};function Oc(e,t,r,n,i,l,o,a,s){wr=!1,Dn=null,Ac.apply(Rc,arguments)}function Fc(e,t,r,n,i,l,o,a,s){if(Oc.apply(this,arguments),wr){if(wr){var c=Dn;wr=!1,Dn=null}else throw Error(v(198));Nn||(Nn=!0,al=c)}}function It(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wo(e){if(It(e)!==e)throw Error(v(188))}function $c(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(v(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Wo(i),e;if(l===n)return Wo(i),t;l=l.sibling}throw Error(v(188))}if(r.return!==n.return)r=i,n=l;else{for(var o=!1,a=i.child;a;){if(a===r){o=!0,r=i,n=l;break}if(a===n){o=!0,n=i,r=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===r){o=!0,r=l,n=i;break}if(a===n){o=!0,n=l,r=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(r.alternate!==n)throw Error(v(190))}if(r.tag!==3)throw Error(v(188));return r.stateNode.current===r?e:t}function xs(e){return e=$c(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var Es=he.unstable_scheduleCallback,Go=he.unstable_cancelCallback,Uc=he.unstable_shouldYield,Hc=he.unstable_requestPaint,V=he.unstable_now,bc=he.unstable_getCurrentPriorityLevel,Kl=he.unstable_ImmediatePriority,Ps=he.unstable_UserBlockingPriority,Mn=he.unstable_NormalPriority,Vc=he.unstable_LowPriority,Cs=he.unstable_IdlePriority,ti=null,Ae=null;function Wc(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ti,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Yc,Gc=Math.log,Qc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Gc(e)/Qc|0)|0}var ln=64,on=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jn(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,o=r&268435455;if(o!==0){var a=o&~i;a!==0?n=vr(a):(l&=o,l!==0&&(n=vr(l)))}else o=r&~i,o!==0?n=vr(o):l!==0&&(n=vr(l));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Le(t),i=1<<r,n|=e[r],t&=~i;return n}function Kc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Le(l),a=1<<o,s=i[o];s===-1?(!(a&r)||a&n)&&(i[o]=Kc(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=ln;return ln<<=1,!(ln&4194240)&&(ln=64),e}function Pi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Yr(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=r}function qc(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-Le(r),l=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~l}}function Xl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Le(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var N=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _s,ql,Is,Ls,Ds,ul=!1,an=[],tt=null,rt=null,nt=null,Nr=new Map,Mr=new Map,qe=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,t){switch(e){case"focusin":case"focusout":tt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(t.pointerId)}}function ur(e,t,r,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Xr(t),t!==null&&ql(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zc(e,t,r,n,i){switch(t){case"focusin":return tt=ur(tt,e,t,r,n,i),!0;case"dragenter":return rt=ur(rt,e,t,r,n,i),!0;case"mouseover":return nt=ur(nt,e,t,r,n,i),!0;case"pointerover":var l=i.pointerId;return Nr.set(l,ur(Nr.get(l)||null,e,t,r,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Mr.set(l,ur(Mr.get(l)||null,e,t,r,n,i)),!0}return!1}function Ns(e){var t=yt(e.target);if(t!==null){var r=It(t);if(r!==null){if(t=r.tag,t===13){if(t=ws(r),t!==null){e.blockedOn=t,Ds(e.priority,function(){Is(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);il=n,r.target.dispatchEvent(n),il=null}else return t=Xr(r),t!==null&&ql(t),e.blockedOn=r,!1;t.shift()}return!0}function Yo(e,t,r){wn(e)&&r.delete(t)}function ed(){ul=!1,tt!==null&&wn(tt)&&(tt=null),rt!==null&&wn(rt)&&(rt=null),nt!==null&&wn(nt)&&(nt=null),Nr.forEach(Yo),Mr.forEach(Yo)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,ed)))}function jr(e){function t(i){return cr(i,e)}if(0<an.length){cr(an[0],e);for(var r=1;r<an.length;r++){var n=an[r];n.blockedOn===e&&(n.blockedOn=null)}}for(tt!==null&&cr(tt,e),rt!==null&&cr(rt,e),nt!==null&&cr(nt,e),Nr.forEach(t),Mr.forEach(t),r=0;r<qe.length;r++)n=qe[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<qe.length&&(r=qe[0],r.blockedOn===null);)Ns(r),r.blockedOn===null&&qe.shift()}var Gt=Qe.ReactCurrentBatchConfig,Bn=!0;function td(e,t,r,n){var i=N,l=Gt.transition;Gt.transition=null;try{N=1,Jl(e,t,r,n)}finally{N=i,Gt.transition=l}}function rd(e,t,r,n){var i=N,l=Gt.transition;Gt.transition=null;try{N=4,Jl(e,t,r,n)}finally{N=i,Gt.transition=l}}function Jl(e,t,r,n){if(Bn){var i=cl(e,t,r,n);if(i===null)ji(e,t,n,An,r),Qo(e,n);else if(Zc(i,e,t,r,n))n.stopPropagation();else if(Qo(e,n),t&4&&-1<Jc.indexOf(e)){for(;i!==null;){var l=Xr(i);if(l!==null&&_s(l),l=cl(e,t,r,n),l===null&&ji(e,t,n,An,r),l===i)break;i=l}i!==null&&n.stopPropagation()}else ji(e,t,n,null,r)}}var An=null;function cl(e,t,r,n){if(An=null,e=Yl(n),e=yt(e),e!==null)if(t=It(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ws(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return An=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case Kl:return 1;case Ps:return 4;case Mn:case Vc:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var Ze=null,Zl=null,xn=null;function js(){if(xn)return xn;var e,t=Zl,r=t.length,n,i="value"in Ze?Ze.value:Ze.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var o=r-e;for(n=1;n<=o&&t[r-n]===i[l-n];n++);return xn=i.slice(e,1<n?1-n:void 0)}function Sn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sn(){return!0}function Ko(){return!1}function ye(e){function t(r,n,i,l,o){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(r=e[a],this[a]=r?r(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?sn:Ko,this.isPropagationStopped=Ko,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sn)},persist:function(){},isPersistent:sn}),t}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=ye(nr),Kr=$({},nr,{view:0,detail:0}),nd=ye(Kr),Ci,zi,dr,ri=$({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:to,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(Ci=e.screenX-dr.screenX,zi=e.screenY-dr.screenY):zi=Ci=0,dr=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Xo=ye(ri),id=$({},ri,{dataTransfer:0}),ld=ye(id),od=$({},Kr,{relatedTarget:0}),Ti=ye(od),ad=$({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=ye(ad),ud=$({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=ye(ud),dd=$({},nr,{data:0}),qo=ye(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=md[e])?!!t[e]:!1}function to(){return gd}var hd=$({},Kr,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:to,charCode:function(e){return e.type==="keypress"?Sn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=ye(hd),yd=$({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jo=ye(yd),kd=$({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:to}),wd=ye(kd),xd=$({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=ye(xd),Ed=$({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=ye(Ed),Cd=[9,13,27,32],ro=be&&"CompositionEvent"in window,xr=null;be&&"documentMode"in document&&(xr=document.documentMode);var zd=be&&"TextEvent"in window&&!xr,Bs=be&&(!ro||xr&&8<xr&&11>=xr),Zo=" ",ea=!1;function As(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Td(e,t){switch(e){case"compositionend":return Rs(t);case"keypress":return t.which!==32?null:(ea=!0,Zo);case"textInput":return e=t.data,e===Zo&&ea?null:e;default:return null}}function _d(e,t){if(Mt)return e==="compositionend"||!ro&&As(e,t)?(e=js(),xn=Zl=Ze=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bs&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Os(e,t,r,n){gs(n),t=Rn(t,"onChange"),0<t.length&&(r=new eo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Sr=null,Br=null;function Ld(e){Ks(e,0)}function ni(e){var t=At(e);if(ss(t))return e}function Dd(e,t){if(e==="change")return t}var Fs=!1;if(be){var _i;if(be){var Ii="oninput"in document;if(!Ii){var ra=document.createElement("div");ra.setAttribute("oninput","return;"),Ii=typeof ra.oninput=="function"}_i=Ii}else _i=!1;Fs=_i&&(!document.documentMode||9<document.documentMode)}function na(){Sr&&(Sr.detachEvent("onpropertychange",$s),Br=Sr=null)}function $s(e){if(e.propertyName==="value"&&ni(Br)){var t=[];Os(t,Br,e,Yl(e)),ks(Ld,t)}}function Nd(e,t,r){e==="focusin"?(na(),Sr=t,Br=r,Sr.attachEvent("onpropertychange",$s)):e==="focusout"&&na()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(Br)}function jd(e,t){if(e==="click")return ni(t)}function Bd(e,t){if(e==="input"||e==="change")return ni(t)}function Ad(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ne=typeof Object.is=="function"?Object.is:Ad;function Ar(e,t){if(Ne(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Gi.call(t,i)||!Ne(e[i],t[i]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function la(e,t){var r=ia(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ia(r)}}function Us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ln(e.document)}return t}function no(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rd(e){var t=Hs(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Us(r.ownerDocument.documentElement,r)){if(n!==null&&no(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=la(r,l);var o=la(r,n);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=be&&"documentMode"in document&&11>=document.documentMode,jt=null,dl=null,Er=null,fl=!1;function oa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fl||jt==null||jt!==Ln(n)||(n=jt,"selectionStart"in n&&no(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Er&&Ar(Er,n)||(Er=n,n=Rn(dl,"onSelect"),0<n.length&&(t=new eo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jt)))}function un(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Bt={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionend:un("Transition","TransitionEnd")},Li={},bs={};be&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function ii(e){if(Li[e])return Li[e];if(!Bt[e])return e;var t=Bt[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in bs)return Li[e]=t[r];return e}var Vs=ii("animationend"),Ws=ii("animationiteration"),Gs=ii("animationstart"),Qs=ii("transitionend"),Ys=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dt(e,t){Ys.set(e,t),_t(t,[e])}for(var Di=0;Di<aa.length;Di++){var Ni=aa[Di],Fd=Ni.toLowerCase(),$d=Ni[0].toUpperCase()+Ni.slice(1);dt(Fd,"on"+$d)}dt(Vs,"onAnimationEnd");dt(Ws,"onAnimationIteration");dt(Gs,"onAnimationStart");dt("dblclick","onDoubleClick");dt("focusin","onFocus");dt("focusout","onBlur");dt(Qs,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function sa(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Fc(n,t,void 0,e),e.currentTarget=null}function Ks(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var a=n[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;sa(i,a,c),l=s}else for(o=0;o<n.length;o++){if(a=n[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;sa(i,a,c),l=s}}}if(Nn)throw e=al,Nn=!1,al=null,e}function j(e,t){var r=t[vl];r===void 0&&(r=t[vl]=new Set);var n=e+"__bubble";r.has(n)||(Xs(t,e,2,!1),r.add(n))}function Mi(e,t,r){var n=0;t&&(n|=4),Xs(r,e,n,t)}var cn="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[cn]){e[cn]=!0,ns.forEach(function(r){r!=="selectionchange"&&(Ud.has(r)||Mi(r,!1,e),Mi(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cn]||(t[cn]=!0,Mi("selectionchange",!1,t))}}function Xs(e,t,r,n){switch(Ms(t)){case 1:var i=td;break;case 4:i=rd;break;default:i=Jl}r=i.bind(null,t,r,e),i=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function ji(e,t,r,n,i){var l=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var a=n.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=n.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=yt(a),o===null)return;if(s=o.tag,s===5||s===6){n=l=o;continue e}a=a.parentNode}}n=n.return}ks(function(){var c=l,g=Yl(r),m=[];e:{var p=Ys.get(e);if(p!==void 0){var y=eo,k=e;switch(e){case"keypress":if(Sn(r)===0)break e;case"keydown":case"keyup":y=vd;break;case"focusin":k="focus",y=Ti;break;case"focusout":k="blur",y=Ti;break;case"beforeblur":case"afterblur":y=Ti;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Vs:case Ws:case Gs:y=sd;break;case Qs:y=Sd;break;case"scroll":y=nd;break;case"wheel":y=Pd;break;case"copy":case"cut":case"paste":y=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Jo}var w=(t&4)!==0,A=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var u=c,f;u!==null;){f=u;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,d!==null&&(h=Dr(u,d),h!=null&&w.push(Or(u,h,f)))),A)break;u=u.return}0<w.length&&(p=new y(p,k,null,r,g),m.push({event:p,listeners:w}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==il&&(k=r.relatedTarget||r.fromElement)&&(yt(k)||k[Ve]))break e;if((y||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,y?(k=r.relatedTarget||r.toElement,y=c,k=k?yt(k):null,k!==null&&(A=It(k),k!==A||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=c),y!==k)){if(w=Xo,h="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Jo,h="onPointerLeave",d="onPointerEnter",u="pointer"),A=y==null?p:At(y),f=k==null?p:At(k),p=new w(h,u+"leave",y,r,g),p.target=A,p.relatedTarget=f,h=null,yt(g)===c&&(w=new w(d,u+"enter",k,r,g),w.target=f,w.relatedTarget=A,h=w),A=h,y&&k)t:{for(w=y,d=k,u=0,f=w;f;f=Lt(f))u++;for(f=0,h=d;h;h=Lt(h))f++;for(;0<u-f;)w=Lt(w),u--;for(;0<f-u;)d=Lt(d),f--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break t;w=Lt(w),d=Lt(d)}w=null}else w=null;y!==null&&ua(m,p,y,w,!1),k!==null&&A!==null&&ua(m,A,k,w,!0)}}e:{if(p=c?At(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Dd;else if(ta(p))if(Fs)S=Bd;else{S=Md;var P=Nd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=jd);if(S&&(S=S(e,c))){Os(m,S,r,g);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Zi(p,"number",p.value)}switch(P=c?At(c):window,e){case"focusin":(ta(P)||P.contentEditable==="true")&&(jt=P,dl=c,Er=null);break;case"focusout":Er=dl=jt=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,oa(m,r,g);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":oa(m,r,g)}var C;if(ro)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Mt?As(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Bs&&r.locale!=="ko"&&(Mt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Mt&&(C=js()):(Ze=g,Zl="value"in Ze?Ze.value:Ze.textContent,Mt=!0)),P=Rn(c,z),0<P.length&&(z=new qo(z,e,null,r,g),m.push({event:z,listeners:P}),C?z.data=C:(C=Rs(r),C!==null&&(z.data=C)))),(C=zd?Td(e,r):_d(e,r))&&(c=Rn(c,"onBeforeInput"),0<c.length&&(g=new qo("onBeforeInput","beforeinput",null,r,g),m.push({event:g,listeners:c}),g.data=C))}Ks(m,t)})}function Or(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Rn(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Dr(e,r),l!=null&&n.unshift(Or(e,l,i)),l=Dr(e,t),l!=null&&n.push(Or(e,l,i))),e=e.return}return n}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,r,n,i){for(var l=t._reactName,o=[];r!==null&&r!==n;){var a=r,s=a.alternate,c=a.stateNode;if(s!==null&&s===n)break;a.tag===5&&c!==null&&(a=c,i?(s=Dr(r,l),s!=null&&o.unshift(Or(r,s,a))):i||(s=Dr(r,l),s!=null&&o.push(Or(r,s,a)))),r=r.return}o.length!==0&&e.push({event:t,listeners:o})}var Hd=/\r\n?/g,bd=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(bd,"")}function dn(e,t,r){if(t=ca(t),ca(e)!==t&&r)throw Error(v(425))}function On(){}var pl=null,ml=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Vd=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Gd)}:hl;function Gd(e){setTimeout(function(){throw e})}function Bi(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),jr(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);jr(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ir=Math.random().toString(36).slice(2),Be="__reactFiber$"+ir,Fr="__reactProps$"+ir,Ve="__reactContainer$"+ir,vl="__reactEvents$"+ir,Qd="__reactListeners$"+ir,Yd="__reactHandles$"+ir;function yt(e){var t=e[Be];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ve]||r[Be]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fa(e);e!==null;){if(r=e[Be])return r;e=fa(e)}return t}e=r,r=e.parentNode}return null}function Xr(e){return e=e[Be]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function li(e){return e[Fr]||null}var yl=[],Rt=-1;function ft(e){return{current:e}}function B(e){0>Rt||(e.current=yl[Rt],yl[Rt]=null,Rt--)}function M(e,t){Rt++,yl[Rt]=e.current,e.current=t}var ct={},ne=ft(ct),ce=ft(!1),Et=ct;function Xt(e,t){var r=e.type.contextTypes;if(!r)return ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function de(e){return e=e.childContextTypes,e!=null}function Fn(){B(ce),B(ne)}function pa(e,t,r){if(ne.current!==ct)throw Error(v(168));M(ne,t),M(ce,r)}function qs(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(v(108,Nc(e)||"Unknown",i));return $({},r,n)}function $n(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Et=ne.current,M(ne,e),M(ce,ce.current),!0}function ma(e,t,r){var n=e.stateNode;if(!n)throw Error(v(169));r?(e=qs(e,t,Et),n.__reactInternalMemoizedMergedChildContext=e,B(ce),B(ne),M(ne,e)):B(ce),M(ce,r)}var Fe=null,oi=!1,Ai=!1;function Js(e){Fe===null?Fe=[e]:Fe.push(e)}function Kd(e){oi=!0,Js(e)}function pt(){if(!Ai&&Fe!==null){Ai=!0;var e=0,t=N;try{var r=Fe;for(N=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Fe=null,oi=!1}catch(i){throw Fe!==null&&(Fe=Fe.slice(e+1)),Es(Kl,pt),i}finally{N=t,Ai=!1}}return null}var Ot=[],Ft=0,Un=null,Hn=0,ke=[],we=0,Pt=null,$e=1,Ue="";function ht(e,t){Ot[Ft++]=Hn,Ot[Ft++]=Un,Un=e,Hn=t}function Zs(e,t,r){ke[we++]=$e,ke[we++]=Ue,ke[we++]=Pt,Pt=e;var n=$e;e=Ue;var i=32-Le(n)-1;n&=~(1<<i),r+=1;var l=32-Le(t)+i;if(30<l){var o=i-i%5;l=(n&(1<<o)-1).toString(32),n>>=o,i-=o,$e=1<<32-Le(t)+i|r<<i|n,Ue=l+e}else $e=1<<l|r<<i|n,Ue=e}function io(e){e.return!==null&&(ht(e,1),Zs(e,1,0))}function lo(e){for(;e===Un;)Un=Ot[--Ft],Ot[Ft]=null,Hn=Ot[--Ft],Ot[Ft]=null;for(;e===Pt;)Pt=ke[--we],ke[we]=null,Ue=ke[--we],ke[we]=null,$e=ke[--we],ke[we]=null}var ge=null,me=null,R=!1,Ie=null;function eu(e,t){var r=xe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ga(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Pt!==null?{id:$e,overflow:Ue}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ge=e,me=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(R){var t=me;if(t){var r=t;if(!ga(e,t)){if(kl(e))throw Error(v(418));t=it(r.nextSibling);var n=ge;t&&ga(e,t)?eu(n,r):(e.flags=e.flags&-4097|2,R=!1,ge=e)}}else{if(kl(e))throw Error(v(418));e.flags=e.flags&-4097|2,R=!1,ge=e}}}function ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fn(e){if(e!==ge)return!1;if(!R)return ha(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=me)){if(kl(e))throw tu(),Error(v(418));for(;t;)eu(e,t),t=it(t.nextSibling)}if(ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){me=it(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?it(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=me;e;)e=it(e.nextSibling)}function qt(){me=ge=null,R=!1}function oo(e){Ie===null?Ie=[e]:Ie.push(e)}var Xd=Qe.ReactCurrentBatchConfig;function fr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(v(309));var n=r.stateNode}if(!n)throw Error(v(147,e));var i=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(v(284));if(!r._owner)throw Error(v(290,e))}return e}function pn(e,t){throw e=Object.prototype.toString.call(t),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){var t=e._init;return t(e._payload)}function ru(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function r(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function n(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=st(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,h){return u===null||u.tag!==6?(u=bi(f,d.mode,h),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,h){var S=f.type;return S===Nt?g(d,u,f.props.children,h,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ke&&va(S)===u.type)?(h=i(u,f.props),h.ref=fr(d,u,f),h.return=d,h):(h=In(f.type,f.key,f.props,null,d.mode,h),h.ref=fr(d,u,f),h.return=d,h)}function c(d,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vi(f,d.mode,h),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function g(d,u,f,h,S){return u===null||u.tag!==7?(u=St(f,d.mode,h,S),u.return=d,u):(u=i(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=bi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tn:return f=In(u.type,u.key,u.props,null,d.mode,f),f.ref=fr(d,null,u),f.return=d,f;case Dt:return u=Vi(u,d.mode,f),u.return=d,u;case Ke:var h=u._init;return m(d,h(u._payload),f)}if(hr(u)||ar(u))return u=St(u,d.mode,f,null),u.return=d,u;pn(d,u)}return null}function p(d,u,f,h){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tn:return f.key===S?s(d,u,f,h):null;case Dt:return f.key===S?c(d,u,f,h):null;case Ke:return S=f._init,p(d,u,S(f._payload),h)}if(hr(f)||ar(f))return S!==null?null:g(d,u,f,h,null);pn(d,f)}return null}function y(d,u,f,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(f)||null,a(u,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tn:return d=d.get(h.key===null?f:h.key)||null,s(u,d,h,S);case Dt:return d=d.get(h.key===null?f:h.key)||null,c(u,d,h,S);case Ke:var P=h._init;return y(d,u,f,P(h._payload),S)}if(hr(h)||ar(h))return d=d.get(f)||null,g(u,d,h,S,null);pn(u,h)}return null}function k(d,u,f,h){for(var S=null,P=null,C=u,z=u=0,H=null;C!==null&&z<f.length;z++){C.index>z?(H=C,C=null):H=C.sibling;var L=p(d,C,f[z],h);if(L===null){C===null&&(C=H);break}e&&C&&L.alternate===null&&t(d,C),u=l(L,u,z),P===null?S=L:P.sibling=L,P=L,C=H}if(z===f.length)return r(d,C),R&&ht(d,z),S;if(C===null){for(;z<f.length;z++)C=m(d,f[z],h),C!==null&&(u=l(C,u,z),P===null?S=C:P.sibling=C,P=C);return R&&ht(d,z),S}for(C=n(d,C);z<f.length;z++)H=y(C,d,z,f[z],h),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?z:H.key),u=l(H,u,z),P===null?S=H:P.sibling=H,P=H);return e&&C.forEach(function(Ce){return t(d,Ce)}),R&&ht(d,z),S}function w(d,u,f,h){var S=ar(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var P=S=null,C=u,z=u=0,H=null,L=f.next();C!==null&&!L.done;z++,L=f.next()){C.index>z?(H=C,C=null):H=C.sibling;var Ce=p(d,C,L.value,h);if(Ce===null){C===null&&(C=H);break}e&&C&&Ce.alternate===null&&t(d,C),u=l(Ce,u,z),P===null?S=Ce:P.sibling=Ce,P=Ce,C=H}if(L.done)return r(d,C),R&&ht(d,z),S;if(C===null){for(;!L.done;z++,L=f.next())L=m(d,L.value,h),L!==null&&(u=l(L,u,z),P===null?S=L:P.sibling=L,P=L);return R&&ht(d,z),S}for(C=n(d,C);!L.done;z++,L=f.next())L=y(C,d,z,L.value,h),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),u=l(L,u,z),P===null?S=L:P.sibling=L,P=L);return e&&C.forEach(function(lr){return t(d,lr)}),R&&ht(d,z),S}function A(d,u,f,h){if(typeof f=="object"&&f!==null&&f.type===Nt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tn:e:{for(var S=f.key,P=u;P!==null;){if(P.key===S){if(S=f.type,S===Nt){if(P.tag===7){r(d,P.sibling),u=i(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ke&&va(S)===P.type){r(d,P.sibling),u=i(P,f.props),u.ref=fr(d,P,f),u.return=d,d=u;break e}r(d,P);break}else t(d,P);P=P.sibling}f.type===Nt?(u=St(f.props.children,d.mode,h,f.key),u.return=d,d=u):(h=In(f.type,f.key,f.props,null,d.mode,h),h.ref=fr(d,u,f),h.return=d,d=h)}return o(d);case Dt:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{r(d,u);break}else t(d,u);u=u.sibling}u=Vi(f,d.mode,h),u.return=d,d=u}return o(d);case Ke:return P=f._init,A(d,u,P(f._payload),h)}if(hr(f))return k(d,u,f,h);if(ar(f))return w(d,u,f,h);pn(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(r(d,u.sibling),u=i(u,f),u.return=d,d=u):(r(d,u),u=bi(f,d.mode,h),u.return=d,d=u),o(d)):r(d,u)}return A}var Jt=ru(!0),nu=ru(!1),bn=ft(null),Vn=null,$t=null,ao=null;function so(){ao=$t=Vn=null}function uo(e){var t=bn.current;B(bn),e._currentValue=t}function xl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Qt(e,t){Vn=e,ao=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Vn===null)throw Error(v(308));$t=e,Vn.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var kt=null;function co(e){kt===null?kt=[e]:kt.push(e)}function iu(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,co(t)):(r.next=i.next,i.next=r),t.interleaved=r,We(e,n)}function We(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Xe=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,D&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,We(e,r)}return i=n.interleaved,i===null?(t.next=t,co(n)):(t.next=i.next,i.next=t),n.interleaved=t,We(e,r)}function En(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Xl(e,r)}}function ya(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=o:l=l.next=o,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Wn(e,t,r,n){var i=e.updateQueue;Xe=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(l!==null){var m=i.baseState;o=0,g=c=s=null,a=l;do{var p=a.lane,y=a.eventTime;if((n&p)===p){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(p=t,y=r,w.tag){case 1:if(k=w.payload,typeof k=="function"){m=k.call(y,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,p=typeof k=="function"?k.call(y,m,p):k,p==null)break e;m=$({},m,p);break e;case 2:Xe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=m):g=g.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=m}}function ka(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(v(191,i));i.call(n)}}}var qr={},Re=ft(qr),$r=ft(qr),Ur=ft(qr);function wt(e){if(e===qr)throw Error(v(174));return e}function po(e,t){switch(M(Ur,t),M($r,e),M(Re,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tl(t,e)}B(Re),M(Re,t)}function Zt(){B(Re),B($r),B(Ur)}function ou(e){wt(Ur.current);var t=wt(Re.current),r=tl(t,e.type);t!==r&&(M($r,e),M(Re,r))}function mo(e){$r.current===e&&(B(Re),B($r))}var O=ft(0);function Gn(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function go(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Pn=Qe.ReactCurrentDispatcher,Oi=Qe.ReactCurrentBatchConfig,Ct=0,F=null,G=null,K=null,Qn=!1,Pr=!1,Hr=0,qd=0;function ee(){throw Error(v(321))}function ho(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ne(e[r],t[r]))return!1;return!0}function vo(e,t,r,n,i,l){if(Ct=l,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Pn.current=e===null||e.memoizedState===null?tf:rf,e=r(n,i),Pr){l=0;do{if(Pr=!1,Hr=0,25<=l)throw Error(v(301));l+=1,K=G=null,t.updateQueue=null,Pn.current=nf,e=r(n,i)}while(Pr)}if(Pn.current=Yn,t=G!==null&&G.next!==null,Ct=0,K=G=F=null,Qn=!1,t)throw Error(v(300));return e}function yo(){var e=Hr!==0;return Hr=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?F.memoizedState=K=e:K=K.next=e,K}function Pe(){if(G===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=K===null?F.memoizedState:K.next;if(t!==null)K=t,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},K===null?F.memoizedState=K=e:K=K.next=e}return K}function br(e,t){return typeof t=="function"?t(e):t}function Fi(e){var t=Pe(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var n=G,i=n.baseQueue,l=r.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}n.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,n=n.baseState;var a=o=null,s=null,c=l;do{var g=c.lane;if((Ct&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=n):s=s.next=m,F.lanes|=g,zt|=g}c=c.next}while(c!==null&&c!==l);s===null?o=n:s.next=a,Ne(n,t.memoizedState)||(ue=!0),t.memoizedState=n,t.baseState=o,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do l=i.lane,F.lanes|=l,zt|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function $i(e){var t=Pe(),r=t.queue;if(r===null)throw Error(v(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ne(l,t.memoizedState)||(ue=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function au(){}function su(e,t){var r=F,n=Pe(),i=t(),l=!Ne(n.memoizedState,i);if(l&&(n.memoizedState=i,ue=!0),n=n.queue,ko(du.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||K!==null&&K.memoizedState.tag&1){if(r.flags|=2048,Vr(9,cu.bind(null,r,n,i,t),void 0,null),X===null)throw Error(v(349));Ct&30||uu(r,t,i)}return i}function uu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function cu(e,t,r,n){t.value=r,t.getSnapshot=n,fu(t)&&pu(e)}function du(e,t,r){return r(function(){fu(t)&&pu(e)})}function fu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ne(e,r)}catch{return!0}}function pu(e){var t=We(e,1);t!==null&&De(t,e,1,-1)}function wa(e){var t=je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,F,e),[t.memoizedState,e]}function Vr(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function mu(){return Pe().memoizedState}function Cn(e,t,r,n){var i=je();F.flags|=e,i.memoizedState=Vr(1|t,r,void 0,n===void 0?null:n)}function ai(e,t,r,n){var i=Pe();n=n===void 0?null:n;var l=void 0;if(G!==null){var o=G.memoizedState;if(l=o.destroy,n!==null&&ho(n,o.deps)){i.memoizedState=Vr(t,r,l,n);return}}F.flags|=e,i.memoizedState=Vr(1|t,r,l,n)}function xa(e,t){return Cn(8390656,8,e,t)}function ko(e,t){return ai(2048,8,e,t)}function gu(e,t){return ai(4,2,e,t)}function hu(e,t){return ai(4,4,e,t)}function vu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yu(e,t,r){return r=r!=null?r.concat([e]):null,ai(4,4,vu.bind(null,t,e),r)}function wo(){}function ku(e,t){var r=Pe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ho(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function wu(e,t){var r=Pe();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ho(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function xu(e,t,r){return Ct&21?(Ne(r,t)||(r=zs(),F.lanes|=r,zt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=r)}function Jd(e,t){var r=N;N=r!==0&&4>r?r:4,e(!0);var n=Oi.transition;Oi.transition={};try{e(!1),t()}finally{N=r,Oi.transition=n}}function Su(){return Pe().memoizedState}function Zd(e,t,r){var n=at(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Eu(e))Pu(t,r);else if(r=iu(e,t,r,n),r!==null){var i=le();De(r,e,n,i),Cu(r,t,n)}}function ef(e,t,r){var n=at(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Pu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,r);if(i.hasEagerState=!0,i.eagerState=a,Ne(a,o)){var s=t.interleaved;s===null?(i.next=i,co(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}r=iu(e,t,i,n),r!==null&&(i=le(),De(r,e,n,i),Cu(r,t,n))}}function Eu(e){var t=e.alternate;return e===F||t!==null&&t===F}function Pu(e,t){Pr=Qn=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Xl(e,r)}}var Yn={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},tf={readContext:Ee,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:xa,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Cn(4194308,4,vu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Cn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cn(4,2,e,t)},useMemo:function(e,t){var r=je();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=je();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Zd.bind(null,F,e),[n.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=Jd.bind(null,e[1]),je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=F,i=je();if(R){if(r===void 0)throw Error(v(407));r=r()}else{if(r=t(),X===null)throw Error(v(349));Ct&30||uu(n,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,xa(du.bind(null,n,l,e),[e]),n.flags|=2048,Vr(9,cu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=je(),t=X.identifierPrefix;if(R){var r=Ue,n=$e;r=(n&~(1<<32-Le(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hr++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=qd++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:ku,useContext:Ee,useEffect:ko,useImperativeHandle:yu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:wu,useReducer:Fi,useRef:mu,useState:function(){return Fi(br)},useDebugValue:wo,useDeferredValue:function(e){var t=Pe();return xu(t,G.memoizedState,e)},useTransition:function(){var e=Fi(br)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:ku,useContext:Ee,useEffect:ko,useImperativeHandle:yu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:wu,useReducer:$i,useRef:mu,useState:function(){return $i(br)},useDebugValue:wo,useDeferredValue:function(e){var t=Pe();return G===null?t.memoizedState=e:xu(t,G.memoizedState,e)},useTransition:function(){var e=$i(br)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Sl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:$({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var si={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=le(),i=at(e),l=He(n,i);l.payload=t,r!=null&&(l.callback=r),t=lt(e,l,i),t!==null&&(De(t,e,i,n),En(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=le(),i=at(e),l=He(n,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=lt(e,l,i),t!==null&&(De(t,e,i,n),En(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=le(),n=at(e),i=He(r,n);i.tag=2,t!=null&&(i.callback=t),t=lt(e,i,n),t!==null&&(De(t,e,n,r),En(t,e,n))}};function Sa(e,t,r,n,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(r,n)||!Ar(i,l):!0}function zu(e,t,r){var n=!1,i=ct,l=t.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=de(t)?Et:ne.current,n=t.contextTypes,l=(n=n!=null)?Xt(e,i):ct),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=si,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ea(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&si.enqueueReplaceState(t,t.state,null)}function El(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},fo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=de(t)?Et:ne.current,i.context=Xt(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&si.enqueueReplaceState(i,i.state,null),Wn(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function er(e,t){try{var r="",n=t;do r+=Dc(n),n=n.return;while(n);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ui(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Pl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,t,r){r=He(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xn||(Xn=!0,jl=n),Pl(e,t)},r}function _u(e,t,r){r=He(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Pl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Pl(e,t),typeof n!="function"&&(ot===null?ot=new Set([this]):ot.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),r}function Pa(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new lf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=kf.bind(null,e,t,r),t.then(e,e))}function Ca(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function za(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=He(-1,1),t.tag=2,lt(r,t,1))),r.lanes|=1),e)}var of=Qe.ReactCurrentOwner,ue=!1;function ie(e,t,r,n){t.child=e===null?nu(t,null,r,n):Jt(t,e.child,r,n)}function Ta(e,t,r,n,i){r=r.render;var l=t.ref;return Qt(t,i),n=vo(e,t,r,n,l,i),r=yo(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(R&&r&&io(t),t.flags|=1,ie(e,t,n,i),t.child)}function _a(e,t,r,n,i){if(e===null){var l=r.type;return typeof l=="function"&&!_o(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,Iu(e,t,l,n,i)):(e=In(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(r=r.compare,r=r!==null?r:Ar,r(o,n)&&e.ref===t.ref)return Ge(e,t,i)}return t.flags|=1,e=st(l,n),e.ref=t.ref,e.return=t,t.child=e}function Iu(e,t,r,n,i){if(e!==null){var l=e.memoizedProps;if(Ar(l,n)&&e.ref===t.ref)if(ue=!1,t.pendingProps=n=l,(e.lanes&i)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,Ge(e,t,i)}return Cl(e,t,r,n,i)}function Lu(e,t,r){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Ht,pe),pe|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Ht,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,M(Ht,pe),pe|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,M(Ht,pe),pe|=n;return ie(e,t,i,r),t.child}function Du(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,n,i){var l=de(r)?Et:ne.current;return l=Xt(t,l),Qt(t,i),r=vo(e,t,r,n,l,i),n=yo(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(R&&n&&io(t),t.flags|=1,ie(e,t,r,i),t.child)}function Ia(e,t,r,n,i){if(de(r)){var l=!0;$n(t)}else l=!1;if(Qt(t,i),t.stateNode===null)zn(e,t),zu(t,r,n),El(t,r,n,i),n=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(r)?Et:ne.current,c=Xt(t,c));var g=r.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==n||s!==c)&&Ea(t,o,n,c),Xe=!1;var p=t.memoizedState;o.state=p,Wn(t,n,o,i),s=t.memoizedState,a!==n||p!==s||ce.current||Xe?(typeof g=="function"&&(Sl(t,r,g,n),s=t.memoizedState),(a=Xe||Sa(t,r,a,n,p,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),o.props=n,o.state=s,o.context=c,n=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,lu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Te(t.type,a),o.props=c,m=t.pendingProps,p=o.context,s=r.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=de(r)?Et:ne.current,s=Xt(t,s));var y=r.getDerivedStateFromProps;(g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==s)&&Ea(t,o,n,s),Xe=!1,p=t.memoizedState,o.state=p,Wn(t,n,o,i);var k=t.memoizedState;a!==m||p!==k||ce.current||Xe?(typeof y=="function"&&(Sl(t,r,y,n),k=t.memoizedState),(c=Xe||Sa(t,r,c,n,p,k,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,k,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=k),o.props=n,o.state=k,o.context=s,n=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return zl(e,t,r,n,l,i)}function zl(e,t,r,n,i,l){Du(e,t);var o=(t.flags&128)!==0;if(!n&&!o)return i&&ma(t,r,!1),Ge(e,t,l);n=t.stateNode,of.current=t;var a=o&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&o?(t.child=Jt(t,e.child,null,l),t.child=Jt(t,null,a,l)):ie(e,t,a,l),t.memoizedState=n.state,i&&ma(t,r,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?pa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pa(e,t.context,!1),po(e,t.containerInfo)}function La(e,t,r,n,i){return qt(),oo(i),t.flags|=256,ie(e,t,r,n),t.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,r){var n=t.pendingProps,i=O.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(O,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=n.children,e=n.fallback,l?(n=t.mode,l=t.child,o={mode:"hidden",children:o},!(n&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=di(o,n,0,null),e=St(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=_l(r),t.memoizedState=Tl,e):xo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return af(e,t,o,n,a,i,r);if(l){l=n.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:n.children};return!(o&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=st(i,s),n.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=st(a,l):(l=St(l,o,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,o=e.child.memoizedState,o=o===null?_l(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~r,t.memoizedState=Tl,n}return l=e.child,e=l.sibling,n=st(l,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function xo(e,t){return t=di({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mn(e,t,r,n){return n!==null&&oo(n),Jt(t,e.child,null,r),e=xo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function af(e,t,r,n,i,l,o){if(r)return t.flags&256?(t.flags&=-257,n=Ui(Error(v(422))),mn(e,t,o,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,i=t.mode,n=di({mode:"visible",children:n.children},i,0,null),l=St(l,i,o,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,t.mode&1&&Jt(t,e.child,null,o),t.child.memoizedState=_l(o),t.memoizedState=Tl,l);if(!(t.mode&1))return mn(e,t,o,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var a=n.dgst;return n=a,l=Error(v(419)),n=Ui(l,n,void 0),mn(e,t,o,n)}if(a=(o&e.childLanes)!==0,ue||a){if(n=X,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,We(e,i),De(n,e,i,-1))}return To(),n=Ui(Error(v(421))),mn(e,t,o,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,me=it(i.nextSibling),ge=t,R=!0,Ie=null,e!==null&&(ke[we++]=$e,ke[we++]=Ue,ke[we++]=Pt,$e=e.id,Ue=e.overflow,Pt=t),t=xo(t,n.children),t.flags|=4096,t)}function Da(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),xl(e.return,t,r)}function Hi(e,t,r,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=i)}function ju(e,t,r){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(ie(e,t,n.children,r),n=O.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Da(e,r,t);else if(e.tag===19)Da(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(M(O,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Gn(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Hi(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gn(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Hi(t,!0,r,null,l);break;case"together":Hi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(v(153));if(t.child!==null){for(e=t.child,r=st(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=st(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function sf(e,t,r){switch(t.tag){case 3:Nu(t),qt();break;case 5:ou(t);break;case 1:de(t.type)&&$n(t);break;case 4:po(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;M(bn,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(M(O,O.current&1),t.flags|=128,null):r&t.child.childLanes?Mu(e,t,r):(M(O,O.current&1),e=Ge(e,t,r),e!==null?e.sibling:null);M(O,O.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return ju(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(O,O.current),n)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,r)}return Ge(e,t,r)}var Bu,Il,Au,Ru;Bu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Il=function(){};Au=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,wt(Re.current);var l=null;switch(r){case"input":i=qi(e,i),n=qi(e,n),l=[];break;case"select":i=$({},i,{value:void 0}),n=$({},n,{value:void 0}),l=[];break;case"textarea":i=el(e,i),n=el(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=On)}rl(r,n);var o;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ir.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in n){var s=n[c];if(a=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(r||(r={}),r[o]=s[o])}else r||(l||(l=[]),l.push(c,r)),r=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&j("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}r&&(l=l||[]).push("style",r);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Ru=function(e,t,r,n){r!==n&&(t.flags|=4)};function pr(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function uf(e,t,r){var n=t.pendingProps;switch(lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return de(t.type)&&Fn(),te(t),null;case 3:return n=t.stateNode,Zt(),B(ce),B(ne),go(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(Rl(Ie),Ie=null))),Il(e,t),te(t),null;case 5:mo(t);var i=wt(Ur.current);if(r=t.type,e!==null&&t.stateNode!=null)Au(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(v(166));return te(t),null}if(e=wt(Re.current),fn(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[Be]=t,n[Fr]=l,e=(t.mode&1)!==0,r){case"dialog":j("cancel",n),j("close",n);break;case"iframe":case"object":case"embed":j("load",n);break;case"video":case"audio":for(i=0;i<yr.length;i++)j(yr[i],n);break;case"source":j("error",n);break;case"img":case"image":case"link":j("error",n),j("load",n);break;case"details":j("toggle",n);break;case"input":$o(n,l),j("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},j("invalid",n);break;case"textarea":Ho(n,l),j("invalid",n)}rl(r,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?n.textContent!==a&&(l.suppressHydrationWarning!==!0&&dn(n.textContent,a,e),i=["children",a]):typeof a=="number"&&n.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&dn(n.textContent,a,e),i=["children",""+a]):Ir.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&j("scroll",n)}switch(r){case"input":rn(n),Uo(n,l,!0);break;case"textarea":rn(n),bo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=On)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=o.createElement(r,{is:n.is}):(e=o.createElement(r),r==="select"&&(o=e,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):e=o.createElementNS(e,r),e[Be]=t,e[Fr]=n,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(o=nl(r,n),r){case"dialog":j("cancel",e),j("close",e),i=n;break;case"iframe":case"object":case"embed":j("load",e),i=n;break;case"video":case"audio":for(i=0;i<yr.length;i++)j(yr[i],e);i=n;break;case"source":j("error",e),i=n;break;case"img":case"image":case"link":j("error",e),j("load",e),i=n;break;case"details":j("toggle",e),i=n;break;case"input":$o(e,n),i=qi(e,n),j("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=$({},n,{value:void 0}),j("invalid",e);break;case"textarea":Ho(e,n),i=el(e,n),j("invalid",e);break;default:i=n}rl(r,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ms(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):l==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Lr(e,s):typeof s=="number"&&Lr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ir.hasOwnProperty(l)?s!=null&&l==="onScroll"&&j("scroll",e):s!=null&&Vl(e,l,s,o))}switch(r){case"input":rn(e),Uo(e,n,!1);break;case"textarea":rn(e),bo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ut(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?bt(e,!!n.multiple,l,!1):n.defaultValue!=null&&bt(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=On)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Ru(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(v(166));if(r=wt(Ur.current),wt(Re.current),fn(t)){if(n=t.stateNode,r=t.memoizedProps,n[Be]=t,(l=n.nodeValue!==r)&&(e=ge,e!==null))switch(e.tag){case 3:dn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dn(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Be]=t,t.stateNode=n}return te(t),null;case 13:if(B(O),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&me!==null&&t.mode&1&&!(t.flags&128))tu(),qt(),t.flags|=98560,l=!1;else if(l=fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Be]=t}else qt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),l=!1}else Ie!==null&&(Rl(Ie),Ie=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||O.current&1?Q===0&&(Q=3):To())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return Zt(),Il(e,t),e===null&&Rr(t.stateNode.containerInfo),te(t),null;case 10:return uo(t.type._context),te(t),null;case 17:return de(t.type)&&Fn(),te(t),null;case 19:if(B(O),l=t.memoizedState,l===null)return te(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)pr(l,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gn(e),o!==null){for(t.flags|=128,pr(l,!1),n=o.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return M(O,O.current&1|2),t.child}e=e.sibling}l.tail!==null&&V()>tr&&(t.flags|=128,n=!0,pr(l,!1),t.lanes=4194304)}else{if(!n)if(e=Gn(o),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),pr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!R)return te(t),null}else 2*V()-l.renderingStartTime>tr&&r!==1073741824&&(t.flags|=128,n=!0,pr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(r=l.last,r!==null?r.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=V(),t.sibling=null,r=O.current,M(O,n?r&1|2:r&1),t):(te(t),null);case 22:case 23:return zo(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?pe&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(v(156,t.tag))}function cf(e,t){switch(lo(t),t.tag){case 1:return de(t.type)&&Fn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Zt(),B(ce),B(ne),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mo(t),null;case 13:if(B(O),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(v(340));qt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(O),null;case 4:return Zt(),null;case 10:return uo(t.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var gn=!1,re=!1,df=typeof WeakSet=="function"?WeakSet:Set,x=null;function Ut(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){U(e,t,n)}else r.current=null}function Ll(e,t,r){try{r()}catch(n){U(e,t,n)}}var Na=!1;function ff(e,t){if(pl=Bn,e=Hs(),no(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var o=0,a=-1,s=-1,c=0,g=0,m=e,p=null;t:for(;;){for(var y;m!==r||i!==0&&m.nodeType!==3||(a=o+i),m!==l||n!==0&&m.nodeType!==3||(s=o+n),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break t;if(p===r&&++c===i&&(a=o),p===l&&++g===n&&(s=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}r=a===-1||s===-1?null:{start:a,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(ml={focusedElem:e,selectionRange:r},Bn=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,A=k.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),A);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(h){U(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return k=Na,Na=!1,k}function Cr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ll(t,r,l)}i=i.next}while(i!==n)}}function ui(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Dl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Be],delete t[Fr],delete t[vl],delete t[Qd],delete t[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=On));else if(n!==4&&(e=e.child,e!==null))for(Nl(e,t,r),e=e.sibling;e!==null;)Nl(e,t,r),e=e.sibling}function Ml(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ml(e,t,r),e=e.sibling;e!==null;)Ml(e,t,r),e=e.sibling}var q=null,_e=!1;function Ye(e,t,r){for(r=r.child;r!==null;)$u(e,t,r),r=r.sibling}function $u(e,t,r){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ti,r)}catch{}switch(r.tag){case 5:re||Ut(r,t);case 6:var n=q,i=_e;q=null,Ye(e,t,r),q=n,_e=i,q!==null&&(_e?(e=q,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):q.removeChild(r.stateNode));break;case 18:q!==null&&(_e?(e=q,r=r.stateNode,e.nodeType===8?Bi(e.parentNode,r):e.nodeType===1&&Bi(e,r),jr(e)):Bi(q,r.stateNode));break;case 4:n=q,i=_e,q=r.stateNode.containerInfo,_e=!0,Ye(e,t,r),q=n,_e=i;break;case 0:case 11:case 14:case 15:if(!re&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ll(r,t,o),i=i.next}while(i!==n)}Ye(e,t,r);break;case 1:if(!re&&(Ut(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(a){U(r,t,a)}Ye(e,t,r);break;case 21:Ye(e,t,r);break;case 22:r.mode&1?(re=(n=re)||r.memoizedState!==null,Ye(e,t,r),re=n):Ye(e,t,r);break;default:Ye(e,t,r)}}function ja(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new df),t.forEach(function(n){var i=xf.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ze(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:q=a.stateNode,_e=!1;break e;case 3:q=a.stateNode.containerInfo,_e=!0;break e;case 4:q=a.stateNode.containerInfo,_e=!0;break e}a=a.return}if(q===null)throw Error(v(160));$u(l,o,i),q=null,_e=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){U(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Me(e),n&4){try{Cr(3,e,e.return),ui(3,e)}catch(w){U(e,e.return,w)}try{Cr(5,e,e.return)}catch(w){U(e,e.return,w)}}break;case 1:ze(t,e),Me(e),n&512&&r!==null&&Ut(r,r.return);break;case 5:if(ze(t,e),Me(e),n&512&&r!==null&&Ut(r,r.return),e.flags&32){var i=e.stateNode;try{Lr(i,"")}catch(w){U(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=r!==null?r.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&us(i,l),nl(a,o);var c=nl(a,l);for(o=0;o<s.length;o+=2){var g=s[o],m=s[o+1];g==="style"?ms(i,m):g==="dangerouslySetInnerHTML"?fs(i,m):g==="children"?Lr(i,m):Vl(i,g,m,c)}switch(a){case"input":Ji(i,l);break;case"textarea":cs(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?bt(i,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?bt(i,!!l.multiple,l.defaultValue,!0):bt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Fr]=l}catch(w){U(e,e.return,w)}}break;case 6:if(ze(t,e),Me(e),n&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){U(e,e.return,w)}}break;case 3:if(ze(t,e),Me(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(w){U(e,e.return,w)}break;case 4:ze(t,e),Me(e);break;case 13:ze(t,e),Me(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Po=V())),n&4&&ja(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(re=(c=re)||g,ze(t,e),re=c):ze(t,e),Me(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(x=e,g=e.child;g!==null;){for(m=x=g;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:Cr(4,p,p.return);break;case 1:Ut(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){U(n,r,w)}}break;case 5:Ut(p,p.return);break;case 22:if(p.memoizedState!==null){Aa(m);continue}}y!==null?(y.return=p,x=y):Aa(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ps("display",o))}catch(w){U(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){U(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(t,e),Me(e),n&4&&ja(e);break;case 21:break;default:ze(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fu(r)){var n=r;break e}r=r.return}throw Error(v(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Lr(i,""),n.flags&=-33);var l=Ma(e);Ml(e,l,i);break;case 3:case 4:var o=n.stateNode.containerInfo,a=Ma(e);Nl(e,a,o);break;default:throw Error(v(161))}}catch(s){U(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,r){x=e,Hu(e)}function Hu(e,t,r){for(var n=(e.mode&1)!==0;x!==null;){var i=x,l=i.child;if(i.tag===22&&n){var o=i.memoizedState!==null||gn;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||re;a=gn;var c=re;if(gn=o,(re=s)&&!c)for(x=i;x!==null;)o=x,s=o.child,o.tag===22&&o.memoizedState!==null?Ra(i):s!==null?(s.return=o,x=s):Ra(i);for(;l!==null;)x=l,Hu(l),l=l.sibling;x=i,gn=a,re=c}Ba(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,x=l):Ba(e)}}function Ba(e){for(;x!==null;){var t=x;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:re||ui(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!re)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Te(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ka(t,l,n);break;case 3:var o=t.updateQueue;if(o!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ka(t,o,r)}break;case 5:var a=t.stateNode;if(r===null&&t.flags&4){r=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&jr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||t.flags&512&&Dl(t)}catch(p){U(t,t.return,p)}}if(t===e){x=null;break}if(r=t.sibling,r!==null){r.return=t.return,x=r;break}x=t.return}}function Aa(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var r=t.sibling;if(r!==null){r.return=t.return,x=r;break}x=t.return}}function Ra(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ui(4,t)}catch(s){U(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(s){U(t,i,s)}}var l=t.return;try{Dl(t)}catch(s){U(t,l,s)}break;case 5:var o=t.return;try{Dl(t)}catch(s){U(t,o,s)}}}catch(s){U(t,t.return,s)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var mf=Math.ceil,Kn=Qe.ReactCurrentDispatcher,So=Qe.ReactCurrentOwner,Se=Qe.ReactCurrentBatchConfig,D=0,X=null,W=null,J=0,pe=0,Ht=ft(0),Q=0,Wr=null,zt=0,ci=0,Eo=0,zr=null,se=null,Po=0,tr=1/0,Oe=null,Xn=!1,jl=null,ot=null,hn=!1,et=null,qn=0,Tr=0,Bl=null,Tn=-1,_n=0;function le(){return D&6?V():Tn!==-1?Tn:Tn=V()}function at(e){return e.mode&1?D&2&&J!==0?J&-J:Xd.transition!==null?(_n===0&&(_n=zs()),_n):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e):1}function De(e,t,r,n){if(50<Tr)throw Tr=0,Bl=null,Error(v(185));Yr(e,r,n),(!(D&2)||e!==X)&&(e===X&&(!(D&2)&&(ci|=r),Q===4&&Je(e,J)),fe(e,n),r===1&&D===0&&!(t.mode&1)&&(tr=V()+500,oi&&pt()))}function fe(e,t){var r=e.callbackNode;Xc(e,t);var n=jn(e,e===X?J:0);if(n===0)r!==null&&Go(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Go(r),t===1)e.tag===0?Kd(Oa.bind(null,e)):Js(Oa.bind(null,e)),Wd(function(){!(D&6)&&pt()}),r=null;else{switch(Ts(n)){case 1:r=Kl;break;case 4:r=Ps;break;case 16:r=Mn;break;case 536870912:r=Cs;break;default:r=Mn}r=Xu(r,bu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function bu(e,t){if(Tn=-1,_n=0,D&6)throw Error(v(327));var r=e.callbackNode;if(Yt()&&e.callbackNode!==r)return null;var n=jn(e,e===X?J:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Jn(e,n);else{t=n;var i=D;D|=2;var l=Wu();(X!==e||J!==t)&&(Oe=null,tr=V()+500,xt(e,t));do try{vf();break}catch(a){Vu(e,a)}while(!0);so(),Kn.current=l,D=i,W!==null?t=0:(X=null,J=0,t=Q)}if(t!==0){if(t===2&&(i=sl(e),i!==0&&(n=i,t=Al(e,i))),t===1)throw r=Wr,xt(e,0),Je(e,n),fe(e,V()),r;if(t===6)Je(e,n);else{if(i=e.current.alternate,!(n&30)&&!gf(i)&&(t=Jn(e,n),t===2&&(l=sl(e),l!==0&&(n=l,t=Al(e,l))),t===1))throw r=Wr,xt(e,0),Je(e,n),fe(e,V()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(v(345));case 2:vt(e,se,Oe);break;case 3:if(Je(e,n),(n&130023424)===n&&(t=Po+500-V(),10<t)){if(jn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hl(vt.bind(null,e,se,Oe),t);break}vt(e,se,Oe);break;case 4:if(Je(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var o=31-Le(n);l=1<<o,o=t[o],o>i&&(i=o),n&=~l}if(n=i,n=V()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*mf(n/1960))-n,10<n){e.timeoutHandle=hl(vt.bind(null,e,se,Oe),n);break}vt(e,se,Oe);break;case 5:vt(e,se,Oe);break;default:throw Error(v(329))}}}return fe(e,V()),e.callbackNode===r?bu.bind(null,e):null}function Al(e,t){var r=zr;return e.current.memoizedState.isDehydrated&&(xt(e,t).flags|=256),e=Jn(e,t),e!==2&&(t=se,se=r,t!==null&&Rl(t)),e}function Rl(e){se===null?se=e:se.push.apply(se,e)}function gf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],l=i.getSnapshot;i=i.value;try{if(!Ne(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Je(e,t){for(t&=~Eo,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Le(t),n=1<<r;e[r]=-1,t&=~n}}function Oa(e){if(D&6)throw Error(v(327));Yt();var t=jn(e,0);if(!(t&1))return fe(e,V()),null;var r=Jn(e,t);if(e.tag!==0&&r===2){var n=sl(e);n!==0&&(t=n,r=Al(e,n))}if(r===1)throw r=Wr,xt(e,0),Je(e,t),fe(e,V()),r;if(r===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,se,Oe),fe(e,V()),null}function Co(e,t){var r=D;D|=1;try{return e(t)}finally{D=r,D===0&&(tr=V()+500,oi&&pt())}}function Tt(e){et!==null&&et.tag===0&&!(D&6)&&Yt();var t=D;D|=1;var r=Se.transition,n=N;try{if(Se.transition=null,N=1,e)return e()}finally{N=n,Se.transition=r,D=t,!(D&6)&&pt()}}function zo(){pe=Ht.current,B(Ht)}function xt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vd(r)),W!==null)for(r=W.return;r!==null;){var n=r;switch(lo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fn();break;case 3:Zt(),B(ce),B(ne),go();break;case 5:mo(n);break;case 4:Zt();break;case 13:B(O);break;case 19:B(O);break;case 10:uo(n.type._context);break;case 22:case 23:zo()}r=r.return}if(X=e,W=e=st(e.current,null),J=pe=t,Q=0,Wr=null,Eo=ci=zt=0,se=zr=null,kt!==null){for(t=0;t<kt.length;t++)if(r=kt[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,l=r.pending;if(l!==null){var o=l.next;l.next=i,n.next=o}r.pending=n}kt=null}return e}function Vu(e,t){do{var r=W;try{if(so(),Pn.current=Yn,Qn){for(var n=F.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Qn=!1}if(Ct=0,K=G=F=null,Pr=!1,Hr=0,So.current=null,r===null||r.return===null){Q=1,Wr=t,W=null;break}e:{var l=e,o=r.return,a=r,s=t;if(t=J,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Ca(o);if(y!==null){y.flags&=-257,za(y,o,a,l,t),y.mode&1&&Pa(l,c,t),t=y,s=c;var k=t.updateQueue;if(k===null){var w=new Set;w.add(s),t.updateQueue=w}else k.add(s);break e}else{if(!(t&1)){Pa(l,c,t),To();break e}s=Error(v(426))}}else if(R&&a.mode&1){var A=Ca(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),za(A,o,a,l,t),oo(er(s,a));break e}}l=s=er(s,a),Q!==4&&(Q=2),zr===null?zr=[l]:zr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Tu(l,s,t);ya(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ot===null||!ot.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var h=_u(l,a,t);ya(l,h);break e}}l=l.return}while(l!==null)}Qu(r)}catch(S){t=S,W===r&&r!==null&&(W=r=r.return);continue}break}while(!0)}function Wu(){var e=Kn.current;return Kn.current=Yn,e===null?Yn:e}function To(){(Q===0||Q===3||Q===2)&&(Q=4),X===null||!(zt&268435455)&&!(ci&268435455)||Je(X,J)}function Jn(e,t){var r=D;D|=2;var n=Wu();(X!==e||J!==t)&&(Oe=null,xt(e,t));do try{hf();break}catch(i){Vu(e,i)}while(!0);if(so(),D=r,Kn.current=n,W!==null)throw Error(v(261));return X=null,J=0,Q}function hf(){for(;W!==null;)Gu(W)}function vf(){for(;W!==null&&!Uc();)Gu(W)}function Gu(e){var t=Ku(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Qu(e):W=t,So.current=null}function Qu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=cf(r,t),r!==null){r.flags&=32767,W=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,W=null;return}}else if(r=uf(r,t,pe),r!==null){W=r;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Q===0&&(Q=5)}function vt(e,t,r){var n=N,i=Se.transition;try{Se.transition=null,N=1,yf(e,t,r,n)}finally{Se.transition=i,N=n}return null}function yf(e,t,r,n){do Yt();while(et!==null);if(D&6)throw Error(v(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(qc(e,l),e===X&&(W=X=null,J=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||hn||(hn=!0,Xu(Mn,function(){return Yt(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Se.transition,Se.transition=null;var o=N;N=1;var a=D;D|=4,So.current=null,ff(e,r),Uu(r,e),Rd(ml),Bn=!!pl,ml=pl=null,e.current=r,pf(r),Hc(),D=a,N=o,Se.transition=l}else e.current=r;if(hn&&(hn=!1,et=e,qn=i),l=e.pendingLanes,l===0&&(ot=null),Wc(r.stateNode),fe(e,V()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Xn)throw Xn=!1,e=jl,jl=null,e;return qn&1&&e.tag!==0&&Yt(),l=e.pendingLanes,l&1?e===Bl?Tr++:(Tr=0,Bl=e):Tr=0,pt(),null}function Yt(){if(et!==null){var e=Ts(qn),t=Se.transition,r=N;try{if(Se.transition=null,N=16>e?16:e,et===null)var n=!1;else{if(e=et,et=null,qn=0,D&6)throw Error(v(331));var i=D;for(D|=4,x=e.current;x!==null;){var l=x,o=l.child;if(x.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(x=c;x!==null;){var g=x;switch(g.tag){case 0:case 11:case 15:Cr(8,g,l)}var m=g.child;if(m!==null)m.return=g,x=m;else for(;x!==null;){g=x;var p=g.sibling,y=g.return;if(Ou(g),g===c){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}x=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,x=o;else e:for(;x!==null;){if(l=x,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Cr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,x=d;break e}x=l.return}}var u=e.current;for(x=u;x!==null;){o=x;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,x=f;else e:for(o=u;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ui(9,a)}}catch(S){U(a,a.return,S)}if(a===o){x=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,x=h;break e}x=a.return}}if(D=i,pt(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ti,e)}catch{}n=!0}return n}finally{N=r,Se.transition=t}}return!1}function Fa(e,t,r){t=er(r,t),t=Tu(e,t,1),e=lt(e,t,1),t=le(),e!==null&&(Yr(e,1,t),fe(e,t))}function U(e,t,r){if(e.tag===3)Fa(e,e,r);else for(;t!==null;){if(t.tag===3){Fa(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ot===null||!ot.has(n))){e=er(r,e),e=_u(t,e,1),t=lt(t,e,1),e=le(),t!==null&&(Yr(t,1,e),fe(t,e));break}}t=t.return}}function kf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=le(),e.pingedLanes|=e.suspendedLanes&r,X===e&&(J&r)===r&&(Q===4||Q===3&&(J&130023424)===J&&500>V()-Po?xt(e,0):Eo|=r),fe(e,t)}function Yu(e,t){t===0&&(e.mode&1?(t=on,on<<=1,!(on&130023424)&&(on=4194304)):t=1);var r=le();e=We(e,t),e!==null&&(Yr(e,t,r),fe(e,r))}function wf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Yu(e,r)}function xf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(v(314))}n!==null&&n.delete(t),Yu(e,r)}var Ku;Ku=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ue=!1,sf(e,t,r);ue=!!(e.flags&131072)}else ue=!1,R&&t.flags&1048576&&Zs(t,Hn,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;zn(e,t),e=t.pendingProps;var i=Xt(t,ne.current);Qt(t,r),i=vo(null,t,n,e,i,r);var l=yo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,de(n)?(l=!0,$n(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fo(t),i.updater=si,t.stateNode=i,i._reactInternals=t,El(t,n,e,r),t=zl(null,t,n,!0,l,r)):(t.tag=0,R&&l&&io(t),ie(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(zn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Ef(n),e=Te(n,e),i){case 0:t=Cl(null,t,n,e,r);break e;case 1:t=Ia(null,t,n,e,r);break e;case 11:t=Ta(null,t,n,e,r);break e;case 14:t=_a(null,t,n,Te(n.type,e),r);break e}throw Error(v(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Cl(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Ia(e,t,n,i,r);case 3:e:{if(Nu(t),e===null)throw Error(v(387));n=t.pendingProps,l=t.memoizedState,i=l.element,lu(e,t),Wn(t,n,null,r);var o=t.memoizedState;if(n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=er(Error(v(423)),t),t=La(e,t,n,r,i);break e}else if(n!==i){i=er(Error(v(424)),t),t=La(e,t,n,r,i);break e}else for(me=it(t.stateNode.containerInfo.firstChild),ge=t,R=!0,Ie=null,r=nu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qt(),n===i){t=Ge(e,t,r);break e}ie(e,t,n,r)}t=t.child}return t;case 5:return ou(t),e===null&&wl(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,gl(n,i)?o=null:l!==null&&gl(n,l)&&(t.flags|=32),Du(e,t),ie(e,t,o,r),t.child;case 6:return e===null&&wl(t),null;case 13:return Mu(e,t,r);case 4:return po(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Jt(t,null,n,r):ie(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),Ta(e,t,n,i,r);case 7:return ie(e,t,t.pendingProps,r),t.child;case 8:return ie(e,t,t.pendingProps.children,r),t.child;case 12:return ie(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,M(bn,n._currentValue),n._currentValue=o,l!==null)if(Ne(l.value,o)){if(l.children===i.children&&!ce.current){t=Ge(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===n){if(l.tag===1){s=He(-1,r&-r),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),xl(l.return,r,t),a.lanes|=r;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(v(341));o.lanes|=r,a=o.alternate,a!==null&&(a.lanes|=r),xl(o,r,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ie(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Qt(t,r),i=Ee(i),n=n(i),t.flags|=1,ie(e,t,n,r),t.child;case 14:return n=t.type,i=Te(n,t.pendingProps),i=Te(n.type,i),_a(e,t,n,i,r);case 15:return Iu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Te(n,i),zn(e,t),t.tag=1,de(n)?(e=!0,$n(t)):e=!1,Qt(t,r),zu(t,n,i),El(t,n,i,r),zl(null,t,n,!0,e,r);case 19:return ju(e,t,r);case 22:return Lu(e,t,r)}throw Error(v(156,t.tag))};function Xu(e,t){return Es(e,t)}function Sf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,r,n){return new Sf(e,t,r,n)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Ql)return 14}return 2}function st(e,t){var r=e.alternate;return r===null?(r=xe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function In(e,t,r,n,i,l){var o=2;if(n=e,typeof e=="function")_o(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Nt:return St(r.children,i,l,t);case Wl:o=8,i|=8;break;case Qi:return e=xe(12,r,t,i|2),e.elementType=Qi,e.lanes=l,e;case Yi:return e=xe(13,r,t,i),e.elementType=Yi,e.lanes=l,e;case Ki:return e=xe(19,r,t,i),e.elementType=Ki,e.lanes=l,e;case os:return di(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:o=10;break e;case ls:o=9;break e;case Gl:o=11;break e;case Ql:o=14;break e;case Ke:o=16,n=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return t=xe(o,r,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function St(e,t,r,n){return e=xe(7,e,n,t),e.lanes=r,e}function di(e,t,r,n){return e=xe(22,e,n,t),e.elementType=os,e.lanes=r,e.stateNode={isHidden:!1},e}function bi(e,t,r){return e=xe(6,e,null,t),e.lanes=r,e}function Vi(e,t,r){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pf(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Io(e,t,r,n,i,l,o,a,s){return e=new Pf(e,t,r,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(l),e}function Cf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function qu(e){if(!e)return ct;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(v(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(de(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(v(171))}if(e.tag===1){var r=e.type;if(de(r))return qs(e,r,t)}return t}function Ju(e,t,r,n,i,l,o,a,s){return e=Io(r,n,!0,e,i,l,o,a,s),e.context=qu(null),r=e.current,n=le(),i=at(r),l=He(n,i),l.callback=t??null,lt(r,l,i),e.current.lanes=i,Yr(e,i,n),fe(e,n),e}function fi(e,t,r,n){var i=t.current,l=le(),o=at(i);return r=qu(r),t.context===null?t.context=r:t.pendingContext=r,t=He(l,o),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=lt(i,t,o),e!==null&&(De(e,i,o,l),En(e,i,o)),o}function Zn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Lo(e,t){$a(e,t),(e=e.alternate)&&$a(e,t)}function zf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}pi.prototype.render=Do.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(v(409));fi(e,t,null,null)};pi.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){fi(null,e,null,null)}),t[Ve]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ls();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qe.length&&t!==0&&t<qe[r].priority;r++);qe.splice(r,0,e),r===0&&Ns(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ua(){}function Tf(e,t,r,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var c=Zn(o);l.call(c)}}var o=Ju(t,n,e,0,null,!1,!1,"",Ua);return e._reactRootContainer=o,e[Ve]=o.current,Rr(e.nodeType===8?e.parentNode:e),Tt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var a=n;n=function(){var c=Zn(s);a.call(c)}}var s=Io(e,0,!1,null,null,!1,!1,"",Ua);return e._reactRootContainer=s,e[Ve]=s.current,Rr(e.nodeType===8?e.parentNode:e),Tt(function(){fi(t,s,r,n)}),s}function gi(e,t,r,n,i){var l=r._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Zn(o);a.call(s)}}fi(t,o,e,i)}else o=Tf(r,t,e,i,n);return Zn(o)}_s=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vr(t.pendingLanes);r!==0&&(Xl(t,r|1),fe(t,V()),!(D&6)&&(tr=V()+500,pt()))}break;case 13:Tt(function(){var n=We(e,1);if(n!==null){var i=le();De(n,e,1,i)}}),Lo(e,1)}};ql=function(e){if(e.tag===13){var t=We(e,134217728);if(t!==null){var r=le();De(t,e,134217728,r)}Lo(e,134217728)}};Is=function(e){if(e.tag===13){var t=at(e),r=We(e,t);if(r!==null){var n=le();De(r,e,t,n)}Lo(e,t)}};Ls=function(){return N};Ds=function(e,t){var r=N;try{return N=e,t()}finally{N=r}};ll=function(e,t,r){switch(t){case"input":if(Ji(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=li(n);if(!i)throw Error(v(90));ss(n),Ji(n,i)}}}break;case"textarea":cs(e,r);break;case"select":t=r.value,t!=null&&bt(e,!!r.multiple,t,!1)}};vs=Co;ys=Tt;var _f={usingClientEntryPoint:!1,Events:[Xr,At,li,gs,hs,Co]},mr={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:mr.bundleType,version:mr.version,rendererPackageName:mr.rendererPackageName,rendererConfig:mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:mr.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vn.isDisabled&&vn.supportsFiber)try{ti=vn.inject(If),Ae=vn}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ve.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(v(200));return Cf(e,t,null,r)};ve.createRoot=function(e,t){if(!No(e))throw Error(v(299));var r=!1,n="",i=Zu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Io(e,1,!1,null,null,r,!1,n,i),e[Ve]=t.current,Rr(e.nodeType===8?e.parentNode:e),new Do(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=xs(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Tt(e)};ve.hydrate=function(e,t,r){if(!mi(t))throw Error(v(200));return gi(null,e,t,!0,r)};ve.hydrateRoot=function(e,t,r){if(!No(e))throw Error(v(405));var n=r!=null&&r.hydratedSources||null,i=!1,l="",o=Zu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),t=Ju(t,null,e,1,r??null,i,!1,l,o),e[Ve]=t.current,Rr(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new pi(t)};ve.render=function(e,t,r){if(!mi(t))throw Error(v(200));return gi(null,e,t,!1,r)};ve.unmountComponentAtNode=function(e){if(!mi(e))throw Error(v(40));return e._reactRootContainer?(Tt(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};ve.unstable_batchedUpdates=Co;ve.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!mi(r))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gi(e,t,r,!1,n)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=ve;var Lf=es.exports,Ha=Lf;Wi.createRoot=Ha.createRoot,Wi.hydrateRoot=Ha.hydrateRoot;const Df=`\r
    <!-- Basket Icon -->\r
    <div class="basket-icon" onclick="toggleBasket()">\r
        🛒\r
        <div class="basket-count" id="basketCount" style="display: none;">0</div>\r
    </div>\r
\r
    <!-- Theme Selector - Collapsible -->\r
    <div class="theme-selector">\r
        <div class="theme-toggle" onclick="toggleThemePanel()" title="Choose Theme">\r
            🎨\r
        </div>\r
        <div class="theme-panel" id="themePanel">\r
            <h4>🎨 Choose Theme</h4>\r
            <div class="theme-options">\r
                <div class="theme-container">\r
                    <div class="theme-option theme-pink" data-theme="default" title="Pink Paradise"></div>\r
                    <div class="theme-label">👧 Girl</div>\r
                </div>\r
                <div class="theme-container">\r
                    <div class="theme-option theme-blue" data-theme="blue" title="Ocean Blue"></div>\r
                    <div class="theme-label">👦 Boy</div>\r
                </div>\r
                <div class="theme-container">\r
                    <div class="theme-option theme-purple active" data-theme="purple" title="Royal Purple"></div>\r
                    <div class="theme-label">💒 Wedding</div>\r
                </div>\r
                <div class="theme-container">\r
                    <div class="theme-option theme-green" data-theme="green" title="Nature Green"></div>\r
                    <div class="theme-label">🏢 Corporate</div>\r
                </div>\r
                <div class="theme-container">\r
                    <div class="theme-option theme-orange" data-theme="orange" title="Sunset Orange"></div>\r
                    <div class="theme-label">🤝 Get-together</div>\r
                </div>\r
                <div class="theme-container">\r
                    <div class="theme-option theme-yellow" data-theme="yellow" title="Sunshine Yellow"></div>\r
                    <div class="theme-label">☀️ Sunshine</div>\r
                </div>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Navigation -->\r
    <nav class="navbar">\r
        <div class="navbar-content">\r
            <a href="#home" class="navbar-brand">🎉 Peeka Boo</a>\r
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>\r
            <ul class="nav-links" id="navLinks">\r
                <li><a href="#home" id="nav-home">Home</a></li>\r
                <li><a href="#events" id="nav-events">Events</a></li>\r
                <li><a href="#birthday-details" id="nav-birthday">Birthday Services</a></li>\r
                <li><a href="#artists" id="nav-artists">Our Artists</a></li>\r
                <li><a href="#gallery" id="nav-gallery">Gallery</a></li>\r
                <li><a href="#contact" id="nav-contact">Contact</a></li>\r
            </ul>\r
        </div>\r
    </nav>\r
\r
    <!-- Main Content -->\r
    <main id="main-content">\r
        <!-- Home Page -->\r
        <div id="home-page" class="page">\r
            <!-- Hero Section -->\r
            <section class="hero-section">\r
                <div class="hero-content">\r
                    <h1>🎉 Welcome to Peeka Boo Events</h1>\r
                    <h2>"Let's Celebrate Moments that Matter"</h2>\r
                    <a href="#events" class="btn">✨ Explore Our Magical Events ✨</a>\r
                </div>\r
            </section>\r
\r
            <!-- About Section -->\r
            <section class="section">\r
                <div class="container">\r
                    <div class="grid grid-2">\r
                        <div>\r
                            <h2>🌟 About Ajit & Peeka Boo</h2>\r
                            <p style="font-size: 1.2rem; margin-bottom: 1.5rem; color: #555; line-height: 1.8;">\r
                                Welcome to our vibrant world of celebrations! Founded by Ajit, Peeka Boo is a passionate, \r
                                family-run Indian events company dedicated to creating magical moments that last a lifetime.\r
                            </p>\r
                            <p style="margin-bottom: 1.5rem; color: #666; line-height: 1.8;">\r
                                From intimate birthday parties to grand weddings, from joyful get-togethers to milestone anniversaries, \r
                                we bring the authentic spirit of Indian celebrations to every event. Our team understands that each \r
                                occasion is unique and deserves personalized attention.\r
                            </p>\r
                            <p style="color: #666; line-height: 1.8;">\r
                                With years of experience and a deep love for bringing people together, we specialize in creating \r
                                unforgettable experiences filled with color, music, joy, and the warmth of Indian hospitality.\r
                            </p>\r
                        </div>\r
                        <div class="card" style="background: var(--card-gradient);">\r
                            <h3 style="color: var(--primary-dark); text-align: center; margin-bottom: 2rem;">🌟 Why Choose Peeka Boo?</h3>\r
                            <div>\r
                                <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <span style="font-size: 2rem; margin-right: 1rem;">🎨</span>\r
                                    <span style="font-weight: 600; color: #555;">Creative & Colorful Decorations</span>\r
                                </div>\r
                                <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <span style="font-size: 2rem; margin-right: 1rem;">👨‍👩‍👧‍👦</span>\r
                                    <span style="font-weight: 600; color: #555;">Family-Run with Personal Touch</span>\r
                                </div>\r
                                <div style="display: flex; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <span style="font-size: 2rem; margin-right: 1rem;">🎵</span>\r
                                    <span style="font-weight: 600; color: #555;">Traditional & Modern Entertainment</span>\r
                                </div>\r
                                <div style="display: flex; align-items: center; padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <span style="font-size: 2rem; margin-right: 1rem;">💝</span>\r
                                    <span style="font-weight: 600; color: #555;">End-to-End Event Management</span>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- Events Page -->\r
        <div id="events-page" class="page hidden">\r
            <section class="section">\r
                <div class="container">\r
                    <h1 class="text-center" style="font-size: 3rem; margin-bottom: 3rem;">🎊 Our Magical Event Services</h1>\r
                    \r
                    <div class="grid grid-2" style="margin-top: 2rem;">\r
                        <div class="card event-card" style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);">\r
                            <div class="big-emoji" style="margin-bottom: 1.5rem;">🎂</div>\r
                            <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Birthday Parties</h3>\r
                            <p style="line-height: 1.8; margin-bottom: 2rem;">Magical celebrations for all ages with decorations, entertainment, and unforgettable memories!</p>\r
                            <a href="#birthday-details" class="btn" style="background: rgba(255,255,255,0.2);">\r
                                🎁 View Birthday Services\r
                            </a>\r
                        </div>\r
                        \r
                        <div class="card event-card" style="background: linear-gradient(135deg, var(--success-color) 0%, #228B22 100%);">\r
                            <div class="big-emoji" style="margin-bottom: 1.5rem;">🤝</div>\r
                            <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Get-togethers</h3>\r
                            <p style="line-height: 1.8;">Warm and welcoming gatherings that bring family and friends closer together!</p>\r
                        </div>\r
                        \r
                        <div class="card event-card" style="background: linear-gradient(135deg, var(--accent-color) 0%, #FFA500 100%);">\r
                            <div class="big-emoji" style="margin-bottom: 1.5rem;">💕</div>\r
                            <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Anniversaries</h3>\r
                            <p style="line-height: 1.8;">Romantic and elegant celebrations of love and milestone moments!</p>\r
                        </div>\r
                        \r
                        <div class="card event-card" style="background: linear-gradient(135deg, var(--secondary-color) 0%, #8A2BE2 100%);">\r
                            <div class="big-emoji" style="margin-bottom: 1.5rem;">👰</div>\r
                            <h3 style="margin-bottom: 1.5rem; font-size: 1.5rem;">Weddings</h3>\r
                            <p style="line-height: 1.8;">Grand celebrations with traditional Indian customs and modern elegance!</p>\r
                        </div>\r
                    </div>\r
\r
                    <div class="text-center" style="margin-top: 3rem;">\r
                        <h3 style="font-size: 2rem; margin-bottom: 2rem;">🌟 Ready to Plan Your Perfect Event? 🌟</h3>\r
                        <a href="#contact" class="btn" style="font-size: 1.2rem; padding: 18px 36px;">\r
                            🎊 Get in Touch Today! 🎊\r
                        </a>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- Birthday Details Page -->\r
        <div id="birthday-details-page" class="page hidden birthday-theme">\r
            <section class="section">\r
                <div class="container">\r
                    <h1 class="text-center birthday-primary" style="font-size: 3rem; margin-bottom: 2rem;">🎂 Birthday Party Services</h1>\r
                    <p class="text-center" style="font-size: 1.2rem; color: #666; margin-bottom: 3rem;">\r
                        Complete birthday celebration packages to make your special day absolutely unforgettable! ✨\r
                    </p>\r
                    \r
                    <div class="grid grid-3">\r
                        <div class="birthday-card birthday-service" onclick="showPackages('decoration')">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎨</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">1. Decoration</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Beautiful themed decorations tailored to your preferences with vibrant colors and festive elements</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service" onclick="showPackages('dj')">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎵</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">2. D.J with lights</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Professional DJ services with stunning light displays that create an amazing party atmosphere</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service" onclick="showPackages('games')">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji rotating-game-images" style="color: white; font-size: 2rem;">🎯</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">3. Game stalls</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Fun and engaging game stations for all ages that keep everyone entertained</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎪</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">4. Activities</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Interactive activities designed to keep everyone engaged and create memorable moments</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎤</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">5. Anchor</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Professional host to guide your event smoothly and keep the energy high</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎩</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">6. Magic show</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Mesmerizing magic performances that amaze all ages and create wonder-filled moments</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🫧</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">7. Bubble show</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Enchanting bubble displays that create magical moments and delight children and adults</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎭</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">8. Puppet Show</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Delightful puppet performances with engaging stories that captivate young audiences</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">❄️</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">9. Special entry with dry ice</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Dramatic entrance with mesmerizing dry ice effects that make the birthday star feel special</p>\r
                        </div>\r
                        \r
                        <div class="birthday-card birthday-service">\r
                            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">\r
                                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); border-radius: 15px; padding: 8px; margin-right: 1.5rem; box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);">\r
                                    <span class="service-emoji" style="color: white; font-size: 2rem;">🎁</span>\r
                                </div>\r
                                <h4 style="font-size: 1.3rem; font-weight: 700; color: var(--primary-dark); text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.2);">10. Return gifts</h4>\r
                            </div>\r
                            <p style="color: #444; line-height: 1.6; font-weight: 500; padding-left: 10px; border-left: 3px solid rgba(255, 105, 180, 0.3); background: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 15px; margin-top: 10px;">Thoughtfully curated return gifts that guests will treasure as beautiful memories</p>\r
                        </div> \r
                    </div>\r
\r
                    <div class="text-center" style="margin-top: 3rem;">\r
                        <div class="card" style="background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%); color: white; padding: 2.5rem;">\r
                            <h3 style="color: white; font-size: 2rem; margin-bottom: 1.5rem;">🌟 Complete Birthday Packages Available</h3>\r
                            <p style="margin: 1.5rem 0; line-height: 1.8; font-size: 1.1rem; color: white;">\r
                                Mix and match services or choose our complete packages for a stress-free celebration. \r
                                Every birthday deserves to be special! ✨\r
                            </p>\r
                            <a href="#contact" class="btn" style="background: rgba(255,255,255,0.2); color: white;">\r
                                🎂 Plan Your Birthday Party Now! 🎂\r
                            </a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- Artists Page -->\r
        <div id="artists-page" class="page hidden">\r
            <section class="section">\r
                <div class="container">\r
                    <h1 class="text-center" style="font-size: 3rem; margin-bottom: 2rem;">🎭 Meet Our Talented Artists</h1>\r
                    <p class="text-center" style="font-size: 1.2rem; color: #666; margin-bottom: 3rem;">\r
                        Our amazing team of performers who bring magic and joy to every celebration! ✨\r
                    </p>\r
                    \r
                    <div class="grid grid-3">\r
                        <div class="card artist-card">\r
                            <div class="artist-image">🎩</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Rajesh the Magician</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Master of illusion with 10+ years of experience. Specializes in close-up magic, \r
                                stage performances, and interactive shows that leave audiences spellbound.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Card Magic • Mind Reading • Stage Illusions • Kids Magic\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card artist-card">\r
                            <div class="artist-image">🎭</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Priya the Puppeteer</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Creative storyteller who brings puppets to life! Expert in traditional hand puppets, \r
                                marionettes, and interactive puppet shows for children.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Hand Puppets • Story Telling • Character Voices • Educational Shows\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card artist-card">\r
                            <div class="artist-image">🎤</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Arjun the Anchor</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Energetic host and MC who keeps the party alive! Expert in crowd engagement, \r
                                games coordination, and maintaining high energy throughout events.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Event Hosting • Games & Activities • Crowd Interaction • Bilingual MC\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card artist-card">\r
                            <div class="artist-image">🫧</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Kavya the Bubble Artist</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Creates magical bubble experiences that mesmerize all ages. Specializes in giant bubbles, \r
                                bubble art, and interactive bubble workshops.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Giant Bubbles • Bubble Art • Workshops • Interactive Shows\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card artist-card">\r
                            <div class="artist-image">🎨</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Meera the Face Painter</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Artistic face painter who transforms faces into beautiful works of art. Expert in \r
                                themed designs, glitter art, and child-friendly quick designs.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Face Painting • Glitter Art • Themed Designs • Body Art\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card artist-card">\r
                            <div class="artist-image">🎪</div>\r
                            <h3 style="color: var(--primary-dark); margin-bottom: 1rem;">Team Peeka Boo</h3>\r
                            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">\r
                                Our amazing support team of decorators, coordinators, and activity specialists \r
                                who work behind the scenes to make every event perfect.\r
                            </p>\r
                            <div style="background: rgba(0,0,0,0.05); padding: 1rem; border-radius: 10px;">\r
                                <strong style="color: var(--primary-dark);">Specialties:</strong>\r
                                <br>• Event Coordination • Decoration Setup • Activity Management • Guest Care\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="text-center" style="margin-top: 3rem;">\r
                        <div class="card" style="background: var(--card-gradient); padding: 2.5rem; border: 3px solid var(--primary-color);">\r
                            <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 1.5rem;">🌟 Book Our Artists for Your Event</h3>\r
                            <p style="margin: 1.5rem 0; color: #666; line-height: 1.8; font-size: 1.1rem;">\r
                                Each of our artists brings years of experience and genuine passion for entertainment. \r
                                Mix and match performers or book complete packages for unforgettable celebrations! 🎊\r
                            </p>\r
                            <a href="#contact" class="btn">\r
                                🎭 Book Our Artists Now! 🎭\r
                            </a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- Gallery Page -->\r
        <div id="gallery-page" class="page hidden">\r
            <section class="section">\r
                <div class="container">\r
                    <h1 class="text-center" style="font-size: 3rem; margin-bottom: 2rem;">📸 Our Event Gallery</h1>\r
                    <p class="text-center" style="font-size: 1.2rem; color: #666; margin-bottom: 3rem;">\r
                        Capturing the joy and magic of our celebrations ✨\r
                    </p>\r
                    \r
                    <div class="grid grid-3">\r
                        <div class="card gallery-item">\r
                            <video \r
                                autoplay \r
                                muted \r
                                loop \r
                                preload="metadata"\r
                                style="width: 100%; height: 250px; border-radius: 20px 20px 0 0;"\r
                            >\r
                                <source src="/media/Ajit HB1.mp4" type="video/mp4">\r
                                <div style="width: 100%; height: 250px; background: linear-gradient(135deg, var(--success-color), #228B22); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; flex-direction: column; gap: 10px;">\r
                                    <div style="font-size: 2rem;">🎬</div>\r
                                    <div>Video Loading...</div>\r
                                </div>\r
                            </video>\r
                            <div style="padding: 1.5rem;">\r
                                <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">🎬 Birthday Party</h4>\r
                                <p style="color: #666; font-size: 0.9rem;">Birthday celebration highlights with Ajit - Full of joy and magical moments! 🎉</p>\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card gallery-item">\r
                            <video \r
                                autoplay \r
                                muted \r
                                loop \r
                                preload="metadata"\r
                                style="width: 100%; height: 250px; border-radius: 20px 20px 0 0;"\r
                            >\r
                                <source src="/media/Ajit HB2.mp4" type="video/mp4">\r
                                <div style="width: 100%; height: 250px; background: linear-gradient(135deg, var(--success-color), #228B22); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; flex-direction: column; gap: 10px;">\r
                                    <div style="font-size: 2rem;">🎬</div>\r
                                    <div>Video Loading...</div>\r
                                </div>\r
                            </video>\r
                            <div style="padding: 1.5rem;">\r
                                <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">🎬 Ajit HB2.mp4</h4>\r
                                <p style="color: #666; font-size: 0.9rem;">More birthday celebration moments filled with laughter and happiness! 🎊</p>\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card gallery-item">\r
                            <img \r
                                src="/media/Ajit Image1.jpeg" \r
                                alt="Ajit - Founder of Peeka Boo Events"\r
                                style="width: 100%; height: 250px; object-fit: cover; border-radius: 20px 20px 0 0;"\r
                                onerror="this.style.background='linear-gradient(135deg, var(--accent-color), #FFA500)'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.color='white'; this.style.fontWeight='bold'; this.style.flexDirection='column'; this.style.gap='10px'; this.innerHTML='<div style=\\'font-size: 2rem;\\'>🎊</div><div>Image Loading...</div>';"\r
                            >\r
                            <div style="padding: 1.5rem;">\r
                                <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">📸 Ajit - Our Founder</h4>\r
                                <p style="color: #666; font-size: 0.9rem;">Meet Ajit, the passionate founder of Peeka Boo Events - Creating magical celebrations! 🎨</p>\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card gallery-item">\r
                            <img \r
                                src="/media/Ajit Image2.jpeg" \r
                                alt="Peeka Boo Event Setup"\r
                                style="width: 100%; height: 250px; object-fit: cover; border-radius: 20px 20px 0 0;"\r
                                onerror="this.style.background='linear-gradient(135deg, var(--secondary-color), #8A2BE2)'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.color='white'; this.style.fontWeight='bold'; this.style.flexDirection='column'; this.style.gap='10px'; this.innerHTML='<div style=\\'font-size: 2rem;\\'>🎊</div><div>Image Loading...</div>';"\r
                            >\r
                            <div style="padding: 1.5rem;">\r
                                <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">📸 Event Setup Magic</h4>\r
                                <p style="color: #666; font-size: 0.9rem;">Magical celebration setup and decorations that create unforgettable memories! ✨</p>\r
                            </div>\r
                        </div>\r
                        \r
                        <div class="card gallery-item">\r
                            <img \r
                                src="/media/Ajit Image3.jpeg" \r
                                alt="Peeka Boo Professional Event Management"\r
                                style="width: 100%; height: 250px; object-fit: cover; border-radius: 20px 20px 0 0;"\r
                                onerror="this.style.background='linear-gradient(135deg, var(--primary-color), var(--primary-dark))'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center'; this.style.color='white'; this.style.fontWeight='bold'; this.style.flexDirection='column'; this.style.gap='10px'; this.innerHTML='<div style=\\'font-size: 2rem;\\'>🎊</div><div>Image Loading...</div>';"\r
                            >\r
                            <div style="padding: 1.5rem;">\r
                                <h4 style="margin-bottom: 0.5rem; color: var(--primary-dark); font-weight: 700;">📸 Professional Management</h4>\r
                                <p style="color: #666; font-size: 0.9rem;">Professional event management in action - Creating joy and celebration! 🎉</p>\r
                            </div>\r
                        </div>\r
                    </div>\r
\r
                    <div class="text-center" style="margin-top: 3rem;">\r
                        <div class="card" style="background: var(--card-gradient); padding: 2.5rem;">\r
                            <h3 style="color: var(--primary-dark); font-size: 2rem; margin-bottom: 1.5rem;">📱 Share Your Magical Moments</h3>\r
                            <p style="margin: 1.5rem 0; color: #666; line-height: 1.8; font-size: 1.1rem;">\r
                                We love seeing the joy on our clients' faces! Share your event photos with us and \r
                                let's celebrate together. Tag us on social media to be featured in our gallery! 🌈\r
                            </p>\r
                            <a href="#contact" class="btn">\r
                                🎊 Get Your Event Featured! 🎊\r
                            </a>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
\r
        <!-- Contact Page -->\r
        <div id="contact-page" class="page hidden">\r
            <section class="section">\r
                <div class="container">\r
                    <h1 class="text-center" style="font-size: 3rem; margin-bottom: 2rem;">📞 Get in Touch</h1>\r
                    <p class="text-center" style="font-size: 1.2rem; color: #666; margin-bottom: 3rem;">\r
                        Ready to plan your perfect celebration? Let's make it happen together! ✨\r
                    </p>\r
                    \r
                    <div class="grid grid-3">\r
                        <div class="card contact-card" style="padding: 2.5rem;">\r
                            <div class="big-emoji" style="margin-bottom: 1rem;">📱</div>\r
                            <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">Call Us</h3>\r
                            <p style="font-size: 1.3rem; margin: 1rem 0; font-weight: 600; color: #FFE4E1;">+91 98211 48631</p>\r
                            <p style="opacity: 0.9; margin-bottom: 1.5rem;">Available 9 AM - 9 PM</p>\r
                            <a \r
                                href="tel:+919821148631"\r
                                class="btn"\r
                                style="background: rgba(255,255,255,0.2); color: white;"\r
                            >\r
                                📞 Call Now\r
                            </a>\r
                        </div>\r
                        \r
                        <div class="card contact-card" style="padding: 2.5rem;">\r
                            <div class="big-emoji" style="margin-bottom: 1rem;">💬</div>\r
                            <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">WhatsApp</h3>\r
                            <p style="font-size: 1.3rem; margin: 1rem 0; font-weight: 600; color: #FFE4E1;">+91 98211 48631</p>\r
                            <p style="opacity: 0.9; margin-bottom: 1.5rem;">Quick responses guaranteed</p>\r
                            <a \r
                                href="https://wa.me/919821148631?text=Hi%20Peeka%20Boo!%20I%27d%20like%20to%20plan%20an%20event"\r
                                target="_blank"\r
                                class="btn"\r
                                style="background: rgba(255,255,255,0.2); color: white;"\r
                            >\r
                                💬 Chat on WhatsApp\r
                            </a>\r
                        </div>\r
                        \r
                        <div class="card contact-card" style="padding: 2.5rem;">\r
                            <div class="big-emoji" style="margin-bottom: 1rem;">✉️</div>\r
                            <h3 style="color: white; font-size: 1.5rem; margin-bottom: 1rem;">Email Us</h3>\r
                            <p style="font-size: 1.3rem; margin: 1rem 0; font-weight: 600; color: #FFE4E1;">hello@peekabooevents.com</p>\r
                            <p style="opacity: 0.9; margin-bottom: 1.5rem;">Detailed planning support</p>\r
                            <a \r
                                href="mailto:hello@peekabooevents.com?subject=Event%20Planning%20Inquiry"\r
                                class="btn"\r
                                style="background: rgba(255,255,255,0.2); color: white;"\r
                            >\r
                                ✉️ Send Email\r
                            </a>\r
                        </div>\r
                    </div>\r
\r
                    <div style="margin-top: 3rem;">\r
                        <div class="card" style="background: var(--card-gradient); padding: 2.5rem;">\r
                            <h3 class="text-center" style="color: var(--primary-dark); font-size: 2.2rem; margin-bottom: 1.5rem;">🎉 Let's Plan Something Amazing!</h3>\r
                            <p class="text-center" style="margin: 1.5rem 0; color: #666; line-height: 1.8; font-size: 1.1rem;">\r
                                Whether it's an intimate gathering or a grand celebration, Peeka Boo is here to make your \r
                                event dreams come true. Get in touch and let's start planning your perfect celebration! 🌟\r
                            </p>\r
                            \r
                            <div class="grid grid-4" style="margin-top: 2rem;">\r
                                <div class="text-center" style="padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎂</div>\r
                                    <p style="font-weight: 600; color: var(--primary-dark);">Birthday Parties</p>\r
                                </div>\r
                                <div class="text-center" style="padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👰</div>\r
                                    <p style="font-weight: 600; color: var(--primary-dark);">Weddings</p>\r
                                </div>\r
                                <div class="text-center" style="padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💕</div>\r
                                    <p style="font-weight: 600; color: var(--primary-dark);">Anniversaries</p>\r
                                </div>\r
                                <div class="text-center" style="padding: 1rem; background: rgba(255,255,255,0.5); border-radius: 15px;">\r
                                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤝</div>\r
                                    <p style="font-weight: 600; color: var(--primary-dark);">Get-togethers</p>\r
                                </div>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </div>\r
            </section>\r
        </div>\r
    </main>\r
\r
    <!-- Package Display Modal -->\r
    <div id="packageModal" class="package-modal">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h3 id="modalTitle" style="margin: 0; color: white;"></h3>\r
                <button class="modal-close" onclick="closePackageModal()">×</button>\r
            </div>\r
            <div id="modalContent" class="modal-body">\r
                <!-- Package content will be inserted here -->\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Basket Modal -->\r
    <div id="basketModal" class="basket-modal">\r
        <div class="basket-content">\r
            <div class="basket-header">\r
                <h3 style="margin: 0; color: white;">🛒 Your Order Basket</h3>\r
                <button class="modal-close" onclick="closeBasket()">×</button>\r
            </div>\r
            <div id="basketItems" style="min-height: 200px;">\r
                <div style="text-align: center; padding: 40px; color: #666;">\r
                    <div style="font-size: 3rem; margin-bottom: 15px;">🛒</div>\r
                    <p>Your basket is empty</p>\r
                    <p style="font-size: 0.9rem;">Add services to start building your perfect event!</p>\r
                </div>\r
            </div>\r
            <div class="basket-total" id="basketTotal" style="display: none;">\r
                <div class="total-amount" id="totalAmount">Total: ₹0</div>\r
                <button class="btn" onclick="sendToWhatsApp()" style="width: 100%; margin-top: 10px;">\r
                    💬 Send Order to WhatsApp\r
                </button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Footer -->\r
    <footer class="footer">\r
        <div class="container">\r
            <p style="font-size: 1rem;">© 2025 Peeka Boo Events. All rights reserved. | Bringing Joy to Every Celebration 🎊</p>\r
        </div>\r
    </footer>\r
\r
\r
\r
`,Nf=`const BASE_URL =\r
  typeof import.meta !== "undefined" &&\r
  import.meta.env &&\r
  typeof import.meta.env.BASE_URL === "string"\r
    ? import.meta.env.BASE_URL\r
    : "/";\r
\r
const NORMALIZED_BASE_URL =\r
  BASE_URL === "/" ? "" : BASE_URL.replace(/\\/+$/, "");\r
\r
const MEDIA_BASE_PATH = \`\${NORMALIZED_BASE_URL}/media/\`.replace(/\\/{2,}/g, "/");\r
\r
function resolveMediaUrl(path) {\r
  if (!path) {\r
    return path;\r
  }\r
  const relative = path.replace(/^\\/media\\//, "").replace(/^\\/+/, "");\r
  const encoded = relative\r
    .split("/")\r
    .map((segment) => encodeURIComponent(segment))\r
    .join("/");\r
  return \`\${MEDIA_BASE_PATH}\${encoded}\`.replace(/\\/{2,}/g, "/");\r
}\r
\r
function toMediaPath(path) {\r
  if (!path) {\r
    return path;\r
  }\r
  if (Array.isArray(path)) {\r
    return path.map(toMediaPath);\r
  }\r
  if (path.startsWith("/media/")) {\r
    return resolveMediaUrl(path);\r
  }\r
  const trimmed = path.replace(/^\\/+/, "");\r
  return resolveMediaUrl(trimmed);\r
}\r
\r
function mapMediaPaths(paths) {\r
  if (!paths) {\r
    return paths;\r
  }\r
  return paths.map(toMediaPath);\r
}\r
\r
function rewriteMediaReferences() {\r
  const attributeTargets = [\r
    ['[src^="/media/"]', 'src'],\r
    ['[data-src^="/media/"]', 'data-src'],\r
    ['[poster^="/media/"]', 'poster'],\r
    ['[href^="/media/"]', 'href'],\r
  ];\r
\r
  attributeTargets.forEach(([selector, attribute]) => {\r
    document.querySelectorAll(selector).forEach((element) => {\r
      const original = element.getAttribute(attribute);\r
      if (original) {\r
        element.setAttribute(attribute, resolveMediaUrl(original));\r
      }\r
    });\r
  });\r
\r
  document.querySelectorAll('[style*="/media/"]').forEach((element) => {\r
    const inlineStyle = element.getAttribute('style');\r
    if (inlineStyle && inlineStyle.includes('/media/')) {\r
      element.setAttribute(\r
        'style',\r
        inlineStyle.replace(/\\/media\\//g, MEDIA_BASE_PATH)\r
      );\r
    }\r
  });\r
\r
  const styleSheets = Array.from(document.styleSheets || []);\r
  styleSheets.forEach((sheet) => {\r
    if (sheet.href && !sheet.href.startsWith(window.location.origin)) {\r
      return;\r
    }\r
\r
    let rules;\r
    try {\r
      rules = sheet.cssRules;\r
    } catch (error) {\r
      console.warn('Unable to access stylesheet for media rewrite', error);\r
      return;\r
    }\r
\r
    if (!rules) {\r
      return;\r
    }\r
\r
    Array.from(rules).forEach((rule) => {\r
      if (typeof CSSRule !== 'undefined' && rule.type === CSSRule.STYLE_RULE && rule.style) {\r
        const text = rule.style.cssText;\r
        if (text && text.includes('/media/')) {\r
          rule.style.cssText = text.replace(/\\/media\\//g, MEDIA_BASE_PATH);\r
        }\r
      } else if (typeof CSSRule !== 'undefined' && rule.type === CSSRule.KEYFRAMES_RULE) {\r
        Array.from(rule.cssRules || []).forEach((keyframe) => {\r
          const frameText = keyframe.style && keyframe.style.cssText;\r
          if (frameText && frameText.includes('/media/')) {\r
            keyframe.style.cssText = frameText.replace(/\\/media\\//g, MEDIA_BASE_PATH);\r
          }\r
        });\r
      }\r
    });\r
  });\r
}\r
// Basket functionality\r
let basket = [];\r
let basketTotal = 0;\r
\r
// Image gallery state\r
let currentImageGallery = [];\r
let currentImageIndex = 0;\r
\r
function addToBasket(itemName, itemPrice, itemType, buttonElement) {\r
    // Check if item already exists in basket\r
    const existingItem = basket.find(item => item.name === itemName && item.type === itemType);\r
    if (existingItem) {\r
        existingItem.quantity += 1;\r
        updateBasketUI();\r
        updateAllButtonStates();\r
        showBasketNotification(\`\${itemName} quantity increased!\`, 'success');\r
        return;\r
    }\r
\r
    const price = parseInt(itemPrice.replace('₹', '').replace(',', ''));\r
    const item = {\r
        id: Date.now(), // Simple unique ID\r
        name: itemName,\r
        price: price,\r
        priceDisplay: itemPrice,\r
        type: itemType,\r
        quantity: 1\r
    };\r
    \r
    basket.push(item);\r
    updateBasketUI();\r
    updateAllButtonStates();\r
    showBasketNotification(\`\${itemName} added to basket!\`);\r
}\r
\r
function updateItemQuantity(itemId, change) {\r
    const item = basket.find(i => i.id === itemId);\r
    if (item) {\r
        item.quantity += change;\r
        if (item.quantity <= 0) {\r
            removeFromBasket(itemId);\r
            return;\r
        }\r
        updateBasketUI();\r
        updateAllButtonStates();\r
    }\r
}\r
\r
function removeFromBasket(itemId) {\r
    const item = basket.find(i => i.id === itemId);\r
    basket = basket.filter(i => i.id !== itemId);\r
    updateBasketUI();\r
    updateAllButtonStates();\r
}\r
\r
function getItemQuantityInBasket(itemName, itemType) {\r
    const item = basket.find(i => i.name === itemName && i.type === itemType);\r
    return item ? item.quantity : 0;\r
}\r
\r
function updateButtonState(buttonElement, itemName, itemType) {\r
    if (!buttonElement) return;\r
    \r
    const quantity = getItemQuantityInBasket(itemName, itemType);\r
    \r
    if (quantity > 0) {\r
        buttonElement.classList.add('added');\r
        buttonElement.innerHTML = \`\r
            <div class="button-content">\r
                <div class="button-controls">\r
                    <button class="quantity-btn-small" onclick="event.stopPropagation(); updateItemQuantityFromButton('\${itemName}', '\${itemType}', -1)">−</button>\r
                    <span class="quantity-display">\${quantity}</span>\r
                    <button class="quantity-btn-small" onclick="event.stopPropagation(); updateItemQuantityFromButton('\${itemName}', '\${itemType}', 1)">+</button>\r
                </div>\r
                <div class="button-text">In Basket</div>\r
            </div>\r
        \`;\r
    } else {\r
        buttonElement.classList.remove('added');\r
        buttonElement.innerHTML = '🛒 Add to Basket';\r
    }\r
}\r
\r
function updateItemQuantityFromButton(itemName, itemType, change) {\r
    const item = basket.find(i => i.name === itemName && i.type === itemType);\r
    if (item) {\r
        item.quantity += change;\r
        if (item.quantity <= 0) {\r
            basket = basket.filter(i => i.id !== item.id);\r
        }\r
        updateBasketUI();\r
        updateAllButtonStates();\r
        \r
        if (change > 0) {\r
            showBasketNotification(\`\${itemName} quantity increased!\`, 'success');\r
        } else {\r
            showBasketNotification(\`\${itemName} quantity decreased!\`, 'warning');\r
        }\r
    }\r
}\r
\r
function updateAllButtonStates() {\r
    // Reset all buttons\r
    const allButtons = document.querySelectorAll('.add-to-basket-btn');\r
    allButtons.forEach(button => {\r
        const onClickAttr = button.getAttribute('onclick');\r
        if (onClickAttr) {\r
            // Extract item name and type from onclick attribute\r
            const matches = onClickAttr.match(/addToBasket\\('([^']+)',\\s*'[^']+',\\s*'([^']+)'/);\r
            if (matches) {\r
                const itemName = matches[1];\r
                const itemType = matches[2];\r
                updateButtonState(button, itemName, itemType);\r
            }\r
        }\r
    });\r
}\r
\r
function updateBasketUI() {\r
    const basketCount = document.getElementById('basketCount');\r
    const basketItems = document.getElementById('basketItems');\r
    const basketTotal = document.getElementById('basketTotal');\r
    const totalAmount = document.getElementById('totalAmount');\r
    \r
    // Update basket count\r
    const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);\r
    if (totalItems > 0) {\r
        basketCount.textContent = totalItems;\r
        basketCount.style.display = 'flex';\r
    } else {\r
        basketCount.style.display = 'none';\r
    }\r
    \r
    // Update basket items\r
    if (basket.length === 0) {\r
        basketItems.innerHTML = \`\r
            <div style="text-align: center; padding: 40px; color: #666;">\r
                <div style="font-size: 3rem; margin-bottom: 15px;">🛒</div>\r
                <p>Your basket is empty</p>\r
                <p style="font-size: 0.9rem;">Add services to start building your perfect event!</p>\r
            </div>\r
        \`;\r
        basketTotal.style.display = 'none';\r
    } else {\r
        let itemsHTML = '';\r
        let total = 0;\r
        \r
        basket.forEach(item => {\r
            const itemTotal = item.price * item.quantity;\r
            total += itemTotal;\r
            itemsHTML += \`\r
                <div class="basket-item">\r
                    <div class="item-details">\r
                        <div class="item-name">\${item.name}</div>\r
                        <div class="item-price">\${item.priceDisplay} × \${item.quantity} = ₹\${itemTotal.toLocaleString()}</div>\r
                    </div>\r
                    <div style="display: flex; align-items: center; gap: 10px;">\r
                        <button class="quantity-btn" onclick="updateItemQuantity(\${item.id}, -1)" style="background: #e74c3c; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">−</button>\r
                        <span style="font-weight: bold; min-width: 20px; text-align: center;">\${item.quantity}</span>\r
                        <button class="quantity-btn" onclick="updateItemQuantity(\${item.id}, 1)" style="background: var(--success-color); color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">+</button>\r
                        <button class="item-remove" onclick="removeFromBasket(\${item.id})">×</button>\r
                    </div>\r
                </div>\r
            \`;\r
        });\r
        \r
        basketItems.innerHTML = itemsHTML;\r
        totalAmount.textContent = \`Total: ₹\${total.toLocaleString()}\`;\r
        basketTotal.style.display = 'block';\r
    }\r
}\r
\r
function showBasketNotification(itemName, type = 'success') {\r
    // Create notification\r
    const notification = document.createElement('div');\r
    const bgColor = type === 'warning' ? '#f39c12' : 'var(--success-color)';\r
    const icon = type === 'warning' ? '⚠️' : '✅';\r
    \r
    notification.style.cssText = \`\r
        position: fixed;\r
        top: 100px;\r
        right: 20px;\r
        background: \${bgColor};\r
        color: white;\r
        padding: 15px 20px;\r
        border-radius: 10px;\r
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);\r
        z-index: 4000;\r
        animation: slideIn 0.3s ease;\r
        max-width: 300px;\r
    \`;\r
    notification.innerHTML = \`\${icon} \${itemName}\`;\r
    \r
    document.body.appendChild(notification);\r
    \r
    // Remove after 3 seconds\r
    setTimeout(() => {\r
        notification.style.animation = 'slideOut 0.3s ease';\r
        setTimeout(() => {\r
            if (document.body.contains(notification)) {\r
                document.body.removeChild(notification);\r
            }\r
        }, 300);\r
    }, 3000);\r
}\r
\r
function toggleBasket() {\r
    const basketModal = document.getElementById('basketModal');\r
    basketModal.classList.add('show');\r
    document.body.style.overflow = 'hidden';\r
}\r
\r
function closeBasket() {\r
    const basketModal = document.getElementById('basketModal');\r
    basketModal.classList.remove('show');\r
    document.body.style.overflow = 'auto';\r
}\r
\r
function sendToWhatsApp() {\r
    if (basket.length === 0) {\r
        alert('Your basket is empty!');\r
        return;\r
    }\r
    \r
    let message = "🎉 *Peeka Boo Events - Order Request* 🎉\\n\\n";\r
    message += "Hello! I would like to book the following services:\\n\\n";\r
    \r
    let total = 0;\r
    basket.forEach((item, index) => {\r
        const itemTotal = item.price * item.quantity;\r
        message += \`\${index + 1}. \${item.name} - \${item.priceDisplay}\`;\r
        if (item.quantity > 1) {\r
            message += \` (Qty: \${item.quantity}) = ₹\${itemTotal.toLocaleString()}\`;\r
        }\r
        message += \`\\n\`;\r
        total += itemTotal;\r
    });\r
    \r
    message += \`\\n💰 *Total Amount: ₹\${total.toLocaleString()}*\\n\\n\`;\r
    message += "Please confirm availability and provide further details.\\n\\n";\r
    message += "Thank you! 🎊";\r
    \r
    const encodedMessage = encodeURIComponent(message);\r
    const whatsappURL = \`https://wa.me/919821148631?text=\${encodedMessage}\`;\r
    \r
    window.open(whatsappURL, '_blank');\r
}\r
\r
// Enhanced Image viewer functions with swipe support\r
function viewImage(imageSrc, altText, imageArray = null, startIndex = 0) {\r
    if (imageArray && Array.isArray(imageArray) && imageArray.length > 0) {\r
        currentImageGallery = mapMediaPaths(imageArray);\r
        currentImageIndex = Math.max(0, Math.min(startIndex, currentImageGallery.length - 1));\r
    } else {\r
        currentImageGallery = [toMediaPath(imageSrc)];\r
        currentImageIndex = 0;\r
    }\r
    \r
    createImageViewer(currentImageGallery[currentImageIndex], altText);\r
}\r
\r
function createImageViewer(imageSrc, altText) {\r
    const existingViewer = document.querySelector('.image-viewer-modal');\r
    if (existingViewer) {\r
        document.body.removeChild(existingViewer);\r
    }\r
    \r
    const modal = document.createElement('div');\r
    modal.className = 'image-viewer-modal show';\r
    \r
    const hasMultipleImages = currentImageGallery.length > 1;\r
    const navPrevHTML = hasMultipleImages ? \`<button class="image-nav-arrow image-nav-prev" onclick="navigateImage(-1)" title="Previous (?+?)">??1</button>\` : '';\r
    const navNextHTML = hasMultipleImages ? \`<button class="image-nav-arrow image-nav-next" onclick="navigateImage(1)" title="Next (?+')">???</button>\` : '';\r
    const counterHTML = hasMultipleImages ? \`<div class="image-counter">\${currentImageIndex + 1} / \${currentImageGallery.length}</div>\` : '';\r
    const normalizedSrc = toMediaPath(imageSrc);\r
    \r
    modal.innerHTML = \`\r
        <div class="image-viewer-overlay" onclick="closeImageViewer(this)"></div>\r
        <button class="image-viewer-close" onclick="closeImageViewer(this)" title="Close (ESC)">A-</button>\r
        \${navPrevHTML}\r
        \${navNextHTML}\r
        \${counterHTML}\r
        <div class="image-viewer-content">\r
            <img src="\${normalizedSrc}" alt="\${altText}" onload="centerImage(this)" />\r
        </div>\r
    \`;\r
    \r
    document.body.appendChild(modal);\r
    document.body.style.overflow = 'hidden';\r
    document.body.style.position = 'fixed';\r
    document.body.style.width = '100%';\r
    \r
    // Add touch and keyboard event listeners\r
    modal.addEventListener('touchstart', handleTouchStart, { passive: false });\r
    modal.addEventListener('touchmove', handleTouchMove, { passive: false });\r
    modal.addEventListener('touchend', handleTouchEnd, { passive: false });\r
    \r
    // Initialize touch variables\r
    modal.touchStartX = 0;\r
    modal.touchStartY = 0;\r
    modal.touchEndX = 0;\r
    modal.touchEndY = 0;\r
}\r
\r
function handleTouchStart(e) {\r
    const modal = e.currentTarget;\r
    modal.touchStartX = e.touches[0].clientX;\r
    modal.touchStartY = e.touches[0].clientY;\r
}\r
\r
function handleTouchMove(e) {\r
    // Prevent default scrolling\r
    e.preventDefault();\r
}\r
\r
function handleTouchEnd(e) {\r
    const modal = e.currentTarget;\r
    modal.touchEndX = e.changedTouches[0].clientX;\r
    modal.touchEndY = e.changedTouches[0].clientY;\r
    \r
    const deltaX = modal.touchEndX - modal.touchStartX;\r
    const deltaY = modal.touchEndY - modal.touchStartY;\r
    const minSwipeDistance = 50;\r
    \r
    // Horizontal swipe for navigation\r
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {\r
        if (deltaX > 0) {\r
            // Swipe right - previous image\r
            navigateImage(-1);\r
        } else {\r
            // Swipe left - next image\r
            navigateImage(1);\r
        }\r
    }\r
    // Vertical swipe down to close\r
    else if (deltaY > minSwipeDistance && Math.abs(deltaX) < minSwipeDistance) {\r
        closeImageViewer(modal);\r
    }\r
}\r
\r
function navigateImage(direction) {\r
    if (currentImageGallery.length <= 1) return;\r
    \r
    const img = document.querySelector('.image-viewer-content img');\r
    if (!img) return;\r
    \r
    // Add animation class\r
    if (direction > 0) {\r
        img.style.animation = 'slideLeft 0.3s ease';\r
    } else {\r
        img.style.animation = 'slideRight 0.3s ease';\r
    }\r
    \r
    // Update index\r
    currentImageIndex += direction;\r
    if (currentImageIndex >= currentImageGallery.length) {\r
        currentImageIndex = 0;\r
    } else if (currentImageIndex < 0) {\r
        currentImageIndex = currentImageGallery.length - 1;\r
    }\r
    \r
    // Update image after animation\r
    setTimeout(() => {\r
        img.src = currentImageGallery[currentImageIndex];\r
        img.style.animation = '';\r
        \r
        // Update counter\r
        const counter = document.querySelector('.image-counter');\r
        if (counter) {\r
            counter.textContent = \`\${currentImageIndex + 1} / \${currentImageGallery.length}\`;\r
        }\r
    }, 150);\r
}\r
\r
function centerImage(imgElement) {\r
    // The image is already styled to fit properly within the viewer\r
    // This function can be used for additional positioning if needed\r
}\r
\r
function closeImageViewer(element) {\r
    const modal = element.closest('.image-viewer-modal') || element;\r
    modal.classList.remove('show');\r
    \r
    // Restore body scrolling\r
    document.body.style.overflow = 'auto';\r
    document.body.style.position = 'static';\r
    document.body.style.width = 'auto';\r
    \r
    setTimeout(() => {\r
        if (document.body.contains(modal)) {\r
            document.body.removeChild(modal);\r
        }\r
    }, 300);\r
    \r
    // Reset gallery state\r
    currentImageGallery = [];\r
    currentImageIndex = 0;\r
}\r
\r
// Image gallery functions\r
function createImageGallery(images, packageName) {\r
    if (!images || images.length === 0) return '';\r
    \r
    const normalizedImages = mapMediaPaths(images);\r
    const galleryJson = JSON.stringify(normalizedImages).replace(/"/g, '&quot;');\r
    \r
    let galleryHtml = \`\r
        <div class="package-gallery">\r
            <h5>?? Package Gallery</h5>\r
            <div class="gallery-grid">\r
    \`;\r
    \r
    normalizedImages.forEach((img, index) => {\r
        galleryHtml += \`\r
            <div class="gallery-item-thumb" onclick="viewImage('\${img}', '\${packageName} - Image \${index + 1}', \${galleryJson}, \${index})">\r
                <img src="\${img}" alt="\${packageName} - Image \${index + 1}" \r
                     onerror="this.parentNode.innerHTML='<div class=\\\\'gallery-fallback\\\\'>??</div>';">\r
            </div>\r
        \`;\r
    });\r
    \r
    galleryHtml += \`</div></div>\`;\r
    return galleryHtml;\r
}\r
\r
// Theme panel toggle functionality\r
function toggleThemePanel() {\r
    const themePanel = document.getElementById('themePanel');\r
    themePanel.classList.toggle('show');\r
}\r
\r
// Close theme panel when clicking outside\r
document.addEventListener('click', function(e) {\r
    const themeSelector = document.querySelector('.theme-selector');\r
    const themePanel = document.getElementById('themePanel');\r
    \r
    if (!themeSelector.contains(e.target)) {\r
        themePanel.classList.remove('show');\r
    }\r
});\r
\r
// Add CSS animations\r
const style = document.createElement('style');\r
style.textContent = \`\r
    @keyframes slideIn {\r
        from { transform: translateX(100%); opacity: 0; }\r
        to { transform: translateX(0); opacity: 1; }\r
    }\r
    @keyframes slideOut {\r
        from { transform: translateX(0); opacity: 1; }\r
        to { transform: translateX(100%); opacity: 0; }\r
    }\r
    \r
    .add-to-basket-btn.added {\r
        background: var(--primary-color);\r
        padding: 5px 10px;\r
        min-height: 40px;\r
    }\r
    \r
    .button-content {\r
        display: flex;\r
        flex-direction: column;\r
        align-items: center;\r
        gap: 2px;\r
    }\r
    \r
    .button-controls {\r
        display: flex;\r
        align-items: center;\r
        gap: 8px;\r
        background: rgba(255,255,255,0.2);\r
        border-radius: 15px;\r
        padding: 2px 8px;\r
    }\r
    \r
    .quantity-btn-small {\r
        background: rgba(255,255,255,0.3);\r
        color: white;\r
        border: none;\r
        border-radius: 50%;\r
        width: 20px;\r
        height: 20px;\r
        cursor: pointer;\r
        display: flex;\r
        align-items: center;\r
        justify-content: center;\r
        font-size: 0.8rem;\r
        font-weight: bold;\r
    }\r
    \r
    .quantity-btn-small:hover {\r
        background: rgba(255,255,255,0.4);\r
    }\r
    \r
    .quantity-display {\r
        color: white;\r
        font-weight: bold;\r
        font-size: 0.9rem;\r
        min-width: 15px;\r
        text-align: center;\r
    }\r
    \r
    .button-text {\r
        font-size: 0.8rem;\r
        color: white;\r
        font-weight: 600;\r
    }\r
\`;\r
document.head.appendChild(style);\r
\r
// Package data\r
const packages = {\r
    decoration: {\r
        title: "🎨 Decoration Packages",\r
        items: [\r
            {\r
                name: "Basic",\r
                price: "₹1,500",\r
                description: "200 balloons with ribbons and Happy Birthday strip banner or tag",\r
                images: [\r
                    "Decoration Packages/Basic/Decoration Package Basic 01.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 02.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 03.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 04.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 05.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 06.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 07.jpeg",\r
                    "Decoration Packages/Basic/Decoration Package Basic 08.jpeg"\r
                ]\r
            },\r
            {\r
                name: "Standard", \r
                price: "₹2,500",\r
                description: "300 balloons with ribbons, happy birthday foil banner",\r
                images: [\r
                    "Decoration Packages/Standard/Decoration Package Standard 01.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 02.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 03.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 04.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 05.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 06.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 07.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 08.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 09.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 10.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 11.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 12.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 13.jpg",\r
                    "Decoration Packages/Standard/Decoration Package Standard 14.jpg"\r
                ]\r
            },\r
            {\r
                name: "Gold",\r
                price: "₹3,500", \r
                description: "500 balloons with ribbons, happy birthday foil banner, foil name, foil curtain",\r
                images: [\r
                    "Decoration Packages/Gold/Decoration Package Gold 01.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 02.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 03.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 04.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 05.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 06.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 07.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 08.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 09.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 10.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 11.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 12.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 13.jpg",\r
                    "Decoration Packages/Gold/Decoration Package Gold 14.jpg"\r
                ]\r
            },\r
            {\r
                name: "Premium",\r
                price: "₹5,500",\r
                description: "800 balloons with ribbons, happy birthday foil banner, foil name, foil curtain, foil theme balloons, two party poppers",\r
                images: [\r
                    "Decoration Packages/Premium/Decoration Package Premium 01.jpg",\r
                    "Decoration Packages/Premium/Decoration Package Premium 02.jpg"\r
                ]\r
            },\r
            {\r
                name: "Platinum",\r
                price: "₹8,500",\r
                description: "Theme back drop, 1000 balloons with ribbons, happy birthday LED name, small led alphabetic name, Welcome board, foil theme balloons, balloon gate, Two LED lights on back drop, four party poppers",\r
                images: [\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 01.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 02.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 03.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 04.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 05.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 06.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 07.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 08.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 09.jpg",\r
                    "Decoration Packages/Platinum/Decoration Package Platinum 10.jpg"\r
                ]\r
            }\r
        ]\r
    },\r
    dj: {\r
        title: "🎵 D.J with Light Packages",\r
        items: [\r
            {\r
                name: "Basic DJ Setup",\r
                price: "₹5,000",\r
                description: "2 50inch speakers, DJ console, Professional D.J. operator"\r
            },\r
            {\r
                name: "Two Way DJ Setup",\r
                price: "₹7,000", \r
                description: "2 Tower Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand"\r
            },\r
            {\r
                name: "Three Way DJ Setup",\r
                price: "₹10,000",\r
                description: "2 Bass & 2 Top Speakers, DJ Console, Professional D.J. operator, DJ lights on single stand"\r
            }\r
        ]\r
    },\r
    games: {\r
        title: "🎯 Game Stalls Packages",\r
        subtitle: "₹3,000 Per Game Stall",\r
        items: [\r
            {\r
                name: "Buzz Wire",\r
                image: "Game Stalls/Buzz Wire.jpeg"\r
            },\r
            {\r
                name: "Feed the Clown", \r
                image: "Game Stalls/Feed the Clown.jpeg"\r
            },\r
            {\r
                name: "Knock the Cans",\r
                image: "Game Stalls/Knock the Cans.jpeg"\r
            },\r
            {\r
                name: "Hit the Hammer",\r
                image: "Game Stalls/Hit the Hammer.jpeg"\r
            },\r
            {\r
                name: "Balloon Shootings",\r
                image: "Game Stalls/Balloon Shootings.jpeg"\r
            },\r
            {\r
                name: "Basket Ball",\r
                image: "Game Stalls/Basket Ball.jpeg"\r
            },\r
            {\r
                name: "Ring Toss",\r
                image: "Game Stalls/Ring Toss.jpeg"\r
            },\r
            {\r
                name: "Twister",\r
                image: "Game Stalls/Twister.jpeg"\r
            },\r
            {\r
                name: "Wheel of Fortune",\r
                image: "Game Stalls/Wheel of Fortune.jpeg"\r
            },\r
            {\r
                name: "Archery",\r
                image: "Game Stalls/Archery.jpeg"\r
            },\r
            {\r
                name: "Bowling Alley", \r
                image: "Game Stalls/Bowling alley.jpeg"\r
            },\r
            {\r
                name: "Dart Game",\r
                image: "Game Stalls/Dart.jpeg"\r
            },\r
            {\r
                name: "Jenga",\r
                image: "Game Stalls/Jenga.jpeg"\r
            }\r
        ]\r
    }\r
};\r
\r
Object.values(packages).forEach(category => {\r
    if (!category || !category.items) return;\r
    category.items.forEach(item => {\r
        if (item.images) {\r
            item.images = mapMediaPaths(item.images);\r
        }\r
        if (item.image) {\r
            item.image = toMediaPath(item.image);\r
        }\r
    });\r
});\r
\r
// Package display functions\r
function showPackages(type) {\r
    const modal = document.getElementById('packageModal');\r
    const title = document.getElementById('modalTitle');\r
    const content = document.getElementById('modalContent');\r
    \r
    const packageData = packages[type];\r
    title.textContent = packageData.title;\r
    \r
    let html = '';\r
    \r
    if (type === 'games') {\r
        if (packageData.subtitle) {\r
            html += \`<div style="text-align: center; background: var(--card-gradient); padding: 20px; border-radius: 15px; margin-bottom: 30px; border: 2px solid var(--primary-color);">\r
                <h3 style="color: var(--primary-dark); margin: 0; font-size: 1.5rem;">\${packageData.subtitle}</h3>\r
            </div>\`;\r
        }\r
        \r
        html += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">';\r
        \r
        packageData.items.forEach((item, index) => {\r
            html += \`\r
                <div style="background: var(--card-gradient); border-radius: 15px; padding: 15px; text-align: center; border: 2px solid var(--primary-color); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">\r
                    <div style="width: 100%; height: 150px; border-radius: 10px; overflow: hidden; margin-bottom: 15px; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); display: flex; align-items: center; justify-content: center; cursor: pointer;" onclick="viewImage('\${toMediaPath(item.image)}', '\${item.name} Game Stall')">\r
                        <img src="\${toMediaPath(item.image)}" alt="\${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.parentNode.innerHTML='<div style=\\\\'color: white; font-size: 2rem;\\\\'>🎯</div>';">\r
                    </div>\r
                    <h4 style="color: var(--primary-dark); margin: 0 0 10px 0; font-size: 1.1rem; font-weight: 700;">\${index + 1}. \${item.name}</h4>\r
                    <button class="add-to-basket-btn" onclick="addToBasket('\${item.name} Game Stall', '₹3,000', 'games', this)">\r
                        🛒 Add to Basket\r
                    </button>\r
                </div>\r
            \`;\r
        });\r
        \r
        html += '</div>';\r
    } else {\r
        html += '<div style="display: grid; gap: 20px;">';\r
        \r
        packageData.items.forEach((item, index) => {\r
            const imageGallery = item.images ? createImageGallery(item.images, item.name) : '';\r
            \r
            html += \`\r
                <div style="background: var(--card-gradient); border-radius: 15px; padding: 25px; border: 2px solid var(--primary-color); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">\r
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">\r
                        <h4 style="color: var(--primary-dark); margin: 0; font-size: 1.3rem; font-weight: 700;">\${index + 1}. \${item.name}</h4>\r
                        <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; padding: 8px 15px; border-radius: 20px; font-weight: 700; font-size: 1.1rem;">\${item.price}</div>\r
                    </div>\r
                    <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">\${item.description}</p>\r
                    \${imageGallery}\r
                    <button class="add-to-basket-btn" onclick="addToBasket('\${item.name} (\${type.toUpperCase()})', '\${item.price}', '\${type}', this)">\r
                        🛒 Add to Basket\r
                    </button>\r
                </div>\r
            \`;\r
        });\r
        \r
        html += '</div>';\r
    }\r
    \r
    content.innerHTML = html;\r
    modal.classList.add('show');\r
    document.body.style.overflow = 'hidden';\r
    \r
    // Update button states after modal content is loaded\r
    setTimeout(() => {\r
        updateAllButtonStates();\r
    }, 100);\r
}\r
\r
function closePackageModal() {\r
    const modal = document.getElementById('packageModal');\r
    modal.classList.remove('show');\r
    document.body.style.overflow = 'auto';\r
}\r
\r
// Theme switching functionality\r
function setTheme(theme) {\r
    document.documentElement.setAttribute('data-theme', theme);\r
    localStorage.setItem('selectedTheme', theme);\r
    \r
    // Update active theme option\r
    document.querySelectorAll('.theme-option').forEach(option => {\r
        option.classList.remove('active');\r
    });\r
    document.querySelector(\`[data-theme="\${theme}"]\`).classList.add('active');\r
}\r
\r
// Initialize theme\r
document.addEventListener('DOMContentLoaded', function() {\r
    const savedTheme = localStorage.getItem('selectedTheme') || 'purple';\r
    setTheme(savedTheme);\r
    \r
    // Add theme option click handlers\r
    document.querySelectorAll('.theme-option').forEach(option => {\r
        option.addEventListener('click', function() {\r
            const theme = this.getAttribute('data-theme');\r
            setTheme(theme);\r
            // Close theme panel after selection\r
            document.getElementById('themePanel').classList.remove('show');\r
        });\r
    });\r
});\r
\r
// Mobile menu toggle\r
function toggleMobileMenu() {\r
    const navLinks = document.getElementById('navLinks');\r
    navLinks.classList.toggle('show');\r
}\r
\r
// Simple routing system\r
function showPage(pageId) {\r
    // Hide all pages\r
    const pages = document.querySelectorAll('.page');\r
    pages.forEach(page => page.classList.add('hidden'));\r
    \r
    // Show selected page\r
    const targetPage = document.getElementById(pageId + '-page');\r
    if (targetPage) {\r
        targetPage.classList.remove('hidden');\r
    }\r
    \r
    // Update active navigation\r
    const navLinks = document.querySelectorAll('.nav-links a');\r
    navLinks.forEach(link => link.classList.remove('active'));\r
    \r
    const activeNav = document.getElementById('nav-' + pageId);\r
    if (activeNav) {\r
        activeNav.classList.add('active');\r
    }\r
    \r
    // Close mobile menu\r
    document.getElementById('navLinks').classList.remove('show');\r
    \r
    // Update URL hash\r
    window.location.hash = pageId;\r
    \r
    // Scroll to top\r
    window.scrollTo({ top: 0, behavior: 'smooth' });\r
}\r
\r
// Handle navigation clicks\r
document.addEventListener('click', function(e) {\r
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {\r
        e.preventDefault();\r
        const hash = e.target.getAttribute('href').substring(1);\r
        showPage(hash);\r
    }\r
});\r
\r
// Handle browser back/forward\r
window.addEventListener('hashchange', function() {\r
    const hash = window.location.hash.substring(1) || 'home';\r
    showPage(hash);\r
});\r
\r
// Keyboard event handling for image viewer\r
document.addEventListener('keydown', function(e) {\r
    const imageViewer = document.querySelector('.image-viewer-modal.show');\r
    if (imageViewer) {\r
        switch(e.key) {\r
            case 'Escape':\r
                closeImageViewer(imageViewer);\r
                break;\r
            case 'ArrowLeft':\r
                navigateImage(-1);\r
                break;\r
            case 'ArrowRight':\r
                navigateImage(1);\r
                break;\r
        }\r
    } else if (e.key === 'Escape') {\r
        closePackageModal();\r
        closeBasket();\r
        document.getElementById('themePanel').classList.remove('show');\r
    }\r
});\r
\r
// Close modal when clicking outside or pressing escape\r
document.addEventListener('click', function(e) {\r
    const packageModal = document.getElementById('packageModal');\r
    const basketModal = document.getElementById('basketModal');\r
    \r
    if (e.target === packageModal) {\r
        closePackageModal();\r
    }\r
    if (e.target === basketModal) {\r
        closeBasket();\r
    }\r
});\r
\r
// Close mobile menu when clicking outside\r
document.addEventListener('click', function(e) {\r
    const navLinks = document.getElementById('navLinks');\r
    const toggle = document.querySelector('.mobile-menu-toggle');\r
    \r
    if (navLinks && toggle && !navLinks.contains(e.target) && !toggle.contains(e.target)) {\r
        navLinks.classList.remove('show');\r
    }\r
});\r
\r
// Handle window resize\r
window.addEventListener('resize', function() {\r
    const navLinks = document.getElementById('navLinks');\r
    if (navLinks && window.innerWidth > 768) {\r
        navLinks.classList.remove('show');\r
    }\r
});\r
\r
// Initialize all functionality when DOM is loaded\r
document.addEventListener('DOMContentLoaded', function() {\r
    rewriteMediaReferences();\r
    // Initialize theme system\r
    const savedTheme = localStorage.getItem('selectedTheme') || 'purple';\r
    setTheme(savedTheme);\r
    \r
    // Set up page routing\r
    const hash = window.location.hash.substring(1) || 'home';\r
    showPage(hash);\r
    \r
    // Clean up any modal states\r
    document.body.style.overflow = 'auto';\r
    \r
    console.log('🎉 Peeka Boo Events website initialized successfully!');\r
});\r
\r
\r
\r
\r
\r
\r
\r
\r
`;function Mf(){return Qr.useEffect(()=>{const e=()=>{if(window.__legacyAppInitialized)return;window.__legacyAppInitialized=!0;const t=new Event("DOMContentLoaded");document.dispatchEvent(t)};if(window.__legacyScriptLoaded)setTimeout(e,0);else{const t=document.createElement("script");t.type="text/javascript",t.text=`${Nf}
//# sourceURL=legacyScript.js`,document.body.appendChild(t),window.__legacyScriptLoaded=!0,setTimeout(e,0)}},[]),_r.jsx("div",{className:"legacy-app",dangerouslySetInnerHTML:{__html:Df}})}function jf({children:e}){return Qr.useEffect(()=>{const t=localStorage.getItem("selectedTheme")||"purple";document.documentElement.setAttribute("data-theme",t)},[]),e}function Bf(){return _r.jsx(jf,{children:_r.jsx(Mf,{})})}Wi.createRoot(document.getElementById("root")).render(_r.jsx(yc.StrictMode,{children:_r.jsx(Bf,{})}));
