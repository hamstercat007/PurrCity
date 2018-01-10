$(window).load(function(){
	$('.slider')._TMS({
		preset:'diagonalExpand',
		easing:'easeOutQuad',
		duration:800,
		pagination:true,
		slideshow:6000
	})
})

$(document).ready(function(){
	$("#courses_table .show_more").click(function(){
		$(this).next(".hidden").slideToggle(500);
		return false;
	}); 

	$( "#entrance" ).submit(function( event ) {
	  alert($('input[name=option]:checked').val());
	  event.preventDefault();
	});

	$.cookieBar();


});

