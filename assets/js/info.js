var $footer = $("#bottom");
var $open = $("#open");
var $close = $("#close");
var $text = $("#text");
$(function(){
	$open.click(function() {
		//把該隱藏的隱藏起來
		$open.toggle();
		$footer.toggle();
		$("h4").toggle();
		$close.toggle();
		//記得 裝文字的地方要一個div 所以這裡要調整div的高度 div 內也要scroll
		if ($(window).width() <= 480) {
			//Mobile Deivce
			$text.css("height","13.5em");
		} else {
			$text.css("height","13.8em");
		}
		$text.css("overflow-y","scroll");
		$text.css("text-overflow","clip");
		$text.css("white-space","normal");
		$("header").append("<br>");
	});
	$close.click(function() {
		//回復成原樣
		$open.toggle();
		$footer.toggle();
		$("h4").toggle();
		$close.toggle();
		$text.css("height","2em");
		$text.css("overflow","hidden");

		$text.css("text-overflow","ellipsis");
		$text.css("white-space","nowrap");
		/* 捲軸回歸 */
		$text.get(0).scrollTop = 0;
		/* 換行重置 */
		$("header > br").remove();
		$("header").append("<br>");
	});
	$text.on('mouseenter touchstart', function() {
		if ($open.is(":hidden")) {
			$(this).removeClass("hide");
			$(this).addClass("show");
		}
	})
	.on('mouseout touchend', function() {
		if ($open.is(":hidden")) {
			$(this).removeClass("show");
			$(this).addClass("hide");
		}
	});
});