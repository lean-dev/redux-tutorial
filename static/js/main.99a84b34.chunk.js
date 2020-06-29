(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=a(144),i=(a(87),a(34)),u=a(8),s=a(139),m=a(140),d=a(66),p=a.n(d),f=a(136),v=a(145),E=a(137),b=a(135),g=a(138),h=a(31),y=function(e){var t=e.src,a=e.alt,c=Object(n.useState)(!0),o=Object(h.a)(c,2),l=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("img",{style:{width:"100%",display:l?"none":"block",height:"100%",objectFit:"cover"},src:t,alt:a||"Movie poster",onLoad:function(){return i(!1)},onError:function(){return i(!1)}}),l&&r.a.createElement(b.a,{variant:"rect",height:"100%"}))},j=function(e){var t=e.label,a=e.value,n=e.first;return r.a.createElement(v.a,{mt:n?0:2},a?r.a.createElement(f.a,{variant:"body1"},r.a.createElement(v.a,{component:"span",display:"flex"},r.a.createElement(v.a,{component:"span",fontWeight:"fontWeightBold",mr:1.5},t,":"),r.a.createElement("span",null,a))):r.a.createElement(b.a,{width:"80%"}))},O=function(e){var t=e.entity;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{container:!0,spacing:5},r.a.createElement(E.a,{item:!0,xs:12,sm:5,md:3},r.a.createElement(y,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title})),r.a.createElement(E.a,{item:!0,xs:12,sm:7,md:9},r.a.createElement(v.a,{mb:2},r.a.createElement(f.a,{variant:"h4",gutterBottom:!0},t?t.Title:r.a.createElement(b.a,{width:"60%"})),r.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(b.a,{width:"20%"}))),r.a.createElement(f.a,{variant:"body1"},t?t.Plot:r.a.createElement(r.a.Fragment,null,Array.from(new Array(3)).map((function(e,t){return r.a.createElement(b.a,{key:t})})),r.a.createElement(b.a,{width:"50%"}))),r.a.createElement(v.a,{mt:3},r.a.createElement(j,{label:"Director",value:null===t||void 0===t?void 0:t.Director,first:!0}),r.a.createElement(j,{label:"Writer",value:null===t||void 0===t?void 0:t.Writer}),r.a.createElement(j,{label:"Actors",value:null===t||void 0===t?void 0:t.Actors})))),r.a.createElement(v.a,{my:7},r.a.createElement(E.a,{container:!0,spacing:3},(t?t.Ratings.slice(0,3):Array.from(new Array(3))).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:(null===e||void 0===e?void 0:e.Source)||t},!!t&&r.a.createElement(g.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(v.a,{py:2},r.a.createElement(f.a,{variant:"h5",gutterBottom:!0,component:"div"},r.a.createElement(v.a,{textAlign:"center"},e?e.Value:r.a.createElement(b.a,{width:"40%",style:{margin:"auto"}}))),r.a.createElement(f.a,{variant:"body1",component:"div"},r.a.createElement(v.a,{textAlign:"center"},e?e.Source:r.a.createElement(b.a,{width:"80%",style:{margin:"auto"}}))))))})))),r.a.createElement(v.a,{mt:3},r.a.createElement(E.a,{container:!0,spacing:1},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(j,{label:"Awards",value:null===t||void 0===t?void 0:t.Awards,first:!0}),r.a.createElement(j,{label:"Rating",value:null===t||void 0===t?void 0:t.Rated}),r.a.createElement(j,{label:"Release Date",value:null===t||void 0===t?void 0:t.Released}),r.a.createElement(j,{label:"Runtime",value:null===t||void 0===t?void 0:t.Runtime}),r.a.createElement(j,{label:"Genre",value:null===t||void 0===t?void 0:t.Genre})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(j,{label:"Language",value:null===t||void 0===t?void 0:t.Language,first:!0}),r.a.createElement(j,{label:"Country",value:null===t||void 0===t?void 0:t.Country}),r.a.createElement(j,{label:"DVD Release Date",value:null===t||void 0===t?void 0:t.DVD}),r.a.createElement(j,{label:"Box Office Collection",value:null===t||void 0===t?void 0:t.BoxOffice}),r.a.createElement(j,{label:"Production",value:null===t||void 0===t?void 0:t.Production})))))},w=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),null},x=function(e){var t=e.entity,a=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(s.a,null,r.a.createElement(v.a,{mb:5},r.a.createElement(m.a,{startIcon:r.a.createElement(p.a,null),component:i.b,to:"/"},"Back to search")),a?r.a.createElement(f.a,{variant:"body1",color:"textSecondary"},a):r.a.createElement(O,{entity:t})))},C=a(21),k=a.n(C),S=a(30),R=a(19),T=a(53),B=a(41),F=a.n(B);F.a.defaults.baseURL="https://www.omdbapi.com/",F.a.interceptors.request.use((function(e){return e.params=Object(R.a)({apikey:"e30c3fda"},e.params),e}),(function(e){return Promise.reject(e)}));var D,L=function(){return F.a.CancelToken.source()},N=F.a,A={fetchBySearch:function(){var e=Object(S.a)(k.a.mark((function e(){var t,a,n,r,c,o,l,i,u=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"",a=u.length>1&&void 0!==u[1]?u[1]:1,n=u.length>2&&void 0!==u[2]?u[2]:"",r=u.length>3?u[3]:void 0,e.next=6,N.get("/",{params:{s:t,page:a,type:n},cancelToken:r});case 6:if(c=e.sent,o=c.data,l=o.Response,o.Error,i=Object(T.a)(o,["Response","Error"]),"False"!==l){e.next=11;break}throw new Error("No results found");case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchByID:function(){var e=Object(S.a)(k.a.mark((function e(t,a){var n,r,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/",{params:{i:t,plot:"full"},cancelToken:a});case 2:if(n=e.sent,r=n.data,c=r.Response,r.Error,o=Object(T.a)(r,["Response","Error"]),"False"!==c){e.next=7;break}throw new Error("No result found");case 7:return e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},I=function(e,t){switch(t.type){case"start":return{loading:!0,error:null,data:null};case"success":return Object(R.a)({},e,{loading:!1,data:t.payload});case"error":return Object(R.a)({},e,{loading:!1,error:t.payload});default:throw new Error("undefined action")}},P=function(){var e=function(e){var t=Object(n.useReducer)(I,{loading:!1,error:null,data:null}),a=Object(h.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){c({type:"start"});var t=L();return function(){var a=Object(S.a)(k.a.mark((function a(){var n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,A.fetchByID(e,t.token);case 3:n=a.sent,c({type:"success",payload:n}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),N.isCancel(a.t0)||c({type:"error",payload:a.t0.message});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}()(),function(){t.cancel()}}),[e]),r}(Object(u.g)().id),t=e.data,a=e.error;return r.a.createElement(x,{entity:t,error:a})},M=a(141),q=a(142),W=a(147),G=a(143),V=a(68),U=a.n(V),z=a(67),H=a.n(z),J=Object(M.a)((function(e){return{root:{padding:"2px 4px 2px 10px",display:"flex",alignItems:"center",maxWidth:600},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}}})),Y=function(e){var t=e.input,a=e.setInput,n=(e.error,e.searchTerm),c=e.onSubmit,o=e.onReset,l=J();return r.a.createElement(q.a,{component:"form",className:l.root,onSubmit:c,onReset:o},r.a.createElement(W.a,{className:l.input,placeholder:"Search movies",inputProps:{"aria-label":"search movies"},value:t,onChange:function(e){return a(e.target.value)},autoFocus:!0}),n&&r.a.createElement(G.a,{className:l.iconButton,"aria-label":"clear",type:"reset"},r.a.createElement(H.a,null)),r.a.createElement(g.a,{className:l.divider,orientation:"vertical"}),r.a.createElement(G.a,{className:l.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(U.a,null)))},Z=a(13),$=a(22),_=a(35),K=Object($.b)("".concat("movie","/fetchMoviesBySearch"),function(){var e=Object(S.a)(k.a.mark((function e(t,a){var n,r,c,o,l,i,u,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=a.signal,c=L(),r.addEventListener("abort",(function(){return c.cancel()})),o=n().filter,l=o.searchTerm,i=o.page,u=o.type,e.next=6,A.fetchBySearch(l,i,u,c.token);case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Q=Object($.c)({name:"movie",initialState:{entities:[],totalEntities:0,error:"",loading:!1},reducers:{resetMovies:function(e){return Object(R.a)({},e,{entities:[],totalEntities:0,error:""})}},extraReducers:(D={},Object(_.a)(D,K.pending,(function(e){e.loading=!0})),Object(_.a)(D,K.fulfilled,(function(e,t){e.entities=t.payload.Search,e.totalEntities=t.payload.totalResults,e.error="",e.loading=!1})),Object(_.a)(D,K.rejected,(function(e,t){e.entities=[],e.totalEntities=0,e.error=t.error.message,e.loading=!1})),D)}),X=Q.actions.resetMovies,ee=Q.reducer,te=Object($.c)({name:"filter",initialState:{searchTerm:"",page:1,type:""},reducers:{setSearchTerm:function(e,t){return Object(R.a)({},e,{searchTerm:t.payload,page:1})},resetFilters:function(){return{searchTerm:"",page:1,type:""}},setPageState:function(e,t){return Object(R.a)({},e,{page:t.payload})},setTypeState:function(e,t){return Object(R.a)({},e,{type:t.payload,page:1})}}}),ae=te.actions,ne=ae.setSearchTerm,re=ae.resetFilters,ce=ae.setPageState,oe=ae.setTypeState,le=Object($.b)("".concat("filter","/search"),(function(e,t){var a=t.dispatch;a(ne(e)),a(K())})),ie=Object($.b)("".concat("filter","/resetSearch"),(function(e,t){var a=t.dispatch;a(re()),a(X())})),ue=Object($.b)("".concat("filter","/setPage"),(function(e,t){var a=t.dispatch;a(ce(e)),a(K())})),se=Object($.b)("".concat("filter","/setType"),(function(e,t){var a=t.dispatch;a(oe(e)),a(K())})),me=te.reducer,de=function(){var e=Object(Z.d)((function(e){return e.filter.searchTerm})),t=Object(Z.c)(),a=Object(n.useState)(""),c=Object(h.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(),u=Object(h.a)(i,2),s=u[0],m=u[1],d=Object(n.useRef)();Object(n.useEffect)((function(){l(e)}),[e]);return r.a.createElement(Y,{input:o,setInput:l,error:s,searchTerm:e,onSubmit:function(e){e.preventDefault(),d.current&&d.current.abort(),m(""),o.length<3?m("minimum 3 chars"):d.current=t(le(o))},onReset:function(e){e.preventDefault(),l(""),m(),t(ie())}})},pe=function(){return r.a.createElement(f.a,{variant:"subtitle1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt labore nihil non hic distinctio harum voluptas sequi quidem asperiores sunt dolorum, maiores maxime a nam tempora ipsum fugit nemo! Recusandae? Veritatis ex dolore magni atque quisquam voluptatem, delectus assumenda officiis nobis explicabo odio alias cupiditate sunt nesciunt labore autem. Iusto, quisquam.")},fe=a(71),ve=a.n(fe),Ee=a(72),be=a.n(Ee),ge=a(73),he=a.n(ge),ye=a(150),je=function(e){var t=e.value,a=e.label,n=e.icon,c=e.type,o=e.onClick,l=e.onDelete;return r.a.createElement(ye.a,{label:a,icon:n,color:c===t?"secondary":"default",onClick:function(){return o(t)},onDelete:c===t?l:null})},Oe=Object(M.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{marginRight:e.spacing(1)}}}})),we=function(e){var t=e.type,a=e.onFilter,n=e.onResetFilter,c=Oe(),o=function(e){e!==t&&a(e)},l=function(){t&&n()};return r.a.createElement("div",{className:c.root},r.a.createElement(je,{value:"movie",label:"Movie",icon:r.a.createElement(ve.a,null),type:t,onClick:o,onDelete:l}),r.a.createElement(je,{value:"series",label:"Series",icon:r.a.createElement(be.a,null),type:t,onClick:o,onDelete:l}),r.a.createElement(je,{value:"episode",label:"Episode",icon:r.a.createElement(he.a,null),type:t,onClick:o,onDelete:l}))},xe=function(){var e=Object(Z.d)((function(e){return e.filter.type})),t=Object(Z.c)(),a=Object(n.useRef)();return r.a.createElement(we,{type:e,onFilter:function(e){a.current&&a.current.abort(),a.current=t(se(e))},onResetFilter:function(){a.current&&a.current.abort(),a.current=t(se(""))}})},Ce=function(e){var t=e.totalEntities,a=e.error;return e.loading?r.a.createElement(b.a,{height:20,width:"25%"}):r.a.createElement(f.a,{variant:"body2",color:"textSecondary"},a||"".concat(t," results found"))},ke=a(76),Se=a(74),Re=a.n(Se),Te=Object(M.a)((function(e){return{root:{display:"grid",gridTemplateRows:"350px max-content auto",justifyContent:"normal",alignItems:"start",gridRowGap:e.spacing(1),"&:hover, &:focus":{backgroundColor:Re.a[300]}}}})),Be=function(e){var t=e.entity,a=e.focus,n=Te(),c=Object(u.f)();return r.a.createElement(ke.a,{autoFocus:!!t&&a,className:n.root,onClick:t?function(){return e=t.imdbID,void c.push("/".concat(e));var e}:null},r.a.createElement(y,{src:null===t||void 0===t?void 0:t.Poster,alt:null===t||void 0===t?void 0:t.Title}),r.a.createElement(f.a,{component:"div"},r.a.createElement(v.a,{fontSize:17,lineHeight:"normal",mt:1,px:1},t?t.Title:r.a.createElement(b.a,null))),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"div"},r.a.createElement(v.a,{px:1,mb:2},t?"".concat(t.Type.toUpperCase()," \u2022 ").concat(t.Year):r.a.createElement(b.a,{width:"60%"}))))},Fe=a(146),De=Object(M.a)((function(){return{ul:{justifyContent:"center"}}})),Le=function(e){var t=e.count,a=e.page,n=e.onPageChange,c=De();return r.a.createElement(Fe.a,{count:t,page:a,onChange:n,size:"large",showFirstButton:!0,showLastButton:!0,classes:c,color:"secondary"})},Ne=function(){var e=Object(Z.d)((function(e){return e.filter.page})),t=Object(Z.d)((function(e){return Math.ceil(e.movie.totalEntities/10)})),a=Object(Z.c)(),c=Object(n.useRef)();return t>1&&r.a.createElement(Le,{count:t,page:e,onPageChange:function(e,t){c.current&&c.current.abort(),c.current=a(ue(t)),window.scrollTo(0,0)}})},Ae=Object(M.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr));",gridColumnGap:e.spacing(4),gridRowGap:e.spacing(8),marginBottom:e.spacing(8)}}})),Ie=function(e){var t=e.entities,a=e.loading,n=Ae();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.root},(a?Array.from(new Array(3)):t).map((function(e,t){return r.a.createElement(Be,{entity:e,key:(null===e||void 0===e?void 0:e.imdbID)||t,focus:0===t})}))),!a&&r.a.createElement(Ne,null))},Pe=function(e){var t=e.entities,a=e.totalEntities,n=e.error,c=e.loading,o=!(a||n||c);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement(f.a,{variant:"h2",gutterBottom:!0},r.a.createElement("span",{role:"img","aria-label":"popcorn emoji"},"\ud83c\udf7f"),"Movies"),r.a.createElement(de,null)),o?r.a.createElement(v.a,{mt:3},r.a.createElement(s.a,null,r.a.createElement(pe,null))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{my:3},r.a.createElement(s.a,null,r.a.createElement(xe,null))),r.a.createElement(g.a,null),r.a.createElement(s.a,null,r.a.createElement(v.a,{mt:3,mb:5},r.a.createElement(Ce,{totalEntities:a,error:n,loading:c})),r.a.createElement(Ie,{entities:t,loading:c}))))},Me=function(){var e=Object(Z.d)((function(e){return e.movie}),Z.b),t=e.entities,a=e.totalEntities,n=e.error,c=e.loading;return r.a.createElement(Pe,{entities:t,totalEntities:a,error:n,loading:c})},qe=(a(112),function(e){var t=e.url,a=void 0===t?"https://github.com/batbrain9392":t,n=e.fill,c=void 0===n?"#24292e":n,o=e.color,l=void 0===o?"#fff":o;return r.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:"github-corner","aria-label":"View source on GitHub"},r.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:c,color:l},"aria-hidden":"true"},r.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),r.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",className:"octo-arm"}),r.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))});var We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,{url:"https://github.com/batbrain9392/redux-tutorial"}),r.a.createElement(i.a,null,r.a.createElement(v.a,{mt:5,mb:10},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/:id",component:P}),r.a.createElement(u.a,{path:"/",exact:!0,component:Me})))))},Ge=Object($.a)({reducer:{filter:me,movie:ee}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null),r.a.createElement(Z.a,{store:Ge},r.a.createElement(We,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(113)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.99a84b34.chunk.js.map