<template>
  <article class="app-body" id="post-markdown" :class="{ 'fade' : loading }">
    <h2>{{ article.title }}</h2>
    <p class="post-date">{{ article.date }}</p>
    <p v-if="article" v-html="articleHtml" class="markdown-content"></p>
    <div class="tags">
      <span>Tags:</span>
      <span class="tag-code" v-for="tag in article.tags" :key="Math.random()">{{ tag }}</span>
    </div>
    <div id="comments"></div>
  </article>
</template>

<script>
import api from '@/api/'
import marked from '@/filters/marked'
import { gitmentConfig } from '@/config/'
import { setTitle } from '@/utils/'

import axios from 'axios'
import Gitment from 'gitment'

export default {
  name: 'posts',
  data() {
    return {
      article: {},
      content: ''
    }
  },
  props: {
    loading: Boolean
  },
  computed: {
    articleHtml() {
      return marked(this.content)
    }
  },
  created() {
    var that = this;
    var id = that.$route.params.id;
    this.$emit('handleLoading')
    axios.all([this.loadDetail(id), this.loadInfo(id)]).then(axios.spread(function (acct, perms) {
     that.$emit('handleLoading')
    }));
  },
  mounted() {
    this.renderComments()
  },
  methods: {
    loadDetail(id) {
      api.getDetail(id).then(details => {
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
          if (result) {
            setTitle(result.title);
            this.article = result;
          }
        })
      })
      .catch(err => {
        console.error(err)
      })
    },
    renderComments () {
      var gitment = new Gitment({
        owner: gitmentConfig.owner,
        repo: gitmentConfig.repo,
        oauth: gitmentConfig.oauth,
        theme: gitmentConfig.theme
      })
      gitment.render(document.getElementById('comments'))
    }
  }
}
</script>

<style>
.markdown-content {
  overflow: auto;
}
#post-markdown a {
  color: #42b983;
  font-weight: 600;
  word-break: break-all;
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
.markdown-content h3 {
  margin: 1em 0 .8em;
  font-size: 1.3em;
  padding-bottom: .3em;
  border-bottom: 1px solid #ddd;
}
.markdown-content h4 {
  margin: 1em 0 .8em;
  font-size: 1.2em;
}
.markdown-content h4:before {
  content: "#";
  color: #42b983;
  margin-right: 5px;
  font-size: 1.2em;
  font-weight: 700;
}
.markdown-content blockquote {
  margin: 1em 0;
  padding-left: 20px;
  border-left: 4px solid #42b983;
}
.markdown-content ul {
  overflow: auto;
  margin: 20px 0;
}
.markdown-content img {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 20px auto;
}
.markdown-content strong {
  color: #42b983;
}
#markdown-content pre {
  background: #f8f8f8;
  padding: 15px 10px;
  border-radius: 2px;
}
.tags > span {
  font-size: .8em;
  font-weight: 600;
}
#comments {
  margin-top: 30px;
}
</style>


