const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

// SBAdmin2 - Base
mix.styles('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/css/sb-admin-2.css','public/admin2/sb-admin-2.css');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/js/sb-admin-2.js','public/admin2/sb-admin-2.js');

// SBAdmin2 - Bootstrap
mix.sass('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/bootstrap/scss/bootstrap.scss','public/admin2/bootstrap.css');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.js','public/admin2/bootstrap.js');

// SBAdmin2 - Chart.js
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/chart.js/Chart.bundle.js','public/admin2/chart.js');

// SBAdmin2 - JQuery & JQuery-Easing
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/jquery/jquery.js','public/admin2/jquery.js');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.js','public/admin2/jquery.easing.js');

// SBAdmin2 - FontAwesome Free
mix.sass('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/fontawesome-free/scss/fontawesome.scss','public/admin2/fontawesome.css');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/fontawesome-free/js/all.js','public/admin2/fontawesome.js');

// SBAdmin2 - Datatables
mix.styles('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/datatables/dataTables.bootstrap4.css','public/admin2/datatables.bootstrap4.css');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/vendor/datatables/jquery.dataTables.js','public/admin2/jquery.dataTables.js');

// SBAdmin2 - Demo
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/js/demo/chart-area-demo.js','public/admin2/chart-area-demo.js');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/js/demo/chart-bar-demo.js','public/admin2/chart-bar-demo.js');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/js/demo/chart-pie-demo.js','public/admin2/chart-pie-demo.js');
mix.js('/var/www/your_domain/webapp/node_modules/startbootstrap-sb-admin-2/js/demo/datatables-demo.js','public/admin2/datatables-demo.js');












