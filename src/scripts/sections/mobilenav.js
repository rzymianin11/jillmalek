import $ from 'jquery';


const Mobilenav = {
	init : function(){
		$('.burger').on('click', function(){
			$('.mobile-navigation-wrapper').toggleClass('open');
			$('body').toggleClass('opennav');
		});
		$('.closenav').on('click', function(){
			$('.mobile-navigation-wrapper').toggleClass('open');
			$('body').toggleClass('opennav');
		});
	}
}

export default Mobilenav