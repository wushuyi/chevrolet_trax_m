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
	$('.cmnBox .pic').on('click', function(e){
		var $self = $(this);
		var mzName = $self.children('.aLightPic:eq(0)').attr('data-word');
		mz.event('手机端-创酷官网-点击看大图-'+mzName);
	});
	$('#box7 .vclick').on('click', function(e){
		var $self = $(this);
		var index = $self.index();
		var arrName = [
			'设计篇',
			'性能篇',
			'科技篇'
		];
		mz.event('手机端-创酷官网-视频-'+arrName[index]);
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
