$(function(){
	$.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"베스트셀러",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
            .done(function (msg) {

                
                var divs = document.getElementsByClassName('section2_divs');

                for (var i = 0; i < divs.length; i++) {

                    $(".section2_thumbnail").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".section2_title").eq(i).append(msg.documents[i].title);
                    $(".section2_price").eq(i).append(" "+msg.documents[i].price+"원 ");
                    $(".section2_authors").eq(i).append(msg.documents[i].authors);
                    $(".section2_publisher").eq(i).append(" | "+msg.documents[i].publisher);
                    $(".section2_string").eq(i).append(msg.documents[i].contents+"...");
                    
                       
                }
                
            });

});