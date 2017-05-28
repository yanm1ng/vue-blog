<template>
  <main class="app-body">
    <article v-for="item in list" :key="item.id">
      <h2 class="article-head">
        <router-link :to="`/posts/${item.id}`">{{ item.title }}</router-link>
      </h2>
      <p class="article-date">{{ item.date }}</p>
      <div class="tags">
        <span class="tag-code" v-for="tag in item.tags" :key="Math.random()">{{ tag }}</span>
      </div>
      <div class="article-summary">{{ item.summary }}</div>
      <router-link class="more" :to="`/posts/${item.id}`">read more</router-link>
    </article>
    <div class="guide-pager" v-if="list.length > 5">
      <router-link to="/prev"><span class="page-arrow">←</span> Prev</router-link>
      <router-link to="/next">Next <span class="page-arrow">→</span></router-link>
    </div>
  </main>
</template>

<script>
import api from '@/api/'

export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      api.getList().then(list => {
        api.getIndex(list.filter(({ name }) => {
          return name == 'index.json'
        })[0].sha)
        .then(index => {
          this.list = index.map(item => {
            item.id = list.filter(({ name }) => {
              return name.replace(/\.md$/, '') == item.title
            })[0].sha;
            return item;
          })
        })
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style scoped>
h2.article-head {
  font-size: 1.5em;
  margin-bottom: 0;
}
.article-head > a {
  color: #34495e;
}
.article-head > a:hover {
  border-bottom: 2px solid #42b983;
}
.article-date {
  color: #7f8c8d;
  font-size: 12px;
  margin: 10px 0;
}
.article-summary {
  font-size: 15px;
  margin: 20px 0;
}
.more {
  font-size: 14px;
}
.guide-pager {
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
.page-arrow {
  color: #34495e;
}
@media screen and (max-width: 480px) {
  .article-summary {
    font-size: 14px;
  }
}
</style>


