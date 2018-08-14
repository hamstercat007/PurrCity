

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:24%;left:60%;background-color:white; font-size:40px; max-width:250px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 2500);
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:10%;left:0%;background-color:orange; font-size:40px; max-width:175px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	//setTimeout(function() {
	//	el.parentNode.removeChild(el);
	//}, 2000);
	document.body.appendChild(el);
}


$(document).ready(function() {
	showPurrCoins();
	if(localStorage.level_pamper != "yes") {
		localStorage.level_pamper = "yes"; 
		localStorage.purrCoins-=2;
		//showPurrCoins();
	};
	/*let audio = new Audio('Happy_Ukulele.mp3');
    audio.play();*/
    setTimeout(narratorSpeaks, 0, "Pamper time: 2 Purr Coins");
    setTimeout(catSpeaks, 2500, "Take a break, you deserve it with those hard earned purr coins!");
    setTimeout(catSpeaks, 5000, "Enjoy some fur treatments and having your fur groomed!");
    setTimeout(catSpeaks, 7500, "Listen to the music, and relax! All cats deserve relaxation time");
    
    showPurrCoins()
    setTimeout(catSpeaks, 10000, "You now have "+localStorage.purrCoins+" purr coins");
    setTimeout(catSpeaks, 12500, "When you're ready, click on 'Level 3'");
})
