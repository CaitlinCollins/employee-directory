(this.webpackJsonpbuild=this.webpackJsonpbuild||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n(12),c=n.n(r),a=(n(22),n(0));var l=function(){return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"Employee Directory"}),Object(a.jsx)("p",{children:"Click on carrots to filter heading or use the search box to narrow your results."})]})},o=n(13),i=n(14),d=n(17),u=n(16),h=n(15),j=n.n(h),b=function(){return j.a.get("https://randomuser.me/api/?results=100&nat=us")};var p=function(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")};var m=function(e){return Object(a.jsx)("tbody",{children:e.result.filter((function(t){return t.name.last.includes(e.search)})).map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{alt:"thumbnail",src:e.picture.thumbnail})}),Object(a.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:p(e.dob.date)})]},e.login.uuid)}))})};n(42);var f=function(e){return Object(a.jsx)("div",{className:"search",children:Object(a.jsx)("form",{className:"form-inline",children:Object(a.jsx)("input",{className:"form-control",type:"search","aria-label":"Search",placeholder:"Type Last Name Here!",value:e.search,onChange:function(t){return e.handleChange(t)}})})})},O=(n(43),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={result:[],search:""},e.loadEmployees=function(){b().then((function(t){console.log(t),e.setState({result:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){t.preventDefault(),e.setState({search:t.target.value})},e.handleSort=function(t,n){if("asc"===n){var s=e.state.result.sort((function(e,t){return e.name.last<t.name.last?-1:1}));e.setState({result:s})}else if("dsc"===n){var r=e.state.result.sort((function(e,t){return e.name.last>t.name.last?-1:1}));e.setState({result:r})}},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(f,{search:this.state.search,handleChange:this.handleChange}),Object(a.jsxs)("table",{className:"table table-striped",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"Image"}),Object(a.jsxs)("th",{scope:"col",className:"name",children:["Name",Object(a.jsxs)("span",{className:"dropdown",children:[Object(a.jsx)("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),Object(a.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.handleSort(t,"asc")},children:"Ascending"}),Object(a.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(t){return e.handleSort(t,"dsc")},children:"Descending"})]})]})]}),Object(a.jsx)("th",{scope:"col",children:"Phone"}),Object(a.jsx)("th",{scope:"col",children:"Email"}),Object(a.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(a.jsx)(m,{result:this.state.result,search:this.state.search})]})]})}}]),n}(s.Component));n(44);var x=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(l,{}),Object(a.jsx)(O,{})]})};n(45),n(46),n(50);c.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.fcbb4b97.chunk.js.map