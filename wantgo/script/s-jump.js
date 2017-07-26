$(function(){
	$("#search").click(function(){
		window.location.replace("seach.html");
	});
	$("#message").click(function(){
		window.location.replace("smessage.html");
	});
	$("#woman").css("cursor","pointer").click(function(){
		window.location.replace("classify.html");
	})
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 3,
		paginationClickable: true,
		spaceBetween: 30
	});
	var imgh=$(".chosen-1 img").height();
	var ph=imgh-$(".chesen-2 p").height();
	$(".chesen-2 p").css("top",ph+"px");
})