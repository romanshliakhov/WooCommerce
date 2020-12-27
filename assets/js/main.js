jQuery(document).ready(function () {
    // FORMS
    jQuery('form .send-form').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','.5');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
    				jQuery('.show-message').css('opacity','1');
    			},
    			error:	 function() {}
    		});
    	}
    });


    // скрипт табов //
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // скрипт табов //

    jQuery(".m1").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec2").offset().top
        }, 400);
	});

	jQuery(".m2").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec2").offset().top
        }, 400);
	});

	jQuery(".m3").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec3").offset().top
        }, 400);
	});

	jQuery(".m4").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec4").offset().top
        }, 400);
	});

	jQuery(".m5").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".footer-bot").offset().top - 63
        }, 400);
	});
	
	// свайпер
	var swiper = new Swiper('.slider-block', {
		slidesPerView: 1,
		effect: 'fade',
		navigation: {
			nextEl: '.slider-nav_next',
			prevEl: '.slider-nav_prev',
		},
		autoplay: {
			delay: 5000,
		},
	});

	// бургер меню
	var burgerCtr = document.querySelector("#burger-menu");
    var menuCtr = document.querySelector("#mobile-menu"); burgerCtr.addEventListener("click", function() {
        this.classList.toggle("active");
        menuCtr.classList.toggle("show_mobile_menu");
    });
});