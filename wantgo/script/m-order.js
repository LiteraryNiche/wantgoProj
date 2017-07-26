$(function(){
	TouchSlide({ slideCell:"#leftTabBox" });
	$("#bott ul li").height(window.innerHeight*0.6);
	$("#return").css("cursor","pointer")
	$("#return").click(function(){
		window.location.replace("after_login.html")
	})
})

