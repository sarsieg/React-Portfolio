(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(11),c=a.n(n),o=(a(25),a(26),a(3)),s=a(4),i=a(6),l=a(5),h=a(2),j=a.n(h),u={name:"Sarah Siegel",headerTagline:["I am Sarah Siegel","a full stack web developer","from Minneapolis Minnesota."],contactEmail:"sarah.ac.siegel@gmail.com",resume:"",abouttext:"I am a fast learner and a hard worker who is passonate about developing full stack web programs that are not only visually appealing but are also fully functional applications.",aboutImage:"",ShowAboutImage:!0,projects:[{id:1,title:"Food Finders",service:"Helping you choose your next meal",imageSrc:"",url:"https://claholla.github.io/Food-Finders/"},{id:2,title:"Weather App",service:"Application showing you weather updates and forecasts",imageSrc:"",url:"https://sarsieg.github.io/Weather-Dashboard/"},{id:3,title:"Ho[w]asit",service:"Reviews from those you trust",imageSrc:"",url:"https://how-was-it.herokuapp.com/"},{id:4,title:"Express Note Taker",service:"Express.js based note app that is able to create, save and delete new and exisiting notes.",imageSrc:"",url:"https://sarah-express-note-taker.herokuapp.com/"},{id:5,title:"Password Generator",service:"Application used to generate a random and secure passwork for the user.",imageSrc:"",url:"https://sarsieg.github.io/Password-Generator/"},{id:6,title:"Coding Quiz",service:"Applicate put together using Javascript, CSS and HTML to produce a quiz with questions as well as gather data to gener a score. This application also includes a list of save information from other highscores.",imageSrc:"",url:"https://sarsieg.github.io/Web-APIs-Code-Quiz/"}],social:[{name:"Github",url:"https://github.com/sarsieg"},{name:"Linkedin",url:"https://www.linkedin.com/in/sarah-siegel-a68191204/"}]},d=a(0),b=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"heading-background",children:"S SIEGEL"}),Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:Object(d.jsx)(j.a,{bottom:!0,cascade:!0,children:u.name})})}),Object(d.jsx)(j.a,{bottom:!0,children:Object(d.jsxs)("p",{className:"header-title",children:[u.headerTagline[0],Object(d.jsx)("br",{}),u.headerTagline[1],Object(d.jsx)("br",{}),u.headerTagline[2],Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:Object(d.jsx)("a",{href:"mailto:".concat(u.contactEmail),rel:"noopener noreferrer",children:"Contact"})}),Object(d.jsx)("button",{children:Object(d.jsx)("a",{href:"".concat(u.resume),rel:"noopener noreferrer",children:"Resume"})})]})})]})}}]),a}(r.Component),p=b,m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"about",children:Object(d.jsxs)("div",{className:"about-content",children:[Object(d.jsxs)("h1",{children:[" ",Object(d.jsx)(j.a,{bottom:!0,cascade:!0,children:" About. "})]}),Object(d.jsx)(j.a,{bottom:!0,children:Object(d.jsxs)("p",{children:[" ",u.abouttext," "]})})]})})}}]),a}(r.Component),O=m,g=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)(j.a,{bottom:!0,children:Object(d.jsxs)("div",{className:"project",children:[Object(d.jsx)("a",{href:this.props.url,children:Object(d.jsx)("img",{src:this.props.imageSrc,alt:this.props.title})}),Object(d.jsx)("h1",{children:this.props.title}),Object(d.jsx)("span",{children:this.props.service})]})})}}]),a}(r.Component),v=g,f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"heading",children:Object(d.jsx)(j.a,{bottom:!0,cascade:!0,children:"Work."})}),Object(d.jsx)("div",{className:"work-content",children:u.projects.map((function(e){return Object(d.jsx)(v,{title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url},e.id)}))})]})}}]),a}(r.Component),x=f,w=(r.Component,a(8)),k=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={},e.scrollToTop=function(){w.animateScroll.scrollToTop()},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(w.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop,children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(w.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop,children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(w.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop,children:"Contact"})})]})})}}]),a}(r.Component),y=k;var S=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(p,{}),Object(d.jsx)(O,{}),Object(d.jsx)(x,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(S,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.cbb94082.chunk.js.map