function showP(id) {
  var article = document.getElementById("article");
  var DIVS = article.getElementsByClassName("dialog");
  for (var i=0; i < DIVS.length; i++) {
   	if (DIVS[i].getAttribute("id") !== id ) {
      DIVS[i].style.display = "none";
    }else{
   	  DIVS[i].style.display = "block";
   	};
  };
};
function prepare() {
  var body = document.getElementsByTagName("body");
  if (body.length == 0) return false;
  var divs = body[0].getElementsByTagName("div");
  if (divs.length == 0) return false;
  var num =divs.length-1;
  var div = divs[num];
  var links = div.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
	var Pid = links[i].getAttribute("href").split("#")[1];
	if (!document.getElementById(Pid)) continue;
	var ps = document.getElementById(Pid) ;		
	ps.style.display ="none";
	links[i].destination = Pid;
	links[i].onclick = function() {
	  showP(this.destination);
	  return false;
	};
  }
}
prepare();


