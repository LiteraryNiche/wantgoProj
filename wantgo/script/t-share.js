$(function(){
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




			$("#return").click(function(){
				window.location.replace("talking.html")
			})
			var winw=window.screen.width;
			if(winw<=320){
				$("#xe").css("margin-top","-50px")
			}
		})