(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{248:function(e,t,n){var content=n(308);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("07062f93",content,!0,{sourceMap:!1})},249:function(e,t,n){var content=n(310);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("49711173",content,!0,{sourceMap:!1})},307:function(e,t,n){"use strict";var r=n(248);n.n(r).a},308:function(e,t,n){(t=n(58)(!1)).push([e.i,".semi-transparent[data-v-9e5cafa2]{background:rgba(0,0,0,.9);-webkit-transition:opacity .5s;transition:opacity .5s}",""]),e.exports=t},309:function(e,t,n){"use strict";var r=n(249);n.n(r).a},310:function(e,t,n){(t=n(58)(!1)).push([e.i,".navbar-dark{border-bottom:1px solid #000;padding:.5rem}.btn-outline-primary:hover,.btn-primary{color:#fff!important}.modal-body{background:#343a40!important}.modal-body form{background:#495057;padding:1rem;border:1px solid #000}body{background:transparent!important}",""]),e.exports=t},320:function(e,t,n){"use strict";n.r(t);n(6),n(3),n(2),n(1),n(5);var r=n(0),o=(n(53),n(166),n(10)),c=n(11),l=n(19),d=n(14),f=n(20),y=n(15),h=n(234),v=n(46),O=n(258);function P(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).apply(this,arguments))).currentPage=1,e.videos=[],e.isPlaying=!1,e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"mounted",value:function(){var e=this;v.f.addListener((function(t){var n=e.videos.findIndex((function(video){return!!video.src.find((function(e){return!!t.src.find((function(t){return t.src===e.src}))}))}));-1!==n?e.videos[n]=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e.videos[n],{},t):(e.videos.push(t),v.l.send({count:e.pageCount}))})),v.d.send()}},{key:"handleClose",value:function(e){v.k.send({isVisible:!1}),this.isPlaying=!1,e.preventDefault()}},{key:"handlePlayerError",value:function(e){e.code===MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED&&(this.videos.splice(this.currentPage-1,1),v.l.send({count:this.pageCount}),0===this.pageCount&&v.k.send({isVisible:!1}))}},{key:"pageCount",get:function(){return this.videos.length}},{key:"hasVideos",get:function(){return 0!==this.pageCount}},{key:"currentVideo",get:function(){return this.videos[this.currentPage-1]}}]),t}(h.f),k=j=m([Object(h.a)({components:{OVPlayer:O.a}})],j),w=(n(307),n(309),n(51)),component=Object(w.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasVideos?n("div",{staticClass:"d-flex fixed-top fixed-bottom semi-transparent"},[n("b-modal",{attrs:{visible:!0,size:"xl",title:"OpenVideo has found videos!"},on:{hide:e.handleClose},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-pagination",{staticClass:"m-auto",attrs:{"total-rows":e.pageCount,"per-page":1,size:"lg",align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})]},proxy:!0}],null,!1,3726747629)},[n("OVPlayer",{style:{height:"60vh"},attrs:{playing:e.isPlaying,"video-data":e.currentVideo,"allow-theatre-mode":!1},on:{"update:playing":function(t){e.isPlaying=t},error:e.handlePlayerError}})],1)],1):e._e()}),[],!1,null,"9e5cafa2",null);t.default=component.exports}}]);