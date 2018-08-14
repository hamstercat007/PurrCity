function catSpeaks(msg) {
var el = document.createElement("div");
el.setAttribute(
    "style",
    "position:absolute;top:15%;left:60%;background-color:white; font-size:40px; max-width:275px; text-align:center"
);
$(el).addClass('speech');
el.innerHTML = msg;
setTimeout(function() {
    el.parentNode.removeChild(el);
}, 2750);
document.body.appendChild(el);
}


$(document).ready(function(){
    setTimeout(catSpeaks, 2000, "At the heart of Purr City is innovation")
    setTimeout(catSpeaks, 5000, "Cats are encouraged to explore, be curious, and ask questions")
    setTimeout(catSpeaks, 8000, "You will be asked questions and awarded purr coins for correct answers")
    setTimeout(catSpeaks, 11000, "Use Purr Coins to discover Purr City and treat yourself ")
    setTimeout(catSpeaks, 14000, "Knowledge is important to build a legacy for future cat generations")
    setTimeout("$('#renaissance_cat').attr('src','playtime.png');", 17000);
    setTimeout(catSpeaks, 17500, "Don't forgot to enjoy yourself, we also like to live balanced lives")
    setTimeout(function() {
        window.location.href = "../bus/cat_bus.html";
    }, 20000);
})

