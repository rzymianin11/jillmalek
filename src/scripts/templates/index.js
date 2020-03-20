import $ from 'jquery';
import {load} from '@shopify/theme-sections';
import '../sections/product';

load('*');

$(function() {
    //caches a jQuery object containing the header element
    var header = $("#shopify-section-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("small");
        } else {
            header.removeClass('small');
        }
    });
});
