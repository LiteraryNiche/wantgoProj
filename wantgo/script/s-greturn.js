$(function(){
	$("#return").click(function(){
		window.location.replace("stroll.html");
	})
		$("#share_btn").click(function(){
				$("#share").show();
				$("#share").animate({
					"bottom":"-1px"
				}, 300);
				$("#meka").show();
			})
			$("#close").click(function(){
				show();
			})
			$("#meka").click(function(){
				show();
			})
			function show(){
				$("#share").animate({
					"left":"100%"
				}, 300,function(){
					$("#share").css({
						"left":"0px",
						"bottom":"-230px"
					})
					$("#share").hide();
				})
				$("#meka").hide();
			}
	var bool=true;	
	$("#wrap i").click(function(){	
		if(bool){
			$(this).css("color","red");
			var comm=parseInt($(this).children('span').html());
			$(this).children('span').html(comm+=1);
			bool=!bool;
		}else{
			$(this).css("color","#333");
			var comm=parseInt($(this).children('span').html());
			$(this).children('span').html(comm-=1);
			bool=!bool;
		}
	})
	var ph=$("#wrap li img").height()-$("#wrap .price").height();
	$("#wrap .price").css("top",ph+"px")
})