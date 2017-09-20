function showP(id) {
  var article = document.getElementById("article");
  var divs = article.getElementsByClassName("dialog");
  for (var i = 0; i < divs.length; i++) {
   	if (divs[i].getAttribute("id") !== id ) {
      divs[i].style.display = "none";
    } else {
   	  divs[i].style.display = "block";
   	};
  };
};
function prepare() {
  var body = document.getElementsByTagName("body");
  if (body.length === 0) {
    return false;
  }
  var divs = body[0].getElementsByTagName("div");
  if (divs.length === 0) {
    return false;
  }
  var num = divs.length-1;
  var div = divs[num];
  var links = div.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    var pid = links[i].getAttribute("href").split("#")[1];
    if (!document.getElementById(pid)) {
      continue;      
    }
    var ps = document.getElementById(pid);		
    ps.style.display ="none";
    links[i].destination = pid;
    links[i].onclick = function() {
      showP(this.destination);
      return false;
    };
  }
}
prepare();


