"use strict";(self.webpackChunklellowmellow_blog=self.webpackChunklellowmellow_blog||[]).push([[441],{7959:function(e,t,n){n.d(t,{Z:function(){return I}});var a=n(7294),i=n(5086),r=n(1882);const o=i.default.div.withConfig({displayName:"TabBar__TabBarWrapper",componentId:"sc-1lomzev-0"})(["display:flex;width:100%;height:2.5rem;box-shadow:",";user-select:none;-webkit-user-select:none;"],(e=>e.theme.tabBar)),l=i.default.div.withConfig({displayName:"TabBar__TabWrapper",componentId:"sc-1lomzev-1"})(["height:auto;display:flex;align-items:center;border-bottom:",";border-top:",";"],(e=>e.$isSelected?e.theme.tabBarSelected:"none"),(e=>e.$isSelected?"0.125rem solid #0000":"none")),s=i.default.button.withConfig({displayName:"TabBar__TabButton",componentId:"sc-1lomzev-2"})(["display:flex;align-items:center;flex:0 0 auto;white-space:nowrap;height:1.75rem;border-radius:0.25rem;font-size:0.875rem;line-height:1.2;padding:0 0.5rem;font-weight:500;gap:0.375rem;color:",";&:hover{background:",";}&:active{background:",";}transition:20ms ease-in 0s;"],(e=>e["aria-selected"]?e.theme.text:e.theme.weekText),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive));var c=e=>{let{isGridView:t,changeToGrid:n,changeToList:i,isSeries:c}=e;return a.createElement(o,{role:"tablist"},c||a.createElement(l,{$isSelected:t},a.createElement(s,{role:"tab","aria-selected":t,onClick:n},a.createElement(r.Z,{iconName:"TbLayoutGrid",size:"1rem"}),a.createElement("span",null,"Grid view"))),a.createElement(l,{$isSelected:!t},a.createElement(s,{role:"tab","aria-selected":!t,onClick:i},a.createElement(r.Z,{iconName:"TbList",size:"1rem"}),a.createElement("span",null,"List view"))))},m=n(1883);const d=i.default.div.withConfig({displayName:"CardBlock__CardWrapper",componentId:"sc-11dltta-0"})(["width:100%;display:flex;color:",";text-decoration:none;line-height:1.5;cursor:pointer;box-shadow:",";border-radius:0.25rem;background:",";overflow:hidden;flex-direction:column;&:hover{background:",";}&:active{background:",";}transition:20ms ease-in 0s;user-select:none;-webkit-user-select:none;"],(e=>e.theme.text),(e=>e.theme.cardShadow),(e=>e.theme.cardBackground),(e=>e.theme.cardHover),(e=>e.theme.cardActive)),h=i.default.div.withConfig({displayName:"CardBlock__CardThumbnail",componentId:"sc-11dltta-1"})(["width:100%;height:12rem;background:",";color:",";display:flex;align-items:center;justify-content:center;"],(e=>e.theme.text),(e=>e.theme.background)),u=i.default.p.withConfig({displayName:"CardBlock__Title",componentId:"sc-11dltta-2"})(["font-size:0.875rem;width:100%;padding:0.5rem 0.625rem 0.375rem;line-height:1.5;font-weight:500;"]),p=i.default.div.withConfig({displayName:"CardBlock__InfoWrapper",componentId:"sc-11dltta-3"})(["display:flex;flex-direction:column;gap:0.125rem;padding:0 0.375rem 0.75rem;"]),g=i.default.p.withConfig({displayName:"CardBlock__InfoText",componentId:"sc-11dltta-4"})(["width:100%;font-size:0.75rem;padding:0 0.375rem;line-height:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]),f=i.default.div.withConfig({displayName:"CardBlock__TagsWrapper",componentId:"sc-11dltta-5"})(["display:flex;flex-direction:row;align-items:left;gap:0.375rem;padding:0.25rem 0.375rem;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;&:-webkit-scrollbar{display:none;}"]),b=i.default.button.withConfig({displayName:"CardBlock__Tag",componentId:"sc-11dltta-6"})(["display:flex;align-items:center;flex-shrink:0;height:1.125rem;border-radius:0.25rem;padding:0 0.375rem;font-size:0.75rem;white-space:nowrap;background:",";outline:0.25rem solid #0000;color:",";&:hover{outline:0.25rem solid ",";}&:active{outline:0.25rem solid ",";}transition:20ms ease-in 0s;"],(e=>e.theme.tag),(e=>e.theme.text),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive));var w=e=>{let{to:t,title:n,date:i,icon:o,tags:l,detail:s}=e;return a.createElement(d,{onClick:()=>(0,m.navigate)(t)},a.createElement(h,null,a.createElement(r.Z,{iconName:o,size:"2rem"})),a.createElement(u,null,n),a.createElement(p,null,a.createElement(g,null,i),a.createElement(f,null,l&&l.map((e=>a.createElement(b,{key:e,onClick:t=>((e,t)=>{t.stopPropagation(),(0,m.navigate)("/tags/"+e+"/")})(e,t)},e)))),a.createElement(g,null,(w=200,(null==(c=s)?void 0:c.length)>w?c.slice(0,w-1)+"...":c))));var c,w};const v=i.default.a.withConfig({displayName:"ListBlock__BlockWrapper",componentId:"sc-1az1l8a-0"})(["width:100%;height:1.875rem;display:flex;align-items:center;gap:0.25rem;cursor:pointer;border-radius:0.25rem;color:",";background:",";overflow:hidden;margin:0.0625rem 0;padding:0 0.25rem;flex-direction:row;&:hover{background:",";}&:active{background:",";}& > *{flex:0 0 auto;}transition:20ms ease-in 0s;"],(e=>e.theme.weekIcon),(e=>e.theme.background),(e=>e.theme.buttonHover),(e=>e.theme.buttonActive)),k=i.default.span.withConfig({displayName:"ListBlock__Title",componentId:"sc-1az1l8a-1"})(["font-size:1rem;line-height:1.5;font-weight:500;color:",";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto;"],(e=>e.theme.text)),x=i.default.span.withConfig({displayName:"ListBlock__InfoText",componentId:"sc-1az1l8a-2"})(["font-size:0.75rem;padding:0 0.375rem;line-height:1.5;color:",";"],(e=>e.theme.text));var y=e=>{let{to:t,title:n,date:i,icon:o,post:l}=e;return a.createElement(v,{as:m.Link,to:t},a.createElement(r.Z,{iconName:o,size:"1.375rem"}),a.createElement(k,null,n),a.createElement(x,null,i||l+" posts"))};const E=i.default.div.withConfig({displayName:"NoData__NoResult",componentId:"sc-8h1h7r-0"})(["margin:3rem 0;flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:0.875rem;line-height:1.5;text-align:center;span:nth-child(1){font-weight:500;color:",";}span:nth-child(2){color:",";}button{line-height:1.5;font-size:0.875rem;color:",";}"],(e=>e.theme.weekText),(e=>e.theme.searchText),(e=>e.theme.blue));var _=e=>{let{main:t,series:n}=e;return a.createElement(E,null,a.createElement("span",null,t&&"No Posts",n&&"No Series"),a.createElement("span",null,t&&"There are no posts in this blog.",n&&"There are no series in this blog."),a.createElement("button",{onClick:()=>(0,m.navigate)("/")},"Go to main page"))};const C=i.default.h2.withConfig({displayName:"Database__Title",componentId:"sc-cnfnu9-0"})(["flex:0 1 auto;margin-top:4rem;margin-bottom:0.25rem;padding:0.25rem 0.125rem;font-weight:600;font-size:1.875rem;color:",";line-height:1.3;"],(e=>e.theme.text)),T=i.default.div.withConfig({displayName:"Database__GridWrapper",componentId:"sc-cnfnu9-1"})(["margin-top:1rem;margin-bottom:0.25rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(16.25rem,1fr));gap:1rem;"]),N=i.default.div.withConfig({displayName:"Database__ListWrapper",componentId:"sc-cnfnu9-2"})(["margin-top:0.25rem;margin-bottom:0.25rem;display:flex;flex-direction:column;"]);var I=e=>{let{data:t,main:n=!1,series:i=!1,tags:r=!1,seriesPost:o=!1}=e;const{0:l,1:s}=(0,a.useState)(!i),{0:m,1:d}=(0,a.useState)(10),{0:h,1:u}=(0,a.useState)([]),p=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&d((e=>Math.min(e+10,t.length)))}),{root:null,rootMargin:"0px",threshold:1}),n=p.current;return n&&e.observe(n),()=>{n&&e.unobserve(n)}}),[t.length]),(0,a.useEffect)((()=>{const e=t.slice(0,m).map((e=>i?{key:e.fieldValue,to:"/series/"+e.fieldValue.replace(/\s+/g,"-")+"/",icon:"TbFolderOpen",title:e.fieldValue,post:e.totalCount}:{key:e.node.id,to:e.node.fields.slug,title:e.node.frontmatter.title,date:new Date(e.node.frontmatter.date).toLocaleDateString(),icon:e.node.frontmatter.icon,tags:e.node.frontmatter.tags,detail:e.node.excerpt}));u(e)}),[m,t,i]),a.createElement(a.Fragment,null,a.createElement(C,null,n&&"All Posts",i&&"All Series"),a.createElement(c,{isGridView:l,isSeries:i,changeToGrid:()=>s(!0),changeToList:()=>s(!1)}),!t.length&&a.createElement(_,{main:n,series:i}),l?a.createElement(T,null,h.map((e=>a.createElement(w,e)))):a.createElement(N,null,h.map((e=>a.createElement(y,e)))),m<t.length&&a.createElement("div",{ref:p,style:{height:"1rem",marginBottom:"10rem"}}))}},5855:function(e,t,n){n.r(t);var a=n(7294),i=n(6899),r=n(9439),o=n(7959),l=n(9349);t.default=e=>{let{data:t}=e;const n=t.allMarkdownRemark.group;return a.createElement(a.Fragment,null,a.createElement(i.Z,{title:"Series",description:l.metaDescription,url:l.siteUrl+"/series/",icon:"TbLayoutList"}),a.createElement(r.Z,{type:"main",title:"Series",description:n.length+" series to dive into in this blog.",icon:"TbLayoutList"}),a.createElement(o.Z,{data:n,series:!0}))}}}]);
//# sourceMappingURL=component---src-pages-series-jsx-1df237aa0fdee2e794b6.js.map