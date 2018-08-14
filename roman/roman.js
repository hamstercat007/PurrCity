

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:27%;left:63%;background-color:white; font-size:35px; max-width:300px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}

function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:2%;left:2%;background-color:orange; font-size:30px; max-width:400px; text-align:left; padding-left:15px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}


$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 3  Q6. For a bonus purr coin, what was the Roman name for the Greek goddess Nike");
    let questions=[
        {answer:"Victoria", response:"Yes, Victoria means Victory in Latin", correct:false},
        {answer:"Juno", response:"Not quite, Juno was the queen of the Gods", correct:false},
        {answer:"Aurora", response:"Not quite, Aurora was the Roman goddess of dawn, aurora means dawn, sunrise.  She represents renewal and fresh hope", correct:true}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).on("click", function() {
            let audio = new Audio('../click-effect.mp3');
            audio.play();
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
                        if (val === 'Victoria') {
                            if(localStorage.level_roman != "yes") {
                                localStorage.level_roman = "yes";  

                            localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                            setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                            setTimeout(function() {
                                window.location.href = "../newton/newton.html";
                            }, 8000);
                        }
                    }
                        showPurrCoins();
            


            setTimeout(catSpeaks, 1000, questions[i].response)
            console.log("Hello");
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})
