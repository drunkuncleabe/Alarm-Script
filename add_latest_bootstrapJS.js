// Insert latest Bootstrap
function bootStrap(callback) {
  var bs = document.createElement("script");
  bs.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.0.3/bootstrap.min.js");
  //bs.setAttribute("src", "https://flexible-portal-layout.googlecode.com/svn/trunk/Examples/bootstrap.min.js");
  bs.addEventListener('load', function() {
    var bs = document.createElement("script");
    bs.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(bs);
  }, false);
  document.body.appendChild(bs);
}

// the guts of this userscript
function main() {
  //alert("There are " + $('a').length + " links on this page.");
}

// load jQuery and execute the main function
bootStrap(main);