$(function(){

			var ok=document.getElementById('ok');
			var price=document.getElementById("price");
			var add=document.getElementById("add");
			var chec=document.getElementById("chec");
			var misa=document.getElementById("misa");
			ok.onclick=change;
			misa.onclick=change;
			chec.onclick=change;
			function change(){
				chec.checked=this.checked;
				misa.checked=this.checked;
				ok.checked=this.checked;
				if(this.checked==true){
					add.innerHTML="1";
					all.innerHTML=price.innerHTML;
				}else{
					add.innerHTML="0";
					all.innerHTML="0";
				}
				
			}
		
})