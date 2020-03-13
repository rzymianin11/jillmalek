import $ from 'jquery';
import 'slick-carousel';
import "slick-carousel/slick/slick.css";

const Process = {
	init : function(){
		  $('.slickjs').slick({
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
			$('.slickjs-nav').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  asNavFor: '.slickjs',
			  dots: false,
			  focusOnSelect: true,
			  fade: true,
			  rows: 0,
			  arrows: true,
//			  prevArrow: 'arrow-left',
//			  nextArrow: 'arrow-right'
			});
	}
}

export default Process