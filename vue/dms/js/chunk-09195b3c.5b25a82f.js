(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09195b3c"],{"4cad":function(e,t,r){"use strict";r("8488")},8488:function(e,t,r){},c24f:function(e,t,r){"use strict";r.r(t),r.d(t,"getUserInfo",(function(){return n})),r.d(t,"update",(function(){return s})),r.d(t,"changePassword",(function(){return i})),r.d(t,"changeIcon",(function(){return c}));var a=r("b775");function n(){return Object(a["default"])({url:"/permission/userinfo",method:"get"})}function s(e){return Object(a["default"])({url:"/system/user/update",data:e,method:"post"})}function i(e){return Object(a["default"])({url:"/system/user/change",data:e,method:"post"})}function c(e){return Object(a["default"])({url:"/system/user/changeIcon/"+e,method:"get"})}},c975:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").indexOf,s=r("a640"),i=r("ae40"),c=[].indexOf,o=!!c&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:o||!u||!l},{indexOf:function(e){return o?c.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},ceb0:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"inner_container"},[r("div",{staticClass:"user-form"},[r("div",{staticClass:"avatar",attrs:{title:"点击更换头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.action,"show-file-list":!1,headers:e.header,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.user.icon?r("img",{staticClass:"avatar",attrs:{src:e.user.icon,alt:""}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("br"),r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.user,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名称:",prop:"realName"}},[r("el-input",{model:{value:e.user.realName,callback:function(t){e.$set(e.user,"realName",t)},expression:"user.realName"}})],1),r("el-form-item",{attrs:{label:"电话:",prop:"cellphone"}},[r("el-input",{model:{value:e.user.cellphone,callback:function(t){e.$set(e.user,"cellphone",t)},expression:"user.cellphone"}})],1),r("el-form-item",{attrs:{label:"邮箱:",prop:"email"}},[r("el-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.update("form")}}},[e._v("修改")]),r("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)])])])},n=[],s=(r("c975"),r("96cf"),r("1da1")),i=r("c24f"),c=r("5f87"),o=r("4360"),u={name:"index",data:function(){var e=function(e,t,r){if(0!==t.length){var a=/^1[3456789]\d{9}$/;a.test(t)?r():r(new Error)}else r()},t=function(e,t,r){if(0!==t.length){var a=/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;a.test(t)?r():r(new Error)}else r()};return{header:{_ut:Object(c["getToken"])()},action:"http://localhost:8088/permission/upload",user:{id:void 0,realName:"",icon:void 0,cellphone:"",email:""},rules:{realName:[{required:!0,message:"名称不能为空",trigger:"change"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"change"}],cellphone:[{validator:e,message:"请输入正确的手机号",trigger:"change"}],email:[{validator:t,message:"请输入正确的邮箱",trigger:"change"}]}}},methods:{handleAvatarSuccess:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.changeIcon(e.data);case 2:case"end":return r.stop()}}),r)})))()},beforeAvatarUpload:function(e){var t=-1!==e.type.indexOf("image/"),r=e.size/1024/1024<2;return t||this.$message.error("只能上传图片"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},changeIcon:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:Object(i["changeIcon"])(e).then((function(e){200===e.statusCode&&(t.$message({message:e.msg,type:"success"}),t.reset())}));case 1:case"end":return r.stop()}}),r)})))()},update:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$message({message:"请正确填写参数",type:"error"}),!1;Object(i["update"])(t.user).then((function(e){o["default"].commit("SET_USER_NAME",e.data.realName),t.$message({message:e.msg,type:"success"})}))}))},reset:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["getUserInfo"])();case 2:r=t.sent,a=r.data,a.icon&&(a.icon="http://localhost:8088/upload_img/"+a.icon),e.user=a,o["default"].commit("SET_USER_ICON",e.user.icon);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){this.reset()}},l=u,d=(r("4cad"),r("2877")),f=Object(d["a"])(l,a,n,!1,null,"c2c16bb2",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-09195b3c.5b25a82f.js.map