<template>
  <article class="app-body" id="post-markdown">
    <h1>标题标题标题</h1>
    <p class="post-date">2017-04-15 12:38</p>
    <p v-html="articleHtml" id="markdown-content"></p>
    <div class="post-tags">
      <span>Tags:</span>
      <code>vue</code>
      <code>react</code>
    </div>
  </article>
</template>

<script>
import { markdown } from '@/filters/'

export default {
  name: 'posts',
  data() {
    return {
      article: '### Marked in \n\n > asasasasasasa browser Rendered by **marked**. \n\n ## aaksajsk \n\n #### aaaaaa'
    }
  },
  computed: {
    articleHtml() {
      return markdown(this.article)
    }
  }
}
</script>

<style>
#post-markdown h1 {
  margin: .6em 0;
  font-size: 1.8em;
}
#post-markdown .post-date {
  color: #7f8c8d;
  font-size: 12px;
  margin: 10px 0;
}
#post-markdown h2 {
  margin: 1em 0 .8em;
  padding-bottom: .3em;
  border-bottom: 1px solid #ddd;
}
#post-markdown h3 {
  margin: 1em 0 .8em;
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
.post-tags {
  margin: 15px 0;
}
.post-tags > span {
  font-size: .8em;
  font-weight: 600;
}
</style>


