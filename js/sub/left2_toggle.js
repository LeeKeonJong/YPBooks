$(function(){

	$(".toggle_down").click(function(){
		$(".afterbar").hide();
		$("#section3_left2").css({"height":"500"})
		$(".left2_text2").css({"height":"220"});
		$(".toggle_down").hide();
		$(".toggle_up").show();
		
	});

	$(".toggle_up").click(function(){
		$(".afterbar").show();
		$("#section3_left2").css({"height":"450"})
		$(".left2_text2").css({"height":"150"});
		$(".toggle_up").hide();
		$(".toggle_down").show();
		
	});

	$(".toggle_down2").click(function(){
		$(".afterbar2").hide();
		$(".left3_text1").css({"height":"2600"});
		$(".toggle_down2").hide();
		$(".toggle_up2").show();
		
	});

	$(".toggle_up2").click(function(){
		$(".afterbar2").show();
		$(".left3_text1").css({"height":"350"});
		$(".toggle_up2").hide();
		$(".toggle_down2").show();
		
	});
});