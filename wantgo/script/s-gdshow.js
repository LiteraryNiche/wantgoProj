	$(function(){
		$(window).scroll(function() {
			if($(window).scrollTop()>$("#box1").height()){
				$("#header").css({"background":"#fff","border-bottom":"1px solid #ccc"});
				$(".title p").css({"color":"#333"})
				$(".title p i").css("color","#333");
			}else{
				$("#header").css({"background":"transparent","border":"none"});
				$(".title p").css({"color":"#333"});
				$(".title p i").css("color","#fff");
			}
		});
		$("#return").click(function(){
			window.location.replace("stroll.html")
		});

		$("#shopcart").click(function(){
			window.location.replace("myshopping.html")
		});
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
			var val=1;
			$("#add").click(function(){
				val+=1;
				$("#comm").val(val);
			})
			$("#rese").click(function(){
				if(val<=0){

				}else{
					val-=1;
					$("#comm").val(val);
				}
				
			})
			$("#size li").click(function(){
				$(this).addClass('check');
				var pro=$(this).html();
				$("#choose").html(pro);
				$("#comment").html("0");
				$(this).siblings().removeClass('check');
				$("#color li").click(function(){
					$(this).addClass('check');
					var cols=$(this).html();
					var zhtml=pro+" "+cols;
					$("#choose").html(zhtml);
					$("#comment").html("17");
				})
			})
			$("#color li").click(function(){
					$(this).toggleClass('check');
					var cols=$(this).html();
					var zhtml=+" "+cols;
					$("#choose").html(zhtml);
					$("#comment").html("0");
			})
			$("#ok").click(function(){
				
				if($("#choose").html()!=""){
					$("#info").show();
					$("#meke").hide(500);
					$("#addcart").animate({"bottom":"-100%"}, 500,function(){
						$("#info").show();
						setTimeout(function(){
							$("#info").animate({"bottom":"-100%"}, 1000,function(){
								$("#info").css({"bottom":"15%","display":"none"})
							})
						},1000)
					})
				}
				
				
			})
			$("#addcart_btn").click(function(){
				
				$("#addcart").animate({"bottom":"0px"},500);
				$("#meke").show(500);
			})
			$("#meke").click(function(){
				none();
			})
			$("#close_btn").click(function(){
				none();
			})
			function none(){
				$("#addcart").animate({"bottom":"-100%"}, 500);
				$("#meke").hide(500);
			}

	})