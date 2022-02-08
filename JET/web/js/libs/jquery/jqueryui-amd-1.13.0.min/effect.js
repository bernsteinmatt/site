/*!
 * jQuery UI Effects 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery-var-for-color","./vendor/jquery-color/jquery.color","./version"],t):t(jQuery)}((function(t){"use strict";var e;return t.effects={effect:{}},function(){var e,n=["add","remove","toggle"],i={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function o(t){var e,n,i,o=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,r={};if(o&&o.length&&o[0]&&o[o[0]])for(n=o.length;n--;)"string"==typeof o[e=o[n]]&&(r[(i=e,i.replace(/-([\da-z])/gi,(function(t,e){return e.toUpperCase()})))]=o[e]);else for(e in o)"string"==typeof o[e]&&(r[e]=o[e]);return r}t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(function(e,n){t.fx.step[n]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,n,t.end),t.setAttr=!0)}})),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,r,s,a){var f=t.speed(r,s,a);return this.queue((function(){var r,s=t(this),a=s.attr("class")||"",c=f.children?s.find("*").addBack():s;c=c.map((function(){return{el:t(this),start:o(this)}})),(r=function(){t.each(n,(function(t,n){e[n]&&s[n+"Class"](e[n])}))})(),c=c.map((function(){return this.end=o(this.el[0]),this.diff=function(e,n){var o,r,s={};for(o in n)r=n[o],e[o]!==r&&(i[o]||!t.fx.step[o]&&isNaN(parseFloat(r))||(s[o]=r));return s}(this.start,this.end),this})),s.attr("class",a),c=c.map((function(){var e=this,n=t.Deferred(),i=t.extend({},f,{queue:!1,complete:function(){n.resolve(e)}});return this.el.animate(this.diff,i),n.promise()})),t.when.apply(t,c.get()).done((function(){r(),t.each(arguments,(function(){var e=this.el;t.each(this.diff,(function(t){e.css(t,"")}))})),f.complete.call(s[0])}))}))},t.fn.extend({addClass:(e=t.fn.addClass,function(n,i,o,r){return i?t.effects.animateClass.call(this,{add:n},i,o,r):e.apply(this,arguments)}),removeClass:function(e){return function(n,i,o,r){return arguments.length>1?t.effects.animateClass.call(this,{remove:n},i,o,r):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(n,i,o,r,s){return"boolean"==typeof i||void 0===i?o?t.effects.animateClass.call(this,i?{add:n}:{remove:n},o,r,s):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},i,o,r)}}(t.fn.toggleClass),switchClass:function(e,n,i,o,r){return t.effects.animateClass.call(this,{add:n,remove:e},i,o,r)}})}(),function(){var e;function n(e,n,i,o){return t.isPlainObject(e)&&(n=e,e=e.effect),e={effect:e},null==n&&(n={}),"function"==typeof n&&(o=n,i=null,n={}),("number"==typeof n||t.fx.speeds[n])&&(o=i,i=n,n={}),"function"==typeof i&&(o=i,i=null),n&&t.extend(e,n),i=i||n.duration,e.duration=t.fx.off?0:"number"==typeof i?i:i in t.fx.speeds?t.fx.speeds[i]:t.fx.speeds._default,e.complete=o||n.complete,e}function i(e){return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||("string"==typeof e&&!t.effects.effect[e]||("function"==typeof e||"object"==typeof e&&!e.effect))}function o(t,e){var n=e.outerWidth(),i=e.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,n,i,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?n:parseFloat(o[2]),bottom:"auto"===o[3]?i:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.pseudos&&t.expr.pseudos.animated&&(t.expr.pseudos.animated=(e=t.expr.pseudos.animated,function(n){return!!t(n).data("ui-effects-animated")||e(n)})),!1!==t.uiBackCompat&&t.extend(t.effects,{save:function(t,e){for(var n=0,i=e.length;n<i;n++)null!==e[n]&&t.data("ui-effects-"+e[n],t[0].style[e[n]])},restore:function(t,e){for(var n,i=0,o=e.length;i<o;i++)null!==e[i]&&(n=t.data("ui-effects-"+e[i]),t.css(e[i],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var n={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},i=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:e.width(),height:e.height()},r=document.activeElement;try{r.id}catch(t){r=document.body}return e.wrap(i),(e[0]===r||t.contains(e[0],r))&&t(r).trigger("focus"),i=e.parent(),"static"===e.css("position")?(i.css({position:"relative"}),e.css({position:"relative"})):(t.extend(n,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],(function(t,i){n[i]=e.css(i),isNaN(parseInt(n[i],10))&&(n[i]="auto")})),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(o),i.css(n).show()},removeWrapper:function(e){var n=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===n||t.contains(e[0],n))&&t(n).trigger("focus")),e}}),t.extend(t.effects,{version:"1.13.0",define:function(e,n,i){return i||(i=n,n="effect"),t.effects.effect[e]=i,t.effects.effect[e].mode=n,i},scaledDimensions:function(t,e,n){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var i="horizontal"!==n?(e||100)/100:1,o="vertical"!==n?(e||100)/100:1;return{height:t.height()*o,width:t.width()*i,outerHeight:t.outerHeight()*o,outerWidth:t.outerWidth()*i}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,n){var i=t.queue();e>1&&i.splice.apply(i,[1,0].concat(i.splice(e,n))),t.dequeue()},saveStyle:function(t){t.data("ui-effects-style",t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data("ui-effects-style")||"",t.removeData("ui-effects-style")},mode:function(t,e){var n=t.is(":hidden");return"toggle"===e&&(e=n?"show":"hide"),(n?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var n,i;switch(t[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=t[0]/e.height}switch(t[1]){case"left":i=0;break;case"center":i=.5;break;case"right":i=1;break;default:i=t[1]/e.width}return{x:i,y:n}},createPlaceholder:function(e){var n,i=e.css("position"),o=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",n=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data("ui-effects-placeholder",n)),e.css({position:i,left:o.left,top:o.top}),n},removePlaceholder:function(t){var e="ui-effects-placeholder",n=t.data(e);n&&(n.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,n,i,o){return o=o||{},t.each(n,(function(t,n){var r=e.cssUnit(n);r[0]>0&&(o[n]=r[0]*i+r[1])})),o}}),t.fn.extend({effect:function(){var e=n.apply(this,arguments),i=t.effects.effect[e.effect],o=i.mode,r=e.queue,s=r||"fx",a=e.complete,f=e.mode,c=[],u=function(e){var n=t(this),i=t.effects.mode(n,f)||o;n.data("ui-effects-animated",!0),c.push(i),o&&("show"===i||i===o&&"hide"===i)&&n.show(),o&&"none"===i||t.effects.saveStyle(n),"function"==typeof e&&e()};if(t.fx.off||!i)return f?this[f](e.duration,a):this.each((function(){a&&a.call(this)}));function l(n){var r=t(this);function s(){"function"==typeof a&&a.call(r[0]),"function"==typeof n&&n()}e.mode=c.shift(),!1===t.uiBackCompat||o?"none"===e.mode?(r[f](),s()):i.call(r[0],e,(function(){r.removeData("ui-effects-animated"),t.effects.cleanUp(r),"hide"===e.mode&&r.hide(),s()})):(r.is(":hidden")?"hide"===f:"show"===f)?(r[f](),s()):i.call(r[0],e,s)}return!1===r?this.each(u).each(l):this.queue(s,u).queue(s,l)},show:function(t){return function(e){if(i(e))return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="show",this.effect.call(this,o)}}(t.fn.show),hide:function(t){return function(e){if(i(e))return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="hide",this.effect.call(this,o)}}(t.fn.hide),toggle:function(t){return function(e){if(i(e)||"boolean"==typeof e)return t.apply(this,arguments);var o=n.apply(this,arguments);return o.mode="toggle",this.effect.call(this,o)}}(t.fn.toggle),cssUnit:function(e){var n=this.css(e),i=[];return t.each(["em","px","%","pt"],(function(t,e){n.indexOf(e)>0&&(i=[parseFloat(n),e])})),i},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):o(this.css("clip"),this)},transfer:function(e,n){var i=t(this),o=t(e.to),r="fixed"===o.css("position"),s=t("body"),a=r?s.scrollTop():0,f=r?s.scrollLeft():0,c=o.offset(),u={top:c.top-a,left:c.left-f,height:o.innerHeight(),width:o.innerWidth()},l=i.offset(),d=t("<div class='ui-effects-transfer'></div>");d.appendTo("body").addClass(e.className).css({top:l.top-a,left:l.left-f,height:i.innerHeight(),width:i.innerWidth(),position:r?"fixed":"absolute"}).animate(u,e.duration,e.easing,(function(){d.remove(),"function"==typeof n&&n()}))}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=o(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),e={},t.each(["Quad","Cubic","Quart","Quint","Expo"],(function(t,n){e[n]=function(e){return Math.pow(e,t+2)}})),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,(function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?n(2*t)/2:1-n(-2*t+2)/2}})),t.effects}));