"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[2380],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1503:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={sidebar_position:4},i="Create and manage an Atlas cluster",c={unversionedId:"introducing-atlas-operator/manage-atlas",id:"introducing-atlas-operator/manage-atlas",title:"Create and manage an Atlas cluster",description:"You are now ready to manage your Atlas projects and clusters from Kubernetes. This can be done with the three new CRDs that were added to your cluster. Those CRDs are AtlasProject to manage projects, AtlasCluster to manage clusters, and AtlasDatabaseUser to manage database users.",source:"@site/docs/introducing-atlas-operator/4-manage-atlas.md",sourceDirName:"introducing-atlas-operator",slug:"/introducing-atlas-operator/manage-atlas",permalink:"/mern-k8s/docs/introducing-atlas-operator/manage-atlas",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/tree/main/docs/introducing-atlas-operator/4-manage-atlas.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create the necessary secrets",permalink:"/mern-k8s/docs/introducing-atlas-operator/create-secrets"},next:{title:"Configure the backend",permalink:"/mern-k8s/docs/introducing-atlas-operator/configure-backend"}},u={},p=[{value:"Create a project",id:"create-a-project",level:2},{value:"Create a cluster",id:"create-a-cluster",level:2},{value:"Create a new database user",id:"create-a-new-database-user",level:2},{value:"Apply the new files",id:"apply-the-new-files",level:2},{value:"Get your connection string",id:"get-your-connection-string",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-and-manage-an-atlas-cluster"},"Create and manage an Atlas cluster"),(0,o.kt)("p",null,"You are now ready to manage your Atlas projects and clusters from Kubernetes. This can be done with the three new CRDs that were added to your cluster. Those CRDs are ",(0,o.kt)("inlineCode",{parentName:"p"},"AtlasProject")," to manage projects, ",(0,o.kt)("inlineCode",{parentName:"p"},"AtlasCluster")," to manage clusters, and ",(0,o.kt)("inlineCode",{parentName:"p"},"AtlasDatabaseUser")," to manage database users."),(0,o.kt)("h2",{id:"create-a-project"},"Create a project"),(0,o.kt)("p",null,"Start by creating a new project in which the new cluster will be deployed. In a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"/atlas/project.yaml"),", add the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: atlas.mongodb.com/v1\nkind: AtlasProject\nmetadata:\n  name: mern-k8s-project\nspec:\n  name: "MERN K8s"\n  projectIpAccessList:\n    - ipAddress: "0.0.0.0/0"\n      comment: "Allowing access to database from everywhere (only for Demo!)"\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This project will be open to anyone on the web. It is best practice to only open it to known IP addresses."))),(0,o.kt)("p",null,'This will create a new project called "MERN K8s" in Atlas.'),(0,o.kt)("h2",{id:"create-a-cluster"},"Create a cluster"),(0,o.kt)("p",null,"Now that you have a project setup, you can create a new cluster inside this project. In a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"/atlas/cluster.yaml"),", add the following yaml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: atlas.mongodb.com/v1\nkind: AtlasCluster\nmetadata:\n  name: mern-k8s-cluster\nspec:\n  projectRef:\n    name: mern-k8s-project\n  clusterSpec:\n    name: "Cluster0"\n    providerSettings:\n      instanceSizeName: M10\n      providerName: AWS\n      regionName: US_EAST_1\n')),(0,o.kt)("p",null,"This will create a new M10 cluster on AWS, in the US_EAST_1 region. You use a similar syntax to deploy in any region on AWS, GCP, or Azure."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For your development environments, you might want to use M0 (free) clusters. Because those are hosted on shared servers, the configuration is slightly different. For the provider settings, you can use the following for an M0 cluster."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    providerSettings:\n      instanceSizeName: M0\n      providerName: TENANT\n      regionName: US_EAST_1\n      backingProviderName: AWS\n")))),(0,o.kt)("h2",{id:"create-a-new-database-user"},"Create a new database user"),(0,o.kt)("p",null,"Finally, in order for your application to connect to this database, you will need a database user. To create this user, open a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"/atlas/user.yaml"),", and add the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: atlas.mongodb.com/v1\nkind: AtlasDatabaseUser\nmetadata:\n  name: atlas-user\nspec:\n  roles:\n    - roleName: "readWriteAnyDatabase"\n      databaseName: "admin"\n  projectRef:\n    name: mern-k8s-project\n  username: mernk8s\n  passwordSecretRef:\n    name: atlaspassword\n')),(0,o.kt)("p",null,"You can see how the password uses the secret we created earlier."),(0,o.kt)("h2",{id:"apply-the-new-files"},"Apply the new files"),(0,o.kt)("p",null,"You now have everything ready to create this new project and cluster. You can apply those new files to your cluster using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./atlas\n")),(0,o.kt)("p",null,"This will take a couple of minutes. You can see the status of the cluster and project creation with kubectl."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get atlasprojects\nkubectl get altasclusters\n")),(0,o.kt)("p",null,"In the meantime, you can go to the Atlas UI. The project should already be created, and you should see that a cluster is in the process of being created."),(0,o.kt)("h2",{id:"get-your-connection-string"},"Get your connection string"),(0,o.kt)("p",null,"Getting your connection string to that newly created database can now be done through Kubernetes. Once your server is created, you can use the following command that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," to view the connection strings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret mern-k8s-db-admin-mern-k8s-user -o json | jq -r '.data | with_entries(.value |= @base64d)'\n")))}m.isMDXComponent=!0}}]);