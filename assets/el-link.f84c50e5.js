import{b as k,bh as m,a as c,u as y,o as a,c as i,a0 as t,q as h,aP as b,e as s,E as v,g as o,n as r,r as d,_ as E,w as C}from"./index.759617a8.js";const g=k({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:m}}),w={click:l=>l instanceof MouseEvent},B=["href"],L=c({name:"ElLink"}),P=c({...L,props:g,emits:w,setup(l,{emit:u}){const f=l,n=y("link");function p(e){f.disabled||u("click",e)}return(e,S)=>(a(),i("a",{class:r([s(n).b(),s(n).m(e.type),s(n).is("disabled",e.disabled),s(n).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:p},[e.icon?(a(),t(s(v),{key:0},{default:h(()=>[(a(),t(b(e.icon)))]),_:1})):o("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:r(s(n).e("inner"))},[d(e.$slots,"default")],2)):o("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):o("v-if",!0)],10,B))}});var $=E(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const I=C($);export{I as E};
