// trax 创酷 监测代码 扩展

$(document).ready(function(){
	var test = {
		isDebug: false,
		log: function (log){
			if(test.isDebug){
				alert(test.isDebug);
				console.log(log);
			}else{
				return false;
			}
		}
	};
	test.isDebug = false;
	
if(window.location.href.indexOf('car-trax.html') > -1){
	$('.moreinfo').click(function(){
		mz.event('手机端-创酷官网-首页-了解详情');
	});
	$("#box1 .video_1").click(function(){
		test.log("#box1 .video_1");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-设计篇']);
	});
	$("#box1 .video_2").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-性能篇']);
	});
	$("#box1 .video_3").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-科技篇']);
	});
	$("#box1 .video_4").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-创酷微电影1']);
	});
	$("#box1 .video_5").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-创酷微电影2']);
	});
	$("#box1 .video_6").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-创酷微电影3']);
	});
	$("#box1 .video_7").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxVideo",'click','视频-创酷微电影4']);
	});
	$("#box2 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-战骁式18寸超大轮毂']);
	});
	$("#box2 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-流畅利落车顶线条']);
	});
	$("#box3 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-冲锋式独立双座舱']);
	});
	$("#box3 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-未来式液晶仪表盘']);
	});
	$("#box4 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-1.4T涡轮增压发动机']);
	});
	$("#box4 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-AWD智能四驱系统']);
	});
	$("#box5 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-雪佛兰MyLink智能车载互联系统']);
	});
	$("#box5 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-安吉星全方位语音服务']);
	});
	$("#box6 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-BFI安全车身设计']);
	});
	$("#box6 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-外后视镜电加热']);
	});
	$("#box7 .pic_1 .aPic1 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-大容量内部空间']);
	});
	$("#box7 .pic_2 .aPic2 img").click(function(){
		test.log("log");
		_gaq.push(['_trackEvent', "traxBigimg",'click','点击看大图-大容量灵活行李箱']);
	});
}else if(window.location.href.indexOf('car-trax_360.html') > -1){
	$("#box1 .switch_1").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-波尔红']);
		mz.event('手机端-创酷官网-360-外观-波尔红');
	});
	$("#box1 .switch_2").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-奥丁灰']);
		mz.event('手机端-创酷官网-360-外观-奥丁灰');
	});
	$("#box1 .switch_3").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-珍珠白']);
		mz.event('手机端-创酷官网-360-外观-珍珠白');
	});
	$("#box1 .switch_4").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-流光银']);
		mz.event('手机端-创酷官网-360-外观-流光银');
	});
	$("#box1 .switch_5").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-炫冰蓝']);
		mz.event('手机端-创酷官网-360-外观-炫冰蓝');
	});
	$("#box1 .switch_6").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-烈焰橙']);
		mz.event('手机端-创酷官网-360-外观-烈焰橙');
	});
	$('#in_360').click(function(){
		mz.event('手机端-创酷官网-360-内饰');
	});
}else if(window.location.href.indexOf('car-trax_in_360.html') > -1){
	$('#re360').click(function(){
		mz.event('手机端-创酷官网-360-外观');
	});
}
	$("#car_kv .newSubBtn.sub").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-首页-头部预约试驾']);
	});
	$("#box8 .newSubBtn.sub").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-首页-底部预约试驾']);
	});
	$(".blocFoot .newSubBtn.sub").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-配置价格-底部预约试驾']);
	});
	$("#box2 .newSubBtn.sub").click(function(){
		_gaq.push(['_trackEvent', "traxTry",'click','创酷-360-底部预约试驾']);
	});
	mz.clickeventlive('#popTip, .closeDiv', '手机端-创酷官网-底部导航-活动-关闭');
});
