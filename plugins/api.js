import { get } from './http'

const api = {
  getArticles(current, size) {
    const params = {
      current,
      size: size || 5
    }
    return get('/article', params)
  },
  getAllArticle() {
    return get('/articles')
  },
  getArticle(id) {
    return get('/article/' + id)
  },
  getCategories() {
    return get('/category')
  },
  getTags() {
    return get('/tags')
  },
  getArchives() {
    return get('/archive')
  },
  getSetting() {
    return get('/setting')
  }
}

export default api
