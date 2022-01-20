$(function(){
	function prev(){
		$('.section2_slidebox .section2_divs:last').prependTo('.section2_slidebox');
		$('.section2_slidebox').css({marginLeft:-950}); 
		$('.section2_slidebox').stop().animate({marginLeft:0},800);
		}
		
	function next(){
		$('.section2_slidebox').stop().animate({marginLeft:-950}, function(){
		$('.section2_slidebox .section2_divs:first').appendTo('.section2_slidebox');
		$('.section2_slidebox').css({marginLeft:0});
		});
	}
		

	function slide(){
		$(".section2_slidebox").stop().animate({marginLeft:-950}, function(){
			$(".section2_slidebox div:first").appendTo(".section2_slidebox");
			$(".section2_slidebox").css({marginLeft:0});
		});
	}
	var Interval = setInterval(slide,5000);


	$('.prev').click(function(){
		prev();
	});

	$('.next').click(function(){
		next();
	});
	            
	$(".section2_divs").mouseover(function(){
		$('.prev').css("display","block");
		$('.next').css("display","block");
		$('.section2_divs').css({border : "1px solid black"});
		clearInterval(Interval);
	});
	$(".prev").mouseover(function(){
		$('.prev').css("display","block");
		$('.next').css("display","block");
		$('.section2_divs').css({border : "1px solid black"});
		clearInterval(Interval);
	});
	$(".next").mouseover(function(){
		$('.prev').css("display","block");
		$('.next').css("display","block");
		$('.section2_divs').css({border : "1px solid black"});
		clearInterval(Interval);
	});
	$(".section2").mouseleave(function(){
		$('.prev').fadeOut(500);
		$('.next').fadeOut(500);
		$('.section2_divs').css({border : "none"});
		Interval = setInterval(slide,5000);
	});	

});
