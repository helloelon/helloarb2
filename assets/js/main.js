(function($){
	"use strict";
	jQuery(document).on('ready', function () {

		var wind = $(window);
		// Var Background image
		var pageSection = $(".bg-img, section");
		pageSection.each(function (indx) {
			if ($(this).attr("data-background")) {
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        
        // Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Button Hover JS
        $(function() {
            $('.default-btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
                $(this).find('span').css({top:relY, left:relX})
            });
        });

		// Progress bar
		wind.on('scroll', function () {
			$(".skill-progress .progres").each(function () {
				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				var myVal = $(this).attr('data-value');
				if (bottom_of_window > bottom_of_object) {
					$(this).css({
						width: myVal
					});
				}
			});
		});

        // Testimonial Slider
		$('.testimonial-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: true,
			autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 20,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
			responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });
		
		//  Star Counter
		$('.counter-number').counterUp({
			delay: 15,
			time: 2000
		});
		
        // Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
            
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });

        // FAQ Accordion
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function(){
                // Adds Active Class
                $(this).toggleClass('active');
                // Expand or Collapse This Panel
                $(this).next().slideToggle('slow');
                // Hide The Other Panels
                $('.accordion-content').not($(this).next()).slideUp('slow');
                // Removes Active Class From Other Titles
                $('.accordion-title').not($(this)).removeClass('active');		
            });
        });

        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });
        
		// Roadmap slider
		if ($("#roadmap-slider").length > 0) {
			$("#roadmap-slider").owlCarousel({
				//loop: true,
				autoplay: false,
				dots: true,
				nav: true,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
						loop: true,
						nav: false
					},
					420: {
						items: 2,
						loop: true,
						nav: false,
						margin: 0
					},
					767: {
						items: 3,
						loop: true,
						nav: false,
						margin: 0
					},
					1200: {
						items: 4,
						loop: true,
						nav: false,
						margin: 0
					},
				}
			});
		}

    });
	
	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });
	
	// Preloader Area
	$(window).on('load', function () {
	  jQuery('.preloader').delay(500).fadeOut('slow');
	});

}(jQuery));

// Countdown Js
$(document).ready(function () {
	'use strict';

	function makeTimer() {
		var endTime = new Date("2024-01-23  23:59:59");
		endTime = (Date.parse(endTime) / 1000);
		if ( endTime <= new Date().getTime() ){
			return
		}
		var now = new Date();
		now = (Date.parse(now) / 1000);

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if ( days <0 ){
			days = 0
		}
		if ( hours <0 ){
			hours = 0
		}
		if ( minutes <0 ){
			minutes = 0
		}
		if ( seconds <0 ){
			seconds = 0
		}
		if (days < 10) {
			days = "0" + days;
		}
		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		$("#days").html(days + "<span class='c-text'>Days</span>");
		$("#hours").html(hours + "<span class='c-text'>Hour</span>");
		$("#minutes").html(minutes + "<span class='c-text'>Min</span>");
		$("#seconds").html(seconds + "<span class='c-text'>Sec</span>");

	}

	setInterval(function () {
		makeTimer();
	}, 1000);
});

// Progressbar Js
$(document).ready(function () {
	'use strict';
	$('.ico-status-bar  span').each(function () {
		$(this).animate({
			width: $(this).data('progress')
		}, 1500);
	});
});
