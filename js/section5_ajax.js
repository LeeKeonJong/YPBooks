$(function(){

    $.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"리커버",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
            .done(function (msg) {
               
                var menus = document.getElementsByClassName('section5_thumbnail1');

                for (var i = 0; i < menus.length; i++) {

                    

                    $(".section5_thumbnail1").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    
                    
                       
                }
            });


            $.ajax({
		
                method: "GET",
                
                url: "https://dapi.kakao.com/v3/search/book?target=authors",
                
                data: { query:"기욤뮈소",size:10 },
                headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                
                })
                    .done(function (msg) {
                       
                        var menus = document.getElementsByClassName('section5_thumbnail2');
        
                        for (var i = 0; i < menus.length; i++) {
        
                            
        
                            $(".section5_thumbnail2").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                            
                            
                               
                        }
                    });
        

                    $.ajax({
		
                        method: "GET",
                        
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        
                        data: { query:"주식",size:10 },
                        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                        
                        })
                            .done(function (msg) {
                               
                                var menus = document.getElementsByClassName('section5_thumbnail3');
                
                                for (var i = 0; i < menus.length; i++) {
                
                                    
                
                                    $(".section5_thumbnail3").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                                    
                                    
                                       
                                }
                            });

                    
                     
                            
                            $.ajax({
		
                                method: "GET",
                                
                                url: "https://dapi.kakao.com/v3/search/book?target=title",
                                
                                data: { query:"호날두",size:10 },
                                headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                                
                                })
                                .done(function (msg) {
                        
                                    
                                    $(".section5_thumbnail4:nth-of-type(1)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
                
                                });

                                $.ajax({
		
                                    method: "GET",
                                    
                                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                                    
                                    data: { query:"리오넬 메시",size:10 },
                                    headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                                    
                                    })
                                    .done(function (msg) {
                            
                                        
                                        $(".section5_thumbnail4:nth-of-type(2)").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                    
                                    });

                                    $.ajax({
		
                                        method: "GET",
                                        
                                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                                        
                                        data: { query:"축구를 하며",size:10 },
                                        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                                        
                                        })
                                        .done(function (msg) {
                                
                                            
                                            $(".section5_thumbnail4:nth-of-type(3)").append("<img src='" + msg.documents[1].thumbnail + "'/>");
                        
                                        });

});