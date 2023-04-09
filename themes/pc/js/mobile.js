(function ($) {
  'use strict';

	$(function(){
		var debounce;
		var closeMenu = function(){
			$('ul.menu-option li').removeClass('active'); // hide all
			clearTimeout(debounce);
		}
		// menu intention
		$("ul.menu-option li").on('mouseover',function(e){
			$('ul.menu-option li').removeClass('active'); // hide all
			$(e.currentTarget).addClass('active');
			clearTimeout(debounce);
		});

		$(".menu-pulldowns").on('mouseleave', function(e){
			debounce = setTimeout(closeMenu,400);
		})


		$(".mobile-trigger").on('click', function(e){
			e.preventDefault();
			$("#block-pc-main-menu").toggleClass('mobile-open');
		});

		$('#block-pc-main-menu > ul.menu > li:not(.menu-item--expanded) > a').on('click touchend', function(e) {
			var el = $(this);
			var link = el.attr('href');

			window.location = link;
		});
	});
})(jQuery);
