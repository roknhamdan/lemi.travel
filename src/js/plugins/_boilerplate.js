// Smooth Scrolling
$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var scrollTarget = $(this).attr('href');
    scrollTarget = scrollTarget.split('#');
    scrollTarget = scrollTarget[1];
    var moveTo = new MoveTo({
        duration: 300
    });
    var target = document.getElementById(scrollTarget);
    moveTo.move(target);
    // Emulate default event.
    // Got the null null syntax from
    // https://css-tricks.com/using-the-html5-history-api/
    window.history.pushState(null, null, '#' + scrollTarget);
});
