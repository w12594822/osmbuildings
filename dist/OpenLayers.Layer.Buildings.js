(function(j){var v=v||Array,x=Math.exp,ja=Math.log,ya=Math.tan,za=Math.atan,ka=Math.min,Aa=Math.max,la=j.document,y=function(){function W(e,g,l){if(l<0)l+=1;if(l>1)l-=1;if(l<1/6)return e+(g-e)*6*l;if(l<0.5)return g;if(l<2/3)return e+(g-e)*(2/3-l)*6;return e}function D(e,g,l,m){this.r=e;this.g=g;this.b=l;this.a=arguments.length<4?1:m}var X=D.prototype;X.toString=function(){return"rgba("+[this.r,this.g,this.b,this.a.toFixed(2)].join(",")+")"};X.adjustLightness=function(e){var g=y.toHSLA(this);g.l*=
e;g.l=Math.min(1,Math.max(0,g.l));var l,m;if(g.s===0)e=l=m=g.l;else{m=g.l<0.5?g.l*(1+g.s):g.l+g.s-g.l*g.s;var w=2*g.l-m;e=W(w,m,g.h+1/3);l=W(w,m,g.h);m=W(w,m,g.h-1/3)}return new y(~~(e*255),~~(l*255),~~(m*255),g.a)};X.adjustAlpha=function(e){return new y(this.r,this.g,this.b,this.a*e)};D.parse=function(e){e+="";if(~e.indexOf("#")){e=e.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);return new y(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16)/255:1)}if(e=e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new y(parseInt(e[1],
10),parseInt(e[2],10),parseInt(e[3],10),e[4]?parseFloat(e[5],10):1)};D.toHSLA=function(e){var g=e.r/255,l=e.g/255,m=e.b/255,w=Math.max(g,l,m),z=Math.min(g,l,m),E,L=(w+z)/2,F;if(w===z)E=z=0;else{F=w-z;z=L>0.5?F/(2-w-z):F/(w+z);switch(w){case g:E=(l-m)/F+(l<m?6:0);break;case l:E=(m-g)/F+2;break;case m:E=(g-l)/F+4;break}E/=6}return{h:E,s:z,l:L,a:e.a}};return D}(),Y=Math.PI,wa=Y/2,Ba=Y/4,Ca=180/Y,Da=256,ma=14,na=400,xa=na-50,Z="latitude",$="longitude",M=0,J=1,B=2,ga=3;j.OSMBuildings=function(W){function D(a,
c){var b={};a/=aa;c/=aa;b[Z]=c<=0?90:c>=1?-90:Ca*(2*za(x(Y*(1-2*c)))-wa);b[$]=(a===1?1:(a%1+1)%1)*360-180;return b}function X(a,c){return a.replace(/\{ *([\w_]+) *\}/g,function(b,d){return c[d]})}function e(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<200||b.status>299||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function g(){if(!(!oa||A<ma)){var a=D(Q-ba,R-pa),c=D(Q+N+ba,R+G+pa);ha&&ha.abort();ha=e(X(oa,
{w:a[$],n:a[Z],e:c[$],s:c[Z],z:A}),l)}}function l(a){var c,b,d,f=[],h=0,i=0;ca=ma;L(A);ha=null;if(!(!a||a.meta.z!==A)){d=a.meta;b=a.data;if(t&&n&&t.z===d.z){h=t.x-d.x;i=t.y-d.y;a=0;for(c=n.length;a<c;a++)f[a]=n[a][J][0]+h+","+(n[a][J][1]+i)}t=d;n=[];a=0;for(c=b.length;a<c;a++){n[a]=b[a];n[a][M]=ka(n[a][M],xa);d=n[a][J][0]+","+n[a][J][1];n[a][ga]=!(f&&~f.indexOf(d))}F()}}function m(a,c){var b=[],d,f,h,i,k,q,p,o,r=qa-A;d=0;for(f=a.length;d<f;d++){k=a[d];q=k[J];p=new v(q.length);h=0;for(i=q.length-1;h<
i;h+=2){o=q[h+1];var H=ka(1,Aa(0,0.5-ja(ya(Ba+wa*q[h]/180))/Y/2));o={x:~~((o/360+0.5)*aa),y:~~(H*aa)};p[h]=o.x;p[h+1]=o.y}b[d]=[];b[d][M]=ka(k[M]>>r,xa);b[d][J]=p;b[d][B]=k[B];b[d][ga]=c}return b}function w(a,c){if(typeof a==="object")E(a,!c);else{var b=la.documentElement,d=la.createElement("script");j.jsonpCallback=function(f){delete j.jsonpCallback;b.removeChild(d);E(f,!c)};b.insertBefore(d,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function z(a,c,b){if(b===undefined)b=[];var d,
f,h,i=a[0]?a:a.features,k,q,p,o,r,H=c?1:0,S=c?0:1;if(i){d=0;for(a=i.length;d<a;d++)z(i[d],c,b);return b}if(a.type==="Feature"){f=a.geometry;d=a.properties}if(f.type==="Polygon")k=[f.coordinates];if(f.type==="MultiPolygon")k=f.coordinates;if(k){c=d.height;if(d.color||d.wallColor)o=y.parse(d.color||d.wallColor);if(d.roofColor)r=y.parse(d.roofColor);d=0;for(a=k.length;d<a;d++){q=k[d][0];i=[];f=p=0;for(h=q.length;f<h;f++){i.push(q[f][H],q[f][S]);p+=c||q[f][2]||0}if(p){f=[];f[M]=~~(p/q.length);q=J;p=void 0;
h=void 0;var O=void 0,C=void 0,T=0,I=void 0,da=void 0;I=0;for(da=i.length-3;I<da;I+=2){p=i[I];h=i[I+1];O=i[I+2];C=i[I+3];T+=p*C-O*h}if((T/2>0?"CW":"CCW")==="CW")i=i;else{p=[];for(h=i.length-2;h>=0;h-=2)p.push(i[h],i[h+1]);i=p}f[q]=i;if(o||r)f[B]=[o,r];b.push(f)}}}return b}function E(a,c){if(a){ea=z(a,c);ca=0;L(A);t={n:90,w:-180,s:-90,e:180,x:0,y:0,z:A};n=m(ea,true);F()}else{ea=null;K()}}function L(a){A=a;aa=Da<<A;P=1-(A-ca)*0.3/(qa-ca)}function F(){fa=0;clearInterval(ra);ra=setInterval(function(){fa+=
0.1;if(fa>1){clearInterval(ra);fa=1;for(var a=0,c=n.length;a<c;a++)n[a][ga]=0}K()},33)}function K(){s.clearRect(0,0,N,G);if(t&&n)if(!(A<ca||sa)){var a,c,b,d,f,h,i,k,q=Q-t.x,p=R-t.y,o,r,H,S,O,C,T,I=ta.adjustAlpha(P)+"",da=(ua||ta.adjustLightness(1.2)).adjustAlpha(P)+"";if(ia)s.strokeStyle=Ea.adjustAlpha(P)+"";a=0;for(c=n.length;a<c;a++){f=n[a];r=false;h=f[J];o=[];b=0;for(d=h.length-1;b<d;b+=2){o[b]=i=h[b]-q;o[b+1]=k=h[b+1]-p;r||(r=i>0&&i<N&&k>0&&k<G)}if(r){s.fillStyle=f[B]&&f[B][0]?f[B][0].adjustAlpha(P)+
"":I;b=f[ga]?f[M]*fa:f[M];h=na/(na-b);i=[];k=[];b=0;for(d=o.length-3;b<d;b+=2){r=o[b];H=o[b+1];S=o[b+2];O=o[b+3];C={x:~~((r-U)*h+U)+0.5,y:~~((H-V)*h+V)+0.5};T={x:~~((S-U)*h+U)+0.5,y:~~((O-V)*h+V)+0.5};if((S-r)*(C.y-H)>(C.x-r)*(O-H)){if(!k.length){k.unshift(H+0.5);k.unshift(r+0.5);k.push(C.x,C.y)}k.unshift(O+0.5);k.unshift(S+0.5);k.push(T.x,T.y)}else{va(k);k=[]}i[b]=C.x;i[b+1]=C.y}va(k);s.fillStyle=!f[B]?da:f[B][1]?f[B][1].adjustAlpha(P)+"":ua?da:f[B][0].adjustLightness(1.2).adjustAlpha(P)+"";va(i,
ia)}}}}function va(a,c){if(a.length){s.beginPath();s.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)s.lineTo(a[b],a[b+1]);s.closePath();c&&s.stroke();s.fill()}}var N=0,G=0,ba=0,pa=0,Q=0,R=0,A,aa,ha,u,s,oa,ia,ta=new y(200,190,180),ua,Ea=new y(145,140,135),ea,t,n,P=1,fa=1,ra,ca=ma,qa=20,U,V,sa;this.setStyle=function(a){a=(a=a)||{};ia=a.strokeRoofs!==undefined?a.strokeRoofs:ia;if(a.color||a.wallColor)ta=y.parse(a.color||a.wallColor);if(a.roofColor!==undefined)ua=y.parse(a.roofColor);K();return this};
this.geoJSON=function(a,c){w(a,c);return this};this.setCamOffset=function(a,c){U=ba+a;V=G+c};this.setMaxZoom=function(a){qa=a};this.createCanvas=function(a){u=la.createElement("canvas");u.style.webkitTransform="translate3d(0,0,0)";u.style.imageRendering="optimizeSpeed";u.style.position="absolute";u.style.pointerEvents="none";u.style.left=0;u.style.top=0;a.appendChild(u);s=u.getContext("2d");s.lineCap="round";s.lineJoin="round";s.lineWidth=1;try{s.mozImageSmoothingEnabled=false}catch(c){}return u};
this.destroyCanvas=function(){u.parentNode.removeChild(u)};this.loadData=g;this.onMoveEnd=function(){var a=D(Q,R),c=D(Q+N,R+G);K();if(t&&(a[Z]>t.n||a[$]<t.w||c[Z]<t.s||c[$]>t.e))g()};this.onZoomEnd=function(a){sa=false;L(a.zoom);if(ea){n=m(ea);K()}else{K();g()}};this.onZoomStart=function(){sa=true;K()};this.render=K;this.setOrigin=function(a,c){Q=a;R=c};this.setSize=function(a,c){N=a;G=c;ba=~~(N/2);pa=~~(G/2);U=ba;V=G;u.width=N;u.height=G};this.setZoom=L;oa=W};j.OSMBuildings.VERSION="0.1.7a";j.OSMBuildings.ATTRIBUTION=
'&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(j){j=j||{};j.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,j)},setOrigin:function(){var j=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),v=this.map.resolution,x=this.maxExtent;this.osmb.setOrigin(Math.round((j.lon-x.left)/v),Math.round((x.top-
j.lat)/v))},setMap:function(j){if(!this.map){OpenLayers.Layer.prototype.setMap(j);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(j){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(j)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(j,v,x){j=OpenLayers.Layer.prototype.moveTo(j,v,x);if(!x){x=parseInt(this.map.layerContainerDiv.style.left,10);var ja=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-x+"px";this.div.style.top=-ja+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);v?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return j},moveByPx:function(j,v){this.dxSum+=j;this.dySum+=v;var x=OpenLayers.Layer.prototype.moveByPx(j,v);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return x},geoJSON:function(j,v){return this.osmb.geoJSON(j,v)},setStyle:function(j){return this.osmb.setStyle(j)}});