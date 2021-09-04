(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={Filter__label:"Filter_Filter__label__1zfZ7"}},12:function(t,e,n){t.exports={Title:"Title_Title__3cQPx"}},19:function(t,e,n){},2:function(t,e,n){t.exports={AddContact__form:"AddContacts_AddContact__form__3eLEx",AddContact__button:"AddContacts_AddContact__button__3GoOL",AddContact__input:"AddContacts_AddContact__input__zqyaE",AddContact__title:"AddContacts_AddContact__title__1k8G-"}},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),i=n.n(o),s=(n(19),n(14)),r=n(3),_=n(9),l=n.n(_),u=n(7),d=n.n(u),j=n(0),b=function(t){var e=t.id,n=t.name,a=t.phone,c=t.onDeleteContact;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:d.a.ContactList__text,children:n}),Object(j.jsx)("p",{className:d.a.ContactList__text,children:a}),Object(j.jsx)("button",{type:"button",className:d.a.ContactsList__Button,onClick:function(){return c(e)},children:"Delete"})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:l.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.phone;return Object(j.jsx)("li",{className:l.a.ContactList__item,children:Object(j.jsx)(b,{id:e,name:a,phone:c,onDeleteContact:n})},e)}))})},m=n(2),f=n.n(m);function h(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(r.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)(""),_=Object(r.a)(s,2),l=_[0],u=_[1];return Object(j.jsxs)("form",{className:f.a.AddContact__form,onSubmit:function(t){t.preventDefault(),e({name:o,phone:l}),i(""),u("")},children:[Object(j.jsx)("div",{className:f.a.AddContact__input,children:Object(j.jsxs)("label",{children:[" ",Object(j.jsx)("p",{className:f.a.AddContact__title,children:"name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:function(t){i(t.currentTarget.value)}})]})}),Object(j.jsx)("div",{className:f.a.AddContact__input,children:Object(j.jsxs)("label",{children:[" ",Object(j.jsx)("p",{className:f.a.AddContact__title,children:"number"}),Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:function(t){u(t.currentTarget.value)}})]})}),Object(j.jsx)("button",{type:"submit",className:f.a.AddContact__button,children:"Add"})]})}var x=n(11),O=n.n(x),p=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:O.a.Filter__label,children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},L=n(12),A=n.n(L),v=function(t){var e=t.title;return Object(j.jsx)("h3",{className:A.a.Title,children:e})},g=n(13),N=n.n(g);function S(){var t,e=Object(a.useState)(null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]),n=Object(r.a)(e,2),c=n[0],o=n[1],i=Object(a.useState)(""),_=Object(r.a)(i,2),l=_[0],u=_[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(j.jsx)(v,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(j.jsx)(h,{onSubmit:function(t){var e=t.name,n=t.phone,a={id:N.a.generate(),name:e,phone:n};c.find((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts")):o((function(t){return[a].concat(Object(s.a)(t))}))}}),Object(j.jsx)(p,{value:l,onChange:function(t){u(t.currentTarget.value)}}),Object(j.jsx)(v,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(j.jsx)(C,{contacts:function(){var t=l.toLowerCase();return c.filter((function(e){return e.name.toLowerCase().includes(t)}))}(),onDeleteContact:function(t){o((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}var w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),w()},7:function(t,e,n){t.exports={ContactList__text:"ContactItem_ContactList__text__2CJqZ",ContactsList__Button:"ContactItem_ContactsList__Button__3iOen"}},9:function(t,e,n){t.exports={ContactList:"ContactsList_ContactList__3VAoA",ContactList__item:"ContactsList_ContactList__item__2mfRk",ContactList__text:"ContactsList_ContactList__text__2PM0R",ContactsList__Button:"ContactsList_ContactsList__Button__N-pl1"}}},[[29,1,2]]]);
//# sourceMappingURL=main.5810eb16.chunk.js.map