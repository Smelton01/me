(this.webpackJsonpme=this.webpackJsonpme||[]).push([[9],{175:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(5),a=n(21),s=n(22),l=n(0),r=function(e){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/.test(e)||0===e.length},o=["hi","hello","hola","you-can-email-me-at-literally-anything! Really","well, not anything. But most things","like-this","or-this","but not this :(  ","you.can.also.email.me.with.specific.topics.like","just-saying-hi","please-work-for-us","help","admin","or-I-really-like-your-website","thanks"],u=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(o[n]),u=Object(s.a)(a,2),j=u[0],h=u[1],b=Object(c.useState)(o[n].length),d=Object(s.a)(b,2),m=d[0],O=d[1],f=Object(c.useState)(!0),g=Object(s.a)(f,2),p=g[0],x=g[1];return function(e,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}return function(){}}),[t])}((function(){var e=n,t=m;m-50>=o[n].length&&(e+=1,t=0),e===o.length?x(!1):(h(o[e].slice(0,t)),i(e),O(t+1))}),p?50:null),Object(l.jsx)("div",{className:"inline-container",style:r(j)?{}:{color:"red"},onMouseEnter:function(){return x(!1)},onMouseLeave:function(){return n<o.length&&x(!0)},children:Object(l.jsxs)("a",{href:r(j)?"mailto:".concat(j,"@mldangelo.com"):"",children:[Object(l.jsx)("span",{children:j}),Object(l.jsx)("span",{children:"@mldangelo.com"})]})})},j=n(25);t.default=function(){return Object(l.jsx)(a.a,{title:"Contact",description:"Contact Simon Juba via email @ scimail09@gmail.com",children:Object(l.jsxs)("article",{className:"post",id:"contact",children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h2",{"data-testid":"heading",children:Object(l.jsx)(i.b,{to:"/contact",children:"Contact"})})})}),Object(l.jsxs)("div",{className:"email-at",children:[Object(l.jsx)("p",{children:"Feel free to get in touch. You can email me at: "}),Object(l.jsx)(u,{})]}),Object(l.jsx)(j.a,{})]})})}}}]);
//# sourceMappingURL=9.812f3b73.chunk.js.map