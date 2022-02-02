$(function(){

	$.get("text/left5_text1.txt", function (data) {

		$(".left5_text1").html(data);

	});

});