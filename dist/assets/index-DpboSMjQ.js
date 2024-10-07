(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},Qt=[],Ke=()=>{},ll=()=>!1,Dr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),js=t=>t.startsWith("onUpdate:"),ce=Object.assign,Ws=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ul=Object.prototype.hasOwnProperty,K=(t,e)=>ul.call(t,e),B=Array.isArray,En=t=>Mr(t)==="[object Map]",fl=t=>Mr(t)==="[object Set]",H=t=>typeof t=="function",oe=t=>typeof t=="string",dn=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",Xo=t=>(se(t)||H(t))&&H(t.then)&&H(t.catch),dl=Object.prototype.toString,Mr=t=>dl.call(t),hl=t=>Mr(t).slice(8,-1),pl=t=>Mr(t)==="[object Object]",Ks=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,In=Vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gl=/-(\w)/g,Me=xr(t=>t.replace(gl,(e,n)=>n?n.toUpperCase():"")),ml=/\B([A-Z])/g,Bt=xr(t=>t.replace(ml,"-$1").toLowerCase()),Lr=xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Jr=xr(t=>t?`on${Lr(t)}`:""),Tt=(t,e)=>!Object.is(t,e),cr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},_s=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ti;const Zo=()=>Ti||(Ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?bl(r):zs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||se(t))return t}const _l=/;(?![^(]*\))/g,vl=/:([^]+)/,yl=/\/\*[^]*?\*\//g;function bl(t){const e={};return t.replace(yl,"").split(_l).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gs(t){let e="";if(oe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Gs(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",El=Vs(wl);function ea(t){return!!t||t===""}/**
* @vue/reactivity v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class Il{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sl(){return Ee}let te;const Yr=new WeakSet;class ta{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yr.has(this)&&(Yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ra(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ci(this),sa(this);const e=te,n=Ne;te=this,Ne=!0;try{return this.fn()}finally{ia(this),te=e,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ys(e);this.deps=this.depsTail=void 0,Ci(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vs(this)&&this.run()}get dirty(){return vs(this)}}let na=0,Yt;function ra(t){t.flags|=8,t.next=Yt,Yt=t}function qs(){na++}function Js(){if(--na>0)return;let t;for(;Yt;){let e=Yt,n;for(;e;)e.flags&=-9,e=e.next;for(e=Yt,Yt=void 0;e;){if(e.flags&1)try{e.trigger()}catch(r){t||(t=r)}n=e.next,e.next=void 0,e=n}}if(t)throw t}function sa(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ia(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ys(r),Tl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function vs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oa(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function oa(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Dn))return;t.globalVersion=Dn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vs(t)){t.flags&=-3;return}const n=te,r=Ne;te=t,Ne=!0;try{sa(t);const s=t.fn(t._value);(e.version===0||Tt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{te=n,Ne=r,ia(t),t.flags&=-3}}function Ys(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ys(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ne=!0;const aa=[];function Ct(){aa.push(Ne),Ne=!1}function Rt(){const t=aa.pop();Ne=t===void 0?!0:t}function Ci(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let Dn=0;class Cl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!te||!Ne||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new Cl(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,ca(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=r)}return n}trigger(e){this.version++,Dn++,this.notify(e)}notify(e){qs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Js()}}}function ca(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ca(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ys=new WeakMap,Lt=Symbol(""),bs=Symbol(""),Mn=Symbol("");function de(t,e,n){if(Ne&&te){let r=ys.get(t);r||ys.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xs),s.target=t,s.map=r,s.key=n),s.track()}}function st(t,e,n,r,s,i){const o=ys.get(t);if(!o){Dn++;return}const c=a=>{a&&a.trigger()};if(qs(),e==="clear")o.forEach(c);else{const a=B(t),u=a&&Ks(n);if(a&&n==="length"){const f=Number(r);o.forEach((h,p)=>{(p==="length"||p===Mn||!dn(p)&&p>=f)&&c(h)})}else switch(n!==void 0&&c(o.get(n)),u&&c(o.get(Mn)),e){case"add":a?u&&c(o.get("length")):(c(o.get(Lt)),En(t)&&c(o.get(bs)));break;case"delete":a||(c(o.get(Lt)),En(t)&&c(o.get(bs)));break;case"set":En(t)&&c(o.get(Lt));break}}Js()}function zt(t){const e=z(t);return e===t?e:(de(e,"iterate",Mn),De(t)?e:e.map(pe))}function Qs(t){return de(t=z(t),"iterate",Mn),t}const Rl={__proto__:null,[Symbol.iterator](){return Xr(this,Symbol.iterator,pe)},concat(...t){return zt(this).concat(...t.map(e=>B(e)?zt(e):e))},entries(){return Xr(this,"entries",t=>(t[1]=pe(t[1]),t))},every(t,e){return Ye(this,"every",t,e,void 0,arguments)},filter(t,e){return Ye(this,"filter",t,e,n=>n.map(pe),arguments)},find(t,e){return Ye(this,"find",t,e,pe,arguments)},findIndex(t,e){return Ye(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ye(this,"findLast",t,e,pe,arguments)},findLastIndex(t,e){return Ye(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ye(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qr(this,"includes",t)},indexOf(...t){return Qr(this,"indexOf",t)},join(t){return zt(this).join(t)},lastIndexOf(...t){return Qr(this,"lastIndexOf",t)},map(t,e){return Ye(this,"map",t,e,void 0,arguments)},pop(){return mn(this,"pop")},push(...t){return mn(this,"push",t)},reduce(t,...e){return Ri(this,"reduce",t,e)},reduceRight(t,...e){return Ri(this,"reduceRight",t,e)},shift(){return mn(this,"shift")},some(t,e){return Ye(this,"some",t,e,void 0,arguments)},splice(...t){return mn(this,"splice",t)},toReversed(){return zt(this).toReversed()},toSorted(t){return zt(this).toSorted(t)},toSpliced(...t){return zt(this).toSpliced(...t)},unshift(...t){return mn(this,"unshift",t)},values(){return Xr(this,"values",pe)}};function Xr(t,e,n){const r=Qs(t),s=r[e]();return r!==t&&!De(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Al=Array.prototype;function Ye(t,e,n,r,s,i){const o=Qs(t),c=o!==t&&!De(t),a=o[e];if(a!==Al[e]){const h=a.apply(t,i);return c?pe(h):h}let u=n;o!==t&&(c?u=function(h,p){return n.call(this,pe(h),p,t)}:n.length>2&&(u=function(h,p){return n.call(this,h,p,t)}));const f=a.call(o,u,r);return c&&s?s(f):f}function Ri(t,e,n,r){const s=Qs(t);let i=n;return s!==t&&(De(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,pe(c),a,t)}),s[e](i,...r)}function Qr(t,e,n){const r=z(t);de(r,"iterate",Mn);const s=r[e](...n);return(s===-1||s===!1)&&ni(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function mn(t,e,n=[]){Ct(),qs();const r=z(t)[e].apply(t,n);return Js(),Rt(),r}const Pl=Vs("__proto__,__v_isRef,__isVue"),la=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn));function Ol(t){dn(t)||(t=String(t));const e=z(this);return de(e,"has",t),e.hasOwnProperty(t)}class ua{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?jl:pa:i?ha:da).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){let a;if(o&&(a=Rl[n]))return a;if(n==="hasOwnProperty")return Ol}const c=Reflect.get(e,n,fe(e)?e:r);return(dn(n)?la.has(n):Pl(n))||(s||de(e,"get",n),i)?c:fe(c)?o&&Ks(n)?c:c.value:se(c)?s?ma(c):Fr(c):c}}class fa extends ua{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Ut(i);if(!De(r)&&!Ut(r)&&(i=z(i),r=z(r)),!B(e)&&fe(i)&&!fe(r))return a?!1:(i.value=r,!0)}const o=B(e)&&Ks(n)?Number(n)<e.length:K(e,n),c=Reflect.set(e,n,r,fe(e)?e:s);return e===z(s)&&(o?Tt(r,i)&&st(e,"set",n,r):st(e,"add",n,r)),c}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&st(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!dn(n)||!la.has(n))&&de(e,"has",n),r}ownKeys(e){return de(e,"iterate",B(e)?"length":Lt),Reflect.ownKeys(e)}}class kl extends ua{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nl=new fa,Dl=new kl,Ml=new fa(!0);const Zs=t=>t,Ur=t=>Reflect.getPrototypeOf(t);function tr(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(Tt(e,i)&&de(s,"get",e),de(s,"get",i));const{has:o}=Ur(s),c=r?Zs:n?ri:pe;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function nr(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(Tt(t,s)&&de(r,"has",t),de(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function rr(t,e=!1){return t=t.__v_raw,!e&&de(z(t),"iterate",Lt),Reflect.get(t,"size",t)}function Ai(t,e=!1){!e&&!De(t)&&!Ut(t)&&(t=z(t));const n=z(this);return Ur(n).has.call(n,t)||(n.add(t),st(n,"add",t,t)),this}function Pi(t,e,n=!1){!n&&!De(e)&&!Ut(e)&&(e=z(e));const r=z(this),{has:s,get:i}=Ur(r);let o=s.call(r,t);o||(t=z(t),o=s.call(r,t));const c=i.call(r,t);return r.set(t,e),o?Tt(e,c)&&st(r,"set",t,e):st(r,"add",t,e),this}function Oi(t){const e=z(this),{has:n,get:r}=Ur(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function ki(){const t=z(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function sr(t,e){return function(r,s){const i=this,o=i.__v_raw,c=z(o),a=e?Zs:t?ri:pe;return!t&&de(c,"iterate",Lt),o.forEach((u,f)=>r.call(s,a(u),a(f),i))}}function ir(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=En(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,u=s[t](...r),f=n?Zs:e?ri:pe;return!e&&de(i,"iterate",a?bs:Lt),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xl(){const t={get(i){return tr(this,i)},get size(){return rr(this)},has:nr,add:Ai,set:Pi,delete:Oi,clear:ki,forEach:sr(!1,!1)},e={get(i){return tr(this,i,!1,!0)},get size(){return rr(this)},has:nr,add(i){return Ai.call(this,i,!0)},set(i,o){return Pi.call(this,i,o,!0)},delete:Oi,clear:ki,forEach:sr(!1,!0)},n={get(i){return tr(this,i,!0)},get size(){return rr(this,!0)},has(i){return nr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:sr(!0,!1)},r={get(i){return tr(this,i,!0,!0)},get size(){return rr(this,!0)},has(i){return nr.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ir(i,!1,!1),n[i]=ir(i,!0,!1),e[i]=ir(i,!1,!0),r[i]=ir(i,!0,!0)}),[t,n,e,r]}const[Ll,Ul,Fl,$l]=xl();function ei(t,e){const n=e?t?$l:Fl:t?Ul:Ll;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Hl={get:ei(!1,!1)},Bl={get:ei(!1,!0)},Vl={get:ei(!0,!1)};const da=new WeakMap,ha=new WeakMap,pa=new WeakMap,jl=new WeakMap;function Wl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(t){return t.__v_skip||!Object.isExtensible(t)?0:Wl(hl(t))}function Fr(t){return Ut(t)?t:ti(t,!1,Nl,Hl,da)}function ga(t){return ti(t,!1,Ml,Bl,ha)}function ma(t){return ti(t,!0,Dl,Vl,pa)}function ti(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Kl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Sn(t){return Ut(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function De(t){return!!(t&&t.__v_isShallow)}function ni(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function zl(t){return!K(t,"__v_skip")&&Object.isExtensible(t)&&Qo(t,"__v_skip",!0),t}const pe=t=>se(t)?Fr(t):t,ri=t=>se(t)?ma(t):t;function fe(t){return t?t.__v_isRef===!0:!1}function Gl(t){return _a(t,!1)}function ql(t){return _a(t,!0)}function _a(t,e){return fe(t)?t:new Jl(t,e)}class Jl{constructor(e,n){this.dep=new Xs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:pe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||De(e)||Ut(e);e=r?e:z(e),Tt(e,n)&&(this._rawValue=e,this._value=r?e:pe(e),this.dep.trigger())}}function Zt(t){return fe(t)?t.value:t}const Yl={get:(t,e,n)=>e==="__v_raw"?t:Zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function va(t){return Sn(t)?t:new Proxy(t,Yl)}class Xl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return ra(this),!0}get value(){const e=this.dep.track();return oa(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ql(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new Xl(r,s,n)}const or={},_r=new WeakMap;let Mt;function Zl(t,e=!1,n=Mt){if(n){let r=_r.get(n);r||_r.set(n,r=[]),r.push(t)}}function eu(t,e,n=Q){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,u=O=>s?O:De(O)||s===!1||s===0?Ze(O,1):Ze(O);let f,h,p,m,R=!1,P=!1;if(fe(t)?(h=()=>t.value,R=De(t)):Sn(t)?(h=()=>u(t),R=!0):B(t)?(P=!0,R=t.some(O=>Sn(O)||De(O)),h=()=>t.map(O=>{if(fe(O))return O.value;if(Sn(O))return u(O);if(H(O))return a?a(O,2):O()})):H(t)?e?h=a?()=>a(t,2):t:h=()=>{if(p){Ct();try{p()}finally{Rt()}}const O=Mt;Mt=f;try{return a?a(t,3,[m]):t(m)}finally{Mt=O}}:h=Ke,e&&s){const O=h,j=s===!0?1/0:s;h=()=>Ze(O(),j)}const $=Sl(),x=()=>{f.stop(),$&&Ws($.effects,f)};if(i&&e){const O=e;e=(...j)=>{O(...j),x()}}let k=P?new Array(t.length).fill(or):or;const M=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const j=f.run();if(s||R||(P?j.some((re,Z)=>Tt(re,k[Z])):Tt(j,k))){p&&p();const re=Mt;Mt=f;try{const Z=[j,k===or?void 0:P&&k[0]===or?[]:k,m];a?a(e,3,Z):e(...Z),k=j}finally{Mt=re}}}else f.run()};return c&&c(M),f=new ta(h),f.scheduler=o?()=>o(M,!1):M,m=O=>Zl(O,!1,f),p=f.onStop=()=>{const O=_r.get(f);if(O){if(a)a(O,4);else for(const j of O)j();_r.delete(f)}},e?r?M(!0):k=f.run():o?o(M.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function Ze(t,e=1/0,n){if(e<=0||!se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,fe(t))Ze(t.value,e,n);else if(B(t))for(let r=0;r<t.length;r++)Ze(t[r],e,n);else if(fl(t)||En(t))t.forEach(r=>{Ze(r,e,n)});else if(pl(t)){for(const r in t)Ze(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ze(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wn(t,e,n,r){try{return r?t(...r):t()}catch(s){$r(s,e,n)}}function qe(t,e,n,r){if(H(t)){const s=Wn(t,e,n,r);return s&&Xo(s)&&s.catch(i=>{$r(i,e,n)}),s}if(B(t)){const s=[];for(let i=0;i<t.length;i++)s.push(qe(t[i],e,n,r));return s}}function $r(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let c=e.parent;const a=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,a,u)===!1)return}c=c.parent}if(i){Ct(),Wn(i,null,10,[t,a,u]),Rt();return}}tu(t,n,s,r,o)}function tu(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let xn=!1,ws=!1;const ge=[];let Be=0;const en=[];let mt=null,Gt=0;const ya=Promise.resolve();let si=null;function ba(t){const e=si||ya;return t?e.then(this?t.bind(this):t):e}function nu(t){let e=xn?Be+1:0,n=ge.length;for(;e<n;){const r=e+n>>>1,s=ge[r],i=Ln(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ii(t){if(!(t.flags&1)){const e=Ln(t),n=ge[ge.length-1];!n||!(t.flags&2)&&e>=Ln(n)?ge.push(t):ge.splice(nu(e),0,t),t.flags|=1,wa()}}function wa(){!xn&&!ws&&(ws=!0,si=ya.then(Ia))}function ru(t){B(t)?en.push(...t):mt&&t.id===-1?mt.splice(Gt+1,0,t):t.flags&1||(en.push(t),t.flags|=1),wa()}function Ni(t,e,n=xn?Be+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ge.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ea(t){if(en.length){const e=[...new Set(en)].sort((n,r)=>Ln(n)-Ln(r));if(en.length=0,mt){mt.push(...e);return}for(mt=e,Gt=0;Gt<mt.length;Gt++){const n=mt[Gt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Gt=0}}const Ln=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ia(t){ws=!1,xn=!0;try{for(Be=0;Be<ge.length;Be++){const e=ge[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Be<ge.length;Be++){const e=ge[Be];e&&(e.flags&=-2)}Be=0,ge.length=0,Ea(),xn=!1,si=null,(ge.length||en.length)&&Ia()}}let Ie=null,Sa=null;function vr(t){const e=Ie;return Ie=t,Sa=t&&t.type.__scopeId||null,e}function Tn(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bi(-1);const i=vr(e);let o;try{o=t(...s)}finally{vr(i),r._d&&Bi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function yr(t,e){if(Ie===null)return t;const n=Wr(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Q]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Ze(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Ct(),qe(a,n,8,[t.el,c,t,e]),Rt())}}const su=Symbol("_vte"),iu=t=>t.__isTeleport;function oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ta(t,e){return H(t)?ce({name:t.name},e,{setup:t}):t}function Ca(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Es(t,e,n,r,s=!1){if(B(t)){t.forEach((R,P)=>Es(R,e&&(B(e)?e[P]:e),n,r,s));return}if(Cn(r)&&!s)return;const i=r.shapeFlag&4?Wr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,u=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState,p=z(h),m=h===Q?()=>!1:R=>K(p,R);if(u!=null&&u!==a&&(oe(u)?(f[u]=null,m(u)&&(h[u]=null)):fe(u)&&(u.value=null)),H(a))Wn(a,c,12,[o,f]);else{const R=oe(a),P=fe(a);if(R||P){const $=()=>{if(t.f){const x=R?m(a)?h[a]:f[a]:a.value;s?B(x)&&Ws(x,i):B(x)?x.includes(i)||x.push(i):R?(f[a]=[i],m(a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else R?(f[a]=o,m(a)&&(h[a]=o)):P&&(a.value=o,t.k&&(f[t.k]=o))};o?($.id=-1,we($,n)):$()}}}const Cn=t=>!!t.type.__asyncLoader,Ra=t=>t.type.__isKeepAlive;function ou(t,e){Aa(t,"a",e)}function au(t,e){Aa(t,"da",e)}function Aa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Hr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ra(s.parent.vnode)&&cu(r,e,n,s),s=s.parent}}function cu(t,e,n,r){const s=Hr(e,t,r,!0);Pa(()=>{Ws(r[e],s)},n)}function Hr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ct();const c=Kn(n),a=qe(e,n,t,o);return c(),Rt(),a});return r?s.unshift(i):s.push(i),i}}const lt=t=>(e,n=ue)=>{(!jr||t==="sp")&&Hr(t,(...r)=>e(...r),n)},lu=lt("bm"),uu=lt("m"),fu=lt("bu"),du=lt("u"),hu=lt("bum"),Pa=lt("um"),pu=lt("sp"),gu=lt("rtg"),mu=lt("rtc");function _u(t,e=ue){Hr("ec",t,e)}const vu="components";function br(t,e){return bu(vu,t,!0,e)||t}const yu=Symbol.for("v-ndc");function bu(t,e,n=!0,r=!1){const s=Ie||ue;if(s){const i=s.type;{const c=af(i,!1);if(c&&(c===e||c===Me(e)||c===Lr(Me(e))))return i}const o=Di(s[t]||i[t],e)||Di(s.appContext[t],e);return!o&&r?i:o}}function Di(t,e){return t&&(t[e]||t[Me(e)]||t[Lr(Me(e))])}const Is=t=>t?Ja(t)?Wr(t):Is(t.parent):null,Rn=ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Is(t.parent),$root:t=>Is(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ai(t),$forceUpdate:t=>t.f||(t.f=()=>{ii(t.update)}),$nextTick:t=>t.n||(t.n=ba.bind(t.proxy)),$watch:t=>Bu.bind(t)}),Zr=(t,e)=>t!==Q&&!t.__isScriptSetup&&K(t,e),wu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Zr(r,e))return o[e]=1,r[e];if(s!==Q&&K(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&K(u,e))return o[e]=3,i[e];if(n!==Q&&K(n,e))return o[e]=4,n[e];Ss&&(o[e]=0)}}const f=Rn[e];let h,p;if(f)return e==="$attrs"&&de(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&K(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Zr(s,e)?(s[e]=n,!0):r!==Q&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&K(t,o)||Zr(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(Rn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ss=!0;function Eu(t){const e=ai(t),n=t.proxy,r=t.ctx;Ss=!1,e.beforeCreate&&xi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:m,updated:R,activated:P,deactivated:$,beforeDestroy:x,beforeUnmount:k,destroyed:M,unmounted:O,render:j,renderTracked:re,renderTriggered:Z,errorCaptured:Te,serverPrefetch:Ce,expose:Re,inheritAttrs:ft,components:kt,directives:Ue,filters:pn}=e;if(u&&Iu(u,r,null),o)for(const Y in o){const W=o[Y];H(W)&&(r[Y]=W.bind(n))}if(s){const Y=s.call(n,n);se(Y)&&(t.data=Fr(Y))}if(Ss=!0,i)for(const Y in i){const W=i[Y],Je=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):Ke,dt=!H(W)&&H(W.set)?W.set.bind(n):Ke,Fe=ke({get:Je,set:dt});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:_e=>Fe.value=_e})}if(c)for(const Y in c)Oa(c[Y],r,n,Y);if(a){const Y=H(a)?a.call(n):a;Reflect.ownKeys(Y).forEach(W=>{lr(W,Y[W])})}f&&xi(f,t,"c");function ie(Y,W){B(W)?W.forEach(Je=>Y(Je.bind(n))):W&&Y(W.bind(n))}if(ie(lu,h),ie(uu,p),ie(fu,m),ie(du,R),ie(ou,P),ie(au,$),ie(_u,Te),ie(mu,re),ie(gu,Z),ie(hu,k),ie(Pa,O),ie(pu,Ce),B(Re))if(Re.length){const Y=t.exposed||(t.exposed={});Re.forEach(W=>{Object.defineProperty(Y,W,{get:()=>n[W],set:Je=>n[W]=Je})})}else t.exposed||(t.exposed={});j&&t.render===Ke&&(t.render=j),ft!=null&&(t.inheritAttrs=ft),kt&&(t.components=kt),Ue&&(t.directives=Ue),Ce&&Ca(t)}function Iu(t,e,n=Ke){B(t)&&(t=Ts(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=it(s.from||r,s.default,!0):i=it(s.from||r):i=it(s),fe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xi(t,e,n){qe(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oa(t,e,n,r){let s=r.includes(".")?Wa(n,r):()=>n[r];if(oe(t)){const i=e[t];H(i)&&ur(s,i)}else if(H(t))ur(s,t.bind(n));else if(se(t))if(B(t))t.forEach(i=>Oa(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&ur(s,i,t)}}function ai(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(u=>wr(a,u,o,!0)),wr(a,e,o)),se(e)&&i.set(e,a),a}function wr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wr(t,i,n,!0),s&&s.forEach(o=>wr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Su[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Su={data:Li,props:Ui,emits:Ui,methods:yn,computed:yn,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:yn,directives:yn,watch:Cu,provide:Li,inject:Tu};function Li(t,e){return e?t?function(){return ce(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Tu(t,e){return yn(Ts(t),Ts(e))}function Ts(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function yn(t,e){return t?ce(Object.create(null),t,e):e}function Ui(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ce(Object.create(null),Mi(t),Mi(e??{})):e}function Cu(t,e){if(!t)return e;if(!e)return t;const n=ce(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function ka(){return{app:null,config:{isNativeTag:ll,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ru=0;function Au(t,e){return function(r,s=null){H(r)||(r=ce({},r)),s!=null&&!se(s)&&(s=null);const i=ka(),o=new WeakSet,c=[];let a=!1;const u=i.app={_uid:Ru++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lf,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(u,...h)):H(f)&&(o.add(f),f(u,...h))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,h){return h?(i.components[f]=h,u):i.components[f]},directive(f,h){return h?(i.directives[f]=h,u):i.directives[f]},mount(f,h,p){if(!a){const m=u._ceVNode||ae(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,f):t(m,f,p),a=!0,u._container=f,f.__vue_app__=u,Wr(m.component)}},onUnmount(f){c.push(f)},unmount(){a&&(qe(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,h){return i.provides[f]=h,u},runWithContext(f){const h=tn;tn=u;try{return f()}finally{tn=h}}};return u}}let tn=null;function lr(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function it(t,e,n=!1){const r=ue||Ie;if(r||tn){const s=tn?tn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Na={},Da=()=>Object.create(Na),Ma=t=>Object.getPrototypeOf(t)===Na;function Pu(t,e,n,r=!1){const s={},i=Da();t.propsDefaults=Object.create(null),xa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ga(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ou(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Br(t.emitsOptions,p))continue;const m=e[p];if(a)if(K(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const R=Me(p);s[R]=Cs(a,c,R,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{xa(t,e,s,i)&&(u=!0);let f;for(const h in c)(!e||!K(e,h)&&((f=Bt(h))===h||!K(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Cs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!K(e,h))&&(delete i[h],u=!0)}u&&st(t.attrs,"set","")}function xa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(In(a))continue;const u=e[a];let f;s&&K(s,f=Me(a))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Br(t.emitsOptions,a)||(!(a in r)||u!==r[a])&&(r[a]=u,o=!0)}if(i){const a=z(n),u=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Cs(s,a,h,u[h],t,!K(u,h))}}return o}function Cs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Kn(s);r=u[n]=a.call(null,e),f()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Bt(n))&&(r=!0))}return r}const ku=new WeakMap;function La(t,e,n=!1){const r=n?ku:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const f=h=>{a=!0;const[p,m]=La(h,e,!0);ce(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return se(t)&&r.set(t,Qt),Qt;if(B(i))for(let f=0;f<i.length;f++){const h=Me(i[f]);Fi(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Me(f);if(Fi(h)){const p=i[f],m=o[h]=B(p)||H(p)?{type:p}:ce({},p),R=m.type;let P=!1,$=!0;if(B(R))for(let x=0;x<R.length;++x){const k=R[x],M=H(k)&&k.name;if(M==="Boolean"){P=!0;break}else M==="String"&&($=!1)}else P=H(R)&&R.name==="Boolean";m[0]=P,m[1]=$,(P||K(m,"default"))&&c.push(h)}}const u=[o,c];return se(t)&&r.set(t,u),u}function Fi(t){return t[0]!=="$"&&!In(t)}const Ua=t=>t[0]==="_"||t==="$stable",ci=t=>B(t)?t.map(je):[je(t)],Nu=(t,e,n)=>{if(e._n)return e;const r=Tn((...s)=>ci(e(...s)),n);return r._c=!1,r},Fa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ua(s))continue;const i=t[s];if(H(i))e[s]=Nu(s,i,r);else if(i!=null){const o=ci(i);e[s]=()=>o}}},$a=(t,e)=>{const n=ci(e);t.slots.default=()=>n},Ha=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Du=(t,e,n)=>{const r=t.slots=Da();if(t.vnode.shapeFlag&32){const s=e._;s?(Ha(r,e,n),n&&Qo(r,"_",s,!0)):Fa(e,r)}else e&&$a(t,e)},Mu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ha(s,e,n):(i=!e.$stable,Fa(e,s)),o=e}else e&&($a(t,e),o={default:1});if(i)for(const c in s)!Ua(c)&&o[c]==null&&delete s[c]},we=qu;function xu(t){return Lu(t)}function Lu(t,e){const n=Zo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:m=Ke,insertStaticContent:R}=t,P=(l,d,g,y=null,_=null,b=null,S=void 0,I=null,E=!!d.dynamicChildren)=>{if(l===d)return;l&&!_n(l,d)&&(y=v(l),_e(l,_,b,!0),l=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:w,ref:L,shapeFlag:C}=d;switch(w){case Vr:$(l,d,g,y);break;case Ft:x(l,d,g,y);break;case ns:l==null&&k(d,g,y,S);break;case Ve:kt(l,d,g,y,_,b,S,I,E);break;default:C&1?j(l,d,g,y,_,b,S,I,E):C&6?Ue(l,d,g,y,_,b,S,I,E):(C&64||C&128)&&w.process(l,d,g,y,_,b,S,I,E,N)}L!=null&&_&&Es(L,l&&l.ref,b,d||l,!d)},$=(l,d,g,y)=>{if(l==null)r(d.el=c(d.children),g,y);else{const _=d.el=l.el;d.children!==l.children&&u(_,d.children)}},x=(l,d,g,y)=>{l==null?r(d.el=a(d.children||""),g,y):d.el=l.el},k=(l,d,g,y)=>{[l.el,l.anchor]=R(l.children,d,g,y,l.el,l.anchor)},M=({el:l,anchor:d},g,y)=>{let _;for(;l&&l!==d;)_=p(l),r(l,g,y),l=_;r(d,g,y)},O=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),s(l),l=g;s(d)},j=(l,d,g,y,_,b,S,I,E)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),l==null?re(d,g,y,_,b,S,I,E):Ce(l,d,_,b,S,I,E)},re=(l,d,g,y,_,b,S,I)=>{let E,w;const{props:L,shapeFlag:C,transition:D,dirs:F}=l;if(E=l.el=o(l.type,b,L&&L.is,L),C&8?f(E,l.children):C&16&&Te(l.children,E,null,y,_,es(l,b),S,I),F&&Nt(l,null,y,"created"),Z(E,l,l.scopeId,S,y),L){for(const ee in L)ee!=="value"&&!In(ee)&&i(E,ee,null,L[ee],b,y);"value"in L&&i(E,"value",null,L.value,b),(w=L.onVnodeBeforeMount)&&He(w,y,l)}F&&Nt(l,null,y,"beforeMount");const V=Uu(_,D);V&&D.beforeEnter(E),r(E,d,g),((w=L&&L.onVnodeMounted)||V||F)&&we(()=>{w&&He(w,y,l),V&&D.enter(E),F&&Nt(l,null,y,"mounted")},_)},Z=(l,d,g,y,_)=>{if(g&&m(l,g),y)for(let b=0;b<y.length;b++)m(l,y[b]);if(_){let b=_.subTree;if(d===b||za(b.type)&&(b.ssContent===d||b.ssFallback===d)){const S=_.vnode;Z(l,S,S.scopeId,S.slotScopeIds,_.parent)}}},Te=(l,d,g,y,_,b,S,I,E=0)=>{for(let w=E;w<l.length;w++){const L=l[w]=I?_t(l[w]):je(l[w]);P(null,L,d,g,y,_,b,S,I)}},Ce=(l,d,g,y,_,b,S)=>{const I=d.el=l.el;let{patchFlag:E,dynamicChildren:w,dirs:L}=d;E|=l.patchFlag&16;const C=l.props||Q,D=d.props||Q;let F;if(g&&Dt(g,!1),(F=D.onVnodeBeforeUpdate)&&He(F,g,d,l),L&&Nt(d,l,g,"beforeUpdate"),g&&Dt(g,!0),(C.innerHTML&&D.innerHTML==null||C.textContent&&D.textContent==null)&&f(I,""),w?Re(l.dynamicChildren,w,I,g,y,es(d,_),b):S||W(l,d,I,null,g,y,es(d,_),b,!1),E>0){if(E&16)ft(I,C,D,g,_);else if(E&2&&C.class!==D.class&&i(I,"class",null,D.class,_),E&4&&i(I,"style",C.style,D.style,_),E&8){const V=d.dynamicProps;for(let ee=0;ee<V.length;ee++){const q=V[ee],ve=C[q],le=D[q];(le!==ve||q==="value")&&i(I,q,ve,le,_,g)}}E&1&&l.children!==d.children&&f(I,d.children)}else!S&&w==null&&ft(I,C,D,g,_);((F=D.onVnodeUpdated)||L)&&we(()=>{F&&He(F,g,d,l),L&&Nt(d,l,g,"updated")},y)},Re=(l,d,g,y,_,b,S)=>{for(let I=0;I<d.length;I++){const E=l[I],w=d[I],L=E.el&&(E.type===Ve||!_n(E,w)||E.shapeFlag&70)?h(E.el):g;P(E,w,L,null,y,_,b,S,!0)}},ft=(l,d,g,y,_)=>{if(d!==g){if(d!==Q)for(const b in d)!In(b)&&!(b in g)&&i(l,b,d[b],null,_,y);for(const b in g){if(In(b))continue;const S=g[b],I=d[b];S!==I&&b!=="value"&&i(l,b,I,S,_,y)}"value"in g&&i(l,"value",d.value,g.value,_)}},kt=(l,d,g,y,_,b,S,I,E)=>{const w=d.el=l?l.el:c(""),L=d.anchor=l?l.anchor:c("");let{patchFlag:C,dynamicChildren:D,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),l==null?(r(w,g,y),r(L,g,y),Te(d.children||[],g,L,_,b,S,I,E)):C>0&&C&64&&D&&l.dynamicChildren?(Re(l.dynamicChildren,D,g,_,b,S,I),(d.key!=null||_&&d===_.subTree)&&Ba(l,d,!0)):W(l,d,g,L,_,b,S,I,E)},Ue=(l,d,g,y,_,b,S,I,E)=>{d.slotScopeIds=I,l==null?d.shapeFlag&512?_.ctx.activate(d,g,y,S,E):pn(d,g,y,_,b,S,E):jt(l,d,E)},pn=(l,d,g,y,_,b,S)=>{const I=l.component=tf(l,y,_);if(Ra(l)&&(I.ctx.renderer=N),nf(I,!1,S),I.asyncDep){if(_&&_.registerDep(I,ie,S),!l.el){const E=I.subTree=ae(Ft);x(null,E,d,g)}}else ie(I,l,d,g,_,b,S)},jt=(l,d,g)=>{const y=d.component=l.component;if(zu(l,d,g))if(y.asyncDep&&!y.asyncResolved){Y(y,d,g);return}else y.next=d,y.update();else d.el=l.el,y.vnode=d},ie=(l,d,g,y,_,b,S)=>{const I=()=>{if(l.isMounted){let{next:C,bu:D,u:F,parent:V,vnode:ee}=l;{const ye=Va(l);if(ye){C&&(C.el=ee.el,Y(l,C,S)),ye.asyncDep.then(()=>{l.isUnmounted||I()});return}}let q=C,ve;Dt(l,!1),C?(C.el=ee.el,Y(l,C,S)):C=ee,D&&cr(D),(ve=C.props&&C.props.onVnodeBeforeUpdate)&&He(ve,V,C,ee),Dt(l,!0);const le=ts(l),Oe=l.subTree;l.subTree=le,P(Oe,le,h(Oe.el),v(Oe),l,_,b),C.el=le.el,q===null&&Gu(l,le.el),F&&we(F,_),(ve=C.props&&C.props.onVnodeUpdated)&&we(()=>He(ve,V,C,ee),_)}else{let C;const{el:D,props:F}=d,{bm:V,m:ee,parent:q,root:ve,type:le}=l,Oe=Cn(d);if(Dt(l,!1),V&&cr(V),!Oe&&(C=F&&F.onVnodeBeforeMount)&&He(C,q,d),Dt(l,!0),D&&ne){const ye=()=>{l.subTree=ts(l),ne(D,l.subTree,l,_,null)};Oe&&le.__asyncHydrate?le.__asyncHydrate(D,l,ye):ye()}else{ve.ce&&ve.ce._injectChildStyle(le);const ye=l.subTree=ts(l);P(null,ye,g,y,l,_,b),d.el=ye.el}if(ee&&we(ee,_),!Oe&&(C=F&&F.onVnodeMounted)){const ye=d;we(()=>He(C,q,ye),_)}(d.shapeFlag&256||q&&Cn(q.vnode)&&q.vnode.shapeFlag&256)&&l.a&&we(l.a,_),l.isMounted=!0,d=g=y=null}};l.scope.on();const E=l.effect=new ta(I);l.scope.off();const w=l.update=E.run.bind(E),L=l.job=E.runIfDirty.bind(E);L.i=l,L.id=l.uid,E.scheduler=()=>ii(L),Dt(l,!0),w()},Y=(l,d,g)=>{d.component=l;const y=l.vnode.props;l.vnode=d,l.next=null,Ou(l,d.props,y,g),Mu(l,d.children,g),Ct(),Ni(l),Rt()},W=(l,d,g,y,_,b,S,I,E=!1)=>{const w=l&&l.children,L=l?l.shapeFlag:0,C=d.children,{patchFlag:D,shapeFlag:F}=d;if(D>0){if(D&128){dt(w,C,g,y,_,b,S,I,E);return}else if(D&256){Je(w,C,g,y,_,b,S,I,E);return}}F&8?(L&16&&Ae(w,_,b),C!==w&&f(g,C)):L&16?F&16?dt(w,C,g,y,_,b,S,I,E):Ae(w,_,b,!0):(L&8&&f(g,""),F&16&&Te(C,g,y,_,b,S,I,E))},Je=(l,d,g,y,_,b,S,I,E)=>{l=l||Qt,d=d||Qt;const w=l.length,L=d.length,C=Math.min(w,L);let D;for(D=0;D<C;D++){const F=d[D]=E?_t(d[D]):je(d[D]);P(l[D],F,g,null,_,b,S,I,E)}w>L?Ae(l,_,b,!0,!1,C):Te(d,g,y,_,b,S,I,E,C)},dt=(l,d,g,y,_,b,S,I,E)=>{let w=0;const L=d.length;let C=l.length-1,D=L-1;for(;w<=C&&w<=D;){const F=l[w],V=d[w]=E?_t(d[w]):je(d[w]);if(_n(F,V))P(F,V,g,null,_,b,S,I,E);else break;w++}for(;w<=C&&w<=D;){const F=l[C],V=d[D]=E?_t(d[D]):je(d[D]);if(_n(F,V))P(F,V,g,null,_,b,S,I,E);else break;C--,D--}if(w>C){if(w<=D){const F=D+1,V=F<L?d[F].el:y;for(;w<=D;)P(null,d[w]=E?_t(d[w]):je(d[w]),g,V,_,b,S,I,E),w++}}else if(w>D)for(;w<=C;)_e(l[w],_,b,!0),w++;else{const F=w,V=w,ee=new Map;for(w=V;w<=D;w++){const be=d[w]=E?_t(d[w]):je(d[w]);be.key!=null&&ee.set(be.key,w)}let q,ve=0;const le=D-V+1;let Oe=!1,ye=0;const gn=new Array(le);for(w=0;w<le;w++)gn[w]=0;for(w=F;w<=C;w++){const be=l[w];if(ve>=le){_e(be,_,b,!0);continue}let $e;if(be.key!=null)$e=ee.get(be.key);else for(q=V;q<=D;q++)if(gn[q-V]===0&&_n(be,d[q])){$e=q;break}$e===void 0?_e(be,_,b,!0):(gn[$e-V]=w+1,$e>=ye?ye=$e:Oe=!0,P(be,d[$e],g,null,_,b,S,I,E),ve++)}const Ii=Oe?Fu(gn):Qt;for(q=Ii.length-1,w=le-1;w>=0;w--){const be=V+w,$e=d[be],Si=be+1<L?d[be+1].el:y;gn[w]===0?P(null,$e,g,Si,_,b,S,I,E):Oe&&(q<0||w!==Ii[q]?Fe($e,g,Si,2):q--)}}},Fe=(l,d,g,y,_=null)=>{const{el:b,type:S,transition:I,children:E,shapeFlag:w}=l;if(w&6){Fe(l.component.subTree,d,g,y);return}if(w&128){l.suspense.move(d,g,y);return}if(w&64){S.move(l,d,g,N);return}if(S===Ve){r(b,d,g);for(let C=0;C<E.length;C++)Fe(E[C],d,g,y);r(l.anchor,d,g);return}if(S===ns){M(l,d,g);return}if(y!==2&&w&1&&I)if(y===0)I.beforeEnter(b),r(b,d,g),we(()=>I.enter(b),_);else{const{leave:C,delayLeave:D,afterLeave:F}=I,V=()=>r(b,d,g),ee=()=>{C(b,()=>{V(),F&&F()})};D?D(b,V,ee):ee()}else r(b,d,g)},_e=(l,d,g,y=!1,_=!1)=>{const{type:b,props:S,ref:I,children:E,dynamicChildren:w,shapeFlag:L,patchFlag:C,dirs:D,cacheIndex:F}=l;if(C===-2&&(_=!1),I!=null&&Es(I,null,g,l,!0),F!=null&&(d.renderCache[F]=void 0),L&256){d.ctx.deactivate(l);return}const V=L&1&&D,ee=!Cn(l);let q;if(ee&&(q=S&&S.onVnodeBeforeUnmount)&&He(q,d,l),L&6)er(l.component,g,y);else{if(L&128){l.suspense.unmount(g,y);return}V&&Nt(l,null,d,"beforeUnmount"),L&64?l.type.remove(l,d,g,N,y):w&&!w.hasOnce&&(b!==Ve||C>0&&C&64)?Ae(w,d,g,!1,!0):(b===Ve&&C&384||!_&&L&16)&&Ae(E,d,g),y&&Wt(l)}(ee&&(q=S&&S.onVnodeUnmounted)||V)&&we(()=>{q&&He(q,d,l),V&&Nt(l,null,d,"unmounted")},g)},Wt=l=>{const{type:d,el:g,anchor:y,transition:_}=l;if(d===Ve){Kt(g,y);return}if(d===ns){O(l);return}const b=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(l.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,E=()=>S(g,b);I?I(l.el,b,E):E()}else b()},Kt=(l,d)=>{let g;for(;l!==d;)g=p(l),s(l),l=g;s(d)},er=(l,d,g)=>{const{bum:y,scope:_,job:b,subTree:S,um:I,m:E,a:w}=l;$i(E),$i(w),y&&cr(y),_.stop(),b&&(b.flags|=8,_e(S,l,d,g)),I&&we(I,d),we(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ae=(l,d,g,y=!1,_=!1,b=0)=>{for(let S=b;S<l.length;S++)_e(l[S],d,g,y,_)},v=l=>{if(l.shapeFlag&6)return v(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const d=p(l.anchor||l.el),g=d&&d[su];return g?p(g):d};let A=!1;const T=(l,d,g)=>{l==null?d._vnode&&_e(d._vnode,null,null,!0):P(d._vnode||null,l,d,null,null,null,g),d._vnode=l,A||(A=!0,Ni(),Ea(),A=!1)},N={p:P,um:_e,m:Fe,r:Wt,mt:pn,mc:Te,pc:W,pbc:Re,n:v,o:t};let G,ne;return{render:T,hydrate:G,createApp:Au(T,G)}}function es({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Uu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ba(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_t(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ba(o,c)),c.type===Vr&&(c.el=o.el)}}function Fu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Va(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Va(e)}function $i(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $u=Symbol.for("v-scx"),Hu=()=>it($u);function ur(t,e,n){return ja(t,e,n)}function ja(t,e,n=Q){const{immediate:r,deep:s,flush:i,once:o}=n,c=ce({},n);let a;if(jr)if(i==="sync"){const p=Hu();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!e||r)c.once=!0;else{const p=()=>{};return p.stop=Ke,p.resume=Ke,p.pause=Ke,p}const u=ue;c.call=(p,m,R)=>qe(p,u,m,R);let f=!1;i==="post"?c.scheduler=p=>{we(p,u&&u.suspense)}:i!=="sync"&&(f=!0,c.scheduler=(p,m)=>{m?p():ii(p)}),c.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=eu(t,e,c);return a&&a.push(h),h}function Bu(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Wa(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Kn(this),c=ja(s,i.bind(r),n);return o(),c}function Wa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Vu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Me(e)}Modifiers`]||t[`${Bt(e)}Modifiers`];function ju(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&Vu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>oe(f)?f.trim():f)),o.number&&(s=n.map(_s)));let c,a=r[c=Jr(e)]||r[c=Jr(Me(e))];!a&&i&&(a=r[c=Jr(Bt(e))]),a&&qe(a,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,qe(u,t,6,s)}}function Ka(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=u=>{const f=Ka(u,e,!0);f&&(c=!0,ce(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):ce(o,i),se(t)&&r.set(t,o),o)}function Br(t,e){return!t||!Dr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Bt(e))||K(t,e))}function ts(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:u,renderCache:f,props:h,data:p,setupState:m,ctx:R,inheritAttrs:P}=t,$=vr(t);let x,k;try{if(n.shapeFlag&4){const O=s||r,j=O;x=je(u.call(j,O,f,h,m,p,R)),k=c}else{const O=e;x=je(O.length>1?O(h,{attrs:c,slots:o,emit:a}):O(h,null)),k=e.props?c:Wu(c)}}catch(O){An.length=0,$r(O,t,1),x=ae(Ft)}let M=x;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:j}=M;O.length&&j&7&&(i&&O.some(js)&&(k=Ku(k,i)),M=cn(M,k,!1,!0))}return n.dirs&&(M=cn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&oi(M,n.transition),x=M,vr($),x}const Wu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Dr(n))&&((e||(e={}))[n]=t[n]);return e},Ku=(t,e)=>{const n={};for(const r in t)(!js(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function zu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Hi(r,o,u):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Br(u,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Hi(r,o,u):!0:!!o;return!1}function Hi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Br(n,i))return!0}return!1}function Gu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const za=t=>t.__isSuspense;function qu(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):ru(t)}const Ve=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),ns=Symbol.for("v-stc"),An=[];let Se=null;function et(t=!1){An.push(Se=t?null:[])}function Ju(){An.pop(),Se=An[An.length-1]||null}let Un=1;function Bi(t){Un+=t,t<0&&Se&&(Se.hasOnce=!0)}function Ga(t){return t.dynamicChildren=Un>0?Se||Qt:null,Ju(),Un>0&&Se&&Se.push(t),t}function an(t,e,n,r,s,i){return Ga(Pe(t,e,n,r,s,i,!0))}function Rs(t,e,n,r,s){return Ga(ae(t,e,n,r,s,!0))}function Er(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const qa=({key:t})=>t??null,fr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||fe(t)||H(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function Pe(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qa(e),ref:e&&fr(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(li(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Un>0&&!o&&Se&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Se.push(a),a}const ae=Yu;function Yu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yu)&&(t=Ft),Er(t)){const c=cn(t,e,!0);return n&&li(c,n),Un>0&&!i&&Se&&(c.shapeFlag&6?Se[Se.indexOf(t)]=c:Se.push(c)),c.patchFlag=-2,c}if(cf(t)&&(t=t.__vccOpts),e){e=Xu(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=Gs(c)),se(a)&&(ni(a)&&!B(a)&&(a=ce({},a)),e.style=zs(a))}const o=oe(t)?1:za(t)?128:iu(t)?64:se(t)?4:H(t)?2:0;return Pe(t,e,n,r,s,o,i,!0)}function Xu(t){return t?ni(t)||Ma(t)?ce({},t):t:null}function cn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,u=e?Qu(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qa(u),ref:e&&e.ref?n&&i?B(i)?i.concat(fr(e)):[i,fr(e)]:fr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&oi(f,a.clone(f)),f}function Pn(t=" ",e=0){return ae(Vr,null,t,e)}function rs(t="",e=!1){return e?(et(),Rs(Ft,null,t)):ae(Ft,null,t)}function je(t){return t==null||typeof t=="boolean"?ae(Ft):B(t)?ae(Ve,null,t.slice()):Er(t)?_t(t):ae(Vr,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function li(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),li(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ma(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Pn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gs([e.class,r.class]));else if(s==="style")e.style=zs([e.style,r.style]);else if(Dr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){qe(t,e,7,[n,r])}const Zu=ka();let ef=0;function tf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Zu,i={uid:ef++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Il(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:La(r,s),emitsOptions:Ka(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ju.bind(null,i),t.ce&&t.ce(i),i}let ue=null,Ir,As;{const t=Zo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ir=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),As=e("__VUE_SSR_SETTERS__",n=>jr=n)}const Kn=t=>{const e=ue;return Ir(t),t.scope.on(),()=>{t.scope.off(),Ir(e)}},Vi=()=>{ue&&ue.scope.off(),Ir(null)};function Ja(t){return t.vnode.shapeFlag&4}let jr=!1;function nf(t,e=!1,n=!1){e&&As(e);const{props:r,children:s}=t.vnode,i=Ja(t);Pu(t,r,i,e),Du(t,s,n);const o=i?rf(t,e):void 0;return e&&As(!1),o}function rf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?of(t):null,i=Kn(t);Ct();const o=Wn(r,t,0,[t.props,s]);if(Rt(),i(),Xo(o)){if(Cn(t)||Ca(t),o.then(Vi,Vi),e)return o.then(c=>{ji(t,c,e)}).catch(c=>{$r(c,t,0)});t.asyncDep=o}else ji(t,o,e)}else Ya(t,e)}function ji(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=va(e)),Ya(t,n)}let Wi;function Ya(t,e,n){const r=t.type;if(!t.render){if(!e&&Wi&&!r.render){const s=r.template||ai(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,u=ce(ce({isCustomElement:i,delimiters:c},o),a);r.render=Wi(s,u)}}t.render=r.render||Ke}{const s=Kn(t);Ct();try{Eu(t)}finally{Rt(),s()}}}const sf={get(t,e){return de(t,"get",""),t[e]}};function of(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sf),slots:t.slots,emit:t.emit,expose:e}}function Wr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(va(zl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function af(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function cf(t){return H(t)&&"__vccOpts"in t}const ke=(t,e)=>Ql(t,e,jr);function Xa(t,e,n){const r=arguments.length;return r===2?se(e)&&!B(e)?Er(e)?ae(t,null,[e]):ae(t,e):ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),ae(t,e,n))}const lf="3.5.9";/**
* @vue/runtime-dom v3.5.9
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ps;const Ki=typeof window<"u"&&window.trustedTypes;if(Ki)try{Ps=Ki.createPolicy("vue",{createHTML:t=>t})}catch{}const Qa=Ps?t=>Ps.createHTML(t):t=>t,uf="http://www.w3.org/2000/svg",ff="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,zi=Qe&&Qe.createElement("template"),df={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Qe.createElementNS(uf,t):e==="mathml"?Qe.createElementNS(ff,t):n?Qe.createElement(t,{is:n}):Qe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Qe.createTextNode(t),createComment:t=>Qe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zi.innerHTML=Qa(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=zi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hf=Symbol("_vtc");function pf(t,e,n){const r=t[hf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gi=Symbol("_vod"),gf=Symbol("_vsh"),mf=Symbol(""),_f=/(^|;)\s*display\s*:/;function vf(t,e,n){const r=t.style,s=oe(n);let i=!1;if(n&&!s){if(e)if(oe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&dr(r,c,"")}else for(const o in e)n[o]==null&&dr(r,o,"");for(const o in n)o==="display"&&(i=!0),dr(r,o,n[o])}else if(s){if(e!==n){const o=r[mf];o&&(n+=";"+o),r.cssText=n,i=_f.test(n)}}else e&&t.removeAttribute("style");Gi in t&&(t[Gi]=i?r.display:"",t[gf]&&(r.display="none"))}const qi=/\s*!important$/;function dr(t,e,n){if(B(n))n.forEach(r=>dr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yf(t,e);qi.test(n)?t.setProperty(Bt(r),n.replace(qi,""),"important"):t[r]=n}}const Ji=["Webkit","Moz","ms"],ss={};function yf(t,e){const n=ss[e];if(n)return n;let r=Me(e);if(r!=="filter"&&r in t)return ss[e]=r;r=Lr(r);for(let s=0;s<Ji.length;s++){const i=Ji[s]+r;if(i in t)return ss[e]=i}return e}const Yi="http://www.w3.org/1999/xlink";function Xi(t,e,n,r,s,i=El(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yi,e.slice(6,e.length)):t.setAttributeNS(Yi,e,n):n==null||i&&!ea(n)?t.removeAttribute(e):t.setAttribute(e,i?"":dn(n)?String(n):n)}function bf(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qa(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(o!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ea(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function qt(t,e,n,r){t.addEventListener(e,n,r)}function wf(t,e,n,r){t.removeEventListener(e,n,r)}const Qi=Symbol("_vei");function Ef(t,e,n,r,s=null){const i=t[Qi]||(t[Qi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=If(e);if(r){const u=i[e]=Cf(r,s);qt(t,c,u,a)}else o&&(wf(t,c,o,a),i[e]=void 0)}}const Zi=/(?:Once|Passive|Capture)$/;function If(t){let e;if(Zi.test(t)){e={};let r;for(;r=t.match(Zi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bt(t.slice(2)),e]}let is=0;const Sf=Promise.resolve(),Tf=()=>is||(Sf.then(()=>is=0),is=Date.now());function Cf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(Rf(r,n.value),e,5,[r])};return n.value=t,n.attached=Tf(),n}function Rf(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const eo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Af=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pf(t,r,o):e==="style"?vf(t,n,r):Dr(e)?js(e)||Ef(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pf(t,e,r,o))?(bf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xi(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xi(t,e,r,o))};function Pf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&eo(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return eo(e)&&oe(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!oe(n)))}const to=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>cr(e,n):e};function Of(t){t.target.composing=!0}function no(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const os=Symbol("_assign"),Sr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[os]=to(s);const i=r||s.props&&s.props.type==="number";qt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=_s(c)),t[os](c)}),n&&qt(t,"change",()=>{t.value=t.value.trim()}),e||(qt(t,"compositionstart",Of),qt(t,"compositionend",no),qt(t,"change",no))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[os]=to(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?_s(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},kf=["ctrl","shift","alt","meta"],Nf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kf.some(n=>t[`${n}Key`]&&!e.includes(n))},Za=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Nf[e[o]];if(c&&c(s,e))return}return t(s,...i)})},Df=ce({patchProp:Af},df);let ro;function Mf(){return ro||(ro=xu(Df))}const xf=(...t)=>{const e=Mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Lf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Lf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Uf(t){return oe(t)?document.querySelector(t):t}var so={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ff=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|u>>6,m=u&63;a||(m=64,o||(p=64)),r.push(n[f],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ec(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ff(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||h==null)throw new $f;const p=i<<2|c>>4;if(r.push(p),u!==64){const m=c<<4&240|u>>2;if(r.push(m),h!==64){const R=u<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $f extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hf=function(t){const e=ec(t);return tc.encodeByteArray(e,!0)},nc=function(t){return Hf(t).replace(/\./g,"")},rc=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=()=>Bf().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process>"u"||typeof so>"u")return;const t=so.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rc(t[1]);return e&&JSON.parse(e)},ui=()=>{try{return Vf()||jf()||Wf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kf=t=>{var e,n;return(n=(e=ui())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sc=()=>{var t;return(t=ui())===null||t===void 0?void 0:t.config},ic=t=>{var e;return(e=ui())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function qf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xf(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qf(){try{return typeof indexedDB=="object"}catch{return!1}}function Zf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ed,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zn.prototype.create)}}class zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?td(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new At(s,c,r)}}function td(t,e){return t.replace(nd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nd=/\{\$([^}]+)}/g;function rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(io(i)&&io(o)){if(!Tr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function io(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sd(t,e){const n=new id(t,e);return n.subscribe.bind(n)}class id{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");od(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=as),s.error===void 0&&(s.error=as),s.complete===void 0&&(s.complete=as);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function od(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function as(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){return t&&t._delegate?t._delegate:t}class ln{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ld(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cd(t){return t===xt?void 0:t}function ld(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ad(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const fd={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},dd=X.INFO,hd={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},pd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=dd,this._logHandler=pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const gd=(t,e)=>e.some(n=>t instanceof n);let oo,ao;function md(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _d(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ac=new WeakMap,Os=new WeakMap,cc=new WeakMap,cs=new WeakMap,fi=new WeakMap;function vd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ac.set(n,t)}).catch(()=>{}),fi.set(e,t),e}function yd(t){if(Os.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Os.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Os.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bd(t){ks=t(ks)}function wd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ls(this),e,...n);return cc.set(r,e.sort?e.sort():[e]),It(r)}:_d().includes(t)?function(...e){return t.apply(ls(this),e),It(ac.get(this))}:function(...e){return It(t.apply(ls(this),e))}}function Ed(t){return typeof t=="function"?wd(t):(t instanceof IDBTransaction&&yd(t),gd(t,md())?new Proxy(t,ks):t)}function It(t){if(t instanceof IDBRequest)return vd(t);if(cs.has(t))return cs.get(t);const e=Ed(t);return e!==t&&(cs.set(t,e),fi.set(e,t)),e}const ls=t=>fi.get(t);function Id(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const Sd=["get","getKey","getAll","getAllKeys","count"],Td=["put","add","delete","clear"],us=new Map;function co(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(us.get(e))return us.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Td.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Sd.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return us.set(e,i),i}bd(t=>({...t,get:(e,n,r)=>co(e,n)||t.get(e,n,r),has:(e,n)=>!!co(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Rd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ns="@firebase/app",lo="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new oc("@firebase/app"),Ad="@firebase/app-compat",Pd="@firebase/analytics-compat",Od="@firebase/analytics",kd="@firebase/app-check-compat",Nd="@firebase/app-check",Dd="@firebase/auth",Md="@firebase/auth-compat",xd="@firebase/database",Ld="@firebase/database-compat",Ud="@firebase/functions",Fd="@firebase/functions-compat",$d="@firebase/installations",Hd="@firebase/installations-compat",Bd="@firebase/messaging",Vd="@firebase/messaging-compat",jd="@firebase/performance",Wd="@firebase/performance-compat",Kd="@firebase/remote-config",zd="@firebase/remote-config-compat",Gd="@firebase/storage",qd="@firebase/storage-compat",Jd="@firebase/firestore",Yd="@firebase/vertexai-preview",Xd="@firebase/firestore-compat",Qd="firebase",Zd="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="[DEFAULT]",eh={[Ns]:"fire-core",[Ad]:"fire-core-compat",[Od]:"fire-analytics",[Pd]:"fire-analytics-compat",[Nd]:"fire-app-check",[kd]:"fire-app-check-compat",[Dd]:"fire-auth",[Md]:"fire-auth-compat",[xd]:"fire-rtdb",[Ld]:"fire-rtdb-compat",[Ud]:"fire-fn",[Fd]:"fire-fn-compat",[$d]:"fire-iid",[Hd]:"fire-iid-compat",[Bd]:"fire-fcm",[Vd]:"fire-fcm-compat",[jd]:"fire-perf",[Wd]:"fire-perf-compat",[Kd]:"fire-rc",[zd]:"fire-rc-compat",[Gd]:"fire-gcs",[qd]:"fire-gcs-compat",[Jd]:"fire-fst",[Xd]:"fire-fst-compat",[Yd]:"fire-vertex","fire-js":"fire-js",[Qd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Map,th=new Map,Ms=new Map;function uo(t,e){try{t.container.addComponent(e)}catch(n){at.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Ms.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Ms.set(e,t);for(const n of Cr.values())uo(n,t);for(const n of th.values())uo(n,t);return!0}function lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function We(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new zn("app","Firebase",nh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=Zd;function uc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ds,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=sc()),!n)throw St.create("no-options");const i=Cr.get(s);if(i){if(Tr(n,i.options)&&Tr(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new ud(s);for(const a of Ms.values())o.addComponent(a);const c=new rh(n,r,o);return Cr.set(s,c),c}function sh(t=Ds){const e=Cr.get(t);if(!e&&t===Ds&&sc())return uc();if(!e)throw St.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=eh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(c.join(" "));return}Fn(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="firebase-heartbeat-database",oh=1,$n="firebase-heartbeat-store";let fs=null;function fc(){return fs||(fs=Id(ih,oh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($n)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),fs}async function ah(t){try{const n=(await fc()).transaction($n),r=await n.objectStore($n).get(dc(t));return await n.done,r}catch(e){if(e instanceof At)at.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(n.message)}}}async function fo(t,e){try{const r=(await fc()).transaction($n,"readwrite");await r.objectStore($n).put(e,dc(t)),await r.done}catch(n){if(n instanceof At)at.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});at.warn(r.message)}}}function dc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=1024,lh=30*24*60*60*1e3;class uh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ho();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=lh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){at.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ho(),{heartbeatsToSend:r,unsentEntries:s}=fh(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return at.warn(n),""}}}function ho(){return new Date().toISOString().substring(0,10)}function fh(t,e=ch){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),po(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),po(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qf()?Zf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ah(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function po(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){Fn(new ln("platform-logger",e=>new Cd(e),"PRIVATE")),Fn(new ln("heartbeat",e=>new uh(e),"PRIVATE")),nn(Ns,lo,t),nn(Ns,lo,"esm2017"),nn("fire-js","")}hh("");function di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ph=hc,pc=new zn("auth","Firebase",hc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new oc("@firebase/auth");function gh(t,...e){Rr.logLevel<=X.WARN&&Rr.warn(`Auth (${qn}): ${t}`,...e)}function hr(t,...e){Rr.logLevel<=X.ERROR&&Rr.error(`Auth (${qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw hi(t,...e)}function ze(t,...e){return hi(t,...e)}function gc(t,e,n){const r=Object.assign(Object.assign({},ph()),{[e]:n});return new zn("auth","Firebase",r).create(e,{appName:t.name})}function ot(t){return gc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pc.create(t,...e)}function U(t,e,...n){if(!t)throw hi(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function ct(t,e){t||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mh(){return go()==="http:"||go()==="https:"}function go(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mh()||Jf()||"connection"in navigator)?navigator.onLine:!0}function vh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Gf()||Yf()}get(){return _h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh=new Jn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,s={}){return _c(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Gn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return qf()||(u.referrerPolicy="no-referrer"),mc.fetch()(vc(t,t.config.apiHost,n,c),u)})}async function _c(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yh),e);try{const s=new Eh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ar(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw gc(t,f,u);xe(t,f)}}catch(s){if(s instanceof At)throw s;xe(t,"network-request-failed",{message:String(s)})}}async function Yn(t,e,n,r,s={}){const i=await Ot(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pi(t.config,s):`${t.config.apiScheme}://${s}`}function wh(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ze(t,e,r);return s.customData._tokenResponse=n,s}function mo(t){return t!==void 0&&t.enterprise!==void 0}class Ih{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wh(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Sh(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function yc(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ch(t,e=!1){const n=ut(t),r=await n.getIdToken(e),s=gi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(ds(s.auth_time)),issuedAtTime:On(ds(s.iat)),expirationTime:On(ds(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ds(t){return Number(t)*1e3}function gi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=rc(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _o(t){const e=gi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&Rh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hn(t,yc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?bc(i.providerUserInfo):[],c=Oh(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ls(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Ph(t){const e=ut(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function bc(t){return t.map(e=>{var{providerId:n}=e,r=di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(t,e){const n=await _c(t,{},async()=>{const r=Gn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",mc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Nh(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_o(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=_o(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ah(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ls(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ch(this,e)}reload(){return Ph(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(ot(this.auth));const e=await this.getIdToken();return await Hn(this,Th(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,$=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:O,isAnonymous:j,providerData:re,stsTokenManager:Z}=n;U(M&&Z,e,"internal-error");const Te=rn.fromJSON(this.name,Z);U(typeof M=="string",e,"internal-error"),pt(h,e.name),pt(p,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),pt(m,e.name),pt(R,e.name),pt(P,e.name),pt($,e.name),pt(x,e.name),pt(k,e.name);const Ce=new nt({uid:M,auth:e,email:p,emailVerified:O,displayName:h,isAnonymous:j,photoURL:R,phoneNumber:m,tenantId:P,stsTokenManager:Te,createdAt:x,lastLoginAt:k});return re&&Array.isArray(re)&&(Ce.providerData=re.map(Re=>Object.assign({},Re))),$&&(Ce._redirectEventId=$),Ce}static async _fromIdTokenResponse(e,n,r=!1){const s=new rn;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ar(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?bc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new rn;c.updateFromIdToken(r);const a=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ls(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Map;function rt(t){ct(t instanceof Function,"Expected a class definition");let e=vo.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wc.type="NONE";const yo=wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(rt(yo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||rt(yo);const o=pr(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const h=nt._fromJSON(e,f);u!==i&&(c=h),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new sn(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ec(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rc(e))return"Blackberry";if(Ac(e))return"Webos";if(Ic(e))return"Safari";if((e.includes("chrome/")||Sc(e))&&!e.includes("edge/"))return"Chrome";if(Cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ec(t=me()){return/firefox\//i.test(t)}function Ic(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sc(t=me()){return/crios\//i.test(t)}function Tc(t=me()){return/iemobile/i.test(t)}function Cc(t=me()){return/android/i.test(t)}function Rc(t=me()){return/blackberry/i.test(t)}function Ac(t=me()){return/webos/i.test(t)}function mi(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dh(t=me()){var e;return mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mh(){return Xf()&&document.documentMode===10}function Pc(t=me()){return mi(t)||Cc(t)||Ac(t)||Rc(t)||/windows phone/i.test(t)||Tc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e=[]){let n;switch(t){case"Browser":n=bo(me());break;case"Worker":n=`${bo(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=6;class Fh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Uh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wo(this),this.idTokenSubscription=new wo(this),this.beforeStateQueue=new xh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yc(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(ot(this));const n=e?ut(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(ot(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(ot(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lh(this),n=new Fh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Nh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vt(t){return ut(t)}class wo{constructor(e){this.auth=e,this.observer=null,this.addObserver=sd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hh(t){Kr=t}function kc(t){return Kr.loadJS(t)}function Bh(){return Kr.recaptchaEnterpriseScript}function Vh(){return Kr.gapiScript}function jh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Wh="recaptcha-enterprise",Kh="NO_RECAPTCHA";class zh{constructor(e){this.type=Wh,this.auth=Vt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Sh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ih(a);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;mo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Kh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&mo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Bh();a.length!==0&&(a+=c),kc(a).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Eo(t,e,n,r=!1){const s=new zh(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Us(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Eo(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Eo(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){const n=lc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tr(i,e??{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function qh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jh(t,e,n){const r=Vt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Nc(e),{host:o,port:c}=Yh(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Xh()}function Nc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Yh(t){const e=Nc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Io(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Io(o)}}}function Io(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function Qh(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(t,e){return Yn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function tp(t,e){return Yn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends _i{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Us(e,n,"signInWithPassword",Zh);case"emailLink":return ep(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Us(e,r,"signUpPassword",Qh);case"emailLink":return tp(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){return Yn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="http://localhost";class $t extends _i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=di(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:np,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sp(t){const e=bn(wn(t)).link,n=e?bn(wn(e)).deep_link_id:null,r=bn(wn(t)).deep_link_id;return(r?bn(wn(r)).link:null)||r||n||e||t}class vi{constructor(e){var n,r,s,i,o,c;const a=bn(wn(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=rp((s=a.mode)!==null&&s!==void 0?s:null);U(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=sp(e);try{return new vi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.providerId=hn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vi.parseLink(n);return U(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}hn.PROVIDER_ID="password";hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Xn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com";bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Xn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.GITHUB_SIGN_IN_METHOD="github.com";wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Xn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ip(t,e){return Yn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=So(r);return new Ht({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=So(r);return new Ht({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function So(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pr(e,n,r,s)}}function Mc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pr._fromErrorAndOperation(t,i,e,r):i})}async function op(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ht._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e,n=!1){const{auth:r}=t;if(We(r.app))return Promise.reject(ot(r));const s="reauthenticate";try{const i=await Hn(t,Mc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=gi(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Ht._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(t,e,n=!1){if(We(t.app))return Promise.reject(ot(t));const r="signIn",s=await Mc(t,r,e),i=await Ht._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function cp(t,e){return xc(Vt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lc(t){const e=Vt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lp(t,e,n){if(We(t.app))return Promise.reject(ot(t));const r=Vt(t),o=await Us(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ip).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Lc(t),a}),c=await Ht._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function up(t,e,n){return We(t.app)?Promise.reject(ot(t)):cp(ut(t),hn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lc(t),r})}function fp(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function dp(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}function hp(t,e,n,r){return ut(t).onAuthStateChanged(e,n,r)}function pp(t){return ut(t).signOut()}const Or="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=1e3,mp=10;class Fc extends Uc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Mh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fc.type="LOCAL";const _p=Fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Uc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$c.type="SESSION";const Hc=$c;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),a=await vp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const u=yi("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function bp(t){Ge().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function wp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ep(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ip(){return Bc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="firebaseLocalStorageDb",Sp=1,kr="firebaseLocalStorage",jc="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gr(t,e){return t.transaction([kr],e?"readwrite":"readonly").objectStore(kr)}function Tp(){const t=indexedDB.deleteDatabase(Vc);return new Qn(t).toPromise()}function Fs(){const t=indexedDB.open(Vc,Sp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kr,{keyPath:jc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kr)?e(r):(r.close(),await Tp(),e(await Fs()))})})}async function To(t,e,n){const r=Gr(t,!0).put({[jc]:e,value:n});return new Qn(r).toPromise()}async function Cp(t,e){const n=Gr(t,!1).get(e),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function Co(t,e){const n=Gr(t,!0).delete(e);return new Qn(n).toPromise()}const Rp=800,Ap=3;class Wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ap)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zr._getInstance(Ip()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wp(),!this.activeServiceWorker)return;this.sender=new yp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ep()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fs();return await To(e,Or,"1"),await Co(e,Or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>To(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Cp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Co(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gr(s,!1).getAll();return new Qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wc.type="LOCAL";const Pp=Wc;new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e){return e?rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends _i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kp(t){return xc(t.auth,new bi(t),t.bypassAuthState)}function Np(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ap(n,new bi(t),t.bypassAuthState)}async function Dp(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),op(n,new bi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kp;case"linkViaPopup":case"linkViaRedirect":return Dp;case"reauthViaPopup":case"reauthViaRedirect":return Np;default:xe(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Jn(2e3,1e4);class Xt extends Kc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=yi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mp.get())};e()}}Xt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="pendingRedirect",gr=new Map;class Lp extends Kc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const r=await Up(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Up(t,e){const n=Hp(e),r=$p(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fp(t,e){gr.set(t._key(),e)}function $p(t){return rt(t._redirectPersistence)}function Hp(t){return pr(xp,t.config.apiKey,t.name)}async function Bp(t,e,n=!1){if(We(t.app))return Promise.reject(ot(t));const r=Vt(t),s=Op(r,e),o=await new Lp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=10*60*1e3;class jp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ro(e))}saveEventToCache(e){this.cachedEventUids.add(Ro(e)),this.lastProcessedEventTime=Date.now()}}function Ro(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kp(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gp=/^https?/;async function qp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Kp(t);for(const n of e)try{if(Jp(n))return}catch{}xe(t,"unauthorized-domain")}function Jp(t){const e=xs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Gp.test(n))return!1;if(zp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Jn(3e4,6e4);function Ao(){const t=Ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xp(t){return new Promise((e,n)=>{var r,s,i;function o(){Ao(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ao(),n(ze(t,"network-request-failed"))},timeout:Yp.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const c=jh("iframefcb");return Ge()[c]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},kc(`${Vh()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw mr=null,e})}let mr=null;function Qp(t){return mr=mr||Xp(t),mr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Jn(5e3,15e3),eg="__/auth/iframe",tg="emulator/auth/iframe",ng={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pi(e,tg):`https://${t.config.authDomain}/${eg}`,r={apiKey:e.apiKey,appName:t.name,v:qn},s=rg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Gn(r).slice(1)}`}async function ig(t){const e=await Qp(t),n=Ge().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:sg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ng,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),c=Ge().setTimeout(()=>{i(o)},Zp.get());function a(){Ge().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ag=500,cg=600,lg="_blank",ug="http://localhost";class Po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fg(t,e,n,r=ag,s=cg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},og),{width:r.toString(),height:s.toString(),top:i,left:o}),u=me().toLowerCase();n&&(c=Sc(u)?lg:n),Ec(u)&&(e=e||ug,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[m,R])=>`${p}${m}=${R},`,"");if(Dh(u)&&c!=="_self")return dg(e||"",c),new Po(null);const h=window.open(e||"",c,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Po(h)}function dg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="__/auth/handler",pg="emulator/auth/handler",gg=encodeURIComponent("fac");async function Oo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(e instanceof Dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Xn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),u=a?`#${gg}=${encodeURIComponent(a)}`:"";return`${mg(t)}?${Gn(c).slice(1)}${u}`}function mg({config:t}){return t.emulator?pi(t,pg):`https://${t.authDomain}/${hg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="webStorageSupport";class _g{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hc,this._completeRedirectFn=Bp,this._overrideRedirectResult=Fp}async _openPopup(e,n,r,s){var i;ct((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Oo(e,n,r,xs(),s);return fg(e,o,yi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Oo(e,n,r,xs(),s);return bp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ig(e),r=new jp(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hs,{type:hs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hs];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Pc()||Ic()||mi()}}const vg=_g;var ko="@firebase/auth",No="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wg(t){Fn(new ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oc(t)},u=new $h(r,s,i,a);return qh(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new ln("auth-internal",e=>{const n=Vt(e.getProvider("auth").getImmediate());return(r=>new yg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(ko,No,bg(t)),nn(ko,No,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=5*60,Ig=ic("authIdTokenMaxAge")||Eg;let Do=null;const Sg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ig)return;const s=n==null?void 0:n.token;Do!==s&&(Do=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nr(t=sh()){const e=lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Gh(t,{popupRedirectResolver:vg,persistence:[Pp,_p,Hc]}),r=ic("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Sg(i.toString());dp(n,o,()=>o(n.currentUser)),fp(n,c=>o(c))}}const s=Kf("auth");return s&&Jh(n,`http://${s}`),n}function Tg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Hh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Tg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wg("Browser");const Zn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Cg={name:"NavbarView",data(){return{isLoggedIn:!1}},created(){const t=Nr();hp(t,e=>{this.isLoggedIn=!!e})},methods:{async logout(){const t=Nr();try{await pp(t),this.isLoggedIn=!1,this.$router.push({name:"login"})}catch(e){console.log("Error al cerrar sesión:",e.message)}}}};function Rg(t,e,n,r,s,i){const o=br("router-link");return et(),an("nav",null,[ae(o,{to:"/"},{default:Tn(()=>e[1]||(e[1]=[Pn("Home")])),_:1}),s.isLoggedIn?rs("",!0):(et(),Rs(o,{key:0,to:"/login"},{default:Tn(()=>e[2]||(e[2]=[Pn("Login")])),_:1})),s.isLoggedIn?rs("",!0):(et(),Rs(o,{key:1,to:"/signup"},{default:Tn(()=>e[3]||(e[3]=[Pn("Registro")])),_:1})),s.isLoggedIn?(et(),an("button",{key:2,onClick:e[0]||(e[0]=(...c)=>i.logout&&i.logout(...c)),class:"btn-logout"}," Cerrar sesión ")):rs("",!0)])}const Ag=Zn(Cg,[["render",Rg]]),Pg={data(){return{}},components:{NavbarView:Ag}};function Og(t,e,n,r,s,i){const o=br("NavbarView"),c=br("router-view");return et(),an(Ve,null,[ae(o),Pe("main",null,[ae(c)])],64)}const kg=Zn(Pg,[["render",Og]]);/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jt=typeof document<"u";function Gc(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ng(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Gc(t.default)}const J=Object.assign;function ps(t,e){const n={};for(const r in e){const s=e[r];n[r]=Le(s)?s.map(t):t(s)}return n}const kn=()=>{},Le=Array.isArray,qc=/#/g,Dg=/&/g,Mg=/\//g,xg=/=/g,Lg=/\?/g,Jc=/\+/g,Ug=/%5B/g,Fg=/%5D/g,Yc=/%5E/g,$g=/%60/g,Xc=/%7B/g,Hg=/%7C/g,Qc=/%7D/g,Bg=/%20/g;function wi(t){return encodeURI(""+t).replace(Hg,"|").replace(Ug,"[").replace(Fg,"]")}function Vg(t){return wi(t).replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function $s(t){return wi(t).replace(Jc,"%2B").replace(Bg,"+").replace(qc,"%23").replace(Dg,"%26").replace($g,"`").replace(Xc,"{").replace(Qc,"}").replace(Yc,"^")}function jg(t){return $s(t).replace(xg,"%3D")}function Wg(t){return wi(t).replace(qc,"%23").replace(Lg,"%3F")}function Kg(t){return t==null?"":Wg(t).replace(Mg,"%2F")}function Vn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const zg=/\/$/,Gg=t=>t.replace(zg,"");function gs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Xg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Vn(o)}}function qg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&Zc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Yg(t[n],e[n]))return!1;return!0}function Yg(t,e){return Le(t)?xo(t,e):Le(e)?xo(e,t):t===e}function xo(t,e){return Le(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const gt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jn;(function(t){t.pop="pop",t.push="push"})(jn||(jn={}));var Nn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Nn||(Nn={}));function Qg(t){if(!t)if(Jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gg(t)}const Zg=/^[^#]+#/;function em(t,e){return t.replace(Zg,"#")+e}function tm(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const qr=()=>({left:window.scrollX,top:window.scrollY});function nm(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=tm(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Lo(t,e){return(history.state?history.state.position-e:-1)+t}const Hs=new Map;function rm(t,e){Hs.set(t,e)}function sm(t){const e=Hs.get(t);return Hs.delete(t),e}let im=()=>location.protocol+"//"+location.host;function el(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Mo(a,"")}return Mo(n,t)+r+s}function om(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=el(t,location),R=n.value,P=e.value;let $=0;if(p){if(n.value=m,e.value=p,o&&o===R){o=null;return}$=P?p.position-P.position:0}else r(m);s.forEach(x=>{x(n.value,R,{delta:$,type:jn.pop,direction:$?$>0?Nn.forward:Nn.back:Nn.unknown})})};function a(){o=n.value}function u(p){s.push(p);const m=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(m),m}function f(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:qr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:u,destroy:h}}function Uo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?qr():null}}function am(t){const{history:e,location:n}=window,r={value:el(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:im()+t+a;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(m){console.error(m),n[f?"replace":"assign"](p)}}function o(a,u){const f=J({},e.state,Uo(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,u){const f=J({},s.value,e.state,{forward:a,scroll:qr()});i(f.current,f,!0);const h=J({},Uo(r.value,a,null),{position:f.position+1},u);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function cm(t){t=Qg(t);const e=am(t),n=om(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:em.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lm(t){return typeof t=="string"||t&&typeof t=="object"}function tl(t){return typeof t=="string"||typeof t=="symbol"}const nl=Symbol("");var Fo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fo||(Fo={}));function fn(t,e){return J(new Error,{type:t,[nl]:!0},e)}function Xe(t,e){return t instanceof Error&&nl in t&&(e==null||!!(t.type&e))}const $o="[^/]+?",um={sensitive:!1,strict:!1,start:!0,end:!0},fm=/[.+*?^${}()[\]/\\]/g;function dm(t,e){const n=J({},um,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(fm,"\\$&"),m+=40;else if(p.type===1){const{value:R,repeatable:P,optional:$,regexp:x}=p;i.push({name:R,repeatable:P,optional:$});const k=x||$o;if(k!==$o){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+O.message)}}let M=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(M=$&&u.length<2?`(?:/${M})`:"/"+M),$&&(M+="?"),s+=M,m+=20,$&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const m=f[p]||"",R=i[p-1];h[R.name]=m&&R.repeatable?m.split("/"):m}return h}function a(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of p)if(m.type===0)f+=m.value;else if(m.type===1){const{value:R,repeatable:P,optional:$}=m,x=R in u?u[R]:"";if(Le(x)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=Le(x)?x.join("/"):x;if(!k)if($)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function hm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function rl(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ho(r))return 1;if(Ho(s))return-1}return s.length-r.length}function Ho(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const pm={type:0,value:""},gm=/[a-zA-Z0-9_]/;function mm(t){if(!t)return[[]];if(t==="/")return[[pm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:gm.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function _m(t,e,n){const r=dm(mm(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vm(t,e){const n=[],r=new Map;e=Wo({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const R=!m,P=Vo(h);P.aliasOf=m&&m.record;const $=Wo(e,h),x=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const j of O)x.push(Vo(J({},P,{components:m?m.record.components:P.components,path:j,aliasOf:m?m.record:P})))}let k,M;for(const O of x){const{path:j}=O;if(p&&j[0]!=="/"){const re=p.record.path,Z=re[re.length-1]==="/"?"":"/";O.path=p.record.path+(j&&Z+j)}if(k=_m(O,p,$),m?m.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),R&&h.name&&!jo(k)&&o(h.name)),sl(k)&&a(k),P.children){const re=P.children;for(let Z=0;Z<re.length;Z++)i(re[Z],k,m&&m.children[Z])}m=m||k}return M?()=>{o(M)}:kn}function o(h){if(tl(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const p=wm(h,n);n.splice(p,0,h),h.record.name&&!jo(h)&&r.set(h.record.name,h)}function u(h,p){let m,R={},P,$;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw fn(1,{location:h});$=m.record.name,R=J(Bo(p.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Bo(h.params,m.keys.map(M=>M.name))),P=m.stringify(R)}else if(h.path!=null)P=h.path,m=n.find(M=>M.re.test(P)),m&&(R=m.parse(P),$=m.record.name);else{if(m=p.name?r.get(p.name):n.find(M=>M.re.test(p.path)),!m)throw fn(1,{location:h,currentLocation:p});$=m.record.name,R=J({},p.params,h.params),P=m.stringify(R)}const x=[];let k=m;for(;k;)x.unshift(k.record),k=k.parent;return{name:$,path:P,params:R,matched:x,meta:bm(x)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Bo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Vo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ym(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ym(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function jo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function bm(t){return t.reduce((e,n)=>J(e,n.meta),{})}function Wo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wm(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;rl(t,e[i])<0?r=i:n=i+1}const s=Em(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Em(t){let e=t;for(;e=e.parent;)if(sl(e)&&rl(t,e)===0)return e}function sl({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Im(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jc," "),o=i.indexOf("="),c=Vn(o<0?i:i.slice(0,o)),a=o<0?null:Vn(i.slice(o+1));if(c in e){let u=e[c];Le(u)||(u=e[c]=[u]),u.push(a)}else e[c]=a}return e}function Ko(t){let e="";for(let n in t){const r=t[n];if(n=jg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Le(r)?r.map(i=>i&&$s(i)):[r&&$s(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Le(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Tm=Symbol(""),zo=Symbol(""),Ei=Symbol(""),il=Symbol(""),Bs=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const u=p=>{p===!1?a(fn(4,{from:n,to:e})):p instanceof Error?a(p):lm(p)?a(fn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>a(p))})}function ms(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Gc(a)){const f=(a.__vccOpts||a)[e];f&&i.push(vt(f,n,r,o,c,s))}else{let u=a();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const h=Ng(f)?f.default:f;o.mods[c]=f,o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&vt(m,n,r,o,c,s)()}))}}return i}function Go(t){const e=it(Ei),n=it(il),r=ke(()=>{const a=Zt(t.to);return e.resolve(a)}),s=ke(()=>{const{matched:a}=r.value,{length:u}=a,f=a[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(un.bind(null,f));if(p>-1)return p;const m=qo(a[u-2]);return u>1&&qo(f)===m&&h[h.length-1].path!==m?h.findIndex(un.bind(null,a[u-2])):p}),i=ke(()=>s.value>-1&&Pm(n.params,r.value.params)),o=ke(()=>s.value>-1&&s.value===n.matched.length-1&&Zc(n.params,r.value.params));function c(a={}){return Am(a)?e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(kn):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Cm=Ta({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Go,setup(t,{slots:e}){const n=Fr(Go(t)),{options:r}=it(Ei),s=ke(()=>({[Jo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Xa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Rm=Cm;function Am(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Pm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Le(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jo=(t,e,n)=>t??e??n,Om=Ta({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=it(Bs),s=ke(()=>t.route||r.value),i=it(zo,0),o=ke(()=>{let u=Zt(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),c=ke(()=>s.value.matched[o.value]);lr(zo,ke(()=>o.value+1)),lr(Tm,c),lr(Bs,s);const a=Gl();return ur(()=>[a.value,c.value,t.name],([u,f,h],[p,m,R])=>{f&&(f.instances[h]=u,m&&m!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),u&&f&&(!m||!un(f,m)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return Yo(n.default,{Component:p,route:u});const m=h.props[f],R=m?m===!0?u.params:typeof m=="function"?m(u):m:null,$=Xa(p,J({},R,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return Yo(n.default,{Component:$,route:u})||$}}});function Yo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const km=Om;function Nm(t){const e=vm(t.routes,t),n=t.parseQuery||Im,r=t.stringifyQuery||Ko,s=t.history,i=vn(),o=vn(),c=vn(),a=ql(gt);let u=gt;Jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ps.bind(null,v=>""+v),h=ps.bind(null,Kg),p=ps.bind(null,Vn);function m(v,A){let T,N;return tl(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function $(v){return!!e.getRecordMatcher(v)}function x(v,A){if(A=J({},A||a.value),typeof v=="string"){const d=gs(n,v,A.path),g=e.resolve({path:d.path},A),y=s.createHref(d.fullPath);return J(d,g,{params:p(g.params),hash:Vn(d.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=J({},v,{path:gs(n,v.path,A.path).path});else{const d=J({},v.params);for(const g in d)d[g]==null&&delete d[g];T=J({},v,{params:h(d)}),A.params=h(A.params)}const N=e.resolve(T,A),G=v.hash||"";N.params=f(p(N.params));const ne=qg(r,J({},v,{hash:Vg(G),path:N.path})),l=s.createHref(ne);return J({fullPath:ne,hash:G,query:r===Ko?Sm(v.query):v.query||{}},N,{redirectedFrom:void 0,href:l})}function k(v){return typeof v=="string"?gs(n,v,a.value.path):J({},v)}function M(v,A){if(u!==v)return fn(8,{from:A,to:v})}function O(v){return Z(v)}function j(v){return O(J(k(v),{replace:!0}))}function re(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),J({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function Z(v,A){const T=u=x(v),N=a.value,G=v.state,ne=v.force,l=v.replace===!0,d=re(T);if(d)return Z(J(k(d),{state:typeof d=="object"?J({},G,d.state):G,force:ne,replace:l}),A||T);const g=T;g.redirectedFrom=A;let y;return!ne&&Jg(r,N,T)&&(y=fn(16,{to:g,from:N}),Fe(N,N,!0,!1)),(y?Promise.resolve(y):Re(g,N)).catch(_=>Xe(_)?Xe(_,2)?_:dt(_):W(_,g,N)).then(_=>{if(_){if(Xe(_,2))return Z(J({replace:l},k(_.to),{state:typeof _.to=="object"?J({},G,_.to.state):G,force:ne}),A||g)}else _=kt(g,N,!0,l,G);return ft(g,N,_),_})}function Te(v,A){const T=M(v,A);return T?Promise.reject(T):Promise.resolve()}function Ce(v){const A=Kt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Re(v,A){let T;const[N,G,ne]=Dm(v,A);T=ms(N.reverse(),"beforeRouteLeave",v,A);for(const d of N)d.leaveGuards.forEach(g=>{T.push(vt(g,v,A))});const l=Te.bind(null,v,A);return T.push(l),Ae(T).then(()=>{T=[];for(const d of i.list())T.push(vt(d,v,A));return T.push(l),Ae(T)}).then(()=>{T=ms(G,"beforeRouteUpdate",v,A);for(const d of G)d.updateGuards.forEach(g=>{T.push(vt(g,v,A))});return T.push(l),Ae(T)}).then(()=>{T=[];for(const d of ne)if(d.beforeEnter)if(Le(d.beforeEnter))for(const g of d.beforeEnter)T.push(vt(g,v,A));else T.push(vt(d.beforeEnter,v,A));return T.push(l),Ae(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=ms(ne,"beforeRouteEnter",v,A,Ce),T.push(l),Ae(T))).then(()=>{T=[];for(const d of o.list())T.push(vt(d,v,A));return T.push(l),Ae(T)}).catch(d=>Xe(d,8)?d:Promise.reject(d))}function ft(v,A,T){c.list().forEach(N=>Ce(()=>N(v,A,T)))}function kt(v,A,T,N,G){const ne=M(v,A);if(ne)return ne;const l=A===gt,d=Jt?history.state:{};T&&(N||l?s.replace(v.fullPath,J({scroll:l&&d&&d.scroll},G)):s.push(v.fullPath,G)),a.value=v,Fe(v,A,T,l),dt()}let Ue;function pn(){Ue||(Ue=s.listen((v,A,T)=>{if(!er.listening)return;const N=x(v),G=re(N);if(G){Z(J(G,{replace:!0}),N).catch(kn);return}u=N;const ne=a.value;Jt&&rm(Lo(ne.fullPath,T.delta),qr()),Re(N,ne).catch(l=>Xe(l,12)?l:Xe(l,2)?(Z(l.to,N).then(d=>{Xe(d,20)&&!T.delta&&T.type===jn.pop&&s.go(-1,!1)}).catch(kn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(l,N,ne))).then(l=>{l=l||kt(N,ne,!1),l&&(T.delta&&!Xe(l,8)?s.go(-T.delta,!1):T.type===jn.pop&&Xe(l,20)&&s.go(-1,!1)),ft(N,ne,l)}).catch(kn)}))}let jt=vn(),ie=vn(),Y;function W(v,A,T){dt(v);const N=ie.list();return N.length?N.forEach(G=>G(v,A,T)):console.error(v),Promise.reject(v)}function Je(){return Y&&a.value!==gt?Promise.resolve():new Promise((v,A)=>{jt.add([v,A])})}function dt(v){return Y||(Y=!v,pn(),jt.list().forEach(([A,T])=>v?T(v):A()),jt.reset()),v}function Fe(v,A,T,N){const{scrollBehavior:G}=t;if(!Jt||!G)return Promise.resolve();const ne=!T&&sm(Lo(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return ba().then(()=>G(v,A,ne)).then(l=>l&&nm(l)).catch(l=>W(l,v,A))}const _e=v=>s.go(v);let Wt;const Kt=new Set,er={currentRoute:a,listening:!0,addRoute:m,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:$,getRoutes:P,resolve:x,options:t,push:O,replace:j,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ie.add,isReady:Je,install(v){const A=this;v.component("RouterLink",Rm),v.component("RouterView",km),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(a)}),Jt&&!Wt&&a.value===gt&&(Wt=!0,O(s.location).catch(G=>{}));const T={};for(const G in gt)Object.defineProperty(T,G,{get:()=>a.value[G],enumerable:!0});v.provide(Ei,A),v.provide(il,ga(T)),v.provide(Bs,a);const N=v.unmount;Kt.add(v),v.unmount=function(){Kt.delete(v),Kt.size<1&&(u=gt,Ue&&Ue(),Ue=null,a.value=gt,Wt=!1,Y=!1),N()}}};function Ae(v){return v.reduce((A,T)=>A.then(()=>Ce(T)),Promise.resolve())}return er}function Dm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>un(u,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(u=>un(u,a))||s.push(a))}return[n,r,s]}const Mm={};function xm(t,e){return et(),an("main",null,e[0]||(e[0]=[Pe("h2",null,"Bienvenido App de autenticación",-1)]))}const Lm=Zn(Mm,[["render",xm]]);var Um="firebase",Fm="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(Um,Fm,"app");const $m={apiKey:"AIzaSyC6xNOV77JghBCPQIz9XuPPBJPtCQp02nA",authDomain:"desafio-firebase-ii-1c0d2.firebaseapp.com",projectId:"desafio-firebase-ii-1c0d2",storageBucket:"desafio-firebase-ii-1c0d2.appspot.com",messagingSenderId:"864804813679",appId:"1:864804813679:web:fe586c16e91cf2f0a9069a"},Hm=uc($m),ol=Nr(Hm),Bm={data(){return{email:"",password:""}},methods:{async register(){try{const t=await lp(ol,this.email,this.password);console.log("usuario creado exitosamente",t),this.email="",this.password="",this.$router.push("/")}catch(t){console.log(t.code,t.message)}}}};function Vm(t,e,n,r,s,i){return et(),an("form",{onSubmit:e[2]||(e[2]=Za((...o)=>i.register&&i.register(...o),["prevent"]))},[e[3]||(e[3]=Pe("h1",null,"Registro",-1)),yr(Pe("input",{type:"email",placeholder:"Correo Electronico","onUpdate:modelValue":e[0]||(e[0]=o=>s.email=o)},null,512),[[Sr,s.email]]),yr(Pe("input",{type:"password",placeholder:"Contraseña","onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o)},null,512),[[Sr,s.password]]),e[4]||(e[4]=Pe("button",{class:"btn-register",type:"submit"},"Registrarse",-1))],32)}const jm=Zn(Bm,[["render",Vm]]),Wm={data(){return{email:"",password:""}},methods:{async login(){try{await up(ol,this.email,this.password);const t=this.$route.query.redirect||"/";this.$router.push(t),this.email="",this.password=""}catch(t){console.log("error al iniciar sesion",t.message)}}}};function Km(t,e,n,r,s,i){const o=br("router-link");return et(),an("form",{onSubmit:e[2]||(e[2]=Za((...c)=>i.login&&i.login(...c),["prevent"]))},[e[4]||(e[4]=Pe("h1",null,"Iniciar Sesion",-1)),yr(Pe("input",{type:"email",placeholder:"Correo Electronico","onUpdate:modelValue":e[0]||(e[0]=c=>s.email=c)},null,512),[[Sr,s.email]]),yr(Pe("input",{type:"password",placeholder:"Contraseña","onUpdate:modelValue":e[1]||(e[1]=c=>s.password=c)},null,512),[[Sr,s.password]]),e[5]||(e[5]=Pe("button",{class:"btn-login",type:"submit"},"Iniciar Sesion",-1)),ae(o,{to:"/signup"},{default:Tn(()=>e[3]||(e[3]=[Pn("Registrarse")])),_:1})],32)}const zm=Zn(Wm,[["render",Km]]),al=Nm({history:cm("/"),routes:[{path:"/",name:"home",meta:{requiresAuth:!0},component:Lm},{path:"/signup",name:"signup",component:jm},{path:"/login",name:"login",component:zm}]});al.beforeEach((t,e,n)=>{const s=Nr().currentUser;t.meta.requiresAuth&&!s?n({name:"signup"}):n()});const cl=xf(kg);cl.use(al);cl.mount("#app");
