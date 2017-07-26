$(function(){
	$("#a1").click(function(){
		$(this).addClass("show");
		$("#a2").removeClass('show');
		$("#box1").show();
		$("#box2").hide();
	});
	$("#a2").click(function(){
		$(this).addClass('show');
		$("#a1").removeClass('show');
		$("#box2").show();
		$("#box1").hide();
	});
	$("#search").click(function(){
		window.location.replace("search.html");
	});
	$("#message").click(function(){
		window.location.replace("tmessage.html");
	});
		var bool=true;
	    var abool=true;
	
	    $(".fous").click(function(){
	    	if(bool){
	    		$(this).html("已关注");
	    		bool=!bool;
	    	}else{
	    		$(this).html("关注");
	    		bool=!bool;
	    	}
	    })
	    $(".love i").click(function(){
	    	if(abool){
	    		$(this).css("color","red").siblings().html("17");
	    		abool=!abool;
	    	}else{
	    		$(this).css("color","").siblings().html("16");
	    		abool=!abool;
	    	}
	    });
	    var t;
	    var s;
	    $("#touc")[0].addEventListener("touchstart",function(){	
			clearTimeout(t);
			clearTimeout(s);
		},false)
	    $("#touc")[0].addEventListener("touchmove",function(){
		
		var nowheight=$("#top_fir").height();
		var changeheight=parseInt(nowheight)+2+"px";	
		if(parseInt(nowheight)>=50){
			$("#result").html("释放立即刷新...").show();
		}else{
			if(parseInt(nowheight)<50){
				$("#result").html("下拉刷新").show();
				$("#top_fir").height(changeheight);
			}else{
					
				
			}
		}
		},false)
		$("#touc")[0].addEventListener("touchend",function(){
				$("#result").html("正在刷新...")	
			t=setTimeout(function(){			
				$("#result").html("刷新成功")
			},1000)
			s=setTimeout(function(){
				$("#top_fir").height("1rem");
			},1500)
		},false)

})