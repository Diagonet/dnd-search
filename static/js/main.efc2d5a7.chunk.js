(this["webpackJsonpdnd-search"]=this["webpackJsonpdnd-search"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n(1),a=n.n(s),r=n(18),i=n.n(r),o=(n(24),n(9)),l=n.n(o),u=n(3),j=n(4),b=n(6),d=n(5),h=n(0),O=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"logo",children:["DnD ",Object(h.jsx)("span",{style:{color:"white"},children:"Search"})]})}}]),n}(a.a.Component),p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:["search-result",this.props.value.concentration&&"concentration"].join(" "),children:[Object(h.jsx)("h2",{children:this.props.value.name}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Range:"})," ",this.props.value.range]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Duration:"})," ",this.props.value.duration]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Description:"}),Object(h.jsx)("br",{}),this.props.value.desc]})]})}}]),n}(a.a.Component),x=n(19),v=function(e){return Object(h.jsxs)("button",{className:"btn",onClick:e.onClick,children:[Object(h.jsx)(x.a,{}),"\xa0 Search"]})},f=function(e){var t=e.value,n=e.onClickFunction;return Object(h.jsx)("div",{className:"single-result",onClick:function(){return n(t.url)},children:t.name})},m=function(e){return Object(h.jsx)(h.Fragment,{children:e.value.results.map((function(t,n){return Object(h.jsx)(f,{value:t,onClickFunction:e.onClick},n)}))})},g=function(){var e=Object(s.useState)(null),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(null),i=Object(c.a)(r,2),o=i[0],u=i[1],j=Object(s.useState)(null),b=Object(c.a)(j,2),d=b[0],x=b[1],f=function(){l.a.get("https://www.dnd5eapi.co/api/spells/?name="+n).then((function(e){console.log(e.data),e.data.count>1?(x(null),u(e.data)):1===e.data.count&&g(e.data.results[0].url)})).catch((function(e){console.log(e)})),console.log(n)},g=function(e){l.a.get("https://www.dnd5eapi.co"+e).then((function(e){u(null),console.log(e.data),x(e.data)}))};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"search-box",children:[Object(h.jsx)(O,{}),Object(h.jsx)("input",{type:"text",onChange:function(e){a(e.target.value.toLowerCase().split(" ").join("+"))},onKeyPress:function(e){"Enter"===e.key&&f()}}),Object(h.jsx)(v,{onClick:f})]}),Object(h.jsxs)("div",{className:"results-box",children:[d?Object(h.jsx)(p,{value:d}):"",o?Object(h.jsx)(m,{value:o,onClick:g}):""]})]})};t.default=g;i.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.efc2d5a7.chunk.js.map