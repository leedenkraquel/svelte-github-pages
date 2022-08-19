import{N as z,O as ee,S as X,i as Y,s as Z,l as v,C as A,a as R,r as G,m as g,n as _,D as H,h as f,c as $,u as j,p as a,q as Q,b as U,G as r,P as W,v as F,B as L,Q as te,H as se,w as re,R as oe,x as ae,E as ne,y as le,f as ie,t as ce,z as de}from"../../chunks/index-485e134a.js";import{w as ue}from"../../chunks/index-d06c316d.js";function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,s,t,o){if(typeof t=="number"||J(t)){const n=o-t,l=(t-s)/(e.dt||1/60),c=e.opts.stiffness*n,i=e.opts.damping*l,h=(c-i)*e.inv_mass,u=(l+h)*e.dt;return Math.abs(u)<e.opts.precision&&Math.abs(n)<e.opts.precision?o:(e.settled=!1,J(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((n,l)=>V(e,s[l],t[l],o[l]));if(typeof t=="object"){const n={};for(const l in t)n[l]=V(e,s[l],t[l],o[l]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=ue(e),{stiffness:o=.15,damping:n=.8,precision:l=.01}=s;let c,i,h,u=e,S=e,T=1,M=0,E=!1;function O(m,p={}){S=m;const k=h={};if(e==null||p.hard||y.stiffness>=1&&y.damping>=1)return E=!0,c=z(),u=m,t.set(e=S),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;M=1/(w*60),T=0}return i||(c=z(),E=!1,i=ee(w=>{if(E)return E=!1,i=null,!1;T=Math.min(T+M,1);const x={inv_mass:T,opts:y,settled:!0,dt:(w-c)*60/1e3},b=V(x,u,e,S);return c=w,u=e,t.set(e=b),x.settled&&(i=null),!x.settled})),new Promise(w=>{i.promise.then(()=>{k===h&&w()})})}const y={set:O,update:(m,p)=>O(m(S,e),p),subscribe:t.subscribe,stiffness:o,damping:n,precision:l};return y}function pe(e){let s,t,o,n,l,c,i,h,u=Math.floor(e[1]+1)+"",S,T,M,E=Math.floor(e[1])+"",O,y,m,p,k,w,x;return{c(){s=v("div"),t=v("button"),o=A("svg"),n=A("path"),l=R(),c=v("div"),i=v("div"),h=v("strong"),S=G(u),T=R(),M=v("strong"),O=G(E),y=R(),m=v("button"),p=A("svg"),k=A("path"),this.h()},l(b){s=g(b,"DIV",{class:!0});var d=_(s);t=g(d,"BUTTON",{"aria-label":!0,class:!0});var C=_(t);o=H(C,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=_(o);n=H(B,"path",{d:!0,class:!0}),_(n).forEach(f),B.forEach(f),C.forEach(f),l=$(d),c=g(d,"DIV",{class:!0});var N=_(c);i=g(N,"DIV",{class:!0,style:!0});var D=_(i);h=g(D,"STRONG",{class:!0,"aria-hidden":!0});var I=_(h);S=j(I,u),I.forEach(f),T=$(D),M=g(D,"STRONG",{class:!0});var P=_(M);O=j(P,E),P.forEach(f),D.forEach(f),N.forEach(f),y=$(d),m=g(d,"BUTTON",{"aria-label":!0,class:!0});var q=_(m);p=H(q,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=_(p);k=H(K,"path",{d:!0,class:!0}),_(k).forEach(f),K.forEach(f),q.forEach(f),d.forEach(f),this.h()},h(){a(n,"d","M0,0.5 L1,0.5"),a(n,"class","svelte-sx9eo4"),a(o,"aria-hidden","true"),a(o,"viewBox","0 0 1 1"),a(o,"class","svelte-sx9eo4"),a(t,"aria-label","Decrease the counter by one"),a(t,"class","svelte-sx9eo4"),a(h,"class","hidden svelte-sx9eo4"),a(h,"aria-hidden","true"),a(M,"class","svelte-sx9eo4"),a(i,"class","counter-digits svelte-sx9eo4"),Q(i,"transform","translate(0, "+100*e[2]+"%)"),a(c,"class","counter-viewport svelte-sx9eo4"),a(k,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),a(k,"class","svelte-sx9eo4"),a(p,"aria-hidden","true"),a(p,"viewBox","0 0 1 1"),a(p,"class","svelte-sx9eo4"),a(m,"aria-label","Increase the counter by one"),a(m,"class","svelte-sx9eo4"),a(s,"class","counter svelte-sx9eo4")},m(b,d){U(b,s,d),r(s,t),r(t,o),r(o,n),r(s,l),r(s,c),r(c,i),r(i,h),r(h,S),r(i,T),r(i,M),r(M,O),r(s,y),r(s,m),r(m,p),r(p,k),w||(x=[W(t,"click",e[4]),W(m,"click",e[5])],w=!0)},p(b,[d]){d&2&&u!==(u=Math.floor(b[1]+1)+"")&&F(S,u),d&2&&E!==(E=Math.floor(b[1])+"")&&F(O,E),d&4&&Q(i,"transform","translate(0, "+100*b[2]+"%)")},i:L,o:L,d(b){b&&f(s),w=!1,te(x)}}}function he(e,s){return(e%s+s)%s}function me(e,s,t){let o,n,l=0;const c=fe();se(e,c,u=>t(1,n=u));const i=()=>t(0,l-=1),h=()=>t(0,l+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(l),e.$$.dirty&2&&t(2,o=he(n,1))},[l,n,o,c,i,h]}class _e extends X{constructor(s){super(),Y(this,s,me,pe,Z,{})}}function ve(e){let s,t,o,n,l,c,i,h,u,S,T,M,E,O,y,m,p,k,w,x,b;return x=new _e({}),{c(){s=v("meta"),t=R(),o=v("section"),n=v("h1"),l=v("span"),c=v("picture"),i=v("source"),h=R(),u=v("img"),T=G(`

		to your new`),M=v("br"),E=G("SvelteKit app"),O=R(),y=v("h2"),m=G("try editing "),p=v("strong"),k=G("src/routes/index.svelte"),w=R(),re(x.$$.fragment),this.h()},l(d){const C=oe('[data-svelte="svelte-t32ptj"]',document.head);s=g(C,"META",{name:!0,content:!0}),C.forEach(f),t=$(d),o=g(d,"SECTION",{class:!0});var B=_(o);n=g(B,"H1",{class:!0});var N=_(n);l=g(N,"SPAN",{class:!0});var D=_(l);c=g(D,"PICTURE",{});var I=_(c);i=g(I,"SOURCE",{srcset:!0,type:!0}),h=$(I),u=g(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(f),D.forEach(f),T=j(N,`

		to your new`),M=g(N,"BR",{}),E=j(N,"SvelteKit app"),N.forEach(f),O=$(B),y=g(B,"H2",{});var P=_(y);m=j(P,"try editing "),p=g(P,"STRONG",{});var q=_(p);k=j(q,"src/routes/index.svelte"),q.forEach(f),P.forEach(f),w=$(B),ae(x.$$.fragment,B),B.forEach(f),this.h()},h(){document.title="Home",a(s,"name","description"),a(s,"content","Svelte demo app"),a(i,"srcset","svelte-welcome.webp"),a(i,"type","image/webp"),ne(u.src,S="svelte-welcome.png")||a(u,"src",S),a(u,"alt","Welcome"),a(u,"class","svelte-1egtvge"),a(l,"class","welcome svelte-1egtvge"),a(n,"class","svelte-1egtvge"),a(o,"class","svelte-1egtvge")},m(d,C){r(document.head,s),U(d,t,C),U(d,o,C),r(o,n),r(n,l),r(l,c),r(c,i),r(c,h),r(c,u),r(n,T),r(n,M),r(n,E),r(o,O),r(o,y),r(y,m),r(y,p),r(p,k),r(o,w),le(x,o,null),b=!0},p:L,i(d){b||(ie(x.$$.fragment,d),b=!0)},o(d){ce(x.$$.fragment,d),b=!1},d(d){f(s),d&&f(t),d&&f(o),de(x)}}}class ye extends X{constructor(s){super(),Y(this,s,null,ve,Z,{})}}export{ye as default};
