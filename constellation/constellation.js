
function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:30%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
    );
    $(el).addClass("speech");
	el.innerHTML = msg;
	setTimeout(function() {
	 	el.parentNode.removeChild(el);
	 }, 4000);
	document.body.appendChild(el);
}


function narratorSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:0%;left:0%;background-color:orange; font-size:40px; max-width:225px; text-align:center"
  );
  $(el).addClass('speech');
	el.innerHTML = msg;
	//setTimeout(function() {
	//	el.parentNode.removeChild(el);
	//}, 2000);
	document.body.appendChild(el);
}



$(document).ready(function() {
    showPurrCoins();
    setTimeout(narratorSpeaks, 0, "What is a group of stars called?");
    let questions=[
        {answer:"Constellation", response:"Yes, this comes from the Latin word 'stella' means star, and 'con' means together", correct:true},
        {answer:"Starsky", response:"Not quite, very close though", correct:false},
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
        console.log(questions[i].key);$(".questions").append("<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>") 
        $("#"+questions[i].answer).click (function() {
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);
            setTimeout(catSpeaks, 1000, questions[i].response)
            console.log("Hello");
            setTimeout(function () {
                $("input:radio").each(function () {  
                    $(this).removeAttr('checked');
                    $('input[type="radio"]').prop('checked', false);
                   })
                   console.log("Time delay")
            }, 750)
        })
    }
})