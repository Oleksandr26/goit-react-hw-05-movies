"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{510:function(e,t,n){n.d(t,{O:function(){return p}});var r=n(501),a=n(871),c="MovieList_list__yjDCC",s="MovieList_item__tDivI",u="MovieList_title__QyMtJ",o="MovieList_link__+cn-g",i="MovieList_img__Tmz2C",f=n(184);function p(e){var t=e.movies,n=(0,a.TH)(),p=t.map((function(e){var t=e.id,a=e.title,c=e.backdrop_path;return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:n},className:o,children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(c),alt:a,className:i,width:"200"}),(0,f.jsx)("p",{className:u,children:a})]})},t)}));return(0,f.jsx)("ul",{className:c,children:p})}},247:function(e,t,n){n.d(t,{Bt:function(){return v},DD:function(){return f},Tg:function(){return o},d5:function(){return p},on:function(){return i}});var r=n(861),a=n(757),c=n.n(a),s="https://api.themoviedb.org/3/",u="42a5b39371cdee67f851a43d6e8fc07d",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("\n".concat(s,"trending/movie/week?api_key=").concat(u));case 2:if((t=e.sent).ok){e.next=5;break}throw new Error(t.status);case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,fetch("".concat(s,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false\n    "));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.status);case 6:return e.next=8,r.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US\n    "));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.status);case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US\n    "));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.status);case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1\n    "));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error(n.status);case 5:return e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},674:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(885),c=n(757),s=n.n(c),u=n(791),o=n(247),i=n(510),f=n(673),p="HomePage_title__UFLA3",v=n(184);var h=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],h=(0,u.useState)(!1),l=(0,a.Z)(h,2),m=l[0],_=l[1],x=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,o.Tg)();case 4:t=e.sent,c(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error: ",e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){x()}),[]),(0,v.jsxs)("main",{children:[m&&(0,v.jsx)(f.$,{}),(0,v.jsx)("h2",{className:p,children:"Popular movies"}),(0,v.jsx)(i.O,{movies:n})]})}}}]);
//# sourceMappingURL=674.e806a482.chunk.js.map