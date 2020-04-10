import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'

import '../../styles/theme.scss'
import '../../styles/theme.scss.liquid'

import { focusHash, bindInPageLinks } from '@shopify/theme-a11y'
import { cookiesEnabled } from '@shopify/theme-cart'

import Process from '../sections/process'
import Shopwallpaper from '../sections/shop-wallpaper'
import MobileHeader from '../sections/mobilenav'

import Cart from './cart'

import $ from 'jquery'

import './jquery.parallax.min.js'

import imagesLoaded from 'imagesloaded'

imagesLoaded.makeJQueryPlugin($)

// Images Fade In
$('#MainContent')
  .imagesLoaded()
  .progress((instance, image) => {
    $(image.img).addClass('in')
  })

// Sidebar Filters
$('.sidebar-filter-toggle').on('click', function() {
  $(this)
    .next('.sidebar-filter')
    .addClass('visible')

  return false
})
$('.sidebar-filter-close').on('click', function() {
  $(this)
    .parents('.sidebar-filter')
    .removeClass('visible')

  return false
})

$('.my-parallax-window').parallax({
  speed: -0.2,
  sliderSelector: '>.my-parallax-slider',
  mirrorSelector: '.parallax-mirror',
  zIndex: 10,
  excludeAgents: false
})

Process.init()
Shopwallpaper.init()
MobileHeader.init()
Cart.init()

// Common a11y fixes
focusHash()
bindInPageLinks()

// Apply a specific class to the html element for browser support of cookies.
if (cookiesEnabled()) {
  document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies')
}

$(() => {
  // caches a jQuery object containing the header element
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

  $('a[href^="#"]').click(function(e) {
    console.log('animate')
    e.preventDefault()
    e.stopPropagation()
    const el = $($(this).attr('scrollto')).offset().top - 150
    $('html, body').animate(
      {
        scrollTop: el
      },
      500
    )

    return false
  })
})
