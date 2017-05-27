<template>
  <footer class="app-footer">
    <p class="copyright">&copy 2017-{{ date }} | Proudly powered by <a href="https://cn.vuejs.org" target="_blank">Vue.js</a></p>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.app-footer {
  padding: 1em 0;
  margin: 0 auto;
  max-width: 850px;
  border-top: 1px solid #e5e5e5;
  text-align: center;
}
.copyright {
  color: #7f8c8d;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .copyright {
    font-size: 12px;
  }
}
</style>

