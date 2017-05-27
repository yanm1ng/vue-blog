<template>
  <div id="app">
    <v-header :current="$route.path"></v-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <v-top></v-top>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'vux-pop-out'
    }
  }
}
</script>

<style>
body, ol, ul, form, p {
  margin: 0;
}
body a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  cursor: pointer;
}
code, pre {
  font-family: 'Roboto Mono', Monaco, courier, monospace;
  font-size: 0.8em;
  background-color: #f8f8f8;
  -webkit-font-smoothing: initial;
  -moz-osx-font-smoothing: initial;
}
code {
  color: #e96900;
  padding: 3px 5px;
  margin: 0 2px;
  border-radius: 2px;
  white-space: nowrap;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.app-body {
  padding: 75px 2em 30px 2em;
  margin: 0 auto;
  height: 100%;
  max-width: 750px;
  position: relative;
}
</style>
