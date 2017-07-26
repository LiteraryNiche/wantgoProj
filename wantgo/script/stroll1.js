function show(){
	var chosen=document.getElementById("chosen");
		 var tp=chosen.getElementsByTagName("dd");
		 var btm=chosen.getElementsByTagName("ul");
		 var t=0;

		 for(var i=0;i<tp.length;i++){
		 	tp[i]._index=i;
		 	tp[i].onclick=function(){
		 		tp[t].className="";
		 		btm[t].className="";
		 		t=this._index;
		 		this.className="chosen";
		 		btm[t].className="chosen-btm";
		 	}
		 }
}
show();