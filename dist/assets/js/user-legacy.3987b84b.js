(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"0234":function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t._setTarget=void 0,t.popParams=f,t.pushParams=c,t.target=void 0,t.withParams=v;var s=[],u=null;t.target=u;var l=function(e){t.target=u=e};function c(){null!==u&&s.push(u),t.target=u={}}function f(){var e=u,r=t.target=u=s.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function d(e){if("object"!==i(e)||Array.isArray(e))throw new Error("params must be an object");t.target=u=a(a({},u),e)}function m(e,t){return p((function(r){return function(){r(e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t.apply(this,a)}}))}function p(e){var t=e(d);return function(){c();try{for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(this,r)}finally{f()}}}function v(e,t){return"object"===i(e)&&void 0!==t?m(e,t):p(e)}t._setTarget=l},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},1348:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"h-100"},[r("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[r("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[r("div",{staticClass:"position-relative image-side"},[r("p",{staticClass:"text-white h2"},[e._v("Welcome To Mailnart")]),e._v(" "),r("p",{staticClass:"white mb-0"},[e._v("\n          Please use this form to register. "),r("br"),e._v("If you are a member, please\n          "),r("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/login"}},[e._v("login")]),e._v(".\n        ")],1)]),e._v(" "),r("div",{staticClass:"form-side"},[r("router-link",{attrs:{tag:"a",to:"/"}},[r("span",{staticClass:"logo-single"})]),e._v(" "),r("h6",{staticClass:"mb-4"},[e._v(e._s(e.$t("user.register")))]),e._v(" "),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("label",{staticClass:"form-group has-float-label mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.fullname,expression:"fullname"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.fullname},on:{input:function(t){t.target.composing||(e.fullname=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(e.$t("user.fullname")))])]),e._v(" "),r("label",{staticClass:"form-group has-float-label mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(e.$t("user.email")))])]),e._v(" "),r("label",{staticClass:"form-group has-float-label mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(e.$t("user.password")))])]),e._v(" "),r("div",{staticClass:"d-flex justify-content-end align-items-center"},[r("b-button",{staticClass:"btn-shadow",attrs:{type:"submit",variant:"primary",size:"lg"}},[e._v(e._s(e.$t("user.register-button")))])],1)])],1)])],1)],1)},a=[],o=r("2b47"),i={data:function(){return{fullname:"",email:"",password:""}},methods:{formSubmit:function(){console.log("register"),this.$router.push(o["a"])}}},s=i,u=r("2877"),l=Object(u["a"])(s,n,a,!1,null,null,null);t["default"]=l.exports},"1dce":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Vuelidate=E,t.validationMixin=t.default=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.withParams}});var n=r("fbf4"),a=r("0234");function o(e){return l(e)||u(e)||s(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function u(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var v=function(){return null},b=function(e,t,r){return e.reduce((function(e,n){return e[r?r(n):n]=t(n),e}),{})};function h(e){return"function"===typeof e}function y(e){return null!==e&&("object"===p(e)||h(e))}function g(e){return y(e)&&h(e.then)}var _=function(e,t,r,n){if("function"===typeof r)return r.call(e,t,n);r=Array.isArray(r)?r:r.split(".");for(var a=0;a<r.length;a++){if(!t||"object"!==p(t))return n;t=t[r[a]]}return"undefined"===typeof t?n:t},w="__isVuelidateAsyncVm";function $(e,t){var r=new e({data:{p:!0,v:!1}});return t.then((function(e){r.p=!1,r.v=e}),(function(e){throw r.p=!1,r.v=!1,e})),r[w]=!0,r}var P={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some((function(t){return e.refProxy(t).$invalid}))||this.ruleKeys.some((function(e){return!t[e]}))},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every((function(t){return e.refProxy(t).$dirty}))},$anyDirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.some((function(t){return e.refProxy(t).$anyDirty}))},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$anyError:function(){var e=this;return!!this.$error||this.nestedKeys.some((function(t){return e.refProxy(t).$anyError}))},$pending:function(){var e=this;return this.ruleKeys.some((function(t){return e.getRef(t).$pending}))||this.nestedKeys.some((function(t){return e.refProxy(t).$pending}))},$params:function(){var e=this,t=this.validations;return d(d({},b(this.nestedKeys,(function(e){return t[e]&&t[e].$params||null}))),b(this.ruleKeys,(function(t){return e.getRef(t).$params})))}};function x(e){this.dirty=e;var t=this.proxy,r=e?"$touch":"$reset";this.nestedKeys.forEach((function(e){t[e][r]()}))}var O={$touch:function(){x.call(this,!0)},$reset:function(){x.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var r in this.$params)if(this.isNested(r)){for(var n=e[r].$flattenParams(),a=0;a<n.length;a++)n[a].path.unshift(r);t=t.concat(n)}else t.push({path:[],name:r,params:this.$params[r]});return t}},j=Object.keys(P),C=Object.keys(O),M=null,k=function(e){if(M)return M;var t=e.extend({computed:{refs:function(){var e=this._vval;this._vval=this.children,(0,n.patchChildren)(e,this._vval);var t={};return this._vval.forEach((function(e){t[e.key]=e.vm})),t}},beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&((0,n.patchChildren)(this._vval),this._vval=null)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){var t=this.getModel();if(t)return t[e]},hasIter:function(){return!1}}}),r=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var r=this.getModel();(0,a.pushParams)();var n=this.rule.call(this.rootModel,r,t),o=g(n)?$(e,n):n,i=(0,a.popParams)(),s=i&&i.$sub?i.$sub.length>1?i:i.$sub[0]:null;return{output:o,params:s}}},computed:{run:function(){var e=this,t=this.lazyParentModel(),r=Array.isArray(t)&&t.__ob__;if(r){var n=t.__ob__.dep;n.depend();var a=n.constructor.target;if(!this._indirectWatcher){var o=a.constructor;this._indirectWatcher=new o(this,(function(){return e.runRule(t)}),null,{lazy:!0})}var i=this.getModel();if(!this._indirectWatcher.dirty&&this._lastModel===i)return this._indirectWatcher.depend(),a.value;this._lastModel=i,this._indirectWatcher.evaluate(),this._indirectWatcher.depend()}else this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null);return this._indirectWatcher?this._indirectWatcher.value:this.runRule(t)},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[w]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[w]&&e.p}},destroyed:function(){this._indirectWatcher&&(this._indirectWatcher.teardown(),this._indirectWatcher=null)}}),i=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:d(d({},O),{},{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!==typeof this.validations[e]}}),computed:d(d({},P),{},{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter((function(t){return!e.isNested(t)}))},keys:function(){return Object.keys(this.validations).filter((function(e){return"$params"!==e}))},proxy:function(){var e=this,t=b(this.keys,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e.refProxy(t)}}})),r=b(j,(function(t){return{enumerable:!0,configurable:!0,get:function(){return e[t]}}})),n=b(C,(function(t){return{enumerable:!1,configurable:!0,get:function(){return e[t]}}})),a=this.hasIter()?{$iter:{enumerable:!0,value:Object.defineProperties({},d({},t))}}:{};return Object.defineProperties({},d(d(d(d({},t),a),{},{$model:{enumerable:!0,get:function(){var t=e.lazyParentModel();return null!=t?t[e.prop]:null},set:function(t){var r=e.lazyParentModel();null!=r&&(r[e.prop]=t,e.$touch())}}},r),n))},children:function(){var e=this;return[].concat(o(this.nestedKeys.map((function(t){return l(e,t)}))),o(this.ruleKeys.map((function(t){return c(e,t)})))).filter(Boolean)}})}),s=i.extend({methods:{isNested:function(e){return"undefined"!==typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),u=i.extend({computed:{keys:function(){var e=this.getModel();return y(e)?Object.keys(e):[]},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(r){return"".concat(_(e.rootModel,e.getModelKey(r),t))}:function(e){return"".concat(e)}},getModelLazy:function(){var e=this;return function(){return e.getModel()}},children:function(){var e=this,t=this.validations,r=this.getModel(),a=d({},t);delete a["$trackBy"];var o={};return this.keys.map((function(t){var s=e.tracker(t);return o.hasOwnProperty(s)?null:(o[s]=!0,(0,n.h)(i,s,{validations:a,prop:t,lazyParentModel:e.getModelLazy,model:r[t],rootModel:e.rootModel}))})).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]},hasIter:function(){return!0}}}),l=function(e,t){if("$each"===t)return(0,n.h)(u,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var r=e.validations[t];if(Array.isArray(r)){var a=e.rootModel,o=b(r,(function(e){return function(){return _(a,a.$v,e)}}),(function(e){return Array.isArray(e)?e.join("."):e}));return(0,n.h)(s,t,{validations:o,lazyParentModel:v,prop:t,lazyModel:v,rootModel:a})}return(0,n.h)(i,t,{validations:r,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},c=function(e,t){return(0,n.h)(r,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return M={VBase:t,Validation:i},M},S=null;function A(e){if(S)return S;var t=e.constructor;while(t.super)t=t.super;return S=t,t}var z=function(e,t){var r=A(e),a=k(r),o=a.Validation,i=a.VBase,s=new i({computed:{children:function(){var r="function"===typeof t?t.call(e):t;return[(0,n.h)(o,"$v",{validations:r,lazyParentModel:v,prop:"$v",model:e,rootModel:e})]}}});return s},q={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=z(this,e)),{}},beforeCreate:function(){var e=this.$options,t=e.validations;t&&(e.computed||(e.computed={}),e.computed.$v||(e.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function E(e){e.mixin(q)}t.validationMixin=q;var L=E;t.default=L},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"37cb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"h-100"},[r("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[r("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[r("div",{staticClass:"position-relative image-side"},[r("p",{staticClass:"text-white h2"},[e._v(e._s(e.$t("dashboards.magic-is-in-the-details")))]),e._v(" "),r("p",{staticClass:"white mb-0"},[e._v("\r\n                    Please use your e-mail to reset your password.\r\n                    "),r("br"),e._v("If you are not a member, please\r\n                    "),r("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/register"}},[e._v("register")]),e._v(".\r\n                ")],1)]),e._v(" "),r("div",{staticClass:"form-side"},[r("router-link",{attrs:{tag:"a",to:"/"}},[r("span",{staticClass:"logo-single"})]),e._v(" "),r("h6",{staticClass:"mb-4"},[e._v(e._s(e.$t("user.forgot-password")))]),e._v(" "),r("b-form",{staticClass:"av-tooltip tooltip-label-bottom",on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("b-form-group",{staticClass:"has-float-label mb-4",attrs:{label:e.$t("user.email")}},[r("b-form-input",{attrs:{type:"text",state:!e.$v.form.email.$error},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),e._v(" "),e.$v.form.email.required?e.$v.form.email.email?e.$v.form.email.minLength?e._e():r("b-form-invalid-feedback",[e._v("Your email must be minimum 4 characters")]):r("b-form-invalid-feedback",[e._v("Please enter a valid email address")]):r("b-form-invalid-feedback",[e._v("Please enter your email address")])],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("router-link",{attrs:{tag:"a",to:"/user/forgot-password"}},[e._v(e._s(e.$t("user.forgot-password-question")))]),e._v(" "),r("b-button",{class:{"btn-multiple-state btn-shadow":!0,"show-spinner":e.processing,"show-success":!e.processing&&!1===e.loginError,"show-fail":!e.processing&&e.loginError},attrs:{type:"submit",variant:"primary",size:"lg",disabled:e.processing}},[r("span",{staticClass:"spinner d-inline-block"},[r("span",{staticClass:"bounce1"}),e._v(" "),r("span",{staticClass:"bounce2"}),e._v(" "),r("span",{staticClass:"bounce3"})]),e._v(" "),r("span",{staticClass:"icon success"},[r("i",{staticClass:"simple-icon-check"})]),e._v(" "),r("span",{staticClass:"icon fail"},[r("i",{staticClass:"simple-icon-exclamation"})]),e._v(" "),r("span",{staticClass:"label"},[e._v(e._s(e.$t("user.reset-password-button")))])])],1)],1)],1)])],1)],1)},a=[],o=r("5530"),i=r("2f62"),s=r("1dce"),u=r("b5ae"),l=u.required,c=(u.maxLength,u.minLength),f=u.email,d={data:function(){return{form:{email:"test@coloredstrategies.com"}}},mixins:[s["validationMixin"]],validations:{form:{email:{required:l,email:f,minLength:c(4)}}},computed:Object(o["a"])({},Object(i["c"])(["processing","loginError","forgotMailSuccess"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["forgotPassword"])),{},{formSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.forgotPassword({email:this.form.email})}}),watch:{loginError:function(e){null!=e&&this.$notify("error","Forgot Password Error",e,{duration:3e3,permanent:!1})},forgotMailSuccess:function(e){e&&this.$notify("success","Forgot Password Success","Please check your email.",{duration:3e3,permanent:!1})}}},m=d,p=r("2877"),v=Object(p["a"])(m,n,a,!1,null,null,null);t["default"]=v.exports},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,o=(0,n.regex)("email",a);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",a);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var s=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=s;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=l},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t.default=a;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},ac2a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"h-100"},[r("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[r("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[r("div",{staticClass:"position-relative image-side"},[r("p",{staticClass:"text-white h2"},[e._v("Welcome To Mailnart")]),e._v(" "),r("p",{staticClass:"white mb-0"},[e._v("\n          Please use your credentials to login.\n          "),r("br"),e._v("If you are not a member, please\n          "),r("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/register"}},[e._v("register")]),e._v(".\n        ")],1)]),e._v(" "),r("div",{staticClass:"form-side"},[r("router-link",{attrs:{tag:"a",to:"/"}},[r("span",{staticClass:"logo-single"})]),e._v(" "),r("h6",{staticClass:"mb-4"},[e._v(e._s(e.$t("user.login-title")))]),e._v(" "),r("b-form",{staticClass:"av-tooltip tooltip-label-bottom",on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("b-form-group",{staticClass:"has-float-label mb-4",attrs:{label:e.$t("user.email")}},[r("b-form-input",{attrs:{type:"text",state:!e.$v.form.email.$error},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model",t)},expression:"$v.form.email.$model"}}),e._v(" "),e.$v.form.email.required?e.$v.form.email.email?e.$v.form.email.minLength?e._e():r("b-form-invalid-feedback",[e._v("Your email must be minimum 4\n              characters")]):r("b-form-invalid-feedback",[e._v("Please enter a valid email address")]):r("b-form-invalid-feedback",[e._v("Please enter your email address")])],1),e._v(" "),r("b-form-group",{staticClass:"has-float-label mb-4",attrs:{label:e.$t("user.password")}},[r("b-form-input",{attrs:{type:"password",state:!e.$v.form.password.$error},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),e._v(" "),e.$v.form.password.required?e.$v.form.password.minLength&&e.$v.form.password.maxLength?e._e():r("b-form-invalid-feedback",[e._v("Your password must be between 4 and 16\n              characters")]):r("b-form-invalid-feedback",[e._v("Please enter your password")])],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("router-link",{attrs:{tag:"a",to:"/user/forgot-password"}},[e._v(e._s(e.$t("user.forgot-password-question")))]),e._v(" "),r("b-button",{class:{"btn-multiple-state btn-shadow":!0,"show-spinner":e.processing,"show-success":!e.processing&&!1===e.loginError,"show-fail":!e.processing&&e.loginError},attrs:{type:"submit",variant:"primary",size:"lg",disabled:e.processing}},[r("span",{staticClass:"spinner d-inline-block"},[r("span",{staticClass:"bounce1"}),e._v(" "),r("span",{staticClass:"bounce2"}),e._v(" "),r("span",{staticClass:"bounce3"})]),e._v(" "),r("span",{staticClass:"icon success"},[r("i",{staticClass:"simple-icon-check"})]),e._v(" "),r("span",{staticClass:"icon fail"},[r("i",{staticClass:"simple-icon-exclamation"})]),e._v(" "),r("span",{staticClass:"label"},[e._v(e._s(e.$t("user.login-button")))])])],1)],1)],1)])],1)],1)},a=[],o=r("5530"),i=r("2f62"),s=r("1dce"),u=r("2b47"),l=r("b5ae"),c=l.required,f=l.maxLength,d=l.minLength,m=l.email,p={data:function(){return{form:{email:"",password:""}}},mixins:[s["validationMixin"]],validations:{form:{password:{required:c,maxLength:f(16),minLength:d(4)},email:{required:c,email:m,minLength:d(4)}}},computed:Object(o["a"])({},Object(i["c"])(["currentUser","processing","loginError"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["login"])),{},{formSubmit:function(){this.$v.$touch(),this.$v.form.$touch(),this.login({email:this.form.email,password:this.form.password})}}),watch:{currentUser:function(e){var t=this;e&&e.uid&&e.uid.length>0&&setTimeout((function(){t.$router.push(u["a"])}),200)},loginError:function(e){null!=e&&this.$notify("error","Login Error",e,{duration:3e3,permanent:!1})}}},v=p,b=r("2877"),h=Object(b["a"])(v,n,a,!1,null,null,null);t["default"]=h.exports},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return h.default}});var a=M(r("6235")),o=M(r("3a54")),i=M(r("45b8")),s=M(r("ec11")),u=M(r("5d75")),l=M(r("c99d")),c=M(r("91d3")),f=M(r("2a12")),d=M(r("5db3")),m=M(r("d4f4")),p=M(r("aa82")),v=M(r("e652")),b=M(r("b6cb")),h=M(r("772d")),y=M(r("d294")),g=M(r("3360")),_=M(r("6417")),w=M(r("eb66")),$=M(r("46bc")),P=M(r("1331")),x=M(r("c301")),O=C(r("78ef"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(a,i,s):a[i]=e[i]}return a.default=e,r&&r.set(e,a),a}function M(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},c1bd:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"h-100"},[r("b-colxx",{staticClass:"mx-auto my-auto",attrs:{xxs:"12",md:"10"}},[r("b-card",{staticClass:"auth-card",attrs:{"no-body":""}},[r("div",{staticClass:"position-relative image-side"},[r("p",{staticClass:"text-white h2"},[e._v(e._s(e.$t("dashboards.magic-is-in-the-details")))]),e._v(" "),r("p",{staticClass:"white mb-0"},[e._v("\n          Please use your credentials to login.\n          "),r("br"),e._v("If you are not a member, please\n          "),r("router-link",{staticClass:"white",attrs:{tag:"a",to:"/user/register"}},[e._v("register")]),e._v(".\n        ")],1)]),e._v(" "),r("div",{staticClass:"form-side"},[r("router-link",{attrs:{tag:"a",to:"/"}},[r("span",{staticClass:"logo-single"})]),e._v(" "),r("h6",{staticClass:"mb-4"},[e._v(e._s(e.$t("user.login-title")))]),e._v(" "),r("b-form",{staticClass:"av-tooltip tooltip-label-bottom",on:{submit:function(t){return t.preventDefault(),e.formSubmit.apply(null,arguments)}}},[r("b-form-group",{staticClass:"has-float-label mb-4",attrs:{label:e.$t("user.password")}},[r("b-form-input",{attrs:{type:"password",state:!e.$v.form.password.$error},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),e._v(" "),e.$v.form.password.required?e.$v.form.password.minLength&&e.$v.form.password.maxLength?e._e():r("b-form-invalid-feedback",[e._v("Your password must be between 4 and 16 characters")]):r("b-form-invalid-feedback",[e._v("Please enter your password")])],1),e._v(" "),r("b-form-group",{staticClass:"has-float-label mb-4",attrs:{label:e.$t("user.password-again")}},[r("b-form-input",{attrs:{type:"password",state:!e.$v.form.passwordAgain.$error},model:{value:e.$v.form.passwordAgain.$model,callback:function(t){e.$set(e.$v.form.passwordAgain,"$model",t)},expression:"$v.form.passwordAgain.$model"}}),e._v(" "),e.$v.form.passwordAgain.required?e.$v.form.passwordAgain.sameAsPassword?e._e():r("b-form-invalid-feedback",[e._v("Your inputs does not match")]):r("b-form-invalid-feedback",[e._v("Please enter your password again")])],1),e._v(" "),r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("router-link",{attrs:{tag:"a",to:"/user/forgot-password"}},[e._v(e._s(e.$t("user.forgot-password-question")))]),e._v(" "),r("b-button",{class:{"btn-multiple-state btn-shadow":!0,"show-spinner":e.processing,"show-success":!e.processing&&!1===e.loginError,"show-fail":!e.processing&&e.loginError},attrs:{type:"submit",variant:"primary",size:"lg",disabled:e.processing}},[r("span",{staticClass:"spinner d-inline-block"},[r("span",{staticClass:"bounce1"}),e._v(" "),r("span",{staticClass:"bounce2"}),e._v(" "),r("span",{staticClass:"bounce3"})]),e._v(" "),r("span",{staticClass:"icon success"},[r("i",{staticClass:"simple-icon-check"})]),e._v(" "),r("span",{staticClass:"icon fail"},[r("i",{staticClass:"simple-icon-exclamation"})]),e._v(" "),r("span",{staticClass:"label"},[e._v(e._s(e.$t("user.reset-password-button")))])])],1)],1)],1)])],1)],1)},a=[],o=r("5530"),i=r("2f62"),s=r("1dce"),u=r("b5ae"),l=u.required,c=u.maxLength,f=u.minLength,d=(u.email,u.sameAs),m={data:function(){return{form:{password:"",passwordAgain:""}}},mixins:[s["validationMixin"]],validations:{form:{password:{required:l,maxLength:c(16),minLength:f(4)},passwordAgain:{required:l,sameAsPassword:d("password")}}},computed:Object(o["a"])({},Object(i["c"])(["currentUser","processing","loginError","resetPasswordSuccess"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["resetPassword"])),{},{formSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.resetPassword({newPassword:this.form.password,resetPasswordCode:this.$route.query.oobCode||""})}}),watch:{loginError:function(e){null!=e&&this.$notify("error","Reset Password Error",e,{duration:3e3,permanent:!1})},resetPasswordSuccess:function(e){e&&this.$notify("success","Reset Password Success","Reset password success",{duration:3e3,permanent:!1})}}},p=m,v=r("2877"),b=Object(v["a"])(p,n,a,!1,null,null,null);t["default"]=b.exports},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=a;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},o=n.vuelidate?n.vuelidate.withParams:a;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e382:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("user-layout",[r("router-view")],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"root"}},[r("div",{staticClass:"fixed-background"}),e._v(" "),r("main",[r("div",{staticClass:"container"},[e._t("default")],2)])])},i=[],s={mounted:function(){document.body.classList.add("background")},beforeDestroy:function(){document.body.classList.remove("background")}},u=s,l=r("2877"),c=Object(l["a"])(u,o,i,!1,null,null,null),f=c.exports,d={components:{"user-layout":f}},m=d,p=Object(l["a"])(m,n,a,!1,null,null,null);t["default"]=p.exports},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a},fbf4:function(e,t,r){"use strict";function n(e){return null===e||void 0===e}function a(e){return null!==e&&void 0!==e}function o(e,t){return t.tag===e.tag&&t.key===e.key}function i(e){var t=e.tag;e.vm=new t({data:e.args})}function s(e){for(var t=Object.keys(e.args),r=0;r<t.length;r++)t.forEach((function(t){e.vm[t]=e.args[t]}))}function u(e,t,r){var n,o,i={};for(n=t;n<=r;++n)o=e[n].key,a(o)&&(i[o]=n);return i}function l(e,t){var r,s,l,m=0,p=0,v=e.length-1,b=e[0],h=e[v],y=t.length-1,g=t[0],_=t[y];while(m<=v&&p<=y)n(b)?b=e[++m]:n(h)?h=e[--v]:o(b,g)?(d(b,g),b=e[++m],g=t[++p]):o(h,_)?(d(h,_),h=e[--v],_=t[--y]):o(b,_)?(d(b,_),b=e[++m],_=t[--y]):o(h,g)?(d(h,g),h=e[--v],g=t[++p]):(n(r)&&(r=u(e,m,v)),s=a(g.key)?r[g.key]:null,n(s)?(i(g),g=t[++p]):(l=e[s],o(l,g)?(d(l,g),e[s]=void 0,g=t[++p]):(i(g),g=t[++p])));m>v?c(t,p,y):p>y&&f(e,m,v)}function c(e,t,r){for(;t<=r;++t)i(e[t])}function f(e,t,r){for(;t<=r;++t){var n=e[t];a(n)&&(n.vm.$destroy(),n.vm=null)}}function d(e,t){e!==t&&(t.vm=e.vm,s(t))}function m(e,t){a(e)&&a(t)?e!==t&&l(e,t):a(t)?c(t,0,t.length-1):a(e)&&f(e,0,e.length-1)}function p(e,t,r){return{tag:e,key:t,args:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.h=p,t.patchChildren=m}}]);