/*! For license information please see 87.af076c6c.chunk.js.LICENSE.txt */
(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[87],{1185:function(e,t,a){"use strict";a.r(t);var n=a(22),o=a(30),r=a(43),i=a(31),c=a(32),s=a(0),l=a.n(s),u=a(169),d=a(33),h=(a(19),a(342)),m=a(16),p=a(522),f=l.a.lazy((function(){return Promise.all([a.e(4),a.e(11)]).then(a.bind(null,793))})),b=l.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(7)]).then(a.bind(null,686))})),y=l.a.lazy((function(){return a.e(8).then(a.bind(null,682))})),g=l.a.lazy((function(){return Promise.all([a.e(4),a.e(9)]).then(a.bind(null,683))})),v=function(){return l.a.createElement("div",null)},E=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).openLeftMenu=function(){document.body&&document.body.classList.add("sidebar-enable")},o.componentDidMount=function(){o.props.changeSidebarTheme(m.f),window.innerWidth>=768&&window.innerWidth<=1028&&o.props.changeSidebarType(m.i)},o.openLeftMenu=o.openLeftMenu.bind(Object(r.a)(o)),o}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children||null,t=this.props.layout.leftSideBarType===m.i,a=this.props.layout.leftSideBarTheme===m.h;return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(s.Suspense,{fallback:v()},l.a.createElement(f,Object.assign({isCondensed:t,isLight:a,hideUserProfile:!0},this.props))),l.a.createElement("div",{className:"content-page"},l.a.createElement("div",{className:"content"},l.a.createElement(s.Suspense,{fallback:v()},l.a.createElement(b,Object.assign({openLeftMenuCallBack:this.openLeftMenu,hideLogo:!0},this.props))),l.a.createElement(u.a,{fluid:!0},l.a.createElement(s.Suspense,{fallback:l.a.createElement("div",{className:"text-center"})},e))),l.a.createElement(s.Suspense,{fallback:v()},l.a.createElement(y,this.props)))),l.a.createElement(s.Suspense,{fallback:v()},l.a.createElement(g,this.props,l.a.createElement(p.a,null))))}}]),a}(s.Component);t.default=Object(d.b)((function(e){return{layout:e.Layout}}),{changeSidebarTheme:h.d,changeSidebarType:h.e})(E)},169:function(e,t,a){"use strict";var n=a(7),o=a(11),r=a(0),i=a.n(r),c=a(19),s=a.n(c),l=a(70),u=a.n(l),d=a(71),h={tag:d.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,r=e.fluid,c=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===r?l="container-fluid":r&&(l="container-"+r);var h=Object(d.mapToCssModules)(u()(t,l),a);return i.a.createElement(c,Object(n.a)({},s,{className:h}))};m.propTypes=h,m.defaultProps={tag:"div"},t.a=m},342:function(e,t,a){"use strict";var n=a(20);a.d(t,"f",(function(){return n.a})),a.d(t,"i",(function(){return n.d})),a.d(t,"j",(function(){return n.g})),a.d(t,"k",(function(){return n.h}));var o=a(18);a.d(t,"b",(function(){return o.a})),a.d(t,"c",(function(){return o.b})),a.d(t,"d",(function(){return o.c})),a.d(t,"e",(function(){return o.d})),a.d(t,"g",(function(){return o.e})),a.d(t,"l",(function(){return o.f}));var r=a(36);a.d(t,"a",(function(){return r.a})),a.d(t,"h",(function(){return r.c}))},522:function(e,t,a){"use strict";var n=a(22),o=a(30),r=a(43),i=a(31),c=a(32),s=a(0),l=a.n(s),u=a(33),d=(a(19),a(342)),h=a(16),m=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).componentDidMount=function(){o._loadStateFromProps()},o.componentDidUpdate=function(e,t){e!==o.props&&o._loadStateFromProps()},o.handleClose=function(e){e.preventDefault(),o.props.hideRightSidebar()},o.changeLayout=function(e){switch(e.currentTarget.value){case"horizontal":o.setState({isHorizontalLayout:!o.state.isHorizontalLayout,isCondensed:!1,isDetachedLayout:!1}),o.props.changeLayout(h.b);break;case"detached":o.setState({isDetachedLayout:!o.state.isDetachedLayout,isHorizontalLayout:!1,isBoxed:!1}),o.props.changeLayout(h.a);break;default:o.setState({isHorizontalLayout:!1,isCondensed:!1,isDetachedLayout:!1}),o.props.changeLayout(h.c)}},o.changeWidthMode=function(e){switch(e.currentTarget.value){case"boxed":o.setState({isBoxed:!0}),o.props.changeLayoutWidth(h.d);break;default:o.setState({isBoxed:!1}),o.props.changeLayoutWidth(h.e)}},o.changeTheme=function(e){switch(e.currentTarget.value){case"light":o.setState({isLight:!0}),o.props.changeSidebarTheme(h.h);break;case"dark":o.setState({isLight:!1,isDark:!0}),o.props.changeSidebarTheme(h.f);break;default:o.setState({isLight:!1,isDark:!1}),o.props.changeSidebarTheme(h.g)}},o.changeLeftSiderbarType=function(e){switch(e.currentTarget.value){case"condensed":o.setState({isCondensed:!0,isSidebarScrollable:!1,isLight:!1,isDark:!1}),o.props.changeSidebarType(h.i);break;case"scrollable":o.setState({isCondensed:!1,isSidebarScrollable:!0}),o.props.changeSidebarType(h.k);break;default:o.setState({isCondensed:!1,isSidebarScrollable:!1}),o.props.changeSidebarType(h.j)}},o.handleClose=o.handleClose.bind(Object(r.a)(o)),o.changeLayout=o.changeLayout.bind(Object(r.a)(o)),o.changeWidthMode=o.changeWidthMode.bind(Object(r.a)(o)),o.changeTheme=o.changeTheme.bind(Object(r.a)(o)),o.changeLeftSiderbarType=o.changeLeftSiderbarType.bind(Object(r.a)(o)),o.state={isHorizontalLayout:!1,isDetachedLayout:!1,isBoxed:!1,isSidebarScrollable:!1,isCondensed:!1,isLight:!1,isDark:!1},o}return Object(o.a)(a,[{key:"_loadStateFromProps",value:function(){this.setState({isHorizontalLayout:this.props.layoutType===h.b,isDetachedLayout:this.props.layoutType===h.a,isBoxed:this.props.layoutWidth===h.d,isSidebarScrollable:this.props.leftSideBarType===h.k,isCondensed:this.props.leftSideBarType===h.i,isLight:this.props.leftSideBarTheme===h.h,isDark:this.props.leftSideBarTheme===h.f})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mt-2 p-2"},l.a.createElement("div",{className:"alert alert-primary",role:"alert"},l.a.createElement("strong",null,"Customize the layout, sidebar menu, etc"))),l.a.createElement("h5",{className:"pl-3"},"Layout"),l.a.createElement("div",{className:"pl-3"},l.a.createElement("div",{className:"pt-2"},l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"layout",value:"vertical",id:"vertical-check",onChange:this.changeLayout,checked:!this.state.isHorizontalLayout&&!this.state.isDetachedLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"vertical-check"},"Vertical Layout (Default)")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"layout",value:"horizontal",id:"horizontal-check",onChange:this.changeLayout,checked:this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"horizontal-check"},"Horizontal Layout")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"layout",value:"detached",id:"detached-check",onChange:this.changeLayout,checked:this.state.isDetachedLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"detached-check"},"Detached Layout")))),l.a.createElement("hr",{className:"mb-0 mt-2"}),l.a.createElement("h5",{className:"pl-3"},"Width"),l.a.createElement("div",{className:"mt-2 pl-3"},l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"width",value:"fluid",id:"fluid-check",checked:!this.state.isBoxed,onChange:this.changeWidthMode,disabled:this.state.isDetachedLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"fluid-check"},"Fluid")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"width",value:"boxed",id:"boxed-check",checked:this.state.isBoxed,onChange:this.changeWidthMode,disabled:this.state.isDetachedLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"boxed-check"},"Boxed"))),l.a.createElement("hr",{className:"mb-0"}),l.a.createElement("h5",{className:"pl-3"},"Left Sidebar"),l.a.createElement("div",{className:"pl-3"},l.a.createElement("div",{className:"pt-2"},l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"theme",value:"default",id:"default-theme-check",checked:!this.state.isLight&&!this.state.isDark,onChange:this.changeTheme,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"default-theme-check"},"Default")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"theme",value:"light",id:"light-theme-check",onChange:this.changeTheme,checked:this.state.isLight,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"light-theme-check"},"Light")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"theme",value:"dark",id:"dark-theme-check",onChange:this.changeTheme,checked:this.state.isDark,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"dark-theme-check"},"Dark")))),l.a.createElement("div",{className:"pl-3"},l.a.createElement("div",{className:"pt-2"},l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"fixed",id:"left-sidebar-width-fixed",checked:!this.state.isCondensed&&!this.state.isSidebarScrollable,onChange:this.changeLeftSiderbarType,disabled:this.state.isDetachedLayout||this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-fixed"},"Fixed (Default)")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"condensed",id:"left-sidebar-width-condensed",onChange:this.changeLeftSiderbarType,checked:this.state.isCondensed,disabled:this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-condensed"},"Condensed")),l.a.createElement("div",{className:"custom-control custom-switch mb-1"},l.a.createElement("input",{type:"radio",className:"custom-control-input",name:"left-sidebar-width",value:"scrollable",id:"left-sidebar-width-scrollable",onChange:this.changeLeftSiderbarType,checked:this.state.isSidebarScrollable,disabled:this.state.isHorizontalLayout}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"left-sidebar-width-scrollable"},"Scrollable")))))}}]),a}(s.Component);t.a=Object(u.b)((function(e){return{showRightSidebar:e.Layout.showRightSidebar,layoutType:e.Layout.layoutType,layoutWidth:e.Layout.layoutWidth,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType}}),{hideRightSidebar:d.g,changeLayout:d.b,changeLayoutWidth:d.c,changeSidebarType:d.e,changeSidebarTheme:d.d})(m)},70:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},71:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return i})),a.d(t,"setScrollbarWidth",(function(){return c})),a.d(t,"isBodyOverflowing",(function(){return s})),a.d(t,"getOriginalBodyPadding",(function(){return l})),a.d(t,"conditionallyUpdateScrollbar",(function(){return u})),a.d(t,"setGlobalCssModule",(function(){return d})),a.d(t,"mapToCssModules",(function(){return h})),a.d(t,"omit",(function(){return m})),a.d(t,"pick",(function(){return p})),a.d(t,"warnOnce",(function(){return b})),a.d(t,"deprecated",(function(){return y})),a.d(t,"DOMElement",(function(){return v})),a.d(t,"targetPropType",(function(){return E})),a.d(t,"tagPropType",(function(){return L})),a.d(t,"TransitionTimeouts",(function(){return S})),a.d(t,"TransitionPropTypeKeys",(function(){return N})),a.d(t,"TransitionStatuses",(function(){return T})),a.d(t,"keyCodes",(function(){return k})),a.d(t,"PopperPlacements",(function(){return w})),a.d(t,"canUseDOM",(function(){return O})),a.d(t,"isReactRefObj",(function(){return j})),a.d(t,"toNumber",(function(){return C})),a.d(t,"isObject",(function(){return D})),a.d(t,"isFunction",(function(){return M})),a.d(t,"findDOMElements",(function(){return z})),a.d(t,"isArrayOrNodeList",(function(){return F})),a.d(t,"getTarget",(function(){return B})),a.d(t,"defaultToggleEvents",(function(){return W})),a.d(t,"addMultipleEventListeners",(function(){return A})),a.d(t,"focusableElements",(function(){return P}));var n,o=a(19),r=a.n(o);function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function l(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(a+e)}function d(e){n=e}function h(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function m(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function p(e,t){for(var a,n=Array.isArray(t)?t:[t],o=n.length,r={};o>0;)r[a=n[o-=1]]=e[a];return r}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}function y(e,t){return function(a,n,o){null!==a[n]&&"undefined"!==typeof a[n]&&b('"'+n+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,i=new Array(r>3?r-3:0),c=3;c<r;c++)i[c-3]=arguments[c];return e.apply(void 0,[a,n,o].concat(i))}}var g="object"===typeof window&&window.Element||function(){};function v(e,t,a){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var E=r.a.oneOfType([r.a.string,r.a.func,v,r.a.shape({current:r.a.any})]),L=r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func}),r.a.arrayOf(r.a.oneOfType([r.a.func,r.a.string,r.a.shape({$$typeof:r.a.symbol,render:r.a.func})]))]),S={Fade:150,Collapse:350,Modal:300,Carousel:600},N=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],T={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},k={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},w=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],O=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return!(!e||"object"!==typeof e)&&"current"in e}function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function C(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===x(e))return NaN;if(D(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=D(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function D(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function M(e){if(!D(e))return!1;var t=x(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function z(e){if(j(e))return e.current;if(M(e))return e();if("string"===typeof e&&O){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function F(e){return null!==e&&(Array.isArray(e)||O&&"number"===typeof e.length)}function B(e,t){var a=z(e);return t?F(a)?a:null===a?[]:[a]:F(a)?a[0]:a}var W=["touchstart","click"];function A(e,t,a,n){var o=e;F(o)||(o=[o]);var r=a;if("string"===typeof r&&(r=r.split(/\s+/)),!F(o)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(a){a.removeEventListener(e,t,n)}))}))}}var P=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']}}]);
//# sourceMappingURL=87.af076c6c.chunk.js.map