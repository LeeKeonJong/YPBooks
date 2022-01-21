$(function(){

    $(".ctg1").click(function(){
        $(".section3_menu1").css("display","block");
        $(".menu2").css("display","none");
        $(".menu3").css("display","none");
        $(".menu4").css("display","none");
      });
      $(".ctg2").click(function(){
        $(".section3_menu2").css("display","block");
        $(".menu1").css("display","none");
        $(".menu2").css("display","none");
        $(".menu3").css("display","none");
      }); 
      $(".ctg3").click(function(){
        $(".section3_menu3").css("display","block");
        $(".menu1").css("display","none");
        $(".menu2").css("display","none");
        $(".menu4").css("display","none");
      }); 
      $(".ctg4").click(function(){
        $(".section3_menu4").css("display","block");
        $(".menu1").css("display","none");
        $(".menu2").css("display","none");
        $(".menu3").css("display","none");
      });

});