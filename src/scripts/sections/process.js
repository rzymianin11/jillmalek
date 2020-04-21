import $ from 'jquery'
import 'slick-carousel'
import 'slick-carousel/slick/slick.css'

const jQuery = $;
(function ($) {
  // create temporal object to get slick object

  // !!!!!!!!!!!
  // getSlick() -> TO CHYBA CZASEM ROZWALA CAY SKRYPT (Maximum stack exceded)
  // !!!!!!!!!!!

  const getSlick = function () {
    const $tmp = $('<div>').slick()
    const slick = $tmp[0].slick.constructor
    $tmp.slick('unslick')
    return slick
  }

  if ($.fn.slick) {
    const Slick = getSlick()
    if (Slick) {
      // hook checkResponsive method
      const checkResponsiveOrig = Slick.prototype.checkResponsive
      Slick.prototype.checkResponsive = function (initial, forceUpdate) {
        const _ = this
        if (_.options.autoSlidesToShow && !_.options.infinite && _.options.variableWidth) {
          const sliderWidth = _.$slider.width()
          let width = 0,
            length = _.$slides.length
          for (let i = 0; i < length; i++) {
            width += $(_.$slides[i]).outerWidth()
          }
          _.averageSlidesWidth = width / length
          _.options.slidesToShow = Math.floor(sliderWidth / _.averageSlidesWidth) || 1
          // force update arrows
          if (_.lastSlidesToShow !== _.options.slidesToShow) {
            _.lastSlidesToShow = _.options.slidesToShow
            if (initial === true) {
              _.currentSlide = _.options.initialSlide
            }
            _.refresh(initial)
          }
        }
        return checkResponsiveOrig.apply(this, arguments)
      }
      // hook getLeft method
      const getLeftOrig = Slick.prototype.getLeft
      Slick.prototype.getLeft = function (slideIndex) {
        const _ = this
        if (_.options.autoSlidesToShow && !_.options.infinite && _.options.variableWidth) {
          const targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex)
          if (targetSlide[0]) {
            let diff = 0
            if (slideIndex) {
              const sliderWidth = _.$slider.width()
              const otherSlidesWidth = (_.slideCount - slideIndex) * _.averageSlidesWidth
              if (otherSlidesWidth < sliderWidth) {
                diff = sliderWidth - otherSlidesWidth
              }
            }
            return (targetSlide[0].offsetLeft - diff) * -1
          }
          return 0
        }
        return getLeftOrig.apply(this, arguments)
      }
    }
  }
})(jQuery)

const Process = {
  init() {
    $('.slickjs').each(function () {
      $(this).slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        rows: 0,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $(this)
          .closest('.process')
          .find('.dots-container'),
      })
    })
    $('.slickjs-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slickjs',
      dots: false,
      focusOnSelect: true,
      fade: true,
      rows: 0,
      arrows: false,
      //			  prevArrow: 'arrow-left',
      //			  nextArrow: 'arrow-right'
    })

    $('.slickjs-2').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      infinite: false,
      cssEase: 'linear',
      rows: 0,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    })

    $('.slickjs-3').slick({
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: 'progressive',
      cssEase: 'linear',
      rows: 0,
      touchThreshold: 20,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    })

    $('.slickjs-4').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      lazyLoad: 'progressive',
      cssEase: 'linear',
      rows: 0,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    })

    $('.slickjs-3-nav').slick({
      dots: false,
      infinite: false,
      //				  centerMode: true,
      focusOnSelect: true,
      speed: 500,
      cssEase: 'linear',
      asNavFor: '.slickjs-3',
      rows: 0,
      arrows: true,
      //				  autoSlidesToShow: true,
      //				  variableWidth: true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
          },
        },
      ],
    })

    $('.slickjs-nav-2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slickjs-2',
      dots: true,
      focusOnSelect: true,
      fade: true,
      infinite: false,
      rows: 0,
      arrows: true,
      //			  prevArrow: 'arrow-left',
      //			  nextArrow: 'arrow-right'
    })

    $('.about-carousel').slick({
      dots: false,
      infinite: true,
      lazyLoad: 'progressive',
      speed: 500,
      cssEase: 'linear',
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  },
}

export default Process
