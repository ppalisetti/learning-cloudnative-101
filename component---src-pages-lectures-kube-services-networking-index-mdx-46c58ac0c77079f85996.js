(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),b=n("NmYn"),c=n.n(b),o=n("Wbzz"),l=n("Xrax"),s=n("k4MR"),i=n("TSYQ"),p=n.n(i),u=n("QH2O"),O=n.n(u),j=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(j.b)("div",{className:p()(O.a.pageHeader,(t={},t[O.a.withTabs]=b.length,t[O.a.darkMode]="dark"===a,t))},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12"},Object(j.b)("h1",{id:"page-title",className:O.a.text},n)))))},d=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=n||a,b=r.baseUrl,c=r.subDirectory,l=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(j.b)("div",{className:"bx--row "+d.row},Object(j.b)("div",{className:"bx--col"},Object(j.b)("a",{className:d.link,href:l},"Edit this page on GitHub"))):null},h=n("FCXl"),f=n("dI71"),N=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),b=r===a,l=new RegExp(a+"/?(#.*)?$"),s=n.replace(l,r);return Object(j.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=b,t),N.listItem)},Object(j.b)(o.Link,{className:N.link,to:""+s},e))}));return Object(j.b)("div",{className:N.tabsContainer},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(j.b)("nav",null,Object(j.b)("ul",{className:N.list},r))))))},t}(r.a.Component),x=n("MjG9"),y=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,r=e.Title,b=t.frontmatter,i=void 0===b?{}:b,p=t.relativePagePath,u=t.titleType,O=i.tabs,d=i.title,f=i.theme,N=i.description,k=i.keywords,T=Object(y.a)().interiorTheme,w=Object(o.useStaticQuery)("2456312558").site.pathPrefix,S=w?a.pathname.replace(w,""):a.pathname,I=O?S.split("/").filter(Boolean).slice(-1)[0]||c()(O[0],{lower:!0}):"",P=f||T;return Object(j.b)(s.a,{tabs:O,homepage:!1,theme:P,pageTitle:d,pageDescription:N,pageKeywords:k,titleType:u},Object(j.b)(m,{title:r?Object(j.b)(r,null):d,label:"label",tabs:O,theme:P}),O&&Object(j.b)(v,{slug:S,tabs:O,currentTab:I}),Object(j.b)(x.a,{padded:!0},n,Object(j.b)(g,{relativePagePath:p})),Object(j.b)(h.a,{pageContext:t,location:a,slug:S,tabs:O,currentTab:I}),Object(j.b)(l.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},z5Bd:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n("wx14"),r=n("zLVn"),b=(n("q1tI"),n("7ljp")),c=n("013z"),o=(n("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},s=l("AnchorLinks"),i=l("AnchorLink"),p=l("Tabs"),u=l("Tab"),O={_frontmatter:o},j=c.a;function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)(s,{small:!0,mdxType:"AnchorLinks"},Object(b.b)(i,{mdxType:"AnchorLink"},"Services"),Object(b.b)(i,{mdxType:"AnchorLink"},"Ingress"),Object(b.b)(i,{mdxType:"AnchorLink"},"Activities")),Object(b.b)("h1",null,"Services"),Object(b.b)("p",null,"An abstract way to expose an application running on a set of Pods as a network service."),Object(b.b)("p",null,"Kubernetes Pods are mortal. They are born and when they die, they are not resurrected. If you use a Deployment to run your app, it can create and destroy Pods dynamically."),Object(b.b)("p",null,"Each Pod gets its own IP address, however in a Deployment, the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later."),Object(b.b)("p",null,"In Kubernetes, a Service is an abstraction which defines a logical set of Pods and a policy by which to access them (sometimes this pattern is called a micro-service). The set of Pods targeted by a Service is usually determined by a selector (see below for why you might want a Service without a selector)."),Object(b.b)("p",null,"If you’re able to use Kubernetes APIs for service discovery in your application, you can query the API server for Endpoints, that get updated whenever the set of Pods in a Service changes."),Object(b.b)("p",null,"For non-native applications, Kubernetes offers ways to place a network port or load balancer in between your application and the backend Pods."),Object(b.b)("h2",null,"Resources"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"IKS & OpenShift")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}),"Services")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"}),"Exposing Services"))),Object(b.b)("h2",null,"References"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\n    version: v1\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n        version: v1\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx\n        ports:\n        - containerPort: 8080\n          name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n")),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(u,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Service ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get svc\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Service Description ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe svc my-service\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Expose a service ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc expose service <service_name>\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Route for the Service ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get route\n"))),Object(b.b)(u,{label:"IKS",mdxType:"Tab"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Service ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get svc\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Service Description ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl describe svc my-service\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Service Endpoints ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get ep my-service\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Expose a Deployment via a Service ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl expose deployment my-deployment --port 80 --target-port=http --selector app=nginx --name my-service-2 --type NodePort\n")))),Object(b.b)("h1",null,"Routes"),Object(b.b)("p",null,"(OpenShift Only)"),Object(b.b)("p",null,"Routes are Openshift objects that expose services for external clients to reach them by name.  "),Object(b.b)("p",null,"Routes can insecured or secured on creation using certificates."),Object(b.b)("p",null,"The new route inherits the name from the service unless you specify one using the —name option."),Object(b.b)("h2",null,"Resources"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OpenShift")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/online/pro/dev_guide/routes.html"}),"Routes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/routes/route-configuration.html"}),"Route Configuration")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/routes/secured-routes.html"}),"Secured Routes"))),Object(b.b)("h2",null,"References"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Route Creation ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: Route\nmetadata:\n  name: frontend\nspec:\n  to:\n    kind: Service\n    name: frontend\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Secured Route Creation ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"apiVersion: v1\nkind: Route\nmetadata:\n  name: frontend\nspec:\n  to:\n    kind: Service\n    name: frontend\n  tls:\n    termination: edge\n")),Object(b.b)("h3",null,"Commands"),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(u,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Create Route from YAML ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc apply -f route.yaml\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Route ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get route\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Describe Route ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get route <route-name>\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Get Route YAML ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc get route <route-name> -o yaml\n")))),Object(b.b)("h1",null,"Ingress"),Object(b.b)("p",null,"An API object that manages external access to the services in a cluster, typically HTTP."),Object(b.b)("p",null,"Ingress can provide load balancing, SSL termination and name-based virtual hosting."),Object(b.b)("p",null,"Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource."),Object(b.b)("h2",null,"Resources"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OpenShift")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/ingress-operator.html"}),"Ingress Operator")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/networking/configuring_ingress_cluster_traffic/configuring-ingress-cluster-traffic-ingress-controller.html"}),"Using Ingress Controllers"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"IKS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"}),"Ingress")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"}),"Ingress Controllers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"}),"Minikube Ingress"))),Object(b.b)("h2",null,"References"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1 # for versions before 1.14 use extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: example-ingress\nspec:\n  rules:\n  - host: hello-world.info\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: web\n          servicePort: 8080\n")),Object(b.b)(p,{mdxType:"Tabs"},Object(b.b)(u,{label:"OpenShift",mdxType:"Tab"},Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," View Ingress Status ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe clusteroperators/ingress\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"}," Describe default Ingress Controller ")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"oc describe --namespace=openshift-ingress-operator ingresscontroller/default\n"))),Object(b.b)(u,{label:"IKS",mdxType:"Tab"},Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube addons enable ingress\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get pods -n kube-system | grep ingress\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl create deployment web --image=bitnami/nginx\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl expose deployment web --name=web --port 8080\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get svc web\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"minikube service --url web\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubectl get ingress\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"kubcetl describe ingress example-ingress\n")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{}),"curl hello-world.info --resolve hello-world.info:80:<ADDRESS>\n")))),Object(b.b)("h2",null,"Activities"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creating Services"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Create two services with certain requirements."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/lab8"}),"Setting up Services"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"IKS Ingress Controller"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Configure Ingress on Free IKS Cluster"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"../kube-overview/activities/labs/ingress-iks"}),"Setting IKS Ingress"))))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-services-networking-index-mdx-46c58ac0c77079f85996.js.map