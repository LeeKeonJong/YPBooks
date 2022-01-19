$(function(){

function slide(){
    $(".header_slideul").stop().animate({marginLeft:-180}, function(){
        $(".header_slideul li:first").appendTo(".header_slideul");
        $(".header_slideul").css({marginLeft:0});
    });
}
setInterval(slide,5000);
});