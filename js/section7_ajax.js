$(function(){

	$.ajax({
		
		method: "GET",
		
		url: "https://dapi.kakao.com/v3/search/book?target=title",
		
		data: { query:"백종원",size:10 },
		headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
		
		})
		.done(function (msg) {

			$(".section7_thumbnail").append("<img src='" + msg.documents[0].thumbnail + "'/>");
			$(".section7_contentstitle").append(msg.documents[0].title);
			$(".section7_price").append(" "+msg.documents[0].price+"원 ");
			$(".section7_authors").append("("+msg.documents[0].authors);
			$(".section7_authors").append(" | "+msg.documents[0].publisher+")");
			$(".section7_text").append("<br>"+msg.documents[0].contents+"...");
		});
	

		$.ajax({
		
			method: "GET",
			
			url: "https://dapi.kakao.com/v3/search/book?target=title",
			
			data: { query:"반려견",size:10 },
			headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
			
			})
			.done(function (msg) {
	
				var str = msg.documents[0].contents;
				var str2 = str.substring(0, 50);

				$(".section7_subthumbnail1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
				$(".section7_subtitle1").append(msg.documents[0].title);
				$(".section7_subtext1").append(str2+"...");
			});	

			$.ajax({
		
				method: "GET",
				
				url: "https://dapi.kakao.com/v3/search/book?target=title",
				
				data: { query:"고양이",size:10 },
				headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
				
				})
				.done(function (msg) {
		
					var str = msg.documents[1].contents;
					var str2 = str.substring(0, 50);
	
					$(".section7_subthumbnail2").append("<img src='" + msg.documents[1].thumbnail + "'/>");
					$(".section7_subtitle2").append(msg.documents[1].title);
					$(".section7_subtext2").append(str2+"...");
				});
				
				$.ajax({
		
					method: "GET",
					
					url: "https://dapi.kakao.com/v3/search/book?target=title",
					
					data: { query:"커피",size:10 },
					headers:{Authorization: "KakaoAK 7822b55068354b3aa11eb62b3a1c0c76"}
					
					})
					.done(function (msg) {
			
						var str = msg.documents[0].contents;
						var str2 = str.substring(0, 50);
		
						$(".section7_subthumbnail3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
						$(".section7_subtitle3").append(msg.documents[0].title);
						$(".section7_subtext3").append(str2+"...");
					});			

});