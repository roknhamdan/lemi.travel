// Exports
const { src, dest, series } = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    fileinclude = require('gulp-file-include');
sass.compiler = require('node-sass');

// Wipe the dist directory
const wipe = (cb) => {
    return del(`dist`);
    cb();
};

// Copy Source
const mirror = (cb) => {
    return src(['src/**', '!src/{scss,scss/**}', '!src/{js,js/**}']).pipe(
        dest('dist/')
    );
    cb();
};

// Inline SVGs
const inlineSvg = (cb) => {
    return (
        src('dist/**.html')
            // Inline SVGs.
            .pipe(
                fileinclude({
                    prefix: '@@',
                    // Set the base to where gulp.js runs from.
                    basepath: '@root'
                })
            )
            .pipe(dest('dist'))
    );
};

// Compile SASS
const compileSass = (cb) => {
    return src('src/scss/**.*scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('bundle.css'))
        .pipe(dest('dist/css'));
    cb();
};

// Concat JS
const compileJs = (cb) => {
    return (
        src('src/js/main.js')
            // Concat
            .pipe(
                fileinclude({
                    // Prefix it like so:
                    // gulpRequire_include('../path/to/js.js');
                    prefix: 'gulpRequire_',
                    // Prettier will close it with a semicolon so remove that.
                    suffix: ';',
                    // Relative to file.
                    basepath: '@file'
                })
            )
            // Transpile
            .pipe(
                babel({
                    plugins: [
                        // Use backticks, newline etc.
                        `@babel/plugin-transform-template-literals`,
                        // Class variable {}
                        `@babel/plugin-transform-classes`,
                        // const, let
                        `@babel/plugin-transform-block-scoping`,
                        // var f = ()=>{}
                        `@babel/plugin-transform-arrow-functions`,
                        // arrays into their own strings.
                        `@babel/plugin-transform-spread`,
                        // Object shorthand properties.
                        `@babel/plugin-transform-shorthand-properties`,
                        // var obj ={ [`template literal as key`]: value }
                        `@babel/plugin-transform-computed-properties`
                    ]
                })
            )
            .pipe(rename('bundle.js'))
            .pipe(dest('dist/js'))
    );
    cb();
};

// Github Pages
const ghPages = (cb) => {
    return src(`dist/**`).pipe(dest(`docs`));
    cb();
};

// Task
exports.default = series(
    wipe,
    mirror,
    inlineSvg,
    compileSass,
    compileJs,
    ghPages
);
