(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),h=n(7),u=n(6),l=(n(13),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monst",src:"https://robohash.org/".concat(e.monst.id,"?set=set2")})," ",Object(l.jsxs)("h1",{children:[" ",e.monst.name," "]},e.id),Object(l.jsx)("h2",{children:e.monst.email})]})},p=(n(15),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monstersprop.map((function(e){return Object(l.jsx)(d,{monst:e},e.id)}))})}),j=(n(16),function(e){var t=e.placeholderprop,n=e.handleChangeprop;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"search-box",type:"search",placeholder:t,onChange:n})})}),f=(n(17),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monster Rolodex"}),Object(l.jsx)(j,{placeholderprop:"search monsters...",handleChangeprop:this.handleChange}),Object(l.jsx)(p,{monstersprop:s})]})}}]),n}(s.Component)),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.4613f456.chunk.js.map