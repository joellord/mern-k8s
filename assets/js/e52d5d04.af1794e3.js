"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[3734],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},s="Start the backend",c={unversionedId:"mern-stack/start-backend",id:"mern-stack/start-backend",title:"Start the backend",description:"The first step to run everything locally is to start the back-end server.",source:"@site/docs/mern-stack/4-start-backend.md",sourceDirName:"mern-stack",slug:"/mern-stack/start-backend",permalink:"/docs/mern-stack/start-backend",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/docs/mern-stack/4-start-backend.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start a local database",permalink:"/docs/mern-stack/start-database"},next:{title:"Start the frontend",permalink:"/docs/mern-stack/start-frontend"}},d={},p=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Edit configuration",id:"edit-configuration",level:2},{value:"Run the application",id:"run-the-application",level:2},{value:"Test the server",id:"test-the-server",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"start-the-backend"},"Start the backend"),(0,o.kt)("p",null,"The first step to run everything locally is to start the back-end server."),(0,o.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,o.kt)("p",null,"Start by ",(0,o.kt)("inlineCode",{parentName:"p"},"cd"),"'ing into the backend folder, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," to install all the required dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd back\nnpm install\n")),(0,o.kt)("h2",{id:"edit-configuration"},"Edit configuration"),(0,o.kt)("p",null,"The application uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," npm package to read environment variables from a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".env"),". This has the benefit of easily being able to change environment variables."),(0,o.kt)("p",null,"In order for your application to run, you will need to specify the port on which it should run as well as the connection string to the database."),(0,o.kt)("p",null,"Create the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,o.kt)("p",null,"And, with your favourite file editor, add the following to that file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PORT=5000\nCONN_STR=mongodb://user:pass@localhost:27017/myFirstDatabase?authSource=admin\n")),(0,o.kt)("h2",{id:"run-the-application"},"Run the application"),(0,o.kt)("p",null,"Now that all the dependencies are installed, and that your server is configured, you are ready to start the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node .\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you want to run this server in development mode, it is easier to use ",(0,o.kt)("inlineCode",{parentName:"p"},"nodemon .")," instead. This will enable hot reloads on your server."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://nodemon.io/"},"Nodemon")))),(0,o.kt)("p",null,"The server will start on port 5000, and you should see a message "),(0,o.kt)("h2",{id:"test-the-server"},"Test the server"),(0,o.kt)("p",null,"From another terminal window, try to curl the ",(0,o.kt)("inlineCode",{parentName:"p"},"/healthz")," route of your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:5000/healthz\n")),(0,o.kt)("p",null,"You should see a JSON message indicating that the server is running, and that the database is connected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{ "status": "Ok", "dbConnected": true } \n')),(0,o.kt)("p",null,"Your server is now up and running, and is ready to read and write to the database."))}m.isMDXComponent=!0}}]);