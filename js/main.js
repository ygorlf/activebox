$(function() {
	/* Mobile Navigation */
	$(".mobile-nav").click(function() {
		$("#header ul").toggleClass("navigation");
		$(this).css("z-index", "1");
		$(".mobile-nav i").toggleClass("fa-align-justify").addClass("fa-times");
	});
	/* Fixed Navigation */
	$(window).bind("scroll", function() {
		if ($(window).scrollTop() > 90) {
			$("#header nav").addClass("nav-fixed");
		} else{
			$("#header nav").removeClass("nav-fixed");
		}
	})
	/* Slider */
	$(".banner").unslider({
		speed: 800,
		keys: true,
		dots: true,
		fluid: true
	});
});