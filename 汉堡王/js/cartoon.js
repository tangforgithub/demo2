$(function(){
	$(".cartoon1").click(function(){
		$(".cartoon1").css({
			"margin-left":"9.9%",
			"transition":"all 2s",
			"transform":"scale(2,2)"
		})
		$(".cartoonP1").hide();
		setTimeout(function(){
			$(".cartoonP2").show();
			$(".cartoon1").hide();
			$(".cartoon2").show();
		},2500)
	})
	
	$(".cartoon2").click(function(){
		$(".cartoon2").css({
			"margin-left":"27%",
			"transition":"all 2s",
		})
		$(".cartoonP2").hide();
		setTimeout(function(){
			$(".cartoon2").css({"opacity":"0","transition":"all 2s"});
			$(".cartoon3").css({"opacity":"1","transition":"all 3s"});
		},2500,
		setTimeout(function(){
			$(".cartoonP4").show();
		},2000))
		
		
	})
	
})
