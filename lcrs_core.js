<!--
 
waJSQuery(function(){
waJSQuery.fn.extend({
disableSelection:function(){
this.each(function(){
this.onselectstart=function(){return false;};
this.unselectable="on";
waJSQuery(this).css('-moz-user-select','none');
waJSQuery(this).css('-webkit-user-select','none');
});
}
});
waJSQuery.fn.extend({everyTime:function(interval,label,fn,times,belay){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,times,belay);});},oneTime:function(interval,label,fn){return this.each(function(){waJSQuery.timer.add(this,interval,label,fn,1);});},stopTime:function(label,fn){return this.each(function(){waJSQuery.timer.remove(this,label,fn);});}});waJSQuery.extend({timer:{guid:1,global:{},regex:/^([0-9]+)\s*(.*s)?$/,powers:{
'ms':1,'cs':10,'ds':100,'s':1000,'das':10000,'hs':100000,'ks':1000000},timeParse:function(value){if(value==undefined||value==null) return null;var result=this.regex.exec(waJSQuery.trim(value.toString()));if(result[2]){var num=parseInt(result[1],10);var mult=this.powers[result[2]]||1;return num*mult;}else{return value;}},add:function(element,interval,label,fn,times,belay){var counter=0;if(waJSQuery.isFunction(label)){if(!times) times=fn;fn=label;label=interval;}interval=waJSQuery.timer.timeParse(interval);if(typeof interval!='number'||isNaN(interval)||interval<=0) return;if(times&&times.constructor!=Number){belay=!!times;times=0;}times=times||0;belay=belay||false;if(!element.$timers) element.$timers={};if(!element.$timers[label]) element.$timers[label]={};fn.$timerID=fn.$timerID||this.guid++;var handler=function(){if(belay&&this.inProgress) return;this.inProgress=true;if((++counter>times&&times!==0)||fn.call(element,counter)===false) waJSQuery.timer.remove(element,label,fn);this.inProgress=false;};handler.$timerID=fn.$timerID;if(!element.$timers[label][fn.$timerID]) element.$timers[label][fn.$timerID]=window.setInterval(handler,interval);if(!this.global[label]) this.global[label]=[];this.global[label].push(element);},remove:function(element,label,fn){var timers=element.$timers,ret;if(timers){if(!label){for(label in timers) this.remove(element,label,fn);}else if(timers[label]){if(fn){if(fn.$timerID){window.clearInterval(timers[label][fn.$timerID]);delete timers[label][fn.$timerID];}}else{for(var fn in timers[label]){window.clearInterval(timers[label][fn]);delete timers[label][fn];}}for(ret in timers[label]) break;if(!ret){ret=null;delete timers[label];}}for(ret in timers) break;if(!ret) element.$timers=null;}}}});if(waJSQuery.browser.msie) waJSQuery(window).one("unload",function(){var global=waJSQuery.timer.global;for(var label in global){var els=global[label],i=els.length;while(--i) waJSQuery.timer.remove(els[i],label);}});
});


function waParseCleanStringJSON(s)
{
var ANJUK="{"
var tlkmH="}"
var iTdOK=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if(c=="\"")
{
do
{
i++;
c=s.charAt(i)
}
while(c!="\"")
}
if(c==ANJUK)
{
var JLnLU=0;
var pdEoe=true;
var qSWpr=false;
do
{
pdEoe=true;
i++;
c=s.charAt(i)
if((qSWpr==false)&&(c=="\""))
{
qSWpr=true;
}
else
if((qSWpr==true)&&(c=="\""))
{
qSWpr=false;
}
if(qSWpr==false)
{
if(c==ANJUK)
{
JLnLU++;
}
if((c!=tlkmH)||(JLnLU!=0))
{
iTdOK+=c;
}
if(JLnLU>0)
if(c==tlkmH)
{
JLnLU--;
pdEoe=false
}
}
else
{
iTdOK+=c;
}
}
while((pdEoe==false)||(c!=tlkmH)||(JLnLU!=0))
break;
}
}
iTdOK=ANJUK+iTdOK+tlkmH 
try{
return waJSQuery.parseJSON(iTdOK);
}
catch(e){
}
return null;
}
function waLoadGoogleFonts()
{
var wf=document.createElement('script');
wf.src=('https:'==document.location.protocol?'https':'http')+'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
wf.type='text/javascript';
wf.async='true';
var s=document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf,s);
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser)||"An unknown browser";
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;
var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},dataBrowser:[
{
string:navigator.userAgent,subString:"Chrome",identity:"Chrome"
},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"
},{
string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"
},{
prop:window.opera,identity:"Opera",versionSearch:"Version"
},{
string:navigator.vendor,subString:"iCab",identity:"iCab"
},{
string:navigator.vendor,subString:"KDE",identity:"Konqueror"
},{
string:navigator.userAgent,subString:"Firefox",identity:"Firefox"
},{
string:navigator.vendor,subString:"Camino",identity:"Camino"
},{
string:navigator.userAgent,subString:"Netscape",identity:"Netscape"
},{
string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"
},{
string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"
},{
string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"
}
],dataOS:[
{
string:navigator.platform,subString:"Win",identity:"Windows"
},{
string:navigator.platform,subString:"Mac",identity:"Mac"
},{
string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"
},{
string:navigator.platform,subString:"Linux",identity:"Linux"
}
]
};
BrowserDetect.init();
function RGBColor(mSIYM)
{
this.ok=false;this.a=1.0;
if(mSIYM.charAt(0)=='#'){mSIYM=mSIYM.substr(1);}
mSIYM=mSIYM.replace(/ /g,'');
mSIYM=mSIYM.toLowerCase();
var alYUQ=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<alYUQ.length;i++){
var hEiLS=alYUQ[i].re;
var IJIRw=alYUQ[i]._process;
var FEvdG=hEiLS.exec(mSIYM);
if(FEvdG){
var gXqEo=IJIRw(FEvdG);
this.r=gXqEo[0];this.g=gXqEo[1];this.b=gXqEo[2];this.a=gXqEo[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.bVnMl=function(PCMnf)
{
if(PCMnf.length==1)PCMnf="0"+PCMnf
return PCMnf
}
this.toHexaOpaqueColor=function()
{
return  "#"+this.bVnMl(this.r.toString(16))+this.bVnMl(this.g.toString(16))+this.bVnMl(this.b.toString(16));
}
}
function compliantColor(VkuAv)
{
if(isMSIE_lower_than_ie9())
{
if(VkuAv=="") return "";
if(VkuAv=="transparent") return "";
var IXDae=new RGBColor(VkuAv)
if(IXDae.a==0) return ""
return IXDae.toHexaOpaqueColor();
}
return VkuAv;
}
function isProbablyRobot()
{
return BrowserDetect.browser.length==0
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer"
}
function isFirefox()
{
return BrowserDetect.browser=="Firefox" 
}
function isChrome()
{
return BrowserDetect.browser=="Chrome"
}
function isWindowsOS()
{
if(BrowserDetect.OS.match(/windows/i)) return true;
return false;
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function isMSIE_lower_than_ie9()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return false;
}
}
return true;
}
return false;
}
function isMSIE_higher_than_ie8()
{
if(isMSIE())
{
if(document.documentMode)
{
if(document.documentMode>=9)
{
return true;
}
}
return false;
}
return false;
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isAndroidMobile()
{
if(navigator.userAgent.match(/android/i)) return true;
return false;
}
function isMobileBrowser()
{
return isAppleMobile()||isAndroidMobile();
}
function isChrome()
{
if(navigator.userAgent.match(/Chrome/i))
return true;
return false;
}
function isAppleMobile()
{
return isIPhone()||isIPad()
}
function isIPad()
{
if(navigator.userAgent.match(/iPad/i))
return true;
return false;
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function waJSONLinkToHref(XDDRf)
{
var PCMnf=""
var GqNks=XDDRf.url
var loGMj=Translator.m_lang_for_filename
if(loGMj.length>0)loGMj="_"+loGMj
GqNks=GqNks.replace(/@lng@/g,loGMj)
var eDMaH=XDDRf.js
if(eDMaH==undefined)eDMaH=""
PCMnf+="href=\""+GqNks+"\" "
if(XDDRf.open==1)
{
PCMnf+="target="
PCMnf+="_blank "
}
if(eDMaH.length>0)
{
PCMnf+="onclick=waLaunchFunction(function(){"+eDMaH+"}) "
}
return PCMnf;
}
function waJSONLinkToOnClick(XDDRf)
{
var PCMnf=""
var GqNks=XDDRf.url
var loGMj=Translator.m_lang_for_filename
if(loGMj.length>0)loGMj="_"+loGMj
GqNks=GqNks.replace(/@lng@/g,loGMj)
var QqIoh="";
if(XDDRf.open==1)
{
QqIoh="_blank"
}
var eDMaH=XDDRf.js
if(eDMaH==undefined)eDMaH=""
eDMaH=eDMaH.replace(/\"/g,"&quot;")
PCMnf+="onclick=\"waOnClick('"+GqNks+"',{'targ':'"+QqIoh+"'";
if(eDMaH.length>0)
{
PCMnf+=",'js':function(){"+eDMaH+"}"
}
PCMnf+="});return false;\" "
return PCMnf;
}
function waLaunchFunction(ovYBJ)
{
ovYBJ()
}
function waOnClick(GqNks,KnABQ)
{
if(KnABQ.js!=undefined)
{
try
{
KnABQ.js()
}
catch(e)
{
alert('ERROR: javascript link '+KnABQ.js)
}
}
if((GqNks==undefined)||(GqNks.length==0)) return;
var QqIoh=KnABQ.targ;
if(QqIoh&&QqIoh.length>0)
{
if((QqIoh.length>0)&&(QqIoh!="_blank"))
{
window.frames[QqIoh].location.href=(GqNks)
}
else
{
window.open(GqNks,QqIoh)
}
}
else
{
window.location.href=(GqNks)
}
return false;
}


function waActivateDynamicLoader(mCSIv,ACKEU)
{
var kdptS=mCSIv.find(".wa-dyn-loader")
if(kdptS.data('timer_animation_initialized')==true)
{
return;
}
kdptS.data('timer_animation_initialized',true) 
if(ACKEU)
{
kdptS.css({"width":mCSIv.width(),"height":mCSIv.height()})
}
var mgoaW=65
var FJlun=500;
var FHAgi=kdptS.children("img")
kdptS.everyTime(mgoaW,function(i)
{
var dtBdV=waJSQuery(this).data("anim_delay_img")
if(dtBdV==undefined)dtBdV=mgoaW;
if(dtBdV>=FJlun)
{
FHAgi.show()
}
var erhbk=kdptS.data("anim_frm")
if(erhbk==undefined)erhbk=0;
var QsAHU=40
var qPdkQ=0;
var IERoV=erhbk*QsAHU
var npHuV=qPdkQ+QsAHU;
var KqAoV=IERoV+QsAHU;;
var SrAdN=(waJSQuery(this).width()-QsAHU)/2
var bceHA=(waJSQuery(this).height()-QsAHU)/2
FHAgi.css({"left":SrAdN,"top":-IERoV+bceHA})
FHAgi.css({"clip":"rect("+IERoV+"px,"+npHuV+"px,"+KqAoV+"px,"+qPdkQ+"px)"})
erhbk=(erhbk+1)%12
waJSQuery(this).data("anim_frm",erhbk)
dtBdV+=mgoaW
waJSQuery(this).data("anim_delay_img",dtBdV)
});
}
function htmlDynamicLoader(XsLAI,evTVB,hqRkP)
{
var PCMnf=""
PCMnf+="<div class='wa-dyn-loader' style=\"";
if(XsLAI)
{
PCMnf+="position:absolute;left:0px;top:0px;"
}
else
{
PCMnf+="position:relative;left:0px;top:0px;"
}
PCMnf+="width:"+evTVB+"px;height:"+hqRkP+"px;"
PCMnf+="overflow:hidden;" 
var n=0
var QsAHU=40
var qPdkQ=0;
var IERoV=n*QsAHU
var npHuV=qPdkQ+QsAHU;
var KqAoV=IERoV+QsAHU;;
PCMnf+=";\">"
PCMnf+="<img style=\"position:absolute;border:none;left:0px;top:0px;";
PCMnf+="display:none;"
PCMnf+="clip:rect("+IERoV+"px,"+npHuV+"px,"+KqAoV+"px,"+qPdkQ+"px);"
PCMnf+="\" ";
PCMnf+="src=\"wa_loading.png\" />"
PCMnf+="</div>"
return PCMnf;
}
function Size(lx,ly)
{
this.evTVB=lx;this.hqRkP=ly;
this.width=function(){return this.evTVB}
this.height=function(){return this.hqRkP}
this.clone=function(){return new Size(this.evTVB,this.hqRkP)}
this.greaterThan=function(PCMnf){if(PCMnf==undefined) return null;return(this.evTVB>PCMnf.evTVB)&&(this.hqRkP>PCMnf.hqRkP)}
this.toString=function()
{
return this.width()+"x"+this.height()
}
this.scale=function(cEBKL,HiEjg)
{
if(!HiEjg)HiEjg=false
var QsAHU=this;
var JQsxE=QsAHU.width()
var TttBw=QsAHU.height()
var p1=JQsxE*cEBKL.height();
var p2=cEBKL.width()*TttBw;
var r1=JQsxE/TttBw;
var r2=TttBw/JQsxE;
var newSize1=new Size(cEBKL.height()*r1,cEBKL.height());
var newSize2=new Size(cEBKL.width(),cEBKL.width()*r2);
if(p2>p1)
{
if((HiEjg==true)||((newSize1.width()<=QsAHU.width())&&(newSize1.height()<=QsAHU.height())))
{
QsAHU.evTVB=Math.round(newSize1.width());
QsAHU.hqRkP=Math.round(newSize1.height());
}
}
else
{
if((HiEjg==true)||((newSize2.width()<=QsAHU.width())&&(newSize2.height()<=QsAHU.height())))
{
QsAHU.evTVB=Math.round(newSize2.width());
QsAHU.hqRkP=Math.round(newSize2.height());
}
}
this.evTVB=QsAHU.width();
this.hqRkP=QsAHU.height();
return true;
}
this.scaleByExpanding=function(cEBKL)
{
var QsAHU=this;
var JQsxE=QsAHU.width()
var TttBw=QsAHU.height()
var p1=JQsxE*cEBKL.height();
var p2=cEBKL.width()*TttBw;
var r1=JQsxE/TttBw;
var r2=TttBw/JQsxE;
var newSize1=new Size(cEBKL.height()*r1,cEBKL.height());
var newSize2=new Size(cEBKL.width(),cEBKL.width()*r2);
if(p2<p1)
{
if((newSize1.width()<=QsAHU.width())&&(newSize1.height()<=QsAHU.height()))
{
QsAHU.evTVB=Math.round(newSize1.width());
QsAHU.hqRkP=Math.round(newSize1.height());
}
}
else
{
if((newSize2.width()<=QsAHU.width())&&(newSize2.height()<=QsAHU.height()))
{
QsAHU.evTVB=Math.round(newSize2.width());
QsAHU.hqRkP=Math.round(newSize2.height());
}
}
this.evTVB=QsAHU.width();
this.hqRkP=QsAHU.height();
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(GGsoj,fluxp){this.x+=GGsoj;this.y+=fluxp;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(IsSvs){return(this.x==IsSvs.x)&&(this.y==IsSvs.y)&&(this.width==IsSvs.width)&&(this.height==IsSvs.height);}
this.copy=function(IsSvs){this.x=IsSvs.x;this.y=IsSvs.y;this.width=IsSvs.width;this.height=IsSvs.height;}
this.translate=function(GGsoj,fluxp){this.x+=GGsoj;this.y+=fluxp;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
var ZtcfA=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<ZtcfA.length;i++)
{
var array2=ZtcfA[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,ZtcfA[i].acc)
}
}
return res;
}
function IsNumeric(FJmiK)
{
var DNLpH="0123456789.";var HrRrk=true;var XAtfS;
for(FiqLJ=0;FiqLJ<FJmiK.length&&HrRrk==true;FiqLJ++){XAtfS=FJmiK.charAt(FiqLJ);if(DNLpH.indexOf(XAtfS)==-1) HrRrk=false;}
return HrRrk;
}
function getDocumentSize()
{
return new Size(waJSQuery(document).width(),waJSQuery(document).height());
}
function getWindowSize()
{
if(isAppleMobile())
{
return new Size(window.innerWidth,window.innerHeight);
}
return new Size(waJSQuery(window).width(),waJSQuery(window).height());
}
function urlSuffixe(mgoaW_minuts)
{
var KUXdx=mgoaW_minuts*60;
var StKlq=new Date();
var uOEeV=0;
uOEeV+=StKlq.getYear()*12*31*24*60*60;
uOEeV+=StKlq.getMonth()*31*24*60*60;
uOEeV+=StKlq.getDate()*24*60*60;
uOEeV+=StKlq.getHours()*60*60;
uOEeV+=StKlq.getMinutes()*60;
uOEeV+=StKlq.getSeconds();
if(KUXdx!=0)
{
uOEeV=Math.floor(uOEeV/KUXdx)*KUXdx
}
return "-"+uOEeV;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function YrvYp()
{
var LUXGn=document.getElementsByTagName("A");
for(var FiqLJ=0;FiqLJ<LUXGn.length;FiqLJ++)
{
var IsSvs=LUXGn[FiqLJ];
if(IsSvs.onmouseover)IsSvs.onmouseover=null;
if(IsSvs.onmouseout)IsSvs.onmouseout=null;
}
}
function KThFu()
{
for(var uSSSI in document.wa_global_list_element)
{
var BgaPC=document.wa_global_list_element[uSSSI]
var DJgbO=document.getElementById(BgaPC)
DJgbO.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(BgaPC)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(BgaPC)
}
function KSUSr()
{
var GqNks=window.location.search;
if(GqNks.substr(0,1)=="?")GqNks=GqNks.substr(1);
if(GqNks.length==0)return;
var HEabi=new Array();
var Ldfwo=GqNks.split("&");
for(var i=0;i<Ldfwo.length;i++)
{
var KjBnb=Ldfwo[i].split("=");HEabi[KjBnb[0]]=KjBnb[1];
}
var PCMnf_info=HEabi["wa_key"];
if(!PCMnf_info)return;
var WqpQE=new Array();
WqpQE.m_unid=PCMnf_info;
WqpQE.m_index_item=-1;
var CoLJS_sep_info=PCMnf_info.indexOf("-");
if(CoLJS_sep_info!=-1)
{
WqpQE.m_unid=PCMnf_info.substring(0,CoLJS_sep_info);
WqpQE.m_index_item=parseInt(PCMnf_info.substring(CoLJS_sep_info+1));
}
document.wa_global_query_info=WqpQE;
}
function IS_onload_WA()
{
if(isAppleMobile())
{
YrvYp()
}
else
{
KThFu()
}
KSUSr();

xWMNP()
}
function xWMNP()
{
var VXONE=0;
var BRiQa=document.webaca_banner_height;
var jBDIa=document.webaca_page_option_background
if(document.webaca_page_is_centered)
{
var cCovH=getDocumentSize().width() 

var icoOM=document.webaca_width_page
if((jBDIa==0)||(jBDIa==1))
{
if(cCovH>icoOM)VXONE=(cCovH-icoOM)/2;
}
else
if(jBDIa==2)
{
}
else
if(jBDIa==3) 
{
VXONE=cCovH/2-(document.webaca_page_background_img_size[0]/2);
}
}
if(document.body&&document.body.style)
document.body.style.backgroundPosition=VXONE+"px "+BRiQa+"px";
}
waJSQuery(window).resize(function(){
xWMNP()
});


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var cDUje=CONST_WA_COUNTRIES.codes[n]
var SPLOS=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[cDUje]=SPLOS
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k,bEncodeBr)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
if(bEncodeBr!=false)
{
v=v.replace(/\n/g,"<br>")
}
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}

function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(qfECf,AxGqL)
{
AxGqL.call(qfECf)
}
function WA_exec_delayedCallback(qfECf,AxGqL)
{
wa_timeout(Delegate.create(qfECf,AxGqL),0);
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_onSearch(BgaPC_input)
{
var cIOfU=document.getElementById(BgaPC_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(cIOfU,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
quMCf(cIOfU)
}
}
function MqMHL(GiViA)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(GiViA[0],document.const_wa_search_index_js)
}
function quMCf(cIOfU_field)
{
WA_loadScript(document.const_wa_search_js,MqMHL,[cIOfU_field])
}
function UuiAO(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return UuiAO(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}

function MD5(string){
function RotateLeft(lValue,iShiftBits){
return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits));
}
function AddUnsigned(lX,lY){
var lX4,lY4,lX8,lY8,lResult;
lX8=(lX&0x80000000);
lY8=(lY&0x80000000);
lX4=(lX&0x40000000);
lY4=(lY&0x40000000);
lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);
if(lX4&lY4){
return(lResult^0x80000000^lX8^lY8);
}
if(lX4|lY4){
if(lResult&0x40000000){
return(lResult^0xC0000000^lX8^lY8);
}else{
return(lResult^0x40000000^lX8^lY8);
}
}else{
return(lResult^lX8^lY8);
}
}
function F(x,y,z){return(x&y)|((~x)&z);}
function G(x,y,z){return(x&z)|(y&(~z));}
function H(x,y,z){return(x^y^z);}
function I(x,y,z){return(y^(x|(~z)));}
function FF(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function GG(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function HH(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function II(a,b,c,d,x,s,ac){
a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));
return AddUnsigned(RotateLeft(a,s),b);
};
function ConvertToWordArray(string){
var lWordCount;
var lMessageLength=string.length;
var lNumberOfWords_temp1=lMessageLength+8;
var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;
var lNumberOfWords=(lNumberOfWords_temp2+1)*16;
var lWordArray=Array(lNumberOfWords-1);
var lBytePosition=0;
var lByteCount=0;
while(lByteCount<lMessageLength){
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));
lByteCount++;
}
lWordCount=(lByteCount-(lByteCount%4))/4;
lBytePosition=(lByteCount%4)*8;
lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);
lWordArray[lNumberOfWords-2]=lMessageLength<<3;
lWordArray[lNumberOfWords-1]=lMessageLength>>>29;
return lWordArray;
};
function WordToHex(lValue){
var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
for(lCount=0;lCount<=3;lCount++){
lByte=(lValue>>>(lCount*8))&255;
WordToHexValue_temp="0"+lByte.toString(16);
WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
}
return WordToHexValue;
};
function Utf8Encode(string){
string=string.replace(/\r\n/g,"\n");
var utftext="";
for(var n=0;n<string.length;n++){
var c=string.charCodeAt(n);
if(c<128){
utftext+=String.fromCharCode(c);
}
else if((c>127)&&(c<2048)){
utftext+=String.fromCharCode((c>>6)|192);
utftext+=String.fromCharCode((c&63)|128);
}
else{
utftext+=String.fromCharCode((c>>12)|224);
utftext+=String.fromCharCode(((c>>6)&63)|128);
utftext+=String.fromCharCode((c&63)|128);
}
}
return utftext;
};
var x=Array();
var k,AA,BB,CC,DD,a,b,c,d;
var S11=7,S12=12,S13=17,S14=22;
var S21=5,S22=9,S23=14,S24=20;
var S31=4,S32=11,S33=16,S34=23;
var S41=6,S42=10,S43=15,S44=21;
string=Utf8Encode(string);
x=ConvertToWordArray(string);
a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;
for(k=0;k<x.length;k+=16){
AA=a;BB=b;CC=c;DD=d;
a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);
d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);
c=FF(c,d,a,b,x[k+2],S13,0x242070DB);
b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);
a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);
d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);
c=FF(c,d,a,b,x[k+6],S13,0xA8304613);
b=FF(b,c,d,a,x[k+7],S14,0xFD469501);
a=FF(a,b,c,d,x[k+8],S11,0x698098D8);
d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);
c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);
d=GG(d,a,b,c,x[k+6],S22,0xC040B340);
c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);
a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);
d=GG(d,a,b,c,x[k+10],S22,0x2441453);
c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);
a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);
d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);
b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);
a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);
c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);
b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);
d=HH(d,a,b,c,x[k+8],S32,0x8771F681);
c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);
d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);
c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);
b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);
c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);
b=HH(b,c,d,a,x[k+6],S34,0x4881D05);
a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);
d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);
a=II(a,b,c,d,x[k+0],S41,0xF4292244);
d=II(d,a,b,c,x[k+7],S42,0x432AFF97);
c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
b=II(b,c,d,a,x[k+5],S44,0xFC93A039);
a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);
c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
b=II(b,c,d,a,x[k+1],S44,0x85845DD1);
a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);
d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
c=II(c,d,a,b,x[k+6],S43,0xA3014314);
b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
a=II(a,b,c,d,x[k+4],S41,0xF7537E82);
d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);
b=II(b,c,d,a,x[k+9],S44,0xEB86D391);
a=AddUnsigned(a,AA);
b=AddUnsigned(b,BB);
c=AddUnsigned(c,CC);
d=AddUnsigned(d,DD);
}
var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
return temp.toLowerCase();
}
function centerTextContent(IsSvs)
{
var SPLOS=IsSvs.html()
IsSvs.html("<div class='inner-content' style='position:absolute;'></div>")
var hLVkX=IsSvs.find(".inner-content")
hLVkX.html(SPLOS)
hLVkX.css({top:(IsSvs.height()-hLVkX.height())/2,left:(IsSvs.width()-hLVkX.width())/2})
}
function centerElement(OpcuR,mTuDF)
{
var FHAgi=OpcuR.children(mTuDF)
FHAgi.css("left",(OpcuR.width()-FHAgi.width())/2)
FHAgi.css("top",(OpcuR.height()-FHAgi.height())/2)
}
function splitClassParameters(s,sep1,sep2)
{
var arr=new Array()
var clName=""
var clParam=""
var c;
for(var i=0;i<s.length;i++)
{
c=s.charAt(i)
if((c==' ')||(c==sep2))
{
arr[clName]=clParam;
clName=""
clParam=""
}
else
if(c==sep1)
{
var JLnLU=0;
var pdEoe=true;
do
{
pdEoe=true;
i++;
c=s.charAt(i)
if(c==sep1)
{
JLnLU++;
}
if((c!=sep2)||(JLnLU!=0))
{
clParam+=c;
}
if(JLnLU>0)
if(c==sep2)
{
JLnLU--;
pdEoe=false
}
}
while((pdEoe==false)||(c!=sep2)||(JLnLU!=0)) 
}
else
{
clName+=c;
}
}
if(clName.length>0)
{
arr[clName]=clParam;
}
return arr;
}
function splitClass(s)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
var arr2=splitClassParameters(v,'(',')')
for(k2 in arr2)
{
alert("#"+k+"  "+k2+" = "+arr2[k2])
}
}
}
}
function extractClassInfo(s,className)
{
var arr=splitClassParameters(s,'[',']')
for(k in arr)
{
var v=arr[k];
if(v.length>0)
{
if(k==className)
{
var arr2=splitClassParameters(v,'(',')') 

return arr2;
}
}
}
return null
}
function extractParamInfo(IsSvs,NtgBc,RHYRn)
{
if(RHYRn==undefined)RHYRn="param"
if(IsSvs==undefined) return ""
var GYKFD=IsSvs.attr("class");
if(GYKFD==undefined) return ""
var AbrXe=extractClassInfo(GYKFD,RHYRn);
if(AbrXe==null) return ""
if(AbrXe==undefined) return ""
if(AbrXe[NtgBc]==undefined) return ""
if(NtgBc) return  AbrXe[NtgBc]
return AbrXe;
}


function getBrowserInfos()
{
var OOPNe={
}
if(waJSQuery.browser.webkit)OOPNe.engine="webkit"
if(waJSQuery.browser.mozilla)OOPNe.engine="ff"
if(waJSQuery.browser.msie)OOPNe.engine="ie"
return OOPNe
}
function waSetVisibilityMainPageContenair(NhnZT)
{
if(NhnZT)
{
waJSQuery(".wa-video").show()
}
else
{
waJSQuery(".wa-video").hide()
}
}
function isValidEmailAddress(UIkRb)
{
var rjnVw=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
return rjnVw.test(UIkRb);
}
function ZlhgW(c,x,y,lx,ly)
{
c.beginPath();
c.moveTo(x,y);
c.lineTo(x+lx,y);
c.lineTo(x+lx,y+ly);
c.lineTo(x,y+ly);
c.lineTo(x,y);
c.closePath();
}
function bxMpn(c,x,y,lx,ly,LhsQf,alETK)
{
if(typeof(LhsQf)=="number")
{
LhsQf=[LhsQf,LhsQf,LhsQf,LhsQf]
}
if(alETK)
{
c.moveTo(x+LhsQf[0],y);c.lineTo(x+lx-LhsQf[1],y);c.quadraticCurveTo(x+lx,y,x+lx,y+LhsQf[1]);c.lineTo(x+lx,y+ly-LhsQf[2]);c.quadraticCurveTo(x+lx,y+ly,x+lx-LhsQf[2],y+ly);c.lineTo(x+LhsQf[3],y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-LhsQf[3]);c.lineTo(x,y+LhsQf[0]);c.quadraticCurveTo(x,y,x+LhsQf[0],y);
return;
}
c.moveTo(x,y+LhsQf[0]);c.lineTo(x,y+ly-LhsQf[3]);c.quadraticCurveTo(x,y+ly,x+LhsQf[3],y+ly);c.lineTo(x+lx-LhsQf[2],y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-LhsQf[2]);c.lineTo(x+lx,y+LhsQf[1]);c.quadraticCurveTo(x+lx,y,x+lx-LhsQf[1],y);c.lineTo(x+LhsQf[0],y);c.quadraticCurveTo(x,y,x,y+LhsQf[0]);
}
function waExtractCssStyle(PCMnf,cDUje)
{
return WGVmQ(PCMnf,cDUje);
}
function WGVmQ(PCMnf,cDUje)
{
if(PCMnf==undefined) return ""
var FlcqX=PCMnf.indexOf(cDUje);
if((FlcqX>-1)||((FlcqX>0)&&(PCMnf.substring(FlcqX-1)==";")))
{
PCMnf=PCMnf.substring(FlcqX)
FlcqX=PCMnf.indexOf(";");
if(FlcqX>-1)
{
PCMnf=PCMnf.substring(0,FlcqX) 
FlcqX=PCMnf.indexOf(":");
if(FlcqX>-1)
{
PCMnf=PCMnf.substring(FlcqX+1)
}
return waJSQuery.trim(PCMnf);
}
else
{
FlcqX=PCMnf.indexOf(":");
if(FlcqX>-1)
{
PCMnf=PCMnf.substring(FlcqX+1)
}
return waJSQuery.trim(PCMnf);
}
}
return "";
}
function waExtractRadiusFromCss(IsSvs)
{
var vjJKR=0;
var QEQMi=IsSvs.attr("style");
var RCslv="border-radius"
if(isMSIE_higher_than_ie8())
{
RCslv="-moz-border-radius" 
}
var  orUuQ=WGVmQ(QEQMi,RCslv) 
if(orUuQ.length==0)
{
var OJUQt=WGVmQ(QEQMi,"border-top-left-radius")
var LXGax=WGVmQ(QEQMi,"border-top-right-radius")
var qtAQl=WGVmQ(QEQMi,"border-bottom-right-radius")
var XiMLB=WGVmQ(QEQMi,"border-bottom-left-radius") 
if(OJUQt.length==0)OJUQt="0px"
if(LXGax.length==0)LXGax="0px"
if(qtAQl.length==0)qtAQl="0px"
if(XiMLB.length==0)XiMLB="0px"
orUuQ=OJUQt+" "+LXGax+" "+qtAQl+" "+XiMLB 


}
var splitradiusStr=orUuQ.split(" ") 

var LXGax=Math.max(0,parseInt(splitradiusStr[0])-vjJKR)
var qtAQl=Math.max(0,parseInt(splitradiusStr[1])-vjJKR)
var XiMLB=Math.max(0,parseInt(splitradiusStr[2])-vjJKR)
var YKfdC=Math.max(0,parseInt(splitradiusStr[3])-vjJKR)
if(splitradiusStr.length==1)
{
qtAQl=LXGax;XiMLB=LXGax;YKfdC=LXGax;
}
if(isNaN(LXGax))LXGax=0
if(isNaN(qtAQl))qtAQl=LXGax
if(isNaN(XiMLB))XiMLB=qtAQl
if(isNaN(YKfdC))YKfdC=XiMLB
return new Array(LXGax,qtAQl,XiMLB,YKfdC)
}
function waSoustractFromArrayRadius(BhMWE,HguHh)
{
for(var i=0;i<BhMWE.length;i++)
{
if(isNaN(BhMWE[i])||(BhMWE[i].length==0))
{
BhMWE[i]=0
}
else
{
BhMWE[i]=Math.max(0,BhMWE[i]-HguHh)
}
}
return BhMWE;
}
function waGenerateNewGradientID()
{
var DXOGX=waJSQuery(document).data("curCanvasGradientId")
if(DXOGX==undefined)DXOGX=0;
waJSQuery(document).data("curCanvasGradientId",DXOGX+1)
return "canvasGradientId"+DXOGX;
}
function waGetDrawingSurface(IsSvs,NAJnG,CYHTM)
{
var hSgiY="wa-div-bg-gradient" 
var FDhHq=null
var SviEp=IsSvs.find("."+hSgiY) 
if(SviEp.length==0)
{

var xEtHk=-1;
IsSvs.append("<div class='"+hSgiY+"' ></div>")
SviEp=IsSvs.find("."+hSgiY)
SviEp.css({position:"absolute",top:0,left:0,width:NAJnG,height:CYHTM,zIndex:xEtHk})
var QXLPn=waGenerateNewGradientID();
SviEp.html("<canvas id='"+QXLPn+"' width="+NAJnG+" height="+CYHTM+" style='z-index:"+xEtHk+"' ></canvas>")
SviEp.data("waCanvasId",QXLPn)
FDhHq=document.getElementById(QXLPn);
if(isMSIE_lower_than_ie9())
{
if(window.G_vmlCanvasManager)
window.G_vmlCanvasManager.initElement(FDhHq);
}
}
else
{
var QXLPn=SviEp.data("waCanvasId")
FDhHq=document.getElementById(QXLPn);
}
if(FDhHq==null)
{
if(isMSIE())
{
if(document.documentMode==8)
{
if(/MSIE 9/.test(navigator.userAgent))
{
if(document.warning_ie9_frame!=true)
{
document.warning_ie9_frame=true
alert(window.location+"\n"+Translator.tr("This site is probably in a frame,Display problems can occur with IE9 you have to enabled Force IE8 rendering in WA4 website properties",false));
}
}
}
}
return null;
}
var KMKbD=FDhHq.getContext('2d');
return KMKbD;
}
function qDNbg(KMKbD,WpqUK)
{
var AcwZn=WpqUK.split(" ")
if(AcwZn.length>1)
{
var ashmk=parseInt(AcwZn[0]);
var bAExY=parseInt(AcwZn[1]);;
var qEARS=parseInt(AcwZn[2]);
var HXfOE=parseInt(AcwZn[3]);
var JaxXC=AcwZn[4]
var CYLNR="";
if(AcwZn.length>5)
{
CYLNR=AcwZn[5]
}
if(JaxXC=="undefined")JaxXC=""
if(CYLNR=="undefined")CYLNR="" 



if(CYLNR=="")CYLNR=JaxXC
if(isMSIE_lower_than_ie9())
{

var IkGcR=new RGBColor(JaxXC)
var aZqWd=new RGBColor(CYLNR)
if(JaxXC=="")
{
var EQTmV=new RGBColor(CYLNR)
EQTmV.a=0;
JaxXC=EQTmV.toRGB()
}
if(CYLNR=="")
{
var EQTmV=new RGBColor(JaxXC)
EQTmV.a=0;
CYLNR=EQTmV.toRGB()
}
}





var KwgPq=KMKbD.createLinearGradient(ashmk,bAExY,qEARS,HXfOE);
KwgPq.addColorStop(0,JaxXC);
KwgPq.addColorStop(1,CYLNR);


return KwgPq
}
else
{
return WpqUK
}
}
function waDrawRoundedRectInSurface(KMKbD,NAJnG,CYHTM,LhsQf,WpqUK,vjJKR,UqBVq)
{

if((UqBVq==undefined)||(UqBVq.length==0))
{
vjJKR=0
}
if(vjJKR==0)
{
UqBVq=""
}
var dPjhF=NAJnG-2*vjJKR
var ivfGN=CYHTM-2*vjJKR
var SHhHR=new Array(LhsQf[0],LhsQf[1],LhsQf[2],LhsQf[3])
SHhHR=waSoustractFromArrayRadius(SHhHR,vjJKR)
if(WpqUK!=null)
{
{
KMKbD.fillStyle=qDNbg(KMKbD,WpqUK) 
var GGsoj=vjJKR
var fluxp=vjJKR
if(KMKbD.fillStyle!="")
{
KMKbD.beginPath();
bxMpn(KMKbD,GGsoj,fluxp,dPjhF,ivfGN,SHhHR)
KMKbD.closePath();
KMKbD.fill()
}
}
}
if((vjJKR>0)&&(UqBVq)&&(UqBVq.length>0))
{
KMKbD.fillStyle=UqBVq;
KMKbD.beginPath();
bxMpn(KMKbD,0,0,NAJnG,CYHTM,LhsQf)
bxMpn(KMKbD,vjJKR,vjJKR,dPjhF,ivfGN,SHhHR,true)
KMKbD.closePath();
KMKbD.fill()
}
}
function waDrawRoundedRect(IsSvs,NAJnG,CYHTM,LhsQf,WpqUK,vjJKR,UqBVq)
{
var KMKbD=waGetDrawingSurface(IsSvs,NAJnG,CYHTM)
waDrawRoundedRectInSurface(KMKbD,NAJnG,CYHTM,LhsQf,WpqUK,vjJKR,UqBVq)
}
function waDrawButton(IsSvs,WpqUK,UqBVq,NKJaM,biLaE)
{
var CWfhO=IsSvs.parent()
var BYcRK=CWfhO.find(".waButInner")
BYcRK.hide()
var uEdvs=CWfhO.find(".waButGlossInner")
uEdvs.hide()
IsSvs.css("background","")
IsSvs.css("border","none")
var vjJKR=1;
if((UqBVq==undefined)||(UqBVq.length==0))
{
vjJKR=0;
}
var BYWbO=1;
var IUndk=IsSvs.outerWidth()
var MhFSx=IsSvs.outerHeight()
var NAJnG=IUndk
var CYHTM=MhFSx
var Gongx=(extractParamInfo(IsSvs,"aqua")=="1")
var LhsQf=waExtractRadiusFromCss(IsSvs)
var KMKbD=waGetDrawingSurface(IsSvs,NAJnG,CYHTM) 
if(isMSIE_lower_than_ie9())
{
IsSvs.css("border","")
}
KMKbD.clearRect(0,0,NAJnG,CYHTM)
var oBQWf=UqBVq
if(isMSIE_lower_than_ie9())
{
var vumTa=WpqUK.split(" ")
var JaxXC=""
var CYLNR="" 
if(vumTa.length<=1)
{
JaxXC=WpqUK
CYLNR=WpqUK
}
else
{
JaxXC=vumTa[4]
CYLNR=vumTa[5]
}
if(JaxXC==CYLNR)
{
waDrawRoundedRectInSurface(KMKbD,NAJnG,CYHTM,LhsQf,JaxXC,vjJKR,oBQWf)
}
else
{
var YJQQk=40;
if(Gongx)
{
YJQQk=70;
}
var AwRNE=CYHTM-Math.round(CYHTM*YJQQk/100)
var LXGax=[LhsQf[0],LhsQf[1],0,0]
waDrawRoundedRectInSurface(KMKbD,NAJnG,CYHTM-AwRNE,LXGax,JaxXC,vjJKR,"")
var qtAQl=[0,0,LhsQf[2],LhsQf[3]]
var RVwht="0 0 0 "+AwRNE+" "+JaxXC+" "+CYLNR
KMKbD.fillStyle=qDNbg(KMKbD,RVwht)
KMKbD.beginPath();
var PHnmP=CYHTM-AwRNE
bxMpn(KMKbD,0,PHnmP,NAJnG,AwRNE,qtAQl)
KMKbD.closePath();
KMKbD.fill() 
if((oBQWf.length>0)&&(vjJKR>0))
{
KMKbD.fillStyle=""
KMKbD.strokeStyle=oBQWf;
KMKbD.beginPath();
bxMpn(KMKbD,0,0,NAJnG,CYHTM,LhsQf)
KMKbD.closePath();
KMKbD.stroke();
}
}
}
else
{

waDrawRoundedRectInSurface(KMKbD,NAJnG,CYHTM,LhsQf,WpqUK,vjJKR,oBQWf)
}
if(NKJaM&&(NKJaM.length>0))
{
KMKbD.fillStyle=""
if(isMSIE_lower_than_ie9())
{
KMKbD.strokeStyle=NKJaM;
}
else
{
KMKbD.strokeStyle=qDNbg(KMKbD,"0 "+Math.round(CYHTM/2)+" 0 "+CYHTM+" "+NKJaM+" transparent") 
}
KMKbD.beginPath();
bxMpn(KMKbD,1.5,1.5,NAJnG-3,CYHTM-3,LhsQf)
KMKbD.closePath();
KMKbD.stroke()
}
if(Gongx)
{
var JaxXC="rgba(255,255,255,0.5)"
var CYLNR="rgba(255,255,255,0.1)"
var AwRNE=Math.round(CYHTM*0.5);
var Pbdrk=LhsQf[0]
var NSKNq=Pbdrk;
NSKNq=Math.min(NSKNq,AwRNE/2);
var xBjMw=Pbdrk-NSKNq;
xBjMw=Math.max(xBjMw,0);
var WpqUK="0 0 0 "+AwRNE+" "+JaxXC+" "+CYLNR 
KMKbD.fillStyle=qDNbg(KMKbD,WpqUK)
KMKbD.beginPath();
var PHnmP=0
bxMpn(KMKbD,xBjMw,PHnmP,NAJnG-2*xBjMw,PHnmP+AwRNE,NSKNq)
KMKbD.closePath();
KMKbD.fill()
}
}
function waHackGradient()
{
if(isWebKit()||isFirefox())
{
return false;
}
waJSQuery(".wa-bg-gradient").each(function()
{
var IsSvs=waJSQuery(this)
var QEQMi=IsSvs.attr("style");
var WpqUK=extractParamInfo(IsSvs,"grad") 
var KpiiS_borderProps=extractParamInfo(IsSvs,"border").split(" ")
var vjJKR=0
var UqBVq=""
if(KpiiS_borderProps.length>0)
{
vjJKR=parseInt(KpiiS_borderProps[0])
if(isNaN(vjJKR))vjJKR=0;
}
if(KpiiS_borderProps.length>1)
{
UqBVq=KpiiS_borderProps[1]
}
var haNnC=IsSvs.css("backgroundImage")
if((haNnC.length>0)&&(haNnC!="none"))
{
WpqUK=null
}
var NAJnG=IsSvs.width()+2*vjJKR
var CYHTM=IsSvs.height()+2*vjJKR
var LhsQf=waExtractRadiusFromCss(IsSvs)
IsSvs.css({border:"0px none",backgroundColor:"transparent"}) 
waDrawRoundedRect(IsSvs,NAJnG,CYHTM,LhsQf,WpqUK,vjJKR,UqBVq)
if(isMSIE())
{
IsSvs.css({width:NAJnG,height:CYHTM})
}
})
}
function waHasButtonHacking()
{
if(isWebKit()||isFirefox())
{
return false;
}
return true;
}
function waHackButtons()
{
if(waHasButtonHacking()==false)
{
return false;
}
waJSQuery(".wa-button").each(function()
{
var IsSvs=waJSQuery(this)
waHackButton(IsSvs)
})
}
function waPercentGradientButton(AnViR)
{
var Gongx=(extractParamInfo(AnViR,"aqua")=="1")
var hWFSx=40;
if(Gongx)
{
hWFSx=70;
}
return hWFSx;
}
function waHackButton(IsSvs)
{
var CWfhO=IsSvs.parent()
var BYcRK=CWfhO.find(".waButInner") 
BYcRK.show()
var uEdvs=CWfhO.find(".waButGlossInner")
uEdvs.show()
if(waHasButtonHacking()==false)
{
return false;
}
var MSsiX=IsSvs.data("saved-background-image")
if(MSsiX==null)
{
IsSvs.data("saved-background-image",IsSvs.css("background-image"))
}
var IPDlf=IsSvs.data("saved-background-image")
if((IPDlf.indexOf("url(")>-1)&&(IPDlf.indexOf("wa_transparent.gif")==-1))
{
return false;
}

IsSvs.css("background-color","")
var WpqUK=extractParamInfo(IsSvs,"grad")
var NKJaM=(extractParamInfo(IsSvs,"inborder"))
var UqBVq=(extractParamInfo(IsSvs,"border"))
waDrawButton(IsSvs,WpqUK,UqBVq,NKJaM)
}
function waHackButtonOver(IsSvs)
{
if(waHasButtonHacking()==false)
{
return false;
}
var AnViR=waJSQuery(">button",IsSvs);
var height=parseInt(IsSvs.css("height"));
var cl=IsSvs.attr("class")
var bg=extractParamInfo(IsSvs,"bg")
var WpqUK=null;
var hWFSx=waPercentGradientButton(AnViR)
if(bg&&(bg.length>0))
{
var AwRNE=Math.round(height*hWFSx/100)
var cols=bg.split(" ")
WpqUK="0 "+AwRNE+" 0 "+height+" "+cols[0]+" "+cols[1]
}
var bg_img=extractParamInfo(IsSvs,"bg_img")
if(bg_img&&(bg_img.length>0))
{
return;
}
var UqBVq=extractParamInfo(IsSvs,"bord");
var NKJaM=extractParamInfo(IsSvs,"inner_bord") 
waDrawButton(AnViR,WpqUK,UqBVq,NKJaM)
}
function waHackButtonOut(IsSvs)
{
waHackButton(IsSvs)
}
function waActivateOverButton(daYNt)
{
var Alvix=true;
var bQtii=null
if(Alvix)
{
bQtii=daYNt;
}
else
{
bQtii=waJSQuery(">span",daYNt);
}
var o=bQtii
var button=waJSQuery(">button",o);
var txtSpan=null
if(Alvix)
{
txtSpan=waJSQuery(">div",button);

}
else
{
txtSpan=waJSQuery(">span",button);
}
var vSkgC=daYNt.attr("onclick")
if(vSkgC=="javascript:void(0)")vSkgC=""
if(vSkgC==undefined)vSkgC=""
if(vSkgC=="#")vSkgC=""
if((o.hasClass('wa-js-action')==false)&&(vSkgC.length==0))
{
daYNt.css("cursor","default")
o.css("cursor","default")
button.css("cursor","default")
txtSpan.css("cursor","default")
}
else
{
daYNt.css("cursor","pointer")
o.css("cursor","pointer")
button.css("cursor","pointer")
txtSpan.css("cursor","pointer")
}

if(isMSIE())
{
var RspGj=false;
var FHAgi=button.css("background-image")
if((FHAgi&&(FHAgi.length==0))||(FHAgi=="none"))
{
button.css("background-image","url(wa_transparent.gif)") 
bQtii.append("<div style='position:absolute;top:0px;left:0px;width:100%;height:100%;;background-image:url(wa_transparent.gif)'></div>")
}
else
{
RspGj=true;
button.css("background-size",button.width()+" px "+button.height()+" px ")
}
}
var BYcRK=o.find(".waButInner")
var eMGqV=txtSpan.outerWidth()
eMGqV=Math.min(eMGqV,button.width())
var img=waJSQuery(">img",button);
var TRFsU=Math.round((button.width()-eMGqV)/2)
var rTAwj=Math.round((button.height()-txtSpan.outerHeight())/2) 
var eiBfQ=button.css("textAlign");
if(eiBfQ=="center")
{
TRFsU=Math.round((button.width()-eMGqV)/2)
}
if(eiBfQ=="left")
{
TRFsU=3
}
if(eiBfQ=="right")
{
TRFsU=button.width()-eMGqV-3
}
if((img.length==0)||(img.attr("src")==undefined))
{


}
var cl=o.attr("class")
var clParam=extractClassInfo(cl,"param")
BYcRK.css("border-bottom","0px none")
var BrWVM=o
BrWVM=bQtii 
BrWVM.data("link_data",o)
if(clParam!=null)
BrWVM.hover(function(){
var o=waJSQuery(this).data("link_data")
var button=waJSQuery(">button",o);
var aoeZQ=button.data("waButState")
if(aoeZQ==undefined) aoeZQ=0;
if(aoeZQ!=0) return;
button.data("waButState",1)
var height=button.outerHeight()
var Gongx=(extractParamInfo(button,"aqua")=="1")
var txtSpan=button.find(".wa-but-txt") 


var imgTag=waJSQuery(">img",button);
var innerSpan=waJSQuery(">.waButInner",o);
button.data('wa-style',button.attr('style'))
if(isMSIE_lower_than_ie9())
{
button.data('wa-style-bg-img',button.css('background-image'))
}
txtSpan.data('wa-style',txtSpan.attr('style'))
imgTag.data('wa-style',imgTag.attr('style'))
innerSpan.data('wa-style',innerSpan.attr('style'))
imgTag.data('wa-style-src',imgTag.attr('src')) 
{
var bg=extractParamInfo(o,"bg")
if(bg.length>0)
{
var cols=bg.split(" ")
var JaxXC=cols[0]
var CYLNR=JaxXC
if(cols.length>1)CYLNR=cols[1]
var hkOLw=getBrowserInfos();
var hWFSx=waPercentGradientButton(button)
if(hkOLw.engine=="webkit")
{
var AwRNE=Math.round(height*hWFSx/100) 
button.css("background","-webkit-gradient(linear,0 "+AwRNE+", 0 "+height+",from("+JaxXC+"),to("+CYLNR+"))")
}
if(hkOLw.engine=="ff")
{
button.css("background","-moz-linear-gradient(top left -90deg,"+JaxXC+" "+hWFSx+"%, "+CYLNR+" 100%)")
}
}
var borderCol=extractParamInfo(button,"border");
var borderColOver=extractParamInfo(o,"bord");
var huesx=new RGBColor(borderColOver)
var DKOBC=huesx.a>0;
var jqbPm=new RGBColor(borderCol)
var GPaoV=jqbPm.a>0;
if(DKOBC)
{
button.css("border","1px solid "+borderColOver)
}
else
{
button.css("border","0px")
}
var bg_img=extractParamInfo(o,"bg_img");
if(bg_img&&(bg_img.length>0))
{

var fEpuc=button.width();
var EqcOh=button.height();
if((GPaoV))
{
fEpuc+=2;
EqcOh+=2;
}
button.css({"background-image":"url('"+bg_img+"')","background-size":""+fEpuc+"px "+EqcOh+"px"})
}
}
var inner_borderCol=extractParamInfo(o,"inner_bord");
if(inner_borderCol&&(inner_borderCol.length>0))
{
innerSpan.css("border-color",inner_borderCol)
}
var txtCol=extractParamInfo(o,"txt");
if(txtCol&&(txtCol.length>0))
{
txtSpan.css("color",txtCol)
button.css("color",txtCol)
}
var OnJsj=extractParamInfo(o,"u");
if(OnJsj&&(OnJsj.length>0))
{
if(OnJsj=="1")
{
txtSpan.css("textDecoration","underline")
if(isMSIE())
{
button.css("textDecoration","underline")
}
}
else
{
txtSpan.css("textDecoration","none")
if(isMSIE())
{
button.css("textDecoration","none")
}
}
}
var img=extractParamInfo(o,"img");
if(img!=undefined)
{
if(img.length==0)
{
imgTag.css("width",0)
}
else
{
var img_pars=img.split(" ")
imgTag.attr("src",img_pars[0])
imgTag.css("width",img_pars[1])
imgTag.css("height",img_pars[2])
}
}
{
waHackButtonOver(o)
}
},function(){
var o=waJSQuery(this).data("link_data") 
var button=waJSQuery(">button",o);
var aoeZQ=button.data("waButState")
if(aoeZQ==undefined)aoeZQ=0;
if(aoeZQ!=1) return;
button.data("waButState",0)
var txtSpan=button.find(".wa-but-txt")
var imgTag=waJSQuery(">img",button);
var innerSpan=waJSQuery(">.waButInner",o);
button.attr("style",button.data("wa-style"))
if(isMSIE_lower_than_ie9())
{
button.css("background-image",button.data("wa-style-bg-img"))
}
txtSpan.attr("style",txtSpan.data("wa-style"))
imgTag.attr("style",imgTag.data("wa-style"))
imgTag.attr("src",imgTag.data("wa-style-src"))
innerSpan.attr("style",innerSpan.data("wa-style"))
waHackButtonOut(button)
});
}
function waActivateOverButtons()
{
waJSQuery(".wa-button-link").each(function(i)
{
var IsSvs=waJSQuery(this) 
waActivateOverButton(IsSvs)
})
}
function ElYQW(IsSvs)
{
wa_timeout(function(){ElYQW(IsSvs)},1000)
var gXcXA=IsSvs.find("div")
gXcXA.position().top
var GiViA=gXcXA.data("data-marquee")
var KCNpZ=GiViA.orientation
var gmoYX=GiViA.speed
}
function GldHu(gXcXA,now,fx)
{
if(isMSIE())
{
var GiViA=gXcXA.data("data-marquee")
var vrkOc=GiViA.size_cont;
var kKLPR=0;
var qiMLD=0;
if(GiViA.orientation!=0) 
{
kKLPR=-now;
}
else
{
qiMLD=-now;
}
var NAJnG=vrkOc.width()
var CYHTM=vrkOc.height()
var qtbDr=0;
var qPdkQ=qtbDr+kKLPR;
var IERoV=qtbDr+qiMLD;
var npHuV=NAJnG+kKLPR;;
var KqAoV=CYHTM+qiMLD
gXcXA.css("clip","rect("+IERoV+"px,"+npHuV+"px,"+KqAoV+"px,"+qPdkQ+"px)")
}
}
function bnPLW(gXcXA,sDZhR)
{
var GiViA=gXcXA.data("data-marquee")
var WDeOd=GiViA.prop
var WZYjV=GiViA.size
var axmhA=GiViA.innerSize
var dPCtb=GiViA.compSize
var JRlTs=0;
var tgbvg=0;
var bqmal={}
if(GiViA.orientation!=0) 
{
if(sDZhR==false)
{
JRlTs=gXcXA.position().left;;
gXcXA.css({"left":JRlTs})
}
else
{
var ujjqH=gXcXA.data("first-pos-marquee")
if(ujjqH==undefined)
{
ujjqH=gXcXA.position().left;
gXcXA.data("first-pos-marquee",ujjqH)
}
else
{
gXcXA.css({"left":ujjqH})
}
JRlTs=ujjqH;
}
if(JRlTs<=-axmhA)
{
JRlTs=dPCtb
gXcXA.css(WDeOd,JRlTs)
}
tgbvg=-WZYjV;
bqmal={"left":tgbvg}
}
else
{
if(sDZhR==false)
{
JRlTs=gXcXA.position().top;;
gXcXA.css({"top":JRlTs})
}
else
{
var ujjqH=gXcXA.data("first-pos-marquee")
if(ujjqH==undefined)
{
ujjqH=gXcXA.position().top;
gXcXA.data("first-pos-marquee",ujjqH)
}
else
{
gXcXA.css({"top":ujjqH})
}
JRlTs=ujjqH;
}
if(JRlTs<=-axmhA)
{
JRlTs=dPCtb
gXcXA.css(WDeOd,JRlTs)
}
tgbvg=-WZYjV;
bqmal={"top":tgbvg}
}
var PDuYc=((JRlTs-tgbvg)*1000)/GiViA.speed
var nfUfs={
"duration":PDuYc,"easing":"linear","complete":function(){bnPLW(waJSQuery(this),true);},"step":function(now,fx){GldHu(waJSQuery(this),now,fx);}
};
gXcXA.animate(bqmal,nfUfs);
}
function amOKl(IsSvs)
{
var KCNpZ=parseInt(extractParamInfo(IsSvs,"orientation","param_marquee"))
var gmoYX=parseInt(extractParamInfo(IsSvs,"speed","param_marquee")) 

var gXcXA=IsSvs.find("div")
var WDeOd="top"
var QsAHU=gXcXA.height()
var SNiqD=gXcXA.innerHeight()
var dPCtb=IsSvs.height();
if(KCNpZ!=0) 
{
var wrNab=gXcXA.find("div")
var sOEmK=wrNab.html()
var NDlut=gXcXA.innerWidth();
var CYHTM=wrNab.innerHeight();
var JWZsu=CYHTM
var UOvUB=NDlut;
for(var NAJnG=NDlut;NAJnG<10000;NAJnG+=30)
{
gXcXA.css("width",NAJnG)
CYHTM=wrNab.innerHeight();
if(CYHTM<JWZsu)
{
JWZsu=CYHTM
UOvUB=NAJnG
}
}
gXcXA.css("width",UOvUB+2)
}
if(KCNpZ!=0) 
{
dPCtb=IsSvs.width();
WDeOd="left"
QsAHU=gXcXA.width()
SNiqD=gXcXA.innerWidth() 
gXcXA.css(WDeOd,dPCtb) 

}
else
{
dPCtb=IsSvs.height();
WDeOd="top"
QsAHU=gXcXA.height()
SNiqD=gXcXA.innerHeight()
gXcXA.css(WDeOd,dPCtb)
}
gXcXA.data("data-marquee",{"speed":gmoYX,"orientation":KCNpZ,"size":QsAHU,"innerSize":SNiqD,"prop":WDeOd,"compSize":dPCtb,"size_cont":new Size(IsSvs.width(),IsSvs.height())})
gXcXA.hover(function(){
waJSQuery(this).stop();
},function(){
bnPLW(waJSQuery(this),false)
});
bnPLW(gXcXA)
}
function initializeWA_JQuery()
{

if(isMSIE())
{
var Dkiww=new Array();
var UedUI=waWebFontDescription.families
for(var i=0;i<UedUI.length;i++)
{
var MEOXn=UedUI[i]
Dkiww.push(MEOXn+"::latin")
}
WebFontConfig={
google:{families:Dkiww}
};
if(Dkiww.length>0)
{
waLoadGoogleFonts()
}
}
IS_onload();




waJSQuery(".reflect").reflect();
waJSQuery(".wa-img").each(function()
{
var IsSvs=waJSQuery(this)
var IoVUv=extractParamInfo(IsSvs,"over");
if(IoVUv.length>0)
{
IsSvs.hover(function(){
var o=waJSQuery(this)
var img=o
var over=extractParamInfo(o,"over");
waJSQuery(this).data('src',img.attr('src'))
img.attr("src",over)
},function(){
var o=waJSQuery(this)
var img=o
img.attr("src",waJSQuery(this).data("src"))
});
}
}) 


waJSQuery(".wa-text").each(function()
{
if(isMSIE())
{
var NAJnG=waJSQuery(this).width()
var CYHTM=waJSQuery(this).height()
var jKJpx=waJSQuery(this).children("div") 
var eXVpQ=parseInt(jKJpx.css("marginTop"))
if(isNaN(eXVpQ))eXVpQ=0;
var oESAI=parseInt(extractParamInfo(waJSQuery(this),"border","param")) 
var qtbDr=oESAI;
jKJpx.css("margin",(eXVpQ+qtbDr)+"px")
}
}) 


waJSQuery(".wa-textmarquee").each(function()
{
amOKl(waJSQuery(this))
}) 


waActivateOverButtons()
waHackGradient()
waHackButtons()
waGlobalPatchIE()
}
function waGlobalPatchIE()
{
if(isMSIE())
{
if(window.waPatchIE)
{
waPatchIE()
}
}
}(function(waJSQuery){
waJSQuery.fn.extend({
reflect:function(options){
var IsSvs=waJSQuery(this)
var _radius=waExtractRadiusFromCss(IsSvs) 
options=waJSQuery.extend({
height:1/3,opacity:0.5,borderRadius:_radius
},options);
return this.unreflect().each(function(){
var img=this;
if(/^img$/i.test(img.tagName)){
function doReflect(){
var imageWidth=img.width,imageHeight=img.height,reflection,reflectionHeight,wrapper,context,gradient;
reflectionHeight=Math.floor(imageHeight*options.height)
reflection=waJSQuery("<canvas />")[0];
if(reflection.getContext){
context=reflection.getContext("2d");
try{
waJSQuery(reflection).attr({width:imageWidth,height:imageHeight});
context.save();
context.translate(0,imageHeight-1);
context.scale(1,-1);
context.drawImage(img,0,0,imageWidth,imageHeight);
context.restore();
context.globalCompositeOperation="destination-out";
gradient=context.createLinearGradient(0,0,0,reflectionHeight);
gradient.addColorStop(0,"rgba(255, 255, 255, "+(1-options.opacity)+")");
gradient.addColorStop(1,"rgba(255, 255, 255, 1.0)");
context.fillStyle=gradient;
context.rect(0,0,imageWidth,imageHeight);
context.fill();
}catch(e){
return;
}
}else{
if(!waJSQuery.browser.msie) return;
reflection=waJSQuery("<img />").attr("src",img.src).css({
width:imageWidth,height:imageHeight,marginBottom:reflectionHeight-imageHeight,filter:"FlipV progid:DXImageTransform.Microsoft.Alpha(Opacity="+(options.opacity*100)+", FinishOpacity=0, Style=1, StartX=0, StartY=0, FinishX=0, FinishY="+(reflectionHeight/imageHeight*100)+")"
})[0];
}
var GmcHv=options.borderRadius 
var bkweJ=new Array(GmcHv[3],GmcHv[2],GmcHv[1],GmcHv[0])
var EoghU=GmcHv.join("px ")+"px"
var VofUG=bkweJ.join("px ")+"px"
waJSQuery(reflection).css({display:"block",borderRadius:VofUG});
wrapper=waJSQuery(/^a$/i.test(img.parentNode.tagName)?"<span />":"<div />").insertAfter(img).append([img,reflection])[0];
wrapper.className=img.className;
waJSQuery.data(img,"reflected",wrapper.style.cssText=img.style.cssText);
waJSQuery(wrapper).css({width:imageWidth,height:imageHeight+reflectionHeight,overflow:"hidden"});
img.style.cssText="display: block;border:0px none;-webkit-border-radius:"+EoghU+";-moz-border-radius:"+EoghU+";border-radius:"+EoghU+";width:"+imageWidth+"px;height:"+imageHeight+"px;" 

img.className="reflected";
}
if(img.complete) doReflect();
else waJSQuery(img).load(doReflect);
}
});
},unreflect:function(){
return this.unbind("load").each(function(){
var img=this,reflected=waJSQuery.data(this,"reflected"),wrapper;
if(reflected!==undefined){
wrapper=img.parentNode;
img.className=wrapper.className;
img.style.cssText=reflected;
waJSQuery.removeData(img,"reflected");
wrapper.parentNode.replaceChild(img,wrapper);
}
});
}
});
})(waJSQuery);(function(waJSQuery){
waJSQuery.fn.touchwipe=function(settings){
var config={
min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true
};
if(settings) waJSQuery.extend(config,settings);
this.each(function(){
var startX;
var startY;
var isMoving=false;
function cancelTouch(){
this.removeEventListener('touchmove',onTouchMove);
startX=null;
isMoving=false;
}
function onTouchMove(e){
if(config.preventDefaultEvents){
e.preventDefault();
}
if(isMoving){
var x=e.touches[0].pageX;
var y=e.touches[0].pageY;
var dx=startX-x;
var dy=startY-y;
if(Math.abs(dx)>=config.min_move_x){
cancelTouch();
if(dx>0){
config.wipeLeft();
}
else{
config.wipeRight();
}
}
else if(Math.abs(dy)>=config.min_move_y){
cancelTouch();
if(dy>0){
config.wipeDown();
}
else{
config.wipeUp();
}
}
}
}
function onTouchStart(e)
{
if(e.touches.length==1){
startX=e.touches[0].pageX;
startY=e.touches[0].pageY;
isMoving=true;
this.addEventListener('touchmove',onTouchMove,false);
}
}
if('ontouchstart' in document.documentElement){
this.addEventListener('touchstart',onTouchStart,false);
}
});
return this;
};
})(waJSQuery);



function waChgtLanguage(loGMj,kPshF)
{
var sWdxd=Translator.m_languages;
var mAOtA=window.location.pathname;
var euIRY=window.location.href;
var glTUM=window.location.host
var uSSSI=mAOtA.lastIndexOf("/")
var kHLsM=""
var LIYsJ=mAOtA
if(uSSSI>-1)
{
kHLsM=mAOtA.substring(0,uSSSI+1)
LIYsJ=mAOtA.substring(uSSSI+1)
}
if(LIYsJ.length==0)
{
LIYsJ="index.html"
euIRY+=LIYsJ;
}
if(document.webaca_is_preview)
{
if(sWdxd!=undefined)
{
var FiHEd=sWdxd[loGMj]
if(FiHEd)
{
window.location.replace(FiHEd)
return;
}
}
}
else
{
var uuZkv=euIRY
uuZkv=uuZkv.replace(glTUM,kPshF);
if(sWdxd!=undefined)
{
var FiHEd=sWdxd[loGMj]
uuZkv=uuZkv.replace(LIYsJ,FiHEd);

window.location.replace(uuZkv)
}
}
}
function waAutoDetectAndRedirectLang(jswlD)
{
if((jswlD.enable_preview_redirect!=true)&&document.webaca_is_preview)
{
return;
}
if(isProbablyRobot())
{
return;
}
if((jswlD.restricted_host!=undefined)&&(document.webaca_is_preview!=true))
{
var WooWC=false;
for(var i=0;i<jswlD.restricted_host.length;i++)
{
var kPshF=jswlD.restricted_host[i]
if(window.location.host==kPshF)
{
WooWC=true;
break;
}
}
if(WooWC==false)
{
return;
}
}
var vxSTL=navigator.language;
if(navigator.browserLanguage)
vxSTL=navigator.browserLanguage;
var uSSSI=vxSTL.indexOf("-")
if(uSSSI>0)
{
vxSTL=vxSTL.substr(0,uSSSI)
}
if(Translator.m_lang!=vxSTL)
{
if(jswlD.enabled_internal_redirect!=false)
{
var sWdxd=Translator.m_languages;
if(sWdxd)
{
var loGMj=sWdxd[vxSTL]
if(loGMj)
{
window.location.replace(loGMj)
return;
}
}
}
if(jswlD.redirect!=undefined)
{
var kPshF=jswlD.redirect[vxSTL]
if(kPshF!=undefined)
{
waChgtLanguage(vxSTL,kPshF);

}
}
}
}

-->
