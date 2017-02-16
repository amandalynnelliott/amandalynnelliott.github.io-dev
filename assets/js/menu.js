$(document).ready(function(){
	
	$(".menu-button").on("click"), function (){
		console.log('ive been clicked!');
		$("header nav ul").toggleClass("open");
		
	};
	
});