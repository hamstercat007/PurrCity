

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:250px; text-align:center"
    );
    $(el).addClass('speech');
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}


$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 1</br>Q2: The origin of words - Etymology");
    let questions=[
        {answer:"Scire", response:"This is a Latin word meaning to know. Science is about finding things out based on evidence & observations", correct:true},
        {answer:"Signs", response:"Not quite, there are certainly signs pointing to discoveries", correct:false},
        {answer:"Singing", response:"Not quite, but cats do like to sing; we do have some musical talent", correct:false}
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
        console.log(localStorage.level);


    let val = $(this).val()

    if (val === 'Scire') {
        
        if(localStorage.level_etymology != "yes") {
            localStorage.level_etymology = "yes";

            localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
            setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
            setTimeout(function() {
                window.location.href = "../linnaeus/linnaeus.html";
            }, 7000);
        }
    }
    
    showPurrCoins();

        setTimeout(catSpeaks, 1000, questions[i].response)
        setTimeout(function () {
            $("input:radio").each(function () {  
                $(this).removeAttr('checked');
                $('input[type="radio"]').prop('checked', false);
               })
        }, 750)
        })    
    }
})







