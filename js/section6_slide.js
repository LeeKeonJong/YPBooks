$(function(){

	function prev4(){
		$('.section6_ul1 li:last').prependTo('.section6_ul1');
		$('.section6_ul1').css({marginLeft:-960}); 
		$('.section6_ul1').stop().animate({marginLeft:0},800);
		$('.section6_ul2 li:last').prependTo('.section6_ul2');
		}
		
	function next4(){
		$('.section6_ul1').stop().animate({marginLeft:-960}, function(){
		$('.section6_ul1 li:first').appendTo('.section6_ul1');
		$('.section6_ul1').css({marginLeft:0});
		$('.section6_ul2 li:first').appendTo('.section6_ul2');
		});
	}

	function slide(){
		$(".section6_ul1").stop().animate({marginLeft:-960}, function(){
			$(".section6_ul1 li:first").appendTo('.section6_ul1');
			$(".section6_ul1").css({marginLeft:0});
			$('.section6_ul2 li:first').appendTo('.section6_ul2');
		});
	}

    $('.prev4').click(function(){
		prev4();
	});

	$('.next4').click(function(){
		next4();
	});

    $("#section6_slidebox,.prev4,.next4").mouseover(function(){
        $(".prev4").fadeIn(300);
        $(".next4").fadeIn(300);
    });
    $(".section6").mouseleave(function(){
        $(".prev4").fadeOut(500);
        $(".next4").fadeOut(500);
    });
	setInterval(slide,3000);


	$(".section6_slide").mouseover(function(){

		$(".section6_thumbnail").css({"box-shadow":"1px 8px 20px gray"});

	});
	
	$(".section6_slide").mouseleave(function(){

		$(".section6_thumbnail").css({"box-shadow":"1px 1px 8px gray"});

	});
});