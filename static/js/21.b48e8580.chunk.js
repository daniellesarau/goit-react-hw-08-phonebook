"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{21:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var a=t(9439),n=t(1413),o=t(9434),i=t(2791),s=t(890),l=t(533),c=t(4708),u=t(4554),d=t(3044),m=t(3601),f=t(4294),v=t(403),h=t(111),p=t(7689),g=t(2286),x=t(184);function Z(e){return(0,x.jsxs)(s.Z,(0,n.Z)((0,n.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{sx:{paddingTop:" 200px"},children:["Copyright \xa9 ",(0,x.jsx)(l.Z,{color:"inherit",href:"https://github.com/daniellesarau/goit-react-hw-08-phonebook",children:"Daniela S"})," ",(new Date).getFullYear()]}))}var b=function(){var e=(0,i.useState)(""),r=(0,a.Z)(e,2),t=r[0],n=r[1],l=(0,i.useState)(""),b=(0,a.Z)(l,2),w=b[0],j=b[1],y=(0,o.I0)(),S=(0,p.s0)(),k=(0,o.v9)(g.j3),D=function(e){var r=e.target,t=r.name,a=r.value;"email"===t?n(a):"password"===t&&j(a)};return(0,i.useEffect)((function(){k&&S("/contacts")}),[k,S]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.ZP,{}),(0,x.jsxs)(u.Z,{sx:{maxWidth:"600px",mt:10,mx:"auto",display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[(0,x.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,x.jsx)(v.Z,{})}),(0,x.jsx)(s.Z,{component:"h1",variant:"h5",children:"Login"}),(0,x.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),y((0,h.x4)({email:t,password:w}))},sx:{mt:1,width:"100%"},children:[(0,x.jsx)(m.Z,{autoComplete:"current-email",margin:"normal",fullWidth:!0,label:"Email Address",name:"email",type:"email",autoFocus:!0,onChange:D}),(0,x.jsx)(m.Z,{autoComplete:"current-password",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",onChange:D}),(0,x.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,x.jsx)(Z,{sx:{mt:5}})]})]})]})};function w(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(b,{})})}},403:function(e,r,t){var a=t(4836);r.Z=void 0;var n=a(t(5649)),o=t(184),i=(0,n.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},3044:function(e,r,t){t.d(r,{Z:function(){return w}});var a=t(9439),n=t(3366),o=t(7462),i=t(2791),s=t(3733),l=t(4419),c=t(6934),u=t(1402),d=t(9201),m=t(184),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=t(5878),h=t(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var w=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,f=t.className,v=t.component,h=void 0===v?"div":v,w=t.imgProps,j=t.sizes,y=t.src,S=t.srcSet,k=t.variant,D=void 0===k?"circular":k,z=(0,n.Z)(t,g),C=null,P=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,o=e.srcSet,s=i.useState(!1),l=(0,a.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(n||o){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[r,t,n,o]),c}((0,o.Z)({},w,{src:y,srcSet:S})),R=y||S,A=R&&"error"!==P,M=(0,o.Z)({},t,{colorDefault:!A,component:h,variant:D}),F=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,p,r)}(M);return C=A?(0,m.jsx)(Z,(0,o.Z)({alt:c,srcSet:S,src:y,sizes:j,ownerState:M,className:F.img},w)):null!=d?d:R&&c?c[0]:(0,m.jsx)(b,{ownerState:M,className:F.fallback}),(0,m.jsx)(x,(0,o.Z)({as:h,ownerState:M,className:(0,s.Z)(F.root,f),ref:r},z,{children:C}))}))}}]);
//# sourceMappingURL=21.b48e8580.chunk.js.map