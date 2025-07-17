$(document).ready(function () {
    $(function () {
        var page = $('#fullpage').fullpage({
            // navigation : true,
            navigationPosition: 'right',
        })
    })

    var sections = $('.section01, .section02, .section03');

    sections.each(function () {
        var $section = $(this);
        var hadActive = $section.hasClass('active');

        setInterval(function () {
            var hasActive = $section.hasClass('active');

            if (hadActive && !hasActive) {
                $section.addClass('act');
            } else if (!hadActive && hasActive) {
                $section.removeClass('act');
            }

            hadActive = hasActive;
        }, 100);
    });
});