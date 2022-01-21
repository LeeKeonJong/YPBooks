$(function(){

    $(".ctg1").click(function(){
        $(".section3_menu1").css("display","block");
        $(".section3_menu2").css("display","none");
        $(".section3_menu3").css("display","none");
        $(".section3_menu4").css("display","none");
        $(".ctg1").addClass("active2");
        $(".ctg2").removeClass("active2");
        $(".ctg3").removeClass("active2");
        $(".ctg4").removeClass("active2");
        $(".ctg1").css({"min-height":47});
        $(".ctg1").css("border-bottom","none");
        $(".ctg2").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg3").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg4").css({"border-bottom":"1px solid #b1b1b1"});
        
      });
      $(".ctg2").click(function(){
        $(".section3_menu2").css("display","block");
        $(".section3_menu1").css("display","none");
        $(".section3_menu3").css("display","none");
        $(".section3_menu4").css("display","none");
        $(".ctg2").addClass("active2");
        $(".ctg1").removeClass("active2");
        $(".ctg3").removeClass("active2");
        $(".ctg4").removeClass("active2");
        $(".ctg2").css({"min-height":47});
        $(".ctg2").css("border-bottom","none");
        $(".ctg1").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg3").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg4").css({"border-bottom":"1px solid #b1b1b1"});
        
        
      }); 
      $(".ctg3").click(function(){
        $(".section3_menu3").css("display","block");
        $(".section3_menu1").css("display","none");
        $(".section3_menu2").css("display","none");
        $(".section3_menu4").css("display","none");
        $(".ctg3").addClass("active2");
        $(".ctg1").removeClass("active2");
        $(".ctg2").removeClass("active2");
        $(".ctg4").removeClass("active2");
        $(".ctg3").css({"min-height":47});
        $(".ctg3").css("border-bottom","none");
        $(".ctg1").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg2").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg4").css({"border-bottom":"1px solid #b1b1b1"});
        
      }); 
      $(".ctg4").click(function(){
        $(".section3_menu4").css("display","block");
        $(".section3_menu1").css("display","none");
        $(".section3_menu2").css("display","none");
        $(".section3_menu3").css("display","none");
        $(".ctg4").addClass("active2");
        $(".ctg1").removeClass("active2");
        $(".ctg2").removeClass("active2");
        $(".ctg3").removeClass("active2");
        $(".ctg4").css({"min-height":47});
        $(".ctg4").css("border-bottom","none");
        $(".ctg1").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg2").css({"border-bottom":"1px solid #b1b1b1"});
        $(".ctg3").css({"border-bottom":"1px solid #b1b1b1"});
        
      });

});