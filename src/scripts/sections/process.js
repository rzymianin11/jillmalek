import $ from 'jquery';
import 'slick-carousel';
import "slick-carousel/slick/slick.css";

var jQuery = $;

(function($) {
  'use strict';

  //create temporal object to get slick object
  var getSlick = function() {
    var $tmp = $('<div>').slick();
    var slick = $tmp[0].slick.constructor;
    $tmp.slick('unslick');
    return slick;
  };

  if ($.fn.slick) {
    var Slick = getSlick();
    if (Slick) {
      //hook checkResponsive method
      var checkResponsiveOrig = Slick.prototype.checkResponsive;
      Slick.prototype.checkResponsive = function(initial, forceUpdate) {
        var _ = this;
        if (_.options.autoSlidesToShow && !_.options.infinite && _.options.variableWidth) {
          var sliderWidth = _.$slider.width();
          var width = 0, length = _.$slides.length;
          for (var i = 0; i < length; i++) {
            width += $(_.$slides[i]).outerWidth();
          }
          _.averageSlidesWidth = width / length;
          _.options.slidesToShow = Math.floor(sliderWidth / _.averageSlidesWidth) || 1;
          //force update arrows
          if (_.lastSlidesToShow !== _.options.slidesToShow) {
            _.lastSlidesToShow = _.options.slidesToShow;
            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }
            _.refresh(initial);
          }
        }
        return checkResponsiveOrig.apply(this, arguments);
      };
      //hook getLeft method
      var getLeftOrig = Slick.prototype.getLeft;
      Slick.prototype.getLeft = function(slideIndex) {
        var _ = this;
        if (_.options.autoSlidesToShow && !_.options.infinite && _.options.variableWidth) {
          var targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
          if (targetSlide[0]) {
            var diff = 0;
            if (slideIndex) {
              var sliderWidth = _.$slider.width();
              var otherSlidesWidth = (_.slideCount - slideIndex) * _.averageSlidesWidth;
              if (otherSlidesWidth < sliderWidth) {
                diff = sliderWidth - otherSlidesWidth;
              }
            }
            return (targetSlide[0].offsetLeft - diff) * -1;
          }
          return  0;
        }
        return getLeftOrig.apply(this, arguments);
      };
    }
  }
})(jQuery);

const Process = {
	init : function(){
		
		$('.slickjs').each(function() {
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
				  appendDots: $(this).closest('.process').find('.dots-container')
			});
		});
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
			});
			
		  $('.slickjs-2').slick({
				  dots: false,
				  infinite: true,
				  speed: 500,
				  fade: true,
				  cssEase: 'linear',
				  rows: 0,
				  arrows: false,
				  slidesToShow: 1,
				  slidesToScroll: 1,
			});
			
		  $('.slickjs-3').slick({
				  dots: false,
				  infinite: true,
				  speed: 500,
				  fade: true,
				  cssEase: 'linear',
				  rows: 0,
				  arrows: true,
				  slidesToShow: 1,
				  slidesToScroll: 1,
			});
			
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
				        centerMode: false
				      }
				    }
				   ]
			});
			
			$('.slickjs-nav-2').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  asNavFor: '.slickjs-2',
			  dots: true,
			  focusOnSelect: true,
			  fade: true,
			  rows: 0,
			  arrows: true,
//			  prevArrow: 'arrow-left',
//			  nextArrow: 'arrow-right'
			});
			
		  $('.carousel').slick({
				  dots: false,
				  infinite: true,
				  speed: 500,
				  cssEase: 'linear',
				  rows: 0,
				  arrows: true,
				  slidesToShow: 6,
				  slidesToScroll: 1,
				  responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 3,
				        infinite: true,
				        dots: false
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1,
				        arrows: true,
				      }
				    }
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
				  ]
			});
	}
}

export default Process