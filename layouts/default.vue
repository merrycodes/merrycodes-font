<template>
  <div>
    <fame-header />
    <div class="container">
      <transition name="flow" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <fame-scroll-top />
    <fame-footer />
  </div>
</template>

<script>
import defaultConfig from '../config/default-config'
import FameHeader from '~/components/Header.vue'
import FameFooter from '~/components/Footer.vue'
import FameScrollTop from '~/components/ScrollTop.vue'

export default {
  components: {
    FameHeader,
    FameFooter,
    FameScrollTop
  },
  computed: {
    settings() {
      return this.$store.state.setting.data
    }
  },
  head() {
    return {
      title: `${this.settings.meta_title}` || defaultConfig.meta_title,
      titleTemplate: '%s - ' + (this.settings.meta_title || defaultConfig.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.settings.meta_description || defaultConfig.meta_description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.settings.meta_keywords || defaultConfig.meta_keywords
        },
        {
          hid: 'google-site-verification',
          name: 'google-site-verification',
          content: this.settings.google_site_verification || defaultConfig.google_site_verification
        },
        {
          hid: 'baidu-site-verification',
          name: 'baidu-site-verification',
          content: this.settings.baidu_site_verification || defaultConfig.baidu_site_verification
        }
      ]
    }
  }
}
</script>

<style>
.container {
  padding: 2em 1em;
  margin: 30px auto 0;
  height: 100%;
  max-width: 980px;
  font-size: 16px;
  position: relative;
  animation: flow;
  animation-duration: 0.5s;
}
</style>
