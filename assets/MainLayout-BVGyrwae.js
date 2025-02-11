import{c as L,a as f,h,r as z,i as K,o as E,g as H,b as O,n as X,d as D,l as F,e as Y,f as q,w as T,j as N,p as G,k as Z,m as P,q as ee,s as te,t as $,u as oe,v as ne,x as C,y as le}from"./index-D27osoYD.js";import{h as M,a as ie,g as re,c as U,b as ae}from"./dom-BmTOaUjf.js";const se=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:t.value},M(i.default))}}),ue=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:t.value,role:"toolbar"},M(i.default))}});function ce(){const e=z(!K.value);return e.value===!1&&E(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver<"u",A=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},W=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let t=null,o,n={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:a,offsetHeight:r}=o;(a!==n.width||r!==n.height)&&(n={width:a,height:r},i("resize",n))}}const{proxy:m}=H();if(m.trigger=u,J===!0){let a;const r=p=>{o=m.$el.parentNode,o?(a=new ResizeObserver(u),a.observe(o),c()):p!==!0&&D(()=>{r(!0)})};return E(()=>{r()}),O(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():o&&a.unobserve(o))}),X}else{let a=function(){t!==null&&(clearTimeout(t),t=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",u,F.passive),v=void 0)},r=function(){a(),o&&o.contentDocument&&(v=o.contentDocument.defaultView,v.addEventListener("resize",u,F.passive),c())};const{isHydrated:p}=ce();let v;return E(()=>{D(()=>{o=m.$el,o&&r()})}),O(a),()=>{if(p.value===!0)return h("object",{class:"q--avoid-card-border",style:A.style,tabindex:-1,type:"text/html",data:A.url,"aria-hidden":"true",onLoad:r})}}}}),de=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=H(),n=Y(N,q);if(n===q)return console.error("QHeader needs to be child of QLayout"),q;const u=z(parseInt(e.heightHint,10)),c=z(!0),m=f(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||o.platform.is.ios&&n.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const l=u.value-n.scroll.value.position;return l>0?l:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),p=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),v=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const l=n.rows.value.top,b={};return l[0]==="l"&&n.left.space===!0&&(b[o.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),l[2]==="r"&&n.right.space===!0&&(b[o.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),b});function d(l,b){n.update("header",l,b)}function y(l,b){l.value!==b&&(l.value=b)}function R({height:l}){y(u,l),d("size",l)}function V(l){p.value===!0&&y(c,!0),t("focusin",l)}T(()=>e.modelValue,l=>{d("space",l),y(c,!0),n.animate()}),T(a,l=>{d("offset",l)}),T(()=>e.reveal,l=>{l===!1&&y(c,e.modelValue)}),T(c,l=>{n.animate(),t("reveal",l)}),T(n.scroll,l=>{e.reveal===!0&&y(c,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const _={};return n.instances.header=_,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",a.value),O(()=>{n.instances.header===_&&(n.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const l=ie(i.default,[]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(h(W,{debounce:0,onResize:R})),h("header",{class:v.value,style:x.value,onFocusin:V},l)}}}),fe=L({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:t}}=H(),o=Y(N,q);if(o===q)return console.error("QPageContainer needs to be child of QLayout"),q;G(Z,!0);const n=f(()=>{const u={};return o.header.space===!0&&(u.paddingTop=`${o.header.size}px`),o.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(u.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:n.value},M(i.default))}}),ve=[Element,String],he=[null,document,document.body,document.scrollingElement,document.documentElement];function me(e,i){let t=re(i);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return he.includes(t)?window:t}function ge(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function pe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Q;function k(){if(Q!==void 0)return Q;const e=document.createElement("p"),i=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const t=e.offsetWidth;i.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=i.clientWidth),i.remove(),Q=t-o,Q}const{passive:I}=F,be=["both","horizontal","vertical"],ye=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>be.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ve},emits:["scroll"],setup(e,{emit:i}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,n,u;T(()=>e.scrollTarget,()=>{a(),m()});function c(){o!==null&&o();const v=Math.max(0,ge(n)),x=pe(n),d={top:v-t.position.top,left:x-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:v,left:x},t.directionChanged=t.direction!==y,t.delta=d,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),i("scroll",{...t})}function m(){n=me(u,e.scrollTarget),n.addEventListener("scroll",r,I),r(!0)}function a(){n!==void 0&&(n.removeEventListener("scroll",r,I),n=void 0)}function r(v){if(v===!0||e.debounce===0||e.debounce==="0")c();else if(o===null){const[x,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];o=()=>{d(x),o=null}}}const{proxy:p}=H();return T(()=>p.$q.lang.rtl,c),E(()=>{u=p.$el.parentNode,m()}),O(()=>{o!==null&&o(),a()}),Object.assign(p,{trigger:r,getPosition:()=>t}),X}}),we=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=H(),n=z(null),u=z(o.screen.height),c=z(e.container===!0?0:o.screen.width),m=z({position:0,direction:"down",inflectionPoint:0}),a=z(0),r=z(K.value===!0?0:k()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),x=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),d=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function y(s){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};m.value=g,e.onScroll!==void 0&&t("scroll",g)}}function R(s){const{height:g,width:S}=s;let w=!1;u.value!==g&&(w=!0,u.value=g,e.onScrollHeight!==void 0&&t("scrollHeight",g),_()),c.value!==S&&(w=!0,c.value=S),w===!0&&e.onResize!==void 0&&t("resize",s)}function V({height:s}){a.value!==s&&(a.value=s,_())}function _(){if(e.container===!0){const s=u.value>a.value?k():0;r.value!==s&&(r.value=s)}}let l=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:n,height:u,containerHeight:a,scrollbarWidth:r,totalWidth:f(()=>c.value+r.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:m,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,g,S){b[s][g]=S}};if(G(N,b),k()>0){let s=function(){w=null,B.classList.remove("hide-scrollbar")},g=function(){if(w===null){if(B.scrollHeight>o.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(w);w=setTimeout(s,300)},S=function(j){w!==null&&j==="remove"&&(clearTimeout(w),s()),window[`${j}EventListener`]("resize",g)},w=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",S),e.container!==!0&&S("add"),ee(()=>{S("remove")})}return()=>{const s=ae(i.default,[h(ye,{onScroll:y}),h(W,{onResize:R})]),g=h("div",{class:p.value,style:v.value,ref:e.container===!0?void 0:n,tabindex:-1},s);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:n},[h(W,{onResize:V}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:d.value},[g])])]):g}}}),ze=(e,i)=>{const t=e.__vccOpts||e;for(const[o,n]of i)t[o]=n;return t},xe={};function Se(e,i){const t=oe("router-view");return ne(),te(we,{view:"lHh Lpr lFf"},{default:$(()=>[C(de,null,{default:$(()=>[C(ue,{class:"bg-dark"},{default:$(()=>[C(se,null,{default:$(()=>i[0]||(i[0]=[le(" Bolt Plugins ")])),_:1})]),_:1})]),_:1}),C(fe,null,{default:$(()=>[C(t)]),_:1})]),_:1})}const qe=ze(xe,[["render",Se]]);export{qe as default};
