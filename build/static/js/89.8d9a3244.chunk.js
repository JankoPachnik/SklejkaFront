(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[89],{1023:function(e,t,a){"use strict";a.r(t);var l=a(5),n=a(0),s=a.n(n),c=a(91),r=a(92),i=a(98),m=a(99),d=a(865),h=a.n(d),u=(a(867),a(75));class E extends n.Component{constructor(e){super(e),this.onSlide=(e,t,a)=>{let n=Object(l.a)({},this.state.selectedVals);n[e]={textValue:t[0].toFixed(2),percent:a[0].toFixed(2)},this.setState({selectedVals:n})},this.onSlide2=(e,t)=>{let a=Object(l.a)({},this.state.selectedRanges);a[e]=t[0].toFixed(2)+"-"+t[1].toFixed(2),this.setState({selectedRanges:a})},this.state={selectedVals:{1:{textValue:20,percent:20},2:{textValue:20,percent:20}},selectedRanges:{1:"20-45",2:"20-45"}},this.onSlide=this.onSlide.bind(this),this.onSlide2=this.onSlide2.bind(this)}render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{breadCrumbItems:[{label:"UI",path:"/ui/rangesliders"},{label:"Extended UI",path:"/ui/rangesliders"},{label:"Range Sliders",path:"/ui/rangesliders",active:!0}],title:"Range Sliders"}),s.a.createElement(c.a,null,s.a.createElement(r.a,{xl:6},s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement("h4",{className:"header-title"},"Single"),s.a.createElement("p",{className:"text-muted font-14"},"Slider with single selecrtor"),s.a.createElement(h.a,{range:{min:0,max:100},start:[20],connect:!0,onSlide:(e,t,a,l,n)=>this.onSlide(1,a,n)}),s.a.createElement("p",{className:"mt-2 mb-0"},"Value:"," ",this.state.selectedVals?s.a.createElement("span",null,this.state.selectedVals[1].textValue,", \xa0",this.state.selectedVals[1].percent,"%"):null)))),s.a.createElement(r.a,{xl:6},s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement("h4",{className:"header-title"},"Range"),s.a.createElement("p",{className:"text-muted font-14"},"Slider with range selecrtor"),s.a.createElement(h.a,{range:{min:10,max:150},start:[20,45],connect:!0,onSlide:(e,t,a,l,n)=>this.onSlide2(1,a)}),s.a.createElement("p",{className:"mt-2 mb-0"},"Value:"," ",this.state.selectedRanges?s.a.createElement("span",null,this.state.selectedRanges[1]):null))))),s.a.createElement(c.a,null,s.a.createElement(r.a,{xl:6},s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement("h4",{className:"header-title"},"Slider Step"),s.a.createElement("p",{className:"text-muted font-14"},"Slider with step value"),s.a.createElement(h.a,{range:{min:0,max:100},start:[20],step:10,connect:!0,onSlide:(e,t,a,l,n)=>this.onSlide(2,a,n)}),s.a.createElement("p",{className:"mt-2 mb-0"},"Value:"," ",this.state.selectedVals?s.a.createElement("span",null,this.state.selectedVals[2].textValue,", \xa0",this.state.selectedVals[2].percent,"%"):null)))),s.a.createElement(r.a,{xl:6},s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement("h4",{className:"header-title"},"Range Slider with Steps"),s.a.createElement("p",{className:"text-muted font-14"},"Slider with range selecrtor with fixed step value"),s.a.createElement(h.a,{range:{min:10,max:150},start:[20,45],step:15,connect:!0,onSlide:(e,t,a,l,n)=>this.onSlide2(2,a)}),s.a.createElement("p",{className:"mt-2 mb-0"},"Value:"," ",this.state.selectedRanges?s.a.createElement("span",null,this.state.selectedRanges[2]):null))))))}}t.default=E},75:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(25),c=a(91),r=a(92),i=a(93),m=a(94);a(19);t.a=e=>n.a.createElement(c.a,null,n.a.createElement(r.a,null,n.a.createElement("div",{className:"page-title-box"},n.a.createElement("div",{className:"page-title-right"},n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(s.b,{to:"/"},"Sklejeczka")),e.breadCrumbItems.map((e,t)=>e.active?n.a.createElement(m.a,{active:!0,key:t},e.label):n.a.createElement(m.a,{key:t},n.a.createElement(s.b,{to:e.path},e.label))))),n.a.createElement("h4",{className:"page-title"},e.title))))}}]);
//# sourceMappingURL=89.8d9a3244.chunk.js.map