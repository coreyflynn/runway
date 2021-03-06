/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
//     Underscore.js 1.7.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r=Array.prototype,e=Object.prototype,u=Function.prototype,i=r.push,a=r.slice,o=r.concat,l=e.toString,c=e.hasOwnProperty,f=Array.isArray,s=Object.keys,p=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=h),exports._=h):n._=h,h.VERSION="1.7.0";var g=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?g(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=g(t,r);var e,u=n.length;if(u===+u)for(e=0;u>e;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,a=Array(i),o=0;i>o;o++)e=u?u[o]:o,a[o]=t(n[e],e,n);return a};var v="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[o++]:o++]}for(;a>o;o++)u=i?i[o]:o,r=t(r,n[u],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=g(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;if(arguments.length<3){if(!a)throw new TypeError(v);r=n[i?i[--a]:--a]}for(;a--;)u=i?i[a]:a,r=t(r,n[u],u,n);return r},h.find=h.detect=function(n,t,r){var e;return t=h.iteratee(t,r),h.some(n,function(n,r,u){return t(n,r,u)?(e=n,!0):void 0}),e},h.filter=h.select=function(n,t,r){var e=[];return null==n?e:(t=h.iteratee(t,r),h.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e)},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,!t(n[u],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),a=(i||n).length;for(e=0;a>e;e++)if(u=i?i[e]:e,t(n[u],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null==n?!1:(n.length!==+n.length&&(n=h.values(n)),h.indexOf(n,t)>=0)},h.invoke=function(n,t){var r=a.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,t,r){var e,u,i=-1/0,a=-1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],e>i&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(u>a||u===-1/0&&i===-1/0)&&(i=n,a=u)});return i},h.min=function(n,t,r){var e,u,i=1/0,a=1/0;if(null==t&&null!=n){n=n.length===+n.length?n:h.values(n);for(var o=0,l=n.length;l>o;o++)e=n[o],i>e&&(i=e)}else t=h.iteratee(t,r),h.each(n,function(n,r,e){u=t(n,r,e),(a>u||1/0===u&&1/0===i)&&(i=n,a=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=h.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,t,r){return t=h.iteratee(t,r),h.pluck(h.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var m=function(n){return function(t,r,e){var u={};return r=h.iteratee(r,e),h.each(t,function(e,i){var a=r(e,i,t);n(u,e,a)}),u}};h.groupBy=m(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=m(function(n,t,r){n[r]=t}),h.countBy=m(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){r=h.iteratee(r,e,1);for(var u=r(t),i=0,a=n.length;a>i;){var o=i+a>>>1;r(n[o])<u?i=o+1:a=o}return i},h.toArray=function(n){return n?h.isArray(n)?a.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,t,r){t=h.iteratee(t,r);var e=[],u=[];return h.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},h.first=h.head=h.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:a.call(n,0,t)},h.initial=function(n,t,r){return a.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:a.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return a.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var y=function(n,t,r,e){if(t&&h.every(n,h.isArray))return o.apply(e,n);for(var u=0,a=n.length;a>u;u++){var l=n[u];h.isArray(l)||h.isArguments(l)?t?i.apply(e,l):y(l,t,r,e):r||e.push(l)}return e};h.flatten=function(n,t){return y(n,t,!1,[])},h.without=function(n){return h.difference(n,a.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],a=0,o=n.length;o>a;a++){var l=n[a];if(t)a&&i===l||u.push(l),i=l;else if(r){var c=r(l,a,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(y(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;u>e;e++){var i=n[e];if(!h.contains(t,i)){for(var a=1;r>a&&h.contains(arguments[a],i);a++);a===r&&t.push(i)}}return t},h.difference=function(n){var t=y(a.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;t>e;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=h.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}for(;u>e;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=0>r?e+r+1:Math.min(e,r+1));--e>=0;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var d=function(){};h.bind=function(n,t){var r,e;if(p&&n.bind===p)return p.apply(n,a.call(arguments,1));if(!h.isFunction(n))throw new TypeError("Bind must be called on a function");return r=a.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(a.call(arguments)));d.prototype=n.prototype;var u=new d;d.prototype=null;var i=n.apply(u,r.concat(a.call(arguments)));return h.isObject(i)?i:u}},h.partial=function(n){var t=a.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===h&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},h.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=h.bind(n[r],n);return n},h.memoize=function(n,t){var r=function(e){var u=r.cache,i=t?t.apply(this,arguments):e;return h.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},h.delay=function(n,t){var r=a.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(a.call(arguments,1)))},h.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var l=function(){o=r.leading===!1?0:h.now(),a=null,i=n.apply(e,u),a||(e=u=null)};return function(){var c=h.now();o||r.leading!==!1||(o=c);var f=t-(c-o);return e=this,u=arguments,0>=f||f>t?(clearTimeout(a),a=null,o=c,i=n.apply(e,u),a||(e=u=null)):a||r.trailing===!1||(a=setTimeout(l,f)),i}},h.debounce=function(n,t,r){var e,u,i,a,o,l=function(){var c=h.now()-a;t>c&&c>0?e=setTimeout(l,t-c):(e=null,r||(o=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,a=h.now();var c=r&&!e;return e||(e=setTimeout(l,t)),c&&(o=n.apply(i,u),i=u=null),o}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},h.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},h.before=function(n,t){var r;return function(){return--n>0?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(s)return s(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;u>e;e++){t=arguments[e];for(r in t)c.call(t,r)&&(n[r]=t[r])}return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t)){t=g(t,r);for(e in n){var i=n[e];t(i,e,n)&&(u[e]=i)}}else{var l=o.apply([],a.call(arguments,1));n=new Object(n);for(var c=0,f=l.length;f>c;c++)e=l[c],e in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(o.apply([],a.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;r>t;t++){var e=arguments[t];for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=l.call(n);if(u!==l.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var a=n.constructor,o=t.constructor;if(a!==o&&"constructor"in n&&"constructor"in t&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c,f;if("[object Array]"===u){if(c=n.length,f=c===t.length)for(;c--&&(f=b(n[c],t[c],r,e)););}else{var s,p=h.keys(n);if(c=p.length,f=h.keys(t).length===c)for(;c--&&(s=p[c],f=h.has(t,s)&&b(n[s],t[s],r,e)););}return r.pop(),e.pop(),f};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=f||function(n){return"[object Array]"===l.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(n){h["is"+n]=function(t){return l.call(t)==="[object "+n+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===l.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return n===void 0},h.has=function(n,t){return null!=n&&c.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(n){return function(t){return t[n]}},h.matches=function(n){var t=h.pairs(n),r=t.length;return function(n){if(null==n)return!r;n=new Object(n);for(var e=0;r>e;e++){var u=t[e],i=u[0];if(u[1]!==n[i]||!(i in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=g(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=h.invert(_),j=function(n){var t=function(t){return n[t]},r="(?:"+h.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=j(_),h.unescape=j(w),h.result=function(n,t){if(null==n)return void 0;var r=n[t];return h.isFunction(r)?n[t]():r};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(n,t,r){!t&&r&&(t=r),t=h.defaults({},t,h.templateSettings);var e=RegExp([(t.escape||A).source,(t.interpolate||A).source,(t.evaluate||A).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(O,F),u=o+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(o){throw o.source=i,o}var l=function(n){return a.call(this,n,h)},c=t.variable||"obj";return l.source="function("+c+"){\n"+i+"}",l},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(n){h.each(h.functions(n),function(t){var r=h[t]=n[t];h.prototype[t]=function(){var n=[this._wrapped];return i.apply(n,arguments),E.call(this,r.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=r[n];h.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],E.call(this,r)}}),h.each(["concat","join","slice"],function(n){var t=r[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.0",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus","focus"==b.type)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.0",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.0",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.0",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth)return 0;var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.0",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.0",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)
}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * Bootstrap-select v1.6.3 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a){"use strict";function b(a,b){return a.toUpperCase().indexOf(b.toUpperCase())>-1}function c(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function d(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function e(b,c){var d=arguments,e=b,b=d[0],c=d[1];[].shift.apply(d),"undefined"==typeof b&&(b=e);var g,h=this.each(function(){var e=a(this);if(e.is("select")){var h=e.data("selectpicker"),i="object"==typeof b&&b;if(h){if(i)for(var j in i)i.hasOwnProperty(j)&&(h.options[j]=i[j])}else{var k=a.extend({},f.DEFAULTS,a.fn.selectpicker.defaults||{},e.data(),i);e.data("selectpicker",h=new f(this,k,c))}"string"==typeof b&&(g=h[b]instanceof Function?h[b].apply(h,d):h.options[b])}});return"undefined"!=typeof g?g:h}a.expr[":"].icontains=function(c,d,e){return b(a(c).text(),e[3])},a.expr[":"].aicontains=function(c,d,e){return b(a(c).data("normalizedText")||a(c).text(),e[3])};var f=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=f.prototype.val,this.render=f.prototype.render,this.refresh=f.prototype.refresh,this.setStyle=f.prototype.setStyle,this.selectAll=f.prototype.selectAll,this.deselectAll=f.prototype.deselectAll,this.destroy=f.prototype.remove,this.remove=f.prototype.remove,this.show=f.prototype.show,this.hide=f.prototype.hide,this.init()};f.VERSION="1.6.3",f.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:function(a){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){var c=[];return c[0]=1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",c[1]=1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)",c},selectAllText:"Select All",deselectAllText:"Deselect All",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,searchAccentInsensitive:!1},f.prototype={constructor:f,init:function(){var b=this,c=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.find("> .dropdown-menu"),this.$button=this.$newElement.find("> button"),this.$searchbox=this.$newElement.find("input"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile()},createDropdown:function(){var b=this.multiple?" show-tick":"",c=this.$element.parent().hasClass("input-group")?" input-group-btn":"",d=this.autofocus?" autofocus":"",e=this.$element.parents().hasClass("form-group-lg")?" btn-lg":this.$element.parents().hasClass("form-group-sm")?" btn-sm":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>':"",h=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i='<div class="btn-group bootstrap-select'+b+c+'"><button type="button" class="btn dropdown-toggle selectpicker'+e+'" data-toggle="dropdown"'+d+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';return a(i)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul").append(b),a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menu.find("ul").append(a)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var b=this,e=[],f=0,g=function(a,b,c){return"<li"+("undefined"!=typeof c?' class="'+c+'"':"")+("undefined"!=typeof b|null===b?' data-original-index="'+b+'"':"")+">"+a+"</li>"},h=function(a,e,f,g){var h=c(d(a));return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+("undefined"!=typeof g?'data-optgroup="'+g+'"':"")+' data-normalized-text="'+h+'">'+a+'<span class="'+b.options.iconBase+" "+b.options.tickIcon+' check-mark"></span></a>'};return this.$element.find("option").each(function(){var c=a(this),d=c.attr("class")||"",i=c.attr("style"),j=c.data("content")?c.data("content"):c.html(),k="undefined"!=typeof c.data("subtext")?'<small class="muted text-muted">'+c.data("subtext")+"</small>":"",l="undefined"!=typeof c.data("icon")?'<span class="'+b.options.iconBase+" "+c.data("icon")+'"></span> ':"",m=c.is(":disabled")||c.parent().is(":disabled"),n=c[0].index;if(""!==l&&m&&(l="<span>"+l+"</span>"),c.data("content")||(j=l+'<span class="text">'+j+k+"</span>"),!b.options.hideDisabled||!m)if(c.parent().is("optgroup")&&c.data("divider")!==!0){if(0===c.index()){f+=1;var o=c.parent().attr("label"),p="undefined"!=typeof c.parent().data("subtext")?'<small class="muted text-muted">'+c.parent().data("subtext")+"</small>":"",q=c.parent().data("icon")?'<span class="'+b.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";o=q+'<span class="text">'+o+p+"</span>",0!==n&&e.length>0&&e.push(g("",null,"divider")),e.push(g(o,null,"dropdown-header"))}e.push(g(h(j,"opt "+d,i,f),n))}else e.push(c.data("divider")===!0?g("",n,"divider"):c.data("hidden")===!0?g(h(j,d,i),n,"hide is-hidden"):g(h(j,d,i),n))}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),a(e.join(""))},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c=this;b!==!1&&this.$element.find("option").each(function(b){c.setDisabled(b,a(this).is(":disabled")||a(this).parent().is(":disabled")),c.setSelected(b,a(this).is(":selected"))}),this.tabIndex();var e=this.options.hideDisabled?":not([disabled])":"",f=this.$element.find("option:selected"+e).map(function(){var b,d=a(this),e=d.data("icon")&&c.options.showIcon?'<i class="'+c.options.iconBase+" "+d.data("icon")+'"></i> ':"";return b=c.options.showSubtext&&d.attr("data-subtext")&&!c.multiple?' <small class="muted text-muted">'+d.data("subtext")+"</small>":"",d.data("content")&&c.options.showContent?d.data("content"):"undefined"!=typeof d.attr("title")?d.attr("title"):e+d.html()+b}).toArray(),g=this.multiple?f.join(this.options.multipleSeparator):f[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var h=this.options.selectedTextFormat.split(">");if(h.length>1&&f.length>h[1]||1==h.length&&f.length>=2){e=this.options.hideDisabled?", [disabled]":"";var i=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+e).length,j="function"==typeof this.options.countSelectedText?this.options.countSelectedText(f.length,i):this.options.countSelectedText;g=j.replace("{0}",f.length.toString()).replace("{1}",i.toString())}}this.options.title=this.$element.attr("title"),"static"==this.options.selectedTextFormat&&(g=this.options.title),g||(g="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",d(g)),this.$newElement.find(".filter-option").html(g)},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(){if(this.options.size!==!1){var a=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),b=a.addClass("open").find("> .dropdown-menu"),c=b.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),d=this.options.header?b.find(".popover-title").outerHeight():0,e=this.options.liveSearch?b.find(".bs-searchbox").outerHeight():0,f=this.options.actionsBox?b.find(".bs-actionsbox").outerHeight():0;a.remove(),this.$newElement.data("liHeight",c).data("headerHeight",d).data("searchHeight",e).data("actionsHeight",f)}},setSize:function(){this.findLis();var b,c,d,e=this,f=this.$menu,g=f.find(".inner"),h=this.$newElement.outerHeight(),i=this.$newElement.data("liHeight"),j=this.$newElement.data("headerHeight"),k=this.$newElement.data("searchHeight"),l=this.$newElement.data("actionsHeight"),m=this.$lis.filter(".divider").outerHeight(!0),n=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"))+parseInt(f.css("border-top-width"))+parseInt(f.css("border-bottom-width")),o=this.options.hideDisabled?", .disabled":"",p=a(window),q=n+parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom"))+2,r=function(){c=e.$newElement.offset().top-p.scrollTop(),d=p.height()-c-h};if(r(),this.options.header&&f.css("padding-top",0),"auto"==this.options.size){var s=function(){var a,h=e.$lis.not(".hide");r(),b=d-q,e.options.dropupAuto&&e.$newElement.toggleClass("dropup",c>d&&b-q<f.height()),e.$newElement.hasClass("dropup")&&(b=c-q),a=h.length+h.filter(".dropdown-header").length>3?3*i+q-2:0,f.css({"max-height":b+"px",overflow:"hidden","min-height":a+j+k+l+"px"}),g.css({"max-height":b-j-k-l-n+"px","overflow-y":"auto","min-height":Math.max(a-n,0)+"px"})};s(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",s),a(window).off("resize.getSize").on("resize.getSize",s),a(window).off("scroll.getSize").on("scroll.getSize",s)}else if(this.options.size&&"auto"!=this.options.size&&f.find("li"+o).length>this.options.size){var t=this.$lis.not(".divider"+o).find(" > *").slice(0,this.options.size).last().parent().index(),u=this.$lis.slice(0,t+1).filter(".divider").length;b=i*this.options.size+u*m+n,e.options.dropupAuto&&this.$newElement.toggleClass("dropup",c>d&&b<f.height()),f.css({"max-height":b+j+k+l+"px",overflow:"hidden"}),g.css({"max-height":b-n+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var a=this.$newElement.clone().appendTo("body"),b=a.find("> .dropdown-menu").css("width"),c=a.css("width","auto").find("> button").css("width");a.remove(),this.$newElement.css("width",Math.max(parseInt(b),parseInt(c))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var b,c,d=this,e="<div />",f=a(e),g=function(a){f.addClass(a.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,f.css({top:b.top+c,left:b.left,width:a[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){d.isDisabled()||(g(a(this)),f.appendTo(d.options.container),f.toggleClass("open",!a(this).hasClass("open")),f.append(d.$menu))}),a(window).resize(function(){g(d.$newElement)}),a(window).on("scroll",function(){g(d.$newElement)}),a("html").on("click",function(b){a(b.target).closest(d.$newElement).length<1&&f.removeClass("open")})},setSelected:function(a,b){this.findLis(),this.$lis.filter('[data-original-index="'+a+'"]').toggleClass("selected",b)},setDisabled:function(a,b){this.findLis(),b?this.$lis.filter('[data-original-index="'+a+'"]').addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$lis.filter('[data-original-index="'+a+'"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var a=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var b=this;this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),this.$newElement.on("click",function(){b.setSize(),b.options.liveSearch||b.multiple||setTimeout(function(){b.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.data("optgroup");b.$menu.find(".selected").has('a[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.change()}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(a){a.target==this&&(a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus())}),this.$menu.on("click","li.divider, li.dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.focus()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).is(".bs-select-all")?b.selectAll():b.deselectAll(),b.$element.change()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var b=this,e=a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){b.$menu.find(".active").removeClass("active"),b.$searchbox.val()&&(b.$searchbox.val(""),b.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),b.multiple||b.$menu.find(".selected").addClass("active"),setTimeout(function(){b.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){b.$searchbox.val()?(b.options.searchAccentInsensitive?b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":aicontains("+c(b.$searchbox.val())+")").parent().addClass("hide"):b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains("+b.$searchbox.val()+")").parent().addClass("hide"),b.$menu.find("li").filter(":visible:not(.no-results)").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(b.options.noneResultsText+' "'+d(b.$searchbox.val())+'"').show(),b.$menu.find("li").last().after(e))):(b.$lis.not(".is-hidden").removeClass("hide"),e.parent().length&&e.remove()),b.$menu.find("li.active").removeClass("active"),b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(),a(this).focus()})},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},selectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()},deselectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()},keydown:function(b){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li a",n),l=o.$menu.parent().hasClass("open"),!l&&/([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode))&&(o.options.container?o.$newElement.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(b.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(b.preventDefault(),o.$menu.parent().removeClass("open"),o.$button.focus()),d=a("[role=menu] li:not(.divider):not(.dropdown-header):visible",n),m.val()||/(38|40)/.test(b.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$newElement.find("li").filter(o.options.searchAccentInsensitive?":aicontains("+c(p[b.keyCode])+")":":icontains("+p[b.keyCode]+")"))),d.length){if(/(38|40)/.test(b.keyCode.toString(10)))e=d.index(d.filter(":focus")),g=d.parent(":not(.disabled):visible").first().index(),h=d.parent(":not(.disabled):visible").last().index(),f=d.eq(e).parent().nextAll(":not(.disabled):visible").eq(0).index(),i=d.eq(e).parent().prevAll(":not(.disabled):visible").eq(0).index(),j=d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).is(":not(.disabled)")&&a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.filter(":not(.disabled):visible").first().data("index"),h=d.filter(":not(.disabled):visible").last().data("index"),f=d.eq(e).nextAll(":not(.disabled):visible").eq(0).data("index"),i=d.eq(e).prevAll(":not(.disabled):visible").eq(0).data("index"),j=d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index")),k=m.data("prevIndex"),38==b.keyCode&&(o.options.liveSearch&&(e-=1),e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)),40==b.keyCode&&(o.options.liveSearch&&(e+=1),-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(b.preventDefault(),m.is(".dropdown-toggle")||(d.removeClass("active"),d.eq(e).addClass("active").find("a").focus(),m.focus())):d.eq(e).focus();else if(!m.is("input")){var q,r,s=[];d.each(function(){a(this).parent().is(":not(.disabled)")&&a.trim(a(this).text().toLowerCase()).substring(0,1)==p[b.keyCode]&&s.push(a(this).parent().index())}),q=a(document).data("keycount"),q++,a(document).data("keycount",q),r=a.trim(a(":focus").text().toLowerCase()).substring(0,1),r!=p[b.keyCode]?(q=1,a(document).data("keycount",q)):q>=s.length&&(a(document).data("keycount",0),q>s.length&&(q=1)),d.eq(s[q-1]).focus()}(/(13|32)/.test(b.keyCode.toString(10))||/(^9$)/.test(b.keyCode.toString(10))&&o.options.selectOnTab)&&l&&(/(32)/.test(b.keyCode.toString(10))||b.preventDefault(),o.options.liveSearch?/(32)/.test(b.keyCode.toString(10))||(o.$menu.find(".active a").click(),m.focus()):a(":focus").click(),a(document).data("keycount",0)),(/(^9$|27)/.test(b.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(b.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},update:function(){this.reloadLi(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()}};var g=a.fn.selectpicker;a.fn.selectpicker=e,a.fn.selectpicker.Constructor=f,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=g,this},a(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",f.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);e.call(b,b.data())})})}(jQuery);
//# sourceMappingURL=bootstrap-select.js.map
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null===n?0/0:+n}function e(n){return!isNaN(n)}function r(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function u(n){return n.length}function i(n){for(var t=1;n*t%1;)t*=10;return t}function o(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function a(){this._=Object.create(null)}function c(n){return(n+="")===la||n[0]===sa?sa+n:n}function l(n){return(n+="")[0]===sa?n.slice(1):n}function s(n){return c(n)in this._}function f(n){return(n=c(n))in this._&&delete this._[n]}function h(){var n=[];for(var t in this._)n.push(l(t));return n}function g(){var n=0;for(var t in this._)++n;return n}function p(){for(var n in this._)return!1;return!0}function v(){this._=Object.create(null)}function d(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function m(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=fa.length;r>e;++e){var u=fa[e]+t;if(u in n)return u}}function y(){}function x(){}function M(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new a;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function _(){Bo.event.preventDefault()}function b(){for(var n,t=Bo.event;n=t.sourceEvent;)t=n;return t}function w(n){for(var t=new x,e=0,r=arguments.length;++e<r;)t[arguments[e]]=M(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Bo.event;u.target=n,Bo.event=u,t[u.type].apply(e,r)}finally{Bo.event=i}}},t}function S(n){return ga(n,ya),n}function k(n){return"function"==typeof n?n:function(){return pa(n,this)}}function E(n){return"function"==typeof n?n:function(){return va(n,this)}}function A(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Bo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function C(n){return n.trim().replace(/\s+/g," ")}function N(n){return new RegExp("(?:^|\\s+)"+Bo.requote(n)+"(?:\\s+|$)","g")}function z(n){return(n+"").trim().split(/^|\s+/)}function L(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=z(n).map(T);var u=n.length;return"function"==typeof t?r:e}function T(n){var t=N(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",C(u+" "+n))):e.setAttribute("class",C(u.replace(t," ")))}}function q(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function R(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function D(n){return"function"==typeof n?n:(n=Bo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function P(n){return{__data__:n}}function U(n){return function(){return ma(this,n)}}function j(t){return arguments.length||(t=n),function(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}}function F(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function H(n){return ga(n,Ma),n}function O(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function Y(){var n=this.__transition__;n&&++n.active}function I(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Jo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Bo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=Z;a>0&&(n=n.slice(0,a));var l=ba.get(n);return l&&(n=l,c=V),a?t?u:r:t?y:i}function Z(n,t){return function(e){var r=Bo.event;Bo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Bo.event=r}}}function V(n,t){var e=Z(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function X(){var n=".dragsuppress-"+ ++Sa,t="click"+n,e=Bo.select(Qo).on("touchmove"+n,_).on("dragstart"+n,_).on("selectstart"+n,_);if(wa){var r=Ko.style,u=r[wa];r[wa]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),wa&&(r[wa]=u),i&&(e.on(t,function(){_(),o()},!0),setTimeout(o,0))}}function $(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>ka&&(Qo.scrollX||Qo.scrollY)){e=Bo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();ka=!(u.f||u.e),e.remove()}return ka?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function B(){return Bo.event.changedTouches[0].identifier}function W(){return Bo.event.target}function J(){return Qo}function G(n){return n>0?1:0>n?-1:0}function K(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function Q(n){return n>1?0:-1>n?Ea:Math.acos(n)}function nt(n){return n>1?Ca:-1>n?-Ca:Math.asin(n)}function tt(n){return((n=Math.exp(n))-1/n)/2}function et(n){return((n=Math.exp(n))+1/n)/2}function rt(n){return((n=Math.exp(2*n))-1)/(n+1)}function ut(n){return(n=Math.sin(n/2))*n}function it(){}function ot(n,t,e){return this instanceof ot?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ot?new ot(n.h,n.s,n.l):Mt(""+n,_t,ot):new ot(n,t,e)}function at(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,new dt(u(n+120),u(n),u(n-120))}function ct(n,t,e){return this instanceof ct?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof ct?new ct(n.h,n.c,n.l):n instanceof st?ht(n.l,n.a,n.b):ht((n=bt((n=Bo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new ct(n,t,e)}function lt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new st(e,Math.cos(n*=La)*t,Math.sin(n)*t)}function st(n,t,e){return this instanceof st?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof st?new st(n.l,n.a,n.b):n instanceof ct?lt(n.h,n.c,n.l):bt((n=dt(n)).r,n.g,n.b):new st(n,t,e)}function ft(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=gt(u)*Ya,r=gt(r)*Ia,i=gt(i)*Za,new dt(vt(3.2404542*u-1.5371385*r-.4985314*i),vt(-.969266*u+1.8760108*r+.041556*i),vt(.0556434*u-.2040259*r+1.0572252*i))}function ht(n,t,e){return n>0?new ct(Math.atan2(e,t)*Ta,Math.sqrt(t*t+e*e),n):new ct(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n,t,e){return this instanceof dt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof dt?new dt(n.r,n.g,n.b):Mt(""+n,dt,at):new dt(n,t,e)}function mt(n){return new dt(n>>16,255&n>>8,255&n)}function yt(n){return mt(n)+""}function xt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function Mt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(St(u[0]),St(u[1]),St(u[2]))}return(i=$a.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function _t(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),new ot(r,u,c)}function bt(n,t,e){n=wt(n),t=wt(t),e=wt(e);var r=pt((.4124564*n+.3575761*t+.1804375*e)/Ya),u=pt((.2126729*n+.7151522*t+.072175*e)/Ia),i=pt((.0193339*n+.119192*t+.9503041*e)/Za);return st(116*u-16,500*(r-u),200*(u-i))}function wt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function St(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function kt(n){return"function"==typeof n?n:function(){return n}}function Et(n){return n}function At(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Ct(t,e,n,r)}}function Ct(n,t,e,r){function u(){var n,t=c.status;if(!t&&zt(c)||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Bo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!Qo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Bo.event;Bo.event=n;try{o.progress.call(i,c)}finally{Bo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Jo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Bo.rebind(i,o,"on"),null==r?i:i.get(Nt(r))}function Nt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function zt(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Lt(){var n=Tt(),t=qt()-n;t>24?(isFinite(t)&&(clearTimeout(Ga),Ga=setTimeout(Lt,t)),Ja=0):(Ja=1,Qa(Lt))}function Tt(){var n=Date.now();for(Ka=Ba;Ka;)n>=Ka.t&&(Ka.f=Ka.c(n-Ka.t)),Ka=Ka.n;return n}function qt(){for(var n,t=Ba,e=1/0;t;)t.f?t=n?n.n=t.n:Ba=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return Wa=n,e}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var e=Math.pow(10,3*ca(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Pt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],o=0,a=r[0],c=0;u>0&&a>0&&(c+a+1>t&&(a=Math.max(1,t-c)),i.push(n.substring(u-=a,u+a)),!((c+=a+1)>t));)a=r[o=(o+1)%r.length];return i.reverse().join(e)}:Et;return function(n){var e=tc.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",c=e[4]||"",l=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=ec.get(g)||Ut;var x=l&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>p){var c=Bo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var M,_,b=n.lastIndexOf(".");if(0>b){var w=y?n.lastIndexOf("e"):-1;0>w?(M=n,_=""):(M=n.substring(0,w),_=n.substring(w))}else M=n.substring(0,b),_=t+n.substring(b+1);!l&&f&&(M=i(M,1/0));var S=v.length+M.length+_.length+(x?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return x&&(M=i(k+M,k.length?s-_.length:1/0)),u+=v,n=M+_,("<"===o?u+n+k:">"===o?k+u+n:"^"===o?k.substring(0,S>>=1)+u+n+k.substring(S):u+(x?n:k+n))+e}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ft(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new uc(e-1)),1),e}function i(n,e){return t(n=new uc(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{uc=jt;var r=new jt;return r._=n,o(r,t,e)}finally{uc=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ht(n);return c.floor=c,c.round=Ht(r),c.ceil=Ht(u),c.offset=Ht(i),c.range=a,n}function Ht(n){return function(t,e){try{uc=jt;var r=new jt;return r._=t,n(r,e)._}finally{uc=Date}}}function Ot(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(c,a)),null!=(u=oc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.slice(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&uc!==jt,o=new(i?jt:uc);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(0|r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in oc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.slice(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function l(n,t,r){return e(n,C.X.toString(),t,r)}function s(n,t,e){var r=x.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{uc=jt;var t=new uc;return t._=n,r(t)}finally{uc=Date}}var r=t(n);return e.parse=function(n){try{uc=jt;var t=r.parse(n);return t&&t._}finally{uc=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ae;var x=Bo.map(),M=It(v),_=Zt(v),b=It(d),w=Zt(d),S=It(m),k=Zt(m),E=It(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Yt(n.getDate(),t,2)},e:function(n,t){return Yt(n.getDate(),t,2)},H:function(n,t){return Yt(n.getHours(),t,2)},I:function(n,t){return Yt(n.getHours()%12||12,t,2)},j:function(n,t){return Yt(1+rc.dayOfYear(n),t,3)},L:function(n,t){return Yt(n.getMilliseconds(),t,3)},m:function(n,t){return Yt(n.getMonth()+1,t,2)},M:function(n,t){return Yt(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Yt(n.getSeconds(),t,2)},U:function(n,t){return Yt(rc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Yt(rc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Yt(n.getFullYear()%100,t,2)},Y:function(n,t){return Yt(n.getFullYear()%1e4,t,4)},Z:ie,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:te,I:te,j:ne,L:ue,m:Kt,M:ee,p:s,S:re,U:Xt,w:Vt,W:$t,x:c,X:l,y:Wt,Y:Bt,Z:Jt,"%":oe};return t}function Yt(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function It(n){return new RegExp("^(?:"+n.map(Bo.requote).join("|")+")","i")}function Zt(n){for(var t=new a,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Vt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Xt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function $t(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Bt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Wt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.y=Gt(+r[0]),e+r[0].length):-1}function Jt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qt(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ne(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function te(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ee(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function re(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ue(n,t,e){ac.lastIndex=0;var r=ac.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ie(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=0|ca(t)/60,u=ca(t)%60;return e+Yt(r,"0",2)+Yt(u,"0",2)}function oe(n,t,e){cc.lastIndex=0;var r=cc.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ae(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ce(){}function le(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function se(n,t){n&&hc.hasOwnProperty(n.type)&&hc[n.type](n,t)}function fe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function he(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)fe(n[e],t,1);t.polygonEnd()}function ge(){function n(n,t){n*=La,t=t*La/2+Ea/4;var e=n-r,o=e>=0?1:-1,a=o*e,c=Math.cos(t),l=Math.sin(t),s=i*l,f=u*c+s*Math.cos(a),h=s*o*Math.sin(a);pc.add(Math.atan2(h,f)),r=n,u=c,i=l}var t,e,r,u,i;vc.point=function(o,a){vc.point=n,r=(t=o)*La,u=Math.cos(a=(e=a)*La/2+Ea/4),i=Math.sin(a)},vc.lineEnd=function(){n(t,e)}}function pe(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function ve(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function de(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function me(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ye(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Me(n){return[Math.atan2(n[1],n[0]),nt(n[2])]}function _e(n,t){return ca(n[0]-t[0])<Na&&ca(n[1]-t[1])<Na}function be(n,t){n*=La;var e=Math.cos(t*=La);we(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function we(n,t,e){++dc,yc+=(n-yc)/dc,xc+=(t-xc)/dc,Mc+=(e-Mc)/dc}function Se(){function n(n,u){n*=La;var i=Math.cos(u*=La),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);mc+=l,_c+=l*(t+(t=o)),bc+=l*(e+(e=a)),wc+=l*(r+(r=c)),we(t,e,r)}var t,e,r;Ac.point=function(u,i){u*=La;var o=Math.cos(i*=La);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Ac.point=n,we(t,e,r)}}function ke(){Ac.point=be}function Ee(){function n(n,t){n*=La;var e=Math.cos(t*=La),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-Q(g)/h,v=Math.atan2(h,g);Sc+=p*l,kc+=p*s,Ec+=p*f,mc+=v,_c+=v*(r+(r=o)),bc+=v*(u+(u=a)),wc+=v*(i+(i=c)),we(r,u,i)}var t,e,r,u,i;Ac.point=function(o,a){t=o,e=a,Ac.point=n,o*=La;var c=Math.cos(a*=La);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),we(r,u,i)},Ac.lineEnd=function(){n(t,e),Ac.lineEnd=ke,Ac.point=be}}function Ae(){return!0}function Ce(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(_e(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ze(e,n,null,!0),l=new ze(e,null,c,!1);c.o=l,i.push(c),o.push(l),c=new ze(r,n,null,!1),l=new ze(r,null,c,!0),c.o=l,i.push(c),o.push(l)}}),o.sort(t),Ne(i),Ne(o),i.length){for(var a=0,c=e,l=o.length;l>a;++a)o[a].e=c=!c;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,l=s.length;l>a;++a)u.point((f=s[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var a=s.length-1;a>=0;--a)u.point((f=s[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Ne(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ze(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Le(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function l(){y.point=o,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,o=-1;if(r>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Te))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:l,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=l,g=Bo.merge(g);var n=je(m,p);g.length?(_||(i.polygonStart(),_=!0),Ce(g,Re,n,e,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=qe(),M=t(x),_=!1;return y}}function Te(n){return n.length>1}function qe(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:y,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Re(n,t){return((n=n.x)[0]<0?n[1]-Ca-Na:Ca-n[1])-((t=t.x)[0]<0?t[1]-Ca-Na:Ca-t[1])}function De(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Ea:-Ea,c=ca(i-e);ca(c-Ea)<Na?(n.point(e,r=(r+o)/2>0?Ca:-Ca),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Ea&&(ca(e-u)<Na&&(e-=u*Na),ca(i-a)<Na&&(i-=a*Na),r=Pe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function Pe(n,t,e,r){var u,i,o=Math.sin(n-e);return ca(o)>Na?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Ue(n,t,e,r){var u;if(null==n)u=e*Ca,r.point(-Ea,u),r.point(0,u),r.point(Ea,u),r.point(Ea,0),r.point(Ea,-u),r.point(0,-u),r.point(-Ea,-u),r.point(-Ea,0),r.point(-Ea,u);else if(ca(n[0]-t[0])>Na){var i=n[0]<t[0]?Ea:-Ea;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function je(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;pc.reset();for(var a=0,c=t.length;c>a;++a){var l=t[a],s=l.length;if(s)for(var f=l[0],h=f[0],g=f[1]/2+Ea/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=l[d];var m=n[0],y=n[1]/2+Ea/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>Ea,k=p*x;if(pc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Aa:_,S^h>=e^m>=e){var E=de(pe(f),pe(n));xe(E);var A=de(u,E);xe(A);var C=(S^_>=0?-1:1)*nt(A[2]);(r>C||r===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Na>i||Na>i&&0>pc)^1&o}function Fe(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,l,s;return{lineStart:function(){l=c=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Ea:-Ea),h):0;if(!e&&(l=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(_e(e,g)||_e(p,g))&&(p[0]+=Na,p[1]+=Na,v=t(p[0],p[1]))),v!==c)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(s=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&_e(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return s|(l&&c)<<1}}}function r(n,t,e){var r=pe(n),u=pe(t),o=[1,0,0],a=de(r,u),c=ve(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=i*c/s,h=-i*l/s,g=de(o,a),p=ye(o,f),v=ye(a,h);me(p,v);var d=g,m=ve(p,d),y=ve(d,d),x=m*m-y*(ve(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ye(d,(-m-M)/y);if(me(_,p),_=Me(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ca(A-Ea)<Na,N=C||Na>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ca(_[0]-w)<Na?k:E):k<=_[1]&&_[1]<=E:A>Ea^(w<=_[0]&&_[0]<=S)){var z=ye(d,(-m+M)/y);return me(z,p),[_,Me(z)]}}}function u(t,e){var r=o?n:Ea-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ca(i)>Na,c=gr(n,6*La);return Le(t,e,c,o?[0,-n]:[-Ea,n-Ea])}function He(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,l=o.y,s=a.x,f=a.y,h=0,g=1,p=s-c,v=f-l;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-l,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-l,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:l+h*v}),1>g&&(u.b={x:c+g*p,y:l+g*v}),u}}}}}}function Oe(n,t,e,r){function u(r,u){return ca(r[0]-n)<Na?u>0?0:3:ca(r[0]-e)<Na?u>0?2:1:ca(r[1]-t)<Na?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&K(l,i,n)>0&&++t:i[1]<=r&&K(l,i,n)<0&&--t,l=i;return 0!==t}function l(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Nc,Math.min(Nc,n)),t=Math.max(-Nc,Math.min(Nc,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=qe(),C=He(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Bo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),l(null,null,1,a),a.lineEnd()),u&&Ce(v,i,t,l,a),a.polygonEnd()),v=d=m=null}};return N}}function Ye(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Ie(n){var t=0,e=Ea/3,r=ir(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Ea/180,e=n[1]*Ea/180):[180*(t/Ea),180*(e/Ea)]},u}function Ze(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,nt((i-(n*n+e*e)*u*u)/(2*u))]},e}function Ve(){function n(n,t){Lc+=u*n-r*t,r=n,u=t}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,t=r=i,e=u=o},Pc.lineEnd=function(){n(t,e)}}function Xe(n,t){Tc>n&&(Tc=n),n>Rc&&(Rc=n),qc>t&&(qc=t),t>Dc&&(Dc=t)}function $e(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Be(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Be(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Be(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function We(n,t){yc+=n,xc+=t,++Mc}function Je(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);_c+=o*(t+n)/2,bc+=o*(e+r)/2,wc+=o,We(t=n,e=r)}var t,e;jc.point=function(r,u){jc.point=n,We(t=r,e=u)}}function Ge(){jc.point=We}function Ke(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);_c+=o*(r+n)/2,bc+=o*(u+t)/2,wc+=o,o=u*n-r*t,Sc+=o*(r+n),kc+=o*(u+t),Ec+=3*o,We(r=n,u=t)}var t,e,r,u;jc.point=function(i,o){jc.point=n,We(t=r=i,e=u=o)},jc.lineEnd=function(){n(t,e)}}function Qe(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,Aa)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:y};return a}function nr(n){function t(n){return(a?r:e)(n)}function e(t){return rr(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=pe([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=l,S.lineEnd=s}function l(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function s(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,l,s,f,h,g,p,v,d,m){var y=s-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=l+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ca(ca(w)-1)<Na||ca(r-h)<Na?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-e,T=x*z-y*L;
(T*T/M>i||ca((y*z+x*L)/M-.5)>.3||o>a*g+c*p+l*v)&&(u(t,e,r,a,c,l,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,s,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*La),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function tr(n){var t=nr(function(t,e){return n([t*Ta,e*Ta])});return function(n){return or(t(n))}}function er(n){this.stream=n}function rr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ur(n){return ir(function(){return n})()}function ir(n){function t(n){return n=a(n[0]*La,n[1]*La),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Ta,n[1]*Ta]}function r(){a=Ye(o=lr(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=nr(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Cc,_=Et,b=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=or(M(o,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Cc):Fe((b=+n)*La),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Oe(n[0][0],n[0][1],n[1][0],n[1][1]):Et,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*La,d=n[1]%360*La,r()):[v*Ta,d*Ta]},t.rotate=function(n){return arguments.length?(m=n[0]%360*La,y=n[1]%360*La,x=n.length>2?n[2]%360*La:0,r()):[m*Ta,y*Ta,x*Ta]},Bo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function or(n){return rr(n,function(t,e){n.point(t*La,e*La)})}function ar(n,t){return[n,t]}function cr(n,t){return[n>Ea?n-Aa:-Ea>n?n+Aa:n,t]}function lr(n,t,e){return n?t||e?Ye(fr(n),hr(t,e)):fr(n):t||e?hr(t,e):cr}function sr(n){return function(t,e){return t+=n,[t>Ea?t-Aa:-Ea>t?t+Aa:t,e]}}function fr(n){var t=sr(n);return t.invert=sr(-n),t}function hr(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),nt(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),nt(s*r-a*u)]},e}function gr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pr(e,u),i=pr(e,i),(o>0?i>u:u>i)&&(u+=o*Aa)):(u=n+o*Aa,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=Me([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function pr(n,t){var e=pe(t);e[0]-=n,xe(e);var r=Q(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Na)%(2*Math.PI)}function vr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function dr(n,t,e){var r=Bo.range(n,t-Na,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function mr(n){return n.source}function yr(n){return n.target}function xr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(ut(r-t)+u*o*ut(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Ta,Math.atan2(o,Math.sqrt(r*r+u*u))*Ta]}:function(){return[n*Ta,t*Ta]};return p.distance=h,p}function Mr(){function n(n,u){var i=Math.sin(u*=La),o=Math.cos(u),a=ca((n*=La)-t),c=Math.cos(a);Fc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;Hc.point=function(u,i){t=u*La,e=Math.sin(i*=La),r=Math.cos(i),Hc.point=n},Hc.lineEnd=function(){Hc.point=Hc.lineEnd=y}}function _r(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function br(n,t){function e(n,t){o>0?-Ca+Na>t&&(t=-Ca+Na):t>Ca-Na&&(t=Ca-Na);var e=o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Ea/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=G(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ca]},e):Sr}function wr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return ca(u)<Na?ar:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-G(u)*Math.sqrt(n*n+e*e)]},e)}function Sr(n,t){return[n,Math.log(Math.tan(Ea/4+t/2))]}function kr(n){var t,e=ur(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Ea*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Er(n,t){return[Math.log(Math.tan(Ea/4+t/2)),-n]}function Ar(n){return n[0]}function Cr(n){return n[1]}function Nr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&K(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function zr(n,t){return n[0]-t[0]||n[1]-t[1]}function Lr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Tr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function qr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Rr(){tu(this),this.edge=this.site=this.circle=null}function Dr(n){var t=Kc.pop()||new Rr;return t.site=n,t}function Pr(n){Xr(n),Wc.remove(n),Kc.push(n),tu(n)}function Ur(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];Pr(n);for(var c=i;c.circle&&ca(e-c.circle.x)<Na&&ca(r-c.circle.cy)<Na;)i=c.P,a.unshift(c),Pr(c),c=i;a.unshift(c),Xr(c);for(var l=o;l.circle&&ca(e-l.circle.x)<Na&&ca(r-l.circle.cy)<Na;)o=l.N,a.push(l),Pr(l),l=o;a.push(l),Xr(l);var s,f=a.length;for(s=1;f>s;++s)l=a[s],c=a[s-1],Kr(l.edge,c.site,l.site,u);c=a[0],l=a[f-1],l.edge=Jr(c.site,l.site,null,u),Vr(c),Vr(l)}function jr(n){for(var t,e,r,u,i=n.x,o=n.y,a=Wc._;a;)if(r=Fr(a,o)-i,r>Na)a=a.L;else{if(u=i-Hr(a,o),!(u>Na)){r>-Na?(t=a.P,e=a):u>-Na?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Dr(n);if(Wc.insert(t,c),t||e){if(t===e)return Xr(t),e=Dr(t.site),Wc.insert(c,e),c.edge=e.edge=Jr(t.site,c.site),Vr(t),Vr(e),void 0;if(!e)return c.edge=Jr(t.site,c.site),void 0;Xr(t),Xr(e);var l=t.site,s=l.x,f=l.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+s,y:(h*x-v*y)/m+f};Kr(e.edge,l,p,M),c.edge=Jr(l,n,null,M),e.edge=Jr(n,p,null,M),Vr(t),Vr(e)}}function Fr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,l=c-t;if(!l)return a;var s=a-r,f=1/i-1/l,h=s/l;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*l)-c+l/2+u-i/2)))/f+r:(r+a)/2}function Hr(n,t){var e=n.N;if(e)return Fr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Or(n){this.site=n,this.edges=[]}function Yr(n){for(var t,e,r,u,i,o,a,c,l,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Bc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)s=a[o].end(),r=s.x,u=s.y,l=a[++o%c].start(),t=l.x,e=l.y,(ca(r-t)>Na||ca(u-e)>Na)&&(a.splice(o,0,new Qr(Gr(i.site,s,ca(r-f)<Na&&p-u>Na?{x:f,y:ca(t-f)<Na?e:p}:ca(u-p)<Na&&h-r>Na?{x:ca(e-p)<Na?t:h,y:p}:ca(r-h)<Na&&u-g>Na?{x:h,y:ca(t-h)<Na?e:g}:ca(u-g)<Na&&r-f>Na?{x:ca(e-g)<Na?t:f,y:g}:null),i.site,null)),++c)}function Ir(n,t){return t.angle-n.angle}function Zr(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,l=r.y-a,s=i.x-o,f=i.y-a,h=2*(c*f-l*s);if(!(h>=-za)){var g=c*c+l*l,p=s*s+f*f,v=(f*g-l*p)/h,d=(c*p-s*g)/h,f=d+a,m=Qc.pop()||new Zr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Gc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Gc.insert(y,m),y||(Jc=m)}}}}function Xr(n){var t=n.circle;t&&(t.P||(Jc=t.N),Gc.remove(t),Qc.push(t),tu(t),n.circle=null)}function $r(n){for(var t,e=$c,r=He(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Br(t,n)||!r(t)||ca(t.a.x-t.b.x)<Na&&ca(t.a.y-t.b.y)<Na)&&(t.a=t.b=null,e.splice(u,1))}function Br(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],l=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=l)return}else i={x:d,y:c};e={x:d,y:l}}else{if(i){if(i.y<c)return}else i={x:d,y:l};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else{if(i){if(i.y<c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Wr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Jr(n,t,e,r){var u=new Wr(n,t);return $c.push(u),e&&Kr(u,n,t,e),r&&Kr(u,t,n,r),Bc[n.i].edges.push(new Qr(u,n,t)),Bc[t.i].edges.push(new Qr(u,t,n)),u}function Gr(n,t,e){var r=new Wr(n,null);return r.a=t,r.b=e,$c.push(r),r}function Kr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Qr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function eu(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ru(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var e,r,u,i=n.sort(ou).pop();for($c=[],Bc=new Array(n.length),Wc=new nu,Gc=new nu;;)if(u=Jc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Bc[i.i]=new Or(i),jr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Ur(u.arc)}t&&($r(t),Yr(t));var o={cells:Bc,edges:$c};return Wc=Gc=$c=Bc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function cu(n){return n.x}function lu(n){return n.y}function su(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&fu(n,c[0],e,r,o,a),c[1]&&fu(n,c[1],o,r,u,a),c[2]&&fu(n,c[2],e,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Bo.rgb(n),t=Bo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+xt(Math.round(e+i*n))+xt(Math.round(r+o*n))+xt(Math.round(u+a*n))}}function gu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=du(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function pu(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function vu(n,t){var e,r,u,i=tl.lastIndex=el.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(e=tl.exec(n))&&(r=el.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),a[o]?a[o]+=u:a[++o]=u),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,c.push({i:o,x:pu(e,r)})),i=el.lastIndex;return i<t.length&&(u=t.slice(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var e,r=0;t>r;++r)a[(e=c[r]).i]=e.x(n);return a.join("")})}function du(n,t){for(var e,r=Bo.interpolators.length;--r>=0&&!(e=Bo.interpolators[r](n,t)););return e}function mu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(du(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*Ca)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Aa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Aa/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function zu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=Bo.hcl(n),t=Bo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return lt(e+i*n,r+o*n,u+a*n)+""}}function Tu(n,t){n=Bo.hsl(n),t=Bo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return at(e+i*n,r+o*n,u+a*n)+""}}function qu(n,t){n=Bo.lab(n),t=Bo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ft(e+i*n,r+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Du(n){var t=[n.a,n.b],e=[n.c,n.d],r=Uu(t),u=Pu(t,e),i=Uu(ju(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ta,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ta:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Fu(n,t){var e,r=[],u=[],i=Bo.transform(n),o=Bo.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:pu(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:pu(g[0],p[0])},{i:e-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Hu(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Ou(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Yu(n){for(var t=n.source,e=n.target,r=Zu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Iu(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var e=Iu(n),r=Iu(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Vu(n){n.fixed|=2}function Xu(n){n.fixed&=-7}function $u(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Wu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Wu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Ju(n,t){return Bo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ei,n}function Gu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function Ku(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)e.push(i[o]);for(;null!=(n=r.pop());)t(n)}function Qu(n){return n.children}function ni(n){return n.value}function ti(n,t){return t.value-n.value}function ei(n){return Bo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ri(n){return n.x}function ui(n){return n.y}function ii(n,t,e){n.y0=t,n.y=e}function oi(n){return Bo.range(n.length)}function ai(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ci(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function li(n){return n.reduce(si,0)}function si(n,t){return n+t[1]}function fi(n,t){return hi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function hi(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function gi(n){return[Bo.min(n),Bo.max(n)]}function pi(n,t){return n.value-t.value}function vi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function di(n,t){n._pack_next=t,t._pack_prev=n}function mi(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function yi(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(xi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],bi(r,u,i),t(i),vi(r,i),r._pack_prev=i,vi(i,u),u=r._pack_next,o=3;l>o;o++){bi(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(mi(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?di(r,u=a):di(r=c,u),o--):(vi(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,x=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Mi)}}function xi(n){n._pack_next=n._pack_prev=n}function Mi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,e,r)}function bi(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function wi(n,t){return n.parent==t.parent?1:2}function Si(n){var t=n.children;return t.length?t[0]:n.t}function ki(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ei(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Ai(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ci(n,t,e){return n.a.parent===t.parent?n.a:e}function Ni(n){return 1+Bo.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,e=n.children;return e&&(t=e.length)?Ti(e[t-1]):n}function qi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ri(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Di(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Pi(n){return n.rangeExtent?n.rangeExtent():Di(n.range())}function Ui(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function ji(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Fi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:gl}function Hi(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Bo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Oi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Hi:Ui,c=r?Ou:Hu;return o=u(n,t,c,e),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Vi(n,t)},i.tickFormat=function(t,e){return Xi(n,t,e)},i.nice=function(t){return Ii(n,t),u()},i.copy=function(){return Oi(n,t,e,r)},u()}function Yi(n,t){return Bo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Ii(n,t){return ji(n,Fi(Zi(n,t)[2]))}function Zi(n,t){null==t&&(t=10);var e=Di(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Vi(n,t){return Bo.range.apply(Bo,Zi(n,t))}function Xi(n,t,e){var r=Zi(n,t);if(e){var u=tc.exec(e);if(u.shift(),"s"===u[8]){var i=Bo.formatPrefix(Math.max(ca(r[0]),ca(r[1])));return u[7]||(u[7]="."+$i(i.scale(r[2]))),u[8]="f",e=Bo.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Bi(u[8],r)),e=u.join("")}else e=",."+$i(r[2])+"f";return Bo.format(e)}function $i(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Bi(n,t){var e=$i(t[2]);return n in pl?Math.abs(e-$i(Math.max(ca(t[0]),ca(t[1]))))+ +("e"!==n):e-2*("%"===n)}function Wi(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=ji(r.map(u),e?Math:dl);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Di(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return vl;arguments.length<2?t=vl:"function"!=typeof t&&(t=Bo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return Wi(n.copy(),t,e,r)},Yi(o,n)}function Ji(n,t,e){function r(t){return n(u(t))}var u=Gi(t),i=Gi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Vi(e,n)},r.tickFormat=function(n,t){return Xi(e,n,t)},r.nice=function(n){return r.domain(Ii(e,n))},r.exponent=function(o){return arguments.length?(u=Gi(t=o),i=Gi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Ji(n.copy(),t,e)},Yi(r,n)}function Gi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ki(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):0/0))-1)%i.length]}function r(t,e){return Bo.range(n.length).map(function(n){return t+e*n})}var u,i,o;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new a;for(var i,o=-1,c=r.length;++o<c;)u.has(i=r[o])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,o=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,a){arguments.length<2&&(a=0);var c=u[0],l=u[1],s=(l-c)/(Math.max(1,n.length-1)+a);return i=r(n.length<2?(c+l)/2:c+s*a/2,s),o=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-a+2*c);return i=r(s+h*c,h),l&&i.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,a,c){arguments.length<2&&(a=0),arguments.length<3&&(c=a);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-a+2*c)),g=f-s-(n.length-a)*h;return i=r(s+Math.round(g/2),h),l&&i.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Di(t.a[0])},e.copy=function(){return Ki(n,t)},e.domain(n)}function Qi(r,u){function i(){var n=0,t=u.length;for(a=[];++n<t;)a[n-1]=Bo.quantile(r,n/t);return o}function o(n){return isNaN(n=+n)?void 0:u[Bo.bisect(a,n)]}var a;return o.domain=function(u){return arguments.length?(r=u.map(t).filter(e).sort(n),i()):r},o.range=function(n){return arguments.length?(u=n,i()):u},o.quantiles=function(){return a},o.invertExtent=function(n){return n=u.indexOf(n),0>n?[0/0,0/0]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},o.copy=function(){return Qi(r,u)},i()}function no(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return no(n,t,e)},u()}function to(n,t){function e(e){return e>=e?t[Bo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return to(n,t)},e}function eo(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Vi(n,t)},t.tickFormat=function(t,e){return Xi(n,t,e)},t.copy=function(){return eo(n)},t}function ro(n){return n.innerRadius}function uo(n){return n.outerRadius}function io(n){return n.startAngle}function oo(n){return n.endAngle}function ao(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=kt(e),p=kt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ar,r=Cr,u=Ae,i=co,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=wl.get(n)||co).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function co(n){return n.join("L")}function lo(n){return co(n)+"Z"}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function fo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function ho(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function go(n,t){return n.length<4?co(n):n[1]+mo(n.slice(1,n.length-1),yo(n,t))}function po(n,t){return n.length<3?co(n):n[0]+mo((n.push(n[0]),n),yo([n[n.length-2]].concat(n,[n[1]]),t))}function vo(n,t){return n.length<3?co(n):n[0]+mo(n,yo(n,t))}function mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return co(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function yo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function xo(n){if(n.length<3)return co(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",wo(El,o),",",wo(El,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),So(c,o,a);return n.pop(),c.push("L",r),c.join("")}function Mo(n){if(n.length<4)return co(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(wo(El,i)+","+wo(El,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),So(e,i,o);return e.join("")}function _o(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[wo(El,o),",",wo(El,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),So(t,o,a);return t.join("")}function bo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return xo(n)}function wo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function So(n,t,e){n.push("C",wo(Sl,t),",",wo(Sl,e),",",wo(kl,t),",",wo(kl,e),",",wo(El,t),",",wo(El,e))}function ko(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Eo(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=ko(u,i);++t<e;)r[t]=(o+(o=ko(u=i,i=n[t+1])))/2;return r[t]=o,r}function Ao(n){for(var t,e,r,u,i=[],o=Eo(n),a=-1,c=n.length-1;++a<c;)t=ko(n[a],n[a+1]),ca(t)<Na?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Co(n){return n.length<3?co(n):n[0]+mo(n,Ao(n))}function No(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+_l,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),s,l(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=kt(e),_=kt(u),b=e===r?function(){return g}:kt(r),w=u===i?function(){return p}:kt(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=Ar,r=Ar,u=0,i=Cr,o=Ae,a=co,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=wl.get(n)||co).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Lo(n){return n.radius}function To(n){return[n.x,n.y]}function qo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+_l;return[e*Math.cos(r),e*Math.sin(r)]}}function Ro(){return 64}function Do(){return"circle"}function Po(n){var t=Math.sqrt(n/Ea);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Uo(n,t){return ga(n,Tl),n.id=t,n}function jo(n,t,e,r){var u=n.id;return F(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Fo(n){return null==n&&(n=""),function(){this.textContent=n}}function Ho(n,t,e,r){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[e];if(!i){var o=r.time;i=u[e]={tween:new a,time:o,ease:r.ease,delay:r.delay,duration:r.duration},++u.count,Bo.timer(function(r){function a(r){return u.active>e?l():(u.active=e,i.event&&i.event.start.call(n,s,t),i.tween.forEach(function(e,r){(r=r.call(n,s,t))&&v.push(r)
}),Bo.timer(function(){return p.c=c(r||1)?Ae:c,1},0,o),void 0)}function c(r){if(u.active!==e)return l();for(var o=r/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,s,t),l()):void 0}function l(){return--u.count?delete u[e]:delete n.__transition__,1}var s=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ka,v=[];return p.t=h+o,r>=h?a(r-h):(p.c=a,void 0)},0,o)}}function Oo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function Yo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function Io(n){return n.toISOString()}function Zo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Bo.bisect(Ol,u);return i==Ol.length?[t.year,Zi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ol[i-1]<Ol[i]/u?i-1:i]:[Zl,Zi(n,e)[2]]}return r.invert=function(t){return Vo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Vo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Vo(+e+1),t).length}var i=r.domain(),o=Di(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(ji(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Vo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Vo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Di(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Vo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Zo(n.copy(),t,e)},Yi(r,n)}function Vo(n){return new Date(n)}function Xo(n){return JSON.parse(n.responseText)}function $o(n){var t=Go.createRange();return t.selectNode(Go.body),t.createContextualFragment(n.responseText)}var Bo={version:"3.4.13"};Date.now||(Date.now=function(){return+new Date});var Wo=[].slice,Jo=function(n){return Wo.call(n)},Go=document,Ko=Go.documentElement,Qo=window;try{Jo(Ko.childNodes)[0].nodeType}catch(na){Jo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Go.createElement("div").style.setProperty("opacity",0,"")}catch(ta){var ea=Qo.Element.prototype,ra=ea.setAttribute,ua=ea.setAttributeNS,ia=Qo.CSSStyleDeclaration.prototype,oa=ia.setProperty;ea.setAttribute=function(n,t){ra.call(this,n,t+"")},ea.setAttributeNS=function(n,t,e){ua.call(this,n,t,e+"")},ia.setProperty=function(n,t,e){oa.call(this,n,t+"",e)}}Bo.ascending=n,Bo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Bo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Bo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Bo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Bo.sum=function(n,t){var r,u=0,i=n.length,o=-1;if(1===arguments.length)for(;++o<i;)e(r=+n[o])&&(u+=r);else for(;++o<i;)e(r=+t.call(n,n[o],o))&&(u+=r);return u},Bo.mean=function(n,r){var u,i=0,o=n.length,a=-1,c=o;if(1===arguments.length)for(;++a<o;)e(u=t(n[a]))?i+=u:--c;else for(;++a<o;)e(u=t(r.call(n,n[a],a)))?i+=u:--c;return c?i/c:void 0},Bo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Bo.median=function(r,u){var i,o=[],a=r.length,c=-1;if(1===arguments.length)for(;++c<a;)e(i=t(r[c]))&&o.push(i);else for(;++c<a;)e(i=t(u.call(r,r[c],c)))&&o.push(i);return o.length?Bo.quantile(o.sort(n),.5):void 0};var aa=r(n);Bo.bisectLeft=aa.left,Bo.bisect=Bo.bisectRight=aa.right,Bo.bisector=function(t){return r(1===t.length?function(e,r){return n(t(e),r)}:t)},Bo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Bo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Bo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Bo.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=Bo.min(arguments,u),e=new Array(t);++n<t;)for(var r,i=-1,o=e[n]=new Array(r);++i<r;)o[i]=arguments[i][n];return e},Bo.transpose=function(n){return Bo.zip.apply(Bo,n)},Bo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Bo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Bo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Bo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var ca=Math.abs;Bo.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/e)throw new Error("infinite range");var r,u=[],o=i(ca(e)),a=-1;if(n*=o,t*=o,e*=o,0>e)for(;(r=n+e*++a)>t;)u.push(r/o);else for(;(r=n+e*++a)<t;)u.push(r/o);return u},Bo.map=function(n){var t=new a;if(n instanceof a)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t};var la="__proto__",sa="\x00";o(a,{has:s,get:function(n){return this._[c(n)]},set:function(n,t){return this._[c(n)]=t},remove:f,keys:h,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:l(t),value:this._[t]});return n},size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t),this._[t])}}),Bo.nest=function(){function n(t,o,c){if(c>=i.length)return r?r.call(u,o):e?o.sort(e):o;for(var l,s,f,h,g=-1,p=o.length,v=i[c++],d=new a;++g<p;)(h=d.get(l=v(s=o[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=o[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],o=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(Bo.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return o[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},Bo.set=function(n){var t=new v;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},o(v,{has:s,add:function(n){return this._[c(n+="")]=!0,n},remove:f,values:h,size:g,empty:p,forEach:function(n){for(var t in this._)n.call(this,l(t))}}),Bo.behavior={},Bo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=d(n,t,t[e]);return n};var fa=["webkit","ms","moz","Moz","o","O"];Bo.dispatch=function(){for(var n=new x,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=M(n);return n},x.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Bo.event=null,Bo.requote=function(n){return n.replace(ha,"\\$&")};var ha=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ga={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},pa=function(n,t){return t.querySelector(n)},va=function(n,t){return t.querySelectorAll(n)},da=Ko.matches||Ko[m(Ko,"matchesSelector")],ma=function(n,t){return da.call(n,t)};"function"==typeof Sizzle&&(pa=function(n,t){return Sizzle(n,t)[0]||null},va=Sizzle,ma=Sizzle.matchesSelector),Bo.selection=function(){return _a};var ya=Bo.selection.prototype=[];ya.select=function(n){var t,e,r,u,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return S(i)},ya.selectAll=function(n){var t,e,r=[];n=E(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Jo(n.call(e,e.__data__,a,u))),t.parentNode=e);return S(r)};var xa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Bo.ns={prefix:xa,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.slice(0,t),n=n.slice(t+1)),xa.hasOwnProperty(e)?{space:xa[e],local:n}:n}},ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Bo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(A(t,n[t]));return this}return this.each(A(n,t))},ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=z(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!N(n[u]).test(t))return!1;return!0}for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},ya.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(q(e,n[e],t));return this}if(2>r)return Qo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(q(n,t,e))},ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ya.append=function(n){return n=D(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ya.insert=function(n,t){return n=D(n),t=k(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ya.data=function(n,t){function e(n,e){var r,u,i,o=n.length,f=e.length,h=Math.min(o,f),g=new Array(f),p=new Array(f),v=new Array(o);if(t){var d,m=new a,y=new Array(o);for(r=-1;++r<o;)m.has(d=t.call(u=n[r],u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d;for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=P(i),m.set(d,!0);for(r=-1;++r<o;)m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=P(i);for(;f>r;++r)p[r]=P(e[r]);for(;o>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),l.push(g),s.push(v)}var r,u,i=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++i<o;)(u=r[i])&&(n[i]=u.__data__);return n}var c=H([]),l=S([]),s=S([]);if("function"==typeof n)for(;++i<o;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<o;)e(r=this[i],n);return l.enter=function(){return c},l.exit=function(){return s},l},ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ya.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return S(u)},ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},ya.sort=function(n){n=j.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},ya.each=function(n){return F(this,function(t,e,r){n.call(t,t.__data__,e,r)})},ya.call=function(n){var t=Jo(arguments);return n.apply(t[0]=this,t),this},ya.empty=function(){return!this.node()},ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},ya.size=function(){var n=0;return F(this,function(){++n}),n};var Ma=[];Bo.selection.enter=H,Bo.selection.enter.prototype=Ma,Ma.append=ya.append,Ma.empty=ya.empty,Ma.node=ya.node,Ma.call=ya.call,Ma.size=ya.size,Ma.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return S(o)},Ma.insert=function(n,t){return arguments.length<2&&(t=O(this)),ya.insert.call(this,n,t)},ya.transition=function(){for(var n,t,e=Cl||++ql,r=[],u=Nl||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,l=a.length;++c<l;)(t=a[c])&&Ho(t,c,e,u),n.push(t)}return Uo(r,e)},ya.interrupt=function(){return this.each(Y)},Bo.select=function(n){var t=["string"==typeof n?pa(n,Go):n];return t.parentNode=Ko,S([t])},Bo.selectAll=function(n){var t=Jo("string"==typeof n?va(n,Go):n);return t.parentNode=Ko,S([t])};var _a=Bo.select(Ko);ya.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(I(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(I(n,t,e))};var ba=Bo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ba.forEach(function(n){"on"+n in Go&&ba.remove(n)});var wa="onselectstart"in Go?null:m(Ko.style,"userSelect"),Sa=0;Bo.mouse=function(n){return $(n,b())};var ka=/WebKit/.test(Qo.navigator.userAgent)?-1:0;Bo.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=b().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return $(n,r)},Bo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-x[0],e=r[1]-x[1],p|=n|e,x=r,g({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Bo.event.target===f),g({type:"dragend"}))}var l,s=this,f=Bo.event.target,h=s.parentNode,g=e.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Bo.select(u()).on(i+d,a).on(o+d,c),y=X(),x=t(h,v);r?(l=r.apply(s,arguments),l=[l.x-x[0],l.y-x[1]]):l=[0,0],g({type:"dragstart"})}}var e=w(n,"drag","dragstart","dragend"),r=null,u=t(y,Bo.mouse,J,"mousemove","mouseup"),i=t(B,Bo.touch,W,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},Bo.rebind(n,e,"on")},Bo.touches=function(n,t){return arguments.length<2&&(t=b().touches),t?Jo(t).map(function(t){var e=$(n,t);return e.identifier=t.identifier,e}):[]};var Ea=Math.PI,Aa=2*Ea,Ca=Ea/2,Na=1e-6,za=Na*Na,La=Ea/180,Ta=180/Ea,qa=Math.SQRT2,Ra=2,Da=4;Bo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=et(v),o=i/(Ra*h)*(e*rt(qa*t+v)-tt(v));return[r+o*l,u+o*s,i*e/et(qa*t+v)]}return[r+n*l,u+n*s,i*Math.exp(qa*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+Da*f)/(2*i*Ra*h),p=(c*c-i*i-Da*f)/(2*c*Ra*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/qa;return e.duration=1e3*y,e},Bo.behavior.zoom=function(){function n(n){n.on(A,l).on(ja+".zoom",f).on("dblclick.zoom",h).on(z,s)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){x&&x.domain(y.range().map(function(n){return(n-S.x)/S.k}).map(y.invert)),b&&b.domain(M.range().map(function(n){return(n-S.y)/S.k}).map(M.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function l(){function n(){s=1,u(Bo.mouse(r),h),a(l)}function e(){f.on(C,null).on(N,null),g(s&&Bo.event.target===i),c(l)}var r=this,i=Bo.event.target,l=L.of(r,arguments),s=0,f=Bo.select(Qo).on(C,n).on(N,e),h=t(Bo.mouse(r)),g=X();Y.call(r),o(l)}function s(){function n(){var n=Bo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=Bo.event.target;Bo.select(t).on(x,i).on(M,f),b.push(t);for(var e=Bo.event.changedTouches,o=0,c=e.length;c>o;++o)v[e[o].identifier]=null;var l=n(),s=Date.now();if(1===l.length){if(500>s-m){var h=l[0],g=v[h.identifier];r(2*S.k),u(h,g),_(),a(p)}m=s}else if(l.length>1){var h=l[0],y=l[1],w=h[0]-y[0],k=h[1]-y[1];d=w*w+k*k}}function i(){for(var n,t,e,i,o=Bo.touches(g),c=0,l=o.length;l>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=d&&Math.sqrt(s/d);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}m=null,u(n,t),a(p)}function f(){if(Bo.event.touches.length){for(var t=Bo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}Bo.selectAll(b).on(y,null),w.on(A,l).on(z,s),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,y=".zoom-"+Bo.event.changedTouches[0].identifier,x="touchmove"+y,M="touchend"+y,b=[],w=Bo.select(g),k=X();Y.call(g),e(),o(p),w.on(A,null).on(z,e)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(g=t(p=v||Bo.mouse(this)),Y.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),_(),r(Math.pow(2,.002*Pa())*S.k),u(p,g),a(n)}function h(){var n=L.of(this,arguments),e=Bo.mouse(this),i=t(e),l=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Bo.event.shiftKey?Math.ceil(l)-1:Math.floor(l)+1)),u(e,i),a(n),c(n)}var g,p,v,d,m,y,x,M,b,S={x:0,y:0,k:1},k=[960,500],E=Ua,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=w(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;Cl?Bo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Bo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Ua:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(x=t,y=t.copy(),S={x:0,y:0,k:1},n):x},n.y=function(t){return arguments.length?(b=t,M=t.copy(),S={x:0,y:0,k:1},n):b},Bo.rebind(n,L,"on")};var Pa,Ua=[0,1/0],ja="onwheel"in Go?(Pa=function(){return-Bo.event.deltaY*(Bo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Go?(Pa=function(){return Bo.event.wheelDelta},"mousewheel"):(Pa=function(){return-Bo.event.detail},"MozMousePixelScroll");Bo.color=it,it.prototype.toString=function(){return this.rgb()+""},Bo.hsl=ot;var Fa=ot.prototype=new it;Fa.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,this.l/n)},Fa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ot(this.h,this.s,n*this.l)},Fa.rgb=function(){return at(this.h,this.s,this.l)},Bo.hcl=ct;var Ha=ct.prototype=new it;Ha.brighter=function(n){return new ct(this.h,this.c,Math.min(100,this.l+Oa*(arguments.length?n:1)))},Ha.darker=function(n){return new ct(this.h,this.c,Math.max(0,this.l-Oa*(arguments.length?n:1)))},Ha.rgb=function(){return lt(this.h,this.c,this.l).rgb()},Bo.lab=st;var Oa=18,Ya=.95047,Ia=1,Za=1.08883,Va=st.prototype=new it;Va.brighter=function(n){return new st(Math.min(100,this.l+Oa*(arguments.length?n:1)),this.a,this.b)},Va.darker=function(n){return new st(Math.max(0,this.l-Oa*(arguments.length?n:1)),this.a,this.b)},Va.rgb=function(){return ft(this.l,this.a,this.b)},Bo.rgb=dt;var Xa=dt.prototype=new it;Xa.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new dt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new dt(u,u,u)},Xa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new dt(n*this.r,n*this.g,n*this.b)},Xa.hsl=function(){return _t(this.r,this.g,this.b)},Xa.toString=function(){return"#"+xt(this.r)+xt(this.g)+xt(this.b)};var $a=Bo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});$a.forEach(function(n,t){$a.set(n,mt(t))}),Bo.functor=kt,Bo.xhr=At(Et),Bo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=Ct(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=l)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==c)continue;return n.slice(t,s-a)}return n.slice(t)}for(var r,u,i={},o={},a=[],l=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new v,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Bo.csv=Bo.dsv(",","text/csv"),Bo.tsv=Bo.dsv("	","text/tab-separated-values");var Ba,Wa,Ja,Ga,Ka,Qa=Qo[m(Qo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Bo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};Wa?Wa.n=i:Ba=i,Wa=i,Ja||(Ga=clearTimeout(Ga),Ja=1,Qa(Lt))},Bo.timer.flush=function(){Tt(),qt()},Bo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var nc=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Bo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Bo.round(n,Rt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),nc[8+e/3]};var tc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ec=Bo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Bo.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),rc=Bo.time={},uc=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ic.setUTCDate.apply(this._,arguments)},setDay:function(){ic.setUTCDay.apply(this._,arguments)},setFullYear:function(){ic.setUTCFullYear.apply(this._,arguments)},setHours:function(){ic.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ic.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ic.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ic.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ic.setUTCSeconds.apply(this._,arguments)},setTime:function(){ic.setTime.apply(this._,arguments)}};var ic=Date.prototype;rc.year=Ft(function(n){return n=rc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),rc.years=rc.year.range,rc.years.utc=rc.year.utc.range,rc.day=Ft(function(n){var t=new uc(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),rc.days=rc.day.range,rc.days.utc=rc.day.utc.range,rc.dayOfYear=function(n){var t=rc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=rc[n]=Ft(function(n){return(n=rc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});rc[n+"s"]=e.range,rc[n+"s"].utc=e.utc.range,rc[n+"OfYear"]=function(n){var e=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(e+t)%7)/7)}}),rc.week=rc.sunday,rc.weeks=rc.sunday.range,rc.weeks.utc=rc.sunday.utc.range,rc.weekOfYear=rc.sundayOfYear;var oc={"-":"",_:" ",0:"0"},ac=/^\s*\d+/,cc=/^%/;Bo.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var lc=Bo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Bo.format=lc.numberFormat,Bo.geo={},ce.prototype={s:0,t:0,add:function(n){le(n,this.t,sc),le(sc.s,this.s,this),this.s?this.t+=sc.t:this.s=sc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var sc=new ce;Bo.geo.stream=function(n,t){n&&fc.hasOwnProperty(n.type)?fc[n.type](n,t):se(n,t)};var fc={Feature:function(n,t){se(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)se(e[r].geometry,t)}},hc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){fe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)fe(e[r],t,0)},Polygon:function(n,t){he(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)he(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)se(e[r],t)}};Bo.geo.area=function(n){return gc=0,Bo.geo.stream(n,vc),gc};var gc,pc=new ce,vc={sphere:function(){gc+=4*Ea},point:y,lineStart:y,lineEnd:y,polygonStart:function(){pc.reset(),vc.lineStart=ge},polygonEnd:function(){var n=2*pc;gc+=0>n?4*Ea+n:n,vc.lineStart=vc.lineEnd=vc.point=y}};Bo.geo.bounds=function(){function n(n,t){x.push(M=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=pe([t*La,e*La]);if(m){var u=de(m,r),i=[u[1],-u[0],0],o=de(i,u);xe(o),o=Me(o);var c=t-p,l=c>0?1:-1,v=o[0]*Ta*l,d=ca(c)>180;if(d^(v>l*p&&l*t>v)){var y=o[1]*Ta;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>l*p&&l*t>v)){var y=-o[1]*Ta;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=s,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=ca(r)>180?r+(r>0?360:-360):r}else v=n,d=e;vc.point(n,e),t(n,e)}function i(){vc.lineStart()}function o(){u(v,d),vc.lineEnd(),ca(y)>Na&&(s=-(h=180)),M[0]=s,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,vc.polygonStart()},polygonEnd:function(){vc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>pc?(s=-(h=180),f=-(g=90)):y>Na?g=90:-Na>y&&(f=-90),M[0]=s,M[1]=h}};return function(n){g=h=-(s=f=1/0),x=[],Bo.geo.stream(n,_);
var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return x=M=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),Bo.geo.centroid=function(n){dc=mc=yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,Ac);var t=Sc,e=kc,r=Ec,u=t*t+e*e+r*r;return za>u&&(t=_c,e=bc,r=wc,Na>mc&&(t=yc,e=xc,r=Mc),u=t*t+e*e+r*r,za>u)?[0/0,0/0]:[Math.atan2(e,t)*Ta,nt(r/Math.sqrt(u))*Ta]};var dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc,Ec,Ac={sphere:y,point:be,lineStart:Se,lineEnd:ke,polygonStart:function(){Ac.lineStart=Ee},polygonEnd:function(){Ac.lineStart=Se}},Cc=Le(Ae,De,Ue,[-Ea,-Ea/2]),Nc=1e9;Bo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Oe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Bo.geo.conicEqualArea=function(){return Ie(Ze)}).raw=Ze,Bo.geo.albers=function(){return Bo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Bo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Bo.geo.albers(),o=Bo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Bo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+Na,f+.12*l+Na],[s-.214*l-Na,f+.234*l-Na]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+Na,f+.166*l+Na],[s-.115*l-Na,f+.234*l-Na]]).stream(c).point,n},n.scale(1070)};var zc,Lc,Tc,qc,Rc,Dc,Pc={point:y,lineStart:y,lineEnd:y,polygonStart:function(){Lc=0,Pc.lineStart=Ve},polygonEnd:function(){Pc.lineStart=Pc.lineEnd=Pc.point=y,zc+=ca(Lc/2)}},Uc={point:Xe,lineStart:y,lineEnd:y,polygonStart:y,polygonEnd:y},jc={point:We,lineStart:Je,lineEnd:Ge,polygonStart:function(){jc.lineStart=Ke},polygonEnd:function(){jc.point=We,jc.lineStart=Je,jc.lineEnd=Ge}};Bo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Bo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return zc=0,Bo.geo.stream(n,u(Pc)),zc},n.centroid=function(n){return yc=xc=Mc=_c=bc=wc=Sc=kc=Ec=0,Bo.geo.stream(n,u(jc)),Ec?[Sc/Ec,kc/Ec]:wc?[_c/wc,bc/wc]:Mc?[yc/Mc,xc/Mc]:[0/0,0/0]},n.bounds=function(n){return Rc=Dc=-(Tc=qc=1/0),Bo.geo.stream(n,u(Uc)),[[Tc,qc],[Rc,Dc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||tr(n):Et,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new $e:new Qe(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Bo.geo.albersUsa()).context(null)},Bo.geo.transform=function(n){return{stream:function(t){var e=new er(t);for(var r in n)e[r]=n[r];return e}}},er.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Bo.geo.projection=ur,Bo.geo.projectionMutator=ir,(Bo.geo.equirectangular=function(){return ur(ar)}).raw=ar.invert=ar,Bo.geo.rotation=function(n){function t(t){return t=n(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t}return n=lr(n[0]%360*La,n[1]*La,n.length>2?n[2]*La:0),t.invert=function(t){return t=n.invert(t[0]*La,t[1]*La),t[0]*=Ta,t[1]*=Ta,t},t},cr.invert=ar,Bo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=lr(-n[0]*La,-n[1]*La,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ta,n[1]*=Ta}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=gr((t=+r)*La,u*La),n):t},n.precision=function(r){return arguments.length?(e=gr(t*La,(u=+r)*La),n):u},n.angle(90)},Bo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*La,u=n[1]*La,i=t[1]*La,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},Bo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Bo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Bo.range(Math.ceil(l/m)*m,c,m).map(g)).concat(Bo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return ca(n%d)>Na}).map(s)).concat(Bo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ca(n%m)>Na}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=vr(a,o,90),f=dr(r,e,y),h=vr(l,c,90),g=dr(i,u,y),n):y},n.majorExtent([[-180,-90+Na],[180,90-Na]]).minorExtent([[-180,-80-Na],[180,80+Na]])},Bo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=mr,u=yr;return n.distance=function(){return Bo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Bo.geo.interpolate=function(n,t){return xr(n[0]*La,n[1]*La,t[0]*La,t[1]*La)},Bo.geo.length=function(n){return Fc=0,Bo.geo.stream(n,Hc),Fc};var Fc,Hc={sphere:y,point:y,lineStart:Mr,lineEnd:y,polygonStart:y,polygonEnd:y},Oc=_r(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Bo.geo.azimuthalEqualArea=function(){return ur(Oc)}).raw=Oc;var Yc=_r(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},Et);(Bo.geo.azimuthalEquidistant=function(){return ur(Yc)}).raw=Yc,(Bo.geo.conicConformal=function(){return Ie(br)}).raw=br,(Bo.geo.conicEquidistant=function(){return Ie(wr)}).raw=wr;var Ic=_r(function(n){return 1/n},Math.atan);(Bo.geo.gnomonic=function(){return ur(Ic)}).raw=Ic,Sr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ca]},(Bo.geo.mercator=function(){return kr(Sr)}).raw=Sr;var Zc=_r(function(){return 1},Math.asin);(Bo.geo.orthographic=function(){return ur(Zc)}).raw=Zc;var Vc=_r(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Bo.geo.stereographic=function(){return ur(Vc)}).raw=Vc,Er.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ca]},(Bo.geo.transverseMercator=function(){var n=kr(Er),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Er,Bo.geom={},Bo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=kt(e),i=kt(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(zr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var l=Nr(a),s=Nr(c),f=s[0]===l[0],h=s[s.length-1]===l[l.length-1],g=[];for(t=l.length-1;t>=0;--t)g.push(n[a[l[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[a[s[t]][2]]);return g}var e=Ar,r=Cr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Bo.geom.polygon=function(n){return ga(n,Xc),n};var Xc=Bo.geom.polygon.prototype=[];Xc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Xc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Xc.clip=function(n){for(var t,e,r,u,i,o,a=qr(n),c=-1,l=this.length-qr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Lr(o,s,u)?(Lr(i,s,u)||n.push(Tr(i,o,s,u)),n.push(o)):Lr(i,s,u)&&n.push(Tr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n};var $c,Bc,Wc,Jc,Gc,Kc=[],Qc=[];Or.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ir),t.length},Qr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(eu(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ru(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ru(this,e),n=e,e=n.U),e.C=!1,r.C=!0,eu(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?uu(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ru(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,eu(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,eu(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ru(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Bo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(e(n),a).cells.forEach(function(e,a){var c=e.edges,l=e.site,s=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=i&&l.y>=u&&l.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];s.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Na)*Na,y:Math.round(o(n,t)/Na)*Na,i:t}})}var r=Ar,u=Cr,i=r,o=u,a=nl;return n?t(n):(t.links=function(n){return iu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(Ir),c=-1,l=a.length,s=a[l-1].edge,f=s.l===o?s.r:s.l;++c<l;)u=s,i=f,s=a[c].edge,f=s.l===o?s.r:s.l,r<i.i&&r<f.i&&au(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=kt(r=n),t):r},t.y=function(n){return arguments.length?(o=kt(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?nl:n,t):a===nl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===nl?null:a&&a[1]},t)};var nl=[[-1e6,-1e6],[1e6,1e6]];Bo.geom.delaunay=function(n){return Bo.geom.voronoi().triangles(n)},Bo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(ca(c-e)+ca(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=su()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,v,d,m,y,x=kt(a),M=kt(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var _=+x(s=n[g],g),b=+M(s,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=su();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var o,a=Ar,c=Cr;return(o=arguments.length)?(a=cu,c=lu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Bo.interpolateRgb=hu,Bo.interpolateObject=gu,Bo.interpolateNumber=pu,Bo.interpolateString=vu;var tl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,el=new RegExp(tl.source,"g");Bo.interpolate=du,Bo.interpolators=[function(n,t){var e=typeof t;return("string"===e?$a.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof it?hu:Array.isArray(t)?mu:"object"===e&&isNaN(t)?gu:pu)(n,t)}],Bo.interpolateArray=mu;var rl=function(){return Et},ul=Bo.map({linear:rl,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return zu}}),il=Bo.map({"in":Et,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Bo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=ul.get(e)||rl,r=il.get(r)||Et,yu(r(e.apply(null,Wo.call(arguments,1))))},Bo.interpolateHcl=Lu,Bo.interpolateHsl=Tu,Bo.interpolateLab=qu,Bo.interpolateRound=Ru,Bo.transform=function(n){var t=Go.createElementNS(Bo.ns.prefix.svg,"g");return(Bo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Du(e?e.matrix:ol)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ol={a:1,b:0,c:0,d:1,e:0,f:0};Bo.interpolateTransform=Fu,Bo.layout={},Bo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Yu(n[e]));return t}},Bo.layout.chord=function(){function n(){var n,l,f,h,g,p={},v=[],d=Bo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];v.push(l),m.push(Bo.range(i)),n+=l}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(Aa-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=l,b=l+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},Bo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var l=t.charge/c;n.px-=i*l,n.py-=o*l}return!0}if(t.point&&c&&p>c){var l=t.pointCharge/c;n.px-=i*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=Bo.event.x,n.py=Bo.event.y,a.resume()}var e,r,u,i,o,a={},c=Bo.dispatch("start","tick","end"),l=[1,1],s=.9,f=al,h=cl,g=-30,p=ll,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=l[0]/2,M=l[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Wu(t=Bo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Bo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;l>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,l=o.length;++a<l;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,s=y.length,p=l[0],v=l[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;s>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;s>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;s>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;s>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;s>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Bo.behavior.drag().origin(Et).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",Xu)),arguments.length?(this.on("mouseover.force",$u).on("mouseout.force",Bu).call(e),void 0):e},Bo.rebind(a,c,"on")};var al=20,cl=1,ll=1/0;Bo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(l=e.call(n,i,i.depth))&&(c=l.length)){for(var c,l,s;--c>=0;)o.push(s=l[c]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=l}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return Ku(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ti,e=Qu,r=ni;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(Gu(t,function(n){n.children&&(n.value=0)}),Ku(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},Bo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Bo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Ju(e,r)},Bo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Bo.sum(o),l=Bo.range(i.length);null!=e&&l.sort(e===sl?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),s}var t=Number,e=sl,r=0,u=Aa;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var sl={};Bo.layout.stack=function(){function n(a,c){if(!(h=a.length))return a;var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=Bo.permute(l,f),s=Bo.permute(s,f);var h,g,p,v,d=r.call(n,s,c),m=l[0].length;for(p=0;m>p;++p)for(u.call(n,l[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,l[g][p],v+=s[g-1][p][1],s[g][p][1]);return a}var t=Et,e=oi,r=ai,u=ii,i=ri,o=ui;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:fl.get(t)||oi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:hl.get(t)||ai,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var fl=Bo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ci),i=n.map(li),o=Bo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return Bo.range(n.length).reverse()},"default":oi}),hl=Bo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ai});Bo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[Bo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=gi,u=fi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=kt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return hi(n,t)}:kt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Bo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Ku(a,function(n){n.r=+s(n.value)}),Ku(a,yi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Ku(a,function(n){n.r+=f}),Ku(a,yi),Ku(a,function(n){n.r-=f})}return _i(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=Bo.layout.hierarchy().sort(pi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Ju(n,e)},Bo.layout.tree=function(){function n(n,u){var s=o.call(this,n,u),f=s[0],h=t(f);if(Ku(h,e),h.parent.m=-h.z,Gu(h,r),l)Gu(f,i);else{var g=f,p=f,v=f;Gu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Gu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)r.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Ai(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+a(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,o=t,c=u.parent.children[0],l=u.m,s=i.m,f=o.m,h=c.m;o=ki(o),u=Si(u),o&&u;)c=Si(c),i=ki(i),i.a=n,r=o.z+f-u.z-l+a(o._,u._),r>0&&(Ei(Ci(o,n,e),n,r),l+=r,s+=r),f+=o.m,l+=u.m,h+=c.m,s+=i.m;o&&!ki(i)&&(i.t=o,i.m+=f-s),u&&!Si(c)&&(c.t=u,c.m+=l-h,e=n)}return e}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Bo.layout.hierarchy().sort(null).value(null),a=wi,c=[1,1],l=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(l=null==(c=t)?i:null,n):l?null:c},n.nodeSize=function(t){return arguments.length?(l=null==(c=t)?null:i,n):l?c:null},Ju(n,o)},Bo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Ku(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=Ni(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Li(c),f=Ti(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Ku(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Bo.layout.hierarchy().sort(null).value(null),e=wi,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Ju(n,t)},Bo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,v))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,v,l,!1),v=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Bo.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=qi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?qi(t):Ri(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ri(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?qi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Ju(i,a)},Bo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Bo.random.normal.apply(Bo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Bo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Bo.scale={};var gl={floor:Et,ceil:Et};Bo.scale.linear=function(){return Oi([0,1],[0,1],du,!1)};var pl={s:1,g:1,p:1,r:1,e:1};Bo.scale.log=function(){return Wi(Bo.scale.linear().domain([0,1]),10,!0,[1,10])};var vl=Bo.format(".0e"),dl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Bo.scale.pow=function(){return Ji(Bo.scale.linear(),1,[0,1])},Bo.scale.sqrt=function(){return Bo.scale.pow().exponent(.5)},Bo.scale.ordinal=function(){return Ki([],{t:"range",a:[[]]})},Bo.scale.category10=function(){return Bo.scale.ordinal().range(ml)},Bo.scale.category20=function(){return Bo.scale.ordinal().range(yl)},Bo.scale.category20b=function(){return Bo.scale.ordinal().range(xl)},Bo.scale.category20c=function(){return Bo.scale.ordinal().range(Ml)};var ml=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(yt),yl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(yt),xl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(yt),Ml=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(yt);Bo.scale.quantile=function(){return Qi([],[])
},Bo.scale.quantize=function(){return no(0,1,[0,1])},Bo.scale.threshold=function(){return to([.5],[0,1])},Bo.scale.identity=function(){return eo([0,1])},Bo.svg={},Bo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+_l,a=u.apply(this,arguments)+_l,c=(o>a&&(c=o,o=a,a=c),a-o),l=Ea>c?"0":"1",s=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=bl?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=ro,e=uo,r=io,u=oo;return n.innerRadius=function(e){return arguments.length?(t=kt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=kt(t),n):e},n.startAngle=function(t){return arguments.length?(r=kt(t),n):r},n.endAngle=function(t){return arguments.length?(u=kt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+_l;return[Math.cos(i)*n,Math.sin(i)*n]},n};var _l=-Ca,bl=Aa-Na;Bo.svg.line=function(){return ao(Et)};var wl=Bo.map({linear:co,"linear-closed":lo,step:so,"step-before":fo,"step-after":ho,basis:xo,"basis-open":Mo,"basis-closed":_o,bundle:bo,cardinal:vo,"cardinal-open":go,"cardinal-closed":po,monotone:Co});wl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Sl=[0,2/3,1/3,0],kl=[0,1/3,2/3,0],El=[0,1/6,2/3,1/6];Bo.svg.line.radial=function(){var n=ao(No);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},fo.reverse=ho,ho.reverse=fo,Bo.svg.area=function(){return zo(Et)},Bo.svg.area.radial=function(){var n=zo(No);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Bo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+_l,s=l.call(n,u,r)+_l;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ea)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=mr,o=yr,a=Lo,c=io,l=oo;return n.radius=function(t){return arguments.length?(a=kt(t),n):a},n.source=function(t){return arguments.length?(i=kt(t),n):i},n.target=function(t){return arguments.length?(o=kt(t),n):o},n.startAngle=function(t){return arguments.length?(c=kt(t),n):c},n.endAngle=function(t){return arguments.length?(l=kt(t),n):l},n},Bo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=mr,e=yr,r=To;return n.source=function(e){return arguments.length?(t=kt(e),n):t},n.target=function(t){return arguments.length?(e=kt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Bo.svg.diagonal.radial=function(){var n=Bo.svg.diagonal(),t=To,e=n.projection;return n.projection=function(n){return arguments.length?e(qo(t=n)):t},n},Bo.svg.symbol=function(){function n(n,r){return(Al.get(t.call(this,n,r))||Po)(e.call(this,n,r))}var t=Do,e=Ro;return n.type=function(e){return arguments.length?(t=kt(e),n):t},n.size=function(t){return arguments.length?(e=kt(t),n):e},n};var Al=Bo.map({circle:Po,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ll)),e=t*Ll;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/zl),e=t*zl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Bo.svg.symbolTypes=Al.keys();var Cl,Nl,zl=Math.sqrt(3),Ll=Math.tan(30*La),Tl=[],ql=0;Tl.call=ya.call,Tl.empty=ya.empty,Tl.node=ya.node,Tl.size=ya.size,Bo.transition=function(n){return arguments.length?Cl?n.transition():n:_a.transition()},Bo.transition.prototype=Tl,Tl.select=function(n){var t,e,r,u=this.id,i=[];n=k(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,o))?("__data__"in r&&(e.__data__=r.__data__),Ho(e,l,u,r.__transition__[u]),t.push(e)):t.push(null)}return Uo(i,u)},Tl.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=E(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Ho(u,g,o,i),t.push(u)}return Uo(a,o)},Tl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=U(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Uo(u,this.id)},Tl.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):F(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Tl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Fu:du,a=Bo.ns.qualify(n);return jo(this,"attr."+n,t,a.local?i:u)},Tl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Bo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Tl.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Qo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=du(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return jo(this,"style."+n,t,u)},Tl.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Qo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Tl.text=function(n){return jo(this,"text",n,Fo)},Tl.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Tl.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Bo.ease.apply(Bo,arguments)),F(this,function(e){e.__transition__[t].ease=n}))},Tl.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Tl.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:F(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Tl.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Nl,u=Cl;Cl=e,F(this,function(t,r,u){Nl=t.__transition__[e],n.call(t,t.__data__,r,u)}),Nl=r,Cl=u}else F(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Bo.dispatch("start","end"))).on(n,t)});return this},Tl.transition=function(){for(var n,t,e,r,u=this.id,i=++ql,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Ho(e,l,i,r)),n.push(e)}return Uo(o,i)},Bo.svg.axis=function(){function n(n){n.each(function(){var n,l=Bo.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):Et:t,p=l.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Na),d=Bo.transition(p.exit()).style("opacity",Na).remove(),m=Bo.transition(p.order()).style("opacity",1),y=Math.max(u,0)+o,x=Pi(f),M=l.selectAll(".domain").data([0]),_=(M.enter().append("path").attr("class","domain"),Bo.transition(M));v.append("line"),v.append("text");var b,w,S,k,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),N=v.select("text"),z=m.select("text"),L="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=Oo,b="x",S="y",w="x2",k="y2",C.attr("dy",0>L?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+L*i+"V0H"+x[1]+"V"+L*i)):(n=Yo,b="y",S="x",w="y2",k="x2",C.attr("dy",".32em").style("text-anchor",0>L?"end":"start"),_.attr("d","M"+L*i+","+x[0]+"H0V"+x[1]+"H"+L*i)),E.attr(k,L*u),N.attr(S,L*y),A.attr(w,0).attr(k,L*u),z.attr(b,0).attr(S,L*y),f.rangeBand){var T=f,q=T.rangeBand()/2;s=f=function(n){return T(n)+q}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=Bo.scale.linear(),r=Rl,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Dl?t+"":Rl,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Rl="bottom",Dl={top:1,right:1,bottom:1,left:1};Bo.svg.brush=function(){function n(i){i.each(function(){var i=Bo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,Et);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Pl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=Bo.transition(i),h=Bo.transition(o);c&&(s=Pi(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=Pi(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Bo.event.keyCode&&(C||(y=null,z[0]-=s[1],z[1]-=f[1],C=2),_())}function p(){32==Bo.event.keyCode&&2==C&&(z[0]+=s[1],z[1]+=f[1],C=0,_())}function v(){var n=Bo.mouse(M),u=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(Bo.event.altKey?(y||(y=[(s[0]+s[1])/2,(f[0]+f[1])/2]),z[0]=s[+(n[0]<y[0])],z[1]=f[+(n[1]<y[1])]):y=null),E&&d(n,c,0)&&(e(S),u=!0),A&&d(n,l,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,e){var r,u,a=Pi(t),c=a[0],l=a[1],p=z[e],v=e?f:s,d=v[1]-v[0];return C&&(c-=p,l-=d+p),r=(e?g:h)?Math.max(c,Math.min(l,n[e])):n[e],C?u=(r+=p)+d:(y&&(p=Math.max(c,Math.min(l,2*y[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Bo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var y,x,M=this,b=Bo.select(Bo.event.target),w=a.of(M,arguments),S=Bo.select(M),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&l,C=b.classed("extent"),N=X(),z=Bo.mouse(M),L=Bo.select(Qo).on("keydown.brush",u).on("keyup.brush",p);if(Bo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=s[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);x=[s[1-T]-z[0],f[1-q]-z[1]],z[0]=s[T],z[1]=f[q]}else Bo.event.altKey&&(y=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Bo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=w(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],f=[0,0],h=!0,g=!0,p=Ul[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Cl?Bo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=mu(s,t.x),r=mu(f,t.y);return i=o=null,function(u){s=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Ul[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,p=Ul[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(h=!!t[0],g=!!t[1]):c?h=!!t:l&&(g=!!t),n):c&&l?[h,g]:c?h:l?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),l&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(h=u,u=a,a=h))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&f[0]==f[1]},Bo.rebind(n,a,"on")};var Pl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ul=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],jl=rc.format=lc.timeFormat,Fl=jl.utc,Hl=Fl("%Y-%m-%dT%H:%M:%S.%LZ");jl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Io:Hl,Io.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Io.toString=Hl.toString,rc.second=Ft(function(n){return new uc(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),rc.seconds=rc.second.range,rc.seconds.utc=rc.second.utc.range,rc.minute=Ft(function(n){return new uc(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),rc.minutes=rc.minute.range,rc.minutes.utc=rc.minute.utc.range,rc.hour=Ft(function(n){var t=n.getTimezoneOffset()/60;return new uc(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),rc.hours=rc.hour.range,rc.hours.utc=rc.hour.utc.range,rc.month=Ft(function(n){return n=rc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),rc.months=rc.month.range,rc.months.utc=rc.month.utc.range;var Ol=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Yl=[[rc.second,1],[rc.second,5],[rc.second,15],[rc.second,30],[rc.minute,1],[rc.minute,5],[rc.minute,15],[rc.minute,30],[rc.hour,1],[rc.hour,3],[rc.hour,6],[rc.hour,12],[rc.day,1],[rc.day,2],[rc.week,1],[rc.month,1],[rc.month,3],[rc.year,1]],Il=jl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ae]]),Zl={range:function(n,t,e){return Bo.range(Math.ceil(n/e)*e,+t,e).map(Vo)},floor:Et,ceil:Et};Yl.year=rc.year,rc.scale=function(){return Zo(Bo.scale.linear(),Yl,Il)};var Vl=Yl.map(function(n){return[n[0].utc,n[1]]}),Xl=Fl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ae]]);Vl.year=rc.year.utc,rc.scale.utc=function(){return Zo(Bo.scale.linear(),Vl,Xl)},Bo.text=At(function(n){return n.responseText}),Bo.json=function(n,t){return Ct(n,"application/json",Xo,t)},Bo.html=function(n,t){return Ct(n,"text/html",$o,t)},Bo.xml=At(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Bo):"object"==typeof module&&module.exports&&(module.exports=Bo),this.d3=Bo}();
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.0.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeners;if(!r)return this;var s=!e&&!i;if(typeof e==="object")i=this;if(t)(r={})[t._listenerId]=t;for(var n in r){r[n].off(e,i,this);if(s)delete this._listeners[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeners||(this._listeners={});var n=e._listenerId||(e._listenerId=h.uniqueId("l"));s[n]=e;if(typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i;var r=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};h.extend(this,h.pick(e,p));if(e.parse)r=this.parse(r,e)||{};if(i=h.result(this,"defaults")){r=h.defaults({},r,i)}this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};var p=["url","urlRoot","collection"];h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};R(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}if(r&&(!i||!i.wait)&&!this.set(r,i))return false;i=h.extend({validate:true},i);if(!this._validate(r,i))return false;if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};R(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}R(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e||{},{validationError:i}));return false}});var v=["keys","values","pairs","invert","pick","omit"];h.each(v,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var g=a.Collection=function(t,e){e||(e={});if(e.url)this.url=e.url;if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var m={add:true,remove:true,merge:true};var y={add:true,merge:false,remove:false};h.extend(g.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.defaults(e||{},y))},remove:function(t,e){t=h.isArray(t)?t.slice():[t];e||(e={});var i,r,s,n;for(i=0,r=t.length;i<r;i++){n=this.get(t[i]);if(!n)continue;delete this._byId[n.id];delete this._byId[n.cid];s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}this._removeReference(n)}return this},set:function(t,e){e=h.defaults(e||{},m);if(e.parse)t=this.parse(t,e);if(!h.isArray(t))t=t?[t]:[];var i,s,a,o,u,l;var c=e.at;var f=this.comparator&&c==null&&e.sort!==false;var d=h.isString(this.comparator)?this.comparator:null;var p=[],v=[],g={};for(i=0,s=t.length;i<s;i++){if(!(a=this._prepareModel(t[i],e)))continue;if(u=this.get(a)){if(e.remove)g[u.cid]=true;if(e.merge){u.set(a.attributes,e);if(f&&!l&&u.hasChanged(d))l=true}}else if(e.add){p.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}}if(e.remove){for(i=0,s=this.length;i<s;++i){if(!g[(a=this.models[i]).cid])v.push(a)}if(v.length)this.remove(v,e)}if(p.length){if(f)l=true;this.length+=p.length;if(c!=null){n.apply(this.models,[c,0].concat(p))}else{r.apply(this.models,p)}}if(l)this.sort({silent:true});if(e.silent)return this;for(i=0,s=p.length;i<s;i++){(a=p[i]).trigger("add",a,this,e)}if(l)this.trigger("sort",this,e);return this},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return this},push:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:this.length},e));return t},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){t=this._prepareModel(t,e);this.add(t,h.extend({at:0},e));return t},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){if(t==null)return void 0;return this._byId[t.id!=null?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},sortedIndex:function(t,e,i){e||(e=this.comparator);var r=h.isFunction(e)?e:function(t){return t.get(e)};return h.sortedIndex(this.models,t,r,i)},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};R(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(s){if(e.wait)i.add(t,e);if(r)r(t,s,e)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e||(e={});e.collection=this;var i=new this.model(t,e);if(!i._validate(t,e)){this.trigger("invalid",this,t,e);return false}return i},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var _=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(_,function(t){g.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var w=["groupBy","countBy","sortBy"];h.each(w,function(t){g.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var b=a.View=function(t){this.cid=h.uniqueId("view");this._configure(t||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var x=/^(\S+)\s*(.*)$/;var E=["model","collection","el","id","attributes","className","tagName","events"];h.extend(b.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(x);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(t){if(this.options)t=h.extend({},h.result(this,"options"),t);h.extend(this,h.pick(t,E));this.options=t},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=k[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&window.ActiveXObject&&!(window.external&&window.external.msActiveXFilteringEnabled)){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var S=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var $=/\((.*?)\)/g;var T=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(S.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace($,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var P=/^\/+|\/+$/g;var O=/msie [\w.]+/;var C=/\/$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.substr(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({},{root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=O.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(P,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._wantsPushState&&this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);var i=h.any(this.handlers,function(t){if(t.route.test(e)){t.callback(e);return true}});return i},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:e};t=this.getFragment(t||"");if(this.fragment===t)return;this.fragment=t;var i=this.root+t;if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var j=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=g.extend=S.extend=b.extend=I.extend=j;var U=function(){throw new Error('A "url" property or function must be specified')};var R=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
/*
//@ sourceMappingURL=backbone-min.map
*/
/*
  backgrid
  http://github.com/wyuenho/backgrid

  Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
  Licensed under the MIT @license.
*/
(function(e,t,i,n){"use strict";function r(e){return String.fromCharCode(e.charCodeAt(0)-32)+e.slice(1)}function o(e,t,i){var n=t-(e+"").length;n=0>n?0:n;for(var r="",o=0;n>o;o++)r+=i;return r+e}var s=e,l="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||l.trim()){l="["+l+"]";var a=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return(this+"").replace(a,"").replace(h,"")}}var c=e.Backgrid={VERSION:"0.2.0",Extension:{},requireOptions:function(e,t){for(var n=0;t.length>n;n++){var r=t[n];if(i.isUndefined(e[r]))throw new TypeError("'"+r+"' is required")}},resolveNameToClass:function(e,t){if(i.isString(e)){var n=i.map(e.split("-"),function(e){return r(e)}).join("")+t,o=c[n]||c.Extension[n];if(i.isUndefined(o))throw new ReferenceError("Class '"+n+"' not found");return o}return e}};i.extend(c,n.Events);var d=c.Command=function(e){i.extend(this,{altKey:!!e.altKey,"char":e.char,charCode:e.charCode,ctrlKey:!!e.ctrlKey,key:e.key,keyCode:e.keyCode,locale:e.locale,location:e.location,metaKey:!!e.metaKey,repeat:!!e.repeat,shiftKey:!!e.shiftKey,which:e.which})};i.extend(d.prototype,{moveUp:function(){return 38==this.keyCode},moveDown:function(){return 40===this.keyCode},moveLeft:function(){return this.shiftKey&&9===this.keyCode},moveRight:function(){return!this.shiftKey&&9===this.keyCode},save:function(){return 13===this.keyCode},cancel:function(){return 27===this.keyCode},passThru:function(){return!(this.moveUp()||this.moveDown()||this.moveLeft()||this.moveRight()||this.save()||this.cancel())}});var u=c.CellFormatter=function(){};i.extend(u.prototype,{fromRaw:function(e){return e},toRaw:function(e){return e}});var m=c.NumberFormatter=function(e){if(e=e?i.clone(e):{},i.extend(this,this.defaults,e),0>this.decimals||this.decimals>20)throw new RangeError("decimals must be between 0 and 20")};m.prototype=new u,i.extend(m.prototype,{defaults:{decimals:2,decimalSeparator:".",orderSeparator:","},HUMANIZED_NUM_RE:/(\d)(?=(?:\d{3})+$)/g,fromRaw:function(e){if(i.isNull(e)||i.isUndefined(e))return"";e=e.toFixed(~~this.decimals);var t=e.split("."),n=t[0],r=t[1]?(this.decimalSeparator||".")+t[1]:"";return n.replace(this.HUMANIZED_NUM_RE,"$1"+this.orderSeparator)+r},toRaw:function(e){for(var t="",n=e.trim().split(this.orderSeparator),r=0;n.length>r;r++)t+=n[r];var o=t.split(this.decimalSeparator);t="";for(var r=0;o.length>r;r++)t=t+o[r]+".";"."===t[t.length-1]&&(t=t.slice(0,t.length-1));var s=1*(1*t).toFixed(~~this.decimals);return i.isNumber(s)&&!i.isNaN(s)?s:void 0}});var p=c.DatetimeFormatter=function(e){if(e=e?i.clone(e):{},i.extend(this,this.defaults,e),!this.includeDate&&!this.includeTime)throw Error("Either includeDate or includeTime must be true")};p.prototype=new u,i.extend(p.prototype,{defaults:{includeDate:!0,includeTime:!0,includeMilli:!1},DATE_RE:/^([+\-]?\d{4})-(\d{2})-(\d{2})$/,TIME_RE:/^(\d{2}):(\d{2}):(\d{2})(\.(\d{3}))?$/,ISO_SPLITTER_RE:/T|Z| +/,_convert:function(e,t){e=e.trim();var n=e.split(this.ISO_SPLITTER_RE)||[],r=this.DATE_RE.test(n[0])?n[0]:"",s=r&&n[1]?n[1]:this.TIME_RE.test(n[0])?n[0]:"",l=this.DATE_RE.exec(r)||[],a=this.TIME_RE.exec(s)||[];if(t){if(this.includeDate&&i.isUndefined(l[0]))return;if(this.includeTime&&i.isUndefined(a[0]))return;if(!this.includeDate&&r)return;if(!this.includeTime&&s)return}var h=new Date(Date.UTC(1*l[1]||0,1*l[2]-1||0,1*l[3]||0,1*a[1]||null,1*a[2]||null,1*a[3]||null,1*a[5]||null)),c="";return this.includeDate&&(c=o(h.getUTCFullYear(),4,0)+"-"+o(h.getUTCMonth()+1,2,0)+"-"+o(h.getUTCDate(),2,0)),this.includeTime&&(c=c+(this.includeDate?"T":"")+o(h.getUTCHours(),2,0)+":"+o(h.getUTCMinutes(),2,0)+":"+o(h.getUTCSeconds(),2,0),this.includeMilli&&(c=c+"."+o(h.getUTCMilliseconds(),3,0))),this.includeDate&&this.includeTime&&(c+="Z"),c},fromRaw:function(e){return i.isNull(e)||i.isUndefined(e)?"":this._convert(e)},toRaw:function(e){return this._convert(e,!0)}});var f=c.StringFormatter=function(){};f.prototype=new u,i.extend(f.prototype,{fromRaw:function(e){return i.isUndefined(e)||i.isNull(e)?"":e+""}});var v=c.EmailFormatter=function(){};v.prototype=new u,i.extend(v.prototype,{toRaw:function(e){var t=e.trim().split("@");return 2===t.length&&i.all(t)?e:void 0}});var g=c.CellEditor=n.View.extend({initialize:function(e){c.requireOptions(e,["formatter","column","model"]),this.formatter=e.formatter,this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.listenTo(this.model,"backgrid:editing",this.postRender)},postRender:function(e,t){return(null==t||t.get("name")==this.column.get("name"))&&this.$el.focus(),this}}),w=c.InputCellEditor=g.extend({tagName:"input",attributes:{type:"text"},events:{blur:"saveOrCancel",keydown:"saveOrCancel"},initialize:function(e){g.prototype.initialize.apply(this,arguments),e.placeholder&&this.$el.attr("placeholder",e.placeholder)},render:function(){return this.$el.val(this.formatter.fromRaw(this.model.get(this.column.get("name")))),this},saveOrCancel:function(e){var t=this.formatter,n=this.model,r=this.column,o=new d(e),l="blur"===e.type;if(o.moveUp()||o.moveDown()||o.moveLeft()||o.moveRight()||o.save()||l){e.preventDefault(),e.stopPropagation();var a=this.$el.val(),h=t.toRaw(a);if(i.isUndefined(h)){if(n.trigger("backgrid:error",n,r,a),l)var c=this,u=s.setTimeout(function(){c.$el.focus(),s.clearTimeout(u)},1)}else n.set(r.get("name"),h),n.trigger("backgrid:edited",n,r,o)}else o.cancel()&&(e.stopPropagation(),n.trigger("backgrid:edited",n,r,o))},postRender:function(e,t){if(null==t||t.get("name")==this.column.get("name"))if("right"===this.$el.css("text-align")){var i=this.$el.val();this.$el.focus().val(null).val(i)}else this.$el.focus();return this}}),y=c.Cell=n.View.extend({tagName:"td",formatter:new u,editor:w,events:{click:"enterEditMode"},initialize:function(e){c.requireOptions(e,["model","column"]),this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.formatter=c.resolveNameToClass(this.formatter,"Formatter"),this.editor=c.resolveNameToClass(this.editor,"CellEditor"),this.listenTo(this.model,"change:"+this.column.get("name"),function(){this.$el.hasClass("editor")||this.render()})},render:function(){return this.$el.empty(),this.$el.text(this.formatter.fromRaw(this.model.get(this.column.get("name")))),this.delegateEvents(),this},enterEditMode:function(){var e=this.model,t=this.column;t.get("editable")&&(this.currentEditor=new this.editor({column:this.column,model:this.model,formatter:this.formatter}),e.trigger("backgrid:edit",e,t,this,this.currentEditor),this.listenTo(e,"backgrid:error",this.renderError),this.undelegateEvents(),this.$el.empty(),this.$el.append(this.currentEditor.$el),this.currentEditor.render(),this.$el.addClass("editor"),e.trigger("backgrid:editing",e,t,this,this.currentEditor))},renderError:function(e,t){(null==t||t.get("name")==this.column.get("name"))&&this.$el.addClass("error")},exitEditMode:function(){this.$el.removeClass("error"),this.currentEditor.remove(),this.stopListening(this.currentEditor),delete this.currentEditor,this.$el.removeClass("editor"),this.render()},remove:function(){return this.currentEditor&&(this.currentEditor.remove.apply(this,arguments),delete this.currentEditor),n.View.prototype.remove.apply(this,arguments)}}),C=c.StringCell=y.extend({className:"string-cell",formatter:new f});c.UriCell=y.extend({className:"uri-cell",render:function(){this.$el.empty();var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.append(t("<a>",{tabIndex:-1,href:e,title:e,target:"_blank"}).text(e)),this.delegateEvents(),this}}),c.EmailCell=C.extend({className:"email-cell",formatter:new v,render:function(){this.$el.empty();var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.append(t("<a>",{tabIndex:-1,href:"mailto:"+e,title:e}).text(e)),this.delegateEvents(),this}});var b=c.NumberCell=y.extend({className:"number-cell",decimals:m.prototype.defaults.decimals,decimalSeparator:m.prototype.defaults.decimalSeparator,orderSeparator:m.prototype.defaults.orderSeparator,formatter:m,initialize:function(){y.prototype.initialize.apply(this,arguments),this.formatter=new this.formatter({decimals:this.decimals,decimalSeparator:this.decimalSeparator,orderSeparator:this.orderSeparator})}});c.IntegerCell=b.extend({className:"integer-cell",decimals:0});var E=c.DatetimeCell=y.extend({className:"datetime-cell",includeDate:p.prototype.defaults.includeDate,includeTime:p.prototype.defaults.includeTime,includeMilli:p.prototype.defaults.includeMilli,formatter:p,initialize:function(){y.prototype.initialize.apply(this,arguments),this.formatter=new this.formatter({includeDate:this.includeDate,includeTime:this.includeTime,includeMilli:this.includeMilli});var e=this.includeDate?"YYYY-MM-DD":"";e+=this.includeDate&&this.includeTime?"T":"",e+=this.includeTime?"HH:mm:ss":"",e+=this.includeTime&&this.includeMilli?".SSS":"",this.editor=this.editor.extend({attributes:i.extend({},this.editor.prototype.attributes,this.editor.attributes,{placeholder:e})})}});c.DateCell=E.extend({className:"date-cell",includeTime:!1}),c.TimeCell=E.extend({className:"time-cell",includeDate:!1});var x=c.BooleanCellEditor=g.extend({tagName:"input",attributes:{tabIndex:-1,type:"checkbox"},events:{blur:"enterOrExitEditMode",change:"saveOrCancel",keydown:"saveOrCancel"},render:function(){var e=this.formatter.fromRaw(this.model.get(this.column.get("name")));return this.$el.prop("checked",e),this},enterOrExitEditMode:function(e){var t=this.$el.prop("checked"),i=this,n=this.model,r=s.setTimeout(function(){i.$el.prop("checked")!=t?i.$el.focus():n.trigger("backgrid:edited",n,i.column,new d(e)),s.clearTimeout(r)},50)},saveOrCancel:function(e){var t=this.model,i=this.column,n=this.formatter,r=new d(e);if(r.passThru()&&"change"!=e.type)return!0;if(r.cancel()&&(e.stopPropagation(),t.trigger("backgrid:edited",t,i,r)),r.save()||r.moveLeft()||r.moveRight()||r.moveUp()||r.moveDown()){e.preventDefault(),e.stopPropagation();var o=n.toRaw(this.$el.prop("checked"));t.set(i.get("name"),o),t.trigger("backgrid:edited",t,i,r)}else if("change"==e.type){var o=n.toRaw(this.$el.prop("checked"));t.set(i.get("name"),o)}}});c.BooleanCell=y.extend({className:"boolean-cell",editor:x,events:{click:"enterEditMode"},render:function(){return this.$el.empty(),this.$el.append(t("<input>",{tabIndex:-1,type:"checkbox",checked:this.formatter.fromRaw(this.model.get(this.column.get("name")))})),this.delegateEvents(),this}});var T=c.SelectCellEditor=g.extend({tagName:"select",events:{change:"save",blur:"close",keydown:"close"},template:i.template('<option value="<%- value %>" <%= selected ? \'selected="selected"\' : "" %>><%- text %></option>'),setOptionValues:function(e){this.optionValues=e},_renderOptions:function(e,t){for(var i="",n=0;e.length>n;n++)i+=this.template({text:e[n][0],value:e[n][1],selected:t==e[n][1]});return i},render:function(){this.$el.empty();var e=i.result(this,"optionValues"),n=this.model.get(this.column.get("name"));if(!i.isArray(e))throw TypeError("optionValues must be an array");for(var r=null,o=null,r=null,s=null,l=null,a=0;e.length>a;a++){var r=e[a];if(i.isArray(r))o=r[0],r=r[1],this.$el.append(this.template({text:o,value:r,selected:r==n}));else{if(!i.isObject(r))throw TypeError("optionValues elements must be a name-value pair or an object hash of { name: 'optgroup label', value: [option name-value pairs] }");s=r.name,l=t("<optgroup></optgroup>",{label:s}),l.append(this._renderOptions(r.values,n)),this.$el.append(l)}}return this.delegateEvents(),this},save:function(e){var t=this.model,i=this.column;t.set(i.get("name"),this.formatter.toRaw(this.$el.val())),t.trigger("backgrid:edited",t,i,new d(e))},close:function(e){var t=this.model,i=this.column,n=new d(e);n.cancel()?(e.stopPropagation(),t.trigger("backgrid:edited",t,i,new d(e))):(n.save()||n.moveLeft()||n.moveRight()||n.moveUp()||n.moveDown()||"blur"==e.type)&&(e.preventDefault(),e.stopPropagation(),t.trigger("backgrid:edited",t,i,new d(e)))}});c.SelectCell=y.extend({className:"select-cell",editor:T,optionValues:void 0,initialize:function(){y.prototype.initialize.apply(this,arguments),c.requireOptions(this,["optionValues"]),this.optionValues=i.result(this,"optionValues"),this.listenTo(this.model,"backgrid:edit",function(e,t,i,n){t.get("name")==this.column.get("name")&&n.setOptionValues(this.optionValues)})},render:function(){this.$el.empty();var e=this.optionValues,t=this.formatter.fromRaw(this.model.get(this.column.get("name")));try{if(!i.isArray(e)||i.isEmpty(e))throw new TypeError;for(var n=0;e.length>n;n++){var r=e[n];if(i.isArray(r)){var o=r[0],r=r[1];if(r==t){this.$el.append(o);break}}else{if(!i.isObject(r))throw new TypeError;for(var s=r.values,l=0;s.length>l;l++){var a=s[l];if(a[1]==t){this.$el.append(a[0]);break}}}}}catch(h){if(h instanceof TypeError)throw TypeError("'optionValues' must be of type {Array.<Array>|Array.<{name: string, values: Array.<Array>}>}");throw h}return this.delegateEvents(),this}});var $=c.Column=n.Model.extend({defaults:{name:void 0,label:void 0,sortable:!0,editable:!0,renderable:!0,formatter:void 0,cell:void 0,headerCell:void 0},initialize:function(e){c.requireOptions(e,["cell","name"]),this.has("label")||this.set({label:this.get("name")},{silent:!0});var t=c.resolveNameToClass(this.get("headerCell"),"HeaderCell"),i=c.resolveNameToClass(this.get("cell"),"Cell");this.set({cell:i,headerCell:t},{silent:!0})}}),R=c.Columns=n.Collection.extend({model:$}),k=c.Row=n.View.extend({tagName:"tr",requiredOptions:["columns","model"],initialize:function(e){c.requireOptions(e,this.requiredOptions);var t=this.columns=e.columns;t instanceof n.Collection||(t=this.columns=new R(t));for(var i=this.cells=[],r=0;t.length>r;r++)i.push(this.makeCell(t.at(r),e));this.listenTo(t,"change:renderable",function(e,t){for(var n=0;i.length>n;n++){var r=i[n];r.column.get("name")==e.get("name")&&(t?r.$el.show():r.$el.hide())}}),this.listenTo(t,"add",function(t,n){var r=n.indexOf(t),o=this.makeCell(t,e);i.splice(r,0,o),o.column.get("renderable")||o.$el.hide();var s=this.$el;0===r?s.prepend(o.render().$el):r===n.length-1?s.append(o.render().$el):s.children().eq(r).before(o.render().$el)}),this.listenTo(t,"remove",function(e,t,n){i[n.index].remove(),i.splice(n.index,1)})},makeCell:function(e){return new(e.get("cell"))({column:e,model:this.model})},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;this.cells.length>t;t++){var i=this.cells[t];e.appendChild(i.render().el),i.column.get("renderable")||i.$el.hide()}return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;this.cells.length>e;e++){var t=this.cells[e];t.remove.apply(t,arguments)}return n.View.prototype.remove.apply(this,arguments)}}),N=c.EmptyRow=n.View.extend({tagName:"tr",emptyText:null,initialize:function(e){c.requireOptions(e,["emptyText","columns"]),this.emptyText=e.emptyText,this.columns=e.columns},render:function(){this.$el.empty();var e=document.createElement("td");return e.setAttribute("colspan",this.columns.length),e.textContent=this.emptyText,this.el.setAttribute("class","empty"),this.el.appendChild(e),this}}),D=c.HeaderCell=n.View.extend({tagName:"th",events:{"click a":"onClick"},_direction:null,initialize:function(e){c.requireOptions(e,["column","collection"]),this.column=e.column,this.column instanceof $||(this.column=new $(this.column)),this.listenTo(n,"backgrid:sort",this._resetCellDirection)},direction:function(e){return arguments.length&&(this._direction&&this.$el.removeClass(this._direction),e&&this.$el.addClass(e),this._direction=e),this._direction},_resetCellDirection:function(e,t,i,n){n==this.collection&&(e!==this.column.get("name")?this.direction(null):this.direction(t))},onClick:function(e){e.preventDefault();var t=this.column.get("name");this.column.get("sortable")&&("ascending"===this.direction()?this.sort(t,"descending",function(e,i){var n=e.get(t),r=i.get(t);return n===r?0:n>r?-1:1}):"descending"===this.direction()?this.sort(t,null):this.sort(t,"ascending",function(e,i){var n=e.get(t),r=i.get(t);return n===r?0:r>n?-1:1}))},sort:function(e,t,i){i=i||this._cidComparator;var r=this.collection;if(n.PageableCollection&&r instanceof n.PageableCollection){var o;o="ascending"===t?-1:"descending"===t?1:null,r.setSorting(o?e:null,o),"client"==r.mode?(r.fullCollection.comparator||(r.fullCollection.comparator=i),r.fullCollection.sort()):r.fetch()}else r.comparator=i,r.sort();n.trigger("backgrid:sort",e,t,i,this.collection)},_cidComparator:function(e,t){var n=e.cid,r=t.cid;if(!i.isUndefined(n)&&!i.isUndefined(r)){if(n=1*n.slice(1),r=1*r.slice(1),r>n)return-1;if(n>r)return 1}return 0},render:function(){this.$el.empty();var e=t("<a>").text(this.column.get("label")).append("<b class='sort-caret'></b>");return this.$el.append(e),this.delegateEvents(),this}});c.HeaderRow=c.Row.extend({requiredOptions:["columns","collection"],initialize:function(){c.Row.prototype.initialize.apply(this,arguments)},makeCell:function(e,t){var i=e.get("headerCell")||t.headerCell||D;return i=new i({column:e,collection:this.collection})}});var O=c.Header=n.View.extend({tagName:"thead",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new R(this.columns)),this.row=new c.HeaderRow({columns:this.columns,collection:this.collection})},render:function(){return this.$el.append(this.row.render().$el),this.delegateEvents(),this},remove:function(){return this.row.remove.apply(this.row,arguments),n.View.prototype.remove.apply(this,arguments)}}),_=c.Body=n.View.extend({tagName:"tbody",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new R(this.columns)),this.row=e.row||k,this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this.emptyText=e.emptyText,this._unshiftEmptyRowMayBe();var t=this.collection;this.listenTo(t,"add",this.insertRow),this.listenTo(t,"remove",this.removeRow),this.listenTo(t,"sort",this.refresh),this.listenTo(t,"reset",this.refresh),this.listenTo(t,"backgrid:edited",this.moveToNextCell)},_unshiftEmptyRowMayBe:function(){0===this.rows.length&&null!=this.emptyText&&this.rows.unshift(new N({emptyText:this.emptyText,columns:this.columns}))},insertRow:function(e,t,r){if(this.rows[0]instanceof N&&this.rows.pop().remove(),!(t instanceof n.Collection||r))return this.collection.add(e,r=t),void 0;r=i.extend({render:!0},r||{});var o=new this.row({columns:this.columns,model:e}),s=t.indexOf(e);this.rows.splice(s,0,o);var l=this.$el,a=l.children(),h=o.render().$el;r.render&&(s>=a.length?l.append(h):a.eq(s).before(h))},removeRow:function(e,t,n){return n?((i.isUndefined(n.render)||n.render)&&this.rows[n.index].remove(),this.rows.splice(n.index,1),this._unshiftEmptyRowMayBe(),void 0):(this.collection.remove(e,n=t),this._unshiftEmptyRowMayBe(),void 0)},refresh:function(){for(var e=0;this.rows.length>e;e++)this.rows[e].remove();return this.rows=this.collection.map(function(e){var t=new this.row({columns:this.columns,model:e});return t},this),this._unshiftEmptyRowMayBe(),this.render(),n.trigger("backgrid:refresh",this),this},render:function(){this.$el.empty();for(var e=document.createDocumentFragment(),t=0;this.rows.length>t;t++){var i=this.rows[t];e.appendChild(i.render().el)}return this.el.appendChild(e),this.delegateEvents(),this},remove:function(){for(var e=0;this.rows.length>e;e++){var t=this.rows[e];t.remove.apply(t,arguments)}return n.View.prototype.remove.apply(this,arguments)},moveToNextCell:function(e,t,i){var n=this.collection.indexOf(e),r=this.columns.indexOf(t);if(i.moveUp()||i.moveDown()||i.moveLeft()||i.moveRight()||i.save()){var o=this.columns.length,s=o*this.collection.length;if(i.moveUp()||i.moveDown()){var l=this.rows[n+(i.moveUp()?-1:1)];l&&l.cells[r].enterEditMode()}else if(i.moveLeft()||i.moveRight())for(var a=i.moveRight(),h=n*o+r+(a?1:-1);h>=0&&s>h;a?h++:h--){var c=~~(h/o),d=h-c*o,u=this.rows[c].cells[d];if(u.column.get("renderable")&&u.column.get("editable")){u.enterEditMode();break}}}this.rows[n].cells[r].exitEditMode()}});c.Footer=n.View.extend({tagName:"tfoot",initialize:function(e){c.requireOptions(e,["columns","collection"]),this.parent=e.parent,this.columns=e.columns,this.columns instanceof n.Collection||(this.columns=new c.Columns(this.columns))}}),c.Grid=n.View.extend({tagName:"table",className:"backgrid",header:O,body:_,footer:null,initialize:function(e){c.requireOptions(e,["columns","collection"]),e.columns instanceof n.Collection||(e.columns=new R(e.columns)),this.columns=e.columns;var t=i.omit(e,["el","id","attributes","className","tagName","events"]);this.header=e.header||this.header,this.header=new this.header(t),this.body=e.body||this.body,this.body=new this.body(t),this.footer=e.footer||this.footer,this.footer&&(this.footer=new this.footer(t)),this.listenTo(this.columns,"reset",function(){this.header=new(this.header.remove().constructor)(t),this.body=new(this.body.remove().constructor)(t),this.footer&&(this.footer=new(this.footer.remove().constructor)(t)),this.render()})},insertRow:function(e,t,i){return this.body.insertRow(e,t,i)},removeRow:function(e,t,i){return this.body.removeRow(e,t,i)},insertColumn:function(e,t){return t=t||{render:!0},this.columns.add(e,t),this},removeColumn:function(e,t){return this.columns.remove(e,t),this},render:function(){return this.$el.empty(),this.$el.append(this.header.render().$el),this.footer&&this.$el.append(this.footer.render().$el),this.$el.append(this.body.render().$el),this.delegateEvents(),this.trigger("backgrid:rendered",this),this},remove:function(){return this.header.remove.apply(this.header,arguments),this.body.remove.apply(this.body,arguments),this.footer&&this.footer.remove.apply(this.footer,arguments),n.View.prototype.remove.apply(this,arguments)}})})(this,jQuery,_,Backbone);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(a){"use strict";if("undefined"===typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var k=a.document,n=k.createElementNS("http://www.w3.org/1999/xhtml","a"),w="download"in n,x=function(c){var e=k.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null);c.dispatchEvent(e)},q=a.webkitRequestFileSystem,u=a.requestFileSystem||q||a.mozRequestFileSystem,
y=function(c){(a.setImmediate||a.setTimeout)(function(){throw c;},0)},r=0,s=function(c){var e=function(){"string"===typeof c?(a.URL||a.webkitURL||a).revokeObjectURL(c):c.remove()};a.chrome?e():setTimeout(e,10)},t=function(c,a,d){a=[].concat(a);for(var b=a.length;b--;){var l=c["on"+a[b]];if("function"===typeof l)try{l.call(c,d||c)}catch(f){y(f)}}},m=function(c,e){var d=this,b=c.type,l=!1,f,p,k=function(){t(d,["writestart","progress","write","writeend"])},g=function(){if(l||!f)f=(a.URL||a.webkitURL||
a).createObjectURL(c);p?p.location.href=f:void 0==a.open(f,"_blank")&&"undefined"!==typeof safari&&(a.location.href=f);d.readyState=d.DONE;k();s(f)},h=function(a){return function(){if(d.readyState!==d.DONE)return a.apply(this,arguments)}},m={create:!0,exclusive:!1},v;d.readyState=d.INIT;e||(e="download");if(w)f=(a.URL||a.webkitURL||a).createObjectURL(c),n.href=f,n.download=e,x(n),d.readyState=d.DONE,k(),s(f);else{a.chrome&&b&&"application/octet-stream"!==b&&(v=c.slice||c.webkitSlice,c=v.call(c,0,
c.size,"application/octet-stream"),l=!0);q&&"download"!==e&&(e+=".download");if("application/octet-stream"===b||q)p=a;u?(r+=c.size,u(a.TEMPORARY,r,h(function(a){a.root.getDirectory("saved",m,h(function(a){var b=function(){a.getFile(e,m,h(function(a){a.createWriter(h(function(b){b.onwriteend=function(b){p.location.href=a.toURL();d.readyState=d.DONE;t(d,"writeend",b);s(a)};b.onerror=function(){var a=b.error;a.code!==a.ABORT_ERR&&g()};["writestart","progress","write","abort"].forEach(function(a){b["on"+
a]=d["on"+a]});b.write(c);d.abort=function(){b.abort();d.readyState=d.DONE};d.readyState=d.WRITING}),g)}),g)};a.getFile(e,{create:!1},h(function(a){a.remove();b()}),h(function(a){a.code===a.NOT_FOUND_ERR?b():g()}))}),g)}),g)):g()}},b=m.prototype;b.abort=function(){this.readyState=this.DONE;t(this,"abort")};b.readyState=b.INIT=0;b.WRITING=1;b.DONE=2;b.error=b.onwritestart=b.onprogress=b.onwrite=b.onabort=b.onerror=b.onwriteend=null;return function(a,b){return new m(a,b)}}}("undefined"!==typeof self&&
self||"undefined"!==typeof window&&window||this.content);"undefined"!==typeof module&&null!==module?module.exports=saveAs:"undefined"!==typeof define&&null!==define&&null!=define.amd&&define([],function(){return saveAs});
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// lib/handlebars/browser-prefix.js
var Handlebars = {};

(function(Handlebars, undefined) {
;
// lib/handlebars/base.js

Handlebars.VERSION = "1.0.0";
Handlebars.COMPILER_REVISION = 4;

Handlebars.REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '>= 1.0.0'
};

Handlebars.helpers  = {};
Handlebars.partials = {};

var toString = Object.prototype.toString,
    functionType = '[object Function]',
    objectType = '[object Object]';

Handlebars.registerHelper = function(name, fn, inverse) {
  if (toString.call(name) === objectType) {
    if (inverse || fn) { throw new Handlebars.Exception('Arg not supported with multiple helpers'); }
    Handlebars.Utils.extend(this.helpers, name);
  } else {
    if (inverse) { fn.not = inverse; }
    this.helpers[name] = fn;
  }
};

Handlebars.registerPartial = function(name, str) {
  if (toString.call(name) === objectType) {
    Handlebars.Utils.extend(this.partials,  name);
  } else {
    this.partials[name] = str;
  }
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Missing helper: '" + arg + "'");
  }
});

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;

  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(conditional, options) {
  var type = toString.call(conditional);
  if(type === functionType) { conditional = conditional.call(this); }

  if(!conditional || Handlebars.Utils.isEmpty(conditional)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(conditional, options) {
  return Handlebars.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn});
});

Handlebars.registerHelper('with', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if (!Handlebars.Utils.isEmpty(context)) return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

var escapeChar = function(chr) {
  return escape[chr] || "&amp;";
};

Handlebars.Utils = {
  extend: function(obj, value) {
    for(var key in value) {
      if(value.hasOwnProperty(key)) {
        obj[key] = value[key];
      }
    }
  },

  escapeExpression: function(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof Handlebars.SafeString) {
      return string.toString();
    } else if (string == null || string === false) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = string.toString();

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  },

  isEmpty: function(value) {
    if (!value && value !== 0) {
      return true;
    } else if(toString.call(value) === "[object Array]" && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
;
// lib/handlebars/runtime.js

Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = Handlebars.VM.program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common) {
          ret = {};
          Handlebars.Utils.extend(ret, common);
          Handlebars.Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);

      var compilerInfo = container.compilerInfo || [],
          compilerRevision = compilerInfo[0] || 1,
          currentRevision = Handlebars.COMPILER_REVISION;

      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision],
              compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
          throw "Template was precompiled with an older version of Handlebars than the current runtime. "+
                "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").";
        } else {
          // Use the embedded version info since the runtime doesn't know about this revision yet
          throw "Template was precompiled with a newer version of Handlebars than the current runtime. "+
                "Please update your runtime to a newer version ("+compilerInfo[1]+").";
        }
      }

      return result;
    };
  },

  programWithDepth: function(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var program = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    program.program = i;
    program.depth = args.length;
    return program;
  },
  program: function(i, fn, data) {
    var program = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    program.program = i;
    program.depth = 0;
    return program;
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
// lib/handlebars/browser-suffix.js
})(Handlebars);
;
(function(q,f){"object"===typeof exports?f(exports):"function"===typeof define&&define.amd?define(["exports"],f):f(q)})(this,function(q){function f(a){this._targetElement=a;this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",tooltipPosition:"bottom",tooltipClass:"",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0,keyboardNavigation:!0,showButtons:!0,showBullets:!0,scrollToElement:!0}}function s(a){if(null==a||"object"!=typeof a||"undefined"!=typeof a.nodeType)return a;
var b={},c;for(c in a)b[c]=s(a[c]);return b}function t(){this._direction="forward";"undefined"===typeof this._currentStep?this._currentStep=0:++this._currentStep;if(this._introItems.length<=this._currentStep)"function"===typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),u.call(this,this._targetElement);else{var a=this._introItems[this._currentStep];"undefined"!==typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,a.element);A.call(this,a)}}function y(){this._direction=
"backward";if(0===this._currentStep)return!1;var a=this._introItems[--this._currentStep];"undefined"!==typeof this._introBeforeChangeCallback&&this._introBeforeChangeCallback.call(this,a.element);A.call(this,a)}function u(a){var b=a.querySelector(".introjs-overlay");if(null!=b){b.style.opacity=0;setTimeout(function(){b.parentNode&&b.parentNode.removeChild(b)},500);(a=a.querySelector(".introjs-helperLayer"))&&a.parentNode.removeChild(a);(a=document.querySelector(".introjsFloatingElement"))&&a.parentNode.removeChild(a);
if(a=document.querySelector(".introjs-showElement"))a.className=a.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,"");if((a=document.querySelectorAll(".introjs-fixParent"))&&0<a.length)for(var c=a.length-1;0<=c;c--)a[c].className=a[c].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown);this._currentStep=void 0}}
function B(a,b,c,d){b.style.top=null;b.style.right=null;b.style.bottom=null;b.style.left=null;b.style.marginLeft=null;b.style.marginTop=null;c.style.display="inherit";"undefined"!=typeof d&&null!=d&&(d.style.top=null,d.style.left=null);if(this._introItems[this._currentStep]){var e="",e=this._introItems[this._currentStep],e="string"===typeof e.tooltipClass?e.tooltipClass:this._options.tooltipClass;b.className=("introjs-tooltip "+e).replace(/^\s+|\s+$/g,"");switch(this._introItems[this._currentStep].position){case "top":b.style.left=
"15px";b.style.top="-"+(p(b).height+10)+"px";c.className="introjs-arrow bottom";break;case "right":b.style.left=p(a).width+20+"px";c.className="introjs-arrow left";break;case "left":!0==this._options.showStepNumbers&&(b.style.top="15px");b.style.right=p(a).width+20+"px";c.className="introjs-arrow right";break;case "floating":c.style.display="none";a=p(b);b.style.left="50%";b.style.top="50%";b.style.marginLeft="-"+a.width/2+"px";b.style.marginTop="-"+a.height/2+"px";"undefined"!=typeof d&&null!=d&&
(d.style.left="-"+(a.width/2+18)+"px",d.style.top="-"+(a.height/2+18)+"px");break;default:b.style.bottom="-"+(p(b).height+10)+"px",c.className="introjs-arrow top"}}}function w(a){if(a&&this._introItems[this._currentStep]){var b=this._introItems[this._currentStep],c=p(b.element),d=10;"floating"==b.position&&(d=0);a.setAttribute("style","width: "+(c.width+d)+"px; height:"+(c.height+d)+"px; top:"+(c.top-5)+"px;left: "+(c.left-5)+"px;")}}function A(a){var b;"undefined"!==typeof this._introChangeCallback&&
this._introChangeCallback.call(this,a.element);var c=this,d=document.querySelector(".introjs-helperLayer");p(a.element);if(null!=d){var e=d.querySelector(".introjs-helperNumberLayer"),C=d.querySelector(".introjs-tooltiptext"),g=d.querySelector(".introjs-arrow"),n=d.querySelector(".introjs-tooltip"),j=d.querySelector(".introjs-skipbutton"),m=d.querySelector(".introjs-prevbutton"),k=d.querySelector(".introjs-nextbutton");n.style.opacity=0;if(null!=e&&(b=this._introItems[0<=a.step-2?a.step-2:0],null!=
b&&"forward"==this._direction&&"floating"==b.position||"backward"==this._direction&&"floating"==a.position))e.style.opacity=0;w.call(c,d);var l=document.querySelectorAll(".introjs-fixParent");if(l&&0<l.length)for(b=l.length-1;0<=b;b--)l[b].className=l[b].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");b=document.querySelector(".introjs-showElement");b.className=b.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,"");c._lastShowElementTimer&&clearTimeout(c._lastShowElementTimer);
c._lastShowElementTimer=setTimeout(function(){null!=e&&(e.innerHTML=a.step);C.innerHTML=a.intro;B.call(c,a.element,n,g,e);d.querySelector(".introjs-bullets li > a.active").className="";d.querySelector('.introjs-bullets li > a[data-stepnumber="'+a.step+'"]').className="active";n.style.opacity=1;e.style.opacity=1},350)}else{var j=document.createElement("div"),l=document.createElement("div"),h=document.createElement("div"),m=document.createElement("div"),k=document.createElement("div"),f=document.createElement("div");
j.className="introjs-helperLayer";w.call(c,j);this._targetElement.appendChild(j);l.className="introjs-arrow";m.className="introjs-tooltiptext";m.innerHTML=a.intro;k.className="introjs-bullets";!1===this._options.showBullets&&(k.style.display="none");var q=document.createElement("ul");b=0;for(var v=this._introItems.length;b<v;b++){var s=document.createElement("li"),r=document.createElement("a");r.onclick=function(){c.goToStep(this.getAttribute("data-stepnumber"))};0===b&&(r.className="active");r.href=
"javascript:void(0);";r.innerHTML="&nbsp;";r.setAttribute("data-stepnumber",this._introItems[b].step);s.appendChild(r);q.appendChild(s)}k.appendChild(q);f.className="introjs-tooltipbuttons";!1===this._options.showButtons&&(f.style.display="none");h.className="introjs-tooltip";h.appendChild(m);h.appendChild(k);if(!0==this._options.showStepNumbers){var x=document.createElement("span");x.className="introjs-helperNumberLayer";x.innerHTML=a.step;j.appendChild(x)}h.appendChild(l);j.appendChild(h);k=document.createElement("a");
k.onclick=function(){c._introItems.length-1!=c._currentStep&&t.call(c)};k.href="javascript:void(0);";k.innerHTML=this._options.nextLabel;m=document.createElement("a");m.onclick=function(){0!=c._currentStep&&y.call(c)};m.href="javascript:void(0);";m.innerHTML=this._options.prevLabel;j=document.createElement("a");j.className="introjs-button introjs-skipbutton";j.href="javascript:void(0);";j.innerHTML=this._options.skipLabel;j.onclick=function(){c._introItems.length-1==c._currentStep&&"function"===typeof c._introCompleteCallback&&
c._introCompleteCallback.call(c);c._introItems.length-1!=c._currentStep&&"function"===typeof c._introExitCallback&&c._introExitCallback.call(c);u.call(c,c._targetElement)};f.appendChild(j);1<this._introItems.length&&(f.appendChild(m),f.appendChild(k));h.appendChild(f);B.call(c,a.element,h,l,x)}0==this._currentStep&&1<this._introItems.length?(m.className="introjs-button introjs-prevbutton introjs-disabled",k.className="introjs-button introjs-nextbutton",j.innerHTML=this._options.skipLabel):this._introItems.length-
1==this._currentStep||1==this._introItems.length?(j.innerHTML=this._options.doneLabel,m.className="introjs-button introjs-prevbutton",k.className="introjs-button introjs-nextbutton introjs-disabled"):(m.className="introjs-button introjs-prevbutton",k.className="introjs-button introjs-nextbutton",j.innerHTML=this._options.skipLabel);k.focus();a.element.className+=" introjs-showElement";b=z(a.element,"position");"absolute"!==b&&"relative"!==b&&(a.element.className+=" introjs-relativePosition");for(b=
a.element.parentNode;null!=b&&"body"!==b.tagName.toLowerCase();){l=z(b,"z-index");h=parseFloat(z(b,"opacity"));if(/[0-9]+/.test(l)||1>h)b.className+=" introjs-fixParent";b=b.parentNode}b=a.element.getBoundingClientRect();!(0<=b.top&&0<=b.left&&b.bottom+80<=window.innerHeight&&b.right<=window.innerWidth)&&!0===this._options.scrollToElement&&(h=a.element.getBoundingClientRect(),b=void 0!=window.innerWidth?window.innerHeight:document.documentElement.clientHeight,l=h.bottom-(h.bottom-h.top),h=h.bottom-
b,0>l||a.element.clientHeight>b?window.scrollBy(0,l-30):window.scrollBy(0,h+100));"undefined"!==typeof this._introAfterChangeCallback&&this._introAfterChangeCallback.call(this,a.element)}function z(a,b){var c="";a.currentStyle?c=a.currentStyle[b]:document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b));return c&&c.toLowerCase?c.toLowerCase():c}function D(a){var b=document.createElement("div"),c="",d=this;b.className="introjs-overlay";
if("body"===a.tagName.toLowerCase())c+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",b.setAttribute("style",c);else{var e=p(a);e&&(c+="width: "+e.width+"px; height:"+e.height+"px; top:"+e.top+"px;left: "+e.left+"px;",b.setAttribute("style",c))}a.appendChild(b);b.onclick=function(){!0==d._options.exitOnOverlayClick&&(u.call(d,a),void 0!=d._introExitCallback&&d._introExitCallback.call(d))};setTimeout(function(){c+="opacity: .8;";b.setAttribute("style",c)},10);return!0}function p(a){var b={};
b.width=a.offsetWidth;b.height=a.offsetHeight;for(var c=0,d=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)c+=a.offsetLeft,d+=a.offsetTop,a=a.offsetParent;b.top=d;b.left=c;return b}var v=function(a){if("object"===typeof a)return new f(a);if("string"===typeof a){if(a=document.querySelector(a))return new f(a);throw Error("There is no element with given selector.");}return new f(document.body)};v.version="0.8.0";v.fn=f.prototype={clone:function(){return new f(this)},setOption:function(a,b){this._options[a]=
b;return this},setOptions:function(a){var b=this._options,c={},d;for(d in b)c[d]=b[d];for(d in a)c[d]=a[d];this._options=c;return this},start:function(){a:{var a=this._targetElement,b=[],c=this;if(this._options.steps)for(var d=[],e=0,d=this._options.steps.length;e<d;e++){var f=s(this._options.steps[e]);f.step=b.length+1;"string"===typeof f.element&&(f.element=document.querySelector(f.element));if("undefined"===typeof f.element||null==f.element){var g=document.querySelector(".introjsFloatingElement");
null==g&&(g=document.createElement("div"),g.className="introjsFloatingElement",document.body.appendChild(g));f.element=g;f.position="floating"}null!=f.element&&b.push(f)}else{d=a.querySelectorAll("*[data-intro]");if(1>d.length)break a;e=0;for(f=d.length;e<f;e++){var g=d[e],n=parseInt(g.getAttribute("data-step"),10);0<n&&(b[n-1]={element:g,intro:g.getAttribute("data-intro"),step:parseInt(g.getAttribute("data-step"),10),tooltipClass:g.getAttribute("data-tooltipClass"),position:g.getAttribute("data-position")||
this._options.tooltipPosition})}e=n=0;for(f=d.length;e<f;e++)if(g=d[e],null==g.getAttribute("data-step")){for(;"undefined"!=typeof b[n];)n++;b[n]={element:g,intro:g.getAttribute("data-intro"),step:n+1,tooltipClass:g.getAttribute("data-tooltipClass"),position:g.getAttribute("data-position")||this._options.tooltipPosition}}}e=[];for(d=0;d<b.length;d++)b[d]&&e.push(b[d]);b=e;b.sort(function(a,b){return a.step-b.step});c._introItems=b;D.call(c,a)&&(t.call(c),a.querySelector(".introjs-skipbutton"),a.querySelector(".introjs-nextbutton"),
c._onKeyDown=function(b){if(27===b.keyCode&&!0==c._options.exitOnEsc)u.call(c,a),void 0!=c._introExitCallback&&c._introExitCallback.call(c);else if(37===b.keyCode)y.call(c);else if(39===b.keyCode||13===b.keyCode)t.call(c),b.preventDefault?b.preventDefault():b.returnValue=!1},c._onResize=function(){w.call(c,document.querySelector(".introjs-helperLayer"))},window.addEventListener?(this._options.keyboardNavigation&&window.addEventListener("keydown",c._onKeyDown,!0),window.addEventListener("resize",c._onResize,
!0)):document.attachEvent&&(this._options.keyboardNavigation&&document.attachEvent("onkeydown",c._onKeyDown),document.attachEvent("onresize",c._onResize)))}return this},goToStep:function(a){this._currentStep=a-2;"undefined"!==typeof this._introItems&&t.call(this);return this},nextStep:function(){t.call(this);return this},previousStep:function(){y.call(this);return this},exit:function(){u.call(this,this._targetElement)},refresh:function(){w.call(this,document.querySelector(".introjs-helperLayer"));
return this},onbeforechange:function(a){if("function"===typeof a)this._introBeforeChangeCallback=a;else throw Error("Provided callback for onbeforechange was not a function");return this},onchange:function(a){if("function"===typeof a)this._introChangeCallback=a;else throw Error("Provided callback for onchange was not a function.");return this},onafterchange:function(a){if("function"===typeof a)this._introAfterChangeCallback=a;else throw Error("Provided callback for onafterchange was not a function");
return this},oncomplete:function(a){if("function"===typeof a)this._introCompleteCallback=a;else throw Error("Provided callback for oncomplete was not a function.");return this},onexit:function(a){if("function"===typeof a)this._introExitCallback=a;else throw Error("Provided callback for onexit was not a function.");return this}};return q.introJs=v});

/*!!
 *  Canvas 2 Svg v1.0.6
 *  A low level canvas to SVG converter. Uses a mock canvas context to build an SVG document.
 *
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Author:
 *  Kerry Liu
 *
 *  Copyright (c) 2014 Gliffy Inc.
 */

;(function() {
    "use strict";

    var STYLES, ctx, CanvasGradient, CanvasPattern, namedEntities;

    //helper function to format a string
    function format(str, args) {
        var keys = Object.keys(args), i;
        for (i=0; i<keys.length; i++) {
            str = str.replace(new RegExp("\\{" + keys[i] + "\\}", "gi"), args[keys[i]]);
        }
        return str;
    }

    //helper function that generates a random string
    function randomString(holder) {
        var chars, randomstring, i;
        if (!holder) {
            throw new Error("cannot create a random attribute name for an undefined object");
        }
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        randomstring = "";
        do {
            randomstring = "";
            for (i = 0; i < 12; i++) {
                randomstring += chars[Math.floor(Math.random() * chars.length)];
            }
        } while (holder[randomstring]);
        return randomstring;
    }

    //helper function to map named to numbered entities
    function createNamedToNumberedLookup(items, radix) {
        var i, entity, lookup = {}, base10, base16;
        items = items.split(',');
        radix = radix || 10;
        // Map from named to numbered entities.
        for (i = 0; i < items.length; i += 2) {
            entity = '&' + items[i + 1] + ';';
            base10 = parseInt(items[i], radix);
            lookup[entity] = '&#'+base10+';';
        }
        //FF and IE need to create a regex from hex values ie &nbsp; == \xa0
        lookup["\\xa0"] = '&#160;';
        return lookup;
    }

    //helper function to map canvas-textAlign to svg-textAnchor
    function getTextAnchor(textAlign) {
        //TODO: support rtl languages
        var mapping = {"left":"start", "right":"end", "center":"middle", "start":"start", "end":"end"};
        return mapping[textAlign] || mapping.start;
    }

    //helper function to map canvas-textBaseline to svg-dominantBaseline
    function getDominantBaseline(textBaseline) {
        //INFO: not supported in all browsers
        var mapping = {"alphabetic": "alphabetic", "hanging": "hanging", "top":"text-before-edge", "bottom":"text-after-edge", "middle":"central"};
        return mapping[textBaseline] || mapping.alphabetic;
    }

    // Unpack entities lookup where the numbers are in radix 32 to reduce the size
    // entity mapping courtesy of tinymce
    namedEntities = createNamedToNumberedLookup(
        '50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,' +
            '5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,' +
            '5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,' +
            '5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,' +
            '68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,' +
            '6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,' +
            '6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,' +
            '75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,' +
            '7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,' +
            '7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,' +
            'sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,' +
            'st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,' +
            't9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,' +
            'tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,' +
            'u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,' +
            '81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,' +
            '8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,' +
            '8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,' +
            '8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,' +
            '8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,' +
            'nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,' +
            'rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,' +
            'Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,' +
            '80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,' +
            '811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro', 32);


    //Some basic mappings for attributes and default values.
    STYLES = {
        "strokeStyle":{
            svgAttr : "stroke", //corresponding svg attribute
            canvas : "#000000", //canvas default
            svg : "none",       //svg default
            apply : "stroke"    //apply on stroke() or fill()
        },
        "fillStyle":{
            svgAttr : "fill",
            canvas : "#000000",
            svg : null, //svg default is black, but we need to special case this to handle canvas stroke without fill
            apply : "fill"
        },
        "lineCap":{
            svgAttr : "stroke-linecap",
            canvas : "butt",
            svg : "butt",
            apply : "stroke"
        },
        "lineJoin":{
            svgAttr : "stroke-linejoin",
            canvas : "miter",
            svg : "miter",
            apply : "stroke"
        },
        "miterLimit":{
            svgAttr : "stroke-miterlimit",
            canvas : 10,
            svg : 4,
            apply : "stroke"
        },
        "lineWidth":{
            svgAttr : "stroke-width",
            canvas : 1,
            svg : 1,
            apply : "stroke"
        },
        "globalAlpha": {
            svgAttr : "opacity",
            canvas : 1,
            svg : 1,
            apply : "fill stroke"
        },
        "font":{
            //font converts to multiple svg attributes, there is custom logic for this
            canvas : "10px sans-serif"
        },
        "shadowColor":{
            canvas : "#000000"
        },
        "shadowOffsetX":{
            canvas : 0
        },
        "shadowOffsetY":{
            canvas : 0
        },
        "shadowBlur":{
            canvas : 0
        },
        "textAlign":{
            canvas : "start"
        },
        "textBaseline":{
            canvas : "alphabetic"
        }
    };

    /**
     *
     * @param gradientNode - reference to the gradient
     * @constructor
     */
    CanvasGradient = function(gradientNode) {
        this.__root = gradientNode;
    };

    /**
     * Adds a color stop to the gradient root
     */
    CanvasGradient.prototype.addColorStop = function(offset, color) {
        var stop = document.createElementNS("http://www.w3.org/2000/svg", "stop"), regex, matches;
        stop.setAttribute("offset", offset);
        if(color.indexOf("rgba") !== -1) {
            //separate alpha value, since webkit can't handle it
            regex = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi;
            matches = regex.exec(color);
            stop.setAttribute("stop-color", format("rgb({r},{g},{b})", {r:matches[1], g:matches[2], b:matches[3]}));
            stop.setAttribute("stop-opacity", matches[4]);
        } else {
            stop.setAttribute("stop-color", color);
        }
        this.__root.appendChild(stop);
    };

    CanvasPattern = function(pattern, ctx) {
        this.__root = pattern;
        this.__ctx = ctx;
    };

    /**
     * The mock canvas context
     * @param o - options include:
     * width - width of your canvas (defaults to 500)
     * height - height of your canvas (defaults to 500)
     * enableMirroring - enables canvas mirroring (get image data) (defaults to false)
     */
    ctx = function(o) {

        var defaultOptions = { width:500, height:500, enableMirroring : false }, options;

        //keep support for this way of calling C2S: new C2S(width,height)
        if(arguments.length > 1) {
            options = defaultOptions;
            options.width = arguments[0];
            options.height = arguments[1];
        } else if( !o ) {
            options = defaultOptions;
        } else {
            options = o;
        }

        if(!(this instanceof ctx)) {
            //did someone call this without new?
            return new ctx(options);
        }

        //setup options
        this.width = options.width || defaultOptions.width;
        this.height = options.height || defaultOptions.height;
        this.enableMirroring = options.enableMirroring !== undefined ? options.enableMirroring : defaultOptions.enableMirroring;

        this.canvas = this;   ///point back to this instance!
        this.__canvas = document.createElement("canvas");
        this.__ctx = this.__canvas.getContext("2d");

        this.__setDefaultStyles();
        this.__stack = [this.__getStyleState()];
        this.__groupStack = [];

        //the root svg element
        this.__root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.__root.setAttribute("version", 1.1);
        this.__root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.__root.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        this.__root.setAttribute("width", this.width);
        this.__root.setAttribute("height", this.height);

        //make sure we don't generate the same ids in defs
        this.__ids = {};

        //defs tag
        this.__defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
        this.__root.appendChild(this.__defs);

        //also add a group child. the svg element can't use the transform attribute
        this.__currentElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
        this.__root.appendChild(this.__currentElement);

    };

    /**
     * Creates the specified svg element
     * @private
     */
    ctx.prototype.__createElement = function(elementName, properties, resetFill) {
        var element = document.createElementNS("http://www.w3.org/2000/svg", elementName),
            keys = Object.keys(properties), i, key;
        if(resetFill) {
            //if fill or stroke is not specified, the svg element should not display. By default SVG's fill is black.
            element.setAttribute("fill", "none");
            element.setAttribute("stroke", "none");
        }
        for(i=0; i<keys.length; i++) {
            key = keys[i];
            element.setAttribute(key, properties[key]);
        }
        return element;
    };

    /**
     * Applies default canvas styles to the context
     * @private
     */
    ctx.prototype.__setDefaultStyles = function() {
        //default 2d canvas context properties see:http://www.w3.org/TR/2dcontext/
        var keys = Object.keys(STYLES), i, key;
        for(i=0; i<keys.length; i++) {
            key = keys[i];
            this[key] = STYLES[key].canvas;
        }
    };

    /**
     * Applies styles on restore
     * @param styleState
     * @private
     */
    ctx.prototype.__applyStyleState = function(styleState) {
        var keys = Object.keys(styleState), i, key;
        for(i=0; i<keys.length; i++) {
            key = keys[i];
            this[key] = styleState[key];
        }
    };

    /**
     * Gets the current style state
     * @return {Object}
     * @private
     */
    ctx.prototype.__getStyleState = function() {
        var i, styleState = {}, keys = Object.keys(STYLES), key;
        for(i=0; i<keys.length; i++) {
            key = keys[i];
            styleState[key] = this[key];
        }
        return styleState;
    };

    /**
     * Apples the current styles to the current SVG element. On "ctx.fill" or "ctx.stroke"
     * @param type
     * @private
     */
    ctx.prototype.__applyStyleToCurrentElement = function(type) {
        var keys = Object.keys(STYLES), i, style, value, id, regex, matches;
        for(i=0; i<keys.length; i++) {
            style = STYLES[keys[i]];
            value = this[keys[i]];
            if(style.apply) {
                //is this a gradient or pattern?
                if(style.apply.indexOf("fill")!==-1 && value instanceof CanvasPattern) {
                    //pattern
                    if(value.__ctx) {
                        //copy over defs
                        while(value.__ctx.__defs.childNodes.length) {
                            id = value.__ctx.__defs.childNodes[0].getAttribute("id");
                            this.__ids[id] = id;
                            this.__defs.appendChild(value.__ctx.__defs.childNodes[0]);
                        }
                    }
                    this.__currentElement.setAttribute("fill", format("url(#{id})", {id:value.__root.getAttribute("id")}));
                }
                else if(style.apply.indexOf("fill")!==-1 && value instanceof CanvasGradient) {
                    //gradient
                    this.__currentElement.setAttribute("fill", format("url(#{id})", {id:value.__root.getAttribute("id")}));
                } else if(style.apply.indexOf(type)!==-1 && style.svg !== value) {
                    if((style.svgAttr === "stroke" || style.svgAttr === "fill") && value.indexOf("rgba") !== -1) {
                        //separate alpha value, since illustrator can't handle it
                        regex = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?\.?\d*)\s*\)/gi;
                        matches = regex.exec(value);
                        this.__currentElement.setAttribute(style.svgAttr, format("rgb({r},{g},{b})", {r:matches[1], g:matches[2], b:matches[3]}));
                        this.__currentElement.setAttribute(style.svgAttr+"-opacity", matches[4]);
                    } else {
                        //otherwise only update attribute if right type, and not svg default
                        this.__currentElement.setAttribute(style.svgAttr, value);
                    }
                }
            }
        }

    };

    /**
     * Will return the closest group or svg node. May return the current element.
     * @private
     */
    ctx.prototype.__closestGroupOrSvg = function(node) {
        node = node || this.__currentElement;
        if(node.nodeName === "g" || node.nodeName === "svg") {
            return node;
        } else {
            return this.__closestGroupOrSvg(node.parentNode);
        }
    };

    /**
     * Returns the serialized value of the svg so far
     * @param fixNamedEntities - Standalone SVG doesn't support named entities, which document.createTextNode encodes.
     *                           If true, we attempt to find all named entities and encode it as a numeric entity.
     * @return serialized svg
     */
    ctx.prototype.getSerializedSvg = function(fixNamedEntities) {
        var serialized = new XMLSerializer().serializeToString(this.__root),
            keys, i, key, value, regexp, xmlns;

        //IE search for a duplicate xmnls because they didn't implement setAttributeNS correctly
        xmlns = /xmlns="http:\/\/www\.w3\.org\/2000\/svg".+xmlns="http:\/\/www\.w3\.org\/2000\/svg/gi;
        if(xmlns.test(serialized)) {
            serialized = serialized.replace('xmlns="http://www.w3.org/2000/svg','xmlns:xlink="http://www.w3.org/1999/xlink');
        }

        if(fixNamedEntities) {
            keys = Object.keys(namedEntities);
            //loop over each named entity and replace with the proper equivalent.
            for(i=0; i<keys.length; i++) {
                key = keys[i];
                value = namedEntities[key];
                regexp = new RegExp(key, "gi");
                if(regexp.test(serialized)) {
                    serialized = serialized.replace(regexp, value);
                }
            }
        }

        return serialized;
    };


    /**
     * Returns the root svg
     * @return
     */
    ctx.prototype.getSvg = function() {
        return this.__root;
    };
    /**
     * Will generate a group tag.
     */
    ctx.prototype.save = function() {
        var group = document.createElementNS("http://www.w3.org/2000/svg", "g"), parent = this.__closestGroupOrSvg();
        this.__groupStack.push(parent);
        parent.appendChild(group);
        this.__currentElement = group;
        this.__stack.push(this.__getStyleState());
    };
    /**
     * Sets current element to parent, or just root if already root
     */
    ctx.prototype.restore = function(){
        this.__currentElement = this.__groupStack.pop();
        var state = this.__stack.pop();
        this.__applyStyleState(state);

    };

    /**
     * Helper method to add transform
     * @private
     */
    ctx.prototype.__addTransform = function(t) {
        var transform = this.__currentElement.getAttribute("transform");
        if(transform) {
            transform += " ";
        } else {
            transform = "";
        }
        transform += t;
        this.__currentElement.setAttribute("transform", transform);
    };

    /**
     *  scales the current element
     */
    ctx.prototype.scale = function(x, y) {
        if(y === undefined) {
            y = x;
        }
        this.__addTransform(format("scale({x},{y})", {x:x, y:y}));
    };

    /**
     * rotates the current element
     */
    ctx.prototype.rotate = function(angle){
        var degrees = (angle * 180 / Math.PI);
        this.__addTransform(format("rotate({angle},{cx},{cy})", {angle:degrees, cx:0, cy:0}));
    };

    /**
     * translates the current element
     */
    ctx.prototype.translate = function(x, y){
        this.__addTransform(format("translate({x},{y})", {x:x,y:y}));
    };

    /**
     * applies a transform to the current element
     */
    ctx.prototype.transform = function(a, b, c, d, e, f){
        this.__addTransform(format("matrix({a},{b},{c},{d},{e},{f})", {a:a, b:b, c:c, d:d, e:e, f:f}));
    };

    /**
     * Create a new Path Element
     */
    ctx.prototype.beginPath = function(){
        var path, parent;
        path = this.__createElement("path", {}, true);
        parent = this.__closestGroupOrSvg();
        parent.appendChild(path);
        this.__currentElement = path;
    };

    /**
     * Helper function to add path command
     * @private
     */
    ctx.prototype.__addPathCommand = function(command){
        if(this.__currentElement.nodeName === "path") {
            var d = this.__currentElement.getAttribute("d");
            if(d) {
                d += " ";
            } else {
                d = "";
            }
            d += command;
            this.__currentElement.setAttribute("d", d);
        } else {
            throw new Error("Attempted to add path command to node " + this.__currentElement.nodeName);
        }
    };

    /**
     * Adds the move command to the current path element,
     * if the currentPathElement is not empty create a new path element
     */
    ctx.prototype.moveTo = function(x,y){
        if(this.__currentElement.nodeName !== "path") {
            this.beginPath();
        }
        this.__addPathCommand(format("M {x} {y}", {x:x, y:y}));
    };

    /**
     * Closes the current path
     */
    ctx.prototype.closePath = function(){
        this.__addPathCommand("Z");
    };

    /**
     * Adds a line to command
     */
    ctx.prototype.lineTo = function(x, y){
        this.__addPathCommand(format("L {x} {y}", {x:x, y:y}));
    };

    /**
     * Add a bezier command
     */
    ctx.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.__addPathCommand(format("C {cp1x} {cp1y} {cp2x} {cp2y} {x} {y}",
            {cp1x:cp1x, cp1y:cp1y, cp2x:cp2x, cp2y:cp2y, x:x, y:y}));
    };

    /**
     * Adds a quadratic curve to command
     */
    ctx.prototype.quadraticCurveTo = function(cpx, cpy, x, y){
        this.__addPathCommand(format("Q {cpx} {cpy} {x} {y}", {cpx:cpx, cpy:cpy, x:x, y:y}));
    };

    /**
     * Sets the stroke property on the current element
     */
    ctx.prototype.stroke = function(){
        this.__applyStyleToCurrentElement("stroke");
    };

    /**
     * Sets fill properties on the current element
     */
    ctx.prototype.fill = function(){
        this.__applyStyleToCurrentElement("fill");
    };

    /**
     *  Adds a rectangle to the path.
     */
    ctx.prototype.rect = function(x, y, width, height){
        if(this.__currentElement.nodeName !== "path") {
            this.beginPath();
        }
        this.moveTo(x, y);
        this.lineTo(x+width, y);
        this.lineTo(x+width, y+height);
        this.lineTo(x, y+height);
        this.lineTo(x, y);
        this.closePath();
    };


    /**
     * adds a rectangle element
     */
    ctx.prototype.fillRect = function(x, y, width, height){
        var rect, parent;
        rect = this.__createElement("rect", {
            x : x,
            y : y,
            width : width,
            height : height
        }, true);
        parent = this.__closestGroupOrSvg();
        parent.appendChild(rect);
        this.__currentElement = rect;
        this.__applyStyleToCurrentElement("fill");
    };

    /**
     * Draws a rectangle with no fill
     * @param x
     * @param y
     * @param width
     * @param height
     */
    ctx.prototype.strokeRect = function(x, y, width, height){
        var rect, parent;
        rect = this.__createElement("rect", {
            x : x,
            y : y,
            width : width,
            height : height
        }, true);
        parent = this.__closestGroupOrSvg();
        parent.appendChild(rect);
        this.__currentElement = rect;
        this.__applyStyleToCurrentElement("stroke");
    };


    /**
     * "Clears" a canvas by just drawing a white rectangle in the current group.
     */
    ctx.prototype.clearRect = function(x, y, width, height) {
        var rect, parent = this.__closestGroupOrSvg();
        rect = this.__createElement("rect", {
            x : x,
            y : y,
            width : width,
            height : height,
            fill : "#FFFFFF"
        }, true);
        parent.appendChild(rect);
    };

    /**
     * Adds a linear gradient to a defs tag.
     * Returns a canvas gradient object that has a reference to it's parent def
     */
    ctx.prototype.createLinearGradient = function(x1, y1, x2, y2){
        var grad = this.__createElement("linearGradient", {
            id : randomString(this.__ids),
            x1 : x1+"px",
            x2 : x2+"px",
            y1 : y1+"px",
            y2 : y2+"px",
            "gradientUnits" : "userSpaceOnUse"
        }, false);
        this.__defs.appendChild(grad);
        return new CanvasGradient(grad);
    };

    /**
     * Adds a radial gradient to a defs tag.
     * Returns a canvas gradient object that has a reference to it's parent def
     */
    ctx.prototype.createRadialGradient = function(x0, y0, r0, x1, y1, r1){
        var grad = this.__createElement("radialGradient", {
            id : randomString(this.__ids),
            cx : x1+"px",
            cy : y1+"px",
            r  : r1+"px",
            fx : x0+"px",
            fy : y0+"px",
            "gradientUnits" : "userSpaceOnUse"
        }, false);
        this.__defs.appendChild(grad);
        return new CanvasGradient(grad);

    };

    /**
     * Parses the font string and returns svg mapping
     * @private
     */
    ctx.prototype.__parseFont = function() {
        var font = this.font, parts, token, index = 0, data = {
            style : "normal",
            size : "10px",
            family : "sans-serif",
            weight: "normal",
            decoration : "none", //underline | none
            href : null
        };

        //canvas doesn't support underline natively, but we can pass this attribute
        if(this.__fontUnderline === "underline") {
            data.decoration = "underline";
        }

        //canvas also doesn't support linking, but we can pass this as well
        if(this.__fontHref) {
            data.href = this.__fontHref;
        }

        parts = font.split(" ");
        token = parts[index];

        //text decoration
        while(/italic|bold|normal/.test(token)) {
            if(token === "bold") {
                data.weight = token; //[normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | inherit]
            } else {
                data.style = token; //[normal / italic /oblique /inherit]
            }
            //advance to next token
            index++;
            token = parts[index];
        }

        //next token should be font size
        if(/em|px|pt|%/.test(token)) {
            data.size = token;
            index++;
        }

        //font family?
        parts.splice(0, index);
        data.family = parts.join(" ");

        return data;
    };

    /**
     * Helper to link text fragments
     * @param font
     * @param element
     * @return {*}
     * @private
     */
    ctx.prototype.__wrapTextLink = function(font, element) {
        if(font.href) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "a");
            a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", font.href);
            a.appendChild(element);
            return a;
        }
        return element;
    };

    /**
     * Fills or strokes text
     * @param text
     * @param x
     * @param y
     * @param action - stroke or fill
     * @private
     */
    ctx.prototype.__applyText = function(text, x, y, action) {
        var font = this.__parseFont(),
            parent = this.__closestGroupOrSvg(),
            textElement = this.__createElement("text", {
                "font-family" : font.family,
                "font-size" : font.size,
                "font-style" : font.style,
                "font-weight" : font.weight,
                "text-decoration" : font.decoration,
                "x" : x,
                "y" : y,
                "text-anchor": getTextAnchor(this.textAlign),
                "dominant-baseline": getDominantBaseline(this.textBaseline)
            }, true);

        textElement.appendChild(document.createTextNode(text));
        this.__currentElement = textElement;
        this.__applyStyleToCurrentElement(action);
        parent.appendChild(this.__wrapTextLink(font,textElement));
    };

    /**
     * Creates a text element
     * @param text
     * @param x
     * @param y
     */
    ctx.prototype.fillText = function(text, x, y){
        this.__applyText(text, x, y, "fill");
    };

    /**
     * Strokes text
     * @param text
     * @param x
     * @param y
     */
    ctx.prototype.strokeText = function(text, x, y){
        this.__applyText(text, x, y, "stroke");
    };

    /**
     * No need to implement this for svg.
     * @param text
     * @return {TextMetrics}
     */
    ctx.prototype.measureText = function(text){
        this.__ctx.font = this.font;
        return this.__ctx.measureText(text);
    };

    /**
     *  Arc command!
     */
    ctx.prototype.arc = function(x, y, radius, startAngle, endAngle, counterClockwise) {
        startAngle = startAngle % (2*Math.PI);
        endAngle = endAngle % (2*Math.PI);
        if(startAngle === endAngle) {
            //circle time! subtract some of the angle so svg is happy (svg elliptical arc can't draw a full circle)
            endAngle = ((endAngle + (2*Math.PI)) - 0.001 * (counterClockwise ? -1 : 1)) % (2*Math.PI);
        }
        var endX = x+radius*Math.cos(endAngle),
            endY = y+radius*Math.sin(endAngle),
            startX = x+radius*Math.cos(startAngle),
            startY = y+radius*Math.sin(startAngle),
            sweepFlag = counterClockwise ? 0 : 1,
            largeArcFlag = 0,
            diff = endAngle - startAngle;

        // https://github.com/gliffy/canvas2svg/issues/4
        if(diff < 0) {
            diff += 2*Math.PI;
        }

        if(counterClockwise) {
            largeArcFlag = diff > Math.PI ? 0 : 1;
        } else {
            largeArcFlag = diff > Math.PI ? 1 : 0;
        }

        this.moveTo(startX, startY);
        this.__addPathCommand(format("A {rx} {ry} {xAxisRotation} {largeArcFlag} {sweepFlag} {endX} {endY}",
            {rx:radius, ry:radius, xAxisRotation:0, largeArcFlag:largeArcFlag, sweepFlag:sweepFlag, endX:endX, endY:endY}));

    };

    /**
     * Generates a ClipPath from the clip command.
     */
    ctx.prototype.clip = function(){
        var group = this.__closestGroupOrSvg(),
            clipPath = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"),
            id =  randomString(this.__ids),
            newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

        group.removeChild(this.__currentElement);
        clipPath.setAttribute("id", id);
        clipPath.appendChild(this.__currentElement);

        this.__defs.appendChild(clipPath);

        //set the clip path to this group
        group.setAttribute("clip-path", format("url(#{id})", {id:id}));

        //clip paths can be scaled and transformed, we need to add another wrapper group to avoid later transformations
        // to this path
        group.appendChild(newGroup);

        this.__currentElement = newGroup;

    };

    /**
     * Draws a canvas, image or mock context to this canvas.
     * Note that all svg dom manipulation uses node.childNodes rather than node.children for IE support.
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawimage
     */
    ctx.prototype.drawImage = function(){
        //convert arguments to a real array
        var args = Array.prototype.slice.call(arguments),
            image=args[0],
            dx, dy, dw, dh, sx=0, sy=0, sw, sh, parent, svg, defs, group,
            currentElement, svgImage, canvas, context, id;

        if(args.length === 3) {
            dx = args[1];
            dy = args[2];
            sw = image.width;
            sh = image.height;
            dw = sw;
            dh = sh;
        } else if(args.length === 5) {
            dx = args[1];
            dy = args[2];
            dw = args[3];
            dh = args[4];
            sw = image.width;
            sh = image.height;
        } else if(args.length === 9) {
            sx = args[1];
            sy = args[2];
            sw = args[3];
            sh = args[4];
            dx = args[5];
            dy = args[6];
            dw = args[7];
            dh = args[8];
        } else {
            throw new Error("Inavlid number of arguments passed to drawImage: " + arguments.length);
        }

        parent = this.__closestGroupOrSvg();
        currentElement = this.__currentElement;

        if(image instanceof ctx) {
            //canvas2svg mock canvas context. In the future we may want to clone nodes instead.
            //also I'm currently ignoring dw, dh, sw, sh, sx, sy for a mock context.
            svg = image.getSvg();
            defs = svg.childNodes[0];
            while(defs.childNodes.length) {
                id = defs.childNodes[0].getAttribute("id");
                this.__ids[id] = id;
                this.__defs.appendChild(defs.childNodes[0]);
            }
            group = svg.childNodes[1];
            parent.appendChild(group);
            this.__currentElement = group;
            this.translate(dx, dy);
            this.__currentElement = currentElement;
        } else if(image.nodeName === "CANVAS" || image.nodeName === "IMG") {
            //canvas or image
            svgImage = document.createElementNS("http://www.w3.org/2000/svg", "image");
            svgImage.setAttribute("width", dw);
            svgImage.setAttribute("height", dh);
            svgImage.setAttribute("preserveAspectRatio", "none");

            if(sx || sy || sw !== image.width || sh !== image.height) {
                //crop the image using a temporary canvas
                canvas = document.createElement("canvas");
                canvas.width = dw;
                canvas.height = dh;
                context = canvas.getContext("2d");
                context.drawImage(image, sx, sy, sw, sh, 0, 0, dw, dh);
                image = canvas;
            }

            svgImage.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",
                image.nodeName === "CANVAS" ? image.toDataURL() : image.getAttribute("src"));
            parent.appendChild(svgImage);
            this.__currentElement = svgImage;
            this.translate(dx, dy);
            this.__currentElement = currentElement;
        }
    };

    /**
     * Generates a pattern tag
     */
    ctx.prototype.createPattern = function(image, repetition){
        var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern"), id = randomString(this.__ids),
            img;
        pattern.setAttribute("id", id);
        pattern.setAttribute("width", image.width);
        pattern.setAttribute("height", image.height);
        if(image.nodeName === "CANVAS" || image.nodeName === "IMG") {
            img = document.createElementNS("http://www.w3.org/2000/svg", "image");
            img.setAttribute("width", image.width);
            img.setAttribute("height", image.height);
            img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href",
                image.nodeName === "CANVAS" ? image.toDataURL() : image.getAttribute("src"));
            pattern.appendChild(img);
            this.__defs.appendChild(pattern);
        } else if(image instanceof ctx) {
            pattern.appendChild(image.__root.childNodes[1]);
            this.__defs.appendChild(pattern);
        }
        return new CanvasPattern(pattern, this);
    };

    /**
     * Not yet implemented
     */
    ctx.prototype.drawFocusRing = function(){};
    ctx.prototype.createImageData = function(){};
    ctx.prototype.getImageData = function(){};
    ctx.prototype.putImageData = function(){};
    ctx.prototype.globalCompositeOperation = function(){};
    ctx.prototype.arcTo = function(){};
    ctx.prototype.setTransform = function(){};

    //add options for alternative namespace
    window.C2S = ctx;

}());

/*!
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
function RGBColor(color_string){this.ok=!1,"#"==color_string.charAt(0)&&(color_string=color_string.substr(1,6)),color_string=color_string.replace(/ /g,""),color_string=color_string.toLowerCase();var simple_colors={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var key in simple_colors)color_string==key&&(color_string=simple_colors[key]);for(var color_defs=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(bits){return[parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(bits){return[parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(bits){return[parseInt(bits[1]+bits[1],16),parseInt(bits[2]+bits[2],16),parseInt(bits[3]+bits[3],16)]}}],i=0;i<color_defs.length;i++){var re=color_defs[i].re,processor=color_defs[i].process,bits=re.exec(color_string);bits&&(channels=processor(bits),this.r=channels[0],this.g=channels[1],this.b=channels[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var r=this.r.toString(16),g=this.g.toString(16),b=this.b.toString(16);return 1==r.length&&(r="0"+r),1==g.length&&(g="0"+g),1==b.length&&(b="0"+b),"#"+r+g+b},this.getHelpXML=function(){for(var examples=new Array,i=0;i<color_defs.length;i++)for(var example=color_defs[i].example,j=0;j<example.length;j++)examples[examples.length]=example[j];for(var sc in simple_colors)examples[examples.length]=sc;var xml=document.createElement("ul");xml.setAttribute("id","rgbcolor-examples");for(var i=0;i<examples.length;i++)try{var list_item=document.createElement("li"),list_color=new RGBColor(examples[i]),example_div=document.createElement("div");example_div.style.cssText="margin: 3px; border: 1px solid black; background:"+list_color.toHex()+"; color:"+list_color.toHex(),example_div.appendChild(document.createTextNode("test"));var list_item_value=document.createTextNode(" "+examples[i]+" -> "+list_color.toRGB()+" -> "+list_color.toHex());list_item.appendChild(example_div),list_item.appendChild(list_item_value),xml.appendChild(list_item)}catch(e){}return xml}}function stackBlurImage(imageID,canvasID,radius,blurAlphaChannel){var img=document.getElementById(imageID),w=img.naturalWidth,h=img.naturalHeight,canvas=document.getElementById(canvasID);canvas.style.width=w+"px",canvas.style.height=h+"px",canvas.width=w,canvas.height=h;var context=canvas.getContext("2d");context.clearRect(0,0,w,h),context.drawImage(img,0,0),isNaN(radius)||1>radius||(blurAlphaChannel?stackBlurCanvasRGBA(canvasID,0,0,w,h,radius):stackBlurCanvasRGB(canvasID,0,0,w,h,radius))}function stackBlurCanvasRGBA(id,top_x,top_y,width,height,radius){if(!(isNaN(radius)||1>radius)){radius|=0;var imageData,canvas=document.getElementById(id),context=canvas.getContext("2d");try{try{imageData=context.getImageData(top_x,top_y,width,height)}catch(e){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),imageData=context.getImageData(top_x,top_y,width,height)}catch(e){throw alert("Cannot access local image"),new Error("unable to access local image data: "+e)}}}catch(e){throw alert("Cannot access image"),new Error("unable to access image data: "+e)}var x,y,i,p,yp,yi,yw,r_sum,g_sum,b_sum,a_sum,r_out_sum,g_out_sum,b_out_sum,a_out_sum,r_in_sum,g_in_sum,b_in_sum,a_in_sum,pr,pg,pb,pa,rbs,pixels=imageData.data,div=radius+radius+1,widthMinus1=width-1,heightMinus1=height-1,radiusPlus1=radius+1,sumFactor=radiusPlus1*(radiusPlus1+1)/2,stackStart=new BlurStack,stack=stackStart;for(i=1;div>i;i++)if(stack=stack.next=new BlurStack,i==radiusPlus1)var stackEnd=stack;stack.next=stackStart;var stackIn=null,stackOut=null;yw=yi=0;var mul_sum=mul_table[radius],shg_sum=shg_table[radius];for(y=0;height>y;y++){for(r_in_sum=g_in_sum=b_in_sum=a_in_sum=r_sum=g_sum=b_sum=a_sum=0,r_out_sum=radiusPlus1*(pr=pixels[yi]),g_out_sum=radiusPlus1*(pg=pixels[yi+1]),b_out_sum=radiusPlus1*(pb=pixels[yi+2]),a_out_sum=radiusPlus1*(pa=pixels[yi+3]),r_sum+=sumFactor*pr,g_sum+=sumFactor*pg,b_sum+=sumFactor*pb,a_sum+=sumFactor*pa,stack=stackStart,i=0;radiusPlus1>i;i++)stack.r=pr,stack.g=pg,stack.b=pb,stack.a=pa,stack=stack.next;for(i=1;radiusPlus1>i;i++)p=yi+((i>widthMinus1?widthMinus1:i)<<2),r_sum+=(stack.r=pr=pixels[p])*(rbs=radiusPlus1-i),g_sum+=(stack.g=pg=pixels[p+1])*rbs,b_sum+=(stack.b=pb=pixels[p+2])*rbs,a_sum+=(stack.a=pa=pixels[p+3])*rbs,r_in_sum+=pr,g_in_sum+=pg,b_in_sum+=pb,a_in_sum+=pa,stack=stack.next;for(stackIn=stackStart,stackOut=stackEnd,x=0;width>x;x++)pixels[yi+3]=pa=a_sum*mul_sum>>shg_sum,0!=pa?(pa=255/pa,pixels[yi]=(r_sum*mul_sum>>shg_sum)*pa,pixels[yi+1]=(g_sum*mul_sum>>shg_sum)*pa,pixels[yi+2]=(b_sum*mul_sum>>shg_sum)*pa):pixels[yi]=pixels[yi+1]=pixels[yi+2]=0,r_sum-=r_out_sum,g_sum-=g_out_sum,b_sum-=b_out_sum,a_sum-=a_out_sum,r_out_sum-=stackIn.r,g_out_sum-=stackIn.g,b_out_sum-=stackIn.b,a_out_sum-=stackIn.a,p=yw+((p=x+radius+1)<widthMinus1?p:widthMinus1)<<2,r_in_sum+=stackIn.r=pixels[p],g_in_sum+=stackIn.g=pixels[p+1],b_in_sum+=stackIn.b=pixels[p+2],a_in_sum+=stackIn.a=pixels[p+3],r_sum+=r_in_sum,g_sum+=g_in_sum,b_sum+=b_in_sum,a_sum+=a_in_sum,stackIn=stackIn.next,r_out_sum+=pr=stackOut.r,g_out_sum+=pg=stackOut.g,b_out_sum+=pb=stackOut.b,a_out_sum+=pa=stackOut.a,r_in_sum-=pr,g_in_sum-=pg,b_in_sum-=pb,a_in_sum-=pa,stackOut=stackOut.next,yi+=4;yw+=width}for(x=0;width>x;x++){for(g_in_sum=b_in_sum=a_in_sum=r_in_sum=g_sum=b_sum=a_sum=r_sum=0,yi=x<<2,r_out_sum=radiusPlus1*(pr=pixels[yi]),g_out_sum=radiusPlus1*(pg=pixels[yi+1]),b_out_sum=radiusPlus1*(pb=pixels[yi+2]),a_out_sum=radiusPlus1*(pa=pixels[yi+3]),r_sum+=sumFactor*pr,g_sum+=sumFactor*pg,b_sum+=sumFactor*pb,a_sum+=sumFactor*pa,stack=stackStart,i=0;radiusPlus1>i;i++)stack.r=pr,stack.g=pg,stack.b=pb,stack.a=pa,stack=stack.next;for(yp=width,i=1;radius>=i;i++)yi=yp+x<<2,r_sum+=(stack.r=pr=pixels[yi])*(rbs=radiusPlus1-i),g_sum+=(stack.g=pg=pixels[yi+1])*rbs,b_sum+=(stack.b=pb=pixels[yi+2])*rbs,a_sum+=(stack.a=pa=pixels[yi+3])*rbs,r_in_sum+=pr,g_in_sum+=pg,b_in_sum+=pb,a_in_sum+=pa,stack=stack.next,heightMinus1>i&&(yp+=width);for(yi=x,stackIn=stackStart,stackOut=stackEnd,y=0;height>y;y++)p=yi<<2,pixels[p+3]=pa=a_sum*mul_sum>>shg_sum,pa>0?(pa=255/pa,pixels[p]=(r_sum*mul_sum>>shg_sum)*pa,pixels[p+1]=(g_sum*mul_sum>>shg_sum)*pa,pixels[p+2]=(b_sum*mul_sum>>shg_sum)*pa):pixels[p]=pixels[p+1]=pixels[p+2]=0,r_sum-=r_out_sum,g_sum-=g_out_sum,b_sum-=b_out_sum,a_sum-=a_out_sum,r_out_sum-=stackIn.r,g_out_sum-=stackIn.g,b_out_sum-=stackIn.b,a_out_sum-=stackIn.a,p=x+((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width<<2,r_sum+=r_in_sum+=stackIn.r=pixels[p],g_sum+=g_in_sum+=stackIn.g=pixels[p+1],b_sum+=b_in_sum+=stackIn.b=pixels[p+2],a_sum+=a_in_sum+=stackIn.a=pixels[p+3],stackIn=stackIn.next,r_out_sum+=pr=stackOut.r,g_out_sum+=pg=stackOut.g,b_out_sum+=pb=stackOut.b,a_out_sum+=pa=stackOut.a,r_in_sum-=pr,g_in_sum-=pg,b_in_sum-=pb,a_in_sum-=pa,stackOut=stackOut.next,yi+=width}context.putImageData(imageData,top_x,top_y)}}function stackBlurCanvasRGB(id,top_x,top_y,width,height,radius){if(!(isNaN(radius)||1>radius)){radius|=0;var imageData,canvas=document.getElementById(id),context=canvas.getContext("2d");try{try{imageData=context.getImageData(top_x,top_y,width,height)}catch(e){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"),imageData=context.getImageData(top_x,top_y,width,height)}catch(e){throw alert("Cannot access local image"),new Error("unable to access local image data: "+e)}}}catch(e){throw alert("Cannot access image"),new Error("unable to access image data: "+e)}var x,y,i,p,yp,yi,yw,r_sum,g_sum,b_sum,r_out_sum,g_out_sum,b_out_sum,r_in_sum,g_in_sum,b_in_sum,pr,pg,pb,rbs,pixels=imageData.data,div=radius+radius+1,widthMinus1=width-1,heightMinus1=height-1,radiusPlus1=radius+1,sumFactor=radiusPlus1*(radiusPlus1+1)/2,stackStart=new BlurStack,stack=stackStart;for(i=1;div>i;i++)if(stack=stack.next=new BlurStack,i==radiusPlus1)var stackEnd=stack;stack.next=stackStart;var stackIn=null,stackOut=null;yw=yi=0;var mul_sum=mul_table[radius],shg_sum=shg_table[radius];for(y=0;height>y;y++){for(r_in_sum=g_in_sum=b_in_sum=r_sum=g_sum=b_sum=0,r_out_sum=radiusPlus1*(pr=pixels[yi]),g_out_sum=radiusPlus1*(pg=pixels[yi+1]),b_out_sum=radiusPlus1*(pb=pixels[yi+2]),r_sum+=sumFactor*pr,g_sum+=sumFactor*pg,b_sum+=sumFactor*pb,stack=stackStart,i=0;radiusPlus1>i;i++)stack.r=pr,stack.g=pg,stack.b=pb,stack=stack.next;for(i=1;radiusPlus1>i;i++)p=yi+((i>widthMinus1?widthMinus1:i)<<2),r_sum+=(stack.r=pr=pixels[p])*(rbs=radiusPlus1-i),g_sum+=(stack.g=pg=pixels[p+1])*rbs,b_sum+=(stack.b=pb=pixels[p+2])*rbs,r_in_sum+=pr,g_in_sum+=pg,b_in_sum+=pb,stack=stack.next;for(stackIn=stackStart,stackOut=stackEnd,x=0;width>x;x++)pixels[yi]=r_sum*mul_sum>>shg_sum,pixels[yi+1]=g_sum*mul_sum>>shg_sum,pixels[yi+2]=b_sum*mul_sum>>shg_sum,r_sum-=r_out_sum,g_sum-=g_out_sum,b_sum-=b_out_sum,r_out_sum-=stackIn.r,g_out_sum-=stackIn.g,b_out_sum-=stackIn.b,p=yw+((p=x+radius+1)<widthMinus1?p:widthMinus1)<<2,r_in_sum+=stackIn.r=pixels[p],g_in_sum+=stackIn.g=pixels[p+1],b_in_sum+=stackIn.b=pixels[p+2],r_sum+=r_in_sum,g_sum+=g_in_sum,b_sum+=b_in_sum,stackIn=stackIn.next,r_out_sum+=pr=stackOut.r,g_out_sum+=pg=stackOut.g,b_out_sum+=pb=stackOut.b,r_in_sum-=pr,g_in_sum-=pg,b_in_sum-=pb,stackOut=stackOut.next,yi+=4;yw+=width}for(x=0;width>x;x++){for(g_in_sum=b_in_sum=r_in_sum=g_sum=b_sum=r_sum=0,yi=x<<2,r_out_sum=radiusPlus1*(pr=pixels[yi]),g_out_sum=radiusPlus1*(pg=pixels[yi+1]),b_out_sum=radiusPlus1*(pb=pixels[yi+2]),r_sum+=sumFactor*pr,g_sum+=sumFactor*pg,b_sum+=sumFactor*pb,stack=stackStart,i=0;radiusPlus1>i;i++)stack.r=pr,stack.g=pg,stack.b=pb,stack=stack.next;for(yp=width,i=1;radius>=i;i++)yi=yp+x<<2,r_sum+=(stack.r=pr=pixels[yi])*(rbs=radiusPlus1-i),g_sum+=(stack.g=pg=pixels[yi+1])*rbs,b_sum+=(stack.b=pb=pixels[yi+2])*rbs,r_in_sum+=pr,g_in_sum+=pg,b_in_sum+=pb,stack=stack.next,heightMinus1>i&&(yp+=width);for(yi=x,stackIn=stackStart,stackOut=stackEnd,y=0;height>y;y++)p=yi<<2,pixels[p]=r_sum*mul_sum>>shg_sum,pixels[p+1]=g_sum*mul_sum>>shg_sum,pixels[p+2]=b_sum*mul_sum>>shg_sum,r_sum-=r_out_sum,g_sum-=g_out_sum,b_sum-=b_out_sum,r_out_sum-=stackIn.r,g_out_sum-=stackIn.g,b_out_sum-=stackIn.b,p=x+((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width<<2,r_sum+=r_in_sum+=stackIn.r=pixels[p],g_sum+=g_in_sum+=stackIn.g=pixels[p+1],b_sum+=b_in_sum+=stackIn.b=pixels[p+2],stackIn=stackIn.next,r_out_sum+=pr=stackOut.r,g_out_sum+=pg=stackOut.g,b_out_sum+=pb=stackOut.b,r_in_sum-=pr,g_in_sum-=pg,b_in_sum-=pb,stackOut=stackOut.next,yi+=width}context.putImageData(imageData,top_x,top_y)}}function BlurStack(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}/*!

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];/*!
 * canvg.js - Javascript SVG parser and renderer on Canvas
 * MIT Licensed 
 * Gabe Lerner (gabelerner@gmail.com)
 * http://code.google.com/p/canvg/
 *
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 */
!function(){function build(){var svg={};return svg.FRAMERATE=30,svg.MAX_VIRTUAL_PIXELS=3e4,svg.init=function(ctx){var uniqueId=0;svg.UniqueId=function(){return uniqueId++,"canvg"+uniqueId},svg.Definitions={},svg.Styles={},svg.Animations=[],svg.Images=[],svg.ctx=ctx,svg.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(width,height){this.viewPorts.push({width:width,height:height})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(d){return null!=d&&"number"==typeof d?d:"x"==d?this.width():"y"==d?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},svg.init(),svg.ImagesLoaded=function(){for(var i=0;i<svg.Images.length;i++)if(!svg.Images[i].loaded)return!1;return!0},svg.trim=function(s){return s.replace(/^\s+|\s+$/g,"")},svg.compressSpaces=function(s){return s.replace(/[\s\r\t\n]+/gm," ")},svg.ajax=function(url){var AJAX;return AJAX=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),AJAX?(AJAX.open("GET",url,!1),AJAX.send(null),AJAX.responseText):null},svg.parseXml=function(xml){if(window.DOMParser){var parser=new DOMParser;return parser.parseFromString(xml,"text/xml")}xml=xml.replace(/<!DOCTYPE svg[^>]*>/,"");var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");return xmlDoc.async="false",xmlDoc.loadXML(xml),xmlDoc},svg.Property=function(name,value){this.name=name,this.value=value},svg.Property.prototype.getValue=function(){return this.value},svg.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},svg.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var n=parseFloat(this.value);return(this.value+"").match(/%$/)&&(n/=100),n},svg.Property.prototype.valueOrDefault=function(def){return this.hasValue()?this.value:def},svg.Property.prototype.numValueOrDefault=function(def){return this.hasValue()?this.numValue():def},svg.Property.prototype.addOpacity=function(opacity){var newValue=this.value;if(null!=opacity&&""!=opacity&&"string"==typeof this.value){var color=new RGBColor(this.value);color.ok&&(newValue="rgba("+color.r+", "+color.g+", "+color.b+", "+opacity+")")}return new svg.Property(this.name,newValue)},svg.Property.prototype.getDefinition=function(){var name=this.value.match(/#([^\)'"]+)/);return name&&(name=name[1]),name||(name=this.value),svg.Definitions[name]},svg.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},svg.Property.prototype.getFillStyleDefinition=function(e,opacityProp){var def=this.getDefinition();if(null!=def&&def.createGradient)return def.createGradient(svg.ctx,e,opacityProp);if(null!=def&&def.createPattern){if(def.getHrefAttribute().hasValue()){var pt=def.attribute("patternTransform");def=def.getHrefAttribute().getDefinition(),pt.hasValue()&&(def.attribute("patternTransform",!0).value=pt.value)}return def.createPattern(svg.ctx,e)}return null},svg.Property.prototype.getDPI=function(){return 96},svg.Property.prototype.getEM=function(viewPort){var em=12,fontSize=new svg.Property("fontSize",svg.Font.Parse(svg.ctx.font).fontSize);return fontSize.hasValue()&&(em=fontSize.toPixels(viewPort)),em},svg.Property.prototype.getUnits=function(){var s=this.value+"";return s.replace(/[0-9\.\-]/g,"")},svg.Property.prototype.toPixels=function(viewPort,processPercent){if(!this.hasValue())return 0;var s=this.value+"";if(s.match(/em$/))return this.numValue()*this.getEM(viewPort);if(s.match(/ex$/))return this.numValue()*this.getEM(viewPort)/2;if(s.match(/px$/))return this.numValue();if(s.match(/pt$/))return this.numValue()*this.getDPI(viewPort)*(1/72);if(s.match(/pc$/))return 15*this.numValue();if(s.match(/cm$/))return this.numValue()*this.getDPI(viewPort)/2.54;if(s.match(/mm$/))return this.numValue()*this.getDPI(viewPort)/25.4;if(s.match(/in$/))return this.numValue()*this.getDPI(viewPort);if(s.match(/%$/))return this.numValue()*svg.ViewPort.ComputeSize(viewPort);var n=this.numValue();return processPercent&&1>n?n*svg.ViewPort.ComputeSize(viewPort):n},svg.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var s=this.value+"";return s.match(/s$/)?1e3*this.numValue():(s.match(/ms$/),this.numValue())},svg.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var s=this.value+"";return s.match(/deg$/)?this.numValue()*(Math.PI/180):s.match(/grad$/)?this.numValue()*(Math.PI/200):s.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)},svg.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(fontStyle,fontVariant,fontWeight,fontSize,fontFamily,inherit){var f=null!=inherit?this.Parse(inherit):this.CreateFont("","","","","",svg.ctx.font);return{fontFamily:fontFamily||f.fontFamily,fontSize:fontSize||f.fontSize,fontStyle:fontStyle||f.fontStyle,fontWeight:fontWeight||f.fontWeight,fontVariant:fontVariant||f.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var that=this;this.Parse=function(s){for(var f={},d=svg.trim(svg.compressSpaces(s||"")).split(" "),set={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},ff="",i=0;i<d.length;i++)set.fontStyle||-1==that.Styles.indexOf(d[i])?set.fontVariant||-1==that.Variants.indexOf(d[i])?set.fontWeight||-1==that.Weights.indexOf(d[i])?set.fontSize?"inherit"!=d[i]&&(ff+=d[i]):("inherit"!=d[i]&&(f.fontSize=d[i].split("/")[0]),set.fontStyle=set.fontVariant=set.fontWeight=set.fontSize=!0):("inherit"!=d[i]&&(f.fontWeight=d[i]),set.fontStyle=set.fontVariant=set.fontWeight=!0):("inherit"!=d[i]&&(f.fontVariant=d[i]),set.fontStyle=set.fontVariant=!0):("inherit"!=d[i]&&(f.fontStyle=d[i]),set.fontStyle=!0);return""!=ff&&(f.fontFamily=ff),f}},svg.ToNumberArray=function(s){for(var a=svg.trim(svg.compressSpaces((s||"").replace(/,/g," "))).split(" "),i=0;i<a.length;i++)a[i]=parseFloat(a[i]);return a},svg.Point=function(x,y){this.x=x,this.y=y},svg.Point.prototype.angleTo=function(p){return Math.atan2(p.y-this.y,p.x-this.x)},svg.Point.prototype.applyTransform=function(v){var xp=this.x*v[0]+this.y*v[2]+v[4],yp=this.x*v[1]+this.y*v[3]+v[5];this.x=xp,this.y=yp},svg.CreatePoint=function(s){var a=svg.ToNumberArray(s);return new svg.Point(a[0],a[1])},svg.CreatePath=function(s){for(var a=svg.ToNumberArray(s),path=[],i=0;i<a.length;i+=2)path.push(new svg.Point(a[i],a[i+1]));return path},svg.BoundingBox=function(x1,y1,x2,y2){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(x,y){null!=x&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=x,this.x2=x),x<this.x1&&(this.x1=x),x>this.x2&&(this.x2=x)),null!=y&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=y,this.y2=y),y<this.y1&&(this.y1=y),y>this.y2&&(this.y2=y))},this.addX=function(x){this.addPoint(x,null)},this.addY=function(y){this.addPoint(null,y)},this.addBoundingBox=function(bb){this.addPoint(bb.x1,bb.y1),this.addPoint(bb.x2,bb.y2)},this.addQuadraticCurve=function(p0x,p0y,p1x,p1y,p2x,p2y){var cp1x=p0x+2/3*(p1x-p0x),cp1y=p0y+2/3*(p1y-p0y),cp2x=cp1x+1/3*(p2x-p0x),cp2y=cp1y+1/3*(p2y-p0y);this.addBezierCurve(p0x,p0y,cp1x,cp2x,cp1y,cp2y,p2x,p2y)},this.addBezierCurve=function(p0x,p0y,p1x,p1y,p2x,p2y,p3x,p3y){var p0=[p0x,p0y],p1=[p1x,p1y],p2=[p2x,p2y],p3=[p3x,p3y];for(this.addPoint(p0[0],p0[1]),this.addPoint(p3[0],p3[1]),i=0;1>=i;i++){var f=function(t){return Math.pow(1-t,3)*p0[i]+3*Math.pow(1-t,2)*t*p1[i]+3*(1-t)*Math.pow(t,2)*p2[i]+Math.pow(t,3)*p3[i]},b=6*p0[i]-12*p1[i]+6*p2[i],a=-3*p0[i]+9*p1[i]-9*p2[i]+3*p3[i],c=3*p1[i]-3*p0[i];if(0!=a){var b2ac=Math.pow(b,2)-4*c*a;if(!(0>b2ac)){var t1=(-b+Math.sqrt(b2ac))/(2*a);t1>0&&1>t1&&(0==i&&this.addX(f(t1)),1==i&&this.addY(f(t1)));var t2=(-b-Math.sqrt(b2ac))/(2*a);t2>0&&1>t2&&(0==i&&this.addX(f(t2)),1==i&&this.addY(f(t2)))}}else{if(0==b)continue;var t=-c/b;t>0&&1>t&&(0==i&&this.addX(f(t)),1==i&&this.addY(f(t)))}}},this.isPointInBox=function(x,y){return this.x1<=x&&x<=this.x2&&this.y1<=y&&y<=this.y2},this.addPoint(x1,y1),this.addPoint(x2,y2)},svg.Transform=function(v){var that=this;this.Type={},this.Type.translate=function(s){this.p=svg.CreatePoint(s),this.apply=function(ctx){ctx.translate(this.p.x||0,this.p.y||0)},this.unapply=function(ctx){ctx.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(p){p.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(s){var a=svg.ToNumberArray(s);this.angle=new svg.Property("angle",a[0]),this.cx=a[1]||0,this.cy=a[2]||0,this.apply=function(ctx){ctx.translate(this.cx,this.cy),ctx.rotate(this.angle.toRadians()),ctx.translate(-this.cx,-this.cy)},this.unapply=function(ctx){ctx.translate(this.cx,this.cy),ctx.rotate(-1*this.angle.toRadians()),ctx.translate(-this.cx,-this.cy)},this.applyToPoint=function(p){var a=this.angle.toRadians();p.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),p.applyTransform([Math.cos(a),Math.sin(a),-Math.sin(a),Math.cos(a),0,0]),p.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(s){this.p=svg.CreatePoint(s),this.apply=function(ctx){ctx.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(ctx){ctx.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(p){p.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(s){this.m=svg.ToNumberArray(s),this.apply=function(ctx){ctx.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.applyToPoint=function(p){p.applyTransform(this.m)}},this.Type.SkewBase=function(s){this.base=that.Type.matrix,this.base(s),this.angle=new svg.Property("angle",s)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(s){this.base=that.Type.SkewBase,this.base(s),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(s){this.base=that.Type.SkewBase,this.base(s),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(ctx){for(var i=0;i<this.transforms.length;i++)this.transforms[i].apply(ctx)},this.unapply=function(ctx){for(var i=this.transforms.length-1;i>=0;i--)this.transforms[i].unapply(ctx)},this.applyToPoint=function(p){for(var i=0;i<this.transforms.length;i++)this.transforms[i].applyToPoint(p)};for(var data=svg.trim(svg.compressSpaces(v)).replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),i=0;i<data.length;i++){var type=svg.trim(data[i].split("(")[0]),s=data[i].split("(")[1].replace(")",""),transform=new this.Type[type](s);transform.type=type,this.transforms.push(transform)}},svg.AspectRatio=function(ctx,aspectRatio,width,desiredWidth,height,desiredHeight,minX,minY,refX,refY){aspectRatio=svg.compressSpaces(aspectRatio),aspectRatio=aspectRatio.replace(/^defer\s/,"");var align=aspectRatio.split(" ")[0]||"xMidYMid",meetOrSlice=aspectRatio.split(" ")[1]||"meet",scaleX=width/desiredWidth,scaleY=height/desiredHeight,scaleMin=Math.min(scaleX,scaleY),scaleMax=Math.max(scaleX,scaleY);"meet"==meetOrSlice&&(desiredWidth*=scaleMin,desiredHeight*=scaleMin),"slice"==meetOrSlice&&(desiredWidth*=scaleMax,desiredHeight*=scaleMax),refX=new svg.Property("refX",refX),refY=new svg.Property("refY",refY),refX.hasValue()&&refY.hasValue()?ctx.translate(-scaleMin*refX.toPixels("x"),-scaleMin*refY.toPixels("y")):(align.match(/^xMid/)&&("meet"==meetOrSlice&&scaleMin==scaleY||"slice"==meetOrSlice&&scaleMax==scaleY)&&ctx.translate(width/2-desiredWidth/2,0),align.match(/YMid$/)&&("meet"==meetOrSlice&&scaleMin==scaleX||"slice"==meetOrSlice&&scaleMax==scaleX)&&ctx.translate(0,height/2-desiredHeight/2),align.match(/^xMax/)&&("meet"==meetOrSlice&&scaleMin==scaleY||"slice"==meetOrSlice&&scaleMax==scaleY)&&ctx.translate(width-desiredWidth,0),align.match(/YMax$/)&&("meet"==meetOrSlice&&scaleMin==scaleX||"slice"==meetOrSlice&&scaleMax==scaleX)&&ctx.translate(0,height-desiredHeight)),"none"==align?ctx.scale(scaleX,scaleY):"meet"==meetOrSlice?ctx.scale(scaleMin,scaleMin):"slice"==meetOrSlice&&ctx.scale(scaleMax,scaleMax),ctx.translate(null==minX?0:-minX,null==minY?0:-minY)},svg.Element={},svg.EmptyProperty=new svg.Property("EMPTY",""),svg.Element.ElementBase=function(node){if(this.attributes={},this.styles={},this.children=[],this.attribute=function(name,createIfNotExists){var a=this.attributes[name];return null!=a?a:(1==createIfNotExists&&(a=new svg.Property(name,""),this.attributes[name]=a),a||svg.EmptyProperty)},this.getHrefAttribute=function(){for(var a in this.attributes)if(a.match(/:href$/))return this.attributes[a];return svg.EmptyProperty},this.style=function(name,createIfNotExists){var s=this.styles[name];if(null!=s)return s;var a=this.attribute(name);if(null!=a&&a.hasValue())return this.styles[name]=a,a;var p=this.parent;if(null!=p){var ps=p.style(name);if(null!=ps&&ps.hasValue())return ps}return 1==createIfNotExists&&(s=new svg.Property(name,""),this.styles[name]=s),s||svg.EmptyProperty},this.render=function(ctx){if("none"!=this.style("display").value&&"hidden"!=this.attribute("visibility").value){if(ctx.save(),this.attribute("mask").hasValue()){var mask=this.attribute("mask").getDefinition();null!=mask&&mask.apply(ctx,this)}else if(this.style("filter").hasValue()){var filter=this.style("filter").getDefinition();null!=filter&&filter.apply(ctx,this)}else this.setContext(ctx),this.renderChildren(ctx),this.clearContext(ctx);ctx.restore()}},this.setContext=function(){},this.clearContext=function(){},this.renderChildren=function(ctx){for(var i=0;i<this.children.length;i++)this.children[i].render(ctx)},this.addChild=function(childNode,create){var child=childNode;create&&(child=svg.CreateElement(childNode)),child.parent=this,this.children.push(child)},null!=node&&1==node.nodeType){for(var i=0;i<node.childNodes.length;i++){var childNode=node.childNodes[i];if(1==childNode.nodeType&&this.addChild(childNode,!0),this.captureTextNodes&&3==childNode.nodeType){var text=childNode.nodeValue||childNode.text||"";""!=svg.trim(svg.compressSpaces(text))&&this.addChild(new svg.Element.tspan(childNode),!1)}}for(var i=0;i<node.attributes.length;i++){var attribute=node.attributes[i];this.attributes[attribute.nodeName]=new svg.Property(attribute.nodeName,attribute.nodeValue)}var styles=svg.Styles[node.nodeName];if(null!=styles)for(var name in styles)this.styles[name]=styles[name];if(this.attribute("class").hasValue())for(var classes=svg.compressSpaces(this.attribute("class").value).split(" "),j=0;j<classes.length;j++){if(styles=svg.Styles["."+classes[j]],null!=styles)for(var name in styles)this.styles[name]=styles[name];if(styles=svg.Styles[node.nodeName+"."+classes[j]],null!=styles)for(var name in styles)this.styles[name]=styles[name]}if(this.attribute("id").hasValue()){var styles=svg.Styles["#"+this.attribute("id").value];if(null!=styles)for(var name in styles)this.styles[name]=styles[name]}if(this.attribute("style").hasValue())for(var styles=this.attribute("style").value.split(";"),i=0;i<styles.length;i++)if(""!=svg.trim(styles[i])){var style=styles[i].split(":"),name=svg.trim(style[0]),value=svg.trim(style[1]);this.styles[name]=new svg.Property(name,value)}this.attribute("id").hasValue()&&null==svg.Definitions[this.attribute("id").value]&&(svg.Definitions[this.attribute("id").value]=this)}},svg.Element.RenderedElementBase=function(node){this.base=svg.Element.ElementBase,this.base(node),this.setContext=function(ctx){if(this.style("fill").isUrlDefinition()){var fs=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity"));null!=fs&&(ctx.fillStyle=fs)}else if(this.style("fill").hasValue()){var fillStyle=this.style("fill");"currentColor"==fillStyle.value&&(fillStyle.value=this.style("color").value),ctx.fillStyle="none"==fillStyle.value?"rgba(0,0,0,0)":fillStyle.value}if(this.style("fill-opacity").hasValue()){var fillStyle=new svg.Property("fill",ctx.fillStyle);fillStyle=fillStyle.addOpacity(this.style("fill-opacity").value),ctx.fillStyle=fillStyle.value}if(this.style("stroke").isUrlDefinition()){var fs=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity"));null!=fs&&(ctx.strokeStyle=fs)}else if(this.style("stroke").hasValue()){var strokeStyle=this.style("stroke");"currentColor"==strokeStyle.value&&(strokeStyle.value=this.style("color").value),ctx.strokeStyle="none"==strokeStyle.value?"rgba(0,0,0,0)":strokeStyle.value}if(this.style("stroke-opacity").hasValue()){var strokeStyle=new svg.Property("stroke",ctx.strokeStyle);strokeStyle=strokeStyle.addOpacity(this.style("stroke-opacity").value),ctx.strokeStyle=strokeStyle.value}if(this.style("stroke-width").hasValue()){var newLineWidth=this.style("stroke-width").toPixels();ctx.lineWidth=0==newLineWidth?.001:newLineWidth}if(this.style("stroke-linecap").hasValue()&&(ctx.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(ctx.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(ctx.miterLimit=this.style("stroke-miterlimit").value),this.style("stroke-dasharray").hasValue()){var gaps=svg.ToNumberArray(this.style("stroke-dasharray").value);"undefined"!=typeof ctx.setLineDash?ctx.setLineDash(gaps):"undefined"!=typeof ctx.webkitLineDash?ctx.webkitLineDash=gaps:"undefined"!=typeof ctx.mozDash&&(ctx.mozDash=gaps);var offset=this.style("stroke-dashoffset").numValueOrDefault(1);"undefined"!=typeof ctx.lineDashOffset?ctx.lineDashOffset=offset:"undefined"!=typeof ctx.webkitLineDashOffset?ctx.webkitLineDashOffset=offset:"undefined"!=typeof ctx.mozDashOffset&&(ctx.mozDashOffset=offset)}if("undefined"!=typeof ctx.font&&(ctx.font=svg.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString()),this.attribute("transform").hasValue()){var transform=new svg.Transform(this.attribute("transform").value);transform.apply(ctx)}if(this.style("clip-path").hasValue()){var clip=this.style("clip-path").getDefinition();null!=clip&&clip.apply(ctx)}this.style("opacity").hasValue()&&(ctx.globalAlpha=this.style("opacity").numValue())}},svg.Element.RenderedElementBase.prototype=new svg.Element.ElementBase,svg.Element.PathElementBase=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.path=function(ctx){return null!=ctx&&ctx.beginPath(),new svg.BoundingBox},this.renderChildren=function(ctx){this.path(ctx),svg.Mouse.checkPath(this,ctx),""!=ctx.fillStyle&&(this.attribute("fill-rule").hasValue()?ctx.fill(this.attribute("fill-rule").value):ctx.fill()),""!=ctx.strokeStyle&&ctx.stroke();var markers=this.getMarkers();if(null!=markers){if(this.style("marker-start").isUrlDefinition()){var marker=this.style("marker-start").getDefinition();marker.render(ctx,markers[0][0],markers[0][1])}if(this.style("marker-mid").isUrlDefinition())for(var marker=this.style("marker-mid").getDefinition(),i=1;i<markers.length-1;i++)marker.render(ctx,markers[i][0],markers[i][1]);if(this.style("marker-end").isUrlDefinition()){var marker=this.style("marker-end").getDefinition();marker.render(ctx,markers[markers.length-1][0],markers[markers.length-1][1])}}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},svg.Element.PathElementBase.prototype=new svg.Element.RenderedElementBase,svg.Element.svg=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.baseClearContext=this.clearContext,this.clearContext=function(ctx){this.baseClearContext(ctx),svg.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(ctx){ctx.strokeStyle="rgba(0,0,0,0)",ctx.lineCap="butt",ctx.lineJoin="miter",ctx.miterLimit=4,this.baseSetContext(ctx),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),ctx.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var width=svg.ViewPort.width(),height=svg.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),"undefined"==typeof this.root){width=this.attribute("width").toPixels("x"),height=this.attribute("height").toPixels("y");var x=0,y=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(x=-this.attribute("refX").toPixels("x"),y=-this.attribute("refY").toPixels("y")),ctx.beginPath(),ctx.moveTo(x,y),ctx.lineTo(width,y),ctx.lineTo(width,height),ctx.lineTo(x,height),ctx.closePath(),ctx.clip()}if(svg.ViewPort.SetCurrent(width,height),this.attribute("viewBox").hasValue()){var viewBox=svg.ToNumberArray(this.attribute("viewBox").value),minX=viewBox[0],minY=viewBox[1];width=viewBox[2],height=viewBox[3],svg.AspectRatio(ctx,this.attribute("preserveAspectRatio").value,svg.ViewPort.width(),width,svg.ViewPort.height(),height,minX,minY,this.attribute("refX").value,this.attribute("refY").value),svg.ViewPort.RemoveCurrent(),svg.ViewPort.SetCurrent(viewBox[2],viewBox[3])}}},svg.Element.svg.prototype=new svg.Element.RenderedElementBase,svg.Element.rect=function(node){this.base=svg.Element.PathElementBase,this.base(node),this.path=function(ctx){var x=this.attribute("x").toPixels("x"),y=this.attribute("y").toPixels("y"),width=this.attribute("width").toPixels("x"),height=this.attribute("height").toPixels("y"),rx=this.attribute("rx").toPixels("x"),ry=this.attribute("ry").toPixels("y");return this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(ry=rx),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(rx=ry),rx=Math.min(rx,width/2),ry=Math.min(ry,height/2),null!=ctx&&(ctx.beginPath(),ctx.moveTo(x+rx,y),ctx.lineTo(x+width-rx,y),ctx.quadraticCurveTo(x+width,y,x+width,y+ry),ctx.lineTo(x+width,y+height-ry),ctx.quadraticCurveTo(x+width,y+height,x+width-rx,y+height),ctx.lineTo(x+rx,y+height),ctx.quadraticCurveTo(x,y+height,x,y+height-ry),ctx.lineTo(x,y+ry),ctx.quadraticCurveTo(x,y,x+rx,y),ctx.closePath()),new svg.BoundingBox(x,y,x+width,y+height)}},svg.Element.rect.prototype=new svg.Element.PathElementBase,svg.Element.circle=function(node){this.base=svg.Element.PathElementBase,this.base(node),this.path=function(ctx){var cx=this.attribute("cx").toPixels("x"),cy=this.attribute("cy").toPixels("y"),r=this.attribute("r").toPixels();return null!=ctx&&(ctx.beginPath(),ctx.arc(cx,cy,r,0,2*Math.PI,!0),ctx.closePath()),new svg.BoundingBox(cx-r,cy-r,cx+r,cy+r)}},svg.Element.circle.prototype=new svg.Element.PathElementBase,svg.Element.ellipse=function(node){this.base=svg.Element.PathElementBase,this.base(node),this.path=function(ctx){var KAPPA=4*((Math.sqrt(2)-1)/3),rx=this.attribute("rx").toPixels("x"),ry=this.attribute("ry").toPixels("y"),cx=this.attribute("cx").toPixels("x"),cy=this.attribute("cy").toPixels("y");return null!=ctx&&(ctx.beginPath(),ctx.moveTo(cx,cy-ry),ctx.bezierCurveTo(cx+KAPPA*rx,cy-ry,cx+rx,cy-KAPPA*ry,cx+rx,cy),ctx.bezierCurveTo(cx+rx,cy+KAPPA*ry,cx+KAPPA*rx,cy+ry,cx,cy+ry),ctx.bezierCurveTo(cx-KAPPA*rx,cy+ry,cx-rx,cy+KAPPA*ry,cx-rx,cy),ctx.bezierCurveTo(cx-rx,cy-KAPPA*ry,cx-KAPPA*rx,cy-ry,cx,cy-ry),ctx.closePath()),new svg.BoundingBox(cx-rx,cy-ry,cx+rx,cy+ry)}},svg.Element.ellipse.prototype=new svg.Element.PathElementBase,svg.Element.line=function(node){this.base=svg.Element.PathElementBase,this.base(node),this.getPoints=function(){return[new svg.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new svg.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(ctx){var points=this.getPoints();return null!=ctx&&(ctx.beginPath(),ctx.moveTo(points[0].x,points[0].y),ctx.lineTo(points[1].x,points[1].y)),new svg.BoundingBox(points[0].x,points[0].y,points[1].x,points[1].y)},this.getMarkers=function(){var points=this.getPoints(),a=points[0].angleTo(points[1]);return[[points[0],a],[points[1],a]]}},svg.Element.line.prototype=new svg.Element.PathElementBase,svg.Element.polyline=function(node){this.base=svg.Element.PathElementBase,this.base(node),this.points=svg.CreatePath(this.attribute("points").value),this.path=function(ctx){var bb=new svg.BoundingBox(this.points[0].x,this.points[0].y);null!=ctx&&(ctx.beginPath(),ctx.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)bb.addPoint(this.points[i].x,this.points[i].y),null!=ctx&&ctx.lineTo(this.points[i].x,this.points[i].y);return bb},this.getMarkers=function(){for(var markers=[],i=0;i<this.points.length-1;i++)markers.push([this.points[i],this.points[i].angleTo(this.points[i+1])]);return markers.push([this.points[this.points.length-1],markers[markers.length-1][1]]),markers}},svg.Element.polyline.prototype=new svg.Element.PathElementBase,svg.Element.polygon=function(node){this.base=svg.Element.polyline,this.base(node),this.basePath=this.path,this.path=function(ctx){var bb=this.basePath(ctx);return null!=ctx&&(ctx.lineTo(this.points[0].x,this.points[0].y),ctx.closePath()),bb}},svg.Element.polygon.prototype=new svg.Element.polyline,svg.Element.path=function(node){this.base=svg.Element.PathElementBase,this.base(node);var d=this.attribute("d").value;d=d.replace(/,/gm," "),d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),d=d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2"),d=d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2"),d=d.replace(/([0-9])([+\-])/gm,"$1 $2"),d=d.replace(/(\.[0-9]*)(\.)/gm,"$1 $2"),d=d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),d=svg.compressSpaces(d),d=svg.trim(d),this.PathParser=new function(d){this.tokens=d.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new svg.Point(0,0),this.control=new svg.Point(0,0),this.current=new svg.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return this.isEnd()?!0:null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var p=new svg.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(p)},this.getAsControlPoint=function(){var p=this.getPoint();return this.control=p,p},this.getAsCurrentPoint=function(){var p=this.getPoint();return this.current=p,p},this.getReflectedControlPoint=function(){if("c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase())return this.current;var p=new svg.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y);return p},this.makeAbsolute=function(p){return this.isRelativeCommand()&&(p.x+=this.current.x,p.y+=this.current.y),p},this.addMarker=function(p,from,priorTo){null!=priorTo&&this.angles.length>0&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(priorTo)),this.addMarkerAngle(p,null==from?null:from.angleTo(p))},this.addMarkerAngle=function(p,a){this.points.push(p),this.angles.push(a)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var i=0;i<this.angles.length;i++)if(null==this.angles[i])for(var j=i+1;j<this.angles.length;j++)if(null!=this.angles[j]){this.angles[i]=this.angles[j];break}return this.angles}}(d),this.path=function(ctx){var pp=this.PathParser;pp.reset();var bb=new svg.BoundingBox;for(null!=ctx&&ctx.beginPath();!pp.isEnd();)switch(pp.nextCommand(),pp.command){case"M":case"m":var p=pp.getAsCurrentPoint();for(pp.addMarker(p),bb.addPoint(p.x,p.y),null!=ctx&&ctx.moveTo(p.x,p.y),pp.start=pp.current;!pp.isCommandOrEnd();){var p=pp.getAsCurrentPoint();pp.addMarker(p,pp.start),bb.addPoint(p.x,p.y),null!=ctx&&ctx.lineTo(p.x,p.y)}break;case"L":case"l":for(;!pp.isCommandOrEnd();){var c=pp.current,p=pp.getAsCurrentPoint();pp.addMarker(p,c),bb.addPoint(p.x,p.y),null!=ctx&&ctx.lineTo(p.x,p.y)}break;case"H":case"h":for(;!pp.isCommandOrEnd();){var newP=new svg.Point((pp.isRelativeCommand()?pp.current.x:0)+pp.getScalar(),pp.current.y);pp.addMarker(newP,pp.current),pp.current=newP,bb.addPoint(pp.current.x,pp.current.y),null!=ctx&&ctx.lineTo(pp.current.x,pp.current.y)}break;case"V":case"v":for(;!pp.isCommandOrEnd();){var newP=new svg.Point(pp.current.x,(pp.isRelativeCommand()?pp.current.y:0)+pp.getScalar());pp.addMarker(newP,pp.current),pp.current=newP,bb.addPoint(pp.current.x,pp.current.y),null!=ctx&&ctx.lineTo(pp.current.x,pp.current.y)}break;case"C":case"c":for(;!pp.isCommandOrEnd();){var curr=pp.current,p1=pp.getPoint(),cntrl=pp.getAsControlPoint(),cp=pp.getAsCurrentPoint();pp.addMarker(cp,cntrl,p1),bb.addBezierCurve(curr.x,curr.y,p1.x,p1.y,cntrl.x,cntrl.y,cp.x,cp.y),null!=ctx&&ctx.bezierCurveTo(p1.x,p1.y,cntrl.x,cntrl.y,cp.x,cp.y)}break;case"S":case"s":for(;!pp.isCommandOrEnd();){var curr=pp.current,p1=pp.getReflectedControlPoint(),cntrl=pp.getAsControlPoint(),cp=pp.getAsCurrentPoint();pp.addMarker(cp,cntrl,p1),bb.addBezierCurve(curr.x,curr.y,p1.x,p1.y,cntrl.x,cntrl.y,cp.x,cp.y),null!=ctx&&ctx.bezierCurveTo(p1.x,p1.y,cntrl.x,cntrl.y,cp.x,cp.y)}break;case"Q":case"q":for(;!pp.isCommandOrEnd();){var curr=pp.current,cntrl=pp.getAsControlPoint(),cp=pp.getAsCurrentPoint();pp.addMarker(cp,cntrl,cntrl),bb.addQuadraticCurve(curr.x,curr.y,cntrl.x,cntrl.y,cp.x,cp.y),null!=ctx&&ctx.quadraticCurveTo(cntrl.x,cntrl.y,cp.x,cp.y)}break;case"T":case"t":for(;!pp.isCommandOrEnd();){var curr=pp.current,cntrl=pp.getReflectedControlPoint();pp.control=cntrl;var cp=pp.getAsCurrentPoint();pp.addMarker(cp,cntrl,cntrl),bb.addQuadraticCurve(curr.x,curr.y,cntrl.x,cntrl.y,cp.x,cp.y),null!=ctx&&ctx.quadraticCurveTo(cntrl.x,cntrl.y,cp.x,cp.y)}break;case"A":case"a":for(;!pp.isCommandOrEnd();){var curr=pp.current,rx=pp.getScalar(),ry=pp.getScalar(),xAxisRotation=pp.getScalar()*(Math.PI/180),largeArcFlag=pp.getScalar(),sweepFlag=pp.getScalar(),cp=pp.getAsCurrentPoint(),currp=new svg.Point(Math.cos(xAxisRotation)*(curr.x-cp.x)/2+Math.sin(xAxisRotation)*(curr.y-cp.y)/2,-Math.sin(xAxisRotation)*(curr.x-cp.x)/2+Math.cos(xAxisRotation)*(curr.y-cp.y)/2),l=Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);l>1&&(rx*=Math.sqrt(l),ry*=Math.sqrt(l));var s=(largeArcFlag==sweepFlag?-1:1)*Math.sqrt((Math.pow(rx,2)*Math.pow(ry,2)-Math.pow(rx,2)*Math.pow(currp.y,2)-Math.pow(ry,2)*Math.pow(currp.x,2))/(Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2)));isNaN(s)&&(s=0);var cpp=new svg.Point(s*rx*currp.y/ry,s*-ry*currp.x/rx),centp=new svg.Point((curr.x+cp.x)/2+Math.cos(xAxisRotation)*cpp.x-Math.sin(xAxisRotation)*cpp.y,(curr.y+cp.y)/2+Math.sin(xAxisRotation)*cpp.x+Math.cos(xAxisRotation)*cpp.y),m=function(v){return Math.sqrt(Math.pow(v[0],2)+Math.pow(v[1],2))},r=function(u,v){return(u[0]*v[0]+u[1]*v[1])/(m(u)*m(v))},a=function(u,v){return(u[0]*v[1]<u[1]*v[0]?-1:1)*Math.acos(r(u,v))},a1=a([1,0],[(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]),u=[(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry],v=[(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry],ad=a(u,v);r(u,v)<=-1&&(ad=Math.PI),r(u,v)>=1&&(ad=0);var dir=1-sweepFlag?1:-1,ah=a1+dir*(ad/2),halfWay=new svg.Point(centp.x+rx*Math.cos(ah),centp.y+ry*Math.sin(ah));
if(pp.addMarkerAngle(halfWay,ah-dir*Math.PI/2),pp.addMarkerAngle(cp,ah-dir*Math.PI),bb.addPoint(cp.x,cp.y),null!=ctx){var r=rx>ry?rx:ry,sx=rx>ry?1:rx/ry,sy=rx>ry?ry/rx:1;ctx.translate(centp.x,centp.y),ctx.rotate(xAxisRotation),ctx.scale(sx,sy),ctx.arc(0,0,r,a1,a1+ad,1-sweepFlag),ctx.scale(1/sx,1/sy),ctx.rotate(-xAxisRotation),ctx.translate(-centp.x,-centp.y)}}break;case"Z":case"z":null!=ctx&&ctx.closePath(),pp.current=pp.start}return bb},this.getMarkers=function(){for(var points=this.PathParser.getMarkerPoints(),angles=this.PathParser.getMarkerAngles(),markers=[],i=0;i<points.length;i++)markers.push([points[i],angles[i]]);return markers}},svg.Element.path.prototype=new svg.Element.PathElementBase,svg.Element.pattern=function(node){this.base=svg.Element.ElementBase,this.base(node),this.createPattern=function(ctx){var width=this.attribute("width").toPixels("x",!0),height=this.attribute("height").toPixels("y",!0),tempSvg=new svg.Element.svg;tempSvg.attributes.viewBox=new svg.Property("viewBox",this.attribute("viewBox").value),tempSvg.attributes.width=new svg.Property("width",width+"px"),tempSvg.attributes.height=new svg.Property("height",height+"px"),tempSvg.attributes.transform=new svg.Property("transform",this.attribute("patternTransform").value),tempSvg.children=this.children;var c=document.createElement("canvas");c.width=width,c.height=height;var cctx=c.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&cctx.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var x=-1;1>=x;x++)for(var y=-1;1>=y;y++)cctx.save(),cctx.translate(x*c.width,y*c.height),tempSvg.render(cctx),cctx.restore();var pattern=ctx.createPattern(c,"repeat");return pattern}},svg.Element.pattern.prototype=new svg.Element.ElementBase,svg.Element.marker=function(node){this.base=svg.Element.ElementBase,this.base(node),this.baseRender=this.render,this.render=function(ctx,point,angle){ctx.translate(point.x,point.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&ctx.rotate(angle),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&ctx.scale(ctx.lineWidth,ctx.lineWidth),ctx.save();var tempSvg=new svg.Element.svg;tempSvg.attributes.viewBox=new svg.Property("viewBox",this.attribute("viewBox").value),tempSvg.attributes.refX=new svg.Property("refX",this.attribute("refX").value),tempSvg.attributes.refY=new svg.Property("refY",this.attribute("refY").value),tempSvg.attributes.width=new svg.Property("width",this.attribute("markerWidth").value),tempSvg.attributes.height=new svg.Property("height",this.attribute("markerHeight").value),tempSvg.attributes.fill=new svg.Property("fill",this.attribute("fill").valueOrDefault("black")),tempSvg.attributes.stroke=new svg.Property("stroke",this.attribute("stroke").valueOrDefault("none")),tempSvg.children=this.children,tempSvg.render(ctx),ctx.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&ctx.scale(1/ctx.lineWidth,1/ctx.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&ctx.rotate(-angle),ctx.translate(-point.x,-point.y)}},svg.Element.marker.prototype=new svg.Element.ElementBase,svg.Element.defs=function(node){this.base=svg.Element.ElementBase,this.base(node),this.render=function(){}},svg.Element.defs.prototype=new svg.Element.ElementBase,svg.Element.GradientBase=function(node){this.base=svg.Element.ElementBase,this.base(node),this.gradientUnits=this.attribute("gradientUnits").valueOrDefault("objectBoundingBox"),this.stops=[];for(var i=0;i<this.children.length;i++){var child=this.children[i];"stop"==child.type&&this.stops.push(child)}this.getGradient=function(){},this.createGradient=function(ctx,element,parentOpacityProp){var stopsContainer=this;this.getHrefAttribute().hasValue()&&(stopsContainer=this.getHrefAttribute().getDefinition());var addParentOpacity=function(color){if(parentOpacityProp.hasValue()){var p=new svg.Property("color",color);return p.addOpacity(parentOpacityProp.value).value}return color},g=this.getGradient(ctx,element);if(null==g)return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length-1].color);for(var i=0;i<stopsContainer.stops.length;i++)g.addColorStop(stopsContainer.stops[i].offset,addParentOpacity(stopsContainer.stops[i].color));if(this.attribute("gradientTransform").hasValue()){var rootView=svg.ViewPort.viewPorts[0],rect=new svg.Element.rect;rect.attributes.x=new svg.Property("x",-svg.MAX_VIRTUAL_PIXELS/3),rect.attributes.y=new svg.Property("y",-svg.MAX_VIRTUAL_PIXELS/3),rect.attributes.width=new svg.Property("width",svg.MAX_VIRTUAL_PIXELS),rect.attributes.height=new svg.Property("height",svg.MAX_VIRTUAL_PIXELS);var group=new svg.Element.g;group.attributes.transform=new svg.Property("transform",this.attribute("gradientTransform").value),group.children=[rect];var tempSvg=new svg.Element.svg;tempSvg.attributes.x=new svg.Property("x",0),tempSvg.attributes.y=new svg.Property("y",0),tempSvg.attributes.width=new svg.Property("width",rootView.width),tempSvg.attributes.height=new svg.Property("height",rootView.height),tempSvg.children=[group];var c=document.createElement("canvas");c.width=rootView.width,c.height=rootView.height;var tempCtx=c.getContext("2d");return tempCtx.fillStyle=g,tempSvg.render(tempCtx),tempCtx.createPattern(c,"no-repeat")}return g}},svg.Element.GradientBase.prototype=new svg.Element.ElementBase,svg.Element.linearGradient=function(node){this.base=svg.Element.GradientBase,this.base(node),this.getGradient=function(ctx,element){var bb=element.getBoundingBox();this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var x1="objectBoundingBox"==this.gradientUnits?bb.x()+bb.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),y1="objectBoundingBox"==this.gradientUnits?bb.y()+bb.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),x2="objectBoundingBox"==this.gradientUnits?bb.x()+bb.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),y2="objectBoundingBox"==this.gradientUnits?bb.y()+bb.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return x1==x2&&y1==y2?null:ctx.createLinearGradient(x1,y1,x2,y2)}},svg.Element.linearGradient.prototype=new svg.Element.GradientBase,svg.Element.radialGradient=function(node){this.base=svg.Element.GradientBase,this.base(node),this.getGradient=function(ctx,element){var bb=element.getBoundingBox();this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var cx="objectBoundingBox"==this.gradientUnits?bb.x()+bb.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),cy="objectBoundingBox"==this.gradientUnits?bb.y()+bb.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),fx=cx,fy=cy;this.attribute("fx").hasValue()&&(fx="objectBoundingBox"==this.gradientUnits?bb.x()+bb.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(fy="objectBoundingBox"==this.gradientUnits?bb.y()+bb.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var r="objectBoundingBox"==this.gradientUnits?(bb.width()+bb.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return ctx.createRadialGradient(fx,fy,0,cx,cy,r)}},svg.Element.radialGradient.prototype=new svg.Element.GradientBase,svg.Element.stop=function(node){this.base=svg.Element.ElementBase,this.base(node),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),this.offset>1&&(this.offset=1);var stopColor=this.style("stop-color");this.style("stop-opacity").hasValue()&&(stopColor=stopColor.addOpacity(this.style("stop-opacity").value)),this.color=stopColor.value},svg.Element.stop.prototype=new svg.Element.ElementBase,svg.Element.AnimateBase=function(node){this.base=svg.Element.ElementBase,this.base(node),svg.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var attributeType=this.attribute("attributeType").value,attributeName=this.attribute("attributeName").value;return"CSS"==attributeType?this.parent.style(attributeName,!0):this.parent.attribute(attributeName,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(delta){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"!=this.attribute("repeatCount").value&&"indefinite"!=this.attribute("repeatDur").value)return"remove"!=this.attribute("fill").valueOrDefault("remove")||this.removed?!1:(this.removed=!0,this.getProperty().value=this.initialValue,!0);this.duration=0}this.duration=this.duration+delta;var updated=!1;if(this.begin<this.duration){var newValue=this.calcValue();if(this.attribute("type").hasValue()){var type=this.attribute("type").value;newValue=type+"("+newValue+")"}this.getProperty().value=newValue,updated=!0}return updated},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var ret={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var p=ret.progress*(this.values.value.length-1),lb=Math.floor(p),ub=Math.ceil(p);ret.from=new svg.Property("from",parseFloat(this.values.value[lb])),ret.to=new svg.Property("to",parseFloat(this.values.value[ub])),ret.progress=(p-lb)/(ub-lb)}else ret.from=this.from,ret.to=this.to;return ret}},svg.Element.AnimateBase.prototype=new svg.Element.ElementBase,svg.Element.animate=function(node){this.base=svg.Element.AnimateBase,this.base(node),this.calcValue=function(){var p=this.progress(),newValue=p.from.numValue()+(p.to.numValue()-p.from.numValue())*p.progress;return newValue+this.initialUnits}},svg.Element.animate.prototype=new svg.Element.AnimateBase,svg.Element.animateColor=function(node){this.base=svg.Element.AnimateBase,this.base(node),this.calcValue=function(){var p=this.progress(),from=new RGBColor(p.from.value),to=new RGBColor(p.to.value);if(from.ok&&to.ok){var r=from.r+(to.r-from.r)*p.progress,g=from.g+(to.g-from.g)*p.progress,b=from.b+(to.b-from.b)*p.progress;return"rgb("+parseInt(r,10)+","+parseInt(g,10)+","+parseInt(b,10)+")"}return this.attribute("from").value}},svg.Element.animateColor.prototype=new svg.Element.AnimateBase,svg.Element.animateTransform=function(node){this.base=svg.Element.AnimateBase,this.base(node),this.calcValue=function(){for(var p=this.progress(),from=svg.ToNumberArray(p.from.value),to=svg.ToNumberArray(p.to.value),newValue="",i=0;i<from.length;i++)newValue+=from[i]+(to[i]-from[i])*p.progress+" ";return newValue}},svg.Element.animateTransform.prototype=new svg.Element.animate,svg.Element.font=function(node){this.base=svg.Element.ElementBase,this.base(node),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var i=0;i<this.children.length;i++){var child=this.children[i];"font-face"==child.type?(this.fontFace=child,child.style("font-family").hasValue()&&(svg.Definitions[child.style("font-family").value]=this)):"missing-glyph"==child.type?this.missingGlyph=child:"glyph"==child.type&&(""!=child.arabicForm?(this.isRTL=!0,this.isArabic=!0,"undefined"==typeof this.glyphs[child.unicode]&&(this.glyphs[child.unicode]=[]),this.glyphs[child.unicode][child.arabicForm]=child):this.glyphs[child.unicode]=child)}},svg.Element.font.prototype=new svg.Element.ElementBase,svg.Element.fontface=function(node){this.base=svg.Element.ElementBase,this.base(node),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},svg.Element.fontface.prototype=new svg.Element.ElementBase,svg.Element.missingglyph=function(node){this.base=svg.Element.path,this.base(node),this.horizAdvX=0},svg.Element.missingglyph.prototype=new svg.Element.path,svg.Element.glyph=function(node){this.base=svg.Element.path,this.base(node),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},svg.Element.glyph.prototype=new svg.Element.path,svg.Element.text=function(node){this.captureTextNodes=!0,this.base=svg.Element.RenderedElementBase,this.base(node),this.baseSetContext=this.setContext,this.setContext=function(ctx){this.baseSetContext(ctx),this.style("dominant-baseline").hasValue()&&(ctx.textBaseline=this.style("dominant-baseline").value),this.style("alignment-baseline").hasValue()&&(ctx.textBaseline=this.style("alignment-baseline").value)},this.getBoundingBox=function(){return new svg.BoundingBox(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"),0,0)},this.renderChildren=function(ctx){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.x+=this.getAnchorDelta(ctx,this,0);for(var i=0;i<this.children.length;i++)this.renderChild(ctx,this,i)},this.getAnchorDelta=function(ctx,parent,startI){var textAnchor=this.style("text-anchor").valueOrDefault("start");if("start"!=textAnchor){for(var width=0,i=startI;i<parent.children.length;i++){var child=parent.children[i];if(i>startI&&child.attribute("x").hasValue())break;width+=child.measureTextRecursive(ctx)}return-1*("end"==textAnchor?width:width/2)}return 0},this.renderChild=function(ctx,parent,i){var child=parent.children[i];child.attribute("x").hasValue()?child.x=child.attribute("x").toPixels("x")+this.getAnchorDelta(ctx,parent,i):(this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),child.attribute("dx").hasValue()&&(this.x+=child.attribute("dx").toPixels("x")),child.x=this.x),this.x=child.x+child.measureText(ctx),child.attribute("y").hasValue()?child.y=child.attribute("y").toPixels("y"):(this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),child.attribute("dy").hasValue()&&(this.y+=child.attribute("dy").toPixels("y")),child.y=this.y),this.y=child.y,child.render(ctx);for(var i=0;i<child.children.length;i++)this.renderChild(ctx,child,i)}},svg.Element.text.prototype=new svg.Element.RenderedElementBase,svg.Element.TextElementBase=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.getGlyph=function(font,text,i){var c=text[i],glyph=null;if(font.isArabic){var arabicForm="isolated";(0==i||" "==text[i-1])&&i<text.length-2&&" "!=text[i+1]&&(arabicForm="terminal"),i>0&&" "!=text[i-1]&&i<text.length-2&&" "!=text[i+1]&&(arabicForm="medial"),i>0&&" "!=text[i-1]&&(i==text.length-1||" "==text[i+1])&&(arabicForm="initial"),"undefined"!=typeof font.glyphs[c]&&(glyph=font.glyphs[c][arabicForm],null==glyph&&"glyph"==font.glyphs[c].type&&(glyph=font.glyphs[c]))}else glyph=font.glyphs[c];return null==glyph&&(glyph=font.missingGlyph),glyph},this.renderChildren=function(ctx){var customFont=this.parent.style("font-family").getDefinition();if(null==customFont)""!=ctx.fillStyle&&ctx.fillText(svg.compressSpaces(this.getText()),this.x,this.y),""!=ctx.strokeStyle&&ctx.strokeText(svg.compressSpaces(this.getText()),this.x,this.y);else{var fontSize=this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize),fontStyle=this.parent.style("font-style").valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle),text=this.getText();customFont.isRTL&&(text=text.split("").reverse().join(""));for(var dx=svg.ToNumberArray(this.parent.attribute("dx").value),i=0;i<text.length;i++){var glyph=this.getGlyph(customFont,text,i),scale=fontSize/customFont.fontFace.unitsPerEm;ctx.translate(this.x,this.y),ctx.scale(scale,-scale);var lw=ctx.lineWidth;ctx.lineWidth=ctx.lineWidth*customFont.fontFace.unitsPerEm/fontSize,"italic"==fontStyle&&ctx.transform(1,0,.4,1,0,0),glyph.render(ctx),"italic"==fontStyle&&ctx.transform(1,0,-.4,1,0,0),ctx.lineWidth=lw,ctx.scale(1/scale,-1/scale),ctx.translate(-this.x,-this.y),this.x+=fontSize*(glyph.horizAdvX||customFont.horizAdvX)/customFont.fontFace.unitsPerEm,"undefined"==typeof dx[i]||isNaN(dx[i])||(this.x+=dx[i])}}},this.getText=function(){},this.measureTextRecursive=function(ctx){for(var width=this.measureText(ctx),i=0;i<this.children.length;i++)width+=this.children[i].measureTextRecursive(ctx);return width},this.measureText=function(ctx){var customFont=this.parent.style("font-family").getDefinition();if(null!=customFont){var fontSize=this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize),measure=0,text=this.getText();customFont.isRTL&&(text=text.split("").reverse().join(""));for(var dx=svg.ToNumberArray(this.parent.attribute("dx").value),i=0;i<text.length;i++){var glyph=this.getGlyph(customFont,text,i);measure+=(glyph.horizAdvX||customFont.horizAdvX)*fontSize/customFont.fontFace.unitsPerEm,"undefined"==typeof dx[i]||isNaN(dx[i])||(measure+=dx[i])}return measure}var textToMeasure=svg.compressSpaces(this.getText());if(!ctx.measureText)return 10*textToMeasure.length;ctx.save(),this.setContext(ctx);var width=ctx.measureText(textToMeasure).width;return ctx.restore(),width}},svg.Element.TextElementBase.prototype=new svg.Element.RenderedElementBase,svg.Element.tspan=function(node){this.captureTextNodes=!0,this.base=svg.Element.TextElementBase,this.base(node),this.text=node.nodeValue||node.text||"",this.getText=function(){return this.text}},svg.Element.tspan.prototype=new svg.Element.TextElementBase,svg.Element.tref=function(node){this.base=svg.Element.TextElementBase,this.base(node),this.getText=function(){var element=this.getHrefAttribute().getDefinition();return null!=element?element.children[0].getText():void 0}},svg.Element.tref.prototype=new svg.Element.TextElementBase,svg.Element.a=function(node){this.base=svg.Element.TextElementBase,this.base(node),this.hasText=!0;for(var i=0;i<node.childNodes.length;i++)3!=node.childNodes[i].nodeType&&(this.hasText=!1);this.text=this.hasText?node.childNodes[0].nodeValue:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(ctx){if(this.hasText){this.baseRenderChildren(ctx);var fontSize=new svg.Property("fontSize",svg.Font.Parse(svg.ctx.font).fontSize);svg.Mouse.checkBoundingBox(this,new svg.BoundingBox(this.x,this.y-fontSize.toPixels("y"),this.x+this.measureText(ctx),this.y))}else{var g=new svg.Element.g;g.children=this.children,g.parent=this,g.render(ctx)}},this.onclick=function(){window.open(this.getHrefAttribute().value)},this.onmousemove=function(){svg.ctx.canvas.style.cursor="pointer"}},svg.Element.a.prototype=new svg.Element.TextElementBase,svg.Element.image=function(node){this.base=svg.Element.RenderedElementBase,this.base(node);var href=this.getHrefAttribute().value,isSvg=href.match(/\.svg$/);if(svg.Images.push(this),this.loaded=!1,isSvg)this.img=svg.ajax(href),this.loaded=!0;else{this.img=document.createElement("img");var self=this;this.img.onload=function(){self.loaded=!0},this.img.onerror=function(){"undefined"!=typeof console&&(console.log('ERROR: image "'+href+'" not found'),self.loaded=!0)},this.img.src=href}this.renderChildren=function(ctx){var x=this.attribute("x").toPixels("x"),y=this.attribute("y").toPixels("y"),width=this.attribute("width").toPixels("x"),height=this.attribute("height").toPixels("y");0!=width&&0!=height&&(ctx.save(),isSvg?ctx.drawSvg(this.img,x,y,width,height):(ctx.translate(x,y),svg.AspectRatio(ctx,this.attribute("preserveAspectRatio").value,width,this.img.width,height,this.img.height,0,0),ctx.drawImage(this.img,0,0)),ctx.restore())},this.getBoundingBox=function(){var x=this.attribute("x").toPixels("x"),y=this.attribute("y").toPixels("y"),width=this.attribute("width").toPixels("x"),height=this.attribute("height").toPixels("y");return new svg.BoundingBox(x,y,x+width,y+height)}},svg.Element.image.prototype=new svg.Element.RenderedElementBase,svg.Element.g=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.getBoundingBox=function(){for(var bb=new svg.BoundingBox,i=0;i<this.children.length;i++)bb.addBoundingBox(this.children[i].getBoundingBox());return bb}},svg.Element.g.prototype=new svg.Element.RenderedElementBase,svg.Element.symbol=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.baseSetContext=this.setContext,this.setContext=function(ctx){if(this.baseSetContext(ctx),this.attribute("viewBox").hasValue()){var viewBox=svg.ToNumberArray(this.attribute("viewBox").value),minX=viewBox[0],minY=viewBox[1];width=viewBox[2],height=viewBox[3],svg.AspectRatio(ctx,this.attribute("preserveAspectRatio").value,this.attribute("width").toPixels("x"),width,this.attribute("height").toPixels("y"),height,minX,minY),svg.ViewPort.SetCurrent(viewBox[2],viewBox[3])}}},svg.Element.symbol.prototype=new svg.Element.RenderedElementBase,svg.Element.style=function(node){this.base=svg.Element.ElementBase,this.base(node);for(var css="",i=0;i<node.childNodes.length;i++)css+=node.childNodes[i].nodeValue;css=css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,""),css=svg.compressSpaces(css);for(var cssDefs=css.split("}"),i=0;i<cssDefs.length;i++)if(""!=svg.trim(cssDefs[i]))for(var cssDef=cssDefs[i].split("{"),cssClasses=cssDef[0].split(","),cssProps=cssDef[1].split(";"),j=0;j<cssClasses.length;j++){var cssClass=svg.trim(cssClasses[j]);if(""!=cssClass){for(var props={},k=0;k<cssProps.length;k++){var prop=cssProps[k].indexOf(":"),name=cssProps[k].substr(0,prop),value=cssProps[k].substr(prop+1,cssProps[k].length-prop);null!=name&&null!=value&&(props[svg.trim(name)]=new svg.Property(svg.trim(name),svg.trim(value)))}if(svg.Styles[cssClass]=props,"@font-face"==cssClass)for(var fontFamily=props["font-family"].value.replace(/"/g,""),srcs=props.src.value.split(","),s=0;s<srcs.length;s++)if(srcs[s].indexOf('format("svg")')>0)for(var urlStart=srcs[s].indexOf("url"),urlEnd=srcs[s].indexOf(")",urlStart),url=srcs[s].substr(urlStart+5,urlEnd-urlStart-6),doc=svg.parseXml(svg.ajax(url)),fonts=doc.getElementsByTagName("font"),f=0;f<fonts.length;f++){var font=svg.CreateElement(fonts[f]);svg.Definitions[fontFamily]=font}}}},svg.Element.style.prototype=new svg.Element.ElementBase,svg.Element.use=function(node){this.base=svg.Element.RenderedElementBase,this.base(node),this.baseSetContext=this.setContext,this.setContext=function(ctx){this.baseSetContext(ctx),this.attribute("x").hasValue()&&ctx.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&ctx.translate(0,this.attribute("y").toPixels("y"))},this.getDefinition=function(){var element=this.getHrefAttribute().getDefinition();return this.attribute("width").hasValue()&&(element.attribute("width",!0).value=this.attribute("width").value),this.attribute("height").hasValue()&&(element.attribute("height",!0).value=this.attribute("height").value),element},this.path=function(ctx){var element=this.getDefinition();null!=element&&element.path(ctx)},this.getBoundingBox=function(){var element=this.getDefinition();return null!=element?element.getBoundingBox():void 0},this.renderChildren=function(ctx){var element=this.getDefinition();if(null!=element){var oldParent=element.parent;element.parent=null,element.render(ctx),element.parent=oldParent}}},svg.Element.use.prototype=new svg.Element.RenderedElementBase,svg.Element.mask=function(node){this.base=svg.Element.ElementBase,this.base(node),this.apply=function(ctx,element){var x=this.attribute("x").toPixels("x"),y=this.attribute("y").toPixels("y"),width=this.attribute("width").toPixels("x"),height=this.attribute("height").toPixels("y");if(0==width&&0==height){for(var bb=new svg.BoundingBox,i=0;i<this.children.length;i++)bb.addBoundingBox(this.children[i].getBoundingBox());var x=Math.floor(bb.x1),y=Math.floor(bb.y1),width=Math.floor(bb.width()),height=Math.floor(bb.height())}var mask=element.attribute("mask").value;element.attribute("mask").value="";var cMask=document.createElement("canvas");cMask.width=x+width,cMask.height=y+height;var maskCtx=cMask.getContext("2d");this.renderChildren(maskCtx);var c=document.createElement("canvas");c.width=x+width,c.height=y+height;var tempCtx=c.getContext("2d");element.render(tempCtx),tempCtx.globalCompositeOperation="destination-in",tempCtx.fillStyle=maskCtx.createPattern(cMask,"no-repeat"),tempCtx.fillRect(0,0,x+width,y+height),ctx.fillStyle=tempCtx.createPattern(c,"no-repeat"),ctx.fillRect(0,0,x+width,y+height),element.attribute("mask").value=mask},this.render=function(){}},svg.Element.mask.prototype=new svg.Element.ElementBase,svg.Element.clipPath=function(node){this.base=svg.Element.ElementBase,this.base(node),this.apply=function(ctx){for(var i=0;i<this.children.length;i++){var child=this.children[i];if("undefined"!=typeof child.path){var transform=null;child.attribute("transform").hasValue()&&(transform=new svg.Transform(child.attribute("transform").value),transform.apply(ctx)),child.path(ctx),ctx.clip(),transform&&transform.unapply(ctx)}}},this.render=function(){}},svg.Element.clipPath.prototype=new svg.Element.ElementBase,svg.Element.filter=function(node){this.base=svg.Element.ElementBase,this.base(node),this.apply=function(ctx,element){var bb=element.getBoundingBox(),x=Math.floor(bb.x1),y=Math.floor(bb.y1),width=Math.floor(bb.width()),height=Math.floor(bb.height()),filter=element.style("filter").value;element.style("filter").value="";for(var px=0,py=0,i=0;i<this.children.length;i++){var efd=this.children[i].extraFilterDistance||0;px=Math.max(px,efd),py=Math.max(py,efd)}var c=document.createElement("canvas");c.width=width+2*px,c.height=height+2*py;var tempCtx=c.getContext("2d");tempCtx.translate(-x+px,-y+py),element.render(tempCtx);for(var i=0;i<this.children.length;i++)this.children[i].apply(tempCtx,0,0,width+2*px,height+2*py);ctx.drawImage(c,0,0,width+2*px,height+2*py,x-px,y-py,width+2*px,height+2*py),element.style("filter",!0).value=filter},this.render=function(){}},svg.Element.filter.prototype=new svg.Element.ElementBase,svg.Element.feMorphology=function(node){this.base=svg.Element.ElementBase,this.base(node),this.apply=function(){}},svg.Element.feMorphology.prototype=new svg.Element.ElementBase,svg.Element.feColorMatrix=function(node){function imGet(img,x,y,width,height,rgba){return img[y*width*4+4*x+rgba]}function imSet(img,x,y,width,height,rgba,val){img[y*width*4+4*x+rgba]=val}this.base=svg.Element.ElementBase,this.base(node),this.apply=function(ctx,x,y,width,height){for(var srcData=ctx.getImageData(0,0,width,height),y=0;height>y;y++)for(var x=0;width>x;x++){var r=imGet(srcData.data,x,y,width,height,0),g=imGet(srcData.data,x,y,width,height,1),b=imGet(srcData.data,x,y,width,height,2),gray=(r+g+b)/3;imSet(srcData.data,x,y,width,height,0,gray),imSet(srcData.data,x,y,width,height,1,gray),imSet(srcData.data,x,y,width,height,2,gray)}ctx.clearRect(0,0,width,height),ctx.putImageData(srcData,0,0)}},svg.Element.feColorMatrix.prototype=new svg.Element.ElementBase,svg.Element.feGaussianBlur=function(node){this.base=svg.Element.ElementBase,this.base(node),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(ctx,x,y,width,height){return"undefined"==typeof stackBlurCanvasRGBA?void("undefined"!=typeof console&&console.log("ERROR: StackBlur.js must be included for blur to work")):(ctx.canvas.id=svg.UniqueId(),ctx.canvas.style.display="none",document.body.appendChild(ctx.canvas),stackBlurCanvasRGBA(ctx.canvas.id,x,y,width,height,this.blurRadius),void document.body.removeChild(ctx.canvas))}},svg.Element.feGaussianBlur.prototype=new svg.Element.ElementBase,svg.Element.title=function(){},svg.Element.title.prototype=new svg.Element.ElementBase,svg.Element.desc=function(){},svg.Element.desc.prototype=new svg.Element.ElementBase,svg.Element.MISSING=function(node){"undefined"!=typeof console&&console.log("ERROR: Element '"+node.nodeName+"' not yet implemented.")},svg.Element.MISSING.prototype=new svg.Element.ElementBase,svg.CreateElement=function(node){var className=node.nodeName.replace(/^[^:]+:/,"");className=className.replace(/\-/g,"");var e=null;return e="undefined"!=typeof svg.Element[className]?new svg.Element[className](node):new svg.Element.MISSING(node),e.type=node.nodeName,e},svg.load=function(ctx,url){svg.loadXml(ctx,svg.ajax(url))},svg.loadXml=function(ctx,xml){svg.loadXmlDoc(ctx,svg.parseXml(xml))},svg.loadXmlDoc=function(ctx,dom){svg.init(ctx);var mapXY=function(p){for(var e=ctx.canvas;e;)p.x-=e.offsetLeft,p.y-=e.offsetTop,e=e.offsetParent;return window.scrollX&&(p.x+=window.scrollX),window.scrollY&&(p.y+=window.scrollY),p};1!=svg.opts.ignoreMouse&&(ctx.canvas.onclick=function(e){var p=mapXY(new svg.Point(null!=e?e.clientX:event.clientX,null!=e?e.clientY:event.clientY));svg.Mouse.onclick(p.x,p.y)},ctx.canvas.onmousemove=function(e){var p=mapXY(new svg.Point(null!=e?e.clientX:event.clientX,null!=e?e.clientY:event.clientY));svg.Mouse.onmousemove(p.x,p.y)});var e=svg.CreateElement(dom.documentElement);e.root=!0;var isFirstRender=!0,draw=function(){svg.ViewPort.Clear(),ctx.canvas.parentNode&&svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth,ctx.canvas.parentNode.clientHeight),1!=svg.opts.ignoreDimensions&&(e.style("width").hasValue()&&(ctx.canvas.width=e.style("width").toPixels("x"),ctx.canvas.style.width=ctx.canvas.width+"px"),e.style("height").hasValue()&&(ctx.canvas.height=e.style("height").toPixels("y"),ctx.canvas.style.height=ctx.canvas.height+"px"));var cWidth=ctx.canvas.clientWidth||ctx.canvas.width,cHeight=ctx.canvas.clientHeight||ctx.canvas.height;if(1==svg.opts.ignoreDimensions&&e.style("width").hasValue()&&e.style("height").hasValue()&&(cWidth=e.style("width").toPixels("x"),cHeight=e.style("height").toPixels("y")),svg.ViewPort.SetCurrent(cWidth,cHeight),null!=svg.opts.offsetX&&(e.attribute("x",!0).value=svg.opts.offsetX),null!=svg.opts.offsetY&&(e.attribute("y",!0).value=svg.opts.offsetY),null!=svg.opts.scaleWidth&&null!=svg.opts.scaleHeight){var xRatio=1,yRatio=1,viewBox=svg.ToNumberArray(e.attribute("viewBox").value);e.attribute("width").hasValue()?xRatio=e.attribute("width").toPixels("x")/svg.opts.scaleWidth:isNaN(viewBox[2])||(xRatio=viewBox[2]/svg.opts.scaleWidth),e.attribute("height").hasValue()?yRatio=e.attribute("height").toPixels("y")/svg.opts.scaleHeight:isNaN(viewBox[3])||(yRatio=viewBox[3]/svg.opts.scaleHeight),e.attribute("width",!0).value=svg.opts.scaleWidth,e.attribute("height",!0).value=svg.opts.scaleHeight,e.attribute("viewBox",!0).value="0 0 "+cWidth*xRatio+" "+cHeight*yRatio,e.attribute("preserveAspectRatio",!0).value="none"}1!=svg.opts.ignoreClear&&ctx.clearRect(0,0,cWidth,cHeight),e.render(ctx),isFirstRender&&(isFirstRender=!1,"function"==typeof svg.opts.renderCallback&&svg.opts.renderCallback(dom))},waitingForImages=!0;svg.ImagesLoaded()&&(waitingForImages=!1,draw()),svg.intervalID=setInterval(function(){var needUpdate=!1;if(waitingForImages&&svg.ImagesLoaded()&&(waitingForImages=!1,needUpdate=!0),1!=svg.opts.ignoreMouse&&(needUpdate|=svg.Mouse.hasEvents()),1!=svg.opts.ignoreAnimation)for(var i=0;i<svg.Animations.length;i++)needUpdate|=svg.Animations[i].update(1e3/svg.FRAMERATE);"function"==typeof svg.opts.forceRedraw&&1==svg.opts.forceRedraw()&&(needUpdate=!0),needUpdate&&(draw(),svg.Mouse.runEvents())},1e3/svg.FRAMERATE)},svg.stop=function(){svg.intervalID&&clearInterval(svg.intervalID)},svg.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(x,y){this.events.push({type:"onclick",x:x,y:y,run:function(e){e.onclick&&e.onclick()
}})},this.onmousemove=function(x,y){this.events.push({type:"onmousemove",x:x,y:y,run:function(e){e.onmousemove&&e.onmousemove()}})},this.eventElements=[],this.checkPath=function(element,ctx){for(var i=0;i<this.events.length;i++){var e=this.events[i];ctx.isPointInPath&&ctx.isPointInPath(e.x,e.y)&&(this.eventElements[i]=element)}},this.checkBoundingBox=function(element,bb){for(var i=0;i<this.events.length;i++){var e=this.events[i];bb.isPointInBox(e.x,e.y)&&(this.eventElements[i]=element)}},this.runEvents=function(){svg.ctx.canvas.style.cursor="";for(var i=0;i<this.events.length;i++)for(var e=this.events[i],element=this.eventElements[i];element;)e.run(element),element=element.parent;this.events=[],this.eventElements=[]}},svg}this.canvg=function(target,s,opts){if(null!=target||null!=s||null!=opts){opts=opts||{},"string"==typeof target&&(target=document.getElementById(target)),null!=target.svg&&target.svg.stop();var svg=build();(1!=target.childNodes.length||"OBJECT"!=target.childNodes[0].nodeName)&&(target.svg=svg),svg.opts=opts;var ctx=target.getContext("2d");"undefined"!=typeof s.documentElement?svg.loadXmlDoc(ctx,s):"<"==s.substr(0,1)?svg.loadXml(ctx,s):svg.load(ctx,s)}else for(var svgTags=document.getElementsByTagName("svg"),i=0;i<svgTags.length;i++){var svgTag=svgTags[i],c=document.createElement("canvas");c.width=svgTag.clientWidth,c.height=svgTag.clientHeight,svgTag.parentNode.insertBefore(c,svgTag),svgTag.parentNode.removeChild(svgTag);var div=document.createElement("div");div.appendChild(svgTag),canvg(c,div.innerHTML)}}}(),"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(s,dx,dy,dw,dh){canvg(this.canvas,s,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:dx,offsetY:dy,scaleWidth:dw,scaleHeight:dh})});
/* Blob.js
 * A Blob implementation.
 * 2014-07-24
 *
 * By Eli Grey, http://eligrey.com
 * By Devin Samarin, https://github.com/dsamarin
 * License: X11/MIT
 *   See https://github.com/eligrey/Blob.js/blob/master/LICENSE.md
 */

/*global self, unescape */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */

(function (view) {
	"use strict";

	view.URL = view.URL || view.webkitURL;

	if (view.Blob && view.URL) {
		try {
			new Blob;
			return;
		} catch (e) {}
	}

	// Internally we use a BlobBuilder implementation to base Blob off of
	// in order to support older browsers that only have BlobBuilder
	var BlobBuilder = view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder || (function(view) {
		var
			  get_class = function(object) {
				return Object.prototype.toString.call(object).match(/^\[object\s(.*)\]$/)[1];
			}
			, FakeBlobBuilder = function BlobBuilder() {
				this.data = [];
			}
			, FakeBlob = function Blob(data, type, encoding) {
				this.data = data;
				this.size = data.length;
				this.type = type;
				this.encoding = encoding;
			}
			, FBB_proto = FakeBlobBuilder.prototype
			, FB_proto = FakeBlob.prototype
			, FileReaderSync = view.FileReaderSync
			, FileException = function(type) {
				this.code = this[this.name = type];
			}
			, file_ex_codes = (
				  "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR "
				+ "NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR"
			).split(" ")
			, file_ex_code = file_ex_codes.length
			, real_URL = view.URL || view.webkitURL || view
			, real_create_object_URL = real_URL.createObjectURL
			, real_revoke_object_URL = real_URL.revokeObjectURL
			, URL = real_URL
			, btoa = view.btoa
			, atob = view.atob

			, ArrayBuffer = view.ArrayBuffer
			, Uint8Array = view.Uint8Array

			, origin = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/
		;
		FakeBlob.fake = FB_proto.fake = true;
		while (file_ex_code--) {
			FileException.prototype[file_ex_codes[file_ex_code]] = file_ex_code + 1;
		}
		// Polyfill URL
		if (!real_URL.createObjectURL) {
			URL = view.URL = function(uri) {
				var
					  uri_info = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
					, uri_origin
				;
				uri_info.href = uri;
				if (!("origin" in uri_info)) {
					if (uri_info.protocol.toLowerCase() === "data:") {
						uri_info.origin = null;
					} else {
						uri_origin = uri.match(origin);
						uri_info.origin = uri_origin && uri_origin[1];
					}
				}
				return uri_info;
			};
		}
		URL.createObjectURL = function(blob) {
			var
				  type = blob.type
				, data_URI_header
			;
			if (type === null) {
				type = "application/octet-stream";
			}
			if (blob instanceof FakeBlob) {
				data_URI_header = "data:" + type;
				if (blob.encoding === "base64") {
					return data_URI_header + ";base64," + blob.data;
				} else if (blob.encoding === "URI") {
					return data_URI_header + "," + decodeURIComponent(blob.data);
				} if (btoa) {
					return data_URI_header + ";base64," + btoa(blob.data);
				} else {
					return data_URI_header + "," + encodeURIComponent(blob.data);
				}
			} else if (real_create_object_URL) {
				return real_create_object_URL.call(real_URL, blob);
			}
		};
		URL.revokeObjectURL = function(object_URL) {
			if (object_URL.substring(0, 5) !== "data:" && real_revoke_object_URL) {
				real_revoke_object_URL.call(real_URL, object_URL);
			}
		};
		FBB_proto.append = function(data/*, endings*/) {
			var bb = this.data;
			// decode data to a binary string
			if (Uint8Array && (data instanceof ArrayBuffer || data instanceof Uint8Array)) {
				var
					  str = ""
					, buf = new Uint8Array(data)
					, i = 0
					, buf_len = buf.length
				;
				for (; i < buf_len; i++) {
					str += String.fromCharCode(buf[i]);
				}
				bb.push(str);
			} else if (get_class(data) === "Blob" || get_class(data) === "File") {
				if (FileReaderSync) {
					var fr = new FileReaderSync;
					bb.push(fr.readAsBinaryString(data));
				} else {
					// async FileReader won't work as BlobBuilder is sync
					throw new FileException("NOT_READABLE_ERR");
				}
			} else if (data instanceof FakeBlob) {
				if (data.encoding === "base64" && atob) {
					bb.push(atob(data.data));
				} else if (data.encoding === "URI") {
					bb.push(decodeURIComponent(data.data));
				} else if (data.encoding === "raw") {
					bb.push(data.data);
				}
			} else {
				if (typeof data !== "string") {
					data += ""; // convert unsupported types to strings
				}
				// decode UTF-16 to binary string
				bb.push(unescape(encodeURIComponent(data)));
			}
		};
		FBB_proto.getBlob = function(type) {
			if (!arguments.length) {
				type = null;
			}
			return new FakeBlob(this.data.join(""), type, "raw");
		};
		FBB_proto.toString = function() {
			return "[object BlobBuilder]";
		};
		FB_proto.slice = function(start, end, type) {
			var args = arguments.length;
			if (args < 3) {
				type = null;
			}
			return new FakeBlob(
				  this.data.slice(start, args > 1 ? end : this.data.length)
				, type
				, this.encoding
			);
		};
		FB_proto.toString = function() {
			return "[object Blob]";
		};
		FB_proto.close = function() {
			this.size = 0;
			delete this.data;
		};
		return FakeBlobBuilder;
	}(view));

	view.Blob = function(blobParts, options) {
		var type = options ? (options.type || "") : "";
		var builder = new BlobBuilder();
		if (blobParts) {
			for (var i = 0, len = blobParts.length; i < len; i++) {
				builder.append(blobParts[i]);
			}
		}
		return builder.getBlob(type);
	};
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

/* canvas-toBlob.js
 * A canvas.toBlob() implementation.
 * 2013-12-27
 * 
 * By Eli Grey, http://eligrey.com and Devin Samarin, https://github.com/eboyjr
 * License: X11/MIT
 *   See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, regexp: true, confusion: true, es5: true, vars: true, white: true,
  plusplus: true */

/*! @source http://purl.eligrey.com/github/canvas-toBlob.js/blob/master/canvas-toBlob.js */

(function(view) {
"use strict";
var
	  Uint8Array = view.Uint8Array
	, HTMLCanvasElement = view.HTMLCanvasElement
	, canvas_proto = HTMLCanvasElement && HTMLCanvasElement.prototype
	, is_base64_regex = /\s*;\s*base64\s*(?:;|$)/i
	, to_data_url = "toDataURL"
	, base64_ranks
	, decode_base64 = function(base64) {
		var
			  len = base64.length
			, buffer = new Uint8Array(len / 4 * 3 | 0)
			, i = 0
			, outptr = 0
			, last = [0, 0]
			, state = 0
			, save = 0
			, rank
			, code
			, undef
		;
		while (len--) {
			code = base64.charCodeAt(i++);
			rank = base64_ranks[code-43];
			if (rank !== 255 && rank !== undef) {
				last[1] = last[0];
				last[0] = code;
				save = (save << 6) | rank;
				state++;
				if (state === 4) {
					buffer[outptr++] = save >>> 16;
					if (last[1] !== 61 /* padding character */) {
						buffer[outptr++] = save >>> 8;
					}
					if (last[0] !== 61 /* padding character */) {
						buffer[outptr++] = save;
					}
					state = 0;
				}
			}
		}
		// 2/3 chance there's going to be some null bytes at the end, but that
		// doesn't really matter with most image formats.
		// If it somehow matters for you, truncate the buffer up outptr.
		return buffer;
	}
;
if (Uint8Array) {
	base64_ranks = new Uint8Array([
		  62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1
		, -1, -1,  0, -1, -1, -1,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9
		, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
		, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
		, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
	]);
}
if (HTMLCanvasElement && !canvas_proto.toBlob) {
	canvas_proto.toBlob = function(callback, type /*, ...args*/) {
		  if (!type) {
			type = "image/png";
		} if (this.mozGetAsFile) {
			callback(this.mozGetAsFile("canvas", type));
			return;
		} if (this.msToBlob && /^\s*image\/png\s*(?:$|;)/i.test(type)) {
			callback(this.msToBlob());
			return;
		}

		var
			  args = Array.prototype.slice.call(arguments, 1)
			, dataURI = this[to_data_url].apply(this, args)
			, header_end = dataURI.indexOf(",")
			, data = dataURI.substring(header_end + 1)
			, is_base64 = is_base64_regex.test(dataURI.substring(0, header_end))
			, blob
		;
		if (Blob.fake) {
			// no reason to decode a data: URI that's just going to become a data URI again
			blob = new Blob
			if (is_base64) {
				blob.encoding = "base64";
			} else {
				blob.encoding = "URI";
			}
			blob.data = data;
			blob.size = data.length;
		} else if (Uint8Array) {
			if (is_base64) {
				blob = new Blob([decode_base64(data)], {type: type});
			} else {
				blob = new Blob([decodeURIComponent(data)], {type: type});
			}
		}
		callback(blob);
	};

	if (canvas_proto.toDataURLHD) {
		canvas_proto.toBlobHD = function() {
			to_data_url = "toDataURLHD";
			var blob = this.toBlob();
			to_data_url = "toDataURL";
			return blob;
		}
	} else {
		canvas_proto.toBlobHD = canvas_proto.toBlob;
	}
}
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));

/*!
 * typeahead.js 0.9.3
 * https://github.com/twitter/typeahead
 * Copyright 2013 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a){var b="0.9.3",c={isMsie:function(){var a=/(msie) ([\w.]+)/i.exec(navigator.userAgent);return a?parseInt(a[2],10):!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},bind:a.proxy,bindAll:function(b){var c;for(var d in b)a.isFunction(c=b[d])&&(b[d]=a.proxy(c,b))},indexOf:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},each:a.each,map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},tokenizeQuery:function(b){return a.trim(b).toLowerCase().split(/[\s]+/)},tokenizeText:function(b){return a.trim(b).toLowerCase().split(/[\s\-_]+/)},getProtocol:function(){return location.protocol},noop:function(){}},d=function(){var a=/\s+/;return{on:function(b,c){var d;if(!c)return this;for(this._callbacks=this._callbacks||{},b=b.split(a);d=b.shift();)this._callbacks[d]=this._callbacks[d]||[],this._callbacks[d].push(c);return this},trigger:function(b,c){var d,e;if(!this._callbacks)return this;for(b=b.split(a);d=b.shift();)if(e=this._callbacks[d])for(var f=0;f<e.length;f+=1)e[f].call(this,{type:d,data:c});return this}}}(),e=function(){function b(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return c.mixin(b.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),b}(),f=function(){function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+this.prefix)}function b(){return(new Date).getTime()}function d(a){return JSON.stringify(c.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return c.isNumber(g)?f.setItem(this._ttlKey(a),d(b()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return c.isNumber(d)&&b()>d?!0:!1}}:{get:c.noop,set:c.noop,remove:c.noop,clear:c.noop,isExpired:c.noop},c.mixin(a.prototype,g),a}(),g=function(){function a(a){c.bindAll(this),a=a||{},this.sizeLimit=a.sizeLimit||10,this.cache={},this.cachedKeysByAge=[]}return c.mixin(a.prototype,{get:function(a){return this.cache[a]},set:function(a,b){var c;this.cachedKeysByAge.length===this.sizeLimit&&(c=this.cachedKeysByAge.shift(),delete this.cache[c]),this.cache[a]=b,this.cachedKeysByAge.push(a)}}),a}(),h=function(){function b(a){c.bindAll(this),a=c.isString(a)?{url:a}:a,i=i||new g,h=c.isNumber(a.maxParallelRequests)?a.maxParallelRequests:h||6,this.url=a.url,this.wildcard=a.wildcard||"%QUERY",this.filter=a.filter,this.replace=a.replace,this.ajaxSettings={type:"get",cache:a.cache,timeout:a.timeout,dataType:a.dataType||"json",beforeSend:a.beforeSend},this._get=(/^throttle$/i.test(a.rateLimitFn)?c.throttle:c.debounce)(this._get,a.rateLimitWait||300)}function d(){j++}function e(){j--}function f(){return h>j}var h,i,j=0,k={};return c.mixin(b.prototype,{_get:function(a,b){function c(c){var e=d.filter?d.filter(c):c;b&&b(e),i.set(a,c)}var d=this;f()?this._sendRequest(a).done(c):this.onDeckRequestArgs=[].slice.call(arguments,0)},_sendRequest:function(b){function c(){e(),k[b]=null,f.onDeckRequestArgs&&(f._get.apply(f,f.onDeckRequestArgs),f.onDeckRequestArgs=null)}var f=this,g=k[b];return g||(d(),g=k[b]=a.ajax(b,this.ajaxSettings).always(c)),g},get:function(a,b){var d,e,f=this,g=encodeURIComponent(a||"");return b=b||c.noop,d=this.replace?this.replace(this.url,g):this.url.replace(this.wildcard,g),(e=i.get(d))?c.defer(function(){b(f.filter?f.filter(e):e)}):this._get(d,b),!!e}}),b}(),i=function(){function d(b){c.bindAll(this),c.isString(b.template)&&!b.engine&&a.error("no template engine specified"),b.local||b.prefetch||b.remote||a.error("one of local, prefetch, or remote is required"),this.name=b.name||c.getUniqueId(),this.limit=b.limit||5,this.minLength=b.minLength||1,this.header=b.header,this.footer=b.footer,this.valueKey=b.valueKey||"value",this.template=e(b.template,b.engine,this.valueKey),this.local=b.local,this.prefetch=b.prefetch,this.remote=b.remote,this.itemHash={},this.adjacencyList={},this.storage=b.name?new f(b.name):null}function e(a,b,d){var e,f;return c.isFunction(a)?e=a:c.isString(a)?(f=b.compile(a),e=c.bind(f.render,f)):e=function(a){return"<p>"+a[d]+"</p>"},e}var g={thumbprint:"thumbprint",protocol:"protocol",itemHash:"itemHash",adjacencyList:"adjacencyList"};return c.mixin(d.prototype,{_processLocalData:function(a){this._mergeProcessedData(this._processData(a))},_loadPrefetchData:function(d){function e(a){var b=d.filter?d.filter(a):a,e=m._processData(b),f=e.itemHash,h=e.adjacencyList;m.storage&&(m.storage.set(g.itemHash,f,d.ttl),m.storage.set(g.adjacencyList,h,d.ttl),m.storage.set(g.thumbprint,n,d.ttl),m.storage.set(g.protocol,c.getProtocol(),d.ttl)),m._mergeProcessedData(e)}var f,h,i,j,k,l,m=this,n=b+(d.thumbprint||"");return this.storage&&(f=this.storage.get(g.thumbprint),h=this.storage.get(g.protocol),i=this.storage.get(g.itemHash),j=this.storage.get(g.adjacencyList)),k=f!==n||h!==c.getProtocol(),d=c.isString(d)?{url:d}:d,d.ttl=c.isNumber(d.ttl)?d.ttl:864e5,i&&j&&!k?(this._mergeProcessedData({itemHash:i,adjacencyList:j}),l=a.Deferred().resolve()):l=a.getJSON(d.url).done(e),l},_transformDatum:function(a){var b=c.isString(a)?a:a[this.valueKey],d=a.tokens||c.tokenizeText(b),e={value:b,tokens:d};return c.isString(a)?(e.datum={},e.datum[this.valueKey]=a):e.datum=a,e.tokens=c.filter(e.tokens,function(a){return!c.isBlankString(a)}),e.tokens=c.map(e.tokens,function(a){return a.toLowerCase()}),e},_processData:function(a){var b=this,d={},e={};return c.each(a,function(a,f){var g=b._transformDatum(f),h=c.getUniqueId(g.value);d[h]=g,c.each(g.tokens,function(a,b){var d=b.charAt(0),f=e[d]||(e[d]=[h]);!~c.indexOf(f,h)&&f.push(h)})}),{itemHash:d,adjacencyList:e}},_mergeProcessedData:function(a){var b=this;c.mixin(this.itemHash,a.itemHash),c.each(a.adjacencyList,function(a,c){var d=b.adjacencyList[a];b.adjacencyList[a]=d?d.concat(c):c})},_getLocalSuggestions:function(a){var b,d=this,e=[],f=[],g=[];return c.each(a,function(a,b){var d=b.charAt(0);!~c.indexOf(e,d)&&e.push(d)}),c.each(e,function(a,c){var e=d.adjacencyList[c];return e?(f.push(e),(!b||e.length<b.length)&&(b=e),void 0):!1}),f.length<e.length?[]:(c.each(b,function(b,e){var h,i,j=d.itemHash[e];h=c.every(f,function(a){return~c.indexOf(a,e)}),i=h&&c.every(a,function(a){return c.some(j.tokens,function(b){return 0===b.indexOf(a)})}),i&&g.push(j)}),g)},initialize:function(){var b;return this.local&&this._processLocalData(this.local),this.transport=this.remote?new h(this.remote):null,b=this.prefetch?this._loadPrefetchData(this.prefetch):a.Deferred().resolve(),this.local=this.prefetch=this.remote=null,this.initialize=function(){return b},b},getSuggestions:function(a,b){function d(a){f=f.slice(0),c.each(a,function(a,b){var d,e=g._transformDatum(b);return d=c.some(f,function(a){return e.value===a.value}),!d&&f.push(e),f.length<g.limit}),b&&b(f)}var e,f,g=this,h=!1;a.length<this.minLength||(e=c.tokenizeQuery(a),f=this._getLocalSuggestions(e).slice(0,this.limit),f.length<this.limit&&this.transport&&(h=this.transport.get(a,d)),!h&&b&&b(f))}}),d}(),j=function(){function b(b){var d=this;c.bindAll(this),this.specialKeyCodeMap={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},this.$hint=a(b.hint),this.$input=a(b.input).on("blur.tt",this._handleBlur).on("focus.tt",this._handleFocus).on("keydown.tt",this._handleSpecialKeyEvent),c.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){d.specialKeyCodeMap[a.which||a.keyCode]||c.defer(d._compareQueryToInputValue)}):this.$input.on("input.tt",this._compareQueryToInputValue),this.query=this.$input.val(),this.$overflowHelper=e(this.$input)}function e(b){return a("<span></span>").css({position:"absolute",left:"-9999px",visibility:"hidden",whiteSpace:"nowrap",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function f(a,b){return a=(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),b=(b||"").replace(/^\s*/g,"").replace(/\s{2,}/g," "),a===b}return c.mixin(b.prototype,d,{_handleFocus:function(){this.trigger("focused")},_handleBlur:function(){this.trigger("blured")},_handleSpecialKeyEvent:function(a){var b=this.specialKeyCodeMap[a.which||a.keyCode];b&&this.trigger(b+"Keyed",a)},_compareQueryToInputValue:function(){var a=this.getInputValue(),b=f(this.query,a),c=b?this.query.length!==a.length:!1;c?this.trigger("whitespaceChanged",{value:this.query}):b||this.trigger("queryChanged",{value:this.query=a})},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),!b&&this._compareQueryToInputValue()},getHintValue:function(){return this.$hint.val()},setHintValue:function(a){this.$hint.val(a)},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},isOverflow:function(){return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>this.$input.width()},isCursorAtEnd:function(){var a,b=this.$input.val().length,d=this.$input[0].selectionStart;return c.isNumber(d)?d===b:document.selection?(a=document.selection.createRange(),a.moveStart("character",-b),b===a.text.length):!0}}),b}(),k=function(){function b(b){c.bindAll(this),this.isOpen=!1,this.isEmpty=!0,this.isMouseOverDropdown=!1,this.$menu=a(b.menu).on("mouseenter.tt",this._handleMouseenter).on("mouseleave.tt",this._handleMouseleave).on("click.tt",".tt-suggestion",this._handleSelection).on("mouseover.tt",".tt-suggestion",this._handleMouseover)}function e(a){return a.data("suggestion")}var f={suggestionsList:'<span class="tt-suggestions"></span>'},g={suggestionsList:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"}};return c.mixin(b.prototype,d,{_handleMouseenter:function(){this.isMouseOverDropdown=!0},_handleMouseleave:function(){this.isMouseOverDropdown=!1},_handleMouseover:function(b){var c=a(b.currentTarget);this._getSuggestions().removeClass("tt-is-under-cursor"),c.addClass("tt-is-under-cursor")},_handleSelection:function(b){var c=a(b.currentTarget);this.trigger("suggestionSelected",e(c))},_show:function(){this.$menu.css("display","block")},_hide:function(){this.$menu.hide()},_moveCursor:function(a){var b,c,d,f;if(this.isVisible()){if(b=this._getSuggestions(),c=b.filter(".tt-is-under-cursor"),c.removeClass("tt-is-under-cursor"),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return this.trigger("cursorRemoved"),void 0;-1>d&&(d=b.length-1),f=b.eq(d).addClass("tt-is-under-cursor"),this._ensureVisibility(f),this.trigger("cursorMoved",e(f))}},_getSuggestions:function(){return this.$menu.find(".tt-suggestions > .tt-suggestion")},_ensureVisibility:function(a){var b=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),c=this.$menu.scrollTop(),d=a.position().top,e=d+a.outerHeight(!0);0>d?this.$menu.scrollTop(c+d):e>b&&this.$menu.scrollTop(c+(e-b))},destroy:function(){this.$menu.off(".tt"),this.$menu=null},isVisible:function(){return this.isOpen&&!this.isEmpty},closeUnlessMouseIsOverDropdown:function(){this.isMouseOverDropdown||this.close()},close:function(){this.isOpen&&(this.isOpen=!1,this.isMouseOverDropdown=!1,this._hide(),this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){var b={left:"0",right:"auto"},c={left:"auto",right:" 0"};"ltr"===a?this.$menu.css(b):this.$menu.css(c)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getSuggestionUnderCursor:function(){var a=this._getSuggestions().filter(".tt-is-under-cursor").first();return a.length>0?e(a):null},getFirstSuggestion:function(){var a=this._getSuggestions().first();return a.length>0?e(a):null},renderSuggestions:function(b,d){var e,h,i,j,k,l="tt-dataset-"+b.name,m='<div class="tt-suggestion">%body</div>',n=this.$menu.find("."+l);0===n.length&&(h=a(f.suggestionsList).css(g.suggestionsList),n=a("<div></div>").addClass(l).append(b.header).append(h).append(b.footer).appendTo(this.$menu)),d.length>0?(this.isEmpty=!1,this.isOpen&&this._show(),i=document.createElement("div"),j=document.createDocumentFragment(),c.each(d,function(c,d){d.dataset=b.name,e=b.template(d.datum),i.innerHTML=m.replace("%body",e),k=a(i.firstChild).css(g.suggestion).data("suggestion",d),k.children().each(function(){a(this).css(g.suggestionChild)}),j.appendChild(k[0])}),n.show().find(".tt-suggestions").html(j)):this.clearSuggestions(b.name),this.trigger("suggestionsRendered")},clearSuggestions:function(a){var b=a?this.$menu.find(".tt-dataset-"+a):this.$menu.find('[class^="tt-dataset-"]'),c=b.find(".tt-suggestions");b.hide(),c.empty(),0===this._getSuggestions().length&&(this.isEmpty=!0,this._hide())}}),b}(),l=function(){function b(a){var b,d,f;c.bindAll(this),this.$node=e(a.input),this.datasets=a.datasets,this.dir=null,this.eventBus=a.eventBus,b=this.$node.find(".tt-dropdown-menu"),d=this.$node.find(".tt-query"),f=this.$node.find(".tt-hint"),this.dropdownView=new k({menu:b}).on("suggestionSelected",this._handleSelection).on("cursorMoved",this._clearHint).on("cursorMoved",this._setInputValueToSuggestionUnderCursor).on("cursorRemoved",this._setInputValueToQuery).on("cursorRemoved",this._updateHint).on("suggestionsRendered",this._updateHint).on("opened",this._updateHint).on("closed",this._clearHint).on("opened closed",this._propagateEvent),this.inputView=new j({input:d,hint:f}).on("focused",this._openDropdown).on("blured",this._closeDropdown).on("blured",this._setInputValueToQuery).on("enterKeyed tabKeyed",this._handleSelection).on("queryChanged",this._clearHint).on("queryChanged",this._clearSuggestions).on("queryChanged",this._getSuggestions).on("whitespaceChanged",this._updateHint).on("queryChanged whitespaceChanged",this._openDropdown).on("queryChanged whitespaceChanged",this._setLanguageDirection).on("escKeyed",this._closeDropdown).on("escKeyed",this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed",this._managePreventDefault).on("upKeyed downKeyed",this._moveDropdownCursor).on("upKeyed downKeyed",this._openDropdown).on("tabKeyed leftKeyed rightKeyed",this._autocomplete)}function e(b){var c=a(g.wrapper),d=a(g.dropdown),e=a(b),f=a(g.hint);c=c.css(h.wrapper),d=d.css(h.dropdown),f.css(h.hint).css({backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}),e.data("ttAttrs",{dir:e.attr("dir"),autocomplete:e.attr("autocomplete"),spellcheck:e.attr("spellcheck"),style:e.attr("style")}),e.addClass("tt-query").attr({autocomplete:"off",spellcheck:!1}).css(h.query);try{!e.attr("dir")&&e.attr("dir","auto")}catch(i){}return e.wrap(c).parent().prepend(f).append(d)}function f(a){var b=a.find(".tt-query");c.each(b.data("ttAttrs"),function(a,d){c.isUndefined(d)?b.removeAttr(a):b.attr(a,d)}),b.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(a),a.remove()}var g={wrapper:'<span class="twitter-typeahead"></span>',hint:'<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',dropdown:'<span class="tt-dropdown-menu"></span>'},h={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none"},query:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"}};return c.isMsie()&&c.mixin(h.query,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),c.isMsie()&&c.isMsie()<=7&&(c.mixin(h.wrapper,{display:"inline",zoom:"1"}),c.mixin(h.query,{marginTop:"-1px"})),c.mixin(b.prototype,d,{_managePreventDefault:function(a){var b,c,d=a.data,e=!1;switch(a.type){case"tabKeyed":b=this.inputView.getHintValue(),c=this.inputView.getInputValue(),e=b&&b!==c;break;case"upKeyed":case"downKeyed":e=!d.shiftKey&&!d.ctrlKey&&!d.metaKey}e&&d.preventDefault()},_setLanguageDirection:function(){var a=this.inputView.getLanguageDirection();a!==this.dir&&(this.dir=a,this.$node.css("direction",a),this.dropdownView.setLanguageDirection(a))},_updateHint:function(){var a,b,d,e,f,g=this.dropdownView.getFirstSuggestion(),h=g?g.value:null,i=this.dropdownView.isVisible(),j=this.inputView.isOverflow();h&&i&&!j&&(a=this.inputView.getInputValue(),b=a.replace(/\s{2,}/g," ").replace(/^\s+/g,""),d=c.escapeRegExChars(b),e=new RegExp("^(?:"+d+")(.*$)","i"),f=e.exec(h),this.inputView.setHintValue(a+(f?f[1]:"")))},_clearHint:function(){this.inputView.setHintValue("")},_clearSuggestions:function(){this.dropdownView.clearSuggestions()},_setInputValueToQuery:function(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursor:function(a){var b=a.data;this.inputView.setInputValue(b.value,!0)},_openDropdown:function(){this.dropdownView.open()},_closeDropdown:function(a){this.dropdownView["blured"===a.type?"closeUnlessMouseIsOverDropdown":"close"]()},_moveDropdownCursor:function(a){var b=a.data;b.shiftKey||b.ctrlKey||b.metaKey||this.dropdownView["upKeyed"===a.type?"moveCursorUp":"moveCursorDown"]()},_handleSelection:function(a){var b="suggestionSelected"===a.type,d=b?a.data:this.dropdownView.getSuggestionUnderCursor();d&&(this.inputView.setInputValue(d.value),b?this.inputView.focus():a.data.preventDefault(),b&&c.isMsie()?c.defer(this.dropdownView.close):this.dropdownView.close(),this.eventBus.trigger("selected",d.datum,d.dataset))},_getSuggestions:function(){var a=this,b=this.inputView.getQuery();c.isBlankString(b)||c.each(this.datasets,function(c,d){d.getSuggestions(b,function(c){b===a.inputView.getQuery()&&a.dropdownView.renderSuggestions(d,c)})})},_autocomplete:function(a){var b,c,d,e,f;("rightKeyed"!==a.type&&"leftKeyed"!==a.type||(b=this.inputView.isCursorAtEnd(),c="ltr"===this.inputView.getLanguageDirection()?"leftKeyed"===a.type:"rightKeyed"===a.type,b&&!c))&&(d=this.inputView.getQuery(),e=this.inputView.getHintValue(),""!==e&&d!==e&&(f=this.dropdownView.getFirstSuggestion(),this.inputView.setInputValue(f.value),this.eventBus.trigger("autocompleted",f.datum,f.dataset)))},_propagateEvent:function(a){this.eventBus.trigger(a.type)},destroy:function(){this.inputView.destroy(),this.dropdownView.destroy(),f(this.$node),this.$node=null},setQuery:function(a){this.inputView.setQuery(a),this.inputView.setInputValue(a),this._clearHint(),this._clearSuggestions(),this._getSuggestions()}}),b}();!function(){var b,d={},f="ttView";b={initialize:function(b){function g(){var b,d=a(this),g=new e({el:d});b=c.map(h,function(a){return a.initialize()}),d.data(f,new l({input:d,eventBus:g=new e({el:d}),datasets:h})),a.when.apply(a,b).always(function(){c.defer(function(){g.trigger("initialized")})})}var h;return b=c.isArray(b)?b:[b],0===b.length&&a.error("no datasets provided"),h=c.map(b,function(a){var b=d[a.name]?d[a.name]:new i(a);return a.name&&(d[a.name]=b),b}),this.each(g)},destroy:function(){function b(){var b=a(this),c=b.data(f);c&&(c.destroy(),b.removeData(f))}return this.each(b)},setQuery:function(b){function c(){var c=a(this).data(f);c&&c.setQuery(b)}return this.each(c)}},jQuery.fn.typeahead=function(a){return b[a]?b[a].apply(this,[].slice.call(arguments,1)):b.initialize.apply(this,arguments)}}()}(window.jQuery);
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = (useArrayBuffer) ? [] : '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // tries to find a partial in the curent scope and render it
    rp: function(name, context, partials, indent) {
      var partial = partials[name];

      if (!partial) {
        return '';
      }

      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }

      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ho: function(val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = (text == null) ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },
    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },

    // lambda replace section
    ls: function(val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1],
          t = null;

      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }

      t = val.call(cx);

      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }

      return t;
    },

    // lambda replace variable
    lv: function(val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);

      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf("{\u007B")) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }

      return coerceToString(result);
    }

  };

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;


  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);




(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      tagTypes = {
        '#': 1, '^': 2, '/': 3,  '!': 4, '>': 5,
        '<': 6, '=': 7, '_v': 8, '{': 9, '&': 10
      };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v']) ||
          (!tokens[j].tag && tokens[j].match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - ctag.length : i + otag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        token = null;

    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }

    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n),
                        tree[i].i, tree[i].end, tree[i].otag + " " + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n,
                                chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length-1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }

  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' +
           'c,p,0,' + start + ',' + end + ',"' + tags + '")){' +
           '_.rs(c,p,' +
           'function(c,p,_){' +
           walk(nodes) +
           '});c.pop();}';
  }

  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' +
           walk(nodes) +
           '};';
  }

  function partial(tok) {
    return '_.b(_.rp("' +  esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }

  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }

  function text(id) {
    return '_.b(' + id + ');';
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.compile = function(text, options) {
    // options
    //
    // asString: false (default)
    //
    // sectionTags: [{o: '_foo', c: 'foo'}]
    // An array of object with o and c fields that indicate names for custom
    // section tags. The example above allows parsing of {{_foo}}{{/foo}}.
    //
    // delimiters: A string that overrides the default delimiters.
    // Example: "<% %>"
    //
    options = options || {};

    var key = text + '||' + !!options.asString;

    var t = this.cache[key];

    if (t) {
      return t;
    }

    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);


/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*! offline 0.7.3 */
(function(){var a,b,c,d,e,f,g;d=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},a={},null==a.options&&(a.options={}),c={checks:{xhr:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())},timeout:5e3},image:{url:function(){return"/favicon.ico?_="+Math.floor(1e9*Math.random())}},active:"xhr"},checkOnLoad:!1,interceptRequests:!0,reconnect:!0},e=function(a,b){var c,d,e,f,g,h;for(c=a,f=b.split("."),d=g=0,h=f.length;h>g&&(e=f[d],c=c[e],"object"==typeof c);d=++g);return d===f.length-1?c:void 0},a.getOption=function(b){var d,f;return d=null!=(f=e(a.options,b))?f:e(c,b),"function"==typeof d?d():d},"function"==typeof window.addEventListener&&window.addEventListener("online",function(){return setTimeout(a.confirmUp,100)},!1),"function"==typeof window.addEventListener&&window.addEventListener("offline",function(){return a.confirmDown()},!1),a.state="up",a.markUp=function(){return a.trigger("confirmed-up"),"up"!==a.state?(a.state="up",a.trigger("up")):void 0},a.markDown=function(){return a.trigger("confirmed-down"),"down"!==a.state?(a.state="down",a.trigger("down")):void 0},f={},a.on=function(b,c,d){var e,g,h,i,j;if(g=b.split(" "),g.length>1){for(j=[],h=0,i=g.length;i>h;h++)e=g[h],j.push(a.on(e,c,d));return j}return null==f[b]&&(f[b]=[]),f[b].push([d,c])},a.off=function(a,b){var c,d,e,g,h;if(null!=f[a]){if(b){for(d=0,h=[];d<f[a].length;)g=f[a][d],c=g[0],e=g[1],h.push(e===b?f[a].splice(d,1):d++);return h}return f[a]=[]}},a.trigger=function(a){var b,c,d,e,g,h,i;if(null!=f[a]){for(g=f[a],i=[],d=0,e=g.length;e>d;d++)h=g[d],b=h[0],c=h[1],i.push(c.call(b));return i}},b=function(a,b,c){var d,e;return d=function(){return a.status&&a.status<12e3?b():c()},null===a.onprogress?(a.addEventListener("error",c,!1),a.addEventListener("timeout",c,!1),a.addEventListener("load",d,!1)):(e=a.onreadystatechange,a.onreadystatechange=function(){return 4===a.readyState?d():0===a.readyState&&c(),"function"==typeof e?e.apply(null,arguments):void 0})},a.checks={},a.checks.xhr=function(){var c,d;d=new XMLHttpRequest,d.offline=!1,d.open("HEAD",a.getOption("checks.xhr.url"),!0),null!=d.timeout&&(d.timeout=a.getOption("checks.xhr.timeout")),b(d,a.markUp,a.markDown);try{d.send()}catch(e){c=e,a.markDown()}return d},a.checks.image=function(){var b;return b=document.createElement("img"),b.onerror=a.markDown,b.onload=a.markUp,void(b.src=a.getOption("checks.image.url"))},a.checks.down=a.markDown,a.checks.up=a.markUp,a.check=function(){return a.trigger("checking"),a.checks[a.getOption("checks.active")]()},a.confirmUp=a.confirmDown=a.check,a.onXHR=function(a){var b,c,e;return b=function(b,c){var d;return d=b.open,b.open=function(e,f,g,h,i){return a({type:e,url:f,async:g,flags:c,user:h,password:i,xhr:b}),d.apply(b,arguments)}},e=window.XMLHttpRequest,window.XMLHttpRequest=function(a){var c,d,f;return c=new e(a),b(c,a),f=c.setRequestHeader,c.headers={},c.setRequestHeader=function(a,b){return c.headers[a]=b,f.call(c,a,b)},d=c.overrideMimeType,c.overrideMimeType=function(a){return c.mimeType=a,d.call(c,a)},c},d(window.XMLHttpRequest,e),null!=window.XDomainRequest?(c=window.XDomainRequest,window.XDomainRequest=function(){var a;return a=new c,b(a),a},d(window.XDomainRequest,c)):void 0},g=function(){return a.getOption("interceptRequests")&&a.onXHR(function(c){var d;return d=c.xhr,d.offline!==!1?b(d,a.confirmUp,a.confirmDown):void 0}),a.getOption("checkOnLoad")?a.check():void 0},setTimeout(g,0),window.Offline=a}).call(this),function(){var a,b,c,d,e,f,g,h,i;if(!window.Offline)throw new Error("Offline Reconnect brought in without offline.js");d=Offline.reconnect={},f=null,e=function(){var a;return null!=d.state&&"inactive"!==d.state&&Offline.trigger("reconnect:stopped"),d.state="inactive",d.remaining=d.delay=null!=(a=Offline.getOption("reconnect.initialDelay"))?a:3},b=function(){var a,b;return a=null!=(b=Offline.getOption("reconnect.delay"))?b:Math.min(Math.ceil(1.5*d.delay),3600),d.remaining=d.delay=a},g=function(){return"connecting"!==d.state?(d.remaining-=1,Offline.trigger("reconnect:tick"),0===d.remaining?h():void 0):void 0},h=function(){return"waiting"===d.state?(Offline.trigger("reconnect:connecting"),d.state="connecting",Offline.check()):void 0},a=function(){return Offline.getOption("reconnect")?(e(),d.state="waiting",Offline.trigger("reconnect:started"),f=setInterval(g,1e3)):void 0},i=function(){return null!=f&&clearInterval(f),e()},c=function(){return Offline.getOption("reconnect")?"connecting"===d.state?(Offline.trigger("reconnect:failure"),d.state="waiting",b()):void 0:void 0},d.tryNow=h,e(),Offline.on("down",a),Offline.on("confirmed-down",c),Offline.on("up",i)}.call(this),function(){var a,b,c,d,e,f;if(!window.Offline)throw new Error("Requests module brought in without offline.js");c=[],f=!1,d=function(a){return Offline.trigger("requests:capture"),"down"!==Offline.state&&(f=!0),c.push(a)},e=function(a){var b,c,d,e,f,g,h,i,j;i=a.xhr,f=a.url,e=a.type,g=a.user,d=a.password,b=a.body,i.abort(),i.open(e,f,!0,g,d),j=i.headers;for(c in j)h=j[c],i.setRequestHeader(c,h);return i.mimeType&&i.overrideMimeType(i.mimeType),i.send(b)},a=function(){return c=[]},b=function(){var b,d,f,g,h,i;for(Offline.trigger("requests:flush"),f={},h=0,i=c.length;i>h;h++)d=c[h],g=d.url.replace(/(\?|&)_=[0-9]+/,function(a,b){return"?"===b?b:""}),f[""+d.type.toUpperCase()+" - "+g]=d;for(b in f)d=f[b],e(d);return a()},setTimeout(function(){return Offline.getOption("requests")!==!1?(Offline.on("confirmed-up",function(){return f?(f=!1,a()):void 0}),Offline.on("up",b),Offline.on("down",function(){return f=!1}),Offline.onXHR(function(a){var b,c,e,f,g;return e=a.xhr,b=a.async,e.offline!==!1&&(c=function(){return d(a)},g=e.send,e.send=function(b){return a.body=b,g.apply(e,arguments)},b)?null===e.onprogress?(e.addEventListener("error",c,!1),e.addEventListener("timeout",c,!1)):(f=e.onreadystatechange,e.onreadystatechange=function(){return 0===e.readyState?c():4===e.readyState&&(0===e.status||e.status>=12e3)&&c(),"function"==typeof f?f.apply(null,arguments):void 0}):void 0}),Offline.requests={flush:b,clear:a}):void 0},0)}.call(this),function(){var a,b,c,d,e;if(!Offline)throw new Error("Offline simulate brought in without offline.js");for(e=["up","down"],c=0,d=e.length;d>c;c++)a=e[c],(document.querySelector("script[data-simulate='"+a+"']")||localStorage.OFFLINE_SIMULATE===a)&&(null==Offline.options&&(Offline.options={}),null==(b=Offline.options).checks&&(b.checks={}),Offline.options.checks.active=a)}.call(this),function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;if(!window.Offline)throw new Error("Offline UI brought in without offline.js");b='<div class="offline-ui"><div class="offline-ui-content"></div></div>',a='<a href class="offline-ui-retry"></a>',e=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},f=d=null,c=function(a){return j(a),f.className+=" "+a},j=function(a){return f.className=f.className.replace(new RegExp("(^| )"+a.split(" ").join("|")+"( |$)","gi")," ")},h={},g=function(a,b){return c(a),null!=h[a]&&clearTimeout(h[a]),h[a]=setTimeout(function(){return j(a),delete h[a]},1e3*b)},l=function(a){var b,c,d,e;d={day:86400,hour:3600,minute:60,second:1};for(c in d)if(b=d[c],a>=b)return e=Math.floor(a/b),[e,c];return["now",""]},k=function(){var g,h;return f=e(b),document.body.appendChild(f),null!=Offline.reconnect&&Offline.getOption("reconnect")&&(f.appendChild(e(a)),g=f.querySelector(".offline-ui-retry"),h=function(a){return a.preventDefault(),Offline.reconnect.tryNow()},null!=g.addEventListener?g.addEventListener("click",h,!1):g.attachEvent("click",h)),c("offline-ui-"+Offline.state),d=f.querySelector(".offline-ui-content")},i=function(){return k(),Offline.on("up",function(){return j("offline-ui-down"),c("offline-ui-up"),g("offline-ui-up-2s",2),g("offline-ui-up-5s",5)}),Offline.on("down",function(){return j("offline-ui-up"),c("offline-ui-down"),g("offline-ui-down-2s",2),g("offline-ui-down-5s",5)}),Offline.on("reconnect:connecting",function(){return c("offline-ui-connecting"),j("offline-ui-waiting")}),Offline.on("reconnect:tick",function(){var a,b,e;return c("offline-ui-waiting"),j("offline-ui-connecting"),e=l(Offline.reconnect.remaining),a=e[0],b=e[1],d.setAttribute("data-retry-in-value",a),d.setAttribute("data-retry-in-unit",b)}),Offline.on("reconnect:stopped",function(){return j("offline-ui-connecting offline-ui-waiting"),d.setAttribute("data-retry-in-value",null),d.setAttribute("data-retry-in-unit",null)}),Offline.on("reconnect:failure",function(){return g("offline-ui-reconnect-failed-2s",2),g("offline-ui-reconnect-failed-5s",5)}),Offline.on("reconnect:success",function(){return g("offline-ui-reconnect-succeeded-2s",2),g("offline-ui-reconnect-succeeded-5s",5)})},"complete"===document.readyState?i():null!=document.addEventListener?document.addEventListener("DOMContentLoaded",i,!1):(m=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&i(),"function"==typeof m?m.apply(null,arguments):void 0})}.call(this);
(function(h){h.deparam=function(i,j){var d={},k={"true":!0,"false":!1,"null":null};h.each(i.replace(/\+/g," ").split("&"),function(i,l){var m;var a=l.split("="),c=decodeURIComponent(a[0]),g=d,f=0,b=c.split("]["),e=b.length-1;/\[/.test(b[0])&&/\]$/.test(b[e])?(b[e]=b[e].replace(/\]$/,""),b=b.shift().split("[").concat(b),e=b.length-1):e=0;if(2===a.length)if(a=decodeURIComponent(a[1]),j&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==k[a]?k[a]:a),e)for(;f<=e;f++)c=""===b[f]?g.length:b[f],m=g[c]=
f<e?g[c]||(b[f+1]&&isNaN(b[f+1])?{}:[]):a,g=m;else h.isArray(d[c])?d[c].push(a):d[c]=void 0!==d[c]?[d[c],a]:a;else c&&(d[c]=j?void 0:"")});return d}})(jQuery);

this["BaristaTemplates"] = this["BaristaTemplates"] || {};

this["BaristaTemplates"]["CMapBaseGrid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_download\">\n			<font color=\"#0072B2\"><i class=\"icon-download\"></i> download table</font>\n		</p>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_edit\">\n			<font color=\"#e51c23\"><i class=\"fa fa-times-circle\"></i> edit </font>\n		</p>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p class=\"pull-left\" style=\"padding-left: 8px; cursor: pointer\" id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "_slice\">\n			<font color=\"#0072B2\"><i class=\"icon-cogs\"></i> slice all data</font>\n		</p>\n	";
  return buffer;
  }

function program9(depth0,data) {
  
  
  return "\n		<div class=\"col-lg-8\"></div>\n	";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, depth0.legend, {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			";
  if (stack1 = helpers.legend) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.legend; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n			<span class=\"col-lg-8\">\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #E69F00\">SMC</span> Small Molecule Compound </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #56B4E9\">KD</span> Knock Down </p>\n				<p class=\"pull-right\" style=\"padding-right: 8px\"><span class=\"label\" style=\"background-color: #D55E00\">OE</span> Over Expression </p>\n			</span>\n		";
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " backgrid-container\" height=\"300\">\n</div>\n<div class=\"row\">\n	<span class=\"col-lg-4\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_download, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.edit, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_slice, {hash:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</span>\n	";
  stack1 = helpers['if'].call(depth0, depth0.no_legend, {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"cmap-card-wrapper ";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"cmap-card\">\n        <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class='cmap-card-title'>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n            <p class=\"cmap-card-subtitle\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </a>\n    </div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapFooter"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"pull-right cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><img class=\"cmap-footer-image\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	";
  return buffer;
  }

  buffer += "<hr>\n<div class=\"row hidden-xs\">\n	<div class=\"col-sm-offset-1 col-sm-5 pull-left\">\n		<p>&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p><a href=\"";
  if (stack1 = helpers.terms_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.terms_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-sm-5\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n\n<div class=\"row visible-xs\">\n	<div class=\"col-xs-12\">\n		<p class=\"cmap-center-text\">&copy ";
  if (stack1 = helpers.year) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.year; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.organization) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.organization; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " all rights reserved</p>\n		<p class=\"cmap-center-text\"><a href=\"";
  if (stack1 = helpers.terms_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.terms_url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">terms and conditions</a></p>\n	</div>\n	<div class=\"col-xs-12 cmap-center-text\">\n	";
  stack1 = helpers.each.call(depth0, depth0.logo_objects, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n<div class=\"cmap-spacer-medium\"></div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapHeader"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<p id=\"cmapHeaderMenuAppName\" title=\"app name\" class=\"cmap-header-app-name pull-left\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n					";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n						<div class=\"dropdown pull-right\">\n							<p id=\"username\" title=\"profile\" class=\"cmap-header-username data-toggle\" data-toggle=\"dropdown\">";
  if (stack1 = helpers.user) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.user; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<span class=\"caret cmap-header-caret\"></span></p>\n							<ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"username\">\n						    <li role=\"presentation\"><a id=\"logout\" role=\"menuitem\" tabindex=\"-1\" href=\"/signout\">Logout</a></li>\n							<li role=\"presentation\"><a id=\"settings\" role=\"menuitem\" tabindex=\"-1\" href=\"/settings\">Account settings</a></li>\n							<li role=\"presentation\"><a id=\"about\" role=\"menuitem\" tabindex=\"-1\" href=\"/about\">About CLUE</a></li>\n						  </ul>\n						</div>\n					";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n						<p title=\"login\" class=\"cmap-header-link-left-border pull-right\" onclick=\"window.location.href = '/start';\">login</p>\n					";
  }

function program7(depth0,data) {
  
  
  return "\n						<p title=\"tour\" class=\"cmap-header-link-no-border pull-right\" onclick=\"tour();\">Tour</p>\n					";
  }

  buffer += "<div class=\"cmap-header\">\n\n	<!-- large screens -->\n	<div class=\"row hidden-xs\">\n		<div class=\"row\">\n			<div class=\"col-sm-12 cmap-header-toolbar\">\n				<div class=\"col-xs-8\">\n					<p id=\"cmapHeaderMenuButton\" title=\"menu\" class=\"cmap-header-link-no-border pull-left\"><i class=\"fa fa-bars\"></i> Menu</p>\n					<!-- <a href=\"/\"> -->\n						<img class=\"cmap-header-image pull-left\" src=\"//cmap.github.io/cdn/img/logos/linscloud_logo_RGB_small-cloud-web.png\">\n					<!-- </a> -->\n					";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<p id=\"cmapHeaderMenuAppDescription\" title=\"description\" class=\"cmap-header-subtitle pull-left\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n				</div>\n\n				<div class=\"col-xs-4\">\n					";
  stack1 = helpers['if'].call(depth0, depth0.user, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n					<p class=\"cmap-header-splitter pull-right\"> </p>\n					";
  stack1 = helpers['if'].call(depth0, depth0.tour, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</div>\n	</div>\n\n\n\n	<!-- small screens -->\n	<div class=\"row visible-xs\">\n		<div class=\"row\">\n		    <h3 class=\"col-sm-offset-1 col-sm-10 cmap-title-text cmap-center-text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n		</div>\n		<div class=\"row\">\n			<p class=\"col-sm-offset-1 col-sm-10 text-muted cmap-subhead-text cmap-center-text\">";
  if (stack1 = helpers.subtitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subtitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n		</div>\n	</div>\n\n	<!-- spacer -->\n	<div class=\"cmap-spacer-large\"></div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["CMapPertSearchBar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<input class=\"typeahead form-control col-lg-12\" autocomplete=\"off\" type=\"text\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-provide=\"typeahead\" id=\"search\">";
  return buffer;
  });

this["BaristaTemplates"]["CMapUserCard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n                    <img src=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" alt=\"\" class=\"cmap-user-badge pull-right\" />\n                ";
  return buffer;
  }

  buffer += "<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"cmap-card-wrapper ";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <div class=\"cmap-user-card row\">\n        <div class=\"col-xs-6\">\n            <h1 class=\"cmap-user-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n            <p class=\"cmap-user-username\">";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n            <p class=\"cmap-user-email\">";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"col-xs-6\">\n            <div class=\"cmap-user-image-container\">\n                ";
  stack1 = helpers.each.call(depth0, depth0.badges, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["BaristaTemplates"]["TypeaheadItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tt-suggestion\"><span class=\"label\" style=\"background-color: ";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.type) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.type; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span> ";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  });

this["BaristaTemplates"]["d3_target"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "px\"></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div id=\"";
  if (stack1 = helpers.div_string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.div_string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  if (stack1 = helpers.span_class) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.span_class; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" style=\"height:120px\"></div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.height, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
//		Barista.js 0.2.0
//		(c) 2014 Corey Flynn, Broad Institute.
//		For all documentation:
//		http://cmap.github.io/barista

// ### Initial Setup
// build the top level namespace.  All Barista components will be exposed through this object
var Barista = {};

// current version of the library
Barista.VERSION = '0.2.0';

// build objects to be extended for Models, Collections, and Views
Barista.Models = {};
Barista.Collections = {};
Barista.Views = {};

// build an array to contain backing datasets definitions
Barista.Datasets = {};

// build a set of configuration attributes that are referenced throughout the
// library
Barista.APIURL = '//api.lincscloud.org';

// build an object of utilities that we need to make sure are not overwritten
Barista.Utils = {cookie: $.cookie};

// # **CellHistologyDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellHistologyDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellHistology:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellHistology',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: "",

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_histology":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_histology and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_histology);
						object_map[element.cell_histology] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Histology',
							search_column: 'cell_histology',
							color: '#BB4D8A',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellID:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellID',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url, query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_id":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('')
				} ,

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_id and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_id);
						object_map[element.cell_id] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell ID',
							search_column: 'cell_id',
							color: '#CC79A7',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellLineageDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular Contexts available in the Connectivity Map

// CellLineageDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellLineage:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellLineage',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"cell_lineage":{"$regex":"^' + query + '", "$options":"i"}}',
						'&l=10',
						'&s={"cell_id":1}'].join('');
				} ,

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its cell_lineage and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.cell_lineage);
						object_map[element.cell_lineage] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Cell Lineage',
							search_column: 'cell_lineage',
							color: '#DDA6C4',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CellMutationDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Cellular mutation annotations available in the Connectivity Map

// CellMutationDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CellMutation:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CellMutation',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/cellinfo?',
						'q={"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}',
						'&d=mutations'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = response;

					// filter the list based on the query.  self comes from the closure in the view that calls the
					// dataset. It shold be a reference to the view that is consuming the dataset.  That view should
					// have a typeahead elment in it somewhere
					var re = new RegExp($(".typeahead",self.div_string).val(),"i");
					auto_data = _.filter(auto_data,function(mutation){return re.test(mutation);});

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: item
						}
						_.extend(datum,{
							type: 'Cell Mutation',
							search_column: 'mutations',
							color: '#999999',
						});
						datum_list.push(datum);
					});

					// return the processed list of datums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **CompoundPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// CompoundPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ CompoundPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'CompoundPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":"trt_cp"}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **GeneticPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// GeneticPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ GeneticPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'GeneticPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$in":["trt_sh","trt_oe","trt_oe.mut"]}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **JobIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job IDs available in the Connectivity Map

// JobIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"job_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.job_id);
                        object_map[element.job_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job',
                            search_column: 'job_id',
                            color: '#BDBDBD',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **JobNameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job IDs available in the Connectivity Map

// JobNameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobName:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobName',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                reomote: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"params.rpt":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"job_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.params.rpt);
                        object_map[element.params.rpt] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Job Name',
                            search_column: 'params.rpt',
                            color: '#77A2A6',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **JobStatusDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// job Statuses available in the Connectivity Map

// JobStatusDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { JobStatus:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'JobStatus',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"status":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"status":1}'].join('')
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its status and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.status);
                        object_map[element.status] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Status',
                            search_column: 'status',
                            color: '#B14A4E',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **P100PertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// P100 Perturbation IDs available in the Connectivity Map

// P100PertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ P100PertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'P100PertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: #7bd9e4">P100</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return ['//prefix:8080/p100/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **PRISMPertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// PRISM Perturbation IDs available in the Connectivity Map

// PRISMPertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ PRISMPertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'PRISMPertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: #8387e6">PRISM</span><span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use cellinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/prism/v1/profileinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}}',
						'&f={"pert_iname":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('')
				},

				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						_.extend(datum,{
							type: 'Chemical Reagent',
							color: '#E69F00',
						});
						datum_list.push(datum);
						return datum_list;
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **PertINameDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Perturbation IDs available in the Connectivity Map

// PertINameDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
	{ PertIName:
			{
			// only return 6 items at a time in the autocomplete dropdown
			limit: 6,

			// provide a name for the default typeahead data source
			name: 'PertIName',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: '',

				replace: function(url,query){
					query = (query[0] === "*") ? query.replace("*",".*") : query;
					return [Barista.APIURL + '/a2/pertinfo?',
						'q={"pert_iname":{"$regex":"^' + query + '", "$options":"i"}, "pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}',
						'&f={"pert_iname":1,"pert_type":1}',
						'&l=100',
						'&s={"pert_iname":1}'].join('');
				},

				dataType: 'jsonp',

				filter: function(response){
					var genetic_types = ["trt_sh","trt_oe","trt_sh.cgs"];
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// add cell lines if required
					// if (self.match_cell_lines){
					// 	auto_data = auto_data.concat(self.cell_lines);
					// }

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						}
						if (genetic_types.indexOf(object_map[item].pert_type) != -1){
							_.extend(datum,{
								type: 'Genetic Reagent',
								color: '#0072B2',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}
						if (object_map[item].pert_type === 'trt_sh.css' ){
							_.extend(datum,{
								type: 'Seed Sequence',
								color: '#009E73',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}
			}
		}
	}
);

// # **ToolIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// Tool IDs available in the Connectivity Map

// ToolIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { ToolID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'ToolID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"tool_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"tool_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its tool_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.tool_id);
                        object_map[element.tool_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Tool',
                            search_column: 'tool_id',
                            color: '#005CF2',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **UserIDDataset**
// An object that extends Barista.Datasets to specify a backing dataset for
// user IDs available in the Connectivity Map

// UserIDDataset is typically not used directly, rather it's content
// is extracted from Barista.Datasets in views such as CMapSearchView

Barista.Datasets = _.extend(Barista.Datasets,
    { UserID:
            {
            // only return 6 items at a time in the autocomplete dropdown
            limit: 6,

            // provide a name for the default typeahead data source
            name: 'UserID',

            // the template to render for all results
            template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

            // use twitter's hogan.js to compile the template for the typeahead results
            engine: Hogan,

            remote: {
                // set the remote data source to use cellinfo with custom query params
                url: '',

                replace: function(url,query){
                    query = (query[0] === "*") ? query.replace("*",".*") : query;
                    return [Barista.APIURL + '/compute_status?',
                          'q={"user_id":{"$regex":"^' + query + '", "$options":"i"}}',
                          '&l=10',
                          '&s={"user_id":1}'].join('');
                },

                dataType: 'jsonp',

                filter: function(response){
                    var datum_list = [];
                    var auto_data = [];
                    var object_map = {};

                    // for each item, pull out its job_id and use that for the
                    // autocomplete value. Build a datum of other relevant data
                    // for use in suggestion displays
                    response.forEach(function(element){
                        auto_data.push(element.user_id);
                        object_map[element.user_id] = element;
                    });

                    // make sure we only show unique items
                    auto_data = _.uniq(auto_data);

                    // build a list of datum objects
                    auto_data.forEach(function(item){
                        var datum = {
                            value: item,
                            tokens: [item],
                            data: object_map[item]
                        }
                        _.extend(datum,{
                            type: 'Username',
                            search_column: 'user_id',
                            color: '#B348DA',
                        });
                        datum_list.push(datum);
                    });

                    // return the processed list of datums for the autocomplete
                    return datum_list;
                }
            }
        }
    }
);

// # **CMapPertTypeAlias**

// a utility function to convert standard perturbagen type descriptors into 
// more human friendly strings. Given an input type string, an object is 
// returned with field names of 'name' and 'acronym'.  If the passed string
// is not a recoqnized type, the 'name' and 'acronym' fields are set to the 
// passed string


//		var pert_type_object = CMapPertTypeAlias("trt_cp");
//		pert_type_object.name;
//		pert_type_object.acronym;
Barista.CMapPertTypeAlias = function(input_type){
	switch(input_type){
		case "trt_cp":
			return {name: "small molecule compound", acronym: "SMC"};
		case "trt_sh":
			return {name: "knock down", acronym: "KD"};
		case "trt_oe":
			return {name: "over expression", acronym: "OE"};
		case "trt_oe.mut":
			return {name: "variant", acronym: "VAR"};
		case "DOS":
			return {name: "tool compounds", acronym: "DOS"};
		case "BIOA":
			return {name: "drugs and bioactives", acronym: "BIOA"};
		default:
			return {name: input_type, acronym: input_type};
	}
};
// # **NumbersToSubscript**
// a utility to map numbers in an input string to subscript
Barista.NumbersToSubscript = function(s) {
    if (!s){
        return s;
    }
    var subscript = "₀₁₂₃₄₅₆₇₈₉";
    var re = new RegExp('^[0-9]$');
    var new_s = "";
    s.split("").forEach(function(char){
        if (re.test(char)){
            new_s += subscript[char];
        }else{
            new_s += char;
        }
    });
    return new_s;
}

// # **arrayAverage**

// a utility function to take the average of an array of numeric values

//		//evaluates to 2
//		var a = arrayAverage([1,2,3]);
Barista.arrayAverage = function arrayAverage (arr){
	return _.reduce(arr, function(memo, num){
		return memo + num;
	}, 0) / arr.length;
};
// # **getEmSizeInPixels**

// a utility function to find the size of 1em for the given element id
Barista.getEmSizeInPixels = function(id) {
    var el = document.body;
    return Number(getComputedStyle(el, "").fontSize.match(/(\d+)px/)[1]);
}
// utility function to grab url parameters.
// taken from http://css-tricks.com/snippets/javascript/get-url-variables/
Barista.getQueryVariable = function(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

// # **numberWithCommas**

// a utility function to return a number with commas every three digits
// credit to Elias Zamaria http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
Barista.numberWithCommas = function(x){
    // first check to see if something was passed. if so, convert it
    if (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
};

// # **setAPIPrefilter**

// a utility function to set up
// ajax calls to api.lincscloud.org to pass Barista.user_key as a parameter

// arguments
//
// 1.  {string}  **api_endpoint**  The location of the API endpoint to prefilter call from. defaults to *"api.lincscloud.org"*
Barista.setAPIPrefilter = function(api_endpoint) {
    api_endpoint = (api_endpoint !== undefined) ? api_endpoint : 'api.lincscloud.org';
    // configure ajax calls to add the user key parameter on calls to api.lincscloud.org
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ){
        var re = new RegExp(api_endpoint);
        var re_default = new RegExp('api.lincscloud.org');
        if (re.test(options.url) || re_default.test(options.url)){
            options.data = $.param($.extend(originalOptions.data,{user_key:Barista.user_key}));
        }
    });
};

// # **setAPIURL**

// a utility function to set an APIURL attribute on the Barista object

// arguments
//
// 1.  {string}  **url**  the url for an API endpoint that your would like barista to hit for all API calls. defaults to *'//api.lincscloud.org'*
Barista.setAPIURL = function(url) {
    url = (url !== undefined) ? url : '//api.lincscloud.org';
    // truncate explicit protocols
    url.replace('https://','//');
    url.replace('http://','//');

    // make sure that the first two characters of the url are '//'
    if (url[0].slice(0,2) !== '//'){
        url = '//' + url;
    }
    Barista.APIURL = url;
};

// # **setUserKey**

// a utility function to set a user_key attribute on the Barista object and set up
// ajax calls to api.lincscloud.org to pass that user_key as a parameter

// arguments
//
// 1.  {string}  **key**  The user_key to use or a path to a JSON file containing a user_key attribute, defaults to *""*
Barista.setUserKey = function(key) {
	Barista.setAPIPrefilter();

	// grab the user_key from the url given by string passed in 'key' or set the string itself
	// as user_key if an ajax call to the string fails
	var key_request = $.ajax(key,{dataType: 'json',async: false});
	key_request.done(function(res){
		Barista.user_key = res.user_key;
		return Barista.user_key;
	});
	key_request.fail(function(){
		console.log("could not find a file at " + key + "; setting Barista.user_key to " + key);
		Barista.user_key = key;
		return null;
	});
};

// # **AnalysisHistoryModel**

// A Backbone.Model that represents an analysis history object.
// `pert_model = new AnalysisHistoryModel()`
Barista.Models.AnalysisHistoryModel = Backbone.Model.extend({
    // ### initialize
    // Overides the base Model's initialize method to add the models date attribute and set the cid to the mongo _id field
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
        this.set("rpt",this.get("params").rpt);
        if (this.get("status") === "completed"){
            this.set({view_result_link: '<a href="' + this.get("standard_result") + '"><i class="fa fa-eye"></i></a>'});
        }else{
            this.set({view_result_link: ''});
        }
        this.set({edit: '<i class="fa fa-times-circle cmap-grid-delete-button" onclick="Backbone.trigger(' + "'AnalysisHistoryModel:delete'" + ',' + "'" +  this.get("job_id") + "'" + ')"></i>'});
  }
});

// # **BarPlotModel**
// A Backbone.Model to hold the information needed to make a simple bar plot.  The model includes a title,
// axis title, data, data_labels, and an optional object for metadata on the points in the data.  The meta
// data object should contain attributes for each meta data category and an array of values matching the size
// of the points in the data.  for example:

//		meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

// usage:

//		summly_result = new SummlyResultModel();
Barista.Models.BarPlotModel = Backbone.Model.extend({
	// ### defaults
	// set of model defaults

	// 1.  {String}  **title**  the title of the plot. Defaults to *""*
	// 2.  {String}  **axis_title**  the title of the x_axis. Defaults to *""*
	// 4.  {Array}  **data**  an array of data for the x_axis. Defaults to *[]*
	// 5.  {Array}  **data_labels**  an array of data for the y_axis. Defaults to *[]*
	// 1.  {Object}  **meta_data**  object containing meta data for the points in the plot. Defaults to *{}*
	defaults: {
		title: "",
		axis_title: "",
		data: [],
		data_labels: [],
		meta_data: {}
	}
});

// # **CellCountModel**

// A Backbone.Model that represents the count of a set of cell_lines.  The data model
// captures both the total count of cell lines that meet a search criteria and the count
// of each annotation category for the set of cell lines.

// optional arguments:

// 1.  {string}  **type\_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `cell_count_model = new CellCountModel({type_string: '["trt_sh","trt_oe"]'})`
Barista.Models.CellCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {Number}  **pert\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 2.  {Array}  **pert\_types**  an array of objects representing pert\_type categories to keep track of, defaults to *[{}}]*
  // 3.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    count: 0,
    pert_types: [{}],
    g: "cell_type",
    last_update: (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the cell_info api.  the count and pert_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the pert_params for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var cell_info = Barista.APIURL + '/a2/cellinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      pert_params = {q:'{"pert_iname":{"$in":' + search_string + '},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      pert_params = {q:'{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}', d:"cell_id"};
    }
    if (search_type === "cell") {
      pert_params = {q:'{"cell_id":"' + search_string + '"}', f:'{"cell_id":1}', l:1};
    }

    // run the api request to get the total count of cell lines.
    var self = this;
    var num_perts;
    var t = (new Date()).getTime();
    // if the search type is a "cell", leverage siginfo and cellinfo apis
    if (search_type === "cell") {
      $.getJSON(sig_info,pert_params,function(sig_res) {
        // if there is no reponse, set **pert\_count: num_perts** and **pert\_types: [{}]**
        if (sig_res === 0){
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = sig_res.length;
          var cell_lines = '["' + sig_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":"' + search_string + '"}', g:"cell_type"};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
    }else{
        // if the search type is not "cell", leverage the pertinfo api
        $.getJSON(pert_info,pert_params,function(pert_res) {
        if (pert_res === 0){
          // if there is no reponse, set **pert\_count: num_perts** and **pert\_types: [{}]**
          num_perts = 0;
          self.set({count: num_perts, pert_types: [{}], last_update: t});
        }else{
          // if there is a reponse, update *pert\_count* and *pert\_types*
          num_perts = pert_res.length;
          var cell_lines = '["' + pert_res.join('","') + '"]';
          var cell_params = {q:'{"cell_id":{"$in":' + cell_lines + '}}', g:self.get("g")};
          $.getJSON(cell_info,cell_params,function(cell_res){
            self.set({count: num_perts, pert_types: cell_res, last_update: t});
          });
        }
      });
     }
  }
});

// # **CellModel**

// A Backbone.Model that represents a cell line
// `pert_model = new CellModel()`
Barista.Models.CellModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the cell_id of the perturbagen
	initialize: function(attributes, options) {
		this.cid = this.get('cell_id');
  }
});

// # **CompoundDetailModel**

// A Backbone.Model that represents a single compound's description.  The data
// model captures a number of fields including

// 1. pert_id: the compound's perturbagen identifier
// 2. pert_iname: the compound's standardized name
// 3. pert_summary: a short description of the compound
// 4. pubchem_cid: the PubChem identifier associated with the compound
// 5. wiki_url: wikipedia url

// `pert_detail_model = new CompoundDetailModel()`

Barista.Models.CompoundDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  defaults: {
    pert_id: "",
    pert_iname: "",
    pert_summary: null,
    pubchem_cid: null,
    wiki_url: null,
    molecular_formula: null,
    molecular_wt: null,
    pert_vendor: null,
    num_gold: 0,
    num_sig: 0,
    cell_id: [],
    inchi_key: "",
    structure_url: ""
  },

  // ### fetch
  // fetches new data from the pert_info api. All fields are replaced by the first item
  // that matches the api search_string
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo and retrieve the first result's pert_iname and pert_desc
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {q:'{"pert_type":"trt_cp","pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
                          l:1};

    // run the api request.  If the search string is "", set the short and long
    // description to undefined and trigger a "CompoundDetailModel:ModelIsNull" event.
    // Otherwise, retrive the pert_iname and pert_desc of the response and set
    // them to the model and trigger a "CompoundDetailModel:ModelIsNotNull" event
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
      if (perts == 0 || search_string == ""){
        self.set({pert_id: "",
                  pert_iname: "",
                  pert_summary: null,
                  pubchem_cid: null,
                  wiki_url: null,
                  molecular_formula: null,
                  molecular_wt: null,
                  pert_vendor: null,
                  num_gold: 0,
                  num_sig: 0,
                  cell_id: [],
                  inchi_key: "",
                  structure_url: ""})
        self.trigger("CompoundDetailModel:ModelIsNull");
      }else{
        //   set all fields on the model
        self.set(perts[0]);

        // grab the wikipedia link if it is there
        var wiki_url = null;
        if (perts[0].pert_url){
          var links = perts[0].pert_url.split(',');
          var wiki_re = /wikipedia/
          links.forEach(function(link){
            if (wiki_re.exec(link)){
              wiki_url = link;
            }
          });
        }

        // grab the PubChem ID if it is there.
        var pubchem_cid = null;
        if (perts[0].pubchem_cid){
          pubchem_cid = perts[0].pubchem_cid;
        }

        // grab the pert summary if it is there
        var pert_summary = null;
        if (perts[0].pert_summary){
          pert_summary = perts[0].pert_summary;
        }

        // grab the sstructure_url if it is there and there is a pubchem_cid (i.e. it is public).
        var structure_url = null;
        if (perts[0].structure_url && pubchem_cid){
          structure_url = perts[0].structure_url;
        }

        // set the fields on the model
        self.set({pert_id: perts[0].pert_id,
                  pert_iname: perts[0].pert_iname,
                  pert_summary: pert_summary,
                  pubchem_cid: pubchem_cid,
                  wiki_url: wiki_url,
                  molecular_formula: perts[0].molecular_formula,
                  molecular_wt: perts[0].molecular_wt,
                  pert_vendor: perts[0].pert_vendor,
                  num_gold: perts[0].num_gold,
                  num_sig: perts[0].num_sig,
                  cell_id: perts[0].cell_id,
                  inchi_key: perts[0].inchi_key,
                  structure_url: structure_url,
                  last_update: (new Date()).getTime()});

        // trigger an event to tell us that the model is not null
        self.trigger("CompoundDetailModel:ModelIsNotNull");
      }
      deferred.resolve(self.attributes);
    });
    return deferred;
  }
});

// # **GeneDetailModel**

// A Backbone.Model that represents a single compound's description.  The data
// model captures a number of fields including

// 1. pert_id: the compound's perturbagen identifier
// 2. pert_iname: the compound's standardized name
// 3. pert_summary: a short description of the compound
// 4. pubchem_cid: the PubChem identifier associated with the compound
// 5. wiki_url: wikipedia url

// `pert_detail_model = new GeneDetailModel()`

Barista.Models.GeneDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  defaults: {
    cell_id: [],
    clone_name: null,
    has_kd: false,
    has_oe: false,
    num_gold: null,
    num_inst: null,
    num_sig: null,
    oligo_seq: null,
    pert_id: null,
    pert_iname: null,
    pert_summary: null,
    seed_seq6: null,
    seed_seq7: null,
    sig_id: [],
    sig_id_gold: [],
    target_region: null,
    target_seq: null,
    vector_id: null
  },

  // ### kd_fields
  // kd specific model fields
  kd_fields: ['clone_name','oligo_seq','seed_seq6','seed_seq7','target_region','target_seq','vector_id'],

  // ### array_fields
  // fields that are arrays
  array_fields: ['cell_id','sig_id','sig_id_gold'],

  // ### fetch
  // fetches new data from the pert_info api. All fields are replaced by the first item
  // that matches the api search_string
  fetch: function(search_string){
    // set up a deferred object that can be used by outside functions.  This deferred will be
    // resolved with the contents of the model attributes
    var deferred = $.Deferred();

    // set up the api parameters to make a regular expression matched query against
    // pert_inames in pertinfo
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = params = {
        q:'{"pert_type":{"$in":["trt_sh","trt_oe"]},"pert_iname":{"$regex":"^' + search_string + '", "$options":"i"}}',
        f:'{"pert_iname":1}',
        l:1
    };

    // get annotations for both KD and OE experiments of the matched gene name
    var self = this;
    $.getJSON(pert_info,params,function(perts) {
          if (perts == 0 || search_string == ""){
            // if there is no matched gene, go back to defaults
            self.set(self.defaults);
            self.trigger("GeneDetailModel:ModelIsNull");
          }else{
            // otherwise, populate the model with a combination of KD and OE annotations

            // set up the deferred objects for calls to the pertinfo API
            var search_string = perts[0].pert_iname;
            KD_deferred = self.fetch_pert_type(search_string,"trt_sh");
            OE_deferred = self.fetch_pert_type(search_string,"trt_oe");

            // act on the deferred objects once they are resolved
            $.when(KD_deferred,OE_deferred).done(function(kd_annots, oe_annots){
                if ( kd_annots === null && oe_annots === null ){
                    self.set(self.defaults);
                    self.trigger("GeneDetailModel:ModelIsNull");
                }else{
                    var annots = {pert_type:"gene"};
                    if (kd_annots === null){
                        annots.has_kd = false;
                        annots.has_oe = true;
                        self.set(_.extend(oe_annots.unprefixed,oe_annots.prefixed,annots));
                    }else if (oe_annots === null){
                        annots.has_kd = true;
                        annots.has_oe = false;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,annots));
                    }else{
                        annots.has_kd = true;
                        annots.has_oe = true;
                        self.set(_.extend(kd_annots.unprefixed,kd_annots.prefixed,oe_annots.prefixed,annots));
                    }
                    // trigger an event to tell us that the model is not null
                    self.trigger("GeneDetailModel:ModelIsNotNull");
                }
                deferred.resolve(self.attributes);
            });
          }
        });
        return deferred;
    },

    // ### fetch_pert_type
    // fetches new data from the pert_info API for the given pert_type.
    fetch_pert_type: function(search_string,pert_type){
        // set up a deferred object that we can use in the fetch function above
        var deferred = $.Deferred();

        // set up the api parameters to make an exact matched query against
        // pert_inames in pertinfo and retrieve the first result
        var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
        var params = params = {q:'{"pert_type":"'+ pert_type + '","pert_iname":"' + search_string + '"}',
                              l:1};

        // run the api request.  If the search string is ""resolve the generated promise
        // with a null value, otherwise resolve it with the returned pert annotations
        var self = this;
        $.getJSON(pert_info,params,function(perts) {
            if (perts == 0 || search_string == ""){
                deferred.resolve(null);
            }else{
                var annots = {};
                for (field in perts[0]){
                    annots[pert_type + '_' + field] = perts[0][field];
                }
                deferred.resolve({prefixed: annots, unprefixed: perts[0]});
            }
        });

        return deferred;
    }
});

// # **GenericCountModel**

// A Backbone.Model that represents the count of a set CMap databbase items.  The data model
// captures the total count of perturbagens that meet a search criteria.

// optional arguments:

// 1.  {string}  **search_field**  the document field the model with count over upon fetching data, defaults to *"pert_iname"*
// 2.  {string}  **url**  the url of the api service to fetch data from, defaults to *"//api.lincscloud.org/a2/pertinfo"*

// `generic_count_model = new GenericCountModel()`

Barista.Models.GenericCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {string}  **search_field**  the document field the model with count over upon fetching data, defaults to *"pert_iname"*
  // 2.  {string}  **url**  the url of the api service to fetch data from, defaults to *"//api.lincscloud.org/a2/pertinfo"*
  defaults: {
    "search_field": "pert_iname",
    "url": "//api.lincscloud.org/a2/pertinfo",
    "count": 0,
    "last_update": (new Date()).getTime(),
    "search_string": "",
    "distinct": false
  },

  // ## initialize
  // custom initialization to make sure we have the correct url for jsonp
  initialize: function(){
    var re = new RegExp("/?callback=/?");
    if (!re.test(this.get("url"))){
      this.set({"url": this.get("url") + "?callback=?"});
    }
  },

  // ### fetch
  // fetches new data from the API.  the count is updated with a new
  // count based on the results of the api call
  fetch: function(search_string){
    // update the model's search string attribute
    this.set("search_string",search_string);

    // set up API call parameters
    search_string = (search_string[0] === "*") ? search_string.replace("*",".*") : search_string;
    var params = {q:'{"' + this.get("search_field") + '":{"$regex":"^' + search_string + '","$options":"i"}}',
              c:true};
    if (this.get("distinct")){
        _.extend(params,{d:this.get("search_field")});
    }

    // run the api request
    var self = this;
    var count;
    $.getJSON(this.get("url"),params,function(res) {
      if (res === 0){
        count = 0;
      }else{
        count = res.count;
      }
      var t = (new Date()).getTime();
      self.set({count: count,last_update: t});
    });
  }
});

// # **GenericMongoModel**

// A Backbone.Model that represents a generic MongoDB object.  All fields in the document
// are passed to the model as normal and a date attribute is set from the _id field of the mongo document
// `pert_model = new GenericMongoModel()`
Barista.Models.GenericMongoModel = Backbone.Model.extend({
    // ### initialize
    // Overides the base Model's initialize method to add the models date attribute and set the cid to the mongo _id field
    initialize: function(attributes, options) {
        this.cid = this.get('_id')
        this.set("date", new Date(parseInt(this.cid.substring(0,8), 16)*1000));
  }
});

// # **HeatmapModel**

// A Backbone.Model that represents the data in a heatmap.  The model contains
// a two dimensional array of numbers, row and columns labels, and a title.

// example usage:

// 			heatmap_model = new HeatmapModel();

// optional arguments

// 1.  {Array}  **data**  the data object to use in the heatmap. defualts to *[[1,2],[3,4]]*
// 2.  {Array}  **rid**  the row labels to use in the heatmap. defualts to *['1','2']*
// 3.  {Array}  **cid**  the column labels to use in the heatmap. defualts to *['1','2']*
// 4.  {Array}  **annots**  optional annotations categories to show under the heatmap. defualts to *undefined*
// 4.  {Array}  **annots_label**  optional label for annotations. defualts to *undefined*
// 5.  {String}  **title**  the title to use in the plot, defaults to *""*

//			heatmap_model = new HeatmapModel({data: [[1,2],[3,4]],
//											rid: ['1','2'],
//											cid: ['1','2'],
//											annots: ['1','2'],
//											title: ""});
Barista.Models.HeatmapModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {Array}  **data**  the data object to use in the heatmap. defualts to *[[1,2],[3,4]]*
	// 2.  {Array}  **rid**  the row labels to use in the heatmap. defualts to *['1','2']*
	// 3.  {Array}  **cid**  the column labels to use in the heatmap. defualts to *['1','2']*
	// 4.  {Array}  **annots**  optional annotations categories to show under the heatmap. defualts to *undefined*
	// 5.  {String}  **title**  the title to use in the plot, defaults to *""*
	defaults: {
		data: [[1,2],[3,4]],
		rid: ['1','2'],
		cid: ['1','2'],
		annots: undefined,
		title: "",
		last_update: (new Date()).getTime()
	}
})
// # **PertCellBreakdownModel**

// A Backbone.Model that represents the cell line based breakdown of a set of perturbagens.  The number of
// perturbagens matching a query is counted for each cell line. Data for all cell lines that contain a match
// to the query are represented in the model

// `pert_cell_breakdown_model = new PertCellBreakdownModel()`
Barista.Models.PertCellBreakdownModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **pert\_filter**  the current filter to be used with api calls, defaults to *""*
  // 2.  {Object}  **tree\_object**  an object that describes the structured tree data representing cell_line counts, defaults to *{children:[]}*
  defaults: {
    "filter": "",
    "tree_object": {children:[]}
  },

  // ### fetch
  // fetches new data from the pert_info api.  the tree_object data is updated
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi"){
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$in":' + search_string + '}}', g:"cell_id"};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}', g:"cell_id"};
    }
    if (search_type === "cell") {
      params = {q:'{' + this.get('filter') + '"pert_iname":{"$regex":""}}', g:"cell_id"};
    }


    // run the api request
    var self = this;
    $.getJSON(pert_info,params,function(response) {
      if (response === 0){
        children = [];
      }else{
        children = response;
      }
      if (search_type === "cell") {
        children = _.filter(children,function(o){return o._id == search_string;});
      }
      var t = (new Date()).getTime();
      self.set({tree_object: {name:"root", children:children}, last_update: t});
    });
  }
});
// # **PertCountModel**

// A Backbone.Model that represents the count of a set of perturbagens.  The data model
// captures both the total count of perturbagens that meet a search criteria and the count
// of each annotation category for the set of perturbagens.

// optional arguments:

// 1.  {string}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `count_model = new PertCountModel({type_string: '["trt_sh","trt_oe"]'})`

Barista.Models.PertCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*
  // 2.  {Number}  **pert\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 3.  {Array}  **pert\_types**  an array of objects representing pert\_type categories to keep track of, defaults to *[{}}]*
  // 4.  {String}  **pert\_type\_field**  a field name over which to look for pert_types.  This runs an aggregated count over the specified field name in the Connectivity Map database, defaults to *'pert_icollection'*
  // 5.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    "type_string": '["trt_cp"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the pert_info api.  the count and pert_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var pert_info = Barista.APIURL + '/a2/pertinfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(pert_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(pert_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});

// # **PertDetailModel**

// A Backbone.Model that represents a single perturbagen's description.  The data
// model captures annotation data from compounds or genes.  To do this, the model
// uses CompoundDetailModel and GeneDetailModel under the hood and pulls in their
// attributes depending on how the model's fetch method is called

// `pert_detail_model = new PertDetailModel()`

Barista.Models.PertDetailModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters.  This an incomplete list of defaults, only those
  // that are common to all perturbagens
  defaults: {
    cell_id: [],
    num_gold: null,
    num_inst: null,
    num_sig: null,
    pert_id: null,
    pert_iname: null,
    pert_type: null,
    sig_id: [],
    sig_id_gold: []
  },

  // ### compound_sub_model
  // a sub-model to be used when the PertDetailModel model needs to fetch Compound annotations
  compound_sub_model: new Barista.Models.CompoundDetailModel(),

  // ### gene_sub_model
  // a sub-model to be used when the PertDetailModel model needs to fetch Gene annotations
  gene_sub_model: new Barista.Models.GeneDetailModel(),

  // ### fetch
  // fetches new data from the pert_info API. depending on the model_type parameter,
  // the method calls the appropriate fetch method for the given sub model type and fills
  // the PertDetailModel's attributes with that of the sub model
  fetch: function(search_string, model_type){
      var self = this;
      var deferred = $.Deferred();
      switch (model_type){
      case "compound":
          this.compound_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      case "gene":
          this.gene_sub_model.fetch(search_string).then(function(attributes){
              self.clear().set(attributes);
              deferred.resolve();
          });
          break;
      }
      return deferred;
  }
});

// # **PertModel**

// A Backbone.Model that represents a single perturbagen
// `pert_model = new PertModel()`
Barista.Models.PertModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the pert_id of the perturbagen
	initialize: function(attributes, options) {
		this.cid = this.get('pert_id');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}
  }
});
// # **ScatterPlotModel**
// A Backbone.Model to hold the information needed to make a simple scatter plot.  The model includes a title,
// x and y axis titles, x and y data, and an optional object for metadata on the points in the data.  The meta
// data object should contain attributes for each meta data category and an array of values matching the size
// of the points in the data.  for example:

//		meta_data = {'dose: [1,2,3]', timepoint: ['6H','6H','6H']}

// usage:

//		summly_result = new SummlyResultModel();
Barista.Models.ScatterPlotModel = Backbone.Model.extend({
	// ### defaults
	// set of model defaults

	// 1.  {String}  **title**  the title of the plot. Defaults to *""*
	// 2.  {String}  **x_axis_title**  the title of the x_axis. Defaults to *""*
	// 3.  {String}  **y_axis_title**  the title of the y_axis. Defaults to *""*
	// 4.  {Array}  **x_data**  an array of data for the x_axis. Defaults to *[]*
	// 5.  {Array}  **y_data**  an array of data for the y_axis. Defaults to *[]*
	// 1.  {Object}  **meta_data**  object containing meta data for the points in the plot. Defaults to *{}*
	defaults: {
		title: "",
		x_axis_title: "",
		y_axis_title: "",
		x_data: [],
		y_data: [],
		meta_data: {}
	}
});
// # **SigCountModel**

// A Backbone.Model that represents the count of a set of signatures.  The data model
// captures both the total count of signatures that meet a search criteria and the count
// of each annotation category for the set of signatures.

// optional arguments:

// 1.  {string}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*

// `count_model = new SigCountModel({type_string: '["trt_sh","trt_oe"]'})`

Barista.Models.SigCountModel = Backbone.Model.extend({
  // ### defaults
  // describes the model's default parameters

  // 1.  {String}  **type_string**  the string of pert_types that will be search upon fetching data, defaults to *'["trt_sh","trt_oe"]'*
  // 2.  {Number}  **sig\_count**  the number of perturbagens matching an api query, defaults to *0*
  // 3.  {Array}  **sig\_types**  an array of objects representing sig\_type categories to keep track of, defaults to *[{}}]*
  // 4.  {String}  **sig\_type\_field**  a field name over which to look for pert_types.  This runs an aggregated count over the specified field name in the Connectivity Map database, defaults to *'pert_icollection'*
  // 5.  {Date}  **last\_update**  a timestamp of the latest model update, defaults to the current time
  defaults: {
    "type_string": '["trt_sh","trt_oe","trt_oe.mut"]',
    "count": 0,
    "pert_types": [{}],
    "pert_type_field": "pert_icollection",
    "last_update": (new Date()).getTime()
  },

  // ### fetch
  // fetches new data from the sig_info api.  the count and sig_types data
  // is replaced with new data coming from the api call
  fetch: function(search_string,search_type){
    // depending on the type of query we are making, set up the q param for the api call.
    // if we are doing a single query, match that query as a regular expression. If we are
    // doing a multi query, match exact names. If we are doing a cell line query, only match
    // cell\_ids
    var sig_info = Barista.APIURL + '/a2/siginfo?callback=?';
    var params = {};
    if (search_type === "multi") {
      search_string = '["' + search_string.split(/[:, ]/).join('","') + '"]';
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$in":' + search_string + '}}',c:true};
    }
    if (search_type === "single" || search_type === undefined){
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"^' + search_string + '","$options":"i"}}',c:true};
    }
    if (search_type === "cell") {
      params = {q:'{"pert_type":{"$in":' + this.get('type_string') + '},"pert_iname":{"$regex":"","$options":"i"},"cell_id":"' + search_string + '"}', c:true};
    }

    // run the api request
    var self = this;
    var num_perts;
    $.getJSON(sig_info,params,function(perts) {
      if (perts === 0){
        num_perts = 0;
      }else{
        num_perts = perts.count;
      }
      var t = (new Date()).getTime();
      params = _.omit(params,'c');
      params = _.extend(params,{g:self.get('pert_type_field')});
      $.getJSON(sig_info, params, function(pert_types){
        self.set({count: num_perts, pert_types: pert_types, last_update: t});
      });
    });
  }
});
// # **SignatureModel**

// A Backbone.Model that represents a single signature
// `pert_model = new SignatureModel()`
Barista.Models.SignatureModel = Backbone.Model.extend({
	// ### initialize
	// Overides the base Model's initialize method to set the model's cid to the sig_id of the perturbagen
	initialize: function(attributes, options) {
		// set the unique collection identifier to match the sig_id
		this.cid = this.get('sig_id');
		
		// generate an html label for pert_type
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			this.set({pert_type_label: '<span class="label" style="background-color: #BDBDBD">' + pert_type + '</span>'});
		}

		// generate an html label for is_gold
		var is_gold = this.get('is_gold');
		if (is_gold){
			this.set({is_gold_label: '<span class="label" style="background-color: #F0E442; color:gray">Gold</span>'});
		}else{
			this.set({is_gold_label: '<span class="label">Not Gold</span>'});
		}
  }
});
// # **SummlyResultModel**

// A Backbone.Model that represents the a single CMap Summly result. A single
// result is composed of the connection between two pert_inames (a query and a target), 
// the component data that went into computing the summly result, and the statistics 
// of the summly computation

//		summly_result = new SummlyResultModel();
Barista.Models.SummlyResultModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {String}  **query**  the query perturbagen (pert_iname), defaults to *""*
	// 2.  {String}  **target**  the target perturbagen (pert_iname), defaults to *""*
	// 3.  {Number}  **summly_score**   summarized connectivity score across cell types, defaults to *-666*
	// 4.  {Number}  **summly_rank**  summarized percent rank across cell types, defaults to *-666*
	// 5.  {Number}  **specificity**  fraction of background queries that score/rank higher than the observed connection, defaults to *-666*
	// 6.  {Object}  **cell_line_scores**  the connectivity map scores in each cell line for the target perturbagen , defaults to *{}*
	defaults: {
		query: "",
		target: "",
		summly_score: -666,
		summly_rank: -666,
		specificity: -666,
		cell_line_scores: {}
	},

	// ### initialize
	// overides the base model's initialize method to set the model's cid to 
	// the summly_id
	initialize: function(attributes,options){
		this.cid = this.get('target');
		var pert_type = this.get('pert_type');
		switch(pert_type){
			case "trt_cp": this.set({pert_type_label: '<span class="label" style="background-color: #E69F00">SMC</span>'}); break;
			case "trt_oe": this.set({pert_type_label: '<span class="label" style="background-color: #D55E00">OE</span>'}); break;
			case "trt_sh": this.set({pert_type_label: '<span class="label" style="background-color: #56B4E9">KD</span>'}); break;
			default: this.set({pert_type_label: '<span class="label">' + pert_type + '</span>'});
		}
	}
});
// # **TickModel**

// A Backbone.Model that represents the data required to build a CMapTickView.  The model contains
// a data object that has keys for each row to display in the view and array values for each tick
// to display in each row. An example data object might look like this:

//			{PC3: [.23,-.28], MCF7: [-0.6]}

// example usage

//			tick_model = new TickModel();
Barista.Models.TickModel = Backbone.Model.extend({
	// ### defaults
	// set up defaults for model values

	// 1.  {String}  **title**  the title to use in the plot, defaults to *""*
	// 2.  {Object}  **data_object**  the data object to use when plotting. defualts to *{}*
	defaults: {
		title: "",
		data_object: {}
	}
});
// # **AnalysisHistoryCollection**
// A Backbone.Collection that represents a set of analysis history objects.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'//api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

Barista.Collections.AnalysisHistoryCollection = Backbone.Collection.extend({
    // #### initialize
    initialize: function(){
        // #### url
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/compute_status?callback=?';
    },

    // #### model
    // the model used for the collection objects.
    model: Barista.Models.AnalysisHistoryModel,

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ### user_id
    // the user_id to search jobs for. Forcing this to be set prevents us from searching other users jobs
    user: undefined,

    // ## getData
    // `AnalysisHistoryCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // set up the query parameter for user_id
        var user_q = "";
        if (self.user){
            user_q = '"user_id":"' + self.user + '",';
        }
        switch (search_type){
        case "job_id":
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "status":
            this.q_param = '{' + user_q + '"status":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "tool_id":
            this.q_param = '{' + user_q + '"tool_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        case "job_name":
            this.q_param = '{' + user_q + '"params.rpt":"' + search_string + '","status":{"$ne":"deleted"}}';
            break;
        case "user_id":
            this.q_param = '{' + user_q + '"user_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
            break;
        default:
            this.q_param = '{' + user_q + '"job_id":{"$regex":"' + search_string + '", "$options":"i"},"status":{"$ne":"deleted"}}';
        }


        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            sk: this.skip,
            s: '{"_id":-1}'};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
        // and resolve a deferred that we set up as a return value
        var def = $.Deferred();
        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            def.resolve();
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','sk','s']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        return def;
    }
});

// # **CellCollection**
// A Backbone.Collection that represents a set of cell types.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'//api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new CellCollection({model: PertModel,
                                          // url: Barista.APIURL + '/a2/pertinfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.CellCollection = Backbone.Collection.extend({
    // #### initialize
    initialize: function(){
        // #### url
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/cellinfo?callback=?';
    },

    // #### model
    // the model used for the collection objects.
    model: Barista.Models.CellModel,

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ## getData
    // `PertCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_column**  the column to query the search_string against, defaults to "cell_id"
    // 3.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 4.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_column,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_column = (search_column !== undefined) ? search_column : 'cell_id';
        //TODO big hack to adapt to GridView implementation
        if (this.search_column == 'single') {
          this.search_column = 'cell_id';
        }
        // this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        if (this.search_column == 'mutations'){
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"mutations":"' + this.search_string + '"}';
        }else{
            this.q_param = '{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]},"' + this.search_column + '":' + '{"$regex":"^' + this.search_string + '","$options":"i"}}';
        }

        // build a parameter object for the api call
        // TODO-remove: alert(this.q_param);
        var params = {q: this.q_param,
            l: this.limit,
            // s: this.s_param, // no sorting yet
            sk: this.skip};

        $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
            self.trigger("fetch");
        });
    }
});

// # **GenericJSONCollection**
// A Backbone.Collection that represents and arbitrary set of objects stored
// in a JSON file. The JSON file is assumed to contain a top level array
// containing objects.  Each object in the array is modeled as a base
// Backbone.Model inside of the collection

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'data.json'*
// 3.  {String}  **skip**  the skip parameter used in method calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

//		pert_collection = new PertCollection({model: PertModel,
//											url: Barista.APIURL + '/a2/pertinfo?callback=?',
//											skip: 0,
//											isLoading: false});
Barista.Collections.GenericJSONCollection = Backbone.Collection.extend({
	// ### model
	// the model used for collection objects
	model: Barista.Models.PertModel,

	// #### url
    // the url from which model data is fetched
    url: 'data.json',

    // #### skip
    // the skip parameter used in api calls when the collection is updated. 
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation. 
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getData
    // `GenericJSONCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    // 
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*
    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // fetch data from the given url.  If the url attribute is a string, fetch data via an ajax
        // request. Read each returned item in the response into a new PertModel.  If it is an object, 
        // assume it is an array of data and read each array item into a new PertModel
        if (typeof(this.url) == 'object'){
            this.url.forEach(function(o){self.add(new Barista.Models.PertModel(o));});
            // set the collection's maxCount attribute to the length of the collection
            this.maxCount = this.models.length;
        }else{
            $.getJSON(this.url,function(res){
                res.forEach(function(o){
                    self.add(new PertModel(o));
                });
                // set the collection's maxCount attribute to the length of the collection
                this.maxCount = this.models.length;
            });
        }
	}
});
// # **PertCollection**
// A Backbone.Collection that represents a set of perturbagens.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'//api.lincscloud.org/a2/pertinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new PertCollection({model: PertModel,
                                          // url: Barista.APIURL + '/a2/pertinfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.PertCollection = Backbone.Collection.extend({
    // #### initialize
    initialize: function(){
        // #### url
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
    },

    // #### model
    // the model used for the collection objects.
    model: Barista.Models.PertModel,

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getData
    // `PertCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : '';
        this.search_type = (search_type !== undefined) ? search_type : '';
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"^' + search_string + '","$options":"i"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
        }
        if (search_type === "cell"){
            this.q_param = '{"cell_id":"' + search_string + '"}';
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_iname":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_iname":1,"pert_type":1,"pert_id":1,"num_sig":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		$.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

// # **SignatureCollection**
// A Backbone.Collection that represents a set of signatures.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *PertModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'//api.lincscloud.org/a2/siginfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

// `pert_collection = new SignatureCollection({model: PertModel,
                                          // url: Barista.APIURL + '/a2/siginfo?callback=?',
                                          // skip: 0,
                                          // isLoading: false});`

Barista.Collections.SignatureCollection = Backbone.Collection.extend({
    // #### initialize
    initialize: function(){
        // #### url
        // the url from which model data is fetched
        this.url =  Barista.APIURL + '/a2/siginfo?callback=?';
    },

    // #### model
    // the model used for the collection objects.
    model: Barista.Models.SignatureModel,

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ### gold_only
    // boolean flag telling the collection to only include gold Connectivity Map signatures
    gold_only: true,

    // ### getData
    // `SignatureCollection.getData(search_string,search_type,limit)`

    // Gets additional data from the specified url and stores them as models in the collection

    // arguments
    //
    // 1.  {string}  **search\_string**  the string on which a regex search into the api at the collections url will be performed, defaults to *""*
    // 2.  {string}  **search\_type**  the type of search that will be performed, defaults to *"single"*
    // 3.  {number}  **limit**  the number of models to be fetched, defaults to *30*

    getData: function(search_string,search_type,limit){
        var self = this;
        // set **isLoading** to true so we don't constantly make api calls before the data comes back
        this.isLoading = true;

        // store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = (search_string !== undefined) ? search_string : "";
        this.search_type = (search_type !== undefined) ? search_type : "";
        this.limit = (limit !== undefined) ? limit : 30;

        // depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === ""){
            if (this.gold_only){
                this.q_param = '{"pert_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"pert_id":"' + search_string + '"}';
            }
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            if (this.gold_only){
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"is_gold":1,"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }else{
                this.q_param = '{"pert_id":{"$in":"' + search_string + '"},"pert_type":{"$regex":"^(?!.*c[a-z]s$).*$"}}';
            }
        }
        if (search_type === "cell"){
            if (this.gold_only){
                this.q_param = '{"cell_id":"' + search_string + '","is_gold":1}';
            }else{
                this.q_param = '{"cell_id":"' + search_string + '"}';
            }
        }

        // set up the sorting paramter for the api call
        this.s_param = '{"pert_id":1}';

        // set up a filtering parameter for the api call
        this.f_param = '{"pert_id":1,"pert_type":1,"pert_iname":1,"pert_itime":1,"pert_idose":1,"cell_id":1,"sig_id":1,"is_gold":1,"distil_ss":1,"distil_cc_q75":1,"ngenes_modulated_dn_lm":1,"ngenes_modulated_up_lm":1}';

        // build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: this.s_param,
            f: this.f_param,
            sk: this.skip};

        // make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		var getData_promise = $.getJSON(this.url, params, function(res){
            self.set(res,{remove: false});
            self.isLoading = false;
        });

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount == Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }

        // return the getData_promise for use with downstream functions if we want
        return getData_promise;
    }
});

// # **SummlyResultCollection**
// A Backbone.Collection that represents a set of CMap Summly results.  This collection is suitable for
// internal use in GridView.

// optional arguments:

// 1.  {Backbone.Model}  **model**  the model used for the collection objects. defaults to *SummlyResultModel*
// 2.  {String}  **url**  the url from which model data is fetched. defaults  to *'//api.lincscloud.org/a2/summlyinfo?callback=?'*
// 3.  {String}  **skip**  the skip parameter used in api calls when the collection is updated. defaults to *0*
// 4.  {Boolean}  **isLoading**  indicates wether or not the collection is in the middle of a fetch operation. defaults to *false*

//		pert_collection = new PertCollection({model: PertModel,
//											url: Barista.APIURL + '/a2/pertinfo?callback=?',
//											skip: 0,
//											isLoading: false});

Barista.Collections.SummlyResultCollection = Backbone.Collection.extend({
	// #### initialize
	initialize: function(){
		// #### url
		// the url from which model data is fetched
		this.url =  Barista.APIURL + '/a2/pertinfo?callback=?';
	},

	// ### model
	// the model used for collection objects
	model: Barista.Models.SummlyResultModel,

    // #### skip
    // the skip parameter used in api calls when the collection is updated.
    skip: 0,

    // #### isLoading
    // indicates wether or not the collection is in the middle of a fetch operation.
    isLoading: false,

    // ### maxCount
    // the maximum size of the collection. defaults to Infinity
    maxCount: Infinity,

    // ## getDataMock
    //			PertCollection.getDataMock(limit);

    // Generates additional fake data objects and stores them as models in the collection

    // arguments
    //
    // 1.  {number}  **limit**  the number of models to be fetched, defaults to *30*
    getData: function(search_string,search_type,limit){
		var self = this;
		// set **isLoading** to true so we don't constantly make api calls before the data comes back
		this.isLoading = true;

		// store the value of **search\_string**, **search\_type**, and **limit** on the collection object
        this.search_string = search_string;
        this.search_type = search_type;
        this.limit = (limit !== undefined) ? limit : 30;

		// depending on the type of query we are making, set up the q param for the api call.
        // if we are doing a single query, match that query as a regular expression. If we are
        // doing a multi query, match exact names. If we are doing a cell line query, only match
        // cell\_ids
        if (search_type === "single" || search_type === undefined){
            this.q_param = '{"pert_iname":{"$regex":"' + "" + '","$options":"i"}}';
        }
        if (search_type === "multi"){
            search_string = '["' + search_string.split(":").join('","') + '"]';
            this.q_param = '{"pert_iname":{"$in":"' + search_string + '"}}';
        }

		// build a parameter object for the api call
        var params = {q: this.q_param,
            l: this.limit,
            s: '{"num_gold":1}',
            sk: Math.round(Math.random() * (40000 - 30))};

		// make the api call and store the results as individual models in the collection.
        // we don't remove old models in this case as we want to support continuous building
        // of the model list from a remote api.  On success, set **isLoading** back to false
		$.getJSON(this.url,params,function(res){
			var data = [];
			var cell_lines = ["ASC","HA1E","HCC515","NEU","NPC","PHH","SKL",
							"MCF7","HEPG2","VCAP","A549","A375","HT29","PC3"];
			res.forEach(function(o){
				var random_lines = cell_lines.slice(0, Math.round(Math.random()*14) + 1);
				var random_line_scores = {};
				random_lines.forEach(function(line){
					random_line_scores[line] = [Math.random()*2 - 1];
				});
				data.push({query: search_string,
							target: o.pert_iname,
							pert_type: o.pert_type,
							summly_score: Math.random(),
							summly_rank: Math.random(),
							specificity: Math.random(),
							cell_line_scores: random_line_scores});
			});
			self.add(data);
			self.isLoading = false;
		});

        // make a second api call to find the maximum number of items in the collection
        // and set that as an attribute on it
        if (this.maxCount < Infinity){
            params = _.omit(params,['l','s','f','sk']);
            params = _.extend(params,{c: true});
            $.getJSON(this.url,params,function(res){
                self.maxCount = res.count;
            });
        }
    }
});

// # **BaristaBaseView**
// A Backbone.View the serves as the base view for other views in the barista library.  BaristaBaseView provides common
// functionality for views including standard initialization, redraw, render, template compilation, and png export functions.
// This view by itself will construct a single panel with a png export option, but it is meant to be used as the base view
// that more complex views extend

// basic use:

//		base_view = new BaristaBaseView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*
// 4.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		base_view = new BaristaBaseView({el: $("target_selector",
//									bg_color:"#ffffff",
//									fg_color: "#1b9e77",
//									span_class: "col-lg-12",
//									plot_height: 120});

// to extend BaristaBaseView, use

//		extended_view = BaristaBaseView.extend({
//										...
//										});
Barista.Views.BaristaBaseView = Backbone.View.extend({
	// ### initialize
	// initialize the view.  Views that extend BaristaBaseView should impliment code overiding this method.
	// If extended BaristaBaseViews want to use the built in base_initialize method of BaristaBaseView, they should
	// call it in their redraw method.  As an example:

	//		initialize: function(){
	//					this.base_initialize();
	//					//your code here
	//					}
	//

	initialize: function(){
		this.base_initialize();
	},

	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BaristaBaseView",

	// ### model
	// default model to Backbone.Model.  This default is only provided to make the view
	// functional as a un-extended standalone.  An appropriate data model should be
	// supplied for all views that extend BaristaBaseView
	model: new Backbone.Model(),

	// ### base_initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view.  This method is provided so it
	// can be used in view that extend BaristaBaseView
	base_initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// make sure that the top level div target is set to hide overflow content
		$("#" + this.div_string).css("overflow","hidden");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );

		return this;
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.  Views
	// that extend BaristaBaseView should impliment draw code overiding this method.  If extended
	// BaristaBaseViews want to use the built in base_render method of BaristaBaseView, they should
	// call it in their render method.  As an example:

	//		render: function(){
	//					this.base_render();
	//					//your code here
	//					}
	//

	render: function(){
		this.base_render();
		return this;
	},

	// ### base_render
	// completely redraw the view. Updates both static and dynamic content in the view.
	// This method is provided so it can be used in view that extend BaristaBaseView
	base_render: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		return this;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// do any pre save work that the child class may require
		this.save_png_pre();

		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = $("#" + this.div_string);
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = this.name + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);

		// do any post save work that the child class may require
		this.save_png_post();
	},

	// ### save_png_pre
	// dummy method that should be overiden if there is any work to do before
	// saving the png image of the view.  For example, removing elements that
	// will not render properly could be done before saving the image.  This
	// function is called as the first step of *save_png*
	save_png_pre: function(){},

	// ### save_png_post
	// dummy method that should be overiden if there is any work to do after
	// saving the png image of the view.  For example, restoring elements that
	// were removed before saving could be done after saving the image.  This
	// function is called as the last step of *save_png*
	save_png_post: function(){},


	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *1*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide()},duration);
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *1*

	//		pert_detail_view.show(duration);
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

// # **BarPlotView**
// A Backbone.View that displays a scatter plot.  the view's model is assumed to have the same defaults
// as specified in **BarPlotModel**

// basic use:

//		bar_plot_view = new BarPlotView();

// optional arguments:

// 1.  {String}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {String}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {String}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {Array}  **range**  a two element array specifying the plotting bounds of the plot, defaults to *[min(data),max(data)]*
// 5.  {Bool}  **log**  if set to true, plots the data on a log scale, defaults to *false*
// 6. {Number} **min_lock** if set, locks the minimum of the range at the given value. Ignored if range is set. defaults to *undefined*
// 7. {Number} **max_lock** if set, locks the maximum of the range at the given value. Ignored if range is set. defaults to *undefined*
// 8. {Bool} **min_expand** if set, allows the minimum of the range to expand if data is found below it. defaults to *false*
// 9. {Bool} **max_expand** if set, allows the maximum of the range to expand if data is found above it. defaults to *false*
// 10. {String} **orientation** sets the orientation of the bar plot. options are 'horizontal' or 'vertical'. defaults to *'vertical'*
// 11.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		bar_plot_view = new BarPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									range: undefined,
//									log: false,
//									min_lock: undefined,
//									max_lock: undefined,
//									min_expand: false,
//									max_expand: false,
//									plot_height: 120});

Barista.Views.BarPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.BarPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.range = (this.options.range !== undefined) ? this.options.x_range : undefined;
		this.dynamic_range = (this.range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.min_lock = (this.options.min_lock !== undefined) ? this.options.min_lock : undefined;
		this.max_lock = (this.options.max_lock !== undefined) ? this.options.max_lock : undefined;

		this.min_expand = (this.options.min_expand !== undefined) ? this.options.min_expand : undefined;
		this.max_expand = (this.options.max_expand !== undefined) ? this.options.max_expand : undefined;

		// set up log flag
		this.log = (this.options.log !== undefined) ? this.options.log : false;

		// set up the margin
		this.margin = (this.options.margin !== undefined) ? this.options.margin : 50;

		// set up the orientation
		this.orientation = (this.options.orientation !== undefined) ? this.options.orientation : 'vertical';

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// build Axes
		this.build_axes();

	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// style the axis
		this.style_axes();

		// render the bar data
		if (this.orientation === 'horizontal'){
			this.render_horizontal_bars();
		}else{
			this.render_vertical_bars();
		}

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		
		// get model data
		this.data = this.model.get('data');
		
		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();

		// build Axes
		this.build_axes();

		// update the bar data
		if (this.orientation === 'horizontal'){
			this.update_horizontal_bars();
		}else{
			this.update_vertical_bars();
		}
	},

	// ### set_ranges
	// utility function used to get the x and y ranges used in the plot
	set_ranges: function(){
		var data,min,max;
		// calculate the range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_range === true){
			data = this.model.get('data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.min_lock === undefined){
					min = _.min(data);
				}else{
					if (this.min_expand){
						data_min = _.min(data);
						min = (this.min_lock > data_min) ? data_min : this.min_lock;
					}else{
						min = this.min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.max_lock === undefined){
					max = _.max(data);
				}else{
					if (this.max_expand){
						data_max = _.max(data);
						max = (this.max_lock < data_max) ? data_max : this.max_lock;
					}else{
						max = this.max_lock;
					}
				}
				this.range = [min,max];
			}else{
				this.range = [0,0];
			}
		}
	},

	// ### set_scales
	// utility function used to get the x and y scales used in the plot
	set_scales: function(){
		if (this.log){
			this.x_scale=d3.scale.log().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.range[0],this.range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.log){
			this.y_scale=d3.scale.log().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.range[1],this.range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	// ### build_axes
	// utility function used to build x and y axes
	build_axes: function(){
		var self = this;

		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the appropriate axis depending on the orientation of the plot
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		if (this.orientation === 'horizontal'){
				self.bg_layer.append("g")
					.attr("class", "axis x-axis")
					.attr("transform", "translate(0," + (self.height - self.margin) + ")")
					.call(self.xAxis);
		}else{
			self.bg_layer.append("g")
				.attr("class", "axis y-axis")
				.attr("transform", "translate(" + self.margin + ",0)")
				.call(self.yAxis);
		}
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	// ### render_vertical_bars
	// draws bars in vertical mode
	render_vertical_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));

		// plot the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
			this.bg_layer.selectAll('.bar_label').data(labels).enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});
		}

		// style the axis
		this.style_axes();
	},

	// ### render_horizontal_bars
	// draws bars in horizontal mode
	render_horizontal_bars: function(){
		var self = this;
		// get the model's data
		this.data = this.model.get('data');

		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot the data points
		this.bg_layer.selectAll('.data_bar').data([]).exit().remove();
		this.bg_layer.selectAll('.data_bar').data(this.data).enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('axis_title'));
	},

	// ### update_vertical_bars
	// updates the data in the bars in vertical orientation
	update_vertical_bars: function(){
		var self = this;
		// build Axes
		this.build_axes();

		// figure out how wide each bar will be
		this.x_domain = this.x_scale.range();
		this.bar_width = (this.x_domain[1] - this.x_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale(this.range[0]))
			.attr("width",this.bar_width)
			.attr("height",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("x",function(d,i){return self.bar_width*i + self.margin;})
			.attr("y",this.y_scale)
			.attr("width",this.bar_width)
			.attr("height",function(d){return self.y_scale(self.range[0]) - self.y_scale(d)})
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// update the labels if they are there
		var labels = this.model.get('data_labels');
		if (labels.length > 0){
			var bar_label_selection = this.bg_layer.selectAll('.bar_label').data(labels);
			bar_label_selection.enter().append('text')
				.attr('class','bar_label')
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',0)
				.style("text-anchor","middle")
				.text(function(d){return d;});

			bar_label_selection.transition().duration(500)
				.attr("x",function(d,i){return self.bar_width*i + self.margin + self.bar_width/2;})
				.attr('y',this.height - this.margin)
				.attr('dy','1em')
				.attr('opacity',1);

			bar_label_selection.exit().remove();
		}else{
			this.bg_layer.selectAll('.bar_label').data([]).exit().remove();
		}

		// transition the axes
		this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
		this.style_axes();
	},

	// ### update_horizontal_bars
	// updates the data in the bars in vertical orientation
	update_horizontal_bars: function(){
		var self = this;
		// figure out how tall each bar will be
		this.y_domain = this.y_scale.range();
		this.bar_height = (this.y_domain[1] - this.y_domain[0]) / this.data.length;

		// plot new data points
		var bar_selection = this.bg_layer.selectAll('.data_bar').data(this.data);
		bar_selection.enter().append('rect')
			.attr("class","data_bar")
			.attr("y",function(d,i){return self.bar_height*i;})
			.attr("x",this.margin + 2)
			.attr("height",this.bar_height)
			.attr("width",0)
			.attr("opacity",0)
			.attr("stroke","white")
			.attr("fill",this.fg_color);

		// transition points
		bar_selection.transition().duration(500)
			.attr("width",this.x_scale)
			.attr("opacity",1);

		// remove excess points 
		bar_selection.exit().remove();

		// transition the axes
		this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
		this.style_axes();
	}
});
// # **BaristaCardView**
// A Backbone View that displays a card of information wrapped in link.
// The view is meant to be a top level entry point to other pages

// basic use:

//		card_view = new BaristaCardView();

// optional arguments:

// 1.  {string}  **url**  the link to navigate to if the card is clicked, defaults to *""*
// 2.  {string}  **title**  the title of the card. defaults to *"title"*
// 3.  {string}  **subtitle**  the subtitle of the card. defaults to *"subtitle"*
// 2.  {string}  **image**  the link to an image to show as the cards main content. defaults to *""*
// 4.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 5.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		card_view = new BaristaCardView({el: $("target_selector",
//									url:"",
//									title:"",
//									subtitle:"",
//									fg_color: "#1b9e77",
//									image:"",
//									span_class: "col-lg-12"});
Barista.Views.BaristaCardView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BaristaCardView",

	// ## model
	// supply a base model for the view.  Overide this if you need to use it for dynamic content
	model: new Backbone.Model(),

	// ## initialize
	// overide the view's default initialize method in order to catch options and
	// render a custom template
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-12";

		// set up the url
		this.url = (this.options.url !== undefined) ? this.options.url : "";

		// set up the title
		this.title = (this.options.title !== undefined) ? this.options.title : "Title";

		// set up the subtitle
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "subtitle";

		// set up the image
		this.image = (this.options.image !== undefined) ? this.options.image : "";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'barista_view' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapCard({div_string: this.div_string,
												span_class: this.span_class,
												url: this.url,
												title: this.title,
												subtitle: this.subtitle,
												image: this.image,
												fg_color: this.fg_color}));
	}
});

// # **BaristaUserCardView**
// A Backbone View that displays a card of information about a user

// basic use:

//		card_view = new BaristaUserCardView();

// optional arguments:

// 1.  {string}  **realName**  the name to display. defaults to *"Name"*
// 2.  {string}  **username**  the name to display. defaults to *"Username"*
// 3.  {string}  **email**  the email to display. defaults to "user@mail.com"
// 2.  {string}  **badges**  an array of badge images to display. defaults to *[]*

Barista.Views.BaristaUserCardView = Backbone.View.extend({
    // ### name
    // give the view a name to be used throughout the View's functions when it needs to know what its class name is
    name: "BaristaUserCardView",

    // ## initialize
    // overide the view's default initialize method in order to catch options and
    // render a custom template
    initialize: function(){
        // set up defaults
        this.realName = (this.options.realName !== undefined) ? this.options.realName : "Name";
        this.username = (this.options.username !== undefined) ? this.options.username : "UserName";
        this.email = (this.options.email !== undefined) ? this.options.email : "user@email.com";
        this.badges = (this.options.badges !== undefined) ? this.options.badges : [];

        // compile the default template for the view
        this.map_badges();
        this.compile_template();
    },

    // ### compile_template
    // use Handlebars to compile the template for the view
    compile_template: function(){
        var self = this;
        this.div_string = 'barista_view' + new Date().getTime();;
        this.$el.append(BaristaTemplates.CMapUserCard({div_string: this.div_string,
                                                name: this.realName,
                                                username: this.username,
                                                email: this.email,
                                                badges: this.badge_urls}));
    },

    // ### map_badges
    // translate the passed array of badge names into image urls
    map_badges: function(){
        var self = this;
        this.badge_urls = [];
        this.badges.forEach(function(badge){
            switch(badge){
                case "active":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/active.svg");
                    break;
                case "developer":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/developer.svg");
                    break;
                case "explorer":
                    self.badge_urls.push("https://coreyflynn.github.io/Bellhop/ai/badges/explorer.svg");
                    break;
            }
        });
    }
});

// # **BubbleView**
// A Backbone.View that displays a single level tree of data as a bubble plot.  The view should be bound to a
// model such as a **PertCellBreakdownModel** that captures tree data in a *tree_object* attribute.

// basic use:

//		bubble_view = new BubbleView({el: $("target_selector")});

// optional arguments:

// 3.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span4"*

//		bubble_view = new BubbleView({el: $("target_selector"),
//									fg_color: "#1b9e77",
//									span_class: "span4"});

Barista.Views.BubbleView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "BubbleView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertCellBreakdownModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// set up the bubble minimum and maximum scale values
		this.min_val = (this.options.min_val !== undefined) ? this.options.min_val : undefined;
		this.max_val = (this.options.max_val !== undefined) ? this.options.max_val : undefined;

		// set up splitting categories
		this.v_split = (this.options.v_split !== undefined) ? this.options.v_split : undefined;
		this.h_split = (this.options.h_split !== undefined) ? this.options.h_split : undefined;

		// set up splitting category centers
		this.category_centers = (this.options.category_centers !== undefined) ? this.options.category_centers : {up: {x:0,y:-10},dn: {x:0,y:10}};

		// set up category colors
		this.category_colors = (this.options.category_colors !== undefined) ? this.options.category_colors : {up: "#D55E00",dn: "#56B4E9"};

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// draw the view from scratch
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).outerWidth();
		this.height = $("#" + this.div_string).outerHeight();
		this.v_center = this.height / 2;
		this.h_center = this.width / 2;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// grab the data from the model
		this.data = this.model.get('tree_object').children;

		// set up some data scaling
		var max_count, min_count;
		if (this.max_val !== undefined){
			max_count = this.max_val;
		}else{
			max_count = _.max(_.pluck(this.data,'count'));
		}
		if (this.min_val !== undefined){
			min_count = this.min_val;
		}else{
			min_count = _.min(_.pluck(this.data,'count'));
		}
		this.data_scale = d3.scale.linear().domain([min_count,max_count])
						.range([5,30]);

		// define the force directed graph layout
		this.force = d3.layout.force()
						.nodes(this.data)
						.gravity(0.1)
						.friction(0.9)
						.size([this.width, this.height])
						.on("tick",function(e){tick(e);})
						.charge(function(d){return -Math.pow(self.data_scale(d.count),2)/6;})
						.start();

		// draw the initial layout
		this.vis.selectAll("circle").data(this.force.nodes()).exit().remove();
		this.vis.selectAll("circle").data(this.force.nodes())
				.enter().append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("v_category",function(d){
					if (self.v_split !== undefined){
						return d[self.v_split];
					}else{
						return null;
					}
				})
				.attr("cx", Math.random() * 300)
				.attr("cy", Math.random() * 300)
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",function(d){return Math.sqrt(self.data_scale(d.count)/Math.PI);});

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

		// reset a damening variable for simulation
		this.damp = 0.1;

		// tick function for use in the force class
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                // .attr("r",function(d){return self.data_scale(d.count);});

        }
	},

	// ### vertical_split
	// push bubbles vertically based on an attribute property
	vertical_split: function(alpha){
		var self = this;
		bubble_selection = this.vis.selectAll('circle');
		bubble_selection
			.attr("cy",function(d){
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.y);
				}
				var category_y = self.category_centers[d[self.v_split]].y;
				if (category_y === 0){
					return(d.y);
				}else{
					d.y = d.y + (self.v_center + category_y - d.y) * (self.damp + 0.03) * alpha * 1.1;
					return(d.y);
				}
			})
			.attr("cx",function(d){
				if (self.category_centers[d[self.v_split]] === undefined){
					return(d.x);
				}
				var category_x = self.category_centers[d[self.v_split]].x;
				if (category_x === 0){
					return(d.x);
				}else{
					d.x = d.x + (self.h_center - category_x - d.x) * (self.damp + 0.03) * alpha * 1.1;
					return (d.x);
				}
			});
	},

	// ### update
	// update the plot with new data
	update: function(){
		// stuff this into a variable for later use
		var self = this;

		// grab the data from the model
		var new_data = this.model.get('tree_object').children;

		// grab the current nodes
		var nodes = this.force.nodes();

		// update the nodes in this.force
		if (this.force.nodes().length <= new_data.length){
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
			if (this.force.nodes().length < new_data.length){
				this.force.nodes(this.force.nodes().concat(new_data.slice(this.force.nodes().length,new_data.length)));
			}
		}else{
			this.force.nodes(this.force.nodes().slice(0,new_data.length));
			this.force.nodes().forEach(function(o,i){
				_.extend(o,new_data[i]);
				_.extend(o,{x:nodes[i]['x'],y:nodes[i]['y']});
			});
		}

		// draw the initial layout for new bubbles
		bubble_selection = this.vis.selectAll("circle").data(this.force.nodes());
		bubble_selection.enter()
				.append("circle")
				.attr("class",this.div_string + "_circle")
				.attr("fill",function(d){
					if (self.category_colors[d[self.v_split]] !== undefined){
						return self.category_colors[d[self.v_split]];
					}else{
						return self.fg_color;
					}
				})
				.attr("cx", function(d){return d.x;})
				.attr("cy", function(d){return d.y;})
				.attr("stroke","white")
				.attr("_id",function(d){return d._id;})
				.attr("r",0);

		// transition bubbles
		bubble_selection.transition().duration(500)
				.attr("r",function(d){return self.data_scale(d.count);});

		// remove bubbles with no data
		bubble_selection.exit().remove();

		// start the simulation again
		this.force.start();

		// specify the nodes selection so we don't have to repeat the selection on each tick
        this.nodes = this.vis.selectAll("circle");
        this.nodes.call(this.force.drag());

        // tick function for use in the force class
		function tick(e){
			self.vertical_split(e.alpha);
			self.nodes.attr("cx", function(d) {return d.x;})
                .attr("cy", function(d) {return d.y;})
                .attr("r",function(d){return self.data_scale(d.count);});

        }

	}
});

// # **CMapFooterView**

// A view that provides the standard Connectivity map page footer for apps built on apps.lincscloud.org
// the view provides standard copyright text and customizable organization name,
// terms and conditions link, and organization logo/link
// basic use:

//		header = new CMapHeaderView({el:"header_target"});

// optional arguments:

// 1.  {string}  **organization**  the name of the organization that claims copyright. Defaults to *Broad Institute*
// 2.  {string}  **terms_url**  The url on which to find terms and conditions. Defaults to *//lincscloud.org/terms-and-conditions/*
// 3.  {Array}  **logo**  The urls to organization logos to use. Defaults to *['//coreyflynn.github.io/Bellhop/img/broad_logo_small.png','//coreyflynn.github.io/Bellhop/img/cmap_logo_small.png']*
// 4.  {Array}  **logo_url**  The urls to organization links to use. Defaults to *['//www.broadinstitute.org/','//lincscloud.org/']*
// 5.  {string}  **template**  The path to a handlebars template to use. Defaults to *templates/CMapFooter.handlebars*

//		header = new CMapFooterView({el:"footer_target",
//									organization: "Broad Institute",
//									terms_url: "//lincscloud.org/terms-and-conditions/",
// 									logo: ['../img/broad_logo_small.png','../img/cmap_logo_small.png'],
// 									logo_url: ['//www.broadinstitute.org/','//lincscloud.org/'],
//									template: "../templates/CMapFooter.handlebars"});
Barista.Views.CMapFooterView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CMapFooterView",

	// ### initialize
	// overide the default Backbone.View initialize function to compile a built in template and then render the view
	initialize: function(){
		// store passed parameters as attributes of the view
		this.organization = (this.options.organization !== undefined) ? this.options.organization : "Broad Institute";
		this.terms_url = (this.options.terms_url !== undefined) ? this.options.terms_url : "/terms";
		this.logo = (this.options.logo !== undefined) ? this.options.logo : ['//coreyflynn.github.io/Bellhop/img/broad_logo_small_text.png','//coreyflynn.github.io/Bellhop/img/CMap-logox.png','//coreyflynn.github.io/Bellhop/img/skunkworks-logo.png'];
		this.logo_url = (this.options.logo_url !== undefined) ? this.options.logo_url : ['//www.broadinstitute.org/','//clue.io/','//www.broadinstitute.org/vis'];
		this.template = (this.options.template !== undefined) ? this.options.template : "templates/CMapFooter.handlebars";

		// compile the default template for the view
		this.compile_template();

		// render the template
		this.render();
	},

	// ### compile_template
	// use Handlebars to compile the specified template for the view
	compile_template: function(){
		// grab the template
		this.compiled_template = BaristaTemplates.CMapFooter;

		// package logos and log_urls into a set of object to iterate over
		var logo_objects = []
		for (var i=0; i < this.logo.length; i++){
			logo_objects.push({logo: this.logo[i], url: this.logo_url[i]});
		}
		this.$el.append(this.compiled_template({organization: this.organization,
										terms_url: this.terms_url,
										logo_objects: logo_objects,
										year: new Date().getFullYear()}));
	}
});

// # **CMapHeaderView**

// A view the provides the standard Connectivity map page header for apps built on apps.lincscloud.org
// the header provides links in the view to navigate back to apps.lincscloud.org as well as links for
// sharing, settings, and information.  The view accepts as parameters a page title, subtitle, and handlebars template
// basic use:

//		header = new CMapHeaderView({el:"header_target"});

// optional arguments:

// 1.  {string}  **title**  The title of the page. Defaults to *Title*
// 2.  {string}  **subtitle**  The title of the page. Defaults to *Sub Title*
// 3.  {string}  **template**  The path to a handlebars template to use. Defaults to *templates/CMapHeader.handlebars*

//		header = new CMapHeaderView({el:"header_target",
//									title: "",
//									subtitle: "",
//									template: "templates/CMapHeader.handlebars"});
Barista.Views.CMapHeaderView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CMapHeaderView",

	// ### initialize
	// overide the default Backbone.View initialize function to compile a built in template and then render the view
	initialize: function(){
        var self = this;

        // store passed parameters as attributes of the view
		this.title = (this.options.title !== undefined) ? this.options.title : undefined;
		this.subtitle = (this.options.subtitle !== undefined) ? this.options.subtitle : "";
		this.user = (this.options.user !== undefined) ? this.options.user : Barista.Utils.cookie("user_id");
		this.support_link = (this.options.support_link !== undefined) ? this.options.support_link : "//support.lincscloud.org";
		this.app_color = (this.options.app_color !== undefined) ? this.options.app_color : undefined;
		this.tour = (this.options.tour !== undefined) ? this.options.tour : true;

		// compile the default template for the view
		this.compile_template();

		// register an event for clicking on the menu button
        $("#cmapHeaderMenuButton",this.$el).on("click",function(){
            self.trigger("cmapHeaderMenuButton:DidClick");
			$(".cmap-navigation-wrapper").toggleClass("show-nav");
        });

		//color the app name bar if a color is specified
		if (this.app_color){
			$('#cmapHeaderMenuAppName').css('border-bottom','5px solid ' + this.app_color);
		}
	},

	// ### compile_template
	// use Handlebars to compile the specified template for the view
	compile_template: function(){
		var self = this;
		// grab the template
		this.compiled_template = BaristaTemplates.CMapHeader;
		this.$el.append(this.compiled_template({title: this.title,
										subtitle: this.subtitle,
										user: this.user,
										support_link: this.support_link,
										tour: this.tour
									}));
	}
});

// # **CMapNavigationView**

// A view the provides the standard Connectivity map application navigation for apps built on apps.lincscloud.org
// basic use:

//		nav = new CMapNavigationView({el:"header_target"});

Barista.Views.CMapNavigationView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CMapNavigationView",

	// ### initialize
	// overide the default Backbone.View initialize function to compile a built in template and then render the view
	initialize: function(){
        var self = this;

        // store passed parameters as attributes of the view
		this.items = (this.options.items !== undefined) ? this.options.items : ["all apps","data synopsis","query","compound digest","gene digest","history"];
        this.links = (this.options.links !== undefined) ? this.options.links : ["/app_list","/data_synopsis","/query","/compound_digest","/gene_digest","/history"];


        // wrap the content
        this.wrap_content();

        // build the navigation panel
        this.build_navigation();

		// make sure the height of the html and body element is set to 100%
		// so our pull out menu looks like it extends all the way down the
		// page even if the browser window is larger than the content of the
		// page
		$("html").css("height","100%");
		$("body").css("height","100%");

	},

    // ### wrap_content
    // wrap all existing content in the elements we need to work
    // the slide out navigation that we are going to build
    wrap_content: function(){
        $("body").children().wrapAll('<div class="cmap-navigation-content"/>');
        $(".cmap-navigation-content").wrapAll('<div class="cmap-navigation-wrapper"/>');
    },

    // ### build navigation
    // build the navigation pane using all reuested menu items and links
    build_navigation: function(){
        var self = this;
        $(".cmap-navigation-wrapper").prepend('<div class="cmap-navigation-menu"></div>');
        var $el = $(".cmap-navigation-menu");
        this.items.forEach(function(item,i){
			$el.append('<a href="' + self.links[i] + '" class="col-xs-12 cmap-navigation-menu-item">' + item + '</a>');
		});
		$el.prepend("<div class='cmap-spacer-large'></div>");
		$el.prepend("<p id='cmap-navigation-menu-close' title='close' class='cmap-navigation-menu-item cmap-header-link-no-border class=col-xs-12'>X</p>");
		$(".cmap-navigation-menu-item",$el).on("click",function(){
			$(".cmap-navigation-wrapper").toggleClass("show-nav");
		});
    }
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.CellSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CellSearchBar",

	initialize: function(){
		var self = this;

		/**
		determines whether or not the search view will match cell lines for autocomplete

		@property match_cell_lines
		@default true
		@type Boolean
		**/
		// determine whether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder if specified
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : "search cell lines";

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			var change_callback = function () {
				var val  = $("#search",self.el).val();
				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				Fired when the text in the view's search box changes

				@event search:DidType
				@param {Object} [msg={val:"",type:""}] an object containing the message of the event
				@param {String} [msg.val=""] the string val of the views search bar at the time of the event
				@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
				**/
				self.trigger("search:DidType",{val: val,search_column: undefined});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				var search_column = datum.search_column;
				self.trigger("search:DidType",{val: val,search_column: search_column});
			});
		});

	},


	/**
    Gets the current text entered in the view's search bar

    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event

    @method random_val
    **/
	random_val: function(){
		var self = this;
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';

		var skip = Math.round(Math.random()*40);
		var params = {q:'{"lincs_status":{"$in":["core_cline","core_pline","DIVR"]}}', l:1, sk:skip};
		$.getJSON(cellinfo,params,function(res){
			var val = res[0].cell_id;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,search_column: 'cell_id'});
		});
	},

	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,search_column: undefined }); //TODO need to find search column info
	},

	/**
    renders the view

    @method render
    **/
	render: function(){
		var self = this;

		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: this.placeholder}));

		// hook up the typeahead with backing datasets
		$('#search',this.$el).typeahead([Barista.Datasets.CellID,
										 Barista.Datasets.CellLineage,
										 Barista.Datasets.CellHistology,
										 Barista.Datasets.CellMutation]);
	}
});

// # **CompoundDetailView**

// A Backbone.View that shows information about a small molecule compound.  This view is
// frequently paired with a CompoundDetailModel.

//		pert_detail_view = new CompoundDetailView({el: $("target_selector")});

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		pert_detail_view = new CompoundDetailView({el: $("target_selector"),
// 												model: CompoundDetailModel,
// 												bg_color: "#ffffff",
// 												span_class: "col-lg-12"});
Barista.Views.CompoundDetailView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CompoundDetailView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.CompoundDetailModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		// initialize the view using the base view's built in method
		this.base_initialize();
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								 top: 45,
								 bottom: 100,
								 left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		this.render();
		return this;
	},

	// ### render_label_and_value
	// utility function to draw a standard label and value for that label under
	// the main pert_iname and pert_id text.  If pass_model_field_as_text is true,
	// pass the value in model_field as text instead of serching for it in the model
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		this.label_y_position += 25;

		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	// ### render_summary
	// utility function to break a long summary string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **summary_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the wiki summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	// ### toggle_panel_state
	// utility to open or close the view
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	// ### draw tags
	// utility function to draw tags given an array.
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	// ### clear_summary
	// utility function to clear the pert summary
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},


	// ### save_png_pre
	// overide the base views save_png_pre method to clear out the image so we
	// can render the png properly
	save_png_pre: function(){
		// remove the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();

		// scoot the inde text to the left
		this.fg_layer.selectAll('.index_text')
			.attr('x',10)
	},

	// ### save_png_post
	// overide the base views save_png_post method to restore the image after
	// saving
	save_png_post: function(){
		// draw the static index reagent icon
		this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text_icon').data([1])
							.enter().append("svg:image")
							.attr("class","index_text_icon")
			                .attr("xlink:href", "//coreyflynn.github.io/Bellhop/img/CP.png")
							.attr("x",10)
							.attr("y",0)
							.attr("height",40)
							.attr("width",40);

		// scoot the inde text to the right
		this.fg_layer.selectAll('.index_text')
			.attr('x',60)
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.CompoundSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "CompoundSearchBar",

	initialize: function(){
		var self = this;
		this.render();

		// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
		var change_callback = function () {
			var val  = $("#search",self.el).val();
			var type = "";
			/**
			Fired when the text in the view's search box changes

			@event search:DidType
			@param {Object} [msg={val:"",type:""}] an object containing the message of the event
			@param {String} [msg.val=""] the string val of the views search bar at the time of the event
			@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
			**/
			self.trigger("search:DidType",{val: val,type: type});
		};

		$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,500));

		// bind a search:DidType event to the typeahead events coming out of typeahead.js
		$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
			var val = datum.value;
			var type = "single";
			self.trigger("search:DidType",{val: val,type: type});
		});

	},


	/**
    Gets the current text entered in the view's search bar
    
    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event
    
    @method random_val
    **/
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = Barista.APIURL + '/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":"trt_cp"}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},

	set_val: function(new_val){
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: 'single'});
	},

	/**
    renders the view
    
    @method render
    **/
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar());

		$('#search',this.$el).typeahead([{
			// only return 4 items at a time in the autocomplete dropdown
			limit: 2,

			// provide a name for the default typeahead data source
			name: 'Reagents',

			// the template to render for all results
			template: '<span class="label" style="background-color: {{ color }}">{{ type }}</span> {{ value }}',

			// use twitter's hogan.js to compile the template for the typeahead results
			engine: Hogan,

			remote: {
				// set the remote data source to use pertinfo with custom query params
				url: [Barista.APIURL + '/a2/pertinfo?',
					  'q={"pert_iname":{"$regex":"%QUERY", "$options":"i"}, "pert_type":"trt_cp"}',
					  '&f={"pert_iname":1,"pert_type":1}',
					  '&l=100',
					  '&s={"pert_iname":1}'].join(''),
				
				dataType: 'jsonp',

				filter: function(response){
					var datum_list = [];
					var auto_data = [];
					var object_map = {};

					// for each item, pull out its pert_iname and use that for the
					// autocomplete value. Build a datum of other relevant data
					// for use in suggestion displays
					response.forEach(function(element){
						auto_data.push(element.pert_iname);
						object_map[element.pert_iname] = element;
					});

					// make sure we only show unique items
					auto_data = _.uniq(auto_data);

					// build a list of datum objects
					auto_data.forEach(function(item){
						var datum = {
							value: item,
							tokens: [item],
							data: object_map[item]
						};
						if (object_map[item].pert_type === 'trt_cp' ){
							_.extend(datum,{
								type: 'Chemical Reagent',
								color: '#E69F00',
							});
							datum_list.push(datum);
							return datum_list;
						}else{
							_.extend(datum,{
								type: object_map[item].pert_type,
								color: '#999',
							});
							datum_list.push(datum);
							return datum_list;
						}
					});

					// return the processed list of daums for the autocomplete
					return datum_list;
				}

			}
		}]);
	}
});
Barista.Views.FlatTreeMapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "FlatTreeMapView",

		model: new Barista.Models.PertCellBreakdownModel(),

		initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#d9d9d9";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span4";

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;

		// allow for the drawing of arbitrary html in treemap cells rather than counts
		this.category_html = (this.options.category_html !== undefined) ? this.options.category_html : null;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// bind render to model changes
		this.listenTo(this.model,'change', this.update_vis);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.top_svg = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)
		this.vis = this.top_svg.append("g");
		// this.vis_overlay = this.top_svg.append("g");

		// render the vis
		this.render();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.top_svg.transition().duration(1).attr("width",this.width);

		// define the treemap layout
		this.treemap = d3.layout.treemap()
						.size([this.width,this.height])
						.sticky(false)
						.round(true)
						.sort(function(a,b) { return a.count - b.count; })
						.value(function(d) {return d.count;});

		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no children in the tree_object, dim the view
		if (_.isEmpty(this.data.children)){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear()
							.domain([this.min_count,this.max_count,this.max_count+1])
							.range([1,1,0]);

		this.vis.data([this.data]).selectAll("rect").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		if (this.category_html){
			self.draw_foreignObject();
		}else{
			self.draw_text();
			self.add_tooltips();
		}

		// add a png export overlay
		this.top_svg.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.top_svg.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("click",function(){self.savePng();});
	},

	update_vis: function(){
		var self = this;
		// grab the data from the model and plot the state of the treemap
		this.data = this.model.get('tree_object');

		// if there are no children in the tree_object, dim the view
		if (_.isEmpty(this.data.children)){
			this.top_svg.transition().duration(1).attr("opacity",0);
		}else{
			this.top_svg.transition().duration(500).attr("opacity",1);
		}

		// set up an alpha scaling
		this.min_count = _.min(_.pluck(this.data.children,'count'));
		this.max_count = _.max(_.pluck(this.data.children,'count'));
		this.opacity_map = d3.scale.linear().domain([this.min_count,this.max_count,this.max_count+1])
						.range([1,1,0]);

		//add new data if it is there
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes)
			.enter().append("rect")
			.attr("class",this.div_string + "_cell")
			.attr("fill",this.fg_color)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;})
			.attr("stroke", "white")
			.attr("stroke-width", 2);

		// transition elements
		this.vis.data([this.data]).selectAll("rect")
			.transition().ease("cubic out").duration(500)
			.attr("opacity",function(d){return self.opacity_map(d.value);})
			.attr("x", function(d) {return d.x;})
			.attr("y", function(d) {return d.y;})
			.attr("_id", function(d) {return d._id;})
			.attr("count", function(d) {return d.count;})
			.attr("width", function(d) {return d.dx;})
			.attr("height", function(d) {return d.dy;});

		// exit old elements
		this.vis.data([this.data]).selectAll("rect").data(this.treemap.nodes).exit().remove();

		// // add tooltips
		// this.add_tooltips();

		// draw_text on the elements that have room for it
		this.clear_text();
		if (this.category_html){
			setTimeout(function(){self.draw_foreignObject();},500);
		}else{
			setTimeout(function(){self.draw_text(); self.add_tooltips();},500);
		}

	},

	add_tooltips: function(){
		// make a selection of all cells in the treemap
		var cell_selection = $('.' + this.div_string + '_cell');

		// remove existing tooltips so we don confuse the labels
		cell_selection.each(function(){
			$(this).tooltip('destroy');
		});

		// add new tooltips if there is more than just the base cell in
		// in the treemap (i.e. it is a non-empty dataset)
		if (cell_selection.length > 1){
			cell_selection.each(function(){
				$(this).tooltip({
					placement: 'top',
					container: 'body',
					trigger: 'hover focus',
					title: $(this).attr('_id') + ' : ' + Math.round($(this).attr('count'))
				});
			});
		}
	},

	clear_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
		this.vis.data([this.data]).selectAll(".foreign").data([]).exit().remove();
	},

	// add a foreignObject DOM snippet for each cell in the treemap based on
	// an input mapping of DOM snippets
	draw_foreignObject: function(){
		var self = this;
		this.vis.data([this.data]).selectAll(".foreign").data([]).exit().remove();
		this.vis.data([this.data]).selectAll(".foreign").data(this.treemap.nodes)
			.enter().append("foreignObject")
			.attr("class","foreign")
			.attr("x",function(d){return d.x;})
			.attr("y",function(d){return d.y;})
			.attr("height",function(d){return d.dy;})
			.attr("width",function(d){return d.dx;})
			.attr("opacity",function(d) {
				if (d.dy < 50 || d.dx < 50){
					return 0;
				}else{
					return 1;
				}
			})
			.append("xhtml:body")
			.style("background-color","rgba(0,0,0,0)")
			.style("height","100%")
			.style("width","100%")
			.style("display","flex")
			.style("display", "-webkit-box")
  			.style("display", "-webkit-flex")
			.style("display", "-ms-flexbox")
			.html(function(d){
				if (d.children === undefined){
					return self.category_html[d._id];
				}else{
					return "";
				}
			})
	},

	draw_text: function(){
		this.vis.data([this.data]).selectAll("text.name").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.name").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 20 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : d._id;
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","white")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);

		this.vis.data([this.data]).selectAll("text.count").data([]).exit().remove();
		this.vis.data([this.data]).selectAll("text.count").data(this.treemap.nodes)
			.enter().append("text")
			.attr("class","name")
			.text(function(d) {
				if (d.dy < 40 || d.dx < 80){
					return null;
				}else{
					return d.children ? null : Barista.numberWithCommas(d.count);
				}
			})
			.attr("text-anchor", "middle")
			.attr("x", function(d) {return d.x + d.dx/2;})
			.attr("y", function(d) {return d.y + d.dy/2 + 20;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("fill","black")
			.attr("opacity",0)
			.style("pointer-events","none")
			.transition().duration(500).attr("opacity",1);
	},

	savePng: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.top_svg.attr("width");
		var height = this.top_svg.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.top_svg.selectAll("." + this.div_string + "png_export").data([1]);
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.top_svg.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTreeMap" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

Barista.Views.GridView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "GridView",

	initialize: function(){
		var self = this;
		// default search value
		this.search_val = "";
		this.search_type = "single";

		// set up grid options
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col_lg_12";
		this.legend = (this.options.legend !== undefined) ? this.options.legend : undefined;
		this.no_download = (this.options.no_download !== undefined) ? this.options.no_download : undefined;
		this.no_slice = (this.options.no_slice !== undefined) ? this.options.no_slice : undefined;
		this.no_legend = (this.options.no_legend !== undefined) ? this.options.no_legend : undefined;
		this.edit = (this.options.edit !== undefined) ? this.options.edit : false;
		this.limit = (this.options.limit !== undefined) ? this.options.limit : 30;



		// set up a default collection and column definition for the grid to operate on
		this.collection = (this.options.collection !== undefined) ? this.options.collection : new Barista.Collections.PertCollection();
		this.columns = (this.options.columns !== undefined) ? this.options.columns : [{name: "pert_iname", label: "Reagent Name", cell: "string", editable: false},
																						{name: "pert_type_label", label: "Pert Type", cell: Barista.HTMLCell, editable: false},
																						{name: "num_inst", label: "Experiments", cell: "integer", editable: false}];

		// build the template
		this.compile_template();

		// build the grid on the template using a clickable row.  If a row is clicked, a grid:RowClick event
		// is fired with the row's model as the passed data.
		// build the clickable row
		var ClickableRow = Backgrid.Row.extend({
			events: {
				"click": "onClick"
			},
			onClick: function () {
				self.trigger("grid:RowClick", this.model);
			},
			// overide Backgrid.Row's native render method
			render: function () {
				this.$el.empty();
				var fragment = document.createDocumentFragment();
				for (var i = 0; i < this.cells.length; i++) {
					fragment.appendChild(this.cells[i].render().el);
				}
				this.el.appendChild(fragment);
				this.delegateEvents();

				this.$el.css("opacity",0);
				this.$el.animate({"opacity":1},1000);

				return this;
			},

			// overide Backgrid.Row's native remove method
			remove: function () {
				this.$el.addClass("cmap-active-grid-row");
				this.$el.animate({"opacity":0},1000);
				var self = this;
				setTimeout(function(){
					for (var i = 0; i < self.cells.length; i++) {
						var cell = self.cells[i];
						cell.remove.apply(cell, arguments);
					}
					return Backbone.View.prototype.remove.apply(self, arguments);
				},1000);
			}
		});

		// build the grid
		this.grid = new Backgrid.Grid({
			row: ClickableRow,
			columns: this.columns,
			collection: this.collection
		});
		$("#" + this.div_string).append(this.grid.render().$el);

		// add a button to scroll to the top of the grid once it is scroll down
		this.add_scroll_to_top_button();

		//bind the table to a function to check for scroll boundaries
		$("#" + this.div_string,this.el).scroll(function(){self.checkscroll();});

		// bind the download text to a function to download the data in the table
		$("#" + this.div_string + "_download",this.el).click(function(){self.download_table();});

		// bind the edit text to a function to edit the data in the table
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});

		// bind the download text to a function to slice the data in the table out of the
		// Connectivity Map database.
		self.change_slice_button_state("slice");
	},

	checkscroll: _.debounce(function(){
		if ($("#" + this.div_string).scrollTop() > 30) {
			this.show_scroll_to_top_button();
		}else{
			this.hide_scroll_to_top_button();
		}

		var triggerPoint = 100;
		var pos = $("#" + this.div_string).scrollTop() + $("#" + this.div_string).height() + triggerPoint;
		if (!this.collection.isLoading && pos > $("#" + this.div_string)[0].scrollHeight){
			this.collection.skip += this.limit;
			this.update_collection(this.search_val,this.search_type,this.limit);
		}
	},100),

	// ### add_scroll_to_top_button
	// adds a UI control to scroll the top of the grid
	add_scroll_to_top_button: function(){
		var self = this;
		this.scroll_to_top_button_id = this.div_string + 'scroll_button';
		this.$el.append('<button id="' + this.scroll_to_top_button_id + '" class="cmap_grid_to_top_button">Scroll to Top</button>');
		$("#" + this.scroll_to_top_button_id).click(function(){self.scroll_to_top();});
		this.hide_scroll_to_top_button();
	},

	// ### scroll_to_top
	// scrolls the grid to the top of its container
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	scroll_to_top: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.div_string).animate({scrollTop:0},duration);
		this.hide_scroll_to_top_button();
	},

	// ### show_scroll_to_top_button
	// shows the scroll to top button
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	show_scroll_to_top_button: function(duration){
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:1},duration);
	},

	// ### hide_scroll_to_top_button
	// hides the scroll to top button
	// argurments:

	// 1.  {number}  **duration**  the duration of the scroll animation in ms, defaults to *500*
	hide_scroll_to_top_button: function(duration){
		var self= this;
		duration = (duration !== undefined) ? duration : 500;
		$("#" + this.scroll_to_top_button_id).clearQueue();
		$("#" + this.scroll_to_top_button_id).animate({opacity:0},duration);
	},

	replace_collection: function(search_val,search_type,limit){
		var getData_promise;
		var self = this;
		this.search_val = (search_val !== undefined) ? search_val : this.search_val;
		this.search_type = (search_type !== undefined) ? search_type : this.search_type;
		this.limit = (limit !== undefined) ? limit : this.limit;
		$("#" + this.div_string).show();
		$("#" + this.div_string).animate({opacity:1},500);
		this.collection.reset();
		this.collection.skip = 0;
		self.collection.maxCount = Infinity;
		getData_promise =  this.collection.getData(this.search_val,this.search_type,this.limit);
		this.listenToOnce(this.collection,"add", function(){
			this.trigger("grid:ReplaceCollection");
			this.trigger("grid:Add");
			this.resize_div();
			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}
		});
		return getData_promise;
	},

	update_collection: function(search_val,search_type,limit){
		var getData_promise;
		if (this.collection.models.length < this.collection.maxCount){
			var self = this;
			this.search_val = (search_val !== undefined) ? search_val : this.search_val;
			this.search_type = (search_type !== undefined) ? search_type : this.search_type;
			this.limit = (limit !== undefined) ? limit : this.limit;
			$("#" + this.div_string).show();
			$("#" + this.div_string).animate({opacity:1},500);
			getData_promise = this.collection.getData(this.search_val,this.search_type,this.limit);
			this.resize_div();
			this.listenToOnce(this.collection,"add", function(){
				this.trigger("grid:UpdateCollection");
				this.trigger("grid:Add");
			});
			return getData_promise;
		}
	},

	clear_collection: function(){
		var self = this;
		this.collection.skip = 0;
		$("#" + this.div_string).animate({opacity:0},500);
		window.setTimeout(function(){
			self.collection.reset();
			self.collection.maxCount = Infinity;
			$("#" + this.div_string).hide();

			// reset the slice all data button and reject the slice
			// deferred if it is present
			self.change_slice_button_state("slice");
			if (self.slice_defer){
				self.slice_defer.reject();
			}

		},500);
	},

	resize_div: function(){
		var self = this;
		var container_height =  $("#" + this.div_string).height();
		setTimeout(function(){
			var data_height = self.collection.length * 30 + 40;
			var target_height = (data_height > 300) ? 300 : data_height;

			$("#" + self.div_string).stop();
			$("#" + self.div_string).animate({height:target_height},500);
		},500);
	},

	compile_template: function(){
		this.div_string = 'backgrid_target' + new Date().getTime();;
		this.$el.append(BaristaTemplates.CMapBaseGrid({div_string: this.div_string,
													   span_class: this.span_class,
													   legend: this.legend,
													   no_download: this.no_download,
													   no_slice: this.no_slice,
													   no_legend: this.no_legend,
													   edit: this.edit,
													}));
	},

	slice_all_table_data: function(){
		var self = this;
		// change the button state to progress
		this.change_slice_button_state("progress");

		// create a Deferred on the object to handle interaction with the slicing
		// operation.  This allows us to resolve the Deffered later in another
		// method before the ajax call returns if we need to
		this.slice_defer = $.Deferred();

		// If the Deferred resolves successfully, leave the button alone and let other the ajax call
		// below manipulate it.  If it is rejected, set the button back up to its original state.
		this.slice_defer.fail(function() {
				self.change_slice_button_state("slice");
			}
		);

		// grab the API 'q' query parameter from the grid's collection and send it
		// to sig_slice API.  if the slice job completes, check the return for a
		// file_url attribute and change the link in the slice button to expose the
		// link.  If it does not exist, the slice failed and we display a failure
		// message asking the user to try again
		sig_slice = '//prefix:8080/a2/sigslice?callback=?';
		$.ajax({
			dataType: 'json',
			url: sig_slice,
			data: {q: self.collection.q_param,l: 1000},
			success: function(res){
				if (res.file_url){
					self.change_slice_button_state("link",res.file_url);
				}else{
					self.change_slice_button_state("fail");
				}
			},
			error: function(){
				self.change_slice_button_state("fail");
			}
		});

		// if 60s pass, we assume that is too long and we
		// update the button with an error message and
		// resolve the deferred to indicate we finished the
		// ajax call normally.  This is a hack to emulate a 404 error in jsonp
		this.slice_timeout = setTimeout(function(){
			self.change_slice_button_state("fail");
		},60000);
	},

	change_slice_button_state: function (state,link){
		var self = this;
		// unbind an handlers on the button
		$("#" + self.div_string + "_slice",self.el).unbind();

		// handle the re-binding of handlers and update the button text and icon
		switch (state){
			case "slice":
				// update the slice button to show an available data slice
				$("#" + self.div_string + "_slice",self.el).html('<font color="#0072B2"><i class="icon-cogs"></i> slice all data</font>');

				// rebind the click event and clear a timeout if present
				$("#" + this.div_string + "_slice",this.el).click(function(){self.slice_all_table_data();});
				clearTimeout(self.slice_timeout);
				break;

			case "progress":
				// indicate that we are making a data slice
				$("#" + this.div_string + "_slice",this.el).html('<font color="#0072B2"><i class="icon-cog icon-spin"></i> slicing</font>');

				// unbind all handlers so that we can't click the while while we are slicing
				$("#" + this.div_string + "_slice",this.el).unbind();
				break;

			case "link":
				// construct an html string to expose the link
				var html_string = ['<a href="',
								   link,
								   '" class="cmap-link">',
								   '<font color="#0072B2"><i class="icon-download"></i> download slice</font></a>'].join('');

				// update the button and resolve the deferred to
				// indicate we finished the ajax call normally
				$("#" + self.div_string + "_slice",self.el).html(html_string);
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;

			case "fail":
				// update the button with an error message,
				// resolve the deferred and clear the Timeout
				$("#" + self.div_string + "_slice",self.el).html('<font color="#D55E00"><i class="icon-exclamation"></i> slice failed. try again?</font>');
				$("#" + self.div_string + "_slice",self.el).click(function(){self.slice_all_table_data();});
				self.slice_defer.resolve();
				clearTimeout(self.slice_timeout);
				break;
		}

	},

	download_table: function(){
		var self = this;
		// indicate we are downloading something
		$("#" + this.div_string + "_download",this.el).html('<font color="#0072B2"><i class="icon-refresh icon-spin"></i> exporting</font>');

		// set up api call parameters
		var url = this.collection.url;
		var params = {q: this.collection.q_param,
            l:0,
            s:this.collection.s_param};

        // grab column header names
        var headers = _.pluck(this.columns,'label').join('\t');

        // grab column data names
        var names = _.pluck(this.columns,'name');

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			var lines = [headers];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				names.forEach(function(n){
					switch (n){
					case "pert_type_label":
						line_data.push(Barista.CMapPertTypeAlias(r["pert_type"]).acronym);
						break;
					case "view_result_link":
						line_data.push(r["standard_result"]);
						break;
					case "rpt":
						line_data.push(r.params.rpt);
						break;
					case "tool_id":
						line_data.push(r.params.tool_id);
						break;
					case "date":
						line_data.push(String(new Date(parseInt(r["_id"].substring(0,8), 16)*1000)));
						break
					default:
						line_data.push(String(r[n]));
					}
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");
			$("#" + self.div_string + "_download",self.el).html('<font color="#0072B2"><i class="icon-share"></i> export table</font>');
		});
	},

	// ### open_edit_table
	// open up a column to show editing buttons
	open_edit_table: function(){
		var self = this;
		console.log("opening edit");
		this.grid.columns.unshift(({name: "edit", label: "Edit", cell: Barista.HTMLCell, editable: false}));
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> done editing </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.close_edit_table();});
	},

	// ### close_edit_table
	// close column showing editing buttons
	close_edit_table: function(){
		var self = this;
		var idCol = this.grid.columns.where({ name: "edit" });
		this.grid.removeColumn(idCol);
		$("#" + this.div_string + "_edit",this.el).html('<font color="#e51c23"><i class="fa fa-times-circle"></i> edit </font>');
		$("#" + this.div_string + "_edit",this.el).unbind();
		$("#" + this.div_string + "_edit",this.el).click(function(){self.open_edit_table();});
	},

	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *500*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		var self = this;
		this.$el.animate({opacity:0},duration);
		setTimeout(function(){self.$el.hide();},duration);
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *500*

	//		pert_detail_view.show(duration);
	show: function(duration){
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	}
});

// # **HTMLCellView**

// a Backgrid extension that supports display of html content in Backgrid tables.  HTMLCellView defines
// both a Backgrid.Cell subclass (**HTMLCell**) and Backgrid.CellFormatter subclass (**HTMLFormatter**) to
// use with it.  These two components are used together to integrate with Backgrid's existing cell definitions

// in order to use **HTMLCell** and **HTMLFormatter**, specify the cell parameter of a Backgrid column definition
// as **HTMLCell**.  As an example:

//     // set up a default collection and column definition for the grid to operate on
//     this.collection = new PertCollection();
//     this.columns = [{name: "pert_type_label", label: "Pert Type", cell: HTMLCell, editable: false}];
// 
//     // build the template
//     this.compile_template();
// 
//     // build the grid on the template
//     this.grid = new Backgrid.Grid({
//       columns: this.columns,
//       collection: this.collection
//     });


// ## HTMLFormatter
// A formatter that extends Backgrid.CellFormatter to return exactly the raw input value as opposed
// to the string version of the rawinput 
Barista.HTMLFormatter = Backgrid.HTMLFormatter = function () {};
Barista.HTMLFormatter.prototype = new Backgrid.CellFormatter();
_.extend(Barista.HTMLFormatter.prototype, {
  fromRaw: function (rawValue) {
    if (_.isUndefined(rawValue) || _.isNull(rawValue)) return '';
    return rawValue;
  }
});

// ## HTMLCell
// An extension of Backgrid.Cell to render raw html content into the target element of the cell
Barista.HTMLCell = Backgrid.HTMLCell = Backgrid.Cell.extend({
  className: "html-cell",
  formatter: new Barista.HTMLFormatter(),
  render: function () {
    this.$el.html(this.formatter.fromRaw(this.model.get(this.column.get("name"))));
    return this;
  }
});
// # **HeatmapView**

// A Backbone.View that displays a simple heatmap.  The view is normally paired with 
// a *HeatmapModel*, but works with any model that provides *data*, *rid*, *cid*, and
// *title* attributes.

// optional arguments:

// 1.  {string}  **template**  The handlebars template to use. Defaults to *BaristaTemplates.d3_target*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 3.  {string}  **low\_color**  the hex color code to use as lowest value color in the heatmap, defaults to *#0000ff*
// 4.  {string}  **high\_color**  the hex color code to use as highest value color in the heatmap, defaults to *#ff0000*
// 5.  {d3.scale}  **color_scale**  custom color scale to use in the heatmap.  If supplied, low\_color and high\_color are ignored, defaults to *undefined*
// 6.  {d3.scale}  **annot_color_scale**  custom color scale to use in the heatmap annotations. defaults to *undefined* and causes the annotations to be rendered with a standard color scale
// 7.  {Number}  **plot_height**  the height of the heatmap to generate in pixels, defaults to *300*
// 8.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		heatmap_view = new HeatmapView({el: $("target_selector"),
//												model: new HeatmapModel(),
//												template: BaristaTemplates.d3_target,
//												bg_color: "#ffffff",
//												low_color: "#0000ff",
//												high_color: "#ff0000",
//												color_scale: undefined,
//												annot_color_scale: undefined,
//												plot_height: 300,
//												span_class: "span12"
//												});

Barista.Views.HeatmapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "HeatMapView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.HeatmapModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;
		this.annot_color_scale = (this.options.annot_color_scale !== undefined) ? this.options.annot_color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		this.fg_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// draw the column labels
		this.fg_layer.selectAll('.heatmap_cid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid')).enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			this.fg_layer.selectAll('.heatmap_annots').data([]).exit().remove();
			this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots')).enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				this.fg_layer.selectAll('.heatmap_annots_label').data([]).exit().remove();
				this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]).append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.attr('opacity',1)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});
			}
		}

		// set up the y scale
		this.set_scale();

		// build Axis
		this.build_axis();

		// add an axis
		this.fg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + (this.width - this.margin/2) + ",0)")
			.call(this.yAxis);

		// style the axis
		this.style_axes();

		// add the cells for the look up table
		this.add_lookup_table();

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### add look up table
	// adds a simple color lookup table based on the heatmap's color_scale
	add_lookup_table: function(){
		var self, data, scale_range, scale_domain, scale_unit, domain_unit;
		self = this;
		data = d3.range(50);
		scale_range = this.y_scale.range();
		scale_domain = this.y_scale.domain();
		scale_unit = (scale_range[1] - scale_range[0]) / data.length;
		domain_unit = (scale_domain[0] - scale_domain[1]) / data.length;

		this.fg_layer.selectAll('.lut_cell').data(data).enter().append('rect')
			.attr('class','lut_cell')
			.attr('x',self.width - self.margin/2 - 10)
			.attr('y',function(d,i){return i*scale_unit + self.margin;})
			.attr('width',10)
			.attr('height',scale_unit)
			.attr('fill',function(d,i){return self.color(scale_domain[0] - i*domain_unit);});

	},

	// ### set_scale
	// utility function used to get the y scale used in the plot
	set_scale: function(){
			var domain, range_min, range_max, range;
			// get the current data domain from this.color
			domain = this.color.domain();

			// calculate the range for the scale
			range_min = this.margin;
			range_max = this.height - this.margin;
			range = [range_min,range_max];

			// set the y_scale
			this.y_scale=d3.scale.linear().domain([domain[domain.length-1],domain[0]]).range(range);
	},

	// ### build_axis
	// utility function used to build y axis for the look up table
	build_axis: function(){
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("right");
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	},

	// ### render
	// update the dynamic potions of the view
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin*2) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin*2) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin*2) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// set up the annotation color scale
		if (this.annot_color_scale === undefined){
			var values = _.uniq(this.model.get('annots'))
			this.annot_color = d3.scale.category10().domain(values)
		}else{
			this.annot_color = this.annot_color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.fg_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('y',function(d,i){return self.cell_height*i + self.cell_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();

		// draw the column labels
		cid_selection = this.fg_layer.selectAll('.heatmap_cid').data(this.model.get('cid'));
		cid_selection.enter().append('text')
			.attr('class','heatmap_cid')
			.attr('y',this.margin)
			.attr('x',this.x_center)
			.attr('opacity',0)
			.attr('text-anchor','middle')
			.attr('dy','-.2em')
			.text(function(d){return d;});

		cid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',function(d,i){return self.cell_width*i + self.cell_width/2 + self.x_offset;})
			.text(function(d){return d;});

		cid_selection.exit().remove();

		// draw the annotation categories if they are present
		if (this.model.get('annots') !== undefined){
			var label_selection = this.fg_layer.selectAll('.heatmap_annots').data(this.model.get('annots'));
			label_selection.enter().append('rect')
				.attr('class','heatmap_annots')
				.attr('x',this.x_center)
				.attr('y',(this.height - this.margin)/2)
				.attr('width',0)
				.attr('height',0)
				.attr('opacity',0)
				.attr('value',function(d){return d;})
				.attr('stroke','white')
				.attr('stroke-width',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.transition().duration(500)
				.attr('x',function(d,i){return self.cell_width*i + self.x_offset;})
				.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/4 + self.margin;})
				.attr('width',this.cell_width)
				.attr('height',this.cell_height/4)
				.attr('opacity',1)
				.attr('fill',function(d){return self.annot_color(d);});

			label_selection.exit().remove();

			if (this.model.get('annots_label') !== undefined){
				// draw the annot label if it is there
				label_text_selection = this.fg_layer.selectAll('.heatmap_annots_label').data([this.model.get('annots_label')]);
				label_text_selection.enter().append('text')
					.attr('class','heatmap_annots_label')
					.attr('x',this.x_offset)
					.attr('y',(this.height - this.margin)/2)
					.attr('opacity',0)
					.attr('text-anchor','end')
					.attr('dx','-.2em')
					.text(function(d){return d;});

				label_text_selection.transition().duration(500)
					.attr('opacity',1)
					.attr('y',function(d){return self.cell_height*(self.model.get('data').length) + self.cell_height/2 + self.margin;})
					.text(function(d){return d;});

				label_text_selection.exit().remove();
			}
		}
	},

	// ### unravel_data
	// internal utility function to express 2D array data as a flat data array of objects with array
	// coordinates and data value as attributes.
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				unraveled_data.push({i:j, j:i, value:j_e});
			});
		});
		return unraveled_data;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
// # **LDMapView**

// A Backbone.View that displays a simple LDMap.  The view is normally paired with 
// a *HeatMapModel*, but works with any model that provides *data*,*cid*, and
// *title* attributes.

// optional arguments:

// 1.  {string}  **template**  The handlebars template to use. Defaults to *BaristaTemplates.d3_target*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 3.  {string}  **low\_color**  the hex color code to use as lowest value color in the LDMap, defaults to *#0000ff*
// 4.  {string}  **high\_color**  the hex color code to use as highest value color in the LDMap, defaults to *#ff0000*
// 5.  {d3.scale}  **color_scale**  custom color scale to use in the LDMap.  If supplied, low\_color and high\_color are ignored, defaults to *undefined*
// 6.  {Number}  **plot_height**  the height of the LDMap to generate in pixels, defaults to *300*
// 7.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		LDMap_view = new LDMapView({el: $("target_selector"),
//												model: new HeatmapModel(),
//												template: BaristaTemplates.d3_target,
//												bg_color: "#ffffff",
//												low_color: "#0000ff",
//												high_color: "#ff0000",
//												color_scale: undefined,
//												plot_height: 300,
//												span_class: "span12"
//												});

Barista.Views.LDMapView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "LDMapView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.HeatmapModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.low_color = (this.options.low_color !== undefined) ? this.options.low_color : "#0000ff";
		this.high_color = (this.options.high_color !== undefined) ? this.options.high_color : "#ff0000";
		this.color_scale = (this.options.color_scale !== undefined) ? this.options.color_scale : undefined;

		// set up the defualt plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 300;
		// set up the default template
		this.template = (this.options.template !== undefined) ? this.options.template : BaristaTemplates.d3_target;

		// set up the default span class
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view and draw it for the first time
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the view for the first time
		this.redraw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.$el.append(this.template({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// set up the margin
		this.margin = 50;

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.ld_cell_layer').data([]).exit().remove();
		this.ld_cell_layer = this.vis.append("g").attr("class", "ld_cell_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// determine the height and width of cells in the heatmap
		if (this.height < this.width){
			this.cell_height = (this.height - this.margin) / this.model.get('data').length;
			this.cell_width = (this.height - this.margin) / this.model.get('data')[0].length;
		}else{
			this.cell_height = (this.width - this.margin) / this.model.get('data').length;
			this.cell_width = (this.width - this.margin) / this.model.get('data')[0].length;
		}

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the LDMap cells
		this.ld_cell_layer.selectAll('.heatmap_cell').data([]).exit().remove();
		this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data).enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		// draw the row labels
		this.fg_layer.selectAll('.heatmap_rid').data([]).exit().remove();
		this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid')).enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.attr('text-anchor','end')
			.attr('dx','-.2em')
			.text(function(d){return d;});

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",this.x_offset)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.attr('text-anchor','end')
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### render
	// update the dynamic potions of the view
	render: function(){
		var self = this;
		// determine the height and width of cells in the heatmap
		var usable_height = this.height - this.margin;
		this.diamond_height = usable_height / this.model.get('data').length;
		this.cell_height = this.cell_width = Math.sqrt(Math.pow(this.diamond_height,2) / 2);

		// determine the plot offset to center the plot in its container
		this.x_center = this.width / 2;
		this.x_offset = this.x_center - (this.cell_width * this.model.get('data')[0].length / 2);

		// map the data into a flattened array of objects with array indices and value as attributes
		this.unraveled_data = this.unravel_data(this.model.get('data'));

		// set up the color scale
		if (this.color_scale === undefined){
			var values = _.pluck(this.unraveled_data,'value');
			data_min = _.min(values);
			data_max = _.max(values);
			this.color = d3.scale.linear().domain([data_min,data_max]).range([this.low_color, this.high_color]);
		}else{
			this.color = this.color_scale;
		}

		// draw the heatmap cells
		var cell_selection = this.ld_cell_layer.selectAll('.heatmap_cell').data(this.unraveled_data);
		cell_selection.enter().append('rect')
			.attr('class','heatmap_cell')
			.attr('x',this.x_center)
			.attr('y',(this.height - this.margin)/2)
			.attr('width',0)
			.attr('height',0)
			.attr('opacity',0)
			.attr('value',function(d){return d.value;})
			.attr('stroke','white')
			.attr('stroke-width',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.transition().duration(500)
			.attr('x',function(d){return self.cell_width*d.i + self.x_offset;})
			.attr('y',function(d){return self.cell_height*d.j + self.margin;})
			.attr('transform',function(d){
				var x = self.cell_width + self.x_offset;
				var y = self.cell_height + self.margin;
				return 'rotate(45,' + x + ',' + y + ')';
			})
			.attr('width',this.cell_width)
			.attr('height',this.cell_height)
			.attr('opacity',1)
			.attr('fill',function(d){return self.color(d.value);});

		cell_selection.exit().remove();

		// draw the row labels
		rid_selection = this.fg_layer.selectAll('.heatmap_rid').data(this.model.get('rid'));
		rid_selection.enter().append('text')
			.attr('class','heatmap_rid')
			.attr('x',this.x_offset)
			.attr('y',(this.height - this.margin)/2)
			.attr('opacity',0)
			.attr('text-anchor','end')
			.attr('dy','-.5em')
			.text(function(d){return d;});

		rid_selection.transition().duration(500)
			.attr('opacity',1)
			.attr('x',this.cell_width + this.x_offset)
			.attr('y',function(d,i){return self.diamond_height*i + self.diamond_height/2 + self.margin;})
			.text(function(d){return d;});

		rid_selection.exit().remove();
	},

	// ### unravel_data
	// internal utility function to express 2D array data as a flat data array of objects with array
	// coordinates and data value as attributes.
	unravel_data: function(data){
		unraveled_data = [];
		data.forEach(function(i_e,i){
			i_e.forEach(function(j_e,j){
				if (i < j){
					unraveled_data.push({i:j, j:i, value:j_e});
				}
			});
		});
		return unraveled_data;
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapHeatmapView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);});}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});
// # **PertCountView**

// A Backbone.View that shows that number of perturbagens matching a given query.  Optionally, sub-category
// counts are give for the type of perturbagen queried for.  This view is frequently paired with a
// **PertCountModel** or **CellCountModel**

// basic use:

//		count_view = new PertCountView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **well\_color**  the hex color code to use as the backgound of the wells, defaults to *#bdbdbd*
// 3.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-4"*
// 5.  {string}  **static\_text**  the static text header to use in the view, defaults to *"Reagents"*
// 6.  {array}  **categories**  an array of objects to use as categories to display, defaults to *[]*

//		count_view = new PertCountView({bg_color:"#ffffff",
//									well_color: "#bdbdbd",
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									static_text: "Reagents",
//									categories: []});


Barista.Views.PertCountView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertCountView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertCountModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#ffffff";
		this.well_color = (this.options.well_color !== undefined) ? this.options.well_color : "#bdbdbd";
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : "#1b9e77";

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static text, default if not specified
		this.static_text = (this.options.static_text !== undefined) ? this.options.static_text : "Reagents";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 120;

		// allow for construction inside of a shadow DOM
		this.shadow_el = (this.options.shadow_el !== undefined) ? this.options.shadow_el : null;
		this.shadow_root = (this.options.shadow_root !== undefined) ? this.options.shadow_root : null;

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('pert_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));

		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// set up a $div selector that can find the target div even if it is in a
		// shadow DOM
		if (this.shadow_el && this.shadow_root){
			this.$div = $(this.shadow_root).children(this.shadow_el).children("#" + this.div_string);
		}else{
			this.$div = $("#" + this.div_string);
		}

		// define the location where d3 will build its plot
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();
		this.vis = d3.select(this.$div[0]).append("svg")
						.attr("width",this.width)
						.attr("height",this.height)

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the static Text
		this.fg_layer.selectAll('.static_text').data([]).exit().remove();
		this.fg_layer.selectAll('.static_text').data([1])
							.enter().append("text")
							.attr("class","static_text")
							.attr("x",10)
							.attr("y",14)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","13pt")
							.attr("fill",this.fg_color)
							.text(this.static_text.toUpperCase());
		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",10)
							.attr("y",55)
							.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(count);

		// for each sub-category, draw a bar graph well
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect_well');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect_well")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20);})
			.attr("fill",this.well_color);

		// for each sub-category, draw a bar graph
		this.category_rect_selection = this.fg_layer.selectAll('.category_rect');
		this.category_rect_selection.data([]).exit().remove();
		this.category_rect_selection.data(this.categories).enter().append('rect')
			.attr("class","category_rect")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 80;})
			.attr("height",10)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);})
			.attr("fill",this.fg_color);

		// for each sub-category, add a name
		this.fg_layer.selectAll('.category_name').data([]).exit().remove();
		this.fg_layer.selectAll('.category_name').data(this.categories).enter().append("text")
			.attr("class","category_name")
			.attr("x",10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.text(function(d){return Barista.CMapPertTypeAlias(d._id).name;});

		// for each sub-category, add a value
		this.fg_layer.selectAll('.category_value').data([]).exit().remove();
		this.fg_layer.selectAll('.category_value').data(this.categories).enter().append("text")
			.attr("class","category_value")
			.attr("x",this.width - 10)
			.attr("y",function(d,i){return i*35 + 105;})
			.attr("font-family","'Helvetica Neue',Helvetica,Arial,sans-serif")
			.attr("font-weight","normal")
			.attr("font-size","12pt")
			.attr("text-anchor","end")
			.text("xhtml:div")
			.text(function(d){return d.count.toFixed(0);});

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = this.$div.width();
		this.height = this.$div.outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

		// transition the updated bars
		count = this.model.get('count');
		this.pert_types = this.model.get("pert_types");
		this.pert_types = _.filter(this.pert_types,function(o){return self.category_ids.indexOf(o._id) != -1;});
		var category_counts = _.pluck(this.pert_types,'count');
		var category_sum = _.reduce(category_counts, function(memo, num){ return memo + num; }, 0);
		this.pert_types.push({_id:'other', count:count - category_sum});
		this.categories.forEach(function(e,i,l){
			var ids = _.pluck(self.pert_types,'_id');
			var index = ids.indexOf(e._id);
			if (index != -1){
				self.categories[i].count = self.pert_types[index].count;
			}else{
				self.categories[i].count = 0.00001;
			}
		});
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		this.max_category_count = (this.max_category_count < 1) ? 1 : this.max_category_count;
		var category_update_selection = this.fg_layer.selectAll('.category_rect').data(this.categories);
		category_update_selection.transition().duration(500)
			.attr("width",function(d){return (self.width - 20) * (d.count / self.max_category_count);});

		// transition the updated category labels
		this.fg_layer.selectAll('.category_value').data(this.categories)
			.transition().duration(500)
			.tween("text", function(d,i) {
				var count = d.count.toFixed(0);
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)));
			    };
			});
	},

	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		//set the animate the div containing the view by applying and then removing
		// css classes that defined the transitions we want
		var $div = this.$div;
		$div.addClass("barista-base-view");
		$div.toggleClass("exporting");
		setTimeout(function(){$div.toggleClass("exporting");},500);

		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPertCountView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

// # **PertDetailView**

// A Backbone.View that shows information about a small molecule compound or gene.  This view is
// frequently paired with a PertDetailModel.

//		pert_detail_view = new PertDetailView({el: $("target_selector")});

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*

//		pert_detail_view = new PertDetailView({el: $("target_selector"),
// 												model: PertDetailModel,
// 												bg_color: "#ffffff",
// 												span_class: "col-lg-12"});
Barista.Views.PertDetailView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertDetailView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.PertDetailModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		var self = this;
		// set up the plot height
		this.options.plot_height = 260;

		// set up the open and closed state heights
		this.open_height = this.options.plot_height;
		this.closed_height = this.options.plot_height;
		this.panel_open = false;

		//populate the model with an initial compound and then render the view
		this.model.fetch("war","compound").then(function(){
			console.log(self.model.attibutes);
			self.base_initialize();
		});

	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		// keep track of our scope at this level
		var self = this;

		// render the base view components
		this.base_render();

		// (re)draw the pert_iname text
		this.fg_layer.selectAll('.pert_iname_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_iname_text').data([1])
							.enter().append("text")
							.attr("class","pert_iname_text")
							.attr("x",10)
							.attr("y",75)
							.attr("font-family","Helvetica Neue")
							.attr("font-weight","bold")
							.attr("font-size","36pt")
							.text(this.model.get('pert_iname'));

		// (re)draw the pert_summary or clear it if there pert_summary is null
		if (this.model.get('pert_summary')){
			this.render_summary({summary_string: this.model.get('pert_summary'),
								top: 45,
								bottom: 100,
								left: this.fg_layer.selectAll('.pert_iname_text').node().getComputedTextLength() + 30});
		}else{
			this.clear_summary();
		}

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 20)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});

		// render an image that will to indicate that the user can click the content to unfold the panel
		this.cevron_image_link = (this.panel_open) ? '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png' : '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png';

		this.controls_layer.selectAll('.cevron_icon').data([]).exit().remove();
		this.controls_layer.selectAll('.cevron_icon').data([1])
			.enter().append("svg:image")
			.attr("class","cevron_icon")
			.attr("xlink:href", this.cevron_image_link)
			.attr("x",this.width/2 - 9)
			.attr("y",function(){
				if (self.panel_open){
					return self.height - 15;
				}else{
					return self.height - 20;
				}
			})
			.attr("height",20)
			.attr("width", 18)
			.attr("transform", "rotate(0)")
			.style("cursor","pointer")
			.on("click", function(){self.toggle_panel_state()});

		// render a button to allow the user to expand the view to show its full content
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "more_button").data([1]).enter()
			.append("rect")
			.attr("x",0)
			.attr("y",this.height - 15)
			.attr("class",this.div_string + "more_button")
			.attr("height",15)
			.attr("width",this.width)
			.attr("opacity",0)
			.style("cursor","pointer")
			.attr("fill","#BDBDBD")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",0.25);})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0);})
			.on("click", function(){self.toggle_panel_state()})

		// render the compound or gene specfic portion of the view
		switch (this.model.get("pert_type")){
		case "trt_cp":
			this.render_compound();
			break;
		case "gene":
			this.render_gene();
			break;
		};

		return this;
	},

	// ### render_compound
	// utility to render the compound specific parts of the view
	render_compound: function(){
		this.clear_label_and_text();
		var self = this;
		// (re)draw the pert_id text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		this.fg_layer.selectAll('.pert_id_text').data([1])
							.enter()
							.append("text")
							.attr("class","pert_id_text")
							.attr("x",10)
							.attr("y",100)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(this.model.get('pert_id'));

		// draw compound structure if there is one
		if (this.model.get("structure_url")){
			this.fg_layer.selectAll('.index_text_icon').data([]).exit().remove();
			this.fg_layer.selectAll('.index_text_icon').data([1])
								.enter().append("svg:image")
								.attr("class","index_text_icon")
								.attr("xlink:href", this.model.get("structure_url"))
								.attr("x",10)
								.attr("y",100)
								.attr("height",150)
								.attr("width",300)
								.style("cursor","pointer")
								.on("click", function(){window.location = self.model.get('structure_url')});
		}

		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#E69F00")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Small Molecule Compound');

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the in_summly annotation
		this.render_label_and_value('collection', 'Collection', 'pert_icollection', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_sig', 'Signatures', 'num_sig', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('gold_sig', 'Gold Signatures', 'num_gold', false, 320);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('num_inst', 'Experiments', 'num_inst', false, 320);

		// (re)draw the in_summly annotation
		this.render_label_and_value('summly', 'In Summly', 'in_summly', false, 320);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the weight label and weight
		this.render_label_and_value('weight', 'Weight', 'molecular_wt');

		// (re)draw the formula and label
		this.render_label_and_value('formula', 'Formula', Barista.NumbersToSubscript(this.model.get('molecular_formula')),true);

		// (re)draw the logp and label
		this.render_label_and_value('logp', 'LogP', 'logp');

		// (re)draw the formula and label
		this.render_label_and_value('vendor', 'Vendor', 'pert_vendor');

		// (re)draw the pubchem_cid and label
		this.render_label_and_value('pubchem_cid', 'PubChem CID', 'pubchem_cid', false, 10, "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid'));

		// (re)draw the InChIKey label and InChIKey
		if(this.model.get("inchi_key")){
			this.render_label_and_value('inchi_key', 'InChIKey', this.model.get("inchi_key").split("InChIKey=")[1], true);
		}

		// (re)draw the InChI string
		// this.render_label_and_value('inchi_string', 'InChI String', this.model.get("inchi_string").split("InChI=")[1], true);

		// (re)draw the SMILES
		this.render_label_and_value('smiles', 'SMILES', 'canonical_smiles');

		// draw alternate names
		this.label_y_position += 20;
		if (this.model.get('alt_name')){
			this.render_label_and_value('alt_name_label', 'Alternate Names', '', true);
			this.label_y_position += 5;
			this.draw_tags('alt_name', 'Alternate Names', this.model.get('alt_name'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the compound has been profiled in
		if (this.model.get('cell_id')){
			this.render_label_and_value('cell_id_label', 'Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('cell_id', 'Cell Lines', this.model.get('cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the compound
		if (this.model.get('sig_id')){
			this.render_label_and_value('sig_id_label', 'Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('sig_id', 'Signature IDs', this.model.get('sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the compound
		if (this.model.get('sig_id_gold')){
			this.render_label_and_value('gold_sig_id_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('gold_sig_id', 'Gold Signature IDs', this.model.get('sig_id_gold'), 'white', '#BDBDBD');
		}

		// check to see if there is a pubchem id and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([]).exit().remove();
		if (this.model.get('pubchem_cid')){
			this.controls_layer.selectAll("." + this.div_string + "pubchem_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "pubchem_link no_png_export")
				.attr("x",this.width - 10)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("PubChem")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = "//pubchem.ncbi.nlm.nih.gov/summary/summary.cgi?cid=" + self.model.get('pubchem_cid')});
		}

		// check to see if there is a wikipedia url and draw a link for it if there
		// is one
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([]).exit().remove();
		if (this.model.get('wiki_url')){
			this.controls_layer.selectAll("." + this.div_string + "wiki_link").data([1]).enter().append("text")
				.attr("class", this.div_string + "wiki_link no_png_export")
				.attr("x",this.width - 80)
				.attr("y",this.height - 20)
				.attr("opacity",0.25)
				.attr("text-anchor","end")
				.style("cursor","pointer")
				.text("Wiki")
				.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
				.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
				.on("click", function(){window.location = self.model.get('wiki_url')});
		}
	},

	// ### render_gene
	// utility to render the gene specific parts of the view
	render_gene: function(){
		this.clear_label_and_text();
		var self = this;
		// draw the static index reagent text
		this.fg_layer.selectAll('.index_text').data([]).exit().remove();
		this.fg_layer.selectAll('.index_text').data([1])
							.enter().append("text")
							.attr("class","index_text")
							.attr("x",10)
							.attr("y",30)
							.attr("fill","#0072B2")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","20pt")
							.text('Gene');

		// (re)draw the static knockdown text
		this.fg_layer.selectAll('.pert_id_text').data([]).exit().remove();
		var static_text_enter = this.fg_layer.selectAll('.pert_id_text').data([1]).enter();
		if (this.model.get("has_kd")){
			this.fg_layer.selectAll('.kd_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.kd_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","kd_pert_id_text pert_id_text")
								.attr("x",10)
								.attr("y",100)
								.attr("fill","#56B4E8")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Knockdown");
		}

		// (re)draw the static overexpression text
		if (this.model.get("has_oe")){
			this.fg_layer.selectAll('.oe_pert_id_text').data([]).exit().remove();
			this.fg_layer.selectAll('.oe_pert_id_text').data([1])
								.enter()
								.append("text")
								.attr("class","oe_pert_id_text pert_id_text")
								.attr("x",350)
								.attr("y",100)
								.attr("fill","#D55E00")
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.text("Over Expression");
		}

		// render additional labels
		this.label_y_position = 100;

		// (re)draw the pert_id annotation
		this.render_label_and_value('trt_sh_pert_id', 'ID', 'trt_sh_pert_id');
		this.render_label_and_value('trt_oe_pert_id', 'ID', 'trt_oe_pert_id', false, 350, null,false);

		// (re)draw the signatures annotation
		this.render_label_and_value('trt_sh_num_sig', 'Signatures', 'trt_sh_num_sig');
		this.render_label_and_value('trt_oe_num_sig', 'Signatures', 'trt_oe_num_sig', false, 350, null,false);

		// (re)draw the gold signatures annotation
		this.render_label_and_value('trt_sh_num_gold', 'Gold Signatures', 'trt_sh_num_gold');
		this.render_label_and_value('trt_oe_num_gold', 'Gold Signatures', 'trt_oe_num_gold', false, 350, null,false);

		// (re)draw the experiments annotation
		this.render_label_and_value('trt_sh_num_inst', 'Experiments', 'trt_sh_num_inst');
		this.render_label_and_value('trt_oe_num_inst', 'Experiments', 'trt_oe_num_inst', false, 350, null,false);


		// set the y position to be below the fold
		this.label_y_position = 260;

		// (re)draw the vector_id annotation
		this.render_label_and_value('trt_sh_vector_id', 'Knockdown Vector', 'trt_sh_vector_id');

		// (re)draw the target region annotation
		this.render_label_and_value('trt_sh_target_region', 'Knockdown Target Region', 'trt_sh_target_region');

		// (re)draw the 6 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq6', 'Knockdown 6 Base Seed Sequence', 'trt_sh_seed_seq6');

		// (re)draw the 7 base seed annotation
		this.render_label_and_value('trt_sh_seed_seq7', 'Knockdown 7 Base Seed Sequence', 'trt_sh_seed_seq7');

		// (re)draw the target sequence annotation
		this.render_label_and_value('trt_sh_target_seq', 'Knockdown Target Sequence', 'trt_sh_target_seq');

		// (re)draw the oligo sequence annotation
		this.render_label_and_value('trt_sh_oligo_seq', 'Knockdown Oligo Sequence', 'trt_sh_oligo_seq');

		// draw the cell lines that the knockdown has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_sh_cell_id')){
			this.render_label_and_value('trt_sh_cell_id_label', 'Knockdown Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_cell_id', 'Cell Lines', this.model.get('trt_sh_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the knockknockdown
		if (this.model.get('trt_sh_sig_id')){
			this.render_label_and_value('trt_sh_sig_id_label', 'Knockdown Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id', 'Signature IDs', this.model.get('trt_sh_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the knockdown
		if (this.model.get('trt_sh_sig_id_gold')){
			this.render_label_and_value('trt_sh_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_sh_sig_id_gold', 'Knockdown Gold Signature IDs', this.model.get('trt_sh_sig_id_gold'), 'white', '#BDBDBD');
		}

		// draw the cell lines that the over expression has been profiled in
		this.label_y_position += 20;
		if (this.model.get('trt_oe_cell_id')){
			this.render_label_and_value('trt_oe_cell_id_label', 'Over Expression Cell Lines', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_cell_id', 'Cell Lines', this.model.get('trt_oe_cell_id'), 'white', '#CC79A7');
		}

		// draw the signatures for the over expression
		if (this.model.get('trt_oe_sig_id')){
			this.render_label_and_value('trt_oe_sig_id_label', 'Over Expression Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id', 'Signature IDs', this.model.get('trt_oe_sig_id'), 'white', '#BDBDBD');
		}

		// draw the gold signatures for the over expression
		if (this.model.get('trt_oe_sig_id_gold')){
			this.render_label_and_value('trt_oe_sig_id_gold_label', 'Gold Signature IDs', '', true);
			this.label_y_position += 5;
			this.draw_tags('trt_oe_sig_id_gold', 'Over Expression Gold Signature IDs', this.model.get('trt_oe_sig_id_gold'), 'white', '#BDBDBD');
		}


		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		this.render();
		return this;
	},

	// ### render_label_and_value
	// utility function to draw a standard label and value for that label under
	// the main pert_iname and pert_id text.  If pass_model_field_as_text is true,
	// pass the value in model_field as text instead of serching for it in the model
	render_label_and_value: function(class_name_base, label_text, model_field, pass_model_field_as_text, x_pos_base, value_link,increment_y){
		// set up a local variable to keep our scope straight
		var self = this;

		// make sure that we have a label_y_position set
		this.label_y_position = (this.label_y_position !== undefined) ? this.label_y_position: 100;
		if (increment_y === undefined){
			increment_y = true;
		}
		if (increment_y){
			this.label_y_position += 25;
		}


		// make sure that there is a base position for the x_label set
		var x_pos_base = (x_pos_base !== undefined) ? x_pos_base: 10;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		// (re)draw the label
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + '_label_text').data([1])
							.enter()
							.append("text")
							.attr("class",class_name_base + '_label_text label_and_text')
							.attr("x",x_pos_base)
							.attr("y",this.label_y_position)
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(label_text + ':');

		// (re)draw the text
		this.fg_layer.selectAll('.' + class_name_base + '_text').data([]).exit().remove();
		var model_text = '';
		if (pass_model_field_as_text){
			model_text = model_field;
		}else{
			model_text = this.model.get(model_field);
		}
		var x_pos = x_pos_base + this.fg_layer.selectAll('.' + class_name_base + '_label_text').node().getComputedTextLength() + 10;

		// if there is a value link supplied, use it as a link on the text, otherwise, render plain text
		if (value_link){
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.style("cursor","pointer")
								.on("mouseover",function(){d3.select(this).transition().duration(500).attr("fill","#56B4E9");})
								.on("mouseout",function(){d3.select(this).transition().duration(500).attr("fill","#BDBDBD");})
								.on("click", function(){window.location = value_link})
								.text(model_text);
		}else{
			this.fg_layer.selectAll('.' + class_name_base + '_text').data([1])
								.enter()
								.append("text")
								.attr("class",class_name_base + '_text label_and_text')
								.attr("x",x_pos)
								.attr("y",this.label_y_position)
								.attr("font-family","Helvetica Neue")
								.attr("font-size","14pt")
								.attr("fill","#BDBDBD")
								.text(model_text);
		}
	},

	// ### render_summary
	// utility function to break a long summary string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **summary_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	render_summary: function(options){
		var self = this;

		// default arguments if they are not present
		summary_string = this.model.get("pert_summary");
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;

		// clear existing summary
		this.clear_summary();

		// compute the number of lines we have room for
		this.line_height = 15;
		this.num_lines_allowed = Math.floor((bottom_edge - top_edge) / this.line_height);

		// compute the number of characters per line we will allow and how
		// many lines the summary would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		this.num_char = Math.floor(this.line_width / 13 / .75);
		this.num_char = (this.num_char > 60) ? 60 : this.num_char;
		this.num_lines = Math.ceil(summary_string.length / this.num_char);

		// compute the line splits to display in the summary
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && summary_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? summary_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': summary_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			}else{
				var l = summary_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				break;
			}
		}

		// draw lines
		self.fg_layer.selectAll('.' + self.div_string + 'summary_text' + i).data(this.lines)
				.enter()
				.append("text")
				.attr("class",self.div_string + "summary_text")
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				.attr("font-family","Helvetica Neue")
				.attr("font-size","13pt")
				.attr("fill","#BDBDBD")
				// .attr("text-anchor", "middle")
				.text(function(d){return d;});
	},

	// ### toggle_panel_state
	// utility to open or close the view
	toggle_panel_state: function(){
		var self = this;
		var h;
		if (this.panel_open){
			h = this.options.plot_height;
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = false;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/down_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 20);
		}else{
			h = this.open_height
			$("#" + this.div_string).animate({height:h},500);
			this.panel_open = true;
			this.controls_layer.selectAll(".cevron_icon").attr("xlink:href", '//coreyflynn.github.io/Bellhop/img/up_arrow_select.png')
			this.controls_layer.selectAll('.cevron_icon').transition().duration(500).attr("y",h - 15);
		}
		this.controls_layer.selectAll("." + this.div_string + "more_button").transition().duration(500).attr("y",h - 15);
		this.controls_layer.selectAll("." + this.div_string + "wiki_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "pubchem_link").transition().duration(500).attr("y",h - 20);
		this.controls_layer.selectAll("." + this.div_string + "png_export").transition().duration(500).attr("y",h - 20);
		this.vis.transition().duration(500).attr("height",h);
	},

	// ### draw tags
	// utility function to draw tags given an array.
	draw_tags: function(class_name_base, label_text, data, fg_color, tag_color){
		var x_offsets = [10];
		var row_number = 0;
		var y_offsets = [];
		var lengths = [];
		var tags = [];
		var self = this;
		var EmSize = Barista.getEmSizeInPixels(this.div_string);

		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.' + class_name_base + 'tag_list_text').data(data).enter().append('text')
			.attr("class", class_name_base + "tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = x_offsets[i];
				if (current_x_offset + lengths[i] > self.width){
					x_offsets[i] = 5;
					x_offsets.push(lengths[i] + x_offsets[i]);
					row_number += 1;
				}else{
					x_offsets.push(lengths[i] + x_offsets[i]);
				}
				y_offsets.push((row_number * 1.5 + 1));
				return x_offsets[i];
			})
			.attr("y",function(d,i){return self.label_y_position + y_offsets[i] * EmSize;})
			.attr("opacity",1)
			.attr("fill",fg_color)

		// draw the background of all the tags
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.' + class_name_base + 'tag_list_rect').data(data).enter().append('rect')
			.attr("class", class_name_base + "tag_list_rect")
			.attr("x",function(d,i){return x_offsets[i] - 5;})
			.attr("y",function(d,i){return self.label_y_position + (y_offsets[i] - 1) * EmSize;})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",tag_color);

		// update the label_y_position
		this.label_y_position += 10 + y_offsets.slice(-1)[0] * EmSize;

		// update the open_height to the total height of all that we have drawn
		this.open_height = (this.options.plot_height > this.label_y_position + 40) ? this.options.plot_height : this.label_y_position + 40;

		return this
	},

	// ### clear_summary
	// utility function to clear the pert summary
	clear_summary: function(){
		this.fg_layer.selectAll('.summary_text').data([]).exit().remove();
	},

	// ### clear_label_and_text
	// utility function to clear all of the labels and text generated with the
	// render_label_and_value function
	clear_label_and_text: function(){
		this.fg_layer.selectAll('.label_and_text').data([]).exit().remove();
	}
});

/**
A Backbone.View that exposes a custom search bar.  The search bar provides autocomplete
functionality for Connectivity Map pert\_inames and cell\_ids.  When the user types in the
search view's input, a "search:DidType" event is fired.

@class PertSearchBar
@constructor
@extends Backbone.View
**/
Barista.Views.PertSearchBar = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PertSearchBar",

	initialize: function(){
		var self = this;


		/**
		determines wether or not the search view will match cell lines for autocomplete

		@property match_cell_lines
		@default true
		@type Boolean
		**/

		// set up custom Datasets if they are passed in the constructor
		this.datasets = (this.options.datasets !== undefined) ? this.options.datasets : [Barista.Datasets.CellID,Barista.Datasets.PertIName];

		// determine wether or not we will match cell line strings in the autocomplete
		this.match_cell_lines = (this.options.match_cell_lines !== undefined) ? this.options.match_cell_lines : true;

		// custom placeholder
		this.placeholder = (this.options.placeholder !== undefined) ? this.options.placeholder : 'search gene, compound or cell type name';

		// grab cell_ids and store them as an atribute of the view
		var cellinfo = Barista.APIURL + '/a2/cellinfo?callback=?';
		var params = {q:'{"cell_id":{"$regex":""}}',d:"cell_id"};
		$.getJSON(cellinfo,params,function(res){
			self.cell_lines = res;
			self.render();

			// once the view is rendered, bind a change event to trigger a "search:DidType" event from the view
			var change_callback = function () {
				// get the value from the search bar. If the first character is '*',
				// replace it with '.*' so we use the wildcard as expected in API
				// saerches
				var val  = $("#search",self.el).val();
				val = (val[0] === '*') ? val.replace('*','.*') : val;

				var type = "";
				if (self.cell_lines.indexOf(val) != -1 && self.match_cell_lines){
					type = "cell";
				}

				/**
				Fired when the text in the view's search box changes

				@event search:DidType
				@param {Object} [msg={val:"",type:""}] an object containing the message of the event
				@param {String} [msg.val=""] the string val of the views search bar at the time of the event
				@param {String} [msg.type=""] the type of message being passed, either "" or "cell". "cell" is passed, if the string matches a cell line and match\_cell\_lines is set
				**/
				self.trigger("search:DidType",{val: val,type: type});
			};

			$("#search",self.el).bind('input propertychange change', _.throttle(change_callback,250));

			// bind a search:DidType event to the typeahead events coming out of typeahead.js
			$(".typeahead",self.el).bind('typeahead:selected typeahead:autocompleted', function (obj,datum) {
				var val = datum.value;
				self.trigger("search:DidType",{val: val,type: datum.type});
			});
		});

	},


	/**
    Gets the current text entered in the view's search bar

    @method get_val
    **/
	get_val: function(){
		return $("#search",this.el).val();
	},

	/**
    fills the view's search bar with a random pert_iname and triggers a "search:DidType" event

    @method random_val
    **/
	random_val: function(){
		var self = this;
		skip = Math.round(Math.random()*40000);
		var pertinfo = Barista.APIURL + '/a2/pertinfo?callback=?';
		params = {q: '{"pert_type":{"$in":["trt_cp","trt_sh"]}}',
					f:'{"pert_iname":1}',
										l:1,
										sk:skip};
		$.getJSON(pertinfo,params,function(res){
			var val = res[0].pert_iname;
			$("#search",this.el).val(val);
			self.trigger("search:DidType",{val: val,type: 'single'});
		});
	},

	set_val: function(new_val,new_type){
		new_type = (new_type !== undefined) ? new_type : "single";
		$("#search",this.el).val(new_val);
		this.trigger("search:DidType",{val: new_val,type: new_type});
	},

	/**
    renders the view

    @method render
    **/
	render: function(){
		var self = this;
		// load the template into the view's el tag
		this.$el.append(BaristaTemplates.CMapPertSearchBar({placeholder: self.placeholder}));

		$('#search',this.$el).typeahead(self.datasets);
	}
});

// # **PlatformSummaryView**

// A Backbone.View that shows a quick view card used to display the available data on lincscloud.org
// for a given platform. The widget displays a count of the available experiments on the platform, 
// a description of the platform, a widget to extract a listing of the data available, and a link 
// to a platform specific app for viewing the contents of the available data on that platform.  
// This view is frequently paired with a **PlatformSummaryModel**

// basic use:

//		platform_summary_view = new PlatformSummaryView();

// optional arguments:

// ...

//		platform_summary_view = new PlatformSummaryView({ 
//									... });


Barista.Views.PlatformSummaryView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "PlatformSummaryView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.GenericCountModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up color and font defaults
		this.white_color = "#ffffff";
		this.black_color = "#000000";
		this.orange_color = "#e69f00";
		this.sky_blue_color = "#56b4e9";
		this.bluish_green_color = "#009e73";
		this.yellow_color = "#f0e442";
		this.blue_color = "#0072b2";
		this.vermillion_color = "#d55e00";
		this.reddish_purple_color = "#cc79a7";
		this.opaque_opacity = 1;
		this.semi_opacity = 0.25;
	  this.text_font_family = "'Helvetica Neue',Helvetica,Arial,sans-serif";
	  this.brand_font_family = "'Memphis LT Std',Times,serif";
	  this.navigation_font_family = "Tahoma,Verdana,sans-serif";
	  this.bold_font_weight = "bold";
	  this.medium_font_weight = "medium";
	  this.regular_font_weight = "normal";
	  this.lowercase_font_transform = "lowercase";
	  this.uppercase_font_transform = "uppercase";
	  this.sentence_font_transform = "none";
	  this.normal_letter_spacing = "normal";
	  this.wide_letter_spacing = "2pt";
	  this.fonts_default = {
  	  brand: {
  	  	family: this.brand_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.wide_letter_spacing,
  	  	color: this.black_color
  	  },
  	  control: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.lowercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.sky_blue_color
  	  },
  	  count: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  header: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "13pt",
  	  	transform: this.uppercase_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  navigation: {
  	  	family: this.navigation_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "9pt",
  	  	transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  paragraph: {
  	  	family: this.text_font_family,
  	  	weight: this.regular_font_weight,
  	  	size: "12pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  subhead: {
  	  	family: this.text_font_family,
  	  	weight: this.medium_font_weight,
  	  	size: "14pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  },
  	  title: {
  	  	family: this.text_font_family,
  	  	weight: this.bold_font_weight,
  	  	size: "36pt",
  		  transform: this.sentence_font_transform,
  	  	spacing: this.normal_letter_spacing,
  	  	color: this.black_color
  	  }
	  };

		// set up color and font appearance options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : this.white_color;
		this.fg_color = (this.options.fg_color !== undefined) ? this.options.fg_color : this.orange_color;
		this.fonts = this.fonts_default;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "col-lg-4";

		// set up static banner text, default if not specified
		this.banner_text = (this.options.banner_text !== undefined) ? this.options.banner_text : "Platform";

		// set up static description text, default if not specified
		this.description_text = (this.options.description_text !== undefined) ? this.options.description_text : "Platform description";

		// set up static experiments text, default if not specified
		this.experiments_text = (this.options.experiments_text !== undefined) ? this.options.experiments_text : "Experiments";

		// set up the default plot height
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : 305;

		// set up the platform icon
		this.platform_icon = (this.options.platform_icon !== undefined) ? this.options.platform_icon : '//coreyflynn.github.io/Bellhop/img/cmap_logo_small.png';

		// set up static export table, default if not specified
		this.export_text = (this.options.export_text !== undefined) ? this.options.export_text : "download table";
		this.exporting_text = (this.options.exporting_text !== undefined) ? this.options.exporting_text : "Exporting";

		// set up static view details, default if not specified
		this.details_text = (this.options.details_text !== undefined) ? this.options.details_text : "view details";
		this.details_url = (this.options.details_url !== undefined) ? this.options.details_url : "//apps.lincscloud.org";
		this.details_target = (this.options.details_target !== undefined) ? this.options.details_target : "_self";

		// set up default categories to display
		this.categories = (this.options.categories !== undefined) ? this.options.categories : [];
		this.category_ids = _.pluck(this.categories,'_id');

		// get categories from model and determine the maximum category count
		// this.categories = this.model.get('platform_types');
		this.max_category_count = _.max(_.pluck(this.categories,'count'));
		
		// bind render to model changes
		this.listenTo(this.model,'change', this.render);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.redraw();

		// bind window resize events to redraw.
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		this.div_string = 'd3_target' + new Date().getTime();
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### redraw
	// completely redraw the view.
	redraw: function(){
		this.init_panel();
		this.render();
	},
	
	apply_font: function(font, target) {
		return target.attr("font-family", font.family)
			.attr("font-weight", font.weight)
			.attr("font-size", font.size)
			.attr("style", "text-transform: " + font.transform +";")
			.attr("letter-spacing", font.spacing)
			.attr("fill", font.color);
	},
	
	font_to_css_style: function(font) {
		return "font:"+ font.weight +" " + font.size + " " + font.family + "; "
			+ "color:" + font.color + "; " 
			+ "text-transform:" + font.transform + "; " 
			+ "letter-spacing:" + font.spacing + "; ";
	},

	// ### init_panel
	// initialize the static parts of the view's panel
	init_panel: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		
		// set up component row positioning
		this.hrule0 = 60;
		this.hrule1 = this.hrule0 + 30;
		this.hrule2 = this.hrule1 + 30;
		this.hrule3 = this.hrule2 + 120;
		this.hrule4 = this.hrule3 + 30;
		this.hrule5 = this.hrule4 + 25;

		// rescale the width of the vis
		this.vis.transition().duration(1).attr("width",this.width);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		this.vis.selectAll('.controls_layer').data([]).exit().remove();
		this.controls_layer = this.vis.append("g").attr("class", "controls_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// draw the banner
		this.fg_layer.selectAll('.banner').data([]).exit().remove();
		var banner = this.fg_layer.append("g").attr("class", "banner");
		banner.selectAll('.banner_rect').data([]).exit().remove();
		banner.append("rect").attr("class", "banner_rect")
			.attr("width", this.width)
			.attr("height", this.hrule1)
			.attr("fill", this.fg_color);
		banner.selectAll('.banner_text').data([]).exit().remove();
		var bt = this.apply_font(this.fonts.title, banner.selectAll('.banner_text').data([1])
							.enter().append("text")
							.attr("class","banner_text")
							.attr("y",this.hrule0)
							.text(this.banner_text));
    // center the banner text
		bt.each(function() {
			var text_width = this.getBBox().width;
			var start_pos = (self.width - text_width) / 2;
			bt.attr("x", start_pos);
		});

		// draw the description text
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// draw the generic count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		var count_text = this.fg_layer.selectAll('.count').data([]).exit().remove();
		count_text = this.apply_font(this.fonts.count, this.fg_layer.selectAll('.count').data([1])
							.enter().append("text")
							.attr("class","count")
							.attr("x",40)
							.attr("y",this.hrule3)
							.text(count));
		
		// draw the experiments text
		this.fg_layer.selectAll('.experiments_text').data([]).exit().remove();
		this.apply_font(this.fonts.header, this.fg_layer.selectAll('.experiments_text').data([1])
							.enter().append("text")
							.attr("class","experiments_text")
							.attr("x",40)
							.attr("y",this.hrule4)
							.text(this.experiments_text));

		// draw the static platform icon
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.fg_layer.selectAll('.platform_icon').data([1])
							.enter().append("svg:image")
							.attr("class","platform_icon")
			        .attr("xlink:href", this.platform_icon)
							.attr("x",40)
							.attr("y",this.hrule2)
							.attr("height",60)
							.attr("width",60);

		// add a png export overlay
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
		.attr("class", this.div_string + "png_export no_png_export")
		.attr("x",40)
		.attr("y",this.hrule5)
		.attr("opacity",self.semi_opacity)
		.style("cursor","pointer")
		.text("png")
		.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",self.opaque_opacity).attr("fill",self.sky_blue_color);})
		.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",self.semi_opacity).attr("fill",self.black_color);})
		.on("click",function(){self.save_png();});

		// css inline styling, this value can have single quotes in it, so use double-quotes to apply it
		this.control_css_style = "text-decoration:none; "+this.font_to_css_style(this.fonts.control);
		
		// determine control positioning based on display size
		this.details_x = this.width - 135;
		this.details_y = this.hrule4 - 15; // 15 is a hack adjusting for line height
		this.export_x = this.width - 270;
		this.export_y = this.details_y;
		if (this.export_x < 180) {
			// move the export above the details
			this.export_x = this.details_x;
			this.export_y = this.details_y - 30;
		}
		
		// add the export table control
		this.render_export_control(this.export_text, "icon-download", function(){self.download_table();});

		// add the view details control
		this.controls_layer.selectAll('.details_text').data([]).exit().remove();
		this.controls_layer.selectAll('.details_text').data([1])
							.enter().append("foreignObject")
							.attr("class","details_text")
							.attr("width", 110)
							.attr("height", 110)
							.attr("x", this.details_x)
							.attr("y", this.details_y)
							.style("cursor","pointer")
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<a href='"+this.details_url+"' target='"+this.details_target+"' style=\"" + this.control_css_style + "\"><i class='icon-chevron-sign-right'></i> "+this.details_text+"</a>");
	},
	
	render_export_control: function(message, icon_class, handler) {
		this.controls_layer.selectAll('.export_text').data([]).exit().remove();
		return this.controls_layer.selectAll('.export_text').data([1])
							.enter().append("foreignObject")
							.attr("class","export_text")
							.attr("width", 130)
							.attr("height", 100)
							.attr("x", this.export_x)
							.attr("y", this.export_y)
							.style("cursor","pointer")
							.on("click",handler)
							.append("xhtml:body")
							.style("background-color", this.bg_color)
							.html("<span style=\"" + this.control_css_style + "\"><i class='" + icon_class + "' style='margin-right:2px;'></i>" + message + "</span>");
	},

	// ### download_table
	// download the backing data that matches the current model state.
	download_table: function() {
		var self = this;

		// indicate that we are downloading something
		this.render_export_control(this.exporting_text, "icon-refresh icon-spin", null);
		

		// set up api call parameters
		var url = this.model.get("url");
		var params = {q: '{"' + this.model.get("search_field") + '":{"$regex":"' + this.model.get("search_string") + '","$options":"i"}}',
            l:0};

        // make a JSON API call to grab data for the table
		$.getJSON(url,params,function(res){
			// get the headers for the table we are going to write out
			var headers = _.keys(res[0]);

			// We are going to write a one line in the table for each object returned by the API
			// call.  Start by putting the headers in and then write each object to the table
			var lines = [headers.join('\t')];
			res.forEach(function(r){
				var line_data = [];
				// for each data name in the table, grab the data. translate html
				// content to plain text where required
				headers.forEach(function(h){
						line_data.push(String(r[h]));
				});
				line_string = line_data.join('\t');
				lines.push(line_string);
			});
			var lines_string = lines.join("\n");
			var blob = new Blob([lines_string], {type: "text/plain;charset=utf-8"});
			var timestamp = new Date().getTime();
			saveAs(blob, "CMapTable" + timestamp + ".txt");

			// indicate that we are done
			self.render_export_control(self.export_text, "icon-download", function(){self.download_table();});
		});
	},
	
	render: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// draw the pert count info
		var count = this.model.get('count');
		if (count === undefined){
			count = 0;
		}
		this.vis.selectAll('.count').data([1])
			.transition().duration(500)
			.tween("text", function() {
			    var i = d3.interpolate(this.textContent.replace(",",""), count);
			    return function(t) {
			      this.textContent = Barista.numberWithCommas(Math.round(i(t)))	;
			    };
			});

	},

	// ### render_description
	// utility function to break a long description string into a multiline
	// and draw it at the desired location

	// options

	// 1.  {string}  **description_string**  the string to be displayed, defaults to *""*
	// 2.  {right}  **right**  the x position to place the **right** edge of text, defaults to *this.width*
	// 3.  {left}  **left**  the x position to place the **left** edge of text, defaults to *this.width - 500*
	// 4.  {top}  **top**  the y position to place the **top** edge of text, defaults to *0*
	// 5.  {bottom}  **bottom**  the y position to place the **bottom** edge of text, defaults to *100*
	// 6.  {node_class}  **node_class**  the class used for locating the text node within fg_layer, defaults to *""*
	render_description: function(options){
		var self = this;

		// default arguments if they are not present
		description_string = (options.description_string !== undefined) ? options.description_string : "";
		top_edge = (options.top !== undefined) ? options.top : 0;
		bottom_edge = (options.bottom !== undefined) ? options.bottom : 100;
		right_edge = (options.right !== undefined) ? options.right : this.width;
		left_edge = (options.left !== undefined) ? options.left : this.width - 500;
		node_class = (options.node_class != undefined) ? options.node_class : "";
    node_class_selector = '.' + node_class;
    
		// clear existing description
		this.fg_layer.selectAll(node_class_selector).data([]).exit().remove();

		// compute the number of lines we have room for
		this.line_height = 15;
		// if the layout is small we can't have more than 5 lines or descriptions collide with the count
		this.num_lines_allowed = Math.min(5, Math.floor((bottom_edge - top_edge) / this.line_height));

		// compute the number of characters per line we will allow and how
		// many lines the description would need if we rendered all of it
		this.line_width = right_edge - left_edge;
		// 12 pt font
		this.num_char = Math.floor(this.line_width / 12 / .65);
		this.num_lines = Math.ceil(description_string.length / this.num_char);

		// compute the line splits to display in the description
		this.lines = [];
		for (var i=0; i<this.num_lines; i++){
			if (i < this.num_lines_allowed - 1){
				var l = (description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(-1) != " " && description_string.slice(i*this.num_char,(i+1)*this.num_char).slice(this.num_char-1,this.num_char) != "") ? description_string.slice(i*this.num_char,(i+1)*this.num_char)  + '-': description_string.slice(i*this.num_char,(i+1)*this.num_char);
				this.lines.push(l);
			} else {
				var l = description_string.slice(i*this.num_char,(i+1)*this.num_char - 3) + '...';
				this.lines.push(l);
				// note: the class that had the original line-splitting code does not have this break, and that may be a bug
				break;
			}
		}

		// draw lines
		this.apply_font(this.fonts.paragraph, self.fg_layer.selectAll(node_class_selector).data(this.lines)
				.enter()
				.append("text")
				.attr("class",node_class)
				.attr("x",left_edge)
				.attr("y",function(d,i){return top_edge + 13 + i*15;})
				// .attr("text-anchor", "middle")
				.text(function(d){return d;}));
	},
	
	// ### savePng
	// save the current state of the view into a png image
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.width;
		var height = this.height;
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// temporarily fix content to work around canvg rendering problems
		this.fg_layer.selectAll('.platform_icon').data([]).exit().remove();
		this.render_description({
			description_string: this.description_text,
			left: 40,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});
		
		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		
		// restore content
		this.fg_layer.selectAll('.platform_icon').data([1])
			.enter().append("svg:image")
			.attr("class","platform_icon")
	    .attr("xlink:href", this.platform_icon)
			.attr("x",40)
			.attr("y",this.hrule2)
			.attr("height",60)
			.attr("width",60);
		this.render_description({
			description_string: this.description_text,
			left: 150,
			top: this.hrule2,
			bottom: this.height,
			node_class: 'description_text'
		});

		// render to the canvas
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "BaristaPlatformSummaryView" + new Date().getTime() + ".png";
		if (canvas.toBlob){
			canvas.toBlob(function(blob){
				saveAs(blob,filename);
				});
		}
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}
});

// # **ScatterPlotView**
// A Backbone.View that displays a scatter plot.  the view's model is assumed to have the same defaults
// as specified in **ScatterPlotModel**

// basic use:

//		scatter_plot_view = new ScatterPlotView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {string}  **scale_by**  an attribute in the model's meta data object to scale points by, defaults to *undefined*
// 5.  {Array}  **x_range**  a two element array specifying the x plotting bounds of the plot, defaults to *[min(x_data),max(x_data)]*
// 6.  {Array}  **y_range**  a two element array specifying the y plotting bounds of the plot, defaults to *[min(y_data),max(y_data)]*
// 7.  {Bool}  **x_log**  if set to true, plots the x axis on a log scale, defaults to *false*
// 8.  {Bool}  **y_log**  if set to true, plots the y axis on a log scale, defaults to *false*
// 9. {Number} **x_min_lock** if set, locks the minimum of the x_range at the given value. Ignored if x_range is set. defaults to *undefined*
// 10. {Number} **y_min_lock** if set, locks the minimum of the y_range at the given value. Ignored if y_range is set. defaults to *undefined*
// 11. {Number} **x_max_lock** if set, locks the maximum of the x_range at the given value. Ignored if x_range is set. defaults to *undefined*
// 12. {Number} **y_max_lock** if set, locks the maximum of the y_range at the given value. Ignored if y_range is set. defaults to *undefined*
// 13. {Bool} **x_min_expand** if set, allows the minimum of the x_range to expand if data is found below it. defaults to *false*
// 14. {Bool} **y_min_expand** if set, allows the minimum of the y_range to expand if data is found below it. defaults to *false*
// 15. {Bool} **x_max_expand** if set, allows the maximum of the x_range to expand if data is found above it. defaults to *false*
// 16. {Bool} **y_max_expand** if set, allows the maximum of the y_range to expand if data is found above it. defaults to *false*
// 17.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		scatter_plot_view = new ScatterPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									x_range: undefined,
//									y_range: undefined,
//									x_log: false,
//									y_log: false,
//									x_min_lock: undefined,
//									y_min_lock: undefined,
//									x_max_lock: undefined,
//									y_max_lock: undefined,
//									x_min_expand: false,
//									y_min_expand: false,
//									x_max_expand: false,
//									y_max_expand: false,
//									plot_height: 120});

Barista.Views.ScatterPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.ScatterPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range and determine if are going to draw the axes dynamically
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;
		this.dynamic_x_range = (this.x_range === undefined) ? true : false;
		this.dynamic_y_range = (this.y_range === undefined) ? true : false;

		// set up axis expansion and lock features
		this.x_min_lock = (this.options.x_min_lock !== undefined) ? this.options.x_min_lock : undefined;
		this.y_min_lock = (this.options.y_min_lock !== undefined) ? this.options.y_min_lock : undefined;
		this.x_max_lock = (this.options.x_max_lock !== undefined) ? this.options.x_max_lock : undefined;
		this.y_max_lock = (this.options.y_max_lock !== undefined) ? this.options.y_max_lock : undefined;

		this.x_min_expand = (this.options.x_min_expand !== undefined) ? this.options.x_min_expand : undefined;
		this.y_min_expand = (this.options.y_min_expand !== undefined) ? this.options.y_min_expand : undefined;
		this.x_max_expand = (this.options.x_max_expand !== undefined) ? this.options.x_max_expand : undefined;
		this.y_max_expand = (this.options.y_max_expand !== undefined) ? this.options.y_max_expand : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();
	},

	// ### redraw
	// completely redraw the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up x and y ranges
		this.set_ranges();

		// set up x and y scaling
		this.set_scales();		

		// build Axes
		this.build_axes();

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis x-axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(this.xAxis);

		this.bg_layer.append("g")
			.attr("class", "axis y-axis")
			.attr("transform", "translate(" + this.margin + ",0)")
			.call(this.yAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// build a scaling function
		this.set_scaling_function();

		// plot the data points
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.bg_layer.selectAll('.data_point').data([]).exit().remove();
		this.bg_layer.selectAll('.data_point').data(this.x_data).enter().append('circle')
			.attr("class","data_point")
			.attr("cx",this.x_scale(0))
			.attr("cy",this.y_scale(0))
			.attr("opacity",0.5)
			.attr("r",0)
			.attr("fill",this.fg_color);

		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('x_axis_title'));

		// plot the y axis label
		this.bg_layer.selectAll('.y_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.y_axis_label').data([1]).enter().append('text')
			.attr("class","y_axis_label axis_label")
			// .attr("transform", "rotate(-90)")
			.attr("y", this.margin)
			.attr("x", this.margin + 2)
			.attr("dy","1em")
			.style("text-anchor","left")
			.text(this.model.get('y_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
	var self = this;
	
	// get model data
	this.x_data = this.model.get('x_data');
	this.y_data = this.model.get('y_data');
	
	// set up x and y ranges
	this.set_ranges();

	// set up x and y scaling
	this.set_scales();

	// build Axes
	this.build_axes();

	// build a scaling function
	this.set_scaling_function();

	// plot the data points, appending where required
	this.points_selection = this.bg_layer.selectAll('.data_point').data(this.x_data);
	this.points_selection.enter().append('circle')
		.attr("class","data_point")
		.attr("cx",this.x_scale(0))
		.attr("cy",this.y_scale(0))
		.attr("opacity",0.5)
		.attr("r",0)
		.attr("fill",this.fg_color);

	// transition points
	this.points_selection.transition().duration(500)
		.attr("cx",this.x_scale)
		.attr("cy",function(d,i){return self.y_scale(self.y_data[i]);})
		.attr("r",function(d,i){
		if (self.scale_by === undefined){
			return 10;
		}else{
			return self.dot_scaler(self.scale_data[i]);
		}});

	// remove excess points 
	this.points_selection.exit().remove();

	// transition the axes
	this.vis.selectAll('.x-axis').transition().duration(500).call(this.xAxis);
	this.vis.selectAll('.y-axis').transition().duration(500).call(this.yAxis);
	this.style_axes();
	},

	// ### set_ranges
	// utility function used to get the x and y ranges used in the plot
	set_ranges: function(){
		var x_data,y_data,min,max;
		// calculate the x_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_x_range === true){
			x_data = this.model.get('x_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (x_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.x_min_lock === undefined){
					min = _.min(x_data);
				}else{
					if (this.x_min_expand){
						data_min = _.min(x_data);
						min = (this.x_min_lock > data_min) ? data_min : this.x_min_lock;
					}else{
						min = this.x_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.x_max_lock === undefined){
					max = _.max(x_data);
				}else{
					if (this.x_max_expand){
						data_max = _.max(x_data);
						max = (this.x_max_lock < data_max) ? data_max : this.x_max_lock;
					}else{
						max = this.x_max_lock;
					}
				}
				this.x_range = [min,max];
			}else{
				this.x_range = [0,0];
			}
		}

		// calculate the y_range. If we need to caluclate it dynamically, check the lock and expand
		// parameters for the axis
		if (this.dynamic_y_range === true){
			y_data = this.model.get('y_data');

			// if the data is of length larger than 1, calculate the range, otherwise set the range to [0,0]
			if (y_data.length > 0 ){
				// check the min lock and expand flags and report the min of the range accordingly
				if (this.y_min_lock === undefined){
					min = _.min(y_data);
				}else{
					if (this.y_min_expand){
						data_min = _.min(y_data);
						min = (this.y_min_lock > data_min) ? data_min : this.y_min_lock;
					}else{
						min = this.y_min_lock;
					}
				}

				// check the max lock and expand flags and report the max of the range accordingly
				if (this.y_max_lock === undefined){
					max = _.max(y_data);
				}else{
					if (this.y_max_expand){
						data_max = _.max(y_data);
						max = (this.y_max_lock < data_max) ? data_max : this.y_max_lock;
					}else{
						max = this.y_max_lock;
					}
				}
				this.y_range = [min,max];
			}else{
				this.y_range = [0,0];
			}
		}
	},

	// ### set_scales
	// utility function used to get the x and y scales used in the plot
	set_scales: function(){
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}
	},

	// ### build_axes
	// utility function used to build x and y axes
	build_axes: function(){
		this.xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		this.yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");
	},

	// ### set_scaling_function
	// utility function to compute a radius scaling funciton to use in plots
	set_scaling_function: function(){
		var self = this;
		if (this.scale_by !== undefined){
			this.scale_data = this.model.get('meta_data')[this.scale_by];
			var size_min = Math.sqrt(_.min(this.scale_data)/Math.PI);
			var size_max = Math.sqrt(_.max(this.scale_data)/Math.PI);
			this.size_scale=d3.scale.linear().domain([size_min,size_max]).range([5, 20]);
			this.dot_scaler = function(val){
				r = Math.sqrt(val/Math.PI);
				return self.size_scale(r);
			};
		}
	},

	// ### style axes
	// utility function to apply custom styles to axis components
	style_axes: function(){
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");
	}
});
// **TagListView**
// A Backbone.View that displays a list of objects in a collection as tags.  The tags are drawn
// as rounded rectangles with text inside.  The text corresponds to the cid attributes in the
// collection by defaul, but can be customized to display other fields if required

// basic use

//		tag_list_view = new TagListView();

// optional arguments

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *white*
// 3.  {string}  **tag\_color**  the hex color code to use as the tag color of the view, defaults to *gray*
// 4.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"col-lg-12"*
// 5.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*
// 6.  {string}  **display_field**  the model attribute to display for each model in the view's colleciton.  defualts to *'cid'*

//		tag_list_view = new TagListView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "white",
//									tag_color: "gray",
//									span_class: "col-lg-12",
//									plot_height: 120,
//									display_attribute: "cid"});

Barista.Views.TagListView = Barista.Views.BaristaBaseView.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "TagListView",

	// ### model
	// set of the default model for the view
	model: new Backbone.Model(),

	// ### collection
	// set up a default collection for the view to work with
	collection: new Backbone.Collection(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// initialize the base view
		this.base_initialize();
		
		// set up a display attribute 
		this.display_attribute = (this.options.display_attribute !== undefined) ? this.options.display_attribute : 'cid';

		// set up a tag color to use 
		this.tag_color = (this.options.tag_color !== undefined) ? this.options.tag_color : 'black';

		// look for custom listeners
		this.listener = (this.options.listener !== undefined) ? this.options.listener : undefined;

		// clear built in listeners
		this.stopListening();

		// add listeners for the collection and trigger an update when it changes
		if (this.listener !== undefined){
			this.listenTo(this.collection,this.listener, this.update);
		}else{
			this.listenTo(this.collection,'add', this.update);
			this.listenTo(this.collection,'remove', this.update);
			this.listenTo(this.collection,'reset', this.update);
			this.listenTo(this.collection,'sort', this.update);
		}
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();

		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();

		return this;
	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		// call BaristaBaseView's render function first so we can layer on top of it
		this.base_render();
		
		// add a text element for each unique item in the collection
		this.x_offsets = [5];
		this.row_number = 0;
		this.y_offsets = [];
		this.lengths = [];
		this.tags = [];
		this.collection.models.forEach(function(model){
			self.tags.push(model.get(self.display_attribute));
		});
		this.tags = _.unique(this.tags);
		this.draw_tags();
		
		return this;
	},

	// ### fit_height
	// fits the view height to the height taken by the tags displayed
	fit_height: function(){
		// set the view's height attribute based on the number of rows in the
		// vis
		var EmSize = Barista.getEmSizeInPixels(this.div_string);
		this.height = (this.row_number * 1.5 + 3.5) * EmSize;

		// rescale the height of the vis
		$("#" + this.div_string).animate({height:this.height},500);
		this.vis.transition().attr("height",this.height);
		this.controls_layer.selectAll("." + this.div_string + "png_export").data([1])
			.transition(500)
			.attr("y",this.height - 10);
		
	},

	// ### draw tags
	// utility function to draw tags diven a data set.  
	draw_tags: function(){
		var self = this;
		// draw the foreground text of all the tags
		this.fg_layer.selectAll('.tag_list_text').data([]).exit().remove();
		this.fg_layer.selectAll('.tag_list_text').data(this.tags).enter().append('text')
			.attr("class","tag_list_text")
			.text(function(d){return d;})
			.attr("x",function(d,i){
				self.lengths.push(this.getComputedTextLength() + 15);
				var current_x_offset = self.x_offsets[i];
				if (current_x_offset + self.lengths[i] > self.width){
					self.x_offsets[i] = 5;
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
					self.row_number += 1;
				}else{
					self.x_offsets.push(self.lengths[i] + self.x_offsets[i]);
				}
				self.y_offsets.push((self.row_number * 1.5 + 1));
				return self.x_offsets[i];
			})
			.attr("y",function(d,i){return self.y_offsets[i] + 'em';})
			.attr("opacity",1)
			.attr("fill",this.fg_color)
			.style("cursor","pointer")
			.on("click",function(d){self.trigger("TagListView:DidSelect",{val: d});});

		// draw the background of all the tags
		this.bg_layer.selectAll('.tag_list_rect').data([]).exit().remove();
		this.bg_layer.selectAll('.tag_list_rect').data(this.tags).enter().append('rect')
			.attr("class","tag_list_rect")
			.attr("x",function(d,i){return self.x_offsets[i] - 5;})
			.attr("y",function(d,i){return (self.y_offsets[i] - 1) + 'em';})
			.attr("rx",4)
			.attr("ry",4)
			.attr('width',function(d,i){return self.lengths[i] - 4;})
			.attr('height','1.2em')
			.attr("opacity",1)
			.attr("fill",this.tag_color);
		this.fit_height();

		return this
	}
});


// # **TickView**

// A Backbone.View that displays a Connectivity Map tick view.  The view is must be paired with a CMapTickModel that
// describes the rows to display in the tick view and the scores of the ticks to show for each row.  An 
// example input data object from a CMapTickModel might looks like this:

//			{PC3: [.23,-.28], MCF7: [-0.6]}

// The view will render a row for each key in the data object and a tick for each entry in the array values
// for each row.  The view also renders a title based on the model's title attribute

// optional arguments:

// 1.  {string}  **template**  The path to a handlebars template to use. Defaults to *../templates/d3_target.handlebars*
// 2.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#bdbdbd*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*

// example usage:

//		tick_view = new TickView({el: $("target_selector"),
//												model: new CMapTickModel({data:{PC3: [.23,-.28], MCF7: [-0.6]}, title: "example data"}),
//												template: "../templates/d3_target.handlebars",
//												bg_color: "#bdbdbd",
//												span_class: "span12"
//												});

Barista.Views.TickView = Backbone.View.extend({
	// ### name
	// give the view a name to be used throughout the View's functions when it needs to know what its class name is
	name: "TickView",

	// ### model
	// set up the view's default model
	model: new Barista.Models.TickModel(),

	// ### initialize
	// overide the defualt Backbone.View initialize method to bind the view to model changes, bind
	// window resize events to view re-draws, compile the template, and render the view
	initialize: function(){
		// set up color options.  default if not specified
		this.bg_color = (this.options.bg_color !== undefined) ? this.options.bg_color : "#eeeeee";
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "#span12";
		this.template = (this.options.template !== undefined) ? this.options.template : "../templates/d3_target.handlebars";

		// bind render to model changes
		this.listenTo(this.model,'change', this.redraw);

		// compile the default template for the view and draw it for the first time
		this.compile_template_and_draw();

		// bind window resize events to redraw
		var self = this;
		$(window).resize(function() {self.redraw();} );
	},

	// ### compile_template_and_draw
	// use Handlebars to compile the template for the view and draw it for the first time

	//		tick_view.compile_template_and_draw();
	compile_template_and_draw: function(){
		var self = this;
		this.isCompiling = true;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class}));

		// define the location where d3 will build its plot
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		this.isCompiling = false;
		// draw the plot for the first time
		this.redraw();
	},

	// ### redraw
	// perform a full redraw of the view, including wiping out all d3 drawn components in the view and 
	// initializing them again from scratch.

	//		tick_view.redraw();
	redraw: function(){
		var self = this;
		// set up the panel's width and height via animation
		this.width = $("#" + this.div_string).width();
		$("#" + this.div_string).animate({height:_.keys(this.model.get('data_object')).length*18 + 50},500);

		// once the height is determined, render the view
		setTimeout(function(){
			self.height = $("#" + self.div_string).outerHeight();
			self.init_view();
			self.render();
		},501);
	},

	// ### init_view
	// set up the view from scratch.  Draw a background panel and place all dynamic content on that panel
	// with defualt values

	//		tick_view.init_view();
	init_view: function(){
		// stuff "this" into a variable for use inside of scoped funcitons
		var self = this;

		// check to see if the container is visible, if not, make it visible, but transparent so we draw it with
		// the proper dimensions
		if (this.$el.is(":hidden")){
			this.$el.animate({opacity:0},1);
			this.$el.show();
		}

		// rescale the width of the vis
		this.vis.attr("width",this.width);

		// rescale the height of the vis
		this.vis.attr("height",this.height);

		// set up scaling and margin parameters for the vis
		this.margin = 25;
		this.well_offset = 80;
		this.x_scale=d3.scale.linear().domain([-1,1]).range([this.well_offset + this.margin, this.width - this.margin]);

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an xAxis
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");

		// plot the x axis
		this.vis.selectAll('.axis').data([]).exit().remove();
		this.vis.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axis
		this.vis.select('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.select('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static index reagent text
		this.fg_layer.selectAll('.title_text').data([]).exit().remove();
		this.fg_layer.selectAll('.title_text').data([1])
							.enter().append("text")
							.attr("class","title_text")
							.attr("x",this.width/2)
							.attr("y",17)
							.attr("fill","#56B4E9")
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.attr("text-anchor","middle")
							.text(this.model.get('title'));

		// draw the static category wells
		this.fg_layer.selectAll('.category_well').data([]).exit().remove();
		this.fg_layer.selectAll('.category_well').data(keys)
							.enter().append("rect")
							.attr("class","category_well")
							.attr("x",this.margin + this.well_offset)
							.attr("y",function(d,i){return 18*i + 23;})
							.attr("height",17)
							.attr("width",this.width - this.margin*2 - this.well_offset)
							.attr("fill", function(d,i){
								if (i%2 == 0){
									return "#bdbdbd";
								}else{
									return "#999999";
								}
							});
		// draw the ticks
		values.forEach(function(value_array,i){
			tick_class = keys[i] + 'tick'
			self.fg_layer.selectAll('.' + tick_class).data([]).exit().remove();
			self.fg_layer.selectAll('.' + tick_class).data(value_array)
								.enter().append("rect")
								.attr("class","tick " + tick_class)
								.attr("x",self.x_scale)
								.attr("y",18*i + 23)
								.attr("height",17)
								.attr("width",3)
								.attr("fill", "#ff0000");
		});

		

		// add a png export overlay
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([]).exit().remove();
		this.fg_layer.selectAll("." + this.div_string + "png_export").data([1]).enter().append("text")
			.attr("class", this.div_string + "png_export no_png_export")
			.attr("x",10)
			.attr("y",this.height - 10)
			.attr("opacity",0.25)
			.style("cursor","pointer")
			.text("png")
			.on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1).attr("fill","#56B4E9");})
			.on("mouseout",function(){d3.select(this).transition().duration(500).attr("opacity",0.25).attr("fill","#000000");})
			.on("click",function(){self.save_png();});
	},

	// ### render
	// render the dynamic content of the view based on the current state of the view's data model

	//		tick_view.render();
	render: function(){
		// grab data from the model and sort it according to the values in the object
		var data_array = _.pairs(this.model.get('data_object'));
		data_array = data_array.sort(function(a,b){
			if (Barista.arrayAverage(a[1]) < Barista.arrayAverage(b[1])) return 1;
			if (Barista.arrayAverage(a[1]) > Barista.arrayAverage(b[1])) return -1;
			return 0;
		});
		var keys = [];
		var values = [];
		data_array.forEach(function(category){
			keys.push(category[0]);
			values.push(category[1]);
		});

		// draw the static category text
		this.fg_layer.selectAll('.category_text').data([]).exit().remove();
		this.category_text_selection = this.fg_layer.selectAll('.category_text').data(keys);
		this.category_text_selection.enter().append("text")
							.attr("class","category_text")
							.attr("x",this.margin)
							.attr("y",function(d,i){return 18*i + 40;})
							.attr("font-family","Helvetica Neue")
							.attr("font-size","14pt")
							.text(function(d){return d;});

		this.category_text_selection.exit().remove();

	},

	// ### hide
	// hides the view by dimming the opacity and hiding it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the hide animation. defualts to *1*

	//		pert_detail_view.hide(duration);
	hide: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		var self = this;
		this.$el.animate({opacity:0},duration);
		var check_interval = setInterval(check_for_compiled_template(),1);
		function check_for_compiled_template(){
			if (!self.isCompiling){
				clearInterval(check_interval);
				self.width = $("#" + self.div_string).width();
				setTimeout(function(){self.$el.hide();},duration);
			}
		}
	},

	// ### show
	// shows the view by brightening the opacity and showing it in the DOM

	// arguments

	// 1.  {number}  **duration**  the time in ms for the show animation. defualts to *1*

	//		pert_detail_view.show(duration);
	show: function(duration){
		duration = (duration !== undefined) ? duration : 1;
		this.$el.show();
		this.$el.animate({opacity:1},duration);
	},

	// ### savePng
	// save the current state of the view into a png image

	//		tick_view.save_png();
	save_png: function(){
		// build a canvas element to store the image temporarily while we save it
		var width = this.vis.attr("width");
		var height = this.vis.attr("height");
		var html_snippet = '<canvas id="tmpCanvas" width="' + width + 'px" height="' + height + 'px"></canvas>';
		$('body').append(html_snippet);

		// dim the png label on the image
		var png_selection = this.vis.selectAll(".no_png_export");
		var png_opacity = png_selection.attr("opacity");
		png_selection.attr("opacity",0);

		// grab the content of the target svg and place it in the canvas element
		var svg_snippet = this.vis.node().parentNode.innerHTML;
		canvg(document.getElementById('tmpCanvas'), '<svg>' + svg_snippet + '</svg>', { ignoreMouse: true, ignoreAnimation: true });

		// save the contents of the canvas to file and remove the canvas element
		var canvas = $("#tmpCanvas")[0];
		var filename = "cmapTickView" + new Date().getTime() + ".png";
		if (canvas.toBlob){canvas.toBlob(function(blob){saveAs(blob,filename);})};
		$('#tmpCanvas').remove();

		// make the png label on the image visible again
		png_selection.attr("opacity",png_opacity);
	}

});

// # **ViolinPlotView**
// A Backbone.View that displays a single scatter plot.  the view's model is assumed to have the same defaults
// as specified in **ScatterPlotModel**

// basic use:

//		violin_plot_view = new ViolinPlotView();

// optional arguments:

// 1.  {string}  **bg\_color**  the hex color code to use as the backgound of the view, defaults to *#ffffff*
// 2.  {string}  **fg\_color**  the hex color code to use as the foreground color of the view, defaults to *#1b9e77*
// 3.  {string}  **span\_class**  a bootstrap span class to size the width of the view, defaults to *"span12"*
// 4.  {Array}  **x_range**  a two element array specifying the x plotting bounds of the plot, defaults to *[min(x_data),max(x_data)]*
// 5.  {Array}  **y_range**  a two element array specifying the y plotting bounds of the plot, defaults to *[min(y_data),max(y_data)]*
// 6.  {Bool}  **x_log**  if set to true, plots the x axis on a log scale, defaults to *false*
// 7.  {Bool}  **y_log**  if set to true, plots the y axis on a log scale, defaults to *false*
// 8.  {Number}  **plot_height**  the height of the plot in pixels, defaults to *120*

//		violin_plot_view = new ViolinPlotView({el: $("target_selector",
//									bg_color:"#ffffff", 
//									fg_color: "#1b9e77",
//									span_class: "span4",
//									scale_by: undefined,
//									x_range: undefined,
//									y_range: undefined,
//									x_log: false,
//									y_log: false,
//									plot_height: 120});
Barista.Views.ViolinPlotView = Barista.Views.BaristaBaseView.extend({
	// ### model
	// set up the view's default model
	model: new Barista.Models.ScatterPlotModel(),

	// ### initialize
	// overide the default Backbone.View initialize method to handle optional arguments, compile the view
	// template, bind model changes to view updates, and render the view
	initialize: function(){
		// set up x and y range
		this.x_range = (this.options.x_range !== undefined) ? this.options.x_range : undefined;
		this.y_range = (this.options.y_range !== undefined) ? this.options.y_range : undefined;

		// set up x and y log flags
		this.x_log = (this.options.x_log !== undefined) ? this.options.x_log : false;
		this.y_log = (this.options.y_log !== undefined) ? this.options.y_log : false;

		// set up the scale_by parameter
		this.scale_by = (this.options.scale_by !== undefined) ? this.options.scale_by : undefined;

		// run BaristaBaseView's base_initialize method to handle boilerplate view construction
		// and initial view rendering
		this.base_initialize();

		// set up the default height for the plot
		this.plot_height = (this.options.plot_height !== undefined) ? this.options.plot_height : undefined;

		// set up the span size
		this.span_class = (this.options.span_class !== undefined) ? this.options.span_class : "span12";

		// bind render to model changes
		this.listenTo(this.model,'change', this.update);

		// compile the default template for the view
		this.compile_template();

		// define the location where d3 will build its plot
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();
		this.vis = d3.select("#" + this.div_string).append("svg")
						.attr("width",this.width)
						.attr("height",this.height);

		// render the vis
		this.render();

		// bind window resize events to render
		var self = this;
		$(window).resize(function() {self.render();} );
	},

	// ### compile_template
	// use Handlebars to compile the template for the view
	compile_template: function(){
		var self = this;
		this.div_string = 'd3_target' + new Date().getTime();;
		this.compiled_template = BaristaTemplates.d3_target;
		this.$el.append(BaristaTemplates.d3_target({div_string: this.div_string,
												span_class: this.span_class,
												height: this.plot_height}));
	},

	// ### render
	// completely render the view. Updates both static and dynamic content in the view.
	render: function(){
		this.base_render();
		this.init_plot();
		this.update();
	},

	// ### init_plot
	// initialize the static parts of the view's panel
	init_plot: function(){
		// stuff this into a variable for later use
		var self = this;

		// set up the margin
		this.margin = 50;

		// set up x and y ranges
		if (this.x_range === undefined){
			this.x_range = [_.min(this.model.get('x_data')),_.max(this.model.get('x_data'))];
		}
		if (this.y_range === undefined){
			this.y_range = [_.min(this.model.get('y_data')),_.max(this.model.get('y_data'))];
		}

		// set up scaling
		if (this.x_log){
			this.x_scale=d3.scale.log().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}else{
			this.x_scale=d3.scale.linear().domain([this.x_range[0],this.x_range[1]]).range([this.margin, this.width - this.margin]);
		}
		if (this.y_log){
			this.y_scale=d3.scale.log().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}else{
			this.y_scale=d3.scale.linear().domain([this.y_range[1],this.y_range[0]]).range([this.margin, this.height - this.margin]);
		}

		// set up drawing layers
		this.vis.selectAll('.bg_layer').data([]).exit().remove();
		this.bg_layer = this.vis.append("g").attr("class", "bg_layer");

		this.vis.selectAll('.fg_layer').data([]).exit().remove();
		this.fg_layer = this.vis.append("g").attr("class", "fg_layer");

		// set up the panel's width and height
		this.width = $("#" + this.div_string).width();
		this.height = $("#" + this.div_string).outerHeight();

		// rescale the width of the vis
		this.vis.transition().attr("width",this.width);
		this.vis.transition().attr("height",this.height);

		// draw the background of the panel
		this.bg_layer.selectAll('.bg_panel').data([]).exit().remove();
		this.bg_layer.selectAll('.bg_panel').data([1]).enter().append('rect')
			.attr("class","bg_panel")
			.attr("height",this.height)
			.attr("width",this.width)
			.attr("fill",this.bg_color);

		// build an Axes
		var xAxis = d3.svg.axis()
			.scale(this.x_scale)
			.orient("bottom");
		var yAxis = d3.svg.axis()
			.scale(this.y_scale)
			.orient("left");

		// plot the axes
		this.bg_layer.selectAll('.axis').data([]).exit().remove();
		this.bg_layer.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (this.height - this.margin) + ")")
			.call(xAxis);

		// style the axes
		this.vis.selectAll('.axis').selectAll("path")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("line")
			.style("fill","none")
			.style("stroke","black")
			.style("shape-rendering", "crispEdges");

		this.vis.selectAll('.axis').selectAll("text")
			.style("font-family","sans-serif")
			.style("font-size","11px");

		// define an area generator for use in plotting data
		this.upper_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y); })
			.interpolate('basis');
		this.lower_area_generator = d3.svg.area()
			.x(function(d) { return self.x_scale(d.x); })
			.y0(this.y_scale(0))
			.y1(function(d) { return self.y_scale(d.y * -1); })
			.interpolate('basis');

		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// plot the data
		this.bg_layer.selectAll('.upper_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.upper_violin').data([1]).enter().append('path')
			.attr("class","upper_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.upper_area_generator(this.path_data));
		this.bg_layer.selectAll('.lower_violin').data([]).exit().remove();
		this.bg_layer.selectAll('.lower_violin').data([1]).enter().append('path')
			.attr("class","lower_violin")
			.attr("opacity",0.5)
			.attr("fill",this.fg_color)
			.attr('d',this.lower_area_generator(this.path_data));


		// plot the x axis title
		this.bg_layer.selectAll('.x_axis_label').data([]).exit().remove();
		this.bg_layer.selectAll('.x_axis_label').data([1]).enter().append('text')
			.attr("class","x_axis_label axis_label")
			.attr("x",this.width/2)
			.attr("y",this.height-10)
			.style("text-anchor","middle")
			.text(this.model.get('x_axis_title'));

		// plot the title
		this.bg_layer.selectAll('.title').data([]).exit().remove();
		this.bg_layer.selectAll('.title').data([1]).enter().append('text')
			.attr("class","title title")
			.attr("x",this.width/2)
			.attr("y",this.margin/2)
			.style("text-anchor","middle")
			.text(this.model.get('title'));

	},

	// ### update
	// update the dynamic potions of the view
	update: function(){
		var self = this;
		// grab data from the model and package it such that we can iterate over it
		// and generate an area. The packaged data will be sorted by the x_data attribute
		this.x_data = this.model.get('x_data');
		this.y_data = this.model.get('y_data');
		this.path_data = [];
		this.x_data.forEach(function(x,i){ self.path_data.push({x: x, y: self.y_data[i]});});
		this.path_data.sort(this.path_data_sorter);

		// transition the data
		var upper = this.bg_layer.selectAll('.upper_violin');
		upper.transition().duration(500).attr('d',this.upper_area_generator(this.path_data));

		var lower = this.bg_layer.selectAll('.lower_violin');
		lower.transition().duration(500).attr('d',this.lower_area_generator(this.path_data));
	},

	// ### path data sorter
	// internal method used to sort path_data list elements by the x attribute
	path_data_sorter: function(a,b) {
		if (a.x < b.x){
			return -1;
		}else{
			return 1;
		}
	}
});

/**
Tile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that displays simple information and serves as a front door to the an underlying app.  The 
tile is composted of a square div element that can be small, medium, or wide.  The height of the tile is 150px
for small and 300px for large tiles.  The width is expressed as bootstrap span units of 3(small), 6(medium), or
12(wide).  This base class provides mechanisms for injecting html into the DOM and showing or hiding the tile as
well as default styling
@class Tile
@constructor
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style]  inline style specification, defaults to "#bdbdbd"
@param {string}  [options.color]  the background color of the tile, defuaults to 
@param {string}  [options.tile_type]  tile type, can be "small", "medium", or "wide", defaults to "medium"
@param {bool}  [options.display]  true to render the tile on object creation, false not to, defaults to true

**/
function Tile(options){
	options = (options !== undefined) ? options : {};
	this.div_target = (options.div_target !== undefined) ? options.div_target : "body";
	this.div_id = (options.div_id !== undefined) ? options.div_id : "Tile" + Math.floor(Math.random()*1000000000);
	this.link = (options.link !== undefined) ? options.link : "";
	this.style = (options.style !== undefined) ? options.style : "";
	this.color = (options.color !== undefined) ? options.color : "#bdbdbd";
	this.tile_type = (options.tile_type !== undefined) ? options.tile_type : "medium";
	this.display = (options.display !== undefined) ? options.display : true;

	// initialize the tile
	this.init_state = false;
	if (this.display){
		this.init();
	}
}

/**
Initializes Tile by building the appropriate html and injecting it into the DOM
@memberof Tile
@method init 
**/
Tile.prototype.init = function() {
	// build the html to inject into the DOM
	this.build_html();

	// inject the html into the target div
	this.inject();

	//draw the background of the tile
	this.draw_bg();

	// set the initialization flag to true
	this.init_state = true;

	// bind the tile to redraw when the window resizes
	var self = this;
	$(window).resize(function() {self.draw_bg();} );
};

/**
Builds the html for the tile based on the tile_type given in the constructor
@memberof Tile
@method build_html 
**/
Tile.prototype.build_html = function() {
	if (this.tile_type == "small"){
		this.html = '<div id="' + this.div_id + '" class="span3" style="height:150px ' + this.style + '"></div>';
	}
	if (this.tile_type == "medium"){
		this.html = '<div id="' + this.div_id + '" class="span6" style="height:300px ' + this.style + '"></div>';
	}
	if (this.tile_type == "wide"){
		this.html = '<div id="' + this.div_id + '" class="span12" style="height:300px ' + this.style + '"></div>';
	}
};

/**
Injects the Tile's html into the DOM at the target id given in the constructor
@memberof Tile
@method inject
**/
Tile.prototype.inject = function() {
	$(this.div_target).append(this.html);
};

/**
draws the tiles background using d3.js
@memberof Tile
@method draw_bg 
**/
Tile.prototype.draw_bg = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);

		// add a group to drawing elements
		this.svg.append("g").attr("class", "draw_layer");

		// add a group to link elements
		this.svg.append("g").attr("class", "link_layer");

		// add the link
		this.link_selection = this.svg.select('.link_layer').selectAll("rect.link_rect").data([1]);
		this.link_selection.enter().append("a")
			.attr("xlink:href",this.link)
			.append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","link_rect")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color)
			.attr("opacity",0);
	}

	// (re)draw the background
	this.svg.select('.draw_layer').selectAll("rect.bg").data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll("rect.bg").data([1])
			.enter().append("rect")
			.attr("x",0)
			.attr("y",0)
			.attr("rx",20)
			.attr("ry",20)
			.attr("class","bg")
			.attr("height", this.height)
			.attr("width", this.width)
			.attr("fill", this.color);
};

/**
hides the tile
@param {object} [duration=0] the duration of a fade out animation applied before hiding the tile
@memberof Tile
@method hide 
**/
Tile.prototype.hide = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).animate({opacity:0,width:0,height:0},duration);
	var self = this;
	setTimeout(function(){$("#" + self.div_id).hide();},duration);
};

/**
shows the tile
@param {object} [duration=0] the duration of a fade out animation applied after showing the tile
@memberof Tile
@method show 
**/
Tile.prototype.show = function(duration) {
	duration = (duration !== undefined) ? duration : 0;
	$("#" + this.div_id).show();
	$("#" + this.div_id).animate({opacity:1,width:this.width,height:this.height},duration);
};

/**
ImageTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class ImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTile.prototype = new Tile({display:false});
ImageTile.prototype.constructor = ImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof ImageTile
@method draw 
**/
ImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
draws the tile's image using d3.js
@memberof ImageTile
@method draw_image 
**/
ImageTile.prototype.draw_image = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the image
	this.image_size = this.height - 50;
	this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([]).exit().remove();
	this.image_selection = this.svg.select('.draw_layer').selectAll("image." + this.div_id).data([1])
		.enter().append("image")
		.attr("xlink:href",this.image)
		.attr("class",this.div_id)
		.attr("x",this.width/2 - this.image_size/2)
		.attr("y",this.height/2 - this.image_size/2)
		.attr("height",this.image_size)
		.attr("width",this.image_size);
};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends the base Tile to add an image in the center of the tile
@class AnimatedImageTile
@constructor
@extends Tile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTile(options){
	this.image = (options.image !== undefined) ? options.image : "../Bellhop/img/CMap_Logo_gray.png";
	Tile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
}
AnimatedImageTile.prototype = new ImageTile({display:false});
AnimatedImageTile.prototype.constructor = AnimatedImageTile;

/**
top level draw wrapper around draw\_bg and draw\_image
@memberof AnimatedImageTile
@method draw 
**/
AnimatedImageTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
};

/**
starts periodic animation of the Image on the Tile
@memberof AnimatedImageTile
@method start_animation 
@param {int}  [duration=2000] duration the length of the animation in milliseconds
@param {int}  [frequency= 10000 to 20000] frequency the frequency of the animation in milliseconds
**/
AnimatedImageTile.prototype.start_animation = function(duration,frequency) {
	duration = (duration !== undefined) ? duration : 2000;
	frequency = (frequency !== undefined) ? frequency : 10000 + Math.random() * 10000;
	var self = this;
	setInterval(function(){
		self.image_selection.transition().duration(duration/2)
			.attr("y",-self.image_size - 10)
			.transition().duration(1)
			.attr("y",self.height + self.image_size + 10)
			.transition().duration(duration/2)
			.attr("y",self.height/2 - self.image_size/2);
	},frequency);
};


/**
ImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text 
@class ImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function ImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
}
ImageTextTile.prototype = new ImageTile({display:false});
ImageTextTile.prototype.constructor = ImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof ImageTextTile
@method draw 
**/
ImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
};

/**
draws the tile's text using d3.js
@memberof ImageTextTile
@method draw_text 
**/
ImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	if (this.tile_type == "wide" || this.tile_type == "medium"){
		var x,y,height,width,html;
		if (this.tile_type == "wide"){
			x = this.width/3*2;
			y = this.height/10*5;
			height = this.height/10 * 5;
			width = this.width/3 - 20;
			html = '<h2>' + this.title + '</h2>';
		}
		if (this.tile_type == "medium"){
			x = 20;
			y = this.height/10*8.5;
			height = this.height/10 * 1.5;
			width = this.width - 40;
			html = '<h3>' + this.title + '</h3>';
		}
		this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
		this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
			.enter().append("foreignObject")
			.attr("class","tile_text")
			.attr("x",x)
			.attr("y",y)
			.attr("height",height)
			.attr("width",width)
			.append("xhtml:div")
			.style("background-color",this.color)
			.html(html);
	}

};

/**
AnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends ImageTile to add text that animates on mouseover
@class AnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function AnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
AnimatedImageTextTile.prototype = new ImageTile({display:false});
AnimatedImageTextTile.prototype.constructor = AnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof AnimatedImageTextTile
@method draw 
**/
AnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof AnimatedImageTextTile
@method show_text
**/
AnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof AnimatedImageTextTile
@method hide_text 
**/
AnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimating){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof AnimatedImageTextTile
@method draw_text 
**/
AnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:div")
		.attr("id",this.div_id + "_tile_text")
		.style("opacity",0)
		.style("background-color","#ffffff")
		.html(html);

};

/**
FullAnimatedImageTextTile constructor
@param {object} [options={}] options object to set properties
@classdesc A Tile that extends AnimatedImageTile to add text that animates on mouseover
@class FullAnimatedImageTextTile
@constructor
@extends ImageTile
@param {string}  [options.image] the url to use as the image,defaults to "../Bellhop/img.two_circles.png"
@param {string}  [options.div_target] the div id into which to inject html, defaults to "body"
@param {string}  [options.div_id] the div id for generated html, defaults to "Tile" plus a random number
@param {string}  [options.text] the text to display on the panel, defaults to "Title"
@param {string}  [options.style] inline style specification, defaults to "#f0f0f0"
@param {string}  [options.color] the background color of the tile, defuaults to 
@param {string}  [options.tile_type] tile type, can be "small", "medium", or "wide", defaults to "medium"

**/
function FullAnimatedImageTextTile(options){
	this.title = (options.title !== undefined) ? options.title : "Title";
	ImageTile.apply(this,arguments);
	var self = this;
	$(window).resize(function() {self.draw();} );
	this.draw();
	this.start_animation();
	this.TextIsAnimatingIn = false;
	this.TextIsAnimatingOut = false;
}
FullAnimatedImageTextTile.prototype = new AnimatedImageTile({display:false});
FullAnimatedImageTextTile.prototype.constructor = FullAnimatedImageTextTile;

/**
top level draw wrapper around draw\_bg and draw\_image and draw\_text
@memberof FullAnimatedImageTextTile
@method draw 
**/
FullAnimatedImageTextTile.prototype.draw = function() {
	this.draw_bg();
	this.draw_image();
	this.draw_text();
	//add callbacks to expose the display of the animated text
	var self = this;
	this.link_selection.on('mouseover',function(){self.show_text();});
	this.link_selection.on('mouseout',function(){self.hide_text();});
};

/**
show the text in the Tile
@memberof FullAnimatedImageTextTile
@method show_text
**/
FullAnimatedImageTextTile.prototype.show_text = function() {
	if (!this.TextIsAnimatingIn){
		$("#" + this.div_id + "_tile_text").animate({opacity:1},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingIn = false;},500);
};

/**
hide the text in the Tile
@memberof FullAnimatedImageTextTile
@method hide_text 
**/
FullAnimatedImageTextTile.prototype.hide_text = function() {
	if (!this.TextIsAnimatingOut){
		$("#" + this.div_id + "_tile_text").animate({opacity:0},500);
	}
	this.TextIsAnimating = true;
	var self = this;
	setTimeout(function(){self.TextIsAnimatingOut = false;},500);
};

/**
draws the tile's text using d3.js
@memberof FullAnimatedImageTextTile
@method draw_text 
**/
FullAnimatedImageTextTile.prototype.draw_text = function() {
	// get the correct height and width to draw
	this.width = $("#" + this.div_id).outerWidth();
	if (this.tile_type == "small"){
		this.height = 150;
	}else{
		this.height = 300;
	}

	// set up a top level svg selection if the tile needs to be initialized
	if (!this.init_state){
		this.svg=d3.select("#" + this.div_id).append("svg")
			.attr("class",this.div_id + "_tile_svg")
			.attr("width",this.width)
			.attr("height",this.height);
	}

	// (re)draw the text
	var x,y,height,width,html;
	x = 0;
	y = 20;
	height = this.height - 40;
	width = this.width;
	if (this.tile_type == "wide"){
		html = '<h2>' + this.title + '</h2>';
	}
	if (this.tile_type == "medium" || this.tile_type == "small"){
		html = '<h3>' + this.title + '</h3>';
	}
	this.svg.select('.draw_layer').selectAll('.tile_text').data([]).exit().remove();
	this.svg.select('.draw_layer').selectAll('.tile_text').data([this.title])
		.enter().append("foreignObject")
		.attr("class","tile_text")
		.attr("x",x)
		.attr("y",y)
		.attr("height",height)
		.attr("width",width)
		.style("pointer-events","none")
		.append("xhtml:body")
		.attr("id",this.div_id + "_tile_text")
		.attr("height",height)
		.attr("width",width)
		.style("background-color","#ffffff")
		.style("opacity",0)
		.html(html);

};


//wrap all of our afterword code so we keep the global namespace clean.  All 'global' variables
//will be exposed in the Barista object
(function (){

    //set the user_key from a local file called barista_config if it is present
    //at either / or /public
    if (!Barista.setUserKey('barista_config.json')){
      Barista.setUserKey('/public/barista_config.json');
    };

    //find all of the barista_target div elements on the page
    var all_divs = $('div');
    var barista_targets = [];
    Barista.generatedViews = {};
    all_divs.each(function () {
        var data_attrs = $(this).data();
        if (_.keys(data_attrs).indexOf('baristaView') !== -1){
            barista_targets.push(this);
        }
    });

    //for each barista target element, instantiate the view and attempt to call the
    //fetch method of its model. For some views this will not work, but many will.
    //The idea is that we want to populate the views with data when we can on page load
    //since the user is not instantiating the view via javascript.  For each target
    //Element we will also try to bind it to any views that it asks to be bound to. The
    //binding is assumed to be a binding between the any events coming out of the source view.
    //the event's 'val' attribute is fed to the view's model.fetch method
    barista_targets.forEach(function(target){
        //grab the view type and make sure it has a unique view name
        var view_num = 0;
        var view_type = $(target).data().baristaView;
        var view_name;
        if ($(target).attr('id')){
            view_name = $(target).attr('id');
        }else{
            view_name = view_type;
        }
        while (_.keys(Barista.generatedViews).indexOf(view_name) !== -1){
            view_num += 1;
            view_name = view_type + view_num;
        }

        //    instantiate the view and register it to the generatedViews object in
        //    Barista
        var view_params = _.extend({el: target},$(target).data());
        Barista.generatedViews[view_name] = new Barista.Views[view_type](view_params);

        //    try to call the view's fetch method and ignore errors that come up since
        //    we expect them for views that don't have models supporting a fetch
        //    operation
        try {
            Barista.generatedViews[view_name].model.fetch('');
        }catch(err){
        }

        //    try to bind views that are specified
        if (_.keys($(target).data()).indexOf('bind') !== -1){
            var bind_target = $(target).data().bind;
            Barista.generatedViews[view_name].listenTo(Barista.generatedViews[bind_target],'all',function(event_name, e){
                Barista.generatedViews[view_name].model.fetch(e.val);
            });
        }
    });
}());
