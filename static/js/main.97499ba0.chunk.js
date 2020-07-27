(this["webpackJsonptatak-cash"]=this["webpackJsonptatak-cash"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),c=(a(32),a(11)),l=a(12),i=a(14),m=a(13),u=a(40),d=a(41),h=a(42),p=a(43),E=a(44),g=a(16),f=function(e){var t=e.transactions,a=e.onLogout,n=e.coh,s=e.sales,o=e.expenses,c=t.map((function(e){return r.a.createElement("tr",{key:e.id,className:"Expenses"===e.type?"bg-danger":"bg-success"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.trans_date),r.a.createElement("td",null,e.transaction),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.amount))}));return r.a.createElement(u.a,null,r.a.createElement("h1",{className:"text-center mt-3"},"Tatak Clothing Transactions"),r.a.createElement("div",{className:"d-flex mt-3"},r.a.createElement(g.b,{to:"/addtransaction",className:"ml-auto"},r.a.createElement(d.a,{color:"primary"},"Add Transaction")),r.a.createElement(d.a,{color:"danger",className:"ml-3",onClick:function(){a()}},"Logout")),r.a.createElement(h.a,{className:"mt-4",dark:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Amount"))),r.a.createElement("tbody",null,c)),r.a.createElement(p.a,null,r.a.createElement(E.a,{sm:"12",md:"4"},r.a.createElement("h4",null,"Sales: ",r.a.createElement("span",{className:"text-info"},s))),r.a.createElement(E.a,{sm:"12",md:"4"},r.a.createElement("h4",null,"Expenses: ",r.a.createElement("span",{className:"text-danger"},o))),r.a.createElement(E.a,{sm:"12",md:"4"},r.a.createElement("h4",null,"Cash-On-Hand: ",r.a.createElement("span",{className:"text-success"},n)))))},y=a(25),x=a(46),v=a(47),b=a(48),S=a(49),k=a(6),N=function(e){var t=e.className,a=e.color,n=Object(k.f)();return r.a.createElement(d.a,{color:a,className:t,onClick:function(){return n.goBack()}},"Go Back")},T=a(45),C=function(e){var t=e.isLoading,a=e.text;return e.hidden?null:t?r.a.createElement("div",null,r.a.createElement(T.a,{color:"primary",className:"mx-auto d-block"})):r.a.createElement("h5",{className:"text-center text-success"},a)},L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadTransactions=function(){},n.onFieldChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.addTransaction=function(e){e.preventDefault(),n.setState({isLoading:!0,loaderHidden:!1}),fetch("https://tatak-cash-api.herokuapp.com/addtransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,date:new Date,transaction:n.state.transaction,type:n.state.type,amount:n.state.amount})}).then((function(e){return e.json()})).then((function(e){n.setState({isLoading:!1}),n.props.loadTransactions()})).catch(console.log)},n.state={name:"",transaction:"",type:"Sales",amount:0,isLoading:!1,loaderHidden:!0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement("h1",{className:"text-center mb-3"},"Transaction Form"),r.a.createElement(u.a,{className:"mx-auto"},r.a.createElement(x.a,{onSubmit:function(t){return e.addTransaction(t)}},r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Name:"),r.a.createElement(S.a,{type:"text",required:!0,name:"name",onKeyUp:this.onFieldChange})),r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Transaction/Description:"),r.a.createElement(S.a,{type:"textarea",required:!0,name:"transaction",onKeyUp:this.onFieldChange})),r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Transaction Type:"),r.a.createElement(S.a,{type:"select",required:!0,name:"type",onChange:this.onFieldChange},r.a.createElement("option",{value:"Sales"},"Sales"),r.a.createElement("option",{value:"Expenses"},"Expenses"))),r.a.createElement(v.a,null,r.a.createElement(b.a,null,"Amount:"),r.a.createElement(S.a,{type:"number",required:!0,name:"amount",onKeyUp:this.onFieldChange})),r.a.createElement(v.a,null,r.a.createElement(C,{isLoading:this.state.isLoading,text:"Saved!",hidden:this.state.loaderHidden})),r.a.createElement(N,{color:"primary"},"Cancel"),r.a.createElement(d.a,{type:"submit",color:"success",className:"ml-3"},"Save"))))}}]),a}(r.a.Component),j=a(50),w=function(e){var t=e.errMsg;return t?r.a.createElement("p",{className:"text-center text-danger"},t):null},O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLogin=function(e){e.preventDefault(),fetch("https://tatak-cash-api.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.verified?(n.props.onLogin(),n.props.loadTransactions()):n.setState({error:e})})).catch(console.log)},n.onUsernameChange=function(e){n.setState({username:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:"",error:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(j.a,{className:"mx-auto py-5 px-4 shadow mt-md-5 my-5",style:{maxWidth:"330px"}},r.a.createElement("h1",{className:"text-center text-primary"},"Login"),r.a.createElement("hr",null),r.a.createElement(x.a,{onSubmit:function(t){e.onLogin(t)}},r.a.createElement(v.a,null,r.a.createElement(S.a,{type:"text",placeholder:"Username",onKeyUp:this.onUsernameChange})),r.a.createElement(v.a,null,r.a.createElement(S.a,{type:"password",placeholder:"Password",onKeyUp:this.onPasswordChange})),r.a.createElement(w,{errMsg:this.state.error}),r.a.createElement(d.a,{color:"primary",type:"submit",className:"mx-auto d-block"},"Login")))}}]),a}(r.a.Component),I=new(a(26).a),U=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onLogin=function(){I.set("isSignedIn",!0,{path:"/tatak-cash"}),e.setState({isSignedIn:!0})},e.onLogout=function(){I.set("isSignedIn","",{path:"/tatak-cash"}),e.setState({isSignedIn:!1})},e.loadTransactions=function(){fetch("https://tatak-cash-api.herokuapp.com/transactions").then((function(e){return e.json()})).then((function(t){e.setState({transactions:t}),e.computeTransactions()})).catch(console.log)},e.computeTransactions=function(){var t=e.state.transactions.filter((function(e){return"Sales"===e.type})).reduce((function(e,t){return e+Number(t.amount)}),0),a=e.state.transactions.filter((function(e){return"Expenses"===e.type})).reduce((function(e,t){return e+Number(t.amount)}),0),n=t-a;e.setState({coh:n,sales:t,expenses:a})},e.state={transactions:[],sales:0,expenses:0,coh:0,isSignedIn:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){I.get("isSignedIn")&&(this.onLogin(),this.loadTransactions())}},{key:"render",value:function(){return this.state.isSignedIn?r.a.createElement(g.a,null,r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/tatak-cash",children:r.a.createElement(f,{transactions:this.state.transactions,onLogout:this.onLogout,sales:this.state.sales,coh:this.state.coh,expenses:this.state.expenses})}),r.a.createElement(k.a,{exact:!0,path:"/addtransaction",children:r.a.createElement(L,{goBack:this.prevPage,loadTransactions:this.loadTransactions})}))):r.a.createElement(O,{onLogin:this.onLogin,loadTransactions:this.loadTransactions})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.97499ba0.chunk.js.map