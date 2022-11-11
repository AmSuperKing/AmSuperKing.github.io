import{I as G,bb as oe,b as I,d as b,aZ as W,bM as k,a as w,Z as me,u as A,N as ne,o as y,a0 as U,q as F,c as S,a1 as ve,a2 as ge,n as h,e as t,be as le,r as C,g as _,h as L,b3 as D,p as R,E as T,bN as ye,t as X,i as be,aU as he,aW as _e,aX as Ee,bO as ke,bP as Fe,bQ as $e,_ as q,M as Re,a7 as Ce,bH as Q,bR as Se,bS as we,Q as J,aK as Ue,aN as Le,aI as Pe,P as O,l as Te,ai as Oe,bC as De,bL as Y,b0 as x,w as je,bT as Be,bU as Ae,bV as M,v as Ie,x as Ne,f as Me,y as re}from"./index.f3a675bf.js";import{E as qe}from"./el-progress.49c4d83d.js";const ue=Symbol("uploadContextKey"),He="ElUpload";class Ke extends Error{constructor(l,a,n,c){super(l),this.name="UploadAjaxError",this.status=a,this.method=n,this.url=c}}function ee(o,l,a){let n;return a.response?n=`${a.response.error||a.response}`:a.responseText?n=`${a.responseText}`:n=`fail to ${l.method} ${o} ${a.status}`,new Ke(n,a.status,l.method,o)}function ze(o){const l=o.responseText||o.response;if(!l)return l;try{return JSON.parse(l)}catch{return l}}const Ve=o=>{typeof XMLHttpRequest>"u"&&G(He,"XMLHttpRequest is undefined");const l=new XMLHttpRequest,a=o.action;l.upload&&l.upload.addEventListener("progress",p=>{const m=p;m.percent=p.total>0?p.loaded/p.total*100:0,o.onProgress(m)});const n=new FormData;if(o.data)for(const[p,m]of Object.entries(o.data))Array.isArray(m)?n.append(p,...m):n.append(p,m);n.append(o.filename,o.file,o.file.name),l.addEventListener("error",()=>{o.onError(ee(a,o,l))}),l.addEventListener("load",()=>{if(l.status<200||l.status>=300)return o.onError(ee(a,o,l));o.onSuccess(ze(l))}),l.open(o.method,a,!0),o.withCredentials&&"withCredentials"in l&&(l.withCredentials=!0);const c=o.headers||{};if(c instanceof Headers)c.forEach((p,m)=>l.setRequestHeader(m,p));else for(const[p,m]of Object.entries(c))oe(m)||l.setRequestHeader(p,String(m));return l.send(n),l},ie=["text","picture","picture-card"];let We=1;const Z=()=>Date.now()+We++,de=I({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>W({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:b(Array),default:()=>W([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ie,default:"text"},httpRequest:{type:b(Function),default:Ve},disabled:Boolean,limit:Number}),Xe=I({...de,beforeUpload:{type:b(Function),default:k},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:k},onChange:{type:b(Function),default:k},onPreview:{type:b(Function),default:k},onSuccess:{type:b(Function),default:k},onProgress:{type:b(Function),default:k},onError:{type:b(Function),default:k},onExceed:{type:b(Function),default:k}}),Qe=I({files:{type:b(Array),default:()=>W([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:k},listType:{type:String,values:ie,default:"text"}}),Ze={remove:o=>!!o},Ge=["onKeydown"],Je=["src"],Ye=["onClick"],xe=["onClick"],et=["onClick"],tt=w({name:"ElUploadList"}),st=w({...tt,props:Qe,emits:Ze,setup(o,{emit:l}){const{t:a}=me(),n=A("upload"),c=A("icon"),p=A("list"),m=ne(!1),$=i=>{l("remove",i)};return(i,g)=>(y(),U($e,{tag:"ul",class:h([t(n).b("list"),t(n).bm("list",i.listType),t(n).is("disabled",i.disabled)]),name:t(p).b()},{default:F(()=>[(y(!0),S(ve,null,ge(i.files,f=>(y(),S("li",{key:f.uid||f.name,class:h([t(n).be("list","item"),t(n).is(f.status),{focusing:m.value}]),tabindex:"0",onKeydown:le(E=>!i.disabled&&$(f),["delete"]),onFocus:g[0]||(g[0]=E=>m.value=!0),onBlur:g[1]||(g[1]=E=>m.value=!1),onClick:g[2]||(g[2]=E=>m.value=!1)},[C(i.$slots,"default",{file:f},()=>[i.listType==="picture"||f.status!=="uploading"&&i.listType==="picture-card"?(y(),S("img",{key:0,class:h(t(n).be("list","item-thumbnail")),src:f.url,alt:""},null,10,Je)):_("v-if",!0),f.status==="uploading"||i.listType!=="picture-card"?(y(),S("div",{key:1,class:h(t(n).be("list","item-info"))},[L("a",{class:h(t(n).be("list","item-name")),onClick:D(E=>i.handlePreview(f),["prevent"])},[R(t(T),{class:h(t(c).m("document"))},{default:F(()=>[R(t(ye))]),_:1},8,["class"]),L("span",{class:h(t(n).be("list","item-file-name"))},X(f.name),3)],10,Ye),f.status==="uploading"?(y(),U(t(qe),{key:0,type:i.listType==="picture-card"?"circle":"line","stroke-width":i.listType==="picture-card"?6:2,percentage:Number(f.percentage),style:be(i.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):_("v-if",!0)],2)):_("v-if",!0),L("label",{class:h(t(n).be("list","item-status-label"))},[i.listType==="text"?(y(),U(t(T),{key:0,class:h([t(c).m("upload-success"),t(c).m("circle-check")])},{default:F(()=>[R(t(he))]),_:1},8,["class"])):["picture-card","picture"].includes(i.listType)?(y(),U(t(T),{key:1,class:h([t(c).m("upload-success"),t(c).m("check")])},{default:F(()=>[R(t(_e))]),_:1},8,["class"])):_("v-if",!0)],2),i.disabled?_("v-if",!0):(y(),U(t(T),{key:2,class:h(t(c).m("close")),onClick:E=>$(f)},{default:F(()=>[R(t(Ee))]),_:2},1032,["class","onClick"])),_(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),_(" This is a bug which needs to be fixed "),_(" TODO: Fix the incorrect navigation interaction "),i.disabled?_("v-if",!0):(y(),S("i",{key:3,class:h(t(c).m("close-tip"))},X(t(a)("el.upload.deleteTip")),3)),i.listType==="picture-card"?(y(),S("span",{key:4,class:h(t(n).be("list","item-actions"))},[L("span",{class:h(t(n).be("list","item-preview")),onClick:E=>i.handlePreview(f)},[R(t(T),{class:h(t(c).m("zoom-in"))},{default:F(()=>[R(t(ke))]),_:1},8,["class"])],10,xe),i.disabled?_("v-if",!0):(y(),S("span",{key:0,class:h(t(n).be("list","item-delete")),onClick:E=>$(f)},[R(t(T),{class:h(t(c).m("delete"))},{default:F(()=>[R(t(Fe))]),_:1},8,["class"])],10,et))],2)):_("v-if",!0)])],42,Ge))),128)),C(i.$slots,"append")]),_:3},8,["class","name"]))}});var te=q(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const at=I({disabled:{type:Boolean,default:!1}}),ot={file:o=>Re(o)},nt=["onDrop","onDragover"],ce="ElUploadDrag",lt=w({name:ce}),rt=w({...lt,props:at,emits:ot,setup(o,{emit:l}){const a=o,n=Ce(ue);n||G(ce,"usage: <el-upload><el-upload-dragger /></el-upload>");const c=A("upload"),p=ne(!1),m=i=>{if(a.disabled)return;p.value=!1;const g=Array.from(i.dataTransfer.files),f=n.accept.value;if(!f){l("file",g);return}const E=g.filter(r=>{const{type:e,name:s}=r,d=s.includes(".")?`.${s.split(".").pop()}`:"",v=e.replace(/\/.*$/,"");return f.split(",").map(u=>u.trim()).filter(u=>u).some(u=>u.startsWith(".")?d===u:/\/\*$/.test(u)?v===u.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(u)?e===u:!1)});l("file",E)},$=()=>{a.disabled||(p.value=!0)};return(i,g)=>(y(),S("div",{class:h([t(c).b("dragger"),t(c).is("dragover",p.value)]),onDrop:D(m,["prevent"]),onDragover:D($,["prevent"]),onDragleave:g[0]||(g[0]=D(f=>p.value=!1,["prevent"]))},[C(i.$slots,"default")],42,nt))}});var ut=q(rt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const it=I({...de,beforeUpload:{type:b(Function),default:k},onRemove:{type:b(Function),default:k},onStart:{type:b(Function),default:k},onSuccess:{type:b(Function),default:k},onProgress:{type:b(Function),default:k},onError:{type:b(Function),default:k},onExceed:{type:b(Function),default:k}}),dt=["onKeydown"],ct=["name","multiple","accept"],pt=w({name:"ElUploadContent",inheritAttrs:!1}),ft=w({...pt,props:it,setup(o,{expose:l}){const a=o,n=A("upload"),c=Q({}),p=Q(),m=e=>{if(e.length===0)return;const{autoUpload:s,limit:d,fileList:v,multiple:u,onStart:N,onExceed:P}=a;if(d&&v.length+e.length>d){P(e,v);return}u||(e=e.slice(0,1));for(const H of e){const j=H;j.uid=Z(),N(j),s&&$(j)}},$=async e=>{if(p.value.value="",!a.beforeUpload)return i(e);let s;try{s=await a.beforeUpload(e)}catch{s=!1}if(s===!1){a.onRemove(e);return}let d=e;s instanceof Blob&&(s instanceof File?d=s:d=new File([s],e.name,{type:e.type})),i(Object.assign(d,{uid:e.uid}))},i=e=>{const{headers:s,data:d,method:v,withCredentials:u,name:N,action:P,onProgress:H,onSuccess:j,onError:pe,httpRequest:fe}=a,{uid:K}=e,z={headers:s||{},withCredentials:u,file:e,data:d,method:v,filename:N,action:P,onProgress:B=>{H(B,e)},onSuccess:B=>{j(B,e),delete c.value[K]},onError:B=>{pe(B,e),delete c.value[K]}},V=fe(z);c.value[K]=V,V instanceof Promise&&V.then(z.onSuccess,z.onError)},g=e=>{const s=e.target.files;!s||m(Array.from(s))},f=()=>{a.disabled||(p.value.value="",p.value.click())},E=()=>{f()};return l({abort:e=>{Se(c.value).filter(e?([d])=>String(e.uid)===d:()=>!0).forEach(([d,v])=>{v instanceof XMLHttpRequest&&v.abort(),delete c.value[d]})},upload:$}),(e,s)=>(y(),S("div",{class:h([t(n).b(),t(n).m(e.listType),t(n).is("drag",e.drag)]),tabindex:"0",onClick:f,onKeydown:le(D(E,["self"]),["enter","space"])},[e.drag?(y(),U(ut,{key:0,disabled:e.disabled,onFile:m},{default:F(()=>[C(e.$slots,"default")]),_:3},8,["disabled"])):C(e.$slots,"default",{key:1}),L("input",{ref_key:"inputRef",ref:p,class:h(t(n).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:g,onClick:s[0]||(s[0]=D(()=>{},["stop"]))},null,42,ct)],42,dt))}});var se=q(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const ae="ElUpload",mt=o=>{var l;(l=o.url)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(o.url)},vt=(o,l)=>{const a=we(o,"fileList",void 0,{passive:!0}),n=r=>a.value.find(e=>e.uid===r.uid);function c(r){var e;(e=l.value)==null||e.abort(r)}function p(r=["ready","uploading","success","fail"]){a.value=a.value.filter(e=>!r.includes(e.status))}const m=(r,e)=>{const s=n(e);!s||(console.error(r),s.status="fail",a.value.splice(a.value.indexOf(s),1),o.onError(r,s,a.value),o.onChange(s,a.value))},$=(r,e)=>{const s=n(e);!s||(o.onProgress(r,s,a.value),s.status="uploading",s.percentage=Math.round(r.percent))},i=(r,e)=>{const s=n(e);!s||(s.status="success",s.response=r,o.onSuccess(r,s,a.value),o.onChange(s,a.value))},g=r=>{oe(r.uid)&&(r.uid=Z());const e={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(o.listType==="picture-card"||o.listType==="picture")try{e.url=URL.createObjectURL(r)}catch(s){Ue(ae,s.message),o.onError(s,e,a.value)}a.value=[...a.value,e],o.onChange(e,a.value)},f=async r=>{const e=r instanceof File?n(r):r;e||G(ae,"file to be removed not found");const s=d=>{c(d);const v=a.value;v.splice(v.indexOf(d),1),o.onRemove(d,v),mt(d)};o.beforeRemove?await o.beforeRemove(e,a.value)!==!1&&s(e):s(e)};function E(){a.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var e;return r&&((e=l.value)==null?void 0:e.upload(r))})}return J(()=>o.listType,r=>{r!=="picture-card"&&r!=="picture"||(a.value=a.value.map(e=>{const{raw:s,url:d}=e;if(!d&&s)try{e.url=URL.createObjectURL(s)}catch(v){o.onError(v,e,a.value)}return e}))}),J(a,r=>{for(const e of r)e.uid||(e.uid=Z()),e.status||(e.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:c,clearFiles:p,handleError:m,handleProgress:$,handleStart:g,handleSuccess:i,handleRemove:f,submit:E}},gt=w({name:"ElUpload"}),yt=w({...gt,props:Xe,setup(o,{expose:l}){const a=o,n=Le(),c=Pe(),p=Q(),{abort:m,submit:$,clearFiles:i,uploadFiles:g,handleStart:f,handleError:E,handleRemove:r,handleSuccess:e,handleProgress:s}=vt(a,p),d=O(()=>a.listType==="picture-card"),v=O(()=>({...a,fileList:g.value,onStart:f,onProgress:s,onSuccess:e,onError:E,onRemove:r}));return Te(()=>{g.value.forEach(({url:u})=>{u!=null&&u.startsWith("blob:")&&URL.revokeObjectURL(u)})}),Oe(ue,{accept:De(a,"accept")}),l({abort:m,submit:$,clearFiles:i,handleStart:f,handleRemove:r}),(u,N)=>(y(),S("div",null,[t(d)&&u.showFileList?(y(),U(te,{key:0,disabled:t(c),"list-type":u.listType,files:t(g),"handle-preview":u.onPreview,onRemove:t(r)},Y({append:F(()=>[R(se,x({ref_key:"uploadRef",ref:p},t(v)),{default:F(()=>[t(n).trigger?C(u.$slots,"trigger",{key:0}):_("v-if",!0),!t(n).trigger&&t(n).default?C(u.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)]),_:2},[u.$slots.file?{name:"default",fn:F(({file:P})=>[C(u.$slots,"file",{file:P})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0),!t(d)||t(d)&&!u.showFileList?(y(),U(se,x({key:1,ref_key:"uploadRef",ref:p},t(v)),{default:F(()=>[t(n).trigger?C(u.$slots,"trigger",{key:0}):_("v-if",!0),!t(n).trigger&&t(n).default?C(u.$slots,"default",{key:1}):_("v-if",!0)]),_:3},16)):_("v-if",!0),u.$slots.trigger?C(u.$slots,"default",{key:2}):_("v-if",!0),C(u.$slots,"tip"),!t(d)&&u.showFileList?(y(),U(te,{key:3,disabled:t(c),"list-type":u.listType,files:t(g),"handle-preview":u.onPreview,onRemove:t(r)},Y({_:2},[u.$slots.file?{name:"default",fn:F(({file:P})=>[C(u.$slots,"file",{file:P})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):_("v-if",!0)]))}});var bt=q(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const ht=je(bt);const _t=o=>(Ie("data-v-4bdfd0da"),o=o(),Ne(),o),Et={class:"upload-container"},kt=_t(()=>L("div",{class:"el-upload__text"},[Me(" \u5C06\u56FE\u7247\u62D6\u5165\u6216 "),L("em",null,"\u70B9\u51FB\u4E0A\u4F20")],-1)),Ft={class:"el-upload__tip"},$t=w({__name:"index",props:{url:{default:""},fileList:{default:()=>[]},params:{default:()=>({})},disabled:{type:Boolean,default:!1},tips:{default:"\u4E0A\u4F20\u56FE\u7247"}},emits:["beforeUpload","onSuccess","onError","onRemove"],setup(o,{emit:l}){const a=o,n=O(()=>a.params),c=O(()=>{const e=[];return Object.keys(n.value).length&&Object.keys(n.value).forEach(s=>{n.value[s]!==void 0&&n.value[s]!==null&&e.push(s+"="+n.value[s])}),console.log("%c upload image params(UploadImgSingle Tips): =>","color: #00aadf",e.length?e.join("&"):""),e.length?e.join("&"):""}),p=O(()=>"getCurrentDomain"+a.url+"?"+c.value),m=O(()=>({Authorization:`${Ae()}`})),$=e=>{const s=e.substring(e.lastIndexOf(".")+1),d=s==="jpg",v=s==="png",u=s==="jpeg";return!d&&!v&&!u?!1:d||v||u},i=e=>{if(l("beforeUpload",e),!$(e.name))return M.warning("\u4E0A\u4F20\u6587\u4EF6\u53EA\u80FD\u662F jpg, jpeg, png\u683C\u5F0F!"),!1},g=(e,s)=>{$(e.source1)?(M.success("\u4E0A\u4F20\u6210\u529F"),l("onSuccess",!0)):(M.error("\u4E0A\u4F20\u5931\u8D25"),l("onError",s))},f=e=>{l("onError",e)},E=()=>{l("onRemove")},r=()=>{M.warning("\u53EA\u80FD\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247")};return(e,s)=>{const d=T,v=ht;return y(),S("div",Et,[R(v,{action:t(p),headers:t(m),multiple:!1,limit:1,"before-upload":i,"on-success":g,"on-error":f,"on-remove":E,"file-list":a.fileList,"on-exceed":r,disabled:a.disabled,drag:"","show-file-list":"","auto-upload":"",class:"image-upload"},{tip:F(()=>[L("div",Ft,X(a.tips),1)]),default:F(()=>[R(d,{class:"el-icon--upload"},{default:F(()=>[R(t(Be))]),_:1}),kt]),_:1},8,["action","headers","file-list","disabled"])])}}});const Rt=re($t,[["__scopeId","data-v-4bdfd0da"]]),Ct={class:"container"},St=w({__name:"upload",setup(o){const l=()=>{console.log("handleUploadSuccess")};return(a,n)=>(y(),S("div",Ct,[R(Rt,{url:"/api/v1/upload",params:{id:"params"},disabled:!1,tips:"\u8BF7\u9009\u62E9\u56FE\u7247\u4E0A\u4F20\uFF0C\u56FE\u7247\u5927\u5C0F\u8BF7\u5C0F\u4E8E10M",onOnSuccess:l})]))}});const Lt=re(St,[["__scopeId","data-v-bb131ad3"]]);export{Lt as default};
