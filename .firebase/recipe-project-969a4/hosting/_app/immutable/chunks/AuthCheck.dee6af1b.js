import{s as D,v as E,f as N,e as O,d as m,n as h,u as q,h as z,i as H}from"./scheduler.50dc1d72.js";import{S as I,i as P,d,v as V,e as w,a as R,r as Y,t as y,b as F,f as A,g as S,j as v,s as G,k as b,l as J,z as x,c as K,m as _,A as k}from"./index.df132f49.js";import{u as g}from"./firebase.3e9f43ea.js";const C="src/lib/components/utils/AuthCheck.svelte";function B(r){let e,t,o="You must be signed in to access this page!",l,s,n="Return to Homepage";const c={c:function(){e=v("div"),t=v("p"),t.textContent=o,l=G(),s=v("a"),s.textContent=n,this.h()},l:function(i){e=b(i,"DIV",{class:!0});var a=J(e);t=b(a,"P",{class:!0,"data-svelte-h":!0}),x(t)!=="svelte-1ch15x6"&&(t.textContent=o),l=K(a),s=b(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),x(s)!=="svelte-17eifp0"&&(s.textContent=n),a.forEach(S),this.h()},h:function(){_(t,"class","text-error text-xl m-6"),m(t,C,8,8,150),_(s,"class","btn btn-error mb-6"),_(s,"href","/"),m(s,C,11,8,261),_(e,"class","alert-error text-center"),m(e,C,7,4,104)},m:function(i,a){R(i,e,a),k(e,t),k(e,l),k(e,s)},p:h,i:h,o:h,d:function(i){i&&S(e)}};return d("SvelteRegisterBlock",{block:c,id:B.name,type:"else",source:"(6:0) {:else}",ctx:r}),c}function j(r){let e;const t=r[2].default,o=O(t,r,r[1],null),l={c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,c){o&&o.m(n,c),e=!0},p:function(n,c){o&&o.p&&(!e||c&2)&&q(o,t,n,n[1],e?H(t,n[1],c,null):z(n[1]),null)},i:function(n){e||(A(o,n),e=!0)},o:function(n){y(o,n),e=!1},d:function(n){o&&o.d(n)}};return d("SvelteRegisterBlock",{block:l,id:j.name,type:"if",source:"(4:0) {#if $user}",ctx:r}),l}function $(r){let e,t,o,l;const s=[j,B],n=[];function c(i,a){return i[0]?0:1}e=c(r),t=n[e]=s[e](r);const u={c:function(){t.c(),o=w()},l:function(a){t.l(a),o=w()},m:function(a,f){n[e].m(a,f),R(a,o,f),l=!0},p:function(a,[f]){let p=e;e=c(a),e===p?n[e].p(a,f):(Y(),y(n[p],1,1,()=>{n[p]=null}),F(),t=n[e],t?t.p(a,f):(t=n[e]=s[e](a),t.c()),A(t,1),t.m(o.parentNode,o))},i:function(a){l||(A(t),l=!0)},o:function(a){y(t),l=!1},d:function(a){a&&S(o),n[e].d(a)}};return d("SvelteRegisterBlock",{block:u,id:$.name,type:"component",source:"",ctx:r}),u}function L(r,e,t){let o;E(g,"user"),N(r,g,c=>t(0,o=c));let{$$slots:l={},$$scope:s}=e;V("AuthCheck",l,["default"]);const n=[];return Object.keys(e).forEach(c=>{!~n.indexOf(c)&&c.slice(0,2)!=="$$"&&c!=="slot"&&console.warn(`<AuthCheck> was created with unknown prop '${c}'`)}),r.$$set=c=>{"$$scope"in c&&t(1,s=c.$$scope)},r.$capture_state=()=>({user:g,$user:o}),[o,s,l]}class U extends I{constructor(e){super(e),P(this,e,L,$,D,{}),d("SvelteRegisterComponent",{component:this,tagName:"AuthCheck",options:e,id:$.name})}}export{U as A};
