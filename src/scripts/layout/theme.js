import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

import Process from '../sections/process';
import Shopwallpaper from '../sections/shop-wallpaper';
import MobileHeader from '../sections/mobilenav';

import $ from 'jquery';

import './jquery.parallax.min.js';

$('.my-parallax-window').parallax({
  speed: -.2,
  sliderSelector: '>.my-parallax-slider',
  mirrorSelector: '.parallax-mirror',
  zIndex: 10
})

Process.init();
Shopwallpaper.init();
MobileHeader.init();

// Common a11y fixes
focusHash();
bindInPageLinks();

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace(
    'supports-no-cookies',
    'supports-cookies',
  );
}

$(function() {
    //caches a jQuery object containing the header element
/*
    var header = $("#shopify-section-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("small");
        } else {
            header.removeClass('small');
        }
    });
    
*/
	
	$('a[href^="#"]').click(function (e) {
		console.log('animate');
		e.preventDefault();
		e.stopPropagation();
		var el = $($(this).attr('scrollto')).offset().top - 150;
	    $('html, body').animate({
		    scrollTop: el
		}, 500);
	
	    return false;
	});
});
