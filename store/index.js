import api from '~/plugins/api'

export const actions = {
  // 文章列表
  async getArticles({ commit }, params) {
    const { data } = await api.getArticles(params.current, params.size)
    const list = {
      data: data.list,
      totalPage: Math.ceil(data.total / data.size),
      currentPage: data.current || 0
    }
    commit('article/SET_LIST', list)
  },
  // 文章详情
  async getArticle({ commit }, id) {
    const { data } = await api.getArticle(id)
    commit('article/SET_DETAIL', data)
  },
  // 分类列表
  async getCategories({ commit }) {
    const { data } = await api.getCategories()
    commit('category/SET_DATA', data)
  },
  // 标签列表
  async getTags({ commit }) {
    const { data } = await api.getTags()
    commit('tag/SET_DATA', data)
  },
  // 归档
  async getArchive({ commit }) {
    const { data } = await api.getArchives()
    commit('archive/SET_DATA', data)
  },
  // 前端设置
  async getSetting({ commit }) {
    const { data } = await api.getSetting()
    commit('setting/SET_DATA', data)
  },
  // 全局服务初始化
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSetting')
  }
}
