import $ from 'jquery';
import 'slick-carousel';
import "slick-carousel/slick/slick.css";

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
				        slidesToScroll: 1
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