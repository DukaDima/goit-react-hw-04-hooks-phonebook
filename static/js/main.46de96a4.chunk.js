(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={ContactList:"ContactsList_ContactList__3VAoA",ContactList__item:"ContactsList_ContactList__item__2mfRk",ContactList__text:"ContactsList_ContactList__text__2PM0R",ContactsList__Button:"ContactsList_ContactsList__Button__N-pl1"}},12:function(t,e,n){t.exports={Filter__label:"Filter_Filter__label__1zfZ7"}},13:function(t,e,n){t.exports={Title:"Title_Title__3cQPx"}},2:function(t,e,n){t.exports={AddContact__form:"AddContacts_AddContact__form__3eLEx",AddContact__button:"AddContacts_AddContact__button__3GoOL",AddContact__input:"AddContacts_AddContact__input__zqyaE",AddContact__title:"AddContacts_AddContact__title__1k8G-"}},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),i=(n(20),n(15)),r=n(4),l=n(5),u=n(7),_=n(6),d=n(10),h=n.n(d),C=n(8),j=n.n(C),b=n(0),m=function(t){var e=t.id,n=t.name,a=t.phone,c=t.onDeleteContact;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{className:j.a.ContactList__text,children:n}),Object(b.jsx)("p",{className:j.a.ContactList__text,children:a}),Object(b.jsx)("button",{type:"button",className:j.a.ContactsList__Button,onClick:function(){return c(e)},children:"Delete"})]})},p=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("ul",{className:h.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.phone;return Object(b.jsx)("li",{className:h.a.ContactList__item,children:Object(b.jsx)(m,{id:e,name:a,phone:c,onDeleteContact:n})},e)}))})},f=n(2),x=n.n(f),O=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",phone:""},t.nameChange=function(e){t.setState({name:e.currentTarget.value})},t.phoneChange=function(e){t.setState({phone:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",phone:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:x.a.AddContact__form,onSubmit:this.handleSubmit,children:[Object(b.jsx)("div",{className:x.a.AddContact__input,children:Object(b.jsxs)("label",{children:[" ",Object(b.jsx)("p",{className:x.a.AddContact__title,children:"name"}),Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.nameChange})]})}),Object(b.jsx)("div",{className:x.a.AddContact__input,children:Object(b.jsxs)("label",{children:[" ",Object(b.jsx)("p",{className:x.a.AddContact__title,children:"number"}),Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.phone,onChange:this.phoneChange})]})}),Object(b.jsx)("button",{type:"submit",className:x.a.AddContact__button,children:"Add"})]})}}]),n}(a.Component),g=n(12),v=n.n(g),A=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{className:v.a.Filter__label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ",Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})},L=n(13),S=n.n(L),y=function(t){var e=t.title;return Object(b.jsx)("h3",{className:S.a.Title,children:e})},N=n(14),k=n.n(N),F=function(t){Object(u.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.AddContact=function(e){var n=e.name,a=e.phone,c={id:k.a.generate(),name:n,phone:a};t.state.contacts.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts")):t.setState((function(t){return{contacts:[c].concat(Object(i.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContact=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.deleteContact,n=this.filterContact,a=this.getVisibleContact();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(b.jsx)(y,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(b.jsx)(O,{onSubmit:this.AddContact}),Object(b.jsx)(A,{value:t,onChange:n}),Object(b.jsx)(y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(b.jsx)(p,{contacts:a,onDeleteContact:e})]})}}]),n}(a.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),o(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),D()},8:function(t,e,n){t.exports={ContactList__text:"ContactItem_ContactList__text__2CJqZ",ContactsList__Button:"ContactItem_ContactsList__Button__3iOen"}}},[[30,1,2]]]);
//# sourceMappingURL=main.46de96a4.chunk.js.map