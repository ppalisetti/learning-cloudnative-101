(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),o=a.n(l),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),m=a("QH2O"),d=a.n(m),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=l.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,c=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),k=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0,strict:!0}),l=r===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,r);return Object(u.b)("li",{key:e,className:p()((t={},t[k.selectedItem]=l,t),k.listItem)},Object(u.b)(i.Link,{className:k.link,to:""+s},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:k.list},r))))))},t}(r.a.Component),x=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,m=t.titleType,d=b.tabs,O=b.title,h=b.theme,k=b.description,C=b.keywords,v=Object(y.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,S=T?n.pathname.replace(T,""):n.pathname,P=d?S.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",w=h||v;return Object(u.b)(s.a,{tabs:d,homepage:!1,theme:w,pageTitle:O,pageDescription:k,pageKeywords:C,titleType:m},Object(u.b)(j,{title:r?Object(u.b)(r,null):O,label:"label",tabs:d,theme:w}),d&&Object(u.b)(f,{slug:S,tabs:d,currentTab:P}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:p})),Object(u.b)(N.a,{pageContext:t,location:n,slug:S,tabs:d,currentTab:P}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},VcCP:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),o=a("013z"),i=(a("qKvR"),{}),c={_frontmatter:i},s=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Solution - sample-01"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"topic1")," and ",Object(l.b)("inlineCode",{parentName:"li"},"topic1.DLT")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-01")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\n  kafka:\n    bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n    ssl:\n      protocol: TLSv1.2\n    properties:\n      sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n      sasl.mechanism: PLAIN\n      security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-01-2.5.0.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/bar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/fail"))),Object(l.b)("h2",null,"Solution - sample-02"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"foos")," and ",Object(l.b)("inlineCode",{parentName:"li"},"bars")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-02")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\n  kafka:\n    bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n    ssl:\n      protocol: TLSv1.2\n    properties:\n      sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n      sasl.mechanism: PLAIN\n      security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-02-2.5.0.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foo/bar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/bar/baz")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/unknown/xxx"))),Object(l.b)("h2",null,"Solution - sample-03"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create the topics ",Object(l.b)("inlineCode",{parentName:"li"},"topic2")," and ",Object(l.b)("inlineCode",{parentName:"li"},"topic3")," in your IBM Event Streams on Cloud instance."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"git clone https://github.com/spring-projects/spring-kafka.git")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"cd spring-kafka/samples/sample-03")),Object(l.b)("li",{parentName:"ol"},"Include the necessary credentials in the ",Object(l.b)("inlineCode",{parentName:"li"},"src/main/resources/application.yml")," file by merging the existing contents with the structure below:",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'spring:\n  kafka:\n    bootstrap-servers: <your-bootstrap-nodes-property-of-your-IBM-Event-Streams-on-Cloud-instance>\n    ssl:\n      protocol: TLSv1.2\n    properties:\n      sasl.jaas.config: org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="<your-api-key-of-your-IBM-Event-Streams-on-Cloud-instance>";\n      sasl.mechanism: PLAIN\n      security.protocol: SASL_SSL\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"mvn clean package")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"java -jar target/kafka-sample-03-2.5.0.RELEASE.jar")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"curl -X POST http://localhost:8080/send/foos/a,b,c,d,e"))))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-2-solution-mdx-ccd19e4d922998054eaf.js.map