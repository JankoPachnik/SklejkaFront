(this["webpackJsonphyper-react"]=this["webpackJsonphyper-react"]||[]).push([[74],{1047:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(98),c=t(184),m=t(99),s=t(187),i=t(170),o=t(186),u=t(169),d=t(183),E=t(91),h=t(92),p=t(181),b=t(182),g=t(60),f=t.n(g),k=t(75),N=(t(19),t(134)),C=t(123);class v extends l.Component{constructor(e){super(e),this.toggleContent=this.toggleContent.bind(this),this.reloadContent=this.reloadContent.bind(this),this.remove=this.remove.bind(this),this.state={collapse:!0,loading:!1,hidden:!1}}toggleContent(){this.setState(e=>({collapse:!e.collapse}))}reloadContent(){this.setState({loading:!0}),setTimeout(()=>{this.setState({loading:!1})},500+5*Math.random()*300)}remove(){this.setState({hidden:!0})}render(){const e=this.props.children||null;return this.state.hidden?null:n.a.createElement(r.a,{className:f()(this.props.className)},this.state.loading&&n.a.createElement("div",{className:"card-disabled"},n.a.createElement("div",{className:"card-portlets-loader"})),n.a.createElement(m.a,null,n.a.createElement("div",{className:"card-widgets"},n.a.createElement(N.a,{color:"link",className:"card-action p-0",onClick:this.reloadContent},n.a.createElement("i",{className:"mdi mdi-refresh"})),n.a.createElement(N.a,{color:"link",className:"card-action p-0",onClick:this.toggleContent},n.a.createElement("i",{className:f()("mdi",{"mdi-minus":this.state.collapse,"mdi-plus":!this.state.collapse})})),n.a.createElement(N.a,{color:"link",className:"card-action p-0",onClick:this.remove},n.a.createElement("i",{className:"mdi mdi-close"}))),n.a.createElement(s.a,{tag:"h5",className:"mb-0"},"Card title"),n.a.createElement(C.a,{isOpen:this.state.collapse,className:"pt-3"},e)))}}var x=v,y=t(859),w=t.n(y),S=t(860),q=t.n(S),I=t(861),A=t.n(I);const B=()=>n.a.createElement(r.a,null,n.a.createElement(c.a,{src:w.a}),n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Card title"),n.a.createElement(i.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up."),n.a.createElement("button",{className:"btn btn-primary"},"Button"))),j=()=>n.a.createElement(r.a,null,n.a.createElement(c.a,{src:A.a}),n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Card title"),n.a.createElement(i.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up."),n.a.createElement(i.a,{className:"mt-4"},n.a.createElement("a",{href:"/",className:"card-link text-custom"},"Card link"),n.a.createElement("a",{href:"/",className:"card-link text-custom"},"Another link")))),F=()=>n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Card title"),n.a.createElement(o.a,{tag:"h6"},"Support card subtitle")),n.a.createElement(c.a,{src:q.a,className:"img-fluid"}),n.a.createElement(m.a,null,n.a.createElement(i.a,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),n.a.createElement("button",{className:"btn btn-primary"},"Button"))),L=()=>n.a.createElement(r.a,null,n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Special title treatment"),n.a.createElement(o.a,{className:"mt-2"},"With supporting text below as a natural lead-in to additional content."),n.a.createElement("button",{className:"btn btn-primary mt-4"},"Go somewhere"))),G=()=>n.a.createElement(r.a,null,n.a.createElement(u.a,{tag:"h6"},"Featured"),n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Special title treatment"),n.a.createElement(i.a,null,"With supporting text below as a natural lead-in to additional content."),n.a.createElement("button",{className:"btn btn-primary mt-1"},"Go somewhere"))),T=()=>n.a.createElement(r.a,null,n.a.createElement(u.a,null,"Quote"),n.a.createElement(m.a,null,n.a.createElement("blockquote",{className:"card-bodyquote mt-2"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."))),n.a.createElement(d.a,null,"Someone famous in ",n.a.createElement("cite",{title:"Source Title"},"Source Title"))),W=()=>n.a.createElement(E.a,null,["primary","secondary","success","danger","info","warning"].map((e,a)=>n.a.createElement(h.a,{md:4,key:a},n.a.createElement(r.a,{className:f()("text-white",["bg-".concat(e)])},n.a.createElement(m.a,null,n.a.createElement(s.a,{tag:"h5"},"Special title treatment"),n.a.createElement(i.a,null,"With supporting text below as a natural lead-in to additional content."),n.a.createElement(i.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")))))),H=()=>n.a.createElement(p.a,null,n.a.createElement(j,null),n.a.createElement(j,null),n.a.createElement(j,null)),J=()=>n.a.createElement("div",{className:"card-deck-wrapper"},n.a.createElement(b.a,null,n.a.createElement(j,null),n.a.createElement(j,null),n.a.createElement(j,null)));a.default=()=>n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{breadCrumbItems:[{label:"UI",path:"/ui/cards"},{label:"Base UI",path:"/ui/cards"},{label:"Cards",path:"/ui/cards",active:!0}],title:"Cards"}),n.a.createElement(E.a,null,n.a.createElement(h.a,{md:6,lg:3},n.a.createElement(B,null)),n.a.createElement(h.a,{md:6,lg:3},n.a.createElement(j,null)),n.a.createElement(h.a,{md:6,lg:3},n.a.createElement(F,null)),n.a.createElement(h.a,{md:6,lg:3},n.a.createElement(L,null),n.a.createElement(L,null))),n.a.createElement(E.a,null,n.a.createElement(h.a,{md:6},n.a.createElement(G,null)),n.a.createElement(h.a,{md:6},n.a.createElement(T,null))),n.a.createElement(E.a,null,n.a.createElement(h.a,{sm:12},n.a.createElement("h4",{className:"mb-4"},"Card Colored")),n.a.createElement(h.a,{sm:12},n.a.createElement(W,null))),n.a.createElement(E.a,null,n.a.createElement(h.a,{sm:12},n.a.createElement("h4",{className:"mb-4"},"Card Group")),n.a.createElement(h.a,{sm:12},n.a.createElement(H,null))),n.a.createElement(E.a,null,n.a.createElement(h.a,{sm:12},n.a.createElement("h4",{className:"mb-4 mt-4"},"Card Decks")),n.a.createElement(h.a,{sm:12},n.a.createElement(J,null))),n.a.createElement(E.a,null,n.a.createElement(h.a,null,n.a.createElement("h4",{className:"mb-4 mt-4"},"Custom Card Portlets"))),n.a.createElement(E.a,null,n.a.createElement(h.a,{md:6},n.a.createElement(x,null,n.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),n.a.createElement(h.a,{md:6},n.a.createElement(x,{className:"bg-primary text-white"},n.a.createElement("p",null,"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")))))},75:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(25),c=t(91),m=t(92),s=t(93),i=t(94);t(19);a.a=e=>n.a.createElement(c.a,null,n.a.createElement(m.a,null,n.a.createElement("div",{className:"page-title-box"},n.a.createElement("div",{className:"page-title-right"},n.a.createElement(s.a,null,n.a.createElement(i.a,null,n.a.createElement(r.b,{to:"/"},"Sklejeczka")),e.breadCrumbItems.map((e,a)=>e.active?n.a.createElement(i.a,{active:!0,key:a},e.label):n.a.createElement(i.a,{key:a},n.a.createElement(r.b,{to:e.path},e.label))))),n.a.createElement("h4",{className:"page-title"},e.title))))},859:function(e,a,t){e.exports=t.p+"static/media/small-1.2ed5ae4f.jpg"},860:function(e,a,t){e.exports=t.p+"static/media/small-4.dd8bd539.jpg"},861:function(e,a,t){e.exports=t.p+"static/media/small-2.958f8691.jpg"}}]);
//# sourceMappingURL=74.3753406a.chunk.js.map