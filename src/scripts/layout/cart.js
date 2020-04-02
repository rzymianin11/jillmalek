import $ from 'jquery';


const Cart = {
	init : function(){
		$('.qty .minus').on('click', function(){
			if($(this).parent().find('input').val() > 1){
				$(this).parent().find('input').val( parseInt($(this).parent().find('input').val()) - 1);
			}
		});
		$('.qty .plus').on('click', function(){
			$(this).parent().find('input').val(parseInt($(this).parent().find('input').val()) + 1);
		});
	}
}

export default Cart