$(function(){

    $.ajax({
		
        method: "GET",
        
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        
        data: { query:"나미야 잡화점의 기적",size:10 },
        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
        
        })
        .done(function (msg) {

            
            
            $(".section2_thumbnail").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $(".section2_title").append(msg.documents[0].title);
            $(".section2_authors").append(msg.documents[0].authors);
        
        });
});