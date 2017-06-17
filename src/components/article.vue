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
    <router-link class="more" :to="`/posts/${article.id}`">Read more</router-link>
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
  font-size: 1.6em;
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
  font-size: 0.9em;
  margin: 10px 0;
}
.article-summary {
  margin: 10px 0;
}
.more {
  font-weight: 600;
}
</style>


