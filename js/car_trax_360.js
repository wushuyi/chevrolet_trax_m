$(document).ready(function(){
	frames("f");
	switchButtom();
	$("#switchColor .title").hide();
	$("#switchColor .switch_1 .title").show();
});
function frames(img){
	var img = "trax_360/" + img;
	var frames = [
		"./"+img+"/4.png",
		"./"+img+"/5.png",
		"./"+img+"/6.png",
		"./"+img+"/7.png",
		"./"+img+"/8.png",
		"./"+img+"/9.png",
		"./"+img+"/10.png",
		"./"+img+"/11.png",
		"./"+img+"/12.png",
		"./"+img+"/13.png",
		"./"+img+"/14.png",
		"./"+img+"/15.png",
		"./"+img+"/16.png",
		"./"+img+"/17.png",
		"./"+img+"/18.png",
		"./"+img+"/19.png",
		"./"+img+"/20.png",
		"./"+img+"/21.png",
		"./"+img+"/22.png",
		"./"+img+"/23.png",
		"./"+img+"/24.png",
		"./"+img+"/25.png",
		"./"+img+"/26.png",
		"./"+img+"/27.png",
		"./"+img+"/28.png",
		"./"+img+"/29.png",
		"./"+img+"/30.png",
		"./"+img+"/31.png",
		"./"+img+"/32.png",
		"./"+img+"/33.png",
		"./"+img+"/34.png",
		"./"+img+"/35.png",
		"./"+img+"/1.png",
		"./"+img+"/2.png",
		"./"+img+"/3.png"
		
	];

	$("#360frames").spritespin({
		width     : 640,
		height    : 301,
		frames    : frames.length,
		behavior  : "drag", // "hold"
		module    : "360",
		sense     : 1,
		source    : frames,
		animate   : false,
		loop      : false,
		frameWrap : true,
		frameStep : 1,
		frameTime : 60,
		enableCanvas : true
	});

	var framesHeight = $(window).width() / 640 * 301;
	$("#360frames .spritespin-canvas").css({ width: "100%", height: "100%" });
	$("#360frames").css({ width: "100%", height: framesHeight });
	$(".spritespin-stage").css({ width: "100%", height: framesHeight });
	$(".spritespin-preload").css({ width: "100%", height: framesHeight });
};

function switchButtom(){
	$("#switchColor ul li").each(function(i){
		$(this).click(function(){
			$("#switchColor .title").hide();
			$(this).children(".title").show();
			var thisImg = $(this).attr("switch_data");
			console.log(thisImg);
			$("#frames").html('<div id="360frames"></div>');
			frames(thisImg);
		});
	});
}
