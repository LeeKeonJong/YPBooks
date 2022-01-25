$(function(){

	$.ajax({
		
        method: "GET",
        
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        
        data: { query:"그 해 우리는",size:10 },
        headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
        
        })
        .done(function (msg) {

            
            $(".section6_thumbnail1,.section6_subthumbnail1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
			$(".section6_title1,.section6_subtitle1").append(msg.documents[0].title);
			$(".section6_price1").append(msg.documents[0].price+"원 ");
			$(".section6_authors1").append("("+msg.documents[0].authors);
			$(".section6_authors1").append(" | "+msg.documents[0].publisher+")");
			$(".section6_subauthors1").append(msg.documents[0].authors);
			$(".section6_subauthors1").append(" | "+msg.documents[0].publisher);
			$(".section6_text1").append("<br>"+msg.documents[0].contents+"...");
        });

		$.ajax({
		
			method: "GET",
			
			url: "https://dapi.kakao.com/v3/search/book?target=title",
			
			data: { query:"그 해 우리는2",size:10 },
			headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
			
			})
			.done(function (msg) {
	
				
				$(".section6_thumbnail2,.section6_subthumbnail2").append("<img src='" + msg.documents[0].thumbnail + "'/>");
				$(".section6_title2,.section6_subtitle2").append(msg.documents[0].title);
				$(".section6_price2").append(msg.documents[0].price+"원 ");
				$(".section6_authors2").append("("+msg.documents[0].authors);
				$(".section6_authors2").append(" | "+msg.documents[0].publisher+")");
				$(".section6_subauthors2").append(msg.documents[0].authors);
				$(".section6_subauthors2").append(" | "+msg.documents[0].publisher);
				$(".section6_text2").append("<br>"+msg.documents[0].contents+"...");
			});	

			$.ajax({
		
				method: "GET",
				
				url: "https://dapi.kakao.com/v3/search/book?target=title",
				
				data: { query:"이순신의 바다",size:10 },
				headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
				
				})
				.done(function (msg) {
		
					
					$(".section6_thumbnail3,.section6_subthumbnail3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
					$(".section6_title3,.section6_subtitle3").append(msg.documents[0].title);
					$(".section6_price3").append(msg.documents[0].price+"원 ");
					$(".section6_authors3").append("("+msg.documents[0].authors);
					$(".section6_authors3").append(" | "+msg.documents[0].publisher+")");
					$(".section6_subauthors3").append(msg.documents[0].authors);
					$(".section6_subauthors3").append(" | "+msg.documents[0].publisher);
					$(".section6_text3").append("<br>"+msg.documents[0].contents+"...");
				});
				
				$.ajax({
		
					method: "GET",
					
					url: "https://dapi.kakao.com/v3/search/book?target=title",
					
					data: { query:"달러구트 꿈 백화점",size:10 },
					headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
					
					})
					.done(function (msg) {
			
						
						$(".section6_thumbnail4,.section6_subthumbnail4").append("<img src='" + msg.documents[0].thumbnail + "'/>");
						$(".section6_title4,.section6_subtitle4").append(msg.documents[0].title);
						$(".section6_price4").append(msg.documents[0].price+"원 ");
						$(".section6_authors4").append("("+msg.documents[0].authors);
						$(".section6_authors4").append(" | "+msg.documents[0].publisher+")");
						$(".section6_subauthors4").append(msg.documents[0].authors);
						$(".section6_subauthors4").append(" | "+msg.documents[0].publisher);
						$(".section6_text4").append("<br>"+msg.documents[0].contents+"...");
					});			

});