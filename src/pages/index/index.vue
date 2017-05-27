<template>
  <main class="app-body">
    <article v-for="n in 10">
      <h2 class="article-head">
        <router-link to="/posts/11">标题标题标题</router-link>
      </h2>
      <p class="article-date">2017-04-15 12:38</p>
      <div class="article-tags">
        <code>vue</code>
        <code>react</code>
      </div>
      <div class="article-summary">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      <router-link class="more" to="/posts/11">read more</router-link>
    </article>
    <div class="guide-pager">
      <router-link to="/prev"><span class="page-arrow">←</span> Prev</router-link>
      <router-link to="/next">Next <span class="page-arrow">→</span></router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
h2.article-head {
  font-size: 1.4em;
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
.article-tags {
  margin: 10px 0;
}
.article-tags > a {
  cursor: pointer;
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


