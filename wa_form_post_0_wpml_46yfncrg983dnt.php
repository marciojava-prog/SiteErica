<?php
include_once('waCommonFunction.php');
include_once('waErrorFunction.php');
$reply_to="";
$text="";
$b_have_info=false;
$wa_form0= waRetrievePostParameter('field0');
$text.= "Nome:\n".$wa_form0."\n\n";
if (($b_have_info==false) && (strlen($wa_form0)>0)) $b_have_info=true;
$wa_form1= waRetrievePostParameter('field1');
$text.= "Email:\n".$wa_form1."\n\n";
if (($b_have_info==false) && (strlen($wa_form1)>0)) $b_have_info=true;
$wa_form2= waRetrievePostParameter('field2');
$text.= "Telefone:\n".$wa_form2."\n\n";
if (($b_have_info==false) && (strlen($wa_form2)>0)) $b_have_info=true;
$wa_form3= waRetrievePostParameter('field3');
$text.= "Descreva em poucas palavras o que precisa.\n\n";
$wa_form4= waRetrievePostParameter('field4');
$text.= $wa_form4."\n\n";
if (($b_have_info==false) && (strlen($wa_form4)>0)) $b_have_info=true;
$message_error="";
$res=false;
$destinataire="oficial.agade@gmail.com";
$title="Cliente MeuSite";
if ($b_have_info){
$res = waSendMail($destinataire, $title,$text,$reply_to);
$message_error=waGetError();
if (($res==true) && ($waErrorPhpMailReporting==1)) $message_error="";
}
else
{
$message_error="Nothing to send $wa_form2";
}
echo "{\"success\":".(($res)?'true':'false').",\"error\":\"".$message_error."\"}";
?>
