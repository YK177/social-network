(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{11:function(e,t,a){e.exports={nav:"NavBar_nav__15vVy",list:"NavBar_list__k-6nN",link:"NavBar_link__3eZxz",active:"NavBar_active__1H6Ly"}},12:function(e,t,a){e.exports={alt_message:"Post_alt_message__3YnyQ",container:"Post_container__3_jv6",top:"Post_top__1ETdc",avatar:"Post_avatar__38Hrd",info:"Post_info__2dZAf",body:"Post_body__GR1wI",comment:"Post_comment__Y_ZKU",testimonials:"Post_testimonials__x_hVB",item:"Post_item__124y_"}},13:function(e,t,a){e.exports={background:"UserInfo_background__1GgVr",container:"UserInfo_container__3MxlX",avatar:"UserInfo_avatar__1NgcW",body:"UserInfo_body__3U_r_",username:"UserInfo_username__Cdepl",birthday:"UserInfo_birthday__3Ly_z",address:"UserInfo_address__1IuyT",about:"UserInfo_about__SDoFA"}},15:function(e,t,a){e.exports={friend:"Friend_friend__GqMSk",avatar:"Friend_avatar__1qP9y",item:"Friend_item__3s5qz",name:"Friend_name__dRw1l",active:"Friend_active__3MfZi"}},16:function(e,t,a){e.exports={user:"User_user__1Brf0",avatar:"User_avatar__1zU6E",info:"User_info__j8ELz",name:"User_name__3ccJm",status:"User_status__cAyCQ",btn_wrapper:"User_btn_wrapper__1anWK"}},23:function(e,t,a){e.exports={container:"Dialogs_container__1IYW0",dialogsItems:"Dialogs_dialogsItems__3-Gpz",messageBlock:"Dialogs_messageBlock__3jvVF",massages:"Dialogs_massages__3HOkM"}},27:function(e,t,a){e.exports={usersPage:"Users_usersPage__3dU-J",users:"Users_users__1TG2g"}},29:function(e,t,a){e.exports={container:"Friends_container__3VRsO",title:"Friends_title__1Nu3M",friends:"Friends_friends__5XRzK"}},30:function(e,t,a){e.exports={dialog:"DialogItem_dialog__1aoXs",active:"DialogItem_active__37vZU",avatar:"DialogItem_avatar__57A47"}},31:function(e,t,a){e.exports={massage:"Message_massage__2S7Mq",outgoing:"Message_outgoing__384Rj",incoming:"Message_incoming__2jO4i"}},32:function(e,t,a){e.exports={body:"AddItemForm_body__3mh_u",textarea:"AddItemForm_textarea__3DfWo",btn_wrapper:"AddItemForm_btn_wrapper__vfH6S"}},33:function(e,t,a){e.exports={pagination:"Pagination_pagination__3hy4e",page:"Pagination_page__2YsrK",selected:"Pagination_selected__2mw3i"}},34:function(e,t,a){e.exports={body:"Header_body__s8Yd_",logo:"Header_logo__mXrnZ",login:"Header_login__1FXNo"}},48:function(e,t,a){e.exports={body:"SideBar_body__3XCaW",friends:"SideBar_friends__3VeXe",friend:"SideBar_friend__1tf_X",avatar:"SideBar_avatar__2LCPQ",name:"SideBar_name__1MqGm",active:"SideBar_active__33IAJ"}},51:function(e,t,a){e.exports={body:"Footer_body__2NQhw"}},53:function(e,t,a){e.exports={preloader:"Preloader_preloader__PuuWo"}},55:function(e,t,a){},60:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);a(55);var s=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},n=a(26),i=a.n(n),r=a(1),c=a.n(r),o=(a(60),a(4)),u=a(48),l=a.n(u),d=a(11),m=a.n(d),j=a(0),p=function(){return Object(j.jsx)("nav",{className:m.a.nav,children:Object(j.jsxs)("ul",{className:m.a.list,children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/profile",className:m.a.link,activeClassName:m.a.active,children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/dialogs",className:m.a.link,activeClassName:m.a.active,children:"Dialogs"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/users",className:m.a.link,activeClassName:m.a.active,children:"Users"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/settings",className:m.a.link,activeClassName:m.a.active,children:"Settings"})})]})})},b=a(6),g=a(29),f=a.n(g),h=a(15),O=a.n(h),_=function(e){var t=e.friend,a="/my-friends/".concat(t.id);return Object(j.jsxs)(o.b,{to:a,className:O.a.friend,activeClassName:O.a.active,children:[Object(j.jsx)("div",{className:O.a.avatar,children:Object(j.jsx)("img",{src:t.avatar,alt:"avatar"})}),Object(j.jsxs)("div",{className:O.a.name,children:[Object(j.jsx)("span",{className:O.a.item,children:t.firstName}),Object(j.jsx)("span",{className:O.a.item,children:t.lastName})]})]})},v=Object(b.b)((function(e){return{data:e.sideBar.friends}}))((function(e){var t=e.data.map((function(e){return Object(j.jsx)(_,{friend:e},e.id)}));return Object(j.jsxs)("div",{className:f.a.container,children:[Object(j.jsx)(o.b,{to:"/my-friends/",className:f.a.title,children:"My Friends"}),Object(j.jsx)("div",{className:f.a.friends,children:t})]})})),x=function(){return Object(j.jsxs)("div",{className:l.a.body,children:[Object(j.jsx)(p,{}),Object(j.jsx)(v,{})]})},w=a(51),N=a.n(w),y=function(){return Object(j.jsx)("footer",{className:N.a.body,children:Object(j.jsx)("p",{children:"\xa9All rights reserved, 2021"})})},T=a(3),P=function(){return Object(j.jsx)("div",{children:"Settings"})},S=a(23),k=a.n(S),M=a(30),U=a.n(M),C=function(e){var t=e.data,a="/dialogs/".concat(t.id);return Object(j.jsxs)(o.b,{to:a,className:U.a.dialog,activeClassName:U.a.active,children:[Object(j.jsx)("div",{className:U.a.avatar,children:Object(j.jsx)("img",{src:t.avatar,alt:"avatar"})}),Object(j.jsx)("p",{children:t.name})]})},E=a(31),L=a.n(E),A=function(e){var t,a=e.data;return t="outgoing"===a.kindOfMessage?L.a.outgoing:L.a.incoming,Object(j.jsx)("div",{className:"".concat(L.a.massage," ").concat(t),children:Object(j.jsx)("p",{children:a.text})})},F=a(32),I=a.n(F),B=function(e){var t=e.value,a=e.addItem,s=e.updateText,n=e.children;return Object(j.jsxs)("div",{className:I.a.body,children:[Object(j.jsx)("textarea",{className:I.a.textarea,placeholder:"Say something...",onChange:function(e){s(e.currentTarget.value)},value:t}),Object(j.jsx)("div",{className:I.a.btn_wrapper,children:Object(j.jsx)("button",{onClick:function(){return a()},className:"btn",children:n})})]})},R=a(28),D=a(2),z={newMessageText:"",dialogs:[{id:1,name:"Albert Herrera",avatar:"https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg"},{id:2,name:"Natsuki Minako",avatar:"https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png"},{id:3,name:"Bryan O'Ryan",avatar:"https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png"}],messages:[{id:1,text:"Hi! How are you? Where are you disappeared?",kindOfMessage:"outgoing"},{id:2,text:"Hi! I'm OK...",kindOfMessage:"incoming"},{id:3,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\ndolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\nasperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\nnisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\nvoluptatibus.",kindOfMessage:"incoming"},{id:4,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos voluptates. Culpa\ndolorem dolores, iusto nisi numquam officiis placeat soluta! A accusamus accusantium alias\nasperiores at consectetur corporis est facere illum, impedit ipsam iure labore magnam modi natus\nnisi optio placeat praesentium quasi quidem reiciendis rerum veniam vitae voluptates\n voluptatibus.",kindOfMessage:"outgoing"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MASSAGE":return Object(D.a)(Object(D.a)({},e),{},{messages:[].concat(Object(R.a)(e.messages),[{id:(new Date).getTime(),text:e.newMessageText,kindOfMessage:"outgoing"}]),newMessageText:""});case"UPDATE-NEW-MESSAGE-TEXT":return Object(D.a)(Object(D.a)({},e),{},{newMessageText:t.newText});default:return e}},G=Object(b.b)((function(e){return{data:e.dialogsPage}}),{addMassage:function(){return{type:"ADD-MASSAGE"}},updateNewMessageText:function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",newText:e}}})((function(e){var t=e.data,a=e.addMassage,s=e.updateNewMessageText;return Object(j.jsxs)("div",{className:k.a.container,children:[Object(j.jsx)("div",{className:k.a.dialogsItems,children:t.dialogs.map((function(e){return Object(j.jsx)(C,{data:e},e.id)}))}),Object(j.jsxs)("div",{className:k.a.messageBlock,children:[Object(j.jsx)("div",{className:k.a.massages,children:t.messages.map((function(e){return Object(j.jsx)(A,{data:e},e.id)}))}),Object(j.jsx)(B,{value:t.newMessageText,addItem:a,updateText:s,children:"Send"})]})]})})),Y=a(18),H=a(19),Z=a(21),W=a(20),J=a(52),X=a.n(J).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b44c493a-a90f-4242-9a95-17cc58fddd62"},withCredentials:!0}),Q=function(e,t){return X.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},V=function(e){return X.post("follow/".concat(e)).then((function(e){return e.data}))},K=function(e){return X.delete("follow/".concat(e)).then((function(e){return e.data}))},$=function(){return X.get("auth/me").then((function(e){return e.data}))},ee=function(e){return X.get("profile/".concat(e)).then((function(e){return e.data}))},te={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!1},ae=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},se=function(e,t){return{type:"TOGGLE-FOLLOWING-PROGRESS",followingInProgress:t,userId:e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW-USER":return Object(D.a)(Object(D.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(D.a)(Object(D.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW-USER":return Object(D.a)(Object(D.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(D.a)(Object(D.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(D.a)(Object(D.a)({},e),{},{users:t.users.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{followingInProgress:!1})}))});case"SET-CURRENT-PAGE":return Object(D.a)(Object(D.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(D.a)(Object(D.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(D.a)(Object(D.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-FOLLOWING-PROGRESS":return Object(D.a)(Object(D.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(D.a)(Object(D.a)({},e),{},{followingInProgress:t.followingInProgress}):e}))});default:return e}},ie=a(27),re=a.n(ie),ce=a.p+"static/media/user.3911aaec.jpg",oe=a(16),ue=a.n(oe),le=function(e){var t=e.user,a=e.followUser,s=e.unfollowUser;return Object(j.jsxs)("div",{className:ue.a.user,children:[Object(j.jsx)(o.b,{to:"/profile/"+t.id,children:Object(j.jsx)("div",{className:ue.a.avatar,children:Object(j.jsx)("img",{src:t.photos.small||ce,alt:t.name})})}),Object(j.jsxs)("div",{className:ue.a.info,children:[Object(j.jsx)("p",{className:ue.a.name,children:t.name}),Object(j.jsx)("p",{className:ue.a.status,children:t.status}),Object(j.jsx)("div",{className:ue.a.btn_wrapper,children:t.followed?Object(j.jsx)("button",{className:"btn ".concat(t.followingInProgress&&"disabled"),disabled:t.followingInProgress,onClick:function(){s(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{className:"btn ".concat(t.followingInProgress&&"disabled"),disabled:t.followingInProgress,onClick:function(){a(t.id)},children:"Follow"})})]})]})},de=function(e){var t=e.users,a=e.followUser,s=e.unfollowUser;return Object(j.jsx)("div",{className:re.a.users,children:t.map((function(e){return Object(j.jsx)(le,{user:e,followUser:a,unfollowUser:s},e.id)}))})},me=a.p+"static/media/spinner.9d54c1ab.svg",je=a(53),pe=a.n(je),be=function(){return Object(j.jsx)("div",{className:pe.a.preloader,children:Object(j.jsx)("img",{src:me,alt:"loading"})})},ge=a(33),fe=a.n(ge),he=function(e){var t=e.totalUsersCount,a=e.pageSize,s=e.currentPage,n=e.onPageChanged,i=Math.ceil(t/a),r=[];if(s>=1&&s<=5)for(var c=1;c<=i&&(r.push(c),10!==r.length);c++);if(s>5)for(var o=s-4;o<=i&&(r.push(o),10!==r.length);o++);return Object(j.jsx)("div",{className:fe.a.pagination,children:r.map((function(e){return Object(j.jsx)("div",{className:fe.a.page,children:Object(j.jsx)("button",{onClick:function(){return n(e)},className:"btn ".concat(e===s&&fe.a.selected),children:e})},e)}))})},Oe=function(e){Object(Z.a)(a,e);var t=Object(W.a)(a);function a(){var e;Object(Y.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e.onFollowUser=function(t){e.props.follow(t)},e.onUnfollowUser=function(t){e.props.unfollow(t)},e}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:re.a.usersPage,children:[Object(j.jsx)(he,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged}),this.props.isFetching?Object(j.jsx)(be,{}):Object(j.jsx)(de,{users:this.props.users,followUser:this.onFollowUser,unfollowUser:this.onUnfollowUser})]})}}]),a}(c.a.Component),_e=Object(b.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching}}),{setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},getUsers:function(e,t){return function(a){a(ae(!0)),Q(e,t).then((function(e){a(ae(!1)),a({type:"SET-USERS",users:e.items}),a({type:"SET-TOTAL-USERS-COUNT",totalCount:e.totalCount})}))}},follow:function(e){return function(t){t(se(e,!0)),V(e).then((function(a){0===a.resultCode&&(t(function(e){return{type:"FOLLOW-USER",userId:e}}(e)),t(se(e,!1)))}))}},unfollow:function(e){return function(t){t(se(e,!0)),K(e).then((function(a){0===a.resultCode&&(t(function(e){return{type:"UNFOLLOW-USER",userId:e}}(e)),t(se(e,!1)))}))}}})(Oe),ve=a(13),xe=a.n(ve),we=function(e){var t=e.profile;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:xe.a.background,children:Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1613379293095-d81837c1502d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",alt:"profile background"})}),Object(j.jsxs)("div",{className:xe.a.container,children:[Object(j.jsx)("div",{className:xe.a.avatar,children:Object(j.jsx)("img",{src:t.photos.small||ce,alt:t.fullName})}),Object(j.jsxs)("div",{className:xe.a.body,children:[Object(j.jsx)("div",{className:xe.a.username,children:t.fullName}),Object(j.jsx)("div",{className:xe.a.birthday,children:t.lookingForAJob}),Object(j.jsx)("div",{className:xe.a.address,children:t.lookingForAJobDescription}),Object(j.jsx)("div",{className:xe.a.about,children:t.aboutMe})]})]})]})},Ne={profile:{aboutMe:"\u044f \u043a\u0440\u0443\u0442\u043e \u0447\u0443\u0432\u0430\u043a 1001%",contacts:{facebook:"facebook.com",website:null,vk:"vk.com/dimych",twitter:"https://twitter.com/@sdf",instagram:"instagra.com/sds",youtube:null,github:"github.com",mainLink:null},lookingForAJob:!0,lookingForAJobDescription:"\u043d\u0435 \u0438\u0449\u0443, \u0430 \u0434\u0443\u0440\u0430\u0447\u0443\u0441\u044c",fullName:"samurai dimych",userId:2,photos:{small:"https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",large:"https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}},newPostText:"",posts:[{id:1,avatar:"https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg",name:"Erik Jhonson",lastSeen:15,comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur dolorem error inventore iste labore laborum optio perspiciatis praesentium vel. Esse, fuga libero maiores optio pariatur perspiciatis, possimus quia sit tempora, voluptate voluptates voluptatum. Aliquid aperiam atque dignissimos doloremque in iste iusto numquam odio praesentium, quod sed sunt vitae? Aliquam commodi placeat ratione recusandae suscipit temporibus voluptates! A ab aliquid at autem doloribus earum enim esse eum in itaque magni maiores nisi odit quo rem, repudiandae sed sequi similique suscipit totam. Adipisci corporis debitis ea eaque est, eveniet illum minus omnis porro quia, quibusdam repellat saepe sed tempore, unde voluptatum.",likeCounter:324,shareCounter:98},{id:2,avatar:"https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg",name:"Erik Jhonson",lastSeen:36,comment:"Amet, lectus sodales accumsan sed sit faucibus. Leo, est. Justo amet hac tempus sed sed sapien sed luctus vitae imperdiet amet non molestie dui ex. Dui quam, tempus eleifend dictum. Libero, urna amet, faucibus. Amet, quis, dui sapien interdum non tortor, efficitur mattis ut. Non in lectus vestibulum augue sodales sodales mauris eget odio. Mattis in integer nunc quis, sit amet, et integer vulputate amet, mattis platea interdum urna urna amet, non aenean odio. Sed elit. Non lectus nec in et ipsum orci, ornare interdum elit. Hac odio. In amet dui est. Non urna hac vitae lorem faucibus. Efficitur cursu.",likeCounter:15,shareCounter:2}]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(D.a)(Object(D.a)({},e),{},{newPostText:"",posts:[{id:(new Date).getTime(),avatar:"https://images.generated.photos/8HvfbgpUo0GD5FBOHMDk7LOvFB_wKaSmG5DzRfd6nMs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNTQ0/MDY0LmpwZw.jpg",name:"Erik Jhonson",lastSeen:0,comment:e.newPostText,likeCounter:0,shareCounter:0}].concat(Object(R.a)(e.posts))});case"UPDATE-NEW-POST-TEXT":return Object(D.a)(Object(D.a)({},e),{},{newPostText:t.newText});case"SET-USER-PROFILE":return Object(D.a)(Object(D.a)({},e),{},{profile:t.profile});default:return e}},Te=a(12),Pe=a.n(Te),Se=function(e){var t=e.data;return Object(j.jsx)("div",{className:Pe.a.alt_message,children:Object(j.jsxs)("div",{className:Pe.a.container,children:[Object(j.jsxs)("div",{className:Pe.a.top,children:[Object(j.jsx)("div",{className:Pe.a.avatar,children:Object(j.jsx)("img",{src:t.avatar,alt:"avatar"})}),Object(j.jsxs)("div",{className:Pe.a.info,children:[Object(j.jsx)("h4",{children:t.name}),Object(j.jsxs)("p",{children:[t.lastSeen," min ago"]})]})]}),Object(j.jsxs)("div",{className:Pe.a.body,children:[Object(j.jsx)("p",{className:Pe.a.comment,children:t.comment}),Object(j.jsxs)("div",{className:Pe.a.testimonials,children:[Object(j.jsxs)("div",{className:Pe.a.item,children:[Object(j.jsx)("button",{className:"btn",children:"Like"}),Object(j.jsxs)("p",{children:[t.likeCounter," people liked this"]})]}),Object(j.jsxs)("div",{className:Pe.a.item,children:[Object(j.jsx)("button",{className:"btn",children:"Share"}),Object(j.jsxs)("p",{children:[t.shareCounter," shared your post"]})]})]})]})]})})},ke=Object(b.b)((function(e){return{data:e.profilePage}}),{addPost:function(){return{type:"ADD-POST"}},updateNewPostText:function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}})((function(e){var t=e.data,a=e.addPost,s=e.updateNewPostText,n=t.posts.map((function(e){return Object(j.jsx)(Se,{data:e},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(B,{value:t.newPostText,addItem:a,updateText:s,children:"Add post"}),n]})})),Me=function(e){var t=e.profile;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(we,{profile:t}),Object(j.jsx)(ke,{})]})},Ue=function(e){Object(Z.a)(a,e);var t=Object(W.a)(a);function a(){return Object(Y.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserProfile(e)}},{key:"render",value:function(){return Object(j.jsx)(Me,{profile:this.props.profile})}}]),a}(c.a.Component),Ce=Object(T.g)(Ue),Ee=Object(b.b)((function(e){return{profile:e.profilePage.profile}}),{getUserProfile:function(e){return function(t){ee(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}}})(Ce),Le=function(){return Object(j.jsxs)(T.d,{children:[Object(j.jsx)(T.b,{path:"/",exact:!0,render:function(){return Object(j.jsx)(T.a,{to:"/profile:userId"})}}),Object(j.jsx)(T.b,{path:"/profile/:userId",render:function(){return Object(j.jsx)(Ee,{})}}),Object(j.jsx)(T.b,{path:"/dialogs",render:function(){return Object(j.jsx)(G,{})}}),Object(j.jsx)(T.b,{path:"/users",render:function(){return Object(j.jsx)(_e,{})}}),Object(j.jsx)(T.b,{path:"/settings",render:function(){return Object(j.jsx)(P,{})}})]})},Ae=a(34),Fe=a.n(Ae),Ie=function(e){return Object(j.jsxs)("header",{className:Fe.a.body,children:[Object(j.jsx)("div",{className:Fe.a.logo,children:Object(j.jsx)("img",{src:"https://placeimg.com/100/100/tech",alt:"logo"})}),Object(j.jsx)("div",{children:e.isAuth?Object(j.jsx)("span",{className:Fe.a.login,children:e.login}):Object(j.jsx)(o.b,{to:"/login",className:"btn-login",children:"login"})})]})},Be={id:null,login:null,email:null,isAuth:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.data),{},{isAuth:!0});default:return e}},De=function(e){Object(Z.a)(a,e);var t=Object(W.a)(a);function a(){return Object(Y.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"componentDidMount",value:function(){this.props.authUserData()}},{key:"render",value:function(){return Object(j.jsx)(Ie,Object(D.a)({},this.props))}}]),a}(c.a.Component),ze=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{authUserData:function(){return function(e){$().then((function(t){if(0===t.resultCode){var a=t.data,s=a.id,n=a.login,i=a.email;e(function(e,t,a){return{type:"SET-USER-DATA",data:{id:e,login:t,email:a}}}(s,n,i))}}))}}})(De),qe=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(ze,{}),Object(j.jsx)(x,{}),Object(j.jsx)("main",{className:"content",children:Object(j.jsx)(Le,{})}),Object(j.jsx)(y,{})]})})},Ge=a(35),Ye={friends:[{id:1,avatar:"https://imgproxy.generated.photos/DAdtlihSCyxITsXjf3_1k54Ueyq3FJYnxQiiqXinCF0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTQzNzAzLnBu/Zw.png",firstName:"Natsuki",lastName:"Minako"},{id:2,avatar:"https://imgproxy.generated.photos/sk_shJ-TA6ctVuqGtL7M_TkH5ACrWQ7CYr9GcPnQHS0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNTYyMDg0LnBu/Zw.png",firstName:"Bryan",lastName:"O'Ryan"},{id:3,avatar:"https://images.generated.photos/kz5RXoqT5RQbMcwPce2BB61EmJeCgg_nnSYufYvII-0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjgzNTA0LmpwZw.jpg",firstName:"Albert",lastName:"Herrera"}]},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return e},Ze=a(54),We=Object(Ge.b)({profilePage:ye,dialogsPage:q,sideBar:He,usersPage:ne,auth:Re}),Je=Object(Ge.c)(We,Object(Ge.a)(Ze.a)),Xe=Je;window.store=Je,i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b.a,{store:Xe,children:Object(j.jsx)(qe,{})})}),document.getElementById("root")),s()}},[[86,1,2]]]);
//# sourceMappingURL=main.6f10db71.chunk.js.map