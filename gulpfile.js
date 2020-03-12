var
	gulp = require('gulp'),
	path = require('path'),
	gutil = require('gulp-util');


var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'jill-icons';





gulp.task('iconfont', function(){
  gulp.src(['./src/svg-icons/*.svg'], {base: 'src'})
    .pipe(iconfontCss({
      fontName: fontName,
      path: './_icons.scss',
      targetPath: './_icons.scss.liquid',
      fontPath: './src/assets/'
    }))    
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 1001,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
     }))
    .pipe(gulp.dest('./src/assets/'));
 	   
	gulp.src(['./src/svg-icons/*.svg'], {base: 'src'})    
      .pipe(iconfontCss({
      fontName: fontName,
      path: './_icons2.scss',
      targetPath: './_icons.scss',
      fontPath: './src/styles/core/'
    }));    
//    browserSync.reload();
});


gulp.task('watch', function() {
	  gulp.watch('src/svg-icons/**/*.svg', gulp.series('iconfont'));
});

gulp.task('default', function() {
    console.log(gutil.colors.yellow('------ start ------'));
    gulp.start(['watch', 'iconfont']);
});