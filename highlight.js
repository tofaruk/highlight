(function($) {
    $.fn.light = function(options) {
        var settings = $.extend({
            key: '',
            class: "match",
        }, options);
        $(this).html(function(_, html) {
            var re = new RegExp('(' + $.trim(settings.key).split(' ').join('|') + ')', "gi");
            return html.replace(re, function($0, $1) {                
                return '<span class="' + settings.class + '">' + $1 + '</span>';
            });
        });
    };
}(jQuery));
