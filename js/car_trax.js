//resizeFn
var resizeFn = {
	prevMain:function () {
		var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
		$("#main").height(_windowHeight + 500);
		$("#container").height(_windowHeight + 200);
		if (isBrowse().chrome) {
		} else {
			$(window).scrollTop(1);
		}
	},
	initDom:function () {
		var _windowHeight = window.innerHeight != null ? window.innerHeight : $(window).height();
		var winVisiH = _windowHeight - $("#head").height(); //重置成新高度
		$("#main").height(winVisiH);
		$("#container").height(_windowHeight);
		$("#contentCar").height(winVisiH);
	}
};


/*
   左右切换
   */
var malibuKV = inherit(cmnKVfn);        //把固定对象转移到别的变量上
var shenHaiKV = inherit(cmnKVfn);



//初始化对象
var captivaFn = inherit(carIdxFn);

$(function () {
	document.addEventListener('touchmove', function (e) {
		e.preventDefault();
	}, false);
	window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);
	$("video").on("click", function () {
		if (this.paused == true) {
			this.play();
		} else {
			this.pause();
		}
	}); // end video click handler
	$("#seaBox").width($(window).width());
	jackyPicViewJ.init();
	//视频播放
	navSwitch.bindEvent();

	$(window).bind({
		"load":function () {
			resizeFn.prevMain();
			resizeFn.initDom();
			if ($("#car_kv").length > 0) {
				malibuKV.init({
					kvUL:"#car_kv .ulPic",
					kvLI:"#car_kv .ulPic li",
					switchUL:"#car_kv .ulSwitch",
					switchLI:"#car_kv .ulSwitch li"
				});
			}
			// if ($("#box5").length > 0) {//最后一屏
			//     __page4.init({
			//         kvUL:"#box5 .ulPic",
			//         kvLI:"#box5 .ulPic li",
			//         // subTitle:{dom:"#box5 .subTitle", json:["JBL专业影院级音响", "On Star智能行车伙伴", "Color Radio真彩影音娱乐系统", "Oscar 人体工程座椅设计", "海蓝色静谧氛围光"]},
			//         switchUL:"#box5 .ulSwitch",
			//         switchLI:"#box5 .ulSwitch li"
			//     });
			// }
			if ($("#seaBox").length > 0) {//最后一屏
				shenHaiKV.init({
					kvUL:"#seaBox .ulPic",
					kvLI:"#seaBox .ulPic li",
					subTitle:{dom:"#seaBox .subTitle", json:["7人座超大空间", "BFI车身一体式钢架", "都市现代风格内饰", "新一代智能6速手自一体变速箱", "全新增强型专业SUV底盘"]},
					switchUL:"#seaBox .ulSwitch",
					switchLI:"#seaBox .ulSwitch li"
				});
			}


			//调用 车型滑动方法
			captivaFn.init({
				dragObj:"#contentCar",
				step:$("#main").height()
			});
			//    loadedMain();
			//    noBarsOnTouchScreen("contentCar");
			jackyFn.loadingFn("no");
			// $("#box4 .pTVC").html('<video id="idxTvc1" class="video-js vjs-default-skin" preload="none"  width="100%" height="100%" poster="img/malibu/video_01.jpg"><source src="http://www.chevrolet.com.cn/brandsite/youku/getVideo.ashx?vid=XNTcxNDY1MDg4&format=mp4" width="100%" height="100%" type="video/mp4" /></video>');
			window.setTimeout(function () {
				$(".car_detail .box9 .switchDiv").css({top:$("#main").height() - 150});
			}, 500);
		}
	});


	$(".cmnPop .closeDiv a").live("click", function (e) {
		e.preventDefault();
		$(".cmnPop").fadeOut(function () {
			$(this).empty();
		});
		jackyFn.filterAbs("no", $("body"));
	});

	carPage3.init();
	
	
	var ZHU = 0 ;
	$(window).bind("myScrollEnd",function(){
		if( ! ZHU ++) return;
		wangfan.detect.onCarHomeSceneChange(captivaFn.currSence);
	});
});


var carPage3 = {
	init:function(){
		this.setVars();
		this.bindEvent();

	},
	setVars:function(){
		this.$cars = $('#box4').children('.car');
		this.$points = $('#box4').children('.point').children('a');
		this.$touchArea = $('#box4').children('.touchArea');
		this.n = 0;
		this.max =  $('#box4').children('.car').length; 
		this.speed = 500;
	},
	showHide:function(n){
		this.$cars.eq(this.n).css('display','none');
		this.$points.eq(this.n).stop().removeClass('active');
		this.n = n
		this.$cars.eq(this.n).css('z-index',2).fadeIn(this.speed);
		this.$points.eq(this.n).addClass('active');
	},
	bindEvent:function(){
		var thisFn = this;
		var startX = '',endX = '',minW = 50,i = '';
		this.$points.bind('click',function(){
			if($(this).hasClass('active')) return;
			var i = carPage3.$points.index(this);
			carPage3.showHide(i);
		});

		this.$touchArea.on('touchstart',function(event){
			$('#test').html(__touchDirection)
			startX = 0,endX = 0;
			startX = event.originalEvent.touches[0].pageX;



		});
		this.$touchArea.on('touchmove',function(event){
			endX = event.originalEvent.touches[0].pageX;
			if(Math.abs(startX - endX) > 20 )   __touchDirection  = 'LEFT';

		});
		this.$touchArea.on('touchend',function(event){
			__touchDirection  = null;
			if(startX > endX && startX - endX > minW && endX != 0){
				i = thisFn.n < thisFn.max-1 ? thisFn.n+1 : 0;
				thisFn.showHide(i);
			}else if(startX < endX && endX - startX > minW && endX != 0){
				i = thisFn.n > 0 ? thisFn.n-1 : thisFn.max-1;
				thisFn.showHide(i);
			};

		});
	}
};

