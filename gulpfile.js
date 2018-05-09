const gulp = require("gulp");
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const paths = {
  pages: ['src/*.html']
}

gulp.task('cope-html', () => {
  return gulp.src(paths.pages)
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['cope-html'], () => {
  return browserify({
    basedir: '.',
    debug: true,
    entities: ['src/main.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .pipe(source(('bundle.js')))
    .pipe(gulp.dest('dist'))
})

