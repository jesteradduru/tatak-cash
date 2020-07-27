(this["webpackJsonptatak-cash"]=this["webpackJsonptatak-cash"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),o=a.n(r),c=(a(32),a(11)),l=a(12),i=a(14),m=a(13),u=a(40),d=a(41),h=a(42),p=a(43),E=a(44),g=a(16),f=function(e){var t=e.transactions,a=e.onLogout,n=e.coh,r=e.sales,o=e.expenses,c=t.map((function(e){return s.a.createElement("tr",{key:e.id,className:"Expenses"===e.type?"bg-danger":"bg-success"},s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.trans_date),s.a.createElement("td",null,e.transaction),s.a.createElement("td",null,e.type),s.a.createElement("td",null,e.amount))}));return s.a.createElement(u.a,null,s.a.createElement("h1",{className:"text-center mt-3"},"Tatak Clothing Transactions"),s.a.createElement("div",{className:"d-flex mt-3"},s.a.createElement(g.b,{to:"/tatak-cash/addtransaction",className:"ml-auto"},s.a.createElement(d.a,{color:"primary"},"Add Transaction")),s.a.createElement(d.a,{color:"danger",className:"ml-3",onClick:function(){a()}},"Logout")),s.a.createElement(h.a,{className:"mt-4",dark:!0,responsive:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Date"),s.a.createElement("th",null,"Transaction"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Amount"))),s.a.createElement("tbody",null,c)),s.a.createElement(p.a,null,s.a.createElement(E.a,{sm:"12",md:"4"},s.a.createElement("h4",null,"Sales: ",s.a.createElement("span",{className:"text-info"},r))),s.a.createElement(E.a,{sm:"12",md:"4"},s.a.createElement("h4",null,"Expenses: ",s.a.createElement("span",{className:"text-danger"},o))),s.a.createElement(E.a,{sm:"12",md:"4"},s.a.createElement("h4",null,"Cash-On-Hand: ",s.a.createElement("span",{className:"text-success"},n)))))},y=a(25),x=a(46),v=a(47),S=a(48),b=a(49),k=a(6),L=function(e){var t=e.className,a=e.color,n=Object(k.f)();return s.a.createElement(d.a,{color:a,className:t,onClick:function(){return n.goBack()}},"Go Back")},N=a(45),T=function(e){var t=e.isLoading,a=e.text;return e.hidden?null:t?s.a.createElement("div",null,s.a.createElement(N.a,{color:"danger",type:"grow",className:"mx-auto d-block"})):s.a.createElement("h5",{className:"text-center text-success"},a)},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadTransactions=function(){},n.onFieldChange=function(e){n.setState(Object(y.a)({},e.target.name,e.target.value))},n.addTransaction=function(e){e.preventDefault(),n.setState({isLoading:!0,loaderHidden:!1}),fetch("https://tatak-cash-api.herokuapp.com/addtransaction",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,date:new Date,transaction:n.state.transaction,type:n.state.type,amount:n.state.amount})}).then((function(e){return e.json()})).then((function(e){n.setState({isLoading:!1}),n.props.loadTransactions()})).catch(console.log)},n.state={name:"",transaction:"",type:"Sales",amount:0,isLoading:!1,loaderHidden:!0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(u.a,null,s.a.createElement("h1",{className:"text-center mb-3"},"Transaction Form"),s.a.createElement(u.a,{className:"mx-auto"},s.a.createElement(x.a,{onSubmit:function(t){return e.addTransaction(t)}},s.a.createElement(v.a,null,s.a.createElement(S.a,null,"Name:"),s.a.createElement(b.a,{type:"text",required:!0,name:"name",onKeyUp:this.onFieldChange})),s.a.createElement(v.a,null,s.a.createElement(S.a,null,"Transaction/Description:"),s.a.createElement(b.a,{type:"textarea",required:!0,name:"transaction",onKeyUp:this.onFieldChange})),s.a.createElement(v.a,null,s.a.createElement(S.a,null,"Transaction Type:"),s.a.createElement(b.a,{type:"select",required:!0,name:"type",onChange:this.onFieldChange},s.a.createElement("option",{value:"Sales"},"Sales"),s.a.createElement("option",{value:"Expenses"},"Expenses"))),s.a.createElement(v.a,null,s.a.createElement(S.a,null,"Amount:"),s.a.createElement(b.a,{type:"number",required:!0,name:"amount",onKeyUp:this.onFieldChange})),s.a.createElement(v.a,null,s.a.createElement(T,{isLoading:this.state.isLoading,text:"Saved!",hidden:this.state.loaderHidden})),s.a.createElement(L,{color:"primary"},"Cancel"),s.a.createElement(d.a,{type:"submit",color:"success",className:"ml-3"},"Save"))))}}]),a}(s.a.Component),C=a(50),j=function(e){var t=e.errMsg;return t?s.a.createElement("p",{className:"text-center text-danger"},t):null},O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onLogin=function(e){e.preventDefault(),n.setState({isLoading:!0,loaderHidden:!1}),fetch("https://tatak-cash-api.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.username,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.verified?(n.setState({isLoading:!1}),n.props.onLogin(),n.props.loadTransactions()):(n.setState({error:e}),n.setState({isLoading:!1,loaderHidden:!0}))})).catch(console.log)},n.onUsernameChange=function(e){n.setState({username:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:"",error:"",isLoading:!1,loaderHidden:!0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(C.a,{className:"mx-auto py-5 px-4 shadow mt-md-5 my-5",style:{maxWidth:"330px"}},s.a.createElement("h1",{className:"text-center text-primary"},"Login"),s.a.createElement("hr",null),s.a.createElement(x.a,{onSubmit:function(t){e.onLogin(t)}},s.a.createElement(v.a,null,s.a.createElement(b.a,{type:"text",placeholder:"Username",onKeyUp:this.onUsernameChange})),s.a.createElement(v.a,null,s.a.createElement(b.a,{type:"password",placeholder:"Password",onKeyUp:this.onPasswordChange})),s.a.createElement(v.a,null," ",s.a.createElement(T,{isLoading:this.state.isLoading,text:"Login Successful",hidden:this.state.loaderHidden})),s.a.createElement(j,{errMsg:this.state.error}),s.a.createElement(d.a,{color:"primary",type:"submit",className:"mx-auto d-block"},"Login")))}}]),a}(s.a.Component),H=new(a(26).a),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onLogin=function(){H.set("isSignedIn",!0,{path:"/tatak-cash"}),e.setState({isSignedIn:!0})},e.onLogout=function(){H.set("isSignedIn","",{path:"/tatak-cash"}),e.setState({isSignedIn:!1})},e.loadTransactions=function(){fetch("https://tatak-cash-api.herokuapp.com/transactions").then((function(e){return e.json()})).then((function(t){e.setState({transactions:t}),e.computeTransactions()})).catch(console.log)},e.computeTransactions=function(){var t=e.state.transactions.filter((function(e){return"Sales"===e.type})).reduce((function(e,t){return e+Number(t.amount)}),0),a=e.state.transactions.filter((function(e){return"Expenses"===e.type})).reduce((function(e,t){return e+Number(t.amount)}),0),n=t-a;e.setState({coh:n,sales:t,expenses:a})},e.state={transactions:[],sales:0,expenses:0,coh:0,isSignedIn:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){H.get("isSignedIn")&&(this.onLogin(),this.loadTransactions())}},{key:"render",value:function(){return this.state.isSignedIn?s.a.createElement(g.a,null,s.a.createElement(k.c,null,s.a.createElement(k.a,{exact:!0,path:"/tatak-cash",children:s.a.createElement(f,{transactions:this.state.transactions,onLogout:this.onLogout,sales:this.state.sales,coh:this.state.coh,expenses:this.state.expenses})}),s.a.createElement(k.a,{exact:!0,path:"/tatak-cash/addtransaction",children:s.a.createElement(w,{goBack:this.prevPage,loadTransactions:this.loadTransactions})}))):s.a.createElement(O,{onLogin:this.onLogin,loadTransactions:this.loadTransactions})}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);o.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.685ad08c.chunk.js.map