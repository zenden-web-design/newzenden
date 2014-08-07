/*jslint browser: true*/
/*global $, jQuery, alert, Pace, console, Modernizr*/

$(function () {

	'use strict';
	function myInit() {
    
		/* =======[ EXPAND VIDEO ]======= */
		$('.video a.video-ex').click(function () {
			if ($('.video').hasClass('video-expanded')) {
				$('.video').removeClass('video-expanded');
			} else {
				$('.video').addClass('video-expanded');
			}
		});
		$('.video div.text-overlay').click(function () {
			if ($('.video').hasClass('video-expanded')) {
				$('.video').removeClass('video-expanded');
			}
		});
	}

	console.log('initializing scripts...');
	myInit();

	$(window).on('statechangecomplete', function () {
	// this code will run once the ajax load is complete between pages, reinitialize scripts here
		console.log('page change occured...');
		myInit();
	});
});