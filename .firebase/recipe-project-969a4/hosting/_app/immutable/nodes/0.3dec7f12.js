import{s as Te,e as Ze,v as qe,f as He,d as f,g as K,u as Ye,h as ze,i as We,n as Ue}from"../chunks/scheduler.50dc1d72.js";import{S as Fe,i as Je,d as H,v as Ke,j as d,s as G,o as se,k as h,l as g,z as oe,g as i,c as $,p as ie,m as l,a as I,A as u,B as _e,f as Qe,t as Xe,q as et}from"../chunks/index.df132f49.js";import{g as tt,d as at,G as lt,m as st,a as fe,u as de,b as Be,s as Ae,c as Ge}from"../chunks/firebase.3e9f43ea.js";async function $e(s){const e=tt(at,`users/${s.uid}`),t={uid:s.uid,name:s.displayName??"annonymous",email:s.email,photoURL:s.photoURL,lastestSignIn:lt()};try{await st(e,t,{merge:!0}),console.log("Successfully writing user to the database!")}catch(o){console.error("Error writing to the database:",o)}}const m="src/routes/+layout.svelte";function he(s){var p;let e,t=((p=s[0])==null?void 0:p.displayName)+"",o;const v={c:function(){e=d("h1"),o=se(t),this.h()},l:function(n){e=h(n,"H1",{class:!0});var _=g(e);o=ie(_,t),_.forEach(i),this.h()},h:function(){l(e,"class","text-right text-base lg:text-lg my-auto mr-2 md:mr-3 lg:mr-4"),f(e,m,28,12,721)},m:function(n,_){I(n,e,_),u(e,o)},p:function(n,_){var r;_&1&&t!==(t=((r=n[0])==null?void 0:r.displayName)+"")&&et(o,t)},d:function(n){n&&i(e)}};return H("SvelteRegisterBlock",{block:v,id:he.name,type:"if",source:"(25:8) {#if $user}",ctx:s}),v}function Ve(s){let e,t;const o={c:function(){e=d("img"),this.h()},l:function(p){e=h(p,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){l(e,"class","rounded-full opacity-80"),K(e.src,t="/icons/user.png")||l(e,"src",t),l(e,"alt","Profile"),f(e,m,41,20,1368)},m:function(p,a){I(p,e,a)},p:Ue,d:function(p){p&&i(e)}};return H("SvelteRegisterBlock",{block:o,id:Ve.name,type:"else",source:"(38:16) {:else}",ctx:s}),o}function Me(s){let e,t,o;const v={c:function(){e=d("img"),this.h()},l:function(a){e=h(a,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){var a;l(e,"class","rounded-full"),K(e.src,t=s[0].photoURL)||l(e,"src",t),l(e,"alt",o=(a=s[0].displayName)==null?void 0:a.substring(0,1)),f(e,m,35,20,1141)},m:function(a,n){I(a,e,n)},p:function(a,n){var _;n&1&&!K(e.src,t=a[0].photoURL)&&l(e,"src",t),n&1&&o!==(o=(_=a[0].displayName)==null?void 0:_.substring(0,1))&&l(e,"alt",o)},d:function(a){a&&i(e)}};return H("SvelteRegisterBlock",{block:v,id:Me.name,type:"if",source:"(32:16) {#if $user}",ctx:s}),v}function Oe(s){let e,t,o="Sign in",v,p;const a={c:function(){e=d("li"),t=d("button"),t.textContent=o,this.h()},l:function(_){e=h(_,"LI",{});var r=g(e);t=h(r,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(t)!=="svelte-1akmxch"&&(t.textContent=o),r.forEach(i),this.h()},h:function(){l(t,"class","text-base"),f(t,m,74,24,2582),f(e,m,73,20,2553)},m:function(_,r){I(_,e,r),u(e,t),v||(p=_e(t,"click",s[1],!1,!1,!1,!1),v=!0)},p:Ue,d:function(_){_&&i(e),v=!1,p()}};return H("SvelteRegisterBlock",{block:a,id:Oe.name,type:"else",source:"(70:16) {:else}",ctx:s}),a}function je(s){let e,t,o,v,p,a,n,_="Your favorite",r,x,y,O="Sign out",L,j;const S={c:function(){e=d("li"),t=d("a"),o=se("Your menu"),p=G(),a=d("li"),n=d("a"),n.textContent=_,r=G(),x=d("li"),y=d("button"),y.textContent=O,this.h()},l:function(b){e=h(b,"LI",{});var w=g(e);t=h(w,"A",{href:!0,class:!0});var P=g(t);o=ie(P,"Your menu"),P.forEach(i),w.forEach(i),p=$(b),a=h(b,"LI",{});var Y=g(a);n=h(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),oe(n)!=="svelte-ef7hum"&&(n.textContent=_),Y.forEach(i),r=$(b),x=h(b,"LI",{});var z=g(x);y=h(z,"BUTTON",{class:!0,"data-svelte-h":!0}),oe(y)!=="svelte-u8jr27"&&(y.textContent=O),z.forEach(i),this.h()},h:function(){l(t,"href",v="/user/"+s[0].uid),l(t,"class","text-base"),f(t,m,55,24,1889),f(e,m,54,20,1860),l(n,"href","/user/your-favorite"),l(n,"class","text-base"),f(n,m,60,24,2078),f(a,m,59,20,2049),l(y,"class","text-base"),f(y,m,65,24,2273),f(x,m,64,20,2244)},m:function(b,w){I(b,e,w),u(e,t),u(t,o),I(b,p,w),I(b,a,w),u(a,n),I(b,r,w),I(b,x,w),u(x,y),L||(j=_e(y,"click",s[4],!1,!1,!1,!1),L=!0)},p:function(b,w){w&1&&v!==(v="/user/"+b[0].uid)&&l(t,"href",v)},d:function(b){b&&(i(e),i(p),i(a),i(r),i(x)),L=!1,j()}};return H("SvelteRegisterBlock",{block:S,id:je.name,type:"if",source:"(51:16) {#if $user}",ctx:s}),S}function me(s){let e,t,o,v="Recipe",p,a,n,_,r,x,y,O,L,j,S,R,b,w,P,Y,z,W,D,T,U,pe,ne,Z,V,ve,re,q,M,be,F,ce,ge,k=s[0]&&he(s);function ye(A,c){return A[0]?Me:Ve}let Q=ye(s),N=Q(s);function ke(A,c){return A[0]?je:Oe}let X=ke(s),B=X(s);const ue=s[3].default,C=Ze(ue,s,s[2],null),Ee={c:function(){e=d("div"),t=d("div"),o=d("a"),o.textContent=v,p=G(),a=d("div"),k&&k.c(),n=G(),_=d("div"),r=d("label"),N.c(),x=G(),y=d("ul"),B.c(),O=G(),L=d("div"),C&&C.c(),j=G(),S=d("footer"),R=d("div"),b=d("p"),w=se("created by NextZtepS "),P=d("br"),Y=se("Developer, Harvey Mudd College '26"),z=G(),W=d("div"),D=d("div"),T=d("a"),U=d("img"),ne=G(),Z=d("a"),V=d("img"),re=G(),q=d("a"),M=d("img"),this.h()},l:function(c){e=h(c,"DIV",{class:!0});var E=g(e);t=h(E,"DIV",{class:!0});var we=g(t);o=h(we,"A",{href:!0,class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-hy37u"&&(o.textContent=v),we.forEach(i),p=$(E),a=h(E,"DIV",{class:!0});var ee=g(a);k&&k.l(ee),n=$(ee),_=h(ee,"DIV",{class:!0});var te=g(_);r=h(te,"LABEL",{tabindex:!0,class:!0});var Ie=g(r);N.l(Ie),Ie.forEach(i),x=$(te),y=h(te,"UL",{tabindex:!0,class:!0});var Se=g(y);B.l(Se),Se.forEach(i),te.forEach(i),ee.forEach(i),E.forEach(i),O=$(c),L=h(c,"DIV",{class:!0});var Ce=g(L);C&&C.l(Ce),Ce.forEach(i),j=$(c),S=h(c,"FOOTER",{class:!0});var ae=g(S);R=h(ae,"DIV",{});var Le=g(R);b=h(Le,"P",{class:!0});var le=g(b);w=ie(le,"created by NextZtepS "),P=h(le,"BR",{}),Y=ie(le,"Developer, Harvey Mudd College '26"),le.forEach(i),Le.forEach(i),z=$(ae),W=h(ae,"DIV",{});var Re=g(W);D=h(Re,"DIV",{class:!0});var J=g(D);T=h(J,"A",{href:!0});var xe=g(T);U=h(xe,"IMG",{alt:!0,src:!0,width:!0}),xe.forEach(i),ne=$(J),Z=h(J,"A",{href:!0});var De=g(Z);V=h(De,"IMG",{alt:!0,src:!0,width:!0}),De.forEach(i),re=$(J),q=h(J,"A",{href:!0});var Ne=g(q);M=h(Ne,"IMG",{alt:!0,src:!0,width:!0}),Ne.forEach(i),J.forEach(i),Re.forEach(i),ae.forEach(i),this.h()},h:function(){l(o,"href","/"),l(o,"class","btn btn-ghost normal-case text-2xl lg:text-3xl"),f(o,m,23,8,547),l(t,"class","navbar-start"),f(t,m,22,4,512),l(r,"tabindex","0"),l(r,"class","btn btn-ghost btn-circle avatar top-1"),f(r,m,33,12,1026),l(y,"tabindex","0"),l(y,"class","menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-auto"),f(y,m,49,12,1658),l(_,"class","dropdown dropdown-end"),f(_,m,30,8,842),l(a,"class","navbar-end"),f(a,m,26,4,664),l(e,"class","navbar bg-primary p-8"),f(e,m,21,0,472),l(L,"class","p-2 sm:px-4 sm:py-6 lg:px-6 lg:py-8"),f(L,m,84,0,2807),f(P,m,91,33,3027),l(b,"class","font-bold"),f(b,m,90,8,2972),f(R,m,89,4,2958),l(U,"alt","email"),K(U.src,pe="/icons/email.png")||l(U,"src",pe),l(U,"width","32"),f(U,m,97,16,3224),l(T,"href","mailto:natdanaiongarjvaja@gmail.com"),f(T,m,96,12,3161),l(V,"alt","github"),K(V.src,ve="/icons/github.png")||l(V,"src",ve),l(V,"width","32"),f(V,m,100,16,3363),l(Z,"href","https://github.com/NextZtepS"),f(Z,m,99,12,3307),l(M,"alt","github"),K(M.src,be="/icons/user.png")||l(M,"src",be),l(M,"width","32"),f(M,m,103,16,3504),l(q,"href","https://github.com/NextZtepS"),f(q,m,102,12,3448),l(D,"class","grid grid-flow-col gap-4"),f(D,m,95,8,3110),f(W,m,94,4,3096),l(S,"class","footer footer-center p-8 bg-secondary text-primary-content"),f(S,m,88,0,2878)},m:function(c,E){I(c,e,E),u(e,t),u(t,o),u(e,p),u(e,a),k&&k.m(a,null),u(a,n),u(a,_),u(_,r),N.m(r,null),u(_,x),u(_,y),B.m(y,null),I(c,O,E),I(c,L,E),C&&C.m(L,null),I(c,j,E),I(c,S,E),u(S,R),u(R,b),u(b,w),u(b,P),u(b,Y),u(S,z),u(S,W),u(W,D),u(D,T),u(T,U),u(D,ne),u(D,Z),u(Z,V),u(D,re),u(D,q),u(q,M),F=!0,ce||(ge=_e(o,"click",Pe,!1,!1,!1,!1),ce=!0)},p:function(c,[E]){c[0]?k?k.p(c,E):(k=he(c),k.c(),k.m(a,n)):k&&(k.d(1),k=null),Q===(Q=ye(c))&&N?N.p(c,E):(N.d(1),N=Q(c),N&&(N.c(),N.m(r,null))),X===(X=ke(c))&&B?B.p(c,E):(B.d(1),B=X(c),B&&(B.c(),B.m(y,null))),C&&C.p&&(!F||E&4)&&Ye(C,ue,c,c[2],F?We(ue,c[2],E,null):ze(c[2]),null)},i:function(c){F||(Qe(C,c),F=!0)},o:function(c){Xe(C,c),F=!1},d:function(c){c&&(i(e),i(O),i(L),i(j),i(S)),k&&k.d(),N.d(),B.d(),C&&C.d(c),ce=!1,ge()}};return H("SvelteRegisterBlock",{block:Ee,id:me.name,type:"component",source:"",ctx:s}),Ee}function Pe(){location.href="/"}function ot(s,e,t){let o;qe(de,"user"),He(s,de,r=>t(0,o=r));let{$$slots:v={},$$scope:p}=e;Ke("Layout",v,["default"]);async function a(){const r=new Be;await Ae(fe,r)}const n=[];Object.keys(e).forEach(r=>{!~n.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Layout> was created with unknown prop '${r}'`)});const _=()=>Ge(fe);return s.$$set=r=>{"$$scope"in r&&t(2,p=r.$$scope)},s.$capture_state=()=>({auth:fe,user:de,writeUser:$e,GoogleAuthProvider:Be,signInWithPopup:Ae,signOut:Ge,signInWithGoogle:a,forceReload:Pe,$user:o}),s.$$.update=()=>{s.$$.dirty&1&&o&&$e(o)},[o,a,p,v,_]}class ct extends Fe{constructor(e){super(e),Je(this,e,ot,me,Te,{}),H("SvelteRegisterComponent",{component:this,tagName:"Layout",options:e,id:me.name})}}export{ct as component};
