import gulp from 'gulp'
import gutil from 'gulp-util'
import path from 'path'
import requireDir from 'require-dir'
import gulpTaskConfig from './libs/gulp-task-config'

gulpTaskConfig(gulp);

requireDir('./tasks', {recurse: true});

gulp.config('root.shared', 'shared');
gulp.config('root.src', 'src');
gulp.config('root.dist', 'public');

gulp.config('tasks', requireDir('./config', {recurse: true}));

gulp.config('tasks.build', {
  taskQueue: [
    'clean',
    'symlink',
    'copy',
    'iconfont',
    'stylus',
    'browserify'
  ]
});

gulp.task('dev', () => {
  gulp.config(gulp.DEV_MODE, true);
  gulp.start(['build', 'server'])
});

gulp.task('default', ['build']);

