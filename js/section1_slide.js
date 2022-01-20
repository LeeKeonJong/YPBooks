$(function(){
	
	$(".dot1").click(function(){
		$(".section1_slidebox1").fadeIn();
		$(".section1_slidebox2").fadeOut();
		$(".dot2").removeClass("active");
		$(".dot1").addClass("active");
	})
	$(".dot2").click(function(){
		$(".section1_slidebox2").fadeIn();
		$(".section1_slidebox1").fadeOut();
		$(".dot1").removeClass("active");
		$(".dot2").addClass("active");
	});

	var i=0;
	function slide(){
		
		i++;
		if(i > $("#section1_slidebox .autoslide:last-child").index()){
			i=0;
		}
		$('#section1_slidebox .autoslide').eq(i).stop().fadeIn();
        $('#section1_slidebox .autoslide').eq(i-1).stop().fadeOut();
		$('#dots .dot').eq(i).stop().addClass("active");
		$('#dots .dot').eq(i-1).stop().removeClass("active");
		
			
		

	}
	setInterval(slide,5000);
});