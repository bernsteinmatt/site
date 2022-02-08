/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","jquery","ojs/ojthemeutils","ojs/ojcomponentcore","ojs/ojlogger","ojs/ojcontext","ojs/ojconfig","ojs/ojdomutils","touchr"],function(t,e,o,i,n,s,r,l,a){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;var h={properties:{arrowVisibility:{type:"string",writeback:!0,enumValues:["auto","hidden","visible"]},contentParent:{type:"string",writeback:!0},orientation:{type:"string",writeback:!0,enumValues:["horizontal","vertical"],value:"horizontal"},translations:{type:"object",value:{},properties:{tipArrowNext:{type:"string"},tipArrowPrevious:{type:"string"}}}},methods:{getProperty:{},refresh:{},scrollElementIntoView:{},setProperties:{},setProperty:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};function c(t,e,o,i,n){this._elem=t,this._orientation=e.orientation,this._contentParent=e.contentParent,this._bRtl=e.bRtl,this._arrowVisibility=o.arrowVisibility,this._prevButtonStyleClass=o.prevButtonStyleClass,this._nextButtonStyleClass=o.nextButtonStyleClass,this._prevButtonIcon=o.prevButtonIcon,this._nextButtonIcon=o.nextButtonIcon,this._scrollFunc=i.scrollFunc,this._addResizeListenerFunc=i.addResizeListener,this._removeResizeListenerFunc=i.removeResizeListener,this._addStyleClassNameFunc=i.addStyleClassName,this._removeStyleClassNameFunc=i.removeStyleClassName,this._hasStyleClassNameFunc=i.hasStyleClassName,this._filterContentElementsFunc=i.filterContentElements,this._subtreeDetachedFunc=i.subtreeDetached,this._subtreeAttachedFunc=i.subtreeAttached,this._addBusyStateFunc=i.addBusyState,this._overflowContainerStyleClass=n.overflowContainerStyleClass,this._contentContainerStyleClass=n.contentContainerStyleClass,this._itemStyleClass=n.itemStyleClass,this._hiddenStyleClass=n.hiddenStyleClass,this._bExternalScroll=!0,this._firstVisibleItemIndex=0,this._atStart=!0,this._atEnd=!1}h.extension._WIDGET_NAME="ojConveyorBelt",t.CustomElementBridge.register("oj-conveyor-belt",{metadata:h}),c.prototype.setup=function(){var t=this,o=c;if(this._createInnerContainers(),"visible"===this._arrowVisibility){this._createPrevButton(this._prevButtonStyleClass,this._prevButtonIcon),this._createNextButton(this._nextButtonStyleClass,this._nextButtonIcon);var i=this._nextButton;this._buttonWidth=Math.round(e(i).outerWidth(!0)),this._buttonHeight=Math.round(e(i).outerHeight(!0))}else this._buttonWidth=0,this._buttonHeight=0;this._hidePrevButton(),this._hideNextButton(),this._mouseWheelListener=function(e){t._handleMouseWheel(e)},o._addBubbleEventListener(this._elem,"mousewheel",this._mouseWheelListener,!1),o._addBubbleEventListener(this._elem,"wheel",this._mouseWheelListener,!1),this._touchStartListener=function(e){t._handleTouchStart(e)},o._addBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener,!0),this._touchMoveListener=function(e){t._handleTouchMove(e)},o._addBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener,!1),this._touchEndListener=function(e){t._handleTouchEnd(e)},o._addBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),o._addBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),this._handleKeyDownFunc=function(e){t._handleKeyDown(e)},o._addBubbleEventListener(this._elem,"keydown",this._handleKeyDownFunc),this._origScroll=0,this._clearCachedSizes(),this._adjustOverflowSize(!0),this._handleResize(!0),this._handleResizeFunc=function(e,o){t._handleResize(!1)},this._addResizeListenerFunc(this._elem,this._handleResizeFunc),this._addResizeListenerFunc(this._contentContainer,this._handleResizeFunc),this._subtreeAttachedFunc(this._contentContainer)},c.prototype._handleKeyDown=function(t){if(!t.defaultPrevented){var e=this._elem.getAttribute("tabindex");if(!(null==e||e<0)){var o=t.key||t.keyCode;if("horizontal"===this._orientation)switch(o){case c._KEYBOARD_KEYS._RIGHT:case c._KEYBOARD_KEYS._RIGHT_IE:case c._KEYBOARD_KEYS._RIGHT_CODE:this._bRtl?this._scrollPrevOnKeyDown(t):this._scrollNextOnKeyDown(t);break;case c._KEYBOARD_KEYS._LEFT:case c._KEYBOARD_KEYS._LEFT_IE:case c._KEYBOARD_KEYS._LEFT_CODE:this._bRtl?this._scrollNextOnKeyDown(t):this._scrollPrevOnKeyDown(t);break;default:return}if("vertical"===this._orientation)switch(o){case c._KEYBOARD_KEYS._DOWN:case c._KEYBOARD_KEYS._DOWN_IE:case c._KEYBOARD_KEYS._DOWN_CODE:this._scrollNextOnKeyDown(t);break;case c._KEYBOARD_KEYS._UP:case c._KEYBOARD_KEYS._UP_IE:case c._KEYBOARD_KEYS._UP_CODE:this._scrollPrevOnKeyDown(t)}}}},c.prototype._scrollNextOnKeyDown=function(t){this._constrainScroll(this._calcNextScroll())!==this._getCurrScroll()&&(this._scrollNext(),t.preventDefault())},c.prototype._scrollPrevOnKeyDown=function(t){this._constrainScroll(this._calcPrevScroll())!==this._getCurrScroll()&&(this._scrollPrev(),t.preventDefault())},c.prototype.destroy=function(){this._resolveBusyState();var t=this._elem,e=c;e._removeBubbleEventListener(t,"mousewheel",this._mouseWheelListener,!1),e._removeBubbleEventListener(t,"wheel",this._mouseWheelListener,!1),e._removeBubbleEventListener(this._overflowContainer,"touchstart",this._touchStartListener,!0),e._removeBubbleEventListener(this._overflowContainer,"touchmove",this._touchMoveListener,!1),e._removeBubbleEventListener(this._overflowContainer,"touchend",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"touchcancel",this._touchEndListener),e._removeBubbleEventListener(this._overflowContainer,"scroll",this._scrollListener),e._removeBubbleEventListener(this._elem,"keydown",this._handleKeyDownFunc),this._mouseWheelListener=null,this._touchStartListener=null,this._touchMoveListener=null,this._touchEndListener=null,this._scrollListener=null,this._removeResizeListenerFunc(t,this._handleResizeFunc),this._removeResizeListenerFunc(this._contentContainer,this._handleResizeFunc),this._handleResizeFunc=null,this._reparentChildrenFromContentContainer(this._contentContainer,t),t.removeChild(this._overflowContainer),this._overflowContainer=null,null!=this._nextButton&&null!=this._prevButton&&(t.removeChild(this._nextButton),t.removeChild(this._prevButton),this._nextButton=null,this._prevButton=null),this._contentContainer=null,this._clearCachedSizes(),this._elem=null,this._scrollFunc=null,this._addResizeListenerFunc=null,this._removeResizeListenerFunc=null,this._addStyleClassNameFunc=null,this._removeStyleClassNameFunc=null,this._hasStyleClassNameFunc=null,this._filterContentElementsFunc=null,this._subtreeDetachedFunc=null,this._subtreeAttachedFunc=null,this._addBusyStateFunc=null,this._contentParent=null},c.prototype.handleResize=function(){this._handleResize(!1)},c.prototype.setScroll=function(t,e){this._setCurrScroll(t,e)},c.prototype.getScroll=function(){return this._getCurrScroll()},c.prototype._reparentChildrenToContentContainer=function(t,e){for(var o=t.childNodes;o.length>0;){var i=o[0];this._subtreeDetachedFunc(i),e.appendChild(i),1===i.nodeType&&this._itemStyleClass&&this._addStyleClassNameFunc(i,this._itemStyleClass)}},c.prototype._reparentChildrenFromContentContainer=function(t,e){for(var o=t.childNodes;o.length>0;){var i=o[0];e.appendChild(i),1===i.nodeType&&this._itemStyleClass&&this._removeStyleClassNameFunc(i,this._itemStyleClass)}},c._getComputedStyle=function(t){return t.ownerDocument.defaultView.getComputedStyle(t,null)},c._getElemInnerWidth=function(t){var e=c,o=e._getComputedStyle(t);return e._getCSSLengthAsInt(o.width)},c._getElemInnerHeight=function(t){var e=c,o=e._getComputedStyle(t);return e._getCSSLengthAsInt(o.height)},c._getCSSLengthAsInt=function(t){if(t.length>0&&"auto"!==t){var e=Math.round(parseFloat(t));return isNaN(e)&&(e=0),e}return 0},c._addBubbleEventListener=function(t,e,o,i){t.addEventListener(e,o,{passive:i,capture:!1})},c._removeBubbleEventListener=function(t,e,o,i){t.removeEventListener(e,o,{passive:i,capture:!1})},c._getWheelDelta=function(t){var e=0;if(null!=t.deltaY||null!=t.deltaX)e=Math.abs(t.deltaX)>Math.abs(t.deltaY)?-t.deltaX:-t.deltaY;else if(null!=t.wheelDelta){e=Math.abs(t.wheelDeltaX)>Math.abs(t.wheelDeltaY)?t.wheelDeltaX:t.wheelDeltaY}else e=-t.detail;return 1===t.deltaMode&&(e*=5),e},c.prototype._isHorizontal=function(){return"horizontal"===this._orientation},c.prototype._isEmpty=function(){return!this._getContentParent().hasChildNodes()},c.prototype._reinitializeInnerDom=function(){this._origScroll=this._getCurrScroll(),this._setOverflowScroll(0),this._hidePrevButton(),this._hideNextButton()},c.prototype._clearCachedSizes=function(){this._totalSize=null,this._sizes=null},c.prototype._handleResize=function(t){t||this._reinitializeInnerDom(),this._clearCachedSizes(),this._totalSize=this._measureContents(),t||this._adjustOverflowSize(!1),"visible"===this._arrowVisibility&&this._alignButtons()},c.prototype._alignButtons=function(){var t=this._nextButton,e=this._prevButton,o=t.style,i=e.style,n=this._totalSize;this._isHorizontal()?(o.height=n.h+"px",i.height=n.h+"px"):(o.width=n.w+"px",i.width=n.w+"px")},c.prototype._adjustOverflowSize=function(t){var e=this._contentContainer,o=this._isHorizontal(),i=c,n=o?i._getElemInnerWidth(this._elem):i._getElemInnerHeight(this._elem);this._minScroll=0,this._maxScroll=o?e.offsetWidth-n+this._buttonWidth:e.offsetHeight-n+this._buttonHeight,this._maxScroll<0&&(this._maxScroll=0),this._hidePrevButton(),this._hideNextButton(),this._setCurrScroll(t?this._minScroll:this._origScroll,!0),this._origScroll=0},c.prototype._createInnerContainers=function(){var t=this,e=this._elem,o=c,i=document.createElement("div");this._overflowContainer=i,this._addStyleClassNameFunc(i,this._overflowContainerStyleClass);var n=document.createElement("div");this._contentContainer=n,this._addStyleClassNameFunc(n,this._contentContainerStyleClass),this._reparentChildrenToContentContainer(e,n),e.appendChild(i),i.appendChild(n),this._scrollListener=function(e){t._handleScroll(e)},o._addBubbleEventListener(i,"scroll",this._scrollListener)},c.prototype._getContentElements=function(){var t,e=[],o=this._contentParent?this._contentParent:this._contentContainer,i=o.children,n=i.length;for(t=0;t<n;t++){var s=i[t];1===s.nodeType&&"TEMPLATE"!==s.tagName&&0!==s.offsetWidth&&e.push(s)}if(e=(0,this._filterContentElementsFunc)(e),o===this._contentContainer&&this._itemStyleClass)for(t=0;t<e.length;t++){var r=e[t];this._hasStyleClassNameFunc(r,this._itemStyleClass)||this._addStyleClassNameFunc(r,this._itemStyleClass)}return e},c.prototype._createPrevButton=function(t,e){var o=this,i=document.createElement("div");this._prevButton=i,i.setAttribute("class",t),i.setAttribute("aria-hidden","true"),c._addBubbleEventListener(i,"click",function(){o._scrollPrev()}),i.appendChild(e),this._elem.insertBefore(i,this._overflowContainer)},c.prototype._createNextButton=function(t,e){var o=this,i=document.createElement("div");this._nextButton=i,i.setAttribute("class",t),i.setAttribute("aria-hidden","true"),c._addBubbleEventListener(i,"click",function(){o._scrollNext()}),i.appendChild(e),this._elem.appendChild(i)},c.prototype._getContentParent=function(){var t=this._contentParent;return t||(t=this._contentContainer),t},c.prototype._measureContents=function(){var t=this._getContentElements(),e={w:0,h:0},o=[];if(t.length>0){var i,n=t,s=this._isHorizontal();i=this._contentContainer.offsetWidth;for(var r=0,l=null,a=0;a<n.length;a++){var h=n[a];if(1===h.nodeType){var c=h.offsetWidth,_=h.offsetHeight,u={w:c,h:_,id:h.id};if(s){var d=h.offsetLeft;this._contentParent||0!==d||(d=h.parentNode.offsetLeft),this._bRtl?u.start=i-(d+c):u.start=d,0===a&&(r=u.start),u.start-=r,e.w=u.start+c,e.h=Math.max(e.h,_),u.end=e.w-1}else{var v=h.offsetTop;this._contentParent||0!==v||(v=h.parentNode.offsetTop),u.start=v,e.w=Math.max(e.w,c),e.h=u.start+_,u.end=e.h-1}if(l&&l.end>=u.start){var f=l.end-(u.start-1);l.end-=f,s?l.w-=f:l.h-=f}o.push(u),l=u}}}return this._sizes=o,e},c.prototype._getSizes=function(){return this._sizes},c.prototype._showNextButton=function(){this._removeStyleClassNameFunc(this._nextButton,this._hiddenStyleClass),this._atEnd=!1},c.prototype._showPrevButton=function(){this._removeStyleClassNameFunc(this._prevButton,this._hiddenStyleClass),this._atStart=!1},c.prototype._hideNextButton=function(){this._addStyleClassNameFunc(this._nextButton,this._hiddenStyleClass),this._atEnd=!0},c.prototype._hidePrevButton=function(){this._addStyleClassNameFunc(this._prevButton,this._hiddenStyleClass),this._atStart=!0},c.prototype._getButtonSize=function(){var t=0;return"visible"===this._arrowVisibility&&(t=this._isHorizontal()?this._buttonWidth:this._buttonHeight),t},c.prototype._updateButtonVisibility=function(t){var e=this._getButtonSize(),o=this._getCurrScroll(),i=this._needsScroll();t<=this._minScroll?(this._atStart||(o-=e),this._hidePrevButton()):i&&(this._atStart&&(o+=e),this._showPrevButton()),t>=this._maxScroll?this._hideNextButton():i&&this._showNextButton(),this._setOverflowScroll(o)},c.prototype._setOverflowScroll=function(t){var e=this._overflowContainer;this._isHorizontal()?l.setScrollLeft(e,t):e.scrollTop=t},c.prototype._getCurrViewportSize=function(){var t=this._overflowContainer;return this._isHorizontal()?t.offsetWidth:t.offsetHeight},c.prototype._setCurrScroll=function(t,e){this._bScrolling||(this._bExternalScroll=!1,this._setCurrScrollHelper(t,e))},c.prototype._setCurrScrollHelper=function(t,e){if(!this._isEmpty()){this._bScrolling=!0,t=this._constrainScroll(t),this._updateButtonVisibility(t);var o=this._scrollFunc;if(e||!o||t===this._getCurrScroll())this._onScrollAnimEnd(this._bExternalScroll?this._getCurrScroll():t);else{this._busyStateResolveFunc=this._addBusyStateFunc("scrolling");var i=c,n=Math.abs(this._getCurrScroll()-t)/i._SCROLL_SPEED,s=this;o(this._overflowContainer,l.calculateScrollLeft(t),n,function(){s._onScrollAnimEnd(t),s._resolveBusyState()})}}},c.prototype._resolveBusyState=function(){this._busyStateResolveFunc&&(this._busyStateResolveFunc(),this._busyStateResolveFunc=null)},c.prototype._getCurrScroll=function(){var t=this._overflowContainer;return this._isHorizontal()?Math.round(Math.abs(t.scrollLeft)):Math.round(t.scrollTop)},c.prototype._needsScroll=function(){var t=this._contentContainer,e=this._overflowContainer;return this._isHorizontal()?t.offsetWidth>e.offsetWidth:t.offsetHeight>e.offsetHeight},c.prototype._constrainScroll=function(t){return!this._needsScroll()||t<this._minScroll?this._minScroll:t>this._maxScroll?this._maxScroll:t},c.prototype._handleMouseWheel=function(t){var e=this._bScrolling;if(this._needsScroll()&&!this._bScrolling){var o,i=c._getWheelDelta(t);i<0&&!this._atEnd?o=this._getCurrScroll()+Math.abs(i):i>0&&!this._atStart&&(o=this._getCurrScroll()-i),null!=o&&(e=!0,this._updateButtonVisibility(o),this._setOverflowScroll(o))}e&&(t.preventDefault(),t.stopPropagation())},c.prototype._handleTouchStart=function(t){var e=t.touches;this._needsScroll()&&!this._bScrolling&&1===e.length&&(this._bTouch=!0,this._firstTouch=e[0],this._touchLastCoord=this._isHorizontal()?this._firstTouch.pageX:this._firstTouch.pageY,this._touchStartScroll=this._getCurrScroll(),this._touchStartNextScroll=this._calcNextScroll(),this._touchStartPrevScroll=this._calcPrevScroll(),this._touchInitialNotAtEnd=!this._atEnd,this._touchInitialNotAtStart=!this._atStart,this._trackingPoints=[],this._addTrackingPoint(this._touchLastCoord),this._targetCoord=0)},c.prototype._handleTouchMove=function(t){var e=this._isHorizontal(),o=t.touches[0];this._touchCurrentCoord=e?o.pageX:o.pageY;var i=this._touchCurrentCoord-this._touchLastCoord,n=e&&this._bRtl?i>0:i<0,s=n&&this._touchInitialNotAtEnd||!n&&this._touchInitialNotAtStart;this._bTouch&&this._firstTouch.id===o.id&&s&&(this._addTrackingPoint(this._touchLastCoord),e&&this._bRtl?this._setCurrScroll(this._getCurrScroll()+i,!0):this._setCurrScroll(this._getCurrScroll()-i,!0),this._touchLastCoord=this._touchCurrentCoord,(this._touchInitialNotAtEnd&&this._atEnd||this._touchInitialNotAtStart&&this._atStart)&&(this._bTouch=!1),this._scrolledForThisTouch=!0),this._scrolledForThisTouch&&(t.preventDefault(),t.stopPropagation())},c.prototype._handleTouchEnd=function(t){this._bTouch=!1,this._scrolledForThisTouch=!1,null!=this._trackingPoints&&(this._addTrackingPoint(this._touchLastCoord),this._startDecelAnim())},c.prototype._addTrackingPoint=function(t){if(null!=this._trackingPoints){for(var e=Date.now();this._trackingPoints.length>0&&!(e-this._trackingPoints[0].time<=100);)this._trackingPoints.shift();this._trackingPoints.push({coord:t,time:e})}},c.prototype._startDecelAnim=function(){var t=this._trackingPoints[0],e=this._trackingPoints[this._trackingPoints.length-1],o=e.coord-t.coord,i=(e.time-t.time)/15;this._decVel=o/i||0,Math.abs(this._decVel)>1&&(this._decelerating=!0,requestAnimationFrame(this._stepDecelAnim.bind(this)))},c.prototype._stepDecelAnim=function(){if(this._decelerating){var t=c._TOUCH_SCROLL_FRICTION,e=c._TOUCH_SCROLL_STOP_THRESHOLD;this._decVel*=t,this._targetCoord+=this._decVel,Math.abs(this._decVel)>e?(this._isHorizontal()&&this._bRtl?this._setCurrScroll(this._getCurrScroll()+this._targetCoord,!1):this._setCurrScroll(this._getCurrScroll()-this._targetCoord,!1),requestAnimationFrame(this._stepDecelAnim.bind(this))):this._decelerating=!1}},c.prototype._handleScroll=function(t){this._bExternalScroll&&!this._bScrolling&&this._setCurrScrollHelper(this._getCurrScroll(),!0)},c.prototype._onScrollAnimEnd=function(t){this._setOverflowScroll(t),this._bExternalScroll=!0,this._bScrolling=!1},c.prototype._scrollNext=function(){this._bScrolling||this._setCurrScroll(this._calcNextScroll(),!1)},c.prototype._scrollPrev=function(){this._bScrolling||this._setCurrScroll(this._calcPrevScroll(),!1)},c.prototype._calcNextScroll=function(){var t=this._calcNextVisibleItemIndex();return t===this._calcFirstVisibleItemIndex()?this._getCurrScroll()+this._getCurrViewportSize():this._calcStartScroll(t)},c.prototype._calcPrevScroll=function(){var t=this._calcPrevVisibleItemIndex(),e=0;return e=t===this._calcLastVisibleItemIndex()?this._getCurrScroll()-this._getCurrViewportSize():this._calcEndScroll(t),this._atEnd&&(e+=this._getButtonSize()),e<=this._getButtonSize()&&(e=this._minScroll),e},c.prototype._calcStartScroll=function(t){return this._getSizes()[t].start},c.prototype._calcEndScroll=function(t){return this._getSizes()[t].end-this._getCurrViewportSize()+1},c.prototype._calcFirstVisibleItemIndex=function(){var t=this._getCurrScroll(),e=this._calcItemIndex(t);return e<0?0:e},c.prototype._calcLastVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t-1,o=this._calcItemIndex(e),i=this._getSizes();return o<0?i.length-1:o},c.prototype._calcPrevVisibleItemIndex=function(){var t=this._getCurrScroll()-1,e=this._calcItemIndex(t);return e<0?0:e},c.prototype._calcNextVisibleItemIndex=function(){var t=this._getCurrViewportSize(),e=this._getCurrScroll()+t,o=this._calcItemIndex(e),i=this._getSizes();return o<0?i.length-1:o},c.prototype._calcItemIndex=function(t){for(var e=this._getSizes(),o=0;o<e.length;o++){if(t<=e[o].end)return o}return-1},c._SCROLL_SPEED=1.1,c._TOUCH_SCROLL_FRICTION=.7,c._TOUCH_SCROLL_STOP_THRESHOLD=.1,c._KEYBOARD_KEYS={_UP:"ArrowUp",_UP_IE:"Up",_UP_CODE:38,_DOWN:"ArrowDown",_DOWN_IE:"Down",_DOWN_CODE:40,_LEFT:"ArrowLeft",_LEFT_IE:"Left",_LEFT_CODE:37,_RIGHT:"ArrowRight",_RIGHT_IE:"Right",_RIGHT_CODE:39},function(){function a(t){var o=e("<div></div>");return o.text(t),o[0].innerHTML}t.__registerWidget("oj.ojConveyorBelt",e.oj.baseComponent,{defaultElement:"<div>",widgetEventPrefix:"oj",options:{orientation:"horizontal",arrowVisibility:"auto",contentParent:null},_ComponentCreate:function(){this._super(),this.element.addClass("oj-conveyorbelt oj-component"),this.options.disabled&&n.warn("JET ConveyorBelt: 'disabled' property not supported"),this._setup()},refresh:function(){this._super();var t,e="rtl"===this._GetReadingDirection(),o=this._bRTL!==e;o||(t=this._cbCommon.getScroll()),this._destroyCBCommon(),this._setup(),o||this._cbCommon.setScroll(t,!0)},_NotifyShown:function(){if(this._super(),this._needsSetup)this._setup();else if(this._cbCommon){this._cbCommon.handleResize()}},_NotifyAttached:function(){if(this._super(),this._needsSetup)this._setup();else if(this._cbCommon){this._cbCommon.handleResize()}},_setup:function(){var t=this,o=this.element,n=this.options,s=n.orientation;if("vertical"===s?o.addClass("oj-conveyorbelt-vertical"):o.removeClass("oj-conveyorbelt-vertical"),this._canCalculateSizes()){if(this._needsSetup=null,this._bRTL="rtl"===this._GetReadingDirection(),!this._cbCommon){var h=null,_=null,u=null,d=null,v=null,f=a(this.getTranslatedString("tipArrowNext")),m=a(this.getTranslatedString("tipArrowPrevious"));"vertical"!==s?(h="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",_="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",u=this._createIcon("oj-conveyorbelt-overflow-icon oj-start",m),d=this._createIcon("oj-conveyorbelt-overflow-icon oj-end",f),v=this._animateScrollLeft.bind(this)):(h="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",_="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",u=this._createIcon("oj-conveyorbelt-overflow-icon oj-top",m),d=this._createIcon("oj-conveyorbelt-overflow-icon oj-bottom",f),v=this._animateScrollTop.bind(this));var p={};"auto"===n.arrowVisibility?p.arrowVisibility="phone"===r.getDeviceRenderMode()?"hidden":"visible":p.arrowVisibility=n.arrowVisibility,p.prevButtonStyleClass=h,p.nextButtonStyleClass=_,p.prevButtonIcon=u,p.nextButtonIcon=d;var C={overflowContainerStyleClass:"oj-conveyorbelt-overflow-container",contentContainerStyleClass:"oj-conveyorbelt-content-container",itemStyleClass:"oj-conveyorbelt-item",hiddenStyleClass:"oj-helper-hidden"},S={addResizeListener:function(t,e){l.addResizeListener(t,e,25)}};S.removeResizeListener=l.removeResizeListener,S.addStyleClassName=this._addStyleClassName,S.removeStyleClassName=this._removeStyleClassName,S.hasStyleClassName=this._hasStyleClassName,S.filterContentElements=function(e){return t._filterContentElements(e)},S.subtreeDetached=i.subtreeDetached,S.subtreeAttached=i.subtreeAttached,S.addBusyState=function(e){return t._addBusyState(e)},"enabled"!==r.getAutomationMode()&&(S.scrollFunc=v);var b=null;n.contentParent&&(b=e(n.contentParent)[0]),this._cbCommon=new c(o[0],{orientation:s,contentParent:b,bRtl:this._bRTL},p,S,C)}this._cbCommon.setup();for(var y=o.find(".oj-conveyorbelt-overflow-indicator"),g=0;g<y.length;g++)this._setupButtonMouseStyles(e(y[g]))}else this._needsSetup=!0},_destroy:function(){this._destroyCBCommon(),this.element.removeClass("oj-conveyorbelt oj-component oj-conveyorbelt-vertical"),this._super()},_setOption:function(t,e,o){var i=!1,s=this.options;switch(t){case"containerParent":case"arrowVisibility":i=!0;break;case"orientation":i=s.orientation!==e;break;case"disabled":n.warn("JET ConveyorBelt: 'disabled' property not supported")}i&&this._destroyCBCommon(),this._super(t,e,o),i&&this._setup()},_destroyCBCommon:function(){var t=this._cbCommon;t&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),t.destroy());this._cbCommon=null},_canCalculateSizes:function(){var t=document.createElement("div"),e=t.style;e.width="10px",e.height="10px",e["-webkit-flex"]="0 0 auto",e.flex="0 0 auto";var o=this.element[0];o.appendChild(t);var i=!1;try{i=t.offsetWidth>0&&t.offsetHeight>0}catch(t){}return o.removeChild(t),i},_setupButtonMouseStyles:function(t){this._AddHoverable({element:t,afterToggle:function(e){"mouseenter"===e?t.removeClass("oj-default"):"mouseleave"===e&&t.addClass("oj-default")}}),this._AddActiveable({element:t,afterToggle:function(e){"mousedown"===e||"touchstart"===e||"mouseenter"===e?t.removeClass("oj-default"):"mouseup"!==e&&"touchend"!==e&&"touchcancel"!==e&&"mouseleave"!==e||t.addClass("oj-default")}})},_createIcon:function(t,e){var o=document.createElement("span");o.setAttribute("class","oj-component-icon "+t);var i=document.createElement("div");return i.setAttribute("class","oj-conveyorbelt-overflow-button"),i.setAttribute("role","button"),i.appendChild(o),i.setAttribute("title",e),i},_animateScrollLeft:function(t,o,i,n){var s={};s.scrollLeft=o,e(t).animate(s,i,"swing",n)},_animateScrollTop:function(t,o,i,n){var s={};s.scrollTop=o,e(t).animate(s,i,"swing",n)},_addStyleClassName:function(t,o){e(t).addClass(o)},_removeStyleClassName:function(t,o){e(t).removeClass(o)},_hasStyleClassName:function(t,o){return e(t).hasClass(o)},_filterContentElements:function(t){for(var e=[],o=0;o<t.length;o++){var i=t[o];this._hasStyleClassName(i,"oj-helper-detect-expansion")||this._hasStyleClassName(i,"oj-helper-detect-contraction")||e.push(i)}return e},_addBusyState:function(t){var e=this.element,o=s.getContext(e[0]).getBusyContext(),i="ConveyorBelt";i+=" (id='"+e.attr("id")+"')";var n={description:i+=": "+t};return o.addBusyState(n)},getNodeBySubId:function(t){if(null==t)return this.element[0];var e=t.subId;return"oj-conveyorbelt-start-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:"oj-conveyorbelt-bottom-overflow-indicator"===e?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(t){for(var e=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),o=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),i=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),n=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),s=t,r=this.element[0];s&&s!==r;){if(s===e)return{subId:"oj-conveyorbelt-start-overflow-indicator"};if(s===o)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(s===i)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(s===n)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};s=s.parentElement}return null},scrollElementIntoView:function(t){var e=this._cbCommon.getScroll(),o=this._cbCommon._getCurrViewportSize(),i=this._cbCommon._contentContainer.offsetWidth,n=t.offsetLeft;this._cbCommon._contentParent||0!==n||(n=t.parentNode.offsetLeft),this._cbCommon._bRtl&&(n=i-(n+t.offsetWidth));var s=t.offsetTop;if(this._cbCommon._contentParent||0!==s||(s=t.parentNode.offsetTop),this._cbCommon._isHorizontal()){if(n+t.offsetWidth<=e+o&&n>=e)return}else if(s+t.offsetHeight<=e+o&&s>=e)return;var r=this._cbCommon._contentContainer,l=c,a=this._cbCommon._isHorizontal()?l._getElemInnerWidth(this.element[0]):l._getElemInnerHeight(this.element[0]);this._cbCommon._minScroll=0,this._cbCommon._maxScroll=this._cbCommon._isHorizontal()?r.offsetWidth-a+this._cbCommon._buttonWidth:r.offsetHeight-a+this._cbCommon._buttonHeight,this._cbCommon._maxScroll<0&&(this._cbCommon._maxScroll=0),this._cbCommon._isHorizontal()?this._cbCommon._setCurrScroll(n,!0):this._cbCommon._setCurrScroll(s,!0)}}),i.setDefaultOptions({ojConveyorBelt:{arrowVisibility:i.createDynamicPropertyGetter(function(){return o.getCachedCSSVarValues(["--oj-private-conveyor-belt-global-arrow-visibility-default"])[0]})}})}()});
//# sourceMappingURL=ojconveyorbelt.js.map