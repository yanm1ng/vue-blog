<template>
  <main class="app-body" :class="{ 'fade' : loading }">
    <div class="article-list">
      <div v-for="item in currentList" class="post-article">
        <v-article :article="item" :key="item.id"></v-article>
      </div>
    </div>
    <v-pagination :total="list.length"></v-pagination>
  </main>
</template>

<script>
import api from '@/api/'
import { blogConfig } from '@/config/'
import { setTitle } from '@/utils/'

export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  props: {
    loading: Boolean
  },
  computed: {
    currentList() {
      return this.list.slice(0, 5);
    }
  },
  created () {
    this.loadList()
    setTitle(blogConfig.title);
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
}
</style>


