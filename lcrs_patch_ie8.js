function OGGiZ()
{
waJSQuery(".wa-comp").each(function(i)
{
var IsSvs=waJSQuery(this)
var QEQMi=IsSvs.attr("style")
var bnsFO=IsSvs.data("ms-opacity")
var Krbbe=waExtractCssStyle(QEQMi,"-moz-transform")
if(Krbbe.length>0)
{
var uSSSI=Krbbe.indexOf("(")
if(uSSSI>-1)
{
Krbbe=Krbbe.substring(uSSSI+1)
uSSSI=Krbbe.indexOf("deg")
if(uSSSI>-1)
{
Krbbe=Krbbe.substring(0,uSSSI)
}
}
Krbbe=parseInt(Krbbe)
var FdSox=0;
var JPQDc=0;
var qtbDr=waExtractCssStyle(QEQMi,"-ms-transform-offset") 
var mOcJo=qtbDr.split(" ")
if(mOcJo.length==2)
{
FdSox=parseInt(mOcJo[0])
JPQDc=parseInt(mOcJo[1])
}
var rad_rot=Krbbe*2*Math.PI/360;
var costheta=Math.cos(rad_rot);
var sintheta=Math.sin(rad_rot);
var M11=costheta;
var M12=-sintheta;
var M21=sintheta;
var M22=costheta;
IsSvs.css({"left":IsSvs.position().left+FdSox,"top":IsSvs.position().top+JPQDc})
var RTYHp="progid:DXImageTransform.Microsoft.Matrix(M11="+M11+",M12="+M12+",M21="+M21+",M22="+M22+",SizingMethod='auto expand') ";
if((isNaN(bnsFO)==false)&&(bnsFO>=0)&&(bnsFO<1))
{
RTYHp+="Alpha(opacity="+Math.floor(bnsFO*100)+")"
}
IsSvs.css("filter",RTYHp) 
}
});
}
function jtVPS(IsSvs,YArWt,QqIoh)
{
if(QqIoh==undefined)QqIoh=""
if(YArWt&&(YArWt!="#")&&(YArWt!="javascript:void(0)")&&(YArWt.indexOf("javascript:")==-1))
{
IsSvs.css("cursor","pointer")
IsSvs.data("href_ie8",YArWt)
IsSvs.data("target_ie8",QqIoh)
IsSvs.attr("href","javascript:void(0)")
IsSvs.attr("target","")
IsSvs.click(function(){
var IsSvs=waJSQuery(this)
var YArWt=IsSvs.data("href_ie8")
var QqIoh=IsSvs.data("target_ie8")
return waOnClick(YArWt,{"targ":QqIoh})
});
}
}
function lvCnq()
{

waJSQuery(".wa-comp").each(function(i)
{
var IsSvs=waJSQuery(this)
var QEQMi=IsSvs.attr("style")
var bnsFO=waExtractCssStyle(QEQMi,"opacity")
var bnsFO=parseFloat(bnsFO)
if((isNaN(bnsFO)==false)&&(bnsFO>=0)&&(bnsFO<1))
{
IsSvs.css("filter","Alpha(opacity="+Math.floor(bnsFO*100)+")")
IsSvs.data("ms-opacity",bnsFO)
}
});
waJSQuery(".wa-button").each(function(i)
{
var IsSvs=waJSQuery(this)
var OfQOj=IsSvs.find(".wa-but-txt")
var gXcXA=OfQOj.parent("div")
gXcXA.css("width",OfQOj.width())
if(IsSvs.height()<gXcXA.height())
{
var BGlPZ=(IsSvs.width()-gXcXA.width())/2
var MdCpC=(IsSvs.height()-gXcXA.height())/2 
gXcXA.css({"position":"absolute","left":BGlPZ,"top":MdCpC})
}

});

{
waJSQuery(".wa-dynmenu").each(function(i)
{
var IsSvs=waJSQuery(this)
var AvQff=waGetJsonCss(IsSvs,"config");
if(AvQff.vertical)
{
var aUCUX=IsSvs.find("TD")
aUCUX.each(function(i)
{
var dNfeM=waJSQuery(this)
var CYHTM=dNfeM.height()
CYHTM=CYHTM-2
dNfeM.css({"line-height":CYHTM+"px","height":CYHTM+"px"})
})
}
});
}
OGGiZ()
}
function waPatchIE()
{
if(isMSIE()==false)
{
return;
}
if(isMSIE_lower_than_ie9())
{
lvCnq()
}

}
