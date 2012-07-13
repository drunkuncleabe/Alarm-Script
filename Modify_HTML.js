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
//var logoURL= chrome.extension.getURL("logo_orange.png"); //get URL for extension resource - not messing with this for now. logo keeps resizing
-$("#ctl00_HeaderLogo1").text("Alarm.com") //replace logo with text link
$(".logo").attr("class","brand"); //change class of logo/home
$("#collapse_container").append($("#collapse_container > .main").detach()); //move the other header content after the brand

$("#collapse_container > .main").attr("class","nav-collapse"); //change class to nav-collapse
$(".nav-collapse").prepend($(".main_nav > .nav").detach()); //move the main nav to the correct location
$(".nav-collapse > .nav > .m_linkon").addClass("active"); //make the selected link show selected
$(".nav-collapse > .nav").addClass("nav-pills"); //fatter nav
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
$("#content_container").prepend("<div class=\"row-fluid\"><div class=\"span8\" id=\"left_content\"><div class=\"well\" id=\"my_home\" style=\"background-image: url(http://media.cdn-redfin.com/photo/57/bigphoto/295/FX7452295_2.jpg); height:200px; background-position: center left; background-repeat:no-repeat;\"></div></div><div class=\"span4\" id=\"home_status\"></div></div>");
$("#my_home").append($("#ctl00_HeaderLinks1_lblLoginSystem").detach()); //if only one system
$("#ctl00_HeaderLinks1_lblLoginSystem").wrap("<h4></h4>");
$("#ctl00_HeaderLinks1_lblLoginSystem").addClass("events_widget_event");
$("#my_home").append($("#ctl00_HeaderLinks1_ddlCustomers").detach());  //if multiple systems

//***Status section

//Current Issues
$("#home_status").append($("#ctl00_phBody_CurrentIssuesWidget_pnlContainer").detach()); //move current issues in
$("#ctl00_phBody_CurrentIssuesWidget_pnlContainer").addClass("alert fade in");
$("#ctl00_phBody_CurrentIssuesWidget_pnlContainer").prepend("<button type=\"button\" class=\"close\" data-dismiss=\"alert\">x</button><strong>Oh snap! Best fix yo system pronto.</strong>");
$("#ctl00_phBody_CurrentIssuesWidget_pnlContainer > div > table > tbody > tr:eq(0) > td:eq(0)").remove();

//VIF Status thing
$("#home_status").append("<div class=\"progress progress-success\" style=\"margin-bottom: 3px;\"><div class=\"bar\" style=\"width: 80%\"></div></div>"); //add fake system setup status
$("#home_status").append("<div style=\"margin-bottom: 30px;\"><em><a href=\"/web/Profile/AwarenessLevel.aspx\" class=\"pull-right\">Setup 80% complete</a></em></div>"); //add fake system setup message

//System Arming Status
$("#home_status").append($("#ctl00_phBody_ArmingStateWidget_imgState").detach()); //move in current arming status
$("#ctl00_phBody_ArmingStateWidget_imgState").wrap("<div id=\"arming_dropdown\" class=\"events_widget_event dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"></a></div>");
$("#home_status > div").append("<ul class=\"dropdown-menu\"><li><a href=\"#\"></a></li><li><a href=\"#\"></a></li><li><a href=\"#\"></a></li></ul>");
$("#arming_dropdown > ul > li:eq(0) > a").append($("#ctl00_phBody_ArmingStateWidget_btnDisarm").detach()); //move disarm button
$("#arming_dropdown > ul > li:eq(1) > a").append($("#ctl00_phBody_ArmingStateWidget_btnArmStay").detach()); //move arm stay button
$("#arming_dropdown > ul > li:eq(2) > a").append($("#ctl00_phBody_ArmingStateWidget_btnArmAway").detach()); //move arm away button
$("[id^='ctl00_phBody_ArmingStateWidget_btn']").attr({width:"72",height:"72"});
//$("#home_status > .dropdown").before("<div class=\"label label-info\">Arming Status</div>");
$("#ctl00_phBody_ArmingStateWidget_pnlArmingWidget").remove();

//Sensors
$("#home_status").append($("#ctl00_phBody_SensorStatusWidget_pnlSensorsUpdate").detach()); //move in sensor status
$("#ctl00_phBody_SensorStatusWidget_pnlSensorsUpdate").prepend("<div class=\"events_widget_event\"><strong>Sensors</strong><a href=\"/web/Security/Sensors.aspx\" class=\"pull-right\"><em>settings<\em></a></div>");
$("#ctl00_phBody_SensorStatusWidget_pnlSensorsUpdate > table").addClass("table table-condensed");

//Temp Info
$("#home_status").append("<div id=\"thermo_summary\" data-toggle=\"collapse\" data-target=\"#thermo_table\"><div class=\"events_widget_event\"><strong>Inside Temp</strong><a href=\"/web/Automation/Thermostats.aspx\" class=\"pull-right\"><em>change<\em></a></div><div id=\"thermo_table\" class=\"in collapse\"></div></div>"); 
//Ajax in Thermostat info
$("#thermo_table").load("/web/Automation/Thermostats.aspx #ctl00_phBody_pnlUpdateTemp");
$("#thermo_table").ajaxComplete(function(){
	  $("#ctl00_phBody_pnlUpdateTemp > h3").remove();
	  $("#ctl00_phBody_pnlUpdateTemp > table").attr("style","margin-top: 8px; margin-bottom: 5px;");

});

// Lock Summary
$("#home_status").append("<div id=\"lock_summary\"><div class=\"events_widget_event\"><strong>Locks</strong><a href=\"/web/Automation/Locks.aspx\" class=\"pull-right\"><em>settings<\em></a></div><div id=\"lock_table\"></div></div>"); 
//Ajax in lock content...
$("#lock_table").load("https://www.alarm.com/web/Automation/Locks.aspx #lockStatusTable");
$("#lock_table").ajaxComplete(function(){
  $("#lock_table > table").addClass("table table-condensed");
});

//Video Summary
$("#home_status").append("<div id=\"video_summary\"><div class=\"events_widget_event\"><strong>Video</strong><a href=\"/web/Video/SettingsOverView.aspx\" class=\"pull-right\"><em>settings<\em></a></div><div id=\"video_table\"></div></div>");
$ ("#video_table").wrapInner("<table class=\"table table-condensed\"><tbody></tbody></table>") // add inner table & tbody
//Ajax in video camera names...
$("#video_table > table > tbody").load("https://www.alarm.com/web/Video/LiveView.aspx [id*='CamName'] ");
$("#video_table > table > tbody").ajaxComplete(function(){
  $ ("#video_table > table > tbody > span").wrap("<tr><td><a href=\"/web/Video/LiveView.aspx\" class=\"\"></a></td></tr>"); // wrap each span with tr, td
 // $ ("#video_table > table > tbody > tr > td").append("<a href=\"/web/Video/LiveView.aspx\" class=\"pull-right\">live view</a>");
  });

//Image Sensor Summary
$("#home_status").append("<div id=\"is_summary\"><div class=\"events_widget_event\"><strong>Image Sensor</strong><a href=\"/web/ImageSensor/Settings.aspx\" class=\"pull-right\"><em>settings<\em></a></div><div id=\"is_table\"></div></div>");
//Ajax in IS names...
$("#is_table").load("/web/ImageSensor/PeekIn.aspx #ctl00_phBody_cblCameras ");
$("#is_table").ajaxComplete(function(){
  $("#is_table > table").addClass("table table-condensed");
  $("#is_table > table > tbody > tr > td > input").remove();
  $("#is_table > table > tbody > tr > td > label").wrap("<a href=\"/web/ImageSensor/EventGallery.aspx\"></a>");
});

//Add History*****
// puts history below, full page width$("#content_container > .row-fluid").after("<div class=\"row-fluid\"><div class=\"span12\" id=\"home_history\"><h3>Recent History <small><a  class=\"pull-right\"href=\"/web/History/EventHistory.aspx\">view all history</a></small></h3></div></div>");
$("#left_content").append("<div class=\"\" id=\"home_history\"><h3>Recent History <small><a  class=\"pull-right\"href=\"/web/History/EventHistory.aspx\">view all history</a></small></h3></div>"); //history in left content area only

//Move and edit stuff for History
$("#home_history").append($("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate").detach()); // move the history contents
$("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate > .events_widget_date").addClass("label label-info"); //add label class to day of the week in history
$("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate").after("<h3><small><a  class=\"pull-right\"href=\"/web/History/EventHistory.aspx\">view all history</a></small></h3>"); //add history link at the bottom of the page

//Create fake notification stuff for the History
$("#ctl00_phBody_RecentEventsWidget_pnlEventsUpdate > .events_widget_event").hover(
  function () {
    $(this).append($("<a href=\"/web/Notifications/Alarms.aspx\" class=\"hover pull-right\">create notification</a>").fadeIn(350));
  }, 
  function () {
    $(this).find("a:last").remove();
  }
);

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