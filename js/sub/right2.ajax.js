$(function(){

    $.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"신작소설",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
            .done(function (msg) {

                
                var divs = document.getElementsByClassName('right2_book');

                for (var i = 0; i < divs.length; i++) {

                    var str = msg.documents[i].title;
                    var str2 = str.substring(0, 30);

                    $(".right2_thumbnail").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".right2_booktitle").eq(i).append(str2);
                    $(".right2_publisher").eq(i).append(msg.documents[i].publisher);
                    $(".right2_bookprice").eq(i).append(" "+msg.documents[i].price+"원 ");
                   
                    
                    
                    
                       
                }
                
            });

});