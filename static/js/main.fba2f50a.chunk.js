(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(83),t(51)),i=t(6),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Tiffany",middleName:"",lastName:"Guo",message:" Passionate about changing the world with technology. ",icons:[{image:"fa-github",url:"https://github.com/tiffguo"},{image:"fa-facebook",url:"https://www.facebook.com/tiffany.guo.370"},{image:"fa-instagram",url:"https://www.instagram.com/tiffyguo/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/tiffany-guo1/"},{image:"fa-twitter",url:"https://www.twitter.com"}]},u={show:!0,heading:"About Me",imageLink:t(49),imageSize:375,message:"My name is Tiffany Guo. I\u2019m a student at the University of Michigan.",resume:t(56)},d={show:!0,heading:"Recent Projects",gitHubUsername:"tiffguo",reposLength:1,specificRepos:[]},f={show:!1,heading:"Leadership",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",images:[{img:t(49),label:"First slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{img:t(49),label:"Second slide label",paragraph:"Nulla vitae elit libero, a pharetra augue mollis interdum."}],imageSize:{width:"615",height:"450"}},g={show:!0,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:75},{name:"Data Structures",value:85},{name:"C/C++",value:65},{name:"JavaScript",value:90},{name:"React",value:65},{name:"HTML/CSS",value:55},{name:"C#",value:80}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},h=!0,p="Get In Touch",b="I'm currently looking for 2021 summer positions in product design and/or marketing. if you have any questions, or if you just want to say hi, please feel free to email me at",v="tiffguo.com",E=t(68),w=t.n(E),k=t(24),N=t(38),y=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(k.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(w.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),S=t(17),x=t.n(S),j=t(25),_=t(8),O=(t(56),t(21)),C=t.n(O),R=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),z=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),i=Object(_.a)(s,2),o=i[0],m=i[1],u=r.a.useState(Boolean(n)),d=Object(_.a)(u,2),f=d[0],g=d[1];r.a.useEffect((function(){n&&!R.test(n)?h():m(n)}),[n]);var h=function(){var e=Object(j.a)(x.a.mark((function e(){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,C.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),g(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:o,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},L=t(69),T=t(77),P=t(33),M=t(32),I=t(37),A=t(30),F=t.n(A),B=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},G=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(_.a)(l,2),s=c[0],i=c[1],o=Object(n.useCallback)(Object(j.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},W=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(_.a)(c,2),i=s[0],o=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},q=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,i=a.pushed_at;return r.a.createElement(M.a,{md:6},r.a.createElement(I.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,{as:"h5"},t||r.a.createElement(F.a,null)," "),r.a.createElement(I.a.Text,null,n||r.a.createElement(F.a,{count:3})," "),l?r.a.createElement(B,{svn_url:l}):r.a.createElement(F.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(G,{languages_url:s,repo_url:l}):r.a.createElement(F.a,{count:3}),a?r.a.createElement(W,{star_count:c,repo_url:l,pushed_at:i}):r.a.createElement(F.a,null))))},U={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},D="https://api.github.com",H=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(D,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(D,"/repos/").concat(t),o=new Array(l+c.length).fill(U),m=Object(n.useState)([]),u=Object(_.a)(m,2),d=u[0],f=u[1],g=Object(n.useCallback)(Object(j.a)(x.a.mark((function e(){var a,t,n,r,o,m;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,C.a.get(s);case 4:t=e.sent,a=Object(T.a)(t.data.slice(0,l)),e.prev=6,n=Object(L.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,C.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,i]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(k.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(P.a,null,d.length?d.map((function(e,a){return r.a.createElement(q,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(q,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},J=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(k.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/tiffguo","aria-label":"My GitHub"},"Tiffany Guo")," ","using ",r.a.createElement("i",{className:"fab fa-react"})))},K="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,V="undefined"!==typeof window;function Z(e){var a=e.element,t=e.useWindow;if(!V)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function Q(e,a,t,r,l){var c=Object(n.useRef)(Z({useWindow:r})),s=null,i=function(){var a=Z({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};K((function(){if(V){var e=function(){l?null===s&&(s=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}Q.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var X=function(e){var a=r.a.useState(null),t=Object(_.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},Y=t(36),$=t(20),ee=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(_.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(0),o=Object(_.a)(i,2),f=o[0],h=o[1],p=r.a.useRef(),b=X(p),v=b?b.bottom:0;return Q((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),h(t.y))}),[v]),r.a.useEffect((function(){b&&(v-f>=a.current.offsetTop?s(!1):s(!0))}),[v,b,a,f]),r.a.createElement(Y.a,{ref:p,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(Y.a.Brand,{className:"brand",href:"/home/#home"},"<".concat(m.firstName," />")),r.a.createElement(Y.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(Y.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement($.a,{className:"mr-auto"},d.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/home/#projects"},"Projects"),r.a.createElement($.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/home/#aboutme"},"About"),g.show&&r.a.createElement($.a.Link,{className:"nav-link lead",href:"/home/#skills"},"Skills"))))})),ae=t(52),te=t(74),ne=t(73);var re=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(ne.a,{className:n?" progress-bar-animation":"progress",now:t}))};function le(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(re,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var ce=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(le,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(le,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var se=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(_.a)(c,2),i=s[0],o=s[1];return Q((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(k.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(te.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(ae.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(P.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:t,isScrolled:i}))),r.a.createElement(ae.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(P.a,{className:"pt-3 px-1"},r.a.createElement(ce,{skills:n,isScrolled:i}))))))},ie=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},oe=t(47),me=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(oe.a,null,n.map((function(e,a){return r.a.createElement(oe.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(oe.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},ue=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(z,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),d.show&&r.a.createElement(H,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),f.show&&r.a.createElement(me,{heading:f.heading,message:f.message,img:f.images,imageSize:f.imageSize}),g.show&&r.a.createElement(se,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills}))})),de=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/home/"},o&&r.a.createElement(ee,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ue,{ref:e})}}),r.a.createElement(J,null,h&&r.a.createElement(ie,{heading:p,message:b,email:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,a,t){e.exports=t.p+"static/media/hashirshoaeb.32f6b574.png"},56:function(e,a,t){e.exports=t.p+"static/media/resume.9d3da0e2.pdf"},78:function(e,a,t){e.exports=t(112)},83:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.fba2f50a.chunk.js.map