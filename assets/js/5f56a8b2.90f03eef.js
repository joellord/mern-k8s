"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[6182],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||c[y]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:6},l="Deploying the database on Kubernetes",u={unversionedId:"deploy-to-k8s/deploy-database",id:"deploy-to-k8s/deploy-database",title:"Deploying the database on Kubernetes",description:"Deploying a database on Kubernetes is no simple task. You will need to add persistence, as well as ensuring that you have redundancy. And a your application grows, you might need to add sharding and more replication. Perhaps you will need to move data to specific geolocated servers to ensure that you GDPR policies.",source:"@site/docs/deploy-to-k8s/6-deploy-database.md",sourceDirName:"deploy-to-k8s",slug:"/deploy-to-k8s/deploy-database",permalink:"/docs/deploy-to-k8s/deploy-database",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/docs/deploy-to-k8s/6-deploy-database.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Set up the ingress for multiple services",permalink:"/docs/deploy-to-k8s/setup-ingress"},next:{title:"Introducing the Atlas Operator",permalink:"/docs/category/introducing-the-atlas-operator"}},p={},c=[],d={toc:c};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-the-database-on-kubernetes"},"Deploying the database on Kubernetes"),(0,a.kt)("p",null,"Deploying a database on Kubernetes is no simple task. You will need to add persistence, as well as ensuring that you have redundancy. And a your application grows, you might need to add sharding and more replication. Perhaps you will need to move data to specific geolocated servers to ensure that you GDPR policies."),(0,a.kt)("p",null,"All of these are highly complex tasks. "),(0,a.kt)("p",null,"On the other hand, you already have all of this in MongoDB Atlas as it is right now. But there is a gap between MongoDB Atlas and your Kubernetes cluster."),(0,a.kt)("p",null,"In the next section, you will be introduced to the MongoDB Atlas Operator, which will take care of filling this gap for you."))}y.isMDXComponent=!0}}]);