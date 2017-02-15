$(function(){
	$("#snow").load("snow.html")
})
$(function(){
	$("#header").load("header.html")
})
$(function(){
	$("#christmasTree").load("圣诞树.html");
})
//classmates开始
//	$(function(){
//		$("#classmate").load('classmate.html');
//	})
//classmates结束
//banner开始
$(function(){
	var arrLis=$(".lis");
	var arrBannerImg=$(".bannerimg");
	var oLeft=$(".left");
	var oRight=$(".right");
	var page=0;
	arrLis.click(function(){
		var index=$(this).index();
		arrBannerImg.hide().eq(index).toggle(500);
		arrLis.removeClass("active").eq(index).addClass("active");
		page=index;
	})
	oLeft.click(function(){
		page--;
		if(page<0){
			page=arrBannerImg.length-1;
		}
		arrBannerImg.hide().eq(page).toggle(500);
		arrLis.removeClass("active").eq(page).addClass("active");
	})
	function aright(){
		page++;
		if(page>arrBannerImg.length-1){
			page=0;
		}
		arrBannerImg.hide().eq(page).toggle(500);
		arrLis.removeClass("active").eq(page).addClass("active");
	}
	oRight.click(function(){
		aright();
	})
	var timer=setInterval(aright,3000);
	$(".banner").mouseover(function(){
		clearInterval(timer);
		timer=0;
	})
	$(".banner").mouseout(function(){
		if(!timer){
			timer=setInterval(aright,3000);
		}
	})
//banner结束
//wheel开始
	$(function(){
		$("#wheel").load('wheel.html');
	})	
//wheel结束
//圣诞树插件开始
	$("#christmasTree").hover(function(){
		$(".treeFont").fadeToggle();
	})
//圣诞树插件结束
	$(function(){
		$("#footer").load("footer.html")
	})	
//classmates开始
	var $animate = $('#animate');
	var $opposite = $('#opposite');
	$(".wrap").hover(function(){
		$animate.removeClass();
		$opposite.removeClass();
		$animate.addClass("test");
		$opposite.addClass('test2');
	},function(){
		$animate.removeClass();
		$opposite.removeClass();
		$animate.addClass("test2");
		$opposite.addClass('test');
	});

	$(".well-item").hover(function(){
		$(this).find(".correct").children().removeClass();
		$(this).find(".opposite").children().removeClass();
		$(this).find(".correct").children().addClass("test");
		$(this).find(".opposite").children().addClass('test2');
	},function(){
		$(this).find(".correct").children().removeClass();
		$(this).find(".opposite").children().removeClass();
		$(this).find(".correct").children().addClass("test2");
		$(this).find(".opposite").children().addClass('test');
	});
//classmates结束
})
