<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body, ol, ul, form {
  margin: 0;
}
body a {
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
  cursor: pointer;
}
</style>
