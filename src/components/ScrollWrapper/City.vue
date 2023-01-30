<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: "CityScrollWrapper",
  data() {
    return {}
  },
  mounted() {
    // 初始化 better-scroll 节点
    this.scroll = new BetterScroll(this.$refs.wrapper);


  }
}
</script>

<style lang="scss" scoped>
</style>