/* Mobile Navigation */
$(".mobile-nav").click(function() {
	$("#header ul").toggleClass("navigation");
	$(this).css("z-index", "1");
	$(".mobile-nav i").toggleClass("fa-align-justify").addClass("fa-times");
});

$(function() {
	$(".banner").unslider({
		speed: 800,
		keys: true,
		dots: true,
		fluid: true
	});
});