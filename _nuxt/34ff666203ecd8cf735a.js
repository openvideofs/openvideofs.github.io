(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{247:function(t,e,r){var content=r(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("2712b012",content,!0,{sourceMap:!1})},258:function(t,e,r){"use strict";r(6),r(3),r(2),r(1),r(5),r(75),r(31),r(166),r(23),r(53),r(22),r(52),r(60);var n,o=r(0),l=(r(35),r(12)),c=(r(54),r(165),r(10)),d=r(11),h=r(19),v=r(14),j=r(20),y=r(15),f=r(234),m=r(235),O=r(71),M=r.n(O),k=r(164),w=r(148),I=r(46),D=r(115);function T(t){return function(e){return{trigger:function(r){return e.trigger(t,r)},on:function(r){e.on(t,(function(t,e){r(e)}))}}}}!function(t){t.THEATRE_MODE_CHANGED="theatre-mode-changed",t.DOWNLOAD_VIDEO_SRC="download-video-source",t.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",t.ADD_TO_PLAYLIST="add-to-playlist",t.REMOVE_FROM_PLAYLIST="remove-from-playlist",t.PATREON_BUTTON_CLICKED="patreon-button-clicked",t.QUALITY_CHANGED="quality-changed",t.DOWNLOAD_TRACK_SRC="download-track-src",t.LOAD_TRACK_FROM_URL="load-track-from-url",t.LOAD_TRACK_FROM_FILE="load-track-from-file"}(n||(n={}));var C=T(n.THEATRE_MODE_CHANGED),x=T(n.DOWNLOAD_VIDEO_SRC),N=T(n.DOWNLOAD_ACTIVE_VIDEO_SRC),S=T(n.ADD_TO_PLAYLIST),L=T(n.REMOVE_FROM_PLAYLIST),z=T(n.PATREON_BUTTON_CLICKED),E=T(n.QUALITY_CHANGED),A=T(n.DOWNLOAD_TRACK_SRC),P=T(n.LOAD_TRACK_FROM_URL),R=T(n.LOAD_TRACK_FROM_FILE),_=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,t))).addClass("vjs-download-button"),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(){N(this.player()).trigger()}}]),e}(m.default.getComponent("Button")),Y=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,t))).addClass("vjs-patreon-button"),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(){z(this.player()).trigger()}}]),e}(m.default.getComponent("Button")),B=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,t))).isEnabled=!1,r.addClass("vjs-theatre-button"),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(){this.isEnabled=!this.isEnabled,C(this.player()).trigger({isEnabled:this.isEnabled})}}]),e}(m.default.getComponent("Button")),H=r(116),V=function(t){function e(t){var r,n=t.player,data=t.data;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,n,{label:data.label,selectable:!0,selected:n.src()===data.src}))).source=data,E(r.player()).on((function(t){r.selected(t.src===r.source.src)})),r.setupContent(),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(t){Object(H.a)(Object(v.a)(e.prototype),"handleClick",this).call(this,t),this.select()}},{key:"select",value:function(){var t=this;if(this.player().src()!==this.source.src){var e=this.player().paused(),r=this.player().currentTime();this.player().one("loadedmetadata",(function(){t.player().currentTime(r),e||t.player().play()})),this.player().src(this.source),E(this.player()).trigger(this.source)}}},{key:"setupContent",value:function(){var t=this,button=document.createElement("button");button.addEventListener("click",(function(e){x(t.player()).trigger(t.source),e.stopPropagation()})),this.el().appendChild(button)}}]),e}(m.default.getComponent("MenuItem")),W=function(t){function e(t){var r,n=t.player,o=t.sources;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,n,{}))).addClass("vjs-quality-button"),r.setSources(o),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"setSources",value:function(t){this.sources=t.concat().sort((function(a,b){var t=a.label.match(/([0-9]*)p?/),e=b.label.match(/([0-9]*)p?/);return t&&e?parseInt(e[1])-parseInt(t[1]):t||e?t?1:-1:-a.label.localeCompare(b.label)})),this.sources.length>0&&this.player().src(this.sources[0]),this.update(),this.sources.length<=1&&this.hide()}},{key:"createItems",value:function(){var t=this;return this.sources?this.sources.map((function(e){return new V({player:t.player(),data:e})})):[]}}]),e}(m.default.getComponent("MenuButton")),U=function(t){function e(t){var r,n=t.player,data=t.data,o=t.selected;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,n,{label:data.name,selectable:!0,selected:o,multiSelectable:!0}))).playlist=data,r.isSelected=o,r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(t){Object(H.a)(Object(v.a)(e.prototype),"handleClick",this).call(this,t),this.isSelected=!this.isSelected,this.selected(this.isSelected),this.isSelected?S(this.player()).trigger(this.playlist):L(this.player()).trigger(this.playlist)}}]),e}(m.default.getComponent("MenuItem")),Z=function(t){function e(t){var r,n=t.player,data=t.data;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,n,{}))).addClass("vjs-playlist-button"),r.setData(data),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"setData",value:function(data){this.data=data,this.update()}},{key:"createItems",value:function(){var t=this;return this.data?this.data.playlists.map((function(e){return new U({player:t.player(),data:e,selected:!!t.data.active.find((function(t){return t.id===e.id}))})})):[]}}]),e}(m.default.getComponent("MenuButton")),Q=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,t,{label:"load VTT/SRT from File"}))).controlText("load VTT/SRT from File"),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(){R(this.player()).trigger()}}]),e}(m.default.getComponent("MenuItem")),F=function(t){function e(t){var r;return Object(c.a)(this,e),(r=Object(h.a)(this,Object(v.a)(e).call(this,t,{label:"load VTT/SRT from URL"}))).controlText("load VTT/SRT from URL"),r}return Object(j.a)(e,t),Object(d.a)(e,[{key:"handleClick",value:function(){P(this.player()).trigger()}}]),e}(m.default.getComponent("MenuItem")),J=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(d.a)(e,[{key:"createEl",value:function(t,r,n){var o=this,l=Object(H.a)(Object(v.a)(e.prototype),"createEl",this).call(this,t,r,n),track=this.options_.track;if("ADDED_FROM_USER"!==track.language){var button=document.createElement("button");button.addEventListener("click",(function(t){A(o.player()).trigger({label:track.label}),t.stopPropagation()})),l.appendChild(button)}return l}}]),e}(m.default.getComponent("SubsCapsMenuItem")),G=function(t){function e(){return Object(c.a)(this,e),Object(h.a)(this,Object(v.a)(e).apply(this,arguments))}return Object(j.a)(e,t),Object(d.a)(e,[{key:"createItems",value:function(){var t=Object(H.a)(Object(v.a)(e.prototype),"createItems",this).call(this);return t.splice(2,0,new Q(this.player_)),t.splice(3,0,new F(this.player_)),t}}]),e}(m.default.getComponent("SubsCapsButton"));var K=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},X=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(h.a)(this,Object(v.a)(e).apply(this,arguments))).url="",t.urlState=null,t.visible=!1,t}return Object(j.a)(e,t),Object(d.a)(e,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var t=this.form.checkValidity();return this.urlState=t?"valid":"invalid",t}},{key:"resetModal",value:function(){this.url="",this.urlState=null}},{key:"handleOk",value:function(t){t.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var t=this;this.checkFormValidity()&&(this.$nextTick((function(){t.visible=!1})),this.submit(this.url))}},{key:"submit",value:function(t){return t}}]),e}(f.f);K([Object(f.c)("change")],X.prototype,"visible",void 0),K([Object(f.g)("visible"),Object(f.b)("change")],X.prototype,"visibilityChanged",null),K([Object(f.e)("form")],X.prototype,"form",void 0),K([Object(f.b)("submit")],X.prototype,"submit",null);var $=X=K([Object(f.a)({})],X),tt=r(51),et=Object(tt.a)($,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Subtitles from Url"},on:{show:t.resetModal,hidden:t.resetModal,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[r("b-form-group",{attrs:{state:t.urlState,label:"Url","label-for":"url-input","invalid-feedback":"Url is required"}},[r("b-form-input",{attrs:{id:"url-input",state:t.urlState,required:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1)],1)])}),[],!1,null,null,null).exports;r(297),r(298);function at(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function nt(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?at(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):at(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var it=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},ot=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(h.a)(this,Object(v.a)(e).apply(this,arguments))).isPlaying=!1,t._player=null,t.qualityMenu=null,t.playlistMenu=null,t.srtSelector=document.createElement("input"),t.warning=null,t.error=null,t.showTextTrackUrlInput=!1,t}var r,n,o;return Object(j.a)(e,t),Object(d.a)(e,[{key:"handlePlayingUpdated",value:function(t){this.isPlaying=t,t===this.player.paused()&&(t?this.player.play():this.player.pause())}},{key:"updatePlaying",value:function(t){return this.isPlaying=t,this.isPlaying}},{key:"emitVideoJSError",value:function(t){return t}},{key:"head",value:function(){return{title:"".concat(this.videoData.title," - OpenVideo"),meta:[{hid:"description",name:"description",content:"OpenVideo player"}]}}},{key:"handleVideoDataChange",value:function(t,e){e&&this.videoData&&this.updatePlayer()}},{key:"updatePlayer",value:function(){var t=this;this.qualityMenu?this.qualityMenu.setSources(this.videoData.src):this.qualityMenu=this.addBeforeFullscreen(new W({player:this.player,sources:this.videoData.src})),this.playlistMenu?this.playlistMenu.setData({playlists:k.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(t){return t.playlist})):[]}):this.playlistMenu=this.addBeforeFullscreen(new Z({player:this.player,data:{playlists:k.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(t){return t.playlist})):[]}})),this.videoData.poster&&this.player.poster(this.videoData.poster),Array.from(this.player.textTracks()).forEach((function(track){track.mode="disabled"})),this.videoData.tracks.forEach((function(track){t.appendTextTrack(track)})),this.player.one("loadedmetadata",(function(){t.playlistEntry&&t.player.currentTime(t.playlistEntry.data.watched),t.saveToHistory()}))}},{key:"mounted",value:(o=Object(l.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.Store.library;case 2:return t.next=4,k.Store.player;case 4:m.default.registerComponent("SubsCapsMenuItem",J),m.default.registerComponent("SubsCapsButton",G),this.setupSrtSelector(),this._player=Object(m.default)(this.videoPlayer,nt({},this.options,{playbackRates:[.5,1,2],controls:!0}),Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.playerReady();case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),t.t0 instanceof Error&&(e.error=t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))));case 7:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"beforeDestroy",value:function(){this._player&&this._player.dispose()}},{key:"playerReady",value:function(){var t=this;if(this.player.hotkeys({volumeStep:.1,seekStep:5,enableModifiersForNumbers:!1}),S(this.player).on((function(e){k.Store.library.addToPlaylist({origin:t.videoData.origin.url,playlistId:e.id})})),L(this.player).on((function(e){k.Store.library.removeFromPlaylist({origin:t.videoData.origin.url,playlistId:e.id})})),C(this.player).on((function(t){var e=t.isEnabled;I.j.send({isEnabled:e,width:window.innerWidth,height:window.innerHeight})})),x(this.player).on((function(e){t.downloadVideoSource(e)})),N(this.player).on((function(){t.downloadVideoSource(t.activeVideoSource)})),A(this.player).on((function(e){var label=e.label;t.downloadTrackSource(label)})),z(this.player).on((function(){I.g.send({url:Object(w.a)()})})),E(this.player).on((function(){})),P(this.player).on((function(){t.showTextTrackUrlInput=!0})),R(this.player).on((function(){t.srtSelector.click()})),this.player.on("loadstart",(function(){var e=t.player.tech();e.hls&&(e.hls.xhr.beforeRequest=function(e){Object(D.c)(e.uri)||(e.uri=Object(D.a)({url:e.uri,referer:t.videoData.origin.url}))})})),this.player.on("volumechange",(function(){k.Store.player.setVolume(t.player.volume())})),this.player.el().addEventListener("mouseleave",(function(){0!==t.player.currentTime()&&t.saveToHistory()})),this.player.on("play",(function(){t.updatePlaying(!0)})),this.player.on("pause",(function(){t.updatePlaying(!1)})),this.player.on("error",(function(){var e=t.player.error();e&&t.emitVideoJSError(e)})),this.player.volume(k.Store.player.volume),this.addBeforeFullscreen(new _(this.player)),this.addBeforeFullscreen(new Y(this.player)),this.allowTheatreMode&&Object(w.c)()){var e=this.addBeforeFullscreen(new B(this.player));this.player.on("fullscreenchange",(function(){t.player.isFullscreen()?e.hide():e.show()}))}this.player.controlBar.getChild("SubsCapsButton").show(),this.updatePlayer()}},{key:"addBeforeFullscreen",value:function(t){return this.player.controlBar.addChild(t,null,this.player.controlBar.children().length-2),t}},{key:"handleTextTrackUrlSubmit",value:function(t){this.appendTextTrack({src:t,language:"ADDED_FROM_USER",kind:"captions",label:"Custom"})}},{key:"saveToHistory",value:function(){k.Store.library.updateHistory({poster:this.videoData.poster,title:this.videoData.title,origin:this.videoData.origin,parent:this.videoData.parent,watched:this.player.currentTime(),duration:this.player.duration()})}},{key:"download",value:(n=Object(l.a)(regeneratorRuntime.mark((function t(data){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.h.send(data);case 3:t.next=12;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(t.t0 instanceof Error)){t.next=11;break}this.error=t.t0.message,t.next=12;break;case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,this,[[0,5]])}))),function(t){return n.apply(this,arguments)})},{key:"downloadVideoSource",value:function(t){var e=nt({label:t.label},t.dlsrc||{src:t.src,type:t.type});if(!e.type.includes("application/")){var r=e.filename||"".concat(this.videoData.title,".").concat(e.type.substr(e.type.indexOf("/")+1)).replace(/[/\\?%*:|"<>]/g," ").trim();return e.label&&(r="[".concat(e.label,"]").concat(r)),this.download({url:t.src,filename:r})}this.warning="HLS videos can't be downloaded! \nTry downloading that video from a different hoster."}},{key:"downloadTrackSource",value:function(label){var t=this.videoData.tracks.find((function(t){return label===t.label}));if(t){var e="[".concat(t.label,"]").concat(this.videoData.title).concat(".vtt".replace(/[/\\?%*:|"<>]/g," ").trim());return this.download({url:t.src,filename:e})}}},{key:"appendTextTrack",value:(r=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,label,n,o,l,c,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.kind,label=e.label,n=e.language,o=e.default,l=e.src,t.next=3,M.a.get(l);case 3:c=t.sent,d=st(c.data),this.player.addRemoteTextTrack({kind:r,label:label,language:n,src:d,default:o},!0);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"setupSrtSelector",value:function(){var t=this;this.srtSelector.type="file",this.srtSelector.accept=".vtt, .srt, .txt",this.srtSelector.style.display="none",this.srtSelector.addEventListener("change",(function(){var e=new FileReader;e.onload=function(){var r=st(e.result);t.player.addRemoteTextTrack({label:t.srtSelector.files[0].name,language:"ADDED_FROM_USER",kind:"captions",src:r},!0)},e.readAsText(t.srtSelector.files[0],"ISO-8859-1")}))}},{key:"player",get:function(){if(!this._player)throw new Error("Player isn't created jet!");return this._player}},{key:"activeVideoSource",get:function(){var t=this.player.src(),e=this.videoData.src.find((function(e){return e.src===t}));if(!e)throw new Error("No video source active!");return e}},{key:"playlistEntry",get:function(){return k.Store.library.getResolvedVideoEntry(this.videoData.origin.url)}}]),e}(f.f);function st(t){return t.startsWith("WEBVTT")||(t=function(data){var t=data.replace(/\r+/g,""),e=(t=t.replace(/^\s+|\s+$/g,"")).split("\n\n"),r="";if(e.length>0){r+="WEBVTT\n\n";for(var i=0;i<e.length;i+=1)r+=lt(e[i])}return r}(t)),URL.createObjectURL(new Blob([t],{type:"text/vtt"}))}function lt(caption){for(var t="",s=caption.split(/\n/);s.length>3;){for(var i=3;i<s.length;i++)s[2]+="\n".concat(s[i]);s.splice(3,s.length-3)}var line=0;if(!s[0].match(/\d+:\d+:\d+/)&&s[1].match(/\d+:\d+:\d+/)&&(t+="".concat(s[0].match(/\w+/),"\n"),line+=1),!s[line].match(/\d+:\d+:\d+/))return"";var e=s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return e?(t+="".concat(e[1],":").concat(e[2],":").concat(e[3],".").concat(e[4]," --\x3e ").concat(e[5],":").concat(e[6],":").concat(e[7],".").concat(e[8],"\n"),s[line+=1]&&(t+="".concat(s[line],"\n\n")),t):""}it([Object(f.e)("videoPlayer")],ot.prototype,"videoPlayer",void 0),it([Object(f.d)({default:function(){}})],ot.prototype,"options",void 0),it([Object(f.d)({default:!1})],ot.prototype,"playing",void 0),it([Object(f.g)("playing")],ot.prototype,"handlePlayingUpdated",null),it([Object(f.b)("update:playing")],ot.prototype,"updatePlaying",null),it([Object(f.b)("error")],ot.prototype,"emitVideoJSError",null),it([Object(f.d)({required:!0})],ot.prototype,"videoData",void 0),it([Object(f.d)({default:!0})],ot.prototype,"allowTheatreMode",void 0),it([Object(f.g)("videoData")],ot.prototype,"handleVideoDataChange",null);var ct=ot=it([Object(f.a)({components:{TextTrackUrlModal:et}})],ot),ut=(r(300),Object(tt.a)(ct,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("video",{ref:"videoPlayer",staticClass:"video-js vjs-big-play-centered",attrs:{preload:"auto"}}),t._v(" "),r("div",{staticClass:"fixed-top"},[r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!t.warning,variant:"warning",dismissible:""},on:{dismissed:function(e){t.warning=null}}},[t._v("\n      "+t._s(t.warning)+"\n    ")]),t._v(" "),r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!t.error,variant:"danger",dismissible:""},on:{dismissed:function(e){t.error=null}}},[t._v("\n      "+t._s(t.error)+"\n    ")])],1),t._v(" "),r("TextTrackUrlModal",{on:{submit:t.handleTextTrackUrlSubmit},model:{value:t.showTextTrackUrlInput,callback:function(e){t.showTextTrackUrlInput=e},expression:"showTextTrackUrlInput"}})],1)}),[],!1,null,null,null));e.a=ut.exports},277:function(t,e){},300:function(t,e,r){"use strict";var n=r(247);r.n(n).a},301:function(t,e,r){var n=r(58),o=r(244),l=r(302),c=r(303),d=r(304),h=r(305),v=r(306);e=n(!1);var j=o(l),y=o(c),f=o(d),m=o(h),O=o(v);e.push([t.i,'.navbar-dark{border-bottom:1px solid #000;padding:.5rem}.btn-outline-primary:hover,.btn-primary{color:#fff!important}.modal-body{background:#343a40!important}.modal-body form{background:#495057;padding:1rem;border:1px solid #000}video{outline:none}.video-js{width:100%;height:100%;display:-webkit-box;display:flex}.video-js *{outline:none}.video-js .vjs-menu{z-index:100}.video-js .vjs-big-play-button{background:url(/logos/logo256.png) 50%/contain no-repeat;position:unset;top:unset;left:unset;margin:auto;width:4em;height:4em;z-index:999;border:none}.video-js .vjs-big-play-button .vjs-icon-placeholder:before{content:none}.video-js:hover .vjs-big-play-button{background-color:transparent}.vjs-has-started .vjs-control-bar{display:-webkit-inline-box;display:inline-flex;background-color:transparent;bottom:0;left:0;right:0;width:unset;height:3.25em;font-size:1.2em}.vjs-has-started .vjs-control-bar:before{content:"";background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.8)));background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8));pointer-events:none;position:absolute;left:0;right:0;bottom:0;height:5em}.vjs-has-started .vjs-control-bar .vjs-play-control{padding-left:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-fullscreen-control{padding-right:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-button{opacity:.9;outline:none;cursor:pointer;padding-bottom:.25em}.vjs-has-started .vjs-control-bar .vjs-button:hover{opacity:1}.vjs-has-started .vjs-control-bar .vjs-button .vjs-icon-placeholder:before{position:unset}.vjs-has-started .vjs-control-bar .vjs-menu-content{font-size:.9em}.vjs-has-started .vjs-control-bar .vjs-menu-content li{padding:.2em}.vjs-has-started .vjs-control-bar .vjs-progress-control{height:1.8em;-webkit-box-align:end;align-items:flex-end;position:absolute;width:100%;bottom:100%;padding:0 1em}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-play-progress{background-color:#8dc73f}.vjs-has-started .vjs-control-bar .vjs-duration{display:block;padding-left:.3em}.vjs-has-started .vjs-control-bar .vjs-current-time{display:block;padding-right:0}.vjs-has-started .vjs-control-bar .vjs-current-time:after{content:" / "}.vjs-has-started .vjs-control-bar .vjs-remaining-time{display:none}.vjs-has-started .vjs-control-bar .vjs-playback-rate{margin-left:auto}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu-button{-webkit-mask:url('+j+") no-repeat center/1.5em;mask:url("+j+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu{width:7em;left:-1.5em}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li{position:relative}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li button{-webkit-mask:url("+y+") no-repeat center;mask:url("+y+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu{width:15em;left:-5.5em}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul{overflow-x:hidden}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li{position:relative;text-transform:capitalize}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li button{-webkit-mask:url("+y+") no-repeat center;mask:url("+y+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-download-button{background-color:#fff;-webkit-mask:url("+y+") no-repeat center/1.5em;mask:url("+y+") no-repeat center/1.5em}.vjs-has-started .vjs-control-bar .vjs-patreon-button{background:url("+f+") no-repeat 50%/1.8em}.vjs-has-started .vjs-control-bar .vjs-theatre-button{-webkit-mask:url("+m+") no-repeat center/1.5em;mask:url("+m+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu-button{-webkit-mask:url("+O+") no-repeat center/1.9em;mask:url("+O+") no-repeat center/1.9em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu ul li{text-transform:capitalize}",""]),t.exports=e},302:function(t,e,r){t.exports=r.p+"img/93afa2c.svg"},303:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0IDEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEyLDkgMTIsMTEgMiwxMSAyLDkgMCw5IDAsMTMgMTQsMTMgMTQsOSAiLz48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEwLDMuNiA4LDUuNiA4LDAgNiwwIDYsNS42IDQsMy42IDIuNiw1IDcsOS40IDExLjQsNSAiLz48L3N2Zz4="},304:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAgMTgwIj4KCTxwYXRoCgkJZmlsbD0iI2Y5Njc1MyIKCQlkPSJNMTA4LjgxMzU5OTIgMjYuMDY3MjAxMjVjLTI2LjQ2ODI2NiAwLTQ4LjAwMjEzMjEyIDIxLjUzMDY2NjEzLTQ4LjAwMjEzMjEyIDQ3Ljk5NzMzMjEzIDAgMjYuMzg2NTMyNjggMjEuNTMzODY2MTMgNDcuODU0MjY1NDcgNDguMDAyMTMyMTMgNDcuODU0MjY1NDcgMjYuMzg2Mzk5MzcgMCA0Ny44NTMwNjU1LTIxLjQ2NzczMjggNDcuODUzMDY1NS00Ny44NTQyNjU0NyAwLTI2LjQ2NjY2Ni0yMS40NjY2NjYxMy00Ny45OTczMzIxMy00Ny44NTMwNjU0Ny00Ny45OTczMzIxMyIKCS8+Cgk8cGF0aAoJCWZpbGw9IiMwNTJhNDkiCgkJZD0iTTIzLjMzMzMzNSAxNTMuOTMzMzMxNzhWMjYuMDY2NjY3OWgyMy40NjY2NjU3NnYxMjcuODY2NjYzOXoiCgkvPgo8L3N2Zz4KCg=="},305:function(t,e,r){t.exports=r.p+"img/f606bfd.svg"},306:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMCIgeT0iNjQiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjE0OS4zMzMiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjIzNC42NjciIHdpZHRoPSIxNzAuNjY3IiBoZWlnaHQ9IjQyLjY2NyIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjM0MS4zMzMsMjM0LjY2NyAzNDEuMzMzLDE0OS4zMzMgMjk4LjY2NywxNDkuMzMzIDI5OC42NjcsMjM0LjY2NyAyMTMuMzMzLDIzNC42NjcgMjEzLjMzMywyNzcuMzMzIAoJCQkJMjk4LjY2NywyNzcuMzMzIDI5OC42NjcsMzYyLjY2NyAzNDEuMzMzLDM2Mi42NjcgMzQxLjMzMywyNzcuMzMzIDQyNi42NjcsMjc3LjMzMyA0MjYuNjY3LDIzNC42NjcgCQkJIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}}]);