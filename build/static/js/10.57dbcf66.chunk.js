(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[10],{618:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),r=a(27),n=a(25),l=(a(19),a(377)),h=a(236);class o extends i.Component{constructor(e){super(e),this.componentWillMount=()=>{document.addEventListener("mousedown",this.handleOtherClick,!1)},this.componentWillUnmount=()=>{document.removeEventListener("mousedown",this.handleOtherClick,!1)},this.handleClose=e=>{e.preventDefault(),this.props.hideRightSidebar()},this.handleOtherClick=e=>{this.rightBarNodeRef.contains(e.target)||this.props.hideRightSidebar()},this.handleClose=this.handleClose.bind(this),this.state={}}render(){const e=this.props.title,t=this.props.children||null;return s.a.createElement(s.a.Fragment,null,s.a.createElement(l.a,{style:{maxHeight:"100%",zIndex:1e4}},s.a.createElement("div",{className:"right-bar",ref:e=>this.rightBarNodeRef=e},s.a.createElement("div",{className:"rightbar-title"},s.a.createElement(n.b,{to:"#",className:"right-bar-toggle float-right",onClick:this.handleClose},s.a.createElement("i",{className:"dripicons-cross noti-icon"})),s.a.createElement("h5",{className:"m-0"},e)),s.a.createElement("div",{className:"rightbar-content"},t))),s.a.createElement("div",{className:"rightbar-overlay"}))}}o.defaultProps={title:"Right Sidebar"},t.default=Object(r.b)(null,{hideRightSidebar:h.g})(o)}}]);
//# sourceMappingURL=10.57dbcf66.chunk.js.map