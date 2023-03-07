$(document).ready(function () {
    var $searchPage = $('.search-page');
    var $searchOpen = $('.search-icon');
    var $searchClose = $('.search-icon-close');
    var $searchInput = $('#search-input');
    var $body = $('body');

    $searchOpen.on('click', function (e) {
        e.preventDefault();
        $searchPage.toggleClass('search-active');
        var prevClasses = $body.attr('class') || '';
        setTimeout(function () {
            $body.addClass('no-scroll');
        }, 400)

        if ($searchPage.hasClass('search-active')) {
            $searchClose.on('click', function (e) {
                e.preventDefault();
                $searchPage.removeClass('search-active');
                $body.attr('class', prevClasses);  // from closure 
            });
            $searchInput.focus();
        }
    });
});