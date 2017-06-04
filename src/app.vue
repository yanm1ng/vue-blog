<template>
  <div id="app">
    <v-header :current="$route.path"></v-header>
    <v-loading :loading="loading"></v-loading>
    <router-view :loading="loading" @handleLoading="handleLoading"></router-view>
    <v-top></v-top>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleLoading() {
      var isLoading = this.loading
      if (isLoading) {
        setTimeout(() => {
          this.loading = false
        }, 800)
      } else {
        this.loading = true
      }
    }
  },
  watch: {
    '$route': function(from, to) {
      this.loading = false
    }
  }
}
</script>

<style>
@import '~highlight.js/styles/tomorrow.css';
@import './assets/css/app.css';
</style>
