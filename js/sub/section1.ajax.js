$(function(){


    $.ajax({
		
        method: "GET",
        
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        
        data: { query:"불편한 편의점",size:10 },
        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
        
        })
        .done(function (msg) {

            var str = msg.documents[0].datetime;
            var str2 = str.substring(0, 10);

            var str3 = msg.documents[0].isbn;
            var str4 = str3.substring(10, 24);
            
            $("#section1_thumbnail").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".section1_title").append(msg.documents[0].title);
            $(".section1_authors").append(msg.documents[0].authors);
            $(".section1_publisher").append(msg.documents[0].publisher);
            $(".section1_datetime").append(str2+" | ");
            $(".section1_isbn").append("ISBN-13 : "+str4);
            $(".price1").append(msg.documents[0].price+"원");
            $(".price2").append(msg.documents[0].sale_price);
        });

});