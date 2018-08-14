


function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:63%;background-color:white; font-size:35px; max-width:250px; text-align:center"
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
		"position:absolute;top:4%;left:40%;background-color:orange; font-size:30px; max-width:300px; text-align:center; padding-left:15px"
    );
    $(el).addClass("speech");
    el.innerHTML = msg;
    document.body.appendChild(el);
}

function signpost(msg) {

    var el = document.createElement("div");
    el.setAttribute(
        "style",
        "position:absolute;top:4%;left:2%;background-color:transparent; font-size:35px; max-width:250px; text-align:left; padding-left:15px"
    );
    el.innerHTML = msg;
    document.body.appendChild(el);
}




$(document).ready(function() {
    showPurrCoins();
    signpost("The Statue of Liberty, <br>based in New York, United States of America");
    showQuestion("Level 3<br>Q4. Which was the first country to allow women to vote?");
    let questions=[
        {answer:"Great Britain", response:"Not quite, Great Britain passed this law in 1928, although women were allowed to vote in 1918 but had to own property and be over 30 years old", correct:false},
        {answer:"United States", response:"Not quite, the United States passed this law in 1920 ", correct:false},
        {answer:"New Zealand", response:"Yes, New Zealand passed this in 1893", correct:true}
    ]

            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
            $(".questions").append("<input type='radio' id="+questions[i].answer.replace(/ /g, '') + " value="+questions[i].answer+"><label for="+questions[i].answer.replace(/ /g, '')+">"+questions[i].answer+"</label><br>")
            $("#"+questions[i].answer.replace(/ /g, '')).on("click", function() {
                let audio = new Audio('../click-effect.mp3');
                audio.play();
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            let val = $(this).val()

                        if (questions[i].answer === 'New Zealand') {
                            if(localStorage.level_female_vote != "yes") {
                                localStorage.level_female_vote = "yes"; 
                            localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                            setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                            setTimeout(function() {
                                window.location.href = "../chariot/greek_goddess_chariot.html";
                            }, 8000);
                        }
                    }

                    if (questions[i].answer === 'United States') {
                        setTimeout(function() {
                          $(".fe-vote-wrapper, .fe-vote-message, .mainScene").toggle()
                        }, 3000);
                        setTimeout(function() {$(".fe-vote-wrapper").hide();}, 7000);
                        setTimeout(function() {$(".fe-vote-message").hide();}, 7000);
                        setTimeout(function() {$(".mainScene").show();}, 7000);
                    }

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




