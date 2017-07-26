$(function(){
	var winw=window.screen.width;
	var html=document.body.parentNode;
	if (winw>=640) {
		html.style.fontSize=10+"px";
	}else{
		html.style.fontSize=winw/375*10+"px";
	}
})