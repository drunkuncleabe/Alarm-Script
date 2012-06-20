// Insert latest jQuery
function addJQuery(callback) {
  var script = document.createElement("script");
 script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
 //script.setAttribute("src", "https://flexible-portal-layout.googlecode.com/svn/trunk/Examples/jquery.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// the guts of this userscript
function main() {
  //alert("There are " + $('a').length + " links on this page.");
}

// load jQuery and execute the main function
addJQuery(main);