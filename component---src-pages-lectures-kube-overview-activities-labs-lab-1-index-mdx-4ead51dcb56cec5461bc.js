(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),b=a("NmYn"),l=a.n(b),r=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,i=e.tabs,b=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,b=i.baseUrl,l=i.subDirectory,o=b+"/edit/"+i.branch+l+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),b=i===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,i);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=b,t),f.listItem)},Object(p.b)(r.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:f.list},i))))))},t}(i.a.Component),N=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,u=t.titleType,m=s.tabs,x=s.title,h=s.theme,f=s.description,w=s.keywords,k=Object(v.a)().interiorTheme,P=Object(r.useStaticQuery)("2456312558").site.pathPrefix,C=P?n.pathname.replace(P,""):n.pathname,y=m?C.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=h||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:I,pageTitle:x,pageDescription:f,pageKeywords:w,titleType:u},Object(p.b)(j,{title:i?Object(p.b)(i,null):x,label:"label",tabs:m,theme:I}),m&&Object(p.b)(T,{slug:C,tabs:m,currentTab:y}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d})),Object(p.b)(g.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:y}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LhtV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("wx14"),i=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),r=(a("qKvR"),{}),o={_frontmatter:r},c=l.a;function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)(c,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Problem"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Write a pod definition named ",Object(b.b)("inlineCode",{parentName:"li"},"yoda-service-pod.yml")," Then create a pod in the cluster using this definition to make sure it works.")),Object(b.b)("p",null,"The specificationsof this pod are as follows:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Use the ",Object(b.b)("inlineCode",{parentName:"li"},"bitnami/nginx")," container image."),Object(b.b)("li",{parentName:"ul"},"The container needs a containerPort of ",Object(b.b)("inlineCode",{parentName:"li"},"80"),"."),Object(b.b)("li",{parentName:"ul"},"Set the command to run as ",Object(b.b)("inlineCode",{parentName:"li"},"nginx")),Object(b.b)("li",{parentName:"ul"},"Pass in the ",Object(b.b)("inlineCode",{parentName:"li"},"-g daemon off; -q")," args to run nginx in quiet mode."),Object(b.b)("li",{parentName:"ul"},"Create the pod in the ",Object(b.b)("inlineCode",{parentName:"li"},"web")," namespace.")),Object(b.b)("h2",null,"Verification"),Object(b.b)("p",null,"When you have completed this lab, use the following commands to validate your solution. The ‘get pods’ command will "),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"kubectl get pods -n web"),"\n",Object(b.b)("inlineCode",{parentName:"p"},"kubectl describe pod nginx -n web")))}s.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-1-index-mdx-4ead51dcb56cec5461bc.js.map