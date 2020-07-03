import api from '../plugins/api'
import tools from '../plugins/tools'

// 静态页面,通过routes设置其url
const STATIC_ROUTE = ['/', '/tag', '/archive', '/category']

const config = {
  routes() {
    return api.getSetting().then(res => {
      let url = ''
      if (res.code && res.data && res.data.blog_website) {
        url = tools.formatWebsite(res.data.blog_website)
      }
      return api.getAllArticle().then(res => {
        const routes = res.data.map(article => url + '/article/' + article.id)
        STATIC_ROUTE.forEach(route => {
          routes.push(url + route)
        })
        return routes
      })
    })
  },
  exclude: STATIC_ROUTE.map(item => item.substring(item.indexOf('/') + 1))
}

export default {
  config
}
