$(document).ready(function(){
  $(".earth").click(function(){
    let audio = new Audio('sci-fi-whoosh.mp3');
    audio.play();
    setTimeout(function() {
      window.location.href = "../renaissance/renaissance.html";
    }, 3000);
  })
});
