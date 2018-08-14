function showPurrCoins() {
    var el = document.createElement("div");
    $(el).addClass('purrCoin');
	el.innerHTML = localStorage.purrCoins;
	document.body.appendChild(el);
}

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:300px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 3000);
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


function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:7%;left:3%;background-color:orange; font-size:40px; max-width:225px; text-align:left; padding-left:15px"
	);
	$(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    showQuestion("Naptime!");
	setTimeout(catSpeaks, 1000, "Take a snooze!");
	let audio = new Audio('purring.mp3');
    audio.play();
    setTimeout(catSpeaks, 3000, "You've earnt it! When you're ready, click on Level 2!");
    setTimeout(catSpeaks, 6000, "Hmmm, seabass or cod, what should I have for dinner?");
})
