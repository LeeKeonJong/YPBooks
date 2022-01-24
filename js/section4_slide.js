$(function(){

    function prev2(){
		$('#section4_slidebox div:last').prependTo('#section4_slidebox');
		$('#section4_slidebox').css({marginLeft:-960}); 
		$('#section4_slidebox').stop().animate({marginLeft:0});
		}
		
	function next2(){
		$('#section4_slidebox').stop().animate({marginLeft:-960}, function(){
		$('#section4_slidebox .section4_slide:first').appendTo('#section4_slidebox');
		$('#section4_slidebox').css({marginLeft:0});
		});
	}
    $('.prev2').click(function(){
		prev2();
	});

	$('.next2').click(function(){
		next2();
	});

    $("#section4_slidebox,.prev2,.next2").mouseover(function(){
        $(".prev2").fadeIn(300);
        $(".next2").fadeIn(300);
    });
    $(".section4").mouseleave(function(){
        $(".prev2").fadeOut(300);
        $(".next2").fadeOut(300);
    });
});