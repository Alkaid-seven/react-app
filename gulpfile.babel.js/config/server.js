import gulp from 'gulp'
import compress from 'compression'

export default {
  src: [
    `${gulp.config('root.dist')}/{,**/}*.*'`
  ],
  options: {
    notify: false,
    logSnippet: false,
    snippetOptions: {
      rule: {
        match: /$/,
        fn: function () {
          return ''
        }
      }
    },
    server: {
      baseDir: `${gulp.config('root.dist')}`,
      middleware: [
        process.env.NODE_ENV === 'production' ? compress() : middlewareNope()
      ]
    },
    ui: {
      port: 9999
    }
  }
}

function middlewareNope() {
  return (req, res, next)=> {
    return next()
  }
}
