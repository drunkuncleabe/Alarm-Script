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
removejscssfile("VideoDownloadOptions", "js") //remove all occurences "somestyle.css" on page

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
$(".nav-collapse > .nav > li:first").after("<li id=\"devices_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-lock icon-white\"></i> Devices <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></a></li>"); //add devices tab
$(".nav-collapse > .nav > #devices_nav").after("<li id=\"rule_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-list icon-white\"></i> Rules <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></a></li>"); //add a Rules tab
$(".nav-collapse > .nav > #rule_nav").after("<li id=\"energy_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-leaf icon-white\"></i> Energy <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></a></li>"); //add an Energy tab
$(".nav-collapse > .nav > #energy_nav").after("<li id=\"users_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\"  data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-user icon-white\"></i> Users <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></a></li>"); //add a Users tab
$(".nav-collapse > .nav > #users_nav").after("<li id=\"help_nav\" class=\"m_link dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><i class=\"icon-question-sign icon-white\"></i> Help <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"></ul></li>"); //add a help dropdown tab
$(".nav-collapse > .nav").after($("#ctl00_HeaderLinks1_lblLoginName").detach()); //move login name to header
$("#ctl00_HeaderLinks1_lblLoginName").wrap("<ul class=\"nav pull-right\"><li id=\"profile_nav\" class=\"dropdown\"><a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"></a><ul class=\"dropdown-menu\"></ul></li></ul>"); //add  tags to make name a Profile dropdown tab pulled to the right
 $("#ctl00_HeaderLinks1_lblLoginName").after(" <b class=\"caret\"></b>"); //add carat to dropdown

 //HIde items not needed as top level tabs - some links will be added back in manually as sub items later in code
$("[href='/web/Video/LiveView.aspx']").parent().hide();//Hide Video Tab
$("[href='/web/Automation/Devices.aspx']").parent().hide();//Hide emPower Tab
$("[href='/web/History/EventHistory.aspx']").parent().hide();//Hide History Tab
$("[href='/web/Notifications/AddressBook.aspx']").parent().hide();//Hide Notifications Tab
$("[href='/web/ImageSensor/EventGallery.aspx']").parent().hide();//Hide IS Tab
$("[href='/web/OtherApps/MobileSite.aspx']").parent().hide();//Hide Mobile Tab
$("[href='/web/Enterprise/Enterprise.aspx']").parent().hide();//Hide Enterprise Tab
$("[href='/web/Commercial/ArmingSupervision.aspx']").parent().hide();//Hide Commercia Tab
$(".top_nav").hide(); //hide what is left of the top nav
 
//Links under rules
$("#rule_nav > ul").append("<a class=\"sub_link\" href=\"/web/Notifications/Alarms.aspx\">Notifications</a>"); //recreate the Notifications link
$("#rule_nav > ul").append("<a class=\"sub_link\" href=\"/web/Video/RecordingSchedules.aspx\">Video</a>"); //Vid Recording link
$("#rule_nav > ul").append("<a class=\"sub_link\" href=\"/web/ImageSensor/Rules.aspx\">Image Sensor</a>"); //IS link
$("#rule_nav > ul").append("<a class=\"sub_link\" href=\"/web/Automation/Rules.aspx\">Home Automation</a>"); //IS link
$("#rule_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
 
 //Links under Energy
$("#users_nav > ul").append("<a class=\"sub_link\" href=\"/web/Notifications/AddressBook.aspx\">Address Book</a>"); 
$("#users_nav > ul").append("<a class=\"sub_link\" href=\"/web/Security/UserCodes.aspx\">User Codes</a>");
$("#users_nav > ul").append("<a class=\"sub_link\" href=\"/web/Profile/ManageLogins.aspx\">Manage Logins</a>");
$("#users_nav > ul > a").wrap("<li></li>");  //wrap all links with list item

 //Links under Users
$("#energy_nav > ul").append("<a class=\"sub_link\" href=\"/web/Energy/EnergyConsumption.aspx\">Usage</a>"); 
$("#energy_nav > ul").append("<a class=\"sub_link\" href=\"/web/Automation/Thermostats.aspx\">Thermostats</a>");
$("#energy_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
 
 //LInks under Devices
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/Security/Sensors.aspx\">Sensors</a>"); 
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/Automation/Locks.aspx\">Locks</a>");
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/Automation/ZWaveLights.aspx\">Lights</a>");
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/Automation/Thermostats.aspx\">Thermostats</a>");
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/Video/LiveView.aspx\">Video Cameras</a>");
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/ImageSensor/EventGallery.aspx\">Image Sensors</a>");
$("#devices_nav > ul").append("<a class=\"sub_link\" href=\"/web/OtherApps/MobileSite.aspx\">Mobile Apps</a>");
$("#devices_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
 
//Links under help
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_lnkSupportCenter").detach()); //move Support link under help tab
$("#help_nav > ul").prepend($("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").detach()); //move page help under help tab
$(".page_help_link").remove(); //remove the div that held the help link
$("#help_nav > ul > a").wrap("<li></li>");  //wrap all links with list item
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").removeAttr("style"); //remove style from help link 
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").attr("style","cursor : pointer"); //add the pointer style back
$("#ctl00_HeaderLinks1_helpLink_lnkHelpTextOnly").text("About this page");  //change the text of the help link

//LInks under User Profile
$("[href='/web/Profile/AwarenessLevel.aspx']").parent().remove();
$("[href='/web/Profile/Password.aspx']").parent().remove(); //for enterprise accounts that don't have the VIF
$("#profile_nav > ul").append("<a class=\"sub_link\" href=\"/web/Profile/Password.aspx\">Login Info</a>");
$("#profile_nav > ul").append("<a class=\"sub_link\" href=\"/web/Profile/AccountInfo.aspx\">Account Info</a>");
$("#profile_nav > ul").append("<a class=\"sub_link\" href=\"/web/Profile/SystemInfo.aspx\">System Info</a>");
$("#profile_nav > ul").append("<a class=\"sub_link\" href=\"/web/Profile/MergeLoginStep1.aspx\">Multi-System Access</a>");
$("#profile_nav > ul").append("<li class=\"divider\"></li><a class=\"sub_link\" href=\"/web/Logout.aspx\">Logout</a>"); //recreate the logout link
$("#profile_nav > ul > a").wrap("<li></li>");  //wrap all links with list item

//Add padding after the nav, before the main content
$("head").append("<style type=\"text/css\">#main_content {padding-top: 60px; padding-bottom: 0px;}</style>");

/*****************************************************************************************************************************
/ Build the Summary Page body
******************************************************************************************************************************/
$("#content_container").addClass("container"); //add container class to the main container

//Add Home & Status row
$("#content_container").prepend("<div class=\"row-fluid\"><div class=\"span8 well\" id=\"my_home\" style=\"background-image: url(http://media.cdn-redfin.com/photo/57/bigphoto/295/FX7452295_2.jpg); height:300px; background-position: top left; background-repeat:no-repeat;\"><h1>My Home</h1></div><div class=\"span4\" id=\"home_status\"></div></div>");

//Status section

//Current Issues
$("#home_status").append($("#ctl00_phBody_CurrentIssuesWidget_pnlContainer").detach()); //move current issues in

//System Status
$("#home_status").append($("#ctl00_phBody_ArmingStateWidget_imgState").detach()); //move in current arming status
$("#ctl00_phBody_ArmingStateWidget_imgState").wrap("<div class=\"dropdown\"><a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"></a></div>");
$("#home_status > div").append("<ul class=\"dropdown-menu\"><li><a href=\"#\"></a></li><li><a href=\"#\"></a></li><li><a href=\"#\"></a></li></ul>");
$("#home_status > div > ul > li:eq(0) > a").append($("#ctl00_phBody_ArmingStateWidget_btnDisarm").detach()); //move disarm button
$("#home_status > div > ul > li:eq(1) > a").append($("#ctl00_phBody_ArmingStateWidget_btnArmStay").detach()); //move arm stay button
$("#home_status > div > ul > li:eq(2) > a").append($("#ctl00_phBody_ArmingStateWidget_btnArmAway").detach()); //move arm away button
$("[id^='ctl00_phBody_ArmingStateWidget_btn']").attr({width:"50",height:"50"});

//Sensors
$("#home_status").append($("#ctl00_phBody_SensorStatusWidget_pnlSensorsUpdate").detach()); //move in sensor status
$("#ctl00_phBody_SensorStatusWidget_pnlSensorsUpdate").prepend("<div class=\"events_widget_date label label-info\">Sensors</div>");

//Trying Locks...
$.ajax({ url:"https://www.alarm.com/web/Automation/Locks.aspx", dataType: "html", success:function(result) {
//var lockHTML = $("<div>").html(data).getElementsById("lockStatusTable");
var lockHTML = getElementsById("lockStatusTable");
$("#home_status").append(lockHTML);
}});


//START HERE REMOVE BELOW******************************************************************************************************
//$("#ctl00_phBody_ArmingStateWidget_pnlArmingWidget").remove();

//Add History row
$("#content_container > .row-fluid").after("<div class=\"row-fluid\"><div class=\"span12\" id=\"home_history\"><h3>Recent History <small><a  class=\"pull-right\"href=\"/web/History/EventHistory.aspx\">view all history</a></small></h3></div></div>");

//Move and edit stuff for History
$("#home_history").append($("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate").detach()); // move the history contents
$(".events_widget_date").addClass("label label-info"); //add label class to day of the week in history
$("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate").after("<h3><small><a  class=\"pull-right\"href=\"/web/History/EventHistory.aspx\">view all history</a></small></h3>"); //add history link at the bottom of the page

//Hide the rest of the stuff I don't want to show right now
$(".widget_refresh").remove(); //hide all refresh widgets
$(".main_nav").remove(); //hide all refresh widgets
$(".sub_nav").remove(); //hide all refresh widgets
$(".features_tooltip_box").remove(); //hide the VIF bar
//$("#ctl00_phBody_RecentEventsWidget_ImageEventPopup1_upPopupInfo").remove(); //remove it
//$("#ctl00_phBody_RecentEventsWidget_ImageEventPopup1_confirmPanel").remove(); //remove it
//$("#main_content").remove(); //remove what is left in the main content
$("#ctl00_phBody_SensorStatusWidget_pnlSensorWidget").remove(); //remove remaining sensor stuff
$("#ctl00_phBody_RecentEventsWidget_pnlEventsWidget").remove(); //remove remaining history stuff



//modifications to the footer
$(".footer_part1").remove(); //hide it
$(".time_served").remove(); //hide it
$(".main_footer").wrap("<footer class=\"form-actions\"></footer>"); //wrap with footer tag
$("footer").prepend("<p class=\"pull-right\"><a href=\"#\">Back to top</a></p>");