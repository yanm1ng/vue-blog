<template>
  <main class="app-body" :class="{ 'fade' : loading }">
    <section class="tags-list" v-for="(items, tag) of list" :key="tag">
      <h3 class="tags-name">{{ tag }}</h3>
      <ul class="tags-articles">
        <router-link :to="`/posts/${item.id}`" tag="li" v-for="item in items" :key="item.id">{{ item.title }}</router-link>
      </ul>
    </section>
  </main>
</template>

<script>
import api from '@/api/'
import { blogConfig } from '@/config/'
import { setTitle } from '@/utils/'

export default {
  name: 'tags',
  data() {
    return {
      list: []
    }
  },
  props: {
    loading: Boolean
  },
  created () {
    this.loadList()
    setTitle(blogConfig.title);
  },
  methods: {
    loadList () {
      this.$emit('handleLoading')
      api.getList().then(list => {
        api.getIndex().then(index => {
          var res = {};
          index.map(({ title, tags }) => {
            var id = list.filter(({ name }) => {
              return name.replace(/\.md$/, '') == title
            })[0].sha;
            tags.map(key => {
              if (!res[key]) {
                res[key] = [];
              }
              res[key].push({ title, id })
            })
          })
          this.list = res;
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
.tags-list {
  margin-left: 1em;
  margin-right: 1em;
}
.tags-name {
  font-size: 1.4em;
  position: relative;
}
.tags-name:before {
  content: "#";
  color: #42b983;
  position: absolute;
  left: -.7em;
  top: -2px;
  font-size: 1.2em;
  font-weight: 700;
}
.tags-articles {
  font-size: 1.1em;
  padding-left: 1em;
}
.tags-articles li {
  cursor: pointer;
  margin: 10px 0;
}
.tags-articles li:hover {
  color: #42b983;
}
</style>


