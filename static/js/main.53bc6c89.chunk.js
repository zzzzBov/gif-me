(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),s=(a(15),a(1)),u=a(4),o=a.n(u),l=a(7),m=a(2),f=a.n(m),h=!1,p=a(3),b=a(8),g=f.a.parse(window.location.search.slice(1)),d=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("p",{className:"Footer_copyright"},"Copyright \xa9 zzzzBov"))},v=function(e){var t=e.results;return r.a.createElement("main",{className:"Results"},t.map(function(e){return r.a.createElement("img",Object.assign({className:"Results_result"},e,{key:e.src}))}))},E=function(e){var t=e.label,a=e.name,n=e.onChange,c=e.value;return r.a.createElement("label",{className:"SearchField"},r.a.createElement("span",{className:"SearchField_label"},t),r.a.createElement("input",{autoFocus:!0,className:"SearchField_input",name:a,onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return n(e.currentTarget.value)}),type:"search",value:c}))},S=function(e){var t=e.onChange,a=e.onSubmit,n=e.value;return r.a.createElement("header",{className:"Search"},r.a.createElement("form",{className:"Search_form",method:"GET",onSubmit:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){e.preventDefault(),a()})},r.a.createElement(E,{label:"Gif Me",name:"q",onChange:t,value:n}),r.a.createElement("button",{className:"Search_button",type:"submit"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Search"))))};i.a.render(r.a.createElement(function(){var e=function(e){var t=g[e]||"";"string"!==typeof t&&(t=t.slice(-1)[0]);var a=Object(n.useState)(t),r=Object(s.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)(function(){var t=f.a.stringify(Object(b.a)({},g,Object(p.a)({},e,c)));window.history.replaceState(null,"","?".concat(t))},[e,c]),[c,i]}("q"),t=Object(s.a)(e,2),a=t[0],c=t[1],i=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],c=a[1],i=Object(n.useCallback)(Object(l.a)(o.a.mark(function t(){var a,n,r,i,s;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={api_key:"gIOlBEOuNaMXTmlVKnaIos6clb9St8U3",limit:30,q:e},n=f.a.stringify(a),t.prev=2,t.next=5,fetch("https://api.giphy.com/v1/gifs/search?".concat(n));case 5:if((r=t.sent).ok){t.next=8;break}throw new Error("bad response");case 8:return t.next=10,r.json();case 10:i=t.sent,s=i.data.map(function(e){return{alt:e.title,height:e.images.fixed_height.height,src:e.images.fixed_height.url,width:e.images.fixed_height.width}}),c(s),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),c([]);case 18:case"end":return t.stop()}},t,null,[[2,15]])})),[e]);return h||(i(),h=!0),[r,i]}(a),u=Object(s.a)(i,2),m=u[0],E=u[1];return Object(n.useEffect)(function(){document.title="Gif Me ".concat(a)},[a]),r.a.createElement("div",{className:"GifMe"},r.a.createElement(S,{onChange:c,onSubmit:E,value:a}),r.a.createElement(v,{results:m}),r.a.createElement(d,null))},null),document.querySelector(".Root"))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.53bc6c89.chunk.js.map