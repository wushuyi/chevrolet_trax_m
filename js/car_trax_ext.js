$(document).ready(function(){
	var thisVideo_1 = document.getElementById("video_1");
	var thisVideo_2 = document.getElementById("video_2");
	var thisVideo_3 = document.getElementById("video_3");
	var thisVideo_4 = document.getElementById("video_4");
	var thisVideo_5 = document.getElementById("video_5");
	var thisVideo_6 = document.getElementById("video_6");
	var thisVideo_7 = document.getElementById("video_7");

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
		thisVideo_4.addEventListener('pause',function(){
			$(".hide_video_4").hide();
		})
		thisVideo_5.addEventListener('pause',function(){
			$(".hide_video_5").hide();
		})
		thisVideo_6.addEventListener('pause',function(){
			$(".hide_video_6").hide();
		})
		thisVideo_7.addEventListener('pause',function(){
			$(".hide_video_7").hide();
		})
	}


	$(".car_detail .box1 .video_1").click(function(){
		$(".hide_video_1").show();
		thisVideo_1.play();
		return false;
	});
	$(".car_detail .box1 .video_2").click(function(){
		$(".hide_video_2").show();
		thisVideo_2.play();
		return false;
	});
	$(".car_detail .box1 .video_3").click(function(){
		$(".hide_video_3").show();
		thisVideo_3.play();
		return false;
	});
	$(".car_detail .box1 .video_4").click(function(){
		$(".hide_video_4").show();
		thisVideo_4.play();
		return false;
	});
	$(".car_detail .box1 .video_5").click(function(){
		$(".hide_video_5").show();
		thisVideo_5.play();
		return false;
	});
	$(".car_detail .box1 .video_6").click(function(){
		$(".hide_video_6").show();
		thisVideo_6.play();
		return false;
	});
	$(".car_detail .box1 .video_7").click(function(){
		$(".hide_video_7").show();
		thisVideo_7.play();
		return false;
	});
});
