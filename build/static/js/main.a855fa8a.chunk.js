(this.webpackJsonpchats=this.webpackJsonpchats||[]).push([[0],{149:function(e,t,c){"use strict";c.r(t);var a,n=c(0),o=c.n(n),i=c(11),r=c.n(i),s=(c(98),c(99),c(186)),l=c(49),d=c(185),j=c(187),h=c(188),p=c(180),u=c(183),b=c(184),x=c(81),O=c(12),f=c(43),m=c(82),g=function(e,t){switch(t.type){case"HANLDE_INPUT":return Object(O.a)(Object(O.a)({},e),{},{textField:t.payload});case"RECEIVE_MSG":return Object(O.a)(Object(O.a)({},e),{},{chats:Object(O.a)(Object(O.a)({},e.chats),{},Object(f.a)({},t.payload.topic,[].concat(Object(m.a)(e.chats[t.payload.topic]),[{from:t.payload.from,msg:t.payload.msg}])))});case"ACTIVE_TOPIC_CHANGE":return Object(O.a)(Object(O.a)({},e),{},{activeTopic:t.payload});default:return e}},v=c(76),y=c.n(v),C=c(6),E=Object(n.createContext)(),T=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT,{textField:"",chats:{Topic1:[],Topic2:[]},activeTopic:""}),N=function(e){var t=e.children,c="f**k"+100*Math.random(100).toFixed(2),o=Object(n.useReducer)(g,T),i=Object(x.a)(o,2),r=i[0],s=i[1],l=Object.keys(r.chats);Object(n.useEffect)((function(){s({type:"ACTIVE_TOPIC_CHANGE",payload:l[0]}),a&&(a.removeAllListeners("chat message"),a.on("chat message",(function(e){s({type:"RECEIVE_MSG",payload:Object(O.a)({},e)})})))}),[]),a||(a=y()("/",{transports:["websocket","polling","flashsocket"]}));return Object(C.jsx)(E.Provider,{value:Object(O.a)(Object(O.a)({},r),{},{handleChange:function(e){s({type:"HANLDE_INPUT",payload:e.target.value})},handleActiveTopic:function(e){s({type:"ACTIVE_TOPIC_CHANGE",payload:e.target.innerText})},sendMessage:function(e){a.emit("chat message",e),a.removeAllListeners("chat message"),a.on("chat message",(function(e){s({type:"RECEIVE_MSG",payload:Object(O.a)({},e)})}))},emptyInput:function(){s({type:"HANLDE_INPUT",payload:""})},user:c}),children:t})};function _(){return Object(n.useContext)(E)}var k=function(){var e=_(),t=e.chats,c=e.handleActiveTopic,a=Object.keys(t),n=R();return Object(C.jsx)("div",{className:n.topics,children:Object(C.jsx)(p.a,{children:a.map((function(e){return Object(C.jsx)(u.a,{button:!0,onClick:c,className:n.topicbutton,children:Object(C.jsx)(b.a,{primary:e})},e)}))})})},I=c(190),w=function(){var e=Object(n.useRef)(null);Object(n.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}));var t=R(),c=_(),a=c.chats,o=c.activeTopic;return o?Object(C.jsx)("div",{className:t.chat,children:Object(C.jsx)("div",{style:{height:"auto",overflowY:"scroll",overflowX:"hidden!important",width:"100%",boxSizing:"content-box",paddingRight:"50px"},children:a[o].map((function(c,a){var n=function(e){for(var t="",c=0,a=0;c<e.length;c++)" "===e[c]&&(a=0),a>=30?(t+=e[c],t+="\n",a=0):(a++,t+=e[c]);return t}(c.msg);return Object(C.jsxs)("div",{className:t.flex2,children:[Object(C.jsx)(I.a,{label:c.from,className:t.chip}),Object(C.jsx)(l.a,{component:"p",children:n}),Object(C.jsx)("div",{ref:e})]},a)}))})}):Object(C.jsx)("div",{children:"Loading"})},A=c(189),R=(c(133),Object(d.a)((function(e){return{root:{padding:e.spacing(3,2),backgroundColor:"#000000"},flex:{display:"flex",alignItems:"center",justifyContent:"space-between","& > *":{margin:"0px 8px 0px 0px"}},flex2:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",width:"95%",height:"auto","& > *":{marginRight:"5px",marginTop:"3px"}},topics:{width:"20%",height:"400px",backgroundColor:"#F47806",borderRadius:"20px"},chat:{width:"80%",height:"360px",padding:"20px",backgroundColor:"#FC9B40",borderRadius:"20px",display:"flex",flexDirection:"column",justifyContent:"flex-end",overflow:"hidden"},input:{width:"65%",backgroundColor:"#FC9B40",color:"#000000",borderRadius:"20px"},button:{width:"15%",padding:"15px 15px",color:"#000000",backgroundColor:"#F47806",borderRadius:"20px",fontWeight:"700"},topicbutton:{marginBottom:"5px","&:hover":{backgroundColor:"#FC9B40",color:"white"}},topicchange:{width:"20%",color:"white!important"},chip:{backgroundColor:"#F50056",color:"#000000"}}})));function S(){var e=_(),t=e.textField,c=e.handleChange,a=e.activeTopic,n=e.sendMessage,o=e.emptyInput,i=e.user,r=R();return Object(C.jsx)("div",{children:Object(C.jsxs)(s.a,{className:r.root,children:[Object(C.jsx)(A.a,{mb:2,children:Object(C.jsx)(l.a,{variant:"h4",component:"h5",children:Object(C.jsxs)(A.a,{className:r.topicchange,children:["Kama",Object(C.jsx)("span",{style:{color:"#F47806"},children:"kazi"})]})})}),Object(C.jsxs)("div",{className:r.flex,children:[Object(C.jsx)(k,{}),Object(C.jsx)(w,{})]}),Object(C.jsx)(A.a,{mt:1,children:Object(C.jsxs)("div",{className:r.flex,children:[Object(C.jsx)(l.a,{className:r.topicchange,variant:"h5",component:"h6",style:{textAlign:"center"},children:Object(C.jsx)(A.a,{children:a})}),Object(C.jsx)(h.a,{id:"outlined-basic",variant:"outlined",label:"Send a message",className:r.input,value:t,required:!0,onChange:c,onKeyPress:function(e){t&&"Enter"===e.key&&(n({from:i,msg:t,topic:a}),o())}}),Object(C.jsx)(j.a,{variant:"contained",className:r.button,onClick:function(){t&&(n({from:i,msg:t,topic:a}),o())},children:"Send"})]})})]})})}var F=function(){return Object(C.jsx)("div",{style:{backgroundColor:"#000000",height:"100vh"},children:Object(C.jsx)("div",{children:Object(C.jsx)(S,{})})})};r.a.render(Object(C.jsx)(o.a.StrictMode,{children:Object(C.jsx)(N,{children:Object(C.jsx)(F,{})})}),document.getElementById("root"))},98:function(e,t,c){},99:function(e,t,c){}},[[149,1,2]]]);
//# sourceMappingURL=main.a855fa8a.chunk.js.map