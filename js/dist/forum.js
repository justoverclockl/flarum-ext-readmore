module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(1),i=r(2),u=r.n(i),s=function(){window.location.href.indexOf("/u/")>-1?$(document).ready((function(){var t=o.a.forum.attribute("Lenght");$(".Post-body").each((function(){var e=$(this).text();if($.trim(e).length>t){var r=e.substring(0,t),n=e.substring(t,$.trim(e).length),a=o.a.translator.trans("flarum-ext-readmore.forum.readmore");$(this).text(r),$(this).append(' <a href="javascript:void(0);" class="linkReadMore">'+a+"</a>"),$(this).append('<span class="addText">'+n+"</span>")}})),$(".linkReadMore").click((function(){$(this).siblings(".addText").contents().unwrap(),$(this).remove()}))})):!0===o.a.forum.attribute("AlsoPost")&&$(document).ready((function(){var t=o.a.forum.attribute("Lenght");$(".Post-body").each((function(){var e=$(this).html();if($.trim(e).length>t){var r=e.substring(0,t),n=e.substring(t,$.trim(e).length),a=o.a.translator.trans("flarum-ext-readmore.forum.readmore");$(this).text(r),$(this).append(' <a href="javascript:void(0);" class="linkReadMore">'+a+"</a>"),$(this).append('<span class="addText">'+n+"</span>")}})),$(".linkReadMore").click((function(){$(this).siblings(".addText").contents().unwrap(),$(this).remove()}))}))};o.a.initializers.add("justoverclock/flarum-ext-readmore",(function(){Object(a.extend)(u.a.prototype,"oninit",s)}))}]);
//# sourceMappingURL=forum.js.map