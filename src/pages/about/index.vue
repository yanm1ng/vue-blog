<template>
  <main class="app-body">
    <div class="about-page">
      <h3 class="about-me">关于我</h3>
      <ul class="intro-list">
        <li><span class="not">985、211大学</span> 计算机大三学生</li>
        <li>希望自己能做出点小成绩</li>
      </ul>
    </div>
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
.about-page {
  margin-left: 1em;
  margin-right: 1em;
}
.about-me {
  font-size: 1.4em;
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
  font-size: 1.1em;
}
.intro-list li {
  padding: 5px 0;
}
.not {
  text-decoration: line-through;
}
</style>

