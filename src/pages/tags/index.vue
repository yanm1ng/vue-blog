<template>
  <main class="app-body">
    <section class="tags-list" v-for="n in 3" :key="n">
      <h3 class="tags-name">Vue</h3>
      <ul class="tags-articles">
        <router-link to="" tag="li" v-for="n in 3" :key="n">Vue源码详解:compile,link,依赖,批处理一网打尽，全解析!</router-link>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'tags'
}
</script>

<style scoped>
.tags-name {
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
  font-size: 15px;
  padding-left: 1em;
}
.tags-articles li {
  margin: 10px 0;
}
</style>


