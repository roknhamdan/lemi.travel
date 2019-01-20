// jQuery
gulpRequire_include('../../../node_modules/jquery/dist/jquery.min.js');
// Using a minified version of the migrate which allows older functions to work.
// Neutered the default logging message.
gulpRequire_include('./_jquery-migrate-3.0.1.modded-noConsoleLog.min.js');

// Bootstrap
gulpRequire_include(
    '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
);

// Owl Carousel
gulpRequire_include(
    '../../../node_modules/owl.carousel/dist/owl.carousel.min.js'
);

// Fullscreen Detection
gulpRequire_include('../../../node_modules/screenfull/dist/screenfull.js');
