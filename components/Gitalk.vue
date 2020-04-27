<template>
  <div id="gitalk-container"></div>
</template>

<script>
import defaultConfig from '../config/default-config'
import Gitalk from 'gitalk'

export default {
  mounted() {
    this.initGitalk()
  },
  methods: {
    initGitalk() {
      const gitalk = new Gitalk({
        clientID: defaultConfig.clientID,
        clientSecret: defaultConfig.clientSecret,
        repo: defaultConfig.gitHubRepo,
        owner: defaultConfig.gitHubRepoOwner,
        admin: defaultConfig.gitHubAdmin,
        id: location.pathname.substring(0, 50),
        distractionFreeMode: false
      })
      gitalk.render('gitalk-container')
    }
  }
}
</script>

<style scoped></style>
