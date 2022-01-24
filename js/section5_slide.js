$(function(){


    function prev3(){
		$('#section5_slidebox .section5_slide:last').prependTo('#section5_slidebox');
		$('#section5_slidebox').css({marginLeft:-960}); 
		$('#section5_slidebox').stop().animate({marginLeft:0},800);
		}
		
	function next3(){
		$('#section5_slidebox').stop().animate({marginLeft:-960}, function(){
		$('#section5_slidebox .section5_slide:first').appendTo('#section5_slidebox');
		$('#section5_slidebox').css({marginLeft:0});
		});
	}
    $('.prev3').click(function(){
		prev3();
	});

	$('.next3').click(function(){
		next3();
	});


});

