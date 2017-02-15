$(function(){
	$(".min-nav>a").hover(function(){
		$(".min-nav>a").css({"color":""});
		$(this).css({"color":"#ef7800"});
	},function(){
		$(".min-nav>a").css({"color":""});
	})
	var timer=0;
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		if(scrolltop==0){
			clearInterval(timer)
			timer=0
		}
	})
	$(".imgs-1").click(function(){
		if(timer==0){
			timer=setInterval(function(){
				var scrolltop1=$(document).scrollTop();
				scrolltop1-=100;
				$(document).scrollTop(scrolltop1)
			},50)
		}
	})
	
	$(".weixi2").click(function(){
		$(".wxShowBox").fadeIn(500);
	})
	$(".wxShowBox").click(function(){
		if($(".wxShowBox").show()){
			$(".wxShowBox").fadeOut(500);
		}
	})
})
