import gulp from 'gulp'
import RevAll from 'gulp-rev-all'

const TASK_NAME = 'rev'

function revOnce(conf) {

  const revAll = new RevAll(conf.options);

  return gulp.src(conf.src)
    .pipe(revAll.revision())
    .pipe(gulp.dest(conf.dest))
    .pipe(revAll.versionFile())
    .pipe(gulp.dest(conf.dest))

}

function rev() {
  gulp.autoRegister(TASK_NAME, revOnce)
}

export default gulp.task(TASK_NAME, rev)
