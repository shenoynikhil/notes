"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[1826],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||s;return o?a.createElement(m,r(r({ref:t},h),{},{components:o})):a.createElement(m,r({ref:t},h))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var u=2;u<s;u++)r[u]=o[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4751:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return h},toc:function(){return c},default:function(){return d}});var a=o(7462),n=o(3366),s=(o(7294),o(3905)),r=["components"],i={title:"Why Should Data Scientists Study K8s?"},l=void 0,u={unversionedId:"k8s/index",id:"k8s/index",title:"Why Should Data Scientists Study K8s?",description:"I agree with Chip Huyen that Data Scientists shouldn't need to learn kubernetes (K8s).   However, the cold truth is:  Even though you shouldn't have to, you should!  I was convinced for the longest time that I had no business with K8s, but I have recently turned the corner.",source:"@site/docs/k8s/index.md",sourceDirName:"k8s",slug:"/k8s/",permalink:"/k8s/",editUrl:"https://github.dev/hamelsmu/notes/blob/master/docs/k8s/index.md",tags:[],version:"current",frontMatter:{title:"Why Should Data Scientists Study K8s?"},sidebar:"tutorialSidebar",previous:{title:"My Jupyter Shortcuts",permalink:"/jupyter/shortcuts"},next:{title:"Basics",permalink:"/k8s/Basics"}},h={},c=[],p={toc:c};function d(e){var t=e.components,i=(0,n.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"I agree with ",(0,s.kt)("a",{parentName:"p",href:"https://huyenchip.com/2021/09/13/data-science-infrastructure.html"},"Chip Huyen")," that Data Scientists ",(0,s.kt)("strong",{parentName:"p"},"shouldn't need to")," learn kubernetes (K8s).   However, the cold truth is:  ",(0,s.kt)("strong",{parentName:"p"},"Even though you shouldn't have to, you should!"),"  I was convinced for the longest time that I had no business with K8s, but I have recently turned the corner."),(0,s.kt)("p",null,"Below, I oultline some reasons why:"),(0,s.kt)("h1",{id:"you-cannot-always-use-managed-services"},"You cannot always use managed services"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(9063).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"You should avail yourselves of hosted cloud tools wherever possible.  For example, I do not recommend that data scientists administer their own data warehouses.  However, there are many important open source tools for which managed services do not exist.  For example, many clouds do not or only offer very narrow managed services for things like:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Airflow"),(0,s.kt)("li",{parentName:"ul"},"JupyterHub"),(0,s.kt)("li",{parentName:"ul"},"ML workflow and experiment tracking systems. ",(0,s.kt)("sup",{parentName:"li",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,s.kt)("li",{parentName:"ul"},"Dask"),(0,s.kt)("li",{parentName:"ul"},"etc.")),(0,s.kt)("p",null,"Even if you can avail yourself of managed services in the cloud, in my experience there is always a gap that can be addressed by open source tools. ",(0,s.kt)("strong",{parentName:"p"},"Therefore, it is a good idea to develop skills of installing and hosting open source data science tools yourself")," (more to come on that topic next).  "),(0,s.kt)("p",null,"In addition to cloud managed services, there are also many third party vendors who offer great tools, but you often need basic minimal infrastructure knowledge to install self-hosted versions of these tools.  "),(0,s.kt)("h1",{id:"nobody-is-coming-to-save-you"},"Nobody Is Coming To Save You"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(7068).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"A common first experience as a data scientist or machine learning professional is that you don't have to the tools you need to get started.  This is incredibly frustrating, as it can be hard to make any progress without the proper tools.  This usually culminates in a conversation like this (DS = data scientist):"),(0,s.kt)("hr",null),(0,s.kt)("p",null,"DS: I'm really excited to join ACME company!  You've hired me to optimize marketing spend with predictive models.  The issue is that we don't have basic infrastructure or tools are necessary for me to work efficiently. "),(0,s.kt)("p",null,"Manager: I'm confused, can't you install the tools you need?  Isn't that what you are for?  I was expecting that you would figure it out. "),(0,s.kt)("p",null,"DS:  No, I don't know how to setup and deploy infrastructure.  We need a special infrastrucuture or DevOps person for that."),(0,s.kt)("p",null,"Manager: It will be hard to ask for more resources if we don't know the expected return on investment.  Can you do the ML project first, demonstrate some value, and then we can invest in infrastrucutre? "),(0,s.kt)("p",null,"DS:  I need some minimum tools to allow me to more quickly experiment and development proof of concepts.  Also I need tools that might help me collaborate better with my team..."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"At this point the Manager and DS are stuck debating the chicken and the egg problem.  This is an unpleasant impasse that leads to career dissatisfaction and stagnation. ")),(0,s.kt)("p",null,"By learning some basic infra skills, you can unblock yourself and your team in many cases!"),(0,s.kt)("h1",{id:"helm-charts-are-the-modern-oss-app-store"},"Helm Charts Are the Modern OSS App Store"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(2493).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"This is perhaps the most compelling reason for learning K8s.  So you can quickly install your favorite data science tools in the cloud."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),"is a package mansger for K8s.   It allow you to quickly install a wide variety of software in the cloud.  Sure, you can install software on your laptop with pip install, ",(0,s.kt)("strong",{parentName:"p"},"but the whole point of many data science tools to allow you to work collaboratively with your team"),".  To properly evaluate these tools, you will want to install them in an environment that your whole team can observe and interact with.   "),(0,s.kt)("p",null,"Many data science tools can be installed with Helm:  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Airflow: ",(0,s.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/helm-chart/stable/index.html"},"https://airflow.apache.org/docs/helm-chart/stable/index.html")),(0,s.kt)("li",{parentName:"ul"},"Dask: ",(0,s.kt)("a",{parentName:"li",href:"https://docs.dask.org/en/stable/deploying-kubernetes-helm.html"},"https://docs.dask.org/en/stable/deploying-kubernetes-helm.html")),(0,s.kt)("li",{parentName:"ul"},"JuptyerHub: ",(0,s.kt)("a",{parentName:"li",href:"https://z2jh.jupyter.org/en/stable/jupyterhub/installation.html"},"https://z2jh.jupyter.org/en/stable/jupyterhub/installation.html")),(0,s.kt)("li",{parentName:"ul"},"Metaflow: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/outerbounds/metaflow-tools#metaflow-services-on-kubernetes-k8s"},"https://github.com/outerbounds/metaflow-tools#metaflow-services-on-kubernetes-k8s")),(0,s.kt)("li",{parentName:"ul"},"Prefect: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/PrefectHQ/prefect-helm"},"https://github.com/PrefectHQ/prefect-helm")),(0,s.kt)("li",{parentName:"ul"},"ElasaticSearch: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/elastic/helm-charts"},"https://github.com/elastic/helm-charts"))),(0,s.kt)("p",null,"You don't need to become an expert to deploy  in K8s to deploy these apps.  You might need deeper exerptise to maintain them over a long period of time, however being dangerous enough to deploy these tools will often allow you to get over the initial hump to show enough value to get help!  Even when you do get help, its helpful to know how to perform basic troubleshooting."),(0,s.kt)("h1",{id:"ml-research-is-crowded--compete-on-swe-skills"},"ML Research is Crowded.  Compete on SWE Skills."),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(2670).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"One of the best ways to set yourself apart as a data scientist are your skills.  Traditional DS education emphasizes learning the latest ML techniques.  Furthermore, the most successfull ML researchers enjoy visibility and high compensation.  However, Cutting-edge ML research is very competitive.  It also moves incredibly fast!  In the last 6 months, we have seen Stable Diffusion and ChatGPT, with more to come.  It's also an extremely crowded space."),(0,s.kt)("p",null,"In my experience, the bottleneck many teams face is not lack of knowledge of cutting edge ML techniques, but software engineering skills and partners to help operationalize your models.  If you take some time to learn how to stand up some tools and infrastructure, you will be invaluable to your team.  Knowing some cross functional skills like this is much less crowded compared to ML research, and also more stable over time.  "),(0,s.kt)("h1",{id:"you-dont-need-to-become-an-expert"},"You don't need to become an expert"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(1305).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"K8s are complicated, but you don't need to become an expert.  I would focus on three  capabilities:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Deploying tools / infra you need (with the help of managed cloud services)"),(0,s.kt)("li",{parentName:"ol"},"Basic debugging "),(0,s.kt)("li",{parentName:"ol"},"Familiarity with high level important concepts")),(0,s.kt)("p",null,"I'm not suggesting that data scientists become K8s adminstrators.  That is a very involved task and worthy of it's own role.  We can use managed cloud services and some basic knowledge to get really far.  "),(0,s.kt)("h1",{id:"your-company-likely-already-runs-k8s"},"Your Company Likely Already Runs K8s"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(7333).Z,width:"768",height:"768"})),(0,s.kt)("p",null,"I believe that data scientists should have tools that meet them where they are.  This means allowing them to use tools that best suit their workflow, rather than adopt another disciplines workflow.  An example of an anti-pattern of not meeting data scientists where they are is not allowing development in Jupyter Notebooks.  "),(0,s.kt)("p",null,"By deploying and exploring tools in K8s you increase the liklihood that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Your devops counterparts will feel comfortable with the tools you want to deploy"),(0,s.kt)("li",{parentName:"ul"},"You will have shared language in which to talk your application adminstrators about"),(0,s.kt)("li",{parentName:"ul"},"You will be more likely to attract people to help you with infra"),(0,s.kt)("li",{parentName:"ul"},"You will look smart for leveraging technology that's already adopted, even if its not perfect.  ")),(0,s.kt)("p",null,"These factors make it much more likely that you will get the tools that meet you where you are as opposed to something a software engineer without any data science experience thinks is a good idea (which I've seen happen a lot!)"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Even if your company doesn't run K8s, you easily recruit generalists that can operate K8s for you, as opposed to trying to find a unicorn that specializes in ML Infrastructure.")),(0,s.kt)("h1",{id:"vicki-said-so"},"Vicki Said So"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://vickiboykis.com/"},"Vicki")," is the champion of data scientists on the ground.  Her views resonate with people in industry, especially those outside Silicon Valley about the realities of being a data scientist.  She is not someone who is impressed by flashy or new technologies, and is someone who takes a pragmatic approach to getting the job done.  "),(0,s.kt)("p",null,"When she says you should learn K8s, you should really pay attention:"),(0,s.kt)("p",null,(0,s.kt)("img",{loading:"lazy",src:o(7851).Z,width:"480",height:"310"}),"\n",(0,s.kt)("a",{parentName:"p",href:"https://twitter.com/vboykis/status/1596611044209983488"},"https://twitter.com/vboykis/status/1596611044209983488")),(0,s.kt)("h1",{id:"but-isnt-it-overkill"},"But Isn't it Overkill?"),(0,s.kt)("p",null,"For simple apps that you want to quickly stand up or prototype, K8s could be overkill.  I'm advocating knowledge of K8s as something that is useful when you are working within a large company.  "),(0,s.kt)("p",null,"If you are looking to stand up a production service, it is often going to be insufficient to host your data product on a single VM.  In fact, many companies have infrastrucutre that may block you from doing this, and paved paths might only include kuberenetes."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"The major clouds do have their own workflow systems (AWS - Sagemaker, Azure - AzureML, GCP - VertexAI), but these may not fit your teams needs.",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},7068:function(e,t,o){t.Z=o.p+"assets/images/20221212104110-7ea578e2557de075ad0feae526be6ce9.png"},2493:function(e,t,o){t.Z=o.p+"assets/images/20221212110053-7a391b0aab5aec13daee07c7190c854b.png"},1305:function(e,t,o){t.Z=o.p+"assets/images/20221212115117-d37965aaffbb6201e133772d32bec775.png"},2670:function(e,t,o){t.Z=o.p+"assets/images/20221212122136-5ee70b7b74527f01e16b6fbf7d93f8b4.png"},7851:function(e,t,o){t.Z=o.p+"assets/images/20221212131043-a0373e88894ca208b140793999f89039.png"},9063:function(e,t,o){t.Z=o.p+"assets/images/bellman_ds-0496a946e923fb96ebe10df9e36349b6.jpeg"},7333:function(e,t,o){t.Z=o.p+"assets/images/shaking_hands-81a2d3b32aa919b06492e8dfeee9058d.jpeg"}}]);