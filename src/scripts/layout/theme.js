import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'
import scrollLock from 'scroll-lock'

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

$('.footerspacer').css('height', `${$('footer').outerHeight()}px`)

// Qty update
$('.qty input').on('input', () => {
  $('.qty input').trigger('click')
  return false
})
$('.qty .minus, .qty .plus').on('click', () => {
  setTimeout(() => {
    $('input[name="update"]').trigger('click')
  }, 150)
  return false
})

// Images Fade In
$('#MainContent')
  .imagesLoaded()
  .progress((instance, image) => {
    $(image.img).addClass('in')
  })

// Product Lightbox
$('[data-toggle="product-lightbox"]').on('click', () => {
  $('body').addClass('product-lightbox-visible')
  scrollLock.disablePageScroll()

  return false
})
$('[data-dismiss="product-lightbox"]').on('click', () => {
  $('body').removeClass('product-lightbox-visible')
  scrollLock.enablePageScroll()

  return false
})

// Sidebar Filters
$('.sidebar-filter-toggle').on('click', function () {
  const $filters = $(this).next('.sidebar-filter')
  toggleFilters($filters)

  return false
})
$('.sidebar-filter-close').on('click', function () {
  const $filters = $(this).parents('.sidebar-filter')
  toggleFilters($filters)

  return false
})

function toggleFilters($filters) {
  if ($filters.hasClass('visible')) {
    $filters.removeClass('visible')
    scrollLock.enablePageScroll()
  } else {
    $filters.addClass('visible')
    scrollLock.disablePageScroll()
  }
}

$('.my-parallax-window').parallax({
  speed: -0.2,
  sliderSelector: '>.my-parallax-slider',
  mirrorSelector: '.parallax-mirror',
  zIndex: 10,
  excludeAgents: false,
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

  $('a[href^="#"]').click(function (e) {
    console.log('animate')
    e.preventDefault()
    e.stopPropagation()
    const el = $($(this).attr('scrollto')).offset().top - 150
    $('html, body').animate(
      {
        scrollTop: el,
      },
      500,
    )

    return false
  })
})
