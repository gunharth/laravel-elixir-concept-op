const elixir = require('laravel-elixir');

elixir((mix) => {
    mix
    	.sass('styles.scss','public/css/styles.css')
    	.styles([
	        './node_modules/animate.css/animate.css'
    		], 'public/css/vendor.css')
       .rollup('vendor.js','resources/assets/js/build/vendor.js')
       .scripts([
	        'build/vendor.js',
	        './node_modules/jquery.easing/jquery.easing.js',
	        './node_modules/waypoints/lib/jquery.waypoints.js',
	        './node_modules/jquery-countto/jquery.countTo.js',
	        './node_modules/skrollr/src/skrollr.js'
	    	], 'public/js/vendor.js')
       .rollup('site.js','public/js/site.js')
       .browserSync({
	        proxy: 'http://laravel-elixir-concept-op.dev'
	    });
});
