(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function f6(c,a){const e=Object.create(null),r=c.split(",");for(let i=0;i<r.length;i++)e[r[i]]=!0;return a?i=>!!e[i.toLowerCase()]:i=>!!e[i]}function l6(c){if(R(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],i=r1(r)?df(r):l6(r);if(i)for(const s in i)a[s]=i[s]}return a}else{if(r1(c))return c;if(X(c))return c}}const Mf=/;(?![^(]*\))/g,pf=/:([^]+)/,Cf=/\/\*.*?\*\//gs;function df(c){const a={};return c.replace(Cf,"").split(Mf).forEach(e=>{if(e){const r=e.split(pf);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function n6(c){let a="";if(r1(c))a=c;else if(R(c))for(let e=0;e<c.length;e++){const r=n6(c[e]);r&&(a+=r+" ")}else if(X(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const Lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=f6(Lf);function G0(c){return!!c||c===""}const $={},M2=[],N1=()=>{},xf=()=>!1,bf=/^on[^a-z]/,I3=c=>bf.test(c),o6=c=>c.startsWith("onUpdate:"),o1=Object.assign,t6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Nf=Object.prototype.hasOwnProperty,q=(c,a)=>Nf.call(c,a),R=Array.isArray,B2=c=>W3(c)==="[object Map]",Sf=c=>W3(c)==="[object Set]",B=c=>typeof c=="function",r1=c=>typeof c=="string",m6=c=>typeof c=="symbol",X=c=>c!==null&&typeof c=="object",Z0=c=>X(c)&&B(c.then)&&B(c.catch),wf=Object.prototype.toString,W3=c=>wf.call(c),kf=c=>W3(c).slice(8,-1),yf=c=>W3(c)==="[object Object]",z6=c=>r1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,S3=f6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G3=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},Af=/-(\w)/g,B1=G3(c=>c.replace(Af,(a,e)=>e?e.toUpperCase():"")),Pf=/\B([A-Z])/g,N2=G3(c=>c.replace(Pf,"-$1").toLowerCase()),Z3=G3(c=>c.charAt(0).toUpperCase()+c.slice(1)),g4=G3(c=>c?`on${Z3(c)}`:""),F3=(c,a)=>!Object.is(c,a),x4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},B3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},Tf=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let G8;const Ff=()=>G8||(G8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let C1;class Bf{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=C1,!a&&C1&&(this.index=(C1.scopes||(C1.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=C1;try{return C1=this,a()}finally{C1=e}}}on(){C1=this}off(){C1=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Rf(c,a=C1){a&&a.active&&a.effects.push(c)}function Df(){return C1}const v6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},j0=c=>(c.w&Y1)>0,$0=c=>(c.n&Y1)>0,_f=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=Y1},qf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const i=a[r];j0(i)&&!$0(i)?i.delete(c):a[e++]=i,i.w&=~Y1,i.n&=~Y1}a.length=e}},F4=new WeakMap;let T2=0,Y1=1;const B4=30;let d1;const o2=Symbol(""),R4=Symbol("");class h6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Rf(this,r)}run(){if(!this.active)return this.fn();let a=d1,e=$1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=d1,d1=this,$1=!0,Y1=1<<++T2,T2<=B4?_f(this):Z8(this),this.fn()}finally{T2<=B4&&qf(this),Y1=1<<--T2,d1=this.parent,$1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){d1===this?this.deferStop=!0:this.active&&(Z8(this),this.onStop&&this.onStop(),this.active=!1)}}function Z8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let $1=!0;const K0=[];function S2(){K0.push($1),$1=!1}function w2(){const c=K0.pop();$1=c===void 0?!0:c}function v1(c,a,e){if($1&&d1){let r=F4.get(c);r||F4.set(c,r=new Map);let i=r.get(e);i||r.set(e,i=v6()),Y0(i)}}function Y0(c,a){let e=!1;T2<=B4?$0(c)||(c.n|=Y1,e=!j0(c)):e=!c.has(d1),e&&(c.add(d1),d1.deps.push(c))}function q1(c,a,e,r,i,s){const f=F4.get(c);if(!f)return;let l=[];if(a==="clear")l=[...f.values()];else if(e==="length"&&R(c)){const n=Number(r);f.forEach((m,z)=>{(z==="length"||z>=n)&&l.push(m)})}else switch(e!==void 0&&l.push(f.get(e)),a){case"add":R(c)?z6(e)&&l.push(f.get("length")):(l.push(f.get(o2)),B2(c)&&l.push(f.get(R4)));break;case"delete":R(c)||(l.push(f.get(o2)),B2(c)&&l.push(f.get(R4)));break;case"set":B2(c)&&l.push(f.get(o2));break}if(l.length===1)l[0]&&D4(l[0]);else{const n=[];for(const m of l)m&&n.push(...m);D4(v6(n))}}function D4(c,a){const e=R(c)?c:[...c];for(const r of e)r.computed&&j8(r);for(const r of e)r.computed||j8(r)}function j8(c,a){(c!==d1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Ef=f6("__proto__,__v_isRef,__isVue"),X0=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(m6)),Of=H6(),Uf=H6(!1,!0),If=H6(!0),$8=Wf();function Wf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=O(this);for(let s=0,f=this.length;s<f;s++)v1(r,"get",s+"");const i=r[a](...e);return i===-1||i===!1?r[a](...e.map(O)):i}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){S2();const r=O(this)[a].apply(this,e);return w2(),r}}),c}function Gf(c){const a=O(this);return v1(a,"has",c),a.hasOwnProperty(c)}function H6(c=!1,a=!1){return function(r,i,s){if(i==="__v_isReactive")return!c;if(i==="__v_isReadonly")return c;if(i==="__v_isShallow")return a;if(i==="__v_raw"&&s===(c?a?ll:e5:a?a5:c5).get(r))return r;const f=R(r);if(!c){if(f&&q($8,i))return Reflect.get($8,i,s);if(i==="hasOwnProperty")return Gf}const l=Reflect.get(r,i,s);return(m6(i)?X0.has(i):Ef(i))||(c||v1(r,"get",i),a)?l:n1(l)?f&&z6(i)?l:l.value:X(l)?c?r5(l):M6(l):l}}const Zf=Q0(),jf=Q0(!0);function Q0(c=!1){return function(e,r,i,s){let f=e[r];if(U2(f)&&n1(f)&&!n1(i))return!1;if(!c&&(!_4(i)&&!U2(i)&&(f=O(f),i=O(i)),!R(e)&&n1(f)&&!n1(i)))return f.value=i,!0;const l=R(e)&&z6(r)?Number(r)<e.length:q(e,r),n=Reflect.set(e,r,i,s);return e===O(s)&&(l?F3(i,f)&&q1(e,"set",r,i):q1(e,"add",r,i)),n}}function $f(c,a){const e=q(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&q1(c,"delete",a,void 0),r}function Kf(c,a){const e=Reflect.has(c,a);return(!m6(a)||!X0.has(a))&&v1(c,"has",a),e}function Yf(c){return v1(c,"iterate",R(c)?"length":o2),Reflect.ownKeys(c)}const J0={get:Of,set:Zf,deleteProperty:$f,has:Kf,ownKeys:Yf},Xf={get:If,set(c,a){return!0},deleteProperty(c,a){return!0}},Qf=o1({},J0,{get:Uf,set:jf}),V6=c=>c,j3=c=>Reflect.getPrototypeOf(c);function z3(c,a,e=!1,r=!1){c=c.__v_raw;const i=O(c),s=O(a);e||(a!==s&&v1(i,"get",a),v1(i,"get",s));const{has:f}=j3(i),l=r?V6:e?d6:C6;if(f.call(i,a))return l(c.get(a));if(f.call(i,s))return l(c.get(s));c!==i&&c.get(a)}function v3(c,a=!1){const e=this.__v_raw,r=O(e),i=O(c);return a||(c!==i&&v1(r,"has",c),v1(r,"has",i)),c===i?e.has(c):e.has(c)||e.has(i)}function h3(c,a=!1){return c=c.__v_raw,!a&&v1(O(c),"iterate",o2),Reflect.get(c,"size",c)}function K8(c){c=O(c);const a=O(this);return j3(a).has.call(a,c)||(a.add(c),q1(a,"add",c,c)),this}function Y8(c,a){a=O(a);const e=O(this),{has:r,get:i}=j3(e);let s=r.call(e,c);s||(c=O(c),s=r.call(e,c));const f=i.call(e,c);return e.set(c,a),s?F3(a,f)&&q1(e,"set",c,a):q1(e,"add",c,a),this}function X8(c){const a=O(this),{has:e,get:r}=j3(a);let i=e.call(a,c);i||(c=O(c),i=e.call(a,c)),r&&r.call(a,c);const s=a.delete(c);return i&&q1(a,"delete",c,void 0),s}function Q8(){const c=O(this),a=c.size!==0,e=c.clear();return a&&q1(c,"clear",void 0,void 0),e}function H3(c,a){return function(r,i){const s=this,f=s.__v_raw,l=O(f),n=a?V6:c?d6:C6;return!c&&v1(l,"iterate",o2),f.forEach((m,z)=>r.call(i,n(m),n(z),s))}}function V3(c,a,e){return function(...r){const i=this.__v_raw,s=O(i),f=B2(s),l=c==="entries"||c===Symbol.iterator&&f,n=c==="keys"&&f,m=i[c](...r),z=e?V6:a?d6:C6;return!a&&v1(s,"iterate",n?R4:o2),{next(){const{value:v,done:u}=m.next();return u?{value:v,done:u}:{value:l?[z(v[0]),z(v[1])]:z(v),done:u}},[Symbol.iterator](){return this}}}}function G1(c){return function(...a){return c==="delete"?!1:this}}function Jf(){const c={get(s){return z3(this,s)},get size(){return h3(this)},has:v3,add:K8,set:Y8,delete:X8,clear:Q8,forEach:H3(!1,!1)},a={get(s){return z3(this,s,!1,!0)},get size(){return h3(this)},has:v3,add:K8,set:Y8,delete:X8,clear:Q8,forEach:H3(!1,!0)},e={get(s){return z3(this,s,!0)},get size(){return h3(this,!0)},has(s){return v3.call(this,s,!0)},add:G1("add"),set:G1("set"),delete:G1("delete"),clear:G1("clear"),forEach:H3(!0,!1)},r={get(s){return z3(this,s,!0,!0)},get size(){return h3(this,!0)},has(s){return v3.call(this,s,!0)},add:G1("add"),set:G1("set"),delete:G1("delete"),clear:G1("clear"),forEach:H3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{c[s]=V3(s,!1,!1),e[s]=V3(s,!0,!1),a[s]=V3(s,!1,!0),r[s]=V3(s,!0,!0)}),[c,e,a,r]}const[cl,al,el,rl]=Jf();function u6(c,a){const e=a?c?rl:el:c?al:cl;return(r,i,s)=>i==="__v_isReactive"?!c:i==="__v_isReadonly"?c:i==="__v_raw"?r:Reflect.get(q(e,i)&&i in r?e:r,i,s)}const il={get:u6(!1,!1)},sl={get:u6(!1,!0)},fl={get:u6(!0,!1)},c5=new WeakMap,a5=new WeakMap,e5=new WeakMap,ll=new WeakMap;function nl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ol(c){return c.__v_skip||!Object.isExtensible(c)?0:nl(kf(c))}function M6(c){return U2(c)?c:p6(c,!1,J0,il,c5)}function tl(c){return p6(c,!1,Qf,sl,a5)}function r5(c){return p6(c,!0,Xf,fl,e5)}function p6(c,a,e,r,i){if(!X(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const s=i.get(c);if(s)return s;const f=ol(c);if(f===0)return c;const l=new Proxy(c,f===2?r:e);return i.set(c,l),l}function p2(c){return U2(c)?p2(c.__v_raw):!!(c&&c.__v_isReactive)}function U2(c){return!!(c&&c.__v_isReadonly)}function _4(c){return!!(c&&c.__v_isShallow)}function i5(c){return p2(c)||U2(c)}function O(c){const a=c&&c.__v_raw;return a?O(a):c}function s5(c){return B3(c,"__v_skip",!0),c}const C6=c=>X(c)?M6(c):c,d6=c=>X(c)?r5(c):c;function ml(c){$1&&d1&&(c=O(c),Y0(c.dep||(c.dep=v6())))}function zl(c,a){c=O(c);const e=c.dep;e&&D4(e)}function n1(c){return!!(c&&c.__v_isRef===!0)}function vl(c){return n1(c)?c.value:c}const hl={get:(c,a,e)=>vl(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const i=c[a];return n1(i)&&!n1(e)?(i.value=e,!0):Reflect.set(c,a,e,r)}};function f5(c){return p2(c)?c:new Proxy(c,hl)}var l5;class Hl{constructor(a,e,r,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[l5]=!1,this._dirty=!0,this.effect=new h6(a,()=>{this._dirty||(this._dirty=!0,zl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const a=O(this);return ml(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}l5="__v_isReadonly";function Vl(c,a,e=!1){let r,i;const s=B(c);return s?(r=c,i=N1):(r=c.get,i=c.set),new Hl(r,i,s||!i,e)}function K1(c,a,e,r){let i;try{i=r?c(...r):c()}catch(s){$3(s,a,e)}return i}function S1(c,a,e,r){if(B(c)){const s=K1(c,a,e,r);return s&&Z0(s)&&s.catch(f=>{$3(f,a,e)}),s}const i=[];for(let s=0;s<c.length;s++)i.push(S1(c[s],a,e,r));return i}function $3(c,a,e,r=!0){const i=a?a.vnode:null;if(a){let s=a.parent;const f=a.proxy,l=e;for(;s;){const m=s.ec;if(m){for(let z=0;z<m.length;z++)if(m[z](c,f,l)===!1)return}s=s.parent}const n=a.appContext.config.errorHandler;if(n){K1(n,null,10,[c,f,l]);return}}ul(c,e,i,r)}function ul(c,a,e,r=!0){console.error(c)}let I2=!1,q4=!1;const s1=[];let T1=0;const C2=[];let _1=null,s2=0;const n5=Promise.resolve();let L6=null;function Ml(c){const a=L6||n5;return c?a.then(this?c.bind(this):c):a}function pl(c){let a=T1+1,e=s1.length;for(;a<e;){const r=a+e>>>1;W2(s1[r])<c?a=r+1:e=r}return a}function g6(c){(!s1.length||!s1.includes(c,I2&&c.allowRecurse?T1+1:T1))&&(c.id==null?s1.push(c):s1.splice(pl(c.id),0,c),o5())}function o5(){!I2&&!q4&&(q4=!0,L6=n5.then(m5))}function Cl(c){const a=s1.indexOf(c);a>T1&&s1.splice(a,1)}function dl(c){R(c)?C2.push(...c):(!_1||!_1.includes(c,c.allowRecurse?s2+1:s2))&&C2.push(c),o5()}function J8(c,a=I2?T1+1:0){for(;a<s1.length;a++){const e=s1[a];e&&e.pre&&(s1.splice(a,1),a--,e())}}function t5(c){if(C2.length){const a=[...new Set(C2)];if(C2.length=0,_1){_1.push(...a);return}for(_1=a,_1.sort((e,r)=>W2(e)-W2(r)),s2=0;s2<_1.length;s2++)_1[s2]();_1=null,s2=0}}const W2=c=>c.id==null?1/0:c.id,Ll=(c,a)=>{const e=W2(c)-W2(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function m5(c){q4=!1,I2=!0,s1.sort(Ll);const a=N1;try{for(T1=0;T1<s1.length;T1++){const e=s1[T1];e&&e.active!==!1&&K1(e,null,14)}}finally{T1=0,s1.length=0,t5(),I2=!1,L6=null,(s1.length||C2.length)&&m5()}}function gl(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||$;let i=e;const s=a.startsWith("update:"),f=s&&a.slice(7);if(f&&f in r){const z=`${f==="modelValue"?"model":f}Modifiers`,{number:v,trim:u}=r[z]||$;u&&(i=e.map(g=>r1(g)?g.trim():g)),v&&(i=e.map(Tf))}let l,n=r[l=g4(a)]||r[l=g4(B1(a))];!n&&s&&(n=r[l=g4(N2(a))]),n&&S1(n,c,6,i);const m=r[l+"Once"];if(m){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,S1(m,c,6,i)}}function z5(c,a,e=!1){const r=a.emitsCache,i=r.get(c);if(i!==void 0)return i;const s=c.emits;let f={},l=!1;if(!B(c)){const n=m=>{const z=z5(m,a,!0);z&&(l=!0,o1(f,z))};!e&&a.mixins.length&&a.mixins.forEach(n),c.extends&&n(c.extends),c.mixins&&c.mixins.forEach(n)}return!s&&!l?(X(c)&&r.set(c,null),null):(R(s)?s.forEach(n=>f[n]=null):o1(f,s),X(c)&&r.set(c,f),f)}function K3(c,a){return!c||!I3(a)?!1:(a=a.slice(2).replace(/Once$/,""),q(c,a[0].toLowerCase()+a.slice(1))||q(c,N2(a))||q(c,a))}let g1=null,Y3=null;function R3(c){const a=g1;return g1=c,Y3=c&&c.type.__scopeId||null,a}function x6(c){Y3=c}function b6(){Y3=null}function xl(c,a=g1,e){if(!a||c._n)return c;const r=(...i)=>{r._d&&n0(-1);const s=R3(a);let f;try{f=c(...i)}finally{R3(s),r._d&&n0(1)}return f};return r._n=!0,r._c=!0,r._d=!0,r}function b4(c){const{type:a,vnode:e,proxy:r,withProxy:i,props:s,propsOptions:[f],slots:l,attrs:n,emit:m,render:z,renderCache:v,data:u,setupState:g,ctx:F,inheritAttrs:P}=c;let E,d;const S=R3(c);try{if(e.shapeFlag&4){const D=i||r;E=P1(z.call(D,D,v,s,g,u,F)),d=n}else{const D=a;E=P1(D.length>1?D(s,{attrs:n,slots:l,emit:m}):D(s,null)),d=a.props?n:bl(n)}}catch(D){D2.length=0,$3(D,c,1),E=e1(G2)}let N=E;if(d&&P!==!1){const D=Object.keys(d),{shapeFlag:U}=N;D.length&&U&7&&(f&&D.some(o6)&&(d=Nl(d,f)),N=g2(N,d))}return e.dirs&&(N=g2(N),N.dirs=N.dirs?N.dirs.concat(e.dirs):e.dirs),e.transition&&(N.transition=e.transition),E=N,R3(S),E}const bl=c=>{let a;for(const e in c)(e==="class"||e==="style"||I3(e))&&((a||(a={}))[e]=c[e]);return a},Nl=(c,a)=>{const e={};for(const r in c)(!o6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Sl(c,a,e){const{props:r,children:i,component:s}=c,{props:f,children:l,patchFlag:n}=a,m=s.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&n>=0){if(n&1024)return!0;if(n&16)return r?c0(r,f,m):!!f;if(n&8){const z=a.dynamicProps;for(let v=0;v<z.length;v++){const u=z[v];if(f[u]!==r[u]&&!K3(m,u))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===f?!1:r?f?c0(r,f,m):!0:!!f;return!1}function c0(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(a[s]!==c[s]&&!K3(e,s))return!0}return!1}function wl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const kl=c=>c.__isSuspense;function yl(c,a){a&&a.pendingBranch?R(c)?a.effects.push(...c):a.effects.push(c):dl(c)}function Al(c,a){if(J){let e=J.provides;const r=J.parent&&J.parent.provides;r===e&&(e=J.provides=Object.create(r)),e[c]=a}}function w3(c,a,e=!1){const r=J||g1;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&c in i)return i[c];if(arguments.length>1)return e&&B(a)?a.call(r.proxy):a}}const u3={};function k3(c,a,e){return v5(c,a,e)}function v5(c,a,{immediate:e,deep:r,flush:i,onTrack:s,onTrigger:f}=$){const l=Df()===(J==null?void 0:J.scope)?J:null;let n,m=!1,z=!1;if(n1(c)?(n=()=>c.value,m=_4(c)):p2(c)?(n=()=>c,r=!0):R(c)?(z=!0,m=c.some(N=>p2(N)||_4(N)),n=()=>c.map(N=>{if(n1(N))return N.value;if(p2(N))return H2(N);if(B(N))return K1(N,l,2)})):B(c)?a?n=()=>K1(c,l,2):n=()=>{if(!(l&&l.isUnmounted))return v&&v(),S1(c,l,3,[u])}:n=N1,a&&r){const N=n;n=()=>H2(N())}let v,u=N=>{v=d.onStop=()=>{K1(N,l,4)}},g;if(j2)if(u=N1,a?e&&S1(a,l,3,[n(),z?[]:void 0,u]):n(),i==="sync"){const N=Sn();g=N.__watcherHandles||(N.__watcherHandles=[])}else return N1;let F=z?new Array(c.length).fill(u3):u3;const P=()=>{if(d.active)if(a){const N=d.run();(r||m||(z?N.some((D,U)=>F3(D,F[U])):F3(N,F)))&&(v&&v(),S1(a,l,3,[N,F===u3?void 0:z&&F[0]===u3?[]:F,u]),F=N)}else d.run()};P.allowRecurse=!!a;let E;i==="sync"?E=P:i==="post"?E=()=>z1(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),E=()=>g6(P));const d=new h6(n,E);a?e?P():F=d.run():i==="post"?z1(d.run.bind(d),l&&l.suspense):d.run();const S=()=>{d.stop(),l&&l.scope&&t6(l.scope.effects,d)};return g&&g.push(S),S}function Pl(c,a,e){const r=this.proxy,i=r1(c)?c.includes(".")?h5(r,c):()=>r[c]:c.bind(r,r);let s;B(a)?s=a:(s=a.handler,e=a);const f=J;x2(this);const l=v5(i,s.bind(r),e);return f?x2(f):t2(),l}function h5(c,a){const e=a.split(".");return()=>{let r=c;for(let i=0;i<e.length&&r;i++)r=r[e[i]];return r}}function H2(c,a){if(!X(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),n1(c))H2(c.value,a);else if(R(c))for(let e=0;e<c.length;e++)H2(c[e],a);else if(Sf(c)||B2(c))c.forEach(e=>{H2(e,a)});else if(yf(c))for(const e in c)H2(c[e],a);return c}function N6(c){return B(c)?{setup:c,name:c.name}:c}const y3=c=>!!c.type.__asyncLoader,H5=c=>c.type.__isKeepAlive;function Tl(c,a){V5(c,"a",a)}function Fl(c,a){V5(c,"da",a)}function V5(c,a,e=J){const r=c.__wdc||(c.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return c()});if(X3(a,r,e),e){let i=e.parent;for(;i&&i.parent;)H5(i.parent.vnode)&&Bl(r,a,e,i),i=i.parent}}function Bl(c,a,e,r){const i=X3(a,c,r,!0);u5(()=>{t6(r[a],i)},e)}function X3(c,a,e=J,r=!1){if(e){const i=e[c]||(e[c]=[]),s=a.__weh||(a.__weh=(...f)=>{if(e.isUnmounted)return;S2(),x2(e);const l=S1(a,e,c,f);return t2(),w2(),l});return r?i.unshift(s):i.push(s),s}}const I1=c=>(a,e=J)=>(!j2||c==="sp")&&X3(c,(...r)=>a(...r),e),Rl=I1("bm"),Dl=I1("m"),_l=I1("bu"),ql=I1("u"),El=I1("bum"),u5=I1("um"),Ol=I1("sp"),Ul=I1("rtg"),Il=I1("rtc");function Wl(c,a=J){X3("ec",c,a)}function e2(c,a,e,r){const i=c.dirs,s=a&&a.dirs;for(let f=0;f<i.length;f++){const l=i[f];s&&(l.oldValue=s[f].value);let n=l.dir[r];n&&(S2(),S1(n,e,8,[c.el,l,c,a]),w2())}}const M5="components";function S6(c,a){return Zl(M5,c,!0,a)||c}const Gl=Symbol();function Zl(c,a,e=!0,r=!1){const i=g1||J;if(i){const s=i.type;if(c===M5){const l=xn(s,!1);if(l&&(l===a||l===B1(a)||l===Z3(B1(a))))return s}const f=a0(i[c]||s[c],a)||a0(i.appContext[c],a);return!f&&r?s:f}}function a0(c,a){return c&&(c[a]||c[B1(a)]||c[Z3(B1(a))])}const E4=c=>c?k5(c)?A6(c)||c.proxy:E4(c.parent):null,R2=o1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>E4(c.parent),$root:c=>E4(c.root),$emit:c=>c.emit,$options:c=>w6(c),$forceUpdate:c=>c.f||(c.f=()=>g6(c.update)),$nextTick:c=>c.n||(c.n=Ml.bind(c.proxy)),$watch:c=>Pl.bind(c)}),N4=(c,a)=>c!==$&&!c.__isScriptSetup&&q(c,a),jl={get({_:c},a){const{ctx:e,setupState:r,data:i,props:s,accessCache:f,type:l,appContext:n}=c;let m;if(a[0]!=="$"){const g=f[a];if(g!==void 0)switch(g){case 1:return r[a];case 2:return i[a];case 4:return e[a];case 3:return s[a]}else{if(N4(r,a))return f[a]=1,r[a];if(i!==$&&q(i,a))return f[a]=2,i[a];if((m=c.propsOptions[0])&&q(m,a))return f[a]=3,s[a];if(e!==$&&q(e,a))return f[a]=4,e[a];O4&&(f[a]=0)}}const z=R2[a];let v,u;if(z)return a==="$attrs"&&v1(c,"get",a),z(c);if((v=l.__cssModules)&&(v=v[a]))return v;if(e!==$&&q(e,a))return f[a]=4,e[a];if(u=n.config.globalProperties,q(u,a))return u[a]},set({_:c},a,e){const{data:r,setupState:i,ctx:s}=c;return N4(i,a)?(i[a]=e,!0):r!==$&&q(r,a)?(r[a]=e,!0):q(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(s[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:i,propsOptions:s}},f){let l;return!!e[f]||c!==$&&q(c,f)||N4(a,f)||(l=s[0])&&q(l,f)||q(r,f)||q(R2,f)||q(i.config.globalProperties,f)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:q(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let O4=!0;function $l(c){const a=w6(c),e=c.proxy,r=c.ctx;O4=!1,a.beforeCreate&&e0(a.beforeCreate,c,"bc");const{data:i,computed:s,methods:f,watch:l,provide:n,inject:m,created:z,beforeMount:v,mounted:u,beforeUpdate:g,updated:F,activated:P,deactivated:E,beforeDestroy:d,beforeUnmount:S,destroyed:N,unmounted:D,render:U,renderTracked:t1,renderTriggered:i1,errorCaptured:M1,serverPrefetch:V1,expose:R1,inheritAttrs:y2,components:n3,directives:o3,filters:C4}=a;if(m&&Kl(m,r,null,c.appContext.config.unwrapInjectedRef),f)for(const K in f){const W=f[K];B(W)&&(r[K]=W.bind(e))}if(i){const K=i.call(e,e);X(K)&&(c.data=M6(K))}if(O4=!0,s)for(const K in s){const W=s[K],c2=B(W)?W.bind(e,e):B(W.get)?W.get.bind(e,e):N1,t3=!B(W)&&B(W.set)?W.set.bind(e):N1,a2=u1({get:c2,set:t3});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>a2.value,set:w1=>a2.value=w1})}if(l)for(const K in l)p5(l[K],r,e,K);if(n){const K=B(n)?n.call(e):n;Reflect.ownKeys(K).forEach(W=>{Al(W,K[W])})}z&&e0(z,c,"c");function f1(K,W){R(W)?W.forEach(c2=>K(c2.bind(e))):W&&K(W.bind(e))}if(f1(Rl,v),f1(Dl,u),f1(_l,g),f1(ql,F),f1(Tl,P),f1(Fl,E),f1(Wl,M1),f1(Il,t1),f1(Ul,i1),f1(El,S),f1(u5,D),f1(Ol,V1),R(R1))if(R1.length){const K=c.exposed||(c.exposed={});R1.forEach(W=>{Object.defineProperty(K,W,{get:()=>e[W],set:c2=>e[W]=c2})})}else c.exposed||(c.exposed={});U&&c.render===N1&&(c.render=U),y2!=null&&(c.inheritAttrs=y2),n3&&(c.components=n3),o3&&(c.directives=o3)}function Kl(c,a,e=N1,r=!1){R(c)&&(c=U4(c));for(const i in c){const s=c[i];let f;X(s)?"default"in s?f=w3(s.from||i,s.default,!0):f=w3(s.from||i):f=w3(s),n1(f)&&r?Object.defineProperty(a,i,{enumerable:!0,configurable:!0,get:()=>f.value,set:l=>f.value=l}):a[i]=f}}function e0(c,a,e){S1(R(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function p5(c,a,e,r){const i=r.includes(".")?h5(e,r):()=>e[r];if(r1(c)){const s=a[c];B(s)&&k3(i,s)}else if(B(c))k3(i,c.bind(e));else if(X(c))if(R(c))c.forEach(s=>p5(s,a,e,r));else{const s=B(c.handler)?c.handler.bind(e):a[c.handler];B(s)&&k3(i,s,c)}}function w6(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:i,optionsCache:s,config:{optionMergeStrategies:f}}=c.appContext,l=s.get(a);let n;return l?n=l:!i.length&&!e&&!r?n=a:(n={},i.length&&i.forEach(m=>D3(n,m,f,!0)),D3(n,a,f)),X(a)&&s.set(a,n),n}function D3(c,a,e,r=!1){const{mixins:i,extends:s}=a;s&&D3(c,s,e,!0),i&&i.forEach(f=>D3(c,f,e,!0));for(const f in a)if(!(r&&f==="expose")){const l=Yl[f]||e&&e[f];c[f]=l?l(c[f],a[f]):a[f]}return c}const Yl={data:r0,props:i2,emits:i2,methods:i2,computed:i2,beforeCreate:l1,created:l1,beforeMount:l1,mounted:l1,beforeUpdate:l1,updated:l1,beforeDestroy:l1,beforeUnmount:l1,destroyed:l1,unmounted:l1,activated:l1,deactivated:l1,errorCaptured:l1,serverPrefetch:l1,components:i2,directives:i2,watch:Ql,provide:r0,inject:Xl};function r0(c,a){return a?c?function(){return o1(B(c)?c.call(this,this):c,B(a)?a.call(this,this):a)}:a:c}function Xl(c,a){return i2(U4(c),U4(a))}function U4(c){if(R(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function l1(c,a){return c?[...new Set([].concat(c,a))]:a}function i2(c,a){return c?o1(o1(Object.create(null),c),a):a}function Ql(c,a){if(!c)return a;if(!a)return c;const e=o1(Object.create(null),c);for(const r in a)e[r]=l1(c[r],a[r]);return e}function Jl(c,a,e,r=!1){const i={},s={};B3(s,J3,1),c.propsDefaults=Object.create(null),C5(c,a,i,s);for(const f in c.propsOptions[0])f in i||(i[f]=void 0);e?c.props=r?i:tl(i):c.type.props?c.props=i:c.props=s,c.attrs=s}function cn(c,a,e,r){const{props:i,attrs:s,vnode:{patchFlag:f}}=c,l=O(i),[n]=c.propsOptions;let m=!1;if((r||f>0)&&!(f&16)){if(f&8){const z=c.vnode.dynamicProps;for(let v=0;v<z.length;v++){let u=z[v];if(K3(c.emitsOptions,u))continue;const g=a[u];if(n)if(q(s,u))g!==s[u]&&(s[u]=g,m=!0);else{const F=B1(u);i[F]=I4(n,l,F,g,c,!1)}else g!==s[u]&&(s[u]=g,m=!0)}}}else{C5(c,a,i,s)&&(m=!0);let z;for(const v in l)(!a||!q(a,v)&&((z=N2(v))===v||!q(a,z)))&&(n?e&&(e[v]!==void 0||e[z]!==void 0)&&(i[v]=I4(n,l,v,void 0,c,!0)):delete i[v]);if(s!==l)for(const v in s)(!a||!q(a,v))&&(delete s[v],m=!0)}m&&q1(c,"set","$attrs")}function C5(c,a,e,r){const[i,s]=c.propsOptions;let f=!1,l;if(a)for(let n in a){if(S3(n))continue;const m=a[n];let z;i&&q(i,z=B1(n))?!s||!s.includes(z)?e[z]=m:(l||(l={}))[z]=m:K3(c.emitsOptions,n)||(!(n in r)||m!==r[n])&&(r[n]=m,f=!0)}if(s){const n=O(e),m=l||$;for(let z=0;z<s.length;z++){const v=s[z];e[v]=I4(i,n,v,m[v],c,!q(m,v))}}return f}function I4(c,a,e,r,i,s){const f=c[e];if(f!=null){const l=q(f,"default");if(l&&r===void 0){const n=f.default;if(f.type!==Function&&B(n)){const{propsDefaults:m}=i;e in m?r=m[e]:(x2(i),r=m[e]=n.call(null,a),t2())}else r=n}f[0]&&(s&&!l?r=!1:f[1]&&(r===""||r===N2(e))&&(r=!0))}return r}function d5(c,a,e=!1){const r=a.propsCache,i=r.get(c);if(i)return i;const s=c.props,f={},l=[];let n=!1;if(!B(c)){const z=v=>{n=!0;const[u,g]=d5(v,a,!0);o1(f,u),g&&l.push(...g)};!e&&a.mixins.length&&a.mixins.forEach(z),c.extends&&z(c.extends),c.mixins&&c.mixins.forEach(z)}if(!s&&!n)return X(c)&&r.set(c,M2),M2;if(R(s))for(let z=0;z<s.length;z++){const v=B1(s[z]);i0(v)&&(f[v]=$)}else if(s)for(const z in s){const v=B1(z);if(i0(v)){const u=s[z],g=f[v]=R(u)||B(u)?{type:u}:Object.assign({},u);if(g){const F=l0(Boolean,g.type),P=l0(String,g.type);g[0]=F>-1,g[1]=P<0||F<P,(F>-1||q(g,"default"))&&l.push(v)}}}const m=[f,l];return X(c)&&r.set(c,m),m}function i0(c){return c[0]!=="$"}function s0(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function f0(c,a){return s0(c)===s0(a)}function l0(c,a){return R(a)?a.findIndex(e=>f0(e,c)):B(a)&&f0(a,c)?0:-1}const L5=c=>c[0]==="_"||c==="$stable",k6=c=>R(c)?c.map(P1):[P1(c)],an=(c,a,e)=>{if(a._n)return a;const r=xl((...i)=>k6(a(...i)),e);return r._c=!1,r},g5=(c,a,e)=>{const r=c._ctx;for(const i in c){if(L5(i))continue;const s=c[i];if(B(s))a[i]=an(i,s,r);else if(s!=null){const f=k6(s);a[i]=()=>f}}},x5=(c,a)=>{const e=k6(a);c.slots.default=()=>e},en=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=O(a),B3(a,"_",e)):g5(a,c.slots={})}else c.slots={},a&&x5(c,a);B3(c.slots,J3,1)},rn=(c,a,e)=>{const{vnode:r,slots:i}=c;let s=!0,f=$;if(r.shapeFlag&32){const l=a._;l?e&&l===1?s=!1:(o1(i,a),!e&&l===1&&delete i._):(s=!a.$stable,g5(a,i)),f=a}else a&&(x5(c,a),f={default:1});if(s)for(const l in i)!L5(l)&&!(l in f)&&delete i[l]};function b5(){return{app:null,config:{isNativeTag:xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sn=0;function fn(c,a){return function(r,i=null){B(r)||(r=Object.assign({},r)),i!=null&&!X(i)&&(i=null);const s=b5(),f=new Set;let l=!1;const n=s.app={_uid:sn++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:wn,get config(){return s.config},set config(m){},use(m,...z){return f.has(m)||(m&&B(m.install)?(f.add(m),m.install(n,...z)):B(m)&&(f.add(m),m(n,...z))),n},mixin(m){return s.mixins.includes(m)||s.mixins.push(m),n},component(m,z){return z?(s.components[m]=z,n):s.components[m]},directive(m,z){return z?(s.directives[m]=z,n):s.directives[m]},mount(m,z,v){if(!l){const u=e1(r,i);return u.appContext=s,z&&a?a(u,m):c(u,m,v),l=!0,n._container=m,m.__vue_app__=n,A6(u.component)||u.component.proxy}},unmount(){l&&(c(null,n._container),delete n._container.__vue_app__)},provide(m,z){return s.provides[m]=z,n}};return n}}function W4(c,a,e,r,i=!1){if(R(c)){c.forEach((u,g)=>W4(u,a&&(R(a)?a[g]:a),e,r,i));return}if(y3(r)&&!i)return;const s=r.shapeFlag&4?A6(r.component)||r.component.proxy:r.el,f=i?null:s,{i:l,r:n}=c,m=a&&a.r,z=l.refs===$?l.refs={}:l.refs,v=l.setupState;if(m!=null&&m!==n&&(r1(m)?(z[m]=null,q(v,m)&&(v[m]=null)):n1(m)&&(m.value=null)),B(n))K1(n,l,12,[f,z]);else{const u=r1(n),g=n1(n);if(u||g){const F=()=>{if(c.f){const P=u?q(v,n)?v[n]:z[n]:n.value;i?R(P)&&t6(P,s):R(P)?P.includes(s)||P.push(s):u?(z[n]=[s],q(v,n)&&(v[n]=z[n])):(n.value=[s],c.k&&(z[c.k]=n.value))}else u?(z[n]=f,q(v,n)&&(v[n]=f)):g&&(n.value=f,c.k&&(z[c.k]=f))};f?(F.id=-1,z1(F,e)):F()}}}const z1=yl;function ln(c){return nn(c)}function nn(c,a){const e=Ff();e.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:f,createText:l,createComment:n,setText:m,setElementText:z,parentNode:v,nextSibling:u,setScopeId:g=N1,insertStaticContent:F}=c,P=(o,t,h,V=null,H=null,C=null,x=!1,p=null,L=!!t.dynamicChildren)=>{if(o===t)return;o&&!P2(o,t)&&(V=m3(o),w1(o,H,C,!0),o=null),t.patchFlag===-2&&(L=!1,t.dynamicChildren=null);const{type:M,ref:y,shapeFlag:w}=t;switch(M){case Q3:E(o,t,h,V);break;case G2:d(o,t,h,V);break;case S4:o==null&&S(t,h,V,x);break;case A1:n3(o,t,h,V,H,C,x,p,L);break;default:w&1?U(o,t,h,V,H,C,x,p,L):w&6?o3(o,t,h,V,H,C,x,p,L):(w&64||w&128)&&M.process(o,t,h,V,H,C,x,p,L,v2)}y!=null&&H&&W4(y,o&&o.ref,C,t||o,!t)},E=(o,t,h,V)=>{if(o==null)r(t.el=l(t.children),h,V);else{const H=t.el=o.el;t.children!==o.children&&m(H,t.children)}},d=(o,t,h,V)=>{o==null?r(t.el=n(t.children||""),h,V):t.el=o.el},S=(o,t,h,V)=>{[o.el,o.anchor]=F(o.children,t,h,V,o.el,o.anchor)},N=({el:o,anchor:t},h,V)=>{let H;for(;o&&o!==t;)H=u(o),r(o,h,V),o=H;r(t,h,V)},D=({el:o,anchor:t})=>{let h;for(;o&&o!==t;)h=u(o),i(o),o=h;i(t)},U=(o,t,h,V,H,C,x,p,L)=>{x=x||t.type==="svg",o==null?t1(t,h,V,H,C,x,p,L):V1(o,t,H,C,x,p,L)},t1=(o,t,h,V,H,C,x,p)=>{let L,M;const{type:y,props:w,shapeFlag:A,transition:T,dirs:_}=o;if(L=o.el=f(o.type,C,w&&w.is,w),A&8?z(L,o.children):A&16&&M1(o.children,L,null,V,H,C&&y!=="foreignObject",x,p),_&&e2(o,null,V,"created"),i1(L,o,o.scopeId,x,V),w){for(const I in w)I!=="value"&&!S3(I)&&s(L,I,null,w[I],C,o.children,V,H,D1);"value"in w&&s(L,"value",null,w.value),(M=w.onVnodeBeforeMount)&&y1(M,V,o)}_&&e2(o,null,V,"beforeMount");const G=(!H||H&&!H.pendingBranch)&&T&&!T.persisted;G&&T.beforeEnter(L),r(L,t,h),((M=w&&w.onVnodeMounted)||G||_)&&z1(()=>{M&&y1(M,V,o),G&&T.enter(L),_&&e2(o,null,V,"mounted")},H)},i1=(o,t,h,V,H)=>{if(h&&g(o,h),V)for(let C=0;C<V.length;C++)g(o,V[C]);if(H){let C=H.subTree;if(t===C){const x=H.vnode;i1(o,x,x.scopeId,x.slotScopeIds,H.parent)}}},M1=(o,t,h,V,H,C,x,p,L=0)=>{for(let M=L;M<o.length;M++){const y=o[M]=p?j1(o[M]):P1(o[M]);P(null,y,t,h,V,H,C,x,p)}},V1=(o,t,h,V,H,C,x)=>{const p=t.el=o.el;let{patchFlag:L,dynamicChildren:M,dirs:y}=t;L|=o.patchFlag&16;const w=o.props||$,A=t.props||$;let T;h&&r2(h,!1),(T=A.onVnodeBeforeUpdate)&&y1(T,h,t,o),y&&e2(t,o,h,"beforeUpdate"),h&&r2(h,!0);const _=H&&t.type!=="foreignObject";if(M?R1(o.dynamicChildren,M,p,h,V,_,C):x||W(o,t,p,null,h,V,_,C,!1),L>0){if(L&16)y2(p,t,w,A,h,V,H);else if(L&2&&w.class!==A.class&&s(p,"class",null,A.class,H),L&4&&s(p,"style",w.style,A.style,H),L&8){const G=t.dynamicProps;for(let I=0;I<G.length;I++){const Q=G[I],p1=w[Q],h2=A[Q];(h2!==p1||Q==="value")&&s(p,Q,p1,h2,H,o.children,h,V,D1)}}L&1&&o.children!==t.children&&z(p,t.children)}else!x&&M==null&&y2(p,t,w,A,h,V,H);((T=A.onVnodeUpdated)||y)&&z1(()=>{T&&y1(T,h,t,o),y&&e2(t,o,h,"updated")},V)},R1=(o,t,h,V,H,C,x)=>{for(let p=0;p<t.length;p++){const L=o[p],M=t[p],y=L.el&&(L.type===A1||!P2(L,M)||L.shapeFlag&70)?v(L.el):h;P(L,M,y,null,V,H,C,x,!0)}},y2=(o,t,h,V,H,C,x)=>{if(h!==V){if(h!==$)for(const p in h)!S3(p)&&!(p in V)&&s(o,p,h[p],null,x,t.children,H,C,D1);for(const p in V){if(S3(p))continue;const L=V[p],M=h[p];L!==M&&p!=="value"&&s(o,p,M,L,x,t.children,H,C,D1)}"value"in V&&s(o,"value",h.value,V.value)}},n3=(o,t,h,V,H,C,x,p,L)=>{const M=t.el=o?o.el:l(""),y=t.anchor=o?o.anchor:l("");let{patchFlag:w,dynamicChildren:A,slotScopeIds:T}=t;T&&(p=p?p.concat(T):T),o==null?(r(M,h,V),r(y,h,V),M1(t.children,h,y,H,C,x,p,L)):w>0&&w&64&&A&&o.dynamicChildren?(R1(o.dynamicChildren,A,h,H,C,x,p),(t.key!=null||H&&t===H.subTree)&&N5(o,t,!0)):W(o,t,h,y,H,C,x,p,L)},o3=(o,t,h,V,H,C,x,p,L)=>{t.slotScopeIds=p,o==null?t.shapeFlag&512?H.ctx.activate(t,h,V,x,L):C4(t,h,V,H,C,x,L):q8(o,t,L)},C4=(o,t,h,V,H,C,x)=>{const p=o.component=pn(o,V,H);if(H5(o)&&(p.ctx.renderer=v2),Cn(p),p.asyncDep){if(H&&H.registerDep(p,f1),!o.el){const L=p.subTree=e1(G2);d(null,L,t,h)}return}f1(p,o,t,h,H,C,x)},q8=(o,t,h)=>{const V=t.component=o.component;if(Sl(o,t,h))if(V.asyncDep&&!V.asyncResolved){K(V,t,h);return}else V.next=t,Cl(V.update),V.update();else t.el=o.el,V.vnode=t},f1=(o,t,h,V,H,C,x)=>{const p=()=>{if(o.isMounted){let{next:y,bu:w,u:A,parent:T,vnode:_}=o,G=y,I;r2(o,!1),y?(y.el=_.el,K(o,y,x)):y=_,w&&x4(w),(I=y.props&&y.props.onVnodeBeforeUpdate)&&y1(I,T,y,_),r2(o,!0);const Q=b4(o),p1=o.subTree;o.subTree=Q,P(p1,Q,v(p1.el),m3(p1),o,H,C),y.el=Q.el,G===null&&wl(o,Q.el),A&&z1(A,H),(I=y.props&&y.props.onVnodeUpdated)&&z1(()=>y1(I,T,y,_),H)}else{let y;const{el:w,props:A}=t,{bm:T,m:_,parent:G}=o,I=y3(t);if(r2(o,!1),T&&x4(T),!I&&(y=A&&A.onVnodeBeforeMount)&&y1(y,G,t),r2(o,!0),w&&L4){const Q=()=>{o.subTree=b4(o),L4(w,o.subTree,o,H,null)};I?t.type.__asyncLoader().then(()=>!o.isUnmounted&&Q()):Q()}else{const Q=o.subTree=b4(o);P(null,Q,h,V,o,H,C),t.el=Q.el}if(_&&z1(_,H),!I&&(y=A&&A.onVnodeMounted)){const Q=t;z1(()=>y1(y,G,Q),H)}(t.shapeFlag&256||G&&y3(G.vnode)&&G.vnode.shapeFlag&256)&&o.a&&z1(o.a,H),o.isMounted=!0,t=h=V=null}},L=o.effect=new h6(p,()=>g6(M),o.scope),M=o.update=()=>L.run();M.id=o.uid,r2(o,!0),M()},K=(o,t,h)=>{t.component=o;const V=o.vnode.props;o.vnode=t,o.next=null,cn(o,t.props,V,h),rn(o,t.children,h),S2(),J8(),w2()},W=(o,t,h,V,H,C,x,p,L=!1)=>{const M=o&&o.children,y=o?o.shapeFlag:0,w=t.children,{patchFlag:A,shapeFlag:T}=t;if(A>0){if(A&128){t3(M,w,h,V,H,C,x,p,L);return}else if(A&256){c2(M,w,h,V,H,C,x,p,L);return}}T&8?(y&16&&D1(M,H,C),w!==M&&z(h,w)):y&16?T&16?t3(M,w,h,V,H,C,x,p,L):D1(M,H,C,!0):(y&8&&z(h,""),T&16&&M1(w,h,V,H,C,x,p,L))},c2=(o,t,h,V,H,C,x,p,L)=>{o=o||M2,t=t||M2;const M=o.length,y=t.length,w=Math.min(M,y);let A;for(A=0;A<w;A++){const T=t[A]=L?j1(t[A]):P1(t[A]);P(o[A],T,h,null,H,C,x,p,L)}M>y?D1(o,H,C,!0,!1,w):M1(t,h,V,H,C,x,p,L,w)},t3=(o,t,h,V,H,C,x,p,L)=>{let M=0;const y=t.length;let w=o.length-1,A=y-1;for(;M<=w&&M<=A;){const T=o[M],_=t[M]=L?j1(t[M]):P1(t[M]);if(P2(T,_))P(T,_,h,null,H,C,x,p,L);else break;M++}for(;M<=w&&M<=A;){const T=o[w],_=t[A]=L?j1(t[A]):P1(t[A]);if(P2(T,_))P(T,_,h,null,H,C,x,p,L);else break;w--,A--}if(M>w){if(M<=A){const T=A+1,_=T<y?t[T].el:V;for(;M<=A;)P(null,t[M]=L?j1(t[M]):P1(t[M]),h,_,H,C,x,p,L),M++}}else if(M>A)for(;M<=w;)w1(o[M],H,C,!0),M++;else{const T=M,_=M,G=new Map;for(M=_;M<=A;M++){const h1=t[M]=L?j1(t[M]):P1(t[M]);h1.key!=null&&G.set(h1.key,M)}let I,Q=0;const p1=A-_+1;let h2=!1,U8=0;const A2=new Array(p1);for(M=0;M<p1;M++)A2[M]=0;for(M=T;M<=w;M++){const h1=o[M];if(Q>=p1){w1(h1,H,C,!0);continue}let k1;if(h1.key!=null)k1=G.get(h1.key);else for(I=_;I<=A;I++)if(A2[I-_]===0&&P2(h1,t[I])){k1=I;break}k1===void 0?w1(h1,H,C,!0):(A2[k1-_]=M+1,k1>=U8?U8=k1:h2=!0,P(h1,t[k1],h,null,H,C,x,p,L),Q++)}const I8=h2?on(A2):M2;for(I=I8.length-1,M=p1-1;M>=0;M--){const h1=_+M,k1=t[h1],W8=h1+1<y?t[h1+1].el:V;A2[M]===0?P(null,k1,h,W8,H,C,x,p,L):h2&&(I<0||M!==I8[I]?a2(k1,h,W8,2):I--)}}},a2=(o,t,h,V,H=null)=>{const{el:C,type:x,transition:p,children:L,shapeFlag:M}=o;if(M&6){a2(o.component.subTree,t,h,V);return}if(M&128){o.suspense.move(t,h,V);return}if(M&64){x.move(o,t,h,v2);return}if(x===A1){r(C,t,h);for(let w=0;w<L.length;w++)a2(L[w],t,h,V);r(o.anchor,t,h);return}if(x===S4){N(o,t,h);return}if(V!==2&&M&1&&p)if(V===0)p.beforeEnter(C),r(C,t,h),z1(()=>p.enter(C),H);else{const{leave:w,delayLeave:A,afterLeave:T}=p,_=()=>r(C,t,h),G=()=>{w(C,()=>{_(),T&&T()})};A?A(C,_,G):G()}else r(C,t,h)},w1=(o,t,h,V=!1,H=!1)=>{const{type:C,props:x,ref:p,children:L,dynamicChildren:M,shapeFlag:y,patchFlag:w,dirs:A}=o;if(p!=null&&W4(p,null,h,o,!0),y&256){t.ctx.deactivate(o);return}const T=y&1&&A,_=!y3(o);let G;if(_&&(G=x&&x.onVnodeBeforeUnmount)&&y1(G,t,o),y&6)uf(o.component,h,V);else{if(y&128){o.suspense.unmount(h,V);return}T&&e2(o,null,t,"beforeUnmount"),y&64?o.type.remove(o,t,h,H,v2,V):M&&(C!==A1||w>0&&w&64)?D1(M,t,h,!1,!0):(C===A1&&w&384||!H&&y&16)&&D1(L,t,h),V&&E8(o)}(_&&(G=x&&x.onVnodeUnmounted)||T)&&z1(()=>{G&&y1(G,t,o),T&&e2(o,null,t,"unmounted")},h)},E8=o=>{const{type:t,el:h,anchor:V,transition:H}=o;if(t===A1){Vf(h,V);return}if(t===S4){D(o);return}const C=()=>{i(h),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(o.shapeFlag&1&&H&&!H.persisted){const{leave:x,delayLeave:p}=H,L=()=>x(h,C);p?p(o.el,C,L):L()}else C()},Vf=(o,t)=>{let h;for(;o!==t;)h=u(o),i(o),o=h;i(t)},uf=(o,t,h)=>{const{bum:V,scope:H,update:C,subTree:x,um:p}=o;V&&x4(V),H.stop(),C&&(C.active=!1,w1(x,o,t,h)),p&&z1(p,t),z1(()=>{o.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===t.pendingId&&(t.deps--,t.deps===0&&t.resolve())},D1=(o,t,h,V=!1,H=!1,C=0)=>{for(let x=C;x<o.length;x++)w1(o[x],t,h,V,H)},m3=o=>o.shapeFlag&6?m3(o.component.subTree):o.shapeFlag&128?o.suspense.next():u(o.anchor||o.el),O8=(o,t,h)=>{o==null?t._vnode&&w1(t._vnode,null,null,!0):P(t._vnode||null,o,t,null,null,null,h),J8(),t5(),t._vnode=o},v2={p:P,um:w1,m:a2,r:E8,mt:C4,mc:M1,pc:W,pbc:R1,n:m3,o:c};let d4,L4;return a&&([d4,L4]=a(v2)),{render:O8,hydrate:d4,createApp:fn(O8,d4)}}function r2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function N5(c,a,e=!1){const r=c.children,i=a.children;if(R(r)&&R(i))for(let s=0;s<r.length;s++){const f=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=j1(i[s]),l.el=f.el),e||N5(f,l)),l.type===Q3&&(l.el=f.el)}}function on(c){const a=c.slice(),e=[0];let r,i,s,f,l;const n=c.length;for(r=0;r<n;r++){const m=c[r];if(m!==0){if(i=e[e.length-1],c[i]<m){a[r]=i,e.push(r);continue}for(s=0,f=e.length-1;s<f;)l=s+f>>1,c[e[l]]<m?s=l+1:f=l;m<c[e[s]]&&(s>0&&(a[r]=e[s-1]),e[s]=r)}}for(s=e.length,f=e[s-1];s-- >0;)e[s]=f,f=a[f];return e}const tn=c=>c.__isTeleport,A1=Symbol(void 0),Q3=Symbol(void 0),G2=Symbol(void 0),S4=Symbol(void 0),D2=[];let x1=null;function d2(c=!1){D2.push(x1=c?null:[])}function mn(){D2.pop(),x1=D2[D2.length-1]||null}let Z2=1;function n0(c){Z2+=c}function S5(c){return c.dynamicChildren=Z2>0?x1||M2:null,mn(),Z2>0&&x1&&x1.push(c),c}function _2(c,a,e,r,i,s){return S5(a1(c,a,e,r,i,s,!0))}function zn(c,a,e,r,i){return S5(e1(c,a,e,r,i,!0))}function G4(c){return c?c.__v_isVNode===!0:!1}function P2(c,a){return c.type===a.type&&c.key===a.key}const J3="__vInternal",w5=({key:c})=>c??null,A3=({ref:c,ref_key:a,ref_for:e})=>c!=null?r1(c)||n1(c)||B(c)?{i:g1,r:c,k:a,f:!!e}:c:null;function a1(c,a=null,e=null,r=0,i=null,s=c===A1?0:1,f=!1,l=!1){const n={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&w5(a),ref:a&&A3(a),scopeId:Y3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:g1};return l?(y6(n,e),s&128&&c.normalize(n)):e&&(n.shapeFlag|=r1(e)?8:16),Z2>0&&!f&&x1&&(n.patchFlag>0||s&6)&&n.patchFlag!==32&&x1.push(n),n}const e1=vn;function vn(c,a=null,e=null,r=0,i=null,s=!1){if((!c||c===Gl)&&(c=G2),G4(c)){const l=g2(c,a,!0);return e&&y6(l,e),Z2>0&&!s&&x1&&(l.shapeFlag&6?x1[x1.indexOf(c)]=l:x1.push(l)),l.patchFlag|=-2,l}if(bn(c)&&(c=c.__vccOpts),a){a=hn(a);let{class:l,style:n}=a;l&&!r1(l)&&(a.class=n6(l)),X(n)&&(i5(n)&&!R(n)&&(n=o1({},n)),a.style=l6(n))}const f=r1(c)?1:kl(c)?128:tn(c)?64:X(c)?4:B(c)?2:0;return a1(c,a,e,r,i,f,s,!0)}function hn(c){return c?i5(c)||J3 in c?o1({},c):c:null}function g2(c,a,e=!1){const{props:r,ref:i,patchFlag:s,children:f}=c,l=a?Vn(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&w5(l),ref:a&&a.ref?e&&i?R(i)?i.concat(A3(a)):[i,A3(a)]:A3(a):i,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:f,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==A1?s===-1?16:s|16:s,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&g2(c.ssContent),ssFallback:c.ssFallback&&g2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Hn(c=" ",a=0){return e1(Q3,null,c,a)}function P1(c){return c==null||typeof c=="boolean"?e1(G2):R(c)?e1(A1,null,c.slice()):typeof c=="object"?j1(c):e1(Q3,null,String(c))}function j1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:g2(c)}function y6(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(R(a))e=16;else if(typeof a=="object")if(r&65){const i=a.default;i&&(i._c&&(i._d=!1),y6(c,i()),i._c&&(i._d=!0));return}else{e=32;const i=a._;!i&&!(J3 in a)?a._ctx=g1:i===3&&g1&&(g1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else B(a)?(a={default:a,_ctx:g1},e=32):(a=String(a),r&64?(e=16,a=[Hn(a)]):e=8);c.children=a,c.shapeFlag|=e}function Vn(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const i in r)if(i==="class")a.class!==r.class&&(a.class=n6([a.class,r.class]));else if(i==="style")a.style=l6([a.style,r.style]);else if(I3(i)){const s=a[i],f=r[i];f&&s!==f&&!(R(s)&&s.includes(f))&&(a[i]=s?[].concat(s,f):f)}else i!==""&&(a[i]=r[i])}return a}function y1(c,a,e,r=null){S1(c,a,7,[e,r])}const un=b5();let Mn=0;function pn(c,a,e){const r=c.type,i=(a?a.appContext:c.appContext)||un,s={uid:Mn++,vnode:c,type:r,parent:a,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d5(r,i),emitsOptions:z5(r,i),emit:null,emitted:null,propsDefaults:$,inheritAttrs:r.inheritAttrs,ctx:$,data:$,props:$,attrs:$,slots:$,refs:$,setupState:$,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=a?a.root:s,s.emit=gl.bind(null,s),c.ce&&c.ce(s),s}let J=null;const x2=c=>{J=c,c.scope.on()},t2=()=>{J&&J.scope.off(),J=null};function k5(c){return c.vnode.shapeFlag&4}let j2=!1;function Cn(c,a=!1){j2=a;const{props:e,children:r}=c.vnode,i=k5(c);Jl(c,e,i,a),en(c,r);const s=i?dn(c,a):void 0;return j2=!1,s}function dn(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=s5(new Proxy(c.ctx,jl));const{setup:r}=e;if(r){const i=c.setupContext=r.length>1?gn(c):null;x2(c),S2();const s=K1(r,c,0,[c.props,i]);if(w2(),t2(),Z0(s)){if(s.then(t2,t2),a)return s.then(f=>{o0(c,f,a)}).catch(f=>{$3(f,c,0)});c.asyncDep=s}else o0(c,s,a)}else y5(c,a)}function o0(c,a,e){B(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:X(a)&&(c.setupState=f5(a)),y5(c,e)}let t0;function y5(c,a,e){const r=c.type;if(!c.render){if(!a&&t0&&!r.render){const i=r.template||w6(c).template;if(i){const{isCustomElement:s,compilerOptions:f}=c.appContext.config,{delimiters:l,compilerOptions:n}=r,m=o1(o1({isCustomElement:s,delimiters:l},f),n);r.render=t0(i,m)}}c.render=r.render||N1}x2(c),S2(),$l(c),w2(),t2()}function Ln(c){return new Proxy(c.attrs,{get(a,e){return v1(c,"get","$attrs"),a[e]}})}function gn(c){const a=r=>{c.exposed=r||{}};let e;return{get attrs(){return e||(e=Ln(c))},slots:c.slots,emit:c.emit,expose:a}}function A6(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(f5(s5(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in R2)return R2[e](c)},has(a,e){return e in a||e in R2}}))}function xn(c,a=!0){return B(c)?c.displayName||c.name:c.name||a&&c.__name}function bn(c){return B(c)&&"__vccOpts"in c}const u1=(c,a)=>Vl(c,a,j2);function A5(c,a,e){const r=arguments.length;return r===2?X(a)&&!R(a)?G4(a)?e1(c,null,[a]):e1(c,a):e1(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&G4(e)&&(e=[e]),e1(c,a,e))}const Nn=Symbol(""),Sn=()=>w3(Nn),wn="3.2.47",kn="http://www.w3.org/2000/svg",f2=typeof document<"u"?document:null,m0=f2&&f2.createElement("template"),yn={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const i=a?f2.createElementNS(kn,c):f2.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:c=>f2.createTextNode(c),createComment:c=>f2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>f2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,i,s){const f=e?e.previousSibling:a.lastChild;if(i&&(i===s||i.nextSibling))for(;a.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{m0.innerHTML=r?`<svg>${c}</svg>`:c;const l=m0.content;if(r){const n=l.firstChild;for(;n.firstChild;)l.appendChild(n.firstChild);l.removeChild(n)}a.insertBefore(l,e)}return[f?f.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function An(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function Pn(c,a,e){const r=c.style,i=r1(e);if(e&&!i){if(a&&!r1(a))for(const s in a)e[s]==null&&Z4(r,s,"");for(const s in e)Z4(r,s,e[s])}else{const s=r.display;i?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=s)}}const z0=/\s*!important$/;function Z4(c,a,e){if(R(e))e.forEach(r=>Z4(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=Tn(c,a);z0.test(e)?c.setProperty(N2(r),e.replace(z0,""),"important"):c[r]=e}}const v0=["Webkit","Moz","ms"],w4={};function Tn(c,a){const e=w4[a];if(e)return e;let r=B1(a);if(r!=="filter"&&r in c)return w4[a]=r;r=Z3(r);for(let i=0;i<v0.length;i++){const s=v0[i]+r;if(s in c)return w4[a]=s}return a}const h0="http://www.w3.org/1999/xlink";function Fn(c,a,e,r,i){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(h0,a.slice(6,a.length)):c.setAttributeNS(h0,a,e);else{const s=gf(a);e==null||s&&!G0(e)?c.removeAttribute(a):c.setAttribute(a,s?"":e)}}function Bn(c,a,e,r,i,s,f){if(a==="innerHTML"||a==="textContent"){r&&f(r,i,s),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const n=e??"";(c.value!==n||c.tagName==="OPTION")&&(c.value=n),e==null&&c.removeAttribute(a);return}let l=!1;if(e===""||e==null){const n=typeof c[a];n==="boolean"?e=G0(e):e==null&&n==="string"?(e="",l=!0):n==="number"&&(e=0,l=!0)}try{c[a]=e}catch{}l&&c.removeAttribute(a)}function Rn(c,a,e,r){c.addEventListener(a,e,r)}function Dn(c,a,e,r){c.removeEventListener(a,e,r)}function _n(c,a,e,r,i=null){const s=c._vei||(c._vei={}),f=s[a];if(r&&f)f.value=r;else{const[l,n]=qn(a);if(r){const m=s[a]=Un(r,i);Rn(c,l,m,n)}else f&&(Dn(c,l,f,n),s[a]=void 0)}}const H0=/(?:Once|Passive|Capture)$/;function qn(c){let a;if(H0.test(c)){a={};let r;for(;r=c.match(H0);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):N2(c.slice(2)),a]}let k4=0;const En=Promise.resolve(),On=()=>k4||(En.then(()=>k4=0),k4=Date.now());function Un(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;S1(In(r,e.value),a,5,[r])};return e.value=c,e.attached=On(),e}function In(c,a){if(R(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>i=>!i._stopped&&r&&r(i))}else return a}const V0=/^on[a-z]/,Wn=(c,a,e,r,i=!1,s,f,l,n)=>{a==="class"?An(c,r,i):a==="style"?Pn(c,e,r):I3(a)?o6(a)||_n(c,a,e,r,f):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Gn(c,a,r,i))?Bn(c,a,r,s,f,l,n):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),Fn(c,a,r,i))};function Gn(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&V0.test(a)&&B(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||V0.test(a)&&r1(e)?!1:a in c}const Zn=o1({patchProp:Wn},yn);let u0;function jn(){return u0||(u0=ln(Zn))}const $n=(...c)=>{const a=jn().createApp(...c),{mount:e}=a;return a.mount=r=>{const i=Kn(r);if(!i)return;const s=a._component;!B(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const f=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),f},a};function Kn(c){return r1(c)?document.querySelector(c):c}const P5=""+new URL("logo-b823a5b1.png",import.meta.url).href;const J2=(c,a)=>{const e=c.__vccOpts||c;for(const[r,i]of a)e[r]=i;return e},Yn={name:"Header"},T5=c=>(x6("data-v-422865ba"),c=c(),b6(),c),Xn=T5(()=>a1("img",{src:P5,alt:""},null,-1)),Qn=T5(()=>a1("nav",null,[a1("ul",null,[a1("li",null,"Home"),a1("li",null,"Projects"),a1("li",null,"Contacts")])],-1)),Jn=[Xn,Qn];function co(c,a,e,r,i,s){return d2(),_2("header",null,Jn)}const ao=J2(Yn,[["render",co],["__scopeId","data-v-422865ba"]]);const eo={name:"Home"};function ro(c,a,e,r,i,s){return null}const io=J2(eo,[["render",ro],["__scopeId","data-v-4f73931b"]]);const so={name:"HeaderProvvisorio",data(){return{emailCopied:!1}},methods:{copyMail(){navigator.clipboard.writeText("andreabonaventuradev@gmail.com"),this.emailCopied=!0,setTimeout(()=>{this.emailCopied=!1},1500)}}},F5=c=>(x6("data-v-1007d62e"),c=c(),b6(),c),fo=F5(()=>a1("img",{src:P5,alt:""},null,-1)),lo={href:"https://github.com/Andrea8802",target:"_blank"},no={href:"https://www.linkedin.com/in/andreabonaventuradev/",target:"_blank"},oo={key:1,class:"copied"},to=F5(()=>a1("div",{class:"text"}," Email Copiata! ",-1));function mo(c,a,e,r,i,s){const f=S6("fa");return d2(),_2("header",null,[fo,a1("nav",null,[a1("ul",null,[a1("li",null,[a1("a",lo,[e1(f,{icon:"fa-brands fa-github"})])]),a1("li",null,[a1("a",no,[e1(f,{icon:"fa-brands fa-linkedin"})])]),i.emailCopied?(d2(),_2("li",oo,[e1(f,{icon:"fa-solid fa-clipboard-check"}),to])):(d2(),_2("li",{key:0,onClick:a[0]||(a[0]=(...l)=>s.copyMail&&s.copyMail(...l))},[e1(f,{icon:"fa-solid fa-envelope"})]))])])])}const zo=J2(so,[["render",mo],["__scopeId","data-v-1007d62e"]]);const vo={name:"Provvisorio",components:{HeaderProvvisorio:zo}},ho=c=>(x6("data-v-3a39c689"),c=c(),b6(),c),Ho=ho(()=>a1("div",{class:"alert"},null,-1));function Vo(c,a,e,r,i,s){const f=S6("HeaderProvvisorio");return d2(),_2(A1,null,[e1(f),Ho],64)}const uo=J2(vo,[["render",Vo],["__scopeId","data-v-3a39c689"]]);const Mo={name:"App",components:{Header:ao,Home:io,Provvisorio:uo}};function po(c,a,e,r,i,s){const f=S6("Provvisorio");return d2(),zn(f)}const Co=J2(Mo,[["render",po]]);function M0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function b(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?M0(Object(e),!0).forEach(function(r){c1(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):M0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function _3(c){return _3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_3(c)}function Lo(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function p0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function go(c,a,e){return a&&p0(c.prototype,a),e&&p0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function c1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function P6(c,a){return bo(c)||So(c,a)||B5(c,a)||ko()}function c3(c){return xo(c)||No(c)||B5(c)||wo()}function xo(c){if(Array.isArray(c))return j4(c)}function bo(c){if(Array.isArray(c))return c}function No(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function So(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,f,l;try{for(e=e.call(c);!(i=(f=e.next()).done)&&(r.push(f.value),!(a&&r.length===a));i=!0);}catch(n){s=!0,l=n}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw l}}return r}}function B5(c,a){if(c){if(typeof c=="string")return j4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j4(c,a)}}function j4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function wo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ko(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C0=function(){},T6={},R5={},D5=null,_5={mark:C0,measure:C0};try{typeof window<"u"&&(T6=window),typeof document<"u"&&(R5=document),typeof MutationObserver<"u"&&(D5=MutationObserver),typeof performance<"u"&&(_5=performance)}catch{}var yo=T6.navigator||{},d0=yo.userAgent,L0=d0===void 0?"":d0,X1=T6,j=R5,g0=D5,M3=_5;X1.document;var W1=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",q5=~L0.indexOf("MSIE")||~L0.indexOf("Trident/"),p3,C3,d3,L3,g3,E1="___FONT_AWESOME___",$4=16,E5="fa",O5="svg-inline--fa",m2="data-fa-i2svg",K4="data-fa-pseudo-element",Ao="data-fa-pseudo-element-pending",F6="data-prefix",B6="data-icon",x0="fontawesome-i2svg",Po="async",To=["HTML","HEAD","STYLE","SCRIPT"],U5=function(){try{return!0}catch{return!1}}(),Z="classic",Y="sharp",R6=[Z,Y];function a3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[Z]}})}var $2=a3((p3={},c1(p3,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),c1(p3,Y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),p3)),K2=a3((C3={},c1(C3,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),c1(C3,Y,{solid:"fass",regular:"fasr"}),C3)),Y2=a3((d3={},c1(d3,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),c1(d3,Y,{fass:"fa-solid",fasr:"fa-regular"}),d3)),Fo=a3((L3={},c1(L3,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),c1(L3,Y,{"fa-solid":"fass","fa-regular":"fasr"}),L3)),Bo=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,I5="fa-layers-text",Ro=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Do=a3((g3={},c1(g3,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),c1(g3,Y,{900:"fass",400:"fasr"}),g3)),W5=[1,2,3,4,5,6,7,8,9,10],_o=W5.concat([11,12,13,14,15,16,17,18,19,20]),qo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],l2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},X2=new Set;Object.keys(K2[Z]).map(X2.add.bind(X2));Object.keys(K2[Y]).map(X2.add.bind(X2));var Eo=[].concat(R6,c3(X2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",l2.GROUP,l2.SWAP_OPACITY,l2.PRIMARY,l2.SECONDARY]).concat(W5.map(function(c){return"".concat(c,"x")})).concat(_o.map(function(c){return"w-".concat(c)})),q2=X1.FontAwesomeConfig||{};function Oo(c){var a=j.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Uo(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(j&&typeof j.querySelector=="function"){var Io=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Io.forEach(function(c){var a=P6(c,2),e=a[0],r=a[1],i=Uo(Oo(e));i!=null&&(q2[r]=i)})}var G5={styleDefault:"solid",familyDefault:"classic",cssPrefix:E5,replacementClass:O5,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};q2.familyPrefix&&(q2.cssPrefix=q2.familyPrefix);var b2=b(b({},G5),q2);b2.autoReplaceSvg||(b2.observeMutations=!1);var k={};Object.keys(G5).forEach(function(c){Object.defineProperty(k,c,{enumerable:!0,set:function(e){b2[c]=e,E2.forEach(function(r){return r(k)})},get:function(){return b2[c]}})});Object.defineProperty(k,"familyPrefix",{enumerable:!0,set:function(a){b2.cssPrefix=a,E2.forEach(function(e){return e(k)})},get:function(){return b2.cssPrefix}});X1.FontAwesomeConfig=k;var E2=[];function Wo(c){return E2.push(c),function(){E2.splice(E2.indexOf(c),1)}}var Z1=$4,F1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Go(c){if(!(!c||!W1)){var a=j.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=j.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],f=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=s)}return j.head.insertBefore(a,r),c}}var Zo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Q2(){for(var c=12,a="";c-- >0;)a+=Zo[Math.random()*62|0];return a}function k2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function D6(c){return c.classList?k2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Z5(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jo(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Z5(c[e]),'" ')},"").trim()}function c4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function _6(c){return c.size!==F1.size||c.x!==F1.x||c.y!==F1.y||c.rotate!==F1.rotate||c.flipX||c.flipY}function $o(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),n={transform:"".concat(s," ").concat(f," ").concat(l)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:n,path:m}}function Ko(c){var a=c.transform,e=c.width,r=e===void 0?$4:e,i=c.height,s=i===void 0?$4:i,f=c.startCentered,l=f===void 0?!1:f,n="";return l&&q5?n+="translate(".concat(a.x/Z1-r/2,"em, ").concat(a.y/Z1-s/2,"em) "):l?n+="translate(calc(-50% + ".concat(a.x/Z1,"em), calc(-50% + ").concat(a.y/Z1,"em)) "):n+="translate(".concat(a.x/Z1,"em, ").concat(a.y/Z1,"em) "),n+="scale(".concat(a.size/Z1*(a.flipX?-1:1),", ").concat(a.size/Z1*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var Yo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function j5(){var c=E5,a=O5,e=k.cssPrefix,r=k.replacementClass,i=Yo;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(l,".".concat(r))}return i}var b0=!1;function y4(){k.autoAddCss&&!b0&&(Go(j5()),b0=!0)}var Xo={mixout:function(){return{dom:{css:j5,insertCss:y4}}},hooks:function(){return{beforeDOMElementCreation:function(){y4()},beforeI2svg:function(){y4()}}}},O1=X1||{};O1[E1]||(O1[E1]={});O1[E1].styles||(O1[E1].styles={});O1[E1].hooks||(O1[E1].hooks={});O1[E1].shims||(O1[E1].shims=[]);var b1=O1[E1],$5=[],Qo=function c(){j.removeEventListener("DOMContentLoaded",c),q3=1,$5.map(function(a){return a()})},q3=!1;W1&&(q3=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),q3||j.addEventListener("DOMContentLoaded",Qo));function Jo(c){W1&&(q3?setTimeout(c,0):$5.push(c))}function e3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?Z5(c):"<".concat(a," ").concat(jo(r),">").concat(s.map(e3).join(""),"</").concat(a,">")}function N0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var ct=function(a,e){return function(r,i,s,f){return a.call(e,r,i,s,f)}},A4=function(a,e,r,i){var s=Object.keys(a),f=s.length,l=i!==void 0?ct(e,i):e,n,m,z;for(r===void 0?(n=1,z=a[s[0]]):(n=0,z=r);n<f;n++)m=s[n],z=l(z,a[m],m,a);return z};function at(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function Y4(c){var a=at(c);return a.length===1?a[0].toString(16):null}function et(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function S0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function X4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=S0(a);typeof b1.hooks.addPack=="function"&&!i?b1.hooks.addPack(c,S0(a)):b1.styles[c]=b(b({},b1.styles[c]||{}),s),c==="fas"&&X4("fa",a)}var x3,b3,N3,V2=b1.styles,rt=b1.shims,it=(x3={},c1(x3,Z,Object.values(Y2[Z])),c1(x3,Y,Object.values(Y2[Y])),x3),q6=null,K5={},Y5={},X5={},Q5={},J5={},st=(b3={},c1(b3,Z,Object.keys($2[Z])),c1(b3,Y,Object.keys($2[Y])),b3);function ft(c){return~Eo.indexOf(c)}function lt(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!ft(i)?i:null}var c7=function(){var a=function(s){return A4(V2,function(f,l,n){return f[n]=A4(l,s,{}),f},{})};K5=a(function(i,s,f){if(s[3]&&(i[s[3]]=f),s[2]){var l=s[2].filter(function(n){return typeof n=="number"});l.forEach(function(n){i[n.toString(16)]=f})}return i}),Y5=a(function(i,s,f){if(i[f]=f,s[2]){var l=s[2].filter(function(n){return typeof n=="string"});l.forEach(function(n){i[n]=f})}return i}),J5=a(function(i,s,f){var l=s[2];return i[f]=f,l.forEach(function(n){i[n]=f}),i});var e="far"in V2||k.autoFetchSvg,r=A4(rt,function(i,s){var f=s[0],l=s[1],n=s[2];return l==="far"&&!e&&(l="fas"),typeof f=="string"&&(i.names[f]={prefix:l,iconName:n}),typeof f=="number"&&(i.unicodes[f.toString(16)]={prefix:l,iconName:n}),i},{names:{},unicodes:{}});X5=r.names,Q5=r.unicodes,q6=a4(k.styleDefault,{family:k.familyDefault})};Wo(function(c){q6=a4(c.styleDefault,{family:k.familyDefault})});c7();function E6(c,a){return(K5[c]||{})[a]}function nt(c,a){return(Y5[c]||{})[a]}function n2(c,a){return(J5[c]||{})[a]}function a7(c){return X5[c]||{prefix:null,iconName:null}}function ot(c){var a=Q5[c],e=E6("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function Q1(){return q6}var O6=function(){return{prefix:null,iconName:null,rest:[]}};function a4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?Z:e,i=$2[r][c],s=K2[r][c]||K2[r][i],f=c in b1.styles?c:null;return s||f||null}var w0=(N3={},c1(N3,Z,Object.keys(Y2[Z])),c1(N3,Y,Object.keys(Y2[Y])),N3);function e4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},c1(a,Z,"".concat(k.cssPrefix,"-").concat(Z)),c1(a,Y,"".concat(k.cssPrefix,"-").concat(Y)),a),f=null,l=Z;(c.includes(s[Z])||c.some(function(m){return w0[Z].includes(m)}))&&(l=Z),(c.includes(s[Y])||c.some(function(m){return w0[Y].includes(m)}))&&(l=Y);var n=c.reduce(function(m,z){var v=lt(k.cssPrefix,z);if(V2[z]?(z=it[l].includes(z)?Fo[l][z]:z,f=z,m.prefix=z):st[l].indexOf(z)>-1?(f=z,m.prefix=a4(z,{family:l})):v?m.iconName=v:z!==k.replacementClass&&z!==s[Z]&&z!==s[Y]&&m.rest.push(z),!i&&m.prefix&&m.iconName){var u=f==="fa"?a7(m.iconName):{},g=n2(m.prefix,m.iconName);u.prefix&&(f=null),m.iconName=u.iconName||g||m.iconName,m.prefix=u.prefix||m.prefix,m.prefix==="far"&&!V2.far&&V2.fas&&!k.autoFetchSvg&&(m.prefix="fas")}return m},O6());return(c.includes("fa-brands")||c.includes("fab"))&&(n.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(n.prefix="fad"),!n.prefix&&l===Y&&(V2.fass||k.autoFetchSvg)&&(n.prefix="fass",n.iconName=n2(n.prefix,n.iconName)||n.iconName),(n.prefix==="fa"||f==="fa")&&(n.prefix=Q1()||"fas"),n}var tt=function(){function c(){Lo(this,c),this.definitions={}}return go(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var f=i.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(l){e.definitions[l]=b(b({},e.definitions[l]||{}),f[l]),X4(l,f[l]);var n=Y2[Z][l];n&&X4(n,f[l]),c7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var f=i[s],l=f.prefix,n=f.iconName,m=f.icon,z=m[2];e[l]||(e[l]={}),z.length>0&&z.forEach(function(v){typeof v=="string"&&(e[l][v]=m)}),e[l][n]=m}),e}}]),c}(),k0=[],u2={},L2={},mt=Object.keys(L2);function zt(c,a){var e=a.mixoutsTo;return k0=c,u2={},Object.keys(L2).forEach(function(r){mt.indexOf(r)===-1&&delete L2[r]}),k0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(f){typeof i[f]=="function"&&(e[f]=i[f]),_3(i[f])==="object"&&Object.keys(i[f]).forEach(function(l){e[f]||(e[f]={}),e[f][l]=i[f][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(f){u2[f]||(u2[f]=[]),u2[f].push(s[f])})}r.provides&&r.provides(L2)}),e}function Q4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=u2[c]||[];return s.forEach(function(f){a=f.apply(null,[a].concat(r))}),a}function z2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=u2[c]||[];i.forEach(function(s){s.apply(null,e)})}function U1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return L2[c]?L2[c].apply(null,a):void 0}function J4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||Q1();if(a)return a=n2(e,a)||a,N0(e7.definitions,e,a)||N0(b1.styles,e,a)}var e7=new tt,vt=function(){k.autoReplaceSvg=!1,k.observeMutations=!1,z2("noAuto")},ht={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W1?(z2("beforeI2svg",a),U1("pseudoElements2svg",a),U1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;k.autoReplaceSvg===!1&&(k.autoReplaceSvg=!0),k.observeMutations=!0,Jo(function(){Vt({autoReplaceSvgRoot:e}),z2("watch",a)})}},Ht={icon:function(a){if(a===null)return null;if(_3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:n2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=a4(a[0]);return{prefix:r,iconName:n2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(k.cssPrefix,"-"))>-1||a.match(Bo))){var i=e4(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||Q1(),iconName:n2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=Q1();return{prefix:s,iconName:n2(s,a)||a}}}},H1={noAuto:vt,config:k,dom:ht,parse:Ht,library:e7,findIconDefinition:J4,toHtml:e3},Vt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?j:e;(Object.keys(b1.styles).length>0||k.autoFetchSvg)&&W1&&k.autoReplaceSvg&&H1.dom.i2svg({node:r})};function r4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return e3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(W1){var r=j.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function ut(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,f=c.transform;if(_6(f)&&e.found&&!r.found){var l=e.width,n=e.height,m={x:l/n/2,y:.5};i.style=c4(b(b({},s),{},{"transform-origin":"".concat(m.x+f.x/16,"em ").concat(m.y+f.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function Mt(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,f=s===!0?"".concat(a,"-").concat(k.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},i),{},{id:f}),children:r}]}]}function U6(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,f=c.transform,l=c.symbol,n=c.title,m=c.maskId,z=c.titleId,v=c.extra,u=c.watchable,g=u===void 0?!1:u,F=r.found?r:e,P=F.width,E=F.height,d=i==="fak",S=[k.replacementClass,s?"".concat(k.cssPrefix,"-").concat(s):""].filter(function(V1){return v.classes.indexOf(V1)===-1}).filter(function(V1){return V1!==""||!!V1}).concat(v.classes).join(" "),N={children:[],attributes:b(b({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:S,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(E)})},D=d&&!~v.classes.indexOf("fa-fw")?{width:"".concat(P/E*16*.0625,"em")}:{};g&&(N.attributes[m2]=""),n&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(z||Q2())},children:[n]}),delete N.attributes.title);var U=b(b({},N),{},{prefix:i,iconName:s,main:e,mask:r,maskId:m,transform:f,symbol:l,styles:b(b({},D),v.styles)}),t1=r.found&&e.found?U1("generateAbstractMask",U)||{children:[],attributes:{}}:U1("generateAbstractIcon",U)||{children:[],attributes:{}},i1=t1.children,M1=t1.attributes;return U.children=i1,U.attributes=M1,l?Mt(U):ut(U)}function y0(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,f=c.extra,l=c.watchable,n=l===void 0?!1:l,m=b(b(b({},f.attributes),s?{title:s}:{}),{},{class:f.classes.join(" ")});n&&(m[m2]="");var z=b({},f.styles);_6(i)&&(z.transform=Ko({transform:i,startCentered:!0,width:e,height:r}),z["-webkit-transform"]=z.transform);var v=c4(z);v.length>0&&(m.style=v);var u=[];return u.push({tag:"span",attributes:m,children:[a]}),s&&u.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),u}function pt(c){var a=c.content,e=c.title,r=c.extra,i=b(b(b({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=c4(r.styles);s.length>0&&(i.style=s);var f=[];return f.push({tag:"span",attributes:i,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var P4=b1.styles;function c6(c){var a=c[0],e=c[1],r=c.slice(4),i=P6(r,1),s=i[0],f=null;return Array.isArray(s)?f={tag:"g",attributes:{class:"".concat(k.cssPrefix,"-").concat(l2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(l2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(k.cssPrefix,"-").concat(l2.PRIMARY),fill:"currentColor",d:s[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:f}}var Ct={found:!1,width:512,height:512};function dt(c,a){!U5&&!k.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function a6(c,a){var e=a;return a==="fa"&&k.styleDefault!==null&&(a=Q1()),new Promise(function(r,i){if(U1("missingIconAbstract"),e==="fa"){var s=a7(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&P4[a]&&P4[a][c]){var f=P4[a][c];return r(c6(f))}dt(c,a),r(b(b({},Ct),{},{icon:k.showMissingIcons&&c?U1("missingIconAbstract")||{}:{}}))})}var A0=function(){},e6=k.measurePerformance&&M3&&M3.mark&&M3.measure?M3:{mark:A0,measure:A0},F2='FA "6.3.0"',Lt=function(a){return e6.mark("".concat(F2," ").concat(a," begins")),function(){return r7(a)}},r7=function(a){e6.mark("".concat(F2," ").concat(a," ends")),e6.measure("".concat(F2," ").concat(a),"".concat(F2," ").concat(a," begins"),"".concat(F2," ").concat(a," ends"))},I6={begin:Lt,end:r7},P3=function(){};function P0(c){var a=c.getAttribute?c.getAttribute(m2):null;return typeof a=="string"}function gt(c){var a=c.getAttribute?c.getAttribute(F6):null,e=c.getAttribute?c.getAttribute(B6):null;return a&&e}function xt(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(k.replacementClass)}function bt(){if(k.autoReplaceSvg===!0)return T3.replace;var c=T3[k.autoReplaceSvg];return c||T3.replace}function Nt(c){return j.createElementNS("http://www.w3.org/2000/svg",c)}function St(c){return j.createElement(c)}function i7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Nt:St:e;if(typeof c=="string")return j.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(f){i.setAttribute(f,c.attributes[f])});var s=c.children||[];return s.forEach(function(f){i.appendChild(i7(f,{ceFn:r}))}),i}function wt(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var T3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(i7(i),e)}),e.getAttribute(m2)===null&&k.keepOriginalSource){var r=j.createComment(wt(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~D6(e).indexOf(k.replacementClass))return T3.replace(a);var i=new RegExp("".concat(k.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,n){return n===k.replacementClass||n.match(i)?l.toSvg.push(n):l.toNode.push(n),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var f=r.map(function(l){return e3(l)}).join(`
`);e.setAttribute(m2,""),e.innerHTML=f}};function T0(c){c()}function s7(c,a){var e=typeof a=="function"?a:P3;if(c.length===0)e();else{var r=T0;k.mutateApproach===Po&&(r=X1.requestAnimationFrame||T0),r(function(){var i=bt(),s=I6.begin("mutate");c.map(i),s(),e()})}}var W6=!1;function f7(){W6=!0}function r6(){W6=!1}var E3=null;function F0(c){if(g0&&k.observeMutations){var a=c.treeCallback,e=a===void 0?P3:a,r=c.nodeCallback,i=r===void 0?P3:r,s=c.pseudoElementsCallback,f=s===void 0?P3:s,l=c.observeMutationsRoot,n=l===void 0?j:l;E3=new g0(function(m){if(!W6){var z=Q1();k2(m).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!P0(v.addedNodes[0])&&(k.searchPseudoElements&&f(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&k.searchPseudoElements&&f(v.target.parentNode),v.type==="attributes"&&P0(v.target)&&~qo.indexOf(v.attributeName))if(v.attributeName==="class"&&gt(v.target)){var u=e4(D6(v.target)),g=u.prefix,F=u.iconName;v.target.setAttribute(F6,g||z),F&&v.target.setAttribute(B6,F)}else xt(v.target)&&i(v.target)})}}),W1&&E3.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kt(){E3&&E3.disconnect()}function yt(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),f=s[0],l=s.slice(1);return f&&l.length>0&&(r[f]=l.join(":").trim()),r},{})),e}function At(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=e4(D6(c));return i.prefix||(i.prefix=Q1()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=nt(i.prefix,c.innerText)||E6(i.prefix,Y4(c.innerText))),!i.iconName&&k.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Pt(c){var a=k2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return k.autoA11y&&(e?a["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(r||Q2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Tt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=At(c),r=e.iconName,i=e.prefix,s=e.rest,f=Pt(c),l=Q4("parseNodeAttributes",{},c),n=a.styleParser?yt(c):[];return b({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:F1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:n,attributes:f}},l)}var Ft=b1.styles;function l7(c){var a=k.autoReplaceSvg==="nest"?B0(c,{styleParser:!1}):B0(c);return~a.extra.classes.indexOf(I5)?U1("generateLayersText",c,a):U1("generateSvgReplacementMutation",c,a)}var J1=new Set;R6.map(function(c){J1.add("fa-".concat(c))});Object.keys($2[Z]).map(J1.add.bind(J1));Object.keys($2[Y]).map(J1.add.bind(J1));J1=c3(J1);function R0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W1)return Promise.resolve();var e=j.documentElement.classList,r=function(v){return e.add("".concat(x0,"-").concat(v))},i=function(v){return e.remove("".concat(x0,"-").concat(v))},s=k.autoFetchSvg?J1:R6.map(function(z){return"fa-".concat(z)}).concat(Object.keys(Ft));s.includes("fa")||s.push("fa");var f=[".".concat(I5,":not([").concat(m2,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(m2,"])")})).join(", ");if(f.length===0)return Promise.resolve();var l=[];try{l=k2(c.querySelectorAll(f))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var n=I6.begin("onTree"),m=l.reduce(function(z,v){try{var u=l7(v);u&&z.push(u)}catch(g){U5||g.name==="MissingIcon"&&console.error(g)}return z},[]);return new Promise(function(z,v){Promise.all(m).then(function(u){s7(u,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),n(),z()})}).catch(function(u){n(),v(u)})})}function Bt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;l7(c).then(function(e){e&&s7([e],a)})}function Rt(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:J4(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:J4(i||{})),c(r,b(b({},e),{},{mask:i}))}}var Dt=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?F1:r,s=e.symbol,f=s===void 0?!1:s,l=e.mask,n=l===void 0?null:l,m=e.maskId,z=m===void 0?null:m,v=e.title,u=v===void 0?null:v,g=e.titleId,F=g===void 0?null:g,P=e.classes,E=P===void 0?[]:P,d=e.attributes,S=d===void 0?{}:d,N=e.styles,D=N===void 0?{}:N;if(a){var U=a.prefix,t1=a.iconName,i1=a.icon;return r4(b({type:"icon"},a),function(){return z2("beforeDOMElementCreation",{iconDefinition:a,params:e}),k.autoA11y&&(u?S["aria-labelledby"]="".concat(k.replacementClass,"-title-").concat(F||Q2()):(S["aria-hidden"]="true",S.focusable="false")),U6({icons:{main:c6(i1),mask:n?c6(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:t1,transform:b(b({},F1),i),symbol:f,title:u,maskId:z,titleId:F,extra:{attributes:S,styles:D,classes:E}})})}},_t={mixout:function(){return{icon:Rt(Dt)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=R0,e.nodeCallback=Bt,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?j:r,s=e.callback,f=s===void 0?function(){}:s;return R0(i,f)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,f=r.titleId,l=r.prefix,n=r.transform,m=r.symbol,z=r.mask,v=r.maskId,u=r.extra;return new Promise(function(g,F){Promise.all([a6(i,l),z.iconName?a6(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var E=P6(P,2),d=E[0],S=E[1];g([e,U6({icons:{main:d,mask:S},prefix:l,iconName:i,transform:n,symbol:m,maskId:v,title:s,titleId:f,extra:u,watchable:!0})])}).catch(F)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,f=e.transform,l=e.styles,n=c4(l);n.length>0&&(i.style=n);var m;return _6(f)&&(m=U1("generateAbstractTransformGrouping",{main:s,transform:f,containerWidth:s.width,iconWidth:s.width})),r.push(m||s.icon),{children:r,attributes:i}}}},qt={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return r4({type:"layer"},function(){z2("beforeDOMElementCreation",{assembler:e,params:r});var f=[];return e(function(l){Array.isArray(l)?l.map(function(n){f=f.concat(n.abstract)}):f=f.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(k.cssPrefix,"-layers")].concat(c3(s)).join(" ")},children:f}]})}}}},Et={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,f=r.classes,l=f===void 0?[]:f,n=r.attributes,m=n===void 0?{}:n,z=r.styles,v=z===void 0?{}:z;return r4({type:"counter",content:e},function(){return z2("beforeDOMElementCreation",{content:e,params:r}),pt({content:e.toString(),title:s,extra:{attributes:m,styles:v,classes:["".concat(k.cssPrefix,"-layers-counter")].concat(c3(l))}})})}}}},Ot={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?F1:i,f=r.title,l=f===void 0?null:f,n=r.classes,m=n===void 0?[]:n,z=r.attributes,v=z===void 0?{}:z,u=r.styles,g=u===void 0?{}:u;return r4({type:"text",content:e},function(){return z2("beforeDOMElementCreation",{content:e,params:r}),y0({content:e,transform:b(b({},F1),s),title:l,extra:{attributes:v,styles:g,classes:["".concat(k.cssPrefix,"-layers-text")].concat(c3(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,f=r.extra,l=null,n=null;if(q5){var m=parseInt(getComputedStyle(e).fontSize,10),z=e.getBoundingClientRect();l=z.width/m,n=z.height/m}return k.autoA11y&&!i&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,y0({content:e.innerHTML,width:l,height:n,transform:s,title:i,extra:f,watchable:!0})])}}},Ut=new RegExp('"',"ug"),D0=[1105920,1112319];function It(c){var a=c.replace(Ut,""),e=et(a,0),r=e>=D0[0]&&e<=D0[1],i=a.length===2?a[0]===a[1]:!1;return{value:Y4(i?a[0]:a),isSecondary:r||i}}function _0(c,a){var e="".concat(Ao).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=k2(c.children),f=s.filter(function(i1){return i1.getAttribute(K4)===a})[0],l=X1.getComputedStyle(c,a),n=l.getPropertyValue("font-family").match(Ro),m=l.getPropertyValue("font-weight"),z=l.getPropertyValue("content");if(f&&!n)return c.removeChild(f),r();if(n&&z!=="none"&&z!==""){var v=l.getPropertyValue("content"),u=~["Sharp"].indexOf(n[2])?Y:Z,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(n[2])?K2[u][n[2].toLowerCase()]:Do[u][m],F=It(v),P=F.value,E=F.isSecondary,d=n[0].startsWith("FontAwesome"),S=E6(g,P),N=S;if(d){var D=ot(P);D.iconName&&D.prefix&&(S=D.iconName,g=D.prefix)}if(S&&!E&&(!f||f.getAttribute(F6)!==g||f.getAttribute(B6)!==N)){c.setAttribute(e,N),f&&c.removeChild(f);var U=Tt(),t1=U.extra;t1.attributes[K4]=a,a6(S,g).then(function(i1){var M1=U6(b(b({},U),{},{icons:{main:i1,mask:O6()},prefix:g,iconName:N,extra:t1,watchable:!0})),V1=j.createElement("svg");a==="::before"?c.insertBefore(V1,c.firstChild):c.appendChild(V1),V1.outerHTML=M1.map(function(R1){return e3(R1)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mj=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hf={exports:{}};(function(c){(function(a){var e=function(d,S,N){if(!m(S)||v(S)||u(S)||g(S)||n(S))return S;var D,U=0,t1=0;if(z(S))for(D=[],t1=S.length;U<t1;U++)D.push(e(d,S[U],N));else{D={};for(var i1 in S)Object.prototype.hasOwnProperty.call(S,i1)&&(D[d(i1,N)]=e(d,S[i1],N))}return D},r=function(d,S){S=S||{};var N=S.separator||"_",D=S.split||/(?=[A-Z])/;return d.split(D).join(N)},i=function(d){return F(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(S,N){return N?N.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},s=function(d){var S=i(d);return S.substr(0,1).toUpperCase()+S.substr(1)},f=function(d,S){return r(d,S).toLowerCase()},l=Object.prototype.toString,n=function(d){return typeof d=="function"},m=function(d){return d===Object(d)},z=function(d){return l.call(d)=="[object Array]"},v=function(d){return l.call(d)=="[object Date]"},u=function(d){return l.call(d)=="[object RegExp]"},g=function(d){return l.call(d)=="[object Boolean]"},F=function(d){return d=d-0,d===d},P=function(d,S){var N=S&&"process"in S?S.process:S;return typeof N!="function"?d:function(D,U){return N(D,d,U)}},E={camelize:i,decamelize:f,pascalize:s,depascalize:f,camelizeKeys:function(d,S){return e(P(i,S),d)},decamelizeKeys:function(d,S){return e(P(f,S),d,S)},pascalizeKeys:function(d,S){return e(P(s,S),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};c.exports?c.exports=E:a.humps=E})(Mj)})(hf);var pj=hf.exports,Cj=["class","style"];function dj(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),i=pj.camelize(e.slice(0,r)),s=e.slice(r+1).trim();return a[i]=s,a},{})}function Lj(c){return c.split(/\s+/).reduce(function(a,e){return a[e]=!0,a},{})}function _8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof c=="string")return c;var r=(c.children||[]).map(function(n){return _8(n)}),i=Object.keys(c.attributes||{}).reduce(function(n,m){var z=c.attributes[m];switch(m){case"class":n.class=Lj(z);break;case"style":n.style=dj(z);break;default:n.attrs[m]=z}return n},{attrs:{},class:{},style:{}});e.class;var s=e.style,f=s===void 0?{}:s,l=vj(e,Cj);return A5(c.tag,L1(L1(L1({},a),{},{class:i.class,style:L1(L1({},i.style),f)},i.attrs),l),r)}var Hf=!1;try{Hf=!0}catch{}function gj(){if(!Hf&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function O2(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?m1({},c,a):{}}function xj(c){var a,e=(a={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-li":c.listItem,"fa-inverse":c.inverse,"fa-flip":c.flip===!0,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both"},m1(a,"fa-".concat(c.size),c.size!==null),m1(a,"fa-rotate-".concat(c.rotation),c.rotation!==null),m1(a,"fa-pull-".concat(c.pull),c.pull!==null),m1(a,"fa-swap-opacity",c.swapOpacity),m1(a,"fa-bounce",c.bounce),m1(a,"fa-shake",c.shake),m1(a,"fa-beat",c.beat),m1(a,"fa-fade",c.fade),m1(a,"fa-beat-fade",c.beatFade),m1(a,"fa-flash",c.flash),m1(a,"fa-spin-pulse",c.spinPulse),m1(a,"fa-spin-reverse",c.spinReverse),a);return Object.keys(e).map(function(r){return e[r]?r:null}).filter(function(r){return r})}function W0(c){if(c&&U3(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(O3.icon)return O3.icon(c);if(c===null)return null;if(U3(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}var bj=N6({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(a){return[!0,!1,"horizontal","vertical","both"].indexOf(a)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(a){return["right","left"].indexOf(a)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(a){return[90,180,270].indexOf(Number.parseInt(a,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(a){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(a)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(a,e){var r=e.attrs,i=u1(function(){return W0(a.icon)}),s=u1(function(){return O2("classes",xj(a))}),f=u1(function(){return O2("transform",typeof a.transform=="string"?O3.transform(a.transform):a.transform)}),l=u1(function(){return O2("mask",W0(a.mask))}),n=u1(function(){return am(i.value,L1(L1(L1(L1({},s.value),f.value),l.value),{},{symbol:a.symbol,title:a.title}))});k3(n,function(z){if(!z)return gj("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var m=u1(function(){return n.value?_8(n.value.abstract[0],{},r):null});return function(){return m.value}}});N6({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(a,e){var r=e.slots,i=n7.familyPrefix,s=u1(function(){return["".concat(i,"-layers")].concat(i6(a.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return A5("div",{class:s.value},r.default?r.default():[])}}});N6({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(a){return["bottom-left","bottom-right","top-left","top-right"].indexOf(a)>-1}}},setup:function(a,e){var r=e.attrs,i=n7.familyPrefix,s=u1(function(){return O2("classes",[].concat(i6(a.counter?["".concat(i,"-layers-counter")]:[]),i6(a.position?["".concat(i,"-layers-").concat(a.position)]:[])))}),f=u1(function(){return O2("transform",typeof a.transform=="string"?O3.transform(a.transform):a.transform)}),l=u1(function(){var m=em(a.value.toString(),L1(L1({},f.value),s.value)),z=m.abstract;return a.counter&&(z[0].attributes.class=z[0].attributes.class.replace("fa-layers-text","")),z[0]}),n=u1(function(){return _8(l.value,{},r)});return function(){return n.value}}});cm.add(qp,mj);$n(Co).component("fa",bj).mount("#app");