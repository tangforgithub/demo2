$(function(){
	$(".nav-delivers").click(function(){
		$(".deliversShowBox").fadeIn(500);
	})
	$(".close").click(function(){
		$(".deliversShowBox").fadeOut(500);
	})
	
	$(".weixi").click(function(){
		$(".wxShowBox").fadeIn(500);
	})
	$(".wxShowBox").click(function(){
		if($(".wxShowBox").show()){
			$(".wxShowBox").fadeOut(500);
		}
	})
})
