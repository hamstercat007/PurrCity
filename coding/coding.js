
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:54%;left:65%;background-color:white; font-size:35px; max-width:250px; text-align:center"
    );
    $(el).addClass("speech");
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
		"position:absolute;top:26%;left:4%;background-color:orange; font-size:30px; max-width:225px; text-align:left; padding:15px"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	document.body.appendChild(el);
}

$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 3<br>Q1. What does HTML stand for?");
    let questions=[
        {answer:"Hypertext Markup Language", response:"Yes, it stands for Hypertext Markup Language", correct:true, note: "It can be used to create websites and apps"},
        {answer:"Hickory Tickory Miaow Land", response:"Not quite", correct:false, note: "Good guess though!"},
    ]
   
    // Insert Answer options to the main div
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
                
                if (questions[i].answer === "Hypertext Markup Language") {
                    if(localStorage.level_coding != "yes") {
                        localStorage.level_coding = "yes";    
                        localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                    }
                        setTimeout(catSpeaks, 7000, "You now have "+localStorage.purrCoins+" purr coins");
                        setTimeout(function() {
                            window.location.href = "../democracy/democracy.html";
                        }, 9000);
                }
                        showPurrCoins();
            
            setTimeout(catSpeaks, 1000, questions[i].response)
            setTimeout(catSpeaks, 3500, questions[i].note)
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
            }, 750)
        })
    }
})