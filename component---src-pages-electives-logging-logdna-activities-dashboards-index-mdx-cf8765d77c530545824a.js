(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),l=t("NmYn"),b=t.n(l),c=t("Wbzz"),s=t("Xrax"),r=t("k4MR"),o=t("TSYQ"),p=t.n(o),d=t("QH2O"),m=t.n(d),g=t("qKvR"),A=function(e){var a,t=e.title,i=e.theme,n=e.tabs,l=void 0===n?[]:n;return Object(g.b)("div",{className:p()(m.a.pageHeader,(a={},a[m.a.withTabs]=l.length,a[m.a.darkMode]="dark"===i,a))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},t)))))},u=t("BAC9"),O=function(e){var a=e.relativePagePath,t=e.repository,i=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,l=n.baseUrl,b=n.subDirectory,s=l+"/edit/"+n.branch+b+"/src/pages"+a;return l?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},j=t("FCXl"),f=t("dI71"),N=t("I8xM"),y=function(e){function a(){return e.apply(this,arguments)||this}return Object(f.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,i=t.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var a,n=b()(e,{lower:!0,strict:!0}),l=n===i,s=new RegExp(i+"/?(#.*)?$"),r=t.replace(s,n);return Object(g.b)("li",{key:e,className:p()((a={},a[N.selectedItem]=l,a),N.listItem)},Object(g.b)(c.Link,{className:N.link,to:""+r},e))}));return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:N.list},n))))))},a}(n.a.Component),h=t("MjG9"),w=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,n=e.Title,l=a.frontmatter,o=void 0===l?{}:l,p=a.relativePagePath,d=a.titleType,m=o.tabs,u=o.title,f=o.theme,N=o.description,x=o.keywords,v=Object(w.a)().interiorTheme,C=Object(c.useStaticQuery)("2456312558").site.pathPrefix,k=C?i.pathname.replace(C,""):i.pathname,I=m?k.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",B=f||v;return Object(g.b)(r.a,{tabs:m,homepage:!1,theme:B,pageTitle:u,pageDescription:N,pageKeywords:x,titleType:d},Object(g.b)(A,{title:n?Object(g.b)(n,null):u,label:"label",tabs:m,theme:B}),m&&Object(g.b)(y,{slug:k,tabs:m,currentTab:I}),Object(g.b)(h.a,{padded:!0},t,Object(g.b)(O,{relativePagePath:p})),Object(g.b)(j.a,{pageContext:a,location:i,slug:k,tabs:m,currentTab:I}),Object(g.b)(s.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},TOxN:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return c})),t.d(a,"default",(function(){return o}));var i=t("wx14"),n=t("zLVn"),l=(t("q1tI"),t("7ljp")),b=t("013z"),c=(t("qKvR"),{}),s={_frontmatter:c},r=b.a;function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(l.b)(r,Object(i.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Prerequisite"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Configure the LogDNA Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"/monitoring/logdna/#activities"}),"here"))),Object(l.b)("h2",null,"Deploy sample App"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open LogDNA"),Object(l.b)("li",{parentName:"ul"},"Select Views"),Object(l.b)("li",{parentName:"ul"},"Kubernetes messages should show up"),Object(l.b)("li",{parentName:"ul"},"To test simple log messages create a Pod with bash prompt",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),'kubectl run my-logs \\\n  --rm -it \\\n  -l "app=my-app,tier=production" \\\n  --image=busybox \\\n  -- sh\n'))),Object(l.b)("li",{parentName:"ul"},"Print a log message",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'echo "This is my log message"\n')))),Object(l.b)("h2",null,"Filtering Logs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Identify your message at the bottom of the screen")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"840px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.277777777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAnklEQVQI1xWKaw6CMBCEuUehtoWuu1taUMJTCMgPjY9LeAjvb51MvnyTTNLlcmJY0ex4GBF6xM/YPZpqCbh4rKVoCzVhMYAZIY9srWoLKdOYLOnBzHzcKL+TuhB0XH739dVUa+Br5c4qmxn22q2etsCRk7MDmVQIkabJ7flu+sEikisBCYiRGegvcbL3vj6xD7EuhHjT1ubWHrVWWv8Ag3IfaX3UJ48AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"identify-line",title:"identify-line",src:"/static/abb78b363ac8927999562b165b5578cd/a6874/identify-line.png",srcSet:["/static/abb78b363ac8927999562b165b5578cd/7fc1e/identify-line.png 288w","/static/abb78b363ac8927999562b165b5578cd/a5df1/identify-line.png 576w","/static/abb78b363ac8927999562b165b5578cd/a6874/identify-line.png 840w"],sizes:"(max-width: 840px) 100vw, 840px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Click the log line to expand")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"783px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB40lEQVQozyWS207bQBCG/QZUrQSxvUefd73eeBM72IlzsEmDDASqVg1C6gUBQS+qPkF71fu+c8dlNPr17ax+af/RWpUIFzJsI3QR43MhdCz/3u4flvVqkvV1Abc5x91Ed1Pdmmyl0/U4XY6FDvHz3ZVltO67tl83bbNcLpabZqGiUItEREES+T4lPsGDUhIMOnBEyRlCL5lveXGcKJ3qscpUDJUITCkiBJRQShk0I5QRxoAB4MgZe4/pE5g5Z00eyyjgfsCDyHFcjDF4EUZQeFCYIEzwG0MR5L5z3KPyLC3F7/vLTaHycjNprlKlKeXIRpx7ngfPZL4fMMqxQ0CBoaMw/IDZo+RWMi365ydtzOXh+ubb7aQsN9fbz6+Hebeq22X/sIfJqu++fL/v9ruiqkxZCpGe8mAwyyzrtmtIl9em2JSQQpi0+lhDkkiEZm4YYzKX9a5WU+XBNafYsU9GzjH1LCX1br5GBHHiurZDKA45dkf2kBNj13FgcZDVPhtBXjIsEYSc2O4jmGsT/vhaTGX081C0s7QxyZ+X+W6ezbQ8H4s6T6vxfzDpG1djIRg+te3XlFuT0C/icJWwRYCLJFGx/HWxu5tNq0xsS1PGvmZ4nas1/JBcLTLRaFlliQzQ8dPNP1t+aQ7qtlOfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"expand-line",title:"expand-line",src:"/static/a8f5844aff89b1617a0aada5351c04a2/b88b7/expand-line.png",srcSet:["/static/a8f5844aff89b1617a0aada5351c04a2/7fc1e/expand-line.png 288w","/static/a8f5844aff89b1617a0aada5351c04a2/a5df1/expand-line.png 576w","/static/a8f5844aff89b1617a0aada5351c04a2/b88b7/expand-line.png 783w"],sizes:"(max-width: 783px) 100vw, 783px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The message has details that could be use to create views, alerts, or boards")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The message was identified as ",Object(l.b)("inlineCode",{parentName:"li"},"TEXT")),Object(l.b)("li",{parentName:"ol"},"Contains the message"),Object(l.b)("li",{parentName:"ol"},"LogDNA fields ",Object(l.b)("inlineCode",{parentName:"li"},"Source")," and ",Object(l.b)("inlineCode",{parentName:"li"},"App")),Object(l.b)("li",{parentName:"ol"},"Location of filed parsed, in kubernetes this is ",Object(l.b)("inlineCode",{parentName:"li"},"var/log")),Object(l.b)("li",{parentName:"ol"},"Kubernetes data ",Object(l.b)("inlineCode",{parentName:"li"},"Pod"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Container"),", ",Object(l.b)("inlineCode",{parentName:"li"},"Namespace"),", and ",Object(l.b)("inlineCode",{parentName:"li"},"ContainerID")),Object(l.b)("li",{parentName:"ol"},"LogDNA tagging as kubernetes ",Object(l.b)("inlineCode",{parentName:"li"},"k8s")),Object(l.b)("li",{parentName:"ol"},"Pod labels are captured in this case ",Object(l.b)("inlineCode",{parentName:"li"},"app")," and ",Object(l.b)("inlineCode",{parentName:"li"},"tier"))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPElEQVQY042RWVPCMBCA+zMwV5O0Se8jaVPBUYojageQBwQcxOPNcTxe1P8/BvAHuLPHtw87ezlZILkvKfeE8JmLCcaUuvR/4gjONm1x0WRS+FnTeiIgxEUIIowghDtAO7AB4z/cC7DmqCj63qxvhk2WlXq4yPVxEKUYUYK5LwLPk4z5vgw5lwSxA1uVQWS9o5J4+vaS1uasG63el213rky9fL1bf2yqprlcdNPtvFR6vOgefp6vV5Om3zeDvi0WQeTEUs4mV0L6IhZVa8IsdBktBqU+VZS5UR6mdUpcEhahGZm4jCmjlFMAAATAGeTZ7XhiB2IuogiCIyg48Sz1gEsItrsCaKNdFvSODrzT/QGcIpafW1Pm4bIr72eVkPJxrr+eTlSRNDqtVWx0anRiodaJUYlNmyq1n7G9fwHyTkc4ARlKXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"expand-line",title:"expand-line",src:"/static/e3db469d97e78375eac31d3acb3d2bad/3cbba/details-line.png",srcSet:["/static/e3db469d97e78375eac31d3acb3d2bad/7fc1e/details-line.png 288w","/static/e3db469d97e78375eac31d3acb3d2bad/a5df1/details-line.png 576w","/static/e3db469d97e78375eac31d3acb3d2bad/3cbba/details-line.png 1152w","/static/e3db469d97e78375eac31d3acb3d2bad/c9be9/details-line.png 1246w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can use free form text to search or filter log lines, or you can click on on values from a message to filter. For example to filter to only get the message for the namespace ",Object(l.b)("inlineCode",{parentName:"li"},"default"),", tier ",Object(l.b)("inlineCode",{parentName:"li"},"production")," and app `my-app")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVQoz42RXU/bMBSG/RM27QPoR9rE8cexk5C4SWxYIQ1NNWWi7UihsI4LqkpM27Qrrvj3OFTb9Y5evXquLD/noAH2HUwoJT52+72O4/QHjjP4v0FzDdtZKogHx5nMCw97vb7T7XZ7PVsdGwv/uGPzdyyidV1v6yqRoIs6/lQDDymTHqbu0CeUM5CeSyxTCpQDYQAiANmGcYGKb7fN06MpTsM4Wu6WN7/vTiZjXZyufqzzEzMy+ern7frPZjybZFrH6cinzD5qGxOGzgo9W5RREhJKsklupoZyQrifFRkmnovdvMxNZZhk1mjoDdu/dzt7AzQfn+2aZvP9/qIs3715e/jhYG928P7jXsxCy4dHe1+r3+Z10K+N2d1NjEmfH88zJaSgT1v90KRC8lEi4mNQiUhVoGKhYkgTmao2o5jbLSKgwwxwKmihwEQiD3iZinNlAXQkdAgWIoITRoDatRFGbbWHxdhDwKHM4purz1eX09Wisv31ctrMbV+s5tX1slp8KaUArVQWShmEURjKIOCcK6VeAJ61YO68JwmzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"expand-line",title:"expand-line",src:"/static/39a3fc0b636f40046c9114de36565eda/3cbba/filtering-line.png",srcSet:["/static/39a3fc0b636f40046c9114de36565eda/7fc1e/filtering-line.png 288w","/static/39a3fc0b636f40046c9114de36565eda/a5df1/filtering-line.png 576w","/static/39a3fc0b636f40046c9114de36565eda/3cbba/filtering-line.png 1152w","/static/39a3fc0b636f40046c9114de36565eda/3bd43/filtering-line.png 1322w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"When you hit enter only the log lines for your app will show up")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can create a filtered view for your search query, click on ",Object(l.b)("inlineCode",{parentName:"p"},"Unsaved View")," and click ",Object(l.b)("inlineCode",{parentName:"p"},"Save as new view"),", enter the name ",Object(l.b)("inlineCode",{parentName:"p"},"My App")))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"621px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"106.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVQ4y41UTYvaQBiOHwgK7qpVf4M3wYOUvYl48OPgj9GiInrw7Ne5fvyYli1V7KmLSFXYhVW0aqJJZpKJ0b5JWo1ubPswvJnMzPN+z1CxWDQejycSiWQymUqlotGo3+93u11ut9vj8eily3V/Gnd3906nk3p4eB+JRMLhcDAYDIVCgUDAarVSFGUymcxms0kBSOWX0sFmsylksAOfdDpdqVSKxWKpVCoUCvl8PpfLfVCRzWZPEpDJZOBYLBZzOByU1/sONHW73ePxyLKsIAiEEFEUZVk+GkGSJJCNRsNisQDZeyIPh8PxeDydTkGuVqvD4bC/BGgEvXCyWq0qZJ/vTNa0/h3amVqtppF9JzLPI0kiooAIwaLASwQTEebqgInIS3tyRT5bXi5e2e2SXr9s6VeeW4vCFiNaQIyAGZggfgPqwPdrcqfTgSWEGBHvRAHSxt5KGERuTCbkHPPhBqAWBm7DxmazASnLe3UYQ8u2geXFYoExRLWXbgMa4VwqfZ13ux1Y1kf41u2LbOvJ8/kcvIJtCEyz89ZtzfIFWXObRwgLGMHACACK1BRcAOK6JrfbbVhiFiuOZjh6y9IMrQJSCLFwOjAMc03+2GoRHs++/1iOn39OXubT58l0MlYxm83W6/XqDyA04/b8n97WmqTZbNrt9t+larVbitsczWEWbqS+VlcX61RneA8uensnbdGRk4/yP29VvV6Hd0Z5DMD7crn8NHz6/Pjpy9fHXq83GAy+qRjooK30+/3RaAQPC7j9Cw5UdID5ktAPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"expand-line",title:"expand-line",src:"/static/13c2df1b3cf83d812f2d64554e7cdb67/135b1/new-view.png",srcSet:["/static/13c2df1b3cf83d812f2d64554e7cdb67/7fc1e/new-view.png 288w","/static/13c2df1b3cf83d812f2d64554e7cdb67/a5df1/new-view.png 576w","/static/13c2df1b3cf83d812f2d64554e7cdb67/135b1/new-view.png 621w"],sizes:"(max-width: 621px) 100vw, 621px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Now you can use select the view ",Object(l.b)("inlineCode",{parentName:"p"},"My App")," from the sidebar to filter the messages only to your app.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.logdna.com/docs/filters"}),"Filtering Logs"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"See ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.logdna.com/docs/views"}),"Creating Views")))),Object(l.b)("h2",null,"Creating Boards Boards and Graphs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Boards")," are a collection of graphs. Typically you use this to aggregate metrics about your log lines or query or plots over time."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("inlineCode",{parentName:"li"},"Boards")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("inlineCode",{parentName:"li"},"NEW BOARDS")),Object(l.b)("li",{parentName:"ul"},"Name your Board ",Object(l.b)("inlineCode",{parentName:"li"},"My Board")),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("inlineCode",{parentName:"li"},"Add Graph")),Object(l.b)("li",{parentName:"ul"},"Select query like ",Object(l.b)("inlineCode",{parentName:"li"},"label.app")," = ",Object(l.b)("inlineCode",{parentName:"li"},"my-logs"))),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAtUlEQVQoz5VRyxLCIBDrb0C3PISlrbSKU3vSVv3/nzKVgxd1MAMMMNlNAlXbhsf9tq7XZbmEwERUF6PSxoQQvPPMrJSmf1BJKYWQKK+lRLOmGJsyJox656BsrVWqUcWosvuua0/pyOzRsqRMaw3mS5ko7nsMY6wxRpdhy5yVcQjMWIUQuP0ZlTIB5JyZUkrzfB7HwzRN3n81D194GvwoOG/lvu/GYcCfxRiRCPryE1DgNuwA7J9MgUGs62uEbgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"add-graph",title:"add-graph",src:"/static/ce046e14291bde70927ade6c581c4088/3cbba/board-create.png",srcSet:["/static/ce046e14291bde70927ade6c581c4088/7fc1e/board-create.png 288w","/static/ce046e14291bde70927ade6c581c4088/a5df1/board-create.png 576w","/static/ce046e14291bde70927ade6c581c4088/3cbba/board-create.png 1152w","/static/ce046e14291bde70927ade6c581c4088/65344/board-create.png 1350w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("inlineCode",{parentName:"li"},"Live")," to see the graph for the current time")),Object(l.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(l.b)("span",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAABEUlEQVQoz5VSAW7DIAzkGSWAwRjSJe2UdZua/v9lO0DNaLRV28lBPmJ8NkZdr5/n8ymEEGNkZmut+QlDxW5TpZRwDIf9UyBGRJrPITCRc04VwqCBKlwH6gCNcRxLABFChQg1qnmesIWsiEaiGlnSwddaD3fA/Wa1C3yKq+ZOuTn2EchV62djil+U2zW0tb8t7Oxokryu6+22vl8uIqkc7nPv1HpqrJEoaDvnnLIs0wc5/9fDrYpW4EEfTunNu6CQcrOm8IQORr/IK5w5L0WZLG3mMYWeOt/TQOyMnWSB5pzKqgIJ3y3xyF42y/H4QOUYQ0KKRjETVfpypZ1WGya6We1R/2b4q5IInkR9OWW85j/4AqecWyasBTC/AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(l.b)("img",Object(i.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"live-board",title:"live-board",src:"/static/499e7a1b57043649312ca924bb9916ce/3cbba/live-board.png",srcSet:["/static/499e7a1b57043649312ca924bb9916ce/7fc1e/live-board.png 288w","/static/499e7a1b57043649312ca924bb9916ce/a5df1/live-board.png 576w","/static/499e7a1b57043649312ca924bb9916ce/3cbba/live-board.png 1152w","/static/499e7a1b57043649312ca924bb9916ce/0b124/live-board.png 1728w","/static/499e7a1b57043649312ca924bb9916ce/e23f2/live-board.png 2006w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"See ",Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.logdna.com/docs/graphs"}),"Creating Boards and Graphs"))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-logging-logdna-activities-dashboards-index-mdx-cf8765d77c530545824a.js.map