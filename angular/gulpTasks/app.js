const gulp = require('gulp')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')

gulp.task('app', ['app.html','app.css','app.js','app.assets'])

gulp.task('app.html',function(){
   return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapsewhitespace: true}))
    .pipe(gulp.dest('public'))

})

gulp.task('app.css',function(){
  return gulp.src('app/**/*.css')
        .pipe(uglifycss({"uglycomments":true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('public/assets/css'))

})

gulp.task('app.js',function(){
   return gulp.src('app/**/*.js')
       .pipe(babel({ presets: ['env'] }))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('app.assets',function(){
   return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('public/assets'))

})

