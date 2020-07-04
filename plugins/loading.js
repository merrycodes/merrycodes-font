import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ easing: 'ease', speed: 400, showSpinner: false })

export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      NProgress.inc()
    }
    next()
  })

  app.router.afterEach(() => {
    if (process.client) {
      NProgress.done()
    }
  })
}
