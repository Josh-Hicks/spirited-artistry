var gulp = require('gulp'),
	uglify = require('gulp-uglify')
	sass = require('gulp-ruby-sass')
	imagemin = require('gulp-imagemin')
	prefix = require('gulp-autoprefixer')
	browserSync = require('browser-sync')
	cssmin = require('gulp-cssmin')
	;

//run this function on error
function errorLog(error){
	console.error.bind(console);
	this.emit('end');
}

//1: Scripts task
	//uglifies files
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		//if error, run errorLog function
		.on('error', errorLog)
		.pipe(gulp.dest('dist/js'))
});


gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});


//2: styles task
	//compile sass files
// gulp.task('styles', function(){
// 	sass('src/scss/main.scss', {style: 'compressed', stopOnError: false})
// 	.pipe(prefix('last 2 versions'))
// 	.pipe(gulp.dest('css/'))
// });

//when sass changes, run 'styles', then reload page
// gulp.task('sass-watch', ['styles'], browserSync.reload)

//image task
	//compress images
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
});


//3: watch task
	//watches js files
// gulp.task('watch', function(){
// 	browserSync({
// 		server: {
// 			baseDir: './'
// 		}
// 	})
// 	gulp.watch('js/*js', ['scripts']);
// 	// gulp.watch('src/scss/main.scss', ['styles']);
// });


//gulp task
	//run default taks
gulp.task('default', 
	//pass in an array of tasks you want to run by default
	//make sure it's in the correct order you want
	['scripts','image', 'css']
);










