var qe=Object.defineProperty;var ze=(r,e,n)=>e in r?qe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var le=(r,e,n)=>(ze(r,typeof e!="symbol"?e+"":e,n),n);import{S as Be,i as Ke,s as Je,a as We,e as j,c as He,b as V,g as H,t as I,d as F,f as N,h as D,j as Fe,k as Ge,o as pe,l as Ye,m as Me,n as Xe,p as fe,q as K,r as Ze,u as Qe,v as xe,w as q,x as Q,y as z,z as B,A as Se}from"./chunks/index-485e134a.js";import{w as me}from"./chunks/index-d06c316d.js";import{i as et}from"./chunks/singletons-da11499b.js";class te{constructor(e,n){le(this,"name","HttpError");le(this,"stack");this.status=e,this.message=n!=null?n:`Error: ${e}`}toString(){return this.message}}class Ue{constructor(e,n){this.status=e,this.location=n}}function tt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function nt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}class rt extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}let Ae="",De="";function at(r){Ae=r.base,De=r.assets||Ae}function Oe(r){let e=r.baseURI;if(!e){const n=r.getElementsByTagName("base");e=n.length?n[0].href:r.URL}return e}function he(){return{x:pageXOffset,y:pageYOffset}}function Pe(r){return r.composedPath().find(n=>n instanceof Node&&n.nodeName.toUpperCase()==="A")}function je(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}function Ie(r){const e=me(r);let n=!0;function s(){n=!0,e.update(t=>t)}function a(t){n=!1,e.set(t)}function f(t){let i;return e.subscribe(l=>{(i===void 0||n&&l!==i)&&t(i=l)})}return{notify:s,set:a,subscribe:f}}function st(){const{set:r,subscribe:e}=me(!1);let n;async function s(){clearTimeout(n);const a=await fetch(`${De}/internal/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:f}=await a.json(),t=f!=="1660898860868";return t&&(r(!0),clearTimeout(n)),t}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:s}}function it(r){let e=5381,n=r.length;if(typeof r=="string")for(;n;)e=e*33^r.charCodeAt(--n);else for(;n;)e=e*33^r[--n];return(e>>>0).toString(36)}const _e=window.fetch;function ot(r,e){let s=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof r=="string"?r:r.url)}]`;e&&typeof e.body=="string"&&(s+=`[sveltekit\\:data-body="${it(e.body)}"]`);const a=document.querySelector(s);if(a&&a.textContent){const{body:f,...t}=JSON.parse(a.textContent);return Promise.resolve(new Response(f,t))}return _e(r,e)}const ct=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function lt(r){const e=[],n=[];let s=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${decodeURIComponent(r).split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/).map((f,t,i)=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(l)return e.push(l[1]),n.push(l[2]),"(?:/(.*))?";const h=t===i.length-1;return f&&"/"+f.split(/\[(.+?)\]/).map((m,S)=>{if(S%2){const A=ct.exec(m);if(!A)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,J,O]=A;return e.push(J),n.push(O),E?"(.*?)":"([^/]+?)"}return h&&m.includes(".")&&(s=!1),m.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${s?"/?":""}$`),names:e,types:n}}function ft(r,e,n,s){const a={};for(let f=0;f<e.length;f+=1){const t=e[f],i=n[f],l=r[f+1]||"";if(i){const h=s[i];if(!h)throw new Error(`Missing "${i}" param matcher`);if(!h(l))return}a[t]=l}return a}function ut(r,e,n){return Object.entries(e).map(([s,[a,f,t,i]])=>{const{pattern:l,names:h,types:m}=lt(s),S={id:s,exec:A=>{const E=l.exec(A);if(E)return ft(E,h,m,n)},errors:a.map(A=>r[A]),layouts:f.map(A=>r[A]),leaf:r[t],uses_server_data:!!i};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S})}function dt(r,e){return new te(r,e)}function pt(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&16&&(l.errors=t[4]),a!==(a=t[0][0])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),N(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function ht(r){let e,n,s;var a=r[0][0];function f(t){return{props:{data:t[1],$$slots:{default:[wt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&2&&(l.data=t[1]),i&1053&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][0])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),N(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function _t(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],errors:t[4]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&16&&(l.errors=t[4]),a!==(a=t[0][1])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),N(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function mt(r){let e,n,s;var a=r[0][1];function f(t){return{props:{data:t[2],$$slots:{default:[gt]},$$scope:{ctx:t}}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&4&&(l.data=t[2]),i&1033&&(l.$$scope={dirty:i,ctx:t}),a!==(a=t[0][1])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),N(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function gt(r){let e,n,s;var a=r[0][2];function f(t){return{props:{data:t[3]}}}return a&&(e=new a(f(r))),{c(){e&&q(e.$$.fragment),n=j()},l(t){e&&Q(e.$$.fragment,t),n=j()},m(t,i){e&&z(e,t,i),V(t,n,i),s=!0},p(t,i){const l={};if(i&8&&(l.data=t[3]),a!==(a=t[0][2])){if(e){H();const h=e;I(h.$$.fragment,1,0,()=>{B(h,1)}),F()}a?(e=new a(f(t)),q(e.$$.fragment),N(e.$$.fragment,1),z(e,n.parentNode,n)):e=null}else a&&e.$set(l)},i(t){s||(e&&N(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&D(n),e&&B(e,t)}}}function wt(r){let e,n,s,a;const f=[mt,_t],t=[];function i(l,h){return l[0][2]?0:1}return e=i(r),n=t[e]=f[e](r),{c(){n.c(),s=j()},l(l){n.l(l),s=j()},m(l,h){t[e].m(l,h),V(l,s,h),a=!0},p(l,h){let m=e;e=i(l),e===m?t[e].p(l,h):(H(),I(t[m],1,1,()=>{t[m]=null}),F(),n=t[e],n?n.p(l,h):(n=t[e]=f[e](l),n.c()),N(n,1),n.m(s.parentNode,s))},i(l){a||(N(n),a=!0)},o(l){I(n),a=!1},d(l){t[e].d(l),l&&D(s)}}}function Ne(r){let e,n=r[6]&&Ce(r);return{c(){e=Ye("div"),n&&n.c(),this.h()},l(s){e=Me(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=Xe(e);n&&n.l(a),a.forEach(D),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),K(e,"position","absolute"),K(e,"left","0"),K(e,"top","0"),K(e,"clip","rect(0 0 0 0)"),K(e,"clip-path","inset(50%)"),K(e,"overflow","hidden"),K(e,"white-space","nowrap"),K(e,"width","1px"),K(e,"height","1px")},m(s,a){V(s,e,a),n&&n.m(e,null)},p(s,a){s[6]?n?n.p(s,a):(n=Ce(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&D(e),n&&n.d()}}}function Ce(r){let e;return{c(){e=Ze(r[7])},l(n){e=Qe(n,r[7])},m(n,s){V(n,e,s)},p(n,s){s&128&&xe(e,n[7])},d(n){n&&D(e)}}}function bt(r){let e,n,s,a,f;const t=[ht,pt],i=[];function l(m,S){return m[0][1]?0:1}e=l(r),n=i[e]=t[e](r);let h=r[5]&&Ne(r);return{c(){n.c(),s=We(),h&&h.c(),a=j()},l(m){n.l(m),s=He(m),h&&h.l(m),a=j()},m(m,S){i[e].m(m,S),V(m,s,S),h&&h.m(m,S),V(m,a,S),f=!0},p(m,[S]){let A=e;e=l(m),e===A?i[e].p(m,S):(H(),I(i[A],1,1,()=>{i[A]=null}),F(),n=i[e],n?n.p(m,S):(n=i[e]=t[e](m),n.c()),N(n,1),n.m(s.parentNode,s)),m[5]?h?h.p(m,S):(h=Ne(m),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i(m){f||(N(n),f=!0)},o(m){I(n),f=!1},d(m){i[e].d(m),m&&D(s),h&&h.d(m),m&&D(a)}}}function vt(r,e,n){let{stores:s}=e,{page:a}=e,{components:f}=e,{data_0:t=null}=e,{data_1:i=null}=e,{data_2:l=null}=e,{errors:h}=e;Fe("__svelte__",s),Ge(s.page.notify);let m=!1,S=!1,A=null;return pe(()=>{const E=s.page.subscribe(()=>{m&&(n(6,S=!0),n(7,A=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,s=E.stores),"page"in E&&n(9,a=E.page),"components"in E&&n(0,f=E.components),"data_0"in E&&n(1,t=E.data_0),"data_1"in E&&n(2,i=E.data_1),"data_2"in E&&n(3,l=E.data_2),"errors"in E&&n(4,h=E.errors)},r.$$.update=()=>{r.$$.dirty&768&&s.page.set(a)},[f,t,i,l,h,m,S,A,s,a]}class yt extends Be{constructor(e){super(),Ke(this,e,vt,bt,Je,{stores:8,page:9,components:0,data_0:1,data_1:2,data_2:3,errors:4})}}const kt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),$t=function(r,e){return new URL(r,e).href},Te={},X=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(a=>{if(a=$t(a,s),a in Te)return;Te[a]=!0;const f=a.endsWith(".css"),t=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${t}`))return;const i=document.createElement("link");if(i.rel=f?"stylesheet":kt,f||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),f)return new Promise((l,h)=>{i.addEventListener("load",l),i.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>e())},Et={},ne=[()=>X(()=>import("./chunks/0-b8fe54fb.js"),["chunks\\0-b8fe54fb.js","components\\pages\\_layout.svelte-5f1f21e9.js","assets\\+layout-c589ff87.css","chunks\\index-485e134a.js","chunks\\stores-5ca93dd6.js"],import.meta.url),()=>X(()=>import("./chunks/1-494ecb7e.js"),["chunks\\1-494ecb7e.js","components\\error.svelte-4d7494f9.js","chunks\\index-485e134a.js","chunks\\stores-5ca93dd6.js"],import.meta.url),()=>X(()=>import("./chunks/2-13c4ebee.js"),["chunks\\2-13c4ebee.js","chunks\\_page-6af8351b.js","components\\pages\\_page.svelte-764c3771.js","assets\\+page-8bad58d3.css","chunks\\index-485e134a.js","chunks\\index-d06c316d.js"],import.meta.url),()=>X(()=>import("./chunks/3-1ce96025.js"),["chunks\\3-1ce96025.js","chunks\\_page-a19a1387.js","components\\pages\\about\\_page.svelte-ff947aa7.js","assets\\+page-9682aba9.css","chunks\\index-485e134a.js"],import.meta.url),()=>X(()=>import("./chunks/4-cc178548.js"),["chunks\\4-cc178548.js","components\\pages\\todos\\_page.svelte-4b5bcf7d.js","assets\\+page-5c3529b5.css","chunks\\index-485e134a.js","chunks\\singletons-da11499b.js"],import.meta.url)],Rt={"":[[1],[0],2],about:[[1],[0],3],todos:[[1],[0],4,1]},Ve="sveltekit:scroll",W="sveltekit:index",ue=ut(ne,Rt,Et),Lt=ne[0](),St=ne[1]();let Z={};try{Z=JSON.parse(sessionStorage[Ve])}catch{}function de(r){Z[r]=he()}function Ut({target:r,base:e,trailing_slash:n}){var Ee;const s=[],a={url:Ie({}),page:Ie({}),navigating:me(null),updated:st()},f={id:null,promise:null},t={before_navigate:[],after_navigate:[]};let i={branch:[],error:null,session_id:0,url:null},l=!1,h=!0,m=!1,S=1,A=null,E,J=!0,O=(Ee=history.state)==null?void 0:Ee[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const re=Z[O];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let ae=!1,se,ge;async function we(o,{noscroll:p=!1,replaceState:g=!1,keepfocus:c=!1,state:u={}},k){if(typeof o=="string"&&(o=new URL(o,Oe(document))),J)return oe({url:o,scroll:p?he():null,keepfocus:c,redirect_chain:k,details:{state:u,replaceState:g},accepted:()=>{},blocked:()=>{}});await Y(o)}async function be(o){const p=$e(o);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return f.promise=ke(p),f.id=p.id,f.promise}async function ve(o,p,g,c){var b,U,R;const u=$e(o),k=ge={};let _=u&&await ke(u);if(!_&&o.origin===location.origin&&o.pathname===location.pathname&&(_=await ee({status:404,error:new Error(`Not found: ${o.pathname}`),url:o,routeId:null})),!_)return await Y(o),!1;if(o=(u==null?void 0:u.url)||o,ge!==k)return!1;if(s.length=0,_.type==="redirect")if(p.length>10||p.includes(o.pathname))_=await ee({status:500,error:new Error("Redirect loop"),url:o,routeId:null});else return J?we(new URL(_.location,o).href,{},[...p,o.pathname]):await Y(new URL(_.location,location.href)),!1;else((U=(b=_.props)==null?void 0:b.page)==null?void 0:U.status)>=400&&await a.updated.check()&&await Y(o);if(m=!0,g&&g.details){const{details:L}=g,y=L.replaceState?0:1;L.state[W]=O+=y,history[L.replaceState?"replaceState":"pushState"](L.state,"",o)}if(l?(i=_.state,_.props.page&&(_.props.page.url=o),E.$set(_.props)):ye(_),g){const{scroll:L,keepfocus:y}=g;if(!y){const w=document.body,d=w.getAttribute("tabindex");w.tabIndex=-1,w.focus({preventScroll:!0}),setTimeout(()=>{var v;(v=getSelection())==null||v.removeAllRanges()}),d!==null?w.setAttribute("tabindex",d):w.removeAttribute("tabindex")}if(await Se(),h){const w=o.hash&&document.getElementById(o.hash.slice(1));L?scrollTo(L.x,L.y):w?w.scrollIntoView():scrollTo(0,0)}}else await Se();f.promise=null,f.id=null,h=!0,_.props.page&&(se=_.props.page);const $=_.state.branch.at(-1);J=((R=$==null?void 0:$.node.shared)==null?void 0:R.router)!==!1,c&&c(),m=!1}function ye(o){i=o.state;const p=document.querySelector("style[data-sveltekit]");if(p&&p.remove(),se=o.props.page,E=new yt({target:r,props:{...o.props,stores:a},hydrate:!0}),J){const g={from:null,to:new URL(location.href)};t.after_navigate.forEach(c=>c(g))}l=!0}async function x({url:o,params:p,branch:g,status:c,error:u,routeId:k,validation_errors:_}){const $=g.filter(Boolean),b={type:"loaded",state:{url:o,params:p,branch:g,error:u,session_id:S},props:{components:$.map(y=>y.node.component),errors:_}};let U={},R=!1;for(let y=0;y<$.length;y+=1)U={...U,...$[y].data},(R||!i.branch.some(w=>w===$[y]))&&(b.props[`data_${y}`]=U,R=!0);if(!i.url||o.href!==i.url.href||i.error!==u||R){b.props.page={error:u,params:p,routeId:k,status:c,url:o,data:U};const y=(w,d)=>{Object.defineProperty(b.props.page,w,{get:()=>{throw new Error(`$page.${w} has been replaced by $page.url.${d}`)}})};y("origin","origin"),y("path","pathname"),y("query","searchParams")}return b}async function ie({node:o,parent:p,url:g,params:c,routeId:u,server_data:k}){var L,y;const _={params:new Set,url:!1,dependencies:new Set,parent:!1};function $(...w){for(const d of w){const{href:v}=new URL(d,g);_.dependencies.add(v)}}let b=null;o.server&&(_.dependencies.add(g.href),_.url=!0);const U={};for(const w in c)Object.defineProperty(U,w,{get(){return _.params.add(w),c[w]},enumerable:!0});const R=new rt(g);if((L=o.shared)!=null&&L.load){const w={routeId:u,params:U,data:k,get url(){return _.url=!0,R},async fetch(d,v){let P;typeof d=="string"?P=d:(P=d.url,v={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:d.headers,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...v});const C=new URL(P,g).href;return $(C),l?_e(C,v):ot(P,v)},setHeaders:()=>{},depends:$,get parent(){return _.parent=!0,p},get props(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},get session(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},get stuff(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")}};b=(y=await o.shared.load.call(null,w))!=null?y:null}return{node:o,data:b||k,uses:_}}async function ke({id:o,url:p,params:g,route:c}){if(f.id===o&&f.promise)return f.promise;const{errors:u,layouts:k,leaf:_}=c,$=i.url&&{url:o!==i.url.pathname+i.url.search,params:Object.keys(g).filter(d=>i.params[d]!==g[d])};[...u,...k,_].forEach(d=>d==null?void 0:d().catch(()=>{}));const b=[...k,_],U=[];for(let d=0;d<b.length;d++)if(!b[d])U.push(!1);else{const v=i.branch[d],P=!v||$.url&&v.uses.url||$.params.some(C=>v.uses.params.has(C))||Array.from(v.uses.dependencies).some(C=>s.some(M=>M(C)))||v.uses.parent&&U.includes(!0);U.push(P)}let R=null;if(c.uses_server_data){try{const d=await _e(`${p.pathname}${p.pathname.endsWith("/")?"":"/"}__data.json${p.search}`);if(R=await d.json(),!d.ok)throw R}catch{throw new Error("TODO render fallback error page")}if(R.type==="redirect")return R}const L=R==null?void 0:R.nodes,y=b.map(async(d,v)=>Promise.resolve().then(async()=>{var G;if(!d)return;const P=await d(),C=i.branch[v];if(U[v]||!C||P!==C.node){const T=L==null?void 0:L[v];if(T!=null&&T.status)throw dt(T.status,T.message);if(T!=null&&T.error)throw T.error;return await ie({node:P,url:p,params:g,routeId:c.id,parent:async()=>{var Le;const Re={};for(let ce=0;ce<v;ce+=1)Object.assign(Re,(Le=await y[ce])==null?void 0:Le.data);return Re},server_data:(G=T==null?void 0:T.data)!=null?G:null})}else return C}));for(const d of y)d.catch(()=>{});const w=[];for(let d=0;d<b.length;d+=1)if(b[d])try{w.push(await y[d])}catch(v){const P=v;if(P instanceof Ue)return{type:"redirect",location:P.location};const C=v instanceof te?v.status:500;for(;d--;)if(u[d]){let M,G=d;for(;!w[G];)G-=1;try{return M={node:await u[d](),data:{},uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}},await x({url:p,params:g,branch:w.slice(0,G+1).concat(M),status:C,error:P,routeId:c.id})}catch{continue}}return await ee({status:C,error:P,url:p,routeId:c.id})}else w.push(void 0);return await x({url:p,params:g,branch:w,status:200,error:null,routeId:c.id})}async function ee({status:o,error:p,url:g,routeId:c}){const u={},k=await ie({node:await Lt,url:g,params:u,routeId:c,parent:()=>Promise.resolve({}),server_data:null}),_={node:await St,data:null,uses:{params:new Set,url:!1,dependencies:new Set,parent:!1}};return await x({url:g,params:u,branch:[k,_],status:o,error:p,routeId:c})}function $e(o){if(o.origin!==location.origin||!o.pathname.startsWith(e))return;const p=decodeURI(o.pathname.slice(e.length)||"/");for(const g of ue){const c=g.exec(p);if(c){const u=new URL(o.origin+tt(o.pathname,n)+o.search+o.hash);return{id:u.pathname+u.search,route:g,params:nt(c),url:u}}}}async function oe({url:o,scroll:p,keepfocus:g,redirect_chain:c,details:u,accepted:k,blocked:_}){const $=i.url;let b=!1;const U={from:$,to:o,cancel:()=>b=!0};if(t.before_navigate.forEach(R=>R(U)),b){_();return}de(O),k(),l&&a.navigating.set({from:i.url,to:o}),await ve(o,c,{scroll:p,keepfocus:g,details:u},()=>{const R={from:$,to:o};t.after_navigate.forEach(L=>L(R)),a.navigating.set(null)})}function Y(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{pe(()=>(t.after_navigate.push(o),()=>{const p=t.after_navigate.indexOf(o);t.after_navigate.splice(p,1)}))},before_navigate:o=>{pe(()=>(t.before_navigate.push(o),()=>{const p=t.before_navigate.indexOf(o);t.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(m||!l)&&(h=!1)},goto:(o,p={})=>we(o,p,[]),invalidate:o=>{if(o===void 0){for(const p of i.branch)p==null||p.uses.dependencies.add("");s.push(()=>!0)}else if(typeof o=="function")s.push(o);else{const{href:p}=new URL(o,location.href);s.push(g=>g===p)}return A||(A=Promise.resolve().then(async()=>{await ve(new URL(location.href),[]),A=null})),A},prefetch:async o=>{const p=new URL(o,Oe(document));await be(p)},prefetch_routes:async o=>{const g=(o?ue.filter(c=>o.some(u=>c.exec(u))):ue).map(c=>Promise.all([...c.layouts,c.leaf].map(u=>u==null?void 0:u())));await Promise.all(g)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",c=>{let u=!1;const k={from:i.url,to:null,cancel:()=>u=!0};t.before_navigate.forEach(_=>_(k)),u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(O);try{sessionStorage[Ve]=JSON.stringify(Z)}catch{}}});const o=c=>{const u=Pe(c);u&&u.href&&u.hasAttribute("sveltekit:prefetch")&&be(je(u))};let p;const g=c=>{clearTimeout(p),p=setTimeout(()=>{var u;(u=c.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",g),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",c=>{if(!J||c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const u=Pe(c);if(!u||!u.href)return;const k=u instanceof SVGAElement,_=je(u);if(!k&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||$.includes("external")||u.hasAttribute("sveltekit:reload")||(k?u.target.baseVal:u.target))return;const[b,U]=_.href.split("#");if(U!==void 0&&b===location.href.split("#")[0]){ae=!0,de(O),a.page.set({...se,url:_}),a.page.notify();return}oe({url:_,scroll:u.hasAttribute("sveltekit:noscroll")?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault()})}),addEventListener("popstate",c=>{if(c.state&&J){if(c.state[W]===O)return;oe({url:new URL(location.href),scroll:Z[c.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=c.state[W]},blocked:()=>{const u=O-c.state[W];history.go(u)}})}}),addEventListener("hashchange",()=>{ae&&(ae=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&a.navigating.set(null)})},_hydrate:async({status:o,error:p,node_ids:g,params:c,routeId:u})=>{const k=new URL(location.href);let _;try{const $=(L,y)=>{const w=document.querySelector(`script[sveltekit\\:data-type="${L}"]`);return w!=null&&w.textContent?JSON.parse(w.textContent):y},b=$("server_data",[]),U=$("validation_errors",void 0),R=g.map(async(L,y)=>{var w;return ie({node:await ne[L](),url:k,params:c,routeId:u,parent:async()=>{const d={};for(let v=0;v<y;v+=1)Object.assign(d,(await R[v]).data);return d},server_data:(w=b[y])!=null?w:null})});_=await x({url:k,params:c,branch:await Promise.all(R),status:o,error:p!=null&&p.__is_http_error?new te(p.status,p.message):p,validation_errors:U,routeId:u})}catch($){const b=$;if(b instanceof Ue){await Y(new URL($.location,location.href));return}_=await ee({status:b instanceof te?b.status:500,error:b,url:k,routeId:u})}ye(_)}}}function It(r){}async function Nt({paths:r,target:e,route:n,spa:s,trailing_slash:a,hydrate:f}){const t=Ut({target:e,base:r.base,trailing_slash:a});et({client:t}),at(r),f&&await t._hydrate(f),n&&(s&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{It as set_public_env,Nt as start};