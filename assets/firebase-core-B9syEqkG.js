const xr=()=>{};var hi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=function(n){const i=[];let s=0;for(let a=0;a<n.length;a++){let f=n.charCodeAt(a);f<128?i[s++]=f:f<2048?(i[s++]=f>>6|192,i[s++]=f&63|128):(f&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(f=65536+((f&1023)<<10)+(n.charCodeAt(++a)&1023),i[s++]=f>>18|240,i[s++]=f>>12&63|128,i[s++]=f>>6&63|128,i[s++]=f&63|128):(i[s++]=f>>12|224,i[s++]=f>>6&63|128,i[s++]=f&63|128)}return i},Br=function(n){const i=[];let s=0,a=0;for(;s<n.length;){const f=n[s++];if(f<128)i[a++]=String.fromCharCode(f);else if(f>191&&f<224){const w=n[s++];i[a++]=String.fromCharCode((f&31)<<6|w&63)}else if(f>239&&f<365){const w=n[s++],y=n[s++],S=n[s++],I=((f&7)<<18|(w&63)<<12|(y&63)<<6|S&63)-65536;i[a++]=String.fromCharCode(55296+(I>>10)),i[a++]=String.fromCharCode(56320+(I&1023))}else{const w=n[s++],y=n[s++];i[a++]=String.fromCharCode((f&15)<<12|(w&63)<<6|y&63)}}return i.join("")},Ei={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,i){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let f=0;f<n.length;f+=3){const w=n[f],y=f+1<n.length,S=y?n[f+1]:0,I=f+2<n.length,E=I?n[f+2]:0,M=w>>2,A=(w&3)<<4|S>>4;let U=(S&15)<<2|E>>6,z=E&63;I||(z=64,y||(U=64)),a.push(s[M],s[A],s[U],s[z])}return a.join("")},encodeString(n,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(n):this.encodeByteArray(bi(n),i)},decodeString(n,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(n):Br(this.decodeStringToByteArray(n,i))},decodeStringToByteArray(n,i){this.init_();const s=i?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let f=0;f<n.length;){const w=s[n.charAt(f++)],S=f<n.length?s[n.charAt(f)]:0;++f;const E=f<n.length?s[n.charAt(f)]:64;++f;const A=f<n.length?s[n.charAt(f)]:64;if(++f,w==null||S==null||E==null||A==null)throw new jr;const U=w<<2|S>>4;if(a.push(U),E!==64){const z=S<<4&240|E>>2;if(a.push(z),A!==64){const N=E<<6&192|A;a.push(N)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nr=function(n){const i=bi(n);return Ei.encodeByteArray(i,!0)},he=function(n){return Nr(n).replace(/\./g,"")},Si=function(n){try{return Ei.decodeString(n,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=()=>Lr().__FIREBASE_DEFAULTS__,Fr=()=>{if(typeof process>"u"||typeof hi>"u")return;const n=hi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$r=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const i=n&&Si(n[1]);return i&&JSON.parse(i)},ue=()=>{try{return xr()||Hr()||Fr()||$r()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ur=n=>{var i,s;return(s=(i=ue())==null?void 0:i.emulatorHosts)==null?void 0:s[n]},fa=n=>{const i=Ur(n);if(!i)return;const s=i.lastIndexOf(":");if(s<=0||s+1===i.length)throw new Error(`Invalid host ${i} with no separate hostname and port!`);const a=parseInt(i.substring(s+1),10);return i[0]==="["?[i.substring(1,s-1),a]:[i.substring(0,s),a]},Ye=()=>{var n;return(n=ue())==null?void 0:n.config},pa=n=>{var i;return(i=ue())==null?void 0:i[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,s)=>{this.resolve=i,this.reject=s})}wrapCallback(i){return(s,a)=>{s?this.reject(s):this.resolve(a),typeof i=="function"&&(this.promise.catch(()=>{}),i.length===1?i(s):i(s,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n,i){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},a=i||"demo-project",f=n.iat||0,w=n.sub||n.user_id;if(!w)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const y={iss:`https://securetoken.google.com/${a}`,aud:a,iat:f,exp:f+3600,auth_time:f,sub:w,user_id:w,firebase:{sign_in_provider:"custom",identities:{}},...n};return[he(JSON.stringify(s)),he(JSON.stringify(y)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function da(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ii())}function Ci(){var i;const n=(i=ue())==null?void 0:i.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zr(){return typeof window<"u"||Ai()}function Ai(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function ma(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ya(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function va(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wa(){const n=Ii();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ba(){return!Ci()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ea(){return!Ci()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Wr(){try{return typeof indexedDB=="object"}catch{return!1}}function Gr(){return new Promise((n,i)=>{try{let s=!0;const a="validate-browser-context-for-indexeddb-analytics-module",f=self.indexedDB.open(a);f.onsuccess=()=>{f.result.close(),s||self.indexedDB.deleteDatabase(a),n(!0)},f.onupgradeneeded=()=>{s=!1},f.onerror=()=>{var w;i(((w=f.error)==null?void 0:w.message)||"")}}catch(s){i(s)}})}function Sa(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirebaseError";class dt extends Error{constructor(i,s,a){super(s),this.code=i,this.customData=a,this.name=qr,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(i,s,a){this.service=i,this.serviceName=s,this.errors=a}create(i,...s){const a=s[0]||{},f=`${this.service}/${i}`,w=this.errors[i],y=w?Xr(w,a):"Error",S=`${this.serviceName}: ${y} (${f}).`;return new dt(f,S,a)}}function Xr(n,i){try{let s=0,a="";for(;s<n.length;){const f=n.indexOf("{$",s);if(f===-1){a+=n.substring(s);break}const w=n.indexOf("}",f+2);if(w===-1){a+=n.substring(s);break}const y=n.substring(f+2,w),S=i[y];a+=n.substring(s,f)+(S!=null?String(S):`<${y}?>`),s=w+1}return a}catch{return n}}function Ia(n){for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i))return!1;return!0}function We(n,i){if(n===i)return!0;const s=Object.keys(n),a=Object.keys(i);for(const f of s){if(!a.includes(f))return!1;const w=n[f],y=i[f];if(li(w)&&li(y)){if(!We(w,y))return!1}else if(w!==y)return!1}for(const f of a)if(!s.includes(f))return!1;return!0}function li(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){const i=[];for(const[s,a]of Object.entries(n))Array.isArray(a)?a.forEach(f=>{i.push(encodeURIComponent(s)+"="+encodeURIComponent(f))}):i.push(encodeURIComponent(s)+"="+encodeURIComponent(a));return i.length?"&"+i.join("&"):""}function Aa(n){const i={};return n.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[f,w]=a.split("=");i[decodeURIComponent(f)]=decodeURIComponent(w)}}),i}function Ta(n){const i=n.indexOf("?");if(!i)return"";const s=n.indexOf("#",i);return n.substring(i,s>0?s:void 0)}function _a(n,i){const s=new Jr(n,i);return s.subscribe.bind(s)}class Jr{constructor(i,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{i(this)}).catch(a=>{this.error(a)})}next(i){this.forEachObserver(s=>{s.next(i)})}error(i){this.forEachObserver(s=>{s.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,s,a){let f;if(i===void 0&&s===void 0&&a===void 0)throw new Error("Missing Observer.");Kr(i,["next","error","complete"])?f=i:f={next:i,error:s,complete:a},f.next===void 0&&(f.next=Le),f.error===void 0&&(f.error=Le),f.complete===void 0&&(f.complete=Le);const w=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch{}}),this.observers.push(f),w}unsubscribeOne(i){this.observers===void 0||this.observers[i]===void 0||(delete this.observers[i],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,i)}sendOne(i,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[i]!==void 0)try{s(this.observers[i])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(i){this.finalized||(this.finalized=!0,i!==void 0&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kr(n,i){if(typeof n!="object"||n===null)return!1;for(const s of i)if(s in n&&typeof n[s]=="function")return!0;return!1}function Le(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ra(n){return(await fetch(n,{credentials:"include"})).ok}class St{constructor(i,s,a){this.name=i,this.instanceFactory=s,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(i,s){this.name=i,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){const s=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(s)){const a=new Vr;if(this.instancesDeferred.set(s,a),this.isInitialized(s)||this.shouldAutoInitialize())try{const f=this.getOrInitializeService({instanceIdentifier:s});f&&a.resolve(f)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(i){const s=this.normalizeInstanceIdentifier(i==null?void 0:i.identifier),a=(i==null?void 0:i.optional)??!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(f){if(a)return null;throw f}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,!!this.shouldAutoInitialize()){if(Qr(i))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[s,a]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(s);try{const w=this.getOrInitializeService({instanceIdentifier:f});a.resolve(w)}catch{}}}}clearInstance(i=ut){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){const i=Array.from(this.instances.values());await Promise.all([...i.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...i.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(i=ut){return this.instances.has(i)}getOptions(i=ut){return this.instancesOptions.get(i)||{}}initialize(i={}){const{options:s={}}=i,a=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const f=this.getOrInitializeService({instanceIdentifier:a,options:s});for(const[w,y]of this.instancesDeferred.entries()){const S=this.normalizeInstanceIdentifier(w);a===S&&y.resolve(f)}return f}onInit(i,s){const a=this.normalizeInstanceIdentifier(s),f=this.onInitCallbacks.get(a)??new Set;f.add(i),this.onInitCallbacks.set(a,f);const w=this.instances.get(a);return w&&i(w,a),()=>{f.delete(i)}}invokeOnInitCallbacks(i,s){const a=this.onInitCallbacks.get(s);if(a)for(const f of a)try{f(i,s)}catch{}}getOrInitializeService({instanceIdentifier:i,options:s={}}){let a=this.instances.get(i);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Zr(i),options:s}),this.instances.set(i,a),this.instancesOptions.set(i,s),this.invokeOnInitCallbacks(a,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,a)}catch{}return a||null}normalizeInstanceIdentifier(i=ut){return this.component?this.component.multipleInstances?i:ut:i}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zr(n){return n===ut?void 0:n}function Qr(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(i){this.name=i,this.providers=new Map}addComponent(i){const s=this.getProvider(i.name);if(s.isComponentSet())throw new Error(`Component ${i.name} has already been registered with ${this.name}`);s.setComponent(i)}addOrOverwriteComponent(i){this.getProvider(i.name).isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);const s=new Yr(i,this);return this.providers.set(i,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=[];var _;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_||(_={}));const _i={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},ts=_.INFO,es={[_.DEBUG]:"log",[_.VERBOSE]:"log",[_.INFO]:"info",[_.WARN]:"warn",[_.ERROR]:"error"},ns=(n,i,...s)=>{if(i<n.logLevel)return;const a=new Date().toISOString(),f=es[i];if(f)console[f](`[${a}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`)};class is{constructor(i){this.name=i,this._logLevel=ts,this._logHandler=ns,this._userLogHandler=null,Qe.push(this)}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in _))throw new TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel=typeof i=="string"?_i[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if(typeof i!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,_.DEBUG,...i),this._logHandler(this,_.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,_.VERBOSE,...i),this._logHandler(this,_.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,_.INFO,...i),this._logHandler(this,_.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,_.WARN,...i),this._logHandler(this,_.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,_.ERROR,...i),this._logHandler(this,_.ERROR,...i)}}function rs(n){Qe.forEach(i=>{i.setLogLevel(n)})}function ss(n,i){for(const s of Qe){let a=null;i&&i.level&&(a=_i[i.level]),n===null?s.userLogHandler=null:s.userLogHandler=(f,w,...y)=>{const S=y.map(I=>{if(I==null)return null;if(typeof I=="string")return I;if(typeof I=="number"||typeof I=="boolean")return I.toString();if(I instanceof Error)return I.message;try{return JSON.stringify(I)}catch{return null}}).filter(I=>I).join(" ");w>=(a??f.logLevel)&&n({level:_[w].toLowerCase(),message:S,args:y,type:f.name})}}}const os=(n,i)=>i.some(s=>n instanceof s);let ci,ui;function as(){return ci||(ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hs(){return ui||(ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Di=new WeakMap,Ge=new WeakMap,Oi=new WeakMap,He=new WeakMap,tn=new WeakMap;function ls(n){const i=new Promise((s,a)=>{const f=()=>{n.removeEventListener("success",w),n.removeEventListener("error",y)},w=()=>{s(q(n.result)),f()},y=()=>{a(n.error),f()};n.addEventListener("success",w),n.addEventListener("error",y)});return i.then(s=>{s instanceof IDBCursor&&Di.set(s,n)}).catch(()=>{}),tn.set(i,n),i}function cs(n){if(Ge.has(n))return;const i=new Promise((s,a)=>{const f=()=>{n.removeEventListener("complete",w),n.removeEventListener("error",y),n.removeEventListener("abort",y)},w=()=>{s(),f()},y=()=>{a(n.error||new DOMException("AbortError","AbortError")),f()};n.addEventListener("complete",w),n.addEventListener("error",y),n.addEventListener("abort",y)});Ge.set(n,i)}let qe={get(n,i,s){if(n instanceof IDBTransaction){if(i==="done")return Ge.get(n);if(i==="objectStoreNames")return n.objectStoreNames||Oi.get(n);if(i==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return q(n[i])},set(n,i,s){return n[i]=s,!0},has(n,i){return n instanceof IDBTransaction&&(i==="done"||i==="store")?!0:i in n}};function us(n){qe=n(qe)}function fs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(i,...s){const a=n.call(Fe(this),i,...s);return Oi.set(a,i.sort?i.sort():[i]),q(a)}:hs().includes(n)?function(...i){return n.apply(Fe(this),i),q(Di.get(this))}:function(...i){return q(n.apply(Fe(this),i))}}function ps(n){return typeof n=="function"?fs(n):(n instanceof IDBTransaction&&cs(n),os(n,as())?new Proxy(n,qe):n)}function q(n){if(n instanceof IDBRequest)return ls(n);if(He.has(n))return He.get(n);const i=ps(n);return i!==n&&(He.set(n,i),tn.set(i,n)),i}const Fe=n=>tn.get(n);function Ri(n,i,{blocked:s,upgrade:a,blocking:f,terminated:w}={}){const y=indexedDB.open(n,i),S=q(y);return a&&y.addEventListener("upgradeneeded",I=>{a(q(y.result),I.oldVersion,I.newVersion,q(y.transaction),I)}),s&&y.addEventListener("blocked",I=>s(I.oldVersion,I.newVersion,I)),S.then(I=>{w&&I.addEventListener("close",()=>w()),f&&I.addEventListener("versionchange",E=>f(E.oldVersion,E.newVersion,E))}).catch(()=>{}),S}function ka(n,{blocked:i}={}){const s=indexedDB.deleteDatabase(n);return i&&s.addEventListener("blocked",a=>i(a.oldVersion,a)),q(s).then(()=>{})}const gs=["get","getKey","getAll","getAllKeys","count"],ds=["put","add","delete","clear"],$e=new Map;function fi(n,i){if(!(n instanceof IDBDatabase&&!(i in n)&&typeof i=="string"))return;if($e.get(i))return $e.get(i);const s=i.replace(/FromIndex$/,""),a=i!==s,f=ds.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!(f||gs.includes(s)))return;const w=async function(y,...S){const I=this.transaction(y,f?"readwrite":"readonly");let E=I.store;return a&&(E=E.index(S.shift())),(await Promise.all([E[s](...S),f&&I.done]))[0]};return $e.set(i,w),w}us(n=>({...n,get:(i,s,a)=>fi(i,s)||n.get(i,s,a),has:(i,s)=>!!fi(i,s)||n.has(i,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(i){this.container=i}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ys(s)){const a=s.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(s=>s).join(" ")}}function ys(n){const i=n.getComponent();return(i==null?void 0:i.type)==="VERSION"}const le="@firebase/app",Xe="0.16.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=new is("@firebase/app"),vs="@firebase/app-compat",ws="@firebase/analytics-compat",bs="@firebase/analytics",Es="@firebase/app-check-compat",Ss="@firebase/app-check",Is="@firebase/auth",Cs="@firebase/auth-compat",As="@firebase/database",Ts="@firebase/data-connect",_s="@firebase/database-compat",Ds="@firebase/functions",Os="@firebase/functions-compat",Rs="@firebase/installations",ks="@firebase/installations-compat",Ps="@firebase/messaging",Ms="@firebase/messaging-compat",xs="@firebase/performance",Bs="@firebase/performance-compat",js="@firebase/remote-config",Ns="@firebase/remote-config-compat",Ls="@firebase/storage",Hs="@firebase/storage-compat",Fs="@firebase/firestore",$s="@firebase/ai",Us="@firebase/firestore-compat",Vs="firebase",zs="13.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="[DEFAULT]",Ws={[le]:"fire-core",[vs]:"fire-core-compat",[bs]:"fire-analytics",[ws]:"fire-analytics-compat",[Ss]:"fire-app-check",[Es]:"fire-app-check-compat",[Is]:"fire-auth",[Cs]:"fire-auth-compat",[As]:"fire-rtdb",[Ts]:"fire-data-connect",[_s]:"fire-rtdb-compat",[Ds]:"fire-fn",[Os]:"fire-fn-compat",[Rs]:"fire-iid",[ks]:"fire-iid-compat",[Ps]:"fire-fcm",[Ms]:"fire-fcm-compat",[xs]:"fire-perf",[Bs]:"fire-perf-compat",[js]:"fire-rc",[Ns]:"fire-rc-compat",[Ls]:"fire-gcs",[Hs]:"fire-gcs-compat",[Fs]:"fire-fst",[Us]:"fire-fst-compat",[$s]:"fire-vertex","fire-js":"fire-js",[Vs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map,It=new Map,Ct=new Map;function Je(n,i){try{n.container.addComponent(i)}catch(s){X.debug(`Component ${i.name} failed to register with FirebaseApp ${n.name}`,s)}}function Gs(n,i){n.container.addOrOverwriteComponent(i)}function At(n){const i=n.name;if(Ct.has(i))return X.debug(`There were multiple attempts to register component ${i}.`),!1;Ct.set(i,n);for(const s of rt.values())Je(s,n);for(const s of It.values())Je(s,n);return!0}function fe(n,i){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(i)}function qs(n,i,s=zt){fe(n,i).clearInstance(s)}function en(n){return n.options!==void 0}function ki(n){return en(n)?!1:"authIdToken"in n||"appCheckToken"in n||"releaseOnDeref"in n||"automaticDataCollectionEnabled"in n}function Xs(n){return n==null?!1:n.settings!==void 0}function Js(){Ct.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},F=new Ze("app","Firebase",Ks);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(i,s,a){this._isDeleted=!1,this._options={...i},this._config={...s},this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,i){const s=Si(n.split(".")[1]);if(s===null){console.error(`FirebaseServerApp ${i} is invalid: second part could not be parsed.`);return}if(JSON.parse(s).exp===void 0){console.error(`FirebaseServerApp ${i} is invalid: expiration claim could not be parsed`);return}const f=JSON.parse(s).exp*1e3,w=new Date().getTime();f-w<=0&&console.error(`FirebaseServerApp ${i} is invalid: the token has expired.`)}class Ys extends Pi{constructor(i,s,a,f){const w=s.automaticDataCollectionEnabled!==void 0?s.automaticDataCollectionEnabled:!0,y={name:a,automaticDataCollectionEnabled:w};if(i.apiKey!==void 0)super(i,y,f);else{const S=i;super(S.options,y,f)}this._serverConfig={automaticDataCollectionEnabled:w,...s},this._serverConfig.authIdToken&&pi(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&pi(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,s.releaseOnDeref=void 0,it(le,Xe,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(i){this.isDeleted||(this._refCount++,i!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(i,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){xi(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw F.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=zs;function Mi(n,i={}){let s=n;typeof i!="object"&&(i={name:i});const a={name:zt,automaticDataCollectionEnabled:!0,...i},f=a.name;if(typeof f!="string"||!f)throw F.create("bad-app-name",{appName:String(f)});if(s||(s=Ye()),!s)throw F.create("no-options");const w=rt.get(f);if(w)if(We(s,w.options)){if(We(a,w.config))return w;throw F.create("duplicate-app",{appName:f,mismatchedParam:"config",oldValue:JSON.stringify(w.config),newValue:JSON.stringify(a)})}else throw F.create("duplicate-app",{appName:f,mismatchedParam:"options",oldValue:JSON.stringify(w.options),newValue:JSON.stringify(s)});const y=new Ti(f);for(const I of Ct.values())y.addComponent(I);const S=new Pi(s,a,y);return rt.set(f,S),S}function Qs(n,i={}){if(zr()&&!Ai())throw F.create("invalid-server-app-environment");let s,a=i||{};if(n&&(en(n)?s=n.options:ki(n)?a=n:s=n),a.automaticDataCollectionEnabled===void 0&&(a.automaticDataCollectionEnabled=!0),s||(s=Ye()),!s)throw F.create("no-options");const f={...a,...s};f.releaseOnDeref!==void 0&&delete f.releaseOnDeref;const w=M=>[...M].reduce((A,U)=>Math.imul(31,A)+U.charCodeAt(0)|0,0);if(a.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw F.create("finalization-registry-not-supported",{});const y=""+w(JSON.stringify(f)),S=It.get(y);if(S)return S.incRefCount(a.releaseOnDeref),S;const I=new Ti(y);for(const M of Ct.values())I.addComponent(M);const E=new Ys(s,a,y,I);return It.set(y,E),E}function to(n=zt){const i=rt.get(n);if(!i&&n===zt&&Ye())return Mi();if(!i)throw F.create("no-app",{appName:n});return i}function eo(){return Array.from(rt.values())}async function xi(n){let i=!1;const s=n.name;rt.has(s)?(i=!0,rt.delete(s)):It.has(s)&&n.decRefCount()<=0&&(It.delete(s),i=!0),i&&(await Promise.all(n.container.getProviders().map(a=>a.delete())),n.isDeleted=!0)}function it(n,i,s){let a=Ws[n]??n;s&&(a+=`-${s}`);const f=a.match(/\s|\//),w=i.match(/\s|\//);if(f||w){const y=[`Unable to register library "${a}" with version "${i}":`];f&&y.push(`library name "${a}" contains illegal characters (whitespace or "/")`),f&&w&&y.push("and"),w&&y.push(`version name "${i}" contains illegal characters (whitespace or "/")`),X.warn(y.join(" "));return}At(new St(`${a}-version`,()=>({library:a,version:i}),"VERSION"))}function no(n,i){if(n!==null&&typeof n!="function")throw F.create("invalid-log-argument");ss(n,i)}function io(n){rs(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro="firebase-heartbeat-database",so=1,Wt="firebase-heartbeat-store";let Ue=null;function Bi(){return Ue||(Ue=Ri(ro,so,{upgrade:(n,i)=>{switch(i){case 0:try{n.createObjectStore(Wt)}catch(s){console.warn(s)}}}}).catch(n=>{throw F.create("idb-open",{originalErrorMessage:n.message})})),Ue}async function oo(n){try{const s=(await Bi()).transaction(Wt),a=await s.objectStore(Wt).get(ji(n));return await s.done,a}catch(i){if(i instanceof dt)X.warn(i.message);else{const s=F.create("idb-get",{originalErrorMessage:i==null?void 0:i.message});X.warn(s.message)}}}async function gi(n,i){try{const a=(await Bi()).transaction(Wt,"readwrite");await a.objectStore(Wt).put(i,ji(n)),await a.done}catch(s){if(s instanceof dt)X.warn(s.message);else{const a=F.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});X.warn(a.message)}}}function ji(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=1024,ho=30;class lo{constructor(i){this.container=i,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new uo(s),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var i,s;try{const f=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),w=di();if(((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===w||this._heartbeatsCache.heartbeats.some(y=>y.date===w))return;if(this._heartbeatsCache.heartbeats.push({date:w,agent:f}),this._heartbeatsCache.heartbeats.length>ho){const y=fo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(y,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){X.warn(a)}}async getHeartbeatsHeader(){var i;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((i=this._heartbeatsCache)==null?void 0:i.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=di(),{heartbeatsToSend:a,unsentEntries:f}=co(this._heartbeatsCache.heartbeats),w=he(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=s,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),w}catch(s){return X.warn(s),""}}}function di(){return new Date().toISOString().substring(0,10)}function co(n,i=ao){const s=[];let a=n.slice();for(const f of n){const w=s.find(y=>y.agent===f.agent);if(w){if(w.dates.push(f.date),mi(s)>i){w.dates.pop();break}}else if(s.push({agent:f.agent,dates:[f.date]}),mi(s)>i){s.pop();break}a=a.slice(1)}return{heartbeatsToSend:s,unsentEntries:a}}class uo{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wr()?Gr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await oo(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(i){if(await this._canUseIndexedDBPromise){const a=await this.read();return gi(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:i.heartbeats})}else return}async add(i){if(await this._canUseIndexedDBPromise){const a=await this.read();return gi(this.app,{lastSentHeartbeatDate:i.lastSentHeartbeatDate??a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...i.heartbeats]})}else return}}function mi(n){return he(JSON.stringify({version:2,heartbeats:n})).length}function fo(n){if(n.length===0)return-1;let i=0,s=n[0].date;for(let a=1;a<n.length;a++)n[a].date<s&&(s=n[a].date,i=a);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){At(new St("platform-logger",i=>new ms(i),"PRIVATE")),At(new St("heartbeat",i=>new lo(i),"PRIVATE")),it(le,Xe,n),it(le,Xe,"esm2020"),it("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */po("");var go="firebase",mo="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(go,mo,"app");const Pa=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:dt,SDK_VERSION:Zs,_DEFAULT_ENTRY_NAME:zt,_addComponent:Je,_addOrOverwriteComponent:Gs,_apps:rt,_clearComponents:Js,_components:Ct,_getProvider:fe,_isFirebaseApp:en,_isFirebaseServerApp:Xs,_isFirebaseServerAppSettings:ki,_registerComponent:At,_removeServiceInstance:qs,_serverApps:It,deleteApp:xi,getApp:to,getApps:eo,initializeApp:Mi,initializeServerApp:Qs,onLog:no,registerVersion:it,setLogLevel:io},Symbol.toStringTag,{value:"Module"}));var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yo,vo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function i(p,h){function c(){}c.prototype=h.prototype,p.F=h.prototype,p.prototype=new c,p.prototype.constructor=p,p.D=function(g,u,m){for(var l=Array(arguments.length-2),H=2;H<arguments.length;H++)l[H-2]=arguments[H];return h.prototype[u].apply(g,l)}}function s(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}i(a,s),a.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function f(p,h,c){c||(c=0);const g=Array(16);if(typeof h=="string")for(var u=0;u<16;++u)g[u]=h.charCodeAt(c++)|h.charCodeAt(c++)<<8|h.charCodeAt(c++)<<16|h.charCodeAt(c++)<<24;else for(u=0;u<16;++u)g[u]=h[c++]|h[c++]<<8|h[c++]<<16|h[c++]<<24;h=p.g[0],c=p.g[1],u=p.g[2];let m=p.g[3],l;l=h+(m^c&(u^m))+g[0]+3614090360&4294967295,h=c+(l<<7&4294967295|l>>>25),l=m+(u^h&(c^u))+g[1]+3905402710&4294967295,m=h+(l<<12&4294967295|l>>>20),l=u+(c^m&(h^c))+g[2]+606105819&4294967295,u=m+(l<<17&4294967295|l>>>15),l=c+(h^u&(m^h))+g[3]+3250441966&4294967295,c=u+(l<<22&4294967295|l>>>10),l=h+(m^c&(u^m))+g[4]+4118548399&4294967295,h=c+(l<<7&4294967295|l>>>25),l=m+(u^h&(c^u))+g[5]+1200080426&4294967295,m=h+(l<<12&4294967295|l>>>20),l=u+(c^m&(h^c))+g[6]+2821735955&4294967295,u=m+(l<<17&4294967295|l>>>15),l=c+(h^u&(m^h))+g[7]+4249261313&4294967295,c=u+(l<<22&4294967295|l>>>10),l=h+(m^c&(u^m))+g[8]+1770035416&4294967295,h=c+(l<<7&4294967295|l>>>25),l=m+(u^h&(c^u))+g[9]+2336552879&4294967295,m=h+(l<<12&4294967295|l>>>20),l=u+(c^m&(h^c))+g[10]+4294925233&4294967295,u=m+(l<<17&4294967295|l>>>15),l=c+(h^u&(m^h))+g[11]+2304563134&4294967295,c=u+(l<<22&4294967295|l>>>10),l=h+(m^c&(u^m))+g[12]+1804603682&4294967295,h=c+(l<<7&4294967295|l>>>25),l=m+(u^h&(c^u))+g[13]+4254626195&4294967295,m=h+(l<<12&4294967295|l>>>20),l=u+(c^m&(h^c))+g[14]+2792965006&4294967295,u=m+(l<<17&4294967295|l>>>15),l=c+(h^u&(m^h))+g[15]+1236535329&4294967295,c=u+(l<<22&4294967295|l>>>10),l=h+(u^m&(c^u))+g[1]+4129170786&4294967295,h=c+(l<<5&4294967295|l>>>27),l=m+(c^u&(h^c))+g[6]+3225465664&4294967295,m=h+(l<<9&4294967295|l>>>23),l=u+(h^c&(m^h))+g[11]+643717713&4294967295,u=m+(l<<14&4294967295|l>>>18),l=c+(m^h&(u^m))+g[0]+3921069994&4294967295,c=u+(l<<20&4294967295|l>>>12),l=h+(u^m&(c^u))+g[5]+3593408605&4294967295,h=c+(l<<5&4294967295|l>>>27),l=m+(c^u&(h^c))+g[10]+38016083&4294967295,m=h+(l<<9&4294967295|l>>>23),l=u+(h^c&(m^h))+g[15]+3634488961&4294967295,u=m+(l<<14&4294967295|l>>>18),l=c+(m^h&(u^m))+g[4]+3889429448&4294967295,c=u+(l<<20&4294967295|l>>>12),l=h+(u^m&(c^u))+g[9]+568446438&4294967295,h=c+(l<<5&4294967295|l>>>27),l=m+(c^u&(h^c))+g[14]+3275163606&4294967295,m=h+(l<<9&4294967295|l>>>23),l=u+(h^c&(m^h))+g[3]+4107603335&4294967295,u=m+(l<<14&4294967295|l>>>18),l=c+(m^h&(u^m))+g[8]+1163531501&4294967295,c=u+(l<<20&4294967295|l>>>12),l=h+(u^m&(c^u))+g[13]+2850285829&4294967295,h=c+(l<<5&4294967295|l>>>27),l=m+(c^u&(h^c))+g[2]+4243563512&4294967295,m=h+(l<<9&4294967295|l>>>23),l=u+(h^c&(m^h))+g[7]+1735328473&4294967295,u=m+(l<<14&4294967295|l>>>18),l=c+(m^h&(u^m))+g[12]+2368359562&4294967295,c=u+(l<<20&4294967295|l>>>12),l=h+(c^u^m)+g[5]+4294588738&4294967295,h=c+(l<<4&4294967295|l>>>28),l=m+(h^c^u)+g[8]+2272392833&4294967295,m=h+(l<<11&4294967295|l>>>21),l=u+(m^h^c)+g[11]+1839030562&4294967295,u=m+(l<<16&4294967295|l>>>16),l=c+(u^m^h)+g[14]+4259657740&4294967295,c=u+(l<<23&4294967295|l>>>9),l=h+(c^u^m)+g[1]+2763975236&4294967295,h=c+(l<<4&4294967295|l>>>28),l=m+(h^c^u)+g[4]+1272893353&4294967295,m=h+(l<<11&4294967295|l>>>21),l=u+(m^h^c)+g[7]+4139469664&4294967295,u=m+(l<<16&4294967295|l>>>16),l=c+(u^m^h)+g[10]+3200236656&4294967295,c=u+(l<<23&4294967295|l>>>9),l=h+(c^u^m)+g[13]+681279174&4294967295,h=c+(l<<4&4294967295|l>>>28),l=m+(h^c^u)+g[0]+3936430074&4294967295,m=h+(l<<11&4294967295|l>>>21),l=u+(m^h^c)+g[3]+3572445317&4294967295,u=m+(l<<16&4294967295|l>>>16),l=c+(u^m^h)+g[6]+76029189&4294967295,c=u+(l<<23&4294967295|l>>>9),l=h+(c^u^m)+g[9]+3654602809&4294967295,h=c+(l<<4&4294967295|l>>>28),l=m+(h^c^u)+g[12]+3873151461&4294967295,m=h+(l<<11&4294967295|l>>>21),l=u+(m^h^c)+g[15]+530742520&4294967295,u=m+(l<<16&4294967295|l>>>16),l=c+(u^m^h)+g[2]+3299628645&4294967295,c=u+(l<<23&4294967295|l>>>9),l=h+(u^(c|~m))+g[0]+4096336452&4294967295,h=c+(l<<6&4294967295|l>>>26),l=m+(c^(h|~u))+g[7]+1126891415&4294967295,m=h+(l<<10&4294967295|l>>>22),l=u+(h^(m|~c))+g[14]+2878612391&4294967295,u=m+(l<<15&4294967295|l>>>17),l=c+(m^(u|~h))+g[5]+4237533241&4294967295,c=u+(l<<21&4294967295|l>>>11),l=h+(u^(c|~m))+g[12]+1700485571&4294967295,h=c+(l<<6&4294967295|l>>>26),l=m+(c^(h|~u))+g[3]+2399980690&4294967295,m=h+(l<<10&4294967295|l>>>22),l=u+(h^(m|~c))+g[10]+4293915773&4294967295,u=m+(l<<15&4294967295|l>>>17),l=c+(m^(u|~h))+g[1]+2240044497&4294967295,c=u+(l<<21&4294967295|l>>>11),l=h+(u^(c|~m))+g[8]+1873313359&4294967295,h=c+(l<<6&4294967295|l>>>26),l=m+(c^(h|~u))+g[15]+4264355552&4294967295,m=h+(l<<10&4294967295|l>>>22),l=u+(h^(m|~c))+g[6]+2734768916&4294967295,u=m+(l<<15&4294967295|l>>>17),l=c+(m^(u|~h))+g[13]+1309151649&4294967295,c=u+(l<<21&4294967295|l>>>11),l=h+(u^(c|~m))+g[4]+4149444226&4294967295,h=c+(l<<6&4294967295|l>>>26),l=m+(c^(h|~u))+g[11]+3174756917&4294967295,m=h+(l<<10&4294967295|l>>>22),l=u+(h^(m|~c))+g[2]+718787259&4294967295,u=m+(l<<15&4294967295|l>>>17),l=c+(m^(u|~h))+g[9]+3951481745&4294967295,p.g[0]=p.g[0]+h&4294967295,p.g[1]=p.g[1]+(u+(l<<21&4294967295|l>>>11))&4294967295,p.g[2]=p.g[2]+u&4294967295,p.g[3]=p.g[3]+m&4294967295}a.prototype.v=function(p,h){h===void 0&&(h=p.length);const c=h-this.blockSize,g=this.C;let u=this.h,m=0;for(;m<h;){if(u==0)for(;m<=c;)f(this,p,m),m+=this.blockSize;if(typeof p=="string"){for(;m<h;)if(g[u++]=p.charCodeAt(m++),u==this.blockSize){f(this,g),u=0;break}}else for(;m<h;)if(g[u++]=p[m++],u==this.blockSize){f(this,g),u=0;break}}this.h=u,this.o+=h},a.prototype.A=function(){var p=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);p[0]=128;for(var h=1;h<p.length-8;++h)p[h]=0;h=this.o*8;for(var c=p.length-8;c<p.length;++c)p[c]=h&255,h/=256;for(this.v(p),p=Array(16),h=0,c=0;c<4;++c)for(let g=0;g<32;g+=8)p[h++]=this.g[c]>>>g&255;return p};function w(p,h){var c=S;return Object.prototype.hasOwnProperty.call(c,p)?c[p]:c[p]=h(p)}function y(p,h){this.h=h;const c=[];let g=!0;for(let u=p.length-1;u>=0;u--){const m=p[u]|0;g&&m==h||(c[u]=m,g=!1)}this.g=c}var S={};function I(p){return-128<=p&&p<128?w(p,function(h){return new y([h|0],h<0?-1:0)}):new y([p|0],p<0?-1:0)}function E(p){if(isNaN(p)||!isFinite(p))return A;if(p<0)return R(E(-p));const h=[];let c=1;for(let g=0;p>=c;g++)h[g]=p/c|0,c*=4294967296;return new y(h,0)}function M(p,h){if(p.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(p.charAt(0)=="-")return R(M(p.substring(1),h));if(p.indexOf("-")>=0)throw Error('number format error: interior "-" character');const c=E(Math.pow(h,8));let g=A;for(let m=0;m<p.length;m+=8){var u=Math.min(8,p.length-m);const l=parseInt(p.substring(m,m+u),h);u<8?(u=E(Math.pow(h,u)),g=g.j(u).add(E(l))):(g=g.j(c),g=g.add(E(l)))}return g}var A=I(0),U=I(1),z=I(16777216);n=y.prototype,n.m=function(){if(L(this))return-R(this).m();let p=0,h=1;for(let c=0;c<this.g.length;c++){const g=this.i(c);p+=(g>=0?g:4294967296+g)*h,h*=4294967296}return p},n.toString=function(p){if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(N(this))return"0";if(L(this))return"-"+R(this).toString(p);const h=E(Math.pow(p,6));var c=this;let g="";for(;;){const u=vt(c,h).g;c=mt(c,u.j(h));let m=((c.g.length>0?c.g[0]:c.h)>>>0).toString(p);if(c=u,N(c))return m+g;for(;m.length<6;)m="0"+m;g=m+g}},n.i=function(p){return p<0?0:p<this.g.length?this.g[p]:this.h};function N(p){if(p.h!=0)return!1;for(let h=0;h<p.g.length;h++)if(p.g[h]!=0)return!1;return!0}function L(p){return p.h==-1}n.l=function(p){return p=mt(this,p),L(p)?-1:N(p)?0:1};function R(p){const h=p.g.length,c=[];for(let g=0;g<h;g++)c[g]=~p.g[g];return new y(c,~p.h).add(U)}n.abs=function(){return L(this)?R(this):this},n.add=function(p){const h=Math.max(this.g.length,p.g.length),c=[];let g=0;for(let u=0;u<=h;u++){let m=g+(this.i(u)&65535)+(p.i(u)&65535),l=(m>>>16)+(this.i(u)>>>16)+(p.i(u)>>>16);g=l>>>16,m&=65535,l&=65535,c[u]=l<<16|m}return new y(c,c[c.length-1]&-2147483648?-1:0)};function mt(p,h){return p.add(R(h))}n.j=function(p){if(N(this)||N(p))return A;if(L(this))return L(p)?R(this).j(R(p)):R(R(this).j(p));if(L(p))return R(this.j(R(p)));if(this.l(z)<0&&p.l(z)<0)return E(this.m()*p.m());const h=this.g.length+p.g.length,c=[];for(var g=0;g<2*h;g++)c[g]=0;for(g=0;g<this.g.length;g++)for(let u=0;u<p.g.length;u++){const m=this.i(g)>>>16,l=this.i(g)&65535,H=p.i(u)>>>16,st=p.i(u)&65535;c[2*g+2*u]+=l*st,yt(c,2*g+2*u),c[2*g+2*u+1]+=m*st,yt(c,2*g+2*u+1),c[2*g+2*u+1]+=l*H,yt(c,2*g+2*u+1),c[2*g+2*u+2]+=m*H,yt(c,2*g+2*u+2)}for(p=0;p<h;p++)c[p]=c[2*p+1]<<16|c[2*p];for(p=h;p<2*h;p++)c[p]=0;return new y(c,0)};function yt(p,h){for(;(p[h]&65535)!=p[h];)p[h+1]+=p[h]>>>16,p[h]&=65535,h++}function J(p,h){this.g=p,this.h=h}function vt(p,h){if(N(h))throw Error("division by zero");if(N(p))return new J(A,A);if(L(p))return h=vt(R(p),h),new J(R(h.g),R(h.h));if(L(h))return h=vt(p,R(h)),new J(R(h.g),h.h);if(p.g.length>30){if(L(p)||L(h))throw Error("slowDivide_ only works with positive integers.");for(var c=U,g=h;g.l(p)<=0;)c=K(c),g=K(g);var u=V(c,1),m=V(g,1);for(g=V(g,2),c=V(c,2);!N(g);){var l=m.add(g);l.l(p)<=0&&(u=u.add(c),m=l),g=V(g,1),c=V(c,1)}return h=mt(p,u.j(h)),new J(u,h)}for(u=A;p.l(h)>=0;){for(c=Math.max(1,Math.floor(p.m()/h.m())),g=Math.ceil(Math.log(c)/Math.LN2),g=g<=48?1:Math.pow(2,g-48),m=E(c),l=m.j(h);L(l)||l.l(p)>0;)c-=g,m=E(c),l=m.j(h);N(m)&&(m=U),u=u.add(m),p=mt(p,l)}return new J(u,p)}n.B=function(p){return vt(this,p).h},n.and=function(p){const h=Math.max(this.g.length,p.g.length),c=[];for(let g=0;g<h;g++)c[g]=this.i(g)&p.i(g);return new y(c,this.h&p.h)},n.or=function(p){const h=Math.max(this.g.length,p.g.length),c=[];for(let g=0;g<h;g++)c[g]=this.i(g)|p.i(g);return new y(c,this.h|p.h)},n.xor=function(p){const h=Math.max(this.g.length,p.g.length),c=[];for(let g=0;g<h;g++)c[g]=this.i(g)^p.i(g);return new y(c,this.h^p.h)};function K(p){const h=p.g.length+1,c=[];for(let g=0;g<h;g++)c[g]=p.i(g)<<1|p.i(g-1)>>>31;return new y(c,p.h)}function V(p,h){const c=h>>5;h%=32;const g=p.g.length-c,u=[];for(let m=0;m<g;m++)u[m]=h>0?p.i(m+c)>>>h|p.i(m+c+1)<<32-h:p.i(m+c);return new y(u,p.h)}a.prototype.digest=a.prototype.A,a.prototype.reset=a.prototype.u,a.prototype.update=a.prototype.v,vo=a,y.prototype.add=y.prototype.add,y.prototype.multiply=y.prototype.j,y.prototype.modulo=y.prototype.B,y.prototype.compare=y.prototype.l,y.prototype.toNumber=y.prototype.m,y.prototype.toString=y.prototype.toString,y.prototype.getBits=y.prototype.i,y.fromNumber=E,y.fromString=M,yo=y}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});var ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wo,bo,Eo,So,Io,Co,Ao,To;(function(){var n,i=Object.defineProperty;function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ae=="object"&&ae];for(var e=0;e<t.length;++e){var r=t[e];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var a=s(this);function f(t,e){if(e)t:{var r=a;t=t.split(".");for(var o=0;o<t.length-1;o++){var d=t[o];if(!(d in r))break t;r=r[d]}t=t[t.length-1],o=r[t],e=e(o),e!=o&&e!=null&&i(r,t,{configurable:!0,writable:!0,value:e})}}f("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),f("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),f("Object.entries",function(t){return t||function(e){var r=[],o;for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.push([o,e[o]]);return r}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var w=w||{},y=this||self;function S(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function I(t,e,r){return t.call.apply(t.bind,arguments)}function E(t,e,r){return E=I,E.apply(null,arguments)}function M(t,e){var r=Array.prototype.slice.call(arguments,1);return function(){var o=r.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function A(t,e){function r(){}r.prototype=e.prototype,t.Z=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.Ob=function(o,d,v){for(var b=Array(arguments.length-2),C=2;C<arguments.length;C++)b[C-2]=arguments[C];return e.prototype[d].apply(o,b)}}var U=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function z(t){const e=t.length;if(e>0){const r=Array(e);for(let o=0;o<e;o++)r[o]=t[o];return r}return[]}function N(t,e){for(let o=1;o<arguments.length;o++){const d=arguments[o];var r=typeof d;if(r=r!="object"?r:d?Array.isArray(d)?"array":r:"null",r=="array"||r=="object"&&typeof d.length=="number"){r=t.length||0;const v=d.length||0;t.length=r+v;for(let b=0;b<v;b++)t[r+b]=d[b]}else t.push(d)}}class L{constructor(e,r){this.i=e,this.j=r,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function R(t){y.setTimeout(()=>{throw t},0)}function mt(){var t=p;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yt{constructor(){this.h=this.g=null}add(e,r){const o=J.get();o.set(e,r),this.h?this.h.next=o:this.g=o,this.h=o}}var J=new L(()=>new vt,t=>t.reset());class vt{constructor(){this.next=this.g=this.h=null}set(e,r){this.h=e,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let K,V=!1,p=new yt,h=()=>{const t=Promise.resolve(void 0);K=()=>{t.then(c)}};function c(){for(var t;t=mt();){try{t.h.call(t.g)}catch(r){R(r)}var e=J;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}V=!1}function g(){this.u=this.u,this.C=this.C}g.prototype.u=!1,g.prototype.dispose=function(){this.u||(this.u=!0,this.N())},g.prototype[Symbol.dispose]=function(){this.dispose()},g.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function u(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}u.prototype.h=function(){this.defaultPrevented=!0};var m=(function(){if(!y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};y.addEventListener("test",r,e),y.removeEventListener("test",r,e)}catch{}return t})();function l(t){return/^[\s\xa0]*$/.test(t)}function H(t,e){u.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}A(H,u),H.prototype.init=function(t,e){const r=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||(r=="mouseover"?e=t.fromElement:r=="mouseout"&&(e=t.toElement)),this.relatedTarget=e,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&H.Z.h.call(this)},H.prototype.h=function(){H.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var st="closure_listenable_"+(Math.random()*1e6|0),nr=0;function ir(t,e,r,o,d){this.listener=t,this.proxy=null,this.src=e,this.type=r,this.capture=!!o,this.ha=d,this.key=++nr,this.da=this.fa=!1}function Gt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function qt(t,e,r){for(const o in t)e.call(r,t[o],o,t)}function rr(t,e){for(const r in t)e.call(void 0,t[r],r,t)}function an(t){const e={};for(const r in t)e[r]=t[r];return e}const hn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ln(t,e){let r,o;for(let d=1;d<arguments.length;d++){o=arguments[d];for(r in o)t[r]=o[r];for(let v=0;v<hn.length;v++)r=hn[v],Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}}function Xt(t){this.src=t,this.g={},this.h=0}Xt.prototype.add=function(t,e,r,o,d){const v=t.toString();t=this.g[v],t||(t=this.g[v]=[],this.h++);const b=de(t,e,o,d);return b>-1?(e=t[b],r||(e.fa=!1)):(e=new ir(e,this.src,v,!!o,d),e.fa=r,t.push(e)),e};function ge(t,e){const r=e.type;if(r in t.g){var o=t.g[r],d=Array.prototype.indexOf.call(o,e,void 0),v;(v=d>=0)&&Array.prototype.splice.call(o,d,1),v&&(Gt(e),t.g[r].length==0&&(delete t.g[r],t.h--))}}function de(t,e,r,o){for(let d=0;d<t.length;++d){const v=t[d];if(!v.da&&v.listener==e&&v.capture==!!r&&v.ha==o)return d}return-1}var me="closure_lm_"+(Math.random()*1e6|0),ye={};function cn(t,e,r,o,d){if(Array.isArray(e)){for(let v=0;v<e.length;v++)cn(t,e[v],r,o,d);return null}return r=pn(r),t&&t[st]?t.J(e,r,S(o)?!!o.capture:!1,d):sr(t,e,r,!1,o,d)}function sr(t,e,r,o,d,v){if(!e)throw Error("Invalid event type");const b=S(d)?!!d.capture:!!d;let C=we(t);if(C||(t[me]=C=new Xt(t)),r=C.add(e,r,o,b,v),r.proxy)return r;if(o=or(),r.proxy=o,o.src=t,o.listener=r,t.addEventListener)m||(d=b),d===void 0&&(d=!1),t.addEventListener(e.toString(),o,d);else if(t.attachEvent)t.attachEvent(fn(e.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return r}function or(){function t(r){return e.call(t.src,t.listener,r)}const e=ar;return t}function un(t,e,r,o,d){if(Array.isArray(e))for(var v=0;v<e.length;v++)un(t,e[v],r,o,d);else o=S(o)?!!o.capture:!!o,r=pn(r),t&&t[st]?(t=t.i,v=String(e).toString(),v in t.g&&(e=t.g[v],r=de(e,r,o,d),r>-1&&(Gt(e[r]),Array.prototype.splice.call(e,r,1),e.length==0&&(delete t.g[v],t.h--)))):t&&(t=we(t))&&(e=t.g[e.toString()],t=-1,e&&(t=de(e,r,o,d)),(r=t>-1?e[t]:null)&&ve(r))}function ve(t){if(typeof t!="number"&&t&&!t.da){var e=t.src;if(e&&e[st])ge(e.i,t);else{var r=t.type,o=t.proxy;e.removeEventListener?e.removeEventListener(r,o,t.capture):e.detachEvent?e.detachEvent(fn(r),o):e.addListener&&e.removeListener&&e.removeListener(o),(r=we(e))?(ge(r,t),r.h==0&&(r.src=null,e[me]=null)):Gt(t)}}}function fn(t){return t in ye?ye[t]:ye[t]="on"+t}function ar(t,e){if(t.da)t=!0;else{e=new H(e,this);const r=t.listener,o=t.ha||t.src;t.fa&&ve(t),t=r.call(o,e)}return t}function we(t){return t=t[me],t instanceof Xt?t:null}var be="__closure_events_fn_"+(Math.random()*1e9>>>0);function pn(t){return typeof t=="function"?t:(t[be]||(t[be]=function(e){return t.handleEvent(e)}),t[be])}function x(){g.call(this),this.i=new Xt(this),this.M=this,this.G=null}A(x,g),x.prototype[st]=!0,x.prototype.removeEventListener=function(t,e,r,o){un(this,t,e,r,o)};function B(t,e){var r,o=t.G;if(o)for(r=[];o;o=o.G)r.push(o);if(t=t.M,o=e.type||e,typeof e=="string")e=new u(e,t);else if(e instanceof u)e.target=e.target||t;else{var d=e;e=new u(o,t),ln(e,d)}d=!0;let v,b;if(r)for(b=r.length-1;b>=0;b--)v=e.g=r[b],d=Jt(v,o,!0,e)&&d;if(v=e.g=t,d=Jt(v,o,!0,e)&&d,d=Jt(v,o,!1,e)&&d,r)for(b=0;b<r.length;b++)v=e.g=r[b],d=Jt(v,o,!1,e)&&d}x.prototype.N=function(){if(x.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const r=t.g[e];for(let o=0;o<r.length;o++)Gt(r[o]);delete t.g[e],t.h--}}this.G=null},x.prototype.J=function(t,e,r,o){return this.i.add(String(t),e,!1,r,o)},x.prototype.K=function(t,e,r,o){return this.i.add(String(t),e,!0,r,o)};function Jt(t,e,r,o){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let d=!0;for(let v=0;v<e.length;++v){const b=e[v];if(b&&!b.da&&b.capture==r){const C=b.listener,k=b.ha||b.src;b.fa&&ge(t.i,b),d=C.call(k,o)!==!1&&d}}return d&&!o.defaultPrevented}function hr(t,e){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(e)>2147483647?-1:y.setTimeout(t,e||0)}function gn(t){t.g=hr(()=>{t.g=null,t.i&&(t.i=!1,gn(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}class lr extends g{constructor(e,r){super(),this.m=e,this.l=r,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:gn(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(t){g.call(this),this.h=t,this.g={}}A(Dt,g);var dn=[];function mn(t){qt(t.g,function(e,r){this.g.hasOwnProperty(r)&&ve(e)},t),t.g={}}Dt.prototype.N=function(){Dt.Z.N.call(this),mn(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ee=y.JSON.stringify,cr=y.JSON.parse,ur=class{stringify(t){return y.JSON.stringify(t,void 0)}parse(t){return y.JSON.parse(t,void 0)}};function yn(){}function vn(){}var Ot={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Se(){u.call(this,"d")}A(Se,u);function Ie(){u.call(this,"c")}A(Ie,u);var ot={},wn=null;function Kt(){return wn=wn||new x}ot.Ia="serverreachability";function bn(t){u.call(this,ot.Ia,t)}A(bn,u);function Rt(t){const e=Kt();B(e,new bn(e))}ot.STAT_EVENT="statevent";function En(t,e){u.call(this,ot.STAT_EVENT,t),this.stat=e}A(En,u);function j(t){const e=Kt();B(e,new En(e,t))}ot.Ja="timingevent";function Sn(t,e){u.call(this,ot.Ja,t),this.size=e}A(Sn,u);function kt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){t()},e)}function Pt(){this.g=!0}Pt.prototype.ua=function(){this.g=!1};function fr(t,e,r,o,d,v){t.info(function(){if(t.g)if(v){var b="",C=v.split("&");for(let T=0;T<C.length;T++){var k=C[T].split("=");if(k.length>1){const P=k[0];k=k[1];const G=P.split("_");b=G.length>=2&&G[1]=="type"?b+(P+"="+k+"&"):b+(P+"=redacted&")}}}else b=null;else b=v;return"XMLHTTP REQ ("+o+") [attempt "+d+"]: "+e+`
`+r+`
`+b})}function pr(t,e,r,o,d,v,b){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+d+"]: "+e+`
`+r+`
`+v+" "+b})}function wt(t,e,r,o){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dr(t,r)+(o?" "+o:"")})}function gr(t,e){t.info(function(){return"TIMEOUT: "+e})}Pt.prototype.info=function(){};function dr(t,e){if(!t.g)return e;if(!e)return null;try{const v=JSON.parse(e);if(v){for(t=0;t<v.length;t++)if(Array.isArray(v[t])){var r=v[t];if(!(r.length<2)){var o=r[1];if(Array.isArray(o)&&!(o.length<1)){var d=o[0];if(d!="noop"&&d!="stop"&&d!="close")for(let b=1;b<o.length;b++)o[b]=""}}}}return Ee(v)}catch{return e}}var Yt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},In={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Cn;function Ce(){}A(Ce,yn),Ce.prototype.g=function(){return new XMLHttpRequest},Cn=new Ce;function Mt(t){return encodeURIComponent(String(t))}function mr(t){var e=1;t=t.split(":");const r=[];for(;e>0&&t.length;)r.push(t.shift()),e--;return t.length&&r.push(t.join(":")),r}function Y(t,e,r,o){this.j=t,this.i=e,this.l=r,this.S=o||1,this.V=new Dt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new An}function An(){this.i=null,this.g="",this.h=!1}var Tn={},Ae={};function Te(t,e,r){t.M=1,t.A=Qt(W(e)),t.u=r,t.R=!0,_n(t,null)}function _n(t,e){t.F=Date.now(),Zt(t),t.B=W(t.A);var r=t.B,o=t.S;Array.isArray(o)||(o=[String(o)]),Fn(r.i,"t",o),t.C=0,r=t.j.L,t.h=new An,t.g=ri(t.j,r?e:null,!t.u),t.P>0&&(t.O=new lr(E(t.Y,t,t.g),t.P)),e=t.V,r=t.g,o=t.ba;var d="readystatechange";Array.isArray(d)||(d&&(dn[0]=d.toString()),d=dn);for(let v=0;v<d.length;v++){const b=cn(r,d[v],o||e.handleEvent,!1,e.h||e);if(!b)break;e.g[b.key]=b}e=t.J?an(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Rt(),fr(t.i,t.v,t.B,t.l,t.S,t.u)}Y.prototype.ba=function(t){t=t.target;const e=this.O;e&&tt(t)==3?e.j():this.Y(t)},Y.prototype.Y=function(t){try{if(t==this.g)t:{const C=tt(this.g),k=this.g.ya(),T=this.g.ca();if(!(C<3)&&(C!=3||this.g&&(this.h.h||this.g.la()||qn(this.g)))){this.K||C!=4||k==7||(k==8||T<=0?Rt(3):Rt(2)),_e(this);var e=this.g.ca();this.X=e;var r=yr(this);if(this.o=e==200,pr(this.i,this.v,this.B,this.l,this.S,C,e),this.o){if(this.U&&!this.L){e:{if(this.g){var o,d=this.g;if((o=d.g?d.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!l(o)){var v=o;break e}}v=null}if(t=v)wt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,De(this,t);else{this.o=!1,this.m=3,j(12),at(this),xt(this);break t}}if(this.R){t=!0;let P;for(;!this.K&&this.C<r.length;)if(P=vr(this,r),P==Ae){C==4&&(this.m=4,j(14),t=!1),wt(this.i,this.l,null,"[Incomplete Response]");break}else if(P==Tn){this.m=4,j(15),wt(this.i,this.l,r,"[Invalid Chunk]"),t=!1;break}else wt(this.i,this.l,P,null),De(this,P);if(Dn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),C!=4||r.length!=0||this.h.h||(this.m=1,j(16),t=!1),this.o=this.o&&t,!t)wt(this.i,this.l,r,"[Invalid Chunked Response]"),at(this),xt(this);else if(r.length>0&&!this.W){this.W=!0;var b=this.j;b.g==this&&b.aa&&!b.P&&(b.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),je(b),b.P=!0,j(11))}}else wt(this.i,this.l,r,null),De(this,r);C==4&&at(this),this.o&&!this.K&&(C==4?ti(this.j,this):(this.o=!1,Zt(this)))}else Pr(this.g),e==400&&r.indexOf("Unknown SID")>0?(this.m=3,j(12)):(this.m=0,j(13)),at(this),xt(this)}}}catch{}finally{}};function yr(t){if(!Dn(t))return t.g.la();const e=qn(t.g);if(e==="")return"";let r="";const o=e.length,d=tt(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return at(t),xt(t),"";t.h.i=new y.TextDecoder}for(let v=0;v<o;v++)t.h.h=!0,r+=t.h.i.decode(e[v],{stream:!(d&&v==o-1)});return e.length=0,t.h.g+=r,t.C=0,t.h.g}function Dn(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function vr(t,e){var r=t.C,o=e.indexOf(`
`,r);return o==-1?Ae:(r=Number(e.substring(r,o)),isNaN(r)?Tn:(o+=1,o+r>e.length?Ae:(e=e.slice(o,o+r),t.C=o+r,e)))}Y.prototype.cancel=function(){this.K=!0,at(this)};function Zt(t){t.T=Date.now()+t.H,On(t,t.H)}function On(t,e){if(t.D!=null)throw Error("WatchDog timer not null");t.D=kt(E(t.aa,t),e)}function _e(t){t.D&&(y.clearTimeout(t.D),t.D=null)}Y.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(gr(this.i,this.B),this.M!=2&&(Rt(),j(17)),at(this),this.m=2,xt(this)):On(this,this.T-t)};function xt(t){t.j.I==0||t.K||ti(t.j,t)}function at(t){_e(t);var e=t.O;e&&typeof e.dispose=="function"&&e.dispose(),t.O=null,mn(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function De(t,e){try{var r=t.j;if(r.I!=0&&(r.g==t||Oe(r.h,t))){if(!t.L&&Oe(r.h,t)&&r.I==3){try{var o=r.Ba.g.parse(e)}catch{o=null}if(Array.isArray(o)&&o.length==3){var d=o;if(d[0]==0){t:if(!r.v){if(r.g)if(r.g.F+3e3<t.F)re(r),ne(r);else break t;Be(r),j(18)}}else r.xa=d[1],0<r.xa-r.K&&d[2]<37500&&r.F&&r.A==0&&!r.C&&(r.C=kt(E(r.Va,r),6e3));Pn(r.h)<=1&&r.ta&&(r.ta=void 0)}else lt(r,11)}else if((t.L||r.g==t)&&re(r),!l(e))for(d=r.Ba.g.parse(e),e=0;e<d.length;e++){let T=d[e];const P=T[0];if(!(P<=r.K))if(r.K=P,T=T[1],r.I==2)if(T[0]=="c"){r.M=T[1],r.ba=T[2];const G=T[3];G!=null&&(r.ka=G,r.j.info("VER="+r.ka));const ct=T[4];ct!=null&&(r.za=ct,r.j.info("SVER="+r.za));const et=T[5];et!=null&&typeof et=="number"&&et>0&&(o=1.5*et,r.O=o,r.j.info("backChannelRequestTimeoutMs_="+o)),o=r;const nt=t.g;if(nt){const oe=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oe){var v=o.h;v.g||oe.indexOf("spdy")==-1&&oe.indexOf("quic")==-1&&oe.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(Re(v,v.h),v.h=null))}if(o.G){const Ne=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ne&&(o.wa=Ne,D(o.J,o.G,Ne))}}r.I=3,r.l&&r.l.ra(),r.aa&&(r.T=Date.now()-t.F,r.j.info("Handshake RTT: "+r.T+"ms")),o=r;var b=t;if(o.na=ii(o,o.L?o.ba:null,o.W),b.L){Mn(o.h,b);var C=b,k=o.O;k&&(C.H=k),C.D&&(_e(C),Zt(C)),o.g=b}else Zn(o);r.i.length>0&&ie(r)}else T[0]!="stop"&&T[0]!="close"||lt(r,7);else r.I==3&&(T[0]=="stop"||T[0]=="close"?T[0]=="stop"?lt(r,7):xe(r):T[0]!="noop"&&r.l&&r.l.qa(T),r.A=0)}}Rt(4)}catch{}}var wr=class{constructor(t,e){this.g=t,this.map=e}};function Rn(t){this.l=t||10,y.PerformanceNavigationTiming?(t=y.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function kn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Pn(t){return t.h?1:t.g?t.g.size:0}function Oe(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Re(t,e){t.g?t.g.add(e):t.h=e}function Mn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Rn.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xn(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const r of t.g.values())e=e.concat(r.G);return e}return z(t.i)}var Bn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function br(t,e){if(t){t=t.split("&");for(let r=0;r<t.length;r++){const o=t[r].indexOf("=");let d,v=null;o>=0?(d=t[r].substring(0,o),v=t[r].substring(o+1)):d=t[r],e(d,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Z(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let e;t instanceof Z?(this.l=t.l,Bt(this,t.j),this.o=t.o,this.g=t.g,jt(this,t.u),this.h=t.h,ke(this,$n(t.i)),this.m=t.m):t&&(e=String(t).match(Bn))?(this.l=!1,Bt(this,e[1]||"",!0),this.o=Nt(e[2]||""),this.g=Nt(e[3]||"",!0),jt(this,e[4]),this.h=Nt(e[5]||"",!0),ke(this,e[6]||"",!0),this.m=Nt(e[7]||"")):(this.l=!1,this.i=new Ht(null,this.l))}Z.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Lt(e,jn,!0),":");var r=this.g;return(r||e=="file")&&(t.push("//"),(e=this.o)&&t.push(Lt(e,jn,!0),"@"),t.push(Mt(r).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.u,r!=null&&t.push(":",String(r))),(r=this.h)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Lt(r,r.charAt(0)=="/"?Ir:Sr,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Lt(r,Ar)),t.join("")},Z.prototype.resolve=function(t){const e=W(this);let r=!!t.j;r?Bt(e,t.j):r=!!t.o,r?e.o=t.o:r=!!t.g,r?e.g=t.g:r=t.u!=null;var o=t.h;if(r)jt(e,t.u);else if(r=!!t.h){if(o.charAt(0)!="/")if(this.g&&!this.h)o="/"+o;else{var d=e.h.lastIndexOf("/");d!=-1&&(o=e.h.slice(0,d+1)+o)}if(d=o,d==".."||d==".")o="";else if(d.indexOf("./")!=-1||d.indexOf("/.")!=-1){o=d.lastIndexOf("/",0)==0,d=d.split("/");const v=[];for(let b=0;b<d.length;){const C=d[b++];C=="."?o&&b==d.length&&v.push(""):C==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),o&&b==d.length&&v.push("")):(v.push(C),o=!0)}o=v.join("/")}else o=d}return r?e.h=o:r=t.i.toString()!=="",r?ke(e,$n(t.i)):r=!!t.m,r&&(e.m=t.m),e};function W(t){return new Z(t)}function Bt(t,e,r){t.j=r?Nt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jt(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function ke(t,e,r){e instanceof Ht?(t.i=e,Tr(t.i,t.l)):(r||(e=Lt(e,Cr)),t.i=new Ht(e,t.l))}function D(t,e,r){t.i.set(e,r)}function Qt(t){return D(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Nt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lt(t,e,r){return typeof t=="string"?(t=encodeURI(t).replace(e,Er),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Er(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var jn=/[#\/\?@]/g,Sr=/[#\?:]/g,Ir=/[#\?]/g,Cr=/[#\?@]/g,Ar=/#/g;function Ht(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ht(t){t.g||(t.g=new Map,t.h=0,t.i&&br(t.i,function(e,r){t.add(decodeURIComponent(e.replace(/\+/g," ")),r)}))}n=Ht.prototype,n.add=function(t,e){ht(this),this.i=null,t=bt(this,t);let r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(e),this.h+=1,this};function Nn(t,e){ht(t),e=bt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ln(t,e){return ht(t),e=bt(t,e),t.g.has(e)}n.forEach=function(t,e){ht(this),this.g.forEach(function(r,o){r.forEach(function(d){t.call(e,d,o,this)},this)},this)};function Hn(t,e){ht(t);let r=[];if(typeof e=="string")Ln(t,e)&&(r=r.concat(t.g.get(bt(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)r=r.concat(t[e]);return r}n.set=function(t,e){return ht(this),this.i=null,t=bt(this,t),Ln(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},n.get=function(t,e){return t?(t=Hn(this,t),t.length>0?String(t[0]):e):e};function Fn(t,e,r){Nn(t,e),r.length>0&&(t.i=null,t.g.set(bt(t,e),z(r)),t.h+=r.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let o=0;o<e.length;o++){var r=e[o];const d=Mt(r);r=Hn(this,r);for(let v=0;v<r.length;v++){let b=d;r[v]!==""&&(b+="="+Mt(r[v])),t.push(b)}}return this.i=t.join("&")};function $n(t){const e=new Ht;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function bt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Tr(t,e){e&&!t.j&&(ht(t),t.i=null,t.g.forEach(function(r,o){const d=o.toLowerCase();o!=d&&(Nn(this,o),Fn(this,d,r))},t)),t.j=e}function _r(t,e){const r=new Pt;if(y.Image){const o=new Image;o.onload=M(Q,r,"TestLoadImage: loaded",!0,e,o),o.onerror=M(Q,r,"TestLoadImage: error",!1,e,o),o.onabort=M(Q,r,"TestLoadImage: abort",!1,e,o),o.ontimeout=M(Q,r,"TestLoadImage: timeout",!1,e,o),y.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else e(!1)}function Dr(t,e){const r=new Pt,o=new AbortController,d=setTimeout(()=>{o.abort(),Q(r,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:o.signal}).then(v=>{clearTimeout(d),v.ok?Q(r,"TestPingServer: ok",!0,e):Q(r,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(d),Q(r,"TestPingServer: error",!1,e)})}function Q(t,e,r,o,d){try{d&&(d.onload=null,d.onerror=null,d.onabort=null,d.ontimeout=null),o(r)}catch{}}function Or(){this.g=new ur}function Pe(t){this.i=t.Sb||null,this.h=t.ab||!1}A(Pe,yn),Pe.prototype.g=function(){return new te(this.i,this.h)};function te(t,e){x.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}A(te,x),n=te.prototype,n.open=function(t,e){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,$t(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||y).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ft(this)),this.readyState=0},n.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$t(this)),this.g&&(this.readyState=3,$t(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Un(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Un(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}n.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ft(this):$t(this),this.readyState==3&&Un(this)}},n.Oa=function(t){this.g&&(this.response=this.responseText=t,Ft(this))},n.Na=function(t){this.g&&(this.response=t,Ft(this))},n.ga=function(){this.g&&Ft(this)};function Ft(t){t.readyState=4,t.l=null,t.j=null,t.B=null,$t(t)}n.setRequestHeader=function(t,e){this.A.append(t,e)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var r=e.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=e.next();return t.join(`\r
`)};function $t(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(te.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Vn(t){let e="";return qt(t,function(r,o){e+=o,e+=":",e+=r,e+=`\r
`}),e}function Me(t,e,r){t:{for(o in r){var o=!1;break t}o=!0}o||(r=Vn(r),typeof t=="string"?r!=null&&Mt(r):D(t,e,r))}function O(t){x.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}A(O,x);var Rr=/^https?$/i,kr=["POST","PUT"];n=O.prototype,n.Fa=function(t){this.H=t},n.ea=function(t,e,r,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Cn.g(),this.g.onreadystatechange=U(E(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(v){zn(this,v);return}if(t=r||"",r=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var d in o)r.set(d,o[d]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const v of o.keys())r.set(v,o.get(v));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(r.keys()).find(v=>v.toLowerCase()=="content-type"),d=y.FormData&&t instanceof y.FormData,!(Array.prototype.indexOf.call(kr,e,void 0)>=0)||o||d||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,b]of r)this.g.setRequestHeader(v,b);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(v){zn(this,v)}};function zn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,Wn(t),ee(t)}function Wn(t){t.A||(t.A=!0,B(t,"complete"),B(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,B(this,"complete"),B(this,"abort"),ee(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ee(this,!0)),O.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Gn(this):this.Xa())},n.Xa=function(){Gn(this)};function Gn(t){if(t.h&&typeof w<"u"){if(t.v&&tt(t)==4)setTimeout(t.Ca.bind(t),0);else if(B(t,"readystatechange"),tt(t)==4){t.h=!1;try{const v=t.ca();t:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var r;if(!(r=e)){var o;if(o=v===0){let b=String(t.D).match(Bn)[1]||null;!b&&y.self&&y.self.location&&(b=y.self.location.protocol.slice(0,-1)),o=!Rr.test(b?b.toLowerCase():"")}r=o}if(r)B(t,"complete"),B(t,"success");else{t.o=6;try{var d=tt(t)>2?t.g.statusText:""}catch{d=""}t.l=d+" ["+t.ca()+"]",Wn(t)}}finally{ee(t)}}}}function ee(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||B(t,"ready");try{r.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tt(t){return t.g?t.g.readyState:0}n.ca=function(){try{return tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cr(e)}};function qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Pr(t){const e={};t=(t.g&&tt(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(l(t[o]))continue;var r=mr(t[o]);const d=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const v=e[d]||[];e[d]=v,v.push(r)}rr(e,function(o){return o.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ut(t,e,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||e}function Xn(t){this.za=0,this.i=[],this.j=new Pt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ut("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ut("baseRetryDelayMs",5e3,t),this.Za=Ut("retryDelaySeedMs",1e4,t),this.Ta=Ut("forwardChannelMaxRetries",2,t),this.va=Ut("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Rn(t&&t.concurrentRequestLimit),this.Ba=new Or,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xn.prototype,n.ka=8,n.I=1,n.connect=function(t,e,r,o){j(0),this.W=t,this.H=e||{},r&&o!==void 0&&(this.H.OSID=r,this.H.OAID=o),this.F=this.X,this.J=ii(this,null,this.W),ie(this)};function xe(t){if(Jn(t),t.I==3){var e=t.V++,r=W(t.J);if(D(r,"SID",t.M),D(r,"RID",e),D(r,"TYPE","terminate"),Vt(t,r),e=new Y(t,t.j,e),e.M=2,e.A=Qt(W(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(e.A.toString(),"")}catch{}!r&&y.Image&&(new Image().src=e.A,r=!0),r||(e.g=ri(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Zt(e)}ni(t)}function ne(t){t.g&&(je(t),t.g.cancel(),t.g=null)}function Jn(t){ne(t),t.v&&(y.clearTimeout(t.v),t.v=null),re(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&y.clearTimeout(t.m),t.m=null)}function ie(t){if(!kn(t.h)&&!t.m){t.m=!0;var e=t.Ea;K||h(),V||(K(),V=!0),p.add(e,t),t.D=0}}function Mr(t,e){return Pn(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=kt(E(t.Ea,t,e),ei(t,t.D)),t.D++,!0)}n.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const d=new Y(this,this.j,t);let v=this.o;if(this.U&&(v?(v=an(v),ln(v,this.U)):v=this.U),this.u!==null||this.R||(d.J=v,v=null),this.S)t:{for(var e=0,r=0;r<this.i.length;r++){e:{var o=this.i[r];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(e+=o,e>4096){e=r;break t}if(e===4096||r===this.i.length-1){e=r+1;break t}}e=1e3}else e=1e3;e=Yn(this,d,e),r=W(this.J),D(r,"RID",t),D(r,"CVER",22),this.G&&D(r,"X-HTTP-Session-Id",this.G),Vt(this,r),v&&(this.R?e="headers="+Mt(Vn(v))+"&"+e:this.u&&Me(r,this.u,v)),Re(this.h,d),this.Ra&&D(r,"TYPE","init"),this.S?(D(r,"$req",e),D(r,"SID","null"),d.U=!0,Te(d,r,null)):Te(d,r,e),this.I=2}}else this.I==3&&(t?Kn(this,t):this.i.length==0||kn(this.h)||Kn(this))};function Kn(t,e){var r;e?r=e.l:r=t.V++;const o=W(t.J);D(o,"SID",t.M),D(o,"RID",r),D(o,"AID",t.K),Vt(t,o),t.u&&t.o&&Me(o,t.u,t.o),r=new Y(t,t.j,r,t.D+1),t.u===null&&(r.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Yn(t,r,1e3),r.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Re(t.h,r),Te(r,o,e)}function Vt(t,e){t.H&&qt(t.H,function(r,o){D(e,o,r)}),t.l&&qt({},function(r,o){D(e,o,r)})}function Yn(t,e,r){r=Math.min(t.i.length,r);const o=t.l?E(t.l.Ka,t.l,t):null;t:{var d=t.i;let C=-1;for(;;){const k=["count="+r];C==-1?r>0?(C=d[0].g,k.push("ofs="+C)):C=0:k.push("ofs="+C);let T=!0;for(let P=0;P<r;P++){var v=d[P].g;const G=d[P].map;if(v-=C,v<0)C=Math.max(0,d[P].g-100),T=!1;else try{v="req"+v+"_"||"";try{var b=G instanceof Map?G:Object.entries(G);for(const[ct,et]of b){let nt=et;S(et)&&(nt=Ee(et)),k.push(v+ct+"="+encodeURIComponent(nt))}}catch(ct){throw k.push(v+"type="+encodeURIComponent("_badmap")),ct}}catch{o&&o(G)}}if(T){b=k.join("&");break t}}b=void 0}return t=t.i.splice(0,r),e.G=t,b}function Zn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;K||h(),V||(K(),V=!0),p.add(e,t),t.A=0}}function Be(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=kt(E(t.Da,t),ei(t,t.A)),t.A++,!0)}n.Da=function(){if(this.v=null,Qn(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=kt(E(this.Wa,this),t)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,j(10),ne(this),Qn(this))};function je(t){t.B!=null&&(y.clearTimeout(t.B),t.B=null)}function Qn(t){t.g=new Y(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var e=W(t.na);D(e,"RID","rpc"),D(e,"SID",t.M),D(e,"AID",t.K),D(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&D(e,"TO",t.ia),D(e,"TYPE","xmlhttp"),Vt(t,e),t.u&&t.o&&Me(e,t.u,t.o),t.O&&(t.g.H=t.O);var r=t.g;t=t.ba,r.M=1,r.A=Qt(W(e)),r.u=null,r.R=!0,_n(r,t)}n.Va=function(){this.C!=null&&(this.C=null,ne(this),Be(this),j(19))};function re(t){t.C!=null&&(y.clearTimeout(t.C),t.C=null)}function ti(t,e){var r=null;if(t.g==e){re(t),je(t),t.g=null;var o=2}else if(Oe(t.h,e))r=e.G,Mn(t.h,e),o=1;else return;if(t.I!=0){if(e.o)if(o==1){r=e.u?e.u.length:0,e=Date.now()-e.F;var d=t.D;o=Kt(),B(o,new Sn(o,r)),ie(t)}else Zn(t);else if(d=e.m,d==3||d==0&&e.X>0||!(o==1&&Mr(t,e)||o==2&&Be(t)))switch(r&&r.length>0&&(e=t.h,e.i=e.i.concat(r)),d){case 1:lt(t,5);break;case 4:lt(t,10);break;case 3:lt(t,6);break;default:lt(t,2)}}}function ei(t,e){let r=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(r*=2),r*e}function lt(t,e){if(t.j.info("Error code "+e),e==2){var r=E(t.bb,t),o=t.Ua;const d=!o;o=new Z(o||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Bt(o,"https"),Qt(o),d?_r(o.toString(),r):Dr(o.toString(),r)}else j(2);t.I=0,t.l&&t.l.pa(e),ni(t),Jn(t)}n.bb=function(t){t?(this.j.info("Successfully pinged google.com"),j(2)):(this.j.info("Failed to ping google.com"),j(1))};function ni(t){if(t.I=0,t.ja=[],t.l){const e=xn(t.h);(e.length!=0||t.i.length!=0)&&(N(t.ja,e),N(t.ja,t.i),t.h.i.length=0,z(t.i),t.i.length=0),t.l.oa()}}function ii(t,e,r){var o=r instanceof Z?W(r):new Z(r);if(o.g!="")e&&(o.g=e+"."+o.g),jt(o,o.u);else{var d=y.location;o=d.protocol,e=e?e+"."+d.hostname:d.hostname,d=+d.port;const v=new Z(null);o&&Bt(v,o),e&&(v.g=e),d&&jt(v,d),r&&(v.h=r),o=v}return r=t.G,e=t.wa,r&&e&&D(o,r,e),D(o,"VER",t.ka),Vt(t,o),o}function ri(t,e,r){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new O(new Pe({ab:r})):new O(t.ma),e.Fa(t.L),e}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function si(){}n=si.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function se(){}se.prototype.g=function(t,e){return new $(t,e)};function $(t,e){x.call(this),this.g=new Xn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!l(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!l(e)&&(this.g.G=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Et(this)}A($,x),$.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$.prototype.close=function(){xe(this.g)},$.prototype.o=function(t){var e=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.v&&(r={},r.__data__=Ee(t),t=r);e.i.push(new wr(e.Ya++,t)),e.I==3&&ie(e)},$.prototype.N=function(){this.g.l=null,delete this.j,xe(this.g),delete this.g,$.Z.N.call(this)};function oi(t){Se.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const r in e){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}A(oi,Se);function ai(){Ie.call(this),this.status=1}A(ai,Ie);function Et(t){this.g=t}A(Et,si),Et.prototype.ra=function(){B(this.g,"a")},Et.prototype.qa=function(t){B(this.g,new oi(t))},Et.prototype.pa=function(t){B(this.g,new ai)},Et.prototype.oa=function(){B(this.g,"b")},se.prototype.createWebChannel=se.prototype.g,$.prototype.send=$.prototype.o,$.prototype.open=$.prototype.m,$.prototype.close=$.prototype.close,To=function(){return new se},Ao=function(){return Kt()},Co=ot,Io={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yt.NO_ERROR=0,Yt.TIMEOUT=8,Yt.HTTP_ERROR=6,So=Yt,In.COMPLETE="complete",Eo=In,vn.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",x.prototype.listen=x.prototype.J,bo=vn,O.prototype.listenOnce=O.prototype.K,O.prototype.getLastError=O.prototype.Ha,O.prototype.getLastErrorCode=O.prototype.ya,O.prototype.getStatus=O.prototype.ca,O.prototype.getResponseJson=O.prototype.La,O.prototype.getResponseText=O.prototype.la,O.prototype.send=O.prototype.ea,O.prototype.setWithCredentials=O.prototype.Fa,wo=O}).apply(typeof ae<"u"?ae:typeof self<"u"?self:typeof window<"u"?window:{});const Ni="@firebase/installations",nn="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=1e4,Hi=`w:${nn}`,Fi="FIS_v2",_o="https://firebaseinstallations.googleapis.com/v1",Do=3600*1e3,Oo="installations",Ro="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pt=new Ze(Oo,Ro,ko);function $i(n){return n instanceof dt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui({projectId:n}){return`${_o}/projects/${n}/installations`}function Vi(n){return{token:n.token,requestStatus:2,expiresIn:Mo(n.expiresIn),creationTime:Date.now()}}async function zi(n,i){const a=(await i.json()).error;return pt.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Wi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Po(n,{refreshToken:i}){const s=Wi(n);return s.append("Authorization",xo(i)),s}async function Gi(n){const i=await n();return i.status>=500&&i.status<600?n():i}function Mo(n){return Number(n.replace("s","000"))}function xo(n){return`${Fi} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo({appConfig:n,heartbeatServiceProvider:i},{fid:s}){const a=Ui(n),f=Wi(n),w=i.getImmediate({optional:!0});if(w){const E=await w.getHeartbeatsHeader();E&&f.append("x-firebase-client",E)}const y={fid:s,authVersion:Fi,appId:n.appId,sdkVersion:Hi},S={method:"POST",headers:f,body:JSON.stringify(y)},I=await Gi(()=>fetch(a,S));if(I.ok){const E=await I.json();return{fid:E.fid||s,registrationStatus:2,refreshToken:E.refreshToken,authToken:Vi(E.authToken)}}else throw await zi("Create Installation",I)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){return new Promise(i=>{setTimeout(i,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=/^[cdef][\w-]{21}$/,Ke="";function Lo(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=Ho(n);return No.test(s)?s:Ke}catch{return Ke}}function Ho(n){return jo(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Map;function Xi(n,i){const s=_t(n);Ji(s,i),Uo(s,i)}function Fo(n,i){Ki();const s=_t(n);let a=Tt.get(s);a||(a=new Set,Tt.set(s,a)),a.add(i)}function $o(n,i){const s=_t(n),a=Tt.get(s);a&&(a.delete(i),a.size===0&&Tt.delete(s),Yi())}function Ji(n,i){const s=Tt.get(n);if(s)for(const a of s)a(i)}function Uo(n,i){const s=Ki();s&&s.postMessage({key:n,fid:i}),Yi()}let ft=null;function Ki(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=n=>{Ji(n.data.key,n.data.fid)}),ft}function Yi(){Tt.size===0&&ft&&(ft.close(),ft=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="firebase-installations-database",zo=1,gt="firebase-installations-store";let Ve=null;function rn(){return Ve||(Ve=Ri(Vo,zo,{upgrade:(n,i)=>{switch(i){case 0:n.createObjectStore(gt)}}})),Ve}async function ce(n,i){const s=_t(n),f=(await rn()).transaction(gt,"readwrite"),w=f.objectStore(gt),y=await w.get(s);return await w.put(i,s),await f.done,(!y||y.fid!==i.fid)&&Xi(n,i.fid),i}async function Zi(n){const i=_t(n),a=(await rn()).transaction(gt,"readwrite");await a.objectStore(gt).delete(i),await a.done}async function pe(n,i){const s=_t(n),f=(await rn()).transaction(gt,"readwrite"),w=f.objectStore(gt),y=await w.get(s),S=i(y);return S===void 0?await w.delete(s):await w.put(S,s),await f.done,S&&(!y||y.fid!==S.fid)&&Xi(n,S.fid),S}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n){let i;const s=await pe(n.appConfig,a=>{const f=Wo(a),w=Go(n,f);return i=w.registrationPromise,w.installationEntry});return s.fid===Ke?{installationEntry:await i}:{installationEntry:s,registrationPromise:i}}function Wo(n){const i=n||{fid:Lo(),registrationStatus:0};return Qi(i)}function Go(n,i){if(i.registrationStatus===0){if(!navigator.onLine){const f=Promise.reject(pt.create("app-offline"));return{installationEntry:i,registrationPromise:f}}const s={fid:i.fid,registrationStatus:1,registrationTime:Date.now()},a=qo(n,s);return{installationEntry:s,registrationPromise:a}}else return i.registrationStatus===1?{installationEntry:i,registrationPromise:Xo(n)}:{installationEntry:i}}async function qo(n,i){try{const s=await Bo(n,i);return ce(n.appConfig,s)}catch(s){throw $i(s)&&s.customData.serverCode===409?await Zi(n.appConfig):await ce(n.appConfig,{fid:i.fid,registrationStatus:0}),s}}async function Xo(n){let i=await vi(n.appConfig);for(;i.registrationStatus===1;)await qi(100),i=await vi(n.appConfig);if(i.registrationStatus===0){const{installationEntry:s,registrationPromise:a}=await sn(n);return a||s}return i}function vi(n){return pe(n,i=>{if(!i)throw pt.create("installation-not-found");return Qi(i)})}function Qi(n){return Jo(n)?{fid:n.fid,registrationStatus:0}:n}function Jo(n){return n.registrationStatus===1&&n.registrationTime+Li<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko({appConfig:n,heartbeatServiceProvider:i},s){const a=Yo(n,s),f=Po(n,s),w=i.getImmediate({optional:!0});if(w){const E=await w.getHeartbeatsHeader();E&&f.append("x-firebase-client",E)}const y={installation:{sdkVersion:Hi,appId:n.appId}},S={method:"POST",headers:f,body:JSON.stringify(y)},I=await Gi(()=>fetch(a,S));if(I.ok){const E=await I.json();return Vi(E)}else throw await zi("Generate Auth Token",I)}function Yo(n,{fid:i}){return`${Ui(n)}/${i}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(n,i=!1){let s;const a=await pe(n.appConfig,w=>{if(!tr(w))throw pt.create("not-registered");const y=w.authToken;if(!i&&ta(y))return w;if(y.requestStatus===1)return s=Zo(n,i),w;{if(!navigator.onLine)throw pt.create("app-offline");const S=na(w);return s=Qo(n,S),S}});return s?await s:a.authToken}async function Zo(n,i){let s=await wi(n.appConfig);for(;s.authToken.requestStatus===1;)await qi(100),s=await wi(n.appConfig);const a=s.authToken;return a.requestStatus===0?on(n,i):a}function wi(n){return pe(n,i=>{if(!tr(i))throw pt.create("not-registered");const s=i.authToken;return ia(s)?{...i,authToken:{requestStatus:0}}:i})}async function Qo(n,i){try{const s=await Ko(n,i),a={...i,authToken:s};return await ce(n.appConfig,a),s}catch(s){if($i(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Zi(n.appConfig);else{const a={...i,authToken:{requestStatus:0}};await ce(n.appConfig,a)}throw s}}function tr(n){return n!==void 0&&n.registrationStatus===2}function ta(n){return n.requestStatus===2&&!ea(n)}function ea(n){const i=Date.now();return i<n.creationTime||n.creationTime+n.expiresIn<i+Do}function na(n){const i={requestStatus:1,requestTime:Date.now()};return{...n,authToken:i}}function ia(n){return n.requestStatus===1&&n.requestTime+Li<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(n){const i=n,{installationEntry:s,registrationPromise:a}=await sn(i);return a?a.catch(console.error):on(i).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(n,i=!1){const s=n;return await oa(s),(await on(s,i)).token}async function oa(n){const{registrationPromise:i}=await sn(n);i&&await i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,i){const{appConfig:s}=n;return Fo(s,i),()=>{$o(s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(n){if(!n||!n.options)throw ze("App Configuration");if(!n.name)throw ze("App Name");const i=["projectId","apiKey","appId"];for(const s of i)if(!n.options[s])throw ze(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ze(n){return pt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="installations",ha="installations-internal",la=n=>{const i=n.getProvider("app").getImmediate(),s=aa(i),a=fe(i,"heartbeat");return{app:i,appConfig:s,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ca=n=>{const i=n.getProvider("app").getImmediate(),s=fe(i,er).getImmediate();return{getId:()=>ra(s),getToken:f=>sa(s,f)}};function ua(){At(new St(er,la,"PUBLIC")),At(new St(ha,ca,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ua();it(Ni,nn);it(Ni,nn,"esm2020");export{Ur as A,wa as B,St as C,Ia as D,Co as E,dt as F,Si as G,Ze as H,yo as I,da as J,va as K,is as L,vo as M,Vr as N,ya as O,ma as P,_a as Q,Gr as R,Io as S,Sa as T,Ri as U,ka as V,bo as W,wo as X,Ma as Y,Pa as Z,fe as _,_ as a,to as b,ga as c,We as d,fa as e,qs as f,Da as g,Lr as h,Oa as i,Wr as j,Ii as k,ba as l,Ao as m,Eo as n,So as o,Ra as p,To as q,Ea as r,Xs as s,At as t,it as u,Zs as v,Aa as w,Ta as x,Ca as y,pa as z};
