<template>
  <main class="app-body" id="archives">
    <section class="time-section" v-for="(items, year) in archives" :key="year">
      <h1 class="section-year">{{ year }}</h1>
      <div class="section-list" v-for="post in items" :key="post.id">
        <div class="section-list-item">
          <router-link :to="`/posts/${post.id}`" class="archive-title">{{ post.title }}</router-link>
          <p class="archive-date">{{ post.date }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import api from '@/api/'
import { setTitle } from '@/utils/'

export default {
  name: 'archives',
  data() {
    return {
      archives: {}
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      this.$emit('handleLoading')
      api.getList().then(list => {
        api.getIndex(list.filter(({ name }) => {
          return name == 'index.json'
        })[0].sha)
        .then(index => {
          list = index.map(item => {
            item.id = list.filter(({ name }) => {
              return name.replace(/\.md$/, '') == item.title
            })[0].sha;
            return item;
          })
          var archives = {};
          list.forEach(post => {
            const y = new Date(post.date).getFullYear();
            if (!archives[y]) {
              archives[y] = [];
            }
            archives[y].push(post);
          })
          this.archives = archives;
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
#archives:before {
  position: absolute;
  top: 2em;
  bottom: 1em;
  left: 30px;
  height: auto;
  content: '';
  background-color: #42b983;
  width: 4px;
}
.time-section {
  padding-left: 30px;
  position: relative;
}
.section-year {
  cursor: pointer;
  font-size: 1.8em;
  margin-left: 10px;
}
.section-year:before {
  position: absolute;
  left: 8px;
  top: 11px;
  content: '';
  background-color: #fff;
  width: 12px;
  height: 12px;
  border: 2px solid #42b983;
  border-radius: 50%;
}
.section-list .section-list-item {
  margin: 20px 0 20px 10px;
  position: relative;
}
.section-list .section-list-item:before {
  position: absolute;
  left: -29px;
  top: 7px;
  content: '';
  background-color: #42b983;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.archive-title {
  color: #34495e;
  font-size: 1.1em;
  transition: all .3s ease;
}
.archive-title:hover {
  color: #42b983;
}
.archive-date {
  color: #7f8c8d;
  font-size: .9em;
  margin: 5px 0;
}
</style>
