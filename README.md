WEBAPP INSTALL

npm install
composer update
php artisan migrate:fresh
php artisan key:generate
