$(function(){

    $.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"소설",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
            .done(function (msg) {
               
                var menus = document.getElementsByClassName('menu1');

                for (var i = 0; i < menus.length; i++) {

                    var str = msg.documents[i].title;
                        var str2 = str.substring(0, 30);

                        var str3 = msg.documents[i].publisher;
                        var str4 = str3.substring(0, 8);

                    $(".menu_img").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".menu_text").eq(i).append("<b>"+str2+"</b>"+"<br>");
                    $(".menu_text").eq(i).append("<span>"+msg.documents[i].authors+"</span>"+" | ");
                    $(".menu_text").eq(i).append("<span>"+str4+"..."+"</span>"+"<br>");
                    $(".menu_text").eq(i).append("<p>"+msg.documents[i].price+"원"+"</p>");
                    
                       
                }
                
            });
            $.ajax({
		
                method: "GET",
                
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                
                data: { query:"코로나",size:10 },
                headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                
                })
                    .done(function (msg) {
                       
                        var menus = document.getElementsByClassName('menu2');
        
                        for (var i = 0; i < menus.length; i++) {
        
                            var str = msg.documents[i].title;
                                var str2 = str.substring(0, 25);
        
                                var str3 = msg.documents[i].publisher;
                                var str4 = str3.substring(0, 8);
        
                            $(".menu_img2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                            $(".menu_text2").eq(i).append("<b>"+str2+"</b>"+"<br>");
                            $(".menu_text2").eq(i).append("<span>"+msg.documents[i].authors+"</span>"+" | ");
                            $(".menu_text2").eq(i).append("<span>"+str4+"..."+"</span>"+"<br>");
                            $(".menu_text2").eq(i).append("<p>"+msg.documents[i].price+"원"+"</p>");
                            
                               
                        }
                        
                    });
                    $.ajax({
		
                        method: "GET",
                        
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        
                        data: { query:"경제",size:10 },
                        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                        
                        })
                            .done(function (msg) {
                               
                                var menus = document.getElementsByClassName('menu3');
                
                                for (var i = 0; i < menus.length; i++) {
                
                                    var str = msg.documents[i].title;
                                        var str2 = str.substring(0, 25);
                
                                        var str3 = msg.documents[i].publisher;
                                        var str4 = str3.substring(0, 8);
                
                                    $(".menu_img3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                                    $(".menu_text3").eq(i).append("<b>"+str2+"</b>"+"<br>");
                                    $(".menu_text3").eq(i).append("<span>"+msg.documents[i].authors+"</span>"+" | ");
                                    $(".menu_text3").eq(i).append("<span>"+str4+"..."+"</span>"+"<br>");
                                    $(".menu_text3").eq(i).append("<p>"+msg.documents[i].price+"원"+"</p>");
                                    
                                       
                                }
                                
                            });
                            $.ajax({
		
                                method: "GET",
                                
                                url: "https://dapi.kakao.com/v3/search/book?target=title",
                                
                                data: { query:"귀멸의",size:10 },
                                headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                                
                                })
                                    .done(function (msg) {
                                       
                                        var menus = document.getElementsByClassName('menu4');
                        
                                        for (var i = 0; i < menus.length; i++) {
                        
                                            var str = msg.documents[i].title;
                                                var str2 = str.substring(0, 25);
                        
                                                var str3 = msg.documents[i].publisher;
                                                var str4 = str3.substring(0, 5);
                        
                                            $(".menu_img4").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                                            $(".menu_text4").eq(i).append("<b>"+str2+"</b>"+"<br>");
                                            $(".menu_text4").eq(i).append("<span>"+msg.documents[i].authors+"</span>"+" | ");
                                            $(".menu_text4").eq(i).append("<span>"+str4+"..."+"</span>"+"<br>");
                                            $(".menu_text4").eq(i).append("<p>"+msg.documents[i].price+"원"+"</p>");
                                            
                                               
                                        }
                                        
                                    });
        

});