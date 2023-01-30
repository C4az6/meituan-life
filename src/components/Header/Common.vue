<template>
  <div class="header">
    <back-ward></back-ward>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import BackWard from './sub/BackWard.vue'
export default {
  name: 'CommonHeader',
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default: '美团生活'
    }
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
  position: relative;
  @include flex-row;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;
  h1 {
    font-size: 0.18rem;
  }
}
</style>