(this.webpackJsonpme=this.webpackJsonpme||[]).push([[6],{172:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(5),c=n(21),a=n(0),o=function(e){var t=e.data;return Object(a.jsx)("article",{className:"degree-container",children:Object(a.jsxs)("header",{children:[Object(a.jsx)("h4",{className:"degree",children:t.degree}),Object(a.jsxs)("p",{className:"school",children:[Object(a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(a.jsxs)("div",{className:"education",children:[Object(a.jsx)("div",{className:"link-to",id:"education"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(a.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s;function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}var p=n(57),h=n(56),g=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},j=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,c=t.title,o={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(h.a)(Object(h.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(a.jsxs)("div",{className:"skillbar clearfix",children:[Object(a.jsx)("div",{className:"skillbar-title",style:o,children:Object(a.jsx)("span",{children:c})}),Object(a.jsx)("div",{className:"skillbar-bar",style:s}),Object(a.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};j.defaultProps={categories:[]};var v=j,O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(c,e);var t,n,r,i=m(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(h.a)(Object(h.a)({},n),{},Object(p.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=c,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(a.jsx)(v,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(a.jsx)(g,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"skills",children:[Object(a.jsx)("div",{className:"link-to",id:"skills"}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h3",{children:"Skills"}),Object(a.jsx)("p",{children:"Here is a *mostly* honest overview of my skills."})]}),Object(a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&u(t.prototype,n),r&&u(t,r),c}(r.Component);O.defaultProps={skills:[],categories:[]};var S=O,k=function(e){var t=e.data,n=e.last;return Object(a.jsxs)("li",{className:"course-container",children:[Object(a.jsxs)("a",{href:t.link,children:[Object(a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(a.jsx)("div",{className:"course-dot",children:Object(a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};k.defaultProps={last:!1};var x=k,D=function(e){var t,n=e.data;return Object(a.jsxs)("div",{className:"courses",children:[Object(a.jsx)("div",{className:"link-to",id:"courses"}),Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h3",{children:"Selected Courses"})}),Object(a.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(a.jsx)(x,{data:e,last:n===t.length-1},e.title)})))})]})};D.defaultProps={data:[]};var w=D,E=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],C=[{school:"Kyushu University",degree:"M.S. Information Science and Electrical Engineering",link:"https://www.isee.kyushu-u.ac.jp/e/",year:2022},{school:"Kyushu University",degree:"B.S. Electrical Engineering and Computer Science",link:"http://www.eng.kyushu-u.ac.jp/e/u_electrical.html",year:2020}],P=n(17);var N=n(24);var M,A=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:4,category:["Web Development","Javascript"]},{title:"Flask",competency:4,category:["Web Development","Python"]},{title:"Git",competency:3,category:["Tools"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:4,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(h.a)(Object(h.a)({},e),{},{category:e.category.sort()})})),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(M=new Set(A.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(P.a)(e)}(M)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||Object(N.a)(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:L[t]}})),B=["Education","Skills","Courses"];t.default=function(){return Object(a.jsx)(c.a,{title:"Resume",description:"Simon Juba's Resume. School of Information Science and Electrical Engineering, Kyushu University.",children:Object(a.jsxs)("article",{className:"post",id:"resume",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h2",{"data-testid":"heading",children:Object(a.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(a.jsx)("div",{className:"link-container",children:B.map((function(e){return Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(a.jsx)(l,{data:C}),Object(a.jsx)(S,{skills:A,categories:_}),Object(a.jsx)(w,{data:E})]})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(57);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.bdb15c98.chunk.js.map