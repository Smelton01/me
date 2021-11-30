(this.webpackJsonpme=this.webpackJsonpme||[]).push([[5],{169:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),o=n(21),a=n(0),i=function(e){var t=e.data;return Object(a.jsx)("article",{className:"degree-container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:t.degree}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s;function u(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return f(this,n)}}var j=n(59),d=n(57),h=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},g=function(e){var t=e.data,n=e.categories,c=t.category,r=t.competency,o=t.title,i={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(d.a)(Object(d.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(r/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:i,children:Object(a.jsx)("span",{children:o})}),Object(a.jsx)("div",{className:"skillbar-bar",style:s}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[r," / 5"]})]})};g.defaultProps={categories:[]};var O=g,v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(o,e);var t,n,c,r=m(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,c){return Object(d.a)(Object(d.a)({},n),{},Object(j.a)({},c,e===c&&!t.buttons[c]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(O,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(h,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Skills"}),Object(a.jsx)("p",{children:"Here is a quick overview of my technical skills."})]}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&u(t.prototype,n),c&&u(t,c),o}(c.Component);v.defaultProps={skills:[],categories:[]};var k=v,S=[{school:"Kyushu University",degree:"M.S. Information Science and Electrical Engineering",link:"https://www.isee.kyushu-u.ac.jp/e/",year:2022},{school:"Kyushu University",degree:"B.S. Electrical Engineering and Computer Science",link:"http://www.eng.kyushu-u.ac.jp/e/u_electrical.html",year:2020}],x=n(17);var w=n(24);var D,P=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Go",competency:4,category:["Languages","Web Development"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"Flask",competency:4,category:["Web Development","Python"]},{title:"Git",competency:3,category:["Tools"]},{title:"Google Cloud Compute",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:4,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"Java",competency:2,category:["Languages"]},{title:"MATLAB",competency:3,category:["Languages"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{category:e.category.sort()})})),N=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],E=(D=new Set(P.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(x.a)(e)}(D)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(D)||Object(w.a)(D)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:N[t]}})),L=["Education","Skills"];t.default=function(){return Object(a.jsx)(o.a,{title:"Resume",description:"Simon Juba's Resume. School of Information Science and Electrical Engineering, Kyushu University.",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:L.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsx)(l,{data:S}),Object(a.jsx)(k,{skills:P,categories:E})]})})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(59);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=5.248a4422.chunk.js.map