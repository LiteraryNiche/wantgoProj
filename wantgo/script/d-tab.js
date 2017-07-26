$(function(){
	$("#left").click(function(){
		$("#one").show();
		$("#two").hide();
		$(this).addClass("bs");
		$("#right").removeClass("bs");
	})
	$("#right").click(function(){
		$("#one").hide();
		$("#two").show();
		$(this).addClass("bs");
		$("#left").removeClass("bs");
	})
	var comment;
	$("#top")[0].addEventListener("touchstart",function(){	
		 comment=1;
	},false)
	$("#top")[0].addEventListener("touchmove",function(){
		
		var nowheight=$("#top_fir").height();
		var changeheight=parseInt(nowheight)+2+"px";	
		if(parseInt(nowheight)>=200){

		}else{
			$("#top_fir").height(changeheight);
			comment+=0.01;
			$("#changimg").css("transform","scale("+comment+")");	
		}
	},false)
	$("#top")[0].addEventListener("touchend",function(){
		$("#top_fir").height(0);
		$("#changimg").css("transform","scale(1)")
	},false)
})