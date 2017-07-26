
		$("#one img").height(window.innerHeight);
		$("#two img").height(window.innerHeight);
		$("#three img").height(window.innerHeight);
		  var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        autoHeight: true, 
		    });
		  $("#left").click(function(){
		  	window.location.replace("index.html")
		  })
		 	$("#share_btn").click(function(){
				$("#share").show();
				$("#share").animate({
					"bottom":"0px"
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
		var imgh=$("#wrap ul li img").height();
		var ph=imgh-$("#wrap li div").height();
		$("#wrap li div").css("top",ph+"px");		 
			
	