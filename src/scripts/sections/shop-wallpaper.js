import $ from 'jquery';
import simpleParallax from 'simple-parallax-js';

const Shopwallpaper = {
	init : function(){
		var image = document.getElementsByClassName('parallax');
		new simpleParallax(image);
	}
}

export default Shopwallpaper