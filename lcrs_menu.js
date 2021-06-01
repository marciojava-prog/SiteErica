<!--

waJSQuery(function(){
var rIDrF=waJSQuery(".waDynmenu-root");
rIDrF.each(function(){
waJSQuery(this).css("cursor","pointer")
}) 
var IeJCQ=waJSQuery(".waDynmenu-item");
IeJCQ.each(function(){
if(isMSIE())
{
waJSQuery(this).css("background","url(wa_transparent.gif)")
}
})
IeJCQ.hover(function(){
var GYKFD=waJSQuery(this).attr("class");
var DLYwg;
var BhMWE=splitClassParameters(GYKFD,'[',']')
if(BhMWE['param']!=undefined)
{
DLYwg=wa_evaluate("["+BhMWE['param']+"]");
waDynMenuOver(waJSQuery(this),DLYwg);
}
else
{
waDynMenuOver(waJSQuery(this));
}
},function(){
})
});
function jODHM()
{
return waJSQuery("#dynmenu-container");
}
function waGetJsonCss(IsSvs,dtQwp)
{
var PCMnf=psrKE(IsSvs,dtQwp)
PCMnf=PCMnf.replace(/''/g,"\"")
return waJSQuery.parseJSON(PCMnf)
}
function psrKE(IsSvs,dtQwp)
{
var GYKFD=IsSvs.attr("class");
if(GYKFD==undefined) return "" 
var cDUje="json['"+dtQwp+"']"
var uSSSI=GYKFD.indexOf(cDUje)
if(uSSSI>-1)
{
uSSSI=uSSSI+cDUje.length
var UiXLT=0;
var WYNvJ=false;
for(var i=uSSSI;i<GYKFD.length;i++)
{
var KMKbD=GYKFD.charAt(i)
if(KMKbD=="{")
{
if(WYNvJ==false)
{
WYNvJ=true;
}
UiXLT++;
}
if(KMKbD=="}")
{
UiXLT--;
if(WYNvJ&&(UiXLT==0))
{
return GYKFD.substring(uSSSI,i+1)
}
}
}
}
return "";
}
function Rcesl(IsSvs)
{
var i=0;
var dNfeM=IsSvs
var CtVBp=null;
do
{
CtVBp=null;
var HNVch=dNfeM.parents(".wa-menu-div")
if(HNVch.length==1)
{
CtVBp=HNVch.data("menu-item-parent")
}
if((CtVBp!=null)&&(CtVBp.length>0))
{
dNfeM=CtVBp;
}
i++}
while((CtVBp!=null)&&(CtVBp.length>0))
return dNfeM
}
function UrQVD(IsSvs)
{
var jpRcv=IsSvs.parents(".wa-dynmenu")
var AvQff=null
if(jpRcv.length==1)
{
AvQff=waGetJsonCss(jpRcv,"config");
}
if(AvQff==null)
{
var VGDav=Rcesl(IsSvs)
jpRcv=VGDav.parents(".wa-dynmenu")
AvQff=waGetJsonCss(jpRcv,"config");
}
return AvQff;
}
function waDynMenuOver(IsSvs,COHXl)
{
var kjjbW=jODHM()
var AvQff=UrQVD(IsSvs)
var xFLvL=(COHXl!=undefined)
if(xFLvL)
{
var JairH=IsSvs.data("menu-builded")
if(JairH!=true)
{
IsSvs.data("menu-builded",true)
var TkpLJ=kjjbW.data("index-menu")
if(TkpLJ==undefined)
{
TkpLJ=0;
}
else
{
TkpLJ++;
}
kjjbW.data("index-menu",TkpLJ)
var pTSJj="root"
MJEKk(IsSvs,AvQff,TkpLJ,true,COHXl)
kRgWN(IsSvs,AvQff,TkpLJ,null,COHXl);
}
}
else
{
MYXWm(IsSvs)
}
var KhvpF=kjjbW.data("current-raised-obj-menu")
if(KhvpF!=undefined)
{
DvYPA(KhvpF,true)
}
var HNVch=IsSvs.data("obj-menu")
kjjbW.data("current-raised-obj-menu",HNVch) 
UISOx(IsSvs)
}
function JQPaj(IsSvs)
{
var WnpPp=IsSvs.parents(".wa-menu-div")
if(WnpPp.length>0)
{
return WnpPp;
}
var CAhBt=IsSvs.data("menu-item-parent")
if(CAhBt!=undefined)
{
var WnpPp=CAhBt.parents(".wa-menu-div")
if(WnpPp.length>0)
{
return WnpPp;
}
}
return null
}
function aLTXx()
{
return 0-document.webaca_banner_height
}
function UISOx(IsSvs)
{
var AvQff=UrQVD(IsSvs)
var xBjMw=0;
if(document.webaca_page_is_centered)
{
if(waJSQuery(window).width()>document.webaca_width_page)
{
xBjMw=(waJSQuery(window).width()-document.webaca_width_page)/2
}
}
var WnpPp=IsSvs.parents(".wa-menu-div")
var wMXhe=(WnpPp.length==0) 
var YArWt=IsSvs.find("a")
if(YArWt.length==0)
{
YArWt=IsSvs
}
var aIxud=IsSvs.data("cssInitialized")
if(aIxud!=true)
{
IsSvs.data("cssInitialized",true)
var UhnVo={
color:YArWt.css("color"),"text-decoration":YArWt.css("text-decoration")
}
var piFOx={
backgroundColor:IsSvs.css("backgroundColor")
}
IsSvs.data("oldCssHref",UhnVo)
IsSvs.data("oldCss",piFOx)
}

if(wMXhe)
{
YArWt.css("color",AvQff.root_col_text_over)
YArWt.css("text-decoration",(AvQff.root_text_u_over)?"underline":"none")
IsSvs.css("backgroundColor",compliantColor(AvQff.root_col_bg_over))
if(false)
{
if(IsSvs.position().left==0)
{
IsSvs.css({borderLeft:"1px solid "+AvQff.root_col_border})
}
IsSvs.css({borderTop:"1px solid "+AvQff.root_col_border})
IsSvs.css({borderBottom:"1px solid "+AvQff.root_col_border})
}
}
else
{
YArWt.css("color",AvQff.sub_col_text_over)
YArWt.css("text-decoration",(AvQff.sub_text_u_over)?"underline":"none")
IsSvs.css("backgroundColor",compliantColor(AvQff.sub_col_bg_over))
}



var HNVch=IsSvs.data("obj-menu")
Trhfm(WnpPp)
Trhfm(HNVch) 
{
if(WnpPp.length>0)
{
var PJiLu=WnpPp.data("current-sub-obj-menu")
if(PJiLu!=null)
{
DvYPA(PJiLu,true)
}
WnpPp.data("current-sub-obj-menu",HNVch)
}
}
if(HNVch!=undefined)
{
var GGsoj=0;
var fluxp=0;
if(wMXhe)
{
if(AvQff.vertical)
{
var jpRcv=IsSvs.parents(".wa-dynmenu")
GGsoj=IsSvs.offset().left+jpRcv.outerWidth(true)-xBjMw;
fluxp=IsSvs.offset().top;
}
else
{
GGsoj=IsSvs.offset().left-xBjMw;
fluxp=IsSvs.offset().top+IsSvs.height()+3;
}
}
else
{
var xNELK=JQPaj(IsSvs)
GGsoj=xNELK.offset().left+xNELK.outerWidth(true)-xBjMw;
fluxp=IsSvs.offset().top;
}
var eXVpQ=10;
GGsoj=Math.max(GGsoj,waJSQuery(window).scrollLeft())
GGsoj=Math.min(GGsoj,waJSQuery(window).scrollLeft()+waJSQuery(window).width()-HNVch.width()-eXVpQ)
fluxp=Math.min(fluxp,waJSQuery(window).scrollTop()+waJSQuery(window).height()-HNVch.height()-eXVpQ)
fluxp=Math.max(fluxp,waJSQuery(window).scrollTop())
fluxp+=aLTXx()
HNVch.stop(true,true).fadeIn();
HNVch.css({"left":GGsoj,"top":fluxp})
}
}
function pcBiW(IsSvs)
{
var YArWt=IsSvs.find("a")
if(YArWt.length==0)
{
YArWt=IsSvs
}
var piFOx=IsSvs.data("oldCss")
var UhnVo=IsSvs.data("oldCssHref")
YArWt.css(UhnVo)
IsSvs.css(piFOx)
var HNVch=IsSvs.data("obj-menu")
var WnpPp=IsSvs.parents(".wa-menu-div") 
IOTCM(WnpPp)
if(WnpPp.length==0)
{
IOTCM(HNVch)
}
}
function Trhfm(HNVch)
{
if(HNVch==undefined) return;
if(HNVch.length>0)
{
var gscON=HNVch.data("timer-menu-out")
clearTimeout(gscON)
HNVch.show();
}
var WnpPp=JQPaj(HNVch)
Trhfm(WnpPp)
}
function DvYPA(HNVch,TsANL)
{
var uZxrq=HNVch.children(".wa-menu-item-div")
uZxrq.each(function(){
var WnpPp=waJSQuery(this).data("obj-menu")
if(WnpPp!=null)
WnpPp.stop(true,true).fadeOut();
})
if(TsANL)
{
HNVch.hide();
}
else
{
HNVch.stop(true,true).fadeOut();
}
}
function IOTCM(HNVch)
{
if(HNVch==undefined) return;
if(HNVch.length==0) return;
var nKZjh=600;
if(HNVch.length>0)
{
var gscON=wa_timeout(function()
{
DvYPA(HNVch)
},nKZjh)
HNVch.data("timer-menu-out",gscON)
}
var WnpPp=JQPaj(HNVch)
IOTCM(WnpPp)
}
function WgsRb(qfECf)
{
return IsSvs.parents(".wa-menu-div");
}
function MJEKk(IsSvs,AvQff,TkpLJ,wMXhe,COHXl)
{
var kjjbW=jODHM()
var hDoJo=kjjbW.data("id-menu")
if(hDoJo==undefined)
{
hDoJo=0;
kjjbW.data("id-menu",hDoJo)
}
if(wMXhe)
{
IsSvs.data("id-menu",hDoJo)
}
var ePBEM="";
var JsoIQ="wa-sub-menu-"+TkpLJ+"-"+hDoJo
ePBEM+="<div class='wa-menu-div' id='"+JsoIQ+"' style='position:absolute;left:0px;top:0px;width:1000px;text-align:"+AvQff.sub_align_text+";background-color:"+compliantColor(AvQff.sub_col_bg)+";";
ePBEM+="z-index:"+hDoJo+";"
if(AvQff.sub_menu_shadow)
{
ePBEM+="-webkit-box-shadow: 1px 1px 12px #555555;-moz-box-shadow:1px 1px 12px #555555; box-shadow:1px 1px 12px #555555; ;";
}
ePBEM+="padding-top:3px;padding-bottom:3px;;" 
ePBEM+="border:1px solid "+AvQff.sub_col_border+";' >" 
for(var i=0;i<COHXl.length;i++)
{
var DtbJa=COHXl[i] 
var JCSUd=""
var hZCAg=(DtbJa.length>1)
if(hZCAg)
{
hDoJo=kjjbW.data("id-menu")
hDoJo++;
kjjbW.data("id-menu",hDoJo)
}
if(DtbJa.length>0)
{
var jRaKH=DtbJa[0]
var SPLOS=jRaKH[0]
var GqNks=jRaKH[1]
var QqIoh=jRaKH[2]
var eDMaH=jRaKH[4]
var VCtIE=""
var mTuDF="wa-menu-item-div wa-sub-item-menu"
if(hZCAg)
{
mTuDF+=" param[index_sub_menu("+hDoJo+")]"
}
ePBEM+="<div class='"+mTuDF+"' style='position:absolute;overflow:auto;left:0px;"
ePBEM+="'>"
var WWddt="position:relative;"+AvQff.sub_style_text
if(AvQff.sub_text_u)
{
WWddt+="text-decoration:underline;"
}
else
{
WWddt+="text-decoration:none;"
}
if(GqNks.length==0)
{
GqNks="javascript:void(0)"
WWddt+="cursor:default;"
}
else
{
}
ePBEM+="<a href=\""+GqNks+"\" ";
if(eDMaH!=undefined)
{
ePBEM+="onclick=waLaunchFunction("+eDMaH+") ";
}
ePBEM+="style=\""+WWddt
ePBEM+="\" target=\""+QqIoh+"\">"
ePBEM+=SPLOS
if(hZCAg)
{
ePBEM+=" <b>&rsaquo;</b>"
}
else
{
}
ePBEM+="</a>"
ePBEM+="</div>"
}

if(hZCAg)
{
var kYHfk=DtbJa[1]
MJEKk(IsSvs,AvQff,TkpLJ,false,kYHfk)
}
}
ePBEM+="</div>"
kjjbW.append(ePBEM)
}
function kRgWN(IsSvs,AvQff,TkpLJ,hDoJo,COHXl)
{
if(hDoJo==null)
{
hDoJo=IsSvs.data("id-menu")
}
IsSvs.hover(function(){
UISOx(waJSQuery(this),AvQff)
},function(){
pcBiW(waJSQuery(this),AvQff)
}) 
var XlPxK=0;
var fbkDf=0;
var CpYAa=3;
if(COHXl!=undefined)
{
var HNVch=waJSQuery("#wa-sub-menu-"+TkpLJ+"-"+hDoJo);
IsSvs.data("obj-menu",HNVch)
if(HNVch.length>0)
{
HNVch.data("menu-item-parent",IsSvs)
}
var LsqRj=new Array()
HNVch.find(".wa-sub-item-menu").each(function(i)
{
LsqRj.push(waJSQuery(this))
});
for(var i=0;i<COHXl.length;i++)
{
var DtbJa=COHXl[i]
if(DtbJa.length>0)
{
var jRaKH=DtbJa[0] 
var SPLOS=jRaKH[0]
var tliET=LsqRj[i]
var NAJnG=tliET.outerWidth(true)*1.2
var CYHTM=tliET.outerHeight(true)*1.5
var FoSdX=CYHTM+4
var eXVpQ=FoSdX*0.5
eXVpQ=Math.max(eXVpQ,3)
var HQajN=NAJnG+5+eXVpQ;

var cBMtZ=(FoSdX-tliET.height())/2
tliET.css({top:CpYAa,width:HQajN,height:FoSdX})
var YArWt=tliET.find("a")
YArWt.css({top:cBMtZ})
XlPxK=Math.max(XlPxK,HQajN)
fbkDf+=FoSdX
CpYAa+=FoSdX;
if(AvQff.sub_align_text=="center")
{
YArWt.css({"marginLeft":0,"marginRight":0})
}
else
if(AvQff.sub_align_text=="right")
{
YArWt.css({"marginLeft":0,"marginRight":eXVpQ}) 
}
else
{
YArWt.css({"marginLeft":eXVpQ,"marginRight":0}) 
}
if(DtbJa.length>1)
{
var kYHfk=DtbJa[1]
var hDoJo=extractParamInfo(tliET,"index_sub_menu")
kRgWN(tliET,AvQff,TkpLJ,hDoJo,kYHfk)
}
else
{
MYXWm(tliET,TkpLJ,AvQff)
}
}
}
for(var i=0;i<COHXl.length;i++)
{
var DtbJa=COHXl[i]
if(DtbJa.length>0)
{
var tliET=LsqRj[i];
tliET.css({"width":XlPxK})
}
}
var Pbdrk=AvQff.sub_corner
HNVch.css({"-webkit-border-radius":Pbdrk,"-moz-border-radius":Pbdrk,"border-radius":Pbdrk})
HNVch.css({width:XlPxK,height:fbkDf})
HNVch.hide()
}
}
function MYXWm(IsSvs,AvQff,TkpLJ)
{
IsSvs.hover(function(){
UISOx(waJSQuery(this))
},function(){
pcBiW(waJSQuery(this))
})
}1

-->
