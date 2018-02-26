$(function(){
    $.getJSON('https://spreadsheets.google.com/feeds/cells/18ORsWrBz5gJ3HNnLton-SWb9VWNOPnLeVrs16ikI1XU/os86yo1/public/values?alt=json',function(data) {
		var record_count = 0;
		for (var i = 0; i < data.feed.entry.length; i++){
            if (record_count < parseInt(data.feed.entry[i].gs$cell.row)) {
				record_count = data.feed.entry[i].gs$cell.row;
			}
		}
		$("#record").text(record_count - 1);
    });
});