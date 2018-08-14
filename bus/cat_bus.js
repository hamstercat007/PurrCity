function catSpeaks(msg) {
    var el = document.createElement("div");
    el.setAttribute(
        "style",
        "position:absolute;top:30%;left:60%;background-color:white; font-size:38px; max-width:250px; text-align:center"
    );
    $(el).addClass('speech');
    el.innerHTML = msg;
    setTimeout(function () {
        el.parentNode.removeChild(el);
    }, 3000);
    document.body.appendChild(el);
}



$(document).ready(function () {
    setTimeout(catSpeaks, 3000, "You are allocated 7 purr coins to start your adventure into Purr City");
    localStorage.setItem("purrCoins", 7);
    localStorage.setItem("level_science", "");
    localStorage.setItem("level_etymology", "");
    localStorage.setItem("level_linnaeus", "");
    localStorage.setItem("level_library", "");
    localStorage.setItem("level_mare", "");
    localStorage.setItem("level_earth", "");
    localStorage.setItem("level_pamper", "");
    localStorage.setItem("level_coding", "");
    localStorage.setItem("level_democracy", "");
    localStorage.setItem("level_male_vote", "");
    localStorage.setItem("level_female_vote", "");
    localStorage.setItem("level_nike", "");
    localStorage.setItem("level_roman", "");
    localStorage.setItem("level_newton", "");





    showPurrCoins();
    setTimeout(catSpeaks, 7000, "The bus fare is 1 purr coin");
    setTimeout(catSpeaks, 10500, "Please place your paw over the paw-reader to pay your fare");


    $("#Map").one("click", function (e) {
        e.preventDefault();
        let audio = new Audio('beep.mp3');
        audio.play();
        localStorage.purrCoins -= 1;
        setTimeout(catSpeaks, 1000, "You now have " + localStorage.purrCoins + " purr coins");
        showPurrCoins();
        setTimeout(catSpeaks, 3500, "Sit down and enjoy the ride to Purr City!")
        setTimeout("$('#bus').attr('src','bootcamp.png');", 6500);
        setTimeout(catSpeaks, 6500, "Cats like to work out in Purr City");
        setTimeout("$('#bus').attr('src','catwalk.png');", 9500);
        setTimeout(catSpeaks, 9500, "Cats also like to look good!");
        setTimeout("$('#bus').attr('src','homeless.png');", 13000);
        setTimeout(catSpeaks, 13000, "Cats look to help others in need!");
        setTimeout(function () {
            window.location.href = "../science/science.html";
        }, 16000);
    });
});



