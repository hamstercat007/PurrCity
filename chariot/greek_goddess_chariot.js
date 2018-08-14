
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:63%;background-color:white; font-size:40px; max-width:250px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 3000);
	document.body.appendChild(el);
}

function showQuestion(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:2%;left:2%;background-color:orange; font-size:30px; max-width:350px; text-align:left; padding-left:15px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 3<br>Q5. Who is the Greek goddess driving the chariot?");
    let audio = new Audio('horse-and-carriage.mp3');
    audio.play();
    let questions=[
        {answer:"Venus", response:"Not quite, Venus was the Roman goddess of beauty", note: "her Greek counterpart is known as Aphrodite", correct:false, },
        {answer:"Athena", response:"Not quite, Athena was the Greek goddess of wisdom and war", note: "and the patron (the guardian) of the Greek city of Athens", correct:false},
        {answer:"Nike", response:"Yes, Nike means victory in Greek, she is the Greek goddess of victory", note:"She carries a wreath in her hand, ready to crown a victor", correct:true}
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
            
                if (val ==='Nike') {
                    if(localStorage.level_nike != "yes") {
                        localStorage.level_nike = "yes";    
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                        setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                        window.location.href = "../roman/roman.html";
                        }, 8000);
                     }
                }
                        showPurrCoins();
            
            setTimeout(catSpeaks, 1000, questions[i].response)
            setTimeout(catSpeaks, 4000, questions[i].note)
       
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})
