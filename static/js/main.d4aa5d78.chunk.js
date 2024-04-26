(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{148:function(e,n,t){},170:function(e,n){},172:function(e,n){},183:function(e,n){},185:function(e,n){},213:function(e,n){},215:function(e,n){},216:function(e,n){},221:function(e,n){},223:function(e,n){},242:function(e,n){},254:function(e,n){},257:function(e,n){},275:function(e,n,t){},277:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(139),c=t.n(a),s=(t(148),t(26)),l=t.n(s);const r="https://todo-list.alphacamp.io/api/auth";var d=t(45),u=t(3),p=t(2);const b={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},j=Object(o.createContext)(b),h=()=>Object(o.useContext)(j),x=e=>{let{children:n}=e;const[t,i]=Object(o.useState)(null),[a,c]=Object(o.useState)(null),{pathname:s}=Object(u.m)();return Object(o.useEffect)((()=>{(async()=>{const e=localStorage.getItem("authToken");if(!e)return c(null),void i(!1);const n=await(async e=>{try{const{data:n}=await l.a.get("".concat(r,"/test-token"),{headers:{Authorization:"Bearer ".concat(e)}});return n.success}catch(n){console.log(n)}})(e);if(n){const n=d.decode(e);c(n),i(!0)}else c(null),i(!1)})()}),[s]),Object(p.jsx)(j.Provider,{value:{isAuthenticated:t,currentMember:a&&{id:a.sub,name:a.name},register:async e=>{const{success:n,authToken:t}=await(async e=>{let{username:n,email:t,password:o}=e;try{const{data:e}=await l.a.post("".concat(r,"/register"),{username:n,email:t,password:o}),{authToken:i}=e;return i?{success:!0,...e}:e}catch(i){console.log("[Register Failed]:",i)}})({username:e.username,email:e.email,password:e.password}),o=d.decode(t);return o?(c(o),i(!0),localStorage.setItem("authToken",t)):(c(null),i(!1)),n},login:async e=>{const{success:n,authToken:t}=await(async e=>{let{username:n,password:t}=e;try{const{data:e}=await l.a.post("".concat(r,"/login"),{username:n,password:t}),{authToken:o}=e;return console.log(e),o?{success:!0,...e}:e}catch(o){console.log("[Login Failed]:",o)}})({username:e.username,password:e.password}),o=d.decode(t);return o?(c(o),i(!0),localStorage.setItem("authToken",t)):(c(null),i(!1)),n},logout:async()=>{localStorage.removeItem("authToken"),c(null),i(!1)}},children:n})};t(275);var g=t(11),f=t.n(g);var m,O,v,y,w=()=>{const{isAuthenticated:e}=h(),n=Object(u.o)();Object(o.useEffect)((()=>{e?f.a.fire({title:"\u5373\u5c07\u8df3\u8f49!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{n("/todo")}}):!1===e&&f.a.fire({title:"\u5373\u5c07\u8df3\u8f49!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{n("/login")}})}),[n,e])},k=t(6),C=t(7);const T=C.a.div(m||(m=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),D=C.a.div(O||(O=Object(k.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),E=C.a.button(v||(v=Object(k.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n  cursor:pointer;\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),S=C.a.div(y||(y=Object(k.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"])));var B,F,z,N;function R(){return R=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},R.apply(this,arguments)}function M(e,n){let{title:t,titleId:i,...a}=e;return o.createElement("svg",R({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,B||(B=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),F||(F=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),z||(z=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),N||(N=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}const A=o.forwardRef(M);t.p;var I,L,P,K=t.p+"static/media/check-active.95ca055c.svg",V=t.p+"static/media/check-circle.30720b46.svg",Z=t.p+"static/media/check-hover.5e00062b.svg";const H=C.a.div(I||(I=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),J=C.a.label(L||(L=Object(k.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),q=C.a.input(P||(P=Object(k.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"])));var G,U,$=e=>{let{type:n,label:t,value:o,placeholder:i,onChange:a}=e;return Object(p.jsxs)(H,{children:[Object(p.jsx)(J,{children:t}),Object(p.jsx)(q,{type:n,placeholder:i,value:o,onChange:e=>{null===a||void 0===a||a(e.target.value)}})]})};const Q=C.a.header(G||(G=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),W=C.a.div(U||(U=Object(k.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"])));var X,Y,_,ee,ne=e=>{let{username:n}=e;return Object(p.jsxs)(Q,{children:[Object(p.jsx)("h3",{children:"Tasks"}),Object(p.jsxs)(W,{children:["Hi ",Object(p.jsx)("span",{children:n})]})]})},te=t(34);const oe=C.a.div(X||(X=Object(k.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),ie=C.a.label(Y||(Y=Object(k.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),ae=C.a.div(_||(_=Object(k.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),ce=C.a.div(ee||(ee=Object(k.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"])));var se,le=e=>{let{inputValue:n,onChange:t,onAddTodo:o,onKeyDown:i}=e;return Object(p.jsxs)(oe,{className:Object(te.b)("",{active:n.length>0}),children:[Object(p.jsx)(ie,{className:"icon",htmlFor:"add-todo-input"}),Object(p.jsx)(ae,{children:Object(p.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:e=>{null===t||void 0===t||t(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&(null===i||void 0===i||i())}})}),Object(p.jsx)(ce,{className:Object(te.b)("",{active:n.length>0}),children:Object(p.jsx)("button",{className:"btn-reset",onClick:()=>null===o||void 0===o?void 0:o(),children:"\u65b0\u589e"})})]})};const re=C.a.div(se||(se=Object(k.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),K,V,Z);var de=e=>{let{todo:n,onChangeMode:t,onSave:i,onDelete:a,onToggleDone:c}=e;const s=Object(o.useRef)(null);return Object(p.jsxs)(re,{className:Object(te.a)("",{done:n.isDone},{edit:n.isEdit}),children:[Object(p.jsx)("div",{className:"task-item-checked",children:Object(p.jsx)("span",{id:n.id,className:"icon icon-checked",onClick:()=>null===c||void 0===c?void 0:c(n.id)})}),Object(p.jsxs)("div",{className:"task-item-body",onDoubleClick:()=>null===t||void 0===t?void 0:t({id:n.id,isEdit:!0}),children:[Object(p.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(p.jsx)("input",{className:"task-item-body-input",defaultValue:n.title,onKeyDown:e=>{console.log(e.key),"Enter"===e.key&&s.current.value.length>0&&(null===i||void 0===i||i({id:n.id,title:s.current.value})),"Escape"===e.key&&(s.current.value=n.title,null===t||void 0===t||t({id:n.id,isEdit:!1}))},ref:s})]}),Object(p.jsx)("div",{className:"task-item-action ",children:Object(p.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:()=>{null===a||void 0===a||a(n.id)},children:" "})})]})};var ue,pe,be=e=>{let{todos:n,onChangeMode:t,onSave:o,onDelete:i,onToggleDone:a}=e;return Object(p.jsx)("div",{children:n.map((e=>Object(p.jsx)(de,{todo:e,onToggleDone:e=>null===a||void 0===a?void 0:a(e),onChangeMode:e=>{let{id:n,isEdit:o}=e;null===t||void 0===t||t({id:n,isEdit:o})},onSave:e=>{let{id:n,title:t}=e;null===o||void 0===o||o({id:n,title:t})},onDelete:e=>null===i||void 0===i?void 0:i(e)},e.id)))})};const je=C.a.footer(ue||(ue=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),he=C.a.button(pe||(pe=Object(k.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));var xe=e=>{let{count:n}=e;const{logout:t}=h(),o=Object(u.o)();return Object(p.jsxs)(je,{children:[Object(p.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a",n]}),Object(p.jsx)(he,{onClick:()=>{f.a.fire({title:"\u5df2\u767b\u51fa!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{t(),o("/login")}})},children:"\u767b\u51fa"})]})},ge=t(16);var fe=()=>{const e=Object(u.o)(),[n,t]=Object(o.useState)(""),[i,a]=Object(o.useState)(""),{login:c,isAuthenticated:s}=h(),[l,r]=Object(o.useState)(!1);return Object(o.useEffect)((()=>{s&&(l?f.a.fire({title:"\u5df2\u767b\u5165!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{e("/todo")}}):f.a.fire({title:"\u5df2\u7d93\u662f\u767b\u5165\u72c0\u614b!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{e("/todo")}}))}),[e,l,s]),Object(p.jsxs)(T,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(A,{})}),Object(p.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(p.jsx)(D,{children:Object(p.jsx)($,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:n,onChange:e=>{t(e)}})}),Object(p.jsx)(D,{children:Object(p.jsx)($,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:i,onChange:e=>{a(e)}})}),Object(p.jsx)(E,{onClick:async()=>{n.length<0||i.length<0||(r(await c({username:n,password:i})),f.a.fire({title:"\u767b\u5165\u5931\u6557!",text:"\u5e33\u865f\u6216\u5bc6\u78bc\u932f\u8aa4",icon:"error",confirmButtonText:"\u91cd\u8a66",timer:2e3,position:"top"}))},children:"\u767b\u5165"}),Object(p.jsx)(ge.b,{to:"/signup",children:Object(p.jsx)(S,{children:"\u8a3b\u518a"})})]})};var me=()=>{const[e,n]=Object(o.useState)(""),[t,i]=Object(o.useState)(""),[a,c]=Object(o.useState)(""),[s,l]=Object(o.useState)(!1),r=Object(u.o)(),{register:d,isAuthenticated:b}=h();return Object(o.useEffect)((()=>{b&&(s?f.a.fire({title:"\u8a3b\u518a\u6210\u529f!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{r("/todo")}}):f.a.fire({title:"\u5df2\u7d93\u662f\u767b\u5165\u72c0\u614b!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{r("/todo")}}))}),[r,s,b]),Object(p.jsxs)(T,{children:[Object(p.jsx)("div",{children:Object(p.jsx)(A,{})}),Object(p.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(p.jsx)(D,{children:Object(p.jsx)($,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:e=>{n(e)}})}),Object(p.jsx)(D,{children:Object(p.jsx)($,{label:"\u4fe1\u7bb1",placeholder:"\u8acb\u8f38\u5165\u4fe1\u7bb1",value:a,onChange:e=>{c(e)}})}),Object(p.jsx)(D,{children:Object(p.jsx)($,{type:"password",label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:t,onChange:e=>{i(e)}})}),Object(p.jsx)(E,{onClick:async()=>{e.length<0||t.length<0&&a.length<0||(l(await d({username:e,email:a,password:t})),f.a.fire({title:"\u8a3b\u518a\u5931\u6557!",text:"\u6b04\u4f4d\u932f\u8aa4\u6216\u5e33\u865f\u5df2\u88ab\u4f7f\u7528!",icon:"error",confirmButtonText:"\u91cd\u8a66",timer:3e3,position:"top"}))},children:"\u8a3b\u518a"}),Object(p.jsx)(ge.b,{to:"/login",children:Object(p.jsx)(S,{children:"\u767b\u5165"})})]})};const Oe="https://todo-list.alphacamp.io/api",ve=l.a.create({baseURL:Oe});ve.interceptors.request.use((e=>{const n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(e=>console.log(e)));const ye=async e=>{try{const{title:n,isDone:t}=e;return(await ve.post("".concat(Oe,"/todos/"),{title:n,isDone:t})).data}catch(n){console.log("[Post Todos failed]",n)}},we=async e=>{const{title:n,id:t,isDone:o}=e;try{return(await ve.patch("".concat(Oe,"/todos/").concat(t),{title:n,id:t,isDone:o})).data}catch(i){console.log("[Patch Todos failed]",i)}};var ke=()=>{const[e,n]=Object(o.useState)(""),[t,i]=Object(o.useState)([]),a=Object(u.o)(),{isAuthenticated:c,currentMember:s}=h();return Object(o.useEffect)((()=>{(async()=>{try{const e=await(async()=>{try{const e=await ve.get("".concat(Oe,"/todos"));return console.log(e),e.data.data}catch(e){console.log("[Get Todos failed]",e)}})();i(e.map((e=>({...e,isEdit:!1}))))}catch(e){console.log(e)}})()}),[]),Object(o.useEffect)((()=>{!1===c&&f.a.fire({title:"\u672a\u767b\u5165!",text:"\u9801\u9762\u5c07\u57282\u79d2\u5f8c\u81ea\u52d5\u8df3\u8f49!",icon:"success",confirmButtonText:"\u7e7c\u7e8c",timer:2e3,position:"top",willClose:()=>{a("/login")}})}),[a,c]),Object(p.jsxs)("div",{children:["TodoPage",Object(p.jsx)(ne,{username:null===s||void 0===s?void 0:s.name}),Object(p.jsx)(le,{inputValue:e,onChange:e=>{n(e)},onAddTodo:async()=>{if(0!==e.length)try{const t=await ye({title:e,isDone:!1});i((e=>[...e,{title:t.title,isDone:t.isDone,id:t.id,isEdit:!1}])),n("")}catch(t){console.log(t)}},onKeyDown:async()=>{if(0!==e.length)try{const t=await ye({title:e,isDone:!1});i((e=>[...e,{title:t.title,isDone:t.isDone,id:t.id,isEdit:!1}])),n("")}catch(t){console.log(t)}}}),Object(p.jsx)(be,{todos:t,onToggleDone:async e=>{const n=t.find((n=>n.id===e));try{await we({id:e,isDone:!n.isDone}),i((n=>n.map((n=>n.id===e?{...n,isDone:!n.isDone}:n))))}catch(o){console.log(o)}},onChangeMode:e=>{let{id:n,isEdit:t}=e;i((e=>e.map((e=>e.id===n?{...e,isEdit:t}:{...e,isEdit:!1}))))},onSave:async e=>{let{id:n,title:t}=e;try{await we({id:n,title:t}),i((e=>e.map((e=>e.id===n?{...e,title:t,isEdit:!1}:e))))}catch(o){console.log(o)}},onDelete:async e=>{try{await(async e=>{try{return(await ve.delete("".concat(Oe,"/todos/").concat(e))).data}catch(n){console.log("[Delete Todos failed]",n)}})(e),i((n=>n.filter((n=>n.id!==e))))}catch(n){console.log(n)}}}),Object(p.jsx)(xe,{count:t.length})]})};var Ce=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(ge.a,{basename:"/todolist-react-practice",children:Object(p.jsx)(x,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"login",element:Object(p.jsx)(fe,{})}),Object(p.jsx)(u.a,{path:"signup",element:Object(p.jsx)(me,{})}),Object(p.jsx)(u.a,{path:"todo",element:Object(p.jsx)(ke,{})}),Object(p.jsx)(u.a,{path:"*",element:Object(p.jsx)(w,{})}),Object(p.jsx)(u.a,{})]})})})})};var Te=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,278)).then((n=>{let{getCLS:t,getFID:o,getFCP:i,getLCP:a,getTTFB:c}=n;t(e),o(e),i(e),a(e),c(e)}))};c.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(Ce,{})})),Te()}},[[277,1,2]]]);
//# sourceMappingURL=main.d4aa5d78.chunk.js.map