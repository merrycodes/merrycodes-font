import api from '../plugins/api'
import defaultConfig from './default-config'

const config = [
  // A default feed configuration object
  {
    path: '/feed.xml', // The route to your feed.
    async create(feed) {
      feed.options = {
        title: defaultConfig.meta_title,
        link: defaultConfig.blog_website + '/feed.xml',
        description: defaultConfig.meta_description
      }
      const res = await api.getAllArticle()
      const articles = res.data
      articles.forEach(article => {
        feed.addItem({
          title: article.title,
          id: article.id,
          link: defaultConfig.blog_website + '/article/' + article.id,
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
