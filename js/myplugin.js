/*!
 *
 *   typeit - The most versatile animated typing utility on the planet.
 *   Author: Alex MacArthur <alex@macarthur.me> (https://macarthur.me)
 *   Version: v5.0.2
 *   URL: https://typeitjs.com
 *   License: GPL-2.0
 *
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.TypeIt=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),n=function(){function e(i,n){t(this,e),this.defaults={strings:[],speed:100,deleteSpeed:void 0,lifeLike:!0,cursor:!0,cursorSpeed:1e3,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,autoStart:!0,callback:function(){}},this.id="",this.queue=[],this.queueIndex=0,this.hasStarted=!1,this.inTag=!1,this.stringsToDelete="",this.style='style="display:inline;position:relative;font:inherit;color:inherit;"',this.element=i,this.setOptions(n,this.defaults,!1),this.init()}return i(e,[{key:"init",value:function(){this.checkElement(),this.options.strings=this.toArray(this.options.strings),this.options.strings.length>=1&&""===this.options.strings[0]||(this.element.innerHTML='<i class="ti-placeholder" style="display:inline-block;width:0;line-height:0;overflow:hidden;">.</i><span '+this.style+' class="ti-container"></span>',this.id=this.generateHash(),this.element.dataset.typeitid=this.id,this.elementContainer=this.element.querySelector("span"),this.options.startDelete&&(this.insert(this.stringsToDelete),this.queue.push([this.delete]),this.insertPauseIntoQueue(1)),this.generateQueue(),this.kickoff())}},{key:"generateQueue",value:function(){for(var e=0;e<this.options.strings.length;e++)this.queue.push([this.type,this.options.strings[e]]),e<this.options.strings.length-1&&(this.queue.push([this.options.breakLines?this.break:this.delete]),this.insertPauseIntoQueue(this.queue.length))}},{key:"insertPauseIntoQueue",value:function(e){var t=this.options.nextStringDelay/2;this.queue.splice(e-1,0,[this.pause,t]),this.queue.splice(e+2,0,[this.pause,t])}},{key:"kickoff",value:function(){if(this.cursor(),this.options.autoStart)this.startQueue();else if(this.isVisible())this.hasStarted=!0,this.startQueue();else{var e=this;window.addEventListener("scroll",function t(i){e.isVisible()&&!e.hasStarted&&(e.hasStarted=!0,e.startQueue(),i.currentTarget.removeEventListener(i.type,t))})}}},{key:"startQueue",value:function(){var e=this;setTimeout(function(){e.executeQueue()},this.options.startDelay)}},{key:"isVisible",value:function(){var e=this.element.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return!(e.right>i||e.bottom>t)&&!(e.top<0||e.left<0)}},{key:"generateHash",value:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}},{key:"cursor",value:function(){if(this.options.cursor){var e=this.generateHash(),t=document.createElement("style"),i="\n          @keyframes blink-"+e+" {\n            0% {opacity: 0}\n            49%{opacity: 0}\n            50% {opacity: 1}\n          }\n\n          [data-typeitid='"+this.id+"'] .ti-cursor {\n            animation: blink-"+e+" "+this.options.cursorSpeed/1e3+"s infinite;\n          }\n        ";t.appendChild(document.createTextNode(i)),document.head.appendChild(t),this.element.insertAdjacentHTML("beforeend","<span "+this.style+'class="ti-cursor"></span>')}}},{key:"insert",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]?this.elementContainer.lastChild.insertAdjacentHTML("beforeend",e):this.elementContainer.insertAdjacentHTML("beforeend",e),this.elementContainer.innerHTML=this.elementContainer.innerHTML.split("").join("")}},{key:"toArray",value:function(e){return e.constructor===Array?e.slice(0):e.split("<br>")}},{key:"checkElement",value:function(){!this.options.startDelete&&this.element.innerHTML.length>0?this.options.strings=this.element.innerHTML.trim():this.stringsToDelete=this.element.innerHTML}},{key:"break",value:function(){this.insert("<br>"),this.executeQueue()}},{key:"pause",value:function(e){var t=this;e=void 0===e?this.options.nextStringDelay:e,setTimeout(function(){t.executeQueue()},e)}},{key:"rake",value:function(e){var t=this;return e.map(function(e){if(e=e.split(""),t.options.html)for(var i=[],n=void 0,s=!1,o=0;o<e.length;o++)"<"!==e[o]&&"&"!==e[o]||(i[0]=o,s="&"===e[o]),(">"===e[o]||";"===e[o]&&s)&&(i[1]=o,o=0,n=e.slice(i[0],i[1]+1).join(""),e.splice(i[0],i[1]-i[0]+1,n),s=!1);return e})}},{key:"print",value:function(e){this.inTag?(this.insert(e,!0),this.tagCount<this.tagDuration?this.tagCount++:this.inTag=!1):this.insert(e)}},{key:"type",value:function(e){var t=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=this.toArray(e),i&&(e=(e=this.rake(e))[0]),this.typingTimeout=setTimeout(function(){if(t.setPace(t),t.options.html&&-1!==e[0].indexOf("<")&&-1===e[0].indexOf("</")&&!t.inTag){for(var i=e.length-1;i>=0;i--)-1!==e[i].indexOf("</")&&(t.tagCount=1,t.tagDuration=i);t.inTag=!0;var n=e[0].match(/\<(.*?)\>/),s=document.implementation.createHTMLDocument();s.body.innerHTML="<"+n[1]+"></"+n[1]+">",t.elementContainer.appendChild(s.body.children[0])}else t.print(e[0]);e.splice(0,1),e.length?t.type(e,!1):t.executeQueue()},this.typePace)}},{key:"removeHelperElements",value:function(){var e=this,t=this.element.querySelectorAll(".ti-container, .ti-cursor, .ti-placeholder");[].forEach.call(t,function(t){e.element.removeChild(t)})}},{key:"setOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n={};null===t&&(t=this.options);for(var s in t)n[s]=t[s];for(var o in e)n[o]=e[o];this.options=n,i&&this.executeQueue()}},{key:"randomInRange",value:function(e,t){return Math.abs(Math.random()*(e+t-(e-t))+(e-t))}},{key:"setPace",value:function(){var e=this.options.speed,t=void 0!==this.options.deleteSpeed?this.options.deleteSpeed:this.options.speed/3,i=e/2,n=t/2;this.typePace=this.options.lifeLike?this.randomInRange(e,i):e,this.deletePace=this.options.lifeLike?this.randomInRange(t,n):t}},{key:"delete",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.deleteTimeout=setTimeout(function(){e.setPace();for(var i=e.elementContainer.innerHTML.split(""),n=null===t?i.length-1:t+1,s=i.length-1;s>-1;s--){if(">"!==i[s]&&";"!==i[s]||!e.options.html){i.pop();break}for(var o=s;o>-1;o--){if("<br>"===i.slice(o-3,o+1).join("")){i.splice(o-3,4);break}if("&"===i[o]){i.splice(o,s-o+1);break}if("<"===i[o]&&">"!==i[o-1]){if(";"===i[o-1])for(var r=o-1;r>-1;r--)if("&"===i[r]){i.splice(r,o-r);break}i.splice(o-1,1);break}}break}if(e.elementContainer.innerHTML.indexOf("></")>-1)for(var u=e.elementContainer.innerHTML.indexOf("></")-2;u>=0;u--)if("<"===i[u]){i.splice(u,i.length-u);break}e.elementContainer.innerHTML=i.join(""),n>(null===t?0:2)?e.delete(null===t?null:t-1):e.executeQueue()},this.deletePace)}},{key:"empty",value:function(){this.elementContainer.innerHTML="",this.executeQueue()}},{key:"executeQueue",value:function(){var e=this;if(this.queueIndex<this.queue.length){var t=this.queue[this.queueIndex];return this.queueIndex++,void(this.isLooping&&1===this.queueIndex?setTimeout(function(){t[0].call(e,t[1])},this.options.loopDelay/2):t[0].call(this,t[1]))}this.options.callback(),this.options.loop&&(this.queueIndex=0,this.isLooping=!0,setTimeout(function(){e.delete()},this.options.loopDelay/2))}}]),e}();return function(){function s(i,n){t(this,s),this.elements=[],this.instances=[],"object"===(void 0===i?"undefined":e(i))&&(void 0===i.length?this.elements.push(i):this.elements=i),"string"==typeof i&&(this.elements=document.querySelectorAll(i)),this.createInstances(n)}return i(s,[{key:"createInstances",value:function(e){var t=this;[].slice.call(this.elements).forEach(function(i){t.instances.push(new n(i,e))})}},{key:"pushAction",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.instances.forEach(function(i){i.queue.push([i[e],t])})}},{key:"type",value:function(e){return this.pushAction("type",e),this}},{key:"delete",value:function(e){return this.pushAction("delete",e),this}},{key:"empty",value:function(){return this.pushAction("empty"),this}},{key:"pause",value:function(e){return this.pushAction("pause",e),this}},{key:"break",value:function(){return this.pushAction("break"),this}},{key:"options",value:function(e){return this.pushAction("setOptions",e),this}}]),s}()});