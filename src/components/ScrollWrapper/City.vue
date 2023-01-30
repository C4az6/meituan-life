<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list-index></city-list-index>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CurrentCity from './CityList/CurrentCity.vue';
import CityListIndex from './CityList/Index.vue'
export default {
  name: "CityScrollWrapper",
  components: {
    CurrentCity,
    CityListIndex
  },
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