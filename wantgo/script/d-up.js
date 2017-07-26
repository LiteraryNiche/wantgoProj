$(function(){
	$(window).scroll(function(){
		if($(document).scrollTop()>335){
			$("#rena").animate({
				"margin-top":"0px"
			},1000)
		}
	});
	
})