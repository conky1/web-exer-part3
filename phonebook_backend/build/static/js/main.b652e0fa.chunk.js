(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(14),u=t.n(r),a=t(3),i=t(0),o=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)(i.Fragment,{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:function(){return t(n.id,n.name)},children:"delete"}),Object(i.jsx)("br",{})]})},l=function(e){var n=e.filterValue,t=e.filterOnChange;return Object(i.jsxs)(i.Fragment,{children:["filter shown with: ",Object(i.jsx)("input",{value:n,onChange:t}),Object(i.jsx)("br",{})]})},s=function(e){var n=e.filterOnSubmit,t=e.filterValue,c=e.filterValue2,r=e.filterOnChange,u=e.filterOnChange2;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:t,onChange:r}),Object(i.jsx)("br",{}),"number: ",Object(i.jsx)("input",{value:c,onChange:u})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},f=t(4),j=t.n(f),b="/api/persons",d=function(){return j.a.get(b).then((function(e){return e.data}))},h=function(e){return j.a.post(b,e).then((function(e){return e.data}))},O=function(e){return j.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},m=function(e,n){return j.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){var n=e.messageErr,t=e.messageOk;return null===n&&null===t?null:null!==t?Object(i.jsx)("div",{className:"ok",children:t}):null!==n?Object(i.jsx)("div",{className:"error",children:n}):void 0},p=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],u=Object(c.useState)(""),f=Object(a.a)(u,2),j=f[0],b=f[1],p=Object(c.useState)(""),x=Object(a.a)(p,2),g=x[0],w=x[1],C=Object(c.useState)(!1),S=Object(a.a)(C,1)[0],k=Object(c.useState)(""),y=Object(a.a)(k,2),T=y[0],V=y[1],N=Object(c.useState)(null),D=Object(a.a)(N,2),E=D[0],J=D[1],P=Object(c.useState)(null),F=Object(a.a)(P,2),L=F[0],A=F[1];Object(c.useEffect)((function(){d().then((function(e){r(e)}))}),[]);var B=S?t:t.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase())})),I=function(e,n){window.confirm("Delete ".concat(n,"?"))&&O(e).then((function(){r(t.filter((function(n){return n.id!==e}))),A("'".concat(n,"' removed from server")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){J("Person '".concat(n,"' was already removed from server")),setTimeout((function(){J(null)}),5e3),d().then((function(e){r(e)}))}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(v,{messageErr:E,messageOk:L}),Object(i.jsx)(l,{filterValue:T,filterOnChange:function(e){V(e.target.value)}}),Object(i.jsx)("h2",{children:"add a new"}),Object(i.jsx)(s,{filterOnSubmit:function(e){e.preventDefault();var n={name:j,number:g};if(t.map((function(e){return e.name})).includes(j)){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var c=t.filter((function(e){return e.name==j})).map((function(e){return e.id}));m(c,n).then((function(){d().then((function(e){r(e)})),A("Person '".concat(j,"' new number updated")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){J("".concat(JSON.stringify(e.response.data))),setTimeout((function(){J(null)}),5e3),d().then((function(e){r(e)}))}))}}else h(n).then((function(e){r(t.concat(e)),A("Added '".concat(j,"'")),setTimeout((function(){A(null)}),5e3)})).catch((function(e){J("".concat(JSON.stringify(e.response.data))),setTimeout((function(){J(null)}),5e3)}));b(""),w("")},filterValue:j,filterOnChange:function(e){b(e.target.value)},filterValue2:g,filterOnChange2:function(e){w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("div",{children:B.map((function(e){return Object(i.jsx)(o,{person:e,handleDelete:I},e.id)}))})]})};t(38);u.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b652e0fa.chunk.js.map