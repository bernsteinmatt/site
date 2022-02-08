/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojlogger","ojs/ojhtmlutils","ojs/ojcspexpressionevaluator","ojs/ojcustomelement-utils","preact","ojs/ojcontext","ojs/ojdataproviderhandler","ojs/ojbindpropagation","ojs/ojconfig"],function(e,t,r,s,o,a,n,i,l,c){"use strict";s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;class u extends a.Component{constructor(e){super(e),this._resolveConfig=e=>{e.then(t=>{e===this.props.config&&this.setState({view:this._getFragment(t.view),data:t.data})})},this._getFragment=e=>{const t=new DocumentFragment;return e.forEach(e=>{t.appendChild(e.cloneNode(this))}),t},this.state={view:null,data:null}}componentDidMount(){this._resolveConfig(this.props.config)}componentDidUpdate(e,t){this.props.config!==e.config&&this._resolveConfig(this.props.config)}render(){return a.h(a.Fragment,null,this.state.view&&this.props.executeFragment?this.props.executeFragment(null,this.state.view,this.state.data,this.forceUpdate.bind(this),this.props.bindingProvider):null)}}class p extends a.Component{constructor(e){super(e),this._addBusyState=e=>n.getContext(this.props.componentElement).getBusyContext().addBusyState({description:e}),this.BindForEachWithDP=i.withDataProvider(d,"data")}render(e){return Array.isArray(e.data)?a.h(h,{data:e.data,itemRenderer:e.itemRenderer}):a.h(this.BindForEachWithDP,{addBusyState:this._addBusyState,data:e.data,itemRenderer:e.itemRenderer})}}class d extends a.Component{render(e){const t=e.data.map(e=>e.data);return a.h(h,{data:t,itemRenderer:e.itemRenderer})}}class h extends a.Component{render(){const e=this.props.data;return a.h(a.Fragment,null,e?e.map((e,t)=>this.props.itemRenderer({data:e,index:t,observableIndex:()=>t})):[])}}const _=Symbol(),m=Symbol(),v=Symbol(),g=Symbol(),y=function(e){return e},b=[{type:1,name:"$context"}];class f{constructor(){var e;this._templateAstCache=new WeakMap,this._cspEvaluator=null!==(e=c.getExpressionEvaluator())&&void 0!==e?e:new s}static cleanupTemplateCache(e){e&&e._cachedRows&&(e._cachedRows.forEach(e=>e.dispose()),e._cachedRows=[])}executeFragment(e,t,r,s,a){var n;let i=a;return i||(i=e?null===(n=o.CustomElementUtils.getElementState(e))||void 0===n?void 0:n.getBindingProvider():null),this._execute({[_]:i,[m]:e,[g]:r},t,r,s)}execute(e,t,r,s,o){const a=t.getAttribute("data-oj-as"),n=this._getContext(s,e,t,r,null,a);return this._execute({[_]:s,[m]:e,[g]:n},t,n,o)}_execute(e,t,r,s){const o=this._getAstViaCache(e,t),n=e[_];if(n){t._cachedRows||Object.defineProperties(t,{_cachedRows:{writable:!0,value:[]}});const e=n.__KoComputed(()=>{if(n.__KoIsInitial())return this._cspEvaluator.evaluate(o,{$context:r,$h:a.h,BindDom:u});f.cleanupTemplateCache(t),s()});return t._cachedRows.push(e),e()}return this._cspEvaluator.evaluate(o,{$context:r,$h:a.h,BindDom:u})}_getContext(e,r,s,o,a,n){if(e){let i=e.__ContextFor(s);return i||(t.info(`Binding context not found when processing template for element with id: ${r.id}. Using binding context for element instead.`),i=e.__ContextFor(r)),e.__ExtendBindingContext(i,o,a,n,r)}const i={$current:o};return n&&(i[n]=o),i}_getAstViaCache(e,t){let s=this._templateAstCache.get(t);if(!s){if(11===t.nodeType)s=this._createAst(e,Array.from(t.childNodes));else{const o=r.getTemplateContent(t)[0];s=this._createAst(e,Array.from(o.childNodes))}this._templateAstCache.set(t,s)}return s}_createAst(e,t){const r={type:9,elements:[]};return r.elements=Array.prototype.reduce.call(t,(t,r)=>{const s=this._processSpecialNodes(e,r);return s?t.push(s):3===r.nodeType?t.push({type:3,value:r.nodeValue}):1===r.nodeType&&t.push(this._createElementNode(e,r)),t},[]),r}_processSpecialNodes(e,t){if(1===t.nodeType)switch(t.tagName.toLowerCase()){case"oj-bind-text":return this._createExpressionNode(e,t.getAttribute("value"));case"oj-bind-if":return this._createIfExpressionNode(e,t);case"oj-bind-for-each":return this._createBindForEachExpressionNode(e,t);case"oj-bind-dom":return this._createBindDomExpressionNode(e,t);case"oj-bind-template-slot":return this._createBindTemplateNode(e,t);case"oj-defer":return this._createDeferNode(e,t);case"template":return this._createTemplateWithRenderCallback(e,t)}return null}_createBindTemplateNode(e,t){const r={type:10,properties:[]},s=t.getAttribute("name")||"";r.properties.push(this._getAttribute(e,"name",s));const o=t.getAttribute("data");o&&r.properties.push(this._getAttribute(e,"data",o));const n=t.getAttribute("as");return this._createCallNodeWithContext((r,s)=>{const o=s.data,i=s.name,l=e[g].__oj_slots[i];let c=l&&l[l.length-1],p=!1;if(!c)for(let e in t.childNodes)if("TEMPLATE"===t.childNodes[e].nodeName){c=t.childNodes[e],p=!0;break}if(c){const t=this._getAstViaCache(e,c),r=c.getAttribute("data-oj-as"),s=this._getContext(e[_],p?e[m]:e[g].__oj_composite,c,o,p?n:null,r);return this._cspEvaluator.evaluate(t,{$context:s,$h:a.h,BindDom:u})}},[r])}_createTemplateWithRenderCallback(e,t){const r=t.getAttribute("data-oj-as"),s=this._getAstViaCache.bind(this),o=this._cspEvaluator,n={key:"render",value:{type:3,value:n=>{const i=Object.assign({},e[g],{$current:n});r&&(i[r]=n);const l={[g]:i,[_]:e[_],[m]:e[m],[v]:e[v]},c=s(l,t);return o.evaluate(c,{$context:i,$h:a.h})}}};let i=this._getElementProps(e,t);return i.push(n),this._createHFunctionCallNode("template",[{type:10,properties:i}])}_createDeferContent(e,t,r){const s={view:t,data:r},o={config:Promise.resolve(s),bindingProvider:e[_],executeFragment:this.executeFragment.bind(this)};return a.h(u,o)}_createDeferNode(e,t){let r,s=this._createDeferContent(e,[],{});const o=[{key:"ref",value:{type:3,value:e=>{e?(r=e,a.render(s,r)):a.render(null,r)}}},{key:"_activateSubtree",value:this._createCallNodeWithContext(r=>o=>{s=this._createDeferContent(e,Array.from(t.childNodes),r),a.render(s,o)})}];let n=this._getElementProps(e,t);return n=n.concat(o),this._createHFunctionCallNode("oj-defer",[{type:10,properties:n}])}_createIfExpressionNode(e,t){if(!t.hasAttribute("test"))throw new Error("Missing the retuired 'test' attribute on <oj-bind-if>");return{type:5,operator:"...",argument:{type:8,test:this._createExpressionNode(e,t.getAttribute("test")),consequent:this._createAst(e,Array.from(t.childNodes)),alternate:{type:3,value:[]}}}}_createBindForEachExpressionNode(e,t){const r=t.getElementsByTagName("template")[0];if(!r)throw new Error("Template not found: oj-bind-for-each requires a single template element as its direct child");return this._createComponentNode(e,t,p,[{key:"itemRenderer",value:this._createNestedTemplateRendererNode(e,r)},{key:"componentElement",value:{type:3,value:e[m]}}])}_createNestedTemplateRendererNode(e,t){const r=t.getAttribute("data-oj-as"),s={[_]:e[_],[g]:e[g],[m]:e[m],[v]:(e,t)=>"function"!=typeof t||"$current.observableIndex"!==e&&e!==r+".observableIndex"?t:t()},o=this._getAstViaCache(s,t);return this._createCallNodeWithContext(e=>t=>{const s={$current:t};null!=r&&(s[r]=t);const n=Object.assign({},e,s);return this._cspEvaluator.evaluate(o,{$context:n,$h:a.h})})}_createElementNode(e,t){var r=this._getElementProps(e,t);const s=t.tagName,a=s.toLowerCase(),n=o.CustomElementUtils.getPropertiesForElementTag(s);return this._createHFunctionCallNode(a,[this._createPossiblyProvidedAndConsumedProperties(a,e,n,r),this._createAst(e,Array.from(t.childNodes))])}_createPossiblyProvidedAndConsumedProperties(e,t,r,s){const a={type:10,properties:s},n=l.getPropagationMetadataViaCache(e,r);if(!n)return a;const i=new Set;s.reduce((e,t)=>e.add(t.key),i);const c=[];for(const[e,r]of n){const s=r[1];if(s&&!i.has(e)&&!i.has(o.AttributeUtils.propertyNameToAttribute(e).toUpperCase())){const r=this._getUnwrapObservable(t);c.push({key:e,value:this._createCallNodeWithContext(e=>{var t,o;return r(null===(o=null===(t=r(e))||void 0===t?void 0:t.$provided)||void 0===o?void 0:o[s.name])})})}}const u=0===c.length?a:{type:10,properties:a.properties.concat(c)};return this._createCallNodeWithContext((t,s)=>{let a,i={};for(const[t,[l]]of n)l&&l.forEach(n=>{var l;let c,u=!0;if(s.hasOwnProperty(t))c=s[t];else{const a=o.AttributeUtils.propertyNameToAttribute(t),n=a.toUpperCase();if(s.hasOwnProperty(n)){c=s[n];const i=null===(l=null==r?void 0:r[t])||void 0===l?void 0:l.type;i&&null!=c&&(c=o.AttributeUtils.parseAttributeValue(e,a,c,i))}else u=!1}if(u){const e=n.transform;c=e&&e.hasOwnProperty(c)?e[c]:c}else n.hasOwnProperty("default")&&(c=n.default,u=!0);u&&(a=!0,i[n.name]=c)});if(a){const e=t.$provided;void 0!==e&&(i=Object.assign({},e,i)),t.$provided=i}return s},[u])}_createBindDomExpressionNode(e,t){if(!t.hasAttribute("config"))throw new Error("Missing the required 'config' attribute on <oj-bind-dom>");const r=t.attributes.config.value;return this._createComponentNode(e,t,u,[this._createPropertyNode(e,"config",r,e=>Promise.resolve(e)),{key:"bindingProvider",value:{type:3,value:e[_]}},{key:"executeFragment",value:{type:3,value:this.executeFragment.bind(this)}}])}_createComponentNode(e,t,r,s){let o=this._getElementProps(e,t);return o=s?o.concat(s):o,this._createHFunctionCallNode(r,[{type:10,properties:o}])}_createPropertyNode(e,t,r,s){return{key:t,value:this._createExpressionNode(e,r,s)}}_postprocessClassNameValue(e){let t;return t=Array.isArray(e)?e.join(" "):"string"!=typeof e?Object.keys(e).reduce((t,r)=>(e[r]&&t.push(r),t),[]).join(" "):e,t}_getElementProps(e,t){let r;const s=[],a=[],n=new Map,i=new Map,l=Array.prototype.reduce.call(t.attributes,(t,l)=>{let c=l.name;const u=l.value;if(c.startsWith(":")){c=c.substring(1);const a=c.split(".");2===a.length&&"style"===a[0]?s.push({k:a[1],v:u}):"style"===c?r=u:"class"===c?t.push(this._createPropertyNode(e,"className",u,this._postprocessClassNameValue)):(c=o.AttributeUtils.isGlobalOrData(c)?o.AttributeUtils.getGlobalPropForAttr(c):o.AttributeUtils.attributeToPropertyName(c),t.push(this._createPropertyNode(e,c,u)))}else{const r=o.AttributeUtils.getExpressionInfo(u);if(o.AttributeUtils.isEventListenerAttr(c))c=o.AttributeUtils.eventAttrToPreactPropertyName(c),i.set(c,u);else if(o.AttributeUtils.isGlobalOrData(c))t.push(this._createPropertyNode(e,o.AttributeUtils.getGlobalPropForAttr(c),u));else if(r.expr){const s=o.AttributeUtils.attributeToPropertyName(c);if(s.indexOf(".")>=0?a.push({subProps:s,expr:r.expr}):t.push({key:s,value:this._createExpressionEvaluator(e,r.expr)}),!r.downstreamOnly){let e=s.split(".");const t=e.shift();let o=n.get(t);if(o){o=[...o,{expr:r.expr,subProps:e}]}else o=[{expr:r.expr,subProps:e}];n.set(t,o)}}else t.push({key:c.toUpperCase(),value:{type:3,value:u}})}return t},[]);if(null!=r){if(s.length>0)throw new Error("Binding the entire style attribute as well as the individual style properties on the same element is not supported");l.push(this._createPropertyNode(e,"style",r))}else s.length>0&&l.push({key:"style",value:{type:10,properties:s.map(t=>this._createPropertyNode(e,o.AttributeUtils.attributeToPropertyName(t.k),t.v))}});return a.length>0&&this._createRefPropertyNodeForNestedProps(e,a,l),n.forEach((t,r)=>{var s;const a=`on${r}Changed`,n=i.get(a);n&&i.delete(a),l.push(this._createWritebackPropertyNode(e,a,t,null===(s=o.AttributeUtils.getExpressionInfo(n))||void 0===s?void 0:s.expr))}),i.forEach((e,t)=>{const r=o.AttributeUtils.getExpressionInfo(e);r.expr&&l.push(this._createEventListenerPropertyNode(t,r.expr))}),l}_createRefPropertyNodeForNestedProps(e,t,r){const s=e[_],o=[];r.push({key:"ref",value:this._createCallNodeWithContext(e=>{const r=[];return t.forEach((t,a)=>{let n=o[a];n||(n=this._cspEvaluator.createEvaluator(t.expr).evaluate,o.push(n));const i=n([e,e.$data]),l=s?s.__UnwrapObservable(i):i;r.push({[t.subProps]:l})}),e=>{if(e&&e.setProperties){const t=Object.assign({},...r);e.setProperties(t)}}})})}_createWritebackPropertyNode(e,t,r,s){const o=[];let a;return{key:t,value:this._createCallNodeWithContext(t=>n=>{r.forEach((r,s)=>{let a=n.detail.value;var i=r.subProps,l=r.expr;i.length>0&&"object"==typeof a&&(a=i.reduce((e,t)=>e[t],a));let c=o[s];c||(c=this._cspEvaluator.createEvaluator(l).evaluate,o.push(c));const u=c([t,t.$data]);if(e[_]&&e[_].__IsObservable(u))u(a);else{const e=this._getPropertyWriterExpression(l);if(null!==e){const r=this._cspEvaluator.createEvaluator(e).evaluate;this._getWriter(r([t.$data||{},t]))(a)}}}),s&&!a&&(a=this._cspEvaluator.createEvaluator(s).evaluate);const i=a?a([t,t.$data]):null;i&&i(n,t.$current||t.$data,t)})}}_createEventListenerPropertyNode(e,t){let r;return{key:e,value:this._createCallNodeWithContext(e=>s=>{r||(r=this._cspEvaluator.createEvaluator(t).evaluate);const o=r([e,e.$data]);o&&o(s,e.$current||e.$data,e)})}}_createExpressionNode(e,t,r){const s=o.AttributeUtils.getExpressionInfo(t);return s.expr?this._createExpressionEvaluator(e,s.expr,r):{type:3,value:t}}_createExpressionEvaluator(e,t,r){const s=this._cspEvaluator.createEvaluator(t).evaluate;return this._createCallNodeWithContext(o=>{const a=this._getUnwrapObservable(e),n=a(o);let i=a(s([n,n.$data]));return e[v]&&(i=e[v](t,i)),r?r(i):i})}_getUnwrapObservable(e){const t=e[_];return t?t.__UnwrapObservable:y}_createCallNodeWithContext(e,t){return{type:4,callee:{type:3,value:e},arguments:t?b.concat(t):b}}_createHFunctionCallNode(e,t){return{type:4,callee:{type:1,name:"$h"},arguments:[{type:3,value:e},...t]}}_getAttribute(e,t,r){const s=o.AttributeUtils.getExpressionInfo(r).expr;return{key:t,value:s?this._createExpressionEvaluator(e,s):{type:3,value:r}}}_getWriter(e){return e._ko_property_writers}_getPropertyWriterExpression(e){if(null==e||["true","false","null","undefined"].indexOf(e)>=0)return null;const t=(e=e.trim()).match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);if(null===t)return null;return`{_ko_property_writers: function(v){${t[1]?`Object(${t[1]})${t[2]}`:e}=v;}}`}}const x=new f,E=x.executeFragment.bind(x),N=x.execute.bind(x),C=f.cleanupTemplateCache;e.cleanupTemplateCache=C,e.execute=N,e.executeFragment=E,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojvcomponent-template.js.map