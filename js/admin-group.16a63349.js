(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-group"],{"177c":function(t,e,n){},"20c5":function(t,e,n){"use strict";var a=n("2bfc"),i=n.n(a);i.a},"242f":function(t,e,n){"use strict";var a=n("6e9a"),i=n.n(a);i.a},"2ac0":function(t,e,n){"use strict";var a=n("cc14"),i=n.n(a);i.a},"2bfc":function(t,e,n){},"321f":function(t,e,n){"use strict";var a=n("177c"),i=n.n(a);i.a},"6e9a":function(t,e,n){},c4aa:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-center"},[n("h4",{staticClass:"indigo-text"},[t._v("Admin pannel")]),n("ul",{staticClass:"tab z-depth-2"},[n("li",{staticClass:"tab__item",class:{"tab__item--active":"key"==t.activeTab},on:{click:function(e){return t.changeComponent("keyGen","key")}}},[n("a",{staticClass:"tab__link",attrs:{href:"#"}},[t._v("Key generator")])]),n("li",{staticClass:"tab__item",class:{"tab__item--active":"template"==t.activeTab},on:{click:function(e){return t.changeComponent("templateEdit","template")}}},[n("a",{staticClass:"tab__link",attrs:{href:"#"}},[t._v("Template")])]),n("li",{staticClass:"tab__item",class:{"tab__item--active":"user"==t.activeTab},on:{click:function(e){return t.changeComponent("userInfo","user")}}},[n("a",{staticClass:"tab__link",attrs:{href:"#"}},[t._v("user")])]),n("li",{staticClass:"tab__item",class:{"tab__item--active":"modify-temp"==t.activeTab},on:{click:function(e){return t.changeComponent("modifyTemp","modify-temp")}}},[n("a",{staticClass:"tab__link",attrs:{href:"#"}},[t._v("Modify template")])])]),n(t.componentId,{tag:"component",on:{editTemp:t.editTemplate}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"keygen "},[n("h5",[t._v("Generator keygen")]),n("form",{staticClass:"input-field col s12"},[n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.plan,expression:"plan"}],attrs:{name:"group1",type:"radio",value:"1month",checked:""},domProps:{checked:t._q(t.plan,"1month")},on:{change:function(e){t.plan="1month"}}}),n("span",[t._v(" 1 month")])])]),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.plan,expression:"plan"}],attrs:{name:"group1",type:"radio",value:"3months"},domProps:{checked:t._q(t.plan,"3months")},on:{change:function(e){t.plan="3months"}}}),n("span",[t._v(" 3 months")])])]),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.plan,expression:"plan"}],attrs:{name:"group1",type:"radio",value:"6months"},domProps:{checked:t._q(t.plan,"6months")},on:{change:function(e){t.plan="6months"}}}),n("span",[t._v(" 6 months")])])]),n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.plan,expression:"plan"}],attrs:{name:"group1",type:"radio",value:"1year"},domProps:{checked:t._q(t.plan,"1year")},on:{change:function(e){t.plan="1year"}}}),n("span",[t._v(" 1 year - discount 5% ")])])]),n("br"),n("submit-btn",{attrs:{isLoading:t.isLoading,disableCon:!t.plan},on:{onSubmit:t.submit}},[t._v("\n            Generate key\n        ")])],1)])},o=[],c=n("f499"),r=n.n(c),l={data:function(){return{plan:"",isLoading:!1}},methods:{submit:function(){var t=this;this.isLoading=!0,fetch("".concat("http://104.248.159.101:4000","/admin/send-license"),{method:"POST",body:r()({plan:this.plan}),headers:{"Content-type":"application/json",Authorization:"Bearer "+this.$store.state.token}}).then(function(t){return t.json()}).then(function(e){t.isLoading=!1,"success"===e.status?t.firePopup("success","Sent a license key",e.msg):t.firePopup("error","Some thing wrong",e.msg)}).catch(function(e){throw t.isLoading=!1,e})}},mounted:function(){}},d=l,m=(n("2ac0"),n("2877")),p=Object(m["a"])(d,s,o,!1,null,null,null),u=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn-command"},[n("button",{staticClass:"btn waves-effect amber black-text",on:{click:function(e){t.isDisplay=!0}}},[t._v(" "+t._s(t.editMode?"Update Template":"Create Template")+" ")])]),t.isDisplay?n("temp-create-popup",{attrs:{inlinedHTML:t.inlinedHTML,components:t.components,editMode:t.editMode,editedTemplate:t.editedTemplate},on:{deactivePopup:function(e){t.isDisplay=!1},getTemplate:t.getTemplate}}):t._e(),n("div",{staticClass:"template__canvas",attrs:{id:"gjs"}})],1)},f=[],v=n("6ad0"),g=n.n(v),_=n("e08a"),b={components:{tempCreatePopup:_["a"]},data:function(){return{editor:"",components:"",html:"",inlinedHTML:"",style:"",isDisplay:!1,editedTemplate:""}},mounted:function(){var t=this;this.editor=this.$grapesjs.init({container:"#gjs",assetManager:{uploadName:"asset",uploadFile:function(e){var n=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0],a=new FormData;a.append("asset",n),fetch("".concat("http://104.248.159.101:4000","/admin/upload-asset"),{method:"POST",headers:{Authorization:"Bearer "+t.$store.state.token},body:a}).then(function(t){return t.json()}).then(function(e){t.editor.AssetManager.add(e.data)}).catch(function(t){throw t})}},plugins:[g.a],pluginsOpts:{gjsPresetNewsletter:{modalTitleImport:"Cmm",tableStyle:{height:"100px",margin:"0px auto 0px auto",padding:"0 0 0 0",width:"100%"}}}});var e=this.editor.BlockManager;e.get("button").set({content:'<a href="#" style=" background: #ff7800; color: white;\n                        text-decoration: none;\n                        padding: .5rem 1rem;\n                        display: inline-block;\n                        border-radius: 3px; ">Button\n                        </a>'}),!0===this.editMode&&this.setComponents()},methods:{getTemplate:function(){this.components=localStorage.getItem("gjs-components"),this.style=localStorage.getItem("gjs-styles"),this.html=localStorage.getItem("gjs-html"),this.inlinedHTML=this.editor.runCommand("gjs-get-inlined-html")},setComponents:function(){var t=this.$store.state.editedTemplateId;this.editedTemplate=this.$store.getters.editedTemplate(t);var e=this.editedTemplate.html;this.editor.setComponents(e)}},computed:{editMode:function(){return this.$store.state.editMode}}},C=b,T=(n("242f"),Object(m["a"])(C,h,f,!1,null,null,null)),y=T.exports,k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userInfo"},[n("h5",[t._v("User here")])])}],x={},$=Object(m["a"])(x,k,w,!1,null,null,null),j=$.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card__body"},[t.isLoading?n("v-loader"):t._e(),t.isLoading?t._e():n("div",{staticClass:"row"},t._l(t.templates,function(e){return n("div",{key:e._id,staticClass:"col s12 m2 l3"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("img",{attrs:{src:t.port+"/"+e.imgUrl}}),n("span",{staticClass:"card-title"},[t._v(t._s(e.name))])]),n("div",{staticClass:"card-content"},[n("p",[t._v(t._s(t._f("descFilter")(e.desc)))])]),n("div",{staticClass:"card-action"},[n("a",{staticClass:"btn waves-effect green",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.editTemplate(e._id)}}},[t._v("Edit")]),n("a",{staticClass:"btn waves-effect red",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.deleteTemplate(e._id)}}},[t._v("Delete")])])])])}),0)],1)},E=[],M=(n("28a5"),n("5439")),P={components:{vLoader:M["a"]},data:function(){return{isLoading:!0,templates:[],port:"http://104.248.159.101:4000"}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;this.isLoading=!0,fetch("".concat("http://104.248.159.101:4000","/admin/template"),{headers:{Authorization:"Bearer "+this.$store.state.token}}).then(function(t){return t.json()}).then(function(e){t.templates=e.templates,t.$store.commit("setTemplates",e.templates),t.isLoading=!1}).catch(function(e){throw t.firePopup("error","Something wrong","Lỗi từ server"),t.isLoading=!1,e})},editTemplate:function(t){this.$emit("editTemp"),this.$store.commit("changeEditMode",{mode:!0}),this.$store.commit("setEditTemplate",t)},deleteTemplate:function(t){var e=this;this.$swal.fire({title:"Bạn có chắc sẽ muốn xóa",text:"Hành động này sẽ xóa template vĩnh viễn",type:"warning",showCancelButton:!0,confirmButtonColor:"#e82a2a",cancelButtonColor:"#1ab3a5",confirmButtonText:"Xóa cmnđ"}).then(function(n){n.value&&fetch("".concat("http://104.248.159.101:4000","/admin/delete-template/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer "+e.$store.state.token}}).then(function(t){return t.json()}).then(function(t){"success"===t.status&&(e.firePopup("success","Đã xóa 1 template",t.msg),e.initialize())}).catch(function(t){throw t})})}},computed:{},filters:{descFilter:function(t){return t.split(" ").length>20?t.split(" ").slice(0,20).join(" ")+"...":t}}},I=P,B=(n("20c5"),Object(m["a"])(I,L,E,!1,null,null,null)),S=B.exports,D={data:function(){return{activeTab:"key",componentId:"keyGen"}},components:{keyGen:u,templateEdit:y,userInfo:j,modifyTemp:S},methods:{changeComponent:function(t,e){this.componentId=t,this.activeTab=e,this.$store.commit("changeEditMode",{mode:!1})},editTemplate:function(){this.componentId="templateEdit"}}},z=D,O=(n("321f"),Object(m["a"])(z,a,i,!1,null,null,null));e["default"]=O.exports},cc14:function(t,e,n){}}]);
//# sourceMappingURL=admin-group.16a63349.js.map