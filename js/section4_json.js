$(function(){

    $.ajax({
		
        method: "GET",
        
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        
        data: { query:"경제",size:10 },
        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
        
        })
        .done(function (msg) {

            
            $(".section4_thumbnail1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
           

        });
        $.ajax({
		
            method: "GET",
            
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            
            data: { query:"불편한 편의점",size:10 },
            headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
            
            })
            .done(function (msg) {
    
                
                $(".section4_thumbnail2").append("<img src='" + msg.documents[0].thumbnail + "'/>");
               
    
            });
            $.ajax({
		
                method: "GET",
                
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                
                data: { query:"트렌드 코리아2022",size:10 },
                headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                
                })
                .done(function (msg) {
        
                    
                    $(".section4_thumbnail3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                   
        
                });

                $.ajax({
		
                    method: "GET",
                    
                    url: "https://dapi.kakao.com/v3/search/book?target=title",
                    
                    data: { query:"굿바이 이재명",size:10 },
                    headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                    
                    })
                    .done(function (msg) {
            
                        
                        $(".section4_thumbnail4").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                       
            
                    });

                    $.ajax({
		
                        method: "GET",
                        
                        url: "https://dapi.kakao.com/v3/search/book?target=title",
                        
                        data: { query:"윤석열 x",size:10 },
                        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
                        
                        })
                        .done(function (msg) {
                
                            
                            $(".section4_thumbnail5").append("<img src='" + msg.documents[0].thumbnail + "'/>");
                           
                
                        });


});