// Check if match height is loaded.
if (jQuery().matchHeight) {
    // Add the event listener.
    window.addEventListener('optimizedResize', function() {
        setTimeout(function() {
            // On resizing, some items must be of equal height
            $.fn.matchHeight._update();
            // 300ms timeout to allow for document re-flows etc.
        }, 300);
    });
}
