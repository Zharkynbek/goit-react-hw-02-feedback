(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(4),r=a.n(s),d=(a(23),a(9)),o=a(10),i=a(17),l=a(16),b=(a(24),a(44)),j=a(1),u=function(e){var t=e.goodFeedback,a=e.neutralFeedback,c=e.badFeedback;return Object(j.jsxs)("div",{className:"Counter",children:[Object(j.jsx)("span",{className:"goodBtn",children:Object(j.jsx)(b.a,{variant:"contained",color:"primary",onClick:t,children:":)"})}),Object(j.jsx)("span",{className:"neutralBtn",children:Object(j.jsx)(b.a,{variant:"contained",onClick:a,children:":|"})}),Object(j.jsx)(b.a,{variant:"contained",color:"secondary",onClick:c,children:":("})]})},h=function(e){var t=e.good,a=e.neutral,c=e.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Statistics"}),Object(j.jsxs)("div",{className:"Statistics",children:[Object(j.jsxs)("p",{className:"Good",children:["Good: ",t]}),Object(j.jsxs)("p",{className:"Neutral",children:["Neutral: ",a]}),Object(j.jsxs)("p",{className:"Bad",children:["Bad: ",c]}),Object(j.jsxs)("p",{className:"Total",children:["Total: ",t+a+c]}),Object(j.jsxs)("p",{className:"positiveFeedback",children:["Positive feedback: ",t]})]})]})},O=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.goodFeedback=function(){e.setState((function(e){return{good:e.good+1}}))},e.neutralFeedback=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.badFeedback=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsx)(u,{goodFeedback:this.goodFeedback,neutralFeedback:this.neutralFeedback,badFeedback:this.badFeedback}),Object(j.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.good+this.state.neutral+this.state.bad,positivePercentage:this.state.good})]})}}]),a}(c.Component);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.c7267b86.chunk.js.map