<template>
  <main class="app-body">
    <h3 class="about-me">关于我</h3>
    <ul class="intro-list">
      <li><span class="not">985、211大学</span> 计算机大三学生</li>
      <li>希望自己能做出点小成绩</li>
    </ul>
  </main>
</template>

<script>
import { blogConfig } from '@/config/'
import { setTitle } from '@/utils/'

export default {
  name: 'about',
  created () {
    setTitle(blogConfig.title);
  }
}
</script>

<style scoped>
.about-me {
  position: relative;
}
.about-me:before {
  content: "#";
  color: #42b983;
  position: absolute;
  left: -.7em;
  top: -2px;
  font-size: 1.2em;
  font-weight: 700;
}
.intro-list {
  padding: 1em;
  font-size: 15px;
}
.not {
  text-decoration: line-through;
}
</style>

