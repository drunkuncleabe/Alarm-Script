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

/*****************************************************************************************************************************
/ Build the main navigation
******************************************************************************************************************************/
$("style").remove(); //remove hard coded styles
$(".sub_icon").remove(); //remove navigation sub icons for now
$(".clear").remove(); //remove clear divs
$(".margin1").remove(); //remove margin1 divs
$("#main_header").attr("class","navbar navbar-fixed-top"); //add classes to header
$("#main_header").wrapInner("<div class=\"navbar-inner\"><div class=\"container\" id=\"collapse_container\"></div></div>"); //add divs for  nav
$("#collapse_container").prepend("<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span>"); //add divs for collapsed nav
$("#collapse_container").append($(".logo").detach()); //move brand outside of the navigation
$("#ctl00_HeaderLogo1").text("ADC") //for now replace logo with text link ***later get better icon / smaller logo or make this separate from logo
$(".logo").attr("class","brand"); //change class of logo/home
$("#collapse_container").append($("#collapse_container > .main").detach()); //move the other header content after the brand
$("#collapse_container > .main").attr("class","nav-collapse"); //change class to nav-collapse
$(".nav-collapse").prepend($(".main_nav > .nav").detach()); //move the main nav to the correct location
$(".nav-collapse > .nav > .m_linkon").addClass("active"); //make the selected link show selected
$(".nav-collapse > .nav > li:first").after("<li id=\"rule_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\">Rules</a></li>"); //add a Rules tab
$(".nav-collapse > .nav > #rule_nav").after("<li id=\"energy_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\">Energy</a></li>"); //add an Energy tab
$(".nav-collapse > .nav > #energy_nav").after("<li id=\"users_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\">Users</a></li>"); //add a Users tab
$(".nav-collapse > .nav > #users_nav").after("<li id=\"help_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Help <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></li>"); //add a help dropdown tab
$(".nav-collapse > .nav > #help_nav").after("<li id=\"settings_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Settings <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></li>"); //add a settings dropdown tab
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_lnkSupportCenter").detach()); //move Support link under help tab
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").detach()); //move page help under help tab
$(".page_help_link").remove(); //remove the div that held the help link
$("#help_nav > ul > a").attr("data-toggle","tab"); //add classes to all links
$("#help_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").removeAttr("style"); //remove style from help link 
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").attr("style","cursor : pointer"); //add the pointer style back
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").text("About this page");  //change the text of the help link
$("#ctl00_HeaderLinks1_lnkSupportCenter").attr("href","https://www.alarm.com/web/Support/Issues/Issue_Summary.aspx"); //put the full link in, not working relative for some reason

/* <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#dropdown1" data-toggle="tab">@fat</a></li>
                <li><a href="#dropdown2" data-toggle="tab">@mdo</a></li>
              </ul>
            </li> */