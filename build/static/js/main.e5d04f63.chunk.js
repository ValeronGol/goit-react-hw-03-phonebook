(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,b,l=n(1),u=n.n(l),d=n(12),j=n.n(d),m=(n(20),n(4)),h=n(11),p=n(5),O=n(6),f=n(8),x=n(7),v=n(26),g=n(2),C=n(3),y=C.a.div(a||(a=Object(g.a)(["\n  padding: 20px 50px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),S=n(9),k=C.a.div(r||(r=Object(g.a)(["\n  width: 300px;\n  padding: 20px;\n  display: block;\n  border: 1px solid #477405;\n"]))),w=C.a.button(c||(c=Object(g.a)(["\n  margin: 5px 10px;\n  background-color: #0a0131ab;\n  color: white;\n  border-radius: 7px;\n  border-color: #201068ab;\n  &:hover {\n    background-color: #5b5bbee6;\n    color: #0a0131ab;\n    border-color: #0a0131ab;\n  }\n"]))),A=C.a.label(i||(i=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n"]))),D=n(0),F=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(S.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,number:e.state.number};e.props.onSubmitData(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(D.jsx)(k,{children:Object(D.jsxs)("form",{type:"submit",onSubmit:this.handleSubmit,children:[Object(D.jsxs)(A,{children:["Name",Object(D.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name})]}),Object(D.jsxs)(A,{children:["Number",Object(D.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.number})]}),Object(D.jsx)(w,{type:"submit",children:"Add contact"})]})})}}]),n}(l.Component),T=C.a.ul(o||(o=Object(g.a)(["\n  padding: 10px;\n  margin: 0;\n"]))),z=C.a.div(s||(s=Object(g.a)(["\n  display: flex;\n  align-items: baseline;\n"]))),H=C.a.p(b||(b=Object(g.a)(["\n  margin-right: 10px;\n"]))),J=function(e){var t=e.name,n=e.number,a=e.id,r=e.onDelete;return Object(D.jsxs)(z,{children:[Object(D.jsx)(H,{children:"".concat(t,": ").concat(n)}),Object(D.jsx)("button",{"data-id":a,onClick:r,children:"Delete"})]})},Z=function(e){var t=e.contacts,n=e.onDelete;return Object(D.jsx)(T,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(D.jsx)("li",{id:t,children:Object(D.jsx)(J,{name:a,number:r,onDelete:function(){return n(t)}})},Object(v.a)())}))})};Z.defaultProps={contacts:[]};var q,B,E,L=Z,M=C.a.div(q||(q=Object(g.a)(["\n  padding-bottom: 10px;\n"]))),N=C.a.h4(B||(B=Object(g.a)(["\n  margin: 5px 0;\n  font-size: 18px;\n  font-weight: 500;\n"]))),P=C.a.input(E||(E=Object(g.a)(["\n  border-radius: 2px;\n  border-color: #1f0a80ab;\n\n  &:hover {\n    border-color: #4015fffb;\n    border-width: thick;\n  }\n"]))),U=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).setFilterValue=function(t){var n=t.currentTarget.value.toUpperCase();e.props.setFilterToState(n)},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(D.jsxs)(M,{children:[Object(D.jsx)(N,{children:"Find contacts by name"}),Object(D.jsx)(P,{onChange:this.setFilterValue})]})}}]),n}(l.Component),V=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){e.repeatControl(t)},e.repeatControl=function(t){if(!e.state.contacts.map((function(e){return e.name})).includes(t.name)){var n;return n=[].concat(Object(h.a)(e.state.contacts),[{id:Object(v.a)(),name:t.name,number:t.number}]),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{contacts:n}))}alert("".concat(t.name," \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!"))},e.elementDelete=function(e,t){return e.filter((function(e){return e.id!==t}))},e.deleteContactFromContactList=function(t){var n=e.elementDelete(e.state.contacts,t);e.setState(Object(m.a)(Object(m.a)({},e.state),{},{contacts:Object(h.a)(n)}))},e.setFilterToState=function(t){e.setState(Object(m.a)(Object(m.a)({},e.state),{},{filter:"".concat(t)}))},e.filterArr=function(t){return t.filter((function(t){return t.name.toUpperCase().includes(e.state.filter)}))},e}return Object(O.a)(n,[{key:"render",value:function(){return Object(D.jsxs)(y,{children:[Object(D.jsx)("h1",{children:"Phonebook"}),Object(D.jsx)(F,{onSubmitData:this.formSubmitHandler}),Object(D.jsx)("h1",{children:"Contacts"}),Object(D.jsx)(U,{setFilterToState:this.setFilterToState}),Object(D.jsx)(L,{contacts:this.filterArr(this.state.contacts),onDelete:this.deleteContactFromContactList})]})}}]),n}(l.Component);j.a.render(Object(D.jsx)(u.a.StrictMode,{children:Object(D.jsx)(V,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e5d04f63.chunk.js.map