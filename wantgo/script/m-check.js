$(function(){
	$("#check img").css("cursor","pointer");
	var patt= /^0?1[3|4|5|8][0-9]\d{8}$/;
	$("#check_btn").click(function(){
		var t;
		if($("#tel input").val()==""){
			$("#info_bot").stop(true);
			$("#info").html("请输入手机号码");
			$("#info_bot").show();
			setTimeout(function(){
				$("#info_bot").animate({"bottom":"-100%"}, 1000,function(){
					$("#info_bot").hide();
					$("#info_bot").css("bottom","15%");
				})
			},1000)
		}else if(!patt.test(parseInt($("#tel input").val()))){
			$("#info_bot").stop(true);
			$("#info").html("手机号码格式不正确");
			$("#info_bot div p").html("手机号码格式不正确")
			$("#info_bot").show();
			setTimeout(function(){
				$("#info_bot").animate({"bottom":"-100%"}, 1000,function(){
					$("#info_bot").hide();
					$("#info_bot").css("bottom","15%");
					$("#info_bot div p").html("请输入手机号码")
				})
			},1000)
		}else if(patt.test(parseInt($("#tel input").val()))&&$("#check_img input").val()==""){
			$("#info_bot").stop(true);
			$("#check_img").css("display","flex");
			$("#check_img input")[0].focus();
			$("#check_img").show();
			$("#info").html("请输入图形验证码");
			$("#info_bot div p").html("需要输入图形验证码")
			$("#info_bot").show();
			setTimeout(function(){
				$("#info_bot").animate({"bottom":"-100%"}, 1000,function(){
					$("#info_bot").hide();
					$("#info_bot").css("bottom","15%");
					$("#info_bot div p").html("请输入手机号码")
				})
			},1000)
		}else if(!$("#check_img input").val()==""){	
			clearInterval(t);
			$("#info").html("");
			var set=120;
			t=setInterval(
				function(){
					$("#check_btn").html(set+"s后重发");
					set--;
					if(set==0){
						clearInterval(t);
						$("#check_btn").html('<img src="images/myall/login2.png" alt="">')
					}
				},1000)
		}
	})
	$("#last").blur(function(){
		if($("#tel input").val()!=""&&$("#check_img input").val()!=""&&$(this).val()!=""){
			$(".login").css("color","#fff");
		}
	})
	var wh=window.innerHeight;
	var hh=wh-$(".header").height()-50;
	$(".container").height(hh);
	$("#login").click(function(){
		if($("#tel input").val()!=""&&$("#check img").val()!==""&&$("#last").val()!==""){
			window.location.replace("after_login.html")

		}else{
			
		}
	})
})