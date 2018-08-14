
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:25%;left:60%;background-color:white; font-size:40px; max-width:330px; text-align:center"
    );
    $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 6500);
	document.body.appendChild(el);
}


$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 1</br>Q3: What is the scientific (binomial) name for cat?" );
    let questions=[
        {answer:"Feline", response:"Very close, a feline is a member of the cat family", correct:false},
        {answer:"Felis Catus", response:"Yes, bi means two, nomen means name.  Carl Linnaeus gave all species two latin names to classify them in the animal kingdom", correct:true},
        {answer:"Felix", response:"Close, lots of cats are called Felix, it is a popular name", correct:false}
    ]

    $(".questions").append("<div class='options'></div>")
    for (let i=0; i<questions.length; i++) {
        $(".questions").append("<input type='radio' id="+questions[i].answer.replace(' ', '') + " value="+questions[i].answer+"><label for="+questions[i].answer.replace(' ', '')+">"+questions[i].answer+"</label><br>")
        $("#"+questions[i].answer.replace(' ', '')).on("click", function() {
            let audio = new Audio('../click-effect.mp3');
            audio.play();
        $(this).css("color", "blue");
        console.log(this);
        $(this).prop('checked', true);

        let val = $(this).val()
    
            if (questions[i].answer === "Felis Catus") {
            if(localStorage.level_linnaeus != "yes") {
            localStorage.level_linnaeus = "yes";


        
                    localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                    console.log(localStorage.purrCoins);
                }
                    setTimeout(catSpeaks, 7500, "You now have "+localStorage.purrCoins+" purr coins");
                    setTimeout(function() {
                        window.location.href = "../naptime/naptime.html";
                    }, 9500);
            } 
                    
                    showPurrCoins();

        setTimeout(catSpeaks, 1000, questions[i].response);
        setTimeout(function () {
            $("input:radio").each(function () {  
                $(this).removeAttr('checked');
                $('input[type="radio"]').prop('checked', false);
               })
        }, 750)
        })    
    }
})

