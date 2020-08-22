$(document).ready(function() {
	$('h1').css('cursor', 'pointer');
	
	$('h1').click(function(){
		$(this).hide();
		$('.bgd').css('backgroundImage', 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),url(images/stars_galaxy.jpg)')
		.css('backgroundSize', 'cover').css('width', '100%').css('height', '100%').css('backgroundPosition', 'center center')
		.css('backgroundRepeat', 'no-repeat').css('left', '0').css('margin', '0').css('padding', '0').css('position', 'fixed')
		.css('top', '0').css('z-index', '1');
		$('.planets').show();
	});
});