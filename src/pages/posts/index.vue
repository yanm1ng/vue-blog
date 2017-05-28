<template>
  <article class="app-body" id="post-markdown">
    <h2>{{ article.title }}</h2>
    <p class="post-date">{{ article.date }}</p>
    <p v-if="article" v-html="articleHtml" id="markdown-content"></p>
    <div class="tags">
      <span>Tags:</span>
      <span class="tag-code" v-for="tag in article.tags" :key="Math.random()">{{ tag }}</span>
    </div>
  </article>
</template>

<script>
import api from '@/api/'
import marked from '@/filters/marked'

export default {
  name: 'posts',
  data() {
    return {
      article: {},
      content: ''
    }
  },
  computed: {
    articleHtml() {
      return marked(this.content)
    }
  },
  created() {
    var id = this.$route.params.id;
    this.loadDetail(id)
    this.loadInfo(id)
  },
  methods: {
    loadDetail(id) {
      api.getDetail(id)
        .then(details => {
          this.content = details;
        })
        .catch(err => {
          console.error(err)
        })
    },
    loadInfo(id) {
      api.getList().then(list => {
        var sha = list.filter(({ name }) => {
          return name == 'index.json'
        })[0].sha;
        var name = list.filter(({ sha }) => {
          return sha == id
        })[0].name;
        api.getIndex(sha).then(index => {
          var result = index.filter(({ title }) => {
            return name.replace(/\.md$/, '') == title
          })[0]
          this.article = result;
        })
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style>
#markdown-content {
  overflow: auto;
}
#post-markdown h1 {
  margin: .6em 0;
  font-size: 1.8em;
}
#post-markdown .post-date {
  color: #7f8c8d;
  font-size: 12px;
  margin: 10px 0;
}
#post-markdown h3 {
  margin: 1em 0 .8em;
  padding-bottom: .3em;
  border-bottom: 1px solid #ddd;
}
#post-markdown h4 {
  margin: 1em 0 .8em;
  position: relative;
}
#post-markdown h4:before {
  content: "#";
  color: #42b983;
  position: absolute;
  left: -.7em;
  top: -2px;
  font-size: 1.2em;
  font-weight: 700;
}
#post-markdown blockquote {
  margin: 1em 0;
  padding-left: 20px;
  border-left: 4px solid #42b983;
}
#post-markdown a {
  color: #42b983;
  font-weight: 600;
}
#post-markdown ul {
  overflow: auto;
}
.tags > span {
  font-size: .8em;
  font-weight: 600;
}
</style>


