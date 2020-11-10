const mix = require('laravel-mix')

require('laravel-mix-purgecss');

mix
    .setPublicPath(path.normalize('www/dist'))
    .js('src/js/app.js', 'www/dist')
    .sass('src/sass/app.scss', 'www/dist')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')()
        ],
    });