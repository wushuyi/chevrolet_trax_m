$(document).ready(function(){
	var thisVideo_1 = document.getElementById("video_1");
	var thisVideo_2 = document.getElementById("video_2");
	var thisVideo_3 = document.getElementById("video_3");

	if(thisVideo_1){
		thisVideo_1.addEventListener('pause',function(){
			$(".hide_video_1").hide();
		})
		thisVideo_2.addEventListener('pause',function(){
			$(".hide_video_2").hide();
		})
		thisVideo_3.addEventListener('pause',function(){
			$(".hide_video_3").hide();
		})
	}

	$(".car_detail .video_1").click(function(){
		$(".hide_video_1").show();
		thisVideo_1.play();
		return false;
	});
	$(".car_detail .video_2").click(function(){
		$(".hide_video_2").show();
		thisVideo_2.play();
		return false;
	});
	$(".car_detail .video_3").click(function(){
		$(".hide_video_3").show();
		thisVideo_3.play();
		return false;
	});
});
