import api from '../plugins/api'
import tools from '../plugins/tools'
import defaultConfig from './default-config'

const config = [
  // A default feed configuration object
  {
    path: '/feed.xml', // The route to your feed.
    async create(feed) {
      const result = await api.getSetting()
      const setting = result.data
      feed.options = {
        title: setting.meta_title || defaultConfig.meta_title,
        link: tools.formatWebsite(setting.blog_website) + '/feed.xml',
        description: setting.meta_description || defaultConfig.meta_description
      }
      const res = await api.getAllArticle()
      const articles = res.data
      articles.forEach(article => {
        feed.addItem({
          title: article.title,
          id: article.id,
          link: tools.formatWebsite(setting.blog_website) + '/article/' + article.id,
          description: article.summaryContent,
          content: article.summaryContent
        })
      })
      feed.addCategory('Nuxt.js')
    }, // The create function (see below)
    cacheTime: 1000 * 60 * 15, // How long should the feed be cached
    type: 'rss2' // Can be: rss2, atom1, json1
  }
]

export default {
  config
}
