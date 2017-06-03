<template>
  <div class="guide-pager" v-if="show">
    <router-link :to="prev" :class="{ 'visible' : prev == '' }"><span class="page-arrow">←</span> Prev</router-link>
    <router-link :to="next" :class="{ 'visible' : next == '' }">Next <span class="page-arrow">→</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    show() {
      const { total, pageSize } = this;
      return (total > pageSize);
    },
    next() {
      const { total, current, pageSize } = this;
      const hasNext = (total - current * pageSize) > 0;
      return hasNext ? `/page/${current + 1}` : '';
    },
    prev() {
      const { current } = this;
      return (current > 1) ? `/page/${current - 1}` : '';
    }
  }
}
</script>

<style scoped>
.guide-pager {
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
.page-arrow {
  color: #34495e;
}
.visible {
  visibility: hidden;
}
</style>


