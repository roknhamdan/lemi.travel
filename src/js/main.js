// Vendor JS
gulpRequire_include('vendor/vendor.js');

// Polyfills
// Resize Event Listener Polyfill
gulpRequire_include('polyfills/_optimized-resize-polyfill.js');

// Globally Available Functions
gulpRequire_include('./globals/globals.js');

// On Page Load
document.addEventListener('DOMContentLoaded', function() {
    gulpRequire_include('_onload.js');
});

// On Scrolling
document.addEventListener('scroll', function() {
    gulpRequire_include('_onscroll.js');
});

// On Resizing
window.addEventListener('optimizedResize', function() {
    setTimeout(function() {
        gulpRequire_include('_onresize.js');
        // 300ms timeout to allow for document re-flows etc.
    }, 300);
});
