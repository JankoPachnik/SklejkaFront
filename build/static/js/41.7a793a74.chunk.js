/*! For license information please see 41.7a793a74.chunk.js.LICENSE.txt */
(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[41],{1007:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(98),l=a(99),s=a(142),c=a(207),i=a(91),u=a(92),d=a(60),m=a.n(d),p=a(75);const f=["primary","secondary","success","danger","warning","info","light","dark"],b=()=>r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Default Alert"),r.a.createElement("p",{className:"text-muted font-14"},"Alerts are available for any length of text, as well as an optional dismiss button. Just use"," ",r.a.createElement("code",null,"Alert")),f.map((e,t)=>r.a.createElement(s.a,{color:e,key:t},r.a.createElement("strong",null,e," - ")," A simple ",e," alert\u2014check it out!")))),g=()=>r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Dismissing Alert"),r.a.createElement("p",{className:"text-muted font-14"},"Alerts are available for any length of text, as well as an optional dismiss button. Just use"," ",r.a.createElement("code",null,"UncontrolledAlert")),f.map((e,t)=>r.a.createElement(c.a,{color:e,key:t},r.a.createElement("strong",null,e," - ")," A simple ",e," alert\u2014check it out!")))),h=()=>{const e=["dripicons-checkmark","dripicons-checkmark","dripicons-checkmark","dripicons-wrong","dripicons-warning","dripicons-information","dripicons-checkmark","dripicons-checkmark"];return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Alerts with Icon"),r.a.createElement("p",{className:"text-muted font-14"},"Display alert with icon on left."),f.map((t,a)=>r.a.createElement(c.a,{color:t,key:a},r.a.createElement("i",{className:m()(e[a],"mr-2")})," ",r.a.createElement("strong",null,t," - ")," A simple"," ",t," alert\u2014check it out!"))))},y=()=>r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Additional content"),r.a.createElement("p",{className:"text-muted font-14"},"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),r.a.createElement(s.a,{color:"success"},r.a.createElement("h4",{className:"alert-heading"},"Well done!"),r.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))),E=()=>r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Custom Alert"),r.a.createElement("p",{className:"text-muted font-14"},"Display alert with transparent background and with contextual text color. Use classes"," ",r.a.createElement("code",null,".bg-white"),", and ",r.a.createElement("code",null,".text-*"),". E.g. ",r.a.createElement("code",null,"bg-white text-primary"),"."),f.map((e,t)=>r.a.createElement(s.a,{color:e,className:m()("bg-white","text-"+e),key:t},r.a.createElement("strong",null,e," - ")," A simple ",e," alert\u2014check it out!")))),v=()=>r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement("h4",{className:"header-title"},"Link Color"),r.a.createElement("p",{className:"text-muted font-14"},"Use the ",r.a.createElement("code",null,".alert-link")," utility class to quickly provide matching colored links within any alert."),f.map((e,t)=>r.a.createElement(s.a,{color:e,key:t},r.a.createElement("strong",null,e," - ")," A simple ",e," alert with"," ",r.a.createElement("a",{href:"/",className:"alert-link"},"an example link"),"!"))));t.default=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{breadCrumbItems:[{label:"UI",path:"/ui/alerts"},{label:"Base UI",path:"/ui/alerts"},{label:"Alerts",path:"/ui/alerts",active:!0}],title:"Alerts"}),r.a.createElement(i.a,null,r.a.createElement(u.a,{lg:6},r.a.createElement(b,null)),r.a.createElement(u.a,{lg:6},r.a.createElement(g,null))),r.a.createElement(i.a,null,r.a.createElement(u.a,{lg:6},r.a.createElement(E,null)),r.a.createElement(u.a,{lg:6},r.a.createElement(v,null))),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(h,null)),r.a.createElement(u.a,null,r.a.createElement(y,null))))},142:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(67),l=a(0),s=a.n(l),c=a(19),i=a.n(c),u=a(60),d=a.n(u),m=a(61),p=a(85),f={children:i.a.node,className:i.a.string,closeClassName:i.a.string,closeAriaLabel:i.a.string,cssModule:i.a.object,color:i.a.string,fade:i.a.bool,isOpen:i.a.bool,toggle:i.a.func,tag:m.tagPropType,transition:i.a.shape(p.a.propTypes),innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},b={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(o.a)({},p.a.defaultProps,{unmountOnExit:!0})};function g(e){var t=e.className,a=e.closeClassName,l=e.closeAriaLabel,c=e.cssModule,i=e.tag,u=e.color,f=e.isOpen,b=e.toggle,g=e.children,h=e.transition,y=e.fade,E=e.innerRef,v=Object(r.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),O=Object(m.mapToCssModules)(d()(t,"alert","alert-"+u,{"alert-dismissible":b}),c),T=Object(m.mapToCssModules)(d()("close",a),c),N=Object(o.a)({},p.a.defaultProps,{},h,{baseClass:y?h.baseClass:"",timeout:y?h.timeout:0});return s.a.createElement(p.a,Object(n.a)({},v,N,{tag:i,className:O,in:f,role:"alert",innerRef:E}),b?s.a.createElement("button",{type:"button",className:T,"aria-label":l,onClick:b},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=f,g.defaultProps=b,t.a=g},207:function(e,t,a){"use strict";var n=a(7),r=a(64),o=a(12),l=a(0),s=a.n(l),c=a(142),i=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!0},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return s.a.createElement(c.a,Object(n.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},t}(l.Component);t.a=i},60:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},61:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return l})),a.d(t,"setScrollbarWidth",(function(){return s})),a.d(t,"isBodyOverflowing",(function(){return c})),a.d(t,"getOriginalBodyPadding",(function(){return i})),a.d(t,"conditionallyUpdateScrollbar",(function(){return u})),a.d(t,"setGlobalCssModule",(function(){return d})),a.d(t,"mapToCssModules",(function(){return m})),a.d(t,"omit",(function(){return p})),a.d(t,"pick",(function(){return f})),a.d(t,"warnOnce",(function(){return g})),a.d(t,"deprecated",(function(){return h})),a.d(t,"DOMElement",(function(){return E})),a.d(t,"targetPropType",(function(){return v})),a.d(t,"tagPropType",(function(){return O})),a.d(t,"TransitionTimeouts",(function(){return T})),a.d(t,"TransitionPropTypeKeys",(function(){return N})),a.d(t,"TransitionStatuses",(function(){return j})),a.d(t,"keyCodes",(function(){return w})),a.d(t,"PopperPlacements",(function(){return x})),a.d(t,"canUseDOM",(function(){return M})),a.d(t,"isReactRefObj",(function(){return k})),a.d(t,"toNumber",(function(){return C})),a.d(t,"isObject",(function(){return P})),a.d(t,"isFunction",(function(){return R})),a.d(t,"findDOMElements",(function(){return I})),a.d(t,"isArrayOrNodeList",(function(){return D})),a.d(t,"getTarget",(function(){return S})),a.d(t,"defaultToggleEvents",(function(){return L})),a.d(t,"addMultipleEventListeners",(function(){return U})),a.d(t,"focusableElements",(function(){return W}));var n,r=a(19),o=a.n(r);function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function s(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;c()&&s(a+e)}function d(e){n=e}function m(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function p(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function f(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,o={};r>0;)o[a=n[r-=1]]=e[a];return o}var b={};function g(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function h(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&g('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var o=arguments.length,l=new Array(o>3?o-3:0),s=3;s<o;s++)l[s-3]=arguments[s];return e.apply(void 0,[a,n,r].concat(l))}}var y="object"===typeof window&&window.Element||function(){};function E(e,t,a){if(!(e[t]instanceof y))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var v=o.a.oneOfType([o.a.string,o.a.func,E,o.a.shape({current:o.a.any})]),O=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),T={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},w={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],M=!("undefined"===typeof window||!window.document||!window.document.createElement);function k(e){return!(!e||"object"!==typeof e)&&"current"in e}function A(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function C(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===A(e))return NaN;if(P(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=P(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function P(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function R(e){if(!P(e))return!1;var t=A(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function I(e){if(k(e))return e.current;if(R(e))return e();if("string"===typeof e&&M){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function D(e){return null!==e&&(Array.isArray(e)||M&&"number"===typeof e.length)}function S(e,t){var a=I(e);return t?D(a)?a:null===a?[]:[a]:D(a)?a[0]:a}var L=["touchstart","click"];function U(e,t,a,n){var r=e;D(r)||(r=[r]);var o=a;if("string"===typeof o&&(o=o.split(/\s+/)),!D(r)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.removeEventListener(e,t,n)}))}))}}var W=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},64:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},75:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(25),l=a(91),s=a(92),c=a(93),i=a(94);a(19);t.a=e=>r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"page-title-box"},r.a.createElement("div",{className:"page-title-right"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(o.b,{to:"/"},"Sklejeczka")),e.breadCrumbItems.map((e,t)=>e.active?r.a.createElement(i.a,{active:!0,key:t},e.label):r.a.createElement(i.a,{key:t},r.a.createElement(o.b,{to:e.path},e.label))))),r.a.createElement("h4",{className:"page-title"},e.title))))},85:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(67),l=a(0),s=a.n(l),c=a(19),i=a.n(c),u=a(60),d=a.n(u),m=a(135),p=a(61),f=Object(o.a)({},m.Transition.propTypes,{children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),tag:p.tagPropType,baseClass:i.a.string,baseClassActive:i.a.string,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])}),b=Object(o.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.TransitionTimeouts.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,l=e.className,c=e.cssModule,i=e.children,u=e.innerRef,f=Object(r.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(p.pick)(f,p.TransitionPropTypeKeys),g=Object(p.omit)(f,p.TransitionPropTypeKeys);return s.a.createElement(m.Transition,b,(function(e){var r="entered"===e,m=Object(p.mapToCssModules)(d()(l,a,r&&o),c);return s.a.createElement(t,Object(n.a)({className:m},g,{ref:u}),i)}))}g.propTypes=f,g.defaultProps=b,t.a=g},91:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,s=e.tag,c=e.form,i=e.widths,m=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(t,a){var n=e[t];if(delete m[t],n){var r=!a;p.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var f=Object(d.mapToCssModules)(u()(t,o?"no-gutters":null,c?"form-row":"row",p),a);return l.a.createElement(s,Object(n.a)({},m,{className:f}))};b.propTypes=p,b.defaultProps=f,t.a=b},92:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),f={tag:d.tagPropType,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,s=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,n){var r=e[t];if(delete c[t],r||""===r){var o=!n;if(Object(d.isObject)(r)){var l,s=o?"-":"-"+t+"-",m=g(o,t,r.size);i.push(Object(d.mapToCssModules)(u()(((l={})[m]=r.size||""===r.size,l["order"+s+r.order]=r.order||0===r.order,l["offset"+s+r.offset]=r.offset||0===r.offset,l)),a))}else{var p=g(o,t,r);i.push(p)}}})),i.length||i.push("col");var m=Object(d.mapToCssModules)(u()(t,i),a);return l.a.createElement(s,Object(n.a)({},c,{className:m}))};h.propTypes=f,h.defaultProps=b,t.a=h},93:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m={tag:d.tagPropType,listTag:d.tagPropType,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var t=e.className,a=e.listClassName,o=e.cssModule,s=e.children,c=e.tag,i=e.listTag,m=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.mapToCssModules)(u()(t),o),b=Object(d.mapToCssModules)(u()("breadcrumb",a),o);return l.a.createElement(c,Object(n.a)({},p,{className:f,"aria-label":m}),l.a.createElement(i,{className:b},s))};p.propTypes=m,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},94:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m={tag:d.tagPropType,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.active,s=e.tag,c=Object(r.a)(e,["className","cssModule","active","tag"]),i=Object(d.mapToCssModules)(u()(t,!!o&&"active","breadcrumb-item"),a);return l.a.createElement(s,Object(n.a)({},c,{className:i,"aria-current":o?"page":void 0}))};p.propTypes=m,p.defaultProps={tag:"li"},t.a=p},98:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,c=e.inverse,i=e.outline,m=e.tag,p=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.mapToCssModules)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return l.a.createElement(m,Object(n.a)({},f,{className:b,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},99:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),l=a.n(o),s=a(19),c=a.n(s),i=a(60),u=a.n(i),d=a(61),m={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(t,"card-body"),a);return l.a.createElement(s,Object(n.a)({},c,{className:i,ref:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=41.7a793a74.chunk.js.map