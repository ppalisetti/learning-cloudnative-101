(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),c=a.n(o),l=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),m=a.n(b),d=a("QH2O"),u=a.n(d),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:m()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,c=r.subDirectory,i=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),v=a("dI71"),h=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),o=r===n,i=new RegExp(n+"/?(#.*)?$"),s=a.replace(i,r);return Object(p.b)("li",{key:e,className:m()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(p.b)(l.Link,{className:h.link,to:""+s},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},r))))))},t}(r.a.Component),T=a("MjG9"),k=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,m=t.relativePagePath,d=t.titleType,u=b.tabs,g=b.title,v=b.theme,h=b.description,N=b.keywords,P=Object(k.a)().interiorTheme,y=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=y?n.pathname.replace(y,""):n.pathname,I=u?w.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",M=v||P;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:M,pageTitle:g,pageDescription:h,pageKeywords:N,titleType:d},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:M}),u&&Object(p.b)(f,{slug:w,tabs:u,currentTab:I}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:m})),Object(p.b)(O.a,{pageContext:t,location:n,slug:w,tabs:u,currentTab:I}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},cc4a:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),{}),i={_frontmatter:l},s=c.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Solution"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: vader-service-ambassador-config\ndata:\n  haproxy.cfg: |-\n    global\n        daemon\n        maxconn 256\n\n    defaults\n        mode http\n        timeout connect 5000ms\n        timeout client 50000ms\n        timeout server 50000ms\n\n    listen http-in\n        bind *:80\n        server server1 127.0.0.1:8775 maxconn 32\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: vader-service\nspec:\n  containers:\n  - name: millennium-falcon\n    image: ibmcase/millennium-falcon:1\n  - name: haproxy-ambassador\n    image: haproxy:1.7\n    ports:\n    - containerPort: 80\n    volumeMounts:\n    - name: config-volume\n      mountPath: /usr/local/etc/haproxy\n  volumes:\n  - name: config-volume\n    configMap:\n      name: vader-service-ambassador-config\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=jsonpath='{.status.podIP}'):80\n")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-3-solution-mdx-328be37d4f66f159d8b1.js.map