(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="155",Gm=0,Qu=1,Vm=2,bd=1,Wm=2,Pi=3,ki=0,yn=1,hi=2,sr=0,Ls=1,eh=2,th=3,nh=4,Xm=5,Ss=100,qm=101,Ym=102,ih=103,rh=104,jm=200,Km=201,$m=202,Zm=203,Ad=204,wd=205,Jm=206,Qm=207,e_=208,t_=209,n_=210,i_=0,r_=1,s_=2,wc=3,a_=4,o_=5,l_=6,c_=7,Rd=0,u_=1,h_=2,ar=0,f_=1,d_=2,p_=3,m_=4,__=5,Cd=300,zs=301,Hs=302,Rc=303,Cc=304,gl=306,Gs=1e3,qn=1001,nl=1002,Vt=1003,Pc=1004,Wo=1005,vn=1006,Pd=1007,qr=1008,or=1009,g_=1010,x_=1011,fu=1012,Ld=1013,Ji=1014,Ui=1015,Ha=1016,Dd=1017,Id=1018,Nr=1020,v_=1021,Yn=1023,M_=1024,y_=1025,Or=1026,Vs=1027,S_=1028,Ud=1029,T_=1030,Nd=1031,Od=1033,Cl=33776,Pl=33777,Ll=33778,Dl=33779,sh=35840,ah=35841,oh=35842,lh=35843,E_=36196,ch=37492,uh=37496,hh=37808,fh=37809,dh=37810,ph=37811,mh=37812,_h=37813,gh=37814,xh=37815,vh=37816,Mh=37817,yh=37818,Sh=37819,Th=37820,Eh=37821,Il=36492,b_=36283,bh=36284,Ah=36285,wh=36286,Ga=2300,Ws=2301,Ul=2302,Rh=2400,Ch=2401,Ph=2402,A_=2500,w_=0,Fd=1,Lc=2,Bd=3e3,Fr=3001,R_=3200,C_=3201,kd=0,P_=1,Br="",ke="srgb",vi="srgb-linear",zd="display-p3",Nl=7680,L_=519,D_=512,I_=513,U_=514,N_=515,O_=516,F_=517,B_=518,k_=519,Dc=35044,Lh="300 es",Ic=1035,Ni=2e3,il=2001;class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const wa=Math.PI/180,Xs=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Qt(s,e,t){return Math.max(e,Math.min(t,s))}function du(s,e){return(s%e+e)%e}function z_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function H_(s,e,t){return s!==e?(t-s)/(e-s):0}function Ra(s,e,t){return(1-t)*s+t*e}function G_(s,e,t,n){return Ra(s,e,1-Math.exp(-t*n))}function V_(s,e=1){return e-Math.abs(du(s,e*2)-e)}function W_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function X_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function q_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Y_(s,e){return s+Math.random()*(e-s)}function j_(s){return s*(.5-Math.random())}function K_(s){s!==void 0&&(Dh=s);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $_(s){return s*wa}function Z_(s){return s*Xs}function Uc(s){return(s&s-1)===0&&s!==0}function Hd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function rl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function J_(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Q_={DEG2RAD:wa,RAD2DEG:Xs,generateUUID:ai,clamp:Qt,euclideanModulo:du,mapLinear:z_,inverseLerp:H_,lerp:Ra,damp:G_,pingpong:V_,smoothstep:W_,smootherstep:X_,randInt:q_,randFloat:Y_,randFloatSpread:j_,seededRandom:K_,degToRad:$_,radToDeg:Z_,isPowerOfTwo:Uc,ceilPowerOfTwo:Hd,floorPowerOfTwo:rl,setQuaternionFromProperEuler:J_,normalize:dt,denormalize:fi};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,t,n,i,r,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],v=i[7],S=i[2],w=i[5],E=i[8];return r[0]=a*_+o*y+l*S,r[3]=a*m+o*x+l*w,r[6]=a*p+o*v+l*E,r[1]=c*_+u*y+h*S,r[4]=c*m+u*x+h*w,r[7]=c*p+u*v+h*E,r[2]=f*_+d*y+g*S,r[5]=f*m+d*x+g*w,r[8]=f*p+d*v+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ol.makeScale(e,t)),this}rotate(e){return this.premultiply(Ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ol=new Ze;function Gd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Va(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}const Ih={};function Ca(s){s in Ih||(Ih[s]=!0,console.warn(s))}function Ds(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const eg=new Ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),tg=new Ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ng(s){return s.convertSRGBToLinear().applyMatrix3(tg)}function ig(s){return s.applyMatrix3(eg).convertLinearToSRGB()}const rg={[vi]:s=>s,[ke]:s=>s.convertSRGBToLinear(),[zd]:ng},sg={[vi]:s=>s,[ke]:s=>s.convertLinearToSRGB(),[zd]:ig},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return vi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=rg[e],i=sg[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let ts;class Vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=Va("canvas")),ts.width=e.width,ts.height=e.height;const n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ds(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ds(t[n]/255)*255):t[n]=Ds(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ag=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Bl(i[a].image)):r.push(Bl(i[a]))}else r=Bl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let og=0;class Kt extends ia{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=qn,i=qn,r=vn,a=qr,o=Yn,l=or,c=Kt.DEFAULT_ANISOTROPY,u=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=ai(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fr?ke:Br),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Fr:Bd}set encoding(e){Ca("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?ke:Br}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Cd;Kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,i=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,S=(p+1)/2,w=(u+f)/4,E=(h+_)/4,L=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=E/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=E/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lg extends ia{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ca("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fr?ke:Br),this.texture=new Kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends lg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cg extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-o;const p=l*f+c*d+u*g+h*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const S=Math.sqrt(x),w=Math.atan2(S,p*y);m=Math.sin(m*w)/S,o=Math.sin(o*w)/S}const v=o*y;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kl=new D,Uh=new pr;class Gi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Ei.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ei)}else i.boundingBox===null&&i.computeBoundingBox(),ns.copy(i.boundingBox),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),ro.subVectors(this.max,ua),is.subVectors(e.a,ua),rs.subVectors(e.b,ua),ss.subVectors(e.c,ua),Wi.subVectors(rs,is),Xi.subVectors(ss,rs),vr.subVectors(is,ss);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-vr.z,vr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,vr.z,0,-vr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-vr.y,vr.x,0];return!zl(t,is,rs,ss,ro)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,is,rs,ss,ro))?!1:(so.crossVectors(Wi,Xi),t=[so.x,so.y,so.z],zl(t,is,rs,ss,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new D,new D,new D,new D,new D,new D,new D,new D],Ei=new D,ns=new Gi,is=new D,rs=new D,ss=new D,Wi=new D,Xi=new D,vr=new D,ua=new D,ro=new D,so=new D,Mr=new D;function zl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mr.fromArray(s,r);const o=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ug=new Gi,ha=new D,Hl=new D;class yi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ug.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Hl)),this.expandByPoint(ha.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new D,Gl=new D,ao=new D,qi=new D,Vl=new D,oo=new D,Wl=new D;class xl{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gl.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Gl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ao),o=qi.dot(this.direction),l=-qi.dot(ao),c=qi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Gl).addScaledVector(ao,f),d}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,i,r){Vl.subVectors(t,e),oo.subVectors(n,e),Wl.crossVectors(Vl,oo);let a=this.direction.dot(Wl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(oo.crossVectors(qi,oo));if(l<0)return null;const c=o*this.direction.dot(Vl.cross(qi));if(c<0||l+c>a)return null;const u=-o*qi.dot(Wl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hg,e,fg)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Yi.crossVectors(n,Rn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Yi.crossVectors(n,Rn)),Yi.normalize(),lo.crossVectors(Rn,Yi),i[0]=Yi.x,i[4]=lo.x,i[8]=Rn.x,i[1]=Yi.y,i[5]=lo.y,i[9]=Rn.y,i[2]=Yi.z,i[6]=lo.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],S=n[15],w=i[0],E=i[4],L=i[8],M=i[12],b=i[1],j=i[5],G=i[9],U=i[13],O=i[2],k=i[6],Z=i[10],F=i[14],q=i[3],J=i[7],R=i[11],B=i[15];return r[0]=a*w+o*b+l*O+c*q,r[4]=a*E+o*j+l*k+c*J,r[8]=a*L+o*G+l*Z+c*R,r[12]=a*M+o*U+l*F+c*B,r[1]=u*w+h*b+f*O+d*q,r[5]=u*E+h*j+f*k+d*J,r[9]=u*L+h*G+f*Z+d*R,r[13]=u*M+h*U+f*F+d*B,r[2]=g*w+_*b+m*O+p*q,r[6]=g*E+_*j+m*k+p*J,r[10]=g*L+_*G+m*Z+p*R,r[14]=g*M+_*U+m*F+p*B,r[3]=y*w+x*b+v*O+S*q,r[7]=y*E+x*j+v*k+S*J,r[11]=y*L+x*G+v*Z+S*R,r[15]=y*M+x*U+v*F+S*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+m*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*f*c+_*l*d-o*m*d-h*l*p+o*f*p,x=g*f*c-u*m*c-g*l*d+a*m*d+u*l*p-a*f*p,v=u*_*c-g*h*c+g*o*d-a*_*d-u*o*p+a*h*p,S=g*h*l-u*_*l-g*o*f+a*_*f+u*o*m-a*h*m,w=t*y+n*x+i*v+r*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*E,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*E,e[4]=x*E,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*E,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*E,e[8]=v*E,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*E,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*E,e[12]=S*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*E,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=o*h,y=l*c,x=l*u,v=l*h,S=n.x,w=n.y,E=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+x)*E,i[9]=(m-y)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=as.set(i[0],i[1],i[2]).length();const a=as.set(i[4],i[5],i[6]).length(),o=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/r,u=1/a,h=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ni){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Ni)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===il)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ni){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let g,_;if(o===Ni)g=(a+r)*h,_=-2*h;else if(o===il)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new D,ei=new Je,hg=new D(0,0,0),fg=new D(1,1,1),Yi=new D,lo=new D,Rn=new D,Nh=new Je,Oh=new pr;class vl{constructor(e=0,t=0,n=0,i=vl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vl.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dg=0;const Fh=new D,os=new pr,Ai=new Je,co=new D,fa=new D,pg=new D,mg=new pr,Bh=new D(1,0,0),kh=new D(0,1,0),zh=new D(0,0,1),_g={type:"added"},Hh={type:"removed"};class Tt extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new vl,n=new pr,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ze}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Bh,e)}rotateY(e){return this.rotateOnAxis(kh,e)}rotateZ(e){return this.rotateOnAxis(zh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bh,e)}translateY(e){return this.translateOnAxis(kh,e)}translateZ(e){return this.translateOnAxis(zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(fa,co,this.up):Ai.lookAt(co,fa,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Ai),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_g)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Hh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,pg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new D,wi=new D,Xl=new D,Ri=new D,ls=new D,cs=new D,Gh=new D,ql=new D,Yl=new D,jl=new D;let uo=!1;class ri{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ti.subVectors(i,t),wi.subVectors(n,t),Xl.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(wi),l=ti.dot(Xl),c=wi.dot(wi),u=wi.dot(Xl),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri),Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,n,i,r,a,o,l){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(e,t,n,i,r,a,o,l)}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ri),l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),wi.subVectors(e,t),ti.cross(wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),ti.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ls.subVectors(i,n),cs.subVectors(r,n),ql.subVectors(e,n);const l=ls.dot(ql),c=cs.dot(ql);if(l<=0&&c<=0)return t.copy(n);Yl.subVectors(e,i);const u=ls.dot(Yl),h=cs.dot(Yl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ls,a);jl.subVectors(e,r);const d=ls.dot(jl),g=cs.dot(jl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(cs,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Gh.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Gh,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gg=0;class mi extends ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Ls,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=wd,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Kl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qn.workingColorSpace){if(e=du(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kl(a,r,e+1/3),this.g=Kl(a,r,e),this.b=Kl(a,r,e-1/3)}return Qn.toWorkingColorSpace(this,i),this}setStyle(e,t=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Fl(e.r),this.g=Fl(e.g),this.b=Fl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return Qn.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Qt(Zt.r*255,0,255))*65536+Math.round(Qt(Zt.g*255,0,255))*256+Math.round(Qt(Zt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qn.workingColorSpace){Qn.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,r=Zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ke){Qn.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),ni.h+=e,ni.s+=t,ni.l+=n,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(ho);const n=Ra(ni.h,ho.h,t),i=Ra(ni.s,ho.s,t),r=Ra(ni.l,ho.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new qe;qe.NAMES=Yd;class Qi extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new D,fo=new ot;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dc,this.updateRange={offset:0,count:-1},this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class jd extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sn extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xg=0;const zn=new Je,$l=new Tt,us=new D,Cn=new Gi,da=new Gi,zt=new D;class Bn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Kd:jd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Cn.min,da.min),Cn.expandByPoint(zt),zt.addVectors(Cn.max,da.max),Cn.expandByPoint(zt)):(Cn.expandByPoint(da.min),Cn.expandByPoint(da.max))}Cn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(e,c),zt.add(us)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new D,u[b]=new D;const h=new D,f=new D,d=new D,g=new ot,_=new ot,m=new ot,p=new D,y=new D;function x(b,j,G){h.fromArray(i,b*3),f.fromArray(i,j*3),d.fromArray(i,G*3),g.fromArray(a,b*2),_.fromArray(a,j*2),m.fromArray(a,G*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const U=1/(_.x*m.y-m.x*_.y);isFinite(U)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(U),y.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(U),c[b].add(p),c[j].add(p),c[G].add(p),u[b].add(y),u[j].add(y),u[G].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let b=0,j=v.length;b<j;++b){const G=v[b],U=G.start,O=G.count;for(let k=U,Z=U+O;k<Z;k+=3)x(n[k+0],n[k+1],n[k+2])}const S=new D,w=new D,E=new D,L=new D;function M(b){E.fromArray(r,b*3),L.copy(E);const j=c[b];S.copy(j),S.sub(E.multiplyScalar(E.dot(j))).normalize(),w.crossVectors(L,j);const U=w.dot(u[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=U}for(let b=0,j=v.length;b<j;++b){const G=v[b],U=G.start,O=G.count;for(let k=U,Z=U+O;k<Z;k+=3)M(n[k+0]),M(n[k+1]),M(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new gn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new Je,yr=new xl,po=new yi,Wh=new D,hs=new D,fs=new D,ds=new D,Zl=new D,mo=new D,_o=new ot,go=new ot,xo=new ot,Xh=new D,qh=new D,Yh=new D,vo=new D,Mo=new D;class On extends Tt{constructor(e=new Bn,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Zl.fromBufferAttribute(h,e),a?mo.addScaledVector(Zl,u):mo.addScaledVector(Zl.sub(t),u))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(po.containsPoint(yr.origin)===!1&&(yr.intersectSphere(po,Wh)===null||yr.origin.distanceToSquared(Wh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),yr.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=x;v<S;v+=3){const w=o.getX(v),E=o.getX(v+1),L=o.getX(v+2);i=yo(this,p,e,n,c,u,h,w,E,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=yo(this,a,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=x;v<S;v+=3){const w=v,E=v+1,L=v+2;i=yo(this,p,e,n,c,u,h,w,E,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;i=yo(this,a,e,n,c,u,h,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function vg(s,e,t,n,i,r,a,o){let l;if(e.side===yn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ki,o),l===null)return null;Mo.copy(o),Mo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:s}}function yo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,hs),s.getVertexPosition(l,fs),s.getVertexPosition(c,ds);const u=vg(s,e,t,n,hs,fs,ds,vo);if(u){i&&(_o.fromBufferAttribute(i,o),go.fromBufferAttribute(i,l),xo.fromBufferAttribute(i,c),u.uv=ri.getInterpolation(vo,hs,fs,ds,_o,go,xo,new ot)),r&&(_o.fromBufferAttribute(r,o),go.fromBufferAttribute(r,l),xo.fromBufferAttribute(r,c),u.uv1=ri.getInterpolation(vo,hs,fs,ds,_o,go,xo,new ot),u.uv2=u.uv1),a&&(Xh.fromBufferAttribute(a,o),qh.fromBufferAttribute(a,l),Yh.fromBufferAttribute(a,c),u.normal=ri.getInterpolation(vo,hs,fs,ds,Xh,qh,Yh,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new D,materialIndex:0};ri.getNormal(hs,fs,ds,h.normal),u.face=h}return u}class Qa extends Bn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(h,2));function g(_,m,p,y,x,v,S,w,E,L,M){const b=v/E,j=S/L,G=v/2,U=S/2,O=w/2,k=E+1,Z=L+1;let F=0,q=0;const J=new D;for(let R=0;R<Z;R++){const B=R*j-U;for(let K=0;K<k;K++){const oe=K*b-G;J[_]=oe*y,J[m]=B*x,J[p]=O,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(K/E),h.push(1-R/L),F+=1}}for(let R=0;R<L;R++)for(let B=0;B<E;B++){const K=f+B+k*R,oe=f+B+k*(R+1),ne=f+(B+1)+k*(R+1),se=f+(B+1)+k*R;l.push(K,oe,se),l.push(oe,ne,se),q+=6}o.addGroup(d,q,M),d+=q,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function un(s){const e={};for(let t=0;t<s.length;t++){const n=qs(s[t]);for(const i in n)e[i]=n[i]}return e}function Mg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $d(s){return s.getRenderTarget()===null?s.outputColorSpace:vi}const yg={clone:qs,merge:un};var Sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sg,this.fragmentShader=Tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Mg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zd extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends Zd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class Eg extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new pn(ps,ms,e,t);i.layers=this.layers,this.add(i);const r=new pn(ps,ms,e,t);r.layers=this.layers,this.add(r);const a=new pn(ps,ms,e,t);a.layers=this.layers,this.add(a);const o=new pn(ps,ms,e,t);o.layers=this.layers,this.add(o);const l=new pn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new pn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Jd extends Kt{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zs,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bg extends Yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ca("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Fr?ke:Br),this.texture=new Jd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qa(5,5,5),r=new jr({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:sr});r.uniforms.tEquirect.value=t;const a=new On(i,r),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=vn),new Eg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Jl=new D,Ag=new D,wg=new Ze;class Ar{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jl.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wg.getNormalMatrix(e),i=this.coplanarPoint(Jl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new yi,So=new D;class pu{constructor(e=new Ar,t=new Ar,n=new Ar,i=new Ar,r=new Ar,a=new Ar){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ni){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,m-d,v-p).normalize(),n[1].setComponents(l+r,f+c,m+d,v+p).normalize(),n[2].setComponents(l+a,f+u,m+g,v+y).normalize(),n[3].setComponents(l-a,f-u,m-g,v-y).normalize(),n[4].setComponents(l-o,f-h,m-_,v-x).normalize(),t===Ni)n[5].setComponents(l+o,f+h,m+_,v+x).normalize();else if(t===il)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(So.x=i.normal.x>0?e.max.x:e.min.x,So.y=i.normal.y>0?e.max.y:e.min.y,So.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Rg(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=s.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=s.SHORT;else if(h instanceof Uint32Array)g=s.UNSIGNED_INT;else if(h instanceof Int32Array)g=s.INT;else if(h instanceof Int8Array)g=s.BYTE;else if(h instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;s.bindBuffer(h,c),d.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class mu extends Bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*f-a;for(let x=0;x<c;x++){const v=x*h-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),w=y+1+c*p;d.push(x,v,w),d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$g=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,A0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,P0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,U0=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,N0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,G0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,W0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,px=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ax=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ix=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ux=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Cg,alphahash_pars_fragment:Pg,alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ig,alphatest_pars_fragment:Ug,aomap_fragment:Ng,aomap_pars_fragment:Og,begin_vertex:Fg,beginnormal_vertex:Bg,bsdfs:kg,iridescence_fragment:zg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Vg,clipping_planes_pars_vertex:Wg,clipping_planes_vertex:Xg,color_fragment:qg,color_pars_fragment:Yg,color_pars_vertex:jg,color_vertex:Kg,common:$g,cube_uv_reflection_fragment:Zg,defaultnormal_vertex:Jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:e0,emissivemap_fragment:t0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:r0,envmap_fragment:s0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:M0,envmap_vertex:c0,fog_vertex:u0,fog_pars_vertex:h0,fog_fragment:f0,fog_pars_fragment:d0,gradientmap_pars_fragment:p0,lightmap_fragment:m0,lightmap_pars_fragment:_0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:x0,lights_pars_begin:v0,lights_toon_fragment:y0,lights_toon_pars_fragment:S0,lights_phong_fragment:T0,lights_phong_pars_fragment:E0,lights_physical_fragment:b0,lights_physical_pars_fragment:A0,lights_fragment_begin:w0,lights_fragment_maps:R0,lights_fragment_end:C0,logdepthbuf_fragment:P0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:D0,logdepthbuf_vertex:I0,map_fragment:U0,map_pars_fragment:N0,map_particle_fragment:O0,map_particle_pars_fragment:F0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:k0,morphcolor_vertex:z0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:V0,normal_fragment_begin:W0,normal_fragment_maps:X0,normal_pars_fragment:q0,normal_pars_vertex:Y0,normal_vertex:j0,normalmap_pars_fragment:K0,clearcoat_normal_fragment_begin:$0,clearcoat_normal_fragment_maps:Z0,clearcoat_pars_fragment:J0,iridescence_pars_fragment:Q0,opaque_fragment:ex,packing:tx,premultiplied_alpha_fragment:nx,project_vertex:ix,dithering_fragment:rx,dithering_pars_fragment:sx,roughnessmap_fragment:ax,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:cx,shadowmap_vertex:ux,shadowmask_pars_fragment:hx,skinbase_vertex:fx,skinning_pars_vertex:dx,skinning_vertex:px,skinnormal_vertex:mx,specularmap_fragment:_x,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:vx,transmission_fragment:Mx,transmission_pars_fragment:yx,uv_pars_fragment:Sx,uv_pars_vertex:Tx,uv_vertex:Ex,worldpos_vertex:bx,background_vert:Ax,background_frag:wx,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Px,cube_frag:Lx,depth_vert:Dx,depth_frag:Ix,distanceRGBA_vert:Ux,distanceRGBA_frag:Nx,equirect_vert:Ox,equirect_frag:Fx,linedashed_vert:Bx,linedashed_frag:kx,meshbasic_vert:zx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Vx,meshmatcap_vert:Wx,meshmatcap_frag:Xx,meshnormal_vert:qx,meshnormal_frag:Yx,meshphong_vert:jx,meshphong_frag:Kx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:Qx,points_vert:ev,points_frag:tv,shadow_vert:nv,shadow_frag:iv,sprite_vert:rv,sprite_frag:sv},ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ci={basic:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:un([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:un([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:un([ue.points,ue.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:un([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:un([ue.common,ue.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:un([ue.sprite,ue.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:un([ue.common,ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:un([ue.lights,ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ci.physical={uniforms:un([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const To={r:0,b:0,g:0};function av(s,e,t,n,i,r,a){const o=new qe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0),s.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gl)?(u===void 0&&(u=new On(new Qa(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:qs(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==ke,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new On(new mu(2,2),new jr({name:"BackgroundMaterial",uniforms:qs(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(To,$d(s)),n.buffers.color.setClear(To.r,To.g,To.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function ov(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(O,k,Z,F,q){let J=!1;if(a){const R=_(F,Z,k);c!==R&&(c=R,d(c.object)),J=p(O,F,Z,q),J&&y(O,F,Z,q)}else{const R=k.wireframe===!0;(c.geometry!==F.id||c.program!==Z.id||c.wireframe!==R)&&(c.geometry=F.id,c.program=Z.id,c.wireframe=R,J=!0)}q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,L(O,k,Z,F),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,k,Z){const F=Z.wireframe===!0;let q=o[O.id];q===void 0&&(q={},o[O.id]=q);let J=q[k.id];J===void 0&&(J={},q[k.id]=J);let R=J[F];return R===void 0&&(R=m(f()),J[F]=R),R}function m(O){const k=[],Z=[],F=[];for(let q=0;q<i;q++)k[q]=0,Z[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:F,object:O,attributes:{},index:null}}function p(O,k,Z,F){const q=c.attributes,J=k.attributes;let R=0;const B=Z.getAttributes();for(const K in B)if(B[K].location>=0){const ne=q[K];let se=J[K];if(se===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;R++}return c.attributesNum!==R||c.index!==F}function y(O,k,Z,F){const q={},J=k.attributes;let R=0;const B=Z.getAttributes();for(const K in B)if(B[K].location>=0){let ne=J[K];ne===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),q[K]=se,R++}c.attributes=q,c.attributesNum=R,c.index=F}function x(){const O=c.newAttributes;for(let k=0,Z=O.length;k<Z;k++)O[k]=0}function v(O){S(O,0)}function S(O,k){const Z=c.newAttributes,F=c.enabledAttributes,q=c.attributeDivisors;Z[O]=1,F[O]===0&&(s.enableVertexAttribArray(O),F[O]=1),q[O]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),q[O]=k)}function w(){const O=c.newAttributes,k=c.enabledAttributes;for(let Z=0,F=k.length;Z<F;Z++)k[Z]!==O[Z]&&(s.disableVertexAttribArray(Z),k[Z]=0)}function E(O,k,Z,F,q,J,R){R===!0?s.vertexAttribIPointer(O,k,Z,q,J):s.vertexAttribPointer(O,k,Z,F,q,J)}function L(O,k,Z,F){if(n.isWebGL2===!1&&(O.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=F.attributes,J=Z.getAttributes(),R=k.defaultAttributeValues;for(const B in J){const K=J[B];if(K.location>=0){let oe=q[B];if(oe===void 0&&(B==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),B==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const ne=oe.normalized,se=oe.itemSize,xe=t.get(oe);if(xe===void 0)continue;const Me=xe.buffer,ye=xe.type,Fe=xe.bytesPerElement,Et=n.isWebGL2===!0&&(ye===s.INT||ye===s.UNSIGNED_INT||oe.gpuType===Ld);if(oe.isInterleavedBufferAttribute){const Pe=oe.data,z=Pe.stride,Ie=oe.offset;if(Pe.isInstancedInterleavedBuffer){for(let fe=0;fe<K.locationSize;fe++)S(K.location+fe,Pe.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let fe=0;fe<K.locationSize;fe++)v(K.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let fe=0;fe<K.locationSize;fe++)E(K.location+fe,se/K.locationSize,ye,ne,z*Fe,(Ie+se/K.locationSize*fe)*Fe,Et)}else{if(oe.isInstancedBufferAttribute){for(let Pe=0;Pe<K.locationSize;Pe++)S(K.location+Pe,oe.meshPerAttribute);O.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<K.locationSize;Pe++)v(K.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Pe=0;Pe<K.locationSize;Pe++)E(K.location+Pe,se/K.locationSize,ye,ne,se*Fe,se/K.locationSize*Pe*Fe,Et)}}else if(R!==void 0){const ne=R[B];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(K.location,ne);break;case 3:s.vertexAttrib3fv(K.location,ne);break;case 4:s.vertexAttrib4fv(K.location,ne);break;default:s.vertexAttrib1fv(K.location,ne)}}}}w()}function M(){G();for(const O in o){const k=o[O];for(const Z in k){const F=k[Z];for(const q in F)g(F[q].object),delete F[q];delete k[Z]}delete o[O]}}function b(O){if(o[O.id]===void 0)return;const k=o[O.id];for(const Z in k){const F=k[Z];for(const q in F)g(F[q].object),delete F[q];delete k[Z]}delete o[O.id]}function j(O){for(const k in o){const Z=o[k];if(Z[O.id]===void 0)continue;const F=Z[O.id];for(const q in F)g(F[q].object),delete F[q];delete Z[O.id]}}function G(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:j,initAttributes:x,enableAttribute:v,disableUnusedAttributes:w}}function lv(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=s,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function cv(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=a||e.has("OES_texture_float"),S=x&&v,w=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:w}}function uv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Ar,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;l.value=v,v=u(g,f,x,d);for(let S=0;S!==x;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function hv(s){let e=new WeakMap;function t(a,o){return o===Rc?a.mapping=zs:o===Cc&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Rc||o===Cc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bg(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class _u extends Zd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,jh=[.125,.215,.35,.446,.526,.582],Lr=20,Ql=new _u,Kh=new qe;let ec=null;const wr=(1+Math.sqrt(5))/2,_s=1/wr,$h=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,wr,_s),new D(0,wr,-_s),new D(_s,0,wr),new D(-_s,0,wr),new D(wr,_s,0),new D(-wr,_s,0)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec),e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ha,format:Yn,colorSpace:vi,depthBuffer:!1},i=Jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(r)),this._blurMaterial=dv(r,e,t)}return i}_compileMaterial(e){const t=new On(this._lodPlanes[0],e);this._renderer.compile(t,Ql)}_sceneToCubeUV(e,t,n,i){const o=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kh),u.toneMapping=ar,u.autoClear=!1;const d=new Qi({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new On(new Qa,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Kh),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Eo(i,y*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===zs||e.mapping===Hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new On(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$h[(i-1)%$h.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new On(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Lr-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Lr;m>Lr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const p=[];let y=0;for(let E=0;E<Lr;++E){const L=E/_,M=Math.exp(-L*L/2);p.push(M),E===0?y+=M:E<m&&(y+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],S=3*v*(i>x-As?i-x+As:0),w=4*(this._cubeSize-v);Eo(t,S,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Ql)}}function fv(s){const e=[],t=[],n=[];let i=s;const r=s-As+1+jh.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-As?l=jh[a-s+As-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];y.set(M,_*g*w),x.set(f,m*g*w);const b=[w,w,w,w,w,w];v.set(b,p*g*w)}const S=new Bn;S.setAttribute("position",new gn(y,_)),S.setAttribute("uv",new gn(x,m)),S.setAttribute("faceIndex",new gn(v,p)),e.push(S),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jh(s,e,t){const n=new Yr(s,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function dv(s,e,t){const n=new Float32Array(Lr),i=new D(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Qh(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function ef(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function gu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rc||l===Cc,u=l===zs||l===Hs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Zh(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Zh(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function mv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _v(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const S=y[x+0],w=y[x+1],E=y[x+2];f.push(S,w,w,E,E,S)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const S=x+0,w=x+1,E=x+2;f.push(S,w,w,E,E,S)}}else return;const m=new(Gd(f)?Kd:jd)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function gv(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){s.drawElements(r,d,o,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,d,o,f*l,g),t.update(d,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function xv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vv(s,e){return s[0]-e[0]}function Mv(s,e){return Math.abs(e[1])-Math.abs(s[1])}function yv(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let k=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var d=k;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),v===!0&&(M=2),S===!0&&(M=3);let b=u.attributes.position.count*M,j=1;b>e.maxTextureSize&&(j=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*j*4*_),U=new Xd(G,b,j,_);U.type=Ui,U.needsUpdate=!0;const O=M*4;for(let Z=0;Z<_;Z++){const F=w[Z],q=E[Z],J=L[Z],R=b*j*4*Z;for(let B=0;B<F.count;B++){const K=B*O;x===!0&&(a.fromBufferAttribute(F,B),G[R+K+0]=a.x,G[R+K+1]=a.y,G[R+K+2]=a.z,G[R+K+3]=0),v===!0&&(a.fromBufferAttribute(q,B),G[R+K+4]=a.x,G[R+K+5]=a.y,G[R+K+6]=a.z,G[R+K+7]=0),S===!0&&(a.fromBufferAttribute(J,B),G[R+K+8]=a.x,G[R+K+9]=a.y,G[R+K+10]=a.z,G[R+K+11]=J.itemSize===4?a.w:1)}}m={count:_,texture:U,size:new ot(b,j)},r.set(u,m),u.addEventListener("dispose",k)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[u.id]=_}for(let v=0;v<g;v++){const S=_[v];S[0]=v,S[1]=f[v]}_.sort(Mv);for(let v=0;v<8;v++)v<g&&_[v][1]?(o[v][0]=_[v][0],o[v][1]=_[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(vv);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const S=o[v],w=S[0],E=S[1];w!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+v)!==m[w]&&u.setAttribute("morphTarget"+v,m[w]),p&&u.getAttribute("morphNormal"+v)!==p[w]&&u.setAttribute("morphNormal"+v,p[w]),i[v]=E,y+=E):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(s,"morphTargetBaseInfluence",x),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Sv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ep=new Kt,tp=new Xd,np=new cg,ip=new Jd,tf=[],nf=[],rf=new Float32Array(16),sf=new Float32Array(9),af=new Float32Array(4);function ra(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tf[i];if(r===void 0&&(r=new Float32Array(i),tf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ml(s,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ev(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function bv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function Av(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function wv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;af.set(n),s.uniformMatrix2fv(this.addr,!1,af),kt(t,n)}}function Rv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;sf.set(n),s.uniformMatrix3fv(this.addr,!1,sf),kt(t,n)}}function Cv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;rf.set(n),s.uniformMatrix4fv(this.addr,!1,rf),kt(t,n)}}function Pv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function Dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function Iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function Uv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function Ov(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function Fv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function Bv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ep,i)}function kv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||np,i)}function zv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ip,i)}function Hv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tp,i)}function Gv(s){switch(s){case 5126:return Tv;case 35664:return Ev;case 35665:return bv;case 35666:return Av;case 35674:return wv;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Iv;case 5125:return Uv;case 36294:return Nv;case 36295:return Ov;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Vv(s,e){s.uniform1fv(this.addr,e)}function Wv(s,e){const t=ra(e,this.size,2);s.uniform2fv(this.addr,t)}function Xv(s,e){const t=ra(e,this.size,3);s.uniform3fv(this.addr,t)}function qv(s,e){const t=ra(e,this.size,4);s.uniform4fv(this.addr,t)}function Yv(s,e){const t=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jv(s,e){const t=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Kv(s,e){const t=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $v(s,e){s.uniform1iv(this.addr,e)}function Zv(s,e){s.uniform2iv(this.addr,e)}function Jv(s,e){s.uniform3iv(this.addr,e)}function Qv(s,e){s.uniform4iv(this.addr,e)}function eM(s,e){s.uniform1uiv(this.addr,e)}function tM(s,e){s.uniform2uiv(this.addr,e)}function nM(s,e){s.uniform3uiv(this.addr,e)}function iM(s,e){s.uniform4uiv(this.addr,e)}function rM(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ep,r[a])}function sM(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||np,r[a])}function aM(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ip,r[a])}function oM(s,e,t){const n=this.cache,i=e.length,r=Ml(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||tp,r[a])}function lM(s){switch(s){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return jv;case 35676:return Kv;case 5124:case 35670:return $v;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return oM}}class cM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gv(t.type)}}class uM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=lM(t.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function of(s,e){s.seq.push(e),s.map[e.id]=e}function fM(s,e,t){const n=s.name,i=n.length;for(tc.lastIndex=0;;){const r=tc.exec(n),a=tc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){of(t,c===void 0?new cM(o,s,e):new uM(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new hM(o),of(t,h)),t=h}}}class Xo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);fM(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function lf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let dM=0;function pM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function mM(s){switch(s){case vi:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function cf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+pM(s.getShaderSource(e),a)}else return i}function _M(s,e){const t=mM(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gM(s,e){let t;switch(e){case f_:t="Linear";break;case d_:t="Reinhard";break;case p_:t="OptimizedCineon";break;case m_:t="ACESFilmic";break;case __:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ya).join(`
`)}function vM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function MM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ya(s){return s!==""}function uf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(yM,TM)}const SM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function TM(s,e){let t=Xe[e];if(t===void 0){const n=SM.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nc(t)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(s){return s.replace(EM,bM)}function bM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function df(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case zs:case Hs:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function CM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case u_:e="ENVMAP_BLENDING_MIX";break;case h_:e="ENVMAP_BLENDING_ADD";break}return e}function PM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function LM(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=AM(t),c=wM(t),u=RM(t),h=CM(t),f=PM(t),d=t.isWebGL2?"":xM(t),g=vM(r),_=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[d,df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ar?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,_M("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Nc(a),a=uf(a,t),a=hf(a,t),o=Nc(o),o=uf(o,t),o=hf(o,t),a=ff(a),o=ff(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,v=y+p+o,S=lf(i,i.VERTEX_SHADER,x),w=lf(i,i.FRAGMENT_SHADER,v);if(i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(S).trim(),j=i.getShaderInfoLog(w).trim();let G=!0,U=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,S,w);else{const O=cf(i,S,"vertex"),k=cf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+O+`
`+k)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||j==="")&&(U=!1);U&&(this.diagnostics={runnable:G,programLog:M,vertexShader:{log:b,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(S),i.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Xo(i,_)),E};let L;return this.getAttributes=function(){return L===void 0&&(L=MM(i,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}let DM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new UM(e),t.set(e,n)),n}}class UM{constructor(e){this.id=DM++,this.code=e,this.usedTimes=0}}function NM(s,e,t,n,i,r,a){const o=new qd,l=new IM,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,j,G,U){const O=G.fog,k=U.geometry,Z=M.isMeshStandardMaterial?G.environment:null,F=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),q=F&&F.mapping===gl?F.image.height:null,J=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const R=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,B=R!==void 0?R.length:0;let K=0;k.morphAttributes.position!==void 0&&(K=1),k.morphAttributes.normal!==void 0&&(K=2),k.morphAttributes.color!==void 0&&(K=3);let oe,ne,se,xe;if(J){const he=ci[J];oe=he.vertexShader,ne=he.fragmentShader}else oe=M.vertexShader,ne=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const Me=s.getRenderTarget(),ye=U.isInstancedMesh===!0,Fe=!!M.map,Et=!!M.matcap,Pe=!!F,z=!!M.aoMap,Ie=!!M.lightMap,fe=!!M.bumpMap,Ce=!!M.normalMap,Re=!!M.displacementMap,V=!!M.emissiveMap,Ue=!!M.metalnessMap,Oe=!!M.roughnessMap,nt=M.anisotropy>0,Ye=M.clearcoat>0,yt=M.iridescence>0,C=M.sheen>0,T=M.transmission>0,H=nt&&!!M.anisotropyMap,Q=Ye&&!!M.clearcoatMap,ee=Ye&&!!M.clearcoatNormalMap,te=Ye&&!!M.clearcoatRoughnessMap,Te=yt&&!!M.iridescenceMap,re=yt&&!!M.iridescenceThicknessMap,Y=C&&!!M.sheenColorMap,ge=C&&!!M.sheenRoughnessMap,be=!!M.specularMap,we=!!M.specularColorMap,_e=!!M.specularIntensityMap,de=T&&!!M.transmissionMap,Be=T&&!!M.thicknessMap,it=!!M.gradientMap,P=!!M.alphaMap,le=M.alphaTest>0,X=!!M.alphaHash,ie=!!M.extensions,ae=!!k.attributes.uv1,We=!!k.attributes.uv2,ut=!!k.attributes.uv3;let ht=ar;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ht=s.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:oe,fragmentShader:ne,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:ye,instancingColor:ye&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:vi,map:Fe,matcap:Et,envMap:Pe,envMapMode:Pe&&F.mapping,envMapCubeUVHeight:q,aoMap:z,lightMap:Ie,bumpMap:fe,normalMap:Ce,displacementMap:f&&Re,emissiveMap:V,normalMapObjectSpace:Ce&&M.normalMapType===P_,normalMapTangentSpace:Ce&&M.normalMapType===kd,metalnessMap:Ue,roughnessMap:Oe,anisotropy:nt,anisotropyMap:H,clearcoat:Ye,clearcoatMap:Q,clearcoatNormalMap:ee,clearcoatRoughnessMap:te,iridescence:yt,iridescenceMap:Te,iridescenceThicknessMap:re,sheen:C,sheenColorMap:Y,sheenRoughnessMap:ge,specularMap:be,specularColorMap:we,specularIntensityMap:_e,transmission:T,transmissionMap:de,thicknessMap:Be,gradientMap:it,opaque:M.transparent===!1&&M.blending===Ls,alphaMap:P,alphaTest:le,alphaHash:X,combine:M.combine,mapUv:Fe&&_(M.map.channel),aoMapUv:z&&_(M.aoMap.channel),lightMapUv:Ie&&_(M.lightMap.channel),bumpMapUv:fe&&_(M.bumpMap.channel),normalMapUv:Ce&&_(M.normalMap.channel),displacementMapUv:Re&&_(M.displacementMap.channel),emissiveMapUv:V&&_(M.emissiveMap.channel),metalnessMapUv:Ue&&_(M.metalnessMap.channel),roughnessMapUv:Oe&&_(M.roughnessMap.channel),anisotropyMapUv:H&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&_(M.sheenRoughnessMap.channel),specularMapUv:be&&_(M.specularMap.channel),specularColorMapUv:we&&_(M.specularColorMap.channel),specularIntensityMapUv:_e&&_(M.specularIntensityMap.channel),transmissionMapUv:de&&_(M.transmissionMap.channel),thicknessMapUv:Be&&_(M.thicknessMap.channel),alphaMapUv:P&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||nt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:ae,vertexUv2s:We,vertexUv3s:ut,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Fe||P),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:K,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,useLegacyLights:s._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ie&&M.extensions.derivatives===!0,extensionFragDepth:ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const j in M.defines)b.push(j),b.push(M.defines[j]);return M.isRawShaderMaterial===!1&&(y(b,M),x(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function x(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),M.push(o.mask)}function v(M){const b=g[M.type];let j;if(b){const G=ci[b];j=yg.clone(G.uniforms)}else j=M.uniforms;return j}function S(M,b){let j;for(let G=0,U=c.length;G<U;G++){const O=c[G];if(O.cacheKey===b){j=O,++j.usedTimes;break}}return j===void 0&&(j=new LM(s,b,M,r),c.push(j)),j}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:L}}function OM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function FM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||FM),n.length>1&&n.sort(f||pf),i.length>1&&i.sort(f||pf)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function BM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new mf,s.set(n,[a])):i>=r.length?(a=new mf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function kM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function zM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HM=0;function GM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VM(s,e){const t=new kM,n=zM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,a=new Je,o=new Je;function l(u,h){let f=0,d=0,g=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,v=0,S=0,w=0,E=0,L=0;u.sort(GM);const M=h===!0?Math.PI:1;for(let j=0,G=u.length;j<G;j++){const U=u[j],O=U.color,k=U.intensity,Z=U.distance,F=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=O.r*k*M,d+=O.g*k*M,g+=O.b*k*M;else if(U.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(U.sh.coefficients[q],k);else if(U.isDirectionalLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const J=U.shadow,R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,i.directionalShadow[_]=R,i.directionalShadowMap[_]=F,i.directionalShadowMatrix[_]=U.shadow.matrix,v++}i.directional[_]=q,_++}else if(U.isSpotLight){const q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(O).multiplyScalar(k*M),q.distance=Z,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,i.spot[p]=q;const J=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,J.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[p]=J.matrix,U.castShadow){const R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=F,w++}p++}else if(U.isRectAreaLight){const q=t.get(U);q.color.copy(O).multiplyScalar(k),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),i.rectArea[y]=q,y++}else if(U.isPointLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity*M),q.distance=U.distance,q.decay=U.decay,U.castShadow){const J=U.shadow,R=n.get(U);R.shadowBias=J.bias,R.shadowNormalBias=J.normalBias,R.shadowRadius=J.radius,R.shadowMapSize=J.mapSize,R.shadowCameraNear=J.camera.near,R.shadowCameraFar=J.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=F,i.pointShadowMatrix[m]=U.shadow.matrix,S++}i.point[m]=q,m++}else if(U.isHemisphereLight){const q=t.get(U);q.skyColor.copy(U.color).multiplyScalar(k*M),q.groundColor.copy(U.groundColor).multiplyScalar(k*M),i.hemi[x]=q,x++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==v||b.numPointShadows!==S||b.numSpotShadows!==w||b.numSpotMaps!==E)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=w+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,b.directionalLength=_,b.pointLength=m,b.spotLength=p,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=v,b.numPointShadows=S,b.numSpotShadows=w,b.numSpotMaps=E,i.version=HM++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function _f(s,e){const t=new VM(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function WM(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new _f(s,e),t.set(r,[l])):a>=o.length?(l=new _f(s,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class XM extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qM extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KM(s,e,t){let n=new pu;const i=new ot,r=new ot,a=new _t,o=new XM({depthPacking:C_}),l=new qM,c={},u=t.maxTextureSize,h={[ki]:yn,[yn]:ki,[hi]:hi},f=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:YM,fragmentShader:jM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new On(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bd;let p=this.type;this.render=function(S,w,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=s.getRenderTarget(),M=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),j=s.state;j.setBlending(sr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=p!==Pi&&this.type===Pi,U=p===Pi&&this.type!==Pi;for(let O=0,k=S.length;O<k;O++){const Z=S[O],F=Z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,F.mapSize.y=r.y)),F.map===null||G===!0||U===!0){const R=this.type!==Pi?{minFilter:Vt,magFilter:Vt}:{};F.map!==null&&F.map.dispose(),F.map=new Yr(i.x,i.y,R),F.map.texture.name=Z.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const J=F.getViewportCount();for(let R=0;R<J;R++){const B=F.getViewport(R);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),j.viewport(a),F.updateMatrices(Z,R),n=F.getFrustum(),v(w,E,F.camera,Z,this.type)}F.isPointLightShadow!==!0&&this.type===Pi&&y(F,E),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(L,M,b)};function y(S,w){const E=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Yr(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,E,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,E,d,_,null)}function x(S,w,E,L){let M=null;const b=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)M=b;else if(M=E.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=M.uuid,G=w.uuid;let U=c[j];U===void 0&&(U={},c[j]=U);let O=U[G];O===void 0&&(O=M.clone(),U[G]=O),M=O}if(M.visible=w.visible,M.wireframe=w.wireframe,L===Pi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const j=s.properties.get(M);j.light=E}return M}function v(S,w,E,L,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Pi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const G=e.update(S),U=S.material;if(Array.isArray(U)){const O=G.groups;for(let k=0,Z=O.length;k<Z;k++){const F=O[k],q=U[F.materialIndex];if(q&&q.visible){const J=x(S,q,L,M);s.renderBufferDirect(E,null,G,J,S,F)}}}else if(U.visible){const O=x(S,U,L,M);s.renderBufferDirect(E,null,G,O,S,null)}}const j=S.children;for(let G=0,U=j.length;G<U;G++)v(j[G],w,E,L,M)}}function $M(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const le=new _t;let X=null;const ie=new _t(0,0,0,0);return{setMask:function(ae){X!==ae&&!P&&(s.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){P=ae},setClear:function(ae,We,ut,ht,De){De===!0&&(ae*=ht,We*=ht,ut*=ht),le.set(ae,We,ut,ht),ie.equals(le)===!1&&(s.clearColor(ae,We,ut,ht),ie.copy(le))},reset:function(){P=!1,X=null,ie.set(-1,0,0,0)}}}function r(){let P=!1,le=null,X=null,ie=null;return{setTest:function(ae){ae?Me(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ae){le!==ae&&!P&&(s.depthMask(ae),le=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case i_:s.depthFunc(s.NEVER);break;case r_:s.depthFunc(s.ALWAYS);break;case s_:s.depthFunc(s.LESS);break;case wc:s.depthFunc(s.LEQUAL);break;case a_:s.depthFunc(s.EQUAL);break;case o_:s.depthFunc(s.GEQUAL);break;case l_:s.depthFunc(s.GREATER);break;case c_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ie!==ae&&(s.clearDepth(ae),ie=ae)},reset:function(){P=!1,le=null,X=null,ie=null}}}function a(){let P=!1,le=null,X=null,ie=null,ae=null,We=null,ut=null,ht=null,De=null;return{setTest:function(he){P||(he?Me(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(he){le!==he&&!P&&(s.stencilMask(he),le=he)},setFunc:function(he,ze,je){(X!==he||ie!==ze||ae!==je)&&(s.stencilFunc(he,ze,je),X=he,ie=ze,ae=je)},setOp:function(he,ze,je){(We!==he||ut!==ze||ht!==je)&&(s.stencilOp(he,ze,je),We=he,ut=ze,ht=je)},setLocked:function(he){P=he},setClear:function(he){De!==he&&(s.clearStencil(he),De=he)},reset:function(){P=!1,le=null,X=null,ie=null,ae=null,We=null,ut=null,ht=null,De=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,S=null,w=null,E=null,L=null,M=!1,b=null,j=null,G=null,U=null,O=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,F=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),Z=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Z=F>=2);let J=null,R={};const B=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),oe=new _t().fromArray(B),ne=new _t().fromArray(K);function se(P,le,X,ie){const ae=new Uint8Array(4),We=s.createTexture();s.bindTexture(P,We),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<X;ut++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(le,0,s.RGBA,1,1,ie,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(le+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return We}const xe={};xe[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),xe[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(xe[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xe[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(s.DEPTH_TEST),l.setFunc(wc),Re(!1),V(Qu),Me(s.CULL_FACE),fe(sr);function Me(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function ye(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function Fe(P,le){return d[P]!==le?(s.bindFramebuffer(P,le),d[P]=le,n&&(P===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=le),P===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=le)),!0):!1}function Et(P,le){let X=_,ie=!1;if(P)if(X=g.get(le),X===void 0&&(X=[],g.set(le,X)),P.isWebGLMultipleRenderTargets){const ae=P.texture;if(X.length!==ae.length||X[0]!==s.COLOR_ATTACHMENT0){for(let We=0,ut=ae.length;We<ut;We++)X[We]=s.COLOR_ATTACHMENT0+We;X.length=ae.length,ie=!0}}else X[0]!==s.COLOR_ATTACHMENT0&&(X[0]=s.COLOR_ATTACHMENT0,ie=!0);else X[0]!==s.BACK&&(X[0]=s.BACK,ie=!0);ie&&(t.isWebGL2?s.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Pe(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const z={[Ss]:s.FUNC_ADD,[qm]:s.FUNC_SUBTRACT,[Ym]:s.FUNC_REVERSE_SUBTRACT};if(n)z[ih]=s.MIN,z[rh]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(z[ih]=P.MIN_EXT,z[rh]=P.MAX_EXT)}const Ie={[jm]:s.ZERO,[Km]:s.ONE,[$m]:s.SRC_COLOR,[Ad]:s.SRC_ALPHA,[n_]:s.SRC_ALPHA_SATURATE,[e_]:s.DST_COLOR,[Jm]:s.DST_ALPHA,[Zm]:s.ONE_MINUS_SRC_COLOR,[wd]:s.ONE_MINUS_SRC_ALPHA,[t_]:s.ONE_MINUS_DST_COLOR,[Qm]:s.ONE_MINUS_DST_ALPHA};function fe(P,le,X,ie,ae,We,ut,ht){if(P===sr){p===!0&&(ye(s.BLEND),p=!1);return}if(p===!1&&(Me(s.BLEND),p=!0),P!==Xm){if(P!==y||ht!==M){if((x!==Ss||w!==Ss)&&(s.blendEquation(s.FUNC_ADD),x=Ss,w=Ss),ht)switch(P){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eh:s.blendFunc(s.ONE,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case th:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,S=null,E=null,L=null,y=P,M=ht}return}ae=ae||le,We=We||X,ut=ut||ie,(le!==x||ae!==w)&&(s.blendEquationSeparate(z[le],z[ae]),x=le,w=ae),(X!==v||ie!==S||We!==E||ut!==L)&&(s.blendFuncSeparate(Ie[X],Ie[ie],Ie[We],Ie[ut]),v=X,S=ie,E=We,L=ut),y=P,M=!1}function Ce(P,le){P.side===hi?ye(s.CULL_FACE):Me(s.CULL_FACE);let X=P.side===yn;le&&(X=!X),Re(X),P.blending===Ls&&P.transparent===!1?fe(sr):fe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ie=P.stencilWrite;c.setTest(ie),ie&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Oe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(P){b!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),b=P)}function V(P){P!==Gm?(Me(s.CULL_FACE),P!==j&&(P===Qu?s.cullFace(s.BACK):P===Vm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),j=P}function Ue(P){P!==G&&(Z&&s.lineWidth(P),G=P)}function Oe(P,le,X){P?(Me(s.POLYGON_OFFSET_FILL),(U!==le||O!==X)&&(s.polygonOffset(le,X),U=le,O=X)):ye(s.POLYGON_OFFSET_FILL)}function nt(P){P?Me(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Ye(P){P===void 0&&(P=s.TEXTURE0+k-1),J!==P&&(s.activeTexture(P),J=P)}function yt(P,le,X){X===void 0&&(J===null?X=s.TEXTURE0+k-1:X=J);let ie=R[X];ie===void 0&&(ie={type:void 0,texture:void 0},R[X]=ie),(ie.type!==P||ie.texture!==le)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(P,le||xe[P]),ie.type=P,ie.texture=le)}function C(){const P=R[J];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){oe.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),oe.copy(P))}function _e(P){ne.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function de(P,le){let X=h.get(le);X===void 0&&(X=new WeakMap,h.set(le,X));let ie=X.get(P);ie===void 0&&(ie=s.getUniformBlockIndex(le,P.name),X.set(P,ie))}function Be(P,le){const ie=h.get(le).get(P);u.get(le)!==ie&&(s.uniformBlockBinding(le,ie,P.__bindingPointIndex),u.set(le,ie))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},J=null,R={},d={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,v=null,S=null,w=null,E=null,L=null,M=!1,b=null,j=null,G=null,U=null,O=null,oe.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Me,disable:ye,bindFramebuffer:Fe,drawBuffers:Et,useProgram:Pe,setBlending:fe,setMaterial:Ce,setFlipSided:Re,setCullFace:V,setLineWidth:Ue,setPolygonOffset:Oe,setScissorTest:nt,activeTexture:Ye,bindTexture:yt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:H,texImage2D:ge,texImage3D:be,updateUBOMapping:de,uniformBlockBinding:Be,texStorage2D:re,texStorage3D:Y,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:te,compressedTexSubImage3D:Te,scissor:we,viewport:_e,reset:it}}function ZM(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,T){return p?new OffscreenCanvas(C,T):Va("canvas")}function x(C,T,H,Q){let ee=1;if((C.width>Q||C.height>Q)&&(ee=Q/Math.max(C.width,C.height)),ee<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const te=T?rl:Math.floor,Te=te(ee*C.width),re=te(ee*C.height);_===void 0&&(_=y(Te,re));const Y=H?y(Te,re):_;return Y.width=Te,Y.height=re,Y.getContext("2d").drawImage(C,0,0,Te,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Te+"x"+re+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Uc(C.width)&&Uc(C.height)}function S(C){return o?!1:C.wrapS!==qn||C.wrapT!==qn||C.minFilter!==Vt&&C.minFilter!==vn}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==Vt&&C.minFilter!==vn}function E(C){s.generateMipmap(C)}function L(C,T,H,Q,ee=!1){if(o===!1)return T;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=T;return T===s.RED&&(H===s.FLOAT&&(te=s.R32F),H===s.HALF_FLOAT&&(te=s.R16F),H===s.UNSIGNED_BYTE&&(te=s.R8)),T===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.R8UI),H===s.UNSIGNED_SHORT&&(te=s.R16UI),H===s.UNSIGNED_INT&&(te=s.R32UI),H===s.BYTE&&(te=s.R8I),H===s.SHORT&&(te=s.R16I),H===s.INT&&(te=s.R32I)),T===s.RG&&(H===s.FLOAT&&(te=s.RG32F),H===s.HALF_FLOAT&&(te=s.RG16F),H===s.UNSIGNED_BYTE&&(te=s.RG8)),T===s.RGBA&&(H===s.FLOAT&&(te=s.RGBA32F),H===s.HALF_FLOAT&&(te=s.RGBA16F),H===s.UNSIGNED_BYTE&&(te=Q===ke&&ee===!1?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)),(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(C,T,H){return w(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==vn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===Vt||C===Pc||C===Wo?s.NEAREST:s.LINEAR}function j(C){const T=C.target;T.removeEventListener("dispose",j),U(T),T.isVideoTexture&&g.delete(T)}function G(C){const T=C.target;T.removeEventListener("dispose",G),k(T)}function U(C){const T=n.get(C);if(T.__webglInit===void 0)return;const H=C.source,Q=m.get(H);if(Q){const ee=Q[T.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(C),Object.keys(Q).length===0&&m.delete(H)}n.remove(C)}function O(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const H=C.source,Q=m.get(H);delete Q[T.__cacheKey],a.memory.textures--}function k(C){const T=C.texture,H=n.get(C),Q=n.get(T);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let te=0;te<H.__webglFramebuffer[ee].length;te++)s.deleteFramebuffer(H.__webglFramebuffer[ee][te]);else s.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)s.deleteFramebuffer(H.__webglFramebuffer[ee]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,te=T.length;ee<te;ee++){const Te=n.get(T[ee]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(T[ee])}n.remove(T),n.remove(C)}let Z=0;function F(){Z=0}function q(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function J(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function R(C,T){const H=n.get(C);if(C.isVideoTexture&&Ye(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(H,C,T);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+T)}function B(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Fe(H,C,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+T)}function K(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Fe(H,C,T);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+T)}function oe(C,T){const H=n.get(C);if(C.version>0&&H.__version!==C.version){Et(H,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+T)}const ne={[Gs]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[nl]:s.MIRRORED_REPEAT},se={[Vt]:s.NEAREST,[Pc]:s.NEAREST_MIPMAP_NEAREST,[Wo]:s.NEAREST_MIPMAP_LINEAR,[vn]:s.LINEAR,[Pd]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},xe={[D_]:s.NEVER,[k_]:s.ALWAYS,[I_]:s.LESS,[N_]:s.LEQUAL,[U_]:s.EQUAL,[B_]:s.GEQUAL,[O_]:s.GREATER,[F_]:s.NOTEQUAL};function Me(C,T,H){if(H?(s.texParameteri(C,s.TEXTURE_WRAP_S,ne[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ne[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ne[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,se[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,se[T.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==qn||T.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(T.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==Vt&&T.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Vt||T.minFilter!==Wo&&T.minFilter!==qr||T.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Ha&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function ye(C,T){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",j));const Q=T.source;let ee=m.get(Q);ee===void 0&&(ee={},m.set(Q,ee));const te=J(T);if(te!==C.__cacheKey){ee[te]===void 0&&(ee[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[te].usedTimes++;const Te=ee[C.__cacheKey];Te!==void 0&&(ee[C.__cacheKey].usedTimes--,Te.usedTimes===0&&O(T)),C.__cacheKey=te,C.__webglTexture=ee[te].texture}return H}function Fe(C,T,H){let Q=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=s.TEXTURE_3D);const ee=ye(C,T),te=T.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+H);const Te=n.get(te);if(te.version!==Te.__version||ee===!0){t.activeTexture(s.TEXTURE0+H),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const re=S(T)&&v(T.image)===!1;let Y=x(T.image,re,!1,u);Y=yt(T,Y);const ge=v(Y)||o,be=r.convert(T.format,T.colorSpace);let we=r.convert(T.type),_e=L(T.internalFormat,be,we,T.colorSpace);Me(Q,T,ge);let de;const Be=T.mipmaps,it=o&&T.isVideoTexture!==!0,P=Te.__version===void 0||ee===!0,le=M(T,Y,ge);if(T.isDepthTexture)_e=s.DEPTH_COMPONENT,o?T.type===Ui?_e=s.DEPTH_COMPONENT32F:T.type===Ji?_e=s.DEPTH_COMPONENT24:T.type===Nr?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:T.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Or&&_e===s.DEPTH_COMPONENT&&T.type!==fu&&T.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ji,we=r.convert(T.type)),T.format===Vs&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,T.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Nr,we=r.convert(T.type))),P&&(it?t.texStorage2D(s.TEXTURE_2D,1,_e,Y.width,Y.height):t.texImage2D(s.TEXTURE_2D,0,_e,Y.width,Y.height,0,be,we,null));else if(T.isDataTexture)if(Be.length>0&&ge){it&&P&&t.texStorage2D(s.TEXTURE_2D,le,_e,Be[0].width,Be[0].height);for(let X=0,ie=Be.length;X<ie;X++)de=Be[X],it?t.texSubImage2D(s.TEXTURE_2D,X,0,0,de.width,de.height,be,we,de.data):t.texImage2D(s.TEXTURE_2D,X,_e,de.width,de.height,0,be,we,de.data);T.generateMipmaps=!1}else it?(P&&t.texStorage2D(s.TEXTURE_2D,le,_e,Y.width,Y.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Y.width,Y.height,be,we,Y.data)):t.texImage2D(s.TEXTURE_2D,0,_e,Y.width,Y.height,0,be,we,Y.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,_e,Be[0].width,Be[0].height,Y.depth);for(let X=0,ie=Be.length;X<ie;X++)de=Be[X],T.format!==Yn?be!==null?it?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,Y.depth,be,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,_e,de.width,de.height,Y.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,de.width,de.height,Y.depth,be,we,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,_e,de.width,de.height,Y.depth,0,be,we,de.data)}else{it&&P&&t.texStorage2D(s.TEXTURE_2D,le,_e,Be[0].width,Be[0].height);for(let X=0,ie=Be.length;X<ie;X++)de=Be[X],T.format!==Yn?be!==null?it?t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,de.width,de.height,be,de.data):t.compressedTexImage2D(s.TEXTURE_2D,X,_e,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(s.TEXTURE_2D,X,0,0,de.width,de.height,be,we,de.data):t.texImage2D(s.TEXTURE_2D,X,_e,de.width,de.height,0,be,we,de.data)}else if(T.isDataArrayTexture)it?(P&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,be,we,Y.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Y.width,Y.height,Y.depth,0,be,we,Y.data);else if(T.isData3DTexture)it?(P&&t.texStorage3D(s.TEXTURE_3D,le,_e,Y.width,Y.height,Y.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,be,we,Y.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Y.width,Y.height,Y.depth,0,be,we,Y.data);else if(T.isFramebufferTexture){if(P)if(it)t.texStorage2D(s.TEXTURE_2D,le,_e,Y.width,Y.height);else{let X=Y.width,ie=Y.height;for(let ae=0;ae<le;ae++)t.texImage2D(s.TEXTURE_2D,ae,_e,X,ie,0,be,we,null),X>>=1,ie>>=1}}else if(Be.length>0&&ge){it&&P&&t.texStorage2D(s.TEXTURE_2D,le,_e,Be[0].width,Be[0].height);for(let X=0,ie=Be.length;X<ie;X++)de=Be[X],it?t.texSubImage2D(s.TEXTURE_2D,X,0,0,be,we,de):t.texImage2D(s.TEXTURE_2D,X,_e,be,we,de);T.generateMipmaps=!1}else it?(P&&t.texStorage2D(s.TEXTURE_2D,le,_e,Y.width,Y.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,we,Y)):t.texImage2D(s.TEXTURE_2D,0,_e,be,we,Y);w(T,ge)&&E(Q),Te.__version=te.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Et(C,T,H){if(T.image.length!==6)return;const Q=ye(C,T),ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const te=n.get(ee);if(ee.version!==te.__version||Q===!0){t.activeTexture(s.TEXTURE0+H),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Te=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let X=0;X<6;X++)!Te&&!re?Y[X]=x(T.image[X],!1,!0,c):Y[X]=re?T.image[X].image:T.image[X],Y[X]=yt(T,Y[X]);const ge=Y[0],be=v(ge)||o,we=r.convert(T.format,T.colorSpace),_e=r.convert(T.type),de=L(T.internalFormat,we,_e,T.colorSpace),Be=o&&T.isVideoTexture!==!0,it=te.__version===void 0||Q===!0;let P=M(T,ge,be);Me(s.TEXTURE_CUBE_MAP,T,be);let le;if(Te){Be&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,P,de,ge.width,ge.height);for(let X=0;X<6;X++){le=Y[X].mipmaps;for(let ie=0;ie<le.length;ie++){const ae=le[ie];T.format!==Yn?we!==null?Be?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ae.width,ae.height,we,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ae.width,ae.height,we,_e,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,de,ae.width,ae.height,0,we,_e,ae.data)}}}else{le=T.mipmaps,Be&&it&&(le.length>0&&P++,t.texStorage2D(s.TEXTURE_CUBE_MAP,P,de,Y[0].width,Y[0].height));for(let X=0;X<6;X++)if(re){Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Y[X].width,Y[X].height,we,_e,Y[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,de,Y[X].width,Y[X].height,0,we,_e,Y[X].data);for(let ie=0;ie<le.length;ie++){const We=le[ie].image[X].image;Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,We.width,We.height,we,_e,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,de,We.width,We.height,0,we,_e,We.data)}}else{Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,we,_e,Y[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,de,we,_e,Y[X]);for(let ie=0;ie<le.length;ie++){const ae=le[ie];Be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,we,_e,ae.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,de,we,_e,ae.image[X])}}}w(T,be)&&E(s.TEXTURE_CUBE_MAP),te.__version=ee.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Pe(C,T,H,Q,ee,te){const Te=r.convert(H.format,H.colorSpace),re=r.convert(H.type),Y=L(H.internalFormat,Te,re,H.colorSpace);if(!n.get(T).__hasExternalTextures){const be=Math.max(1,T.width>>te),we=Math.max(1,T.height>>te);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,Y,be,we,T.depth,0,Te,re,null):t.texImage2D(ee,te,Y,be,we,0,Te,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),nt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,n.get(H).__webglTexture,0,Oe(T)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,n.get(H).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function z(C,T,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let Q=s.DEPTH_COMPONENT16;if(H||nt(T)){const ee=T.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ui?Q=s.DEPTH_COMPONENT32F:ee.type===Ji&&(Q=s.DEPTH_COMPONENT24));const te=Oe(T);nt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,Q,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,Q,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const Q=Oe(T);H&&nt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,T.width,T.height):nt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const Q=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0;ee<Q.length;ee++){const te=Q[ee],Te=r.convert(te.format,te.colorSpace),re=r.convert(te.type),Y=L(te.internalFormat,Te,re,te.colorSpace),ge=Oe(T);H&&nt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,Y,T.width,T.height):nt(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,Y,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Y,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),R(T.depthTexture,0);const Q=n.get(T.depthTexture).__webglTexture,ee=Oe(T);if(T.depthTexture.format===Or)nt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(T.depthTexture.format===Vs)nt(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function fe(C){const T=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(T.__webglFramebuffer,C)}else if(H){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]=s.createRenderbuffer(),z(T.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),z(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(C,T,H){const Q=n.get(C);T!==void 0&&Pe(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&fe(C)}function Re(C){const T=C.texture,H=n.get(C),Q=n.get(T);C.addEventListener("dispose",G),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=T.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,Te=v(C)||o;if(ee){H.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[re]=[];for(let Y=0;Y<T.mipmaps.length;Y++)H.__webglFramebuffer[re][Y]=s.createFramebuffer()}else H.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)H.__webglFramebuffer[re]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const re=C.texture;for(let Y=0,ge=re.length;Y<ge;Y++){const be=n.get(re[Y]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&nt(C)===!1){const re=te?T:[T];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Y=0;Y<re.length;Y++){const ge=re[Y];H.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Y]);const be=r.convert(ge.format,ge.colorSpace),we=r.convert(ge.type),_e=L(ge.internalFormat,be,we,ge.colorSpace,C.isXRRenderTarget===!0),de=Oe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,_e,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,H.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),z(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T,Te);for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)Pe(H.__webglFramebuffer[re][Y],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Y);else Pe(H.__webglFramebuffer[re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);w(T,Te)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const re=C.texture;for(let Y=0,ge=re.length;Y<ge;Y++){const be=re[Y],we=n.get(be);t.bindTexture(s.TEXTURE_2D,we.__webglTexture),Me(s.TEXTURE_2D,be,Te),Pe(H.__webglFramebuffer,C,be,s.COLOR_ATTACHMENT0+Y,s.TEXTURE_2D,0),w(be,Te)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Q.__webglTexture),Me(re,T,Te),o&&T.mipmaps&&T.mipmaps.length>0)for(let Y=0;Y<T.mipmaps.length;Y++)Pe(H.__webglFramebuffer[Y],C,T,s.COLOR_ATTACHMENT0,re,Y);else Pe(H.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,re,0);w(T,Te)&&E(re),t.unbindTexture()}C.depthBuffer&&fe(C)}function V(C){const T=v(C)||o,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,ee=H.length;Q<ee;Q++){const te=H[Q];if(w(te,T)){const Te=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(te).__webglTexture;t.bindTexture(Te,re),E(Te),t.unbindTexture()}}}function Ue(C){if(o&&C.samples>0&&nt(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,Q=C.height;let ee=s.COLOR_BUFFER_BIT;const te=[],Te=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){te.push(s.COLOR_ATTACHMENT0+ge),C.depthBuffer&&te.push(Te);const be=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(be===!1&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),Y&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[ge]),be===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Te]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Te])),Y){const we=n.get(T[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);const be=n.get(T[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Oe(C){return Math.min(h,C.samples)}function nt(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(C){const T=a.render.frame;g.get(C)!==T&&(g.set(C,T),C.update())}function yt(C,T){const H=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.format===Ic||H!==vi&&H!==Br&&(H===ke?o===!1?e.has("EXT_sRGB")===!0&&Q===Yn?(C.format=Ic,C.minFilter=vn,C.generateMipmaps=!1):T=Vd.sRGBToLinear(T):(Q!==Yn||ee!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.setTexture2D=R,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=Ce,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=nt}function JM(s,e,t){const n=t.isWebGL2;function i(r,a=Br){let o;if(r===or)return s.UNSIGNED_BYTE;if(r===Dd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(r===g_)return s.BYTE;if(r===x_)return s.SHORT;if(r===fu)return s.UNSIGNED_SHORT;if(r===Ld)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===Ha)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===v_)return s.ALPHA;if(r===Yn)return s.RGBA;if(r===M_)return s.LUMINANCE;if(r===y_)return s.LUMINANCE_ALPHA;if(r===Or)return s.DEPTH_COMPONENT;if(r===Vs)return s.DEPTH_STENCIL;if(r===Ic)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===S_)return s.RED;if(r===Ud)return s.RED_INTEGER;if(r===T_)return s.RG;if(r===Nd)return s.RG_INTEGER;if(r===Od)return s.RGBA_INTEGER;if(r===Cl||r===Pl||r===Ll||r===Dl)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sh||r===ah||r===oh||r===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===E_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ch||r===uh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ch)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hh||r===fh||r===dh||r===ph||r===mh||r===_h||r===gh||r===xh||r===vh||r===Mh||r===yh||r===Sh||r===Th||r===Eh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===hh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ph)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Eh)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Il)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===b_||r===bh||r===Ah||r===wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Il)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ah)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nr?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class QM extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dr extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ty extends Kt{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Or,u!==Or&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Or&&(n=Ji),n===void 0&&u===Vs&&(n=Nr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ny extends ia{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const y=[],x=[],v=new pn;v.layers.enable(1),v.viewport=new _t;const S=new pn;S.layers.enable(2),S.viewport=new _t;const w=[v,S],E=new QM;E.layers.enable(1),E.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=y[B];return K===void 0&&(K=new nc,y[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=y[B];return K===void 0&&(K=new nc,y[B]=K),K.getGripSpace()},this.getHand=function(B){let K=y[B];return K===void 0&&(K=new nc,y[B]=K),K.getHandSpace()};function b(B){const K=x.indexOf(B.inputSource);if(K===-1)return;const oe=y[K];oe!==void 0&&(oe.update(B.inputSource,B.frame,c||a),oe.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",G);for(let B=0;B<y.length;B++){const K=x[B];K!==null&&(x[B]=null,y[B].disconnect(K))}L=null,M=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,R.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",j),i.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),p=new Yr(d.framebufferWidth,d.framebufferHeight,{format:Yn,type:or,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,oe=null,ne=null;_.depth&&(ne=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Vs:Or,oe=_.stencil?Nr:Ji);const se={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(se),i.updateRenderState({layers:[f]}),p=new Yr(f.textureWidth,f.textureHeight,{format:Yn,type:or,depthTexture:new ty(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),R.setContext(i),R.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function G(B){for(let K=0;K<B.removed.length;K++){const oe=B.removed[K],ne=x.indexOf(oe);ne>=0&&(x[ne]=null,y[ne].disconnect(oe))}for(let K=0;K<B.added.length;K++){const oe=B.added[K];let ne=x.indexOf(oe);if(ne===-1){for(let xe=0;xe<y.length;xe++)if(xe>=x.length){x.push(oe),ne=xe;break}else if(x[xe]===null){x[xe]=oe,ne=xe;break}if(ne===-1)break}const se=y[ne];se&&se.connect(oe)}}const U=new D,O=new D;function k(B,K,oe){U.setFromMatrixPosition(K.matrixWorld),O.setFromMatrixPosition(oe.matrixWorld);const ne=U.distanceTo(O),se=K.projectionMatrix.elements,xe=oe.projectionMatrix.elements,Me=se[14]/(se[10]-1),ye=se[14]/(se[10]+1),Fe=(se[9]+1)/se[5],Et=(se[9]-1)/se[5],Pe=(se[8]-1)/se[0],z=(xe[8]+1)/xe[0],Ie=Me*Pe,fe=Me*z,Ce=ne/(-Pe+z),Re=Ce*-Pe;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Re),B.translateZ(Ce),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const V=Me+Ce,Ue=ye+Ce,Oe=Ie-Re,nt=fe+(ne-Re),Ye=Fe*ye/Ue*V,yt=Et*ye/Ue*V;B.projectionMatrix.makePerspective(Oe,nt,Ye,yt,V,Ue),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function Z(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;E.near=S.near=v.near=B.near,E.far=S.far=v.far=B.far,(L!==E.near||M!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,M=E.far);const K=B.parent,oe=E.cameras;Z(E,K);for(let ne=0;ne<oe.length;ne++)Z(oe[ne],K);oe.length===2?k(E,v,S):E.projectionMatrix.copy(v.projectionMatrix),F(B,E,K)};function F(B,K,oe){oe===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(oe.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const ne=B.children;for(let se=0,xe=ne.length;se<xe;se++)ne[se].updateMatrixWorld(!0);B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Xs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let q=null;function J(B,K){if(u=K.getViewerPose(c||a),g=K,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ne=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ne=!0);for(let se=0;se<oe.length;se++){const xe=oe[se];let Me=null;if(d!==null)Me=d.getViewport(xe);else{const Fe=h.getViewSubImage(f,xe);Me=Fe.viewport,se===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let ye=w[se];ye===void 0&&(ye=new pn,ye.layers.enable(se),ye.viewport=new _t,w[se]=ye),ye.matrix.fromArray(xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),se===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ne===!0&&E.cameras.push(ye)}}for(let oe=0;oe<y.length;oe++){const ne=x[oe],se=y[oe];ne!==null&&se!==void 0&&se.update(ne,K,c||a)}q&&q(B,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const R=new Qd;R.setAnimationLoop(J),this.setAnimationLoop=function(B){q=B},this.dispose=function(){}}}function iy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ry(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(y,S);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const v=s.createBuffer(),S=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,E=v.length;w<E;w++){const L=v[w];if(d(L,w,S)===!0){const M=L.__offset,b=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let G=0;G<b.length;G++){const U=b[G],O=_(U);typeof U=="number"?(L.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,M+j,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=U.elements[0],L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=U.elements[0],L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=U.elements[0]):(U.toArray(L.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,M,L.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,v){const S=y.value;if(v[x]===void 0){if(typeof S=="number")v[x]=S;else{const w=Array.isArray(S)?S:[S],E=[];for(let L=0;L<w.length;L++)E.push(w[L].clone());v[x]=E}return!0}else if(typeof S=="number"){if(v[x]!==S)return v[x]=S,!0}else{const w=Array.isArray(v[x])?v[x]:[v[x]],E=Array.isArray(S)?S:[S];for(let L=0;L<w.length;L++){const M=w[L];if(M.equals(E[L])===!1)return M.copy(E[L]),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const S=16;let w=0;for(let E=0,L=x.length;E<L;E++){const M=x[E],b={boundary:0,storage:0},j=Array.isArray(M.value)?M.value:[M.value];for(let G=0,U=j.length;G<U;G++){const O=j[G],k=_(O);b.boundary+=k.boundary,b.storage+=k.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,E>0){w=v%S;const G=S-w;w!==0&&G-b.boundary<0&&(v+=S-w,M.__offset=v)}v+=b.storage}return w=v%S,w>0&&(v+=S-w),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}function sy(){const s=Va("canvas");return s.style.display="block",s}class rp{constructor(e={}){const{canvas:t=sy(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const x=this;let v=!1,S=0,w=0,E=null,L=-1,M=null;const b=new _t,j=new _t;let G=null;const U=new qe(0);let O=0,k=t.width,Z=t.height,F=1,q=null,J=null;const R=new _t(0,0,k,Z),B=new _t(0,0,k,Z);let K=!1;const oe=new pu;let ne=!1,se=!1,xe=null;const Me=new Je,ye=new ot,Fe=new D,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return E===null?F:1}let z=n;function Ie(A,N){for(let W=0;W<A.length;W++){const I=A[W],$=t.getContext(I,N);if($!==null)return $}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",ie,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),z=Ie(N,A),z===null)throw Ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let fe,Ce,Re,V,Ue,Oe,nt,Ye,yt,C,T,H,Q,ee,te,Te,re,Y,ge,be,we,_e,de,Be;function it(){fe=new mv(z),Ce=new cv(z,fe,e),fe.init(Ce),_e=new JM(z,fe,Ce),Re=new $M(z,fe,Ce),V=new xv(z),Ue=new OM,Oe=new ZM(z,fe,Re,Ue,Ce,_e,V),nt=new hv(x),Ye=new pv(x),yt=new Rg(z,Ce),de=new ov(z,fe,yt,Ce),C=new _v(z,yt,V,de),T=new Sv(z,C,yt,V),ge=new yv(z,Ce,Oe),Te=new uv(Ue),H=new NM(x,nt,Ye,fe,Ce,de,Te),Q=new iy(x,Ue),ee=new BM,te=new WM(fe,Ce),Y=new av(x,nt,Ye,Re,T,f,l),re=new KM(x,T,Ce),Be=new ry(z,V,Ce,Re),be=new lv(z,fe,V,Ce),we=new gv(z,fe,V,Ce),V.programs=H.programs,x.capabilities=Ce,x.extensions=fe,x.properties=Ue,x.renderLists=ee,x.shadowMap=re,x.state=Re,x.info=V}it();const P=new ny(x,z);this.xr=P,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(k,Z,!1))},this.getSize=function(A){return A.set(k,Z)},this.setSize=function(A,N,W=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,Z=N,t.width=Math.floor(A*F),t.height=Math.floor(N*F),W===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(k*F,Z*F).floor()},this.setDrawingBufferSize=function(A,N,W){k=A,Z=N,F=W,t.width=Math.floor(A*W),t.height=Math.floor(N*W),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,N,W,I){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,N,W,I),Re.viewport(b.copy(R).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,N,W,I){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,N,W,I),Re.scissor(j.copy(B).multiplyScalar(F).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){Re.setScissorTest(K=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(A=!0,N=!0,W=!0){let I=0;if(A){let $=!1;if(E!==null){const ce=E.texture.format;$=ce===Od||ce===Nd||ce===Ud}if($){const ce=E.texture.type,me=ce===or||ce===Ji||ce===fu||ce===Nr||ce===Dd||ce===Id,Ee=Y.getClearColor(),Le=Y.getClearAlpha(),Ge=Ee.r,Se=Ee.g,Ae=Ee.b;me?(d[0]=Ge,d[1]=Se,d[2]=Ae,d[3]=Le,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Ge,g[1]=Se,g[2]=Ae,g[3]=Le,z.clearBufferiv(z.COLOR,0,g))}else I|=z.COLOR_BUFFER_BIT}N&&(I|=z.DEPTH_BUFFER_BIT),W&&(I|=z.STENCIL_BUFFER_BIT),z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),ee.dispose(),te.dispose(),Ue.dispose(),nt.dispose(),Ye.dispose(),T.dispose(),de.dispose(),Be.dispose(),H.dispose(),P.dispose(),P.removeEventListener("sessionstart",he),P.removeEventListener("sessionend",ze),xe&&(xe.dispose(),xe=null),je.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=V.autoReset,N=re.enabled,W=re.autoUpdate,I=re.needsUpdate,$=re.type;it(),V.autoReset=A,re.enabled=N,re.autoUpdate=W,re.needsUpdate=I,re.type=$}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const N=A.target;N.removeEventListener("dispose",ae),We(N)}function We(A){ut(A),Ue.remove(A)}function ut(A){const N=Ue.get(A).programs;N!==void 0&&(N.forEach(function(W){H.releaseProgram(W)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,W,I,$,ce){N===null&&(N=Et);const me=$.isMesh&&$.matrixWorld.determinant()<0,Ee=Xt(A,N,W,I,$);Re.setMaterial(I,me);let Le=W.index,Ge=1;if(I.wireframe===!0){if(Le=C.getWireframeAttribute(W),Le===void 0)return;Ge=2}const Se=W.drawRange,Ae=W.attributes.position;let lt=Se.start*Ge,vt=(Se.start+Se.count)*Ge;ce!==null&&(lt=Math.max(lt,ce.start*Ge),vt=Math.min(vt,(ce.start+ce.count)*Ge)),Le!==null?(lt=Math.max(lt,0),vt=Math.min(vt,Le.count)):Ae!=null&&(lt=Math.max(lt,0),vt=Math.min(vt,Ae.count));const rn=vt-lt;if(rn<0||rn===1/0)return;de.setup($,I,Ee,W,Le);let sn,ct=be;if(Le!==null&&(sn=yt.get(Le),ct=we,ct.setIndex(sn)),$.isMesh)I.wireframe===!0?(Re.setLineWidth(I.wireframeLinewidth*Pe()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if($.isLine){let Ve=I.linewidth;Ve===void 0&&(Ve=1),Re.setLineWidth(Ve*Pe()),$.isLineSegments?ct.setMode(z.LINES):$.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else $.isPoints?ct.setMode(z.POINTS):$.isSprite&&ct.setMode(z.TRIANGLES);if($.isInstancedMesh)ct.renderInstances(lt,rn,$.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Vi=Math.min(W.instanceCount,Ve);ct.renderInstances(lt,rn,Vi)}else ct.render(lt,rn)},this.compile=function(A,N){function W(I,$,ce){I.transparent===!0&&I.side===hi&&I.forceSinglePass===!1?(I.side=yn,I.needsUpdate=!0,Ke(I,$,ce),I.side=ki,I.needsUpdate=!0,Ke(I,$,ce),I.side=hi):Ke(I,$,ce)}m=te.get(A),m.init(),y.push(m),A.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(x._useLegacyLights),A.traverse(function(I){const $=I.material;if($)if(Array.isArray($))for(let ce=0;ce<$.length;ce++){const me=$[ce];W(me,A,I)}else W($,A,I)}),y.pop(),m=null};let ht=null;function De(A){ht&&ht(A)}function he(){je.stop()}function ze(){je.start()}const je=new Qd;je.setAnimationLoop(De),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){ht=A,P.setAnimationLoop(A),A===null?je.stop():je.start()},P.addEventListener("sessionstart",he),P.addEventListener("sessionend",ze),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(N),N=P.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,N,E),m=te.get(A,y.length),m.init(),y.push(m),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),oe.setFromProjectionMatrix(Me),se=this.localClippingEnabled,ne=Te.init(this.clippingPlanes,se),_=ee.get(A,p.length),_.init(),p.push(_),pe(A,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,J),this.info.render.frame++,ne===!0&&Te.beginShadows();const W=m.state.shadowsArray;if(re.render(W,A,N),ne===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(_,A),m.setupLights(x._useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let $=0,ce=I.length;$<ce;$++){const me=I[$];Qe(_,A,me,me.viewport)}}else Qe(_,A,N);E!==null&&(Oe.updateMultisampleRenderTarget(E),Oe.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,N),de.resetDefaultState(),L=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function pe(A,N,W,I){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){I&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const me=T.update(A),Ee=A.material;Ee.visible&&_.push(A,me,Ee,W,Fe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const me=T.update(A),Ee=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Fe.copy(me.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Ee)){const Le=me.groups;for(let Ge=0,Se=Le.length;Ge<Se;Ge++){const Ae=Le[Ge],lt=Ee[Ae.materialIndex];lt&&lt.visible&&_.push(A,me,lt,W,Fe.z,Ae)}}else Ee.visible&&_.push(A,me,Ee,W,Fe.z,null)}}const ce=A.children;for(let me=0,Ee=ce.length;me<Ee;me++)pe(ce[me],N,W,I)}function Qe(A,N,W,I){const $=A.opaque,ce=A.transmissive,me=A.transparent;m.setupLightsView(W),ne===!0&&Te.setGlobalState(x.clippingPlanes,W),ce.length>0&&Ne($,ce,N,W),I&&Re.viewport(b.copy(I)),$.length>0&&He($,N,W),ce.length>0&&He(ce,N,W),me.length>0&&He(me,N,W),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ne(A,N,W,I){const $=Ce.isWebGL2;xe===null&&(xe=new Yr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Ha:or,minFilter:qr,samples:$?4:0})),x.getDrawingBufferSize(ye),$?xe.setSize(ye.x,ye.y):xe.setSize(rl(ye.x),rl(ye.y));const ce=x.getRenderTarget();x.setRenderTarget(xe),x.getClearColor(U),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();const me=x.toneMapping;x.toneMapping=ar,He(A,W,I),Oe.updateMultisampleRenderTarget(xe),Oe.updateRenderTargetMipmap(xe);let Ee=!1;for(let Le=0,Ge=N.length;Le<Ge;Le++){const Se=N[Le],Ae=Se.object,lt=Se.geometry,vt=Se.material,rn=Se.group;if(vt.side===hi&&Ae.layers.test(I.layers)){const sn=vt.side;vt.side=yn,vt.needsUpdate=!0,Pt(Ae,W,I,lt,vt,rn),vt.side=sn,vt.needsUpdate=!0,Ee=!0}}Ee===!0&&(Oe.updateMultisampleRenderTarget(xe),Oe.updateRenderTargetMipmap(xe)),x.setRenderTarget(ce),x.setClearColor(U,O),x.toneMapping=me}function He(A,N,W){const I=N.isScene===!0?N.overrideMaterial:null;for(let $=0,ce=A.length;$<ce;$++){const me=A[$],Ee=me.object,Le=me.geometry,Ge=I===null?me.material:I,Se=me.group;Ee.layers.test(W.layers)&&Pt(Ee,N,W,Le,Ge,Se)}}function Pt(A,N,W,I,$,ce){A.onBeforeRender(x,N,W,I,$,ce),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(x,N,W,I,A,ce),$.transparent===!0&&$.side===hi&&$.forceSinglePass===!1?($.side=yn,$.needsUpdate=!0,x.renderBufferDirect(W,N,I,$,A,ce),$.side=ki,$.needsUpdate=!0,x.renderBufferDirect(W,N,I,$,A,ce),$.side=hi):x.renderBufferDirect(W,N,I,$,A,ce),A.onAfterRender(x,N,W,I,$,ce)}function Ke(A,N,W){N.isScene!==!0&&(N=Et);const I=Ue.get(A),$=m.state.lights,ce=m.state.shadowsArray,me=$.state.version,Ee=H.getParameters(A,$.state,ce,N,W),Le=H.getProgramCacheKey(Ee);let Ge=I.programs;I.environment=A.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(A.isMeshStandardMaterial?Ye:nt).get(A.envMap||I.environment),Ge===void 0&&(A.addEventListener("dispose",ae),Ge=new Map,I.programs=Ge);let Se=Ge.get(Le);if(Se!==void 0){if(I.currentProgram===Se&&I.lightsStateVersion===me)return St(A,Ee),Se}else Ee.uniforms=H.getUniforms(A),A.onBuild(W,Ee,x),A.onBeforeCompile(Ee,x),Se=H.acquireProgram(Ee,Le),Ge.set(Le,Se),I.uniforms=Ee.uniforms;const Ae=I.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ae.clippingPlanes=Te.uniform),St(A,Ee),I.needsLights=xt(A),I.lightsStateVersion=me,I.needsLights&&(Ae.ambientLightColor.value=$.state.ambient,Ae.lightProbe.value=$.state.probe,Ae.directionalLights.value=$.state.directional,Ae.directionalLightShadows.value=$.state.directionalShadow,Ae.spotLights.value=$.state.spot,Ae.spotLightShadows.value=$.state.spotShadow,Ae.rectAreaLights.value=$.state.rectArea,Ae.ltc_1.value=$.state.rectAreaLTC1,Ae.ltc_2.value=$.state.rectAreaLTC2,Ae.pointLights.value=$.state.point,Ae.pointLightShadows.value=$.state.pointShadow,Ae.hemisphereLights.value=$.state.hemi,Ae.directionalShadowMap.value=$.state.directionalShadowMap,Ae.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ae.spotShadowMap.value=$.state.spotShadowMap,Ae.spotLightMatrix.value=$.state.spotLightMatrix,Ae.spotLightMap.value=$.state.spotLightMap,Ae.pointShadowMap.value=$.state.pointShadowMap,Ae.pointShadowMatrix.value=$.state.pointShadowMatrix);const lt=Se.getUniforms(),vt=Xo.seqWithValue(lt.seq,Ae);return I.currentProgram=Se,I.uniformsList=vt,Se}function St(A,N){const W=Ue.get(A);W.outputColorSpace=N.outputColorSpace,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Xt(A,N,W,I,$){N.isScene!==!0&&(N=Et),Oe.resetTextureUnits();const ce=N.fog,me=I.isMeshStandardMaterial?N.environment:null,Ee=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vi,Le=(I.isMeshStandardMaterial?Ye:nt).get(I.envMap||me),Ge=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ae=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color;let rn=ar;I.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(rn=x.toneMapping);const sn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=sn!==void 0?sn.length:0,Ve=Ue.get(I),Vi=m.state.lights;if(ne===!0&&(se===!0||A!==M)){const wn=A===M&&I.id===L;Te.setState(I,A,wn)}let gt=!1;I.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Vi.state.version||Ve.outputColorSpace!==Ee||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||Ve.envMap!==Le||I.fog===!0&&Ve.fog!==ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Te.numPlanes||Ve.numIntersection!==Te.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==Se||Ve.morphTargets!==Ae||Ve.morphNormals!==lt||Ve.morphColors!==vt||Ve.toneMapping!==rn||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==ct)&&(gt=!0):(gt=!0,Ve.__version=I.version);let gr=Ve.currentProgram;gt===!0&&(gr=Ke(I,N,$));let Zu=!1,ca=!1,Al=!1;const an=gr.getUniforms(),xr=Ve.uniforms;if(Re.useProgram(gr.program)&&(Zu=!0,ca=!0,Al=!0),I.id!==L&&(L=I.id,ca=!0),Zu||M!==A){if(an.setValue(z,"projectionMatrix",A.projectionMatrix),Ce.logarithmicDepthBuffer&&an.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,ca=!0,Al=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const wn=an.map.cameraPosition;wn!==void 0&&wn.setValue(z,Fe.setFromMatrixPosition(A.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&an.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||$.isSkinnedMesh)&&an.setValue(z,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){an.setOptional(z,$,"bindMatrix"),an.setOptional(z,$,"bindMatrixInverse");const wn=$.skeleton;wn&&(Ce.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),an.setValue(z,"boneTexture",wn.boneTexture,Oe),an.setValue(z,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wl=W.morphAttributes;if((wl.position!==void 0||wl.normal!==void 0||wl.color!==void 0&&Ce.isWebGL2===!0)&&ge.update($,W,gr),(ca||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,an.setValue(z,"receiveShadow",$.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(xr.envMap.value=Le,xr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ca&&(an.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Ot(xr,Al),ce&&I.fog===!0&&Q.refreshFogUniforms(xr,ce),Q.refreshMaterialUniforms(xr,I,F,Z,xe),Xo.upload(z,Ve.uniformsList,xr,Oe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Xo.upload(z,Ve.uniformsList,xr,Oe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&an.setValue(z,"center",$.center),an.setValue(z,"modelViewMatrix",$.modelViewMatrix),an.setValue(z,"normalMatrix",$.normalMatrix),an.setValue(z,"modelMatrix",$.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const wn=I.uniformsGroups;for(let Rl=0,Hm=wn.length;Rl<Hm;Rl++)if(Ce.isWebGL2){const Ju=wn[Rl];Be.update(Ju,gr),Be.bind(Ju,gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gr}function Ot(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function xt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,N,W){Ue.get(A.texture).__webglTexture=N,Ue.get(A.depthTexture).__webglTexture=W;const I=Ue.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const W=Ue.get(A);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,W=0){E=A,S=N,w=W;let I=!0,$=null,ce=!1,me=!1;if(A){const Le=Ue.get(A);Le.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(z.FRAMEBUFFER,null),I=!1):Le.__webglFramebuffer===void 0?Oe.setupRenderTarget(A):Le.__hasExternalTextures&&Oe.rebindTextures(A,Ue.get(A.texture).__webglTexture,Ue.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(me=!0);const Se=Ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Se[N])?$=Se[N][W]:$=Se[N],ce=!0):Ce.isWebGL2&&A.samples>0&&Oe.useMultisampledRTT(A)===!1?$=Ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Se)?$=Se[W]:$=Se,b.copy(A.viewport),j.copy(A.scissor),G=A.scissorTest}else b.copy(R).multiplyScalar(F).floor(),j.copy(B).multiplyScalar(F).floor(),G=K;if(Re.bindFramebuffer(z.FRAMEBUFFER,$)&&Ce.drawBuffers&&I&&Re.drawBuffers(A,$),Re.viewport(b),Re.scissor(j),Re.setScissorTest(G),ce){const Le=Ue.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Le.__webglTexture,W)}else if(me){const Le=Ue.get(A.texture),Ge=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.__webglTexture,W||0,Ge)}L=-1},this.readRenderTargetPixels=function(A,N,W,I,$,ce,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){Re.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Le=A.texture,Ge=Le.format,Se=Le.type;if(Ge!==Yn&&_e.convert(Ge)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Se===Ha&&(fe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Se!==or&&_e.convert(Se)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===Ui&&(Ce.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-I&&W>=0&&W<=A.height-$&&z.readPixels(N,W,I,$,_e.convert(Ge),_e.convert(Se),ce)}finally{const Le=E!==null?Ue.get(E).__webglFramebuffer:null;Re.bindFramebuffer(z.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,N,W=0){const I=Math.pow(2,-W),$=Math.floor(N.image.width*I),ce=Math.floor(N.image.height*I);Oe.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,A.x,A.y,$,ce),Re.unbindTexture()},this.copyTextureToTexture=function(A,N,W,I=0){const $=N.image.width,ce=N.image.height,me=_e.convert(W.format),Ee=_e.convert(W.type);Oe.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,I,A.x,A.y,$,ce,me,Ee,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,I,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,me,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,I,A.x,A.y,me,Ee,N.image),I===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,N,W,I,$=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,Le=_e.convert(I.format),Ge=_e.convert(I.type);let Se;if(I.isData3DTexture)Oe.setTexture3D(I,0),Se=z.TEXTURE_3D;else if(I.isDataArrayTexture)Oe.setTexture2DArray(I,0),Se=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,I.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,I.unpackAlignment);const Ae=z.getParameter(z.UNPACK_ROW_LENGTH),lt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vt=z.getParameter(z.UNPACK_SKIP_PIXELS),rn=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES),ct=W.isCompressedTexture?W.mipmaps[0]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ct.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(Se,$,N.x,N.y,N.z,ce,me,Ee,Le,Ge,ct.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Se,$,N.x,N.y,N.z,ce,me,Ee,Le,ct.data)):z.texSubImage3D(Se,$,N.x,N.y,N.z,ce,me,Ee,Le,Ge,ct),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vt),z.pixelStorei(z.UNPACK_SKIP_ROWS,rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),$===0&&I.generateMipmaps&&z.generateMipmap(Se),Re.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Oe.setTextureCube(A,0):A.isData3DTexture?Oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Oe.setTexture2DArray(A,0):Oe.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){S=0,w=0,E=null,Re.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Fr:Bd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?ke:vi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ay extends rp{}ay.prototype.isWebGL1Renderer=!0;class oy extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ly{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new D;class xu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gf=new D,xf=new _t,vf=new _t,cy=new D,Mf=new Je,gs=new D,ic=new yi,yf=new Je,rc=new xl;class uy extends On{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gs.fromBufferAttribute(t,n),this.applyBoneTransform(n,gs),this.boundingBox.expandByPoint(gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gs.fromBufferAttribute(t,n),this.applyBoneTransform(n,gs),this.boundingSphere.expandByPoint(gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ic.copy(this.boundingSphere),ic.applyMatrix4(i),e.ray.intersectsSphere(ic)!==!1&&(yf.copy(i).invert(),rc.copy(e.ray).applyMatrix4(yf),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;xf.fromBufferAttribute(i.attributes.skinIndex,e),vf.fromBufferAttribute(i.attributes.skinWeight,e),gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=vf.getComponent(r);if(a!==0){const o=xf.getComponent(r);Mf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cy.copy(gf).applyMatrix4(Mf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class sp extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hy extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Vt,u=Vt,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sf=new Je,fy=new Je;class vu{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:fy;Sf.multiplyMatrices(o,t[r]),Sf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Hd(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hy(t,e,e,Yn,Ui);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sp),this.bones.push(a),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Tf extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new Je,Ef=new Je,bo=[],bf=new Gi,dy=new Je,pa=new On,ma=new yi;class py extends On{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,dy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),bf.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(bf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),ma.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),Ef.multiplyMatrices(n,xs),pa.matrixWorld=Ef,pa.raycast(e,bo);for(let a=0,o=bo.length;a<o;a++){const l=bo[a];l.instanceId=r,l.object=this,t.push(l)}bo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mu extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Af=new D,wf=new D,Rf=new Je,sc=new xl,Ao=new yi;class Wa extends Tt{constructor(e=new Bn,t=new Mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Af.fromBufferAttribute(t,i-1),wf.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Af.distanceTo(wf);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(i),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Rf.copy(i).invert(),sc.copy(e.ray).applyMatrix4(Rf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,u=new D,h=new D,f=new D,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,v=y-1;x<v;x+=d){const S=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,w),sc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,v=y-1;x<v;x+=d){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),sc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Cf=new D,Pf=new D;class my extends Wa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cf.fromBufferAttribute(t,i),Pf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cf.distanceTo(Pf);e.setAttribute("lineDistance",new Sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _y extends Wa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ap extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lf=new Je,Oc=new xl,wo=new yi,Ro=new D;class gy extends Tt{constructor(e=new Bn,t=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;Lf.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(Lf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Ro.fromBufferAttribute(h,m),Df(Ro,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)Ro.fromBufferAttribute(h,g),Df(Ro,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Df(s,e,t,n,i,r,a){const o=Oc.distanceSqToPoint(s);if(o<t){const l=new D;Oc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class yu extends Bn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const w=S/t;h.x=-e*Math.cos(i+w*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+v,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],v=u[p][y],S=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&d.push(x,v,w),(p!==n-1||l<Math.PI)&&d.push(v,S,w)}this.setIndex(d),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Su extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mr extends Su{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ji(s,e,t){return op(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Co(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function If(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function lp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class eo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vy extends eo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:r=e,o=2*t-n;break;case Ph:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:a=e,l=2*n-t;break;case Ph:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let S=0;S!==o;++S)r[S]=p*a[u+S]+y*a[c+S]+x*a[l+S]+v*a[h+S];return r}}class My extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class yy extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new My(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ga:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=ji(n,r,a),this.values=ji(this.values,r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&op(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ji(this.times),t=ji(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ul,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ji(e,0,a),this.values=ji(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ji(this.times,0),t=ji(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=Ws;class sa extends Si{}sa.prototype.ValueTypeName="bool";sa.prototype.ValueBufferType=Array;sa.prototype.DefaultInterpolation=Ga;sa.prototype.InterpolantFactoryMethodLinear=void 0;sa.prototype.InterpolantFactoryMethodSmooth=void 0;class cp extends Si{}cp.prototype.ValueTypeName="color";class Ys extends Si{}Ys.prototype.ValueTypeName="number";class Sy extends eo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)pr.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Kr extends Si{InterpolantFactoryMethodLinear(e){return new Sy(this.times,this.values,this.getValueSize(),e)}}Kr.prototype.ValueTypeName="quaternion";Kr.prototype.DefaultInterpolation=Ws;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class aa extends Si{}aa.prototype.ValueTypeName="string";aa.prototype.ValueBufferType=Array;aa.prototype.DefaultInterpolation=Ga;aa.prototype.InterpolantFactoryMethodLinear=void 0;aa.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Si{}js.prototype.ValueTypeName="vector";class Ty{constructor(e,t=-1,n,i=A_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(by(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=xy(l);l=If(l,1,u),c=If(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ys(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];lp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Ys(".morphTargetInfluence["+_+"]",m,p))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(js,d+".position",f,"pos",i),n(Kr,d+".quaternion",f,"rot",i),n(js,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ey(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ys;case"vector":case"vector2":case"vector3":case"vector4":return js;case"color":return cp;case"quaternion":return Kr;case"bool":case"boolean":return sa;case"string":return aa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function by(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ey(s.type);if(s.times===void 0){const t=[],n=[];lp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ks={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ay{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const wy=new Ay;class oa{constructor(e){this.manager=e!==void 0?e:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}oa.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class Ry extends Error{constructor(e,t){super(e),this.response=t}}class up extends oa{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ks.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let w=0,E=u.length;w<E;w++){const L=u[w];L.onProgress&&L.onProgress(S)}p.enqueue(v),y()}})}}});return new Response(m)}else throw new Ry(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ks.add(e,c);const u=Ci[e];delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ci[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cy extends oa{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ks.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Va("img");function l(){u(),Ks.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Py extends oa{constructor(e){super(e)}load(e,t,n,i){const r=new Kt,a=new Cy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class yl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ac=new Je,Uf=new D,Nf=new D;class Tu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),ac.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ly extends Tu{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Dy extends yl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ly}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Of=new Je,_a=new D,oc=new D;class Iy extends Tu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ot(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),n.position.copy(_a),oc.copy(n.position),oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oc),n.updateMatrixWorld(),i.makeTranslation(-_a.x,-_a.y,-_a.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}}class hp extends yl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uy extends Tu{constructor(){super(new _u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fp extends yl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Uy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ny extends yl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Oy extends oa{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ks.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ks.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class Fy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ff(){return(typeof performance>"u"?Date:performance).now()}const Eu="\\[\\]\\.:\\/",By=new RegExp("["+Eu+"]","g"),bu="[^"+Eu+"]",ky="[^"+Eu.replace("\\.","")+"]",zy=/((?:WC+[\/:])*)/.source.replace("WC",bu),Hy=/(WCOD+)?/.source.replace("WCOD",ky),Gy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bu),Vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bu),Wy=new RegExp("^"+zy+Hy+Gy+Vy+"$"),Xy=["material","materials","bones","map"];class qy{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(By,"")}static parseTrackName(e){const t=Wy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Xy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=qy;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yy extends On{constructor(e,t,n){const i=new yu(t,4,2),r=new Qi({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Bf=new D,Po=new D,kf=new D;class jy extends Tt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Bn;i.setAttribute("position",new Sn([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Mu({fog:!1,toneMapped:!1});this.lightPlane=new Wa(i,r),this.add(this.lightPlane),i=new Bn,i.setAttribute("position",new Sn([0,0,0,0,0,1],3)),this.targetLine=new Wa(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Bf.setFromMatrixPosition(this.light.matrixWorld),Po.setFromMatrixPosition(this.light.target.matrixWorld),kf.subVectors(Po,Bf),this.lightPlane.lookAt(Po),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Po),this.targetLine.scale.z=kf.length()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);function zf(s,e){if(e===w_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Lc||e===Fd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Lc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Ky extends oa{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new tS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new fS(t)})}load(e,t,n,i){const r=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Fc.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new up(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===dp){try{a[st.KHR_BINARY_GLTF]=new dS(e)}catch(h){i&&i(h);return}r=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new AS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:a[h]=new Jy;break;case st.KHR_DRACO_MESH_COMPRESSION:a[h]=new pS(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[h]=new mS;break;case st.KHR_MESH_QUANTIZATION:a[h]=new _S;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $y(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zy{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fp(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hp(u),c.distance=h;break;case"spot":c=new Dy(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Jy{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Qi}extendParams(e,t,n){const i=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ke))}return Promise.all(i)}}class Qy{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class eS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ot(o,o)}return Promise.all(r)}}class tS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class nS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ke)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class iS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class rS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new qe(o[0],o[1],o[2]),Promise.all(r)}}class sS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class aS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new qe(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ke)),Promise.all(r)}}class oS{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class lS{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class cS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class uS{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hS{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class fS{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Je,m=new D,p=new pr,y=new D(1,1,1),x=new py(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(m,p,y));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Tt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const dp="glTF",ga=12,Hf={JSON:1313821514,BIN:5130562};class dS{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ga,r=new DataView(e,ga);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Hf.JSON){const c=new Uint8Array(e,ga+a,o);this.content=n.decode(c)}else if(l===Hf.BIN){const c=ga+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Bc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Bc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Is[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],_=l[d];_!==void 0&&(g.normalized=_)}h(f)},o,c)})})}}class mS{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _S{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class pp extends eo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,y=1-m,x=p-f+h;for(let v=0;v!==o;v++){const S=a[_+v+o],w=a[_+v+l]*u,E=a[g+v+o],L=a[g+v]*u;r[v]=y*S+x*w+m*E+p*L}return r}}const gS=new pr;class xS extends pp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gS.fromArray(r).normalize().toArray(r),r}}const Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gf={9728:Vt,9729:vn,9984:Pc,9985:Pd,9986:Wo,9987:qr},Vf={33071:qn,33648:nl,10497:Gs},lc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vS={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Ga},cc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Su({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),s.DefaultMaterial}function Tr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function SS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TS(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+uc(t.attributes):e=s.indices+":"+uc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+uc(s.targets[n]);return e}function uc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function kc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ES(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const bS=new Je;class AS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Py(this.options.manager):this.textureLoader=new Oy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new up(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};Tr(r,o,i),Zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Fc.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=lc[i.type],o=Is[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new gn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=lc[i.type],c=Is[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,p*d,i.count*d/u),x=new ly(_,d/u),t.cache.add(y,x)),m=new xu(x,l,f%d/u,g)}else o===null?_=new c(i.count*l):_=new c(o,f,i.count*l),m=new gn(_,l,g);if(i.sparse!==void 0){const p=lc.SCALAR,y=Is[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new y(a[1],x,i.sparse.count*p),w=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new gn(m.array.slice(),m.itemSize,m.normalized));for(let E=0,L=S.length;E<L;E++){const M=S[E];if(m.setX(M,w[E*l]),l>=2&&m.setY(M,w[E*l+1]),l>=3&&m.setZ(M,w[E*l+2]),l>=4&&m.setW(M,w[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Gf[f.magFilter]||vn,u.minFilter=Gf[f.minFilter]||qr,u.wrapS=Vf[f.wrapS]||Gs,u.wrapT=Vf[f.wrapT]||Gs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Kt(_);m.needsUpdate=!0,f(m)}),t.load(Fc.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||ES(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new ap,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Mu,mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Su}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ke)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=hi);const u=r.alphaMode||cc.OPAQUE;if(u===cc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===cc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ot(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&a!==Qi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qi&&(o.emissive=new qe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&a!==Qi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ke)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Zi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Tr(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Wf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=TS(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Wf(new Bn,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?MS(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=a[d];let p;const y=c[d];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new uy(_,y):new On(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=zf(p.geometry,Fd):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=zf(p.geometry,Lc));else if(m.mode===Gn.LINES)p=new my(_,y);else if(m.mode===Gn.LINE_STRIP)p=new Wa(_,y);else if(m.mode===Gn.LINE_LOOP)p=new _y(_,y);else if(m.mode===Gn.POINTS)p=new gy(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&SS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),m.extensions&&Tr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Tr(i,h[0],r),h[0];const f=new Dr;r.extensions&&Tr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pn(Q_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new _u(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new Je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vu(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let y=0,x=f.length;y<x;y++){const v=f[y],S=d[y],w=g[y],E=_[y],L=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,S,w,E,L);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new Ty(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,bS)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new sp:c.length>1?u=new Dr:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Zi(u,r),r.extensions&&Tr(n,u,r),r.matrix!==void 0){const h=new Je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Dr;n.name&&(r.name=i.createUniqueName(n.name)),Zi(r,n),n.extensions&&Tr(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof mi||f instanceof Kt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Ki[r.path]===Ki.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ki[r.path]){case Ki.weights:c=Ys;break;case Ki.rotation:c=Kr;break;case Ki.position:case Ki.scale:c=js;break;default:switch(n.itemSize){case 1:c=Ys;break;case 2:case 3:default:c=js;break}break}const u=i.interpolation!==void 0?vS[i.interpolation]:Ws,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Ki[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=kc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Kr?xS:pp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wS(s,e,t){const n=e.attributes,i=new Gi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){const u=kc(Is[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=kc(Is[f.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new yi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Wf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Bc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Zi(s,e),wS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yS(s,e.targets,t):s})}function Li(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function mp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$s={duration:.5,overwrite:!1,delay:0},Au,tn,Rt,jn=1e8,mt=1/jn,zc=Math.PI*2,RS=zc/4,CS=0,_p=Math.sqrt,PS=Math.cos,LS=Math.sin,Wt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},zi=function(e){return typeof e=="number"},wu=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},Ru=function(){return typeof window<"u"},Lo=function(e){return Ct(e)||Wt(e)},gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Hc=/(?:-?\.?\d|\.)+/gi,xp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vp=/[+-]=-?[.\d]+/,Mp=/[^,'"\[\]\s]+/gi,DS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,Vn,Gc,Cu,kn={},sl={},yp,Sp=function(e){return(sl=$r(e,kn))&&An},Pu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},al=function(e,t){return!t&&console.warn(e)},Tp=function(e,t){return e&&(kn[e]=t)&&sl&&(sl[e]=t)||kn},Xa=function(){return 0},IS={suppressEvents:!0,isStart:!0,kill:!1},qo={suppressEvents:!0,kill:!1},US={suppressEvents:!0},Lu={},lr=[],Vc={},Ep,In={},fc={},Xf=30,Yo=[],Du="",Iu=function(e){var t=e[0],n,i;if(Mi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yo.length;i--&&!Yo[i].targetTest(t););n=Yo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new jp(e[i],n)))||e.splice(i,1);return e},kr=function(e){return e._gsap||Iu(Kn(e))[0]._gsap},bp=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():wu(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},Yt=function(e){return Math.round(e*1e7)/1e7||0},Us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},NS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ol=function(){var e=lr.length,t=lr.slice(0),n,i;for(Vc={},lr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ap=function(e,t,n,i){lr.length&&!tn&&ol(),e.render(t,n,i||tn&&t<0&&(e._initted||e._startAt)),lr.length&&!tn&&ol()},wp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mp).length<2?t:Wt(e)?e.trim():e},Rp=function(e){return e},Jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$r=function(e,t){for(var n in t)e[n]=t[n];return e},qf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ll=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Pa=function(e){var t=e.parent||At,n=e.keyframes?OS(nn(e.keyframes)):Jn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},FS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Cp=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},zr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},BS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wc=function(e,t,n,i){return e._startAt&&(tn?e._startAt.revert(qo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kS=function s(e){return!e||e._ts&&s(e.parent)},Yf=function(e){return e._repeat?Zs(e._tTime,e=e.duration()+e._rDelay)*e:0},Zs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},cl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tl=function(e){return e._end=Yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||mt)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Yt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tl(e),n._dirty||zr(n,e)),e},Pp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=cl(e.rawTime(),t),(!t._dur||to(0,t.totalDuration(),n)-t._tTime>mt)&&t.render(n,!0)),zr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-mt}},di=function(e,t,n,i){return t.parent&&hr(t),t._start=Yt((zi(n)?n:n||e!==At?Hn(e,n,t):e._time)+t._delay),t._end=Yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cp(e,t,"_first","_last",e._sort?"_start":0),Xc(t)||(e._recent=t),i||Pp(e,t),e._ts<0&&El(e,e._tTime),e},Lp=function(e,t){return(kn.ScrollTrigger||Pu("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},Dp=function(e,t,n,i,r){if(Nu(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!tn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ep!==Un.frame)return lr.push(e),e._lazy=[r,i],1},zS=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Xc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},HS=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&zS(e)&&!(!e._initted&&Xc(e))||(e._ts<0||e._dp._ts<0)&&!Xc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=to(0,e._tDur,t),u=Zs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Zs(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||tn||i||e._zTime===mt||!t&&e._zTime){if(!e._initted&&Dp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?mt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Wc(e,t,n,!0),e._onUpdate&&!n&&$n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&hr(e,1),!n&&!tn&&($n(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Js=function(e,t,n,i){var r=e._repeat,a=Yt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Yt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&Tl(e),n||zr(e.parent,e),e},jf=function(e){return e instanceof Mn?zr(e):Js(e,e._dur)},VS={_start:0,endTime:Xa,totalDuration:Xa},Hn=function s(e,t,n){var i=e.labels,r=e._recent||VS,a=e.duration()>=jn?r.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},La=function(e,t,n){var i=zi(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;a.immediateRender=Tn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ut(t[0],a,t[r+1])},_r=function(e,t){return e||e===0?t(e):t},to=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!Wt(e)||!(t=DS.exec(e))?"":t[1]},WS=function(e,t,n){return _r(n,function(i){return to(e,t,i)})},qc=[].slice,Ip=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==Vn},XS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Wt(i)&&!t||Ip(i,1)?(r=n).push.apply(r,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):Wt(e)&&!n&&(Gc||!Qs())?qc.call((t||Cu).querySelectorAll(e),0):nn(e)?XS(e,n):Ip(e)?qc.call(e,0):e?[e]:[]},Yc=function(e){return e=Kn(e)[0]||al("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?al("Invalid scope")||Cu.createElement("div"):e)}},Up=function(e){return e.sort(function(){return .5-Math.random()})},Np=function(e){if(Ct(e))return e;var t=Mi(e)?e:{each:e},n=Hr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=a[_],p,y,x,v,S,w,E,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(E=-jn;E<(E=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=a[_]=[],p=l?Math.min(M,_)*u-.5:i%M,y=M===jn?0:l?_*h/M-.5:i/M|0,E=0,L=jn,w=0;w<_;w++)x=w%M-p,v=y-(w/M|0),m[w]=S=c?Math.abs(c==="y"?v:x):_p(x*x+v*v),S>E&&(E=S),S<L&&(L=S);i==="random"&&Up(m),m.max=E-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=en(t.amount||t.each)||0,n=n&&_<0?Xp(n):n}return _=(m[f]-m.min)/m.max||0,Yt(m.b+(n?n(_):_)*m.v)+m.u}},jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Yt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(zi(n)?0:en(n))}},Op=function(e,t){var n=nn(e),i,r;return!n&&Mi(e)&&(i=n=e.radius||jn,e.values?(e=Kn(e.values),(r=!zi(e[0]))&&(i*=i)):e=jc(e.increment)),_r(t,n?Ct(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=jn,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||zi(a)?u:u+en(a)}:jc(e))},Fp=function(e,t,n,i){return _r(nn(e)?!t:n===!0?!!(n=0):!i,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},YS=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},jS=function(e,t,n){return kp(e,t,0,1,n)},Bp=function(e,t,n){return _r(n,function(i){return e[~~t(i)]})},KS=function s(e,t,n){var i=t-e;return nn(e)?Bp(e,s(0,e.length),t):_r(n,function(r){return(i+(r-e)%i)%i+e})},$S=function s(e,t,n){var i=t-e,r=i*2;return nn(e)?Bp(e,s(0,e.length-1),t):_r(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},qa=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Mp:Hc),n+=e.substr(t,i-t)+Fp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},kp=function(e,t,n,i,r){var a=t-e,o=i-n;return _r(r,function(l){return n+((l-e)/a*o||0)})},ZS=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Wt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=$r(nn(e)?[]:{},e));if(!u){for(l in t)Uu.call(o,e,l,"get",t[l]);r=function(g){return Bu(g,o)||(a?e.p:e)}}}return _r(n,r)},Kf=function(e,t,n){var i=e.labels,r=jn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},$n=function(e,t,n){var i=e.vars,r=i[t],a=Rt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&lr.length&&ol(),o&&(Rt=o),u=l?r.apply(c,l):r.call(c),Rt=a,u},Sa=function(e){return hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!tn),e.progress()<1&&$n(e,"onInterrupt"),e},Rs,zp=[],Hp=function(e){if(Ru()&&e){e=!e.name&&e.default||e;var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Xa,render:Bu,add:Uu,kill:dT,modifier:fT,rawVars:0},a={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(Qs(),e!==i){if(In[t])return;Jn(i,Jn(ll(e,r),a)),$r(i.prototype,$r(r,ll(e,a))),In[i.prop=t]=i,e.targetTest&&(Yo.push(i),Lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Tp(t,i),e.register&&e.register(An,i,bn)}else e&&zp.push(e)},pt=255,Ta={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},dc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Gp=function(e,t,n){var i=e?zi(e)?[e>>16,e>>8&pt,e&pt]:0:Ta.black,r,a,o,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ta[e])i=Ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&pt,i&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Hc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=dc(l+1/3,r,a),i[1]=dc(l,r,a),i[2]=dc(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(xp),n&&i.length<4&&(i[3]=1),i}else i=e.match(Hc)||Ta.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/pt,a=i[1]/pt,o=i[2]/pt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vp=function(e){var t=[],n=[],i=-1;return e.split(cr).forEach(function(r){var a=r.match(ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},$f=function(e,t,n){var i="",r=(e+i).match(cr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Gp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Vp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(cr,"1").split(ws),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(cr),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},cr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ta)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),JS=/hsl[a]?\(/,Wp=function(e){var t=e.join(" "),n;if(cr.lastIndex=0,cr.test(t))return n=JS.test(t),e[1]=$f(e[1],n),e[0]=$f(e[0],n,Vp(e[1])),!0},Ya,Un=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,g=function _(m){var p=s()-i,y=m===!0,x,v,S,w;if(p>e&&(n+=p-t),i+=p,S=i-n,x=S-a,(x>0||y)&&(w=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,a+=x+(x>=r?4:r-x),v=1),y||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](S,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){yp&&(!Gc&&Ru()&&(Vn=Gc=window,Cu=Vn.document||{},kn.gsap=An,(Vn.gsapVersions||(Vn.gsapVersions=[])).push(An.version),Sp(sl||Vn.GreenSockGlobals||!Vn.gsap&&Vn||{}),u=Vn.requestAnimationFrame,zp.forEach(Hp)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Ya=1,g(2))},sleep:function(){(u?Vn.cancelAnimationFrame:clearTimeout)(l),Ya=0,c=Xa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,p,y){var x=p?function(v,S,w,E){m(v,S,w,E),h.remove(x)}:m;return h.remove(m),o[y?"unshift":"push"](x),Qs(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h}(),Qs=function(){return!Ya&&Un.wake()},at={},QS=/^[\d.\-M][\d.\-,\s]/,eT=/["']/g,tT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(eT,"").trim():+c,i=l.substr(o+1).trim();return t},nT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},iT=function(e){var t=(e+"").split("("),n=at[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tT(t[1])]:nT(e).split(",").map(wp)):at._CE&&QS.test(e)?at._CE("",e):n},Xp=function(e){return function(t){return 1-e(1-t)}},qp=function s(e,t){for(var n=e._first,i;n;)n instanceof Mn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Hr=function(e,t){return e&&(Ct(e)?e:at[e]||iT(e))||t},es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return En(e,function(o){at[o]=kn[o]=r,at[a=o.toLowerCase()]=n;for(var l in r)at[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[o+"."+l]=r[l]}),r},Yp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/zc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*LS((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Yp(o);return r=zc/r,l.config=function(c,u){return s(e,c,u)},l},mc=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Yp(n);return i.config=function(r){return s(e,r)},i};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;es(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;es("Elastic",pc("in"),pc("out"),pc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};es("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);es("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});es("Circ",function(s){return-(_p(1-s*s)-1)});es("Sine",function(s){return s===1?1:-PS(s*RS)+1});es("Back",mc("in"),mc("out"),mc());at.SteppedEase=at.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-mt;return function(o){return((i*to(0,a,o)|0)+r)*n}}};$s.ease=at["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Du+=s+","+s+"Params,"});var jp=function(e,t){this.id=CS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bp,this.set=t?t.getSetter:Fu},ja=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Js(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Ya||Un.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||Pp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===mt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ap(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Yf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Yf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Zs(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-mt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?cl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-mt?0:this._rts,this.totalTime(to(-Math.abs(this._delay),this._tDur,i),!0),Tl(this),BS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==mt&&(this._tTime-=mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=US);var i=tn;return tn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Hn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-mt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Ct(n)?n:Rp,o=function(){var c=i.then;i.then=null,Ct(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Sa(this)},s}();Jn(ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-mt,_prom:0,_ps:!1,_rts:1});var Mn=function(s){mp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),At&&di(n.parent||At,Li(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Lp(Li(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return La(0,arguments,this),this},t.from=function(i,r,a){return La(1,arguments,this),this},t.fromTo=function(i,r,a,o){return La(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Pa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ut(i,r,Hn(this,a),1),this},t.call=function(i,r,a){return di(this,Ut.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ut(i,a,Hn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Pa(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Pa(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Yt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,y,x,v,S,w,E;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,x=this._ts,p=!x,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Yt(u%m),u===l?(_=this._repeat,f=c):(_=~~(u/m),_&&_===u/m&&(f=c,_--),f>c&&(f=c)),S=Zs(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),w&&_&1&&(f=c-f,E=1),_!==S&&!this._lock){var L=w&&S&1,M=L===(w&&_&1);if(_<S&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Yt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;qp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=GS(this,Yt(o),Yt(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!_&&($n(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-mt);break}}d=g}else{d=this._last;for(var b=i<0?i:f;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,r,a||tn&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=b?-mt:mt);break}}d=g}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-mt)._zTime=f>=o?1:-1,this._ts))return this._start=v,Tl(this),this.render(i,r,a);this._onUpdate&&!r&&$n(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&hr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&($n(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(zi(r)||(r=Hn(this,r,i)),!(i instanceof ja)){if(nn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Wt(i))return this.addLabel(i,r);if(Ct(i))i=Ut.delayedCall(0,i);else return this}return this!==i?di(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ut?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(Sl(this,i),i===this._recent&&(this._recent=this._last),zr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yt(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Hn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=Ut.delayedCall(0,r||Xa,a);return o.data="isPause",this._hasPause=1,di(this,o,Hn(this,i))},t.removePause=function(i){var r=this._first;for(i=Hn(this,i);r;)r._start===i&&r.data==="isPause"&&hr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)er!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Kn(i),l=this._first,c=zi(r),u;l;)l instanceof Ut?NS(l._targets,o)&&(c?(!er||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Hn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ut.to(a,Jn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||mt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Js(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Jn({startAt:{time:Hn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kf(this,Hn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kf(this,Hn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+mt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return zr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=jn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,di(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Js(a,a===At&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(At._ts&&(Ap(At,cl(i,At)),Ep=Un.frame),Un.frame>=Xf){Xf+=Fn.autoSleep||120;var r=At._first;if((!r||!r._ts)&&Fn.autoSleep&&Un._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Un.sleep()}}},e}(ja);Jn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rT=function(e,t,n,i,r,a,o){var l=new bn(this._pt,e,t,0,1,em,null,r),c=0,u=0,h,f,d,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=qa(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),f=n.match(hc)||[];h=hc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Us(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=hc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(vp.test(i)||p)&&(l.e=0),this._pt=l,l},Uu=function(e,t,n,i,r,a,o,l,c,u){Ct(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ct(h)?c?cT:Jp:Ou,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=qa(i)),i.charAt(1)==="="&&(g=Us(f,i)+(en(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Kc)return!isNaN(f*i)&&i!==""?(g=new bn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?hT:Qp,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Pu(t,i),rT.call(this,e,t,f,i,d,l||Fn.stringFilter,c))},sT=function(e,t,n,i,r){if(Ct(e)&&(e=Da(e,r,t,n,i)),!Mi(e)||e.style&&e.nodeType||nn(e)||gp(e))return Wt(e)?Da(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=Da(e[o],r,t,n,i);return a},Kp=function(e,t,n,i,r,a){var o,l,c,u;if(In[e]&&(o=new In[e]).init(r,o.rawVars?t[e]:sT(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new bn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},er,Kc,Nu=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,p=e._startAt,y=e._targets,x=e.parent,v=x&&x.data==="nested"?x.vars.targets:y,S=e._overwrite==="auto"&&!Au,w=e.timeline,E,L,M,b,j,G,U,O,k,Z,F,q,J;if(w&&(!g||!r)&&(r="none"),e._ease=Hr(r,$s.ease),e._yEase=d?Xp(Hr(d===!0?r:d,$s.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!i.runBackwards,!w||g&&!i.stagger){if(O=y[0]?kr(y[0]).harness:0,q=O&&i[O.prop],E=ll(i,Lu),p&&(p._zTime<0&&p.progress(1),t<0&&f&&o&&!_?p.render(-1,!0):p.revert(f&&m?qo:IS),p._lazy=0),a){if(hr(e._startAt=Ut.set(y,Jn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!p&&Tn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn||!o&&!_)&&e._startAt.revert(qo),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!p){if(t&&(o=!1),M=Jn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Tn(l),immediateRender:o,stagger:0,parent:x},E),q&&(M[O.prop]=q),hr(e._startAt=Ut.set(y,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(tn?e._startAt.revert(qo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,mt,mt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Tn(l)||l&&!m,L=0;L<y.length;L++){if(j=y[L],U=j._gsap||Iu(y)[L]._gsap,e._ptLookup[L]=Z={},Vc[U.id]&&lr.length&&ol(),F=v===y?L:v.indexOf(j),O&&(k=new O).init(j,q||E,e,F,v)!==!1&&(e._pt=b=new bn(e._pt,j,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(R){Z[R]=b}),k.priority&&(G=1)),!O||q)for(M in E)In[M]&&(k=Kp(M,E,e,F,j,v))?k.priority&&(G=1):Z[M]=b=Uu.call(e,j,M,"get",E[M],F,v,0,i.stringFilter);e._op&&e._op[L]&&e.kill(j,e._op[L]),S&&e._pt&&(er=e,At.killTweensOf(j,Z,e.globalTime(t)),J=!e.parent,er=0),e._pt&&l&&(Vc[U.id]=1)}G&&tm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&w.render(jn,!0,!0)},aT=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Kc=1,e.vars[t]="+=0",Nu(e,o),Kc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Lt(n)+en(u.e)),u.b&&(u.b=c.s+en(u.b))},oT=function(e,t){var n=e[0]?kr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=$r({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},lT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(nn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},Da=function(e,t,n,i,r){return Ct(e)?e.call(t,n,i,r):Wt(e)&&~e.indexOf("random(")?qa(e):e},$p=Du+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Zp={};En($p+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zp[s]=1});var Ut=function(s){mp(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Pa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||At,x=(nn(n)||gp(n)?zi(n[0]):"length"in i)?[n]:Kn(n),v,S,w,E,L,M,b,j;if(o._targets=x.length?Iu(x):al("GSAP target "+n+" not found. https://greensock.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||f||Lo(c)||Lo(u)){if(i=o.vars,v=o.timeline=new Mn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Li(o),v._start=0,f||Lo(c)||Lo(u)){if(E=x.length,b=f&&Np(f),Mi(f))for(L in f)~$p.indexOf(L)&&(j||(j={}),j[L]=f[L]);for(S=0;S<E;S++)w=ll(i,Zp),w.stagger=0,p&&(w.yoyoEase=p),j&&$r(w,j),M=x[S],w.duration=+Da(c,Li(o),S,M,x),w.delay=(+Da(u,Li(o),S,M,x)||0)-o._delay,!f&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(M,w,b?b(S,M,x):0),v._ease=at.none;v.duration()?c=u=0:o.timeline=0}else if(g){Pa(Jn(v.vars.defaults,{ease:"none"})),v._ease=Hr(g.ease||i.ease||"none");var G=0,U,O,k;if(nn(g))g.forEach(function(Z){return v.to(x,Z,">")}),v.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||lT(L,g[L],w,g.easeEach);for(L in w)for(U=w[L].sort(function(Z,F){return Z.t-F.t}),G=0,S=0;S<U.length;S++)O=U[S],k={ease:O.e,duration:(O.t-(S?U[S-1].t:0))/100*c},k[L]=O.v,v.to(x,k,G),G+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Au&&(er=Li(o),At.killTweensOf(x),er=0),di(y,Li(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Yt(y._time)&&Tn(h)&&kS(Li(o))&&y.data!=="nested")&&(o._tTime=-mt,o.render(Math.max(0,-u)||0)),m&&Lp(Li(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-mt&&!u?l:i<mt?0:i,f,d,g,_,m,p,y,x,v;if(!c)HS(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,a);if(f=Yt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,f=c-f),m=Zs(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&qp(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(Yt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Dp(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!r&&!g&&($n(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:!f&&p?-mt:x._dur*x._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Wc(this,i,r,a),$n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&$n(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Wc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&hr(this,1),!r&&!(u&&!o)&&(h||o||p)&&($n(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Ya||Un.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Nu(this,l),c=this._ease(l/this._dur),aT(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(El(this,0),this.parent||Cp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Sa(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,er&&er.vars.overwrite!==!0)._first||Sa(this),this.parent&&a!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Kn(i):o,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&FS(o,l))return r==="all"&&(this._pt=0),Sa(this);for(h=this._op=this._op||[],r!=="all"&&(Wt(r)&&(_={},En(r,function(y){return _[y]=1}),r=_),r=oT(o,r)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Sa(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return La(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return La(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return At.killTweensOf(i,r,a)},e}(ja);Jn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(s){Ut[s]=function(){var e=new Mn,t=qc.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ou=function(e,t,n){return e[t]=n},Jp=function(e,t,n){return e[t](n)},cT=function(e,t,n,i){return e[t](i.fp,n)},uT=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Ct(e[t])?Jp:wu(e[t])&&e.setAttribute?uT:Ou},Qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},em=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Bu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fT=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},dT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},pT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},tm=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},bn=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Qp,this.d=l||this,this.set=c||Ou,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=pT,this.m=n,this.mt=r,this.tween=i},s}();En(Du+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Lu[s]=1});kn.TweenMax=kn.TweenLite=Ut;kn.TimelineLite=kn.TimelineMax=Mn;At=new Mn({sortChildren:!1,defaults:$s,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=Wp;var Gr=[],jo={},mT=[],Zf=0,_T=0,_c=function(e){return(jo[e]||mT).map(function(t){return t()})},$c=function(){var e=Date.now(),t=[];e-Zf>2&&(_c("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Vn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),_c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Zf=e,_c("matchMedia"))},nm=function(){function s(t,n){this.selector=n&&Yc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_T++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ct(n)&&(r=i,i=n,n=Ct);var a=this,o=function(){var c=Rt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Yc(r)),Rt=a,h=i.apply(a,arguments),Ct(h)&&a._r.push(h),Rt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ct?o(a):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Ut)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Gr.length;o--;)Gr[o].id===this.id&&Gr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),gT=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Mi(n)||(n={matches:n});var a=new nm(0,r||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Vn.matchMedia(n[c]),l&&(Gr.indexOf(a)<0&&Gr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener($c):l.addEventListener("change",$c)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ul={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hp(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=Kn(e)[0]);var r=kr(e||{}).get,a=n?Rp:wp;return n==="native"&&(n=""),e&&(t?a((In[t]&&In[t].get||r)(e,t,n,i)):function(o,l,c){return a((In[o]&&In[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=In[t],o=kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Rs._pt=0,h.init(e,n?u+n:u,Rs,0,[e]),h.render(1,h),Rs._pt&&Bu(1,Rs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=An.to(e,$r((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,$s.ease)),qf($s,e||{})},config:function(e){return qf(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!In[o]&&!kn[o]&&al(t+" effect requires "+o+" plugin.")}),fc[t]=function(o,l,c){return n(Kn(o),Jn(l||{},r),c)},a&&(Mn.prototype[t]=function(o,l,c){return this.add(fc[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){at[e]=Hr(t)},parseEase:function(e,t){return arguments.length?Hr(e,t):at},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,r;for(n.smoothChildTiming=Tn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&di(n,i,i._start-i._delay),i=r;return di(At,n,0),n},context:function(e,t){return e?new nm(e,t):Rt},matchMedia:function(e){return new gT(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||$c()},addEventListener:function(e,t){var n=jo[e]||(jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=jo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:KS,wrapYoyo:$S,distribute:Np,random:Fp,snap:Op,normalize:jS,getUnit:en,clamp:WS,splitColor:Gp,toArray:Kn,selector:Yc,mapRange:kp,pipe:qS,unitize:YS,interpolate:ZS,shuffle:Up},install:Sp,effects:fc,ticker:Un,updateRoot:Mn.updateRoot,plugins:In,globalTimeline:At,core:{PropTween:bn,globals:Tp,Tween:Ut,Timeline:Mn,Animation:ja,getCache:kr,_removeLinkedListItem:Sl,reverting:function(){return tn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Au=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ul[s]=Ut[s]});Un.add(Mn.updateRoot);Rs=ul.to({},{duration:0});var xT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vT=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=xT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},gc=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Wt(r)&&(l={},En(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}vT(o,r)}}}},An=ul.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},gc("roundProps",jc),gc("modifiers"),gc("snap",Op))||ul;Ut.version=Mn.version=An.version="3.12.2";yp=1;Ru()&&Qs();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jf,tr,Ns,ku,Ir,Qf,zu,MT=function(){return typeof window<"u"},Hi={},Rr=180/Math.PI,Os=Math.PI/180,vs=Math.atan2,ed=1e8,Hu=/([A-Z])/g,yT=/(left|right|width|margin|padding|x)/i,ST=/[\s,\(]\S/,pi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ET=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},im=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},rm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},AT=function(e,t,n){return e.style[t]=n},wT=function(e,t,n){return e.style.setProperty(t,n)},RT=function(e,t,n){return e._gsap[t]=n},CT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},PT=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},LT=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},wt="transform",oi=wt+"Origin",DT=function s(e,t){var n=this,i=this.target,r=i.style;if(e in Hi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=pi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Di(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Di(i,e);else return pi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=wt}(r||t)&&this.props.push(e,t,r[e])},sm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Hu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=zu(),(!r||!r.isStart)&&!n[wt]&&(sm(n),i.uncache=1)}},am=function(e,t){var n={target:e,props:[],revert:IT,save:DT};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},om,Jc=function(e,t){var n=tr.createElementNS?tr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tr.createElement(e);return n.style?n:tr.createElement(e)},_i=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,ea(t)||t,1)||""},td="O,Moz,ms,Ms,Webkit".split(","),ea=function(e,t,n){var i=t||Ir,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(td[a]+e in r););return a<0?null:(a===3?"ms":a>=0?td[a]:"")+e},Qc=function(){MT()&&window.document&&(Jf=window,tr=Jf.document,Ns=tr.documentElement,Ir=Jc("div")||{style:{}},Jc("div"),wt=ea(wt),oi=wt+"Origin",Ir.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",om=!!ea("perspective"),zu=An.core.reverting,ku=1)},xc=function s(e){var t=Jc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Ns.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ns.removeChild(t),this.style.cssText=r,a},nd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},lm=function(e){var t;try{t=e.getBBox()}catch{t=xc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xc||(t=xc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+nd(e,["x","cx","x1"])||0,y:+nd(e,["y","cy","y1"])||0,width:0,height:0}:t},cm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&lm(e))},Ka=function(e,t){if(t){var n=e.style;t in Hi&&t!==oi&&(t=wt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Hu,"-$1").toLowerCase())):n.removeAttribute(t)}},nr=function(e,t,n,i,r,a){var o=new bn(e._pt,t,n,0,1,a?rm:im);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},id={deg:1,rad:1,turn:1},UT={grid:1,flex:1},fr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ir.style,l=yT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;return i===a||!r||id[i]||id[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&cm(e),(d||a==="%")&&(Hi[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],Lt(d?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===tr||!_.appendChild)&&(_=tr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Un.time&&!m.uncache?Lt(r/m.width*h):((d||a==="%")&&!UT[_i(_,"display")]&&(o.position=_i(e,"position")),_===e&&(o.position="static"),_.appendChild(Ir),g=Ir[u],_.removeChild(Ir),o.position="absolute",l&&d&&(m=kr(_),m.time=Un.time,m.width=_[u]),Lt(f?g*r/h:g&&r?h/g*r:0))))},Di=function(e,t,n,i){var r;return ku||Qc(),t in pi&&t!=="transform"&&(t=pi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(r=Za(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:fl(_i(e,oi))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=hl[t]&&hl[t](e,t,n)||_i(e,t)||bp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?fr(e,t,r,n)+n:r},NT=function(e,t,n,i){if(!n||n==="none"){var r=ea(t,e,1),a=r&&_i(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=_i(e,"borderTopColor"))}var o=new bn(this._pt,e.style,t,0,1,em),l=0,c=0,u,h,f,d,g,_,m,p,y,x,v,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=_i(e,t)||i,e.style[t]=n),u=[n,i],Wp(u),n=u[0],i=u[1],f=n.match(ws)||[],S=i.match(ws)||[],S.length){for(;h=ws.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Us(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=ws.lastIndex-x.length,x||(x=x||Fn.units[t]||v,l===i.length&&(i+=x,o.e+=x)),v!==x&&(d=fr(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?rm:im;return vp.test(i)&&(o.e=0),this._pt=o,o},rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},OT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=rd[n]||n,t[1]=rd[i]||i,t.join(" ")},FT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Hi[o]&&(l=1,o=o==="transformOrigin"?oi:wt),Ka(n,o);l&&(Ka(n,wt),a&&(a.svg&&n.removeAttribute("transform"),Za(n,1),a.uncache=1,sm(i)))}},hl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new bn(e._pt,t,n,0,0,FT);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},$a=[1,0,0,1,0,0],um={},hm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sd=function(e){var t=_i(e,wt);return hm(t)?$a:t.substr(7).match(xp).map(Lt)},Gu=function(e,t){var n=e._gsap||kr(e),i=e.style,r=sd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?$a:r):(r===$a&&!e.offsetParent&&e!==Ns&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Ns.appendChild(e)),r=sd(e),l?i.display=l:Ka(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ns.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},eu=function(e,t,n,i,r,a){var o=e._gsap,l=r||Gu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,S=parseFloat(x[1])||0,w,E,L,M;n?l!==$a&&(E=d*m-g*_)&&(L=v*(m/E)+S*(-_/E)+(_*y-m*p)/E,M=v*(-g/E)+S*(d/E)-(d*y-g*p)/E,v=L,S=M):(w=lm(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),S=w.y+(~(x[1]||x[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(p=v-c,y=S-u,o.xOffset=h+(p*d+y*_)-p,o.yOffset=f+(p*g+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[oi]="0px 0px",a&&(nr(a,o,"xOrigin",c,v),nr(a,o,"yOrigin",u,S),nr(a,o,"xOffset",h,o.xOffset),nr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},Za=function(e,t){var n=e._gsap||new jp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=_i(e,oi)||"0",u,h,f,d,g,_,m,p,y,x,v,S,w,E,L,M,b,j,G,U,O,k,Z,F,q,J,R,B,K,oe,ne,se;return u=h=f=_=m=p=y=x=v=0,d=g=1,n.svg=!!(e.getCTM&&cm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),E=Gu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",F=""):F=!t&&e.getAttribute("data-svg-origin"),eu(e,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,w=n.yOrigin||0,E!==$a&&(j=E[0],G=E[1],U=E[2],O=E[3],u=k=E[4],h=Z=E[5],E.length===6?(d=Math.sqrt(j*j+G*G),g=Math.sqrt(O*O+U*U),_=j||G?vs(G,j)*Rr:0,y=U||O?vs(U,O)*Rr+_:0,y&&(g*=Math.abs(Math.cos(y*Os))),n.svg&&(u-=S-(S*j+w*U),h-=w-(S*G+w*O))):(se=E[6],oe=E[7],R=E[8],B=E[9],K=E[10],ne=E[11],u=E[12],h=E[13],f=E[14],L=vs(se,K),m=L*Rr,L&&(M=Math.cos(-L),b=Math.sin(-L),F=k*M+R*b,q=Z*M+B*b,J=se*M+K*b,R=k*-b+R*M,B=Z*-b+B*M,K=se*-b+K*M,ne=oe*-b+ne*M,k=F,Z=q,se=J),L=vs(-U,K),p=L*Rr,L&&(M=Math.cos(-L),b=Math.sin(-L),F=j*M-R*b,q=G*M-B*b,J=U*M-K*b,ne=O*b+ne*M,j=F,G=q,U=J),L=vs(G,j),_=L*Rr,L&&(M=Math.cos(L),b=Math.sin(L),F=j*M+G*b,q=k*M+Z*b,G=G*M-j*b,Z=Z*M-k*b,j=F,k=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Lt(Math.sqrt(j*j+G*G+U*U)),g=Lt(Math.sqrt(Z*Z+se*se)),L=vs(k,Z),y=Math.abs(L)>2e-4?L*Rr:0,v=ne?1/(ne<0?-ne:ne):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!hm(_i(e,wt)),F&&e.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Lt(d),n.scaleY=Lt(g),n.rotation=Lt(_)+o,n.rotationX=Lt(m)+o,n.rotationY=Lt(p)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[oi]=fl(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?kT:om?fm:BT,n.uncache=0,n},fl=function(e){return(e=e.split(" "))[0]+" "+e[1]},vc=function(e,t,n){var i=en(t);return Lt(parseFloat(t)+parseFloat(fr(e,"x",n+"px",i)))+i},BT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,fm(e,t)},Er="0deg",xa="0px",br=") ",fm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,x=n.zOrigin,v="",S=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==Er||u!==Er)){var w=parseFloat(u)*Os,E=Math.sin(w),L=Math.cos(w),M;w=parseFloat(h)*Os,M=Math.cos(w),a=vc(y,a,E*M*-x),o=vc(y,o,-Math.sin(w)*-x),l=vc(y,l,L*M*-x+x)}m!==xa&&(v+="perspective("+m+br),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(S||a!==xa||o!==xa||l!==xa)&&(v+=l!==xa||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==Er&&(v+="rotate("+c+br),u!==Er&&(v+="rotateY("+u+br),h!==Er&&(v+="rotateX("+h+br),(f!==Er||d!==Er)&&(v+="skew("+f+", "+d+br),(g!==1||_!==1)&&(v+="scale("+g+", "+_+br),y.style[wt]=v||"translate(0, 0)"},kT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,x=parseFloat(a),v=parseFloat(o),S,w,E,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Os,c*=Os,S=Math.cos(l)*h,w=Math.sin(l)*h,E=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=Os,M=Math.tan(c-u),M=Math.sqrt(1+M*M),E*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,w*=M)),S=Lt(S),w=Lt(w),E=Lt(E),L=Lt(L)):(S=h,L=f,w=E=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=fr(d,"x",a,"px"),v=fr(d,"y",o,"px")),(g||_||m||p)&&(x=Lt(x+g-(g*S+_*E)+m),v=Lt(v+_-(g*w+_*L)+p)),(i||r)&&(M=d.getBBox(),x=Lt(x+i/100*M.width),v=Lt(v+r/100*M.height)),M="matrix("+S+","+w+","+E+","+L+","+x+","+v+")",d.setAttribute("transform",M),y&&(d.style[wt]=M)},zT=function(e,t,n,i,r){var a=360,o=Wt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Rr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*ed)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*ed)%a-~~(c/a)*a)),e._pt=f=new bn(e._pt,t,n,i,c,TT),f.e=u,f.u="deg",e._props.push(n),f},ad=function(e,t){for(var n in t)e[n]=t[n];return e},HT=function(e,t,n){var i=ad({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=Za(n,1),Ka(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=Za(n,1),a[wt]=c);for(l in Hi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=en(c),g=en(u),h=d!==g?fr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new bn(e._pt,o,l,h,f-h,Zc),e._pt.u=g||0,e._props.push(l));ad(o,i)};En("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});hl[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(g){return Di(o,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,d,h)}});var dm={name:"css",register:Qc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,y,x,v,S,w,E,L;ku||Qc(),this.styles=this.styles||am(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(In[_]&&Kp(_,t,n,i,e,r)))){if(d=typeof u,g=hl[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=qa(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",cr.lastIndex=0,cr.test(c)||(m=en(c),p=en(u)),p?m!==p&&(c=fr(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,_),a.push(_),L.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],Wt(c)&&~c.indexOf("random(")&&(c=qa(c)),en(c+"")||(c+=Fn.units[_]||en(Di(e,_))||""),(c+"").charAt(1)==="="&&(c=Di(e,_))):c=Di(e,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in pi&&(_==="autoAlpha"&&(f===1&&Di(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,o.visibility),nr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=pi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Hi,x){if(this.styles.save(_),v||(S=e._gsap,S.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),w=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new bn(this._pt,o,wt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new bn(this._pt,S,"scaleY",S.scaleY,(y?Us(S.scaleY,y+h):h)-S.scaleY||0,Zc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(oi,0,o[oi]),u=OT(u),S.svg?eu(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&nr(this,S,"zOrigin",S.zOrigin,p),nr(this,o,_,fl(c),fl(u)));continue}else if(_==="svgOrigin"){eu(e,u,1,w,0,this);continue}else if(_ in um){zT(this,S,_,f,y?Us(f,y+u):u);continue}else if(_==="smoothOrigin"){nr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){HT(this,u,e);continue}}else _ in o||(_=ea(_)||_);if(x||(h||h===0)&&(f||f===0)&&!ST.test(u)&&_ in o)m=(c+"").substr((f+"").length),h||(h=0),p=en(u)||(_ in Fn.units?Fn.units[_]:m),m!==p&&(f=fr(e,_,c,p)),this._pt=new bn(this._pt,x?S:o,_,f,(y?Us(f,y+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?bT:Zc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ET);else if(_ in o)NT.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,i,r);else if(_!=="parseTransform"){Pu(_,u);continue}x||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}E&&tm(this)},render:function(e,t){if(t.tween._time||!zu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Di,aliases:pi,getSetter:function(e,t,n){var i=pi[t];return i&&i.indexOf(",")<0&&(t=i),t in Hi&&t!==oi&&(e._gsap.x||Di(e,"x"))?n&&Qf===n?t==="scale"?CT:RT:(Qf=n||{})&&(t==="scale"?PT:LT):e.style&&!wu(e.style[t])?AT:~t.indexOf("-")?wT:Fu(e,t)},core:{_removeProperty:Ka,_getMatrix:Gu}};An.utils.checkPrefix=ea;An.core.getStyleSaver=am;(function(s,e,t,n){var i=En(s+","+e+","+t,function(r){Hi[r]=1});En(e,function(r){Fn.units[r]="deg",um[r]=1}),pi[i[13]]=s+","+e,En(n,function(r){var a=r.split(":");pi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Fn.units[s]="px"});An.registerPlugin(dm);var Vu=An.registerPlugin(dm)||An;Vu.core.Tween;function od(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function GT(s,e,t){return e&&od(s.prototype,e),t&&od(s,t),s}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,tu,Nn,ir,rr,Fs,pm,Cr,Ia,mm,Oi,ii,_m,gm=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},xm=1,Cs=[],et=[],gi=[],Ua=Date.now,nu=function(e,t){return t},VT=function(){var e=Ia.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,gi),et=n,gi=i,nu=function(a,o){return t[a](o)}},ur=function(e,t){return~gi.indexOf(e)&&gi[gi.indexOf(e)+1][t]},Na=function(e){return!!~mm.indexOf(e)},cn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Do="scrollLeft",Io="scrollTop",iu=function(){return Oi&&Oi.isPressed||et.cache++},dl=function(e,t){var n=function i(r){if(r||r===0){xm&&(Nn.history.scrollRestoration="manual");var a=Oi&&Oi.isPressed;r=i.v=Math.round(r)||(Oi&&Oi.iOS?1:0),e(r),i.cacheID=et.cache,a&&nu("ss",r)}else(t||et.cache!==i.cacheID||nu("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},mn={s:Do,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dl(function(s){return arguments.length?Nn.scrollTo(s,Ft.sc()):Nn.pageXOffset||ir[Do]||rr[Do]||Fs[Do]||0})},Ft={s:Io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:dl(function(s){return arguments.length?Nn.scrollTo(mn.sc(),s):Nn.pageYOffset||ir[Io]||rr[Io]||Fs[Io]||0})},xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||jt.utils.toArray)(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dr=function(e,t){var n=t.s,i=t.sc;Na(e)&&(e=ir.scrollingElement||rr);var r=et.indexOf(e),a=i===Ft.sc?1:2;!~r&&(r=et.push(e)-1),et[r+a]||cn(e,"scroll",iu);var o=et[r+a],l=o||(et[r+a]=dl(ur(e,n),!0)||(Na(e)?i:dl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},ru=function(e,t,n){var i=e,r=e,a=Ua(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Ua();_||m-a>l?(r=i,i=g,o=a,a=m):n?i+=g:i=r+(g-r)/(m-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},f=function(g){var _=o,m=r,p=Ua();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:h,getVelocity:f}},va=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ld=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},vm=function(){Ia=jt.core.globals().ScrollTrigger,Ia&&Ia.core&&VT()},Mm=function(e){return jt=e||gm(),jt&&typeof document<"u"&&document.body&&(Nn=window,ir=document,rr=ir.documentElement,Fs=ir.body,mm=[Nn,ir,rr,Fs],jt.utils.clamp,_m=jt.core.context||function(){},Cr="onpointerenter"in Fs?"pointer":"mouse",pm=Nt.isTouch=Nn.matchMedia&&Nn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Nn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Nt.eventTypes=("ontouchstart"in rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xm=0},500),vm(),tu=1),tu};mn.op=Ft;et.cache=0;var Nt=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){tu||Mm(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ia||vm();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,S=n.onRight,w=n.onLeft,E=n.onUp,L=n.onDown,M=n.onChangeX,b=n.onChangeY,j=n.onChange,G=n.onToggleX,U=n.onToggleY,O=n.onHover,k=n.onHoverEnd,Z=n.onMove,F=n.ignoreCheck,q=n.isNormalizer,J=n.onGestureStart,R=n.onGestureEnd,B=n.onWheel,K=n.onEnable,oe=n.onDisable,ne=n.onClick,se=n.scrollSpeed,xe=n.capture,Me=n.allowClicks,ye=n.lockAxis,Fe=n.onLockAxis;this.target=o=xn(o)||rr,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,se=se||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Nn.getComputedStyle(Fs).lineHeight)||22);var Et,Pe,z,Ie,fe,Ce,Re,V=this,Ue=0,Oe=0,nt=dr(o,mn),Ye=dr(o,Ft),yt=nt(),C=Ye(),T=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ii[0]==="pointerdown",H=Na(o),Q=o.ownerDocument||ir,ee=[0,0,0],te=[0,0,0],Te=0,re=function(){return Te=Ua()},Y=function(he,ze){return(V.event=he)&&d&&~d.indexOf(he.target)||ze&&T&&he.pointerType!=="touch"||F&&F(he,ze)},ge=function(){V._vx.reset(),V._vy.reset(),Pe.pause(),h&&h(V)},be=function(){var he=V.deltaX=ld(ee),ze=V.deltaY=ld(te),je=Math.abs(he)>=i,pe=Math.abs(ze)>=i;j&&(je||pe)&&j(V,he,ze,ee,te),je&&(S&&V.deltaX>0&&S(V),w&&V.deltaX<0&&w(V),M&&M(V),G&&V.deltaX<0!=Ue<0&&G(V),Ue=V.deltaX,ee[0]=ee[1]=ee[2]=0),pe&&(L&&V.deltaY>0&&L(V),E&&V.deltaY<0&&E(V),b&&b(V),U&&V.deltaY<0!=Oe<0&&U(V),Oe=V.deltaY,te[0]=te[1]=te[2]=0),(Ie||z)&&(Z&&Z(V),z&&(y(V),z=!1),Ie=!1),Ce&&!(Ce=!1)&&Fe&&Fe(V),fe&&(B(V),fe=!1),Et=0},we=function(he,ze,je){ee[je]+=he,te[je]+=ze,V._vx.update(he),V._vy.update(ze),c?Et||(Et=requestAnimationFrame(be)):be()},_e=function(he,ze){ye&&!Re&&(V.axis=Re=Math.abs(he)>Math.abs(ze)?"x":"y",Ce=!0),Re!=="y"&&(ee[2]+=he,V._vx.update(he,!0)),Re!=="x"&&(te[2]+=ze,V._vy.update(ze,!0)),c?Et||(Et=requestAnimationFrame(be)):be()},de=function(he){if(!Y(he,1)){he=va(he,u);var ze=he.clientX,je=he.clientY,pe=ze-V.x,Qe=je-V.y,Ne=V.isDragging;V.x=ze,V.y=je,(Ne||Math.abs(V.startX-ze)>=r||Math.abs(V.startY-je)>=r)&&(y&&(z=!0),Ne||(V.isDragging=!0),_e(pe,Qe),Ne||m&&m(V))}},Be=V.onPress=function(De){Y(De,1)||De&&De.button||(V.axis=Re=null,Pe.pause(),V.isPressed=!0,De=va(De),Ue=Oe=0,V.startX=V.x=De.clientX,V.startY=V.y=De.clientY,V._vx.reset(),V._vy.reset(),cn(q?o:Q,ii[1],de,u,!0),V.deltaX=V.deltaY=0,x&&x(V))},it=V.onRelease=function(De){if(!Y(De,1)){ln(q?o:Q,ii[1],de,!0);var he=!isNaN(V.y-V.startY),ze=V.isDragging&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),je=va(De);!ze&&he&&(V._vx.reset(),V._vy.reset(),u&&Me&&jt.delayedCall(.08,function(){if(Ua()-Te>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(Q.createEvent){var pe=Q.createEvent("MouseEvents");pe.initMouseEvent("click",!0,!0,Nn,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(pe)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,h&&!q&&Pe.restart(!0),p&&ze&&p(V),v&&v(V,ze)}},P=function(he){return he.touches&&he.touches.length>1&&(V.isGesturing=!0)&&J(he,V.isDragging)},le=function(){return(V.isGesturing=!1)||R(V)},X=function(he){if(!Y(he)){var ze=nt(),je=Ye();we((ze-yt)*se,(je-C)*se,1),yt=ze,C=je,h&&Pe.restart(!0)}},ie=function(he){if(!Y(he)){he=va(he,u),B&&(fe=!0);var ze=(he.deltaMode===1?l:he.deltaMode===2?Nn.innerHeight:1)*g;we(he.deltaX*ze,he.deltaY*ze,0),h&&!q&&Pe.restart(!0)}},ae=function(he){if(!Y(he)){var ze=he.clientX,je=he.clientY,pe=ze-V.x,Qe=je-V.y;V.x=ze,V.y=je,Ie=!0,(pe||Qe)&&_e(pe,Qe)}},We=function(he){V.event=he,O(V)},ut=function(he){V.event=he,k(V)},ht=function(he){return Y(he)||va(he,u)&&ne(V)};Pe=V._dc=jt.delayedCall(f||.25,ge).pause(),V.deltaX=V.deltaY=0,V._vx=ru(0,50,!0),V._vy=ru(0,50,!0),V.scrollX=nt,V.scrollY=Ye,V.isDragging=V.isGesturing=V.isPressed=!1,_m(this),V.enable=function(De){return V.isEnabled||(cn(H?Q:o,"scroll",iu),a.indexOf("scroll")>=0&&cn(H?Q:o,"scroll",X,u,xe),a.indexOf("wheel")>=0&&cn(o,"wheel",ie,u,xe),(a.indexOf("touch")>=0&&pm||a.indexOf("pointer")>=0)&&(cn(o,ii[0],Be,u,xe),cn(Q,ii[2],it),cn(Q,ii[3],it),Me&&cn(o,"click",re,!1,!0),ne&&cn(o,"click",ht),J&&cn(Q,"gesturestart",P),R&&cn(Q,"gestureend",le),O&&cn(o,Cr+"enter",We),k&&cn(o,Cr+"leave",ut),Z&&cn(o,Cr+"move",ae)),V.isEnabled=!0,De&&De.type&&Be(De),K&&K(V)),V},V.disable=function(){V.isEnabled&&(Cs.filter(function(De){return De!==V&&Na(De.target)}).length||ln(H?Q:o,"scroll",iu),V.isPressed&&(V._vx.reset(),V._vy.reset(),ln(q?o:Q,ii[1],de,!0)),ln(H?Q:o,"scroll",X,xe),ln(o,"wheel",ie,xe),ln(o,ii[0],Be,xe),ln(Q,ii[2],it),ln(Q,ii[3],it),ln(o,"click",re,!0),ln(o,"click",ht),ln(Q,"gesturestart",P),ln(Q,"gestureend",le),ln(o,Cr+"enter",We),ln(o,Cr+"leave",ut),ln(o,Cr+"move",ae),V.isEnabled=V.isPressed=V.isDragging=!1,oe&&oe(V))},V.kill=V.revert=function(){V.disable();var De=Cs.indexOf(V);De>=0&&Cs.splice(De,1),Oi===V&&(Oi=0)},Cs.push(V),q&&Na(o)&&(Oi=V),V.enable(_)},GT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();Nt.version="3.12.2";Nt.create=function(s){return new Nt(s)};Nt.register=Mm;Nt.getAll=function(){return Cs.slice()};Nt.getById=function(s){return Cs.filter(function(e){return e.vars.id===s})[0]};gm()&&jt.registerPlugin(Nt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ve,Ts,rt,bt,si,Mt,ym,pl,ml,Ps,Ko,Uo,Jt,bl,su,hn,cd,ud,Es,Sm,Mc,Tm,Pn,Em,bm,Am,$i,au,Wu,Bs,Xu,yc,No=1,dn=Date.now,Sc=dn(),Zn=0,Ea=0,hd=function(e,t,n){var i=Dn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},fd=function(e,t){return t&&(!Dn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},WT=function s(){return Ea&&requestAnimationFrame(s)},dd=function(){return bl=1},pd=function(){return bl=0},li=function(e){return e},ba=function(e){return Math.round(e*1e5)/1e5||0},wm=function(){return typeof window<"u"},Rm=function(){return ve||wm()&&(ve=window.gsap)&&ve.registerPlugin&&ve},Zr=function(e){return!!~ym.indexOf(e)},Cm=function(e){return(e==="Height"?Xu:rt["inner"+e])||si["client"+e]||Mt["client"+e]},Pm=function(e){return ur(e,"getBoundingClientRect")||(Zr(e)?function(){return tl.width=rt.innerWidth,tl.height=Xu,tl}:function(){return Ii(e)})},XT=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=ur(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Cm(r):e["client"+r])||0}},qT=function(e,t){return!t||~gi.indexOf(e)?Pm(e):function(){return tl}},Fi=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ur(e,n))?a()-Pm(e)()[r]:Zr(e)?(si[n]||Mt[n])-Cm(i):e[n]-e["offset"+i])},Oo=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},Dn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},$o=function(e){return typeof e=="number"},Pr=function(e){return typeof e=="object"},Ma=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Tc=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ms=Math.abs,Lm="left",Dm="top",qu="right",Yu="bottom",Vr="width",Wr="height",Oa="Right",Fa="Left",Ba="Top",ka="Bottom",It="padding",Wn="margin",ta="Width",ju="Height",qt="px",Xn=function(e){return rt.getComputedStyle(e)},YT=function(e){var t=Xn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},md=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ii=function(e,t){var n=t&&Xn(e)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&ve.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},ou=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Im=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},jT=function(e){return function(t){return ve.utils.snap(Im(e),t)}},Ku=function(e){var t=ve.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},KT=function(e){return function(t,n){return Ku(Im(e))(t,n.direction)}},Fo=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Gt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},_d={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ko={toggleActions:"play",anticipatePin:0},_l={top:0,left:0,center:.5,bottom:1,right:1},Zo=function(e,t){if(Dn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in _l?_l[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},zo=function(e,t,n,i,r,a,o,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=bt.createElement("div"),_=Zr(n)||ur(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?Mt:n,y=e.indexOf("start")!==-1,x=y?c:u,v="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===Ft?qu:Yu)+":"+(a+parseFloat(f))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Jo(g,0,i,y),g},Jo=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+ta]=1,r["border"+o+ta]=0,r[n.p]=t+"px",ve.set(e,r)},$e=[],lu={},Ja,gd=function(){return dn()-Zn>34&&(Ja||(Ja=requestAnimationFrame(Bi)))},ys=function(){(!Pn||!Pn.isPressed||Pn.startX>Mt.clientWidth)&&(et.cache++,Pn?Ja||(Ja=requestAnimationFrame(Bi)):Bi(),Zn||Qr("scrollStart"),Zn=dn())},Ec=function(){Am=rt.innerWidth,bm=rt.innerHeight},Aa=function(){et.cache++,!Jt&&!Tm&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Em||Am!==rt.innerWidth||Math.abs(rt.innerHeight-bm)>rt.innerHeight*.25)&&pl.restart(!0)},Jr={},$T=[],Um=function s(){return Ht(tt,"scrollEnd",s)||Ur(!0)},Qr=function(e){return Jr[e]&&Jr[e].map(function(t){return t()})||$T},Ln=[],Nm=function(e){for(var t=0;t<Ln.length;t+=5)(!e||Ln[t+4]&&Ln[t+4].query===e)&&(Ln[t].style.cssText=Ln[t+1],Ln[t].getBBox&&Ln[t].setAttribute("transform",Ln[t+2]||""),Ln[t+3].uncache=1)},$u=function(e,t){var n;for(hn=0;hn<$e.length;hn++)n=$e[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Nm(t),t||Qr("revert")},Om=function(e,t){et.cache++,(t||!fn)&&et.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Dn(e)&&(rt.history.scrollRestoration=Wu=e)},fn,Xr=0,xd,ZT=function(){if(xd!==Xr){var e=xd=Xr;requestAnimationFrame(function(){return e===Xr&&Ur(!0)})}},Fm=function(){Mt.appendChild(Bs),Xu=Bs.offsetHeight||rt.innerHeight,Mt.removeChild(Bs)},Ur=function(e,t){if(Zn&&!e){Gt(tt,"scrollEnd",Um);return}Fm(),fn=tt.isRefreshing=!0,et.forEach(function(i){return _n(i)&&++i.cacheID&&(i.rec=i())});var n=Qr("refreshInit");Sm&&tt.sort(),t||$u(),et.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),$e.slice(0).forEach(function(i){return i.refresh()}),$e.forEach(function(i,r){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),$e.forEach(function(i){var r=Fi(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Om(Wu,1),pl.pause(),Xr++,fn=2,Bi(2),$e.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),fn=tt.isRefreshing=!1,Qr("refresh")},cu=0,Qo=1,za,Bi=function(e){if(!fn||e===2){tt.isUpdating=!0,za&&za.update(0);var t=$e.length,n=dn(),i=n-Sc>=50,r=t&&$e[0].scroll();if(Qo=cu>r?-1:1,fn||(cu=r),i&&(Zn&&!bl&&n-Zn>200&&(Zn=0,Qr("scrollEnd")),Ko=Sc,Sc=n),Qo<0){for(hn=t;hn-- >0;)$e[hn]&&$e[hn].update(0,i);Qo=1}else for(hn=0;hn<t;hn++)$e[hn]&&$e[hn].update(0,i);tt.isUpdating=!1}Ja=0},uu=[Lm,Dm,Yu,qu,Wn+ka,Wn+Oa,Wn+Ba,Wn+Fa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],el=uu.concat([Vr,Wr,"boxSizing","max"+ta,"max"+ju,"position",Wn,It,It+Ba,It+Oa,It+ka,It+Fa]),JT=function(e,t,n){ks(n);var i=e._gsap;if(i.spacerIsNative)ks(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},bc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=uu.length,a=t.style,o=e.style,l;r--;)l=uu[r],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Yu]=o[qu]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Vr]=ou(e,mn)+qt,a[Wr]=ou(e,Ft)+qt,a[It]=o[Wn]=o[Dm]=o[Lm]="0",ks(i),o[Vr]=o["max"+ta]=n[Vr],o[Wr]=o["max"+ju]=n[Wr],o[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},QT=/([A-Z])/g,ks=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||ve.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(QT,"-$1").toLowerCase())}},Ho=function(e){for(var t=el.length,n=e.style,i=[],r=0;r<t;r++)i.push(el[r],n[el[r]]);return i.t=e,i},eE=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},tl={left:0,top:0},vd=function(e,t,n,i,r,a,o,l,c,u,h,f,d,g){_n(e)&&(e=e(l)),Dn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Zo("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,y;if(d&&d.seek(0),isNaN(e)||(e=+e),$o(e))d&&(e=ve.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Jo(o,n,i,!0);else{_n(t)&&(t=t(l));var x=(e||"0").split(" "),v,S,w,E;y=xn(t,l)||Mt,v=Ii(y)||{},(!v||!v.left&&!v.top)&&Xn(y).display==="none"&&(E=y.style.display,y.style.display="block",v=Ii(y),E?y.style.display=E:y.style.removeProperty("display")),S=Zo(x[0],v[i.d]),w=Zo(x[1]||"0",n),e=v[i.p]-c[i.p]-u+S+r-w,o&&Jo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var L=e+n,M=a._isStart;m="scroll"+i.d2,Jo(a,L,i,M&&L>20||!M&&(h?Math.max(Mt[m],si[m]):a.parentNode[m])<=L+1),h&&(c=Ii(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+qt))}return d&&y&&(m=Ii(y),d.seek(f),p=Ii(y),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},tE=/(webkit|moz|length|cssText|inset)/i,Md=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===Mt){e._stOrig=r.cssText,o=Xn(e);for(a in o)!+a&&!tE.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;ve.core.getCache(e).uncache=1,t.appendChild(e)}},Bm=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=a,a}},Go=function(e,t,n){var i={};i[t.p]="+="+n,ve.set(e,i)},yd=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,r=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,g={};c=c||n();var _=Bm(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){et.cache++,Bi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=ve.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Gt(e,"wheel",n.wheelHandler),tt.isTouch&&Gt(e,"touchmove",n.wheelHandler),r},tt=function(){function s(t,n){Ts||s.register(ve)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ea){this.update=this.refresh=this.kill=li;return}n=md(Dn(n)||$o(n)||n.nodeType?{trigger:n}:n,ko);var r=n,a=r.onUpdate,o=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,y=r.onSnapComplete,x=r.once,v=r.snap,S=r.pinReparent,w=r.pinSpacer,E=r.containerAnimation,L=r.fastScrollEnd,M=r.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ft,j=!h&&h!==0,G=xn(n.scroller||rt),U=ve.core.getCache(G),O=Zr(G),k=("pinType"in n?n.pinType:ur(G,"pinType")||O&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=j&&n.toggleActions.split(" "),q="markers"in n?n.markers:ko.markers,J=O?0:parseFloat(Xn(G)["border"+b.p2+ta])||0,R=this,B=n.onRefreshInit&&function(){return n.onRefreshInit(R)},K=XT(G,O,b),oe=qT(G,O),ne=0,se=0,xe=0,Me=dr(G,b),ye,Fe,Et,Pe,z,Ie,fe,Ce,Re,V,Ue,Oe,nt,Ye,yt,C,T,H,Q,ee,te,Te,re,Y,ge,be,we,_e,de,Be,it,P,le,X,ie,ae,We,ut,ht;if(R._startClamp=R._endClamp=!1,R._dir=b,m*=45,R.scroller=G,R.scroll=E?E.time.bind(E):Me,Pe=Me(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sm=1,n.refreshPriority===-9999&&(za=R)),U.tweenScroll=U.tweenScroll||{top:yd(G,Ft),left:yd(G,mn)},R.tweenTo=ye=U.tweenScroll[b.p],R.scrubDuration=function(pe){le=$o(pe)&&pe,le?P?P.duration(pe):P=ve.to(i,{ease:"expo",totalProgress:"+=0",duration:le,paused:!0,onComplete:function(){return p&&p(R)}}):(P&&P.progress(1).kill(),P=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),Be=0,l||(l=i.vars.id)),v&&((!Pr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Mt.style&&ve.set(O?[Mt,si]:G,{scrollBehavior:"auto"}),et.forEach(function(pe){return _n(pe)&&pe.target===(O?bt.scrollingElement||si:G)&&(pe.smooth=!1)}),Et=_n(v.snapTo)?v.snapTo:v.snapTo==="labels"?jT(i):v.snapTo==="labelsDirectional"?KT(i):v.directional!==!1?function(pe,Qe){return Ku(v.snapTo)(pe,dn()-se<500?0:Qe.direction)}:ve.utils.snap(v.snapTo),X=v.duration||{min:.1,max:2},X=Pr(X)?Ps(X.min,X.max):Ps(X,X),ie=ve.delayedCall(v.delay||le/2||.1,function(){var pe=Me(),Qe=dn()-se<500,Ne=ye.tween;if((Qe||Math.abs(R.getVelocity())<10)&&!Ne&&!bl&&ne!==pe){var He=(pe-Ie)/Ye,Pt=i&&!j?i.totalProgress():He,Ke=Qe?0:(Pt-it)/(dn()-Ko)*1e3||0,St=ve.utils.clamp(-He,1-He,Ms(Ke/2)*Ke/.185),Xt=He+(v.inertia===!1?0:St),Ot=Ps(0,1,Et(Xt,R)),xt=Math.round(Ie+Ot*Ye),A=v,N=A.onStart,W=A.onInterrupt,I=A.onComplete;if(pe<=fe&&pe>=Ie&&xt!==pe){if(Ne&&!Ne._initted&&Ne.data<=Ms(xt-pe))return;v.inertia===!1&&(St=Ot-He),ye(xt,{duration:X(Ms(Math.max(Ms(Xt-Pt),Ms(Ot-Pt))*.185/Ke/.05||0)),ease:v.ease||"power3",data:Ms(xt-pe),onInterrupt:function(){return ie.restart(!0)&&W&&W(R)},onComplete:function(){R.update(),ne=Me(),Be=it=i&&!j?i.totalProgress():R.progress,y&&y(R),I&&I(R)}},pe,St*Ye,xt-pe-St*Ye),N&&N(R,ye.tween)}}else R.isActive&&ne!==pe&&ie.restart(!0)}).pause()),l&&(lu[l]=R),f=R.trigger=xn(f||d!==!0&&d),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(R)),d=d===!0?f:xn(d),Dn(o)&&(o={targets:f,className:o}),d&&(g===!1||g===Wn||(g=!g&&d.parentNode&&d.parentNode.style&&Xn(d.parentNode).display==="flex"?!1:It),R.pin=d,Fe=ve.core.getCache(d),Fe.spacer?yt=Fe.pinState:(w&&(w=xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Fe.spacerIsNative=!!w,w&&(Fe.spacerState=Ho(w))),Fe.spacer=H=w||bt.createElement("div"),H.classList.add("pin-spacer"),l&&H.classList.add("pin-spacer-"+l),Fe.pinState=yt=Ho(d)),n.force3D!==!1&&ve.set(d,{force3D:!0}),R.spacer=H=Fe.spacer,de=Xn(d),Y=de[g+b.os2],ee=ve.getProperty(d),te=ve.quickSetter(d,b.a,qt),bc(d,H,de),T=Ho(d)),q){Oe=Pr(q)?md(q,_d):_d,V=zo("scroller-start",l,G,b,Oe,0),Ue=zo("scroller-end",l,G,b,Oe,0,V),Q=V["offset"+b.op.d2];var De=xn(ur(G,"content")||G);Ce=this.markerStart=zo("start",l,De,b,Oe,Q,0,E),Re=this.markerEnd=zo("end",l,De,b,Oe,Q,0,E),E&&(ut=ve.quickSetter([Ce,Re],b.a,qt)),!k&&!(gi.length&&ur(G,"fixedMarkers")===!0)&&(YT(O?Mt:G),ve.set([V,Ue],{force3D:!0}),be=ve.quickSetter(V,b.a,qt),_e=ve.quickSetter(Ue,b.a,qt))}if(E){var he=E.vars.onUpdate,ze=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),he&&he.apply(E,ze||[])})}if(R.previous=function(){return $e[$e.indexOf(R)-1]},R.next=function(){return $e[$e.indexOf(R)+1]},R.revert=function(pe,Qe){if(!Qe)return R.kill(!0);var Ne=pe!==!1||!R.enabled,He=Jt;Ne!==R.isReverted&&(Ne&&(ae=Math.max(Me(),R.scroll.rec||0),xe=R.progress,We=i&&i.progress()),Ce&&[Ce,Re,V,Ue].forEach(function(Pt){return Pt.style.display=Ne?"none":"block"}),Ne&&(Jt=R,R.update(Ne)),d&&(!S||!R.isActive)&&(Ne?JT(d,H,yt):bc(d,H,Xn(d),ge)),Ne||R.update(Ne),Jt=He,R.isReverted=Ne)},R.refresh=function(pe,Qe,Ne,He){if(!((Jt||!R.enabled)&&!Qe)){if(d&&pe&&Zn){Gt(s,"scrollEnd",Um);return}!fn&&B&&B(R),Jt=R,ye.tween&&!Ne&&(ye.tween.kill(),ye.tween=0),P&&P.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Pt=K(),Ke=oe(),St=E?E.duration():Fi(G,b),Xt=Ye<=.01,Ot=0,xt=He||0,A=Pr(Ne)?Ne.end:n.end,N=n.endTrigger||f,W=Pr(Ne)?Ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),I=R.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,R),$=f&&Math.max(0,$e.indexOf(R))||0,ce=$,me,Ee,Le,Ge,Se,Ae,lt,vt,rn,sn,ct,Ve,Vi;for(q&&Pr(Ne)&&(Ve=ve.getProperty(V,b.p),Vi=ve.getProperty(Ue,b.p));ce--;)Ae=$e[ce],Ae.end||Ae.refresh(0,1)||(Jt=R),lt=Ae.pin,lt&&(lt===f||lt===d||lt===I)&&!Ae.isReverted&&(sn||(sn=[]),sn.unshift(Ae),Ae.revert(!0,!0)),Ae!==$e[ce]&&($--,ce--);for(_n(W)&&(W=W(R)),W=hd(W,"start",R),Ie=vd(W,f,Pt,b,Me(),Ce,V,R,Ke,J,k,St,E,R._startClamp&&"_startClamp")||(d?-.001:0),_n(A)&&(A=A(R)),Dn(A)&&!A.indexOf("+=")&&(~A.indexOf(" ")?A=(Dn(W)?W.split(" ")[0]:"")+A:(Ot=Zo(A.substr(2),Pt),A=Dn(W)?W:(E?ve.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ie):Ie)+Ot,N=f)),A=hd(A,"end",R),fe=Math.max(Ie,vd(A||(N?"100% 0":St),N,Pt,b,Me()+Ot,Re,Ue,R,Ke,J,k,St,E,R._endClamp&&"_endClamp"))||-.001,Ot=0,ce=$;ce--;)Ae=$e[ce],lt=Ae.pin,lt&&Ae.start-Ae._pinPush<=Ie&&!E&&Ae.end>0&&(me=Ae.end-(R._startClamp?Math.max(0,Ae.start):Ae.start),(lt===f&&Ae.start-Ae._pinPush<Ie||lt===I)&&isNaN(W)&&(Ot+=me*(1-Ae.progress)),lt===d&&(xt+=me));if(Ie+=Ot,fe+=Ot,R._startClamp&&(R._startClamp+=Ot),R._endClamp&&!fn&&(R._endClamp=fe||-.001,fe=Math.min(fe,Fi(G,b))),Ye=fe-Ie||(Ie-=.01)&&.001,Xt&&(xe=ve.utils.clamp(0,1,ve.utils.normalize(Ie,fe,ae))),R._pinPush=xt,Ce&&Ot&&(me={},me[b.a]="+="+Ot,I&&(me[b.p]="-="+Me()),ve.set([Ce,Re],me)),d)me=Xn(d),Ge=b===Ft,Le=Me(),Te=parseFloat(ee(b.a))+xt,!St&&fe>1&&(ct=(O?bt.scrollingElement||si:G).style,ct={style:ct,value:ct["overflow"+b.a.toUpperCase()]},O&&Xn(Mt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+b.a.toUpperCase()]="scroll")),bc(d,H,me),T=Ho(d),Ee=Ii(d,!0),vt=k&&dr(G,Ge?mn:Ft)(),g&&(ge=[g+b.os2,Ye+xt+qt],ge.t=H,ce=g===It?ou(d,b)+Ye+xt:0,ce&&ge.push(b.d,ce+qt),ks(ge),I&&$e.forEach(function(gt){gt.pin===I&&gt.vars.pinSpacing!==!1&&(gt._subPinOffset=!0)}),k&&Me(ae)),k&&(Se={top:Ee.top+(Ge?Le-Ie:vt)+qt,left:Ee.left+(Ge?vt:Le-Ie)+qt,boxSizing:"border-box",position:"fixed"},Se[Vr]=Se["max"+ta]=Math.ceil(Ee.width)+qt,Se[Wr]=Se["max"+ju]=Math.ceil(Ee.height)+qt,Se[Wn]=Se[Wn+Ba]=Se[Wn+Oa]=Se[Wn+ka]=Se[Wn+Fa]="0",Se[It]=me[It],Se[It+Ba]=me[It+Ba],Se[It+Oa]=me[It+Oa],Se[It+ka]=me[It+ka],Se[It+Fa]=me[It+Fa],C=eE(yt,Se,S),fn&&Me(0)),i?(rn=i._initted,Mc(1),i.render(i.duration(),!0,!0),re=ee(b.a)-Te+Ye+xt,we=Math.abs(Ye-re)>1,k&&we&&C.splice(C.length-2,2),i.render(0,!0,!0),rn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Mc(0)):re=Ye,ct&&(ct.value?ct.style["overflow"+b.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+b.a));else if(f&&Me()&&!E)for(Ee=f.parentNode;Ee&&Ee!==Mt;)Ee._pinOffset&&(Ie-=Ee._pinOffset,fe-=Ee._pinOffset),Ee=Ee.parentNode;sn&&sn.forEach(function(gt){return gt.revert(!1,!0)}),R.start=Ie,R.end=fe,Pe=z=fn?ae:Me(),!E&&!fn&&(Pe<ae&&Me(ae),R.scroll.rec=0),R.revert(!1,!0),se=dn(),ie&&(ne=-1,ie.restart(!0)),Jt=0,i&&j&&(i._initted||We)&&i.progress()!==We&&i.progress(We||0,!0).render(i.time(),!0,!0),(Xt||xe!==R.progress||E)&&(i&&!j&&i.totalProgress(E&&Ie<-.001&&!xe?ve.utils.normalize(Ie,fe,0):xe,!0),R.progress=Xt||(Pe-Ie)/Ye===xe?0:xe),d&&g&&(H._pinOffset=Math.round(R.progress*re)),P&&P.invalidate(),isNaN(Ve)||(Ve-=ve.getProperty(V,b.p),Vi-=ve.getProperty(Ue,b.p),Go(V,b,Ve),Go(Ce,b,Ve-(He||0)),Go(Ue,b,Vi),Go(Re,b,Vi-(He||0))),Xt&&!fn&&R.update(),u&&!fn&&!nt&&(nt=!0,u(R),nt=!1)}},R.getVelocity=function(){return(Me()-z)/(dn()-Ko)*1e3||0},R.endAnimation=function(){Ma(R.callbackAnimation),i&&(P?P.progress(1):i.paused()?j||Ma(i,R.direction<0,1):Ma(i,i.reversed()))},R.labelToScroll=function(pe){return i&&i.labels&&(Ie||R.refresh()||Ie)+i.labels[pe]/i.duration()*Ye||0},R.getTrailing=function(pe){var Qe=$e.indexOf(R),Ne=R.direction>0?$e.slice(0,Qe).reverse():$e.slice(Qe+1);return(Dn(pe)?Ne.filter(function(He){return He.vars.preventOverlaps===pe}):Ne).filter(function(He){return R.direction>0?He.end<=Ie:He.start>=fe})},R.update=function(pe,Qe,Ne){if(!(E&&!Ne&&!pe)){var He=fn===!0?ae:R.scroll(),Pt=pe?0:(He-Ie)/Ye,Ke=Pt<0?0:Pt>1?1:Pt||0,St=R.progress,Xt,Ot,xt,A,N,W,I,$;if(Qe&&(z=Pe,Pe=E?Me():He,v&&(it=Be,Be=i&&!j?i.totalProgress():Ke)),m&&!Ke&&d&&!Jt&&!No&&Zn&&Ie<He+(He-z)/(dn()-Ko)*m&&(Ke=1e-4),Ke!==St&&R.enabled){if(Xt=R.isActive=!!Ke&&Ke<1,Ot=!!St&&St<1,W=Xt!==Ot,N=W||!!Ke!=!!St,R.direction=Ke>St?1:-1,R.progress=Ke,N&&!Jt&&(xt=Ke&&!St?0:Ke===1?1:St===1?2:3,j&&(A=!W&&F[xt+1]!=="none"&&F[xt+1]||F[xt],$=i&&(A==="complete"||A==="reset"||A in i))),M&&(W||$)&&($||h||!i)&&(_n(M)?M(R):R.getTrailing(M).forEach(function(Le){return Le.endAnimation()})),j||(P&&!Jt&&!No?(P._dp._time-P._start!==P._time&&P.render(P._dp._time-P._start),P.resetTo?P.resetTo("totalProgress",Ke,i._tTime/i._tDur):(P.vars.totalProgress=Ke,P.invalidate().restart())):i&&i.totalProgress(Ke,!!(Jt&&(se||pe)))),d){if(pe&&g&&(H.style[g+b.os2]=Y),!k)te(ba(Te+re*Ke));else if(N){if(I=!pe&&Ke>St&&fe+1>He&&He+1>=Fi(G,b),S)if(!pe&&(Xt||I)){var ce=Ii(d,!0),me=He-Ie;Md(d,Mt,ce.top+(b===Ft?me:0)+qt,ce.left+(b===Ft?0:me)+qt)}else Md(d,H);ks(Xt||I?C:T),we&&Ke<1&&Xt||te(Te+(Ke===1&&!I?re:0))}}v&&!ye.tween&&!Jt&&!No&&ie.restart(!0),o&&(W||x&&Ke&&(Ke<1||!yc))&&ml(o.targets).forEach(function(Le){return Le.classList[Xt||x?"add":"remove"](o.className)}),a&&!j&&!pe&&a(R),N&&!Jt?(j&&($&&(A==="complete"?i.pause().totalProgress(1):A==="reset"?i.restart(!0).pause():A==="restart"?i.restart(!0):i[A]()),a&&a(R)),(W||!yc)&&(c&&W&&Tc(R,c),Z[xt]&&Tc(R,Z[xt]),x&&(Ke===1?R.kill(!1,1):Z[xt]=0),W||(xt=Ke===1?1:3,Z[xt]&&Tc(R,Z[xt]))),L&&!Xt&&Math.abs(R.getVelocity())>($o(L)?L:2500)&&(Ma(R.callbackAnimation),P?P.progress(1):Ma(i,A==="reverse"?1:!Ke,1))):j&&a&&!Jt&&a(R)}if(_e){var Ee=E?He/E.duration()*(E._caScrollDist||0):He;be(Ee+(V._isFlipped?1:0)),_e(Ee)}ut&&ut(-He/E.duration()*(E._caScrollDist||0))}},R.enable=function(pe,Qe){R.enabled||(R.enabled=!0,Gt(G,"resize",Aa),O||Gt(G,"scroll",ys),B&&Gt(s,"refreshInit",B),pe!==!1&&(R.progress=xe=0,Pe=z=ne=Me()),Qe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&ye?ye.tween:P},R.setPositions=function(pe,Qe,Ne,He){if(E){var Pt=E.scrollTrigger,Ke=E.duration(),St=Pt.end-Pt.start;pe=Pt.start+St*pe/Ke,Qe=Pt.start+St*Qe/Ke}R.refresh(!1,!1,{start:fd(pe,Ne&&!!R._startClamp),end:fd(Qe,Ne&&!!R._endClamp)},He),R.update()},R.adjustPinSpacing=function(pe){if(ge&&pe){var Qe=ge.indexOf(b.d)+1;ge[Qe]=parseFloat(ge[Qe])+pe+qt,ge[1]=parseFloat(ge[1])+pe+qt,ks(ge)}},R.disable=function(pe,Qe){if(R.enabled&&(pe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Qe||P&&P.pause(),ae=0,Fe&&(Fe.uncache=1),B&&Ht(s,"refreshInit",B),ie&&(ie.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!O)){for(var Ne=$e.length;Ne--;)if($e[Ne].scroller===G&&$e[Ne]!==R)return;Ht(G,"resize",Aa),O||Ht(G,"scroll",ys)}},R.kill=function(pe,Qe){R.disable(pe,Qe),P&&!Qe&&P.kill(),l&&delete lu[l];var Ne=$e.indexOf(R);Ne>=0&&$e.splice(Ne,1),Ne===hn&&Qo>0&&hn--,Ne=0,$e.forEach(function(He){return He.scroller===R.scroller&&(Ne=1)}),Ne||fn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Qe||i.kill()),Ce&&[Ce,Re,V,Ue].forEach(function(He){return He.parentNode&&He.parentNode.removeChild(He)}),za===R&&(za=0),d&&(Fe&&(Fe.uncache=1),Ne=0,$e.forEach(function(He){return He.pin===d&&Ne++}),Ne||(Fe.spacer=0)),n.onKill&&n.onKill(R)},$e.push(R),R.enable(!1,!1),ht&&ht(R),i&&i.add&&!Ye){var je=R.update;R.update=function(){R.update=je,Ie||fe||R.refresh()},ve.delayedCall(.01,R.update),Ye=.01,Ie=fe=0}else R.refresh();d&&ZT()},s.register=function(n){return Ts||(ve=n||Rm(),wm()&&window.document&&s.enable(),Ts=Ea),Ts},s.defaults=function(n){if(n)for(var i in n)ko[i]=n[i];return ko},s.disable=function(n,i){Ea=0,$e.forEach(function(a){return a[i?"kill":"disable"](n)}),Ht(rt,"wheel",ys),Ht(bt,"scroll",ys),clearInterval(Uo),Ht(bt,"touchcancel",li),Ht(Mt,"touchstart",li),Fo(Ht,bt,"pointerdown,touchstart,mousedown",dd),Fo(Ht,bt,"pointerup,touchend,mouseup",pd),pl.kill(),Oo(Ht);for(var r=0;r<et.length;r+=3)Bo(Ht,et[r],et[r+1]),Bo(Ht,et[r],et[r+2])},s.enable=function(){if(rt=window,bt=document,si=bt.documentElement,Mt=bt.body,ve&&(ml=ve.utils.toArray,Ps=ve.utils.clamp,au=ve.core.context||li,Mc=ve.core.suppressOverwrites||li,Wu=rt.history.scrollRestoration||"auto",cu=rt.pageYOffset,ve.core.globals("ScrollTrigger",s),Mt)){Ea=1,Bs=document.createElement("div"),Bs.style.height="100vh",Bs.style.position="absolute",Fm(),WT(),Nt.register(ve),s.isTouch=Nt.isTouch,$i=Nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gt(rt,"wheel",ys),ym=[rt,bt,si,Mt],ve.matchMedia?(s.matchMedia=function(l){var c=ve.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ve.addEventListener("matchMediaInit",function(){return $u()}),ve.addEventListener("matchMediaRevert",function(){return Nm()}),ve.addEventListener("matchMedia",function(){Ur(0,1),Qr("matchMedia")}),ve.matchMedia("(orientation: portrait)",function(){return Ec(),Ec})):console.warn("Requires GSAP 3.11.0 or later"),Ec(),Gt(bt,"scroll",ys);var n=Mt.style,i=n.borderTopStyle,r=ve.core.Animation.prototype,a,o;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ii(Mt),Ft.m=Math.round(a.top+Ft.sc())||0,mn.m=Math.round(a.left+mn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Uo=setInterval(gd,250),ve.delayedCall(.5,function(){return No=0}),Gt(bt,"touchcancel",li),Gt(Mt,"touchstart",li),Fo(Gt,bt,"pointerdown,touchstart,mousedown",dd),Fo(Gt,bt,"pointerup,touchend,mouseup",pd),su=ve.utils.checkPrefix("transform"),el.push(su),Ts=dn(),pl=ve.delayedCall(.2,Ur).pause(),Es=[bt,"visibilitychange",function(){var l=rt.innerWidth,c=rt.innerHeight;bt.hidden?(cd=l,ud=c):(cd!==l||ud!==c)&&Aa()},bt,"DOMContentLoaded",Ur,rt,"load",Ur,rt,"resize",Aa],Oo(Gt),$e.forEach(function(l){return l.enable(0,1)}),o=0;o<et.length;o+=3)Bo(Ht,et[o],et[o+1]),Bo(Ht,et[o],et[o+2])}},s.config=function(n){"limitCallbacks"in n&&(yc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Uo)||(Uo=i)&&setInterval(gd,i),"ignoreMobileResize"in n&&(Em=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Oo(Ht)||Oo(Gt,n.autoRefreshEvents||"none"),Tm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=xn(n),a=et.indexOf(r),o=Zr(r);~a&&et.splice(a,o?6:2),i&&(o?gi.unshift(rt,i,Mt,i,si,i):gi.unshift(r,i))},s.clearMatchMedia=function(n){$e.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(Dn(n)?xn(n):n).getBoundingClientRect(),o=a[r?Vr:Wr]*i||0;return r?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},s.positionInViewport=function(n,i,r){Dn(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[r?Vr:Wr],l=i==null?o/2:i in _l?_l[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},s.killAll=function(n){if($e.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Jr.killAll||[];Jr={},i.forEach(function(r){return r()})}},s}();tt.version="3.12.2";tt.saveStyles=function(s){return s?ml(s).forEach(function(e){if(e&&e.style){var t=Ln.indexOf(e);t>=0&&Ln.splice(t,5),Ln.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ve.core.getCache(e),au())}}):Ln};tt.revert=function(s,e){return $u(!s,e)};tt.create=function(s,e){return new tt(s,e)};tt.refresh=function(s){return s?Aa():(Ts||tt.register())&&Ur(!0)};tt.update=function(s){return++et.cache&&Bi(s===!0?2:0)};tt.clearScrollMemory=Om;tt.maxScroll=function(s,e){return Fi(s,e?mn:Ft)};tt.getScrollFunc=function(s,e){return dr(xn(s),e?mn:Ft)};tt.getById=function(s){return lu[s]};tt.getAll=function(){return $e.filter(function(s){return s.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!Zn};tt.snapDirectional=Ku;tt.addEventListener=function(s,e){var t=Jr[s]||(Jr[s]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(s,e){var t=Jr[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(c,u){var h=[],f=[],d=ve.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&_n(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return _n(r)&&(r=r(),Gt(tt,"refresh",function(){return r=e.batchMax()})),ml(s).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(tt.create(c))}),t};var Sd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ac=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Nt.isTouch?" pinch-zoom":""):"none",e===si&&s(Mt,t)},Vo={auto:1,scroll:1},nE=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||ve.core.getCache(r),o=dn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==Mt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Vo[(l=Xn(r)).overflowY]||Vo[l.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Zr(r)&&(Vo[(l=Xn(r)).overflowY]||Vo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},km=function(e,t,n,i){return Nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&nE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Gt(bt,Nt.eventTypes[0],Ed,!1,!0)},onDisable:function(){return Ht(bt,Nt.eventTypes[0],Ed,!0)}})},iE=/(input|label|select|textarea)/i,Td,Ed=function(e){var t=iE.test(e.target.tagName);(t||Td)&&(e._gsapAllow=!0,Td=t)},rE=function(e){Pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,l,c=xn(e.target)||si,u=ve.core.globals().ScrollSmoother,h=u&&u.get(),f=$i&&(e.content&&xn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=dr(c,Ft),g=dr(c,mn),_=1,m=(Nt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,y=_n(i)?function(){return i(o)}:function(){return i||2.8},x,v,S=km(c,e.type,!0,r),w=function(){return v=!1},E=li,L=li,M=function(){l=Fi(c,Ft),L=Ps($i?1:0,l),n&&(E=Ps(0,Fi(c,mn))),x=Xr},b=function(){f._gsap.y=ba(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},j=function(){if(v){requestAnimationFrame(w);var q=ba(o.deltaY/2),J=L(d.v-q);if(f&&J!==d.v+d.offset){d.offset=J-d.v;var R=ba((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",d.cacheID=et.cache,Bi()}return!0}d.offset&&b(),v=!0},G,U,O,k,Z=function(){M(),G.isActive()&&G.vars.scrollY>l&&(d()>l?G.progress(1)&&d(l):G.resetTo("scrollY",l))};return f&&ve.set(f,{y:"+=0"}),e.ignoreCheck=function(F){return $i&&F.type==="touchmove"&&j()||_>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},e.onPress=function(){v=!1;var F=_;_=ba((rt.visualViewport&&rt.visualViewport.scale||1)/m),G.pause(),F!==_&&Ac(c,_>1.01?!0:n?!1:"x"),U=g(),O=d(),M(),x=Xr},e.onRelease=e.onGestureStart=function(F,q){if(d.offset&&b(),!q)k.restart(!0);else{et.cache++;var J=y(),R,B;n&&(R=g(),B=R+J*.05*-F.velocityX/.227,J*=Sd(g,R,B,Fi(c,mn)),G.vars.scrollX=E(B)),R=d(),B=R+J*.05*-F.velocityY/.227,J*=Sd(d,R,B,Fi(c,Ft)),G.vars.scrollY=L(B),G.invalidate().duration(J).play(.01),($i&&G.vars.scrollY>=l||R>=l-1)&&ve.to({},{onUpdate:Z,duration:J})}a&&a(F)},e.onWheel=function(){G._ts&&G.pause(),dn()-p>1e3&&(x=0,p=dn())},e.onChange=function(F,q,J,R,B){if(Xr!==x&&M(),q&&n&&g(E(R[2]===q?U+(F.startX-F.x):g()+q-R[1])),J){d.offset&&b();var K=B[2]===J,oe=K?O+F.startY-F.y:d()+J-B[1],ne=L(oe);K&&oe!==ne&&(O+=ne-oe),d(ne)}(J||q)&&Bi()},e.onEnable=function(){Ac(c,n?!1:"x"),tt.addEventListener("refresh",Z),Gt(rt,"resize",Z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){Ac(c,!0),Ht(rt,"resize",Z),tt.removeEventListener("refresh",Z),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Nt(e),o.iOS=$i,$i&&!d()&&d(1),$i&&ve.ticker.add(li),k=o._dc,G=ve.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bm(d,d(),function(){return G.pause()})},onUpdate:Bi,onComplete:k.vars.onComplete}),o};tt.sort=function(s){return $e.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(s){return new Nt(s)};tt.normalizeScroll=function(s){if(typeof s>"u")return Pn;if(s===!0&&Pn)return Pn.enable();if(s===!1)return Pn&&Pn.kill();var e=s instanceof Nt?s:rE(s);return Pn&&Pn.target===e.target&&Pn.kill(),Zr(e.target)&&(Pn=e),e};tt.core={_getVelocityProp:ru,_inputObserver:km,_scrollers:et,_proxies:gi,bridge:{ss:function(){Zn||Qr("scrollStart"),Zn=dn()},ref:function(){return Jt}}};Rm()&&ve.registerPlugin(tt);Vu.registerPlugin(tt);const sE=new Ky;let bs=null;sE.load("./square43/square43.glb",s=>{bs=s.scene.children[0],bs.position.x=0,bs.position.y=0,bs.rotation.z=Math.PI,la.add(bs)});const aE=document.querySelector("#threejs"),la=new oy;la.background=null;const no=new fp("#fff",2);new jy(no);no.rotation.x=Math.PI/4;no.position.z=2;no.position.y=2;la.add(no);const oE=new Ny("#fff",1),io=new hp("#fff",10);new Yy(io);io.position.z=-2;io.position.y=2;io.position.x=-2;la.add(io,oE);const ui={width:window.innerWidth,height:window.innerHeight+1},xi=new pn(45,ui.width/ui.height,.1,1e3);xi.position.x=0;xi.position.y=4;xi.position.z=10;la.add(xi);Vu.to(xi.position,{scrollTrigger:{target:"#app",scrub:1},z:-6,x:-2,y:-4});const na=new rp({canvas:aE,alhpa:!0});na.setClearColor(0,0);na.setSize(ui.width,ui.height);na.setPixelRatio(Math.min(window.devicePixelRatio,2));const lE=new Fy;function zm(){lE.getElapsedTime(),bs&&(xi.lookAt(new D(0,0,0)),xi.updateMatrix()),na.render(la,xi),window.requestAnimationFrame(zm)}zm();window.addEventListener("resize",()=>{ui.width=window.innerWidth,ui.height=window.innerHeight+1,xi.aspect=ui.width/ui.height,xi.updateProjectionMatrix(),na.setSize(ui.width,ui.height),na.setPixelRatio(Math.min(window.devicePixelRatio,2))});
//# sourceMappingURL=index-4f9b881f.js.map
