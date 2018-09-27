//Home


// $(document).ready(function(){

// 	$(".home_navbar a").each(function(index){
// 		$(this).click(function(e){
// 			e.preventDefault()

// 			$(".home_navbar a").removeClass("active")
// 			$(this).addClass("active")

// 			$(".home_navbar_info").removeClass("active");
// 			$(".vert_tittle").removeClass("active");
			
// 			$(".home_navbar_info").eq(index).addClass("active");
// 			$(".vert_tittle").eq(index).addClass("active");

		
			
// 		})
// 	})


// })
$(document).ready(function(){

$('.team_slide').owlCarousel({
    loop:true,
    margin:70,
    smartSpeed: 700,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})


})




$(document).ready(function(){


	$(".home_navbar .disclaimer").on("click",function(e){
		e.preventDefault()

		$(this).addClass("active")
		$(".home_navbar_info").addClass("active");	
		$(".vert_tittle").addClass("active");

		$(".navbar_pages").addClass("deactive")

	})


	$(".home_navbar_info_button").on("click",function(){

		$(".home_navbar .disclaimer").removeClass("active")
		$(".home_navbar_info").removeClass("active");	
		$(".vert_tittle").removeClass("active");
		$(".navbar_pages").removeClass("deactive")

	})


	$(".main_href").on("click",function(e){
		e.preventDefault()

	})


	//Practice areas



	$(".practice_area_list_box li").each(function(index){
		$(this).click(function(){

			$(".practice_area_text").css("display","none");
			$(".practice_area_text").eq(index).fadeIn(900);


		})
	})


	}) //ready function

