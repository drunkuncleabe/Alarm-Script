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

/*****************************************************************************************************************************
/ Build the main navigation
******************************************************************************************************************************/
//hide stuff I don't want to see right now
$("style").remove(); //remove hard coded styles
$(".sub_icon").remove(); //remove navigation sub icons for now
$(".clear").remove(); //remove clear divs
$(".margin1").remove(); //remove margin1 divs
$(".side_buttons").remove(); //remove side buttons
$(".widget.features_widget.round5").remove(); //remove the features widget

//buiild the navigation
$("#main_header").attr("class","navbar navbar-fixed-top"); //add classes to header
$("#main_header").wrapInner("<div class=\"navbar-inner\"><div class=\"container\" id=\"collapse_container\"></div></div>"); //add divs for  nav
$("#collapse_container").prepend("<button type=\"button\" class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>"); //add divs for collapsed nav
$("#collapse_container").append($(".logo").detach()); //move brand outside of the navigation
$("#ctl00_HeaderLogo1").text("[ Alarm.com Logo ]") //for now replace logo with text link ***later get better icon / smaller logo or make this separate from logo
$(".logo").attr("class","brand"); //change class of logo/home
$("#collapse_container").append($("#collapse_container > .main").detach()); //move the other header content after the brand
$("#collapse_container > .main").attr("class","nav-collapse"); //change class to nav-collapse
$(".nav-collapse").prepend($(".main_nav > .nav").detach()); //move the main nav to the correct location
$(".nav-collapse > .nav > .m_linkon").addClass("active"); //make the selected link show selected
$("[href='/web/Security/SystemSummary.aspx']").html("<i class=\"icon-home icon-white\"></i> Summary</a>");//add icon to Summary tab
$(".nav-collapse > .nav > li:first").after("<li id=\"security_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"/web/Security/Sensors.aspx\"><i class=\"icon-lock icon-white\"></i> Security</a></li>"); //for security tab link deeper - sensors for now
$(".nav-collapse > .nav > #security_nav").after("<li id=\"rule_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\"><i class=\"icon-list icon-white\"></i> Rules</a></li>"); //add a Rules tab
$(".nav-collapse > .nav > #rule_nav").after("<li id=\"energy_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\"><i class=\"icon-leaf icon-white\"></i> Energy</a></li>"); //add an Energy tab
$(".nav-collapse > .nav > #energy_nav").after("<li id=\"users_nav\" class=\"m_link\"><a class=\"sub_link\" href=\"#\"><i class=\"icon-user icon-white\"></i> Users</a></li>"); //add a Users tab
$(".nav-collapse > .nav > #users_nav").after("<li id=\"help_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-question-sign icon-white\"></i> Help <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></li>"); //add a help dropdown tab
$(".nav-collapse > .nav").after($("#ctl00_HeaderLinks1_lblLoginName").detach()); //move login name to header
$("#ctl00_HeaderLinks1_lblLoginName").wrap("<ul class=\"nav pull-right\"><li id=\"profile_nav\" class=\"dropdown\"><a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"></a><ul class=\"dropdown-menu\"></ul></li></ul>"); //add  tags to make name a Profile dropdown tab pulled to the right
 $("#ctl00_HeaderLinks1_lblLoginName").after(" <b class=\"caret\"></b>"); //add carat to dropdown

//Links under help
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_lnkSupportCenter").detach()); //move Support link under help tab
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").detach()); //move page help under help tab
$(".page_help_link").remove(); //remove the div that held the help link
$("#help_nav > ul > a").attr("data-toggle","tab"); //add classes to all links
$("#help_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").removeAttr("style"); //remove style from help link 
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").attr("style","cursor : pointer"); //add the pointer style back
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").text("About this page");  //change the text of the help link

//LInks under User Profile
$("#profile_nav > ul").append("<a class=\"sub_link\" href=\"../Logout.aspx\">Logout</a>"); //recreate the logout link
$("#profile_nav > ul").prepend($("[href='/web/Profile/AwarenessLevel.aspx']").parent().detach());
$("#profile_nav > ul > a").attr("data-toggle","tab"); //add classes to all links
$("#profile_nav > ul > a").wrap("<li></li>");  //wrap all links with list item

//HIde items not needed as top level tabs
$("[href='/web/Video/LiveView.aspx']").parent().hide();//Hide Video Tab
$("[href='/web/Automation/Devices.aspx']").parent().hide();//Hide emPower Tab
$("[href='/web/History/EventHistory.aspx']").parent().hide();//Hide History Tab
$("[href='/web/Notifications/AddressBook.aspx']").parent().hide();//Hide Notifications Tab
$("[href='/web/Notifications/ImageSensor.aspx']").parent().hide();//Hide IS Tab
$("[href='/web/OtherApps/MobileSite.aspx']").parent().hide();//Hide Video Tab
$(".top_nav").hide(); //hide what is left of the top nav
