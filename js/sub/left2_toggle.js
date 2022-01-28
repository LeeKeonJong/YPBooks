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
		$(".left3_text1").css({"height":"2520"});
		$(".toggle_down2").hide();
		$(".toggle_up2").show();
		
	});

	$(".toggle_up2").click(function(){
		$(".afterbar2").show();
		$(".left3_text1").css({"height":"350"});
		$(".toggle_up2").hide();
		$(".toggle_down2").show();
		
	});

	$(".toggle_down3").click(function(){
		$(".afterbar3").hide();
		$(".left4_text1").css({"height":"2100"});
		$(".toggle_down3").hide();
		$(".toggle_up3").show();
		
	});

	$(".toggle_up3").click(function(){
		$(".afterbar3").show();
		$(".left4_text1").css({"height":"350"});
		$(".toggle_up3").hide();
		$(".toggle_down3").show();
		
	});
});