function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:50%;left:55%;background-color:white; font-size:22px; max-width:150px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}


$(document).ready(function() {
    setTimeout(catSpeaks, 500, "Take the key from the Pawkeeper and go unlock the gates to Purr City");
  
    $("#Map").on("click", function(e){
        e.preventDefault();
        let audio = new Audio('alert1.mp3');
        audio.play();
        setTimeout(catSpeaks, 500, "Now open the gates");
        console.log("I'm working")
        setTimeout(function() {
            window.location.href = "../opengate/opengate.html";
        }, 3000);
    });
})


