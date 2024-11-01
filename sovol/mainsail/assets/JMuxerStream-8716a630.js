import{c as fe,g as he}from"./overlayscrollbars-44d87bcf.js";import{H as de,m as pe,B as ye,G as ve,P as X,W as me,C as ge,n as ke}from"./index-17a5ec1d.js";import{l as be,m as Se,q as we}from"./vuetify-4c65b4c3.js";import"./echarts-ff51454d.js";var ee={exports:{}};(function(d,g){(function(v,k){d.exports=k(de)})(fe,function(v){function k(t){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(t)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,i){return e&&C(t.prototype,e),i&&C(t,i),t}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function L(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(t)}function G(t,e){return G=Object.setPrototypeOf||function(i,r){return i.__proto__=r,i},G(t,e)}function O(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function te(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function R(t){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var i,r=M(t);if(e){var n=M(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return te(this,i)}}function re(t,e){return function(i){if(Array.isArray(i))return i}(t)||function(i,r){var n=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var s,o,u=[],a=!0,c=!1;try{for(n=n.call(i);!(a=(s=n.next()).done)&&(u.push(s.value),!r||u.length!==r);a=!0);}catch(f){c=!0,o=f}finally{try{a||n.return==null||n.return()}finally{if(c)throw o}}return u}}(t,e)||J(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(t,e){if(t){if(typeof t=="string")return W(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?W(t,e):void 0}}function W(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function U(t,e){var i=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=J(t))||e&&t&&typeof t.length=="number"){i&&(t=i);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(a){throw a},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,u=!1;return{s:function(){i=i.call(t)},n:function(){var a=i.next();return o=a.done,a},e:function(a){u=!0,s=a},f:function(){try{o||i.return==null||i.return()}finally{if(u)throw s}}}}var z,N;function b(t){if(z){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];z.apply(void 0,[t].concat(i))}}function A(t){if(N){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];N.apply(void 0,[t].concat(i))}}var B=function(){function t(e){h(this,t),this.payload=e,this.nri=(96&this.payload[0])>>5,this.ntype=31&this.payload[0],this.isvcl=this.ntype==1||this.ntype==5,this.stype="",this.isfmb=!1}return m(t,[{key:"toString",value:function(){return"".concat(t.type(this),": NRI: ").concat(this.getNri())}},{key:"getNri",value:function(){return this.nri}},{key:"type",value:function(){return this.ntype}},{key:"isKeyframe",value:function(){return this.ntype===t.IDR}},{key:"getPayload",value:function(){return this.payload}},{key:"getPayloadSize",value:function(){return this.payload.byteLength}},{key:"getSize",value:function(){return 4+this.getPayloadSize()}},{key:"getData",value:function(){var e=new Uint8Array(this.getSize());return new DataView(e.buffer).setUint32(0,this.getSize()-4),e.set(this.getPayload(),4),e}}],[{key:"NDR",get:function(){return 1}},{key:"IDR",get:function(){return 5}},{key:"SEI",get:function(){return 6}},{key:"SPS",get:function(){return 7}},{key:"PPS",get:function(){return 8}},{key:"AUD",get:function(){return 9}},{key:"TYPES",get:function(){var e;return P(e={},t.IDR,"IDR"),P(e,t.SEI,"SEI"),P(e,t.SPS,"SPS"),P(e,t.PPS,"PPS"),P(e,t.NDR,"NDR"),P(e,t.AUD,"AUD"),e}},{key:"type",value:function(e){return e.ntype in t.TYPES?t.TYPES[e.ntype]:"UNKNOWN"}}]),t}();function q(t,e){var i=new Uint8Array((0|t.byteLength)+(0|e.byteLength));return i.set(t,0),i.set(e,0|t.byteLength),i}var Z=function(){function t(e){h(this,t),this.data=e,this.index=0,this.bitLength=8*e.byteLength}return m(t,[{key:"setData",value:function(e){this.data=e,this.index=0,this.bitLength=8*e.byteLength}},{key:"bitsAvailable",get:function(){return this.bitLength-this.index}},{key:"skipBits",value:function(e){if(this.bitsAvailable<e)return!1;this.index+=e}},{key:"readBits",value:function(e){var i=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],r=this.getBits(e,this.index,i);return r}},{key:"getBits",value:function(e,i){var r=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(this.bitsAvailable<e)return 0;var n=i%8,s=this.data[i/8|0]&255>>>n,o=8-n;if(o>=e)return r&&(this.index+=e),s>>o-e;r&&(this.index+=o);var u=e-o;return s<<u|this.getBits(u,i+o,r)}},{key:"skipLZ",value:function(){var e;for(e=0;e<this.bitLength-this.index;++e)if(this.getBits(1,this.index+e,!1)!==0)return this.index+=e,e;return e}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return this.readBits(1)===1}},{key:"readUByte",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return this.readBits(8*e)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}}]),t}(),H=function(){function t(e){h(this,t),this.remuxer=e,this.track=e.mp4track}return m(t,[{key:"parseSPS",value:function(e){var i=t.readSPS(new Uint8Array(e));this.track.fps=i.fps,this.track.width=i.width,this.track.height=i.height,this.track.sps=[new Uint8Array(e)],this.track.codec="avc1.";for(var r=new DataView(e.buffer,e.byteOffset+1,4),n=0;n<3;++n){var s=r.getUint8(n).toString(16);s.length<2&&(s="0"+s),this.track.codec+=s}}},{key:"parsePPS",value:function(e){this.track.pps=[new Uint8Array(e)]}},{key:"parseNAL",value:function(e){if(!e)return!1;var i=!1;switch(e.type()){case B.IDR:case B.NDR:i=!0;break;case B.PPS:this.track.pps||(this.parsePPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),i=!0;break;case B.SPS:this.track.sps||(this.parseSPS(e.getPayload()),!this.remuxer.readyToDecode&&this.track.pps&&this.track.sps&&(this.remuxer.readyToDecode=!0)),i=!0;break;case B.AUD:b("AUD - ignoing");break;case B.SEI:b("SEI - ignoing")}return i}}],[{key:"extractNALu",value:function(e){for(var i,r,n=0,s=e.byteLength,o=0,u=[],a=0;n<s;)switch(i=e[n++],o){case 0:i===0&&(o=1);break;case 1:o=i===0?2:0;break;case 2:case 3:i===0?o=3:(i===1&&n<s&&(a!=n-o-1&&u.push(e.subarray(a,n-o-1)),a=n),o=0)}return a<s&&(r=e.subarray(a,s)),[u,r]}},{key:"skipScalingList",value:function(e,i){for(var r=8,n=8,s=0;s<i;s++)n!==0&&(n=(r+e.readEG()+256)%256),r=n===0?r:n}},{key:"readSPS",value:function(e){var i,r,n,s,o,u,a=new Z(e),c=0,f=0,l=0,p=0,w=1,S=0;a.readUByte();for(var E=[],x=e.byteLength,T=1;T<x;T++)T+2<x&&a.readBits(24,!1)===3?(E.push(a.readBits(8)),E.push(a.readBits(8)),T+=2,a.readBits(8)):E.push(a.readBits(8));if(a.setData(new Uint8Array(E)),i=a.readUByte(),a.readBits(5),a.skipBits(3),a.readUByte(),a.skipUEG(),i===100||i===110||i===122||i===244||i===44||i===83||i===86||i===118||i===128){var D=a.readUEG();if(D===3&&a.skipBits(1),a.skipUEG(),a.skipUEG(),a.skipBits(1),a.readBoolean()){u=D!==3?8:12;for(var Y=0;Y<u;++Y)a.readBoolean()&&(Y<6?t.skipScalingList(a,16):t.skipScalingList(a,64))}}a.skipUEG();var $=a.readUEG();if($===0)a.readUEG();else if($===1){a.skipBits(1),a.skipEG(),a.skipEG(),r=a.readUEG();for(var K=0;K<r;++K)a.skipEG()}if(a.skipUEG(),a.skipBits(1),n=a.readUEG(),s=a.readUEG(),(o=a.readBits(1))===0&&a.skipBits(1),a.skipBits(1),a.readBoolean()&&(c=a.readUEG(),f=a.readUEG(),l=a.readUEG(),p=a.readUEG()),a.readBoolean()){if(a.readBoolean()){var y;switch(a.readUByte()){case 1:y=[1,1];break;case 2:y=[12,11];break;case 3:y=[10,11];break;case 4:y=[16,11];break;case 5:y=[40,33];break;case 6:y=[24,11];break;case 7:y=[20,11];break;case 8:y=[32,11];break;case 9:y=[80,33];break;case 10:y=[18,11];break;case 11:y=[15,11];break;case 12:y=[64,33];break;case 13:y=[160,99];break;case 14:y=[4,3];break;case 15:y=[3,2];break;case 16:y=[2,1];break;case 255:y=[a.readUByte()<<8|a.readUByte(),a.readUByte()<<8|a.readUByte()]}y&&y[0]>0&&y[1]>0&&(w=y[0]/y[1])}if(a.readBoolean()&&a.skipBits(1),a.readBoolean()&&(a.skipBits(4),a.readBoolean()&&a.skipBits(24)),a.readBoolean()&&(a.skipUEG(),a.skipUEG()),a.readBoolean()){var ce=a.readUInt(),le=a.readUInt();a.readBoolean()&&(S=le/(2*ce))}}return{fps:S>0?S:void 0,width:Math.ceil((16*(n+1)-2*c-2*f)*w),height:(2-o)*(s+1)*16-(o?2:4)*(l+p)}}},{key:"parseHeader",value:function(e){var i=new Z(e.getPayload());i.readUByte(),e.isfmb=i.readUEG()===0,e.stype=i.readUEG()}}]),t}(),ne=function(){function t(e){h(this,t),this.remuxer=e,this.track=e.mp4track}return m(t,[{key:"extractAAC",value:function(e){var i,r,n=0,s=e.byteLength,o=[];if(!t.isAACPattern(e))return A("Invalid ADTS audio format"),o;for(i=t.getHeaderLength(e),this.aacHeader||(this.aacHeader=e.subarray(0,i));n<s;)r=t.getFrameLength(e),o.push(e.subarray(i,r)),e=e.slice(r),n+=r;return o}},{key:"setAACConfig",value:function(){var e,i,r,n=new Uint8Array(2),s=this.aacHeader;s&&(e=1+((192&s[2])>>>6),i=(60&s[2])>>>2,r=(1&s[2])<<2,r|=(192&s[3])>>>6,n[0]=e<<3,n[0]|=(14&i)>>1,n[1]|=(1&i)<<7,n[1]|=r<<3,this.track.codec="mp4a.40."+e,this.track.channelCount=r,this.track.config=n,this.remuxer.readyToDecode=!0)}}],[{key:"samplingRateMap",get:function(){return[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350]}},{key:"getHeaderLength",value:function(e){return 1&e[1]?7:9}},{key:"getFrameLength",value:function(e){return(3&e[3])<<11|e[4]<<3|(224&e[5])>>>5}},{key:"isAACPattern",value:function(e){return e[0]===255&&(240&e[1])==240&&(6&e[1])==0}}]),t}(),V=function(){function t(e){h(this,t),this.listener={},this.type=""|e}return m(t,[{key:"on",value:function(e,i){return this.listener[e]||(this.listener[e]=[]),this.listener[e].push(i),!0}},{key:"off",value:function(e,i){if(this.listener[e]){var r=this.listener[e].indexOf(i);return r>-1&&this.listener[e].splice(r,1),!0}return!1}},{key:"offAll",value:function(){this.listener={}}},{key:"dispatch",value:function(e,i){return!!this.listener[e]&&(this.listener[e].map(function(r){r.apply(null,[i])}),!0)}}]),t}(),I=function(){function t(){h(this,t)}return m(t,null,[{key:"init",value:function(){var e;for(e in t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var i=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:i,audio:r};var n=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),s=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=s,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),u=new Uint8Array([97,118,99,49]),a=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,o,a,o,u),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,n))}},{key:"box",value:function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];for(var s,o=8,u=r.length,a=u;u--;)o+=r[u].byteLength;for((s=new Uint8Array(o))[0]=o>>24&255,s[1]=o>>16&255,s[2]=o>>8&255,s[3]=255&o,s.set(e,4),u=0,o=8;u<a;++u)s.set(r[u],o),o+=r[u].byteLength;return s}},{key:"hdlr",value:function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])}},{key:"mdat",value:function(e){return t.box(t.types.mdat,e)}},{key:"mdhd",value:function(e,i){return t.box(t.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,85,196,0,0]))}},{key:"mdia",value:function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))}},{key:"mfhd",value:function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))}},{key:"minf",value:function(e){return e.type==="audio"?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))}},{key:"moof",value:function(e,i,r){return t.box(t.types.moof,t.mfhd(e),t.traf(r,i))}},{key:"moov",value:function(e,i,r){for(var n=e.length,s=[];n--;)s[n]=t.trak(e[n]);return t.box.apply(null,[t.types.moov,t.mvhd(r,i)].concat(s).concat(t.mvex(e)))}},{key:"mvex",value:function(e){for(var i=e.length,r=[];i--;)r[i]=t.trex(e[i]);return t.box.apply(null,[t.types.mvex].concat(r))}},{key:"mvhd",value:function(e,i){var r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24&255,i>>16&255,i>>8&255,255&i,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,r)}},{key:"sdtp",value:function(e){var i,r,n=e.samples||[],s=new Uint8Array(4+n.length);for(r=0;r<n.length;r++)i=n[r].flags,s[r+4]=i.dependsOn<<4|i.isDependedOn<<2|i.hasRedundancy;return t.box(t.types.sdtp,s)}},{key:"stbl",value:function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))}},{key:"avc1",value:function(e){var i,r,n,s=[],o=[];for(i=0;i<e.sps.length;i++)n=(r=e.sps[i]).byteLength,s.push(n>>>8&255),s.push(255&n),s=s.concat(Array.prototype.slice.call(r));for(i=0;i<e.pps.length;i++)n=(r=e.pps[i]).byteLength,o.push(n>>>8&255),o.push(255&n),o=o.concat(Array.prototype.slice.call(r));var u=t.box(t.types.avcC,new Uint8Array([1,s[3],s[4],s[5],255,224|e.sps.length].concat(s).concat([e.pps.length]).concat(o))),a=e.width,c=e.height;return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,a>>8&255,255&a,c>>8&255,255&c,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,98,105,110,101,108,112,114,111,46,114,117,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),u,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))}},{key:"esds",value:function(e){var i=e.config.byteLength,r=new Uint8Array(26+i+3);return r.set([0,0,0,0,3,23+i,0,1,0,4,15+i,64,21,0,0,0,0,0,0,0,0,0,0,0,5,i]),r.set(e.config,26),r.set([6,1,2],26+i),r}},{key:"mp4a",value:function(e){var i=e.audiosamplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,i>>8&255,255&i,0,0]),t.box(t.types.esds,t.esds(e)))}},{key:"stsd",value:function(e){return e.type==="audio"?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))}},{key:"tkhd",value:function(e){var i=e.id,r=e.duration,n=e.width,s=e.height,o=e.volume;return t.box(t.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,i>>24&255,i>>16&255,i>>8&255,255&i,0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,0,0,0,0,0,0,0,0,0,o>>0&255,o%1*10>>0&255,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,s>>8&255,255&s,0,0]))}},{key:"traf",value:function(e,i){var r=t.sdtp(e),n=e.id;return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),t.box(t.types.tfdt,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i])),t.trun(e,r.length+16+16+8+16+8+8),r)}},{key:"trak",value:function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))}},{key:"trex",value:function(e){var i=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,255&i,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(e,i){var r,n,s,o,u,a,c=e.samples||[],f=c.length,l=12+16*f,p=new Uint8Array(l);for(i+=8+l,p.set([0,0,15,1,f>>>24&255,f>>>16&255,f>>>8&255,255&f,i>>>24&255,i>>>16&255,i>>>8&255,255&i],0),r=0;r<f;r++)s=(n=c[r]).duration,o=n.size,u=n.flags,a=n.cts,p.set([s>>>24&255,s>>>16&255,s>>>8&255,255&s,o>>>24&255,o>>>16&255,o>>>8&255,255&o,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,61440&u.degradPrio,15&u.degradPrio,a>>>24&255,a>>>16&255,a>>>8&255,255&a],12+16*r);return t.box(t.types.trun,p)}},{key:"initSegment",value:function(e,i,r){t.types||t.init();var n,s=t.moov(e,i,r);return(n=new Uint8Array(t.FTYP.byteLength+s.byteLength)).set(t.FTYP),n.set(s,t.FTYP.byteLength),n}}]),t}(),ie=1,j=function(){function t(){h(this,t)}return m(t,[{key:"flush",value:function(){this.mp4track.len=0,this.mp4track.samples=[]}},{key:"isReady",value:function(){return!(!this.readyToDecode||!this.samples.length)||null}}],[{key:"getTrackID",value:function(){return ie++}}]),t}(),se=function(t){L(i,t);var e=R(i);function i(r){var n;return h(this,i),(n=e.call(this)).readyToDecode=!1,n.nextDts=0,n.dts=0,n.mp4track={id:j.getTrackID(),type:"audio",channelCount:0,len:0,fragmented:!0,timescale:r,duration:r,samples:[],config:"",codec:""},n.samples=[],n.aac=new ne(O(n)),n}return m(i,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.codec="",this.mp4track.channelCount="",this.mp4track.config="",this.mp4track.timescale=this.timescale,this.nextDts=0,this.dts=0}},{key:"remux",value:function(r){if(r.length>0)for(var n=0;n<r.length;n++){var s=r[n],o=s.units,u=o.byteLength;this.samples.push({units:o,size:u,duration:s.duration}),this.mp4track.len+=u,this.readyToDecode||this.aac.setAACConfig()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var r,n,s=new Uint8Array(this.mp4track.len),o=0,u=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var a=this.samples.shift();a.units,(n=a.duration)<=0?(b("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(n)),this.mp4track.len-=a.size):(this.nextDts+=n,r={size:a.size,duration:n,cts:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},s.set(a.units,o),o+=a.size,u.push(r))}return u.length?new Uint8Array(s.buffer,0,this.mp4track.len):null}},{key:"getAacParser",value:function(){return this.aac}}]),i}(j),ae=function(t){L(i,t);var e=R(i);function i(r){var n;return h(this,i),(n=e.call(this)).readyToDecode=!1,n.nextDts=0,n.dts=0,n.mp4track={id:j.getTrackID(),type:"video",len:0,fragmented:!0,sps:"",pps:"",fps:30,width:0,height:0,timescale:r,duration:r,samples:[]},n.samples=[],n.h264=new H(O(n)),n}return m(i,[{key:"resetTrack",value:function(){this.readyToDecode=!1,this.mp4track.sps="",this.mp4track.pps="",this.nextDts=0,this.dts=0}},{key:"remux",value:function(r){var n,s=U(r);try{for(s.s();!(n=s.n()).done;){var o,u=n.value,a=[],c=0,f=U(u.units);try{for(f.s();!(o=f.n()).done;){var l=o.value;this.h264.parseNAL(l)&&(a.push(l),c+=l.getSize())}}catch(p){f.e(p)}finally{f.f()}a.length>0&&this.readyToDecode&&(this.mp4track.len+=c,this.samples.push({units:a,size:c,keyFrame:u.keyFrame,duration:u.duration,compositionTimeOffset:u.compositionTimeOffset}))}}catch(p){s.e(p)}finally{s.f()}}},{key:"getPayload",value:function(){if(!this.isReady())return null;var r,n,s=new Uint8Array(this.mp4track.len),o=0,u=this.mp4track.samples;for(this.dts=this.nextDts;this.samples.length;){var a=this.samples.shift(),c=a.units;if((n=a.duration)<=0)b("remuxer: invalid sample duration at DTS: ".concat(this.nextDts," :").concat(n)),this.mp4track.len-=a.size;else{this.nextDts+=n,r={size:a.size,duration:n,cts:a.compositionTimeOffset||0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,isNonSync:a.keyFrame?0:1,dependsOn:a.keyFrame?2:1}};var f,l=U(c);try{for(l.s();!(f=l.n()).done;){var p=f.value;s.set(p.getData(),o),o+=p.getSize()}}catch(w){l.e(w)}finally{l.f()}u.push(r)}}return u.length?new Uint8Array(s.buffer,0,this.mp4track.len):null}}]),i}(j),oe=function(t){L(i,t);var e=R(i);function i(r){var n;return h(this,i),(n=e.call(this,"remuxer")).initialized=!1,n.trackTypes=[],n.tracks={},n.seq=1,n.env=r,n.timescale=1e3,n.mediaDuration=0,n.aacParser=null,n}return m(i,[{key:"addTrack",value:function(r){if(r!=="video"&&r!=="both"||(this.tracks.video=new ae(this.timescale),this.trackTypes.push("video")),r==="audio"||r==="both"){var n=new se(this.timescale);this.aacParser=n.getAacParser(),this.tracks.audio=n,this.trackTypes.push("audio")}}},{key:"reset",value:function(){var r,n=U(this.trackTypes);try{for(n.s();!(r=n.n()).done;){var s=r.value;this.tracks[s].resetTrack()}}catch(o){n.e(o)}finally{n.f()}this.initialized=!1}},{key:"destroy",value:function(){this.tracks={},this.offAll()}},{key:"flush",value:function(){if(this.initialized){var r,n=U(this.trackTypes);try{for(n.s();!(r=n.n()).done;){var s=r.value,o=this.tracks[s],u=o.getPayload();if(u&&u.byteLength){var a={type:s,payload:q(I.moof(this.seq,o.dts,o.mp4track),I.mdat(u)),dts:o.dts};s==="video"&&(a.fps=o.mp4track.fps),this.dispatch("buffer",a);var c=(f=o.dts/this.timescale,l=void 0,p=void 0,w=void 0,S=void 0,S="",l=Math.floor(f),(p=parseInt(l/3600,10)%24)>0&&(S+=(p<10?"0"+p:p)+":"),S+=((w=parseInt(l/60,10)%60)<10?"0"+w:w)+":"+((l=l<0?0:l%60)<10?"0"+l:l));b("put segment (".concat(s,"): dts: ").concat(o.dts," frames: ").concat(o.mp4track.samples.length," second: ").concat(c)),o.flush(),this.seq++}}}catch(E){n.e(E)}finally{n.f()}}else this.isReady()&&(this.dispatch("ready"),this.initSegment(),this.initialized=!0,this.flush());var f,l,p,w,S}},{key:"initSegment",value:function(){var r,n=[],s=U(this.trackTypes);try{for(s.s();!(r=s.n()).done;){var o=r.value,u=this.tracks[o];if(this.env=="browser"){var a={type:o,payload:I.initSegment([u.mp4track],this.mediaDuration,this.timescale)};this.dispatch("buffer",a)}else n.push(u.mp4track)}}catch(f){s.e(f)}finally{s.f()}if(this.env=="node"){var c={type:"all",payload:I.initSegment(n,this.mediaDuration,this.timescale)};this.dispatch("buffer",c)}b("Initial segment generated.")}},{key:"isReady",value:function(){var r,n=U(this.trackTypes);try{for(n.s();!(r=n.n()).done;){var s=r.value;if(!this.tracks[s].readyToDecode||!this.tracks[s].samples.length)return!1}}catch(o){n.e(o)}finally{n.f()}return!0}},{key:"remux",value:function(r){var n,s=U(this.trackTypes);try{for(s.s();!(n=s.n()).done;){var o=n.value,u=r[o];o==="audio"&&this.tracks.video&&!this.tracks.video.readyToDecode||u.length>0&&this.tracks[o].remux(u)}}catch(a){s.e(a)}finally{s.f()}this.flush()}}]),i}(V),ue=function(t){L(i,t);var e=R(i);function i(r,n){var s;return h(this,i),(s=e.call(this,"buffer")).type=n,s.queue=new Uint8Array,s.cleaning=!1,s.pendingCleaning=0,s.cleanOffset=30,s.cleanRanges=[],s.sourceBuffer=r,s.sourceBuffer.addEventListener("updateend",function(){s.pendingCleaning>0&&(s.initCleanup(s.pendingCleaning),s.pendingCleaning=0),s.cleaning=!1,s.cleanRanges.length&&s.doCleanup()}),s.sourceBuffer.addEventListener("error",function(){s.dispatch("error",{type:s.type,name:"buffer",error:"buffer error"})}),s}return m(i,[{key:"destroy",value:function(){this.queue=null,this.sourceBuffer=null,this.offAll()}},{key:"doCleanup",value:function(){if(this.cleanRanges.length){var r=this.cleanRanges.shift();b("".concat(this.type," remove range [").concat(r[0]," - ").concat(r[1],")")),this.cleaning=!0,this.sourceBuffer.remove(r[0],r[1])}else this.cleaning=!1}},{key:"initCleanup",value:function(r){try{if(this.sourceBuffer.updating)return void(this.pendingCleaning=r);if(this.sourceBuffer.buffered&&this.sourceBuffer.buffered.length&&!this.cleaning){for(var n=0;n<this.sourceBuffer.buffered.length;++n){var s=this.sourceBuffer.buffered.start(n),o=this.sourceBuffer.buffered.end(n);r-s>this.cleanOffset&&s<(o=r-this.cleanOffset)&&this.cleanRanges.push([s,o])}this.doCleanup()}}catch(u){A("Error occured while cleaning ".concat(this.type," buffer - ").concat(u.name,": ").concat(u.message))}}},{key:"doAppend",value:function(){if(this.queue.length&&this.sourceBuffer&&!this.sourceBuffer.updating)try{this.sourceBuffer.appendBuffer(this.queue),this.queue=new Uint8Array}catch(n){var r="unexpectedError";n.name==="QuotaExceededError"?(b("".concat(this.type," buffer quota full")),r="QuotaExceeded"):(A("Error occured while appending ".concat(this.type," buffer - ").concat(n.name,": ").concat(n.message)),r="InvalidStateError"),this.dispatch("error",{type:this.type,name:r,error:"buffer error"})}}},{key:"feed",value:function(r){this.queue=q(this.queue,r)}}]),i}(V);return function(t){L(i,t);var e=R(i);function i(r){var n;return h(this,i),(n=e.call(this,"jmuxer")).isReset=!1,n.options=Object.assign({},{node:"",mode:"both",flushingTime:500,maxDelay:500,clearBuffer:!0,fps:30,readFpsFromTrack:!1,debug:!1,onReady:function(){},onError:function(){},onMissingVideoFrames:function(){},onMissingAudioFrames:function(){}},r),n.env=(typeof process>"u"?"undefined":k(process))==="object"&&typeof window>"u"?"node":"browser",n.options.debug&&(z=console.log,N=console.error),n.options.fps||(n.options.fps=30),n.frameDuration=1e3/n.options.fps|0,n.remuxController=new oe(n.env),n.remuxController.addTrack(n.options.mode),n.initData(),n.remuxController.on("buffer",n.onBuffer.bind(O(n))),n.env=="browser"&&(n.remuxController.on("ready",n.createBuffer.bind(O(n))),n.initBrowser()),n}return m(i,[{key:"initData",value:function(){this.lastCleaningTime=Date.now(),this.kfPosition=[],this.kfCounter=0,this.pendingUnits={},this.remainingData=new Uint8Array,this.startInterval()}},{key:"initBrowser",value:function(){typeof this.options.node=="string"&&this.options.node==""&&A("no video element were found to render, provide a valid video element"),this.node=typeof this.options.node=="string"?document.getElementById(this.options.node):this.options.node,this.mseReady=!1,this.setupMSE()}},{key:"createStream",value:function(){var r=this.feed.bind(this),n=this.destroy.bind(this);return this.stream=new v.Duplex({writableObjectMode:!0,read:function(s){},write:function(s,o,u){r(s),u()},final:function(s){n(),s()}}),this.stream}},{key:"setupMSE",value:function(){if(window.MediaSource=window.MediaSource||window.WebKitMediaSource,!window.MediaSource)throw"Oops! Browser does not support media source extension.";this.isMSESupported=!!window.MediaSource,this.mediaSource=new MediaSource,this.url=URL.createObjectURL(this.mediaSource),this.node.src=this.url,this.mseEnded=!1,this.mediaSource.addEventListener("sourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("sourceclose",this.onMSEClose.bind(this)),this.mediaSource.addEventListener("webkitsourceopen",this.onMSEOpen.bind(this)),this.mediaSource.addEventListener("webkitsourceclose",this.onMSEClose.bind(this))}},{key:"endMSE",value:function(){if(!this.mseEnded)try{this.mseEnded=!0,this.mediaSource.endOfStream()}catch{A("mediasource is not available to end")}}},{key:"feed",value:function(r){var n,s,o,u=!1,a={video:[],audio:[]};if(r&&this.remuxController){if(o=r.duration?parseInt(r.duration):0,r.video){r.video=q(this.remainingData,r.video);var c=re(H.extractNALu(r.video),2);if(n=c[0],s=c[1],this.remainingData=s||new Uint8Array,!(n.length>0))return A("Failed to extract any NAL units from video data:",s),void(typeof this.options.onMissingVideoFrames=="function"&&this.options.onMissingVideoFrames.call(null,r));a.video=this.getVideoFrames(n,o,r.compositionTimeOffset),u=!0}if(r.audio){if(!((n=this.remuxController.aacParser.extractAAC(r.audio)).length>0))return A("Failed to extract audio data from:",r.audio),void(typeof this.options.onMissingAudioFrames=="function"&&this.options.onMissingAudioFrames.call(null,r));a.audio=this.getAudioFrames(n,o),u=!0}u?this.remuxController.remux(a):A("Input object must have video and/or audio property. Make sure it is a valid typed array")}}},{key:"getVideoFrames",value:function(r,n,s){var o,u=this,a=[],c=[],f=0,l=!1,p=!1;this.pendingUnits.units&&(a=this.pendingUnits.units,p=this.pendingUnits.vcl,l=this.pendingUnits.keyFrame,this.pendingUnits={});var w,S=U(r);try{for(S.s();!(w=S.n()).done;){var E=w.value,x=new B(E);x.type()!==B.IDR&&x.type()!==B.NDR||H.parseHeader(x),a.length&&p&&(x.isfmb||!x.isvcl)&&(c.push({units:a,keyFrame:l}),a=[],l=!1,p=!1),a.push(x),l=l||x.isKeyframe(),p=p||x.isvcl}}catch(D){S.e(D)}finally{S.f()}if(a.length)if(n)if(p)c.push({units:a,keyFrame:l});else{var T=c.length-1;T>=0&&(c[T].units=c[T].units.concat(a))}else this.pendingUnits={units:a,keyFrame:l,vcl:p};return o=n?n/c.length|0:this.frameDuration,f=n?n-o*c.length:0,c.map(function(D){D.duration=o,D.compositionTimeOffset=s,f>0&&(D.duration++,f--),u.kfCounter++,D.keyFrame&&u.options.clearBuffer&&u.kfPosition.push(u.kfCounter*o/1e3)}),b("jmuxer: No. of frames of the last chunk: ".concat(c.length)),c}},{key:"getAudioFrames",value:function(r,n){var s,o,u=[],a=0,c=U(r);try{for(c.s();!(o=c.n()).done;){var f=o.value;u.push({units:f})}}catch(l){c.e(l)}finally{c.f()}return s=n?n/u.length|0:this.frameDuration,a=n?n-s*u.length:0,u.map(function(l){l.duration=s,a>0&&(l.duration++,a--)}),u}},{key:"destroy",value:function(){if(this.stopInterval(),this.stream&&(this.remuxController.flush(),this.stream.push(null),this.stream=null),this.remuxController&&(this.remuxController.destroy(),this.remuxController=null),this.bufferControllers){for(var r in this.bufferControllers)this.bufferControllers[r].destroy();this.bufferControllers=null,this.endMSE()}this.node=!1,this.mseReady=!1,this.videoStarted=!1,this.mediaSource=null}},{key:"reset",value:function(){if(this.stopInterval(),this.isReset=!0,this.node.pause(),this.remuxController&&this.remuxController.reset(),this.bufferControllers){for(var r in this.bufferControllers)this.bufferControllers[r].destroy();this.bufferControllers=null,this.endMSE()}this.initData(),this.env=="browser"&&this.initBrowser(),b("JMuxer was reset")}},{key:"createBuffer",value:function(){if(this.mseReady&&this.remuxController&&this.remuxController.isReady()&&!this.bufferControllers)for(var r in this.bufferControllers={},this.remuxController.tracks){var n=this.remuxController.tracks[r];if(!i.isSupported("".concat(r,'/mp4; codecs="').concat(n.mp4track.codec,'"')))return A("Browser does not support codec"),!1;var s=this.mediaSource.addSourceBuffer("".concat(r,'/mp4; codecs="').concat(n.mp4track.codec,'"'));this.bufferControllers[r]=new ue(s,r),this.bufferControllers[r].on("error",this.onBufferError.bind(this))}}},{key:"startInterval",value:function(){var r=this;this.interval=setInterval(function(){r.options.flushingTime?r.applyAndClearBuffer():r.bufferControllers&&r.cancelDelay()},this.options.flushingTime||1e3)}},{key:"stopInterval",value:function(){this.interval&&clearInterval(this.interval)}},{key:"cancelDelay",value:function(){if(this.node.buffered&&this.node.buffered.length>0&&!this.node.seeking){var r=this.node.buffered.end(0);r-this.node.currentTime>this.options.maxDelay/1e3&&(console.log("delay"),this.node.currentTime=r-.001)}}},{key:"releaseBuffer",value:function(){for(var r in this.bufferControllers)this.bufferControllers[r].doAppend()}},{key:"applyAndClearBuffer",value:function(){this.bufferControllers&&(this.releaseBuffer(),this.clearBuffer())}},{key:"getSafeClearOffsetOfBuffer",value:function(r){for(var n,s=this.options.mode==="audio"&&r||0,o=0;o<this.kfPosition.length&&!(this.kfPosition[o]>=r);o++)n=this.kfPosition[o];return n&&(this.kfPosition=this.kfPosition.filter(function(u){return u<n&&(s=u),u>=n})),s}},{key:"clearBuffer",value:function(){if(this.options.clearBuffer&&Date.now()-this.lastCleaningTime>1e4){for(var r in this.bufferControllers){var n=this.getSafeClearOffsetOfBuffer(this.node.currentTime);this.bufferControllers[r].initCleanup(n)}this.lastCleaningTime=Date.now()}}},{key:"onBuffer",value:function(r){this.options.readFpsFromTrack&&r.fps!==void 0&&this.options.fps!=r.fps&&(this.options.fps=r.fps,this.frameDuration=Math.ceil(1e3/r.fps),b("JMuxer changed FPS to ".concat(r.fps," from track data"))),this.env=="browser"?this.bufferControllers&&this.bufferControllers[r.type]&&this.bufferControllers[r.type].feed(r.payload):this.stream&&this.stream.push(r.payload),this.options.flushingTime===0&&this.applyAndClearBuffer()}},{key:"onMSEOpen",value:function(){this.mseReady=!0,URL.revokeObjectURL(this.url),typeof this.options.onReady=="function"&&this.options.onReady.call(null,this.isReset)}},{key:"onMSEClose",value:function(){this.mseReady=!1,this.videoStarted=!1}},{key:"onBufferError",value:function(r){if(r.name=="QuotaExceeded")return b("JMuxer cleaning ".concat(r.type," buffer due to QuotaExceeded error")),void this.bufferControllers[r.type].initCleanup(this.node.currentTime);r.name=="InvalidStateError"?(b("JMuxer is reseting due to InvalidStateError"),this.reset()):this.endMSE(),typeof this.options.onError=="function"&&this.options.onError.call(null,r)}}],[{key:"isSupported",value:function(r){return window.MediaSource&&window.MediaSource.isTypeSupported(r)}}]),i}(V)})})(ee);var xe=ee.exports;const Ue=he(xe);var Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,F=(d,g,v,k)=>{for(var h=k>1?void 0:k?Ae(g,v):g,C=d.length-1,m;C>=0;C--)(m=d[C])&&(h=(k?m(g,v,h):m(h))||h);return k&&h&&Ce(g,v,h),h};let _=class extends pe(ye,ve){constructor(){super(...arguments),this.jmuxer=null,this.status="connecting"}get url(){var d;return this.convertUrl((d=this.camSettings)==null?void 0:d.stream_url,this.printerUrl)}get webcamStyle(){var d,g,v;return{transform:this.generateTransform((d=this.camSettings.flip_horizontal)!=null?d:!1,(g=this.camSettings.flip_vertical)!=null?g:!1,(v=this.camSettings.rotation)!=null?v:0)}}mounted(){this.play()}play(){var k;if(this.status="connecting",(k=this.jmuxer)==null||k.destroy(),!this.url.startsWith("ws://")&&!this.url.startsWith("wss://")){console.error("jmuxer error: only websocket streams supported (ws://.. or wss://..)"),this.status="error";return}const d=this.$refs.video,g=this.camSettings.target_fps||10;this.jmuxer=new Ue({node:d,mode:"video",flushingTime:0,fps:g,onReady:h=>{this.status="connected",console.log("jmuxer ready:",h)},onError:h=>{this.status="error",console.log("jmuxer error:",h)}});const v=new WebSocket(this.url);v.binaryType="arraybuffer",v.addEventListener("message",h=>{var C;(C=this.jmuxer)==null||C.feed({video:new Uint8Array(h.data)})}),v.addEventListener("error",h=>{this.status="error",console.log("jmuxer ws error:",h)})}beforeUnmount(){var d;(d=this.jmuxer)==null||d.destroy()}onCamSettingsChanged(){this.play()}};F([X({required:!0})],_.prototype,"camSettings",2);F([X({default:null})],_.prototype,"printerUrl",2);F([me("camSettings",{deep:!0})],_.prototype,"onCamSettingsChanged",1);_=F([ge],_);var Be=function(){var d=this,g=d.$createElement,v=d._self._c||g;return v("div",[v("video",{ref:"video",staticClass:"webcamImage",style:d.webcamStyle,attrs:{autoplay:""}}),d.status!=="connected"?v(be,[v(Se,{staticClass:"_webcam_jmuxer_output text-center d-flex flex-column justify-center align-center"},[d.status==="connecting"?v(we,{staticClass:"mb-3",attrs:{indeterminate:"",color:"primary"}}):d._e(),v("span",{staticClass:"mt-3"},[d._v(d._s(d.status))])],1)],1):d._e()],1)},De=[];const Q={};var Ee=ke(_,Be,De,!1,Te,"03ec43aa",null,null);function Te(d){for(let g in Q)this[g]=Q[g]}const Re=function(){return Ee.exports}();export{Re as default};
