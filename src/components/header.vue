<template>
  <div class="app-header">
    <header class="header-container">
      <a class="home-link" href="/">
        <img class="logo" :src="images.logo" />
        <span>yanm1ng</span>
      </a>
      <ul class="right-list">
        <li class="list-item" v-for="(item, index) in links" :key="index">
          <router-link class="item-link" :class="{ 'active': current === item.link }" :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
      <img class="menu" :src="images.menu" @click="openMenu()" />
    </header>
    <div class="menu-mask" :class="{ 'open': opened }">
      <ul>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
import menu from '@/assets/images/menu.png'

export default {
  name: 'header',
  props: {
    current: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      images: {
        logo,
        menu
      },
      links: [
        { name: '文章', link: '/' },
        { name: '标签', link: '/tags' },
        { name: '关于我', link: '/about' }
      ],
      opened: false,
    }
  },
  methods: {
    openMenu() {
      this.opened = !this.opened
    }
  }
}
</script>

<style scoped>
.app-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 4px rgba(0,0,0,.25);
}
.header-container {
  max-width: 850px;
  height: 40px;
  padding: 10px 60px;
  position: relative;
  z-index: 200;
}
.logo {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.home-link {
  display: flex;
  align-items: center;
  float: left;
}
.right-list {
  list-style: none;
  float: right;
  padding: 0;
}
.list-item {
  display: inline-block;
  margin: 0 8px;
}
.item-link {
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: #34495e;
  padding-bottom: 3px;
}
.item-link:hover {
  border-bottom: 3px solid #42b983;
}
.active {
  border-bottom: 3px solid #42b983;
}
.menu {
  display: none;
  float: right;
  width: 24px;
  height: 24px;
  margin-top: 8px;
}
.menu-mask {
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 99;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  background: #f6f6f6;
  -webkit-transition: max-height .5s ease;
  transition: max-height .5s ease;
}
.open {
  max-height: 99px;
  transition-delay: 0s;
}
@media screen and (max-width: 480px) {
  .app-header {
    position: fixed;
  }
  .header-container {
    padding: 10px 20px;
    position: relative;
  }
  .right-list {
    display: none;
  }
  .menu {
    display: block;
  }
}
</style>
