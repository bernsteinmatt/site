/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojtranslation","ojs/ojvcomponent","preact","ojs/ojdomutils"],function(e,t,o,l,s){"use strict";var c=function(e,t,o,l){var s,c=arguments.length,n=c<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,o):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,l);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(c<3?s(n):c>3?s(t,o,n):s(t,o))||n);return c>3&&n&&Object.defineProperty(t,o,n),n};e.Selector=class extends l.Component{constructor(e){super(e),this._handleFocusin=e=>{this.setState({focus:!0})},this._handleFocusout=e=>{this.setState({focus:!1})},this._checkboxListener=e=>{var t,o,l,s;const{selectedKeys:c,rowKey:n,selectionMode:r}=this.props;let a;null!=c&&(e.target.checked?"multiple"===r?a=c.add([n]):"all"===r?a=c.addAll():"single"!==r||c.has(n)||(a=c.clear().add([n])):a="all"===r?c.clear():c.delete([n]),null===(o=(t=this.props).onSelectedKeysChanged)||void 0===o||o.call(t,a),null===(s=(l=this.props).onIndeterminateChanged)||void 0===s||s.call(l,!1))},this.state={focus:!1}}render(e,c){const{rowKey:n,indeterminate:r}=e,a=this._isSelected(n);let i="oj-selector-wrapper oj-component-icon";r?i+=" oj-indeterminate":a&&(i+=" oj-selected"),c.focus&&!s.recentPointer()&&(i+=" oj-focus-highlight");const d=e["aria-labelledby"]||null,u=(e["aria-label"]||t.getTranslatedString("oj-ojSelector.checkboxAriaLabel",{rowKey:n}))+(a?t.getTranslatedString("oj-ojSelector.checkboxAriaLabelSelected"):t.getTranslatedString("oj-ojSelector.checkboxAriaLabelUnselected"));return l.h(o.Root,{class:"oj-selector"},l.h("span",{class:i},l.h("input",{type:"checkbox",class:"oj-selectorbox oj-clickthrough-disabled","aria-label":u,"aria-labelledby":d,checked:a,onfocusin:this._handleFocusin,onfocusout:this._handleFocusout,onClick:this._checkboxListener})))}_isSelected(e){const{selectedKeys:t,selectionMode:o}=this.props;return!!t&&("all"===o?t.isAddAll():t.has(e))}},e.Selector.defaultProps={rowKey:null,indeterminate:!1,selectedKeys:null,selectionMode:"multiple"},e.Selector.metadata={properties:{rowKey:{type:"any"},indeterminate:{type:"boolean",writeback:!0},selectedKeys:{type:"any",writeback:!0},selectionMode:{type:"string",enumValues:["all","multiple","single"]}},extension:{_WRITEBACK_PROPS:["selectedKeys","indeterminate"],_READ_ONLY_PROPS:[],_OBSERVED_GLOBAL_PROPS:["aria-label","aria-labelledby"]}},e.Selector=c([o.customElement("oj-selector")],e.Selector),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojselector.js.map