$(function() {
	$('body').flowtype({
	 minimum   : 300,
	 maximum   : 1140,
	 minFont   : 15,
	 maxFont   : 40,
	 fontRatio : 50
	});

	$(document).ready(function(){
        // set google analytics onclick link event on each link with class track
        $('a.track').each(function(index, element){
            element = $(element);
            var link = element.attr('href');
            var new_window = element.attr('target') == '_blank' ? true : false;
            element.click(function(){
            trackOutboundLink(link, new_window);
            return false;
            });
        });
    });
});