import"./bygoogle.DoyNvyXu.js";import{b as v,a as _,q as C,x as y,c as S,s as T}from"./index.DncgGPVN.js";import{o as k}from"./share-url.D6XI0DSw.js";import{p as $,h as u}from"./hue.DvCNu7MC.js";import{a1 as E}from"./reactivity.esm-bundler.Bhwgk5wr.js";import"./prf-down.DQLh_tOH.js";import"./video.C3UdALwV.js";import"./nav.DflYZT89.js";import"./client.BI0zP_h_.js";import"./11ja71b.C12bsyRF.js";import"./searchbar.hY3PEILY.js";import"./client.MxgXi404.js";import"./howto.sjv3Uo3g.js";import"./client.DmSAW4MT.js";import"./core.CrKXHUWB.js";function D(i,e){if(!i)return;const t=document.getElementById(e)||document.createElement("iframe");t.id=e,t.src=i,document.body.appendChild(t)}function L(){if(!__DATA__.isBot){const{id:i,type:e}=o;v.get("/api/statistics/view",{id:i,type:e}),e=="1"?v.get("/api/statistics/detail-out-view",{id:i}):e=="5"&&$("font_detail",1,"come")}}const o=window._getDetailData(),b=E({spin:!1}),g=()=>{b.spin=!1},w=i=>{g(),i&&window.open(i,"_blank")},A=()=>{C("rbg_id_type","".concat(o.id,"_").concat(o.type),{domain:".pngtree.com",expires:1}),w("/remove-background")},I={png:"down-btnfreepng",rar:"down-btnfreerar",ppt:"down-btnfreerar",premium:"down-btnvippng",edit:"down-btnedit",freevideo:"down-btnfreevideo"};function R(i,e,t,n){if(!i||b.spin)return;const s=o.one>0||o.limitedTime,a=()=>{if(!s&&__DATA__.vipType<=0&&+o.vipType>0)return g(),n.dialog="upgrade-premium",!0};if(i==="remove-bg"){a()||(u("detail/ai-btn-remove-bg"),A());return}if(!__DATA__.isLogined){_.emit("_pri6n4"),u("down-btnnologin-"+i);return}switch(b.spin=!0,u(I[i]),i){case"png":case"rar":case"ppt":case"twibbon":const r=i==="png";e&&s?w(e):_.emit("_amemn8","*",{onend:g,type:o.type,btnType:i,licenseType:o.vipType||0,href:e,downUrl:e,rarName:t||"PSD",fee:o.fee&&r});break;case"edit":e&&o.editips&&confirm(o.editips)&&(e=e.replace(/\/canvas\/?\?/,"/canvas/designer.html?")),a()||w(e);break;case"freevideo":D(e,"down_ifr"),g();break;default:w(e);break}}y("_1r0qupz",i=>({tab:i.tab,prfLoading:!1,tabCls(e){return this.tab===e?"_c5516n":""},onTab(e){this.tab=e},licPrf(e){const t=this.$app;if(!t.tapLogin())return;const n=e==="enterprise",s=n?"team":"",a=o.one>0,{vipType:r,enterpriseStatus:f}=__DATA__,m=n?f!=1:r<=0;if(!a&&m)t.onDialog(n?"_5j84hy":"_1mbqn4s"),u("prfview-btn"+s);else if(!this.prfLoading){this.prfLoading=!0;const l=this._Refs.prfDown,p=()=>{this.prfLoading=!1};l.onshow({...l.getName(o.one,e),slidesdocs:!!o.slidesdocs,data:{action:"detail",id:o.id,type:o.type},resolve:p,reject:p}),u("prfdown-btn"+s)}}}));y("_1um5rr9",i=>({url:i.url,followed:i.is,loading:!1,onFollow(){const e=this.$app;!this.loading&&e.tapLogin()&&(this.loading=!0,v.post("/api/async/designer-follow",{id:i.uid}).then(t=>{this.loading=!1,t.status===200&&(this.followed=!this.followed)}).catch(()=>{this.loading=!1}))}}));y("_166ljwa",i=>{const e="_sstrbf";return{store:b,previewSpin:!1,videoSize:"",wordsExpand:i.is2xl,wordsCount:"+10",wordsFromCls:i.is2xl?"":e,get showVideoDown(){return this.videoSize==="down"},"on:mounted"(){const t=this._Refs.hangs;t&&t.setIds(o.id,o.type),this.wordsCalc(!0),L()},wordsMinHeight(t){t.style.height="38px",t.style.overflow="hidden"},wordsOnExpand(){if(this.wordsFromCls=e,this.wordsExpand=!this.wordsExpand,this.wordsExpand){const t=this.$refs.wordsbtn,n=t&&t.parentElement;if(!n)return;n.appendChild(t)}else setTimeout(()=>{this.wordsCalc()},200)},wordsCalc(t){if(window.innerWidth<1024)return;const n=this.$refs.wordsbtn,s=n&&n.parentElement;if(!s)return;const a=()=>{n.classList.remove("_1i3kt2s")};if(t&&i.is2xl){a();return}const r=s.children,f=r.length,m=r[f-1];if(f<=1||m&&m.offsetTop<=0)return;const l=(p,c)=>{if(this.wordsCount="+"+(f-1-c),s.insertBefore(n,p),n.offsetTop>0){const x="previousElementSibling";let h=n[x];for(;h&&h.offsetTop>0;)h=h[x];h&&l(h,c-1)}else s._btn=p,s._btni=c;a()};if(s._btn){l(s._btn,s._btni);return}for(let p=0;p<f;p++){const c=r[p];if(c.offsetTop>0){l(c,p);break}}},onDownld(t,n,s){R(t,n,s,this.$app)},mDownld(){T(40,{target:document.querySelector("._bvrn6v")})},onCopy(){},onPreview(){if(this.previewSpin)return;const t=this.$refs.imgLink,n=this.$refs.image;if(!t||!n)return;const s=t.href||n.currentSrc||n.src;if(!s)return;const a=()=>{_.emit("_kuxk9d",{src:s,width:t._nw,height:t._nh}),this.previewSpin=!1};if(this.previewSpin=!0,setTimeout(()=>{u("detail-preview-image")},80),t._nw){a();return}const r=new Image;r.onload=()=>{t._nw=r.naturalWidth,t._nh=r.naturalHeight,a()},r.onabort=r.onerror=()=>{this.previewSpin=!1,$toast.error("Load failed!")},r.decoding="async",r.src=s},likeSpin(){const t=this._Refs.hangs;return t?t.likeSpin({id:o.id,type:o.type}):""},likeCls(){const t=this._Refs.hangs;return t?t.likeIcoCls({id:o.id,type:o.type}):""},onLike(){const t=this._Refs.hangs;t&&t.onLike(o.id,o.type)},urlCopying:!1,onShareUrl(){S(location.href).then(()=>(this.urlCopying=!0,this.$nextTick())).then(()=>{setTimeout(()=>{this.urlCopying=!1},2800)})},onShare(t){const n=this.$refs.image;n&&k({name:t,media:n.currentSrc||n.src,title:o.sharetit,word:o.shareword})},how2Attri(){const t=this._Refs.howToAttribute,n=this.$refs.lionName;t.onopen({type:o.type,url:location.pathname,usrName:n&&n.textContent||""})}}});const W=i=>i*(96/72);y("_e05maq",i=>({text:"",pt:i.pt,effectId:i.eid,loading:!1,get textCls(){return"effects-text"+this.effectId},get textStyl(){return"--font-size:".concat(W(this.pt),"px")},get fontText(){return this.text||i.p},ptCls(e){return this.pt===e?"_4x0icu":"_1t7gxnv"},ptClick(e){this.pt=e},effectCls(e){return this.effectId===e?"_1abob5y":"_oqy7bn"},effectClick(e){this.effectId=e},"on:mounted"(){q(),this.initCanvas()},initCanvas(){},downPng(){if(this.loading)return;if(this.$app.tapLogin()){const t=this.fontText.trim();if(!t)return;this.loading=!0;const n=()=>{this.loading=!1},s=this.$refs.spanTxt,a=s&&s.parentElement;if(!a)return;const r=this.$refs.canvas,f=getComputedStyle(s);_.emit("_h3jjzr",{styles:{left:s.offsetLeft,top:s.offsetTop+1.25,fontFamily:f.fontFamily,fontSize:parseInt(f.fontSize),fontWeight:f.fontWeight,fontStyle:f.fontStyle},effectId:this.effectId,text:t,textWidth:s.offsetWidth,canvasWidth:a.offsetWidth,canvasHeight:a.offsetHeight,cid:r.id,onok:n,onerr(){n(),$toast.error("Error!")}})}}}));function q(){const i=document.querySelector("style[data-font-style]");if(i&&i.sheet){const e=i.sheet.cssRules,t=e.length;for(let n=0;n<t;n++)z(e[n].cssText);i.parentElement.removeChild(i)}}let d;function z(i){d||(d=document.createElement("style"),document.head.appendChild(d),d.appendChild(document.createTextNode(""))),d.sheet&&d.sheet.insertRule(i,d.sheet.cssRules.length)}
