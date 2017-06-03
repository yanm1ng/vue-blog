<template>
  <article>
    <h2 class="article-head">
      <router-link :to="`/posts/${article.id}`">{{ article.title }}</router-link>
    </h2>
    <p class="article-date">{{ article.date }}</p>
    <div class="tags">
      <span class="tag-code" v-for="tag in article.tags" :key="Math.random()">{{ tag }}</span>
    </div>
    <div class="article-summary">{{ article.summary }}</div>
    <router-link class="more" :to="`/posts/${article.id}`">read more</router-link>
  </article>
</template>

<script>
export default {
  name: 'article',
  props: {
    article: {
      type: Object,
      default: {}
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
  font-size: 16px;
  margin: 20px 0;
}
.more {
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .article-summary {
    font-size: 15px;
  }
}
</style>


