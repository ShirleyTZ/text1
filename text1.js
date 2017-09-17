function showP(id) {
    var P = document.getElementsByTagName("p");
    for (var i=0; i < P.length; i++) {
    	if (P[i].getAttribute("id") !== id ) {
    		P[i].style.display = "none";
    	}else{
    		P[i].style.display = "block";
    	}
    }
}

function prepareId() {
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
		}
	}
}

window.onload =prepareId;
