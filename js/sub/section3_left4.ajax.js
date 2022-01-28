$(function(){

	$.get("text/left4_text1.txt", function (data) {

		$(".left4_text1").html(data);

	});

});