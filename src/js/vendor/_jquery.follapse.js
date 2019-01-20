// Custom Folding Collapse (follapse) Plugin.
// Pass any selector. Typically used with $(`body`) since it'll filter out elements.
// Place a follapse-target="" html attribute on any element to trigger a follapsable element on click.
// Initially hide an element using a class with the property  display: none; Pass it as a hideClass option object.
// It exposes two events. follapseShow and follapseHide.
(function($) {
    $.fn.follapse = function(options) {
        // Default options
        var settings = $.extend(
            {
                // The class to toggle to hide the element.
                hideClass: `d-none`,
                // Exclude this class from triggerring a follapse.
                noFollapseClass: `js-no-follapse`
            },
            options
        );
        // Find all elligable toggles.
        this.find(`[follapse-target]`).each(function(index, element) {
            // Add a click event listener to each one.
            $(element).click(function(event) {
                // Check if the element clicked is a link.
                var targetIsIncluded =
                    // Check if it does not contain links.
                    event.target.href === undefined ||
                    event.target.href === `javascript:void(0);`;
                // Check if it's excluded by the exclusion class setting.
                var targetIsExcluded = $(event.target).hasClass(
                    settings.noFollapseClass
                );
                // Check both evaluations above to decide whether the collapse will work or not.
                if (targetIsIncluded && targetIsExcluded === false) {
                    // Prevent default event if there is any.
                    event.preventDefault();
                    // Find the target.
                    var target = $(element).attr(`follapse-target`);
                    // Check if it's currently hidden.
                    if ($(target).hasClass(settings.hideClass)) {
                        // Show the collapsed element.
                        $(target).removeClass(settings.hideClass);
                        // Trigger a custom event on the toggle element for animations and other things.
                        $(element).trigger(`follapseShow`);
                    } else {
                        // Hide the collapsed element.
                        $(target).addClass(settings.hideClass);
                        // Trigger a custom event on the toggle element for animations and other things.
                        $(element).trigger(`follapseHide`);
                    }
                }
            });
        });
    };
})(jQuery);
