"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8915],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,f=d["".concat(p,".").concat(g)]||d[g]||l[g]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4602:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),c=r(4996),i=["components"],p={},u="Upgrading Contracts",s={unversionedId:"dapp-dev-guide/upgrading-contracts",id:"dapp-dev-guide/upgrading-contracts",title:"Upgrading Contracts",description:"Our smart contract packaging tools enable you to:",source:"@site/source/docs/casper/dapp-dev-guide/upgrading-contracts.md",sourceDirName:"dapp-dev-guide",slug:"/dapp-dev-guide/upgrading-contracts",permalink:"/dapp-dev-guide/upgrading-contracts",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/upgrading-contracts.md",tags:[],version:"current",frontMatter:{},sidebar:"dapp-dev-guide",previous:{title:"Unit Testing Contracts",permalink:"/dapp-dev-guide/testing"},next:{title:"Installing and Calling Contracts",permalink:"/dapp-dev-guide/calling-contracts"}},l={},d=[],g={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-contracts"},"Upgrading Contracts"),(0,o.kt)("p",null,"Our smart contract packaging tools enable you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dapp-dev-guide/tutorials/upgrade-contract"},"Upgrade your contracts")," and specify how the state of the contract is managed"),(0,o.kt)("li",{parentName:"ul"},"Specify whether a contract is upgradable or immutable"),(0,o.kt)("li",{parentName:"ul"},"Version your contracts and deprecate old versions"),(0,o.kt)("li",{parentName:"ul"},"Set permissions around who can perform contract upgrades")),(0,o.kt)("p",null,"When you upgrade a contract, you add a new contract version in a contract package. The versioning process is additive rather than an in-place replacement of an existing contract. The original version of the contract is still there, and you can enable certain versions for specific clients. You can also disable a contract version if needed."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:(0,c.Z)("/image/contract-representation.png"),alt:"contract-representation",width:"400"})),(0,o.kt)("p",null,"The contract package is like a container for different contract versions, with functionality that can differ slightly or significantly among versions. The contract package is created when you install the contract on the blockchain."),(0,o.kt)("p",null,"To learn more about how to upgrade your smart contracts, see the ",(0,o.kt)("a",{parentName:"p",href:"/dapp-dev-guide/tutorials/upgrade-contract"},"Smart Contract Upgrade Tutorial"),"."))}f.isMDXComponent=!0}}]);