$(function(){
		var header=document.getElementById("header");
		var tp=document.getElementById("header-top").getElementsByTagName("span");
		var btm=document.getElementsByTagName("ul");
		var t=0;
		function show_1(){
		 
		  var bool=true;
		   for(var i=0;i<tp.length;i++){
		   		tp[i]._index=i;
		   		tp[i].onclick=function(){
		   			if(bool){
		   				btm[t].style.top="-39rem";
		   				t=this._index;
			   			btm[t].style.top="8rem";
			   			btm[t].style.color="#cca130";
			   			bool=!bool;
		   			}else{
						btm[t].style.top="8rem";
		   				t=this._index;
			   			btm[t].style.top="-39rem";
			   			btm[t].style.color="#cca130";
			   			bool=!bool;
		   			}
		   			
		   		}
		   }
		}
		show_1();
		function show_2(){
			var btm2=document.getElementById("header-btm");
			var btm3=document.getElementById("btm-btm");
			var btm4=document.getElementById("btm-top");
			btm2.onclick=function(){
			btm[t].style.top="-39rem";
			btm3.style.left="0";

			}
			btm4.onclick=function(){
				btm3.style.left="100%";
			}

		}
	 	show_2() 

	 $("#return").click(function(){
	 	window.location.replace("stroll.html");
	 })
	 $("#search").click(function(){
	 	window.location.replace("seach.html");
	 });
	 var win=window.innerHeight;
	 $("#btm-btm").height(win);
	 $("#btm-4").height(win);
	 var imgh=$(".chosen-1 img").height();
	 console.log(imgh);
	 var ph=$(".chesen-2 p").height();
	 $(".chesen-2 p").css("top",imgh-ph);
	 var booll=true;
	 $("#chosen li p i").click(function(){
	 	if(booll){
	 		$(this).css("color","red");
	 		$(this).parents("li").find('span').html("1");
	 		booll=!booll;
	 	}else{
	 		$(this).css("color","#333");
	 		$(this).parents("li").find('span').html("0");
	 		booll=!booll;
	 	}
	 })
})