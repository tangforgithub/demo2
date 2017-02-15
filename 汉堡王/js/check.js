$(function(){
	$("#header").load('header.html')
})
$(function(){
	$("#footer").load('footer.html')
})
$(function(){
	var oPrev=$(".prev");
	var oNext=$(".next");
	var oCheckImgs=$(".checkImgs");
	var arrCheckImgs1=$(".checkImgs-1");
	var page=0;
	oPrev.click(function(){
		page--;
		if(page>1){
			oCheckImgs.stop(true,true).animate({
				"left":page*-980+"px"
			},800);
		}else{
			page=5;
			oCheckImgs.css("left",6*-980+"px")
			oCheckImgs.stop(true,true).animate({
				"left":-5*980+"px"
			},800)
		}
	})
	oNext.click(function(){
		page++;
		if(page<arrCheckImgs1.length-3){
			oCheckImgs.stop(true,true).animate({
				"left":(page+2)*-980+"px"
			},800)
		}else{
			page=1;
				oCheckImgs.css("left","-1960px")
			oCheckImgs.stop(true,true).animate({
				"left":-3*980+"px"
			},800)
		}
	})
})
