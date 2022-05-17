"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[9972],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7717:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:2},l="Containerize the backend",s={unversionedId:"containerization/backend",id:"containerization/backend",title:"Containerize the backend",description:"It's now time to create your first container. Packaging a Node.js application is one of the simplest container you can create, so it's a good place to start.",source:"@site/docs/containerization/2-backend.md",sourceDirName:"containerization",slug:"/containerization/backend",permalink:"/mern-k8s/docs/containerization/backend",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/tree/main/docs/containerization/2-backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What are containers?",permalink:"/mern-k8s/docs/containerization/intro"},next:{title:"Create a network",permalink:"/mern-k8s/docs/containerization/network"}},p={},d=[{value:"Create a Dockerfile",id:"create-a-dockerfile",level:2},{value:"Build the backend image",id:"build-the-backend-image",level:2},{value:"Start the container",id:"start-the-container",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"containerize-the-backend"},"Containerize the backend"),(0,o.kt)("p",null,"It's now time to create your first container. Packaging a Node.js application is one of the simplest container you can create, so it's a good place to start. "),(0,o.kt)("p",null,"Let's look how to do this."),(0,o.kt)("h2",{id:"create-a-dockerfile"},"Create a Dockerfile"),(0,o.kt)("p",null,"First, make sure you are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"back")," folder from the cloned repository. In there, create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd back\ntouch Dockerfile\n")),(0,o.kt)("p",null,"In this file, you will list the steps that Docker will need to follow to create the image. The first step is to specify a base image. Each container builds on top of an existing image, and this one is not different. Here, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," image, version 16. This image includes the Node.js runtime, along with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:16\n")),(0,o.kt)("p",null,"Now that it has a base image, you can change the working directory to /opt/app. This is where the express server will live. You can then copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file to the container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"WORKDIR /opt/app\nCOPY ./package.json .\n")),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in place, npm will be able to install all the dependencies. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN")," command, you can specify a command to be executed during the build phase for this container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"RUN npm install\n")),(0,o.kt)("p",null,"All of the dependencies are now installed. You can copy over the source code of your application, which in the case of this specific app, is a single JavaScript file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"COPY ./index.js .\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is a good practice to copy the source code after you installed the dependencies. This is because dependencies change much less often that the source code, and can leverage the previous stages that are cached. "))),(0,o.kt)("p",null,"Finally, you need to specify the command that should be executed when the container is started. You will use the same command you used locally here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"CMD node .\n")),(0,o.kt)("p",null,"Your final ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," will look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker"},"FROM node:16\nWORKDIR /opt/app\nCOPY ./package.json .\nRUN npm install\n\nCOPY ./index.js .\nCMD node .\n")),(0,o.kt)("h2",{id:"build-the-backend-image"},"Build the backend image"),(0,o.kt)("p",null,"With this new ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", you will be able to build your own image to be shared with the world. This image will contain the source code, along with all the required dependencies and runtimes needed to run the application. "),(0,o.kt)("p",null,"The main benefit of creating such an image, is that anyone running this image will have the exact same environment. The versions are always the same, and the runtimes are identical, no matter where this container runs. "),(0,o.kt)("p",null,"This can be useful to share the container with your team mates, or to deploy to a production server."),(0,o.kt)("p",null,"To build the container, you will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t $DOCKER_HUB_USERNAME/mern-k8s-back .\n")),(0,o.kt)("p",null,"You can then push this new image to your docker hub account. Make sure that you are logged in first."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker login\ndocker push $DOCKER_HUB_USERNAME/mern-k8s-back\n")),(0,o.kt)("h2",{id:"start-the-container"},"Start the container"),(0,o.kt)("p",null,"You can now run this new container on your local machine. First, make sure that any existing version of the backend that were running locally. Then, you can start the container by using the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d --rm --name mern-k8s-back -p 5000:5000 -e PORT=5000 -e CONN_STR="mongodb://user:pass@127.0.0.1:27017" $DOCKER_HUB_USERNAME/mern-k8s-back\n')),(0,o.kt)("p",null,"You can verify that the application is running with the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps")," command. This command will list any active containers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                    COMMAND                  CREATED         STATUS         PORTS                                           NAMES\n4b32f116bf64   joellord/mern-k8s-back   "docker-entrypoint.s\u2026"   3 seconds ago   Up 2 seconds   0.0.0.0:5000->5000/tcp, :::5000->5000/tcp       mern-k8s-back\n25edc7acf2b3   mongo                    "docker-entrypoint.s\u2026"   4 hours ago     Up 4 hours     0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongodb\n')),(0,o.kt)("p",null,"If you try to ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," this new backend on the ",(0,o.kt)("inlineCode",{parentName:"p"},"/healthz")," route again, you might see an issue. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{"status":"Ok","dbConnected":false}\n')),(0,o.kt)("p",null,"It looks like the database is not connected anymore. This makes sense because as far as the container goes, there is no running MongoDB instance inside the container. That instance resides on your local machine and currently can be reached by the container."))}m.isMDXComponent=!0}}]);