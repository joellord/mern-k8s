"use strict";(self.webpackChunkmdbw_atlas_operator=self.webpackChunkmdbw_atlas_operator||[]).push([[1353],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),s=["components"],i={sidebar_position:3},l="Create the necessary secrets",c={unversionedId:"introducing-atlas-operator/create-secrets",id:"introducing-atlas-operator/create-secrets",title:"Create the necessary secrets",description:"In order for the operator to be able to manage your cluster, you will need to provide it with an API key with the appropriate permissions.",source:"@site/docs/introducing-atlas-operator/3-create-secrets.md",sourceDirName:"introducing-atlas-operator",slug:"/introducing-atlas-operator/create-secrets",permalink:"/docs/introducing-atlas-operator/create-secrets",draft:!1,editUrl:"https://github.com/joellord/mern-k8s/docs/introducing-atlas-operator/3-create-secrets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing the Atlas Operator",permalink:"/docs/introducing-atlas-operator/installing"},next:{title:"Create and manage an Atlas cluster",permalink:"/docs/introducing-atlas-operator/manage-atlas"}},p={},u=[{value:"Get your organization id",id:"get-your-organization-id",level:2},{value:"Create an API key",id:"create-an-api-key",level:2},{value:"Create the Kubernetes secrets",id:"create-the-kubernetes-secrets",level:2},{value:"Create a user password",id:"create-a-user-password",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-the-necessary-secrets"},"Create the necessary secrets"),(0,o.kt)("p",null,"In order for the operator to be able to manage your cluster, you will need to provide it with an API key with the appropriate permissions. "),(0,o.kt)("h2",{id:"get-your-organization-id"},"Get your organization id"),(0,o.kt)("p",null,"In the upper left part of the Atlas UI, you will see your organization name in a dropdown. Right next to the dropdown is a gear icon. Clicking on this icon will open up a page called ",(0,o.kt)("em",{parentName:"p"},"Organization Settings"),"."),(0,o.kt)("p",null,"From this page, look for a box labeled ",(0,o.kt)("em",{parentName:"p"},"Organization ID"),"."),(0,o.kt)("p",null,"Save that organization id somewhere for future use. You can also save it in an environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ORG_ID=60c102....bd\n")),(0,o.kt)("h2",{id:"create-an-api-key"},"Create an API key"),(0,o.kt)("p",null,"From the same screen, look for the ",(0,o.kt)("em",{parentName:"p"},"Access Manager")," option in the left navigation menu. This will bring you to the ",(0,o.kt)("em",{parentName:"p"},"Organization Access")," screen. In this screen, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/configure-api-access/#std-label-create-org-api-key"},"instructions")," to create a new API key."),(0,o.kt)("p",null,"The key will need the ",(0,o.kt)("strong",{parentName:"p"},"Organization Project Creator")," role in order to create new projects and clusters. If you want to manage existing clusters, you will need to provide it with the ",(0,o.kt)("strong",{parentName:"p"},"Project Owner")," role."),(0,o.kt)("p",null,"Save the API private and public keys. You can also add them to the environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ATLAS_PUBLIC_KEY=iwpd...i\nexport ATLAS_PRIVATE_KEY=e13debfb-4f35-4...cb\n")),(0,o.kt)("h2",{id:"create-the-kubernetes-secrets"},"Create the Kubernetes secrets"),(0,o.kt)("p",null,"Now that you have create the API key, you can specify those values to the MongoDB Atlas Operator. This will give the operator the necessary permissions to create and manage projects and clusters."),(0,o.kt)("p",null,"You can create the secret with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic mongodb-atlas-operator-api-key \\\n    --from-literal="orgId="$ORG_ID \\\n    --from-literal="publicApiKey="$ATLAS_PUBLIC_KEY \\\n    --from-literal="privateApiKey="$ATLAS_PRIVATE_KEY \\\n    -n mongodb-atlas-system\n')),(0,o.kt)("p",null,"You then need to label this secret so the operator knows how to find it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl label secret mongodb-atlas-operator-api-key atlas.mongodb.com/type=credentials -n mongodb-atlas-system\n")),(0,o.kt)("h2",{id:"create-a-user-password"},"Create a user password"),(0,o.kt)("p",null,"Our database user will have a password. You won't want to hard code this password into your yaml files. It is safer to save it as a Kubernetes secret. Just like the API key, this secret will need to be labeled too."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic atlaspassword --from-literal="password=mernk8s"\nkubectl label secret atlaspassword atlas.mongodb.com/type=credentials\n')))}m.isMDXComponent=!0}}]);