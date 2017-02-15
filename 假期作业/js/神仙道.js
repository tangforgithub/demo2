$(function(){
	$(".firstBtn").click(function(){
		$(".oneChoose").css("display","block");
		$(".firstBtn").css("backgroundImage","url( img/news-lab_03.png)");
		$(".secondBtn").css("backgroundImage","url( img/news-lab_04.png)");
		$(".thirdBtn").css("backgroundImage","url( img/news-lab_04.png)");
		$(".twoChoose").css("display","none");
		$(".threeChoose").css("display","none");
		
	});
	$(".secondBtn").click(function(){
		$(".oneChoose").css("display","none");
		$(".twoChoose").css("display","block");
		$(".threeChoose").css("display","none");
		$(".firstBtn").css("backgroundImage","url( img/news-lab_04.png)");
		$(".secondBtn").css("backgroundImage","url( img/news-lab_03.png)");
		$(".thirdBtn").css("backgroundImage","url( img/news-lab_04.png)");
	});
	$(".thirdBtn").click(function(){
		$(".oneChoose").css("display","none");
		$(".twoChoose").css("display","none");
		$(".threeChoose").css("display","block");
		$(".firstBtn").css("backgroundImage","url( img/news-lab_04.png)");
		$(".secondBtn").css("backgroundImage","url( img/news-lab_04.png)");
		$(".thirdBtn").css("backgroundImage","url( img/news-lab_03.png)");
	});
	
})
