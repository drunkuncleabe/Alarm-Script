
/*
// disable all externally linked stylesheets

for( i = 0; (l = document.getElementsByTagName("link")[i]); i++ ) {
    if( l.getAttribute("rel").indexOf("tylesheet") >= 0 ) l.disabled = true;
}
*/

/* //add in Twitter Bootstrap javascript
var bootstrapjs = window.document.createElement('script');
bootstrapjs.type = 'text/javascript';
bootstrapjs.src = 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.0.3/bootstrap.min.js';
document.getElementsByTagName("HEAD")[0].appendChild(bootstrapjs);

//add in latest jQuery javascript
var jquery = window.document.createElement('script');
jquery.type = 'text/javascript';
jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
document.getElementsByTagName("HEAD")[0].appendChild(jquery); */

/*****************************************************************************************************************************
/Function to remove css and js attribues
******************************************************************************************************************************/
function removejscssfile(filename, filetype){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
 }
}

removejscssfile("jquery-1.6.4.min.js", "js") //remove all occurences of "somescript.js" on page
removejscssfile("main.css", "css") //remove all occurences "somestyle.css" on page
removejscssfile("print.css", "css") //remove all occurences "somestyle.css" on page
/*****************************************************************************************************************************/

/*  var strVar="";
//strVar += "<div class=\"navbar navbar-fixed-top\">";
strVar += "	<div class=\"navbar-inner\">";
strVar += "		<div class=\"container\">";
strVar += "		 <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">";
strVar += "			<span class=\"icon-bar\"><\/span>";
strVar += "			<span class=\"icon-bar\"><\/span>";
strVar += "			<span class=\"icon-bar\"><\/span>";
strVar += "		<\/a>";
strVar += "	  <a class=\"brand\" href=\"\/web\/DetermineLandingPage.aspx\"><img src=\"\/webimages\/ProductLogos\/logo_adc_plain.png\" alt=\"Alarm.com\" style=\"border-width:0px;\"><\/a>    ";
strVar += "			  <div class=\"nav-collapse\">";
strVar += "			   <ul class=\"nav\">";
strVar += "				<li><a href=\"#\">abekinney<\/a><\/li>";
strVar += "				<li><a href=\"#\">Abraham's system<\/a><\/li>";
strVar += "				<li><a id=\"ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly\" onclick=\"var helpwin=window.open('\/web\/Help.aspx?requestingpage=\/web\/Profile\/AwarenessLevel.aspx','alarmhelp','scrollbars=yes,menubar=no,height=750,width=875,resizable=yes,toolbar=no,location=no,status=no');helpwin.focus();return false;\">Help<\/a><\/li>";
strVar += "				<li><a id=\"ctl00_HeaderLinks1_lnkSupportCenter\" href=\"..\/Support\/Issues\/Issue_Summary.aspx\">Support Center<\/a><\/li>";
strVar += "				<li><a id=\"ctl00_HeaderLinks1_logoutLink\" href=\"..\/Logout.aspx\">Logout<\/a><\/li>";
strVar += "			  <\/ul>";
strVar += "			 <\/div>";
strVar += "		<\/div>";
strVar += "	<\/div>";
//strVar += "<\/div>"; */

//document.getElementById("main_header").innerHTML=strVar;
//document.getElementById("main_header").setAttribute("class","navbar navbar-fixed-top"); 
//document.getElementById("main_header").setAttribute("id",""); 

$("#main_header").attr("class","navbar navbar-fixed-top");
$(".logo").attr("class","brand");
$("#main_header").wrapInner("<div class=\"navbar-inner\"><div class=\"container\"></div></div>");