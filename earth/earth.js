

function catSpeaks(status) {
    var msg
    if(status == "correct") {msg="Yes, it takes the Earth 365 1/4 days to orbit the sun";}
        else if(status == "incorrect") {msg= "Not quite, this is what they used to think centuries ago";}
        else {msg = "You now have " + localStorage.purrCoins + " purr coins";}

    var el = document.createElement("div");
    el.setAttribute(
        "style",
        "position:absolute;top:50%;left:60%;background-color:white; font-size:40px; max-width:200px; text-align:center"
    );
    $(el).addClass("speech");
    el.innerHTML = msg;
    setTimeout(function() {
        el.parentNode.removeChild(el);
    }, 4000);
    document.body.appendChild(el);

    if (status == "correct" || status == "coins") {
        $(el).css("left", "30%");
    }
}


function showQuestion(msg) {
    var el = document.createElement("div");
    el.setAttribute(
        "style",
        "position:absolute;top:2%;left:2%;background-color:orange; font-size:30px; max-width:200px; text-align:left; padding:15px"
    );
    $(el).addClass('speech');
    el.innerHTML = msg;
    document.body.appendChild(el);
}


$(document).ready(function() {
    showPurrCoins();
    showQuestion("Level 2<br>Q3. Does the earth go round the sun, or does the sun go round the earth? </br></br>Click on the correct image");

    $(".rotation").one("click", function() {
        let audio = new Audio('../click-effect.mp3');
        audio.play();
        var status =  "incorrect";
        if ($(this).hasClass("earth")) {
            status =  "correct";
            if(localStorage.level_earth != "yes") {
                localStorage.level_earth = "yes"; 
                localStorage.purrCoins = Number(localStorage.purrCoins) + 1;
            }
            setTimeout(catSpeaks, 5000, "coins");
            setTimeout(function() {
                window.location.href = "../pamper/pamper.html";
            }, 8000);
        }
        showPurrCoins();

        setTimeout(catSpeaks, 1000, status)
    })
})
