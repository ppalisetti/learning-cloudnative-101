(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),c=a.n(b),i=a("Wbzz"),o=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),u=a.n(l),d=a("QH2O"),m=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,c=r.subDirectory,o=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},O=a("FCXl"),h=a("dI71"),T=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),b=r===n,o=new RegExp(n+"/?(#.*)?$"),s=a.replace(o,r);return Object(p.b)("li",{key:e,className:u()((t={},t[T.selectedItem]=b,t),T.listItem)},Object(p.b)(i.Link,{className:T.link,to:""+s},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:T.list},r))))))},t}(r.a.Component),w=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,l=void 0===b?{}:b,u=t.relativePagePath,d=t.titleType,m=l.tabs,g=l.title,h=l.theme,T=l.description,k=l.keywords,P=Object(f.a)().interiorTheme,N=Object(i.useStaticQuery)("2456312558").site.pathPrefix,y=N?n.pathname.replace(N,""):n.pathname,I=m?y.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",C=h||P;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:C,pageTitle:g,pageDescription:T,pageKeywords:k,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:C}),m&&Object(p.b)(v,{slug:y,tabs:m,currentTab:I}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:u})),Object(p.b)(O.a,{pageContext:t,location:n,slug:y,tabs:m,currentTab:I}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},PwTX:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),c=a("013z"),i=(a("qKvR"),{}),o={_frontmatter:i},s=c.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Solution"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'apiVersion: batch/v1beta1\nkind: CronJob\nmetadata:\n  name: xwing-cronjob\nspec:\n  schedule: "*/1 * * * *"\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n          - name: xwing-status\n            image: ibmcase/xwing-status:1.0\n            args:\n            - /usr/sbin/xwing-status.sh\n          restartPolicy: OnFailure\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get cronjob xwing-cronjob\n")))}l.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-7-solution-mdx-ef9a8fe5d5ed2c865d4d.js.map