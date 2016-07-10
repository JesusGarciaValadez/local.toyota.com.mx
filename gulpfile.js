/* Dependencias */
var gulp    = require('gulp'),
	server = require('gulp-server-livereload'),
	jade = require('gulp-jade'),
	compass = require('gulp-compass'),
	coffee = require('gulp-coffee'),
	gutil   = require('gulp-util'),
	uglify  = require('gulp-uglify'),
	watch   = require('gulp-watch'),
	notify  = require('gulp-notify')
	concat  = require('gulp-concat');
 

/* Configuración del 'server' */
gulp.task('webserver', function(){
	gulp.src('./dist')
	.pipe(server({
		path: './dist',
		directoryListing: false,
		port: 3000,
		open: true,
		livereload:{
			enable: true,
			port: 3010
		}
	}));
});

/* Configuración de la tarea 'jade' */
gulp.task('jade', function(){
	var YOUR_LOCALS = {};
	gulp.src('./src/jade/*.jade')
	.pipe(jade({
		pretty: true,
		locals: YOUR_LOCALS
	}))
	.pipe(gulp.dest('./dist/'))
});

/* Configuración de la tarea 'compass' */
gulp.task('compass', function(){
	gulp.src('./src/sass/**/*.sass')
	.pipe(compass({
		config_file: './src/config.rb',
		css: './dist/css',
		sass: 'src/sass'
	}))
	.on('error', function(error){
		console.log(error);
	})
	.pipe(gulp.dest('./dist/css'));
});

 
/* Configuración de la tarea 'coffee' */
gulp.task('coffee', function(){
	gulp.src('./src/coffee/**/*.coffee')
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(gulp.dest('./dist/js'))
});


/* Configuración de la tarea 'js' */
gulp.task('js', function() {
	gulp.src(
		['./dist/js/library/*.min.js',
		'./dist/library/bxslider/*.js',
		'./dist/library/fancybox/*.js',
		'./dist/library/countdown/*.js']
	)
	.pipe(uglify())
	.pipe(concat("app.min.js"))
	.pipe(gulp.dest('./dist/js/'));
	gulp.src(
		['./dist/js/corePage/*.js']
	)
	.pipe(uglify())
	.pipe(concat("core.min.js"))
	.pipe(gulp.dest('./dist/js/'));
});

/* Configuración de la tarea 'jade:watch' */
gulp.task('jade:watch', function(){
	gulp.watch('./src/jade/**/*.jade', ['jade']);
});

/* Configuración de la tarea 'compass:watch' */
gulp.task('compass:watch', function(){
	gulp.watch('./src/sass/**/*.sass', ['compass']);
});

/* Configuración de la tarea 'coffee:watch' */
gulp.task('coffee:watch', function(){
	gulp.watch('./src/coffee/**/*.coffee', ['coffee']);
});

/* Configuración de la tarea 'compass:watch' */
gulp.task('watch', function(){
	gulp.watch('./dist/js/library/*.js', function() {
		gulp.run('js');
	});
});

gulp.task('toyota', ['jade:watch','compass:watch','coffee:watch','webserver']);

gulp.task('default', ['js']);