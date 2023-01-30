<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common'

export default {
  name: 'List',
  components: {
    CommonHeader
  },
  data() {
    return {
      title: '列表页面'
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