var gulp = require('gulp');
var clean = require('gulp-clean'); // 清理文件夹
var jshint = require('gulp-jshint'); // js代码检查
var concat = require('gulp-concat'); // 文件合并
var uglify = require('gulp-uglify'); // js压缩
var rename = require('gulp-rename'); // 重命名
var rev = require('gulp-rev'); // 文件hash
var templateCache = require('gulp-angular-templatecache'); // angular的html模版合并成一个js文件
var revCollector = require('gulp-rev-collector'); // html文件里的js、css资源替换
var sourcemaps = require('gulp-sourcemaps'); // 方便调试
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var zip = require('gulp-zip');
var gulpSequence = require('gulp-sequence'); // 按顺序执行任务

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('styles', function () {
    return gulp.src(['css/*.css'])
        .pipe(concat('all.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/tmp'));
});

var libsList = [
    'js/libs/angular-1.3.20.min.js',
    'js/libs/angular-ui-router-0.2.15.min.js',
    'js/libs/angular-resource.js',
    'js/libs/ngDialog-0.5.5.min.js',
    'js/libs/underscore-1.8.3min.js',
    'js/libs/ui-bootstrap-custom-0.14.3.min.js',
    'js/libs/ui-bootstrap-custom-tpls-0.14.3.min.js'
];
gulp.task('libs-all', function () {
    return gulp.src(libsList)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/tmp'));
});

gulp.task('lint', function () {
    return gulp.src(['js/scripts/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail')); //出错后停止
});

gulp.task('scripts', ['lint'], function () {
    return gulp.src(['js/scripts/demo-*.js', '!js/scripts/memory-services.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

// 将angular的html模版编译为一个js文件
gulp.task('templates', function () {
    return gulp.src(['partials/**/*.html'])
        .pipe(templateCache('templates.js', {
            module: 'watch.templates',
            standalone: true,
            transformUrl: function(url){
                return "partials/" + url;
            }
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('rev', ['clean', 'libs-all', 'scripts', 'styles', 'templates'], function () {
    return gulp.src(['dist/*.js', 'dist/*.css'])
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest({merge: false}))
        .pipe(gulp.dest('dist'));
});

// 将html里引用的静态文件加上文件hash
gulp.task('collector', function () {
    return gulp.src(['dist/tmp/*.json', 'html/*.html'])
        .pipe(revCollector({replaceReved: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', gulpSequence('clean', 'libs-all', 'scripts', 'styles', 'templates', 'rev', 'collector'));

// 将编译后的文件打个zip包
gulp.task('package', ['default'], function () {
    return gulp.src(['*.html', './dist/**', './partials/**', './images/**', '!node_modules/**', '!dist/tmp/**'], {base: './'})
        .pipe(zip('demo.zip'))
        .pipe(gulp.dest('.'));
});

// 监视文件的变化
gulp.task('watch', ['default'], function () {
    gulp.watch(['js/scripts/*.js', 'css/*.css', 'partials/**/*.html'], ['default']);
});

// 启动一个webserver
gulp.task('server', ['watch'], function () {
    gulp.src('.')
        .pipe(webserver({
            host: '192.168.0.150',
            port: 8000,
            livereload: false,
            open: true
        }));
});




