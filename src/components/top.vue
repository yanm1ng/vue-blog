<template>
  <div class="scroll-top" :class="{ 'show': isShow }" @click="smoothScroll()">
    <img :src="images.top" class="top-arrow" />
  </div>
</template>

<script>
import top from '@/assets/images/top.png'

export default {
  name: 'top',
  data() {
    return {
      images: {
        top
      },
      isShow: false
    }
  },
  methods: {
    onScroll() {
      var scrollTop = document.body.scrollTop;
      this.isShow = (scrollTop > 100);
    },
    smoothScroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(this.smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style scoped>
.scroll-top {
  cursor: pointer;
  opacity: 0;
  position: fixed;
  box-sizing: border-box;
  right: 2em;
  bottom: 80px;
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: #42b983;
  border-radius: 20px;
  transition: opacity .5s ease;
}
.show {
  opacity: 1;
}
.top-arrow {
  width: 30px;
  height: 30px;
}
</style>

