import gulp from 'gulp'

export default {
  'files': [
    {
      'src': [
        `${gulp.config('root.src')}/*.html`
      ],
      'dest': `${gulp.config('root.dist')}`
    }
  ]
}