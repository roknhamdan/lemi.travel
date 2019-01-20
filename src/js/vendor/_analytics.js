(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
        i[r] ||
        function() {
            (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'ga'
);

// Place the function after user consents and on every subsequent page load.
// Accepts the UAID as a parameter.
// Place removeif conditional blocks to remove this function from testing when used in other sections/modules to avoid errors as this is removed during testing via Gulp.
// Copy the blocks from main-vendor.js
function gaPageViewSend(uaID) {
    ga('create', uaID, 'auto');
    ga('send', 'pageview');
}
