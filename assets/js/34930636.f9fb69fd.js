"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=["components"],i={},s="Deploying an ERC-20 Compliant Token on Casper",p={unversionedId:"workflow/erc20-token-deployment-guide",id:"workflow/erc20-token-deployment-guide",title:"Deploying an ERC-20 Compliant Token on Casper",description:"On the Casper Network, it is possible to create smart contracts that emulate ERC-20 tokens on Ethereum. These tokens have all of the capabilities of traditional ERC-20 tokens, allowing one to approve, transfer, inquire the balance of, etc. By following this guide, you'll be able to create your own ERC-20 token and deploy it to the Casper Network.",source:"@site/source/docs/casper/workflow/erc20-token-deployment-guide.md",sourceDirName:"workflow",slug:"/workflow/erc20-token-deployment-guide",permalink:"/docs/workflow/erc20-token-deployment-guide",editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/workflow/erc20-token-deployment-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"workflow",previous:{title:"Checking Final Balances",permalink:"/docs/workflow/erc-20-sample-guide/final-balance"},next:{title:"Contributing Documentation",permalink:"/docs/workflow/contribute"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cloning the JavaScript Interface",id:"cloning-the-javascript-interface",level:2},{value:"Edit the Deployment Script",id:"edit-the-deployment-script",level:2},{value:"Install the Contract",id:"install-the-contract",level:2},{value:"Transfer Tokens",id:"transfer-tokens",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploying-an-erc-20-compliant-token-on-casper"},"Deploying an ERC-20 Compliant Token on Casper"),(0,a.kt)("p",null,"On the Casper Network, it is possible to create smart contracts that emulate ERC-20 tokens on Ethereum. These tokens have all of the capabilities of traditional ERC-20 tokens, allowing one to approve, transfer, inquire the balance of, etc. By following this guide, you'll be able to create your own ERC-20 token and deploy it to the Casper Network."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://casper.network/docs/workflow/setup#setting-up-an-account"},"Set up an account"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://casper.network/docs/workflow/setup#fund-your-account"},"Fund your account"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You will need to have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," installed. Follow the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"instructions")," to install it on your system.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lastly, you'll need at least a basic understanding of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/bash.html"},"bash command line"),". ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"zsh")," and other related shells should work as well.")))),(0,a.kt)("h2",{id:"cloning-the-javascript-interface"},"Cloning the JavaScript Interface"),(0,a.kt)("p",null,"We'll be starting in the home (",(0,a.kt)("inlineCode",{parentName:"p"},"~"),") directory for this tutorial. Navigate here first:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cd ~")),(0,a.kt)("p",null,"Now clone the prewritten ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/casper-erc20-js-interface"},"JavaScript deployer project"),", so you don't have to reinvent the wheel. This project includes a precompiled ERC-20 contract with only basic functionality. If you'd like to write your own ERC-20 contract with custom logic, please follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://casper.network/docs/writing-contracts"},"here"),". Execute this command in your home directory:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/casper-ecosystem/casper-erc20-js-interface.git")),(0,a.kt)("p",null,"Change your working directory to the project directory:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cd casper-erc20-js-interface")),(0,a.kt)("p",null,"Install the required dependencies:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm install")),(0,a.kt)("h2",{id:"edit-the-deployment-script"},"Edit the Deployment Script"),(0,a.kt)("p",null,"Start by opening the file ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," in your preferred text editor or IDE."),(0,a.kt)("p",null,"We'll start by redefining our constants. These start on line ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," and should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const NAME = "Test Token";\nconst SYMBOL = "TST";\nconst PRECISION = 8;\nconst TOTAL_SUPPLY = 1_000_000_000;\nconst GAS_LIMIT = 60_000_000_000; //motes\nconst WASM_PATH = "./erc20_token.wasm";\nconst NODE_ADDRESS = "http://162.55.132.188:7777/rpc";\nconst NETWORK_NAME = "casper-test";\n')),(0,a.kt)("p",null,"Let's take a look at what these constants refer to."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NAME"),": The name of the ERC-20 contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SYMBOL"),": The symbol of the ERC-20 contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PRECISION"),": The number of decimal places the token can be fractionalized to."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TOTAL_SUPPLY"),": The total supply of your ERC-20 token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GAS_LIMIT"),": The gas limit in motes that will be used to pay for the deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WASM_PATH"),": The path to the compiled contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ADDRESS"),": The validator node used to submit the deploy. The address listed directs to a valid online node, but this may change in the future. If this node does not respond, you can select another online peer from the list ",(0,a.kt)("a",{parentName:"li",href:"https://testnet.cspr.live/tools/peers"},"here"),". Note that you'll need to replace the port with ",(0,a.kt)("inlineCode",{parentName:"li"},"7777")," for most nodes and add ",(0,a.kt)("inlineCode",{parentName:"li"},"/rpc")," to the end of the address."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NETWORK_NAME"),": The name of the network to which you'll be deploying. By default, we have the Casper Testnet specified as ",(0,a.kt)("inlineCode",{parentName:"li"},'"casper-test"'),". To deploy on the Mainnet, you may change this to ",(0,a.kt)("inlineCode",{parentName:"li"},'"casper"'),".")),(0,a.kt)("p",null,"As long as you generated the keys with the aforementioned command within your project's root folder, the paths to your keys should be the same as already written in the code. Otherwise, you'll need to put in the alternate path to your keys in the ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYS")," constant."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const KEYS = Keys.Ed25519.loadKeyPairFromPrivateFile("./keys/secret_key.pem");\n')),(0,a.kt)("h2",{id:"install-the-contract"},"Install the Contract"),(0,a.kt)("p",null,"To install the contract, execute the following command:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm run erc20iface deploy")),(0,a.kt)("p",null,"You'll know your deployment succeeded when the name of the contract is printed out in the console."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"... Contract name: Test Token")),(0,a.kt)("p",null,"Your ERC-20 token contract is now successfully installed. Next, we'll go about transferring tokens."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",null,"An error message will be provided if a deploy fails. Deployments may fail for a number of reasons, including out-of-gas errors, and internet connectivity issues."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For help, run ",(0,a.kt)("inlineCode",{parentName:"em"},"npm run erc20iface help"))),(0,a.kt)("h2",{id:"transfer-tokens"},"Transfer Tokens"),(0,a.kt)("p",null,"You can send ERC-20 compliant tokens on the Casper Network as per the ERC specification. We'll use the same ",(0,a.kt)("inlineCode",{parentName:"p"},"erc20iface")," script to execute the transfer deployments."),(0,a.kt)("p",null,"You will need an amount and a destination to execute a transfer. The amount corresponds to the number of tokens you want to transfer, and the destination is the hexadecimal public key of the receiving account. Your command should look like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"npm run erc20iface transfer 200 0166795bb8895dcec5631690fa3d5dd3daacde7efeefb1e79176e9d879fd669b47")),(0,a.kt)("p",null,"To send tokens from the address you just funded, just change the ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYS")," constant to use the path of that account's public and secret keys (in this case account ",(0,a.kt)("inlineCode",{parentName:"p"},"0166795bb8895dcec5631690fa3d5dd3daacde7efeefb1e79176e9d879fd669b47"),")."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Thank you for reading Casper's ERC-20 deployment guide. Next, you can learn how to write your own ",(0,a.kt)("a",{parentName:"p",href:"https://casper.network/docs/erc20"},"ERC-20 smart contracts"),", and use ",(0,a.kt)("a",{parentName:"p",href:"https://casper.network/docs/dapp-dev-guide/sdk/script-sdk"},"Casper's JavaScript SDK"),"."))}h.isMDXComponent=!0}}]);