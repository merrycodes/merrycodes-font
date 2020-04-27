import api from '../plugins/api'
// import tools from '../plugins/tools'
import defaultConfig from '../config/default-config'

// 静态页面,通过routes设置其url
const STATIC_ROUTE = ['/', '/tag', '/archive', '/category']

const config = {
  routes() {
    return api.getAllArticle().then(res => {
      const url = defaultConfig.blog_website
      const routes = res.data.map(article => url + '/article/' + article.id)
      STATIC_ROUTE.forEach(route => {
        routes.push(url + route)
      })
      return routes
    })
  },
  exclude: STATIC_ROUTE
}

export default {
  config
}
