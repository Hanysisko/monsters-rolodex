(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monst",src:"https://robohash.org/".concat(e.monst.id,"?set=set2")})," ",Object(u.jsxs)("h1",{children:[" ",e.monst.name," "]},e.id),Object(u.jsx)("h2",{children:e.monst.email})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monstersprop.map((function(e){return Object(u.jsx)(d,{monst:e},e.id)}))})}),p=(n(16),function(e){var t=e.placeholderprop,n=e.handleChangeprop;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"search-box",type:"search",placeholder:t,onChange:n})})}),m=(n(17),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:" Monsters Rolodex "}),Object(u.jsx)("h2",{children:" by Hanysisko and Complete React 2022 "}),Object(u.jsx)(p,{placeholderprop:"search monsters...",handleChangeprop:this.handleChange}),Object(u.jsx)(j,{monstersprop:s})]})}}]),n}(s.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.a7ffe3c8.chunk.js.map