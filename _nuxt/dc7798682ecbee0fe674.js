(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,r){var content=r(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(61).default)("2712b012",content,!0,{sourceMap:!1})},255:function(e,t,r){"use strict";r(6),r(3),r(2),r(1),r(5),r(77),r(31),r(167),r(21),r(48),r(23),r(55),r(62);var n,o=r(0),l=(r(56),r(166),r(35),r(11)),c=r(10),d=r(12),h=r(19),y=r(14),v=r(20),j=r(15),f=r(237),m=r(238),O=r(73),M=r.n(O),k=r(52),w=r(78),D=r(119),I=r(47),S=r(117);function T(e){return function(t){return{trigger:function(r){return t.trigger(e,r)},on:function(r){t.on(e,(function(e,t){r(t)}))}}}}!function(e){e.THEATRE_MODE_CHANGED="theatre-mode-changed",e.DOWNLOAD_VIDEO_SRC="download-video-source",e.DOWNLOAD_ACTIVE_VIDEO_SRC="download-active-video-source",e.ADD_TO_PLAYLIST="add-to-playlist",e.REMOVE_FROM_PLAYLIST="remove-from-playlist",e.PATREON_BUTTON_CLICKED="patreon-button-clicked",e.QUALITY_CHANGED="quality-changed",e.DOWNLOAD_TRACK_SRC="download-track-src",e.LOAD_TRACK_FROM_URL="load-track-from-url",e.LOAD_TRACK_FROM_FILE="load-track-from-file"}(n||(n={}));var C=T(n.THEATRE_MODE_CHANGED),x=T(n.DOWNLOAD_VIDEO_SRC),N=T(n.DOWNLOAD_ACTIVE_VIDEO_SRC),L=T(n.ADD_TO_PLAYLIST),z=T(n.REMOVE_FROM_PLAYLIST),E=T(n.PATREON_BUTTON_CLICKED),A=T(n.QUALITY_CHANGED),P=T(n.DOWNLOAD_TRACK_SRC),R=T(n.LOAD_TRACK_FROM_URL),_=T(n.LOAD_TRACK_FROM_FILE),Y=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,e))).addClass("vjs-download-button"),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){N(this.player()).trigger()}}]),t}(m.default.getComponent("Button")),V=(r(283),function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,e))).anchor=document.createElement("a"),r.anchor.href=Object(D.a)(),r.anchor.target="_blank",r.addClass("vjs-patreon-button"),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){this.anchor.click(),E(this.player()).trigger()}}]),t}(m.default.getComponent("Button"))),H=r(118),B=function(e){function t(e){var r,n=e.player,data=e.data;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,n,{label:data.label,selectable:!0,selected:n.src()===data.src}))).source=data,A(r.player()).on((function(e){r.selected(e.src===r.source.src)})),r.setupContent(),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){Object(H.a)(Object(y.a)(t.prototype),"handleClick",this).call(this,e),this.select()}},{key:"select",value:function(){var e=this;if(this.player().src()!==this.source.src){var t=this.player().paused(),r=this.player().currentTime();this.player().one("loadedmetadata",(function(){e.player().currentTime(r),t||e.player().play()})),this.player().src(this.source),A(this.player()).trigger(this.source)}}},{key:"setupContent",value:function(){var e=this,button=document.createElement("button");button.addEventListener("click",(function(t){x(e.player()).trigger(e.source),t.stopPropagation()})),this.el().appendChild(button)}}]),t}(m.default.getComponent("MenuItem")),U=function(e){function t(e){var r,n=e.player,o=e.sources;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,n,{}))).addClass("vjs-quality-button"),r.setSources(o),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"setSources",value:function(e){this.sources=e.concat().sort((function(a,b){var e=a.label.match(/([0-9]*)p?/),t=b.label.match(/([0-9]*)p?/);return e&&t?parseInt(t[1])-parseInt(e[1]):e||t?e?1:-1:-a.label.localeCompare(b.label)})),this.sources.length>0&&this.player().src(this.sources[0]),this.update(),this.sources.length<=1&&this.hide()}},{key:"createItems",value:function(){var e=this;return this.sources?this.sources.map((function(t){return new B({player:e.player(),data:t})})):[]}}]),t}(m.default.getComponent("MenuButton")),W=function(e){function t(e){var r,n=e.player,data=e.data,o=e.selected;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,n,{label:data.name,selectable:!0,selected:o,multiSelectable:!0}))).playlist=data,r.isSelected=o,r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){Object(H.a)(Object(y.a)(t.prototype),"handleClick",this).call(this,e),this.isSelected=!this.isSelected,this.selected(this.isSelected),this.isSelected?L(this.player()).trigger(this.playlist):z(this.player()).trigger(this.playlist)}}]),t}(m.default.getComponent("MenuItem")),F=function(e){function t(e){var r,n=e.player,data=e.data;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,n,{}))).addClass("vjs-playlist-button"),r.setData(data),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"setData",value:function(data){this.data=data,this.update()}},{key:"createItems",value:function(){var e=this;return this.data?this.data.playlists.map((function(t){return new W({player:e.player(),data:t,selected:!!e.data.active.find((function(e){return e.id===t.id}))})})):[]}}]),t}(m.default.getComponent("MenuButton")),Z=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,e,{label:"load VTT/SRT from File"}))).controlText("load VTT/SRT from File"),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){_(this.player()).trigger()}}]),t}(m.default.getComponent("MenuItem")),Q=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(h.a)(this,Object(y.a)(t).call(this,e,{label:"load VTT/SRT from URL"}))).controlText("load VTT/SRT from URL"),r}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){R(this.player()).trigger()}}]),t}(m.default.getComponent("MenuItem")),J=m.default.getComponent("SubsCapsMenuItem"),G=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"createEl",value:function(e,r,n){var o=this,l=Object(H.a)(Object(y.a)(t.prototype),"createEl",this).call(this,e,r,n),track=this.options_.track;if("ADDED_FROM_USER"!==track.language){var button=document.createElement("button");button.addEventListener("click",(function(e){P(o.player()).trigger({label:track.label}),e.stopPropagation()})),l.appendChild(button)}return l}}]),t}(J),K=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"createItems",value:function(){var e=Object(H.a)(Object(y.a)(t.prototype),"createItems",this).call(this);return e.splice(2,0,new Z(this.player_)),e.splice(3,0,new Q(this.player_)),e}}]),t}(m.default.getComponent("SubsCapsButton"));var X,$=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},ee=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},te=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(y.a)(t).apply(this,arguments))).url="",e.urlState=null,e.visible=!1,e}return Object(v.a)(t,e),Object(d.a)(t,[{key:"visibilityChanged",value:function(){return this.visible}},{key:"checkFormValidity",value:function(){var e=this.form.checkValidity();return this.urlState=e?"valid":"invalid",e}},{key:"resetModal",value:function(){this.url="",this.urlState=null}},{key:"handleOk",value:function(e){e.preventDefault(),this.handleSubmit()}},{key:"handleSubmit",value:function(){var e=this;this.checkFormValidity()&&(this.$nextTick((function(){e.visible=!1})),this.submit(this.url))}},{key:"submit",value:function(e){return e}}]),t}(f.f);$([Object(f.c)("change"),ee("design:type",Object)],te.prototype,"visible",void 0),$([Object(f.g)("visible"),Object(f.b)("change"),ee("design:type",Function),ee("design:paramtypes",[]),ee("design:returntype",void 0)],te.prototype,"visibilityChanged",null),$([Object(f.e)("form"),ee("design:type","function"==typeof(X="undefined"!=typeof HTMLFormElement&&HTMLFormElement)?X:Object)],te.prototype,"form",void 0),$([Object(f.b)("submit"),ee("design:type",Function),ee("design:paramtypes",[String]),ee("design:returntype",void 0)],te.prototype,"submit",null);var ae=te=$([Object(f.a)({})],te),re=r(54),ne=Object(re.a)(ae,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-modal",{attrs:{id:"modal-prevent-closing",title:"Add Subtitles from Url"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("b-form-group",{attrs:{state:e.urlState,label:"Url","label-for":"url-input","invalid-feedback":"Url is required"}},[r("b-form-input",{attrs:{id:"url-input",state:e.urlState,required:""},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1)],1)])}),[],!1,null,null,null).exports;r(284),r(285);function oe(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?oe(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):oe(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var se,le,ce,ue,de,pe=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},he=function(e,t){if("object"===("undefined"==typeof Reflect?"undefined":Object(j.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},be=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(y.a)(t).apply(this,arguments))).playPromise=null,e.webstoreUrl=Object(D.b)(),e._player=null,e.qualityMenu=null,e.playlistMenu=null,e.srtSelector=document.createElement("input"),e.warning=null,e.error=null,e.showTextTrackUrlInput=!1,e.disableSharePopup=!1,e.showShareAlert=!1,e}var r,n,o,j;return Object(v.a)(t,e),Object(d.a)(t,[{key:"handlePlayingUpdated",value:function(){this.playing?this.playPromise=this.player.play()||null:this.player.pause()}},{key:"updatePlaying",value:(j=Object(l.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.playPromise;case 2:this.$emit("update",t);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"emitVideoJSError",value:function(e){return e}},{key:"updateShowShareAlert",value:function(){if(w.Store.player.disableSharePopup)this.showShareAlert=!1;else{var e=w.Store.player.sharePopupShownDate;if(e){var t=new Date(e),r=new Date,n=Math.abs(+r-+t),o=Math.ceil(n/864e5);this.showShareAlert=o>=14}else w.Store.player.setSharePopupShownDate(Date.now()),this.showShareAlert=!1}}},{key:"handleShareAlertDismissed",value:function(){this.disableSharePopup&&w.Store.player.setDisableSharePopup(!0),w.Store.player.setSharePopupShownDate(+new Date)}},{key:"head",value:function(){return{title:"".concat(this.videoData.title||"Watch video"," – OpenVideo")}}},{key:"handleVideoDataChange",value:function(e,t){t&&this.videoData&&this.updatePlayer()}},{key:"updatePlayer",value:function(){var e=this;this.qualityMenu?this.qualityMenu.setSources(this.videoData.src):this.qualityMenu=this.addBeforeFullscreen(new U({player:this.player,sources:this.videoData.src})),this.playlistMenu?this.playlistMenu.setData({playlists:w.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(e){return e.playlist})):[]}):this.playlistMenu=this.addBeforeFullscreen(new F({player:this.player,data:{playlists:w.Store.library.playlists,active:this.playlistEntry?this.playlistEntry.playlists.map((function(e){return e.playlist})):[]}})),this.videoData.poster&&this.player.poster(this.videoData.poster),Array.from(this.player.textTracks()).forEach((function(track){track.mode="disabled"})),this.videoData.tracks.forEach((function(track){e.appendTextTrack(track)})),this.player.one("loadedmetadata",(function(){e.playlistEntry&&e.player.currentTime(e.playlistEntry.data.watched),e.saveToHistory()}))}},{key:"mounted",value:(o=Object(l.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Store.library;case 2:return e.next=4,w.Store.player;case 4:this.updateShowShareAlert(),J.prototype=G.prototype,m.default.registerComponent("SubsCapsMenuItem",G),m.default.registerComponent("SubsCapsButton",K),this.setupSrtSelector(),this._player=Object(m.default)(this.videoPlayer,ie({},this.options,{playbackRates:[.5,1,2],controls:!0}),Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.playerReady();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0 instanceof Error&&(t.error=e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))));case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"beforeDestroy",value:function(){this._player&&this._player.dispose()}},{key:"playerReady",value:function(){var e=this;this.player.hotkeys({volumeStep:.1,seekStep:5,enableModifiersForNumbers:!1}),L(this.player).on((function(t){w.Store.library.addToPlaylist({origin:e.videoData.origin.url,playlistId:t.id})})),z(this.player).on((function(t){w.Store.library.removeFromPlaylist({origin:e.videoData.origin.url,playlistId:t.id})})),C(this.player).on((function(e){var t=e.isEnabled;I.i.send({isEnabled:t,width:window.innerWidth,height:window.innerHeight})})),x(this.player).on((function(t){e.downloadVideoSource(t)})),N(this.player).on((function(){e.downloadVideoSource(e.activeVideoSource)})),P(this.player).on((function(t){var label=t.label;e.downloadTrackSource(label)})),A(this.player).on((function(){})),R(this.player).on((function(){e.showTextTrackUrlInput=!0})),_(this.player).on((function(){e.srtSelector.click()})),this.player.on("loadstart",(function(){var t=e.player.tech();t.hls&&(t.hls.xhr.beforeRequest=function(t){Object(S.c)(t.uri)||(t.uri=Object(S.a)({url:t.uri,referer:e.videoData.origin.url}))})})),this.player.on("volumechange",(function(){w.Store.player.setVolume(e.player.volume())})),this.player.el().addEventListener("mouseleave",(function(){0!==e.player.currentTime()&&e.saveToHistory()})),this.player.on("play",(function(){e.updatePlaying(!0)})),this.player.on("pause",(function(){e.updatePlaying(!1)})),this.player.on("error",(function(){var t=e.player.error();t&&e.emitVideoJSError(t)})),this.player.volume(w.Store.player.volume),this.addBeforeFullscreen(new Y(this.player)),this.addBeforeFullscreen(new V(this.player)),this.player.controlBar.getChild("SubsCapsButton").show(),this.updatePlayer()}},{key:"addBeforeFullscreen",value:function(e){return this.player.controlBar.addChild(e,null,this.player.controlBar.children().length-2),e}},{key:"handleTextTrackUrlSubmit",value:function(e){this.appendTextTrack({src:e,language:"ADDED_FROM_USER",kind:"captions",label:"Custom"})}},{key:"saveToHistory",value:function(){w.Store.library.updateHistory({poster:this.videoData.poster,title:this.videoData.title,origin:this.videoData.origin,parent:this.videoData.parent,watched:this.player.currentTime(),duration:this.player.duration()})}},{key:"download",value:(n=Object(l.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.g.send(data);case 3:e.next=12;break;case 5:if(e.prev=5,e.t0=e.catch(0),!(e.t0 instanceof Error)){e.next=11;break}this.error=e.t0.message,e.next=12;break;case 11:throw e.t0;case 12:case"end":return e.stop()}}),e,this,[[0,5]])}))),function(e){return n.apply(this,arguments)})},{key:"downloadVideoSource",value:function(e){var t=ie({label:e.label},e.dlsrc||{src:e.src,type:e.type});if(!t.type.includes("application/")){var r=t.filename||"".concat(this.videoData.title,".").concat(t.type.substr(t.type.indexOf("/")+1)).replace(/[/\\?%*:|"<>]/g," ").trim();return t.label&&(r="[".concat(t.label,"]").concat(r)),this.download({url:e.src,filename:r})}this.warning="HLS videos can't be downloaded! \nTry downloading that video from a different hoster."}},{key:"downloadTrackSource",value:function(label){var e=this.videoData.tracks.find((function(e){return label===e.label}));if(e){var t="[".concat(e.label,"]").concat(this.videoData.title).concat(".vtt".replace(/[/\\?%*:|"<>]/g," ").trim());return this.download({url:e.src,filename:t})}}},{key:"appendTextTrack",value:(r=Object(l.a)(regeneratorRuntime.mark((function e(t){var r,label,n,o,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.kind,label=t.label,n=t.language,o=t.default,l=t.src,e.next=3,M.a.get(l);case 3:c=e.sent,d=ye(c.data),this.player.addRemoteTextTrack({kind:r,label:label,language:n,src:d,default:o},!0);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"setupSrtSelector",value:function(){var e=this;this.srtSelector.type="file",this.srtSelector.accept=".vtt, .srt, .txt",this.srtSelector.style.display="none",this.srtSelector.addEventListener("change",(function(){var t=new FileReader;t.onload=function(){var r=ye(t.result);e.player.addRemoteTextTrack({label:e.srtSelector.files[0].name,language:"ADDED_FROM_USER",kind:"captions",src:r},!0)},t.readAsText(e.srtSelector.files[0],"ISO-8859-1")}))}},{key:"player",get:function(){if(!this._player)throw new Error("Player isn't created jet!");return this._player}},{key:"activeVideoSource",get:function(){var e=this.player.src(),t=this.videoData.src.find((function(t){return t.src===e}));if(!t)throw new Error("No video source active!");return t}},{key:"playlistEntry",get:function(){return w.Store.library.getResolvedVideoEntry(this.videoData.origin.url)}}]),t}(f.f);function ye(e){return e.startsWith("WEBVTT")||(e=function(data){var e=data.replace(/\r+/g,""),t=(e=e.replace(/^\s+|\s+$/g,"")).split("\n\n"),r="";if(t.length>0){r+="WEBVTT\n\n";for(var i=0;i<t.length;i+=1)r+=ve(t[i])}return r}(e)),URL.createObjectURL(new Blob([e],{type:"text/vtt"}))}function ve(caption){for(var e="",s=caption.split(/\n/);s.length>3;){for(var i=3;i<s.length;i++)s[2]+="\n".concat(s[i]);s.splice(3,s.length-3)}var line=0;if(!s[0].match(/\d+:\d+:\d+/)&&s[1].match(/\d+:\d+:\d+/)&&(e+="".concat(s[0].match(/\w+/),"\n"),line+=1),!s[line].match(/\d+:\d+:\d+/))return"";var t=s[1].match(/(\d+):(\d+):(\d+)(?:,(\d+))?\s*--?>\s*(\d+):(\d+):(\d+)(?:,(\d+))?/);return t?(e+="".concat(t[1],":").concat(t[2],":").concat(t[3],".").concat(t[4]," --\x3e ").concat(t[5],":").concat(t[6],":").concat(t[7],".").concat(t[8],"\n"),s[line+=1]&&(e+="".concat(s[line],"\n\n")),e):""}pe([Object(f.e)("videoPlayer"),he("design:type","function"==typeof(se="undefined"!=typeof HTMLVideoElement&&HTMLVideoElement)?se:Object)],be.prototype,"videoPlayer",void 0),pe([Object(f.d)({default:function(){}}),he("design:type","function"==typeof(le=void 0!==m.default&&m.default.PlayerOptions)?le:Object)],be.prototype,"options",void 0),pe([Object(f.c)("update",{default:!1}),he("design:type",Boolean)],be.prototype,"playing",void 0),pe([Object(f.g)("playing"),he("design:type",Function),he("design:paramtypes",[]),he("design:returntype",void 0)],be.prototype,"handlePlayingUpdated",null),pe([Object(f.b)("error"),he("design:type",Function),he("design:paramtypes",["function"==typeof(ce="undefined"!=typeof MediaError&&MediaError)?ce:Object]),he("design:returntype",void 0)],be.prototype,"emitVideoJSError",null),pe([Object(f.d)({required:!0}),he("design:type","function"==typeof(ue=void 0!==k.VideoData&&k.VideoData)?ue:Object)],be.prototype,"videoData",void 0),pe([Object(f.d)({default:!0}),he("design:type",Boolean)],be.prototype,"allowTheatreMode",void 0),pe([Object(f.g)("videoData"),he("design:type",Function),he("design:paramtypes",["function"==typeof(de=void 0!==k.VideoData&&k.VideoData)?de:Object,Object]),he("design:returntype",void 0)],be.prototype,"handleVideoDataChange",null);var je=be=pe([Object(f.a)({components:{TextTrackUrlModal:ne}})],be),fe=(r(287),Object(re.a)(je,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("video",{ref:"videoPlayer",staticClass:"video-js vjs-big-play-centered",attrs:{preload:"auto"}}),e._v(" "),r("div",{staticClass:"fixed-top"},[r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!e.warning,variant:"warning",dismissible:""},on:{dismissed:function(t){e.warning=null}}},[e._v("\n      "+e._s(e.warning)+"\n    ")]),e._v(" "),r("b-alert",{staticClass:"mx-auto my-3 w-75",attrs:{show:!!e.error,variant:"danger",dismissible:""},on:{dismissed:function(t){e.error=null}}},[e._v("\n      "+e._s(e.error)+"\n    ")]),e._v(" "),r("b-alert",{staticClass:"mx-auto my-3 w-75 bg-secondary text-white",attrs:{show:e.showShareAlert,dismissible:""},on:{dismissed:function(t){return e.handleShareAlertDismissed()}}},[e._v("\n      Hi!\n      "),r("p",[e._v("\n        I really appreciate that you are using OpenVideo that much! If you\n        want to support me, recommend OpenVideo to one of your friends.\n      ")]),e._v(" "),r("p",[e._v("\n        You can also rate OpenVideo or write a review for it in the webstore:\n        "),r("b-link",{attrs:{href:e.webstoreUrl,target:"_blank"}},[e._v("Click here")]),e._v(" (opens\n        in new tab).\n      ")],1),e._v(" "),r("p",[e._v("Thank you so much!")]),e._v(" "),r("b-checkbox",{model:{value:e.disableSharePopup,callback:function(t){e.disableSharePopup=t},expression:"disableSharePopup"}},[e._v("Don't show this again")])],1)],1),e._v(" "),r("TextTrackUrlModal",{on:{submit:e.handleTextTrackUrlSubmit},model:{value:e.showTextTrackUrlInput,callback:function(t){e.showTextTrackUrlInput=t},expression:"showTextTrackUrlInput"}})],1)}),[],!1,null,null,null));t.a=fe.exports},263:function(e,t){},287:function(e,t,r){"use strict";var n=r(241);r.n(n).a},288:function(e,t,r){var n=r(60),o=r(242),l=r(289),c=r(290),d=r(291),h=r(292),y=r(293);t=n(!1);var v=o(l),j=o(c),f=o(d),m=o(h),O=o(y);t.push([e.i,'video{outline:none}.video-js{width:100%;height:100%;display:-webkit-box;display:flex}.video-js *{outline:none}.video-js .vjs-menu{z-index:100}.video-js .vjs-big-play-button{background:url(/logos/logo256.png) 50%/contain no-repeat;position:unset;top:unset;left:unset;margin:auto;width:4em;height:4em;z-index:999;border:none}.video-js .vjs-big-play-button .vjs-icon-placeholder:before{content:none}.video-js:hover .vjs-big-play-button{background-color:transparent}.vjs-has-started .vjs-control-bar{display:-webkit-inline-box;display:inline-flex;background-color:transparent;bottom:0;left:0;right:0;width:unset;height:3.25em;font-size:1.2em}.vjs-has-started .vjs-control-bar:before{content:"";background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(rgba(0,0,0,.8)));background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.8));pointer-events:none;position:absolute;left:0;right:0;bottom:0;height:5em}.vjs-has-started .vjs-control-bar .vjs-play-control{padding-left:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-fullscreen-control{padding-right:1em;width:5em}.vjs-has-started .vjs-control-bar .vjs-button{opacity:.9;outline:none;cursor:pointer;padding-bottom:.25em}.vjs-has-started .vjs-control-bar .vjs-button:hover{opacity:1}.vjs-has-started .vjs-control-bar .vjs-button .vjs-icon-placeholder:before{position:unset}.vjs-has-started .vjs-control-bar .vjs-menu-content{font-size:.9em}.vjs-has-started .vjs-control-bar .vjs-menu-content li{padding:.2em}.vjs-has-started .vjs-control-bar .vjs-progress-control{height:1.8em;-webkit-box-align:end;align-items:flex-end;position:absolute;width:100%;bottom:100%;padding:0 1em}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-has-started .vjs-control-bar .vjs-progress-control .vjs-play-progress{background-color:#8dc73f}.vjs-has-started .vjs-control-bar .vjs-duration{display:block;padding-left:.3em}.vjs-has-started .vjs-control-bar .vjs-current-time{display:block;padding-right:0}.vjs-has-started .vjs-control-bar .vjs-current-time:after{content:" / "}.vjs-has-started .vjs-control-bar .vjs-remaining-time{display:none}.vjs-has-started .vjs-control-bar .vjs-playback-rate{margin-left:auto}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu-button{-webkit-mask:url('+v+") no-repeat center/1.5em;mask:url("+v+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu{width:7em;left:-1.5em}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li{position:relative}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li button{-webkit-mask:url("+j+") no-repeat center;mask:url("+j+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-quality-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu{width:15em;left:-5.5em}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul{overflow-x:hidden}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li{position:relative;text-transform:capitalize}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li button{-webkit-mask:url("+j+") no-repeat center;mask:url("+j+") no-repeat center;width:13px;position:absolute;right:5px;top:2px;bottom:2px;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-subs-caps-button .vjs-menu ul li.vjs-selected button{background-color:#2b333f;color:#2b333f!important}.vjs-has-started .vjs-control-bar .vjs-download-button{background-color:#fff;-webkit-mask:url("+j+") no-repeat center/1.5em;mask:url("+j+") no-repeat center/1.5em}.vjs-has-started .vjs-control-bar .vjs-patreon-button{background:url("+f+") no-repeat 50%/1.8em}.vjs-has-started .vjs-control-bar .vjs-theatre-button{-webkit-mask:url("+m+") no-repeat center/1.5em;mask:url("+m+") no-repeat center/1.5em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu-button{-webkit-mask:url("+O+") no-repeat center/1.9em;mask:url("+O+") no-repeat center/1.9em;background-color:#fff}.vjs-has-started .vjs-control-bar .vjs-playlist-button .vjs-menu ul li{text-transform:capitalize}",""]),e.exports=t},289:function(e,t,r){e.exports=r.p+"img/93afa2c.svg"},290:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTQgMTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE0IDEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzAwMDAwMDt9PC9zdHlsZT48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEyLDkgMTIsMTEgMiwxMSAyLDkgMCw5IDAsMTMgMTQsMTMgMTQsOSAiLz48cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjEwLDMuNiA4LDUuNiA4LDAgNiwwIDYsNS42IDQsMy42IDIuNiw1IDcsOS40IDExLjQsNSAiLz48L3N2Zz4="},291:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODAgMTgwIj4KCTxwYXRoCgkJZmlsbD0iI2Y5Njc1MyIKCQlkPSJNMTA4LjgxMzU5OTIgMjYuMDY3MjAxMjVjLTI2LjQ2ODI2NiAwLTQ4LjAwMjEzMjEyIDIxLjUzMDY2NjEzLTQ4LjAwMjEzMjEyIDQ3Ljk5NzMzMjEzIDAgMjYuMzg2NTMyNjggMjEuNTMzODY2MTMgNDcuODU0MjY1NDcgNDguMDAyMTMyMTMgNDcuODU0MjY1NDcgMjYuMzg2Mzk5MzcgMCA0Ny44NTMwNjU1LTIxLjQ2NzczMjggNDcuODUzMDY1NS00Ny44NTQyNjU0NyAwLTI2LjQ2NjY2Ni0yMS40NjY2NjYxMy00Ny45OTczMzIxMy00Ny44NTMwNjU0Ny00Ny45OTczMzIxMyIKCS8+Cgk8cGF0aAoJCWZpbGw9IiMwNTJhNDkiCgkJZD0iTTIzLjMzMzMzNSAxNTMuOTMzMzMxNzhWMjYuMDY2NjY3OWgyMy40NjY2NjU3NnYxMjcuODY2NjYzOXoiCgkvPgo8L3N2Zz4KCg=="},292:function(e,t,r){e.exports=r.p+"img/f606bfd.svg"},293:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDI2LjY2NyA0MjYuNjY3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MjYuNjY3IDQyNi42Njc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPHJlY3QgeD0iMCIgeT0iNjQiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjE0OS4zMzMiIHdpZHRoPSIyNTYiIGhlaWdodD0iNDIuNjY3Ii8+CgkJCTxyZWN0IHg9IjAiIHk9IjIzNC42NjciIHdpZHRoPSIxNzAuNjY3IiBoZWlnaHQ9IjQyLjY2NyIvPgoJCQk8cG9seWdvbiBwb2ludHM9IjM0MS4zMzMsMjM0LjY2NyAzNDEuMzMzLDE0OS4zMzMgMjk4LjY2NywxNDkuMzMzIDI5OC42NjcsMjM0LjY2NyAyMTMuMzMzLDIzNC42NjcgMjEzLjMzMywyNzcuMzMzIAoJCQkJMjk4LjY2NywyNzcuMzMzIDI5OC42NjcsMzYyLjY2NyAzNDEuMzMzLDM2Mi42NjcgMzQxLjMzMywyNzcuMzMzIDQyNi42NjcsMjc3LjMzMyA0MjYuNjY3LDIzNC42NjcgCQkJIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}}]);