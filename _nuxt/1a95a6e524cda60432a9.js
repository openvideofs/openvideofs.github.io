(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(e,t,n){"use strict";n(6),n(3),n(2),n(1),n(5);var r=n(0),o=(n(35),n(12)),c=n(10),l=n(11),f=n(69);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v,y=function(){function e(t,n){Object(c.a)(this,e),this.isAnalyticsEnabled=t,this.uidPromise=n()}var t;return Object(l.a)(e,[{key:"send",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(data){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.isAnalyticsEnabled();case 2:if(!e.sent){e.next=8;break}return e.next=6,this.uidPromise;case 6:t=e.sent,navigator.sendBeacon("https://www.google-analytics.com/collect",Object(f.e)(h({v:1,cid:t,tid:"UA-118573631-3"},data)));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"trackPageView",value:function(e){this.send({t:"pageview",dl:"https://openvideofs.github.io/".concat(e),dt:e})}},{key:"trackWatchView",value:function(e){this.send({t:"pageview",dl:"https://openvideofs.github.io/watch/".concat(e),dt:e})}},{key:"trackSearchResultsView",value:function(e){this.send({t:"pageview",dl:"https://openvideofs.github.io/search/results",dt:e.join(", ")})}},{key:"trackHosterException",value:function(e){var t=e.error,n=e.hoster;this.send({t:"exception",exd:"[".concat(n,"] ").concat(t.message),exf:1})}},{key:"trackException",value:function(e){this.send({t:"exception",exd:e.message})}}]),e}(),m=(n(23),n(88)),O=n.n(m),w=n(46),j=function(){function e(data){Object(c.a)(this,e),this.name=data.name,this.default=data.default,this.converter=data.converter,this.scope=data.scope||"local"}var t;return Object(l.a)(e,[{key:"getDefault",value:function(){return this.default instanceof Function?this.default():this.default}},{key:"get",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.send({scope:this.scope,keys:[this.name]});case 2:if(0!==(t=e.sent).length&&void 0!==t[0].value){e.next=11;break}return e.next=6,this.getDefault();case 6:return n=e.sent,this.set(n),e.abrupt("return",n);case 11:if(!this.converter){e.next=13;break}return e.abrupt("return",this.converter.load(t[0].value));case 13:return e.abrupt("return",t[0].value);case 14:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"set",value:function(e){var t=this.converter?this.converter.save(e):e;return w.i.send({scope:this.scope,values:[{key:this.name,value:t}]})}}]),e}();function k(data){var e=new j(data),t={get:function(){return e.get()},set:function(t){return e.set(t)}};return t}!function(e){e.load=function(e,t,n){e[t]=function(){return e._STORAGE_ANNOTATION_PROMISE__}};var t=k({name:"options/redirect-scripts-enabled",default:{}});e.scriptEnabled=function(e){return{get:(r=Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get();case 2:return r=n.sent,n.abrupt("return",!(e in r)||r[e]);case 4:case"end":return n.stop()}}),n)}))),function(){return r.apply(this,arguments)}),set:(n=Object(o.a)(regeneratorRuntime.mark((function n(r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.get();case 2:(o=n.sent)[e]=r,t.set(o);case 5:case"end":return n.stop()}}),n)}))),function(e){return n.apply(this,arguments)})};var n,r},e.theatreWidth=k({name:"player/theatre-width",default:70,scope:"local"}),e.analyticsUID=k({name:"analytics/uid",default:function(){return O()()},scope:"sync"}),e.analyticsEnabled=k({name:"options/analytics-enabled",scope:"sync",default:!0})}(v||(v={}));t.a=new y((function(){return v.analyticsEnabled.get()}),(function(){return v.analyticsUID.get()}))},250:function(e,t,n){var content=n(312);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("470bd648",content,!0,{sourceMap:!1})},311:function(e,t,n){"use strict";var r=n(250);n.n(r).a},312:function(e,t,n){(t=n(58)(!1)).push([e.i,".navbar-dark{border-bottom:1px solid #000;padding:.5rem}.btn-outline-primary:hover,.btn-primary{color:#fff!important}.modal-body{background:#343a40!important}.modal-body form{background:#495057;padding:1rem;border:1px solid #000}body{background:transparent!important}",""]),e.exports=t},321:function(e,t,n){"use strict";n.r(t);n(23);var r=n(10),o=n(11),c=n(19),l=n(14),f=n(20),d=n(15),h=n(234),v=n(237),y=n(258),m=n(115),O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},w=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"mounted",value:function(){document.title="".concat(this.videoData.title," - OpenVideo"),v.a.trackWatchView(this.videoData.origin.name)}},{key:"videoData",get:function(){var e=this.$route.query.videodata;if(!e||"string"!=typeof e)throw new Error("Query Param videodata is missing or malformed!");return Object(m.b)(e)}}]),t}(h.f),j=w=O([Object(h.a)({components:{OVPlayer:y.a},head:function(){return{title:"Watch video - OpenVideo"}}})],w),k=(n(311),n(51)),component=Object(k.a)(j,(function(){var e=this.$createElement;return(this._self._c||e)("OVPlayer",{staticClass:"d-flex fixed-top fixed-bottom",attrs:{"video-data":this.videoData}})}),[],!1,null,null,null);t.default=component.exports}}]);