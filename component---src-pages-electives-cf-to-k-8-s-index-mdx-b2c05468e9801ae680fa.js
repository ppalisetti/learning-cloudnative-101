(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),b=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),u=a.n(p),g=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(g.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+h.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),A=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),s=a.replace(c,i);return Object(g.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=r,t),A.listItem)},Object(g.b)(b.Link,{className:A.link,to:""+s},e))}));return Object(g.b)("div",{className:A.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:A.list},i))))))},t}(i.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,l=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,u=l.tabs,h=l.title,j=l.theme,A=l.description,w=l.keywords,x=Object(v.a)().interiorTheme,k=Object(b.useStaticQuery)("2456312558").site.pathPrefix,C=k?n.pathname.replace(k,""):n.pathname,E=u?C.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",T=j||x;return Object(g.b)(s.a,{tabs:u,homepage:!1,theme:T,pageTitle:h,pageDescription:A,pageKeywords:w,titleType:p},Object(g.b)(m,{title:i?Object(g.b)(i,null):h,label:"label",tabs:u,theme:T}),u&&Object(g.b)(N,{slug:C,tabs:u,currentTab:E}),Object(g.b)(y.a,{padded:!0},a,Object(g.b)(f,{relativePagePath:d})),Object(g.b)(O.a,{pageContext:t,location:n,slug:C,tabs:u,currentTab:E}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DS2d:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return l}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},s=o.a;function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"Provided that you have been working mainly with CloudFoundry based application and had just learned on what Kubernetes is, this module tries to bridge the concept of what is happening in Kubernetes world that would correspond to the familiar thing in CloudFoundry application. This module assumes that you are very familar with CloudFoundry and have some basic understanding of Kubernetes objects and resources."),Object(r.b)("p",null,"The discussion in this module comes in two sub-sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Application execution environment comparison for CloudFoundry and Kubernetes and OpenShift"),Object(r.b)("li",{parentName:"ul"},"Application staging process comparison for CloudFoundry")),Object(r.b)("h2",null,"Application execution environment"),Object(r.b)("p",null,"The application execution environment diagram for CloudFoundry below demonstrates the components that runs CloudFoundry applications."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZUlEQVQoz5VSa2+DMAzs//+BU1VNXddCeRZCyPvBzU431O3bIhnF2D6ffTng5WzbVoxPTBnKeriY4dOGqmnxdjzheHqHWBW0C1iNg1QGIQRYa5FzxoEBmqaB934HTjGVAq0N7nWN5t7g83zG2LZw60qd8567KI2+69D3ffELYPf9YxgGTLOE4qRJ4t5OGEeBZVFouxEhbsScGqaEGCM8MRsmji8QQjwZlvEoqLWGlBLXW0OMO1xuPdmzgbWmFEgq7AjYOQ+tFOZZYHjMJb4S8x2Qk8dxLLZITb5E3U2UvFCRJH9GVVWo6woflyuMsXhQbksrYECebB+ZP7w/ZrcssjDizlXzgKZCpZ7LTum5N+dSESHnRHdXRmZBdoY/qu6CUCGLweq5EAvjWaxkipqtEOQnblBsI8AZisCY0A74auX5UIDvhpS2PsKGFyNf8w6LBRhix+P+GvnvW/zPYUGNMbQaVRh+ATyEuRe9D9yFAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cf",title:"cf",src:"/static/64f0075ab29649f8c61eb7b2e2e309fb/3cbba/cf.png",srcSet:["/static/64f0075ab29649f8c61eb7b2e2e309fb/7fc1e/cf.png 288w","/static/64f0075ab29649f8c61eb7b2e2e309fb/a5df1/cf.png 576w","/static/64f0075ab29649f8c61eb7b2e2e309fb/3cbba/cf.png 1152w","/static/64f0075ab29649f8c61eb7b2e2e309fb/0b124/cf.png 1728w","/static/64f0075ab29649f8c61eb7b2e2e309fb/d831a/cf.png 1960w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"In CloudFoundry, application runs within a Diego cell (used to be a DEA node) which runs a Garden container.\nThe cell is constructed from Droplet image that is stored in CloudFoundry BLOB store.\nCloudFoundry provides router (Go router) for accessing the application running in the cell so that external access is enabled for the application.\nFor the application to access the backend services, it facilitates an environment variable called VCAP_SERVICES, which contains the credentials and access information for those backend services."),Object(r.b)("p",null,"In Kubernetes application runs in the Kubernetes cluster as demonstrated below:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1124px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACc0lEQVQoz21SaW8SURSdP9q4VJb6RZOiSW2MrUDtoq2JsUmjJhpNqrExphqpSBcpdNFaoQxYaAiUaYDSoQWGWRiGOb77Ukwb+5LLG2bOu++ce45gGAYuKrPdhtJooHFygka9Dl3XYVnWOUyr1YJt27xo1RlOUFUVZ6vZbHJgOp3Gu4/zmAsEMTv3AV6vD/OfPsM0TY7RNA2KovD/3cUb0s30UWO7qulQWFOr00F0NYKZDRETfw7xajOBy1cc8Pr8sNk3VdU4Y2rcZkq6q8EUCcSGiiTYhs5KY4csLK1tIrq+jh1RxLfFJVztu4l7o4/R1E3ojIBBBE5VUSPaS6USBEk6wIEk4ej4BOEjFaFiHbJp48tCEB7PbQwNezEwMAiXy42R0QnIigFJZg2MFlelKM1/snO5HAQxmcJuUkRSKqH/lwRnZA8pHVgOfkVPzyW4rjnhdvfB4bqOsbFxgLEXY3Esswt3EzuoVCqIx+PIZrPI5/MQUqkUxEQC+WIJ7/eP8XrvEEWjg2BoEeNPpvH0zVtMTs/A5XTBzxiS5HR2H2s/f6NULHJjiFm5XEahUIAQDq8iFArhkL3otE20dI2RsBDd+IGX2xlMZWTMbu+i130DQ6NTqDLJNUVjsbK4MdSQPKDFGdZqNVCRKdw5NtwOc3Jl5TvC4TDisRgCgQX0OtzwjzwAbNZIU7kx5HI3JbTLsgyBfmgORUafAOQWBTUSjaLfcwvD9314+GgSdwbv4tnzFzzwhOHsLopNlB3c2tric+jeqJ9GgsKdZDNOZzLsOYNqtcqVECPaCf9fsIkZAWkONI+zRe/oQDerdMl5TJOP52zDvzsAXCl/TgXzAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Kube",title:"Kube",src:"/static/7f0b001a80b6a0e88515891ad4b7c1c8/3447d/kube.png",srcSet:["/static/7f0b001a80b6a0e88515891ad4b7c1c8/7fc1e/kube.png 288w","/static/7f0b001a80b6a0e88515891ad4b7c1c8/a5df1/kube.png 576w","/static/7f0b001a80b6a0e88515891ad4b7c1c8/3447d/kube.png 1124w"],sizes:"(max-width: 1124px) 100vw, 1124px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kubernetes applications run in Pods, which are similar to Cloud Foundry Diego cells."),Object(r.b)("li",{parentName:"ul"},"There is a Kubernetes Service that performs load balancing for all the pod instances."),Object(r.b)("li",{parentName:"ul"},"External access to the Service is received from either a NodePort, a LoadBalancer service or an Ingress entry."),Object(r.b)("li",{parentName:"ul"},"The combination of Kubernetes Service and Ingress entry serves a similar function to the Go Router in CloudFoundry."),Object(r.b)("li",{parentName:"ul"},"Backend services binding in Kubernetes must be defined by the developer, the system does not provide a binding."),Object(r.b)("li",{parentName:"ul"},"Typically the information on where the service is located can be found in ConfigMaps and the credentials to access the service is stored in Secrets."),Object(r.b)("li",{parentName:"ul"},"So you can ended up with multiple configurations that are provided by the backend environment that you must bind to each of the applications that uses them."),Object(r.b)("li",{parentName:"ul"},"These ConfigMaps and Secrets are comparable to CloudFoundry’s provided VCAP_SERVICES environment variable.")),Object(r.b)("p",null,"For OpenShift, which is derived from Kubernetes, the architecture is very similar. However, OpenShift has provided some functionality for the cluster that allows a more simple configuration of a cluster."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One of the example is OpenShift router, which provides a combined way to develop an Ingress entry with a setting of DNS resources, this function is very similar to CloudFoundry Go Router."),Object(r.b)("li",{parentName:"ul"},"OpenShift uses a DeploymentConfig, which has more capabilities than a Kubernetes Deployment, it supports the definition of triggers, which allow the pods to be modified when a certain situation (such as image or configuration is updated).")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACQUlEQVQoz2VSWW+SURD9fqZGrdGIpSgvDT6LW5RGX9RYo9EXMCgNGmNqabEJZf8iCVspW1spSxDKDt/GdrxzUwjEm5zkLmdmzp05AtgajUaQZfk/KIqCbreL0skxygwn+TzOisUljiRJPJ7WdDqFQBsKHAwGCySZnYk4hOfAi+ffXHhz8BuWV5sw6NcQi8cxHo95sn6/z+NniydUNW2uiKAqMlR2HrJ7T0iEM5HHTqmJ947vuLxyC4FgiAdLTAQJoZjJZMKV8oRUqdfrQaGkDD1VQ09RIY/GcP7YxpbNhu2vTmxYNnBdZ4DLE2JvUy5EVdUlpQIpS6fTOEyl0Gg00JJVPE2UYY4WUdGm+GS14dKVFehWDVi7Y4Reb0AgEET1vIXDoyyq5TI6nQ7q9TqazSYEkpzL5ZDJZvG3fo7aQMHjRAX3Y2UUlTE+2+1YXzfBbH4Ak+kebq/qEQqFUKtW4f7pQjIaR6vVQiaTQTKZhEByY7EYIpEIr6KxL9QHMofMvr7r9eO1L4oPR2W8tH7B1Zt67HnDaMsjVJpd9Fm8dAGNtUCgaZVKJZye/uENpktNXhiK14f9WArB4zO8s9px7YYO/mCYD4WGJy0kpPYJMx9SU9vtNodMNmIE8pXDsYUXzyz4uPkWTx4+gvGuEWJY5G/EIRE0mCXb0KUoigiHwygy4xKBqpEPC4UC3DsuePbc8P3ah+jz854Rh6ZKymY+nBubFFYqFdRqNU6kAtJFdWoBJzNMWMCY+Y2KLXKGw+E84T88ihgwyJr/sgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"oc",title:"oc",src:"/static/55aabf6946f418b9d1fab1d00ce6096f/3cbba/oc.png",srcSet:["/static/55aabf6946f418b9d1fab1d00ce6096f/7fc1e/oc.png 288w","/static/55aabf6946f418b9d1fab1d00ce6096f/a5df1/oc.png 576w","/static/55aabf6946f418b9d1fab1d00ce6096f/3cbba/oc.png 1152w","/static/55aabf6946f418b9d1fab1d00ce6096f/7febd/oc.png 1196w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h2",null,"Application Staging"),Object(r.b)("p",null,"The staging of application, from the source repository into a runnable image differs greatly from one platform to another.\nThe staging is performed after the build artifact is collected, this include performing maven, gradle or other build mechanism.\nApplication is then staged into the Cloud platform; this staging process is typically split into: application container image creation and application container deployment."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"39.23611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABFUlEQVQoz4VRW07DMBDs/W9T7oAEoqifERQqWoiTNnEetmM7D2fYuKFKo5autB5rPLv2rBcYo+97j5xzBEGAOf9fDJo/3WJOvK5WeFgukWXZWVw3Leq2u550Nm18bkgLuq7DTxjiffMBpaQX5VLjWChkhFxUF5nJCilhWio4N77wmqVuxIZEXJq7llOh0bqJZUcvMzlHIyX2n3usX9YwdKtIE8RRjPg7wtPjMxJ2JD6HKTIIXnguorOIxdCjo1ND51CJElpIsB3D9m1LzQqUeY6QHcBZgt3mC0l4gKVCqwRsqT0nksJrdFXdtjwNTrPLKwtlW5S6RqHtCZWBJE7Qfpjx6Pjyl+fp59k5aNvA1Ldz0MDXAL+gVm0DHf/q0QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"staging",title:"staging",src:"/static/5860fb432becba12cd1423b7ad4e955a/3cbba/staging.png",srcSet:["/static/5860fb432becba12cd1423b7ad4e955a/7fc1e/staging.png 288w","/static/5860fb432becba12cd1423b7ad4e955a/a5df1/staging.png 576w","/static/5860fb432becba12cd1423b7ad4e955a/3cbba/staging.png 1152w","/static/5860fb432becba12cd1423b7ad4e955a/0d642/staging.png 1512w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"In CloudFoundry, Droplet images are built by the CloudFoundry buildpacks."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The buildpack will evaluate the application artifacts and construct a runnable Droplet image by providing the necessary pre-requisites and collect dependent codes."),Object(r.b)("li",{parentName:"ul"},"This process is explained further in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.cloudfoundry.org/concepts/how-applications-are-staged.html"}),"CloudFoundry staging"),"."),Object(r.b)("li",{parentName:"ul"},"The runnable Droplet image is stored in BLOB store and then to be deployed as a Garden container in a Diego cell."),Object(r.b)("li",{parentName:"ul"},"The service binding is provided by CloudFoundry as VCAP_SERVICES environment variable in the container."),Object(r.b)("li",{parentName:"ul"},"Finally CloudFoundry defines a Router entry for the application.")),Object(r.b)("p",null,"Although these processes sound complicated, it is actually performed using a single command ",Object(r.b)("inlineCode",{parentName:"p"},"cf push"),"."),Object(r.b)("p",null,"In OpenShift the staging of application is perfomed using BuildConfig, DeploymentConfig and bindings are defined in ConfigMaps and Secrets."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OpenShift is using a ",Object(r.b)("strong",{parentName:"li"},"BuildConfig")," generates an ",Object(r.b)("strong",{parentName:"li"},"ImageStream")," in OpenShift."),Object(r.b)("li",{parentName:"ul"},"ImageStream represent a container image which can be build using Dockerfile or S2I process."),Object(r.b)("li",{parentName:"ul"},"The image building part can be accomplished using the command:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," oc start-build (buildconfig_name)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You or the backend service provider then create ConfigMap and Secrets to access backend services."),Object(r.b)("li",{parentName:"ul"},"Finally, you use a Template object that contains at least a ",Object(r.b)("strong",{parentName:"li"},"DeploymentConfig")," (with ",Object(r.b)("strong",{parentName:"li"},"Pod")," definition), ",Object(r.b)("strong",{parentName:"li"},"Service")," and ",Object(r.b)("strong",{parentName:"li"},"Route")," to deploy the application."),Object(r.b)("li",{parentName:"ul"},"You deploy the application using the command:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," oc new-app -f template.yaml\n")),Object(r.b)("p",null,"In Kubernetes, staging is performed as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You create a ",Object(r.b)("strong",{parentName:"li"},"docker image")," using a Dockerfile and store the image in a ",Object(r.b)("strong",{parentName:"li"},"Docker repository"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," docker build -t (image)\n docker push (image)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You create ConfigMap and Secrets to access backend services"),Object(r.b)("li",{parentName:"ul"},"You use YAML file to deploy Kubernetes resources such as ",Object(r.b)("strong",{parentName:"li"},"Kubernetes Pod")," in a Deployment, ",Object(r.b)("strong",{parentName:"li"},"Kubernetes Service")," and maybe an ",Object(r.b)("strong",{parentName:"li"},"Ingress"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," kubectl apply -f (template)\n")),Object(r.b)("h2",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrating to IKS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrating from Cloud Foundry to IKS"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"../cf-to-k8s/iks-migration/"}),"IKS"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrating to OpenShift"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrating from Cloud Foundry to OpenShift"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"../cf-to-k8s/oc-migration/"}),"OCP"))))))}l.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-cf-to-k-8-s-index-mdx-b2c05468e9801ae680fa.js.map