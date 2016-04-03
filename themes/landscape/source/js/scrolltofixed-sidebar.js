window.onload = function() {
	/*
	$('#sidebar').scrollToFixed( {
		bottom: 0,
		limit: $('#footer').offset().top
	});
	*/

	$('#sidebar').scrollToFixed({
		limit: $('footer').offset().top
	});
};