$(function(){

    $.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"자바",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
            .done(function (msg) {

                // for문 (8개)
                var lis = document.getElementsByClassName('header_slideli');

                for (var i = 0; i < lis.length; i++) {

                    $(".header_slideimg").eq(i).append("<img src='" + msg.documents[i].thumbnail + "'/>");
                    $(".header_slidetext").eq(i).append("<p>" + msg.documents[i].title + "</p>");
                    $(".header_slidetext").eq(i).append("<p>" + msg.documents[i].authors + "</p>");
              
                }
                
            });
})