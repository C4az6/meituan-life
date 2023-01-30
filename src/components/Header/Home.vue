<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './sub/CitySelector.vue'
import FalseInput from './sub/FalseInput.vue'
export default {
  name: 'HomeHeader',
  components: {
    CitySelector,
    FalseInput
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";
.header {
  display: flex;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>