// Forgot how to do this so...
// https://www.ostraining.com/blog/coding/custom-jquery-plugin/
// TagStart Color Randomizer Function
// Uses all the official material design colors at 900 by default.
// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
//
//
// $('selector').randomizeColor({
//     // Custom colors can be achieved by setting the colorArray setting.
//     colorArray: ['003366', '663300', '006666', '000066', '330066', '660033'],
//     // A custom attribute is sometimes needed for non-svg elements.
//     targetAttribute: 'background',
//     // A destructive option to force the style by replacing the style element via attribute if !important is declared in CSS.
//     destructive: false,
//     // A default stroke to be applied to the paths.
//     stroke: 'none'
// });
//
//

(function($) {
    $.fn.randomizeColor = function(options) {
        // Track the last used color.
        var currentColorIndex = 0;

        // Default options
        var settings = $.extend(
            {
                // The target attribute
                targetAttribute: 'fill',

                // The default color palette
                colorArray: [
                    '#d60000',
                    '#c51162',
                    '#aa00ff',
                    '#6200ea',
                    '#304ffe',
                    '#2962ff',
                    '#0091ea',
                    '#00b8d4',
                    '#00bfa5',
                    '#00c853',
                    '#64dd17',
                    '#ffd600',
                    '#ff6d00',
                    '#dd2c00',
                    '#3e2723',
                ],

                // A destructive option to force the style by replacing the style element via attribute if !important is declared in CSS.
                destructive: false,

                // A default stroke to be applied to the paths.
                stroke: 'none'
            },

            options
        );

        // Define the jQuery Object for usage.
        var currentObject = this;

        // If the destructive option is not set, add the style normally.
        if (settings.destructive === false) {
            return currentObject.each(function() {
                // Attribute Style overwrites Element Style
                $(this)
                    .css(
                        settings.targetAttribute,
                        settings.colorArray[currentColorIndex]
                    )
                    .css('stroke', settings.stroke);
                // Go to the next color
                currentColorIndex++;
                // If the last color is reached, go back to the first color.
                if (currentColorIndex > settings.colorArray.length - 1) {
                    currentColorIndex = 0;
                }
            });
            // Else, completely replace the inline style
        } else {
            return currentObject.each(function() {
                // Attribute Style overwrites Element Style
                $(this).attr(
                    'style',
                    settings.targetAttribute +
                        ':' +
                        settings.colorArray[currentColorIndex] +
                        ' !important; stroke:' +
                        settings.stroke +
                        ' !important;'
                );
                // Go to the next color
                currentColorIndex++;
                // If the last color is reached, go back to the first color.
                if (currentColorIndex > settings.colorArray.length - 1) {
                    currentColorIndex = 0;
                }
            });
        }
    };
})(jQuery);
