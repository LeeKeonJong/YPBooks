$(function(){

	$.get("text/left3_text1.txt", function (data) {

		$(".left3_text1").html(data);

	});
});