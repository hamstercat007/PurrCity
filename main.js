/*function catSpeaks(msg, top, left) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:"+top+"%;left:"+left+"%;background-color:white; font-size:40px; max-width:200px; text-align:center"
	);
    el.innerHTML = msg;
    $(el).addClass('speech');
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 3000);
	document.body.appendChild(el);
}*/

function showPurrCoins() {
    var el = document.createElement("div");
    $(el).addClass('purrCoin');
	el.innerHTML = localStorage.purrCoins;
	$(".purrCoin").remove();
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:20%;left:15%;background-color:orange; font-size:30px; max-width:200px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
		el.parentNode.removeChild(el);
	}, 2500);
	document.body.appendChild(el);
}

function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:2%;left:2%;background-color:orange; font-size:30px; max-width:225px; text-align:left; padding-left:15px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

