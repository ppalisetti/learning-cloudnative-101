(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,a,t){"use strict";var c=t("q1tI"),i=t.n(c),n=t("NmYn"),b=t.n(n),s=t("Wbzz"),r=t("Xrax"),l=t("k4MR"),o=t("TSYQ"),d=t.n(o),p=t("QH2O"),g=t.n(p),m=t("qKvR"),A=function(e){var a,t=e.title,c=e.theme,i=e.tabs,n=void 0===i?[]:i;return Object(m.b)("div",{className:d()(g.a.pageHeader,(a={},a[g.a.withTabs]=n.length,a[g.a.darkMode]="dark"===c,a))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},t)))))},u=t("BAC9"),O=function(e){var a=e.relativePagePath,t=e.repository,c=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=t||c,n=i.baseUrl,b=i.subDirectory,r=n+"/edit/"+i.branch+b+"/src/pages"+a;return n?Object(m.b)("div",{className:"bx--row "+u.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:u.link,href:r},"Edit this page on GitHub"))):null},f=t("FCXl"),j=t("dI71"),w=t("I8xM"),h=function(e){function a(){return e.apply(this,arguments)||this}return Object(j.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,c=t.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var a,i=b()(e,{lower:!0,strict:!0}),n=i===c,r=new RegExp(c+"/?(#.*)?$"),l=t.replace(r,i);return Object(m.b)("li",{key:e,className:d()((a={},a[w.selectedItem]=n,a),w.listItem)},Object(m.b)(s.Link,{className:w.link,to:""+l},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:w.list},i))))))},a}(i.a.Component),x=t("MjG9"),N=t("CzIb");a.a=function(e){var a=e.pageContext,t=e.children,c=e.location,i=e.Title,n=a.frontmatter,o=void 0===n?{}:n,d=a.relativePagePath,p=a.titleType,g=o.tabs,u=o.title,j=o.theme,w=o.description,y=o.keywords,k=Object(N.a)().interiorTheme,v=Object(s.useStaticQuery)("2456312558").site.pathPrefix,C=v?c.pathname.replace(v,""):c.pathname,I=g?C.split("/").filter(Boolean).slice(-1)[0]||b()(g[0],{lower:!0}):"",T=j||k;return Object(m.b)(l.a,{tabs:g,homepage:!1,theme:T,pageTitle:u,pageDescription:w,pageKeywords:y,titleType:p},Object(m.b)(A,{title:i?Object(m.b)(i,null):u,label:"label",tabs:g,theme:T}),g&&Object(m.b)(h,{slug:C,tabs:g,currentTab:I}),Object(m.b)(x.a,{padded:!0},t,Object(m.b)(O,{relativePagePath:d})),Object(m.b)(f.a,{pageContext:a,location:c,slug:C,tabs:g,currentTab:I}),Object(m.b)(r.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WL3G:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return s})),t.d(a,"default",(function(){return o}));var c=t("wx14"),i=t("zLVn"),n=(t("q1tI"),t("7ljp")),b=t("013z"),s=(t("qKvR"),{}),r={_frontmatter:s},l=b.a;function o(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(l,Object(c.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Login to IBM Cloud"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Go to ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"cloud.ibm.com"}),"IBM Cloud"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqElEQVQoz5WRwWsTURDG55uZl32b7Ga7STab7G6siS1dKWmr6UGoiDelWCl4KPSiUkXwT9CDt95behS89CBGvCn43/l2G6UFRf2Y0xt+b75vhtI0jeM4DMP2vyqsqxI5MTP9h4TIOIgIJCJJkniex5XwB7kGgT00OjAxc4tYASHX6dfK8nw8WYmipQsvV1j3pCHba2wLcrwEYLOAVY1qQ9Sq8ZmdK7o6lqAtapbkT9iO4A2gEbixgJfz/mR5WGT9tBukvTBLo6DpXfqC0SoRTKm5hoovYLpgW8Os1x+erBx8Kx7P8715/ujj6Mn39up+BYtxhtkOOb6HaBvhhvuF7Zi9ITnn9WT201t+dpc6M3S30Z2hdwfNAarJXMHtGfd2uXMfSztoz9C6CTuG6bi4lbeGwDMQl41+1q+0bCTZlcGB9Pcl2ePeA453EGxUyRfBWJjVrao+yUUtlgzxJXsqxSspXkju6kjy55I9k8GhFEeXhoB+c1uxOnqtk7c6fqM33unqsZYnuv5Btz7z7a+Ev4i0eGnKM1OemvX3Oj2XzblsfeHNTzI9/wFegCx4IY9CywAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ibmcloud",title:"ibmcloud",src:"/static/4f75735efa95a842381691055530fd02/3cbba/IBM_Cloud.png",srcSet:["/static/4f75735efa95a842381691055530fd02/7fc1e/IBM_Cloud.png 288w","/static/4f75735efa95a842381691055530fd02/a5df1/IBM_Cloud.png 576w","/static/4f75735efa95a842381691055530fd02/3cbba/IBM_Cloud.png 1152w","/static/4f75735efa95a842381691055530fd02/db1bd/IBM_Cloud.png 1450w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Create an API Connect Instance"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Once logged into IBM Cloud, you will see your cloud dashboard and look for ",Object(n.b)("inlineCode",{parentName:"p"},"Create Resource")," in the upper left corner.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("inlineCode",{parentName:"p"},"Create Resource")," and search for ",Object(n.b)("inlineCode",{parentName:"p"},"API Connect")," in the search bar."))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABi0lEQVQY02NQV1eXkZHh5uHh5uZmZ2dnYWHh4eHh5eUFEjxcbDySRnxW0/itpvBZTuIx6eAxauA1qOLRK+XWSOVRDmUwNDRUVVHVU9PQ09JWU1dXVVUVFhZmY2Pj4OAAkowMDMxKKazet9k8r7O5nmJ12MlqvYbVYhGLTgOzchqDlpaWvKych6GFk4W1mYW5nZ2tuLg4AwMDIyMjAyMzkMEglcagvxWEzI4zGO5iMNrPYHyQQbGbgdOZQUlJycbGpqS8rLS8rAYEaju7uib29XfXtkxo7ZjY0tk373z/6ocTV9zoXX574trnk9Y+71/1ZOKKaxPnbGGQlZWNjIz8DwN///4FUX/+/f/5B8z4++/bx///v4Gkfn3+/w/E+Pf78///v4EMBjk5udDQ0M+fP38Cgw8fPnz6/Pn75y/fnr76+vb99xdvvr779P3nr+/ff3z+/PXT56/fvv8Ekz/evH0L1fz169cvYPDxw0cgG2j/l8+fv3z6BERAc78gAWQuwmZk0Z8/f+LSgAwAP1EVX+rHgbMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"catalog",title:"catalog",src:"/static/a06e9004608334243cc4d0af92510d53/3cbba/ibmcatalog.png",srcSet:["/static/a06e9004608334243cc4d0af92510d53/7fc1e/ibmcatalog.png 288w","/static/a06e9004608334243cc4d0af92510d53/a5df1/ibmcatalog.png 576w","/static/a06e9004608334243cc4d0af92510d53/3cbba/ibmcatalog.png 1152w","/static/a06e9004608334243cc4d0af92510d53/0b124/ibmcatalog.png 1728w","/static/a06e9004608334243cc4d0af92510d53/4ea69/ibmcatalog.png 2304w","/static/a06e9004608334243cc4d0af92510d53/8bc61/ibmcatalog.png 2478w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the ",Object(n.b)("inlineCode",{parentName:"p"},"API Connect")," box that appears.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Next, verify the ",Object(n.b)("inlineCode",{parentName:"p"},"region")," best for your location and use the ",Object(n.b)("inlineCode",{parentName:"p"},"Lite")," version.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"At the bottom of the page, you can change the service name. Once that is done click ",Object(n.b)("inlineCode",{parentName:"p"},"Create")," on the right side of the screen."))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKklEQVQoz22QTY+CMBiE/SdEEmPk4n2ryRq8eDb75yEhkW/ZKhTa2gKyO8BqFuNk0rydzNMWZpTSLMvSNA2C4PxP2SDkSZJ8D8I2z3PXdQ+Hg2VZy+VyhiiO4zAMkXqe5/s+ZqzBQ5iTQVEU4VDHcbbbrWmaPSyEuA/inEsptdZ1Xf881HVdWZbIxxkrnkAImc/nPVxVFQDAGNArimKsjkKOp+KC9zCqaLRtixJjDEcopXB5/4CmAdAM63sYVZBK3S6Uloy1Lcr109gOJzdjDvh8Tjdk8wfTS06vrCglq3oXpYDZdDs6Z/gr+uSHhHwYhrFYLHr4CvRWC6mfRonxnpyEQun6Hkbxbve5Wlnr9XrGeSWl0EppPTE+BH5Juq71TtHx+GXb9n6//wXQVcNCkYXTfwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"create",title:"create",src:"/static/c986d2293170b6db77c9b4abe58aa15c/3cbba/apiconnect-create.png",srcSet:["/static/c986d2293170b6db77c9b4abe58aa15c/7fc1e/apiconnect-create.png 288w","/static/c986d2293170b6db77c9b4abe58aa15c/a5df1/apiconnect-create.png 576w","/static/c986d2293170b6db77c9b4abe58aa15c/3cbba/apiconnect-create.png 1152w","/static/c986d2293170b6db77c9b4abe58aa15c/0b124/apiconnect-create.png 1728w","/static/c986d2293170b6db77c9b4abe58aa15c/4ea69/apiconnect-create.png 2304w","/static/c986d2293170b6db77c9b4abe58aa15c/5ae27/apiconnect-create.png 2503w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Now your API Connect instance will be created.")),Object(n.b)("h2",null,"Login to API Connect"),Object(n.b)("p",null,"Now that we have created the instance, we can now login to it."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Go to the Cloud Dashboard and click on ",Object(n.b)("inlineCode",{parentName:"li"},"Cloud Foundry services"),".")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjElEQVQoz52ROQ4DIQxFff+zpUk3FdVMIpGF3RgwEB8B8uTK0pO//EFrrZQ6z9NaG3aIMUCKyXyNNZaIyjKZCiKBeDK11rkD91l5QPapOOxYJ234YwxuDcLxfN0uc3/wcclyUS4Z3ecN0VOJbZYmOdYv99GRMjDz/AtJDty2ZYlITX42APcJMTkvFacfH6YPs54iZRYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"dashboard",title:"dashboard",src:"/static/5f88ad1e4569c10972486db540802999/3cbba/cfservices.png",srcSet:["/static/5f88ad1e4569c10972486db540802999/7fc1e/cfservices.png 288w","/static/5f88ad1e4569c10972486db540802999/a5df1/cfservices.png 576w","/static/5f88ad1e4569c10972486db540802999/3cbba/cfservices.png 1152w","/static/5f88ad1e4569c10972486db540802999/aed01/cfservices.png 1239w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"From there, select your ",Object(n.b)("inlineCode",{parentName:"li"},"API Connect Instance"),".")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.944444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVQY02VP0W7DIAzk/z9w2su2Zk2bKsFmJBBCwPZMk0qTdrLgfHcPPtN1Xd/3gCcAYJqm14bjOMITSg7lcC2AtdY457z3QRHjMfMTJ1+UNPOPsiyNBP2NA/TOCbPQaxT6kDTOcor/iYjBt6t7/5IHyoA8IN0hft7iR79/j/Jw+3Vs4g3SZZDBaWa7DPUO3Fv20YR5hcmmdS1550pUKlpMca2lMPEaoip1Lwio5+e0zYhbSqLJSmYOQatr7ZwzMxOR1qu1ttuZU0rEpOuP91vO6mr/UktLMv8CuxZXiOVs0L4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",Object(c.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"resources",title:"resources",src:"/static/a2be54d3a57dae3c591524c25ea03e50/3cbba/resources.png",srcSet:["/static/a2be54d3a57dae3c591524c25ea03e50/7fc1e/resources.png 288w","/static/a2be54d3a57dae3c591524c25ea03e50/a5df1/resources.png 576w","/static/a2be54d3a57dae3c591524c25ea03e50/3cbba/resources.png 1152w","/static/a2be54d3a57dae3c591524c25ea03e50/0b124/resources.png 1728w","/static/a2be54d3a57dae3c591524c25ea03e50/0c220/resources.png 2218w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Now you are on your API Connect Dashboard where you will find your ",Object(n.b)("inlineCode",{parentName:"li"},"Catalogs"),".")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-api-connect-activities-access-api-mdx-ac630b3c61c3464495c4.js.map