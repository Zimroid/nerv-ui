(this["webpackJsonpnerv-ui"]=this["webpackJsonpnerv-ui"]||[]).push([[0],[,,function(e,t,r){e.exports={cell:"Connector_cell__2B2qL",connector:"Connector_connector__2DdZ0",connectorDisplay:"Connector_connectorDisplay__1W5P8",connectorDisplayLeft:"Connector_connectorDisplayLeft__3x-Dj",connectorDisplayRight:"Connector_connectorDisplayRight__2HDCu",connectorTextWrapper:"Connector_connectorTextWrapper__3q7S5",connectorText:"Connector_connectorText__3jApz",inited:"Connector_inited__185pl",blink:"Connector_blink__4xOpw",blink2:"Connector_blink2__3ckmx",cable:"Connector_cable__1FK5A"}},,,,,function(e,t,r){e.exports={diagonal:"DiagonalConnectors_diagonal__3CirE",resistorWrapper:"DiagonalConnectors_resistorWrapper__2jRLp"}},,function(e,t,r){e.exports={demoWrapper:"App_demoWrapper__23NFg",gridWrapper:"App_gridWrapper__ywVIR"}},function(e,t,r){e.exports={gridContainer:"SquareGrid_gridContainer__1Ll0_",grid:"SquareGrid_grid__2Kdlq"}},function(e,t,r){e.exports={cellWrapper:"SquareCell_cellWrapper__26luM",cell:"SquareCell_cell__1xXeM"}},function(e,t,r){e.exports={cell:"Resistor_cell__1w8Of",resistor:"Resistor_resistor__1pSzK"}},,function(e,t,r){e.exports={cell:"Cable_cell__153wy"}},function(e,t,r){e.exports={outputResistorWrapper:"OutputCables_outputResistorWrapper__1yGlq"}},,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),c=r(13),a=r.n(c),i=(r(20),r(21),r(9)),s=r.n(i),l=r(10),d=r.n(l),b=r(0);function x(e){var t=e.nbColumns,r=e.nbRows,n=e.children;return Object(b.jsx)("div",{className:d.a.gridContainer,style:{"--nb-columns":t,"--nb-rows":r},children:Object(b.jsx)("div",{className:d.a.grid,children:n})})}var j=r(14),u=r.n(j);function C(e){var t=e.points,r=e.color,n=void 0===r?"#1d1d1d":r,o=0,c=0,a="";return t.forEach((function(e){""===a?(a+="M ".concat(10*e.x+5," ").concat(10*e.y+5),e.x>o&&(o=e.x),e.y>c&&(c=e.y)):e.arc?a+="A 1.2 1 0 0 ".concat(e.revert?"1":"0"," ").concat(10*e.x+5," ").concat(10*e.y+5):a+="L ".concat(10*e.x+5," ").concat(10*e.y+5),e.x>o&&(o=e.x),e.y>c&&(c=e.y)})),o=10*(o+1),c=10*(c+1),Object(b.jsx)("div",{className:u.a.cell,style:{"--width":o,"--height":c},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(o," ").concat(c),children:Object(b.jsx)("path",{d:a,stroke:n,strokeWidth:"2",fill:"none",vectorEffect:"non-scaling-stroke"})})})}var p=r(11),f=r.n(p);function h(e){var t=e.x,r=e.y,n=e.children;return Object(b.jsx)("div",{className:f.a.cellWrapper,style:{"--x":t,"--y":r},children:Object(b.jsx)("div",{className:f.a.cell,children:n})})}function v(e){for(var t=e.nbCables,r=e.cableColor,n=void 0===r?"red":r,o=[],c=0;c<t;c++){var a=[];a=c%2===0?[{x:37-c,y:7+c},{x:40-c,y:10+c},{x:47-c,y:10+c}]:[{x:36-c,y:6+c},{x:40-c,y:10+c},{x:44-c,y:10+c}],o.push(Object(b.jsx)(h,{x:0,y:0,children:Object(b.jsx)(C,{points:a,color:n})},"connectCable".concat(c)))}return Object(b.jsx)(b.Fragment,{children:o})}function m(e){for(var t=e.nbCables,r=e.cableColor,n=void 0===r?"red":r,o=[],c=0;c<t;c++){var a=[];c%2===0?a.push({x:0,y:c},{x:30-c,y:c},{x:32-c,y:2+c}):30-c>0&&a.push({x:0,y:c},{x:30-c,y:c},{x:31-c,y:1+c}),o.push(Object(b.jsx)(h,{x:0,y:0,children:Object(b.jsx)(C,{points:a,color:n})},"inputCable".concat(c)))}return Object(b.jsx)(b.Fragment,{children:o})}var O=r(5),_=r(12),g=r.n(_);function y(e){var t=e.color,r=void 0===t?"red":t;return Object(b.jsx)("div",{className:g.a.cell,children:Object(b.jsx)("div",{className:g.a.resistor,style:{"--color":r}})})}var L=r(15),M=r.n(L);function N(e){for(var t=e.nbCables,r=e.cableColor,n=void 0===r?"red":r,o=e.maximumRight,c=e.maximumBottom,a=function(e,t){var r=Object(O.a)(e);return t.x<=o-1&&t.y<=c-1&&r.push(t),r},i=[],s=0;s<t;s++){var l=[];if(s%2===0){for(var d=54;d<=60;d++)l=a(l,{x:d-s,y:10+s});for(var x=60;x<=76;x++)l=a(l,{x:x-s,y:10+s+x-60});var j=61-s,u=11+s;j<o&&u<c&&i.push(Object(b.jsx)(h,{x:j,y:u,children:Object(b.jsx)("div",{className:M.a.outputResistorWrapper,children:Object(b.jsx)(y,{color:n})})},"outputCable".concat(s,"Resistor")))}else{for(var p=61-s,f=51-s;f<=p;f++)l=a(l,{x:f,y:10+s});for(var v=0;v<=45;v++)v%4===0?(l=a(l,{x:p+.3+v,y:10+s}),l=a(l,{x:p+1.4+v,y:10+s,arc:!0,revert:!0}),l=a(l,{x:p+2+v,y:10+s})):l=a(l,{x:p+1+v,y:10+s})}i.push(Object(b.jsx)(h,{x:0,y:0,children:Object(b.jsx)(C,{points:l,color:n})},"outputCable".concat(s)))}return Object(b.jsx)(b.Fragment,{children:i})}function w(e){var t=e.nbLines,r=e.gridWidth,n=e.gridHeight,o=e.cablesColor,c=void 0===o?"red":o;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{nbCables:t,cableColor:c}),Object(b.jsx)(v,{nbCables:t,cableColor:c}),Object(b.jsx)(N,{nbCables:t,cableColor:c,maximumRight:r,maximumBottom:n})]})}var T=r(3);var W=r(2),k=r.n(W);function R(e){var t=e.text,r=e.id,o=e.disabled,c=e.checked,a=e.connectorColor,i=void 0===a?"red":a,s=e.textColor,l=void 0===s?"white":s,d=e.errorTextColor,x=void 0===d?"black":d,j=Object(n.useRef)(c),u=Object(n.useRef)(!1);return Object(n.useEffect)((function(){(j.current!==c&&(u.current=!0),j.current=c,u.current)&&(c?document.getElementById("animCloseTempo".concat(r)).beginElement():document.getElementById("animOpenTempo".concat(r)).beginElement())}),[c,r]),Object(b.jsxs)("div",{className:"".concat(k.a.cell," ").concat(u?k.a.inited:""),children:[Object(b.jsx)("input",{type:"checkbox",id:r,className:k.a.connector,checked:j.current,onChange:function(){u.current=!0,j.current=!j.current},disabled:o}),Object(b.jsxs)("label",{htmlFor:r,children:[Object(b.jsxs)("div",{className:k.a.connectorDisplay,style:{"--connectorColor":i},children:[Object(b.jsx)("div",{className:k.a.connectorDisplayLeft,style:{"--connectorColor":i}}),Object(b.jsx)("div",{className:k.a.connectorDisplayRight,style:{"--connectorColor":i}})]}),Object(b.jsx)("div",{className:k.a.connectorTextWrapper,style:{"--textColor":l,"--errorTextColor":x},children:Object(b.jsx)("div",{className:k.a.connectorText,children:t})}),Object(b.jsx)("div",{className:k.a.cable,children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 100",children:[Object(b.jsx)("path",{id:"cableConnector"+r,d:"M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50",stroke:i,strokeWidth:"2",fill:"none",vectorEffect:"non-scaling-stroke"}),Object(b.jsx)("animate",{id:"animOpenTempo"+r,href:"#cableConnector"+r,attributeName:"d",from:"M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50",to:"M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50",dur:"0.8s",begin:"indefinite"}),Object(b.jsx)("animate",{id:"animOpen"+r,href:"#cableConnector"+r,attributeName:"d",from:"M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50",to:"M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50",dur:"0.2s",begin:"animOpenTempo"+r+".end",fill:"freeze"}),Object(b.jsx)("animate",{id:"animCloseTempo"+r,href:"#cableConnector"+r,attributeName:"d",from:"M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50",to:"M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50",dur:"0.8s",begin:"indefinite"}),Object(b.jsx)("animate",{id:"animClose"+r,href:"#cableConnector"+r,attributeName:"d",from:"M 49 50 L 70 50 C 85 -20 85 120 100 50 L 170 50 M 751 50 L 730 50 C 715 -20 715 120 700 50 L 630 50",to:"M 49 50 L 90 50 C 105 50 105 50 120 50 L 170 50 M 751 50 L 710 50 C 695 50 695 50 680 50 L 630 50",dur:"0.2s",begin:"animCloseTempo"+r+".end",fill:"freeze"})]})})]})]})}var D=r(7),E=r.n(D);function F(e){var t=e.values,r=e.connectorsColor,o=void 0===r?"red":r,c=e.textColor,a=void 0===c?"white":c,i=e.errorTextColor,s=void 0===i?"black":i,l=Object(n.useState)(t),d=Object(T.a)(l,2),x=d[0],j=d[1],u=x.map((function(e,t){var r=32,n=2,c=123+t,i=-1,l=7;t%2===0?(r-=t,n+=t,i--):(r-=t+1,n=n+t-1,l--);var d=[Object(b.jsx)(h,{x:r,y:n,children:Object(b.jsx)("div",{className:E.a.diagonal,children:Object(b.jsx)(R,{text:"00".concat(c),id:"".concat(c),disabled:!0,checked:e,connectorColor:o,textColor:a,errorTextColor:s})})},"diagonalConnector".concat(t)),Object(b.jsx)(h,{x:r+l,y:n+l,children:Object(b.jsx)("div",{className:E.a.resistorWrapper,children:Object(b.jsx)(y,{color:o})})},"diagonalConnector".concat(t,"Resistor1"))];return r+i>=0&&d.push(Object(b.jsx)(h,{x:r+i,y:n+i,children:Object(b.jsx)("div",{className:E.a.resistorWrapper,children:Object(b.jsx)(y,{color:o})})},"diagonalConnector".concat(t,"Resistor2"))),d}));return Object(n.useEffect)((function(){j(t)}),[t]),Object(b.jsx)(b.Fragment,{children:u})}function S(e){var t=e.values,r=e.connectorsColor,o=void 0===r?"red":r,c=e.textColor,a=void 0===c?"white":c,i=e.errorTextColor,s=void 0===i?"black":i,l=Object(n.useState)(t),d=Object(T.a)(l,2),x=d[0],j=d[1],u=x.map((function(e,t){var r=46,n=10,c=223+t;return t%2===0?(r=r+1-t,n+=t):(r-=t+2,n+=t),Object(b.jsx)(h,{x:r,y:n,children:Object(b.jsx)(R,{text:"00".concat(c),id:"".concat(c),disabled:!0,checked:e,connectorColor:o,textColor:a,errorTextColor:s})},"HorizontalConnectors".concat(t))}));return Object(n.useEffect)((function(){j(t)}),[t]),Object(b.jsx)(b.Fragment,{children:u})}function B(e){for(var t=e.nbConnectors,r=e.connectorsColor,o=void 0===r?"red":r,c=e.textColor,a=void 0===c?"white":c,i=e.errorTextColor,s=void 0===i?"black":i,l=[],d=0;d<t;d++)l.push(!0);var x=[].concat(l),j=Object(n.useState)(l),u=Object(T.a)(j,2),C=u[0],p=u[1],f=Object(n.useState)(x),h=Object(T.a)(f,2),v=h[0],m=h[1];return function(e,t){var r=Object(n.useRef)((function(){}));Object(n.useEffect)((function(){r.current=e})),Object(n.useEffect)((function(){var e=setInterval((function(){r.current()}),t);return function(){return clearInterval(e)}}),[t])}((function(){!function(){for(var e=Math.floor(4*Math.random()),t=new Set,r=0;r<=e;r++)t.add(Math.floor(Math.random()*(l.length+x.length)));var n=Object(O.a)(C),o=Object(O.a)(v);t.forEach((function(e){e<l.length?n[e]=!n[e]:o[e-l.length]=!o[e-l.length]})),p(n),m(o)}()}),400),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(F,{values:C,connectorsColor:o,textColor:a,errorTextColor:s}),Object(b.jsx)(S,{values:v,connectorsColor:o,textColor:a,errorTextColor:s})]})}function q(){var e="#1d1d1d";return Object(b.jsx)("div",{className:s.a.demoWrapper,children:Object(b.jsx)("div",{className:s.a.gridWrapper,children:Object(b.jsxs)(x,{nbColumns:55,nbRows:50,children:[Object(b.jsx)(w,{nbLines:33,cablesColor:e,gridWidth:55,gridHeight:50}),Object(b.jsx)(B,{nbConnectors:33,connectorsColor:e,textColor:"#70ffe7",errorTextColor:"#ff4242"})]})})})}var I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;r(e),n(e),o(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root")),I()}],[[23,1,2]]]);
//# sourceMappingURL=main.a3f05e72.chunk.js.map