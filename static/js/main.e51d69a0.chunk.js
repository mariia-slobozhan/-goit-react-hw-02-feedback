(this["webpackJsonp-goit-react-hw-02-feedback"]=this["webpackJsonp-goit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={item:"Statistics_item__2skIn",total_item:"Statistics_total_item__XUmy4 Statistics_item__2skIn"}},,function(t,e,a){t.exports={section:"Section_section__3jqaO",title:"Section_title__3_NiT"}},,,,,function(t,e,a){t.exports={button:"FeedbackOptions_button__3R2GN"}},,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(5),o=a.n(i),s=(a(16),a(6)),r=a(7),l=a(8),d=a(11),b=a(10),u=(a(17),a(9)),j=a.n(u),h=a(0);function m(t){var e=t.onLeaveFeedback,a=t.options;return Object(h.jsx)("div",{children:a.map((function(t){return Object(h.jsx)("button",{className:j.a.button,type:"button",name:t,onClick:e,children:t},t)}))})}var O=a(2),v=a.n(O);function p(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,i=t.positivePercentage;return Object(h.jsxs)("div",{className:v.a.container,children:[Object(h.jsx)("p",{className:v.a.item,children:"Good: ".concat(e)}),Object(h.jsx)("p",{className:v.a.item,children:"Neutral: ".concat(a)}),Object(h.jsx)("p",{className:v.a.item,children:"Bad: ".concat(n)}),Object(h.jsx)("p",{className:v.a.total_item,children:"Total: ".concat(c)}),Object(h.jsxs)("p",{className:v.a.total_item,children:["Positive feedback: ".concat(e?i:0," %")," "]})]})}var _=a(4),f=a.n(_);function k(t){var e=t.title,a=t.children;return Object(h.jsxs)("section",{className:f.a.section,children:[Object(h.jsx)("h2",{className:f.a.title,children:e}),a]})}var x=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(s.a)({},e.target.name,t[e.target.name]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),a=t.state.good/e*100;return Math.round(a)},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{title:"Please leave feedback",children:Object(h.jsx)(m,{onLeaveFeedback:this.onLeaveFeedback,options:Object.keys(this.state)})}),Object(h.jsx)(k,{title:"Statistics",children:Object(h.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(n.Component),g=x;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e51d69a0.chunk.js.map