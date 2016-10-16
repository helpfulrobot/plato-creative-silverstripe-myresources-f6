/*-------------------------------------------------------------------
Required plugins
-------------------------------------------------------------------*/

var elixir = require('laravel-elixir');

// Paths
var paths = {
    'node_modules': 'node_modules',
    'jquery': 'node_modules/jquery',
    'foundation': 'node_modules/foundation-sites'
}

/*-------------------------------------------------------------------
Configuration
-------------------------------------------------------------------*/

elixir.config.sourcemaps = true;
elixir.config.assetsPath = 'myresources';
elixir.config.publicPath = 'themes/base';
elixir.config.css.sass.folder = 'scss';
elixir.config.css.autoprefix.options.browsers = ['> 1%', 'IE > 8'];

/*-------------------------------------------------------------------
Tasks
-------------------------------------------------------------------*/

elixir(function(mix) {
    mix
    // copy jquery & foundation
    .copy(
        paths.jquery + '/dist/jquery.min.js',
        elixir.config.publicPath + '/js/jquery.min.js'
    )
    .copy(
        paths.foundation + '/dist/foundation.min.js',
        elixir.config.publicPath + '/js/foundation.min.js'
    )
    // compile and combine scss
    .sass(
        'app.scss',
        null,
        {includePaths: [paths.node_modules + '/']}
    )
    .sass(
        'editor.scss',
        null,
        {includePaths: [paths.node_modules + '/']}
    )

    // combine scripts
    .scripts(
        [
            'app.js'
        ],
        elixir.config.publicPath + '/js/app.js'
    );
});
