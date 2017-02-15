$(function(){
	var oBannerImgs=$(".bannerImgs");
	var arrImgs=$(".imgs");
	var arrLis=$(".lis");
	arrLis.click(function(){
		var index=$(this).index();
		oBannerImgs.css({"left":index*-640+"px"})
		arrLis.removeClass("now").eq(index).addClass("now");
		page=index;
	})
	
	var oShowImgs=$(".showImgs");
	var arrImg1=$(".img1");
	var oPrev=$(".prev");
	var oNext=$(".next");
	var page=0;
	oPrev.click(function(){
		page--;
		if(page<0){
			page=arrImg1.length-1;
		}
		oShowImgs.css({"left":page*-874+"px"});
	})
	oNext.click(function(){
		page++;
		if(page>arrImg1.length-1){
			page=0;
		}
		oShowImgs.css({"left":page*-874+"px"});
	})
})
