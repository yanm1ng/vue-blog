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
      loading: true
    }
  },
  methods: {
    handleLoading() {
      var isLoading = this.loading
      if (isLoading) {
        setTimeout(() => {
          this.loading = !isLoading
        }, 800)
      } else {
        this.loading = !isLoading
      }
    }
  }
}
</script>

<style>
@import '~prismjs/themes/prism.css';
body, ol, ul, form, p {
  margin: 0;
}
body a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
}
.fade {
  opacity: 0;
}
.app-body {
  padding: 75px 2em 30px 2em;
  margin: 0 auto;
  height: 100%;
  max-width: 750px;
  position: relative;
  transition: opacity .2s;
}
.tags {
  margin: 15px 0;
}
span.tag-code {
  font-family: 'Roboto Mono', Monaco, courier, monospace;
  font-size: 0.8em;
  background-color: #f8f8f8;
  color: #e96900;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
}
.hidden {
  display: none;
}
</style>
