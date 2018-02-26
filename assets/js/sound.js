var sound = new Audio("sounds/punch.mp3");
var btn = $("#hammer");
$(function(){
	btn.click(function() {
		sound.pause();
		sound.currentTime = 0;
		sound.play();
	});
});