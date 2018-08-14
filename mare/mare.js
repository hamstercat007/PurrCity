
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:27%;left:65%;background-color:white; font-size:35px; max-width:250px; text-align:center"
    );

    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}





$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 2<br>Q2. What does the word 'mare' mean?");
    let questions=[
        {answer:"Marker", response:"Not quite, try again", correct:false},
        {answer:"Sea", response:"Yes, that's where we also get the word 'maritime' and 'marine' from", correct:false},
        {answer:"Ocean", response:"Not quite, oceans are larger than seas; seas are usually found between oceans and land", correct:false}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        console.log(questions[i].key);$(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).on("click", function() {
            let audio = new Audio('../click-effect.mp3');
            audio.play();
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()
            
            if (val === 'Sea') {
                if(localStorage.level_mare != "yes") {
                    localStorage.level_mare = "yes"; 
                    localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                }
                    setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                    setTimeout(function() {
                        window.location.href = "../earth/earth.html";
                    }, 8000);
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
