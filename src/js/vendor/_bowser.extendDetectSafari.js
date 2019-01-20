// Bowser Extension to detect older iOS and OSX Safari which have issues with Flexbox.
// Function returns true if detected.
// Use it in another function by doing something like:
// var matchHeightNeeded = bowserExtendDetectSafari();
// if (matchHeightNeeded === true) {
//     $('.js-website-packages-match-height').matchHeight();
// }

function bowserExtendDetectSafari() {
    // Only run bowser if the device is running an old version of iOS which messes with Flexbox.
    // Bowser returns the string of the version as whole. If there are minor versions set, only choose the major version.
    // iOS 11 Flexbox works the same as other browsers.
    var browserDetected = false;
    if (
        (bowser.osname === 'iOS' && bowser.osversion.split('.')[0] < 11) ||
        // or if using an older version of Safari on OSX
        (bowser.osname === 'macOS' &&
            bowser.name === 'safari' &&
            bowser.version.split('.')[0] < 11)
    ) {
        browserDetected = true;
    }
    return browserDetected;
}