	
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
    showQuestion("Level 3<br>Q3. Which was the first country to enable the majority of men to vote?");
    let questions=[
        {answer:"Great Britain", response:"Not quite, Great Britain passed this law in 1918, as soldiers had to fight in the First World War (1914-1918) but were not able to vote", correct:false},
        {answer:"France", response:"Yes, all men over 25 voted in 1792 for a national assembly", correct:false},
        {answer:"Switzerland", response:"Almost there, Switzerland allowed most men to vote in 1848", correct:true}
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
            
            if (questions[i].answer === "France") {
                if(localStorage.level_male_vote != "yes") {
                    localStorage.level_male_vote = "yes"; 
                localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                setTimeout(function() {
                console.log("Working");
                    window.location.href = "../female_vote/female_vote.html";
                    }, 8000);
                        }
                    }

            setTimeout(catSpeaks, 1000, questions[i].response)
            console.log("Hello");
            setTimeout(function() {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})




