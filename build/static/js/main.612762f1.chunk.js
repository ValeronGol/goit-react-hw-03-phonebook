(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,b,l,u=n(1),d=n.n(u),j=n(12),m=n.n(j),h=(n(20),n(4)),p=n(11),O=n(5),f=n(6),x=n(8),v=n(7),g=n(26),C=n(2),y=n(3),S=y.a.div(a||(a=Object(C.a)(["\n  padding: 20px 50px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),k=n(9),w=y.a.div(r||(r=Object(C.a)(["\n  width: 300px;\n  padding: 20px;\n  display: block;\n  border: 1px solid #477405;\n"]))),A=y.a.button(c||(c=Object(C.a)(["\n  margin: 5px 10px;\n  background-color: #0a0131ab;\n  color: white;\n  border-radius: 7px;\n  border-color: #201068ab;\n  &:hover {\n    background-color: #5b5bbee6;\n    color: #0a0131ab;\n    border-color: #0a0131ab;\n  }\n"]))),D=y.a.label(i||(i=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n"]))),F=y.a.input(o||(o=Object(C.a)(["\n  border-radius: 2px;\n\n  &:hover,\n  &:focus {\n    border-color: #4015fffb;\n    border-width: medium;\n  }\n"]))),T=n(0),z=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(k.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,number:e.state.number};e.props.onSubmitData(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(T.jsx)(w,{children:Object(T.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(T.jsxs)(D,{children:["Name",Object(T.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(T.jsxs)(D,{children:["Number",Object(T.jsx)(F,{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(T.jsx)(A,{type:"submit",children:"Add contact"})]})})}}]),n}(u.Component),H=y.a.ul(s||(s=Object(C.a)(["\n  padding: 10px;\n  margin: 0;\n"]))),J=y.a.div(b||(b=Object(C.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),Z=y.a.p(l||(l=Object(C.a)(["\n  margin-right: 10px;\n"]))),q=function(e){var t=e.name,n=e.number,a=e.id,r=e.onDelete;return Object(T.jsxs)(J,{children:[Object(T.jsx)(Z,{children:"".concat(t,": ").concat(n)}),Object(T.jsx)("button",{"data-id":a,onClick:r,children:"Delete"})]})},B=function(e){var t=e.contacts,n=e.onDelete;return Object(T.jsx)(H,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(T.jsx)("li",{id:t,children:Object(T.jsx)(q,{name:a,number:r,onDelete:function(){return n(t)}})},Object(g.a)())}))})};B.defaultProps={contacts:[]};var E,L,M,N=B,P=y.a.div(E||(E=Object(C.a)(["\n  padding-bottom: 10px;\n"]))),U=y.a.h4(L||(L=Object(C.a)(["\n  margin: 5px 0;\n  font-size: 18px;\n  font-weight: 500;\n"]))),V=y.a.input(M||(M=Object(C.a)(["\n  border-radius: 2px;\n\n  &:hover,\n  &:focus {\n    border-color: #3493ff;\n    border-width: thick;\n  }\n"]))),I=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setFilterValue=function(t){var n=t.currentTarget.value.toUpperCase();e.props.setFilterToState(n)},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(T.jsxs)(P,{children:[Object(T.jsx)(U,{children:"Find contacts by name"}),Object(T.jsx)(V,{onChange:this.setFilterValue})]})}}]),n}(u.Component),K=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){e.repeatControl(t)},e.repeatControl=function(t){if(!e.state.contacts.map((function(e){return e.name})).includes(t.name)){var n;return n=[].concat(Object(p.a)(e.state.contacts),[{id:Object(g.a)(),name:t.name,number:t.number}]),e.setState(Object(h.a)(Object(h.a)({},e.state),{},{contacts:n}))}alert("".concat(t.name," \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!"))},e.elementDelete=function(e,t){return e.filter((function(e){return e.id!==t}))},e.deleteContactFromContactList=function(t){var n=e.elementDelete(e.state.contacts,t);e.setState(Object(h.a)(Object(h.a)({},e.state),{},{contacts:Object(p.a)(n)}))},e.setFilterToState=function(t){e.setState(Object(h.a)(Object(h.a)({},e.state),{},{filter:"".concat(t)}))},e.filterArr=function(t){return t.filter((function(t){return t.name.toUpperCase().includes(e.state.filter)}))},e}return Object(f.a)(n,[{key:"render",value:function(){return Object(T.jsxs)(S,{children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(z,{onSubmitData:this.formSubmitHandler}),Object(T.jsx)("h1",{children:"Contacts"}),Object(T.jsx)(I,{setFilterToState:this.setFilterToState}),Object(T.jsx)(N,{contacts:this.filterArr(this.state.contacts),onDelete:this.deleteContactFromContactList})]})}}]),n}(u.Component);m.a.render(Object(T.jsx)(d.a.StrictMode,{children:Object(T.jsx)(K,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.612762f1.chunk.js.map