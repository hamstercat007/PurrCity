

function catSpeaks(msg) {
	var el = document.createElement("div");
	el.setAttribute(
		"style",
		"position:absolute;top:27%;left:60%;background-color:white; font-size:40px; max-width:300px; text-align:center"
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
    showQuestion("Level 1</br>Q1: Science Time");
    setTimeout(catSpeaks, 0, "Cats also like to learn!");
    let questions=[
        {answer:"Electrons", response:"Well done - electrons form part of atoms, the smallest particles possible", correct:true},
        {answer:"Roe", response:"Close, these are fish eggs.  Very tasty!", correct:false},
        {answer:"Moons", response:"Close, some planets have several moons orbiting them. For example, Jupiter has 67 moons!", correct:false}
    ]
   
            $(".questions").append("<div class='options'></div>")
        for (let i=0; i<questions.length; i++) {
            $(".questions").append(
              "<input type='radio' id="+questions[i].answer+" value="+questions[i].answer+"><label for="+questions[i].answer+">"+questions[i].answer+"</label><br>"
            )

            $("#"+questions[i].answer).on("click", function() {
                let audio = new Audio('../click-effect.mp3');
                audio.play();
            $(this).css("color", "blue");
            console.log(this);
            $(this).prop('checked', true);

            
           
            let val = $(this).val()

            if (val === 'Electrons') {
                   
                if(localStorage.level_science != "yes") {
                    localStorage.level_science = "yes";
    
                localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
                setTimeout(catSpeaks, 5000, "You now have "+localStorage.purrCoins+" purr coins");
                setTimeout(function() {
                    window.location.href = "../etymology/etymology.html";
                }, 8000);
            } 
         }
            
            showPurrCoins();

            setTimeout(catSpeaks, 1000, questions[i].response)
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



