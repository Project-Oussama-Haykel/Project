$(document).ready(function() {
	$('#check').css('width', '25%');
	$('#clear').css('width', '25%');
	$('#list').css('fontSize', '20px');
	$('e').css('fontSize', '40px').css('fontWeight', 'bold');

$('#check').click(function() {
	$('#result').empty();
	$('#result').show();
	var planetName = $('#list').val();
	var chosenPlanet = planets.filter(element => element.name === planetName)[0];
	displayPlanet(earth, chosenPlanet, $('#result'));
});

$('#clear').click(function() {
	$('#result').hide();
});

});