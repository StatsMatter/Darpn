webpackJsonp([2],{2276:function(t,e){t.exports={btn:"tjs-augmented_virtuality_tool__btn tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary":"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn",btnPrimary:"tjs-augmented_virtuality_tool__btn-primary tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-blink":"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn",btnBlink:"tjs-augmented_virtuality_tool__btn-blink tjs-_buttons__btn tjs-_buttons__btn tjs-nav__btn tjs-_buttons__btn","btn-primary--hover":"tjs-augmented_virtuality_tool__btn-primary--hover",btnPrimaryHover:"tjs-augmented_virtuality_tool__btn-primary--hover",blinker:"tjs-augmented_virtuality_tool__blinker",toolButton:"tjs-augmented_virtuality_tool__toolButton",augmentedVirtualityTool:"tjs-augmented_virtuality_tool__augmentedVirtualityTool tjs-tool_button__toolButton"}},2277:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(0),r=a(n),o=i(1),l=a(o),s=i(13),u=a(s),d=i(9),h=a(d),_=i(40),m=a(_),f=i(10),c=a(f),g=i(436),p=a(g),v=i(799),b=a(v),y=function t(e){var i=this;this._terria=e,this._eventLoopState={},this._manualAlignment=!1,this._maximumUpdatesPerSecond=t.DEFAULT_MAXIMUM_UPDATES_PER_SECOND,this._orientationUpdated=!1,this._alpha=0,this._beta=0,this._gamma=0,this._realignAlpha=0,this._realignHeading=0,this._hoverLevel=t.PRESET_HEIGHTS.length-1,"ondeviceorientation"in window&&window.addEventListener("deviceorientation",function(t){i._storeOrientation(t)}),u.default.track(this,["_eventLoopState","_manualAlignment","_maximumUpdatesPerSecond","_realignAlpha","_realignHeading","_hoverLevel"]),u.default.defineProperty(this,"enabled",{get:function(){return this._eventLoopRunning()||this._manualAlignment},set:function(t){!0!==t&&(t=!1,this.resetAlignment()),t!==this.enabled&&(this._manualAlignment=!1,this._startEventLoop(t))}}),u.default.defineProperty(this,"manualAlignment",{get:function(){return this._getManualAlignment()},set:function(t){this._setManualAlignment(t)}}),u.default.defineProperty(this,"manualAlignmentSet",{get:function(){return 0!==this._realignAlpha||0!==this._realignHeading}}),u.default.defineProperty(this,"hoverLevel",{get:function(){return this._hoverLevel}}),u.default.defineProperty(this,"maximumUpdatesPerSecond",{get:function(){return this._maximumUpdatesPerSecond},set:function(t){this._maximumUpdatesPerSecond=t,this._eventLoopRunning()&&(this._startEventLoop(!1),this._startEventLoop(!0))}}),this.enabled=!1};y.DEFAULT_MAXIMUM_UPDATES_PER_SECOND=10,y.MINIMUM_HOVER_HEIGHT=20,y.PRESET_HEIGHTS=[1e3,250,20],y.prototype.toggleEnabled=function(){this.enabled=!this.enabled},y.prototype.toggleManualAlignment=function(){this.manualAlignment=!this.manualAlignment},y.prototype.resetAlignment=function(){this._orientationUpdated=!0,this._realignAlpha=0,this._realignHeading=0},y.prototype.toggleHoverHeight=function(){this._hoverLevel=(this._hoverLevel+1)%y.PRESET_HEIGHTS.length,this.hover(y.PRESET_HEIGHTS[this._hoverLevel])},y.prototype.hover=function(t,e,i){function a(a){(0,r.default)(a)&&(t+=a);var l=c.default.fromRadians(e.longitude,e.latitude,t),s=n._getCurrentOrientation();s.destination=l,i?o.flyTo(s):o.setView(s),n._terria.currentViewer.notifyRepaintRequired()}var n=this;if((0,r.default)(this._terria.cesium)&&(0,r.default)(this._terria.cesium.viewer)&&(0,r.default)(this._terria.cesium.viewer.camera)){var o=this._terria.cesium.viewer.camera;if((0,r.default)(e)||(e=o.positionCartographic.clone()),i=(0,l.default)(i,!0),t<y.MINIMUM_HOVER_HEIGHT&&(t=y.MINIMUM_HOVER_HEIGHT),!(0,r.default)(this._terria.cesium)||!(0,r.default)(this._terria.cesium.scene)||!(0,r.default)(this._terria.cesium.scene.terrainProvider)||this._terria.cesium.scene.terrainProvider instanceof p.default)a(0);else{var s=this._terria.cesium.scene.terrainProvider;(0,b.default)(s,[e]).then(function(t){a(t[0].height)})}}},y.prototype.moveTo=function(t,e,i){function a(a){(0,r.default)(a)||(a=0);var o=s-a;(0,r.default)(e)&&o>e&&(o=e),n.hover(o,t,i)}var n=this;if(!this._manualAlignment&&(0,r.default)(this._terria.cesium)&&(0,r.default)(this._terria.cesium.viewer)&&(0,r.default)(this._terria.cesium.viewer.camera)){var o=this._terria.cesium.viewer.camera,l=o.positionCartographic.clone(),s=l.height;if(!(0,r.default)(this._terria.cesium)||!(0,r.default)(this._terria.cesium.scene)||!(0,r.default)(this._terria.cesium.scene.terrainProvider)||this._terria.cesium.scene.terrainProvider instanceof p.default)a(void 0);else{var u=this._terria.cesium.scene.terrainProvider;(0,b.default)(u,[l]).then(function(t){a(t[0].height)})}}},y.prototype._getManualAlignment=function(){return this.enabled&&this._manualAlignment},y.prototype._setManualAlignment=function(t){!0===this.enabled&&(!0!==t&&(t=!1),!1===t&&(0,r.default)(this._terria.cesium)&&(0,r.default)(this._terria.cesium.viewer)&&(0,r.default)(this._terria.cesium.viewer.camera)&&(this._realignAlpha=this._alpha,this._realignHeading=h.default.toDegrees(this._terria.cesium.viewer.camera.heading)),this._manualAlignment!==t&&(this._manualAlignment=t,this._startEventLoop(!this._manualAlignment)))},y.prototype._eventLoopRunning=function(){return(0,r.default)(this._eventLoopState.intervalId)},y.prototype._startEventLoop=function(t){if(this._eventLoopRunning()!==t)if(!0===t){var e=this;this._orientationUpdated=!0;var i=1e3/this._maximumUpdatesPerSecond,a=setInterval(function(){e._updateOrientation()},i);this._eventLoopState={intervalId:a}}else clearInterval(this._eventLoopState.intervalId),this._eventLoopState={}},y.prototype._storeOrientation=function(t){this._alpha=t.alpha,this._beta=t.beta,this._gamma=t.gamma,this._orientationUpdated=!0},y.prototype._updateOrientation=function(){var t=this._getCurrentScreenOrientation();if(t!==this._lastScreenOrientation&&(this._orientationUpdated=!0),this._lastScreenOrientation=t,this._orientationUpdated&&(this._orientationUpdated=!1,(0,r.default)(this._terria.cesium)&&(0,r.default)(this._terria.cesium.viewer)&&(0,r.default)(this._terria.cesium.viewer.camera))){this._terria.cesium.viewer.camera.setView(this._getCurrentOrientation(t)),this._terria.currentViewer.notifyRepaintRequired()}},y.prototype._getCurrentOrientation=function(t){var e=this._alpha,i=this._beta,a=this._gamma,n=this._realignAlpha,o=this._realignHeading;return(0,r.default)(t)||(t=this._getCurrentScreenOrientation()),this._computeTerriaOrientation(e,i,a,t,n,o)},y.prototype._computeTerriaOrientation=function(t,e,i,a,n,r){var o=m.default.clone(m.default.IDENTITY,o),l=void 0;l=m.default.fromRotationZ(h.default.toRadians(a)),m.default.multiply(o,l,o),l=m.default.fromRotationX(h.default.toRadians(90)),m.default.multiply(o,l,o),l=m.default.fromRotationZ(h.default.toRadians(i)),m.default.multiply(o,l,o),l=m.default.fromRotationX(h.default.toRadians(-e)),m.default.multiply(o,l,o),l=m.default.fromRotationY(h.default.toRadians(-(t-n))),m.default.multiply(o,l,o),l=m.default.fromRotationY(h.default.toRadians(r)),m.default.multiply(o,l,o);var s=o[m.default.COLUMN1ROW0],u=o[m.default.COLUMN1ROW1],d=o[m.default.COLUMN0ROW2],_=o[m.default.COLUMN1ROW2],f=o[m.default.COLUMN2ROW2],c=h.default.toDegrees(Math.atan2(-d,f)),g=h.default.toDegrees(Math.atan2(-s,u)),p=h.default.toDegrees(Math.atan2(-_,Math.sqrt(d*d+f*f)));return{orientation:{roll:h.default.toRadians(g),pitch:h.default.toRadians(p),heading:h.default.toRadians(c)}}},y.prototype._getCurrentScreenOrientation=function(){return(0,r.default)(screen.orientation)&&(0,r.default)(screen.orientation.angle)?screen.orientation.angle:(0,r.default)(window.orientation)?window.orientation:0},t.exports=y},806:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=i(4),r=a(n),o=i(8),l=a(o),s=i(5),u=a(s),d=i(11),h=a(d),_=i(2276),m=a(_),f=i(30),c=a(f),g=i(134),p=a(g),v=i(0),b=a(v),y=i(2277),S=a(y),R=(0,l.default)({displayName:"AugmentedVirtualityTool",mixins:[h.default],propTypes:{terria:u.default.object.isRequired,viewState:u.default.object.isRequired,experimentalWarning:u.default.bool},getInitialState:function(){return{augmentedVirtuality:new S.default(this.props.terria),experimentalWarningShown:!1,realignHelpShown:!1,resetRealignHelpShown:!1}},handleClickAVTool:function(){this.props.terria.augmentedVirtuality=this.state.augmentedVirtuality,(0,b.default)(this.props.experimentalWarning)&&!1!==this.props.experimentalWarning&&!this.state.experimentalWarningShown&&(this.setState({experimentalWarningShown:!0}),this.props.viewState.notifications.push({title:"Experimental Feature: Augmented Reality",message:"Augmented Reality mode is currently in beta. This mode is only designed for use on the latest high end mobile devices. <br /><br />WARNING: This mode can consume a lot of data, please be mindful of data usage charges from your network provider. <br /><br />The accuracy of this mode depends on the accuracy of your mobile devices internal compass.",confirmText:"Got it"})),this.state.augmentedVirtuality.toggleEnabled()},handleClickRealign:function(){this.state.realignHelpShown||(this.setState({realignHelpShown:!0}),this.props.viewState.notifications.push({title:"Manual Alignment",message:'Align your mobile device so that it corresponds with the maps current alignment, then click the blinking compass. If no landmarks to align with are currently visible on the map, you can move the map using drag and pinch actions until a recognisable landmark is visible before aligning the device with the map.<br /><div><img width="100%" src="./build/TerriaJS/images/ar-realign-guide.gif" /></div><br />Tip: The sun or moon are often good landmarks to align with if you are in a location you aren\'t familiar with (be careful not to look at the sun - it can hurt your eyes).',confirmText:"Got it"})),this.state.augmentedVirtuality.toggleManualAlignment()},handleClickResetRealign:function(){this.state.resetRealignHelpShown||(this.setState({resetRealignHelpShown:!0}),this.props.viewState.notifications.push({title:"Reset Alignment",message:"Resetting to compass alignment. If the alignment doesn't match the real world try waving your device in a figure 8 motion to recalibrate device. This can be done at any time.<br /> <br />Avoid locations with magnetic fields or metal objects as these may disorient the devices compass.",confirmText:"Got it"})),this.state.augmentedVirtuality.resetAlignment()},handleClickHover:function(){this.state.augmentedVirtuality.toggleHoverHeight()},render:function(){var t=this.state.augmentedVirtuality.enabled,e=c.default.GLYPHS.arOff,i=m.default.btn;t&&(e=c.default.GLYPHS.arOn,i=m.default.btnPrimary);var a=this.state.augmentedVirtuality.manualAlignment,n=m.default.btn;a&&(n=m.default.btnBlink);var o=this.state.augmentedVirtuality.hoverLevel,l=c.default.GLYPHS.arHover0;switch(o){case 0:l=c.default.GLYPHS.arHover0;break;case 1:l=c.default.GLYPHS.arHover1;break;case 2:l=c.default.GLYPHS.arHover2}return this.props.terria.viewerMode!==p.default.Leaflet?r.default.createElement("div",{className:m.default.augmentedVirtualityTool},r.default.createElement("button",{type:"button",className:i,title:"augmented reality tool",onClick:this.handleClickAVTool},r.default.createElement(c.default,{glyph:e})),t?[r.default.createElement("button",{type:"button",className:m.default.btn,title:"toggle hover height",onClick:this.handleClickHover,key:"0"},r.default.createElement(c.default,{glyph:l})),this.state.augmentedVirtuality.manualAlignmentSet?null:r.default.createElement("button",{type:"button",className:n,title:"toggle manual alignment",onClick:this.handleClickRealign,key:"1"},r.default.createElement(c.default,{glyph:c.default.GLYPHS.arRealign})),this.state.augmentedVirtuality.manualAlignmentSet&&!a?r.default.createElement("button",{type:"button",className:m.default.btn,title:"reset compass alignment",onClick:this.handleClickResetRealign,key:"2"},r.default.createElement(c.default,{glyph:c.default.GLYPHS.arResetAlignment})):null]:null):null}});t.exports=R}});
//# sourceMappingURL=2.TerriaMap.js.map