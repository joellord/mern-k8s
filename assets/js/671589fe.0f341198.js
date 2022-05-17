"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[2456],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Start a local database",l={unversionedId:"mern-stack/start-database",id:"mern-stack/start-database",title:"Start a local database",description:"The recommended way to run MongoDB nowadays is by using MongoDB Atlas, the cloud offering by MongoDB. It is much easier to manage clusters through Atlas. However, in some cases, developers like to have a local instance of MongoDB running as part of their environment. This can be easier to avoid data corruption, or to enable fully offline development environments.",source:"@site/docs/mern-stack/3-start-database.md",sourceDirName:"mern-stack",slug:"/mern-stack/start-database",permalink:"/docs/mern-stack/start-database",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/docs/mern-stack/3-start-database.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Explore the application",permalink:"/docs/mern-stack/explore"},next:{title:"Start the backend",permalink:"/docs/mern-stack/start-backend"}},p={},u=[{value:"Create the container image",id:"create-the-container-image",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-a-local-database"},"Start a local database"),(0,o.kt)("p",null,"The recommended way to run MongoDB nowadays is by using MongoDB Atlas, the cloud offering by MongoDB. It is much easier to manage clusters through Atlas. However, in some cases, developers like to have a local instance of MongoDB running as part of their environment. This can be easier to avoid data corruption, or to enable fully offline development environments."),(0,o.kt)("p",null,"In this section, you will see how you can easily start a database using the MongoDB image maintained by Docker."),(0,o.kt)("h2",{id:"create-the-container-image"},"Create the container image"),(0,o.kt)("p",null,"No need to perform a local installation of MongoDB to try it out locally. You can use a Docker container to run it. This has the benefit of cleaning up the database once you shut it down."),(0,o.kt)("p",null,"To start the container, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name mongodb --rm -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongo\n")),(0,o.kt)("p",null,"This command will create a new, non-persisted, database. The root username and password will be ",(0,o.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pass"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can explore your running database with ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/mongodb-shell/"},"mongosh"),", the MongoDB Shell tool by running:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mongosh mongodb://user:pass@127.0.0.1:27017\n")),(0,o.kt)("p",{parentName:"div"},"Once the shell is started, you can write and read from a test collection."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'db.myNewCollection.insertOne({hello: "world"});\ndb.myNewCollection.findOne({});\n')))),(0,o.kt)("p",null,"You now have a running local MongoDB instance. If you run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,o.kt)("p",null,"You should see a similar output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                           NAMES\n25edc7acf2b3   mongo     "docker-entrypoint.s\u2026"   3 minutes ago   Up 2 minutes   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongodb\n')))}m.isMDXComponent=!0}}]);