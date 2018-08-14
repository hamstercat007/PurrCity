function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:53%;left:70%;background-color:white; font-size:40px; max-width:250px; text-align:center"
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
		"position:absolute;top:18%;left:0%;background-color:orange; font-size:28px; max-width:175px; text-align:left; padding:12px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}



$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 3  Q2. Where does the word 'democracy' come from?");
    let questions=[
        {answer: "Demo", response: "Close but not quite, it comes from the Latin word 'demonstrare'", correct: false, note: "This means 'to demonstrate' (to show how something works)" },
        {answer:"Demos", response:"Yes, demos means 'people' in Greek, democracy means rule by the people", correct:true, note:"To vote means you can express your opinion and influence the decision"},
        {answer:"Daring", response:"Not quite", correct:false, note:"Cats are quite daring though"}
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
            if (val === 'Demos') {
                
                if(localStorage.level_democracy != "yes") {
                    localStorage.level_democracy = "yes"; 
                    localStorage.purrCoins = Number(localStorage.purrCoins) + 1;

                    setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                    setTimeout(function() {
                    window.location.href = "../male_vote/male_vote.html";
                    }, 7000);
                }
            }


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





    




   
 