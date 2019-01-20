# Important Notes

-   Website performance which include inlining critical CSS, minification, unused code removal and others are not done on this demo webpage.
-   No official QA was performed on this webpage.
-   Cross-browser compatibility was not taken into account for this demo page.
-   Some mobile design layouts do not yet mirror the [Lemi Website](https://app.lemi.travel/).
-   Some functionality such as in page section transitions have not yet been implemented.
-   Back to top button is not yet implemented.
-   **Most of the page specific CSS can be found in src/scss/general/general.scss**
-   **Most of the page specific JS can be found in src/js/general/general.js**
-   One may view the webpage by serving dist/index.html with any local webserver.

# Quick Start
1. Clone this repository.
1. Run dist/index.html from any local webserver such as [Live Server](https://www.npmjs.com/package/live-server).

# Installation

## Installation is only required to do the following from src:

-   Transpile ES6 Syntax to ES5
-   Concat JS into a single file
-   Transpile SCSS to CSS

## Steps

1. Clone this repository.
1. If you don't have NodeJS, install [NodeJS 8 LTS](https://nodejs.org/download/release/latest-v8.x/).
1. Install Gulp - [Instructions](https://gulpjs.com/docs/en/getting-started/quick-start/).
1. In your terminal, run gulp.
1. Launch dist/index.html with a local server such as [Live Server](https://www.npmjs.com/package/live-server)

# Frameworks and Tools Used

## Code Editor

-   [Visual Studio Code](https://code.visualstudio.com/)

## Build Tools

-   [Node.js](https://nodejs.org/en/)
-   [gulp](https://gulpjs.com/)

## In-browser frameworks

No constraints and business requirements were provided to produce a single web page.

-   [jQuery](https://jquery.com/) - Required by Bootstrap
-   [Bootstrap](https://getbootstrap.com/) - Allows rapid deployment with pre-built components that are present in the [Lemi Website](https://app.lemi.travel/).
-   [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/) - Allows for the Instagram Feed to be displayed in a full screen carousel.
-   [IcoMoon](https://icomoon.io/) - Used for some of the icons on the webpage.
-   [screenfull.js](https://github.com/sindresorhus/screenfull.js/) - Cross-browser compatible fullscreen API wrapper.
