(this.webpackJsonptrafficlights=this.webpackJsonptrafficlights||[]).push([[0],{19:function(e,t,n){e.exports={info:"Info_info__2s-dC"}},23:function(e,t,n){e.exports={green:"Green_green__2KIdd",action:"Green_action__2ygH9",blinker:"Green_blinker__2bj3r"}},26:function(e,t,n){e.exports={red:"Red_red__1Zo0J",action:"Red_action__2sIIO",blinker:"Red_blinker__TvVf6"}},27:function(e,t,n){e.exports={yellow:"Yellow_yellow__1geBO",action:"Yellow_action__2lC-2",blinker:"Yellow_blinker__1mAaI"}},35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(17),i=n.n(o),a=(n(35),n(2)),s=(n(36),n(11)),l=n(12),u=n(14),j=n(13),b=n(8),d=n(9),f="CHANGE-COLOR",h="CHANGE-TIMER",O="CHANGE-GO",p={color:"red",timer:0,go:!1},m=function(e){return{type:f,color:e}},v=function(e){return{type:h,time:e}},g=function(e){return{type:O,bool:e}},_=n(23),x=n.n(_),y=n(1),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.changeColor,n=e.history,c=e.changeTimer;(0,e.changeGo)(!0),t("red");var r=15;c(r);var o=setInterval((function(){r--,c(r)}),1e3);setTimeout((function(){clearInterval(o),n.push("/yellow")}),15e3)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"".concat(x.a.green," ").concat(this.props.time<=3?x.a.action:"")})}}]),n}(r.a.Component),C=Object(b.b)((function(e){return{time:e.reducer.timer}}),{changeColor:m,changeGo:g,changeTimer:v})(Object(a.f)(w)),N=n(19),k=n.n(N),G=Object(b.b)((function(e){return{go:e.reducer.go,time:e.reducer.timer}}),{})((function(e){var t=e.go,n=e.time;return Object(y.jsxs)("div",{className:k.a.info,children:[Object(y.jsx)("div",{className:k.a.info_text,children:t?Object(y.jsx)("div",{children:"GO!"}):Object(y.jsx)("div",{children:"Please, wait!"})}),Object(y.jsx)("div",{className:k.a.info_timer,children:"0:".concat(n<10?0:"").concat(n)})]})})),I=n(26),T=n.n(I),E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.changeColor,n=e.history,c=e.changeTimer,r=e.changeGo;t("green"),r(!1);var o=10;c(o);var i=setInterval((function(){o--,c(o)}),1e3);setTimeout((function(){clearInterval(i),n.push("/yellow")}),1e4)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"".concat(T.a.red," ").concat(this.props.time<=3?T.a.action:"")})}}]),n}(r.a.Component),M=Object(b.b)((function(e){return{time:e.reducer.timer}}),{changeColor:m,changeTimer:v,changeGo:g})(Object(a.f)(E)),R=n(27),A=n.n(R),D=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.history,c=t.changeTimer;(0,t.changeGo)(!1);var r=3;c(r);var o=setInterval((function(){r--,c(r)}),1e3);setTimeout((function(){clearInterval(o),n.push("/".concat(e.props.color))}),3e3)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"".concat(A.a.yellow," ").concat(this.props.time<=2?A.a.action:"")})}}]),n}(r.a.Component),F=Object(b.b)((function(e){return{color:e.reducer.color,time:e.reducer.timer}}),{changeColor:m,changeGo:g,changeTimer:v})(Object(a.f)(D)),H=n(16),B=Object(H.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{color:t.color});case h:return Object(d.a)(Object(d.a)({},e),{},{timer:t.time});case O:return Object(d.a)(Object(d.a)({},e),{},{go:t.bool});default:return e}}}),J=Object(H.c)(B);var L=function(){return window.store=J,Object(y.jsx)("div",{className:"app-wrapper",children:Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(G,{}),Object(y.jsxs)("div",{className:"traffic-light",children:[Object(y.jsx)(a.a,{to:"/red"}),Object(y.jsx)("div",{className:"red-off",children:Object(y.jsx)(a.b,{path:"/red",render:function(){return Object(y.jsx)(M,{})}})}),Object(y.jsx)("div",{className:"yellow-off",children:Object(y.jsx)(a.b,{path:"/yellow",render:function(){return Object(y.jsx)(F,{})}})}),Object(y.jsx)("div",{className:"green-off",children:Object(y.jsx)(a.b,{path:"/green",render:function(){return Object(y.jsx)(C,{})}})})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))},Y=n(30);i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(Y.a,{children:Object(y.jsx)(b.a,{store:J,children:Object(y.jsx)(L,{})})})}),document.getElementById("root")),P()}},[[43,1,2]]]);
//# sourceMappingURL=main.de2ea01b.chunk.js.map