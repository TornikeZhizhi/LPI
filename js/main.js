//Home


$(document).ready(function(){

	$(".home_navbar a").each(function(index){
		$(this).click(function(e){
			e.preventDefault()


			$(".home_navbar_info").removeClass("active");
			$(".vert_tittle").removeClass("active");
			
			$(".home_navbar_info").eq(index).addClass("active");
			$(".vert_tittle").eq(index).addClass("active");

		
			
		})
	})


})