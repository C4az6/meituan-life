<template>
  <div class="container">
    <div class="wrapper">
      <home-header></home-header>
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/Header/Home'

export default {
  name: 'Index',
  components: {
    HomeHeader
  },
  data() {
    return {
      title: '美团生活通'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";

.wrapper {
  .header {
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    h1 {
      font-size: 0.18rem;
    }
  }
}
</style>