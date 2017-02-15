window.onload=function(){
	var oUl1=document.getElementById("ul1");
	var arrLi=oUl1.getElementsByTagName("li");
	var oMask=document.getElementsByClassName("mask")[0];
	var oNow=document.getElementsByClassName("now")[0];
	var oMedia=document.getElementById("media");
	var oMediaLi=document.getElementById("mediaLi");
	var oKhd=document.getElementById("kehuduan");
	var oEwm=document.getElementById("erweima");
	var oMore=document.getElementById("more");
	var oMoreLi=document.getElementById("moreLi");
	var oPng=document.getElementById("png");
	oMask.style.left=oNow.offsetLeft+"px";
	oMask.style.width=oNow.offsetWidth+"px";
	
	for(var i=0;i<arrLi.length;i++){
		arrLi[i].onmouseover=function(){
			oMask.style.transition="all 0.3s";
			oMask.style.left=this.offsetLeft+"px";
			oMask.style.width=this.offsetWidth+"px";
		}
		arrLi[i].onmouseout=function(){
			oMask.style.left=oNow.offsetLeft+"px";
			oMask.style.width=oNow.offsetWidth+"px";
		}
	}
	
	oMediaLi.onmouseover=function(){
		oMedia.style.display="block";
		oMask.style.transition="all 0.3s";
		oMask.style.left=this.offsetLeft+"px";
		oMask.style.width=this.offsetWidth+"px";
	}
	oMediaLi.onmouseout=function(){
		oMask.style.left=oNow.offsetLeft+"px";
		oMask.style.width=oNow.offsetWidth+"px";
		oMedia.style.display="none";
	}
	
	oKhd.onmouseover=function(){
		oEwm.style.display="block";
	}
	oKhd.onmouseout=function(){
		oEwm.style.display="none";
	}
	
	oMoreLi.onmouseover=function(){
		oMore.style.display="block";
		oMask.style.transition="all 0.3s";
		oMask.style.left=this.offsetLeft+"px";
		oMask.style.width=this.offsetWidth+"px";
	}
	oMoreLi.onmouseout=function(){
		oMore.style.display="none";
		oMask.style.left=oNow.offsetLeft+"px";
		oMask.style.width=oNow.offsetWidth+"px";
	}
}
