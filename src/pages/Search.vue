<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common'
export default {
  name: 'search',
  components: {
    CommonHeader
  },
  data() {
    return {
      title: '搜索商家'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~style/mixins.scss";
@import "~style/variables.scss";
</style>
