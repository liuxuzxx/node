const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('default',function(){

});

gulp.task('less',function(){
    gulp.src('src/less/index.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

gulp.task('service',function(){
    gulp.src('src/service/**')
        .pipe(gulp.dest('disk'));
});

gulp.task('scout',function(){
    console.log('启动哨兵监控...');
    gulp.watch('src/**/*',['less','service']);
});