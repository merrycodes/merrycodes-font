<template>
  <div class="timeline">
    <div v-for="archive in archives" :key="archive.year" class="timeline-item">
      <div class="timeline-left">
        <div class="timeline-left icon-lg">
          <a class="timeline-icon"></a>
        </div>
      </div>
      <div class="timeline-content">
        <div class="tile">
          <div class="tile-content">
            <div :id="archive.year" class="tile-subtitle">{{ archive.year }}</div>
            <p v-for="post in archive.articleList" :key="post.id" class="tile-title">
              <label class="text-italic">{{ post.createTime | time('MM-dd') }}</label>
              <nuxt-link :to="{ path: '/article/' + post.id }">{{ post.title }}</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="timeline-toc toc">
      <ol class="list">
        <li v-for="archive in archives" :key="archive.year">
          <a class="timeline-link" @click="goAnchor(archive.year, 200)">{{ archive.year }}</a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  fetch({ store }) {
    return store.dispatch('getArchive')
  },
  computed: {
    archives() {
      return this.$store.state.archive.data
    }
  },
  methods: {
    goAnchor(id, offset) {
      this.$util.goAnchor(id, offset)
    }
  },
  head() {
    return { title: `归档` }
  }
}
</script>

<style scoped>
.timeline {
  margin-top: 30px;
}

.timeline .timeline-item {
  display: flex;
  display: -ms-flexbox;
  margin-bottom: 1.2rem;
  position: relative;
}

.timeline .timeline-item::before {
  background: #e7e9ed;
  content: '';
  height: 100%;
  left: 11px;
  position: absolute;
  top: 1.2rem;
  width: 2px;
}

.tile .tile-content .tile-subtitle {
  font-size: 24px;
  font-weight: 600;
  color: #34495e;
}

.tile .tile-content .tile-title label {
  font-size: 14px;
  color: #7f8c8d;
  margin-right: 15px;
}

.tile .tile-content .tile-title a {
  color: #34495e;
  text-decoration: none;
}

.tile .tile-content .tile-title a:hover {
  margin-left: 10px;
  color: #5764c6;
  transition: all 0.3s;
  text-decoration: none;
}

.timeline .timeline-item .timeline-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 2px 0 2px 0.8rem;
}

.timeline .timeline-item .timeline-content {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 2px 0 2px 0.8rem;
}

.timeline .timeline-item .timeline-icon {
  border-radius: 50%;
  color: #fff;
  display: block;
  height: 1.2rem;
  text-align: center;
  width: 1.2rem;
}

.timeline .timeline-item .timeline-icon::before {
  border: 0.1rem solid #5764c6;
  border-radius: 50%;
  content: '';
  display: block;
  height: 0.4rem;
  left: 0.4rem;
  position: absolute;
  top: 0.4rem;
  width: 0.4rem;
}

.timeline .timeline-item .timeline-icon.icon-lg {
  background: #5764c6;
  font-size: 0.8rem;
  line-height: 1rem;
}

.timeline .timeline-item .timeline-icon.icon-lg::before {
  content: none;
}

.timeline-toc {
  position: fixed !important;
  min-width: calc((100% - 1200px) / 2);
  max-width: calc((100% - 1000px) / 2);
  max-height: calc(100% - 120px);
  right: 100px;
  top: 100px;
  transition: all 0.3s;
  overflow-y: auto;
}

.list {
  margin: 0;
  padding-left: 10px;
}

.timeline-toc > .list {
  overflow-y: hidden;
  position: relative;
}

ul:last-child,
ol:last-child {
  margin-bottom: 0;
}
ul:first-child,
ol:first-child {
  margin-top: 0;
}

.timeline-toc > .list li {
  list-style: none;
}

.timeline-link {
  color: currentColor;
  height: 100%;
}

.timeline-link::before {
  background-color: #5764c6;
  content: ' ';
  display: inline-block;
  height: inherit;
  left: 0;
  margin-top: -1px;
  position: absolute;
  width: 2px;
}

@media screen and (max-width: 1300px) {
  .timeline-toc {
    display: none;
  }
}
</style>
