(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={nav:"NavBar_nav__15vVy",list:"NavBar_list__k-6nN",link:"NavBar_link__3eZxz",active:"NavBar_active__1H6Ly"}},function(e,a,t){e.exports={alt_message:"Post_alt_message__3YnyQ",container:"Post_container__3_jv6",top:"Post_top__1ETdc",avatar:"Post_avatar__38Hrd",info:"Post_info__2dZAf",body:"Post_body__GR1wI",comment:"Post_comment__Y_ZKU",testimonials:"Post_testimonials__x_hVB",item:"Post_item__124y_"}},function(e,a,t){e.exports={background:"UserInfo_background__1GgVr",container:"UserInfo_container__3MxlX",avatar:"UserInfo_avatar__1NgcW",body:"UserInfo_body__3U_r_",username:"UserInfo_username__Cdepl",birthday:"UserInfo_birthday__3Ly_z",address:"UserInfo_address__1IuyT",about:"UserInfo_about__SDoFA"}},,function(e,a,t){e.exports={friend:"Friend_friend__GqMSk",avatar:"Friend_avatar__1qP9y",item:"Friend_item__3s5qz",name:"Friend_name__dRw1l",active:"Friend_active__3MfZi"}},,function(e,a,t){e.exports={body:"NewPost_body__2GS_s",textarea:"NewPost_textarea__11ZzQ",btn_wrapper:"NewPost_btn_wrapper__2XIOU",btn:"NewPost_btn__3G7G7"}},function(e,a,t){e.exports={container:"Friends_container__3VRsO",title:"Friends_title__1Nu3M",friends:"Friends_friends__5XRzK"}},function(e,a,t){e.exports={container:"Dialogs_container__1IYW0",dialogsItems:"Dialogs_dialogsItems__3-Gpz",massages:"Dialogs_massages__3HOkM"}},function(e,a,t){e.exports={dialog:"DialogItem_dialog__1aoXs",active:"DialogItem_active__37vZU",avatar:"DialogItem_avatar__57A47"}},function(e,a,t){e.exports={massage:"Message_massage__2S7Mq",outgoing:"Message_outgoing__384Rj",incoming:"Message_incoming__2jO4i"}},,,function(e,a,t){e.exports={body:"Header_body__s8Yd_",logo:"Header_logo__mXrnZ"}},,,,function(e,a,t){e.exports={body:"SideBar_body__3XCaW",friends:"SideBar_friends__3VeXe",friend:"SideBar_friend__1tf_X",avatar:"SideBar_avatar__2LCPQ",name:"SideBar_name__1MqGm",active:"SideBar_active__33IAJ"}},,,function(e,a,t){e.exports={body:"Footer_body__2NQhw"}},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),n=t(24),c=t.n(n),r=(t(33),t(34),t(4)),o=t(2),d=t(21),u=t.n(d),m=t(0),l=function(){return Object(m.jsx)("header",{className:u.a.body,children:Object(m.jsx)("div",{className:u.a.logo,children:Object(m.jsx)("img",{src:"https://placeimg.com/100/100/tech",alt:"logo"})})})},j=t(25),b=t.n(j),p=t(8),_=t.n(p),v=function(){return Object(m.jsx)("nav",{className:_.a.nav,children:Object(m.jsxs)("ul",{className:_.a.list,children:[Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/profile",className:_.a.link,activeClassName:_.a.active,children:"Profile"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/dialogs",className:_.a.link,activeClassName:_.a.active,children:"Dialogs"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/news",className:_.a.link,activeClassName:_.a.active,children:"News"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/music",className:_.a.link,activeClassName:_.a.active,children:"Music"})}),Object(m.jsx)("li",{children:Object(m.jsx)(r.b,{to:"/settings",className:_.a.link,activeClassName:_.a.active,children:"Settings"})})]})})},g=t(15),x=t.n(g),h=t(12),f=t.n(h),O=function(e){var a=e.friend,t="/my-friends/".concat(a.id);return Object(m.jsxs)(r.b,{to:t,className:f.a.friend,activeClassName:f.a.active,children:[Object(m.jsx)("div",{className:f.a.avatar,children:Object(m.jsx)("img",{src:a.avatar,alt:"avatar"})}),Object(m.jsxs)("div",{className:f.a.name,children:[Object(m.jsx)("span",{className:f.a.item,children:a.firstName}),Object(m.jsx)("span",{className:f.a.item,children:a.lastName})]})]})},N=function(e){var a=e.friendsList;return Object(m.jsxs)("div",{className:x.a.container,children:[Object(m.jsx)(r.b,{to:"/my-friends/",className:x.a.title,children:"My Friends"}),Object(m.jsx)("div",{className:x.a.friends,children:a.map((function(e){return Object(m.jsx)(O,{friend:e},e.id)}))})]})},y=function(e){var a=e.data;return Object(m.jsxs)("div",{className:b.a.body,children:[Object(m.jsx)(v,{}),Object(m.jsx)(N,{friendsList:a.friends})]})},w=t(14),M=t.n(w),k=function(){return Object(m.jsxs)("div",{className:M.a.body,children:[Object(m.jsx)("textarea",{className:M.a.textarea,placeholder:"Say something"}),Object(m.jsx)("div",{className:M.a.btn_wrapper,children:Object(m.jsx)("button",{className:M.a.btn,children:"add post"})})]})},B=t(9),q=t.n(B),L=function(e){var a=e.avatar,t=e.name,s=e.lastSeen,i=e.comment,n=e.likeCounter,c=e.shareCounter;return Object(m.jsx)("div",{className:q.a.alt_message,children:Object(m.jsxs)("div",{className:q.a.container,children:[Object(m.jsxs)("div",{className:q.a.top,children:[Object(m.jsx)("div",{className:q.a.avatar,children:Object(m.jsx)("img",{src:a,alt:"avatar"})}),Object(m.jsxs)("div",{className:q.a.info,children:[Object(m.jsx)("h4",{children:t}),Object(m.jsxs)("p",{children:[s," min ago"]})]})]}),Object(m.jsxs)("div",{className:q.a.body,children:[Object(m.jsx)("p",{className:q.a.comment,children:i}),Object(m.jsxs)("div",{className:q.a.testimonials,children:[Object(m.jsxs)("div",{className:q.a.item,children:[Object(m.jsx)("button",{children:"Like"}),Object(m.jsxs)("p",{children:[n," people liked this"]})]}),Object(m.jsxs)("div",{className:q.a.item,children:[Object(m.jsx)("button",{children:"Share"}),Object(m.jsx)("p",{children:c})]})]})]})]})})},C=function(e){var a=e.posts;return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{}),a.map((function(e){return Object(m.jsx)(L,{id:e.id,avatar:e.avatar,name:e.name,lastSeen:e.lastSeen,comment:e.comment,likeCounter:e.likeCounter,shareCounter:e.shareCounter},e.id)}))]})},z=t(10),F=t.n(z),A=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:F.a.background,children:Object(m.jsx)("img",{src:"https://images.unsplash.com/photo-1613379293095-d81837c1502d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"profile background"})}),Object(m.jsxs)("div",{className:F.a.container,children:[Object(m.jsx)("div",{className:F.a.avatar,children:Object(m.jsx)("img",{src:"https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg",alt:"avatar"})}),Object(m.jsxs)("div",{className:F.a.body,children:[Object(m.jsx)("div",{className:F.a.username,children:"Erik Jhonson"}),Object(m.jsx)("div",{className:F.a.birthday,children:"21 March 1991"}),Object(m.jsx)("div",{className:F.a.address,children:"Melbourne, Australia"}),Object(m.jsx)("div",{className:F.a.about,children:"I Don\u2019t know how? But i believe that it is possible one day if i stay with my dream all time."})]})]})]})},I=function(e){var a=e.data;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(A,{}),Object(m.jsx)(C,{posts:a.posts})]})},R=t(28),S=t.n(R),Y=function(){return Object(m.jsx)("footer",{className:S.a.body,children:Object(m.jsx)("p",{children:"\xa9All rights reserved, 2021"})})},P=t(16),Z=t.n(P),T=t(17),D=t.n(T),H=function(e){var a=e.data,t="/dialogs/".concat(a.id);return Object(m.jsxs)(r.b,{to:t,className:D.a.dialog,activeClassName:D.a.active,children:[Object(m.jsx)("div",{className:D.a.avatar,children:Object(m.jsx)("img",{src:a.avatar,alt:"avatar"})}),Object(m.jsx)("p",{children:a.name})]})},Q=t(18),G=t.n(Q),U=function(e){var a,t=e.data;return a="outgoing"===t.kindOfMessage?G.a.outgoing:G.a.incoming,Object(m.jsx)("div",{className:"".concat(G.a.massage," ").concat(a),children:Object(m.jsx)("p",{children:t.text})})},X=function(e){var a=e.data,t=a.dialogs.map((function(e){return Object(m.jsx)(H,{data:e},e.id)})),s=a.messages.map((function(e){return Object(m.jsx)(U,{data:e},e.id)}));return Object(m.jsxs)("div",{className:Z.a.container,children:[Object(m.jsx)("div",{className:Z.a.dialogsItems,children:t}),Object(m.jsx)("div",{className:Z.a.massages,children:s})]})},V=function(){return Object(m.jsx)("div",{children:"News"})},J=function(){return Object(m.jsx)("div",{children:"Music"})},W=function(){return Object(m.jsx)("div",{children:"Settings"})},E=function(e){var a=e.state;return Object(m.jsx)(r.a,{children:Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)(l,{}),Object(m.jsx)(y,{data:a.sideBar}),Object(m.jsxs)("main",{className:"content",children:[Object(m.jsx)(o.a,{path:"/dialogs",render:function(){return Object(m.jsx)(X,{data:a.dialogsPage})}}),Object(m.jsx)(o.a,{path:"/profile",render:function(){return Object(m.jsx)(I,{data:a.profilePage})}}),Object(m.jsx)(o.a,{path:"/news",render:function(){return Object(m.jsx)(V,{})}}),Object(m.jsx)(o.a,{path:"/music",render:function(){return Object(m.jsx)(J,{})}}),Object(m.jsx)(o.a,{path:"/settings",render:function(){return Object(m.jsx)(W,{})}})]}),Object(m.jsx)(Y,{})]})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(a){var t=a.getCLS,s=a.getFID,i=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),s(e),i(e),n(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(E,{state:{profilePage:{posts:[{id:1,avatar:"https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png",name:"Natsuki Minako",lastSeen:15,comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem error inventore iste labore laborum optio perspiciatis praesentium vel. Esse, fuga libero maiores optio pariatur perspiciatis, possimus quia sit tempora, voluptate voluptates voluptatum. Aliquid aperiam atque dignissimos doloremque in iste iusto numquam odio praesentium, quod sed sunt vitae? Aliquam commodi placeat ratione recusandae suscipit temporibus voluptates! A ab aliquid at autem doloribus earum enim esse eum in itaque magni maiores nisi odit quo rem, repudiandae sed sequi similique suscipit totam. Adipisci corporis debitis ea eaque est, eveniet illum minus omnis porro quia, quibusdam repellat saepe sed tempore, unde voluptatum.",likeCounter:324,shareCounter:98},{id:2,avatar:"https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png",name:"Bryan O'Ryan",lastSeen:36,comment:"Amet, lectus sodales accumsan sed sit faucibus. Leo, est. Justo amet hac tempus sed sed sapien sed luctus vitae imperdiet amet non molestie dui ex. Dui quam, tempus eleifend dictum. Libero, urna amet, faucibus. Amet, quis, dui sapien interdum non tortor, efficitur mattis ut. Non in lectus vestibulum augue sodales sodales mauris eget odio. Mattis in integer nunc quis, sit amet, et integer vulputate amet, mattis platea interdum urna urna amet, non aenean odio. Sed elit. Non lectus nec in et ipsum orci, ornare interdum elit. Hac odio. In amet dui est. Non urna hac vitae lorem faucibus. Efficitur cursu.",likeCounter:15,shareCounter:2}]},dialogsPage:{dialogs:[{id:1,name:"Albert Herrera",avatar:"https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg"},{id:2,name:"Natsuki Minako",avatar:"https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png"},{id:3,name:"Bryan O'Ryan",avatar:"https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png"}],messages:[{id:1,text:"Hi! How are you? Where are you disappeared?",kindOfMessage:"outgoing"},{id:2,text:"Hi! I'm OK...",kindOfMessage:"incoming"},{id:3,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\ndolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\nasperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\nnisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\nvoluptatibus.",kindOfMessage:"incoming"},{id:4,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\ndolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\nasperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\nnisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\n voluptatibus.",kindOfMessage:"outgoing"}]},sideBar:{friends:[{id:1,avatar:"https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png",firstName:"Natsuki",lastName:"Minako"},{id:2,avatar:"https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png",firstName:"Bryan",lastName:"O'Ryan"},{id:3,avatar:"https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg",firstName:"AlbertAlbert",lastName:"Herrera"}]}}})}),document.getElementById("root")),K()}],[[41,1,2]]]);
//# sourceMappingURL=main.10d7816d.chunk.js.map