<template>
  <main class="app-body" :class="{ 'fade' : loading }">
    <div class="article-list">
      <div v-for="item in currentList" class="post-article">
        <v-article :article="item" :key="item.id"></v-article>
      </div>
    </div>
    <v-pagination :current="current" :total="list.length"></v-pagination>
  </main>
</template>

<script>
import api from '@/api/'
import { blogConfig } from '@/config/'
import { setTitle } from '@/utils/'

export default {
  name: 'page',
  data() {
    return {
      list: []
    }
  },
  props: {
    loading: Boolean
  },
  computed: {
    current() {
      let { current } = this.$route.params;
      return parseInt(current, 10);
    },
    currentList() {
      let { current } = this;
      return this.list.slice((current - 1) * 5, current * 5);
    }
  },
  created () {
    this.loadList()
    setTitle(blogConfig.title);
  },
  updated () {
    window.scrollTo(0, 0)
  },
  methods: {
    loadList () {
      this.$emit('handleLoading')
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
          }).reverse()
          this.$emit('handleLoading')
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
.post-article {
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}
.post-article:last-child {
  border: none;
}
</style>


