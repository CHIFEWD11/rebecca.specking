
$(document).ready(function(){
	$('.dropdown').hover(
		function(){
			$(this).children('.sub-menu').slideDown(200);

		},
		function(){
			$(this).children('.sub-menu').slideUp(200);
		}
	);

});



var daily = 0;

var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

var sunday = $('#time1').val();
var monday = $('#time2').val();
var tuesday = $('#time3').val();
var wednesday = $('#time4').val();
var thursday = $('#time5').val();
var friday = $('#time6').val();
var saturday = $('#time7').val();

console.log (days);

$.each(days, function(index,value){
	console.log(value);

});


$("input[type='number']").bind('keyup mouseup', function() {
	daily = $(this).val();
	console.log(daily);
});


$("input[type='number']").bind('keyup mouseup', function () {
	var total = 0;
	total += parseFloat(daily);
	console.log (total);

});


