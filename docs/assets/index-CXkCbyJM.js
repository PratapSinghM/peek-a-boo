(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function tc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ba={exports:{}},ei={},Va={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),jo=Symbol.iterator;function pc(e){return e===null||typeof e!="object"?null:(e=jo&&e[jo]||e["@@iterator"],typeof e=="function"?e:null)}var Wa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ga=Object.assign,Qa={};function rt(e,n,t){this.props=e,this.context=n,this.refs=Qa,this.updater=t||Wa}rt.prototype.isReactComponent={};rt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};rt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=rt.prototype;function Ol(e,n,t){this.props=e,this.context=n,this.refs=Qa,this.updater=t||Wa}var Fl=Ol.prototype=new Ya;Fl.constructor=Ol;Ga(Fl,rt.prototype);Fl.isPureReactComponent=!0;var Bo=Array.isArray,Ka=Object.prototype.hasOwnProperty,$l={current:null},Xa={key:!0,ref:!0,__self:!0,__source:!0};function Ja(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Ka.call(n,r)&&!Xa.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qt,type:e,key:l,ref:o,props:i,_owner:$l.current}}function mc(e,n){return{$$typeof:Qt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qt}function gc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ro=/\/+/g;function ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):n.toString(36)}function yr(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Qt:case rc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ki(o,0):r,Bo(i)?(t="",e!=null&&(t=e.replace(Ro,"$&/")+"/"),yr(i,n,t,"",function(c){return c})):i!=null&&(Ul(i)&&(i=mc(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ro,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Bo(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ki(l,a);o+=yr(l,n,t,s,i)}else if(s=pc(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ki(l,a++),o+=yr(l,n,t,s,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,n,t){if(e==null)return e;var r=[],i=0;return yr(e,r,"","",function(l){return n.call(t,l,i++)}),r}function hc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var oe={current:null},kr={transition:null},vc={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:kr,ReactCurrentOwner:$l};function qa(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=rt;I.Fragment=ic;I.Profiler=oc;I.PureComponent=Ol;I.StrictMode=lc;I.Suspense=cc;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;I.act=qa;I.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ga({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=$l.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)Ka.call(n,s)&&!Xa.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Qt,type:e.type,key:i,ref:l,props:r,_owner:o}};I.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};I.createElement=Ja;I.createFactory=function(e){var n=Ja.bind(null,e);return n.type=e,n};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:uc,render:e}};I.isValidElement=Ul;I.lazy=function(e){return{$$typeof:fc,_payload:{_status:-1,_result:e},_init:hc}};I.memo=function(e,n){return{$$typeof:dc,type:e,compare:n===void 0?null:n}};I.startTransition=function(e){var n=kr.transition;kr.transition={};try{e()}finally{kr.transition=n}};I.unstable_act=qa;I.useCallback=function(e,n){return oe.current.useCallback(e,n)};I.useContext=function(e){return oe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return oe.current.useDeferredValue(e)};I.useEffect=function(e,n){return oe.current.useEffect(e,n)};I.useId=function(){return oe.current.useId()};I.useImperativeHandle=function(e,n,t){return oe.current.useImperativeHandle(e,n,t)};I.useInsertionEffect=function(e,n){return oe.current.useInsertionEffect(e,n)};I.useLayoutEffect=function(e,n){return oe.current.useLayoutEffect(e,n)};I.useMemo=function(e,n){return oe.current.useMemo(e,n)};I.useReducer=function(e,n,t){return oe.current.useReducer(e,n,t)};I.useRef=function(e){return oe.current.useRef(e)};I.useState=function(e){return oe.current.useState(e)};I.useSyncExternalStore=function(e,n,t){return oe.current.useSyncExternalStore(e,n,t)};I.useTransition=function(){return oe.current.useTransition()};I.version="18.3.1";Va.exports=I;var Yt=Va.exports;const yc=tc(Yt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=Yt,wc=Symbol.for("react.element"),xc=Symbol.for("react.fragment"),Sc=Object.prototype.hasOwnProperty,Ec=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pc={key:!0,ref:!0,__self:!0,__source:!0};function Za(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Sc.call(n,r)&&!Pc.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:wc,type:e,key:l,ref:o,props:i,_owner:Ec.current}}ei.Fragment=xc;ei.jsx=Za;ei.jsxs=Za;ba.exports=ei;var It=ba.exports,Wi={},es={exports:{}},ve={},ns={exports:{}},ts={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,T){var _=E.length;E.push(T);e:for(;0<_;){var b=_-1>>>1,Y=E[b];if(0<i(Y,T))E[b]=T,E[_]=Y,_=b;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],_=E.pop();if(_!==T){E[0]=_;e:for(var b=0,Y=E.length,Zt=Y>>>1;b<Zt;){var gn=2*(b+1)-1,yi=E[gn],hn=gn+1,er=E[hn];if(0>i(yi,_))hn<Y&&0>i(er,yi)?(E[b]=er,E[hn]=_,b=hn):(E[b]=yi,E[gn]=_,b=gn);else if(hn<Y&&0>i(er,_))E[b]=er,E[hn]=_,b=hn;else break e}}return T}function i(E,T){var _=E.sortIndex-T.sortIndex;return _!==0?_:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],g=1,m=null,p=3,y=!1,k=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var T=t(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=E)r(c),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(c)}}function h(E){if(w=!1,f(E),!k)if(t(s)!==null)k=!0,hi(S);else{var T=t(c);T!==null&&vi(h,T.startTime-E)}}function S(E,T){k=!1,w&&(w=!1,d(z),z=-1),y=!0;var _=p;try{for(f(T),m=t(s);m!==null&&(!(m.expirationTime>T)||E&&!Ce());){var b=m.callback;if(typeof b=="function"){m.callback=null,p=m.priorityLevel;var Y=b(m.expirationTime<=T);T=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(s)&&r(s),f(T)}else r(s);m=t(s)}if(m!==null)var Zt=!0;else{var gn=t(c);gn!==null&&vi(h,gn.startTime-T),Zt=!1}return Zt}finally{m=null,p=_,y=!1}}var P=!1,C=null,z=-1,H=5,L=-1;function Ce(){return!(e.unstable_now()-L<H)}function ot(){if(C!==null){var E=e.unstable_now();L=E;var T=!0;try{T=C(!0,E)}finally{T?at():(P=!1,C=null)}}else P=!1}var at;if(typeof u=="function")at=function(){u(ot)};else if(typeof MessageChannel<"u"){var Mo=new MessageChannel,nc=Mo.port2;Mo.port1.onmessage=ot,at=function(){nc.postMessage(null)}}else at=function(){R(ot,0)};function hi(E){C=E,P||(P=!0,at())}function vi(E,T){z=R(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,hi(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var T=3;break;default:T=p}var _=p;p=T;try{return E()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=p;p=E;try{return T()}finally{p=_}},e.unstable_scheduleCallback=function(E,T,_){var b=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?b+_:b):_=b,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=_+Y,E={id:g++,callback:T,priorityLevel:E,startTime:_,expirationTime:Y,sortIndex:-1},_>b?(E.sortIndex=_,n(c,E),t(s)===null&&E===t(c)&&(w?(d(z),z=-1):w=!0,vi(h,_-b))):(E.sortIndex=Y,n(s,E),k||y||(k=!0,hi(S))),E},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(E){var T=p;return function(){var _=p;p=T;try{return E.apply(this,arguments)}finally{p=_}}}})(ts);ns.exports=ts;var Cc=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=Yt,he=Cc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rs=new Set,Lt={};function In(e,n){Xn(e,n),Xn(e+"Capture",n)}function Xn(e,n){for(Lt[e]=n,e=0;e<n.length;e++)rs.add(n[e])}var be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ao={},Oo={};function _c(e){return Gi.call(Oo,e)?!0:Gi.call(Ao,e)?!1:Tc.test(e)?Oo[e]=!0:(Ao[e]=!0,!1)}function Ic(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,n,t,r){if(n===null||typeof n>"u"||Ic(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ae(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Z[n]=new ae(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hl=/[\-:]([a-z])/g;function bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Hl,bl);Z[n]=new ae(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Hl,bl);Z[n]=new ae(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Hl,bl);Z[n]=new ae(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,n,t,r){var i=Z.hasOwnProperty(n)?Z[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Lc(n,t,i,r)&&(t=null),r||i===null?_c(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Qe=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Qi=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Ki=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,wi;function ht(e){if(wi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wi=n&&n[1]||""}return`
`+wi+e}var xi=!1;function Si(e,n){if(!e||xi)return"";xi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{xi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ht(e):""}function Dc(e){switch(e.tag){case 5:return ht(e.type);case 16:return ht("Lazy");case 13:return ht("Suspense");case 19:return ht("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Nn:return"Portal";case Qi:return"Profiler";case Wl:return"StrictMode";case Yi:return"Suspense";case Ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Gl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return n=e.displayName||null,n!==null?n:Xi(e.type)||"Memo";case Ke:n=e._payload,e=e._init;try{return Xi(e(n))}catch{}}return null}function Nc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(n);case 8:return n===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function as(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mc(e){var n=as(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=Mc(e))}function ss(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=as(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ji(e,n){var t=n.checked;return $({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function $o(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=cn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function us(e,n){n=n.checked,n!=null&&Vl(e,"checked",n,!1)}function qi(e,n){us(e,n);var t=cn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Zi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Zi(e,n.type,cn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Uo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Zi(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var vt=Array.isArray;function Vn(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+cn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function el(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return $({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(vt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:cn(t)}}function cs(e,n){var t=cn(n.value),r=cn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function bo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ds(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ds(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,fs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var wt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jc=["Webkit","ms","Moz","O"];Object.keys(wt).forEach(function(e){jc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),wt[n]=wt[e]})});function ps(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||wt.hasOwnProperty(e)&&wt[e]?(""+n).trim():n+"px"}function ms(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=ps(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Bc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,n){if(n){if(Bc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function rl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,Wn=null,Gn=null;function Vo(e){if(e=Jt(e)){if(typeof ll!="function")throw Error(v(280));var n=e.stateNode;n&&(n=li(n),ll(e.stateNode,e.type,n))}}function gs(e){Wn?Gn?Gn.push(e):Gn=[e]:Wn=e}function hs(){if(Wn){var e=Wn,n=Gn;if(Gn=Wn=null,Vo(e),n)for(e=0;e<n.length;e++)Vo(n[e])}}function vs(e,n){return e(n)}function ys(){}var Ei=!1;function ks(e,n,t){if(Ei)return e(n,t);Ei=!0;try{return vs(e,n,t)}finally{Ei=!1,(Wn!==null||Gn!==null)&&(ys(),hs())}}function Nt(e,n){var t=e.stateNode;if(t===null)return null;var r=li(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ol=!1;if(be)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ol=!0}}),window.addEventListener("test",ut,ut),window.removeEventListener("test",ut,ut)}catch{ol=!1}function Rc(e,n,t,r,i,l,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(g){this.onError(g)}}var xt=!1,Dr=null,Nr=!1,al=null,Ac={onError:function(e){xt=!0,Dr=e}};function Oc(e,n,t,r,i,l,o,a,s){xt=!1,Dr=null,Rc.apply(Ac,arguments)}function Fc(e,n,t,r,i,l,o,a,s){if(Oc.apply(this,arguments),xt){if(xt){var c=Dr;xt=!1,Dr=null}else throw Error(v(198));Nr||(Nr=!0,al=c)}}function Ln(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ws(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Wo(e){if(Ln(e)!==e)throw Error(v(188))}function $c(e){var n=e.alternate;if(!n){if(n=Ln(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Wo(i),e;if(l===r)return Wo(i),n;l=l.sibling}throw Error(v(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function xs(e){return e=$c(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ss(e);if(n!==null)return n;e=e.sibling}return null}var Es=he.unstable_scheduleCallback,Go=he.unstable_cancelCallback,Uc=he.unstable_shouldYield,Hc=he.unstable_requestPaint,V=he.unstable_now,bc=he.unstable_getCurrentPriorityLevel,Kl=he.unstable_ImmediatePriority,Ps=he.unstable_UserBlockingPriority,Mr=he.unstable_NormalPriority,Vc=he.unstable_LowPriority,Cs=he.unstable_IdlePriority,ni=null,Re=null;function Wc(e){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Yc,Gc=Math.log,Qc=Math.LN2;function Yc(e){return e>>>=0,e===0?32:31-(Gc(e)/Qc|0)|0}var lr=64,or=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~i;a!==0?r=yt(a):(l&=o,l!==0&&(r=yt(l)))}else o=t&~i,o!==0?r=yt(o):l!==0&&(r=yt(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),i=1<<t,r|=e[t],n&=~i;return r}function Kc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Le(l),a=1<<o,s=i[o];s===-1?(!(a&t)||a&r)&&(i[o]=Kc(a,n)):s<=n&&(e.expiredLanes|=a),l&=~a}}function sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=lr;return lr<<=1,!(lr&4194240)&&(lr=64),e}function Pi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Kt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Jc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Le(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Xl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var N=0;function Ts(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _s,Jl,Is,Ls,Ds,ul=!1,ar=[],nn=null,tn=null,rn=null,Mt=new Map,jt=new Map,Je=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,n){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Mt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function ct(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Jt(n),n!==null&&Jl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Zc(e,n,t,r,i){switch(n){case"focusin":return nn=ct(nn,e,n,t,r,i),!0;case"dragenter":return tn=ct(tn,e,n,t,r,i),!0;case"mouseover":return rn=ct(rn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Mt.set(l,ct(Mt.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,jt.set(l,ct(jt.get(l)||null,e,n,t,r,i)),!0}return!1}function Ns(e){var n=kn(e.target);if(n!==null){var t=Ln(n);if(t!==null){if(n=t.tag,n===13){if(n=ws(t),n!==null){e.blockedOn=n,Ds(e.priority,function(){Is(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=cl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);il=r,t.target.dispatchEvent(r),il=null}else return n=Jt(t),n!==null&&Jl(n),e.blockedOn=t,!1;n.shift()}return!0}function Yo(e,n,t){wr(e)&&t.delete(n)}function ed(){ul=!1,nn!==null&&wr(nn)&&(nn=null),tn!==null&&wr(tn)&&(tn=null),rn!==null&&wr(rn)&&(rn=null),Mt.forEach(Yo),jt.forEach(Yo)}function dt(e,n){e.blockedOn===n&&(e.blockedOn=null,ul||(ul=!0,he.unstable_scheduleCallback(he.unstable_NormalPriority,ed)))}function Bt(e){function n(i){return dt(i,e)}if(0<ar.length){dt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&dt(nn,e),tn!==null&&dt(tn,e),rn!==null&&dt(rn,e),Mt.forEach(n),jt.forEach(n),t=0;t<Je.length;t++)r=Je[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Je.length&&(t=Je[0],t.blockedOn===null);)Ns(t),t.blockedOn===null&&Je.shift()}var Qn=Qe.ReactCurrentBatchConfig,Br=!0;function nd(e,n,t,r){var i=N,l=Qn.transition;Qn.transition=null;try{N=1,ql(e,n,t,r)}finally{N=i,Qn.transition=l}}function td(e,n,t,r){var i=N,l=Qn.transition;Qn.transition=null;try{N=4,ql(e,n,t,r)}finally{N=i,Qn.transition=l}}function ql(e,n,t,r){if(Br){var i=cl(e,n,t,r);if(i===null)ji(e,n,r,Rr,t),Qo(e,r);else if(Zc(i,e,n,t,r))r.stopPropagation();else if(Qo(e,r),n&4&&-1<qc.indexOf(e)){for(;i!==null;){var l=Jt(i);if(l!==null&&_s(l),l=cl(e,n,t,r),l===null&&ji(e,n,r,Rr,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else ji(e,n,r,null,t)}}var Rr=null;function cl(e,n,t,r){if(Rr=null,e=Yl(r),e=kn(e),e!==null)if(n=Ln(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ws(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Rr=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case Kl:return 1;case Ps:return 4;case Mr:case Vc:return 16;case Cs:return 536870912;default:return 16}default:return 16}}var Ze=null,Zl=null,xr=null;function js(){if(xr)return xr;var e,n=Zl,t=n.length,r,i="value"in Ze?Ze.value:Ze.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return xr=i.slice(e,1<r?1-r:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sr(){return!0}function Ko(){return!1}function ye(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?sr:Ko,this.isPropagationStopped=Ko,this}return $(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),n}var it={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=ye(it),Xt=$({},it,{view:0,detail:0}),rd=ye(Xt),Ci,zi,ft,ti=$({},Xt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(Ci=e.screenX-ft.screenX,zi=e.screenY-ft.screenY):zi=Ci=0,ft=e),Ci)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Xo=ye(ti),id=$({},ti,{dataTransfer:0}),ld=ye(id),od=$({},Xt,{relatedTarget:0}),Ti=ye(od),ad=$({},it,{animationName:0,elapsedTime:0,pseudoElement:0}),sd=ye(ad),ud=$({},it,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=ye(ud),dd=$({},it,{data:0}),Jo=ye(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},md={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=md[e])?!!n[e]:!1}function no(){return gd}var hd=$({},Xt,{key:function(e){if(e.key){var n=fd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=ye(hd),yd=$({},ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=ye(yd),kd=$({},Xt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),wd=ye(kd),xd=$({},it,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=ye(xd),Ed=$({},ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pd=ye(Ed),Cd=[9,13,27,32],to=be&&"CompositionEvent"in window,St=null;be&&"documentMode"in document&&(St=document.documentMode);var zd=be&&"TextEvent"in window&&!St,Bs=be&&(!to||St&&8<St&&11>=St),Zo=" ",ea=!1;function Rs(e,n){switch(e){case"keyup":return Cd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function As(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Td(e,n){switch(e){case"compositionend":return As(n);case"keypress":return n.which!==32?null:(ea=!0,Zo);case"textInput":return e=n.data,e===Zo&&ea?null:e;default:return null}}function _d(e,n){if(jn)return e==="compositionend"||!to&&Rs(e,n)?(e=js(),xr=Zl=Ze=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bs&&n.locale!=="ko"?null:n.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Id[e.type]:n==="textarea"}function Os(e,n,t,r){gs(r),n=Ar(n,"onChange"),0<n.length&&(t=new eo("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Et=null,Rt=null;function Ld(e){Ks(e,0)}function ri(e){var n=An(e);if(ss(n))return e}function Dd(e,n){if(e==="change")return n}var Fs=!1;if(be){var _i;if(be){var Ii="oninput"in document;if(!Ii){var ta=document.createElement("div");ta.setAttribute("oninput","return;"),Ii=typeof ta.oninput=="function"}_i=Ii}else _i=!1;Fs=_i&&(!document.documentMode||9<document.documentMode)}function ra(){Et&&(Et.detachEvent("onpropertychange",$s),Rt=Et=null)}function $s(e){if(e.propertyName==="value"&&ri(Rt)){var n=[];Os(n,Rt,e,Yl(e)),ks(Ld,n)}}function Nd(e,n,t){e==="focusin"?(ra(),Et=n,Rt=t,Et.attachEvent("onpropertychange",$s)):e==="focusout"&&ra()}function Md(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ri(Rt)}function jd(e,n){if(e==="click")return ri(n)}function Bd(e,n){if(e==="input"||e==="change")return ri(n)}function Rd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ne=typeof Object.is=="function"?Object.is:Rd;function At(e,n){if(Ne(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Gi.call(n,i)||!Ne(e[i],n[i]))return!1}return!0}function ia(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function la(e,n){var t=ia(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ia(t)}}function Us(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Us(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Hs(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function ro(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ad(e){var n=Hs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Us(t.ownerDocument.documentElement,t)){if(r!==null&&ro(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=la(t,l);var o=la(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=be&&"documentMode"in document&&11>=document.documentMode,Bn=null,dl=null,Pt=null,fl=!1;function oa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fl||Bn==null||Bn!==Lr(r)||(r=Bn,"selectionStart"in r&&ro(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pt&&At(Pt,r)||(Pt=r,r=Ar(dl,"onSelect"),0<r.length&&(n=new eo("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Bn)))}function ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rn={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionend:ur("Transition","TransitionEnd")},Li={},bs={};be&&(bs=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function ii(e){if(Li[e])return Li[e];if(!Rn[e])return e;var n=Rn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in bs)return Li[e]=n[t];return e}var Vs=ii("animationend"),Ws=ii("animationiteration"),Gs=ii("animationstart"),Qs=ii("transitionend"),Ys=new Map,aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,n){Ys.set(e,n),In(n,[e])}for(var Di=0;Di<aa.length;Di++){var Ni=aa[Di],Fd=Ni.toLowerCase(),$d=Ni[0].toUpperCase()+Ni.slice(1);fn(Fd,"on"+$d)}fn(Vs,"onAnimationEnd");fn(Ws,"onAnimationIteration");fn(Gs,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Qs,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ud=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function sa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fc(r,n,void 0,e),e.currentTarget=null}function Ks(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;sa(i,a,c),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;sa(i,a,c),l=s}}}if(Nr)throw e=al,Nr=!1,al=null,e}function j(e,n){var t=n[vl];t===void 0&&(t=n[vl]=new Set);var r=e+"__bubble";t.has(r)||(Xs(n,e,2,!1),t.add(r))}function Mi(e,n,t){var r=0;n&&(r|=4),Xs(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ot(e){if(!e[cr]){e[cr]=!0,rs.forEach(function(t){t!=="selectionchange"&&(Ud.has(t)||Mi(t,!1,e),Mi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Mi("selectionchange",!1,n))}}function Xs(e,n,t,r){switch(Ms(n)){case 1:var i=nd;break;case 4:i=td;break;default:i=ql}t=i.bind(null,n,t,e),i=void 0,!ol||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function ji(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}ks(function(){var c=l,g=Yl(t),m=[];e:{var p=Ys.get(e);if(p!==void 0){var y=eo,k=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":y=vd;break;case"focusin":k="focus",y=Ti;break;case"focusout":k="blur",y=Ti;break;case"beforeblur":case"afterblur":y=Ti;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=wd;break;case Vs:case Ws:case Gs:y=sd;break;case Qs:y=Sd;break;case"scroll":y=rd;break;case"wheel":y=Pd;break;case"copy":case"cut":case"paste":y=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=qo}var w=(n&4)!==0,R=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var u=c,f;u!==null;){f=u;var h=f.stateNode;if(f.tag===5&&h!==null&&(f=h,d!==null&&(h=Nt(u,d),h!=null&&w.push(Ft(u,h,f)))),R)break;u=u.return}0<w.length&&(p=new y(p,k,null,t,g),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==il&&(k=t.relatedTarget||t.fromElement)&&(kn(k)||k[Ve]))break e;if((y||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,y?(k=t.relatedTarget||t.toElement,y=c,k=k?kn(k):null,k!==null&&(R=Ln(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=c),y!==k)){if(w=Xo,h="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=qo,h="onPointerLeave",d="onPointerEnter",u="pointer"),R=y==null?p:An(y),f=k==null?p:An(k),p=new w(h,u+"leave",y,t,g),p.target=R,p.relatedTarget=f,h=null,kn(g)===c&&(w=new w(d,u+"enter",k,t,g),w.target=f,w.relatedTarget=R,h=w),R=h,y&&k)n:{for(w=y,d=k,u=0,f=w;f;f=Dn(f))u++;for(f=0,h=d;h;h=Dn(h))f++;for(;0<u-f;)w=Dn(w),u--;for(;0<f-u;)d=Dn(d),f--;for(;u--;){if(w===d||d!==null&&w===d.alternate)break n;w=Dn(w),d=Dn(d)}w=null}else w=null;y!==null&&ua(m,p,y,w,!1),k!==null&&R!==null&&ua(m,R,k,w,!0)}}e:{if(p=c?An(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Dd;else if(na(p))if(Fs)S=Bd;else{S=Md;var P=Nd}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=jd);if(S&&(S=S(e,c))){Os(m,S,t,g);break e}P&&P(e,p,c),e==="focusout"&&(P=p._wrapperState)&&P.controlled&&p.type==="number"&&Zi(p,"number",p.value)}switch(P=c?An(c):window,e){case"focusin":(na(P)||P.contentEditable==="true")&&(Bn=P,dl=c,Pt=null);break;case"focusout":Pt=dl=Bn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,oa(m,t,g);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":oa(m,t,g)}var C;if(to)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else jn?Rs(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Bs&&t.locale!=="ko"&&(jn||z!=="onCompositionStart"?z==="onCompositionEnd"&&jn&&(C=js()):(Ze=g,Zl="value"in Ze?Ze.value:Ze.textContent,jn=!0)),P=Ar(c,z),0<P.length&&(z=new Jo(z,e,null,t,g),m.push({event:z,listeners:P}),C?z.data=C:(C=As(t),C!==null&&(z.data=C)))),(C=zd?Td(e,t):_d(e,t))&&(c=Ar(c,"onBeforeInput"),0<c.length&&(g=new Jo("onBeforeInput","beforeinput",null,t,g),m.push({event:g,listeners:c}),g.data=C))}Ks(m,n)})}function Ft(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ar(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Nt(e,t),l!=null&&r.unshift(Ft(e,l,i)),l=Nt(e,n),l!=null&&r.push(Ft(e,l,i))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Nt(t,l),s!=null&&o.unshift(Ft(t,s,a))):i||(s=Nt(t,l),s!=null&&o.push(Ft(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Hd=/\r\n?/g,bd=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Hd,`
`).replace(bd,"")}function dr(e,n,t){if(n=ca(n),ca(e)!==n&&t)throw Error(v(425))}function Or(){}var pl=null,ml=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Vd=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Gd)}:hl;function Gd(e){setTimeout(function(){throw e})}function Bi(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Bt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Bt(n)}function ln(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function fa(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lt=Math.random().toString(36).slice(2),Be="__reactFiber$"+lt,$t="__reactProps$"+lt,Ve="__reactContainer$"+lt,vl="__reactEvents$"+lt,Qd="__reactListeners$"+lt,Yd="__reactHandles$"+lt;function kn(e){var n=e[Be];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ve]||t[Be]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=fa(e);e!==null;){if(t=e[Be])return t;e=fa(e)}return n}e=t,t=e.parentNode}return null}function Jt(e){return e=e[Be]||e[Ve],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function li(e){return e[$t]||null}var yl=[],On=-1;function pn(e){return{current:e}}function B(e){0>On||(e.current=yl[On],yl[On]=null,On--)}function M(e,n){On++,yl[On]=e.current,e.current=n}var dn={},re=pn(dn),ce=pn(!1),Pn=dn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function de(e){return e=e.childContextTypes,e!=null}function Fr(){B(ce),B(re)}function pa(e,n,t){if(re.current!==dn)throw Error(v(168));M(re,n),M(ce,t)}function Js(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(v(108,Nc(e)||"Unknown",i));return $({},t,r)}function $r(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Pn=re.current,M(re,e),M(ce,ce.current),!0}function ma(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=Js(e,n,Pn),r.__reactInternalMemoizedMergedChildContext=e,B(ce),B(re),M(re,e)):B(ce),M(ce,t)}var Fe=null,oi=!1,Ri=!1;function qs(e){Fe===null?Fe=[e]:Fe.push(e)}function Kd(e){oi=!0,qs(e)}function mn(){if(!Ri&&Fe!==null){Ri=!0;var e=0,n=N;try{var t=Fe;for(N=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Fe=null,oi=!1}catch(i){throw Fe!==null&&(Fe=Fe.slice(e+1)),Es(Kl,mn),i}finally{N=n,Ri=!1}}return null}var Fn=[],$n=0,Ur=null,Hr=0,ke=[],we=0,Cn=null,$e=1,Ue="";function vn(e,n){Fn[$n++]=Hr,Fn[$n++]=Ur,Ur=e,Hr=n}function Zs(e,n,t){ke[we++]=$e,ke[we++]=Ue,ke[we++]=Cn,Cn=e;var r=$e;e=Ue;var i=32-Le(r)-1;r&=~(1<<i),t+=1;var l=32-Le(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$e=1<<32-Le(n)+i|t<<i|r,Ue=l+e}else $e=1<<l|t<<i|r,Ue=e}function io(e){e.return!==null&&(vn(e,1),Zs(e,1,0))}function lo(e){for(;e===Ur;)Ur=Fn[--$n],Fn[$n]=null,Hr=Fn[--$n],Fn[$n]=null;for(;e===Cn;)Cn=ke[--we],ke[we]=null,Ue=ke[--we],ke[we]=null,$e=ke[--we],ke[we]=null}var ge=null,me=null,A=!1,Ie=null;function eu(e,n){var t=xe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ga(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,me=ln(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,me=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Cn!==null?{id:$e,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=xe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,me=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(A){var n=me;if(n){var t=n;if(!ga(e,n)){if(kl(e))throw Error(v(418));n=ln(t.nextSibling);var r=ge;n&&ga(e,n)?eu(r,t):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(kl(e))throw Error(v(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!A)return ha(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=me)){if(kl(e))throw nu(),Error(v(418));for(;n;)eu(e,n),n=ln(n.nextSibling)}if(ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){me=ln(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}me=null}}else me=ge?ln(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=me;e;)e=ln(e.nextSibling)}function qn(){me=ge=null,A=!1}function oo(e){Ie===null?Ie=[e]:Ie.push(e)}var Xd=Qe.ReactCurrentBatchConfig;function pt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function va(e){var n=e._init;return n(e._payload)}function tu(e){function n(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=un(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,h){return u===null||u.tag!==6?(u=bi(f,d.mode,h),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,h){var S=f.type;return S===Mn?g(d,u,f.props.children,h,f.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ke&&va(S)===u.type)?(h=i(u,f.props),h.ref=pt(d,u,f),h.return=d,h):(h=Ir(f.type,f.key,f.props,null,d.mode,h),h.ref=pt(d,u,f),h.return=d,h)}function c(d,u,f,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Vi(f,d.mode,h),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function g(d,u,f,h,S){return u===null||u.tag!==7?(u=En(f,d.mode,h,S),u.return=d,u):(u=i(u,f),u.return=d,u)}function m(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=bi(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case tr:return f=Ir(u.type,u.key,u.props,null,d.mode,f),f.ref=pt(d,null,u),f.return=d,f;case Nn:return u=Vi(u,d.mode,f),u.return=d,u;case Ke:var h=u._init;return m(d,h(u._payload),f)}if(vt(u)||st(u))return u=En(u,d.mode,f,null),u.return=d,u;pr(d,u)}return null}function p(d,u,f,h){var S=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,u,""+f,h);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===S?s(d,u,f,h):null;case Nn:return f.key===S?c(d,u,f,h):null;case Ke:return S=f._init,p(d,u,S(f._payload),h)}if(vt(f)||st(f))return S!==null?null:g(d,u,f,h,null);pr(d,f)}return null}function y(d,u,f,h,S){if(typeof h=="string"&&h!==""||typeof h=="number")return d=d.get(f)||null,a(u,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tr:return d=d.get(h.key===null?f:h.key)||null,s(u,d,h,S);case Nn:return d=d.get(h.key===null?f:h.key)||null,c(u,d,h,S);case Ke:var P=h._init;return y(d,u,f,P(h._payload),S)}if(vt(h)||st(h))return d=d.get(f)||null,g(u,d,h,S,null);pr(u,h)}return null}function k(d,u,f,h){for(var S=null,P=null,C=u,z=u=0,H=null;C!==null&&z<f.length;z++){C.index>z?(H=C,C=null):H=C.sibling;var L=p(d,C,f[z],h);if(L===null){C===null&&(C=H);break}e&&C&&L.alternate===null&&n(d,C),u=l(L,u,z),P===null?S=L:P.sibling=L,P=L,C=H}if(z===f.length)return t(d,C),A&&vn(d,z),S;if(C===null){for(;z<f.length;z++)C=m(d,f[z],h),C!==null&&(u=l(C,u,z),P===null?S=C:P.sibling=C,P=C);return A&&vn(d,z),S}for(C=r(d,C);z<f.length;z++)H=y(C,d,z,f[z],h),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?z:H.key),u=l(H,u,z),P===null?S=H:P.sibling=H,P=H);return e&&C.forEach(function(Ce){return n(d,Ce)}),A&&vn(d,z),S}function w(d,u,f,h){var S=st(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var P=S=null,C=u,z=u=0,H=null,L=f.next();C!==null&&!L.done;z++,L=f.next()){C.index>z?(H=C,C=null):H=C.sibling;var Ce=p(d,C,L.value,h);if(Ce===null){C===null&&(C=H);break}e&&C&&Ce.alternate===null&&n(d,C),u=l(Ce,u,z),P===null?S=Ce:P.sibling=Ce,P=Ce,C=H}if(L.done)return t(d,C),A&&vn(d,z),S;if(C===null){for(;!L.done;z++,L=f.next())L=m(d,L.value,h),L!==null&&(u=l(L,u,z),P===null?S=L:P.sibling=L,P=L);return A&&vn(d,z),S}for(C=r(d,C);!L.done;z++,L=f.next())L=y(C,d,z,L.value,h),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?z:L.key),u=l(L,u,z),P===null?S=L:P.sibling=L,P=L);return e&&C.forEach(function(ot){return n(d,ot)}),A&&vn(d,z),S}function R(d,u,f,h){if(typeof f=="object"&&f!==null&&f.type===Mn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var S=f.key,P=u;P!==null;){if(P.key===S){if(S=f.type,S===Mn){if(P.tag===7){t(d,P.sibling),u=i(P,f.props.children),u.return=d,d=u;break e}}else if(P.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ke&&va(S)===P.type){t(d,P.sibling),u=i(P,f.props),u.ref=pt(d,P,f),u.return=d,d=u;break e}t(d,P);break}else n(d,P);P=P.sibling}f.type===Mn?(u=En(f.props.children,d.mode,h,f.key),u.return=d,d=u):(h=Ir(f.type,f.key,f.props,null,d.mode,h),h.ref=pt(d,u,f),h.return=d,d=h)}return o(d);case Nn:e:{for(P=f.key;u!==null;){if(u.key===P)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){t(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Vi(f,d.mode,h),u.return=d,d=u}return o(d);case Ke:return P=f._init,R(d,u,P(f._payload),h)}if(vt(f))return k(d,u,f,h);if(st(f))return w(d,u,f,h);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(t(d,u.sibling),u=i(u,f),u.return=d,d=u):(t(d,u),u=bi(f,d.mode,h),u.return=d,d=u),o(d)):t(d,u)}return R}var Zn=tu(!0),ru=tu(!1),br=pn(null),Vr=null,Un=null,ao=null;function so(){ao=Un=Vr=null}function uo(e){var n=br.current;B(br),e._currentValue=n}function xl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Vr=e,ao=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ue=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(ao!==e)if(e={context:e,memoizedValue:n,next:null},Un===null){if(Vr===null)throw Error(v(308));Un=e,Vr.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return n}var wn=null;function co(e){wn===null?wn=[e]:wn.push(e)}function iu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,co(n)):(t.next=i.next,i.next=t),n.interleaved=t,We(e,r)}function We(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xe=!1;function fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function on(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,We(e,t)}return i=r.interleaved,i===null?(n.next=n,co(r)):(n.next=i.next,i.next=n),r.interleaved=n,We(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xl(e,t)}}function ya(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Wr(e,n,t,r){var i=e.updateQueue;Xe=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==o&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(l!==null){var m=i.baseState;o=0,g=c=s=null,a=l;do{var p=a.lane,y=a.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=e,w=a;switch(p=n,y=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){m=k.call(y,m,p);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,p=typeof k=="function"?k.call(y,m,p):k,p==null)break e;m=$({},m,p);break e;case 2:Xe=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=m):g=g.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(s=m),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=g,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Tn|=o,e.lanes=o,e.memoizedState=m}}function ka(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(v(191,i));i.call(r)}}}var qt={},Ae=pn(qt),Ut=pn(qt),Ht=pn(qt);function xn(e){if(e===qt)throw Error(v(174));return e}function po(e,n){switch(M(Ht,n),M(Ut,e),M(Ae,qt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:nl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=nl(n,e)}B(Ae),M(Ae,n)}function et(){B(Ae),B(Ut),B(Ht)}function ou(e){xn(Ht.current);var n=xn(Ae.current),t=nl(n,e.type);n!==t&&(M(Ut,e),M(Ae,t))}function mo(e){Ut.current===e&&(B(Ae),B(Ut))}var O=pn(0);function Gr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ai=[];function go(){for(var e=0;e<Ai.length;e++)Ai[e]._workInProgressVersionPrimary=null;Ai.length=0}var Pr=Qe.ReactCurrentDispatcher,Oi=Qe.ReactCurrentBatchConfig,zn=0,F=null,G=null,K=null,Qr=!1,Ct=!1,bt=0,Jd=0;function ee(){throw Error(v(321))}function ho(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ne(e[t],n[t]))return!1;return!0}function vo(e,n,t,r,i,l){if(zn=l,F=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Pr.current=e===null||e.memoizedState===null?nf:tf,e=t(r,i),Ct){l=0;do{if(Ct=!1,bt=0,25<=l)throw Error(v(301));l+=1,K=G=null,n.updateQueue=null,Pr.current=rf,e=t(r,i)}while(Ct)}if(Pr.current=Yr,n=G!==null&&G.next!==null,zn=0,K=G=F=null,Qr=!1,n)throw Error(v(300));return e}function yo(){var e=bt!==0;return bt=0,e}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?F.memoizedState=K=e:K=K.next=e,K}function Pe(){if(G===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=K===null?F.memoizedState:K.next;if(n!==null)K=n,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},K===null?F.memoizedState=K=e:K=K.next=e}return K}function Vt(e,n){return typeof n=="function"?n(e):n}function Fi(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=G,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,c=l;do{var g=c.lane;if((zn&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,F.lanes|=g,Tn|=g}c=c.next}while(c!==null&&c!==l);s===null?o=r:s.next=a,Ne(r,n.memoizedState)||(ue=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,F.lanes|=l,Tn|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function $i(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ne(l,n.memoizedState)||(ue=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function au(){}function su(e,n){var t=F,r=Pe(),i=n(),l=!Ne(r.memoizedState,i);if(l&&(r.memoizedState=i,ue=!0),r=r.queue,ko(du.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||K!==null&&K.memoizedState.tag&1){if(t.flags|=2048,Wt(9,cu.bind(null,t,r,i,n),void 0,null),X===null)throw Error(v(349));zn&30||uu(t,n,i)}return i}function uu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function cu(e,n,t,r){n.value=t,n.getSnapshot=r,fu(n)&&pu(e)}function du(e,n,t){return t(function(){fu(n)&&pu(e)})}function fu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ne(e,t)}catch{return!0}}function pu(e){var n=We(e,1);n!==null&&De(n,e,1,-1)}function wa(e){var n=je();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},n.queue=e,e=e.dispatch=ef.bind(null,F,e),[n.memoizedState,e]}function Wt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=F.updateQueue,n===null?(n={lastEffect:null,stores:null},F.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function mu(){return Pe().memoizedState}function Cr(e,n,t,r){var i=je();F.flags|=e,i.memoizedState=Wt(1|n,t,void 0,r===void 0?null:r)}function ai(e,n,t,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(G!==null){var o=G.memoizedState;if(l=o.destroy,r!==null&&ho(r,o.deps)){i.memoizedState=Wt(n,t,l,r);return}}F.flags|=e,i.memoizedState=Wt(1|n,t,l,r)}function xa(e,n){return Cr(8390656,8,e,n)}function ko(e,n){return ai(2048,8,e,n)}function gu(e,n){return ai(4,2,e,n)}function hu(e,n){return ai(4,4,e,n)}function vu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function yu(e,n,t){return t=t!=null?t.concat([e]):null,ai(4,4,vu.bind(null,n,e),t)}function wo(){}function ku(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ho(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wu(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ho(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function xu(e,n,t){return zn&21?(Ne(t,n)||(t=zs(),F.lanes|=t,Tn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=t)}function qd(e,n){var t=N;N=t!==0&&4>t?t:4,e(!0);var r=Oi.transition;Oi.transition={};try{e(!1),n()}finally{N=t,Oi.transition=r}}function Su(){return Pe().memoizedState}function Zd(e,n,t){var r=sn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Eu(e))Pu(n,t);else if(t=iu(e,n,t,r),t!==null){var i=le();De(t,e,r,i),Cu(t,n,r)}}function ef(e,n,t){var r=sn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Eu(e))Pu(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,a=l(o,t);if(i.hasEagerState=!0,i.eagerState=a,Ne(a,o)){var s=n.interleaved;s===null?(i.next=i,co(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=iu(e,n,i,r),t!==null&&(i=le(),De(t,e,r,i),Cu(t,n,r))}}function Eu(e){var n=e.alternate;return e===F||n!==null&&n===F}function Pu(e,n){Ct=Qr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Xl(e,t)}}var Yr={readContext:Ee,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},nf={readContext:Ee,useCallback:function(e,n){return je().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:xa,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Cr(4194308,4,vu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Cr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Cr(4,2,e,n)},useMemo:function(e,n){var t=je();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=je();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zd.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var n=je();return e={current:e},n.memoizedState=e},useState:wa,useDebugValue:wo,useDeferredValue:function(e){return je().memoizedState=e},useTransition:function(){var e=wa(!1),n=e[0];return e=qd.bind(null,e[1]),je().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=F,i=je();if(A){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),X===null)throw Error(v(349));zn&30||uu(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,xa(du.bind(null,r,l,e),[e]),r.flags|=2048,Wt(9,cu.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=je(),n=X.identifierPrefix;if(A){var t=Ue,r=$e;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=bt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tf={readContext:Ee,useCallback:ku,useContext:Ee,useEffect:ko,useImperativeHandle:yu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:wu,useReducer:Fi,useRef:mu,useState:function(){return Fi(Vt)},useDebugValue:wo,useDeferredValue:function(e){var n=Pe();return xu(n,G.memoizedState,e)},useTransition:function(){var e=Fi(Vt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1},rf={readContext:Ee,useCallback:ku,useContext:Ee,useEffect:ko,useImperativeHandle:yu,useInsertionEffect:gu,useLayoutEffect:hu,useMemo:wu,useReducer:$i,useRef:mu,useState:function(){return $i(Vt)},useDebugValue:wo,useDeferredValue:function(e){var n=Pe();return G===null?n.memoizedState=e:xu(n,G.memoizedState,e)},useTransition:function(){var e=$i(Vt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:au,useSyncExternalStore:su,useId:Su,unstable_isNewReconciler:!1};function Te(e,n){if(e&&e.defaultProps){n=$({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Sl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:$({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var si={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=le(),i=sn(e),l=He(r,i);l.payload=n,t!=null&&(l.callback=t),n=on(e,l,i),n!==null&&(De(n,e,i,r),Er(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=le(),i=sn(e),l=He(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=on(e,l,i),n!==null&&(De(n,e,i,r),Er(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=le(),r=sn(e),i=He(t,r);i.tag=2,n!=null&&(i.callback=n),n=on(e,i,r),n!==null&&(De(n,e,r,t),Er(n,e,r))}};function Sa(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!At(t,r)||!At(i,l):!0}function zu(e,n,t){var r=!1,i=dn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ee(l):(i=de(n)?Pn:re.current,r=n.contextTypes,l=(r=r!=null)?Jn(e,i):dn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=si,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Ea(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&si.enqueueReplaceState(n,n.state,null)}function El(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},fo(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ee(l):(l=de(n)?Pn:re.current,i.context=Jn(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Sl(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&si.enqueueReplaceState(i,i.state,null),Wr(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,n){try{var t="",r=n;do t+=Dc(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Ui(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Xr||(Xr=!0,jl=r),Pl(e,n)},t}function _u(e,n,t){t=He(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Pl(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Pl(e,n),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Pa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=kf.bind(null,e,n,t),n.then(e,e))}function Ca(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function za(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,on(t,n,1))),t.lanes|=1),e)}var of=Qe.ReactCurrentOwner,ue=!1;function ie(e,n,t,r){n.child=e===null?ru(n,null,t,r):Zn(n,e.child,t,r)}function Ta(e,n,t,r,i){t=t.render;var l=n.ref;return Yn(n,i),r=vo(e,n,t,r,l,i),t=yo(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(A&&t&&io(n),n.flags|=1,ie(e,n,r,i),n.child)}function _a(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!_o(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Iu(e,n,l,r,i)):(e=Ir(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(o,r)&&e.ref===n.ref)return Ge(e,n,i)}return n.flags|=1,e=un(l,r),e.ref=n.ref,e.return=n,n.child=e}function Iu(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(At(l,r)&&e.ref===n.ref)if(ue=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ue=!0);else return n.lanes=e.lanes,Ge(e,n,i)}return Cl(e,n,t,r,i)}function Lu(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(bn,pe),pe|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(bn,pe),pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,M(bn,pe),pe|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,M(bn,pe),pe|=r;return ie(e,n,i,t),n.child}function Du(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Cl(e,n,t,r,i){var l=de(t)?Pn:re.current;return l=Jn(n,l),Yn(n,i),t=vo(e,n,t,r,l,i),r=yo(),e!==null&&!ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Ge(e,n,i)):(A&&r&&io(n),n.flags|=1,ie(e,n,t,i),n.child)}function Ia(e,n,t,r,i){if(de(t)){var l=!0;$r(n)}else l=!1;if(Yn(n,i),n.stateNode===null)zr(e,n),zu(n,t,r),El(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=de(t)?Pn:re.current,c=Jn(n,c));var g=t.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Ea(n,o,r,c),Xe=!1;var p=n.memoizedState;o.state=p,Wr(n,r,o,i),s=n.memoizedState,a!==r||p!==s||ce.current||Xe?(typeof g=="function"&&(Sl(n,t,g,r),s=n.memoizedState),(a=Xe||Sa(n,t,a,r,p,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,lu(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Te(n.type,a),o.props=c,m=n.pendingProps,p=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ee(s):(s=de(t)?Pn:re.current,s=Jn(n,s));var y=t.getDerivedStateFromProps;(g=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==s)&&Ea(n,o,r,s),Xe=!1,p=n.memoizedState,o.state=p,Wr(n,r,o,i);var k=n.memoizedState;a!==m||p!==k||ce.current||Xe?(typeof y=="function"&&(Sl(n,t,y,r),k=n.memoizedState),(c=Xe||Sa(n,t,c,r,p,k,s)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return zl(e,n,t,r,l,i)}function zl(e,n,t,r,i,l){Du(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&ma(n,t,!1),Ge(e,n,l);r=n.stateNode,of.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Zn(n,e.child,null,l),n.child=Zn(n,null,a,l)):ie(e,n,a,l),n.memoizedState=r.state,i&&ma(n,t,!0),n.child}function Nu(e){var n=e.stateNode;n.pendingContext?pa(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pa(e,n.context,!1),po(e,n.containerInfo)}function La(e,n,t,r,i){return qn(),oo(i),n.flags|=256,ie(e,n,t,r),n.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function _l(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,n,t){var r=n.pendingProps,i=O.current,l=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(O,i&1),e===null)return wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=di(o,r,0,null),e=En(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=_l(t),n.memoizedState=Tl,e):xo(n,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return af(e,n,o,r,a,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=un(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=un(a,l):(l=En(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?_l(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Tl,r}return l=e.child,e=l.sibling,r=un(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xo(e,n){return n=di({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&oo(r),Zn(n,e.child,null,t),e=xo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function af(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Ui(Error(v(422))),mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=di({mode:"visible",children:r.children},i,0,null),l=En(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Zn(n,e.child,null,o),n.child.memoizedState=_l(o),n.memoizedState=Tl,l);if(!(n.mode&1))return mr(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(v(419)),r=Ui(l,r,void 0),mr(e,n,o,r)}if(a=(o&e.childLanes)!==0,ue||a){if(r=X,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,We(e,i),De(r,e,i,-1))}return To(),r=Ui(Error(v(421))),mr(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=wf.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,me=ln(i.nextSibling),ge=n,A=!0,Ie=null,e!==null&&(ke[we++]=$e,ke[we++]=Ue,ke[we++]=Cn,$e=e.id,Ue=e.overflow,Cn=n),n=xo(n,r.children),n.flags|=4096,n)}function Da(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),xl(e.return,n,t)}function Hi(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function ju(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(ie(e,n,r.children,t),r=O.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Da(e,t,n);else if(e.tag===19)Da(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(O,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Gr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Hi(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Gr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Hi(n,!0,t,null,l);break;case"together":Hi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Tn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=un(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=un(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function sf(e,n,t){switch(n.tag){case 3:Nu(n),qn();break;case 5:ou(n);break;case 1:de(n.type)&&$r(n);break;case 4:po(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;M(br,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(M(O,O.current&1),n.flags|=128,null):t&n.child.childLanes?Mu(e,n,t):(M(O,O.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);M(O,O.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return ju(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(O,O.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return Ge(e,n,t)}var Bu,Il,Ru,Au;Bu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Il=function(){};Ru=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,xn(Ae.current);var l=null;switch(t){case"input":i=Ji(e,i),r=Ji(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=el(e,i),r=el(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Or)}tl(t,r);var o;t=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(l||(l=[]),l.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&j("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}t&&(l=l||[]).push("style",t);var c=l;(n.updateQueue=c)&&(n.flags|=4)}};Au=function(e,n,t,r){t!==r&&(n.flags|=4)};function mt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ne(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function uf(e,n,t){var r=n.pendingProps;switch(lo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(n),null;case 1:return de(n.type)&&Fr(),ne(n),null;case 3:return r=n.stateNode,et(),B(ce),B(re),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ie!==null&&(Al(Ie),Ie=null))),Il(e,n),ne(n),null;case 5:mo(n);var i=xn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Ru(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return ne(n),null}if(e=xn(Ae.current),fr(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Be]=n,r[$t]=l,e=(n.mode&1)!==0,t){case"dialog":j("cancel",r),j("close",r);break;case"iframe":case"object":case"embed":j("load",r);break;case"video":case"audio":for(i=0;i<kt.length;i++)j(kt[i],r);break;case"source":j("error",r);break;case"img":case"image":case"link":j("error",r),j("load",r);break;case"details":j("toggle",r);break;case"input":$o(r,l),j("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},j("invalid",r);break;case"textarea":Ho(r,l),j("invalid",r)}tl(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),i=["children",""+a]):Lt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&j("scroll",r)}switch(t){case"input":rr(r),Uo(r,l,!0);break;case"textarea":rr(r),bo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Or)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ds(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Be]=n,e[$t]=r,Bu(e,n,!1,!1),n.stateNode=e;e:{switch(o=rl(t,r),t){case"dialog":j("cancel",e),j("close",e),i=r;break;case"iframe":case"object":case"embed":j("load",e),i=r;break;case"video":case"audio":for(i=0;i<kt.length;i++)j(kt[i],e);i=r;break;case"source":j("error",e),i=r;break;case"img":case"image":case"link":j("error",e),j("load",e),i=r;break;case"details":j("toggle",e),i=r;break;case"input":$o(e,r),i=Ji(e,r),j("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),j("invalid",e);break;case"textarea":Ho(e,r),i=el(e,r),j("invalid",e);break;default:i=r}tl(t,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?ms(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&fs(e,s)):l==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Dt(e,s):typeof s=="number"&&Dt(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Lt.hasOwnProperty(l)?s!=null&&l==="onScroll"&&j("scroll",e):s!=null&&Vl(e,l,s,o))}switch(t){case"input":rr(e),Uo(e,r,!1);break;case"textarea":rr(e),bo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Or)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ne(n),null;case 6:if(e&&n.stateNode!=null)Au(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=xn(Ht.current),xn(Ae.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Be]=n,(l=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Be]=n,n.stateNode=r}return ne(n),null;case 13:if(B(O),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&me!==null&&n.mode&1&&!(n.flags&128))nu(),qn(),n.flags|=98560,l=!1;else if(l=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(v(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(v(317));l[Be]=n}else qn(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ne(n),l=!1}else Ie!==null&&(Al(Ie),Ie=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||O.current&1?Q===0&&(Q=3):To())),n.updateQueue!==null&&(n.flags|=4),ne(n),null);case 4:return et(),Il(e,n),e===null&&Ot(n.stateNode.containerInfo),ne(n),null;case 10:return uo(n.type._context),ne(n),null;case 17:return de(n.type)&&Fr(),ne(n),null;case 19:if(B(O),l=n.memoizedState,l===null)return ne(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)mt(l,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Gr(e),o!==null){for(n.flags|=128,mt(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(O,O.current&1|2),n.child}e=e.sibling}l.tail!==null&&V()>tt&&(n.flags|=128,r=!0,mt(l,!1),n.lanes=4194304)}else{if(!r)if(e=Gr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),mt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!A)return ne(n),null}else 2*V()-l.renderingStartTime>tt&&t!==1073741824&&(n.flags|=128,r=!0,mt(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=V(),n.sibling=null,t=O.current,M(O,r?t&1|2:t&1),n):(ne(n),null);case 22:case 23:return zo(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?pe&1073741824&&(ne(n),n.subtreeFlags&6&&(n.flags|=8192)):ne(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function cf(e,n){switch(lo(n),n.tag){case 1:return de(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(),B(ce),B(re),go(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return mo(n),null;case 13:if(B(O),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));qn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(O),null;case 4:return et(),null;case 10:return uo(n.type._context),null;case 22:case 23:return zo(),null;case 24:return null;default:return null}}var gr=!1,te=!1,df=typeof WeakSet=="function"?WeakSet:Set,x=null;function Hn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Ll(e,n,t){try{t()}catch(r){U(e,n,r)}}var Na=!1;function ff(e,n){if(pl=Br,e=Hs(),ro(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,g=0,m=e,p=null;n:for(;;){for(var y;m!==t||i!==0&&m.nodeType!==3||(a=o+i),m!==l||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break n;if(p===t&&++c===i&&(a=o),p===l&&++g===r&&(s=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(ml={focusedElem:e,selectionRange:t},Br=!1,x=n;x!==null;)if(n=x,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,x=e;else for(;x!==null;){n=x;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,R=k.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Te(n.type,w),R);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(h){U(n,n.return,h)}if(e=n.sibling,e!==null){e.return=n.return,x=e;break}x=n.return}return k=Na,Na=!1,k}function zt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Ll(n,t,l)}i=i.next}while(i!==r)}}function ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Dl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ou(e){var n=e.alternate;n!==null&&(e.alternate=null,Ou(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Be],delete n[$t],delete n[vl],delete n[Qd],delete n[Yd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Or));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}function Ml(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,n,t),e=e.sibling;e!==null;)Ml(e,n,t),e=e.sibling}var J=null,_e=!1;function Ye(e,n,t){for(t=t.child;t!==null;)$u(e,n,t),t=t.sibling}function $u(e,n,t){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ni,t)}catch{}switch(t.tag){case 5:te||Hn(t,n);case 6:var r=J,i=_e;J=null,Ye(e,n,t),J=r,_e=i,J!==null&&(_e?(e=J,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):J.removeChild(t.stateNode));break;case 18:J!==null&&(_e?(e=J,t=t.stateNode,e.nodeType===8?Bi(e.parentNode,t):e.nodeType===1&&Bi(e,t),Bt(e)):Bi(J,t.stateNode));break;case 4:r=J,i=_e,J=t.stateNode.containerInfo,_e=!0,Ye(e,n,t),J=r,_e=i;break;case 0:case 11:case 14:case 15:if(!te&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Ll(t,n,o),i=i.next}while(i!==r)}Ye(e,n,t);break;case 1:if(!te&&(Hn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){U(t,n,a)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(te=(r=te)||t.memoizedState!==null,Ye(e,n,t),te=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function ja(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new df),n.forEach(function(r){var i=xf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:J=a.stateNode,_e=!1;break e;case 3:J=a.stateNode.containerInfo,_e=!0;break e;case 4:J=a.stateNode.containerInfo,_e=!0;break e}a=a.return}if(J===null)throw Error(v(160));$u(l,o,i),J=null,_e=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){U(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uu(n,e),n=n.sibling}function Uu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Me(e),r&4){try{zt(3,e,e.return),ui(3,e)}catch(w){U(e,e.return,w)}try{zt(5,e,e.return)}catch(w){U(e,e.return,w)}}break;case 1:ze(n,e),Me(e),r&512&&t!==null&&Hn(t,t.return);break;case 5:if(ze(n,e),Me(e),r&512&&t!==null&&Hn(t,t.return),e.flags&32){var i=e.stateNode;try{Dt(i,"")}catch(w){U(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&us(i,l),rl(a,o);var c=rl(a,l);for(o=0;o<s.length;o+=2){var g=s[o],m=s[o+1];g==="style"?ms(i,m):g==="dangerouslySetInnerHTML"?fs(i,m):g==="children"?Dt(i,m):Vl(i,g,m,c)}switch(a){case"input":qi(i,l);break;case"textarea":cs(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?Vn(i,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?Vn(i,!!l.multiple,l.defaultValue,!0):Vn(i,!!l.multiple,l.multiple?[]:"",!1))}i[$t]=l}catch(w){U(e,e.return,w)}}break;case 6:if(ze(n,e),Me(e),r&4){if(e.stateNode===null)throw Error(v(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){U(e,e.return,w)}}break;case 3:if(ze(n,e),Me(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Bt(n.containerInfo)}catch(w){U(e,e.return,w)}break;case 4:ze(n,e),Me(e);break;case 13:ze(n,e),Me(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Po=V())),r&4&&ja(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(te=(c=te)||g,ze(n,e),te=c):ze(n,e),Me(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(x=e,g=e.child;g!==null;){for(m=x=g;x!==null;){switch(p=x,y=p.child,p.tag){case 0:case 11:case 14:case 15:zt(4,p,p.return);break;case 1:Hn(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){U(r,t,w)}}break;case 5:Hn(p,p.return);break;case 22:if(p.memoizedState!==null){Ra(m);continue}}y!==null?(y.return=p,x=y):Ra(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ps("display",o))}catch(w){U(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){U(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ze(n,e),Me(e),r&4&&ja(e);break;case 21:break;default:ze(n,e),Me(e)}}function Me(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fu(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dt(i,""),r.flags&=-33);var l=Ma(e);Ml(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ma(e);Nl(e,a,o);break;default:throw Error(v(161))}}catch(s){U(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pf(e,n,t){x=e,Hu(e)}function Hu(e,n,t){for(var r=(e.mode&1)!==0;x!==null;){var i=x,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gr;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||te;a=gr;var c=te;if(gr=o,(te=s)&&!c)for(x=i;x!==null;)o=x,s=o.child,o.tag===22&&o.memoizedState!==null?Aa(i):s!==null?(s.return=o,x=s):Aa(i);for(;l!==null;)x=l,Hu(l),l=l.sibling;x=i,gr=a,te=c}Ba(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,x=l):Ba(e)}}function Ba(e){for(;x!==null;){var n=x;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:te||ui(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!te)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Te(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&ka(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ka(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Bt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}te||n.flags&512&&Dl(n)}catch(p){U(n,n.return,p)}}if(n===e){x=null;break}if(t=n.sibling,t!==null){t.return=n.return,x=t;break}x=n.return}}function Ra(e){for(;x!==null;){var n=x;if(n===e){x=null;break}var t=n.sibling;if(t!==null){t.return=n.return,x=t;break}x=n.return}}function Aa(e){for(;x!==null;){var n=x;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ui(4,n)}catch(s){U(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){U(n,i,s)}}var l=n.return;try{Dl(n)}catch(s){U(n,l,s)}break;case 5:var o=n.return;try{Dl(n)}catch(s){U(n,o,s)}}}catch(s){U(n,n.return,s)}if(n===e){x=null;break}var a=n.sibling;if(a!==null){a.return=n.return,x=a;break}x=n.return}}var mf=Math.ceil,Kr=Qe.ReactCurrentDispatcher,So=Qe.ReactCurrentOwner,Se=Qe.ReactCurrentBatchConfig,D=0,X=null,W=null,q=0,pe=0,bn=pn(0),Q=0,Gt=null,Tn=0,ci=0,Eo=0,Tt=null,se=null,Po=0,tt=1/0,Oe=null,Xr=!1,jl=null,an=null,hr=!1,en=null,Jr=0,_t=0,Bl=null,Tr=-1,_r=0;function le(){return D&6?V():Tr!==-1?Tr:Tr=V()}function sn(e){return e.mode&1?D&2&&q!==0?q&-q:Xd.transition!==null?(_r===0&&(_r=zs()),_r):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e):1}function De(e,n,t,r){if(50<_t)throw _t=0,Bl=null,Error(v(185));Kt(e,t,r),(!(D&2)||e!==X)&&(e===X&&(!(D&2)&&(ci|=t),Q===4&&qe(e,q)),fe(e,r),t===1&&D===0&&!(n.mode&1)&&(tt=V()+500,oi&&mn()))}function fe(e,n){var t=e.callbackNode;Xc(e,n);var r=jr(e,e===X?q:0);if(r===0)t!==null&&Go(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Go(t),n===1)e.tag===0?Kd(Oa.bind(null,e)):qs(Oa.bind(null,e)),Wd(function(){!(D&6)&&mn()}),t=null;else{switch(Ts(r)){case 1:t=Kl;break;case 4:t=Ps;break;case 16:t=Mr;break;case 536870912:t=Cs;break;default:t=Mr}t=Xu(t,bu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function bu(e,n){if(Tr=-1,_r=0,D&6)throw Error(v(327));var t=e.callbackNode;if(Kn()&&e.callbackNode!==t)return null;var r=jr(e,e===X?q:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=qr(e,r);else{n=r;var i=D;D|=2;var l=Wu();(X!==e||q!==n)&&(Oe=null,tt=V()+500,Sn(e,n));do try{vf();break}catch(a){Vu(e,a)}while(!0);so(),Kr.current=l,D=i,W!==null?n=0:(X=null,q=0,n=Q)}if(n!==0){if(n===2&&(i=sl(e),i!==0&&(r=i,n=Rl(e,i))),n===1)throw t=Gt,Sn(e,0),qe(e,r),fe(e,V()),t;if(n===6)qe(e,r);else{if(i=e.current.alternate,!(r&30)&&!gf(i)&&(n=qr(e,r),n===2&&(l=sl(e),l!==0&&(r=l,n=Rl(e,l))),n===1))throw t=Gt,Sn(e,0),qe(e,r),fe(e,V()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:yn(e,se,Oe);break;case 3:if(qe(e,r),(r&130023424)===r&&(n=Po+500-V(),10<n)){if(jr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hl(yn.bind(null,e,se,Oe),n);break}yn(e,se,Oe);break;case 4:if(qe(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Le(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mf(r/1960))-r,10<r){e.timeoutHandle=hl(yn.bind(null,e,se,Oe),r);break}yn(e,se,Oe);break;case 5:yn(e,se,Oe);break;default:throw Error(v(329))}}}return fe(e,V()),e.callbackNode===t?bu.bind(null,e):null}function Rl(e,n){var t=Tt;return e.current.memoizedState.isDehydrated&&(Sn(e,n).flags|=256),e=qr(e,n),e!==2&&(n=se,se=t,n!==null&&Al(n)),e}function Al(e){se===null?se=e:se.push.apply(se,e)}function gf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ne(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qe(e,n){for(n&=~Eo,n&=~ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Oa(e){if(D&6)throw Error(v(327));Kn();var n=jr(e,0);if(!(n&1))return fe(e,V()),null;var t=qr(e,n);if(e.tag!==0&&t===2){var r=sl(e);r!==0&&(n=r,t=Rl(e,r))}if(t===1)throw t=Gt,Sn(e,0),qe(e,n),fe(e,V()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,yn(e,se,Oe),fe(e,V()),null}function Co(e,n){var t=D;D|=1;try{return e(n)}finally{D=t,D===0&&(tt=V()+500,oi&&mn())}}function _n(e){en!==null&&en.tag===0&&!(D&6)&&Kn();var n=D;D|=1;var t=Se.transition,r=N;try{if(Se.transition=null,N=1,e)return e()}finally{N=r,Se.transition=t,D=n,!(D&6)&&mn()}}function zo(){pe=bn.current,B(bn)}function Sn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Vd(t)),W!==null)for(t=W.return;t!==null;){var r=t;switch(lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:et(),B(ce),B(re),go();break;case 5:mo(r);break;case 4:et();break;case 13:B(O);break;case 19:B(O);break;case 10:uo(r.type._context);break;case 22:case 23:zo()}t=t.return}if(X=e,W=e=un(e.current,null),q=pe=n,Q=0,Gt=null,Eo=ci=Tn=0,se=Tt=null,wn!==null){for(n=0;n<wn.length;n++)if(t=wn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}wn=null}return e}function Vu(e,n){do{var t=W;try{if(so(),Pr.current=Yr,Qr){for(var r=F.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qr=!1}if(zn=0,K=G=F=null,Ct=!1,bt=0,So.current=null,t===null||t.return===null){Q=1,Gt=n,W=null;break}e:{var l=e,o=t.return,a=t,s=n;if(n=q,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Ca(o);if(y!==null){y.flags&=-257,za(y,o,a,l,n),y.mode&1&&Pa(l,c,n),n=y,s=c;var k=n.updateQueue;if(k===null){var w=new Set;w.add(s),n.updateQueue=w}else k.add(s);break e}else{if(!(n&1)){Pa(l,c,n),To();break e}s=Error(v(426))}}else if(A&&a.mode&1){var R=Ca(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),za(R,o,a,l,n),oo(nt(s,a));break e}}l=s=nt(s,a),Q!==4&&(Q=2),Tt===null?Tt=[l]:Tt.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var d=Tu(l,s,n);ya(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(an===null||!an.has(f)))){l.flags|=65536,n&=-n,l.lanes|=n;var h=_u(l,a,n);ya(l,h);break e}}l=l.return}while(l!==null)}Qu(t)}catch(S){n=S,W===t&&t!==null&&(W=t=t.return);continue}break}while(!0)}function Wu(){var e=Kr.current;return Kr.current=Yr,e===null?Yr:e}function To(){(Q===0||Q===3||Q===2)&&(Q=4),X===null||!(Tn&268435455)&&!(ci&268435455)||qe(X,q)}function qr(e,n){var t=D;D|=2;var r=Wu();(X!==e||q!==n)&&(Oe=null,Sn(e,n));do try{hf();break}catch(i){Vu(e,i)}while(!0);if(so(),D=t,Kr.current=r,W!==null)throw Error(v(261));return X=null,q=0,Q}function hf(){for(;W!==null;)Gu(W)}function vf(){for(;W!==null&&!Uc();)Gu(W)}function Gu(e){var n=Ku(e.alternate,e,pe);e.memoizedProps=e.pendingProps,n===null?Qu(e):W=n,So.current=null}function Qu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=cf(t,n),t!==null){t.flags&=32767,W=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,W=null;return}}else if(t=uf(t,n,pe),t!==null){W=t;return}if(n=n.sibling,n!==null){W=n;return}W=n=e}while(n!==null);Q===0&&(Q=5)}function yn(e,n,t){var r=N,i=Se.transition;try{Se.transition=null,N=1,yf(e,n,t,r)}finally{Se.transition=i,N=r}return null}function yf(e,n,t,r){do Kn();while(en!==null);if(D&6)throw Error(v(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Jc(e,l),e===X&&(W=X=null,q=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hr||(hr=!0,Xu(Mr,function(){return Kn(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Se.transition,Se.transition=null;var o=N;N=1;var a=D;D|=4,So.current=null,ff(e,t),Uu(t,e),Ad(ml),Br=!!pl,ml=pl=null,e.current=t,pf(t),Hc(),D=a,N=o,Se.transition=l}else e.current=t;if(hr&&(hr=!1,en=e,Jr=i),l=e.pendingLanes,l===0&&(an=null),Wc(t.stateNode),fe(e,V()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xr)throw Xr=!1,e=jl,jl=null,e;return Jr&1&&e.tag!==0&&Kn(),l=e.pendingLanes,l&1?e===Bl?_t++:(_t=0,Bl=e):_t=0,mn(),null}function Kn(){if(en!==null){var e=Ts(Jr),n=Se.transition,t=N;try{if(Se.transition=null,N=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Jr=0,D&6)throw Error(v(331));var i=D;for(D|=4,x=e.current;x!==null;){var l=x,o=l.child;if(x.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(x=c;x!==null;){var g=x;switch(g.tag){case 0:case 11:case 15:zt(8,g,l)}var m=g.child;if(m!==null)m.return=g,x=m;else for(;x!==null;){g=x;var p=g.sibling,y=g.return;if(Ou(g),g===c){x=null;break}if(p!==null){p.return=y,x=p;break}x=y}}}var k=l.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}x=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,x=o;else e:for(;x!==null;){if(l=x,l.flags&2048)switch(l.tag){case 0:case 11:case 15:zt(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,x=d;break e}x=l.return}}var u=e.current;for(x=u;x!==null;){o=x;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,x=f;else e:for(o=u;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ui(9,a)}}catch(S){U(a,a.return,S)}if(a===o){x=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,x=h;break e}x=a.return}}if(D=i,mn(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{N=t,Se.transition=n}}return!1}function Fa(e,n,t){n=nt(t,n),n=Tu(e,n,1),e=on(e,n,1),n=le(),e!==null&&(Kt(e,1,n),fe(e,n))}function U(e,n,t){if(e.tag===3)Fa(e,e,t);else for(;n!==null;){if(n.tag===3){Fa(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){e=nt(t,e),e=_u(n,e,1),n=on(n,e,1),e=le(),n!==null&&(Kt(n,1,e),fe(n,e));break}}n=n.return}}function kf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=le(),e.pingedLanes|=e.suspendedLanes&t,X===e&&(q&t)===t&&(Q===4||Q===3&&(q&130023424)===q&&500>V()-Po?Sn(e,0):Eo|=t),fe(e,n)}function Yu(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=le();e=We(e,n),e!==null&&(Kt(e,n,t),fe(e,t))}function wf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Yu(e,t)}function xf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Yu(e,t)}var Ku;Ku=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ce.current)ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ue=!1,sf(e,n,t);ue=!!(e.flags&131072)}else ue=!1,A&&n.flags&1048576&&Zs(n,Hr,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var i=Jn(n,re.current);Yn(n,t),i=vo(null,n,r,e,i,t);var l=yo();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,de(r)?(l=!0,$r(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fo(n),i.updater=si,n.stateNode=i,i._reactInternals=n,El(n,r,e,t),n=zl(null,n,r,!0,l,t)):(n.tag=0,A&&l&&io(n),ie(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Ef(r),e=Te(r,e),i){case 0:n=Cl(null,n,r,e,t);break e;case 1:n=Ia(null,n,r,e,t);break e;case 11:n=Ta(null,n,r,e,t);break e;case 14:n=_a(null,n,r,Te(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Cl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Ia(e,n,r,i,t);case 3:e:{if(Nu(n),e===null)throw Error(v(387));r=n.pendingProps,l=n.memoizedState,i=l.element,lu(e,n),Wr(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=nt(Error(v(423)),n),n=La(e,n,r,t,i);break e}else if(r!==i){i=nt(Error(v(424)),n),n=La(e,n,r,t,i);break e}else for(me=ln(n.stateNode.containerInfo.firstChild),ge=n,A=!0,Ie=null,t=ru(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qn(),r===i){n=Ge(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return ou(n),e===null&&wl(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,gl(r,i)?o=null:l!==null&&gl(r,l)&&(n.flags|=32),Du(e,n),ie(e,n,o,t),n.child;case 6:return e===null&&wl(n),null;case 13:return Mu(e,n,t);case 4:return po(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Zn(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),Ta(e,n,r,i,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,M(br,r._currentValue),r._currentValue=o,l!==null)if(Ne(l.value,o)){if(l.children===i.children&&!ce.current){n=Ge(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=He(-1,t&-t),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),xl(l.return,t,n),a.lanes|=t;break}s=s.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(v(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),xl(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}ie(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Yn(n,t),i=Ee(i),r=r(i),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,i=Te(r,n.pendingProps),i=Te(r.type,i),_a(e,n,r,i,t);case 15:return Iu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Te(r,i),zr(e,n),n.tag=1,de(r)?(e=!0,$r(n)):e=!1,Yn(n,t),zu(n,r,i),El(n,r,i,t),zl(null,n,r,!0,e,t);case 19:return ju(e,n,t);case 22:return Lu(e,n,t)}throw Error(v(156,n.tag))};function Xu(e,n){return Es(e,n)}function Sf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,n,t,r){return new Sf(e,n,t,r)}function _o(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return _o(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Ql)return 14}return 2}function un(e,n){var t=e.alternate;return t===null?(t=xe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ir(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")_o(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mn:return En(t.children,i,l,n);case Wl:o=8,i|=8;break;case Qi:return e=xe(12,t,n,i|2),e.elementType=Qi,e.lanes=l,e;case Yi:return e=xe(13,t,n,i),e.elementType=Yi,e.lanes=l,e;case Ki:return e=xe(19,t,n,i),e.elementType=Ki,e.lanes=l,e;case os:return di(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:o=10;break e;case ls:o=9;break e;case Gl:o=11;break e;case Ql:o=14;break e;case Ke:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=xe(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function En(e,n,t,r){return e=xe(7,e,r,n),e.lanes=t,e}function di(e,n,t,r){return e=xe(22,e,r,n),e.elementType=os,e.lanes=t,e.stateNode={isHidden:!1},e}function bi(e,n,t){return e=xe(6,e,null,n),e.lanes=t,e}function Vi(e,n,t){return n=xe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Pf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Io(e,n,t,r,i,l,o,a,s){return e=new Pf(e,n,t,a,s),n===1?(n=1,l===!0&&(n|=8)):n=0,l=xe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fo(l),e}function Cf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ju(e){if(!e)return dn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(de(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(de(t))return Js(e,t,n)}return n}function qu(e,n,t,r,i,l,o,a,s){return e=Io(t,r,!0,e,i,l,o,a,s),e.context=Ju(null),t=e.current,r=le(),i=sn(t),l=He(r,i),l.callback=n??null,on(t,l,i),e.current.lanes=i,Kt(e,i,r),fe(e,r),e}function fi(e,n,t,r){var i=n.current,l=le(),o=sn(i);return t=Ju(t),n.context===null?n.context=t:n.pendingContext=t,n=He(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=on(i,n,o),e!==null&&(De(e,i,o,l),Er(e,i,o)),o}function Zr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $a(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Lo(e,n){$a(e,n),(e=e.alternate)&&$a(e,n)}function zf(){return null}var Zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Do(e){this._internalRoot=e}pi.prototype.render=Do.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));fi(e,n,null,null)};pi.prototype.unmount=Do.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_n(function(){fi(null,e,null,null)}),n[Ve]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Je.length&&n!==0&&n<Je[t].priority;t++);Je.splice(t,0,e),t===0&&Ns(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ua(){}function Tf(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=Zr(o);l.call(c)}}var o=qu(n,r,e,0,null,!1,!1,"",Ua);return e._reactRootContainer=o,e[Ve]=o.current,Ot(e.nodeType===8?e.parentNode:e),_n(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zr(s);a.call(c)}}var s=Io(e,0,!1,null,null,!1,!1,"",Ua);return e._reactRootContainer=s,e[Ve]=s.current,Ot(e.nodeType===8?e.parentNode:e),_n(function(){fi(n,s,t,r)}),s}function gi(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Zr(o);a.call(s)}}fi(n,o,e,i)}else o=Tf(t,n,e,i,r);return Zr(o)}_s=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(Xl(n,t|1),fe(n,V()),!(D&6)&&(tt=V()+500,mn()))}break;case 13:_n(function(){var r=We(e,1);if(r!==null){var i=le();De(r,e,1,i)}}),Lo(e,1)}};Jl=function(e){if(e.tag===13){var n=We(e,134217728);if(n!==null){var t=le();De(n,e,134217728,t)}Lo(e,134217728)}};Is=function(e){if(e.tag===13){var n=sn(e),t=We(e,n);if(t!==null){var r=le();De(t,e,n,r)}Lo(e,n)}};Ls=function(){return N};Ds=function(e,n){var t=N;try{return N=e,n()}finally{N=t}};ll=function(e,n,t){switch(n){case"input":if(qi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=li(r);if(!i)throw Error(v(90));ss(r),qi(r,i)}}}break;case"textarea":cs(e,t);break;case"select":n=t.value,n!=null&&Vn(e,!!t.multiple,n,!1)}};vs=Co;ys=_n;var _f={usingClientEntryPoint:!1,Events:[Jt,An,li,gs,hs,Co]},gt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:gt.bundleType,version:gt.version,rendererPackageName:gt.rendererPackageName,rendererConfig:gt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:gt.findFiberByHostInstance||zf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{ni=vr.inject(If),Re=vr}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_f;ve.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(n))throw Error(v(200));return Cf(e,n,null,t)};ve.createRoot=function(e,n){if(!No(e))throw Error(v(299));var t=!1,r="",i=Zu;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Io(e,1,!1,null,null,t,!1,r,i),e[Ve]=n.current,Ot(e.nodeType===8?e.parentNode:e),new Do(n)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=xs(n),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return _n(e)};ve.hydrate=function(e,n,t){if(!mi(n))throw Error(v(200));return gi(null,e,n,!0,t)};ve.hydrateRoot=function(e,n,t){if(!No(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Zu;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=qu(n,null,e,1,t??null,i,!1,l,o),e[Ve]=n.current,Ot(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new pi(n)};ve.render=function(e,n,t){if(!mi(n))throw Error(v(200));return gi(null,e,n,!1,t)};ve.unmountComponentAtNode=function(e){if(!mi(e))throw Error(v(40));return e._reactRootContainer?(_n(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ve]=null})}),!0):!1};ve.unstable_batchedUpdates=Co;ve.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!mi(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return gi(e,n,t,!1,r)};ve.version="18.3.1-next-f1338f8080-20240426";function ec(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ec)}catch(e){console.error(e)}}ec(),es.exports=ve;var Lf=es.exports,Ha=Lf;Wi.createRoot=Ha.createRoot,Wi.hydrateRoot=Ha.hydrateRoot;const Df=`\r
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
`,Nf=`const MEDIA_BASE_PATH = "/media/";

function toMediaPath(path) {
  if (!path) {
    return path;
  }
  if (Array.isArray(path)) {
    return path.map(toMediaPath);
  }
  if (path.startsWith("/media/")) {
    return path;
  }
  const trimmed = path.replace(/^\\//, "");
  return MEDIA_BASE_PATH + encodeURI(trimmed);
}

function mapMediaPaths(paths) {
  if (!paths) {
    return paths;
  }
  return paths.map(toMediaPath);
}

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
function viewImage(imageSrc, altText, imageArray = null, startIndex = 0) {
    if (imageArray && Array.isArray(imageArray) && imageArray.length > 0) {
        currentImageGallery = mapMediaPaths(imageArray);
        currentImageIndex = Math.max(0, Math.min(startIndex, currentImageGallery.length - 1));
    } else {
        currentImageGallery = [toMediaPath(imageSrc)];
        currentImageIndex = 0;
    }
    
    createImageViewer(currentImageGallery[currentImageIndex], altText);
}\r
\r
function createImageViewer(imageSrc, altText) {
    const existingViewer = document.querySelector('.image-viewer-modal');
    if (existingViewer) {
        document.body.removeChild(existingViewer);
    }
    
    const modal = document.createElement('div');
    modal.className = 'image-viewer-modal show';
    
    const hasMultipleImages = currentImageGallery.length > 1;
    const navPrevHTML = hasMultipleImages ? \`<button class="image-nav-arrow image-nav-prev" onclick="navigateImage(-1)" title="Previous (?+?)">??1</button>\` : '';
    const navNextHTML = hasMultipleImages ? \`<button class="image-nav-arrow image-nav-next" onclick="navigateImage(1)" title="Next (?+')">???</button>\` : '';
    const counterHTML = hasMultipleImages ? \`<div class="image-counter">\${currentImageIndex + 1} / \${currentImageGallery.length}</div>\` : '';
    const normalizedSrc = toMediaPath(imageSrc);
    
    modal.innerHTML = \`
        <div class="image-viewer-overlay" onclick="closeImageViewer(this)"></div>
        <button class="image-viewer-close" onclick="closeImageViewer(this)" title="Close (ESC)">A-</button>
        \${navPrevHTML}
        \${navNextHTML}
        \${counterHTML}
        <div class="image-viewer-content">
            <img src="\${normalizedSrc}" alt="\${altText}" onload="centerImage(this)" />
        </div>
    \`;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    
    // Add touch and keyboard event listeners
    modal.addEventListener('touchstart', handleTouchStart, { passive: false });
    modal.addEventListener('touchmove', handleTouchMove, { passive: false });
    modal.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Initialize touch variables
    modal.touchStartX = 0;
    modal.touchStartY = 0;
    modal.touchEndX = 0;
    modal.touchEndY = 0;
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
function createImageGallery(images, packageName) {
    if (!images || images.length === 0) return '';
    
    const normalizedImages = mapMediaPaths(images);
    const galleryJson = JSON.stringify(normalizedImages).replace(/"/g, '&quot;');
    
    let galleryHtml = \`
        <div class="package-gallery">
            <h5>?? Package Gallery</h5>
            <div class="gallery-grid">
    \`;
    
    normalizedImages.forEach((img, index) => {
        galleryHtml += \`
            <div class="gallery-item-thumb" onclick="viewImage('\${img}', '\${packageName} - Image \${index + 1}', \${galleryJson}, \${index})">
                <img src="\${img}" alt="\${packageName} - Image \${index + 1}" 
                     onerror="this.parentNode.innerHTML='<div class=\\\\'gallery-fallback\\\\'>??</div>';">
            </div>
        \`;
    });
    
    galleryHtml += \`</div></div>\`;
    return galleryHtml;
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
`;function Mf(){return Yt.useEffect(()=>{const e=()=>{if(window.__legacyAppInitialized)return;window.__legacyAppInitialized=!0;const n=new Event("DOMContentLoaded");document.dispatchEvent(n)};if(window.__legacyScriptLoaded)setTimeout(e,0);else{const n=document.createElement("script");n.type="text/javascript",n.text=`${Nf}
//# sourceURL=legacyScript.js`,document.body.appendChild(n),window.__legacyScriptLoaded=!0,setTimeout(e,0)}},[]),It.jsx("div",{className:"legacy-app",dangerouslySetInnerHTML:{__html:Df}})}function jf({children:e}){return Yt.useEffect(()=>{const n=localStorage.getItem("selectedTheme")||"purple";document.documentElement.setAttribute("data-theme",n)},[]),e}function Bf(){return It.jsx(jf,{children:It.jsx(Mf,{})})}Wi.createRoot(document.getElementById("root")).render(It.jsx(yc.StrictMode,{children:It.jsx(Bf,{})}));
